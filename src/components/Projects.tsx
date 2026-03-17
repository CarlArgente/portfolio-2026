import { motion } from 'framer-motion'
import { projects } from '@/data/constants.js'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image?: string
}

function ProjectCard({ title, description, tags, image }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, rotate: -1 }}
      className="pop-card p-6 transition-all group"
    >
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover rounded-xl mb-4 border-2 border-slate-800" />
      )}
      <h3 className="font-display text-xl font-extrabold text-slate-800 mb-2 group-hover:text-violet-700 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 text-sm mb-4 font-body">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-mono rounded-full border-2 border-slate-800"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export function Projects() {
  const projectItems = projects

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="section-title mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-2 bg-violet-500 rounded-full border-2 border-slate-800"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectItems.map((project: ProjectCardProps, idx: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
