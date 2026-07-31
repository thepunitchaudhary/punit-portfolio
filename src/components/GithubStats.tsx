import { motion } from 'framer-motion'
import { GitBranch, GitCommit, Star } from 'lucide-react'

const weeks = 30
const daysPerWeek = 7

// Deterministic pseudo-activity so the placeholder graph looks organic without
// relying on a live GitHub API call at build time.
function activityFor(w: number, d: number) {
  const seed = Math.sin(w * 12.9898 + d * 78.233) * 43758.5453
  const frac = seed - Math.floor(seed)
  return Math.floor(frac * 5)
}

const levelColor = [
  'bg-white/5',
  'bg-violet-900/60',
  'bg-violet-700/70',
  'bg-violet-500/80',
  'bg-cyan-400/90',
]

const pinned = [
  { name: 'ai-hospital-assistant', desc: 'Voice-enabled hospital assistant powered by LLMs.', stars: 12 },
  { name: 'foodlink-ai', desc: 'Connecting restaurants with NGOs to cut food waste.', stars: 9 },
  { name: 'sql-sales-analytics', desc: 'SQL views + reporting layer for retail sales data.', stars: 6 },
]

export default function GithubStats() {
  return (
    <section id="github" className="py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">GitHub</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-mist-100">
            Where the commits live
          </h2>
        </motion.div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 glass rounded-2xl p-6 overflow-x-auto"
          >
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-mist-300 font-mono">contribution activity</p>
              <div className="flex items-center gap-1 text-[10px] text-mist-500">
                less
                {levelColor.map((c) => (
                  <span key={c} className={`h-2.5 w-2.5 rounded-sm ${c}`} />
                ))}
                more
              </div>
            </div>
            <div className="flex gap-[3px] min-w-[560px]">
              {Array.from({ length: weeks }).map((_, w) => (
                <div key={w} className="flex flex-col gap-[3px]">
                  {Array.from({ length: daysPerWeek }).map((_, d) => {
                    const level = activityFor(w, d)
                    return (
                      <span
                        key={d}
                        className={`h-3 w-3 rounded-[2px] ${levelColor[level]}`}
                        title={`${level} contributions`}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass rounded-2xl p-6 flex flex-col justify-center gap-5"
          >
            <div className="flex items-center gap-3">
              <GitCommit size={18} className="text-violet-400" />
              <div>
                <p className="font-display text-xl text-mist-100">400+</p>
                <p className="text-xs text-mist-500">contributions this year</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <GitBranch size={18} className="text-azure-400" />
              <div>
                <p className="font-display text-xl text-mist-100">15+</p>
                <p className="text-xs text-mist-500">public repositories</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Star size={18} className="text-cyan-300" />
              <div>
                <p className="font-display text-xl text-mist-100">30+</p>
                <p className="text-xs text-mist-500">stars earned</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          {pinned.map((r, i) => (
            <motion.a
              key={r.name}
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-5 block"
            >
              <p className="font-mono text-sm text-violet-300">{r.name}</p>
              <p className="mt-2 text-xs text-mist-400 leading-relaxed">{r.desc}</p>
              <p className="mt-3 flex items-center gap-1 text-[11px] text-mist-500">
                <Star size={12} /> {r.stars}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
