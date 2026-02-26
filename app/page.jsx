'use client'

import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(true)
  }, [])

  const featuredProjects = [
    {
      id: 1,
      title: "FoodTuck - Restaurant Platform",
      description: "Complete restaurant management system with online ordering, delivery tracking, and kitchen dashboard.",
      tags: ["Next.js", "React", "Firebase", "Stripe"],
      category: "Next.js",
      icon: "fas fa-utensils",
      gradient: "from-indigo-400 to-purple-400",
      video: "/videos/Foodtuck.mp4"
    },
    {
      id: 2,
      title: "Home Appliances E-Commerce",
      description: "Full-featured e-commerce platform for home appliances with detailed specs, reviews, and inventory management.",
      tags: ["Next.js", "MongoDB", "Razorpay", "Node.js"],
      category: "Next.js",
      icon: "fas fa-plug",
      gradient: "from-blue-400 to-cyan-400",
      video: "/videos/home-appliances.mp4"
    },
    {
      id: 3,
      title: "Luxe Living - Real Estate",
      description: "Modern real estate platform with property listings, advanced search filters, and agent management system.",
      tags: ["Next.js", "Google Maps", "MongoDB", "Tailwind"],
      category: "Next.js",
      icon: "fas fa-house",
      gradient: "from-orange-400 to-red-400",
      video: "/videos/Luxe-Living.mp4"
    },
  ]

  const softSkills = [
    { name: "Problem Solving", percentage: 95, color: "from-purple-500 to-pink-500" },
    { name: "Code Quality", percentage: 94, color: "from-blue-500 to-cyan-500" },
    { name: "Adaptability", percentage: 96, color: "from-green-500 to-emerald-500" },
    { name: "Communication", percentage: 92, color: "from-orange-500 to-red-500" },
  ]

  return (
    <main>
      <Hero />

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Check out some of my recent work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
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
                    {project.tags.slice(0, 2).map((tag) => (
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

          <div className="text-center">
            <Link
              href="/projects"
              className="gradient-button text-white px-8 py-4 rounded-lg font-bold text-lg inline-block"
            >
              View All Projects <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="stat-card rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold gradient-text">20+</div>
              <p className="text-gray-600 mt-2">Projects Completed</p>
            </div>
            <div className="stat-card rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold gradient-text">15+</div>
              <p className="text-gray-600 mt-2">Happy Clients</p>
            </div>
            <div className="stat-card rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold gradient-text">12+</div>
              <p className="text-gray-600 mt-2">Technologies</p>
            </div>
            <div className="stat-card rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold gradient-text">4+</div>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Strengths Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Strengths</h2>
            <p className="text-xl text-gray-600">Professional competencies and soft skills</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {softSkills.map((skill, idx) => {
              const getGradientColors = () => {
                if (skill.color.includes('purple')) return { start: '#a855f7', end: '#ec4899', name: 'purple-pink' }
                if (skill.color.includes('blue')) return { start: '#3b82f6', end: '#06b6d4', name: 'blue-cyan' }
                if (skill.color.includes('green')) return { start: '#10b981', end: '#059669', name: 'green-emerald' }
                return { start: '#f97316', end: '#ef4444', name: 'orange-red' }
              }
              const colors = getGradientColors()
              const circumference = 2 * Math.PI * 54
              const offset = circumference - (skill.percentage / 100) * circumference

              return (
                <div key={idx} className="flex flex-col items-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 120 120"
                      style={{ filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.1))' }}
                    >
                      <circle cx="60" cy="60" r="54" fill="none" stroke="#f0f0f0" strokeWidth="10" />
                      <defs>
                        <linearGradient id={`home-gradient-${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={colors.start} />
                          <stop offset="100%" stopColor={colors.end} />
                        </linearGradient>
                      </defs>
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke={`url(#home-gradient-${idx})`}
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={animated ? offset : circumference}
                        style={{
                          transitionDuration: '2000ms',
                          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                          filter: `drop-shadow(0 0 12px ${colors.start}80)`,
                          transition: 'stroke-dashoffset 2000ms cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                        {animated ? skill.percentage : 0}%
                      </span>
                    </div>
                  </div>
                  <p className="mt-6 text-center font-semibold text-gray-900">{skill.name}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services showViewAll={true} limit={4} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Build Something Great?</h2>
          <p className="text-xl text-gray-600 mb-8">Let's collaborate on your next project. Get in touch today!</p>
          <Link
            href="/contact"
            className="gradient-button text-white px-8 py-4 rounded-lg font-bold text-lg inline-block"
          >
            Start a Project <i className="fas fa-paper-plane ml-2"></i>
          </Link>
        </div>
      </section>
    </main>
  )
}
