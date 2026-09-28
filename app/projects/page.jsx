'use client'

import { useState } from 'react'
import { projects, projectCategories } from '@/lib/siteData'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <main>
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">All Projects</h1>
            <p className="text-xl text-gray-600">Explore my complete portfolio of work</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {projectCategories.map(cat => (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {filteredProjects.map((project, i) => {
              const hasUrl = project.url && project.url !== '#'
              const Tag = hasUrl ? 'a' : 'div'
              return (
                <Tag
                  key={project.title}
                  className="crystal-tile"
                  {...(hasUrl ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <div className="crystal-frame crystal-glass" style={{ height: '300px' }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      style={{ objectFit: 'contain', padding: '12px' }}
                    />
                    <span
                      className="crystal-shine"
                      style={{ animationDelay: `${(i % 6) * 1.1}s` }}
                    />
                  </div>
                  <div className="crystal-floor" style={{ marginTop: '6px' }} />
                  <div className="pt-4 text-center">
                    <span className="inline-block text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'rgba(200,100,0,0.95)' }}>
                      {project.category}
                    </span>
                    <h3 className="crystal-title text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {project.tags.map((t) => (
                        <span key={t} className="text-xs text-gray-700 px-2 py-1 rounded-full font-medium" style={{ border: '1px solid rgba(255,140,0,0.3)' }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Tag>
              )
            })}
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
