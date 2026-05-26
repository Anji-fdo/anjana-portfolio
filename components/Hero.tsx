"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import dynamic from "next/dynamic";

const HolographicAvatar = dynamic(() => import("./HolographicAvatar"), { ssr: false });

const ROLES = [
  "Freelancer",
  "Full Stack Developer",
  "Startup Founder",
  "UI/UX Craftsman",
  "IT Undergraduate at SLIIT",
  "MERN Stack Developer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const target = ROLES[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(target.slice(0, displayed.length + 1));
        }, 60);
      } else {
        timeoutRef.current = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 30);
      } else {
        setRoleIdx((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, typing, roleIdx]);

  const socials = [
    { icon: Github,   href: "https://github.com/Anji-fdo",   label: "GitHub"   },
    { icon: Linkedin, href: "https://www.linkedin.com/in/anjana-fernando-5757811b7/", label: "LinkedIn" },
    { icon: Twitter,  href: "https://twitter.com/anjana_dev",        label: "Twitter"  },
    { icon: Mail,     href: "mailto:anjanafdoas@gmail.com",             label: "Email"    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* ── Left: Text ── */}
          <div className="order-2 lg:order-1">

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="text-gradient">Anjana</span>
              <br />
              Fernando
              <span className="text-accent">.</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-mono text-lg text-text-dim mb-6 h-8 flex items-center"
            >
              <span className="text-accent mr-2">→</span>
              <span>{displayed}</span>
              <span className="ml-0.5 w-0.5 h-5 bg-accent animate-blink inline-block" />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-text-dim text-lg leading-relaxed mb-10 max-w-lg font-body font-light"
            >
              I build fast, accessible, and beautifully crafted web experiences.
              Passionate about turning complex problems into elegant, user-friendly solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 bg-accent text-bg font-display font-semibold text-sm px-6 py-3 rounded hover:bg-accent/90 glow-accent transition-all duration-200"
              >
                View My Work
              </button>
              <button
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 border border-border text-text-dim font-body text-sm px-6 py-3 rounded hover:border-accent/50 hover:text-accent transition-all duration-200"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-5"
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-muted hover:text-accent transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
              <div className="w-px h-4 bg-border mx-1" />
              <span className="font-mono text-xs text-muted">Colombo, LK</span>
            </motion.div>
          </div>

          {/* ── Right: 3D Holographic Avatar ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex justify-center items-center lg:justify-center"
            style={{ perspective: 1000 }}
          >
            <HolographicAvatar />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
