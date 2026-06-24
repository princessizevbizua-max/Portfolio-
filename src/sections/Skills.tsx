import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  'Content Writing',
  'Research Writing',
  'Article Writing',
  'Blog Writing',
  'Storytelling',
  'Brand Storytelling',
  'SEO Writing',
  'Newsletter Writing',
  'Social Media Content',
  'Canva Design',
  'Content Strategy',
  'Creative Writing',
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const pillsRef = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      pillsRef.current.forEach((pill, i) => {
        if (!pill) return
        const randomX = (Math.random() - 0.5) * 40
        const randomY = (Math.random() - 0.5) * 40
        gsap.fromTo(
          pill,
          { x: randomX, y: randomY, opacity: 0 },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            delay: i * 0.06,
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
      id="skills"
      className="relative w-full py-32 lg:py-40"
      style={{ backgroundColor: '#F5F2EC', zIndex: 2 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
        <p className="label-uppercase mb-4" style={{ color: '#C8963E' }}>
          Skills
        </p>
        <h2
          className="mb-16"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 300,
            color: '#0A0E1A',
          }}
        >
          What I Bring to Every Project
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, i) => (
            <span
              key={skill}
              ref={(el) => { pillsRef.current[i] = el }}
              className="inline-block px-7 py-3 border transition-all duration-300 cursor-default"
              style={{
                borderColor: '#0A0E1A',
                borderRadius: 4,
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                color: '#0A0E1A',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#0A0E1A'
                e.currentTarget.style.color = '#F5F2EC'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#0A0E1A'
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

