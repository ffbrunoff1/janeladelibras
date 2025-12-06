import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showServices, setShowServices] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'Tradução de Vídeos', href: '/servicos/traducao-videos', description: 'Tradução completa de vídeos para Libras' },
    { name: 'Intérprete de Libras', href: '/servicos/interprete-libras', description: 'Intérpretes qualificados para eventos' },
    { name: 'Consultoria Acessibilidade', href: '/servicos/consultoria-acessibilidade', description: 'Consultoria em acessibilidade digital' },
    { name: 'Eventos Inclusivos', href: '/servicos/eventos-inclusivos', description: 'Organização de eventos acessíveis' },
    { name: 'Capacitação', href: '/servicos/capacitacao', description: 'Treinamentos e cursos especializados' }
  ]

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.6
      }
    }
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      x: "100%",
      transition: { duration: 0.3 }
    }
  }

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  }

  return (
    <>
      <motion.div 
        className="bg-primary-700 text-white py-2 text-sm hidden md:block"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(89) 98177-654</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Natal, RN</span>
              </div>
            </div>
            <div className="text-right">
              <span>Comunicação Acessível para Todos</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200/50' 
            : 'bg-transparent'
        }`}
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/71c3ad86-fe84-47fb-8101-fd88b9697362/logo_1764993049730_0.png"
                alt="Janela de Libras"
                className="h-12 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link 
                to="/"
                className={`font-medium transition-colors duration-300 hover:text-primary-600 ${
                  location.pathname === '/' 
                    ? (isScrolled ? 'text-primary-600' : 'text-white') 
                    : (isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white')
                }`}
              >
                Início
              </Link>
              
              <div 
                className="relative"
                onMouseEnter={() => setShowServices(true)}
                onMouseLeave={() => setShowServices(false)}
              >
                <button className={`flex items-center space-x-1 font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:text-primary-600' : 'text-white/90 hover:text-white'
                }`}>
                  <span>Serviços</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                <AnimatePresence>
                  {showServices && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      {services.map((service, index) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="block px-6 py-4 hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 transition-all duration-300 group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                                {service.name}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {service.description}
                              </p>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary-600 transition-colors duration-300" />
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a 
                href="tel:(89) 98177-654"
                className="btn-primary flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>Contato</span>
              </a>
            </div>

            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </nav>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden fixed inset-0 top-20 bg-white z-40 overflow-y-auto"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-6 py-8 space-y-8">
                <Link 
                  to="/"
                  className="block text-xl font-semibold text-gray-900 hover:text-primary-600 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Início
                </Link>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Serviços</h3>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="block pl-4 py-2 text-gray-700 hover:text-primary-600 transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-8 border-t border-gray-200">
                  <a 
                    href="tel:(89) 98177-654"
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <Phone className="h-4 w-4" />
                    <span>Entrar em Contato</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}