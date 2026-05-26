"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Layers, Zap } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "Writing maintainable, well-documented code that scales gracefully.",
  },
  {
    icon: Layers,
    title: "Full Stack",
    desc: "Comfortable from database design to pixel-perfect UIs.",
  },
  {
    icon: Zap,
    title: "Performance First",
    desc: "Obsessed with fast load times and smooth user experiences.",
  },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="section px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            01. About
          </span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <motion.h2
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6"
            >
              Crafting digital
              <br />
              <span className="text-gradient">experiences</span> that matter.
            </motion.h2>

            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-4 text-text-dim leading-relaxed font-body font-light"
            >
              <p>
                I'm a Full Stack Developer based in Katunayake, Sri Lanka, with a passion
                for building modern web applications that live at the intersection of
                great design and solid engineering.
              </p>
              <p>
                I worked extensively on both frontend and backend development, integrating APIs and managing database operations. 
                I thrived in an Agile environment, contributing to code reviews, implementing unit tests, and utilizing Git for seamless collaboration.
              </p>
              <p>
                My technical foundation is built on the MERN stack, and I'm passionate about creating efficient, scalable web applications. 
                I bring strong analytical thinking, problem-solving abilities, and a commitment to writing clean, maintainable code. 
                I am excellent under pressure and am always eager to learn and adapt to new technologies.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new tech, contributing to
                open source projects, or perfecting my chai-to-code ratio.
              </p>
            </motion.div>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {[
                ["Location", "Katunayake, Sri Lanka"],
                ["Availability", "Open to Work"],
                ["Experience", "1+ Years"],
                ["Focus", "Web & Mobile and AI Automation"],
              ].map(([key, val]) => (
                <div key={key} className="border border-border rounded-lg p-4">
                  <div className="font-mono text-xs text-muted mb-1">{key}</div>
                  <div className="font-body text-sm text-text">{val}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  custom={i + 3}
                  variants={fadeUp}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  whileHover={{ x: 6 }}
                  className="group flex gap-5 p-5 border border-border rounded-xl bg-surface/40 hover:border-accent/40 hover:bg-surface/70 transition-all duration-300 cursor-default"
                >
                  <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-text mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-text-dim leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Quote block */}
            <motion.blockquote
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="mt-6 border-l-2 border-accent pl-5 py-2"
            >
              <p className="font-body text-sm text-text-dim italic leading-relaxed">
                "First, solve the problem. Then, write the code."
              </p>
              <cite className="font-mono text-xs text-muted mt-2 block not-italic">
                — John Johnson
              </cite>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
