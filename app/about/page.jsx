import About from '@/components/About'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'About Me - Ummay Kulsoom',
  description: 'Learn more about Ummay Kulsoom, a Full-Stack Developer from Karachi',
}

export default function AboutPage() {
  return (
    <main>
      <div className="pt-20"></div>
      <About />
      <Contact />
    </main>
  )
}
