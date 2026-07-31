import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { certifications } from '../data/profile'

export default function Certifications() {
  return (
    <section id="certifications" className="py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Certifications</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-mist-100">
            Credentials along the way
          </h2>
        </motion.div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass glass-hover rounded-2xl p-5 flex items-start gap-3"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal-gradient/20 text-violet-300">
                <Award size={16} />
              </span>
              <div>
                <p className="text-sm text-mist-100 font-medium leading-snug">{c.name}</p>
                <p className="mt-1 text-xs text-mist-500">{c.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
