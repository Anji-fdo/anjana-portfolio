"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Mail, MapPin, Send, Twitter, Phone  } from "lucide-react";
import emailjs from "@emailjs/browser";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@anjana-fernando",
    href: "https://github.com/Anji-fdo",
    color: "hover:border-white/30",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Anjana Fernando",
    href: "https://www.linkedin.com/in/anjana-fernando-5757811b7/",
    color: "hover:border-blue-400/40",
  },
  {
    icon: Twitter,
    label: "Twitter",
    handle: "@anjana_dev",
    href: "https://twitter.com/anjana_dev",
    color: "hover:border-sky-400/40",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "anjanafdoas@gmail.com",
    href: "mailto:anjanafdoas@gmail.com",
    color: "hover:border-accent/40",
  },
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const SERVICE_ID = "service_a42u2oi";   // ඔයාගේ Service ID
  const TEMPLATE_ID = "template_g8b85on"; // ඔයාගේ Template ID
  const PUBLIC_KEY = "F3xYHoO8AW9tr55px";

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.message) return;

  setStatus("sending");

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      PUBLIC_KEY
    );

    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "" });

    // 3 seconds passe reset wenawa
    setTimeout(() => setStatus("idle"), 3000);

  } catch (error) {
    console.error("EmailJS error:", error);
    setStatus("error");
    setTimeout(() => setStatus("idle"), 3000);
  }
};

  const inputClass =
    "w-full bg-surface border border-border rounded-lg px-4 py-3 font-body text-sm text-text placeholder:text-muted focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/20 transition-all duration-200";

  return (
    <section id="contact" className="section px-6 bg-surface/10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="font-mono text-xs text-accent tracking-widest uppercase">
            06. Contact
          </span>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold mb-4"
        >
          Let's <span className="text-gradient">Work Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-text-dim font-body mb-14 max-w-xl"
        >
          Have a project in mind? Looking for a developer to join your team? I'd love to hear
          from you. Let's build something great together.
        </motion.p>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-xs text-muted mb-2 block">Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Anjana Fernando"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="font-mono text-xs text-muted mb-2 block">Email *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-xs text-muted mb-2 block">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Collaboration / Just saying hi"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="font-mono text-xs text-muted mb-2 block">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project, timeline, and budget..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <motion.button
                onClick={handleSubmit}
                disabled={status === "sending" || status === "sent"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-display font-semibold text-sm transition-all duration-200 ${
                  status === "sent"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : status === "sending"
                    ? "bg-accent/50 text-bg cursor-not-allowed"
                    : "bg-accent text-bg hover:bg-accent/90 glow-accent"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === "sent" ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>
                    <Send size={15} />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Info */}
            <div className="border border-border rounded-xl p-5 bg-surface/50 space-y-4">
              <h3 className="font-display font-semibold text-sm text-text-dim uppercase tracking-wide">
                Contact Info
              </h3>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={15} className="text-accent flex-shrink-0" />
                <span className="text-text-dim">Katunayake, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={15} className="text-accent flex-shrink-0" />
                <span className="text-text-dim">anjanafdoas@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={15} className="text-accent flex-shrink-0" />
                
                 <a href="https://wa.me/94713441221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-dim hover:text-accent transition-colors"
                >
                  +94 713441221
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                <span className="text-text-dim">Open to new opportunities</span>
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-3">
              {socials.map(({ icon: Icon, label, handle, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 border border-border ${color} rounded-xl bg-surface/40 hover:bg-surface/70 transition-all duration-200 group`}
                >
                  <Icon size={18} className="text-text-dim group-hover:text-accent transition-colors" />
                  <div>
                    <div className="font-body text-xs text-muted">{label}</div>
                    <div className="font-mono text-sm text-text group-hover:text-accent transition-colors">
                      {handle}
                    </div>
                  </div>
                  <span className="ml-auto text-muted group-hover:text-accent group-hover:translate-x-1 transition-all">→</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
