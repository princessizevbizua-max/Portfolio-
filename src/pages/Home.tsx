import Ocean from '@/components/Ocean'
import Hero from '@/sections/Hero'
import FeaturedWork from '@/sections/FeaturedWork'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Services from '@/sections/Services'
import GlassInkHaven from '@/sections/GlassInkHaven'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <>
      <Ocean />
      <div className="relative" style={{ zIndex: 1 }}>
        <Hero />
        <div className="relative" style={{ zIndex: 2 }}>
          <FeaturedWork />
          <About />
          <Skills />
          <Services />
          <GlassInkHaven />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}
