import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import { profile } from '../data/profile'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#github', label: 'GitHub' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="section-shell">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? 'glass shadow-card' : ''
          }`}
        >
          <a href="#home" className="font-display text-lg font-semibold tracking-tight text-mist-100">
            Punit<span className="gradient-text">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-7 text-sm text-mist-300">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-mist-100 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a href={profile.resumeUrl} download className="btn-ghost !py-2.5 !px-5 text-xs">
              <Download size={14} /> Resume
            </a>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden text-mist-100"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 glass rounded-2xl p-4"
            >
              <ul className="flex flex-col gap-1 text-sm text-mist-300">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2.5 hover:bg-white/5 hover:text-mist-100 transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={profile.resumeUrl}
                    download
                    className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2.5 text-violet-300"
                  >
                    <Download size={14} /> Download resume
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
