import { Routes, Route, useLocation } from 'react-router'
import { lazy, Suspense } from 'react'
import Navigation from '@/components/Navigation'
import PageTransition from '@/components/PageTransition'
import Home from '@/pages/Home'

const Portfolio = lazy(() => import('@/pages/Portfolio'))
const PortfolioDetail = lazy(() => import('@/pages/PortfolioDetail'))
const GlassInkHavenPage = lazy(() => import('@/pages/GlassInkHavenPage'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function ScrollToTop() {
  useLocation()
  ;(window as any).scrollTo(0, 0)
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <PageTransition>
        <Suspense
          fallback={
            <div
              className="min-h-screen flex items-center justify-center"
              style={{ backgroundColor: '#0A0E1A' }}
            >
              <div
                className="w-8 h-8 border-2 border-t-transparent animate-spin"
                style={{
                  borderColor: '#C8963E',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                }}
              />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail />} />
            <Route path="/glass-ink-haven" element={<GlassInkHavenPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </PageTransition>
    </>
  )
}

