'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Skills() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimated(true)
  }, [])

  const technicalSkills = [
    {
      title: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      description: "UI library"
    },
    {
      title: "Next.js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      description: "React framework"
    },
    {
      title: "Node.js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      description: "Server runtime"
    },
    {
      title: "Python",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      description: "Backend language"
    },
    {
      title: "MongoDB",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
      description: "NoSQL database"
    },
    {
      title: "PostgreSQL",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/PostgreSQL_15_Logo.svg",
      description: "SQL database"
    },
    {
      title: "Tailwind CSS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      description: "CSS framework"
    },
    {
      title: "TypeScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      description: "Type-safe JS"
    },
    {
      title: "Express",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      description: "Node framework"
    },
    {
      title: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
      description: "Web language"
    },
    {
      title: "Git",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
      description: "Version control"
    },
    {
      title: "Docker",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png",
      description: "Containerization"
    },
    {
      title: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      description: "Cloud platform"
    },
    {
      title: "Firebase",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
      description: "Backend service"
    },
    {
      title: "Vercel",
      logo: "https://www.svgrepo.com/download/306486/vercel.svg",
      description: "Deployment"
    },
    {
      title: "GitHub",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      description: "Code hosting"
    },
    {
      title: "OpenAI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/OpenAI_Logo.svg",
      description: "AI models"
    },
    {
      title: "OAuth",
      logo: "https://www.svgrepo.com/download/362242/oauth.svg",
      description: "Authentication"
    },
    {
      title: "n8n",
      logo: "https://n8n.io/n8n-logo.svg",
      description: "Workflow automation"
    },
    {
      title: "Meta API",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc_logo.svg",
      description: "Social API"
    },
  ]

  const softSkills = [
    { name: "Problem Solving", percentage: 95, color: "from-purple-500 to-pink-500" },
    { name: "Code Quality", percentage: 94, color: "from-blue-500 to-cyan-500" },
    { name: "Adaptability", percentage: 96, color: "from-green-500 to-emerald-500" },
    { name: "Communication", percentage: 92, color: "from-orange-500 to-red-500" },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">Technical stack and core competencies</p>
        </div>

        {/* Technical Skills - Logo Grid */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Technical Skills</h3>
          <p className="text-gray-600 mb-12">Technologies and tools I work with daily</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {technicalSkills.map((skill, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center"
              >
                {/* Skill Card */}
                <div className="w-full">
                  <div
                    className="h-32 rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 flex items-center justify-center cursor-pointer bg-white border border-gray-200 hover:border-purple-300"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.title}
                      className="w-20 h-20 object-contain"
                      loading="lazy"
                    />
                  </div>

                  {/* Skill Info */}
                  <div className="mt-4 text-center">
                    <h4 className="font-bold text-gray-900 text-sm md:text-base">{skill.title}</h4>
                    <p className="text-gray-600 text-xs md:text-sm mt-1">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills - Animated Circular Progress */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Core Strengths</h3>
          <p className="text-gray-600 mb-12">Professional competencies and soft skills</p>

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
                  {/* Circular Progress */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <svg
                      className="w-full h-full transform -rotate-90"
                      viewBox="0 0 120 120"
                      style={{
                        filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.1))'
                      }}
                    >
                      {/* Background circle */}
                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke="#f0f0f0"
                        strokeWidth="10"
                      />

                      {/* Animated progress circle with gradient */}
                      <defs>
                        <linearGradient
                          id={`gradient-${idx}`}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor={colors.start} />
                          <stop offset="100%" stopColor={colors.end} />
                        </linearGradient>
                      </defs>

                      <circle
                        cx="60"
                        cy="60"
                        r="54"
                        fill="none"
                        stroke={`url(#gradient-${idx})`}
                        strokeWidth="10"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={animated ? offset : circumference}
                        className="transition-all"
                        style={{
                          transitionDuration: '2000ms',
                          transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                          filter: `drop-shadow(0 0 12px ${colors.start}80)`
                        }}
                      />
                    </svg>

                    {/* Center percentage text - Animated counting */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                      >
                        {animated ? skill.percentage : 0}%
                      </span>
                    </div>
                  </div>

                  {/* Skill name */}
                  <p className="mt-6 text-center font-semibold text-gray-900">{skill.name}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Technology Categories */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technology Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Frontend",
                items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML/CSS"],
                icon: "fas fa-palette",
                color: "from-blue-500 to-cyan-500"
              },
              {
                category: "Backend",
                items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
                icon: "fas fa-server",
                color: "from-green-500 to-emerald-500"
              },
              {
                category: "APIs & Integrations",
                items: ["Meta Graph API", "OAuth", "OpenAI", "Claude", "n8n"],
                icon: "fas fa-plug",
                color: "from-purple-500 to-pink-500"
              },
              {
                category: "Platforms & Tools",
                items: ["AWS", "Vercel", "GitHub", "Docker", "Qwen/Gemini"],
                icon: "fas fa-tools",
                color: "from-orange-500 to-red-500"
              },
            ].map((tech, idx) => (
              <div key={idx} className="glass-effect rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${tech.color} flex items-center justify-center text-white mb-4`}>
                  <i className={`${tech.icon} text-lg`}></i>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">{tech.category}</h4>
                <ul className="space-y-2">
                  {tech.items.map((item, i) => (
                    <li key={i} className="text-gray-600 flex items-center text-sm">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fillProgress {
          from {
            stroke-dashoffset: 339.3;
            opacity: 0.3;
          }
          to {
            stroke-dashoffset: var(--dash-offset, 0);
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
