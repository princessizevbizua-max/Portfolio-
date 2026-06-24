import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { writingSamples } from '@/data/portfolio'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            delay: i * 0.1,
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen" style={{ backgroundColor: '#F5F2EC' }}>
      <div className="w-full py-8 px-6 lg:px-12" style={{ backgroundColor: '#0A0E1A' }}>
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 transition-colors duration-300 hover:text-[#C8963E]"
            style={{ color: '#F5F2EC', fontFamily: 'var(--font-body)', fontSize: 14 }}
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <span
            className="font-[var(--font-heading)] text-lg"
            style={{ color: '#F5F2EC' }}
          >
            Princess Izevbizua
          </span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20">
        <p className="label-uppercase mb-4" style={{ color: '#C8963E' }}>
          Portfolio
        </p>
        <h1
          className="mb-4"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 300,
            color: '#0A0E1A',
          }}
        >
          Featured Writing Samples
        </h1>
        <p
          className="mb-16"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 16,
            color: '#2A4B5A',
            lineHeight: 1.65,
          }}
        >
          A collection of articles, stories, and brand narratives that showcase my range as a writer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {writingSamples.map((sample, i) => (
            <div
              key={sample.id}
              ref={(el) => { cardsRef.current[i] = el }}
            >
              <Link to={`/portfolio/${sample.id}`} className="group block">
                <div
                  className="relative overflow-hidden mb-6"
                  style={{ borderRadius: 4, aspectRatio: '3/2' }}
                >
                  <img
                    src={sample.image}
                    alt={sample.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[#0A0E1A]/0 group-hover:bg-[#0A0E1A]/40 transition-all duration-400 flex items-center justify-center">
                    <span
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 label-uppercase flex items-center gap-2"
                      style={{ color: '#F5F2EC' }}
                    >
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
                <p className="label-uppercase mb-2" style={{ color: '#C8963E' }}>
                  {sample.category}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 22,
                    fontWeight: 400,
                    color: '#0A0E1A',
                    lineHeight: 1.3,
                    marginBottom: 8,
                  }}
                >
                  {sample.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 15,
                    color: '#2A4B5A',
                    lineHeight: 1.6,
                  }}
                >
                  {sample.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
