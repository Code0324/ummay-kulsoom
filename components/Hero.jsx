'use client'

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div>
            <p className="text-2xl text-gray-600 mb-2">Hey there! I'm</p>
            <h1 className="text-6xl sm:text-7xl font-black mb-4">
              <span className="gradient-text">Ummay Kulsoom</span>
            </h1>
            <h2 className="text-2xl text-gray-700 font-semibold mb-4">
              Full-Stack & AI Native Developer
            </h2>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            Specialized in building modern web applications, e-commerce platforms, and AI-powered systems. Expert in Next.js, React, Node.js, and cloud integrations.
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-3">
            <span className="tech-badge px-4 py-2 rounded-full text-sm font-medium text-gray-700">Next.js</span>
            <span className="tech-badge px-4 py-2 rounded-full text-sm font-medium text-gray-700">React</span>
            <span className="tech-badge px-4 py-2 rounded-full text-sm font-medium text-gray-700">Node.js</span>
            <span className="tech-badge px-4 py-2 rounded-full text-sm font-medium text-gray-700">MongoDB</span>
            <span className="tech-badge px-4 py-2 rounded-full text-sm font-medium text-gray-700">Tailwind</span>
            <span className="tech-badge px-4 py-2 rounded-full text-sm font-medium text-gray-700">n8n</span>
            <span className="tech-badge px-4 py-2 rounded-full text-sm font-medium text-gray-700">OpenAI</span>
            <span className="tech-badge px-4 py-2 rounded-full text-sm font-medium text-gray-700">Claude</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="gradient-button text-white px-8 py-4 rounded-lg font-bold text-lg"
            >
              <i className="fas fa-briefcase mr-2"></i> View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-50 transition"
            >
              <i className="fas fa-comment mr-2"></i> Let's Talk
            </button>
          </div>
        </div>

        {/* Right Column - Profile Section */}
        <div className="flex flex-col items-center space-y-8">
          {/* Orbiting Profile Picture */}
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Orbiting Icons Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Outer Orbit */}
              <div className="absolute w-80 h-80 rounded-full border-2 border-dashed border-purple-300 opacity-50"></div>
              <div className="absolute w-96 h-96 rounded-full border-2 border-dashed border-pink-300 opacity-30"></div>

              {/* Orbiting Icons */}
              <div className="animate-orbit absolute w-80 h-80">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <i className="fab fa-node-js text-lg"></i>
                </div>
                <div className="absolute top-1/4 right-0 transform translate-x-2 w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <i className="fab fa-react text-lg"></i>
                </div>
                <div className="absolute bottom-1/4 right-0 transform translate-x-2 w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <i className="fab fa-python text-lg"></i>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <i className="fas fa-database text-lg"></i>
                </div>
                <div className="absolute bottom-1/4 left-0 transform -translate-x-2 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <i className="fas fa-cog text-lg"></i>
                </div>
                <div className="absolute top-1/4 left-0 transform -translate-x-2 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <i className="fab fa-github text-lg"></i>
                </div>
              </div>
            </div>

            {/* Center Profile Image */}
            <img
              src="/images/profile-400x400.svg"
              alt="Ummay Kulsoom"
              className="w-64 h-64 rounded-full object-cover border-8 border-white shadow-2xl animate-pulse-glow z-10"
            />
          </div>

          {/* Stats Bubbles */}
          <div className="grid grid-cols-3 gap-4 w-full mt-8">
            <div className="stat-card rounded-lg p-4 text-center">
              <div className="text-3xl font-bold gradient-text">20+</div>
              <div className="text-sm text-gray-600 mt-1">Projects</div>
            </div>
            <div className="stat-card rounded-lg p-4 text-center">
              <div className="text-3xl font-bold gradient-text">15+</div>
              <div className="text-sm text-gray-600 mt-1">Clients</div>
            </div>
            <div className="stat-card rounded-lg p-4 text-center">
              <div className="text-3xl font-bold gradient-text">4+</div>
              <div className="text-sm text-gray-600 mt-1">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
