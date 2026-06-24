import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    setTransitioning(true)
    const timer = setTimeout(() => {
      setDisplayChildren(children)
      window.scrollTo(0, 0)
      const fadeTimer = setTimeout(() => {
        setTransitioning(false)
      }, 400)
      return () => clearTimeout(fadeTimer)
    }, 400)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      {displayChildren}
      <div
        className="fixed inset-0 z-[100] pointer-events-none transition-opacity duration-400"
        style={{
          backgroundColor: '#0A0E1A',
          opacity: transitioning ? 1 : 0,
        }}
      />
    </>
  )
}

