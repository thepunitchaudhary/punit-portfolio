import { Suspense, lazy, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Loader from './components/Loader'
import BackToTop from './components/BackToTop'
import CustomCursor from './components/CustomCursor'
import NotFound from './components/NotFound'

// Below-the-fold sections are code-split so the hero paints as fast as possible.
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Experience = lazy(() => import('./components/Experience'))
const Projects = lazy(() => import('./components/Projects'))
const Certifications = lazy(() => import('./components/Certifications'))
const GithubStats = lazy(() => import('./components/GithubStats'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function SectionFallback() {
  return <div className="py-28 section-shell" aria-hidden="true" />
}

function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <GithubStats />
        <Contact />
      </Suspense>
    </>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)
  const [hasFinePointer, setHasFinePointer] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900)
    setHasFinePointer(window.matchMedia('(pointer: fine)').matches)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Loader show={loading} />
      {hasFinePointer && <CustomCursor />}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <BackToTop />
    </>
  )
}
