import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' },
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('home')

  useEffect(() => {
    const sectionIds = navItems.map(({ id }) => id)
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveHash(id)
        },
        { rootMargin: '-80px 0px -70% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-4 z-50 px-4"
    >
      {/* Desktop nav */}
      <nav
        className="hidden sm:flex max-w-max mx-auto px-8 py-3.5 items-center gap-8 rounded-full"
        style={{ background: '#1a1a1a' }}
      >
        {navItems.map(({ id, label }, idx) => (
          <motion.a
            key={id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * idx, duration: 0.4 }}
            href={`#${id}`}
            className={`text-sm font-medium transition-colors leading-none tracking-wide ${
              activeHash === id || (activeHash === '' && id === 'home')
                ? 'text-[#e85d26] font-semibold'
                : 'text-white/80 hover:text-[#e85d26]'
            }`}
          >
            {label}
          </motion.a>
        ))}
      </nav>

      {/* Mobile nav */}
      <div className="sm:hidden flex items-center justify-between max-w-full px-2">
        <button
          type="button"
          className="ml-auto inline-flex items-center justify-center rounded-full p-3"
          style={{ background: '#1a1a1a', border: 'none' }}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            id="mobile-nav"
            className="sm:hidden mt-2 mx-auto rounded-2xl px-6 py-4 flex flex-col gap-1"
            style={{ background: '#1a1a1a', maxWidth: '100%' }}
          >
            {navItems.map(({ id, label }, idx) => (
              <motion.a
                key={id}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * idx, duration: 0.25 }}
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors py-2.5 border-b last:border-b-0 ${
                  activeHash === id || (activeHash === '' && id === 'home')
                    ? 'text-[#e85d26] font-semibold'
                    : 'text-white/80 hover:text-[#e85d26]'
                }`}
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
