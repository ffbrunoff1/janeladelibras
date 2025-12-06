import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ServicesPage from './pages/ServicesPage'
import VideoTranslationPage from './pages/VideoTranslationPage'
import LibrasInterpreterPage from './pages/LibrasInterpreterPage'
import AccessibilityConsultingPage from './pages/AccessibilityConsultingPage'
import InclusiveEventsPage from './pages/InclusiveEventsPage'
import TrainingPage from './pages/TrainingPage'

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Contact />
    </>
  )
}

const AnimatedPage = ({ children }) => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <AnimatedPage>
              <HomePage />
            </AnimatedPage>
          } />
          <Route path="/servicos" element={
            <AnimatedPage>
              <ServicesPage />
            </AnimatedPage>
          } />
          <Route path="/servicos/traducao-videos" element={
            <AnimatedPage>
              <VideoTranslationPage />
            </AnimatedPage>
          } />
          <Route path="/servicos/interprete-libras" element={
            <AnimatedPage>
              <LibrasInterpreterPage />
            </AnimatedPage>
          } />
          <Route path="/servicos/consultoria-acessibilidade" element={
            <AnimatedPage>
              <AccessibilityConsultingPage />
            </AnimatedPage>
          } />
          <Route path="/servicos/eventos-inclusivos" element={
            <AnimatedPage>
              <InclusiveEventsPage />
            </AnimatedPage>
          } />
          <Route path="/servicos/capacitacao" element={
            <AnimatedPage>
              <TrainingPage />
            </AnimatedPage>
          } />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}