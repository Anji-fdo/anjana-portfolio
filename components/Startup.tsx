"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Zap, Code2, Star, ArrowRight, Globe } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "High-Performance Web Platforms",
    desc: "Ultra-fast, conversion-optimized platforms built to capture leads and automate digital sales 24/7.",
  },
  {
    icon: Zap,
    title: "Micro ERP & POS Solutions",
    desc: "Custom automation for SMEs — inventory tracking, ledger reconciliation, and live remote dashboards.",
  },
  {
    icon: Code2,
    title: "Smart Workflow Automation",
    desc: "Connect your tools, automate follow-ups, and build scalable pipelines with zero technical debt.",
  },
];

const stats = [
  { value: "4.9★", label: "Client Satisfaction" },
  { value: "100%", label: "On-Time Delivery" },
  { value: "99%", label: "Lighthouse Score" },
  { value: "100%", label: "Code Ownership" },
];

const clients = ["Avion Farm", "Lanka Holiday Journey", "4G Lanka Tours", "Hibiscus Cleaning", "Bermuda"];

const techStack = [
  "Next.js", "React", "TypeScript", "Node.js",
  "MongoDB", "PostgreSQL", "Tailwind CSS", "Prisma",
  "Vercel", "AWS", "Docker", "Stripe",
];

export default function Startup() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

  return (
    <section id="startup" className="section px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            05. Startup
          </span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-4"
        >
          I Also Run a <span className="text-gradient">Startup</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-text-dim font-body mb-14 max-w-xl"
        >
          Beyond personal projects, I co-founded Nautilus Code — a software engineering
          agency building high-performance digital products for SMEs across Sri Lanka and beyond.
        </motion.p>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden border border-accent/20 bg-surface/60 mb-10"
        >
          <div className="h-1 w-full bg-gradient-to-r from-accent via-cyan-400 to-blue-500" />

          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,255,178,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,178,0.04) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative p-8 md:p-12">
            <div className="flex flex-col lg:flex-row lg:items-start gap-10">

              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 3C8 3 3 8 3 14C3 20 8 25 14 25C20 25 25 20 25 14" stroke="#00FFB2" strokeWidth="2" strokeLinecap="round" />
                      <path d="M14 7C10.13 7 7 10.13 7 14C7 17.87 10.13 21 14 21C17.87 21 21 17.87 21 14" stroke="#00FFB2" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
                      <path d="M14 11C12.34 11 11 12.34 11 14C11 15.66 12.34 17 14 17C15.66 17 17 15.66 17 14" stroke="#00FFB2" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.3" />
                      <circle cx="14" cy="14" r="1.5" fill="#00FFB2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-text">
                      Nautilus Code
                    </h3>
                    <p className="font-mono text-xs text-accent mt-0.5">
                      Software Engineering Agency · Colombo, LK
                    </p>
                  </div>
                </div>

                <p className="font-body text-text-dim leading-relaxed mb-6 max-w-lg">
                  We bridge the gap between high-end global tech engineering and cost-effective
                  digital solutions for growing local and global brands. From custom POS systems
                  to AI-powered web platforms, we engineer perfect digital architecture.
                </p>

                <div className="mb-6">
                  <p className="font-mono text-xs text-muted mb-3 uppercase tracking-widest">
                    Trusted by
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {clients.map((c) => (
                      <span
                        key={c}
                        className="font-body text-xs text-text-dim border border-border rounded-full px-3 py-1 bg-bg/50"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://nautilus-code.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-bg font-display font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-accent/90 transition-all duration-200 group"
                    style={{ boxShadow: "0 0 20px rgba(0,255,178,0.3)" }}
                  >
                    <ExternalLink size={14} />
                    Visit Nautilus Code
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a
                    href="https://wa.me/94713441221"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border text-text-dim font-body text-sm px-5 py-2.5 rounded-lg hover:border-accent/50 hover:text-accent transition-all duration-200"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:w-64 lg:flex-shrink-0">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="bg-bg/60 border border-border rounded-xl p-4 text-center hover:border-accent/30 transition-colors"
                  >
                    <div className="font-display font-bold text-xl text-accent mb-1">
                      {s.value}
                    </div>
                    <div className="font-body text-xs text-muted leading-tight">{s.label}</div>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-5 border border-border rounded-xl bg-surface/40 hover:border-accent/30 hover:bg-surface/70 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon size={16} className="text-accent" />
                </div>
                <h4 className="font-display font-semibold text-sm text-text mb-2">
                  {svc.title}
                </h4>
                <p className="font-body text-xs text-text-dim leading-relaxed">{svc.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="border border-border/50 rounded-xl p-6 bg-surface/20 relative overflow-hidden"
        >
          <div className="absolute top-4 left-6 font-display text-6xl text-accent/10 leading-none select-none">
            &ldquo;
          </div>
          <div className="relative">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} className="text-accent fill-accent" />
              ))}
            </div>
            <p className="font-body text-text-dim italic leading-relaxed mb-4 max-w-2xl">
              Nautilus Code delivered our platform faster than expected and with a level of polish
              we did not think was possible at this scale. The site has genuinely elevated how
              international visitors perceive Avion Farm.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center font-display font-bold text-accent text-sm">
                A
              </div>
              <div>
                <div className="font-body text-sm text-text">Avion Farm Team</div>
                <div className="font-mono text-xs text-muted">
                  Kantale Avion Farm Retreat · avionfarm.com
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}