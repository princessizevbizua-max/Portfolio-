import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { writingSamples } from '@/data/portfolio'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedWork() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(
          card,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            },
            delay: i * 0.2,
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative w-full py-32 lg:py-40"
      style={{ backgroundColor: '#F5F2EC', zIndex: 2 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <p className="label-uppercase mb-4" style={{ color: '#C8963E' }}>
            Portfolio
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: '#0A0E1A',
            }}
          >
            Selected Work
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              color: '#2A4B5A',
            }}
          >
            Articles, stories, and brand narratives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {writingSamples.map((sample, i) => (
            <div
              key={sample.id}
              ref={(el) => { cardsRef.current[i] = el }}
              className="group"
              style={{ marginTop: i % 2 === 1 ? 80 : 0 }}
            >
              <Link to={`/portfolio/${sample.id}`} className="block">
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
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 label-uppercase"
                      style={{ color: '#F5F2EC' }}
                    >
                      Read More
                    </span>
                  </div>
                </div>

                <p
                  className="label-uppercase mb-2"
                  style={{ color: '#C8963E' }}
                >
                  {sample.category}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 24,
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

        <div className="mt-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-[#C8963E] group"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              color: '#2A4B5A',
            }}
          >
            View All Work
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

