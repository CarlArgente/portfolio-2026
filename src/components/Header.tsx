import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function Header() {
  const navItems = ['home', 'projects', 'about', 'experience', 'education', 'testimonials', 'contact']
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('')

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash.slice(1) || 'home')
    }
    
    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-3 z-50 px-4"
    >
      <nav className="pop-card max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4 bg-white/95 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-3 shrink-0"
        >
          <img src="/logo.svg" alt="CA" className="w-9 h-9" />
          <span className="font-display text-2xl font-extrabold text-slate-800">Find Carl</span>
        </motion.div>

        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center rounded-lg border-2 border-slate-800 p-2 text-slate-700 shrink-0"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isMenuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>

        <div className="hidden sm:flex gap-5">
          {navItems.map((item, idx) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              href={`#${item}`}
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold transition-colors leading-none ${
                activeHash === item || (activeHash === '' && item === 'home')
                  ? 'text-violet-700 font-bold'
                  : 'text-slate-700 hover:text-violet-700'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          id="mobile-nav"
          className="sm:hidden pop-card max-w-6xl mx-auto mt-2 px-4 sm:px-6 py-3 bg-white/95 backdrop-blur-sm flex flex-col gap-2"
        >
          {navItems.map((item, idx) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * idx, duration: 0.3 }}
              href={`#${item}`}
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm font-semibold transition-colors py-2 ${
                activeHash === item || (activeHash === '' && item === 'home')
                  ? 'text-violet-700 font-bold'
                  : 'text-slate-700 hover:text-violet-700'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}
