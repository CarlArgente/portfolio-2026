import { motion } from 'framer-motion'
import { TestimonialPersons } from '@/data/constants.js'

type Person = {
  image: string
  name: string
  company: string
  position: string
  desc: string
}

function TestimonialCard({ person }: { person: Person }) {
  return (
    <div
      className="flex-shrink-0 w-[320px] rounded-xl p-6"
      style={{ background: '#ffffff', border: '1px solid var(--border)', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
    >
      <p className="text-[#e85d26] text-2xl leading-none mb-3">&ldquo;</p>
      <p className="text-black text-sm leading-relaxed mb-5 line-clamp-4">
        {person.desc.replace(/["""]/g, '')}
      </p>
      <div className="flex items-center gap-3">
        <img
          src={person.image}
          alt={person.name}
          className="w-10 h-10 rounded-full object-cover shrink-0"
          style={{ border: '1px solid var(--border)' }}
        />
        <div>
          <p className="font-semibold text-sm text-black leading-tight">{person.name}</p>
          <p className="text-xs text-[#9ca3af]">{person.position} at {person.company}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const items: Person[] = TestimonialPersons
  const row1 = [...items, ...items]
  const row2 = [...[...items].reverse(), ...[...items].reverse()]

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-label mb-2">Testimonials</p>
          <h2 className="section-title mb-3">What People Say</h2>
          <p className="text-black/60 text-base max-w-xl">Kind words from colleagues and clients I've had the pleasure of working with.</p>
        </motion.div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="overflow-hidden mb-5">
        <div className="flex gap-5 marquee-left" style={{ width: 'max-content' }}>
          {row1.map((person, i) => (
            <TestimonialCard key={i} person={person} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="overflow-hidden">
        <div className="flex gap-5 marquee-right" style={{ width: 'max-content' }}>
          {row2.map((person, i) => (
            <TestimonialCard key={i} person={person} />
          ))}
        </div>
      </div>
    </section>
  )
}
