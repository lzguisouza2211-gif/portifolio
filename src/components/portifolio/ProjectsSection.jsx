import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 'pdv',
    title: 'PDV — Sistema de Vendas',
    subtitle: 'Gestão de vendas e estoque',
    description: 'Sistema completo para frente de loja, utilizado em operações reais. Controle de vendas, estoque, relatórios e integração fiscal.',
    image: '/assets/projects/placeholder.png',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    github: 'https://github.com/luizguilherme/pdv',
    live: '/projetos/pdv',
    color: 'bg-cyan-400',
  },
  {
    id: 'autocolor',
    title: 'AutoColor',
    subtitle: 'Venda e gestão de tintas',
    description: 'Plataforma para lojas de tintas, com cadastro de produtos, controle de vendas, geração de receitas e relatórios.',
    image: '/assets/projects/placeholder.png',
    tags: ['React', 'Express', 'MongoDB', 'Tailwind'],
    github: 'https://github.com/luizguilherme/autocolor',
    live: '/projetos/autocolor',
    color: 'bg-emerald-400',
  },
  {
    id: 'dashboard',
    title: 'Dashboard de Monitoramento',
    subtitle: 'Estudo de arquitetura modular',
    description: 'Projeto conceitual para monitoramento de sistemas, focado em modularidade, escalabilidade e integração de dados.',
    image: '/assets/projects/placeholder.png',
    tags: ['React', 'TypeScript', 'Arquitetura'],
    github: 'https://github.com/luizguilherme/dashboard-conceitual',
    live: '/projetos/dashboard',
    color: 'bg-indigo-400',
  },
  {
    id: 'plataforma',
    title: 'Plataforma Web Modular',
    subtitle: 'Estudo de produto digital',
    description: 'Exploração de padrões de design e organização de código para plataformas web escaláveis e flexíveis.',
    image: '/assets/projects/placeholder.png',
    tags: ['React', 'Design Patterns', 'UX'],
    github: 'https://github.com/luizguilherme/plataforma-modular',
    live: '/projetos/plataforma',
    color: 'bg-pink-400',
  },
];

  function ProjectCard({ project, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    return (
      <motion.div
        ref={ref}
        className="group relative cursor-pointer"
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: index * 0.15 }}
      >
        <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-white/10 hover:border-cyan-400/50 transition-all duration-500">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
            <div
              className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${project.color}`}
            />
          </div>

          <div className="p-6 md:p-8">
            <span
              className={`text-xs tracking-[0.25em] bg-gradient-to-r ${project.color} bg-clip-text text-transparent font-semibold`}
            >
              {project.subtitle.toUpperCase()}
            </span>

            <h3 className="text-2xl md:text-3xl font-black text-white mt-2 mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400"
                >
                  <Github className="w-5 h-5" />
                  <span className="text-sm">Código</span>
                </a>
              )}

              <a
                href={project.live}
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400"
              >
                <ExternalLink className="w-5 h-5" />
                <span className="text-sm">Ver projeto</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative min-h-screen bg-black py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <span className="text-sm tracking-[0.3em] text-cyan-400">
            PORTFÓLIO
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mt-4">
            PROJETOS
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              REAIS & CONCEITUAIS
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.live}
              target="_self"
              className="block"
              style={{ textDecoration: 'none' }}
            >
              <ProjectCard project={project} index={index} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
