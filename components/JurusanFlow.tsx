"use client";

import { useEffect, useState } from "react";
import { jurusanList, type Jurusan } from "@/lib/jurusan-data";
import { JurusanIcon } from "./jurusan-icons";
import { DocumentIcon } from "./icons";

export function JurusanFlow() {
  const [jurusanSlug, setJurusanSlug] = useState<string | null>(null);

  const jurusan: Jurusan | null =
    jurusanList.find((j) => j.slug === jurusanSlug) ?? null;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setJurusanSlug(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = jurusan ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [jurusan]);

  return (
    <div id="jurusan">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
        {jurusanList.map((j, idx) => (
          <button
            key={j.slug}
            onClick={() => setJurusanSlug(j.slug)}
            style={{ animationDelay: `${idx * 60}ms` }}
            className="group focus-ring animate-card-in flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-hairline bg-white p-4 text-center shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-gold/40 hover:shadow-card-hover"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-soft text-gold transition-transform duration-200 group-hover:scale-105">
              <JurusanIcon icon={j.icon} className="h-7 w-7" />
            </span>
            <span className="text-sm font-medium leading-snug text-ink">
              {j.nama}
            </span>
          </button>
        ))}
      </div>

      {jurusan && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/30 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setJurusanSlug(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={jurusan.nama}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg animate-modal-in rounded-t-card border border-hairline bg-white p-7 shadow-modal sm:rounded-card sm:p-9"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-soft text-gold">
                  <JurusanIcon icon={jurusan.icon} className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Jurusan
                  </p>
                  <h3 className="text-xl font-semibold text-ink">{jurusan.nama}</h3>
                </div>
              </div>
              <button
                onClick={() => setJurusanSlug(null)}
                aria-label="Tutup"
                className="focus-ring flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline text-muted transition-colors hover:border-gold/40 hover:text-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <ul className="mt-6 flex flex-col gap-3">
              {jurusan.menu.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring group flex items-center gap-4 rounded-2xl border border-hairline bg-white px-5 py-4 transition-colors duration-200 hover:border-gold/40 hover:bg-gold-soft"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold">
                      <DocumentIcon icon={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="flex-1 text-sm font-medium text-ink">
                      {item.label}
                    </span>
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 text-muted transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-gold">
                      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-center font-mono text-[10px] text-muted">
              Tautan akan membuka Google Form di tab baru
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
