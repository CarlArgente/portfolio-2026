import { motion } from 'framer-motion'
import { Bio, skills } from '@/data/constants.js'

export function About() {
  const groupedSkills = skills

  return (
    <section id="about" className="py-20 px-6 relative bg-[#F1F5F9]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title mb-4">
            About Me
          </h2>
          <div className="w-20 h-2 bg-pink-400 rounded-full border-2 border-slate-800"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:items-start">
          {/* Core Roles */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="pop-card card-lift p-6 bg-white relative self-start"
          >
            <p className="font-display text-2xl text-slate-800 font-bold mb-4">Core Roles</p>
            <div className="flex flex-wrap gap-3">
              {Bio.roles.map((role: string) => (
                <span
                  key={role}
                  className="px-4 py-2 rounded-full border-2 border-slate-800 bg-emerald-300 text-slate-800 text-sm font-semibold"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-6 relative rounded-2xl border-2 border-slate-800 bg-violet-50 p-5 shadow-[4px_4px_0_0_#1E293B]">
              <div className="absolute -top-3 left-4 px-2 py-0.5 rounded-full border-2 border-slate-800 bg-pink-300 text-xs font-bold tracking-wide text-slate-800">
                PROFILE
              </div>
              <p className="pt-2 text-slate-700 leading-relaxed text-base font-medium">
                {Bio.description}
              </p>
            </div>

            <div className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-pink-400 border-2 border-slate-800"></div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="pop-card card-lift p-4 bg-violet-100">
              <h3 className="font-display text-slate-800 text-xl font-extrabold">Tech Stack</h3>
            </div>
            {groupedSkills.map((category: { title: string; skills: Array<{ name: string }> }, idx: number) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="font-display font-bold text-violet-700 mb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-white text-slate-700 rounded-full text-sm font-mono border-2 border-slate-800 hover:bg-amber-200 transition-colors cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
