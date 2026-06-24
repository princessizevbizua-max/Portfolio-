import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            },
          }
        )
      }

      if (textRef.current) {
        const elements = textRef.current.querySelectorAll('.animate-in')
        gsap.fromTo(
          elements,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
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
      id="about"
      className="relative w-full py-32 lg:py-40"
      style={{ backgroundColor: '#0A0E1A', zIndex: 2 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          <div
            ref={imageRef}
            className="w-full md:w-[45%] flex justify-center md:justify-start"
            style={{ marginTop: -40 }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                width: 'min(400px, 80vw)',
                height: 'min(400px, 80vw)',
                borderRadius: '50%',
                border: '2px solid rgba(200,150,62,0.3)',
              }}
            >
              <img
                src="https://res.cloudinary.com/djkyc8wfa/image/upload/v1780323691/file_00000000d8f071f48a2196833ad47ea1_s4l80w.png"
                alt="Princess Izevbizua"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div ref={textRef} className="w-full md:w-[50%]">
            <p className="animate-in label-uppercase mb-6" style={{ color: '#C8963E' }}>
              About
            </p>
            <h2
              className="animate-in mb-8"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                fontWeight: 300,
                color: '#F5F2EC',
                lineHeight: 1.3,
              }}
            >
              I write to connect people with ideas that matter.
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
              Hello, I&apos;m Princess Izevbizua, a content writer, storyteller, and creative 
              entrepreneur passionate about helping people and brands communicate meaningful ideas. 
              My work focuses on emotional storytelling, personal development, lifestyle content, 
              brand narratives, and audience engagement.
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
              I believe powerful writing goes beyond words &mdash; it creates connection, trust, 
              and impact. As an Economics and Statistics student, I bring analytical thinking 
              alongside creativity, allowing me to create content that is both engaging and purposeful.
            </p>
            <div className="animate-in">
              <a
                href="https://www.linkedin.com/in/princess-izevbizua-6671b1360"
                target="_blank"
                rel="noopener noreferrer"
                className="pill-button"
                style={{ color: '#C8963E', borderColor: '#C8963E' }}
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
