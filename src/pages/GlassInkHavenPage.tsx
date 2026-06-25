import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import gsap from 'gsap'
import { glassInkHavenData } from '@/data/glassInkHaven'
import { ArrowLeft, ArrowUpRight, Heart, Sparkles, Users, Target, Eye, Compass } from 'lucide-react'

export default function GlassInkHavenPage() {
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    if (pageRef.current) {
      const elements = pageRef.current.querySelectorAll('.animate-in')
      gsap.fromTo(
        elements,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.6,
          ease: 'power3.out',
        }
      )
    }
  }, [])

  const valueIcons = [Heart, Sparkles, Users, Target, Compass]

  return (
    <div ref={pageRef} className="min-h-screen" style={{ backgroundColor: '#F5F2EC' }}>
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

      <div className="w-full py-24 lg:py-32 px-6 lg:px-12" style={{ backgroundColor: '#0A0E1A' }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="animate-in label-uppercase mb-4" style={{ color: '#C8963E' }}>
            Founder of Glass Ink Haven
          </p>
          <h1
            className="animate-in mb-6 max-w-[700px]"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 300,
              color: '#F5F2EC',
              lineHeight: 1.15,
            }}
          >
            Wear Your Story. Heal Your Heart.
          </h1>
          <p
            className="animate-in max-w-[600px]"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 17,
              fontWeight: 300,
              color: 'rgba(245,242,236,0.8)',
              lineHeight: 1.7,
            }}
          >
            A healing-focused clothing and lifestyle brand created to help women wear their 
            stories with confidence.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-28">
          <div className="w-full lg:w-1/2">
            <div className="animate-in overflow-hidden" style={{ borderRadius: 8 }}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60"
                alt="Glass Ink Haven"
                className="w-full object-cover"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2
              className="animate-in mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 300,
                color: '#0A0E1A',
              }}
            >
              The Brand Story
            </h2>
            <p
              className="animate-in mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                color: '#2A4B5A',
                lineHeight: 1.7,
              }}
            >
              {glassInkHavenData.brandStory}
            </p>
            <p
              className="animate-in"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                color: '#2A4B5A',
                lineHeight: 1.7,
              }}
            >
              {glassInkHavenData.overview}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-28">
          <div
            className="animate-in p-10"
            style={{
              backgroundColor: '#0A0E1A',
              borderRadius: 8,
            }}
          >
            <Eye size={28} style={{ color: '#C8963E', marginBottom: 16 }} />
            <h3
              className="mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 22,
                fontWeight: 400,
                color: '#F5F2EC',
              }}
            >
              Mission
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                fontWeight: 300,
                color: 'rgba(245,242,236,0.8)',
                lineHeight: 1.7,
              }}
            >
              {glassInkHavenData.mission}
            </p>
          </div>
          <div
            className="animate-in p-10"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 8,
              boxShadow: '0 4px 24px rgba(10,14,26,0.06)',
            }}
          >
            <Sparkles size={28} style={{ color: '#C8963E', marginBottom: 16 }} />
            <h3
              className="mb-4"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 22,
                fontWeight: 400,
                color: '#0A0E1A',
              }}
            >
              Vision
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 15,
                color: '#2A4B5A',
                lineHeight: 1.7,
              }}
            >
              {glassInkHavenData.vision}
            </p>
          </div>
        </div>

        <div className="mb-28">
          <h2
            className="animate-in mb-12 text-center"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 300,
              color: '#0A0E1A',
            }}
          >
            What Glass Ink Haven Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {glassInkHavenData.products.map((product, i) => {
              const icons = [Heart, Sparkles, Users]
              const Icon = icons[i]
              return (
                <div
                  key={product.title}
                  className="animate-in p-10 text-center"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 8,
                    boxShadow: '0 4px 24px rgba(10,14,26,0.06)',
                  }}
                >
                  <div
                    className="mx-auto mb-6 flex items-center justify-center"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(200,150,62,0.1)',
                    }}
                  >
                    <Icon size={24} style={{ color: '#C8963E' }} />
                  </div>
                  <h3
                    className="mb-4"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 20,
                      fontWeight: 400,
                      color: '#0A0E1A',
                    }}
                  >
                    {product.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 15,
                      color: '#2A4B5A',
                      lineHeight: 1.65,
                    }}
                  >
                    {product.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mb-28">
          <h2
            className="animate-in mb-12 text-center"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 300,
              color: '#0A0E1A',
            }}
          >
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {glassInkHavenData.values.map((value, i) => {
              const Icon = valueIcons[i] || Heart
              return (
                <div
                  key={value.title}
                  className="animate-in p-8"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 8,
                    boxShadow: '0 4px 24px rgba(10,14,26,0.06)',
                  }}
                >
                  <Icon size={22} style={{ color: '#C8963E', marginBottom: 12 }} />
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 18,
                      fontWeight: 400,
                      color: '#0A0E1A',
                    }}
                  >
                    {value.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 14,
                      color: '#2A4B5A',
                      lineHeight: 1.6,
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className="animate-in p-10 lg:p-16 mb-20"
          style={{
            backgroundColor: '#0A0E1A',
            borderRadius: 8,
          }}
        >
          <h2
            className="mb-8 text-center"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
              fontWeight: 300,
              color: '#F5F2EC',
            }}
          >
            Future Goals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
            {glassInkHavenData.futureGoals.map((goal, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-1"
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    backgroundColor: '#C8963E',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 15,
                    fontWeight: 300,
                    color: 'rgba(245,242,236,0.8)',
                    lineHeight: 1.6,
                  }}
                >
                  {goal}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-in text-center mb-16">
          <a
            href="https://glassinkhaven.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="pill-button-filled inline-flex items-center gap-2"
          >
            View Our GIH Website
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="text-center pb-12">
          <blockquote
            className="animate-in mx-auto max-w-[700px]"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: '#0A0E1A',
              lineHeight: 1.5,
            }}
          >
            &ldquo;They are allowed to feel deeply. They are allowed to heal slowly. They are 
            allowed to express themselves through what they wear. It is more than clothing &mdash; 
            it is emotional expression made visible.&rdquo;
          </blockquote>
          <p className="animate-in mt-6 label-uppercase" style={{ color: '#C8963E' }}>
            &mdash; Glass Ink Haven
          </p>
        </div>
      </div>
    </div>
  )
}
