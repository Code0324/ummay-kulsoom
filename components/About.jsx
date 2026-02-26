'use client'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Photo & Badges */}
        <div className="space-y-6">
          <div className="relative">
            <img
              src="/images/profile-500x600.svg"
              alt="Ummay Kulsoom"
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 glass-effect rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold">
                  <i className="fas fa-rocket"></i>
                </div>
                <span className="font-semibold text-gray-800">Fast Learner</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center text-white font-bold">
                  <i className="fas fa-star"></i>
                </div>
                <span className="font-semibold text-gray-800">Quality Focused</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6 lg:mt-16">
          <div>
            <p className="text-purple-600 font-semibold text-lg mb-2">About Me</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ummay Kulsoom</h2>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">📍 Location</h3>
              <p className="text-gray-600">Nishter Road, Karachi</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">📱 Contact</h3>
              <p className="text-gray-600">0324 9208788</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">🎓 Education</h3>
              <p className="text-gray-600">Graduate of Karachi University</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed border-t-2 border-gray-200 pt-6">
            Full-Stack Developer with expertise in Next.js, React, and modern web technologies. Experienced in building scalable e-commerce platforms, marketplace solutions, and AI-integrated systems. Passionate about creating beautiful, functional web applications that solve real business problems.
          </p>

          {/* Projects Overview */}
          <div className="grid grid-cols-2 gap-4 pt-6 border-t-2 border-gray-200">
            <div className="stat-card rounded-lg p-4">
              <div className="text-2xl font-bold gradient-text">20+</div>
              <div className="text-sm text-gray-600 mt-1">Total Projects</div>
            </div>
            <div className="stat-card rounded-lg p-4">
              <div className="text-2xl font-bold gradient-text">15+</div>
              <div className="text-sm text-gray-600 mt-1">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
