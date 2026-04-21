import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackgroundBlobs from '@/components/BackgroundBlobs'

export const metadata = {
  title: 'Ummay Kulsoom - Full-Stack Developer',
  description: 'Portfolio of Ummay Kulsoom - Full-Stack Web Developer specializing in Next.js, React, and AI integrations',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <BackgroundBlobs />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
