'use client'

const socials = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/codecraftai811',
    img: '/images/social/instagram-3d.jpg',
    shadow: 'rgba(220,39,67,0.4)',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@codecraftai',
    img: '/images/social/youtube-3d.jpg',
    shadow: 'rgba(255,0,0,0.4)',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/ummay-kulsoom-rising-star-⭐-b53bb71a8',
    img: '/images/social/linkedin-3d.jpg',
    shadow: 'rgba(0,119,181,0.4)',
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@codecraftai',
    img: '/images/social/tiktok-3d.jpg',
    shadow: 'rgba(0,0,0,0.4)',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/codecraftai',
    img: '/images/social/facebook-3d.jpg',
    shadow: 'rgba(66,103,178,0.4)',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/codecrafftai324',
    img: '/images/social/twitter-3d.jpg',
    shadow: 'rgba(29,161,242,0.4)',
  },
]

export default function SocialIcons({ size = 56 }) {
  return (
    <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap' }}>
      {socials.map(s => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          title={s.name}
          style={{
            display: 'block',
            width: size,
            height: size,
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
            boxShadow: `0 8px 24px ${s.shadow}, 0 4px 8px rgba(0,0,0,0.1)`,
            transition: 'transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.25s',
            textDecoration: 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'scale(1.18) translateY(-5px)'
            e.currentTarget.style.boxShadow = `0 20px 40px ${s.shadow}, 0 8px 16px rgba(0,0,0,0.15)`
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)'
            e.currentTarget.style.boxShadow = `0 8px 24px ${s.shadow}, 0 4px 8px rgba(0,0,0,0.1)`
          }}
        >
          <img
            src={s.img}
            alt={s.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </a>
      ))}
    </div>
  )
}
