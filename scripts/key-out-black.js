/*
 * Keys out near-black backgrounds from mockup images, replacing them with
 * real alpha transparency, and resizes them for web delivery. Only pixels
 * close to pure black become transparent; everything else is untouched.
 *
 * Usage:
 *   node scripts/key-out-black.js services   # public/images/services -> services-web (black kept, 4:5 JPG)
 *   node scripts/key-out-black.js projects   # public/images/project (in place)
 */
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const IMAGES = path.join(__dirname, '..', 'public', 'images')

// max(r,g,b) <= BLACK_T -> transparent; >= FEATHER_T -> opaque; soft edge between.
const BLACK_T = 18
const FEATHER_T = 55
const MAX_SIZE = 900

const SERVICES = {
  'ai-agents': 'AI Agent.png',
  'ai-chatbots': 'chatbot.png',
  'business-automation': 'ai-automation.jfif',
  'ecommerce': 'ECommerce.png',
  'mobile-apps': 'mob-app.jfif',
  'custom-dashboards': 'custom-dashboard.jfif',
  'crm': 'crm.png',
  'n8n-automation': 'n8n-automation.png',
  'portfolio': 'portfolio.jfif',
  'saas-ai': 'saas-ai.png',
  'ui-ux-design': 'uiux.jfif',
  'telegram-bot': 'telegram-bot.png',
}

// Optional second pass: any dark pixel connected to the image border is
// backdrop (studio gradients/smoke that aren't pure black), so drop it too.
const FLOOD_T = 70

// Marks pixels reachable from the border through pixels with max(r,g,b) <= FLOOD_T.
function borderConnectedDark(data, width, height) {
  const bg = new Uint8Array(width * height)
  const stack = []
  const dark = p => Math.max(data[p * 4], data[p * 4 + 1], data[p * 4 + 2]) <= FLOOD_T
  const push = p => { if (!bg[p] && dark(p)) { bg[p] = 1; stack.push(p) } }
  for (let x = 0; x < width; x++) { push(x); push((height - 1) * width + x) }
  for (let y = 0; y < height; y++) { push(y * width); push(y * width + width - 1) }
  while (stack.length) {
    const p = stack.pop()
    const x = p % width
    if (x > 0) push(p - 1)
    if (x < width - 1) push(p + 1)
    if (p >= width) push(p - width)
    if (p < width * (height - 1)) push(p + width)
  }
  return bg
}

async function keyOut(src, dest, { flood = false } = {}) {
  const { data, info } = await sharp(src)
    .resize(MAX_SIZE, MAX_SIZE, { fit: 'inside', withoutEnlargement: true })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true })
  const { width, height } = info

  const bg = flood ? borderConnectedDark(data, width, height) : null
  const alpha = Buffer.alloc(width * height)

  for (let p = 0, i = 0; p < alpha.length; p++, i += 4) {
    const maxC = Math.max(data[i], data[i + 1], data[i + 2])
    const a = maxC <= BLACK_T ? 0 : maxC >= FEATHER_T ? 1 : (maxC - BLACK_T) / (FEATHER_T - BLACK_T)
    alpha[p] = bg && bg[p] ? 0 : Math.round(data[i + 3] * a)
  }

  // Soften the cut edge slightly so there's no jagged outline.
  const smooth = await sharp(alpha, { raw: { width, height, channels: 1 } })
    .blur(0.8)
    .extractChannel(0)
    .raw()
    .toBuffer()
  for (let p = 0; p < smooth.length; p++) data[p * 4 + 3] = Math.min(alpha[p], smooth[p])

  // Dissolve the floor reflection into a soft mirror fade (bottom of image).
  if (flood) {
    const fadeStart = Math.round(height * 0.86)
    for (let y = fadeStart; y < height; y++) {
      const k = 1 - (y - fadeStart) / (height - fadeStart)
      for (let x = 0; x < width; x++) {
        const i = (y * width + x) * 4 + 3
        data[i] = Math.round(data[i] * k * k)
      }
    }
  }

  const tmp = dest + '.tmp.png'
  await sharp(data, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toFile(tmp)
  fs.renameSync(tmp, dest)
  console.log('processed', path.basename(dest))
}

async function main() {
  const target = process.argv[2]
  if (target === 'services') {
    // Services keep their black backdrop (the acrylic displays are designed
    // on black) — just resize and compress for web.
    const outDir = path.join(IMAGES, 'services-web')
    fs.mkdirSync(outDir, { recursive: true })
    for (const [slug, file] of Object.entries(SERVICES)) {
      await sharp(path.join(IMAGES, 'services', file))
        .resize(640, 800, { fit: 'cover', position: 'centre' })
        .flatten({ background: '#000' })
        .jpeg({ quality: 84, mozjpeg: true })
        .toFile(path.join(outDir, `${slug}.jpg`))
      console.log('processed', `${slug}.jpg`)
    }
  } else if (target === 'projects') {
    const dir = path.join(IMAGES, 'project')
    for (const file of fs.readdirSync(dir).filter(f => f.toLowerCase().endsWith('.png'))) {
      await keyOut(path.join(dir, file), path.join(dir, file), { flood: true })
    }
  } else {
    console.error('Usage: node scripts/key-out-black.js <services|projects>')
    process.exit(1)
  }
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
