'use client'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechVentures",
      title: "CEO",
      text: "Ummay delivered exceptional multi-platform API integrations that exceeded all expectations. Her attention to OAuth security and automation made everything smooth and reliable.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "GrowthScale",
      title: "Founder",
      text: "Working with Ummay on our automation system was a game-changer. The workflows she built saved us 30+ hours per week. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Parker",
      company: "FinFlow",
      title: "Head of Operations",
      text: "The AI-powered invoice and accounting system Ummay developed is outstanding. Clean architecture, perfect error handling, and it just works flawlessly.",
      rating: 5,
    },
  ]

  const MAX_STARS = 5

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Customers Say</h2>
          <p className="text-xl" style={{ color: '#7a6040' }}>Real feedback from amazing people I've worked with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx}>
              {/* Glass card */}
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '20px',
                  padding: '28px 24px',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,140,0,0.15)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                {/* Row: avatar + content */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>

                  {/* Avatar */}
                  <div style={{
                    width: '56px', height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '20px', fontWeight: '800',
                    color: 'rgba(255,255,255,0.9)',
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2)',
                  }}>
                    {testimonial.name.charAt(0)}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    {/* Stars */}
                    <div style={{ marginBottom: '10px' }}>
                      {[...Array(MAX_STARS)].map((_, i) => (
                        <span
                          key={i}
                          style={{
                            fontSize: '18px',
                            color: i < testimonial.rating ? '#f59e0b' : 'rgba(255,255,255,0.3)',
                          }}
                        >★</span>
                      ))}
                    </div>

                    {/* Review text */}
                    <p style={{ fontSize: '14px', lineHeight: '1.7', color: '#5a3800' }}>
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Reviewer name + role */}
                    <p style={{ fontStyle: 'italic', color: '#f97316', fontWeight: '600', marginTop: '10px' }}>
                      {testimonial.name}
                    </p>
                    <p style={{ fontSize: '12px', color: '#7a4500' }}>
                      {testimonial.title}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Speech bubble tail */}
              <div style={{
                width: 0, height: 0,
                borderLeft: '20px solid transparent',
                borderRight: '20px solid transparent',
                borderTop: '20px solid rgba(255,255,255,0.08)',
                marginLeft: '32px',
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
