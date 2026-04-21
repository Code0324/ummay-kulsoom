const serviceImages = [
  '/images/services/web mentainence.png',
  '/images/services/web-development.png',
  '/images/services/chatbot.png',
  '/images/services/ai automation.png',
]

export default function Services() {
  return (
    <section id="services" style={{ padding: '80px 24px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '48px' }}>
        My Services
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        {serviceImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Service ${i + 1}`}
            style={{
              width: '100%',
              height: '220px',
              objectFit: 'cover',
              borderRadius: '16px',
              display: 'block',
            }}
          />
        ))}
      </div>
    </section>
  )
}
