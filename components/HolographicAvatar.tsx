"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

/* ── Orbiting tech icons ─────────────────────────────────────────── */
const ORBIT_ITEMS = [
  { label: "React",    color: "#61DAFB", bg: "#61DAFB15", icon: "⚛️",  ring: 1, speed: 18, startDeg: 0   },
  { label: "Next.js",  color: "#ffffff", bg: "#ffffff10", icon: "▲",   ring: 1, speed: 18, startDeg: 90  },
  { label: "Node.js",  color: "#68A063", bg: "#68A06315", icon: "⬡",   ring: 1, speed: 18, startDeg: 180 },
  { label: "TS",       color: "#3178C6", bg: "#3178C615", icon: "TS",  ring: 1, speed: 18, startDeg: 270 },
  { label: "Python",   color: "#FFD43B", bg: "#FFD43B15", icon: "🐍",  ring: 2, speed: 28, startDeg: 45  },
  { label: "MongoDB",  color: "#47A248", bg: "#47A24815", icon: "🍃",  ring: 2, speed: 28, startDeg: 165 },
  { label: "Tailwind", color: "#06B6D4", bg: "#06B6D415", icon: "🌊",  ring: 2, speed: 28, startDeg: 285 },
];

const RING_RADIUS = { 1: 110, 2: 155 };
const BADGE_SIZE  = { 1: 44,  2: 38  };

function OrbitingBadge({
  item,
  paused,
}: {
  item: (typeof ORBIT_ITEMS)[number];
  paused: boolean;
}) {
  const radius    = RING_RADIUS[item.ring as 1 | 2];
  const badgeSize = BADGE_SIZE[item.ring as 1 | 2];
  const [deg, setDeg] = useState(item.startDeg);
  const rafRef = useRef<number>();
  const lastRef = useRef<number>();

  useEffect(() => {
    const tick = (ts: number) => {
      if (!lastRef.current) lastRef.current = ts;
      const dt = ts - lastRef.current;
      lastRef.current = ts;
      if (!paused) {
        setDeg((d) => (d + (360 / (item.speed * 1000)) * dt) % 360);
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current!);
  }, [paused, item.speed]);

  const rad = (deg * Math.PI) / 180;
  const x   = Math.cos(rad) * radius;
  const y   = Math.sin(rad) * radius;

  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        x: x - badgeSize / 2,
        y: y - badgeSize / 2,
        width: badgeSize,
        height: badgeSize,
      }}
      whileHover={{ scale: 1.25 }}
      title={item.label}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: item.bg,
          border: `1.5px solid ${item.color}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: item.ring === 1 ? "15px" : "12px",
          color: item.color,
          fontFamily: "JetBrains Mono, monospace",
          fontWeight: 700,
          boxShadow: `0 0 12px ${item.color}20`,
          backdropFilter: "blur(6px)",
          cursor: "default",
          userSelect: "none",
        }}
      >
        {item.icon}
      </div>
    </motion.div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export default function HolographicAvatar() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [orbitPaused, setOrbitPaused] = useState(false);

  /* 3-D tilt */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotX  = useSpring(useTransform(rawY, [-1, 1], [ 14, -14]), { stiffness: 180, damping: 22 });
  const rotY  = useSpring(useTransform(rawX, [-1, 1], [-14,  14]), { stiffness: 180, damping: 22 });

  /* Shimmer sweep position */
  const shimmerX = useMotionValue(-100);
  const shimmerSpring = useSpring(shimmerX, { stiffness: 60, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const r   = el.getBoundingClientRect();
    const nx  = ((e.clientX - r.left) / r.width  - 0.5) * 2;
    const ny  = ((e.clientY - r.top)  / r.height - 0.5) * 2;
    rawX.set(nx);
    rawY.set(ny);
    shimmerX.set(nx * 120);
  };

  const handleMouseLeave = () => {
    rawX.set(0); rawY.set(0);
    shimmerX.set(-100);
    setHovered(false);
  };

  return (
    <div className="relative flex items-center justify-center mx-auto"
      style={{ width: '100%', maxWidth: 340, height: 340 }}>

      {/* ── Orbit rings (decorative) ── */}
      {[155, 210].map((r) => (
        <div key={r} style={{
          position: "absolute",
          width: r * 2,
          height: r * 2,
          borderRadius: "50%",
          border: "1px dashed rgba(0,255,178,0.10)",
          pointerEvents: "none",
        }} />
      ))}

      {/* ── Orbiting badges ── */}
      {ORBIT_ITEMS.map((item) => (
        <OrbitingBadge key={item.label} item={item} paused={orbitPaused} />
      ))}

      {/* ── Ambient glow ── */}
      <div style={{
        position: "absolute",
        width: 240, height: 240,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,255,178,0.18) 0%, transparent 70%)",
        filter: "blur(30px)",
        pointerEvents: "none",
      }} />

      {/* ── 3-D Tilt card ── */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => { setHovered(true); setOrbitPaused(true); }}
        onMouseLeave={() => { handleMouseLeave(); setOrbitPaused(false); }}
        style={{
          rotateX: rotX,
          rotateY: rotY,
          transformStyle: "preserve-3d",
          perspective: 800,
          width: 170,
          height: 210,
          position: "relative",
          zIndex: 10,
        }}
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {/* Gradient border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          style={{
            position: "absolute",
            inset: -2,
            borderRadius: 20,
            background: "conic-gradient(from 0deg, #00FFB2, #00C9FF, #7B61FF, #FF6B6B, #00FFB2)",
            zIndex: -1,
          }}
        />

        {/* Card inner */}
        <div style={{
          position: "absolute",
          inset: 2,
          borderRadius: 18,
          overflow: "hidden",
          background: "#0E1117",
        }}>
          {/* Photo */}
          <Image
            src="/anjana.jpg"
            alt="Anjana Fernando"
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            priority
          />

          {/* Scanline shimmer on hover */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(105deg,
                    transparent 30%,
                    rgba(255,255,255,0.08) 50%,
                    transparent 70%)`,
                  backgroundSize: "200% 100%",
                  pointerEvents: "none",
                }}
              />
            )}
          </AnimatePresence>

          {/* Bottom name tag */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: "linear-gradient(to top, rgba(8,11,15,0.95) 0%, transparent 100%)",
            padding: "28px 14px 12px",
          }}>
            <div style={{
              fontFamily: "Syne, sans-serif",
              fontWeight: 700,
              fontSize: 14,
              color: "#E2E8F0",
              letterSpacing: "-0.02em",
            }}>
              Anjana Fernando
            </div>
            <div style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 10,
              color: "#00FFB2",
              marginTop: 2,
            }}>
              Full Stack Developer
            </div>
          </div>
        </div>

        {/* Gloss overlay */}
        <div style={{
          position: "absolute",
          inset: 2,
          borderRadius: 18,
          background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)",
          pointerEvents: "none",
        }} />
      </motion.div>

      {/* ── Status dot ── */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          marginLeft: 80,
          marginTop: -120,
          zIndex: 20,
          background: "#00FFB2",
          borderRadius: "50%",
          width: 12,
          height: 12,
          border: "2px solid #080B0F",
          boxShadow: "0 0 10px #00FFB2",
        }}
        title="Available for work"
      />
    </div>
  );
}
