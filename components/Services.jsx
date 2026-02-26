'use client'

import Link from 'next/link'

export default function Services({ showViewAll = false, limit = null }) {
  const services = [
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that users love",
      icon: "fas fa-palette",
      gradient: "from-pink-400 to-red-500",
      bullets: [
        "User research & wireframing",
        "Modern, clean visual design",
        "Prototyping & user testing",
        "Accessibility & mobile-first"
      ]
    },
    {
      title: "AI Automation",
      description: "Intelligent systems that work smarter, not harder",
      icon: "fas fa-brain",
      gradient: "from-purple-400 to-pink-500",
      bullets: [
        "Invoice & accounting automation",
        "Intelligent error recovery & retry",
        "AI-driven insights and decisions",
        "Custom business logic & rules engines"
      ]
    },
    {
      title: "E-Commerce",
      description: "Complete online stores built for conversions",
      icon: "fas fa-shopping-cart",
      gradient: "from-blue-400 to-purple-500",
      bullets: [
        "Product catalog & inventory management",
        "Secure payment gateway integration",
        "Shopping cart & checkout optimization",
        "Order tracking & customer management"
      ]
    },
    {
      title: "Marketplaces",
      description: "Multi-vendor platforms connecting buyers and sellers",
      icon: "fas fa-store",
      gradient: "from-cyan-400 to-blue-500",
      bullets: [
        "Vendor onboarding & management",
        "Commission & payment distribution",
        "Seller dashboards & analytics",
        "Dispute resolution & trust system"
      ]
    },
    {
      title: "Startup Solutions",
      description: "MVP & growth infrastructure for new businesses",
      icon: "fas fa-rocket",
      gradient: "from-yellow-400 to-orange-500",
      bullets: [
        "Rapid MVP development & deployment",
        "Scalable backend infrastructure",
        "Analytics & user tracking setup",
        "Cloud optimization & cost management"
      ]
    },
    {
      title: "Chatbot Development",
      description: "AI-powered conversational interfaces for engagement",
      icon: "fas fa-comments",
      gradient: "from-green-400 to-cyan-500",
      bullets: [
        "Natural language processing",
        "Multi-platform deployment",
        "Context-aware responses",
        "Integration with business systems"
      ]
    },
    {
      title: "API Integration",
      description: "Seamless connections between your tools and platforms",
      icon: "fas fa-plug",
      gradient: "from-indigo-400 to-purple-500",
      bullets: [
        "Facebook, Instagram, LinkedIn integrations",
        "Meta Graph API & OAuth management",
        "n8n & automation workflows",
        "Third-party SaaS & MCP server sync"
      ]
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            What I Offer
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg">
            Complete solutions from UI/UX design to AI automation, e-commerce platforms, marketplaces, and API integrations. Building powerful tools for startups and growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, limit).map((service, idx) => (
            <div
              key={idx}
              className="glass-effect rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-purple-100/50 group"
            >
              {/* Icon */}
              <div
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white text-4xl shadow-lg group-hover:scale-110 transition-transform`}
              >
                <i className={`${service.icon}`}></i>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center mb-6">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-3 text-gray-700 mb-8">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-purple-500 mr-3 font-bold">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link
                href="#projects"
                className="block text-purple-600 font-medium text-center hover:text-purple-800 transition"
              >
                Learn More <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Services Button */}
        {(showViewAll && limit) && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="gradient-button text-white px-8 py-4 rounded-lg font-bold text-lg inline-block"
            >
              More Services <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
