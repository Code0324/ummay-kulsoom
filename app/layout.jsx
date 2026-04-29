import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackgroundBlobs from '@/components/BackgroundBlobs'

export const metadata = {
  title: 'Ummay Kulsoom - Full-Stack Developer',
  description: 'Portfolio of Ummay Kulsoom - Full-Stack Web Developer specializing in Next.js, React, and AI integrations',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" as="image" href="/images/ummay-profile.png" />
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          as="style"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
        />
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
