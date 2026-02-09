import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Code, Award, Rocket, Star, Target } from 'lucide-react';

const timelineEvents = [
  {
    year: "2022",
    title: "Início da Jornada",
    description: "Primeiro contato com programação e desenvolvimento web. Descoberta da paixão por criar soluções digitais.",
    icon: GraduationCap,
    color: "from-blue-400 to-cyan-400",
  },
  {
    year: "2023",
    title: "Primeiros Projetos",
    description: "Desenvolvimento dos primeiros projetos pessoais. Aprendizado intensivo de React e Node.js.",
    icon: Code,
    color: "from-cyan-400 to-emerald-400",
  },
  {
    year: "2023",
    title: "Certificações",
    description: "Conclusão de cursos especializados e certificações em desenvolvimento Full Stack.",
    icon: Award,
    color: "from-emerald-400 to-green-400",
  },
  {
    year: "2024",
    title: "Projetos Reais",
    description: "Início de projetos para clientes reais. Aplicação prática de conhecimentos em cenários profissionais.",
    icon: Rocket,
    color: "from-violet-400 to-purple-400",
  },
  {
    year: "2024",
    title: "Especialização",
    description: "Foco em arquitetura de software, performance e experiências de usuário excepcionais.",
    icon: Star,
    color: "from-pink-400 to-rose-400",
  },
  {
    year: "FUTURO",
    title: "Próximos Passos",
    description: "Contribuições open source, mentoria e construção de produtos que impactem milhões de pessoas.",
    icon: Target,
    color: "from-amber-400 to-orange-400",
  },
];

function TimelineItem({ event, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-8`}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
    >
      {/* Content Card */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <motion.div
          className="relative p-6 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500 group"
          whileHover={{ scale: 1.02 }}
        >
          {/* Glow */}
          <div className={`absolute inset-0 bg-gradient-to-r ${event.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`} />
          
          <span className={`text-sm font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}>
            {event.year}
          </span>
          <h3 className="text-xl font-bold text-white mt-2 mb-3">{event.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{event.description}</p>
        </motion.div>
      </div>

      {/* Center Icon */}
      <div className="relative md:w-2/12 flex justify-center my-4 md:my-0">
        <motion.div
          className={`w-14 h-14 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center z-10`}
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring" }}
          whileHover={{ scale: 1.2 }}
        >
          <event.icon className="w-6 h-6 text-black" />
        </motion.div>
      </div>

      {/* Empty space for opposite side */}
      <div className="hidden md:block md:w-5/12" />
    </motion.div>
  );
}

export default function TimelineSection() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-400/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-sm tracking-[0.3em] text-cyan-400 mb-4">
            TRAJETÓRIA
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            MINHA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-400">
              JORNADA
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Uma narrativa de crescimento, aprendizado e conquistas.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block">
            <motion.div
              className="w-full bg-gradient-to-b from-cyan-400 via-emerald-400 to-violet-400"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => (
              <TimelineItem key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}