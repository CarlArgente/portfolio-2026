import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Bio } from '@/data/constants.js'

export function Hero() {
  const roles = Bio.roles ?? ['Full Stack Developer']
  const ctaItems = [
    { label: 'View My Work', href: '#projects', variant: 'primary' },
    { label: 'View Resume', href: Bio.resume, variant: 'secondary' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center"
      >
        <div>
          <motion.h1
            variants={itemVariants}
            className="font-display text-4xl md:text-5xl font-bold text-black mb-3 leading-tight"
          >
            {Bio.name.split(' ').slice(0, 2).join(' ')}
            <br />
            <span className="text-2xl md:text-3xl font-semibold text-black">
              I'm a{' '}
              <TypeAnimation
                sequence={roles.flatMap(role => [role, 1800])}
                wrapper="span"
                speed={50}
                deletionSpeed={70}
                repeat={Infinity}
                style={{ color: '#e85d26' }}
                cursor={true}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-black/60 text-base leading-relaxed mb-8 max-w-lg"
          >
            {Bio.description}
          </motion.p>

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
                className="candy-btn text-black"
              >
                {cta.label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="relative h-[600px]"
        >
          {/* Orange circle — right side, behind card. Left edge tucks under card right edge */}
          <div
            className="absolute rounded-full"
            style={{
              background: '#e85d26',
              width: '220px', height: '220px',
              right: '0', top: '38%',
              transform: 'translateY(-50%)',
              zIndex: 1,
            }}
          />

          {/* Peach card — covers left portion of orange circle */}
          <div
            className="absolute rounded-3xl"
            style={{
              background: '#fce8d5',
              top: '6%', bottom: '8%',
              left: '4%', right: '20%',
              zIndex: 2,
            }}
          />

          {/* Dot grid — top right corner */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: '2%', right: '4%',
              width: '130px', height: '130px',
              backgroundImage: 'radial-gradient(circle, rgba(232,93,38,0.55) 1.5px, transparent 1.5px)',
              backgroundSize: '10px 10px',
              zIndex: 3,
            }}
          />

          {/* Small orange ring — top left */}
          <div
            className="absolute rounded-full"
            style={{
              border: '2.5px solid #e85d26',
              width: '22px', height: '22px',
              left: '1%', top: '12%',
              zIndex: 3,
            }}
          />

          {/* Person image — overflows card top */}
          <img
            src="/hero_section_image.png"
            alt="Carl Argente"
            className="absolute"
            style={{
              height: '96%',
              width: 'auto',
              bottom: '4%',
              left: '38%',
              transform: 'translateX(-50%)',
              objectFit: 'contain',
              zIndex: 4,
            }}
          />

          {/* Experience badge — near hand/laptop area */}
          <div
            className="absolute flex items-center gap-3 bg-white rounded-2xl px-4 py-3"
            style={{
              bottom: '16%', right: '2%',
              boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
              border: '1px solid #f0efe8',
              zIndex: 5,
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'rgba(232,93,38,0.12)' }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M8 2h8l-1.5 5h-5L8 2z" fill="#e85d26"/>
                <circle cx="12" cy="15" r="6" fill="#e85d26"/>
                <path d="M12 11.5l1.1 3.1H16.3l-2.6 1.9 1 3.1L12 17.7l-2.7 1.9 1-3.1-2.6-1.9h3.2L12 11.5z" fill="white"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-sm leading-tight" style={{ color: '#e85d26' }}>4+ Years</p>
              <p className="text-xs leading-snug text-black/60">of experience delivering<br />quality solutions</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-10 lg:col-span-2 flex justify-center"
        >
          <svg
            className="w-6 h-6 text-[#9ca3af]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
