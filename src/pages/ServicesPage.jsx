import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Video, Users, Settings, Calendar, GraduationCap, ArrowRight, CheckCircle, Star, Phone } from 'lucide-react'

export default function ServicesPage() {
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
      description: "Transformamos seu conteúdo audiovisual em material acessível através de tradução profissional para Libras.",
      features: [
        "Interpretação simultânea de alta qualidade",
        "Edição especializada com sincronização perfeita",
        "Profissionais certificados em Libras",
        "Entrega rápida e pontual",
        "Suporte técnico completo"
      ],
      link: "/servicos/traducao-videos",
      color: "from-blue-500 to-cyan-500",
      price: "A partir de R$ 150/hora"
    },
    {
      icon: Users,
      title: "Intérprete de Libras",
      description: "Intérpretes qualificados para eventos presenciais e online, garantindo comunicação efetiva e inclusiva.",
      features: [
        "Intérpretes certificados pelo Prolibras",
        "Disponibilidade para eventos corporativos",
        "Atendimento presencial e remoto",
        "Experiência em diversos segmentos",
        "Flexibilidade de horários"
      ],
      link: "/servicos/interprete-libras",
      color: "from-purple-500 to-pink-500",
      price: "A partir de R$ 200/evento"
    },
    {
      icon: Settings,
      title: "Consultoria em Acessibilidade",
      description: "Análise completa e implementação de soluções para tornar seus conteúdos totalmente acessíveis.",
      features: [
        "Auditoria de acessibilidade completa",
        "Plano de ação personalizado",
        "Treinamento para equipes",
        "Acompanhamento contínuo",
        "Certificação de conformidade"
      ],
      link: "/servicos/consultoria-acessibilidade",
      color: "from-green-500 to-teal-500",
      price: "Consulte-nos"
    },
    {
      icon: Calendar,
      title: "Eventos Inclusivos",
      description: "Planejamento e execução completa de eventos com foco em acessibilidade e inclusão.",
      features: [
        "Planejamento estratégico completo",
        "Equipamentos especializados",
        "Equipe técnica dedicada",
        "Transmissão ao vivo acessível",
        "Suporte durante todo o evento"
      ],
      link: "/servicos/eventos-inclusivos",
      color: "from-orange-500 to-red-500",
      price: "Orçamento personalizado"
    },
    {
      icon: GraduationCap,
      title: "Capacitação e Treinamento",
      description: "Cursos e workshops especializados em Libras para empresas e profissionais.",
      features: [
        "Metodologia própria e eficaz",
        "Certificação reconhecida",
        "Aulas práticas e teóricas",
        "Material didático incluído",
        "Suporte pós-curso"
      ],
      link: "/servicos/capacitacao",
      color: "from-indigo-500 to-purple-500",
      price: "A partir de R$ 80/hora"
    }
  ]

  const benefits = [
    "Profissionais certificados e experientes",
    "Atendimento personalizado",
    "Tecnologia de ponta",
    "Suporte técnico completo",
    "Garantia de qualidade",
    "Preços competitivos"
  ]

  return (
    <div className="min-h-screen bg-white pt-28">
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center mb-16"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center bg-primary-100 text-primary-700 rounded-full px-4 py-2 mb-6"
            >
              <Star className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Nossos Serviços</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Soluções completas em <span className="gradient-text">acessibilidade</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Oferecemos um portfólio completo de serviços especializados em Libras, 
              garantindo inclusão e acessibilidade em todas as suas necessidades comunicacionais.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 mb-20"
          >
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                  whileHover={{ y: -5 }}
                >
                  <div className="grid lg:grid-cols-3 gap-8 p-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start space-x-6">
                        <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                          <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                          
                          <div className="grid md:grid-cols-2 gap-3">
                            {service.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-3">
                                <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                      <div>
                        <div className="text-sm text-gray-600 mb-2">Investimento</div>
                        <div className="text-xl font-bold text-primary-600 mb-6">{service.price}</div>
                      </div>
                      
                      <div className="space-y-4">
                        <Link
                          to={service.link}
                          className="w-full bg-gradient-to-r from-primary-600 to-accent-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                        >
                          <span>Saiba Mais</span>
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        <a
                          href="tel:(89) 98177-654"
                          className="w-full border-2 border-primary-600 text-primary-600 py-3 px-6 rounded-lg font-semibold hover:bg-primary-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          <span>Contato</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Por que escolher a Janela de Libras?
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Nossa experiência e dedicação fazem a diferença na qualidade dos serviços prestados. 
                Trabalhamos com paixão para garantir que a comunicação seja verdadeiramente acessível.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Pronto para começar?</h3>
              <p className="text-white/90 mb-8 leading-relaxed">
                Entre em contato conosco e descubra como podemos tornar seus conteúdos e eventos 
                verdadeiramente acessíveis e inclusivos.
              </p>
              
              <div className="space-y-4">
                <a
                  href="tel:(89) 98177-654"
                  className="w-full bg-white text-primary-600 py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <span>Ligar Agora: (89) 98177-654</span>
                </a>
                
                <div className="text-center">
                  <div className="text-sm text-white/80">
                    Atendimento: Segunda a Sexta, 8h às 18h
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}