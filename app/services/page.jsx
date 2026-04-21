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
          <h1 className="text-5xl font-bold mb-6 glossy-text" style={{color:'#111827'}}>Services</h1>
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
            <h2 className="text-4xl font-bold mb-4 glossy-text" style={{color:'#111827'}}>Why Choose My Services</h2>
            <p className="text-xl text-gray-600">What sets my work apart</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            maxWidth: '900px',
            margin: '0 auto',
          }}>
            {[
              '/images/services/web mentainence.png',
              '/images/services/web-development.png',
              '/images/services/chatbot.png',
              '/images/services/ai automation.png',
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Why ${i + 1}`}
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 glossy-text" style={{color:'#111827'}}>My Process</h2>
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
          <h2 className="text-4xl font-bold mb-6 glossy-text" style={{color:'#111827'}}>Ready to Get Started?</h2>
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
