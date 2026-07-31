import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap } from 'lucide-react'
import { profile, stats } from '../data/profile'
import { useCountUp } from '../hooks/useCountUp'

function StatCard({ value, suffix, label, active }: { value: number; suffix?: string; label: string; active: boolean }) {
  const count = useCountUp(value, active)
  return (
    <div className="glass glass-hover rounded-2xl p-5 text-center">
      <p className="font-display text-3xl sm:text-4xl font-semibold gradient-text">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-xs text-mist-500">{label}</p>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">About</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-mist-100 max-w-2xl">
            Curiosity first. Data second. Products third.
          </h2>
          <p className="mt-6 max-w-2xl text-mist-300 leading-relaxed">{profile.summary}</p>

          <div className="mt-6 inline-flex items-start gap-3 glass rounded-2xl px-5 py-4">
            <GraduationCap className="mt-0.5 text-violet-400" size={20} />
            <div>
              <p className="text-sm text-mist-100 font-medium">{profile.education.degree}</p>
              <p className="text-xs text-mist-500 mt-0.5">
                {profile.education.school} · {profile.education.period}
              </p>
            </div>
          </div>
        </motion.div>

        <div ref={ref} className="mt-14 grid grid-cols-2 sm:grid-cols-5 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <StatCard value={s.value} suffix={s.suffix} label={s.label} active={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
