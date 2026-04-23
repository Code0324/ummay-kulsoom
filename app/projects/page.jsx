'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce store with product catalog, cart, checkout, and payment integration.",
      tags: ["Next.js", "React", "MongoDB", "Stripe"],
      category: "Full-Stack",
      icon: "fas fa-shopping-cart",
      gradient: "from-purple-400 to-pink-400",
      image: "/images/project/ECommerce.png",
    },
    {
      id: 2,
      title: "Q-Commerce Solution",
      description: "Quick commerce platform with real-time inventory, order tracking, and delivery management.",
      tags: ["Next.js", "Real-time", "Maps API", "PostgreSQL"],
      category: "Full-Stack",
      icon: "fas fa-truck-fast",
      gradient: "from-cyan-400 to-blue-400",
      image: "/images/project/Q-Commerce Solution.png",
    },
    {
      id: 3,
      title: "Multi-Vendor Marketplace",
      description: "Scalable marketplace connecting multiple sellers with customers, vendor dashboards, and analytics.",
      tags: ["Next.js", "Node.js", "AWS", "Socket.io"],
      category: "Full-Stack",
      icon: "fas fa-store",
      gradient: "from-green-400 to-teal-400"
    },
    {
      id: 4,
      title: "Luxe Living - Real Estate",
      description: "Property listing platform with advanced search, property details, and agent management system.",
      tags: ["Next.js", "Google Maps", "MongoDB", "Cloudinary"],
      category: "Full-Stack",
      icon: "fas fa-house",
      gradient: "from-orange-400 to-red-400",
      image: "/images/project/Luxe Living - Real Estate.png",
    },
    {
      id: 5,
      title: "FoodTuck - Restaurant Platform",
      description: "Complete restaurant management with online ordering, delivery tracking, and kitchen dashboard.",
      tags: ["Next.js", "React", "Firebase", "Stripe"],
      category: "Full-Stack",
      icon: "fas fa-utensils",
      gradient: "from-indigo-400 to-purple-400",
      image: "/images/project/foodTuck Resturant Plateform.png",
    },
    {
      id: 6,
      title: "Fashion E-Commerce",
      description: "Modern clothing store with product filters, size guides, wishlists, and integrated inventory.",
      tags: ["Next.js", "GraphQL", "Shopify", "Tailwind"],
      category: "Full-Stack",
      icon: "fas fa-shirt",
      gradient: "from-pink-400 to-rose-400"
    },
    {
      id: 7,
      title: "Home Appliances Shop",
      description: "E-commerce platform for home appliances with detailed specs, reviews, and warranty tracking.",
      tags: ["Next.js", "MongoDB", "Razorpay", "Node.js"],
      category: "Full-Stack",
      icon: "fas fa-plug",
      gradient: "from-blue-400 to-cyan-400",
      image: "/images/project/Home Appliences.png",
    },
    {
      id: 15,
      title: "Portfolio Website",
      description: "Personal developer portfolio showcasing projects, skills, and experience with a modern design.",
      tags: ["Next.js", "React", "Tailwind", "CSS"],
      category: "Full-Stack",
      icon: "fas fa-palette",
      gradient: "from-pink-400 to-rose-400",
      image: "/images/project/Portfolio Website.png",
    },
    {
      id: 16,
      title: "Resume Builder",
      description: "Interactive resume builder that generates professional PDF resumes from user-provided details.",
      tags: ["React", "PDF", "Next.js", "Tailwind"],
      category: "Full-Stack",
      icon: "fas fa-file-pdf",
      gradient: "from-red-400 to-pink-500",
      image: "/images/project/Resume Builder app.jpeg",
    },
    {
      id: 17,
      title: "Calculator Application",
      description: "Clean and responsive calculator app with standard and scientific computation modes.",
      tags: ["React", "JavaScript", "CSS"],
      category: "Full-Stack",
      icon: "fas fa-calculator",
      gradient: "from-yellow-400 to-orange-400",
      image: "/images/project/calculator app.png",
    },
    {
      id: 18,
      title: "Karachi Port Vessel Tracker",
      description: "Real-time vessel tracking system for Karachi port, monitoring ship movements, arrivals, and departures.",
      tags: ["Next.js", "Maps API", "Real-time", "Node.js"],
      category: "Full-Stack",
      icon: "fas fa-ship",
      gradient: "from-sky-400 to-blue-600",
      image: "/images/project/Karchi port vessel tracker.jpeg",
    },
    {
      id: 8,
      title: "Frontend Development Showcase",
      description: "A curated showcase of responsive frontend interfaces and UI components built with modern frameworks and design systems.",
      tags: ["React", "Next.js", "Tailwind", "CSS"],
      category: "Full-Stack",
      icon: "fas fa-layer-group",
      gradient: "from-pink-400 to-rose-500",
      video: "/videos/Frontend.mp4"
    },
    {
      id: 9,
      title: "Claude Code Projects",
      description: "AI-assisted software projects developed using Claude Code CLI, leveraging agentic AI for rapid end-to-end development workflows.",
      tags: ["Claude Code", "AI", "Node.js", "TypeScript"],
      category: "Agentic AI",
      icon: "fas fa-brain",
      gradient: "from-purple-500 to-pink-500",
      video: "/videos/Claude_Code_s_Projects.mp4"
    },
    {
      id: 10,
      title: "n8n Automation Workflows",
      description: "Business process automation pipelines built with n8n, connecting apps and services through visual workflow automation and webhooks.",
      tags: ["n8n", "Webhooks", "API Integration", "Automation"],
      category: "Automation",
      icon: "fas fa-gears",
      gradient: "from-green-500 to-emerald-500",
      video: "/videos/n8n_projects.mp4"
    },
    {
      id: 11,
      title: "Lovable AI Projects",
      description: "Full-stack web applications rapidly built using Lovable's AI-powered development platform with modern UI and backend integration.",
      tags: ["Lovable", "React", "Supabase", "Tailwind"],
      category: "Full-Stack",
      icon: "fas fa-heart",
      gradient: "from-red-400 to-pink-500",
      video: "/videos/Lovable_s_Projects.mp4"
    },
    {
      id: 13,
      title: "OpenAI SDK Portfolio",
      description: "AI-powered portfolio projects built using the OpenAI SDK, showcasing GPT integrations and intelligent automation features.",
      tags: ["OpenAI", "GPT", "Node.js", "Next.js"],
      category: "Agentic AI",
      icon: "fas fa-microchip",
      gradient: "from-teal-400 to-emerald-500",
      video: "/videos/OpenAI_SDK_Portfolio.mp4"
    },
  ]

  const categories = ['All', 'Agentic AI', 'Automation', 'Full-Stack']

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <main>
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">All Projects</h1>
            <p className="text-xl text-gray-600">Explore my complete portfolio of work</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat
                    ? 'gradient-button text-white'
                    : 'border-2 border-purple-300 text-gray-700 hover:border-purple-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card-hover rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                {project.video ? (
                  <video
                    src={project.video}
                    className="w-full h-48 object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className={`bg-gradient-to-br ${project.gradient} h-48 flex items-center justify-center`}>
                    <i className={`${project.icon} text-6xl text-white opacity-70`}></i>
                  </div>
                )}
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
                  <Link href={`/projects/${project.id}`} className="text-purple-600 font-bold hover:text-pink-600 transition">
                    View Project <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No projects found in this category.</p>
            </div>
          )}

        </div>
      </div>
    </main>
  )
}
