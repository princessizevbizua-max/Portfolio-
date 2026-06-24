import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ backgroundColor: '#0A0E1A' }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          fontWeight: 300,
          color: '#C8963E',
          lineHeight: 1,
        }}
      >
        404
      </h1>
      <p
        className="mb-8 text-center"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 16,
          color: 'rgba(245,242,236,0.7)',
        }}
      >
        This page doesn&apos;t exist. Let&apos;s get you back on track.
      </p>
      <Link
        to="/"
        className="pill-button-filled"
      >
        Go Home
      </Link>
    </div>
  )
}
