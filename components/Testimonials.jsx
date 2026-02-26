'use client'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechVentures",
      title: "CEO",
      image: "SJ",
      text: "Ummay delivered exceptional multi-platform API integrations that exceeded all expectations. Her attention to OAuth security and automation made everything smooth and reliable.",
      rating: 5,
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "Michael Chen",
      company: "GrowthScale",
      title: "Founder",
      image: "MC",
      text: "Working with Ummay on our automation system was a game-changer. The workflows she built saved us 30+ hours per week. Highly recommended!",
      rating: 5,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Emily Parker",
      company: "FinFlow",
      title: "Head of Operations",
      image: "EP",
      text: "The AI-powered invoice and accounting system Ummay developed is outstanding. Clean architecture, perfect error handling, and it just works flawlessly.",
      rating: 5,
      color: "from-green-500 to-cyan-500"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Customers Say</h2>
          <p className="text-xl text-gray-600">Real feedback from amazing people I've worked with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/50"
            >
              {/* Stars */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg`}
                >
                  {testimonial.image}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
