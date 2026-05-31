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
          className="pop-card card-lift p-8 text-center mb-12"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-black mb-4">
            Let's Work Together
          </h3>
          <p className="text-black mb-6 max-w-2xl mx-auto">
            Open to opportunities and collaborations. Reach out and let's build something great.
          </p>
          <motion.a
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="candy-btn"
          >
            View Resume
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
