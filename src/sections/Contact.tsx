import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Linkedin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll('.animate-in')
        gsap.fromTo(
          elements,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
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
      id="contact"
      className="relative w-full py-32 lg:py-40"
      style={{ backgroundColor: '#F5F2EC', zIndex: 2 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div ref={contentRef} className="max-w-[600px]">
          <p className="animate-in label-uppercase mb-4" style={{ color: '#C8963E' }}>
            Contact
          </p>
          <h2
            className="animate-in mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 300,
              color: '#0A0E1A',
            }}
          >
            Let&apos;s Work Together
          </h2>
          <p
            className="animate-in mb-10"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 16,
              color: '#2A4B5A',
              lineHeight: 1.65,
            }}
          >
            Interested in collaborating, hiring me, or discussing a project? I&apos;d love to hear from you.
          </p>

          <div className="animate-in space-y-5">
            <a
              href="mailto:princessizevbizua@gmail.com"
              className="flex items-center gap-3 transition-colors duration-300 hover:text-[#C8963E]"
              style={{ color: '#0A0E1A' }}
            >
              <Mail size={20} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 16 }}>
                princessizevbizua@gmail.com
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/princess-izevbizua-6671b1360"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors duration-300 hover:text-[#C8963E]"
              style={{ color: '#0A0E1A' }}
            >
              <Linkedin size={20} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 16 }}>
                linkedin.com/in/princess-izevbizua
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
