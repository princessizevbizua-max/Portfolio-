import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const poemLines = [
  'I write to understand',
  'the space between',
  'what is felt',
  'and what is said.',
  'Every story',
  'begins with listening.',
]

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const lineRefs = useRef<(HTMLDivElement | null)[]>([])
  const subtitleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      lineRefs.current.forEach((line, i) => {
        if (!line) return
        gsap.fromTo(
          line,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: 0.3 + i * 0.15,
            scrollTrigger: {
              trigger: stickyRef.current,
              start: 'top top',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      lineRefs.current.forEach((line, i) => {
        if (!line) return
        gsap.to(line, {
          y: -60 * (i + 1) * 0.3,
          opacity: 0.3,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      })

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stickyRef.current,
              start: 'top top',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full"
      style={{ height: '150vh', zIndex: 1 }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 w-full flex flex-col items-center justify-center"
        style={{ height: '100vh' }}
      >
        <div className="flex flex-col items-center gap-3">
          {poemLines.map((line, i) => (
            <div
              key={i}
              ref={(el) => { lineRefs.current[i] = el }}
              className="text-center select-none"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                fontWeight: 300,
                letterSpacing: '-0.02em',
                color: '#F5F2EC',
                textShadow: '0 2px 30px rgba(0,16,26,0.8), 0 0 60px rgba(0,16,26,0.5)',
                lineHeight: 1.4,
                opacity: 0,
              }}
            >
              {line}
            </div>
          ))}
        </div>

        <div
          ref={subtitleRef}
          className="absolute bottom-12 left-8"
          style={{ opacity: 0 }}
        >
          <p
            className="label-uppercase"
            style={{ color: 'rgba(245,242,236,0.7)', letterSpacing: '0.1em' }}
          >
            Princess Izevbizua &mdash; Content Writer &amp; Storyteller
          </p>
        </div>
      </div>
    </section>
  )
}

