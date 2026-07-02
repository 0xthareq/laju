import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "LAJU — Layanan Administrasi Jurusan",
  description:
    "Urus Berkas Seminar dan Sidang Jurusan, Tinggal Klik Tanpa Ngantrii.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-ivory text-ink antialiased">{children}</body>
    </html>
  );
}
