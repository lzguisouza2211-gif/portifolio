import React from 'react';
import { motion } from 'framer-motion';

// Importa todas as imagens da pasta PDV+CARDAPIO
const images = Object.values(
  import.meta.glob('/assets/PDV+CARDAPIO/*.{png,jpg,jpeg}', { eager: true })
);

export default function PDV() {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 md:px-12">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-black mb-4">PDV — Sistema de Vendas</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-cyan-400">Sistema web para operação comercial</h2>
        {images.length > 0 && (
          <img
            src={images[0].default || images[0]}
            alt="Tela principal do PDV"
            className="rounded-xl shadow-lg w-full max-h-96 object-cover mb-8"
          />
        )}
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
          O PDV — Sistema de Vendas é utilizado em operações reais de lojas físicas, permitindo controle de vendas, estoque, relatórios e integração fiscal. O sistema foi desenvolvido para atender demandas de agilidade, segurança e integração com outros módulos comerciais.
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
          Lojas físicas enfrentam dificuldades para controlar vendas, estoque, emissão de notas fiscais e relatórios operacionais de forma integrada e eficiente. Sistemas antigos não atendem às necessidades de integração e usabilidade.
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
          O PDV resolve esses problemas com uma interface moderna, integração fiscal, controle de estoque em tempo real e geração de relatórios detalhados. O sistema é modular, escalável e fácil de usar.
        </p>
      </motion.div>

      {/* Tecnologias / Arquitetura */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <h3 className="text-2xl font-bold mb-2">Tecnologias / Arquitetura</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>React</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>Tailwind CSS</li>
          <li>Arquitetura modular</li>
        </ul>
      </motion.div>

      {/* Galeria de Telas */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-5xl mx-auto mb-10"
      >
        <h3 className="text-2xl font-bold mb-4">Galeria de Telas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img.default || img}
              alt={`Tela ${idx + 1}`}
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
          O sistema trouxe ganhos operacionais significativos: agilidade no atendimento, redução de erros, integração fiscal automatizada e relatórios precisos para tomada de decisão.
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
          href="https://github.com/luizguilherme/pdv"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold shadow hover:bg-cyan-400 transition-colors"
        >
          Ver no GitHub
        </a>
        <a
          href="/projetos"
          className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold shadow hover:bg-gray-600 transition-colors"
        >
          Voltar aos projetos
        </a>
      </motion.div>
    </section>
  );
}
