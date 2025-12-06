import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Users, Award, Target, CheckCircle, ArrowRight } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
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

  const values = [
    {
      icon: Heart,
      title: "Inclusão",
      description: "Acreditamos que a comunicação é um direito fundamental de todos, sem exceções."
    },
    {
      icon: Users,
      title: "Comunidade",
      description: "Fortalecemos a comunidade surda através de serviços especializados e acessíveis."
    },
    {
      icon: Award,
      title: "Qualidade",
      description: "Nossos intérpretes são certificados e possuem vasta experiência em tradução."
    },
    {
      icon: Target,
      title: "Precisão",
      description: "Garantimos tradução fiel e contextual em todos os nossos serviços."
    }
  ]

  const achievements = [
    { number: "5+", label: "Anos de Experiência" },
    { number: "1000+", label: "Horas de Interpretação" },
    { number: "500+", label: "Vídeos Traduzidos" },
    { number: "50+", label: "Eventos Atendidos" }
  ]

  const benefits = [
    "Intérpretes certificados e experientes",
    "Atendimento personalizado para cada necessidade",
    "Disponibilidade para eventos presenciais e online",
    "Consultoria completa em acessibilidade",
    "Tecnologia de ponta para transmissões",
    "Compromisso com prazos e qualidade"
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6"
          >
            <Heart className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Sobre a Janela de Libras</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Construindo pontes de <span className="gradient-text">comunicação</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Na Janela de Libras, nossa missão é promover a inclusão e acessibilidade através da língua de sinais, 
            oferecendo serviços especializados que conectam pessoas e quebram barreiras comunicacionais.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl opacity-10"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossa História</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Fundada com o propósito de tornar a comunicação verdadeiramente acessível, a Janela de Libras 
                  nasceu da necessidade de oferecer serviços de qualidade em tradução e interpretação de Libras 
                  em Natal, RN.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Nossa equipe é formada por profissionais certificados e apaixonados pela causa da inclusão, 
                  trabalhando incansavelmente para garantir que a comunicação seja um direito exercido por todos.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-4 bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg"
                    >
                      <div className="text-2xl font-bold text-primary-600 mb-1">{achievement.number}</div>
                      <div className="text-sm text-gray-600">{achievement.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Por que nos escolher?</h3>
            </motion.div>

            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                whileHover={{ x: 10 }}
              >
                <CheckCircle className="h-6 w-6 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700 leading-relaxed">{benefit}</span>
              </motion.div>
            ))}

            <motion.div variants={itemVariants}>
              <a
                href="tel:(89) 98177-654"
                className="inline-flex items-center bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group"
              >
                <span>Fale Conosco</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 card-hover"
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full mb-6">
                  <IconComponent className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}