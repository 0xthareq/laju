"use client";

import { useEffect, useRef } from "react";

/**
 * Flowing bezier line-wave background, adapted from the howlyvine hero
 * animation. Colors are retuned here to the surat-jurusan ivory/ink/gold
 * palette instead of the original dark/light theme pair.
 */
export function LineWaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const tRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const t = tRef.current;

      ctx.clearRect(0, 0, W, H);

      const numLines = 22;

      for (let i = 0; i < numLines; i++) {
        const frac = i / (numLines - 1);
        const phase = frac * Math.PI * 2;

        // START: bottom-right
        const x0 = W * 0.25 + frac * W * 0.95;
        const y0 = H * 1.05;

        // END: top-left
        const x1 = -W * 0.1 + frac * W * 0.65;
        const y1 = -H * 0.05;

        const bow =
          Math.sin(t * 0.8 + phase) * W * 0.12 +
          Math.cos(t * 0.5 + phase * 0.7) * W * 0.06;

        const midY = H * 0.5;
        const cp1x = x0 + bow * 0.8;
        const cp1y = y0 - (y0 - midY) * 0.45;
        const cp2x = x1 + bow * 0.6;
        const cp2y = y1 + (midY - y1) * 0.45;

        const mid = 1 - Math.abs(frac - 0.5) * 2;
        const centerBoost = Math.max(0, mid);
        const pulse = 0.5 + 0.5 * Math.sin(t * 1.2 + phase);

        // ink (#211D17) at the edges, warming toward gold (#B8924A) at the
        // center-most lines
        const r = Math.round(33 + centerBoost * 151);
        const g = Math.round(29 + centerBoost * 117);
        const b = Math.round(23 + centerBoost * 51);
        const alpha = (0.05 + centerBoost * 0.1) * (0.6 + pulse * 0.4);

        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x1, y1);
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      tRef.current += 0.022;
      rafRef.current = requestAnimationFrame(draw);
    };

    if (reduceMotion) {
      // draw a single still frame instead of animating
      draw();
    } else {
      rafRef.current = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
