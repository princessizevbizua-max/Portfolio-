import { useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router'
import gsap from 'gsap'
import { writingSamples } from '@/data/portfolio'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const contentRef = useRef<HTMLDivElement>(null)

  const sample = writingSamples.find((s) => s.id === id)
  const currentIndex = writingSamples.findIndex((s) => s.id === id)
  const prevSample = currentIndex > 0 ? writingSamples[currentIndex - 1] : null
  const nextSample = currentIndex < writingSamples.length - 1 ? writingSamples[currentIndex + 1] : null

  useEffect(() => {
    window.scrollTo(0, 0)

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.querySelectorAll('.animate-in'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.7,
          ease: 'power3.out',
        }
      )
    }
  }, [id])

  if (!sample) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#F5F2EC' }}>
        <div className="text-center">
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 32,
              color: '#0A0E1A',
              marginBottom: 16,
            }}
          >
            Writing Sample Not Found
          </h2>
          <Link to="/portfolio" className="pill-button" style={{ color: '#0A0E1A', borderColor: '#0A0E1A' }}>
            View All Work
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F2EC' }}>
      <div className="w-full py-8 px-6 lg:px-12" style={{ backgroundColor: '#0A0E1A' }}>
        <div className="max-w-[900px] mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 transition-colors duration-300 hover:text-[#C8963E]"
            style={{ color: '#F5F2EC', fontFamily: 'var(--font-body)', fontSize: 14, background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <ArrowLeft size={16} />
            Back
          </button>
          <Link
            to="/"
            className="font-[var(--font-heading)] text-lg"
            style={{ color: '#F5F2EC' }}
          >
            Princess Izevbizua
          </Link>
        </div>
      </div>

      <div ref={contentRef} className="max-w-[900px] mx-auto px-6 lg:px-12 py-16">
        <p className="animate-in label-uppercase mb-4" style={{ color: '#C8963E' }}>
          {sample.category}
        </p>

        <h1
          className="animate-in mb-8"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 300,
            color: '#0A0E1A',
            lineHeight: 1.2,
          }}
        >
          {sample.title}
        </h1>

        <div
          className="animate-in overflow-hidden mb-12"
          style={{ borderRadius: 8, aspectRatio: '16/9' }}
        >
          <img
            src={sample.image}
            alt={sample.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="animate-in mb-12">
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 24,
              fontWeight: 400,
              color: '#0A0E1A',
            }}
          >
            Overview
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              color: '#2A4B5A',
              lineHeight: 1.7,
            }}
          >
            {sample.overview}
          </p>
        </div>

        <div className="animate-in mb-12">
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 24,
              fontWeight: 400,
              color: '#0A0E1A',
            }}
          >
            Key Themes
          </h2>
          <div className="flex flex-wrap gap-2">
            {sample.keyThemes.map((theme) => (
              <span
                key={theme}
                className="px-4 py-2"
                style={{
                  backgroundColor: 'rgba(200,150,62,0.1)',
                  borderRadius: 4,
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  color: '#0A0E1A',
                }}
              >
                {theme}
              </span>
            ))}
          </div>
        </div>

        <div className="animate-in mb-12">
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 24,
              fontWeight: 400,
              color: '#0A0E1A',
            }}
          >
            Writing Style
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              color: '#2A4B5A',
              lineHeight: 1.7,
            }}
          >
            {sample.writingStyle}
          </p>
        </div>

        {sample.originalLink && sample.originalLink !== '#' && (
          <div className="animate-in mb-16">
            <a
              href={sample.originalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#C8963E]"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                color: '#0A0E1A',
                textDecoration: 'underline',
                textUnderlineOffset: 4,
              }}
            >
              Read the full article on Medium
              <ExternalLink size={14} />
            </a>
          </div>
        )}

        <div
          className="animate-in flex flex-col sm:flex-row items-center justify-between gap-4 pt-12"
          style={{ borderTop: '1px solid rgba(10,14,26,0.1)' }}
        >
          {prevSample ? (
            <Link
              to={`/portfolio/${prevSample.id}`}
              className="flex items-center gap-2 transition-colors duration-300 hover:text-[#C8963E]"
              style={{ color: '#0A0E1A', fontFamily: 'var(--font-body)', fontSize: 14 }}
            >
              <ArrowLeft size={16} />
              <span>
                <span className="label-uppercase block" style={{ fontSize: 10, color: '#2A4B5A' }}>Previous</span>
                {prevSample.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextSample ? (
            <Link
              to={`/portfolio/${nextSample.id}`}
              className="flex items-center gap-2 text-right transition-colors duration-300 hover:text-[#C8963E]"
              style={{ color: '#0A0E1A', fontFamily: 'var(--font-body)', fontSize: 14 }}
            >
              <span>
                <span className="label-uppercase block" style={{ fontSize: 10, color: '#2A4B5A' }}>Next</span>
                {nextSample.title}
              </span>
              <ArrowRight size={16} />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  )
}
