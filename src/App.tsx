import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { About } from '@/components/About'
import { Experience } from '@/components/Experience'
import { Education } from '@/components/Education'
import { Testimonials } from '@/components/Testimonials'
import { Footer } from '@/components/Footer'

export default function App() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToHome = () => {
    window.location.hash = '#home'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-16 -left-12 h-56 w-56 rounded-full bg-accent-yellow/70 border-2 border-slate-800"></div>
        <div className="absolute top-36 right-10 h-40 w-40 rounded-3xl bg-accent-pink/80 border-2 border-slate-800 rotate-12"></div>
        <div className="absolute bottom-16 left-1/3 h-44 w-44 rounded-full bg-accent-mint/70 border-2 border-slate-800"></div>
      </div>
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Education />
        <Testimonials />
      </main>
      <Footer />

      {showScrollButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToHome}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-slate-800 bg-violet-500 text-white shadow-[4px_4px_0_0_#1e293b] hover:bg-violet-600 transition-colors cursor-pointer"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 14l5-5 5 5z" />
          </svg>
        </motion.button>
      )}
    </div>
  )
}
