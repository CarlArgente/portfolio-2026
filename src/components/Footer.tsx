import { motion } from 'framer-motion'
import { Bio } from '@/data/constants.js'

export function Footer() {
  const socialLinks = [
    { name: 'GitHub', url: Bio.github, icon: '→' },
    { name: 'LinkedIn', url: Bio.linkedin, icon: '→' },
    { name: 'Twitter', url: Bio.twitter, icon: '→' },
    { name: 'Facebook', url: Bio.facebook, icon: '→' },
    { name: 'Instagram', url: Bio.insta, icon: '→' },
  ]
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="py-16 px-6"
    >
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pop-card card-lift p-12 md:p-16 text-center mb-12 relative overflow-hidden"
        >
          <div
            className="absolute rounded-full pointer-events-none"
            style={{ background: 'rgba(232,93,38,0.08)', width: '300px', height: '300px', top: '-80px', right: '-60px' }}
          />
          <div
            className="absolute rounded-full pointer-events-none"
            style={{ background: 'rgba(232,93,38,0.05)', width: '200px', height: '200px', bottom: '-50px', left: '-40px' }}
          />

          <p className="font-mono text-xs uppercase tracking-widest text-[#e85d26] mb-4">Get In Touch</p>
          <h3 className="font-display text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Let's Work<br />Together
          </h3>
          <p className="text-black/60 text-base mb-10 max-w-xl mx-auto leading-relaxed">
            Open to opportunities and collaborations.<br />Reach out — let's build something great.
          </p>

          <motion.a
            href="mailto:carlargente0156@gmail.com"
            whileHover={{ x: 6 }}
            className="inline-flex items-center gap-3 group"
          >
            <span className="font-display text-xl md:text-2xl font-bold text-black group-hover:text-[#e85d26] transition-colors duration-200">
              carlargente0156@gmail.com
            </span>
            <svg className="w-6 h-6 text-[#e85d26] transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mb-12 flex-wrap"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="text-[#9ca3af] hover:text-[#e85d26] transition-colors font-medium flex items-center gap-2 text-sm"
            >
              {link.name} <span>{link.icon}</span>
            </motion.a>
          ))}
        </motion.div>

        <div className="pt-8 text-center text-[#9ca3af] text-sm" style={{ borderTop: '1px solid #9ca3af' }}>
          <p>
            © {currentYear} {Bio.name}.
          </p>
        </div>
      </div>
    </footer>
  )
}
