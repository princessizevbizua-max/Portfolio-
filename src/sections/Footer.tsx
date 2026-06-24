import { Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="relative w-full py-12"
      style={{ backgroundColor: '#0A0E1A', zIndex: 2 }}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col items-center gap-6">
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/princess-izevbizua-6671b1360"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
            style={{ color: 'rgba(245,242,236,0.5)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#C8963E' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,242,236,0.5)' }}
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:princessizevbizua@gmail.com"
            className="transition-colors duration-300"
            style={{ color: 'rgba(245,242,236,0.5)' }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#C8963E' }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(245,242,236,0.5)' }}
          >
            <Mail size={20} />
          </a>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 12,
            color: 'rgba(245,242,236,0.4)',
          }}
        >
          &copy; 2025 Princess Izevbizua. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
