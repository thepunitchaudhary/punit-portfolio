import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import { profile } from '../data/profile'

type Status = 'idle' | 'sending' | 'sent'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  // Wire this up to a real endpoint (Formspree, Resend, your own API route,
  // etc.) — this just simulates the round trip so the UI is ready to connect.
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1100)
  }

  return (
    <section id="contact" className="py-28">
      <div className="section-shell grid lg:grid-cols-[0.85fr_1.15fr] gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Contact</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-mist-100">
            Let&apos;s build something with data
          </h2>
          <p className="mt-4 text-mist-300 leading-relaxed max-w-md">
            Open to internships, full-time roles, and interesting data or AI problems. The
            fastest way to reach me is email.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-mist-300 hover:text-mist-100 transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full glass">
                <Mail size={16} />
              </span>
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-mist-300 hover:text-mist-100 transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full glass">
                <Linkedin size={16} />
              </span>
              linkedin.com/in/thepunitchaudhary
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-mist-300 hover:text-mist-100 transition-colors"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full glass">
                <Github size={16} />
              </span>
              github.com/ — update with your handle
            </a>
            <div className="flex items-center gap-3 text-sm text-mist-300">
              <span className="flex h-10 w-10 items-center justify-center rounded-full glass">
                <MapPin size={16} />
              </span>
              {profile.location}
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="glass rounded-3xl p-6 sm:p-8 space-y-5"
        >
          <div>
            <label htmlFor="name" className="text-xs text-mist-500">
              Your name
            </label>
            <input
              id="name"
              required
              placeholder="Jordan Lee"
              className="mt-1.5 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 outline-none focus:border-violet-400/50"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-xs text-mist-500">
              Your email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="jordan@company.com"
              className="mt-1.5 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 outline-none focus:border-violet-400/50"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs text-mist-500">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              placeholder="Tell me about the role or project..."
              className="mt-1.5 w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-mist-100 placeholder:text-mist-500 outline-none focus:border-violet-400/50 resize-none"
            />
          </div>

          <button type="submit" disabled={status !== 'idle'} className="btn-primary w-full justify-center disabled:opacity-60">
            {status === 'idle' && (
              <>
                <Send size={15} /> Send message
              </>
            )}
            {status === 'sending' && 'Sending…'}
            {status === 'sent' && 'Message sent — thank you'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
