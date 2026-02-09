import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Zap } from 'lucide-react';
// Adiciona a imagem do usuário
import userPhoto from '../../assets/user-photo.jpg';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { icon: Code2, title: "Código Limpo", desc: "Soluções elegantes e escaláveis" },
    { icon: Rocket, title: "Performance", desc: "Otimização em cada detalhe" },
    { icon: Zap, title: "Inovação", desc: "Tecnologias de ponta" },
  ];

  return (
    <section ref={ref} className="relative min-h-screen bg-[#0a0a0a] py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Avatar/Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glowing border */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-emerald-400 to-cyan-400 rounded-2xl blur-xl opacity-30 animate-pulse" />
              
              {/* Main container */}
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-cyan-400/30 overflow-hidden">
                {/* Abstract code visualization */}
                <div className="absolute inset-0 p-8 font-mono text-xs text-cyan-400/30 overflow-hidden">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="whitespace-nowrap"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                    >
                      {`const build = () => { return <Innovation /> }`}
                    </motion.div>
                  ))}
                </div>

                 {/* Center focal point: Foto do usuário */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <motion.img
                     src={userPhoto}
                     alt="Foto do usuário"
                     className="w-32 h-32 rounded-full object-cover border-4 border-cyan-400 shadow-lg"
                     animate={{
                       boxShadow: [
                         '0 0 20px rgba(0, 240, 255, 0.5)',
                         '0 0 60px rgba(0, 240, 255, 0.8)',
                         '0 0 20px rgba(0, 240, 255, 0.5)',
                       ],
                     }}
                     transition={{ duration: 2, repeat: Infinity }}
                   />
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <motion.span
              className="inline-block text-sm tracking-[0.3em] text-cyan-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              SOBRE MIM
            </motion.span>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              CONSTRUINDO O
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                FUTURO DIGITAL
              </span>
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-8">
               Desenvolvedor de software focado na criação de aplicações web modernas, combinando
               front-end sólido com lógica de back-end bem estruturada. Meu trabalho gira em torno
               de transformar necessidades em sistemas claros, funcionais e eficientes.
            </p>

            <p className="text-lg text-gray-500 leading-relaxed mb-12">
               Atuo com atenção à arquitetura, organização de código e experiência do usuário.
               Encaro cada projeto como um produto, buscando consistência técnica, evolução contínua
               e soluções que se sustentam no uso real.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <feature.icon className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-bold text-sm mb-1">{feature.title}</h3>
                  <p className="text-gray-500 text-xs">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
            {/* ...existing code... */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}