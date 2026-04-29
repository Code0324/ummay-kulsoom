const serviceImages = [
  { src: '/images/services/web mentainence.png',  alt: 'Web Maintenance Service' },
  { src: '/images/services/web-development.png',  alt: 'Web Development Service' },
  { src: '/images/services/chatbot.png',           alt: 'AI Chatbot Service' },
  { src: '/images/services/ai automation.png',     alt: 'AI Automation Service' },
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '80px 24px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>
        My Services
      </h2>
      <div className="services-grid">
        {serviceImages.map((item, i) => (
          <div key={i} style={{
            borderRadius: '16px',
            overflow: 'hidden',
            aspectRatio: '16/9',
            background: '#ede0ce',
          }}>
            <img
              src={item.src}
              alt={item.alt}
              width={435}
              height={245}
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
