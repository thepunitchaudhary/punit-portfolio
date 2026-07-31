import { useState } from 'react'
import { motion } from 'framer-motion'
import { skills, skillCategories, type SkillCategory } from '../data/profile'

export default function Skills() {
  const [active, setActive] = useState<SkillCategory | 'All'>('All')

  const filtered = active === 'All' ? skills : skills.filter((s) => s.category === active)

  return (
    <section id="skills" className="py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Skills</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-mist-100">
            The stack behind the work
          </h2>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          {(['All', ...skillCategories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
                active === cat
                  ? 'bg-signal-gradient text-ink-950'
                  : 'glass glass-hover text-mist-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              className="glass glass-hover rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-mist-100 font-medium">{skill.name}</span>
                <span className="text-xs font-mono text-mist-500">{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full rounded-full bg-signal-gradient"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
