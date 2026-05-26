"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Veritas International Campus LMS",
    image: "/lms.png",
    description:
      "A comprehensive Learning Management System developed for Veritas International Campus, enabling course management, student enrollment, assignment tracking, and interactive learning experiences.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    category: "Full Stack",
    gradient: "from-orange-500/20 via-yellow-500/10 to-transparent",
    accentColor: "text-orange-400",
    borderHover: "hover:border-orange-500/40",
    github: "https://github.com/Savanrajakaruna/Veritas-International-Statistics-Website",
    live: "https://veritas-campus-lms-ywm1.vercel.app/",
    featured: true,
  },
  {
    id: 2,
    title: "Avion Farm Website",
    image: "/avion.png",
    description:
      "A comprehensive and responsive web platform developed for the agricultural sector, focusing on modern UI/UX principles. Built from scratch to ensure optimal performance and cross-browser compatibility.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    category: "Web Sites",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    accentColor: "text-blue-400",
    borderHover: "hover:border-blue-500/40",
    github: "https://github.com/Anji-fdo",
    live: "https://avionfarm.com/",
    featured: true,
  },
  {
    id: 3,
    title: "Lanka Holiday Journey",
    image: "/lanka.png",
    description:
      "A professional travel and tourism website built using WordPress. Features include custom theme adjustments, SEO optimization, and an intuitive user interface to streamline the vacation planning process.",
    tech: ["WordPress", "Elementor", "PHP", "SEO"],
    category: "Web Sites",
    gradient: "from-accent/20 via-green-500/10 to-transparent",
    accentColor: "text-accent",
    borderHover: "hover:border-accent/40",
    github: "https://github.com/Anji-fdo",
    live: "https://lankaholidayjourney.com/",
    featured: true,
  },
  {
    id: 4,
    title: "Aura Studio — E-Commerce Site",
    image: "/aura.png",
    description:
      "A high-performance digital storefront built with headless architecture — automating product catalog rendering and cutting operational overhead while scaling digital sales 24/7.",
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
    category: "E-Commerce",
    gradient: "from-slate-500/20 via-gray-500/10 to-transparent",
    accentColor: "text-slate-300",
    borderHover: "hover:border-slate-500/40",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 5,
    title: "AURA — Premium E-Commerce Site",
    image: "/aura1.png",
    description:
      "A premium, minimalist e-commerce ecosystem engineered for high-end retail and boutique brands. A comprehensive admin dashboard with real-time analytics, inventory management, and order tracking built with React and a Node.js backend.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js", "Redux"],
    category: "Full Stack",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    accentColor: "text-purple-400",
    borderHover: "hover:border-purple-500/40",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    id: 6,
    title: "MERN Estate",
    image: "/image.png",
    description:
      "A Markdown-powered blog platform with syntax highlighting, dark mode, and fast static site generation. Built for developers, by a developer.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS","FireBase"],
    category: "Full Stack",
    gradient: "from-teal-500/20 via-emerald-500/10 to-transparent",
    accentColor: "text-teal-400",
    borderHover: "hover:border-teal-500/40",
    github: "https://github.com/Anji-fdo/mern-estate",
    live: "https://mern-estate-gwsi.onrender.com/",
    featured: false,
  },
];

const categories = ["All", "Full Stack","Web Sites", "E-Commerce","SaaS / AI"];

function ProjectImage({ gradient, category, accentColor, image, title }: {
  gradient: string;
  category: string;
  accentColor: string;
  image?: string;
  title: string;
}) {
  if (image) {
    return (
      <div className="relative h-48 border-b border-border overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
    );
  }

  // image natha namba default gradient
  return (
    <div className={`relative h-48 bg-gradient-to-br ${gradient} border-b border-border flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff10 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative text-center">
        <div className={`font-mono text-xs ${accentColor} tracking-widest uppercase mb-2`}>{category}</div>
        <div className="font-display text-4xl font-bold text-white/10">{"</>"}</div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            04. Projects
          </span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-4"
        >
          Things I've <span className="text-gradient">Built</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-text-dim font-body mb-10 max-w-xl"
        >
          A selection of projects I've built — ranging from SaaS platforms to 3D web experiences.
        </motion.p>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-xs px-4 py-2 rounded border transition-all duration-200 ${
                filter === cat
                  ? "bg-accent text-bg border-accent font-semibold"
                  : "text-text-dim border-border hover:border-accent/50 hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className={`group relative border border-border ${project.borderHover} rounded-xl overflow-hidden bg-surface/60 backdrop-blur-sm transition-all duration-300`}
              >

                <ProjectImage
                    gradient={project.gradient}
                    category={project.category}
                    accentColor={project.accentColor}
                    image={project.image}        // ← add
                    title={project.title}        // ← add
                  />
                <div className="p-5">
                  <h3 className="font-display font-semibold text-lg text-text mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-text-dim leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-text-dim hover:text-accent transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-mono text-xs text-text-dim hover:text-accent transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Anji-fdo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-dim hover:text-accent font-mono text-sm transition-colors group"
          >
            <Github size={16} />
            See all projects on GitHub
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
