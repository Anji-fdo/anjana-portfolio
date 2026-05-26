"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-display font-bold text-lg"
        >
          AF<span className="text-accent">.</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex items-center gap-1.5 font-body text-sm text-muted"
        >
          Built with{" "}
          <Heart size={13} className="text-accent fill-accent" />{" "}
          by Anjana Fernando — {year}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="font-mono text-xs text-muted"
        >
          Next.js · Tailwind · Framer Motion
        </motion.p>
      </div>
    </footer>
  );
}
