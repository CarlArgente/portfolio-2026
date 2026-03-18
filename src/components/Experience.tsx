import { motion } from 'framer-motion'
import { experiences } from '@/data/constants.js'

type ExperienceItem = {
  id: number
  role: string
  company: string
  date?: string
  period?: string
  setup?: string
  desc?: string[]
  responsibilities?: string[]
  skills?: string[]
  technologies?: string[]
}

export function Experience() {
  const preferredOrder = [
    'full scale',
    'mvco talent outsourcing',
    'geco philippines inc.',
    'mnleistung inc.',
    'fiverr',
    'wno electronics trading',
  ]

  const getOrderRank = (company: string) => {
    const normalized = company.toLowerCase()
    const index = preferredOrder.findIndex((name) => normalized.includes(name))
    return index === -1 ? Number.MAX_SAFE_INTEGER : index
  }

  const timelineItems = (experiences as ExperienceItem[]).map((item) => ({
    ...item,
    period: item.period ?? item.date ?? '',
    responsibilities: item.responsibilities ?? item.desc ?? [],
    technologies: item.technologies ?? item.skills ?? [],
  })).sort((a, b) => getOrderRank(a.company) - getOrderRank(b.company))

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title mb-4">Experience</h2>
          <div className="w-20 h-2 bg-violet-400 rounded-full border-2 border-slate-800"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-1 bg-violet-300 border border-slate-800 rounded-full md:-translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-10">
            {timelineItems.map((item, idx) => (
              <motion.article
                key={`${item.company}-${item.id}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: idx * 0.07 }}
                viewport={{ once: true }}
                className={`relative ml-10 md:ml-0 md:w-[calc(50%_-_2rem)] ${
                  idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                }`}
              >
                <div className="absolute -left-8 md:left-auto md:right-auto md:top-7 md:-translate-x-1/2 h-6 w-6 rounded-full border-2 border-slate-800 bg-pink-400 shadow-[3px_3px_0_0_#1E293B] md:left-1/2"></div>

                <div className="pop-card p-6 md:p-7 bg-white transition-shadow duration-300 hover:shadow-[6px_6px_0_0_#1e293b]">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-display text-2xl text-slate-800 font-extrabold">{item.role}</h3>
                      <p className="text-violet-700 font-semibold mt-1">{item.company}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-start md:items-end">
                      <span className="px-3 py-1 rounded-full border-2 border-slate-800 bg-amber-300 text-slate-800 text-xs font-bold tracking-wide">
                        {item.period}
                      </span>
                      {item.setup && (
                        <span className="px-3 py-1 rounded-full border-2 border-slate-800 bg-emerald-300 text-slate-800 text-xs font-bold tracking-wide">
                          {item.setup}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="font-display text-lg font-bold text-slate-800 mb-3">Responsibilities</p>
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex items-start gap-2 text-slate-700 leading-relaxed">
                          <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-pink-400 border border-slate-800 shrink-0"></span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <p className="font-display text-lg font-bold text-slate-800 mb-3">Technology used</p>
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((technology) => (
                        <span
                          key={`${item.id}-${technology}`}
                          className="px-3 py-1.5 rounded-full border-2 border-slate-800 bg-white text-slate-700 text-sm font-mono"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}