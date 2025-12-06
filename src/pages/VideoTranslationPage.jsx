import React from 'react'
import { motion } from 'framer-motion'
import { Video, Play, CheckCircle, Clock, Users, Award, ArrowRight, Phone, Star } from 'lucide-react'

export default function VideoTranslationPage() {
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

  const features = [
    {
      icon: Users,
      title: "Intérpretes Certificados",
      description: "Profissionais qualificados com certificação Prolibras e vasta experiência em tradução audiovisual."
    },
    {
      icon: Video,
      title: "Tecnologia Avançada",
      description: "Utilizamos equipamentos de ponta para garantir a melhor qualidade de imagem e sincronização."
    },
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Processos otimizados que garantem entregas pontuais sem comprometer a qualidade."
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Revisão completa de todo material traduzido para garantir fidelidade e clareza."
    }
  ]

  const videoTypes = [
    "Vídeos corporativos e institucionais",
    "Conteúdo educacional e treinamentos",
    "Palestras e seminários",
    "Campanhas publicitárias",
    "Documentários e reportagens",
    "Lives e transmissões ao vivo",
    "Tutoriais e cursos online",
    "Apresentações empresariais"
  ]

  const process = [
    {
      step: "01",
      title: "Análise do Conteúdo",
      description: "Revisamos seu vídeo para entender o contexto e definir a melhor abordagem de tradução."
    },
    {
      step: "02", 
      title: "Preparação do Script",
      description: "Criamos um roteiro detalhado considerando as nuances da Libras e o público-alvo."
    },
    {
      step: "03",
      title: "Gravação Profissional",
      description: "Nossos intérpretes realizam a tradução com equipamentos profissionais de alta qualidade."
    },
    {
      step: "04",
      title: "Edição e Sincronização",
      description: "Editamos e sincronizamos perfeitamente a tradução com o conteúdo original."
    },
    {
      step: "05",
      title: "Revisão e Entrega",
      description: "Fazemos uma revisão completa e entregamos o material final em alta qualidade."
    }
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
              className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-6"
            >
              <Video className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Tradução de Vídeos</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Transforme seus vídeos em <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">conteúdo acessível</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Oferecemos tradução profissional de vídeos para Libras, garantindo que seu conteúdo 
              alcance e inclua toda a comunidade surda com qualidade e fidelidade.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="relative bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 text-white">
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-center h-64 bg-white/10 rounded-xl mb-6">
                    <motion.div
                      className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Play className="h-10 w-10 text-white ml-1" />
                    </motion.div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">Vídeo Demonstrativo</h3>
                  <p className="text-white/90">Veja como transformamos conteúdo em material acessível</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tipos de Vídeos que Traduzimos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nossa experiência abrange diversos tipos de conteúdo audiovisual, 
                sempre mantendo a qualidade e fidelidade da mensagem original.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">{type}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nosso Processo de Trabalho
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Seguimos um processo estruturado para garantir a máxima qualidade 
                e fidelidade em cada tradução realizada.
              </p>
            </div>

            <div className="space-y-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white text-center"
          >
            <div className="max-w-3xl mx-auto">
              <Star className="h-12 w-12 text-cyan-300 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Pronto para tornar seus vídeos acessíveis?
              </h3>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Entre em contato conosco e receba um orçamento personalizado para seu projeto. 
                Nossa equipe está pronta para transformar seu conteúdo em material verdadeiramente inclusivo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:(89) 98177-654"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <span>Ligar Agora</span>
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="mailto:contato@janeladelibras.com"
                  className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  Solicitar Orçamento
                </a>
              </div>
              
              <div className="mt-8 text-center">
                <div className="text-sm text-white/80">
                  📞 (89) 98177-654 | Atendimento: Seg-Sex, 8h às 18h
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}