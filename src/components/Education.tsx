import { motion } from 'framer-motion'
import { education } from '@/data/constants.js'

export function Education() {
  return (
    <section id="education" className="section-alt py-20 px-6 relative">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-label mb-2">Academic Background</p>
          <h2 className="section-title mb-3">Education</h2>
          <p className="text-black/60 text-base mb-4 max-w-xl">Academic foundations that shaped my technical expertise.</p>
          <div className="w-12 h-0.5 bg-[#e85d26]"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#9ca3af] md:-translate-x-1/2"></div>

          {education.map((item, idx) => (
            <motion.article
              key={`${item.school}-${item.id}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className={`relative mb-8 md:mb-10 ml-10 md:ml-0 md:w-[calc(50%_-_2rem)] ${
                idx % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
              }`}
            >
              <div
                className="absolute -left-8 md:left-auto md:top-6 md:-translate-x-1/2 h-4 w-4 rounded-full md:left-1/2"
                style={{ background: '#e85d26', border: '2px solid #f0efe8', boxShadow: '0 0 0 2px #9ca3af' }}
              ></div>

              <div className="pop-card card-lift p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg text-black font-semibold">{item.degree}</h3>
                    <p className="text-[#e85d26] text-sm mt-1 font-medium">{item.school}</p>
                  </div>
                  <div className="w-full sm:w-auto sm:min-w-[110px] text-left sm:text-right shrink-0">
                    <p className="text-black text-sm font-medium leading-none">{item.date}</p>
                    <p className="text-[#9ca3af] text-xs mt-2 leading-none">{item.grade}</p>
                  </div>
                </div>
                <p className="text-black text-sm leading-relaxed mt-4">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
