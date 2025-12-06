import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Heart, ArrowUp, Users, Video, Settings } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const services = [
    { name: 'Tradução de Vídeos', href: '/servicos/traducao-videos', icon: Video },
    { name: 'Intérprete de Libras', href: '/servicos/interprete-libras', icon: Users },
    { name: 'Consultoria Acessibilidade', href: '/servicos/consultoria-acessibilidade', icon: Settings }
  ]

  return (
    <footer className="bg-gradient-to-br from-primary-800 to-primary-900 text-white pb-20">
      <motion.div
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8"
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/71c3ad86-fe84-47fb-8101-fd88b9697362/logo_1764993049730_0.png"
                alt="Janela de Libras"
                className="h-12 w-auto filter brightness-0 invert"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Especializados em tradução de conteúdo para Libras, oferecemos inclusão e acessibilidade 
              através de intérpretes qualificados e soluções inovadoras.
            </p>

            <div className="space-y-4">
              <motion.div 
                variants={itemVariants}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <Phone className="h-5 w-5 text-accent-400" />
                <a href="tel:(89) 98177-654" className="hover:text-accent-400 transition-colors">
                  (89) 98177-654
                </a>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex items-center space-x-3 text-gray-300"
              >
                <MapPin className="h-5 w-5 text-accent-400" />
                <span>Natal, RN</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">Serviços</h3>
            <ul className="space-y-4">
              {services.map((service) => {
                const IconComponent = service.icon
                return (
                  <li key={service.href}>
                    <Link
                      to={service.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <IconComponent className="h-4 w-4 text-accent-400 group-hover:text-accent-300" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {service.name}
                      </span>
                    </Link>
                  </li>
                )
              })}
              <li>
                <Link
                  to="/servicos/eventos-inclusivos"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <Users className="h-4 w-4 text-accent-400 group-hover:text-accent-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Eventos Inclusivos
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos/capacitacao"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <Users className="h-4 w-4 text-accent-400 group-hover:text-accent-300" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    Capacitação
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  Todos os Serviços
                </Link>
              </li>
              <li>
                <a
                  href="tel:(89) 98177-654"
                  className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  Contato
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
              <div className="text-sm text-gray-300 space-y-2">
                <p>Segunda a Sexta</p>
                <p className="text-accent-400 font-medium">8:00 - 18:00</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-primary-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>© {currentYear} Janela de Libras. Todos os direitos reservados.</span>
              <Heart className="h-4 w-4 text-red-400" />
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                Criado com <em><a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-accent-300 transition-colors">Papum</a></em>
              </span>
              
              <motion.button
                onClick={scrollToTop}
                className="bg-accent-500 hover:bg-accent-600 text-white p-2 rounded-full transition-all duration-300 hover:shadow-lg"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowUp className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}