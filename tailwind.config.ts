import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFFFF",
        paper: "#FFFFFF",
        ink: "#1A1A1A",
        muted: "#6B7280",
        gold: "#16A34A",
        "gold-soft": "rgba(22,163,74,0.10)",
        navy: "#1A1A1A",
        hairline: "rgba(26,26,26,0.09)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        serif: ["var(--font-instrument-serif)", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(33,29,23,0.04), 0 20px 45px -24px rgba(33,29,23,0.28)",
        "card-hover": "0 1px 2px rgba(33,29,23,0.05), 0 28px 60px -20px rgba(184,146,74,0.35)",
        modal: "0 30px 90px -20px rgba(33,29,23,0.35)",
      },
      borderRadius: {
        card: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
