"use client";

import { useEffect, useRef } from "react";

type Ember = { x: number; y: number; r: number; vy: number; vx: number; life: number; max: number };

// Slow-rising sparks that echo the flame in the logo. Skipped for reduced motion.
export default function Embers({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (): Ember => ({
      x: Math.random() * w,
      y: h + Math.random() * 40,
      r: 0.6 + Math.random() * 1.8,
      vy: 0.25 + Math.random() * 0.7,
      vx: (Math.random() - 0.5) * 0.3,
      life: 0,
      max: 280 + Math.random() * 320,
    });
    const embers: Ember[] = Array.from({ length: w < 640 ? 28 : 55 }, () => {
      const e = spawn();
      e.y = Math.random() * h;
      e.life = Math.random() * e.max;
      return e;
    });

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.life++;
        e.y -= e.vy;
        e.x += e.vx + Math.sin(e.life / 40 + i) * 0.15;
        const t = e.life / e.max;
        if (t >= 1 || e.y < -10) {
          embers[i] = spawn();
          continue;
        }
        const a = Math.sin(Math.PI * t) * 0.85;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, ${150 + Math.floor(80 * (1 - t))}, 60, ${a})`;
        ctx.shadowColor = "rgba(255,140,40,0.9)";
        ctx.shadowBlur = 8;
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
}
