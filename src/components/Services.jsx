import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Video, Users, Settings, Calendar, GraduationCap, ArrowRight, Star, CheckCircle } from 'lucide-react'

export default function Services() {
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

  const services = [
    {
      icon: Video,
      title: "Tradução de Vídeos",
      description: "Tradução completa de conteúdo audiovisual para Libras com qualidade profissional.",
      features: ["Interpretação em tempo real", "Edição especializada", "Sincronização perfeita"],
      link: "/servicos/traducao-videos",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Intérprete de Libras",
      description: "Intérpretes certificados para eventos, reuniões e apresentações presenciais ou online.",
      features: ["Profissionais certificados", "Disponibilidade flexível", "Experiência comprovada"],
      link: "/servicos/interprete-libras",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "Consultoria em Acessibilidade",
      description: "Análise e implementação de soluções para tornar seus conteúdos totalmente acessíveis.",
      features: ["Auditoria completa", "Plano de ação", "Acompanhamento contínuo"],
      link: "/servicos/consultoria-acessibilidade",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Calendar,
      title: "Eventos Inclusivos",
      description: "Organização e suporte completo para eventos com acessibilidade em Libras.",
      features: ["Planejamento estratégico", "Equipamentos especializados", "Equipe dedicada"],
      link: "/servicos/eventos-inclusivos",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: GraduationCap,
      title: "Capacitação e Treinamento",
      description: "Cursos e workshops para empresas e profissionais interessados em Libras.",
      features: ["Metodologia própria", "Certificação reconhecida", "Aulas práticas"],
      link: "/servicos/capacitacao",
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Coordenadora de Eventos",
      comment: "Serviço impecável! Os intérpretes foram fundamentais para o sucesso do nosso evento.",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Diretor de Comunicação",
      comment: "A tradução de nossos vídeos ficou perfeita. Recomendo a Janela de Libras!",
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
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
            <Star className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Nossos Serviços</span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Soluções completas em <span className="gradient-text">acessibilidade</span>
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Oferecemos um portfólio completo de serviços especializados em Libras, 
            garantindo inclusão e acessibilidade em todas as suas necessidades comunicacionais.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`h-32 bg-gradient-to-r ${service.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/10"></div>
                  <div className="absolute bottom-4 left-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <motion.div 
                    className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  ></motion.div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300 group/link"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Precisa de um serviço personalizado?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e vamos desenvolver uma solução sob medida 
            para suas necessidades específicas de acessibilidade.
          </p>
          <a
            href="tel:(89) 98177-654"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group"
          >
            <span>Fale com Nossa Equipe</span>
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12"
          >
            O que nossos clientes dizem
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}