import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/constants.js'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image?: string
  date?: string
  category?: string
  github?: string
  webapp?: string
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -4, rotate: -1 }}
      onClick={onClick}
      className="pop-card p-6 transition-all group cursor-pointer flex flex-col h-full"
    >
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover rounded-xl mb-4 border-2 border-slate-800"
        />
      )}
      <h3 className="font-display text-xl font-extrabold text-slate-800 mb-2 group-hover:text-violet-700 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-600 text-sm font-body line-clamp-3 flex-1 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-mono rounded-full border-2 border-slate-800"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-mono rounded-full border-2 border-slate-800">
            +{project.tags.length - 4} more
          </span>
        )}
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(30, 41, 59, 0.65)', backdropFilter: 'blur(6px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        className="pop-card max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-0">
          <div>
            {project.category && (
              <span className="text-xs font-mono font-bold text-violet-700 bg-violet-100 px-3 py-1 rounded-full border-2 border-slate-800">
                {project.category}
              </span>
            )}
            <h2 className="font-display text-2xl font-extrabold text-slate-800 mt-2">
              {project.title}
            </h2>
            {project.date && (
              <p className="text-xs text-slate-500 font-mono mt-1">{project.date}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="candy-btn bg-white hover:bg-violet-50 px-3 py-2 text-sm ml-4 flex-shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Image */}
        {project.image && (
          <div className="px-6 mt-5">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-contain rounded-xl border-2 border-slate-800 bg-slate-50"
            />
          </div>
        )}

        {/* Description */}
        <div className="px-6 mt-5">
          <h3 className="font-display text-sm font-extrabold text-slate-500 uppercase tracking-widest mb-2">
            About
          </h3>
          <p className="text-slate-700 text-sm font-body leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="px-6 mt-5 pb-6">
          <h3 className="font-display text-sm font-extrabold text-slate-500 uppercase tracking-widest mb-3">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-mono rounded-full border-2 border-slate-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Projects() {
  const projectItems: Project[] = projects
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projectItems.map((project, idx) => (
            <motion.div
              key={`${project.id}-${project.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex"
            >
              <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
