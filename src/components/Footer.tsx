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
      <div className="max-w-6xl mx-auto">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="pop-card card-lift p-8 text-center mb-12"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Let's Work Together
          </h3>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Open to opportunities and collaborations. Reach out and let's build something great.
          </p>
          <motion.a
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="candy-btn bg-violet-500 text-white"
          >
            View Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
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
              whileHover={{ x: 5 }}
              className="text-slate-600 hover:text-violet-700 transition-colors font-semibold flex items-center gap-2"
            >
              {link.name} <span>{link.icon}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <div className="border-t-2 border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>
            © {currentYear} {Bio.name}.
          </p>
        </div>
      </div>
    </footer>
  )
}
