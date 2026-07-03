"use client";

import { useEffect, useState } from "react";
import { contacts, getWhatsAppLink } from "@/lib/contacts-data";

const AVATAR_COLORS = [
  "bg-indigo-50 text-indigo-600",
  "bg-rose-50 text-rose-500",
  "bg-emerald-50 text-emerald-600",
  "bg-amber-50 text-amber-600",
  "bg-fuchsia-50 text-fuchsia-600",
];

export function ContactModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="focus-ring flex items-center gap-2 rounded-full border border-hairline px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-gold/40 hover:bg-gold-soft"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-gold">
          <path
            d="M6.5 9.5a8 8 0 0 0 8 8l2-2-3-3-1.5 1.5a6 6 0 0 1-5-5L8.5 7.5l-3-3-2 2a8 8 0 0 0 3 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Kontak
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/30 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Hubungi Kami"
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[85vh] w-full max-w-md animate-modal-in flex-col rounded-t-card border border-hairline bg-white shadow-modal sm:rounded-card"
          >
            <div className="flex items-start justify-between border-b border-hairline p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold-soft text-gold">
                  <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                    <path
                      d="M6.5 9.5a8 8 0 0 0 8 8l2-2-3-3-1.5 1.5a6 6 0 0 1-5-5L8.5 7.5l-3-3-2 2a8 8 0 0 0 3 3Z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink">Hubungi Kami</h3>
                  <p className="text-xs text-muted">Klik nama untuk chat WhatsApp</p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Tutup"
                className="focus-ring flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-hairline text-muted transition-colors hover:border-gold/40 hover:text-ink"
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-1 flex-col gap-2 overflow-y-auto p-4">
              {contacts.map((c, idx) => (
                <li key={c.name}>
                  <a
                    href={getWhatsAppLink(c.phone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring group flex items-center gap-4 rounded-2xl px-3 py-3 transition-colors duration-200 hover:bg-gold-soft"
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                        AVATAR_COLORS[idx % AVATAR_COLORS.length]
                      }`}
                    >
                      {c.initials}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-sm font-medium text-ink">{c.name}</span>
                      <span className="block truncate text-xs text-muted">{c.desc}</span>
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4L9.7 8c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.4 3.8 3.4.5.2.9.4 1.3.5.5.2 1 .1 1.4.1.4-.1 1.5-.6 1.6-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.4-.3Z" />
                      </svg>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <p className="border-t border-hairline p-4 text-center font-mono text-[10px] text-muted">
              Aktif pada jam kerja · Senin – Jumat
            </p>
          </div>
        </div>
      )}
    </>
  );
}