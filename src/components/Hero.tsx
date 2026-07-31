import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Github, Linkedin, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import DataFlowSignature from './DataFlowSignature'

const roles = [
  'Data Analyst',
  'ML Engineer',
  'AI Engineer',
  'Full-Stack Developer',
]

function useTypingRoles() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = deleting ? 45 : 85
    const pause = 1400

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
      return
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1),
      )
    }, speed)
    return () => clearTimeout(t)
  }, [text, deleting, roleIndex])

  return text
}

export default function Hero() {
  const typed = useTypingRoles()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* Ambient drifting glow blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-600/25 blur-[100px] animate-drift" />
      <div
        className="pointer-events-none absolute top-40 -right-16 h-80 w-80 rounded-full bg-azure-500/20 blur-[110px] animate-drift"
        style={{ animationDelay: '2s' }}
      />

      <div className="section-shell grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulseDot" />
            Open to internships &amp; full-time roles
          </span>

          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-mist-100">
            Hi, I&apos;m {profile.name.split(' ')[0]}.
            <br />
            I work as a{' '}
            <span className="gradient-text">
              {typed}
              <span className="inline-block w-[2px] h-[0.9em] bg-violet-400 ml-1 align-middle animate-pulse" />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base sm:text-lg text-mist-300 leading-relaxed">
            {profile.headline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={profile.resumeUrl} download className="btn-primary">
              <Download size={16} /> Download Résumé
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-mist-500">
            <MapPin size={14} />
            {profile.location}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative"
        >
          <div className="glass rounded-3xl p-6 sm:p-8 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-mist-500">pipeline.status</span>
              <span className="flex items-center gap-1.5 text-xs text-cyan-300 font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulseDot" />
                live
              </span>
            </div>
            <DataFlowSignature />
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-xl bg-white/[0.03] py-3">
                <p className="font-display text-lg text-mist-100">Python</p>
                <p className="text-[11px] text-mist-500">core</p>
              </div>
              <div className="rounded-xl bg-white/[0.03] py-3">
                <p className="font-display text-lg text-mist-100">SQL</p>
                <p className="text-[11px] text-mist-500">core</p>
              </div>
              <div className="rounded-xl bg-white/[0.03] py-3">
                <p className="font-display text-lg text-mist-100">Gen AI</p>
                <p className="text-[11px] text-mist-500">focus</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-mist-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
