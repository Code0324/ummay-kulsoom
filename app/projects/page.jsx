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
      category: "Next.js",
      icon: "fas fa-shopping-cart",
      gradient: "from-purple-400 to-pink-400"
    },
    {
      id: 2,
      title: "Q-Commerce Solution",
      description: "Quick commerce platform with real-time inventory, order tracking, and delivery management.",
      tags: ["Next.js", "Real-time", "Maps API", "PostgreSQL"],
      category: "Next.js",
      icon: "fas fa-truck-fast",
      gradient: "from-cyan-400 to-blue-400"
    },
    {
      id: 3,
      title: "Multi-Vendor Marketplace",
      description: "Scalable marketplace connecting multiple sellers with customers, vendor dashboards, and analytics.",
      tags: ["Next.js", "Node.js", "AWS", "Socket.io"],
      category: "Next.js",
      icon: "fas fa-store",
      gradient: "from-green-400 to-teal-400"
    },
    {
      id: 4,
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, property details, and agent management system.",
      tags: ["Next.js", "Google Maps", "MongoDB", "Cloudinary"],
      category: "Next.js",
      icon: "fas fa-house",
      gradient: "from-orange-400 to-red-400"
    },
    {
      id: 5,
      title: "Food/Restaurant System",
      description: "Complete restaurant management with online ordering, delivery tracking, and kitchen dashboard.",
      tags: ["Next.js", "React", "Firebase", "Stripe"],
      category: "Next.js",
      icon: "fas fa-utensils",
      gradient: "from-indigo-400 to-purple-400"
    },
    {
      id: 6,
      title: "Fashion E-Commerce",
      description: "Modern clothing store with product filters, size guides, wishlists, and integrated inventory.",
      tags: ["Next.js", "GraphQL", "Shopify", "Tailwind"],
      category: "Next.js",
      icon: "fas fa-shirt",
      gradient: "from-pink-400 to-rose-400"
    },
    {
      id: 7,
      title: "Home Appliances Shop",
      description: "E-commerce platform for home appliances with detailed specs, reviews, and warranty tracking.",
      tags: ["Next.js", "MongoDB", "Razorpay", "Node.js"],
      category: "Next.js",
      icon: "fas fa-plug",
      gradient: "from-blue-400 to-cyan-400"
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

  const categories = ['All', 'Next.js', 'AI', 'Automation', 'Frontend', 'Dev Tools', 'Tools']

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
