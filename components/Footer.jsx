'use client'

import Link from 'next/link'
import SocialIcons from './SocialIcons'

export default function Footer() {
  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="footer-grid grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="logo-link navbar-logo" style={{
              display: 'inline-block',
              marginBottom: '8px',
            }}>
              Ummay Kulsoom
            </Link>
            <p style={{color:'#7a3200', fontSize:'14px', textShadow:'0 1px 3px rgba(255,210,140,0.8), 0 -1px 1px rgba(50,15,0,0.25), 1px 0 2px rgba(255,190,90,0.45)'}}>Full-Stack &amp; AI Developer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg" style={{color:'#6b2800', WebkitTextFillColor:'#6b2800', textShadow:'0 1px 3px rgba(255,210,140,0.9), 0 -1px 1px rgba(50,15,0,0.35), 1px 0 2px rgba(255,200,100,0.55)'}}>Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href:'/', label:'Home' },
                { href:'/about', label:'About' },
                { href:'/projects', label:'Projects' },
                { href:'/contact', label:'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} style={{color:'#7a3200', WebkitTextFillColor:'#7a3200', fontWeight:600, transition:'color 0.2s', textShadow:'0 1px 3px rgba(255,210,140,0.8), 0 -1px 1px rgba(50,15,0,0.25), 1px 0 2px rgba(255,190,90,0.45)'}}
                    onMouseEnter={e => { e.currentTarget.style.color='#FF8C00'; e.currentTarget.style.WebkitTextFillColor='#FF8C00' }}
                    onMouseLeave={e => { e.currentTarget.style.color='#7a3200'; e.currentTarget.style.WebkitTextFillColor='#7a3200' }}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="font-bold mb-4 text-lg" style={{color:'#6b2800', WebkitTextFillColor:'#6b2800', textShadow:'0 1px 3px rgba(255,210,140,0.9), 0 -1px 1px rgba(50,15,0,0.35), 1px 0 2px rgba(255,200,100,0.55)'}}>Specialties</h4>
            <ul className="space-y-2">
              {['Next.js Development','E-Commerce Platforms','AI Integration','Automation & n8n'].map(s => (
                <li key={s}><span style={{color:'#7a3200', fontWeight:500, textShadow:'0 1px 3px rgba(255,210,140,0.8), 0 -1px 1px rgba(50,15,0,0.25), 1px 0 2px rgba(255,190,90,0.45)'}}>{s}</span></li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4 text-lg" style={{color:'#6b2800', WebkitTextFillColor:'#6b2800', textShadow:'0 1px 3px rgba(255,210,140,0.9), 0 -1px 1px rgba(50,15,0,0.35), 1px 0 2px rgba(255,200,100,0.55)'}}>Follow Me</h4>
            <SocialIcons size={52} />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t pt-6" style={{borderColor:'rgba(255,140,0,0.2)'}}>
          <p className="text-center" style={{color:'#7a3200', fontSize:'13px', fontWeight:500, textShadow:'0 1px 3px rgba(255,210,140,0.8), 0 -1px 1px rgba(50,15,0,0.25), 1px 0 2px rgba(255,190,90,0.45)'}}>
            © 2026 Ummay Kulsoom. All rights reserved. | Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
