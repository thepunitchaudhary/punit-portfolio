import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Experience</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-mist-100">
            Where the work has happened
          </h2>
        </motion.div>

        <div className="mt-12 relative border-l border-white/10 ml-3">
          {experience.map((job, i) => (
            <motion.div
              key={job.title + job.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pl-8 pb-10 last:pb-0"
            >
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-signal-gradient shadow-glow" />
              <div className="glass glass-hover rounded-2xl p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-violet-400" />
                    <h3 className="font-display text-lg text-mist-100">{job.title}</h3>
                  </div>
                  <span className="font-mono text-xs text-mist-500">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-azure-400">{job.company}</p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-mist-300 leading-relaxed">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-mist-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
