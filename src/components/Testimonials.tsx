import { motion } from 'framer-motion'
import { TestimonialPersons } from '@/data/constants.js'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 relative bg-[#f5bf35]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="font-display text-5xl md:text-6xl font-extrabold text-slate-900 mb-3">
            What People Say
          </h2>
          <p className="text-slate-700 text-lg font-semibold">
            Kind words from colleagues and clients I've had the pleasure of working with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TestimonialPersons.map((person: {
            image: string
            name: string
            company: string
            position: string
            desc: string
          }, idx: number) => (
            <motion.article
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, rotate: -0.5 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card-lift relative bg-slate-100 border-2 border-slate-800 rounded-3xl px-7 py-7 min-h-[170px] shadow-[7px_7px_0_0_#1e293b]">
                <p className="text-slate-700 text-[1.9rem] leading-none absolute top-5 left-5">&quot;</p>
                <p className="text-slate-700 text-lg leading-relaxed font-semibold pt-5">{person.desc.replace(/[“”"]/g, '')}</p>
                <div className="absolute -bottom-3 left-10 w-6 h-6 bg-slate-100 border-r-2 border-b-2 border-slate-800 rotate-45"></div>
              </div>

              <div className="flex items-center gap-3 mt-6 pl-1">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-slate-800 shadow-[2px_2px_0_0_#1e293b]"
                />
                <div>
                  <h3 className="text-slate-900 font-extrabold text-2xl leading-tight font-display">{person.name}</h3>
                  <p className="text-slate-700 text-sm font-semibold">{person.position} at {person.company}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
