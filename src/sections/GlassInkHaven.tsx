import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function GlassInkHaven() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { y: 80 },
          {
            y: -80,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        )
      }

      if (textRef.current) {
        const elements = textRef.current.querySelectorAll('.animate-in')
        gsap.fromTo(
          elements,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
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
      id="glass-ink-haven"
      className="relative w-full py-32 lg:py-40"
      style={{ backgroundColor: '#0A0E1A', zIndex: 2 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full lg:w-[55%] overflow-hidden" style={{ borderRadius: 8 }}>
            <div ref={imageRef}>
              <img
                src="/gih-hero.jpg"
                alt="Glass Ink Haven - Healing-focused clothing brand"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
          </div>

          <div ref={textRef} className="w-full lg:w-[45%]">
            <p className="animate-in label-uppercase mb-4" style={{ color: '#C8963E' }}>
              Founder
            </p>
            <h2
              className="animate-in mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 300,
                color: '#F5F2EC',
              }}
            >
              Glass Ink Haven
            </h2>
            <p
              className="animate-in mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                fontWeight: 300,
                color: 'rgba(245,242,236,0.8)',
                lineHeight: 1.7,
              }}
            >
              Glass Ink Haven is a healing-focused clothing and lifestyle brand created to help 
              women wear their stories with confidence. Through meaningful apparel, storytelling, 
              and empowering messages, the brand creates a safe space for emotional expression, 
              healing, growth, and self-discovery.
            </p>
            <p
              className="animate-in mb-8"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                fontWeight: 300,
                color: 'rgba(245,242,236,0.8)',
                lineHeight: 1.7,
              }}
            >
              The mission is simple: helping women feel seen, understood, and empowered through 
              both fashion and storytelling.
            </p>
            <div className="animate-in">
              <Link
                to="/glass-ink-haven"
                className="pill-button inline-flex items-center gap-2 group"
                style={{ color: '#C8963E', borderColor: '#C8963E' }}
              >
                Explore Glass Ink Haven
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
