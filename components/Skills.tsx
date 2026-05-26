"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillGroups = [
  {
    category: "Frontend",
    emoji: "🎨",
    color: "from-accent/20 to-transparent",
    borderColor: "border-accent/30",
    dotColor: "bg-accent",
    skills: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 78 },
      { name: "Three.js", level: 65 },
      { name: "HTML/CSS", level: 97 },
    ],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    color: "from-blue-500/20 to-transparent",
    borderColor: "border-blue-500/30",
    dotColor: "bg-blue-400",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 78 },
      { name: "MongoDB", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 68 },
    ],
  },
  {
    category: "Tools & DevOps",
    emoji: "🛠",
    color: "from-purple-500/20 to-transparent",
    borderColor: "border-purple-500/30",
    dotColor: "bg-purple-400",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "Docker", level: 72 },
      { name: "Vercel / Netlify", level: 88 },
      { name: "Figma", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Linux", level: 70 },
      { name: "CI/CD", level: 68 },
    ],
  },
];

const techTags = [
  "WordPress", "Data Entry", "Data Analysis", "AI Mobile App Development", "AI Bot",
  "AI Development", "AI App Development", "AI Agent Development",
];

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="section px-6 bg-surface/20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            02. Skills
          </span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-4"
        >
          My <span className="text-gradient">Toolkit</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-text-dim font-body mb-14 max-w-xl"
        >
          Technologies I use to bring ideas to life, from concept to production.
        </motion.p>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className={`relative border ${group.borderColor} rounded-xl overflow-hidden bg-surface/60 backdrop-blur-sm p-6`}
            >
              {/* Gradient header */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${group.color}`} />

              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.emoji}</span>
                <h3 className="font-display font-semibold text-lg">{group.category}</h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-body text-sm text-text-dim">{skill.name}</span>
                      <span className="font-mono text-xs text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: gi * 0.15 + si * 0.05, ease: "easeOut" }}
                        className={`h-full rounded-full ${group.dotColor}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech tag cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p className="font-mono text-xs text-muted uppercase tracking-widest mb-5 text-center">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {techTags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + i * 0.03 }}
                className="tech-tag"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
