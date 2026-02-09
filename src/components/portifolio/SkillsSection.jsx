import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 80 },
    ],
    color: "from-cyan-400 to-blue-500",
    glowColor: "rgba(0, 240, 255, 0.5)",
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
    color: "from-emerald-400 to-green-500",
    glowColor: "rgba(52, 211, 153, 0.5)",
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS / Cloud", level: 65 },
      { name: "CI/CD", level: 75 },
    ],
    color: "from-violet-400 to-purple-500",
    glowColor: "rgba(167, 139, 250, 0.5)",
  },
];

function SkillBar({ skill, color, delay, isInView }) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ category, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Card */}
      <div className="relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/30 transition-all duration-500">
        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
          style={{ background: category.glowColor }}
        />

        <h3 className={`text-2xl font-bold mb-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
          {category.title}
        </h3>

        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            color={category.color}
            delay={index * 0.2 + skillIndex * 0.1}
            isInView={isInView}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] py-32 overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(0, 240, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-sm tracking-[0.3em] text-cyan-400 mb-4">
            EXPERTISE
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            HABILIDADES
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-400">
              TÉCNICAS
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ferramentas e tecnologias que domino para criar soluções de alta performance.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Tech logos/icons animation */}
        <motion.div
          className="mt-20 flex justify-center gap-8 flex-wrap opacity-30"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.3 } : {}}
          transition={{ delay: 1, duration: 1 }}
        >
          {['React', 'Node', 'TypeScript', 'Python', 'Docker', 'AWS'].map((tech, i) => (
            <motion.span
              key={tech}
              className="text-2xl font-bold text-white/50"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}