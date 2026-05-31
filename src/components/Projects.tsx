import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '@/data/constants.js'

const SG = "'Space Grotesk', sans-serif"

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
      whileHover={{ y: -3 }}
      onClick={onClick}
      className="pop-card card-lift p-6 transition-all group cursor-pointer flex flex-col h-full"
      style={{ fontFamily: SG }}
    >
      {project.image && (
        <div className="w-full h-44 rounded-md mb-5 overflow-hidden" style={{ border: '1px solid var(--border)' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h3
        className="text-xl font-semibold text-black mb-2 group-hover:text-[#e85d26] transition-colors"
        style={{ fontFamily: SG }}
      >
        {project.title}
      </h3>

      <p
        className="text-sm line-clamp-3 flex-1 mb-5"
        style={{ fontFamily: SG, color: '#000000' }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="tech-pill text-xs" style={{ fontFamily: SG }}>
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="tech-pill text-xs" style={{ fontFamily: SG, color: '#9ca3af' }}>
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
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)', fontFamily: SG }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        className="max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-lg scrollbar-hide"
        style={{ background: 'var(--bg)', border: '1px solid var(--border)', fontFamily: SG }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <h2
              className="text-2xl font-bold text-black mt-2"
              style={{ fontFamily: SG }}
            >
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="candy-btn px-3 py-2 text-sm ml-4 shrink-0"
            style={{ fontFamily: SG }}
          >
            ✕
          </button>
        </div>

        {/* Image */}
        {project.image && (
          <div className="px-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-contain rounded-md"
              style={{ border: '1px solid var(--border)', background: '#f0efe8' }}
            />
          </div>
        )}

        {/* About */}
        <div className="px-6 mt-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ fontFamily: SG, color: '#e85d26' }}
          >
            About
          </p>
          <p className="text-sm leading-relaxed text-black" style={{ fontFamily: SG }}>
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="px-6 mt-6 pb-6">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ fontFamily: SG, color: '#e85d26' }}
          >
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tech-pill text-xs" style={{ fontFamily: SG }}>
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
    <section id="projects" className="py-20 px-6 relative" style={{ fontFamily: SG }}>
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-label mb-2" style={{ fontFamily: SG }}>My Work</p>
          <h2 className="section-title mb-3" style={{ fontFamily: SG }}>Featured Projects</h2>
          <p className="text-black/60 text-base mb-4 max-w-xl" style={{ fontFamily: SG }}>A selection of web and software projects I've designed and built.</p>
          <div className="w-12 h-0.5 bg-[#e85d26]" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {projectItems.map((project, idx) => (
            <motion.div
              key={`${project.id}-${project.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
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
