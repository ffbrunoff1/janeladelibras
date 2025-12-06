import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play, Users, Award, MapPin, Phone } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.8
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 bg-accent-500 rounded-full opacity-20"
        variants={floatingVariants}
        animate="animate"
      ></motion.div>
      
      <motion.div 
        className="absolute bottom-20 left-10 w-24 h-24 bg-white rounded-full opacity-10"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-white"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <Award className="h-4 w-4 mr-2 text-accent-400" />
              <span className="text-sm font-medium">Especialistas em Acessibilidade</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Quebramos <span className="text-accent-400">barreiras</span> da comunicação
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl"
            >
              Somos especialistas em tradução de conteúdo para Libras, oferecendo inclusão e acessibilidade através de intérpretes qualificados e soluções inovadoras.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.a
                href="tel:(89) 98177-654"
                className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span>Fale Conosco</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 border border-white/20 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="h-5 w-5" />
                <span>Conheça Nosso Trabalho</span>
              </motion.button>
            </motion.div>

            <motion.div 
              variants={statsVariants}
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-400 mb-2">500+</div>
                <div className="text-sm text-gray-300">Vídeos Traduzidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-400 mb-2">50+</div>
                <div className="text-sm text-gray-300">Eventos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent-400 mb-2">100%</div>
                <div className="text-sm text-gray-300">Acessibilidade</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
            className="relative"
          >
            <div className="relative">
              <motion.div 
                className="absolute -inset-4 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl opacity-20"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-center h-64 bg-gradient-to-br from-accent-400/20 to-primary-500/20 rounded-xl mb-6">
                  <div className="text-center text-white">
                    <Users className="h-16 w-16 mx-auto mb-4 text-accent-400" />
                    <h3 className="text-xl font-bold mb-2">Intérpretes Qualificados</h3>
                    <p className="text-gray-200">Comunicação eficaz em Libras</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <MapPin className="h-6 w-6 text-accent-400 mx-auto mb-2" />
                    <div className="text-sm text-white font-medium">Natal, RN</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <Award className="h-6 w-6 text-accent-400 mx-auto mb-2" />
                    <div className="text-sm text-white font-medium">Certificados</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}