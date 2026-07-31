import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-3xl sm:text-4xl font-semibold text-mist-100">
        This page didn&apos;t make it into the pipeline.
      </h1>
      <p className="mt-3 text-mist-400 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </div>
  )
}
