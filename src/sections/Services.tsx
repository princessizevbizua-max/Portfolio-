import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PenTool, Heart, Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: PenTool,
    title: 'Blog & Article Writing',
    description:
      'SEO-optimized long-form content that informs, engages, and converts readers into followers.',
  },
  {
    icon: Heart,
    title: 'Brand Storytelling',
    description:
      'Narratives that define your brand voice, connect emotionally with audiences, and build lasting loyalty.',
  },
  {
    icon: Mail,
    title: 'Newsletter & Social Content',
    description:
      'Short-form writing that keeps your community engaged and coming back for more.',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(
          card,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            delay: i * 0.15,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-32 lg:py-40"
      style={{ backgroundColor: '#F5F2EC', zIndex: 2 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="label-uppercase mb-4" style={{ color: '#C8963E' }}>
            Services
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 300,
              color: '#0A0E1A',
            }}
          >
            How I Can Help
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                ref={(el) => { cardsRef.current[i] = el }}
                className="p-12 transition-shadow duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 8,
                  boxShadow: '0 4px 24px rgba(10,14,26,0.06)',
                }}
              >
                <div
                  className="mb-6 flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(200,150,62,0.1)',
                  }}
                >
                  <Icon size={22} style={{ color: '#C8963E' }} />
                </div>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 22,
                    fontWeight: 400,
                    color: '#0A0E1A',
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 15,
                    fontWeight: 300,
                    color: '#2A4B5A',
                    lineHeight: 1.65,
                  }}
                >
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

