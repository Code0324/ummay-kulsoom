'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = parseInt(params.id)

  const allProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      shortDesc: "Full-featured e-commerce store",
      fullDesc: "A complete e-commerce platform with product catalog, shopping cart, secure checkout process, and multiple payment integration options including Stripe and PayPal. Features include inventory management, order tracking, customer reviews, and admin dashboard.",
      tags: ["Next.js", "React", "MongoDB", "Stripe", "Node.js"],
      category: "Next.js",
      icon: "fas fa-shopping-cart",
      gradient: "from-purple-400 to-pink-400",
      features: [
        "Product catalog with advanced filtering",
        "Shopping cart and checkout flow",
        "Multiple payment gateways",
        "Order management system",
        "Customer reviews and ratings",
        "Admin dashboard for inventory"
      ],
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe API", "JWT Authentication"],
      duration: "3 months",
      status: "Completed"
    },
    {
      id: 2,
      title: "Q-Commerce Solution",
      shortDesc: "Quick commerce platform",
      fullDesc: "A fast and reliable quick commerce platform designed for on-demand delivery. Features real-time inventory updates, GPS tracking for deliveries, and an optimized mobile-first experience for rapid order placement and fulfillment.",
      tags: ["Next.js", "Real-time", "Maps API", "PostgreSQL"],
      category: "Next.js",
      icon: "fas fa-truck-fast",
      gradient: "from-cyan-400 to-blue-400",
      features: [
        "Real-time inventory management",
        "GPS tracking for deliveries",
        "Quick checkout (under 2 minutes)",
        "Multiple delivery slots",
        "Live order tracking",
        "Payment confirmation"
      ],
      technologies: ["Next.js", "PostgreSQL", "Socket.io", "Google Maps API", "Redis"],
      duration: "4 months",
      status: "Completed"
    },
    {
      id: 3,
      title: "Multi-Vendor Marketplace",
      shortDesc: "Marketplace platform",
      fullDesc: "A scalable marketplace connecting multiple sellers with customers. Includes vendor onboarding, commission management, seller analytics, dispute resolution, and secure payment distribution.",
      tags: ["Next.js", "Node.js", "AWS", "Socket.io"],
      category: "Next.js",
      icon: "fas fa-store",
      gradient: "from-green-400 to-teal-400",
      features: [
        "Vendor dashboard",
        "Commission tracking",
        "Seller analytics",
        "Dispute resolution",
        "Rating system",
        "Bulk order management"
      ],
      technologies: ["Next.js", "Node.js", "AWS", "Socket.io", "MongoDB"],
      duration: "5 months",
      status: "Completed"
    },
    {
      id: 4,
      title: "Real Estate Platform",
      shortDesc: "Property listing platform",
      fullDesc: "A comprehensive real estate platform with advanced property search, detailed listings, virtual tours, agent management, and automated valuation models.",
      tags: ["Next.js", "Google Maps", "MongoDB", "Cloudinary"],
      category: "Next.js",
      icon: "fas fa-house",
      gradient: "from-orange-400 to-red-400",
      features: [
        "Advanced property search",
        "Interactive map view",
        "Virtual property tours",
        "Agent management",
        "Property valuation",
        "Mortgage calculator"
      ],
      technologies: ["Next.js", "Google Maps API", "MongoDB", "Cloudinary", "Three.js"],
      duration: "6 months",
      status: "Completed"
    },
    {
      id: 5,
      title: "Food/Restaurant System",
      shortDesc: "Restaurant management system",
      fullDesc: "An integrated platform for restaurant management including online ordering, real-time delivery tracking, kitchen management dashboard, and customer loyalty programs.",
      tags: ["Next.js", "React", "Firebase", "Stripe"],
      category: "Next.js",
      icon: "fas fa-utensils",
      gradient: "from-indigo-400 to-purple-400",
      features: [
        "Online ordering system",
        "Kitchen display system",
        "Real-time delivery tracking",
        "Menu management",
        "Loyalty program",
        "Reservation system"
      ],
      technologies: ["Next.js", "Firebase", "Stripe", "Socket.io", "React"],
      duration: "4 months",
      status: "Completed"
    },
    {
      id: 6,
      title: "Fashion E-Commerce",
      shortDesc: "Clothing e-store",
      fullDesc: "A modern fashion e-commerce platform with size guides, color variations, wishlists, and inventory management. Features AI-powered recommendations and seasonal collections.",
      tags: ["Next.js", "GraphQL", "Shopify", "Tailwind"],
      category: "Next.js",
      icon: "fas fa-shirt",
      gradient: "from-pink-400 to-rose-400",
      features: [
        "Product variations",
        "Size guides",
        "Wishlist functionality",
        "AI recommendations",
        "Seasonal collections",
        "Stock management"
      ],
      technologies: ["Next.js", "GraphQL", "Shopify API", "Tailwind CSS"],
      duration: "3 months",
      status: "Completed"
    },
    {
      id: 7,
      title: "Home Appliances Shop",
      shortDesc: "Appliances e-commerce",
      fullDesc: "An e-commerce platform specialized in home appliances with detailed technical specifications, warranty tracking, installation services, and after-sales support.",
      tags: ["Next.js", "MongoDB", "Razorpay", "Node.js"],
      category: "Next.js",
      icon: "fas fa-plug",
      gradient: "from-blue-400 to-cyan-400",
      features: [
        "Technical specifications",
        "Warranty management",
        "Installation booking",
        "Service tracking",
        "Expert reviews",
        "Comparison tools"
      ],
      technologies: ["Next.js", "MongoDB", "Razorpay", "Node.js"],
      duration: "3 months",
      status: "Completed"
    },
    {
      id: 8,
      title: "AI Integration System",
      shortDesc: "AI-powered automation",
      fullDesc: "An advanced system integrating multiple AI models including Claude, OpenAI, and custom ML models. Provides intelligent automation, content generation, and natural language processing capabilities.",
      tags: ["OpenAI", "Claude", "Node.js", "Next.js"],
      category: "AI",
      icon: "fas fa-brain",
      gradient: "from-purple-500 to-pink-500",
      features: [
        "Multi-model AI integration",
        "Natural language processing",
        "Content generation",
        "Image analysis",
        "Chat integration",
        "API management"
      ],
      technologies: ["OpenAI API", "Claude API", "Node.js", "Next.js", "Langchain"],
      duration: "3 months",
      status: "Completed"
    },
    {
      id: 9,
      title: "n8n Workflow Automation",
      shortDesc: "Workflow automation system",
      fullDesc: "A comprehensive automation platform using n8n for business process automation. Integrates multiple services and APIs for seamless data flow and automated workflows.",
      tags: ["n8n", "Webhooks", "Integration", "Automation"],
      category: "Automation",
      icon: "fas fa-gears",
      gradient: "from-green-500 to-emerald-500",
      features: [
        "Custom workflow builder",
        "Multi-service integration",
        "Error handling",
        "Webhook management",
        "Scheduling",
        "Monitoring dashboard"
      ],
      technologies: ["n8n", "Webhooks", "Node.js", "REST APIs"],
      duration: "2 months",
      status: "Completed"
    },
    {
      id: 10,
      title: "Lovable Projects",
      shortDesc: "Interactive UI projects",
      fullDesc: "A collection of beautiful and interactive frontend projects built with React and modern CSS. Features smooth animations, responsive design, and excellent user experience.",
      tags: ["React", "Tailwind", "Lovable", "JavaScript"],
      category: "Frontend",
      icon: "fas fa-heart",
      gradient: "from-red-400 to-pink-500",
      features: [
        "Responsive design",
        "Smooth animations",
        "Interactive components",
        "Accessible UI",
        "Modern styling",
        "Performance optimized"
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
      duration: "2 months",
      status: "Completed"
    },
    {
      id: 11,
      title: "Replit Projects",
      shortDesc: "Educational coding projects",
      fullDesc: "Various coding projects and interactive educational tools built and hosted on Replit. Includes tutorials, coding challenges, and practice projects.",
      tags: ["JavaScript", "Python", "React", "Replit"],
      category: "Dev Tools",
      icon: "fas fa-code",
      gradient: "from-amber-400 to-orange-500",
      features: [
        "Interactive coding environment",
        "Tutorial projects",
        "Challenge problems",
        "Collaborative editing",
        "Instant execution",
        "Code sharing"
      ],
      technologies: ["JavaScript", "Python", "React", "HTML/CSS"],
      duration: "1 month",
      status: "Completed"
    },
    {
      id: 12,
      title: "CLI Tools & Qwen Gemini",
      shortDesc: "Command-line tools",
      fullDesc: "Advanced command-line tools with integration to Qwen, Gemini, and other LLM APIs. Provides powerful automation capabilities for developers.",
      tags: ["CLI", "Qwen", "Gemini", "Node.js"],
      category: "Tools",
      icon: "fas fa-terminal",
      gradient: "from-slate-500 to-gray-600",
      features: [
        "Command-line interface",
        "Multi-LLM support",
        "Configuration management",
        "Error handling",
        "Logging system",
        "Plugin architecture"
      ],
      technologies: ["Node.js", "Qwen API", "Gemini API", "Commander.js"],
      duration: "2 months",
      status: "Completed"
    }
  ]

  const project = allProjects.find(p => p.id === projectId)

  if (!project) {
    return (
      <main>
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Project Not Found</h1>
          <Link href="/projects" className="text-purple-600 font-bold hover:text-pink-600 mt-4 inline-block">
            Back to Projects
          </Link>
        </div>
      </main>
    )
  }

  const relatedProjects = allProjects
    .filter(p => p.category === project.category && p.id !== project.id)
    .slice(0, 3)

  return (
    <main>
      {/* Project Hero */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/projects" className="text-purple-600 font-semibold hover:text-pink-600 mb-4 inline-block">
            <i className="fas fa-arrow-left mr-2"></i> Back to Projects
          </Link>

          <div className={`bg-gradient-to-br ${project.gradient} h-96 rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
            <i className={`${project.icon} text-8xl text-white opacity-70`}></i>
          </div>

          <h1 className="text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{project.fullDesc}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="stat-card rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Duration</p>
              <p className="text-2xl font-bold text-gray-900">{project.duration}</p>
            </div>
            <div className="stat-card rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Status</p>
              <p className="text-2xl font-bold gradient-text">{project.status}</p>
            </div>
            <div className="stat-card rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-1">Category</p>
              <p className="text-2xl font-bold text-gray-900">{project.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <i className="fas fa-check text-purple-600 mt-1"></i>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="tech-badge px-4 py-2 rounded-full text-sm font-medium text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">All Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relProject) => (
                <Link
                  key={relProject.id}
                  href={`/projects/${relProject.id}`}
                  className="card-hover rounded-2xl overflow-hidden shadow-lg border border-gray-200"
                >
                  <div className={`bg-gradient-to-br ${relProject.gradient} h-48 flex items-center justify-center`}>
                    <i className={`${relProject.icon} text-6xl text-white opacity-70`}></i>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{relProject.title}</h3>
                    <p className="text-gray-600 text-sm">{relProject.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Working Together?</h2>
          <p className="text-lg text-gray-600 mb-8">Let's discuss your project and create something amazing!</p>
          <Link
            href="/contact"
            className="gradient-button text-white px-8 py-4 rounded-lg font-bold text-lg inline-block"
          >
            Get in Touch <i className="fas fa-envelope ml-2"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
