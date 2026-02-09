import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Sparkles } from 'lucide-react';

const contactLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/luizguilherme",
    description: "Veja meu código",
    color: "hover:border-white hover:text-white",
    bgHover: "hover:bg-white/10",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/luizguilherme",
    description: "Conecte-se comigo",
    color: "hover:border-blue-500 hover:text-blue-400",
    bgHover: "hover:bg-blue-500/10",
  },
  {
    name: "E-mail",
    icon: Mail,
    href: "mailto:contato@luizguilherme.dev",
    description: "Envie uma mensagem",
    color: "hover:border-cyan-400 hover:text-cyan-400",
    bgHover: "hover:bg-cyan-400/10",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen bg-[#0a0a0a] py-32 overflow-hidden flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Large glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[200px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        {/* Main Content */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 text-cyan-400 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm tracking-[0.3em]">VAMOS CONVERSAR</span>
            <Sparkles className="w-5 h-5" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight">
            VAMOS CONSTRUIR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400">
              ALGO JUNTOS?
            </span>
          </h2>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Estou sempre aberto a novas oportunidades, projetos interessantes 
            e conexões significativas. Entre em contato!
          </motion.p>

          {/* Contact Links */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center gap-4 px-8 py-6 bg-white/5 border border-white/10 rounded-2xl transition-all duration-500 ${link.color} ${link.bgHover}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <link.icon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <span className="block text-white font-bold text-lg">{link.name}</span>
                  <span className="block text-gray-500 text-sm">{link.description}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-32 pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-500 text-sm">
            © 2024 Luiz Guilherme. Feito com{' '}
            <span className="text-cyan-400">♥</span> e muito{' '}
            <span className="text-cyan-400">código</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}