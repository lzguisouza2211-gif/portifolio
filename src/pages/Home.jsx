import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroSection from "../components/portifolio/HeroSection";
import AboutSection from "../components/portifolio/AboutSection";
import ProjectsSection from "../components/portifolio/ProjectsSection";
import SkillsSection from "../components/portifolio/SkillsSection";
import TimelineSection from "../components/portifolio/TimelineSection";
import ContactSection from "../components/portifolio/ContactSection";

export default function Home() {
  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      <motion.div
        className="bg-black min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Custom cursor glow effect */}
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          <div id="cursor-glow" className="absolute w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 bg-cyan-400/5 rounded-full blur-[100px] transition-all duration-300 ease-out" style={{ left: '50%', top: '50%' }} />
        </div>

        {/* Navigation */}
        <motion.nav
          className="fixed top-0 left-0 right-0 z-40 px-6 py-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <a href="#" className="text-2xl font-black text-white">
              <span className="text-cyan-400">L</span>G
            </a>
            <div className="hidden md:flex items-center gap-8">
              {['Sobre', 'Projetos', 'Skills', 'Jornada', 'Contato'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-cyan-400 transition-colors tracking-wider"
                >
                  {item.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </motion.nav>

        {/* Sections */}
        <HeroSection onScrollToProjects={scrollToProjects} />
        
        <div id="sobre">
          <AboutSection />
        </div>
        
        <div ref={projectsRef} id="projetos">
          <ProjectsSection />
        </div>
        
        <div id="skills">
          <SkillsSection />
        </div>
        
        <div id="jornada">
          <TimelineSection />
        </div>
        
        <div id="contato">
          <ContactSection />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}