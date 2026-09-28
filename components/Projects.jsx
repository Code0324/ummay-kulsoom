'use client'

import Link from 'next/link'
import { projects } from '@/lib/siteData'

function ProjectTile({ project, index, hidden }) {
  const hasUrl = project.url && project.url !== '#'
  const Tag = hasUrl ? 'a' : 'div'

  return (
    <div style={{ paddingRight: '36px' }} aria-hidden={hidden || undefined}>
      <Tag
        className="crystal-tile"
        style={{ width: '300px' }}
        {...(hasUrl ? { href: project.url, target: '_blank', rel: 'noopener noreferrer', tabIndex: hidden ? -1 : undefined } : {})}
      >
        <div className="crystal-frame crystal-glass" style={{ height: '300px' }}>
          <img
            src={project.image}
            alt={hidden ? '' : project.title}
            width={300}
            height={300}
            loading="eager"
            decoding="async"
            style={{ objectFit: 'contain', padding: '10px' }}
          />
          <span
            className="crystal-shine"
            style={{ animationDelay: `${(index % 6) * 1.1}s` }}
          />
        </div>
        <div className="crystal-floor" style={{ marginTop: '6px' }} />
        <div style={{ textAlign: 'center', paddingTop: '8px' }}>
          <span style={{ display: 'block', fontSize: '11px', color: 'rgba(200,100,0,0.95)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '2px' }}>
            {project.category}
          </span>
          <h3 className="crystal-title" style={{ fontSize: '15px', fontWeight: 800, marginBottom: '4px' }}>
            {project.title}
          </h3>
          <p
            style={{
              fontSize: '12px',
              lineHeight: 1.5,
              color: 'rgba(26,10,0,0.6)',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {project.description}
          </p>
        </div>
      </Tag>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '60px 0' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px', padding: '0 24px' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '12px' }}>
          My Projects
        </h2>
        <p style={{ color: '#7a6040', fontSize: '1.1rem' }}>
          A collection spanning e-commerce, AI, automation, and more
        </p>
      </div>

      <div className="crystal-marquee" style={{ padding: '12px 0 20px' }}>
        <div className="crystal-track">
          {[...projects, ...projects].map((project, i) => (
            <ProjectTile
              key={`${project.title}-${i}`}
              project={project}
              index={i}
              hidden={i >= projects.length}
            />
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '28px' }}>
        <Link href="/projects" className="gradient-button inline-block">
          View All Projects →
        </Link>
      </div>
    </section>
  )
}
