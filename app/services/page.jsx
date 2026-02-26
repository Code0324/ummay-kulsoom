import Services from '@/components/Services'
import Link from 'next/link'

export const metadata = {
  title: 'Services - Ummay Kulsoom',
  description: 'Comprehensive services offered by Ummay Kulsoom including UI/UX Design, AI Automation, E-Commerce, Marketplaces, Startup Solutions, Chatbot Development, and API Integration',
}

export default function ServicesPage() {
  return (
    <main>
      {/* Page Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to transform your business ideas into powerful, scalable products. From beautiful UI/UX to intelligent AI automation, I deliver end-to-end services for success.
          </p>
        </div>
      </section>

      {/* Services Component */}
      <Services showViewAll={false} limit={null} />

      {/* Why Choose Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose My Services</h2>
            <p className="text-xl text-gray-600">What sets my work apart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Turnaround</h3>
              <p className="text-gray-600">Rapid development without compromising quality. Get your product to market quickly.</p>
            </div>

            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">
                <i className="fas fa-headset"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Full Support</h3>
              <p className="text-gray-600">Ongoing support and maintenance. Your success is my responsibility.</p>
            </div>

            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl">
                <i className="fas fa-code"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Production Ready</h3>
              <p className="text-gray-600">Clean, scalable code built for growth. No technical debt.</p>
            </div>

            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center text-white text-2xl">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Results Driven</h3>
              <p className="text-gray-600">Focus on business outcomes. Metrics and analytics that matter.</p>
            </div>

            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white text-2xl">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Reliable</h3>
              <p className="text-gray-600">Security-first approach. Your data and your users are protected.</p>
            </div>

            <div className="glass-effect rounded-2xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500 to-red-500 flex items-center justify-center text-white text-2xl">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Stay ahead with latest technologies and best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Process</h2>
            <p className="text-xl text-gray-600">How we work together</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discovery</h3>
              <p className="text-gray-600">Understand your goals, challenges, and vision</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600">Create detailed roadmap and technical architecture</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">Build with regular updates and feedback</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Launch</h3>
              <p className="text-gray-600">Deploy and optimize for success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's discuss which service is right for your project</p>
          <Link
            href="/contact"
            className="gradient-button text-white px-8 py-4 rounded-lg font-bold text-lg inline-block"
          >
            Schedule a Consultation <i className="fas fa-calendar ml-2"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
