"use client";

import { useEffect, useState } from "react";

/**
 * Soft gold spotlight that follows the pointer across the hero. Meant to be
 * layered on top of LineWaveBackground for a subtle interactive touch.
 */
export function HeroParticles() {
  const [pointer, setPointer] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    function onMove(e: PointerEvent) {
      const el = document.getElementById("hero-particle-field");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setPointer({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div
      id="hero-particle-field"
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 transition-[background] duration-300 ease-out"
        style={{
          background: `radial-gradient(480px circle at ${pointer.x}% ${pointer.y}%, rgba(184,146,74,0.10), transparent 60%)`,
        }}
      />
    </div>
  );
}
