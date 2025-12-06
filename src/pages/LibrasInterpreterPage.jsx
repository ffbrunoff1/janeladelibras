import React from 'react'
import { motion } from 'framer-motion'
import { Users, Award, Clock, CheckCircle, Calendar, Monitor, Building, GraduationCap, ArrowRight, Phone, Star } from 'lucide-react'

export default function LibrasInterpreterPage() {
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

  const interpreterFeatures = [
    {
      icon: Award,
      title: "Certificação Prolibras",
      description: "Todos os nossos intérpretes possuem certificação oficial e registro profissional."
    },
    {
      icon: Clock,
      title: "Disponibilidade Flexível",
      description: "Atendemos eventos em horários diversos, incluindo finais de semana e feriados."
    },
    {
      icon: Users,
      title: "Equipe Experiente",
      description: "Profissionais com vasta experiência em diferentes tipos de eventos e contextos."
    },
    {
      icon: Monitor,
      title: "Modalidade Presencial e Online",
      description: "Oferecemos interpretação tanto presencial quanto para eventos virtuais."
    }
  ]

  const eventTypes = [
    {
      icon: Building,
      title: "Eventos Corporativos",
      description: "Reuniões, apresentações, treinamentos e conferências empresariais.",
      examples: ["Reuniões de diretoria", "Palestras corporativas", "Treinamentos internos", "Conferências de resultados"]
    },
    {
      icon: GraduationCap,
      title: "Eventos Acadêmicos",
      description: "Aulas, seminários, defesas e eventos educacionais.",
      examples: ["Aulas universitárias", "Defesas de dissertação", "Seminários acadêmicos", "Workshops educacionais"]
    },
    {
      icon: Calendar,
      title: "Eventos Sociais",
      description: "Casamentos, formaturas e celebrações inclusivas.",
      examples: ["Cerimônias de casamento", "Formaturas", "Eventos comunitários", "Celebrações religiosas"]
    }
  ]

  const qualifications = [
    "Certificação Prolibras atualizada",
    "Graduação em áreas relacionadas",
    "Experiência mínima de 3 anos",
    "Especialização em diferentes contextos",
    "Formação continuada em Libras",
    "Registro profissional ativo"
  ]

  const benefits = [
    "Comunicação efetiva e inclusiva",
    "Cumprimento de legislação de acessibilidade", 
    "Melhoria da imagem corporativa",
    "Ampliação do público-alvo",
    "Responsabilidade social demonstrada",
    "Ambiente mais diverso e inclusivo"
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
              className="inline-flex items-center bg-purple-100 text-purple-700 rounded-full px-4 py-2 mb-6"
            >
              <Users className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Intérprete de Libras</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Intérpretes certificados para <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">eventos inclusivos</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Oferecemos intérpretes de Libras qualificados e experientes para garantir 
              comunicação efetiva e inclusiva em seus eventos, reuniões e apresentações.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {interpreterFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white">
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6">Nossa Equipe</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <Award className="h-6 w-6 text-pink-300" />
                      <span>5+ Anos de experiência média</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="h-6 w-6 text-pink-300" />
                      <span>Intérpretes certificados</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="h-6 w-6 text-pink-300" />
                      <span>Disponibilidade 24/7</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="font-semibold mb-3">Qualificações da Equipe:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {qualifications.slice(0, 3).map((qual, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-pink-300" />
                          <span className="text-sm">{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tipos de Eventos que Atendemos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Nossa experiência abrange diversos tipos de eventos, sempre garantindo 
                interpretação de alta qualidade e comunicação efetiva.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {eventTypes.map((eventType, index) => {
                const IconComponent = eventType.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="h-8 w-8 text-purple-600" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{eventType.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{eventType.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Exemplos:</h4>
                      {eventType.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-purple-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{example}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Benefícios da Interpretação em Libras
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Incluir interpretação em Libras em seus eventos não é apenas uma questão de acessibilidade, 
                  mas uma demonstração de responsabilidade social e compromisso com a inclusão.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Solicite um Orçamento
                </h3>
                
                <div className="space-y-4 text-sm text-gray-600 mb-6">
                  <p><strong>Interpretação presencial:</strong> A partir de R$ 200/evento</p>
                  <p><strong>Interpretação online:</strong> A partir de R$ 150/evento</p>
                  <p><strong>Eventos de longa duração:</strong> Valores especiais</p>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-purple-900 mb-2">Incluso no serviço:</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Reunião de briefing pré-evento</li>
                    <li>• Material de apoio personalizado</li>
                    <li>• Suporte técnico durante o evento</li>
                    <li>• Relatório pós-evento (opcional)</li>
                  </ul>
                </div>