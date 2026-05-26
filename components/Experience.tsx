"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, MapPin, Calendar, ExternalLink, Star } from "lucide-react";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Gamage Recruiters (PVT) LTD",
    type: "Internship",
    period: "April 2025 – October 2025",
    duration: "6 months",
    location: "Colombo, Western Province, Sri Lanka",
    current: false,
    accentColor: "#00FFB2",
    borderColor: "border-accent/30",
    dotColor: "bg-accent",
    glowColor: "rgba(0,255,178,0.08)",
    featured: {
      title: "Veritas International Campus LMS",
      desc: "Led the development of a comprehensive Learning Management System serving Veritas International Campus",
      link: "https://veritas-campus-lms-ywm1.vercel.app/",
    },
    highlights: [
      "Developed and maintained full-stack web applications using React, Node.js, Express, and MongoDB",
      "Integrated RESTful APIs and third-party services to enhance application functionality",
      "Performed database schema design, queries, and optimization",
      "Collaborated in Agile environment with daily standups and sprint planning",
      "Conducted thorough code reviews ensuring code quality and best practices",
      "Implemented unit testing and debugging to maintain high software reliability",
      "Utilized Git for version control and collaborative development workflows",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Git", "Agile"],
  },
  {
    role: "Transport Coordinator",
    company: "ECD Global (Pvt) Ltd",
    type: "Full-time",
    period: "September 2025 – May 2026",
    duration: "8 months",
    location: "Sri Lanka",
    current: true,
    accentColor: "#60A5FA",
    borderColor: "border-blue-400/30",
    dotColor: "bg-blue-400",
    glowColor: "rgba(96,165,250,0.08)",
    featured: null,
    highlights: [
      "Coordinated and optimized transport logistics operations across multiple routes",
      "Managed scheduling, fleet allocation, and real-time tracking of vehicles",
      "Liaised with drivers, clients, and internal teams to ensure smooth operations",
      "Maintained accurate transport records, reports, and compliance documentation",
      "Resolved operational issues and delays with quick analytical decision-making",
      "Improved route efficiency through data analysis and process optimization",
    ],
    tech: ["Logistics", "Fleet Management", "Operations", "Data Analysis", "Coordination"],
  },
  {
    role: "Data Processing & Analysing Associate",
    company: "Adelanka (PVT) LTD",
    type: "Contract",
    period: "July 2021 – July 2022",
    duration: "1 yr 1 mo",
    location: "Gampaha, Western Province, Sri Lanka",
    current: false,
    accentColor: "#A78BFA",
    borderColor: "border-purple-400/30",
    dotColor: "bg-purple-400",
    glowColor: "rgba(167,139,250,0.08)",
    featured: null,
    highlights: [
      "Processed and analyzed large datasets to extract meaningful insights and patterns",
      "Developed data processing workflows to improve efficiency and accuracy",
      "Applied problem-solving techniques to resolve data inconsistencies and quality issues",
      "Collaborated with cross-functional teams to understand data requirements",
      "Created reports and visualizations to communicate findings effectively",
      "Maintained data integrity and ensured compliance with data handling procedures",
    ],
    tech: ["Data Analysis", "Excel", "Reporting", "Data Visualization", "SQL"],
  },
];

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.06 });

  return (
    <section id="experience" className="section px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            03. Experience
          </span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-4"
        >
          Work <span className="text-gradient">Experience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-text-dim font-body mb-16 max-w-xl"
        >
          My professional journey — from data analytics to full-stack engineering and operations.
        </motion.p>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-5 top-6 flex items-center justify-center">
                  <div
                    className={`w-5 h-5 rounded-full border-2 border-bg ${exp.dotColor} z-10`}
                    style={{ boxShadow: `0 0 12px ${exp.accentColor}60` }}
                  />
                  {exp.current && (
                    <div
                      className={`absolute w-5 h-5 rounded-full ${exp.dotColor} animate-ping opacity-40`}
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`border ${exp.borderColor} rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg`}
                  style={{ background: `linear-gradient(135deg, ${exp.glowColor} 0%, transparent 60%)`, backgroundColor: "rgba(14,17,23,0.7)" }}
                >
                  {/* Top bar */}
                  <div
                    className="h-0.5 w-full"
                    style={{ background: `linear-gradient(to right, ${exp.accentColor}, transparent)` }}
                  />

                  <div className="p-6 md:p-8">

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-display font-bold text-xl text-text">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-blue-400/10 border border-blue-400/30 text-blue-400">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5 mb-2">
                          <Briefcase size={13} style={{ color: exp.accentColor }} />
                          <span className="font-body font-medium text-sm" style={{ color: exp.accentColor }}>
                            {exp.company}
                          </span>
                          <span className="text-border">·</span>
                          <span className="font-mono text-xs text-muted">{exp.type}</span>
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs text-muted">
                          <span className="flex items-center gap-1">
                            <Calendar size={11} />
                            {exp.period}
                            <span className="text-border">·</span>
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={11} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Featured Project */}
                    {exp.featured && (
                      <div className="mb-5 p-4 rounded-xl border border-accent/20 bg-accent/5">
                        <div className="flex items-center gap-2 mb-2">
                          <Star size={13} className="text-accent fill-accent" />
                          <span className="font-mono text-xs text-accent uppercase tracking-widest">
                            Featured Project
                          </span>
                        </div>
                        <p className="font-display font-semibold text-text mb-1">
                          {exp.featured.title}
                        </p>
                        <p className="font-body text-xs text-text-dim mb-3 leading-relaxed">
                          {exp.featured.desc}
                        </p>
                        <a
                          href={exp.featured.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline"
                        >
                          <ExternalLink size={11} />
                          View Live Project
                        </a>
                      </div>
                    )}

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((point, pi) => (
                        <li key={pi} className="flex items-start gap-2.5">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: exp.accentColor }}
                          />
                          <span className="font-body text-sm text-text-dim leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                      {exp.tech.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2.5 py-1 rounded border"
                          style={{
                            color: exp.accentColor,
                            borderColor: `${exp.accentColor}30`,
                            background: `${exp.accentColor}08`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}