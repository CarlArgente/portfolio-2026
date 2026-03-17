import { motion } from 'framer-motion'
import { education } from '@/data/constants.js'

export function Education() {
  return (
    <section id="education" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title mb-4">
            Education
          </h2>
          <div className="w-20 h-2 bg-emerald-400 rounded-full border-2 border-slate-800"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-violet-300 border border-slate-800 rounded-full md:-translate-x-1/2"></div>

          {education.map((item, idx) => (
            <motion.article
              key={`${item.school}-${item.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className={`relative mb-8 md:mb-10 md:w-[calc(50%_-_2rem)] ${
                idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
              }`}
            >
             

              <div className="pop-card card-lift p-6 ml-10 md:ml-0 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-xl text-slate-800 font-semibold">{item.degree}</h3>
                    <p className="text-violet-700 text-sm mt-1 font-semibold">{item.school}</p>
                  </div>
                  <div className="w-full sm:w-auto sm:min-w-[110px] text-left sm:text-right shrink-0">
                    <p className="text-slate-700 text-sm font-semibold leading-none">{item.date}</p>
                    <p className="text-slate-500 text-xs mt-2 leading-none">{item.grade}</p>
                  </div>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mt-4">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}