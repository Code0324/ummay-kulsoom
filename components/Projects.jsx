'use client'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Luxe Living - Real Estate",
      description: "Modern real estate platform with property listings, advanced search filters, and agent management system.",
      tags: ["Next.js", "Google Maps", "MongoDB", "Tailwind"],
      category: "Next.js",
      icon: "fas fa-house",
      gradient: "from-orange-400 to-red-400",
      video: "/videos/Luxe-Living.mp4"
    },
    {
      id: 2,
      title: "FoodTuck - Restaurant Platform",
      description: "Complete restaurant management system with online ordering, delivery tracking, and kitchen dashboard.",
      tags: ["Next.js", "React", "Firebase", "Stripe"],
      category: "Next.js",
      icon: "fas fa-utensils",
      gradient: "from-indigo-400 to-purple-400",
      video: "/videos/Foodtuck.mp4"
    },
    {
      id: 3,
      title: "Home Appliances E-Commerce",
      description: "Full-featured e-commerce platform for home appliances with detailed specs, reviews, and inventory management.",
      tags: ["Next.js", "MongoDB", "Razorpay", "Node.js"],
      category: "Next.js",
      icon: "fas fa-plug",
      gradient: "from-blue-400 to-cyan-400",
      video: "/videos/home-appliances.mp4"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern portfolio website built with Next.js, Tailwind CSS, featuring responsive design and smooth animations.",
      tags: ["Next.js", "React", "Tailwind", "CSS"],
      category: "Frontend",
      icon: "fas fa-palette",
      gradient: "from-pink-400 to-rose-400",
      video: "/videos/Portfolio-css (1).mp4"
    },
    {
      id: 5,
      title: "Real Estate Platform",
      description: "Property listing and management platform with advanced search, property details, and Google Maps integration.",
      tags: ["Next.js", "Google Maps", "MongoDB", "Cloudinary"],
      category: "Next.js",
      icon: "fas fa-building",
      gradient: "from-cyan-400 to-blue-500",
      video: "/videos/real-estate.mp4"
    },
    {
      id: 6,
      title: "Resume Builder",
      description: "Interactive resume builder tool with templates, real-time preview, and PDF export functionality.",
      tags: ["React", "Next.js", "Tailwind", "jsPDF"],
      category: "Frontend",
      icon: "fas fa-file-pdf",
      gradient: "from-red-400 to-pink-500",
      video: "/videos/resume-builder.mp4"
    },
    {
      id: 7,
      title: "Calculator Application",
      description: "Advanced calculator web application with scientific functions and modern user interface.",
      tags: ["React", "JavaScript", "Tailwind", "HTML/CSS"],
      category: "Frontend",
      icon: "fas fa-calculator",
      gradient: "from-green-400 to-emerald-500",
      video: "/videos/calculator.mp4"
    },
    {
      id: 8,
      title: "AI Integration System",
      description: "Claude Code & OpenAI SDK integration for intelligent automation and AI-powered features.",
      tags: ["OpenAI", "Claude", "Node.js", "Next.js"],
      category: "AI",
      icon: "fas fa-brain",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 9,
      title: "n8n Workflow Automation",
      description: "No-code automation workflows with n8n integration for business process automation.",
      tags: ["n8n", "Webhooks", "Integration", "Automation"],
      category: "Automation",
      icon: "fas fa-gears",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 10,
      title: "Lovable Projects",
      description: "Interactive and engaging frontend projects built with modern React and Tailwind CSS.",
      tags: ["React", "Tailwind", "Lovable", "JavaScript"],
      category: "Frontend",
      icon: "fas fa-heart",
      gradient: "from-red-400 to-pink-500"
    },
    {
      id: 11,
      title: "Replit Projects",
      description: "Various coding projects and educational tools built and hosted on Replit platform.",
      tags: ["JavaScript", "Python", "React", "Replit"],
      category: "Dev Tools",
      icon: "fas fa-code",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      id: 12,
      title: "CLI Tools & Qwen Gemini",
      description: "Command-line tools and integration with Qwen, Gemini, and other LLM APIs.",
      tags: ["CLI", "Qwen", "Gemini", "Node.js"],
      category: "Tools",
      icon: "fas fa-terminal",
      gradient: "from-slate-500 to-gray-600"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">A collection of projects spanning e-commerce, AI, automation, and more</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card-hover rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div className={`bg-gradient-to-br ${project.gradient} h-48 flex items-center justify-center`}>
                <i className={`${project.icon} text-6xl text-white opacity-70`}></i>
              </div>
              <div className="p-6">
                <span className="inline-block text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-purple-600 font-bold hover:text-pink-600 transition">
                  View Project <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
