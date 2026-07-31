import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-mist-500">
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${profile.email}`} aria-label="Email" className="text-mist-500 hover:text-mist-100 transition-colors">
            <Mail size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-mist-500 hover:text-mist-100 transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-mist-500 hover:text-mist-100 transition-colors"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
