
import React from 'react';
import { motion } from 'framer-motion';

// Importa todas as imagens da pasta PDVESTOQUE
const images = Object.values(
  import.meta.glob('/assets/PDVESTOQUE/*.{png,jpg,jpeg}', { eager: true })
);

export default function AutoColor() {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-black mb-4">AutoColor</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-emerald-400">Plataforma para lojas</h2>
        {/* Imagem destaque (primeira da pasta) */}
        {images.length > 0 && (
          <img
            src={images[0].default || images[0]}
            alt="Tela principal do AutoColor"
            className="rounded-xl shadow-lg w-full max-h-96 object-cover mb-8"
          />
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <h3 className="text-2xl font-bold mb-2">Contexto do Projeto</h3>
        <p className="text-gray-300 mb-4">
          Plataforma para lojas, com cadastro de produtos, controle de vendas, geração de receitas e relatórios.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <h3 className="text-2xl font-bold mb-2">Problema</h3>
        <p className="text-gray-300 mb-4">
          Lojas precisam de controle eficiente de estoque, vendas e geração de relatórios para tomada de decisão.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <h3 className="text-2xl font-bold mb-2">Solução</h3>
        <p className="text-gray-300 mb-4">
          O AutoColor integra cadastro de produtos, controle de vendas, geração de receitas e relatórios em uma plataforma web moderna e fácil de usar.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <h3 className="text-2xl font-bold mb-2">Tecnologias / Arquitetura</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>React</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>Tailwind CSS</li>
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
              alt={`Tela AutoColor ${idx + 1}`}
              className="rounded-lg shadow-md w-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <h3 className="text-2xl font-bold mb-2">Resultado</h3>
        <p className="text-gray-300 mb-4">
          Plataforma pronta para expansão, com controle total de vendas e estoque, e relatórios detalhados.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="flex gap-4 justify-center mt-8"
      >
        <a
          href="https://github.com/lzguisouza2211-gif/Autocolor-System"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-emerald-500 text-white rounded-lg font-semibold shadow hover:bg-emerald-400 transition-colors"
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
