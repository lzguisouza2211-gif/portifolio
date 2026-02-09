import { useNavigate } from 'react-router-dom';

import React from 'react';
import { motion } from 'framer-motion';
import { getCrmFisioImages } from '../lib/crmFisioImages';

const images = getCrmFisioImages();

export default function FisioClinic() {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 md:px-12">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-black mb-4">FisioClinic — CRM de Fisioterapia</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-6 text-indigo-400">Gestão clínica, academia e saúde</h2>
        {/* Imagem destaque (primeira da pasta) */}
        {images.length > 0 && (
          <img
            src={images[0]}
            alt="Tela principal do FisioClinic"
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
          Plataforma de gestão clínica para fisioterapia, academia e saúde, evoluindo de um MVP operacional para uma solução completa com BI, automação e inteligência artificial.
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
          Clínicas e academias enfrentam desafios para integrar agendas, prontuários, financeiro e comunicação, dificultando a gestão eficiente e o acompanhamento dos pacientes/alunos.
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
          O FisioClinic oferece uma plataforma completa, com login seguro, agenda inteligente, controle de pacotes, mensalidades, financeiro, prontuário eletrônico, BI, automação e integração com WhatsApp e IA. Evolui por fases, permitindo crescimento gradual e adaptação às necessidades da clínica.
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
              alt={`Tela FisioClinic ${idx + 1}`}
              className="rounded-lg shadow-md w-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </motion.div>

      {/* Fases */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <h3 className="text-2xl font-bold mb-2">Evolução por Fases</h3>
        <ol className="list-decimal pl-6 text-gray-300">
          <li>MVP operacional: gestão clínica e academia</li>
          <li>ERP clínico completo: prontuário, avaliação, relatórios</li>
          <li>BI profissional: classificações, gráficos, tendências</li>
          <li>IA + automação: integração, agendamento, lembretes</li>
          <li>IA avançada: textos automáticos, insights estratégicos</li>
        </ol>
      </motion.div>

      {/* Resultado e Ações no final */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="max-w-4xl mx-auto mb-10"
            >
              <h3 className="text-2xl font-bold mb-2">Resultado</h3>
              <p className="text-gray-300 mb-4">
                O sistema FisioClinic permite uma gestão clínica eficiente, integração de processos, automação e evolução contínua, trazendo ganhos operacionais e estratégicos para clínicas e academias.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-4 justify-center mt-8"
            >
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
