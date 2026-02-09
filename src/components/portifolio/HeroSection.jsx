import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ onScrollToProjects }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-30"
        style={{
          background: 'radial-gradient(circle, #00f0ff 0%, transparent 70%)',
          left: '10%',
          top: '20%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-20"
        style={{
          background: 'radial-gradient(circle, #ff3366 0%, transparent 70%)',
          right: '10%',
          bottom: '20%',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.span
            className="inline-block text-sm md:text-base tracking-[0.3em] text-cyan-400 mb-6 font-light"
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            DESENVOLVEDOR FULL STACK
          </motion.span>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="block">LUIZ</span>
          <span 
            className="block bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent"
            style={{
              textShadow: '0 0 80px rgba(0, 240, 255, 0.5)',
            }}
          >
            GUILHERME
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Criador de Soluções Digitais & Experiências Imersivas
        </motion.p>

        <motion.button
          onClick={onScrollToProjects}
          className="group relative px-10 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold tracking-widest text-sm overflow-hidden transition-all duration-500 hover:text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">VER PROJETOS</span>
          <motion.div
            className="absolute inset-0 bg-cyan-400"
            initial={{ x: '-100%' }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-[0.2em] text-gray-500">SCROLL</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </motion.div>
      </motion.div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-cyan-400/30" />
      <div className="absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-cyan-400/30" />
      <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-cyan-400/30" />
      <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-cyan-400/30" />
    </section>
  );
}