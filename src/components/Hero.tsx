import { motion } from 'framer-motion'
import { Bio } from '@/data/constants.js'
import CarlArgente from '@/images/carlArgente.jpg'

export function Hero() {
  const primaryRole = Bio.roles?.[0] ?? 'Full Stack Developer'
  const ctaItems = [
    { label: 'View My Work', href: '#projects', variant: 'primary' },
    { label: 'View Resume', href: Bio.resume, variant: 'secondary' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-14 w-72 h-72 bg-accent-yellow/60 rounded-full border-2 border-slate-800"></div>
        <div className="absolute bottom-20 right-16 w-64 h-64 bg-accent-pink/50 rounded-[30%] border-2 border-slate-800 rotate-6"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center"
      >
        <div>
          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-7xl font-extrabold text-slate-800 mb-6 leading-tight"
          >
            {Bio.name.split(' ').slice(0, 2).join(' ')}
            <br />
            <span className="text-violet-600">{primaryRole}</span>
          </motion.h1>


          <motion.div
            variants={itemVariants}
            className="flex gap-4 flex-wrap"
          >
            {ctaItems.map((cta) => (
              <motion.a
                key={cta.label}
                href={cta.href}
                target={cta.href.startsWith('http') ? '_blank' : undefined}
                rel={cta.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`candy-btn ${
                  cta.variant === 'primary'
                    ? 'bg-violet-500 text-white'
                    : 'bg-white text-slate-800 hover:bg-amber-300'
                }`}
              >
                {cta.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative min-h-[420px] flex items-center justify-center"
        >
          <div className="absolute w-[78%] h-[86%] bg-yellow-300 border-2 border-slate-800 rounded-2xl -rotate-2 left-10 top-6"></div>
          <div className="absolute w-[78%] h-[86%] bg-pink-300 border-2 border-slate-800 rounded-2xl rotate-2 left-16 top-10"></div>
          <div className="relative w-[78%] h-[86%] bg-white border-2 border-slate-800 rounded-2xl overflow-hidden shadow-[6px_6px_0_0_#1E293B]">
            <img
              src={CarlArgente}
              alt="Carl Argente"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-10 lg:col-span-2 flex justify-center"
        >
          <svg
            className="w-7 h-7 text-violet-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
