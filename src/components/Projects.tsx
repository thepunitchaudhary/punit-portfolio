import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Search, Sparkles } from 'lucide-react'
import { projects } from '../data/profile'

const categories = ['All', 'AI/ML', 'Data Analytics', 'Web App'] as const

export default function Projects() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<(typeof categories)[number]>('All')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === 'All' || p.category === category
      const matchesQuery =
        query.trim() === '' ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <section id="projects" className="py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Projects</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-mist-100">
            Things I&apos;ve built
          </h2>
        </motion.div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all duration-200 ${
                  category === c ? 'bg-signal-gradient text-ink-950' : 'glass glass-hover text-mist-300'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-mist-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full rounded-full glass pl-10 pr-4 py-2.5 text-sm text-mist-100 placeholder:text-mist-500 outline-none focus:border-violet-400/50"
            />
          </div>
        </div>

        <motion.div layout className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                layout
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                whileHover={{ y: -6 }}
                className="group glass rounded-2xl overflow-hidden flex flex-col"
              >
                <div className="relative h-36 bg-gradient-to-br from-violet-600/30 via-azure-500/20 to-cyan-400/20 flex items-center justify-center overflow-hidden">
                  <Sparkles
                    size={34}
                    className="text-mist-100/70 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  />
                  {p.featured && (
                    <span className="absolute top-3 left-3 rounded-full bg-ink-950/70 backdrop-blur px-3 py-1 text-[10px] font-mono uppercase tracking-wide text-cyan-300">
                      Featured
                    </span>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg text-mist-100">{p.name}</h3>
                  <p className="mt-2 text-sm text-mist-300 leading-relaxed flex-1">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-mono text-mist-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex gap-3">
                    <a
                      href={p.github ?? '#'}
                      className="btn-ghost !py-2 !px-4 text-xs flex-1 justify-center"
                    >
                      <Github size={13} /> Code
                    </a>
                    <a
                      href={p.demo ?? '#'}
                      className="btn-primary !py-2 !px-4 text-xs flex-1 justify-center"
                    >
                      <ExternalLink size={13} /> Live
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-sm text-mist-500">
            No projects match that search — try another keyword.
          </p>
        )}
      </div>
    </section>
  )
}
