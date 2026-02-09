import React from 'react';
import { motion } from 'framer-motion';

export default function Plataforma() {
  // Imagem placeholder, pode ser trocada por imagens reais depois
  const images = [
    '/assets/projects/placeholder.png'
  ];
  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 md:px-12">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-black mb-4">Plataforma Web Modular</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-pink-400">Estudo de produto digital</h2>
        {/* Imagem destaque */}
        <img
          src={images[0]}
          alt="Tela principal da Plataforma Modular"
          className="rounded-xl shadow-lg w-full max-h-96 object-cover mb-8"
        />
      </motion.div>

      {/* Contexto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <h3 className="text-2xl font-bold mb-2">Contexto do Projeto</h3>
        <p className="text-gray-300 mb-4">
          A Plataforma Web Modular é um estudo de arquitetura e design para produtos digitais escaláveis. O objetivo é criar uma base flexível, com módulos independentes, que permita rápida evolução e integração de novas funcionalidades sem comprometer a estabilidade do sistema.
        </p>
      </motion.div>

      {/* Problema */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <h3 className="text-2xl font-bold mb-2">Problema</h3>
        <p className="text-gray-300 mb-4">
          Muitos sistemas web crescem de forma desorganizada, dificultando manutenção, testes e evolução. A ausência de modularidade e padrões claros pode gerar retrabalho e lentidão no desenvolvimento.
        </p>
      </motion.div>

      {/* Solução */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <h3 className="text-2xl font-bold mb-2">Solução</h3>
        <p className="text-gray-300 mb-4">
          O projeto propõe uma arquitetura baseada em módulos independentes, com comunicação bem definida, uso de padrões de design e foco em escalabilidade. Cada módulo pode ser desenvolvido, testado e implantado separadamente, facilitando a evolução contínua da plataforma.
        </p>
      </motion.div>

      {/* Galeria */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <h3 className="text-2xl font-bold mb-2">Galeria do Projeto</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Tela Plataforma Modular ${idx + 1}`}
              className="rounded-lg shadow-md w-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </motion.div>

      {/* Resultado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <h3 className="text-2xl font-bold mb-2">Resultado</h3>
        <p className="text-gray-300 mb-4">
          O estudo resultou em uma base sólida para produtos digitais, com ganhos em organização, produtividade e facilidade de manutenção.
        </p>
      </motion.div>

      {/* Ações */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex gap-4 justify-center mt-8"
      >
        <a
          href="https://github.com/luizguilherme/plataforma-modular"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-pink-500 text-white rounded-lg font-semibold shadow hover:bg-pink-400 transition-colors"
        >
          Ver no GitHub
        </a>
        <a
          href="/"
          className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold shadow hover:bg-gray-600 transition-colors"
        >
          Voltar para o início
        </a>
      </motion.div>
    </section>
  );
}