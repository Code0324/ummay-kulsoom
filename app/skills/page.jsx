import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'Skills - Ummay Kulsoom',
  description: 'Technical skills and expertise of Ummay Kulsoom',
}

export default function SkillsPage() {
  return (
    <main>
      <div className="pt-24"></div>
      <Skills />
      <Contact />
    </main>
  )
}
