import { motion } from 'framer-motion'
import { skills } from '@/data/constants.js'

export function About() {
  const groupedSkills = skills

  return (
    <section id="about" className="section-alt py-20 px-6 relative">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-label mb-2">Technologies I Master</p>
          <h2 className="section-title mb-3">My Skills</h2>
          <p className="text-black/60 text-base mb-4 max-w-xl">Technologies and tools I work with to build reliable, scalable solutions.</p>
          <div className="w-12 h-0.5 bg-[#e85d26]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupedSkills.map((category: { title: string; skills: Array<{ name: string }> }, idx: number) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="pop-card card-lift p-6"
            >
              <div className="mb-5 pb-4" style={{ borderBottom: '1px solid #9ca3af' }}>
                <h3 className="font-display text-lg font-bold text-black">{category.title}</h3>
                <p className="text-[#e85d26] text-xs font-semibold uppercase tracking-wide mt-1">
                  {category.title}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ scale: 1.02 }}
                    className="tech-pill text-xs"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
