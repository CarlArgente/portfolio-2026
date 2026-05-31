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
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-label mb-2">Career</p>
          <h2 className="section-title mb-3">Experience</h2>
          <p className="text-black/60 text-base mb-4 max-w-xl">My professional journey across companies and roles.</p>
          <div className="w-12 h-0.5 bg-[#e85d26]"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-px bg-[#9ca3af] md:-translate-x-1/2"></div>

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
                <div
                  className="absolute -left-8 md:left-auto md:top-7 md:-translate-x-1/2 h-4 w-4 rounded-full md:left-1/2"
                  style={{ background: '#e85d26', border: '2px solid #f6f5ef', boxShadow: '0 0 0 2px #9ca3af' }}
                ></div>

                <div className="pop-card card-lift p-6 md:p-7">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="font-display text-xl text-black font-semibold">{item.role}</h3>
                      <p className="text-[#e85d26] font-medium mt-1">{item.company}</p>
                    </div>
                    <div className="flex flex-col gap-2 items-start md:items-end">
                      <span
                        className="px-3 py-1 rounded-full text-black text-xs font-medium"
                        style={{ background: 'rgba(232,93,38,0.1)', border: '1px solid #9ca3af' }}
                      >
                        {item.period}
                      </span>
                      {item.setup && (
                        <span
                          className="px-3 py-1 rounded-full text-black text-xs font-medium"
                          style={{ background: '#f0efe8', border: '1px solid #9ca3af' }}
                        >
                          {item.setup}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="section-label mb-3">Responsibilities</p>
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex items-start gap-2 text-black leading-relaxed text-sm">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0 bg-[#e85d26]"></span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
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
