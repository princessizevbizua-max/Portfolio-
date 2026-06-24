import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setMobileOpen(false)
    if (!isHome) {
      window.location.href = `/#${id}`
      return
    }
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Glass Ink Haven', id: 'glass-ink-haven' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          backgroundColor: scrolled ? '#0A0E1A' : 'transparent',
          height: 64,
        }}
      >
        <div className="flex items-center justify-between h-full px-6 lg:px-12 max-w-[1400px] mx-auto">
          <Link
            to="/"
            className="font-[var(--font-heading)] text-lg tracking-tight"
            style={{ color: '#F5F2EC' }}
          >
            Princess Izevbizua
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="label-uppercase transition-colors duration-300 hover:text-[#C8963E]"
                style={{ color: '#F5F2EC' }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="pill-button"
              style={{ color: '#F5F2EC', borderColor: '#F5F2EC' }}
            >
              Get in Touch
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: '#F5F2EC' }}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          style={{ backgroundColor: '#0A0E1A' }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="font-[var(--font-heading)] text-2xl"
              style={{ color: '#F5F2EC' }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="pill-button mt-4"
            style={{ color: '#C8963E', borderColor: '#C8963E' }}
          >
            Get in Touch
          </button>
        </div>
      )}
    </>
  )
}

