# Layanan Surat Jurusan

Halaman depan bergaya hero minimalis (badge, judul besar, CTA) dengan
background partikel animasi interaktif yang mengikuti gerakan mouse.
Di bawahnya ada alur pemilihan dua tahap:

1. **Pilih Jurusan** — 7 kartu program studi (Matematika, Kimia, Biologi,
   Fisika, Rekayasa Sistem Komputer, Sistem Informasi, Ilmu Kelautan).
2. **Pilih Jenis Surat** — setelah jurusan dipilih, muncul 4 kartu kategori
   surat (Surat Seminar, Surat Sidang, SK, Berita Acara) khusus jurusan
   tersebut. Klik salah satu kartu untuk membuka daftar sub-jenis surat
   dalam modal, lalu klik salah satunya untuk membuka Google Form terkait
   di tab baru.

Dibangun dengan Next.js App Router + Tailwind, tema terang, tanpa
dependency animasi tambahan.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Struktur

```
app/
  page.tsx                  -> hero + <JurusanFlow />
  layout.tsx                 -> font (Geist + Instrument Serif) & metadata
  globals.css                 -> tema warna & animasi (termasuk partikel hero)
components/
  HeroParticles.tsx           -> background partikel interaktif di hero
  JurusanFlow.tsx              -> alur 2 tahap: kartu jurusan -> kartu kategori -> modal form
  Navbar.tsx
  jurusan-icons.tsx             -> ikon SVG untuk 7 jurusan
  icons.tsx                      -> ikon SVG untuk 4 kategori surat
lib/
  jurusan-data.ts                -> satu sumber data: 7 jurusan x 4 kategori x 2 link Google Form
```

## Mengganti link Google Form

Semua link ada di `lib/jurusan-data.ts`, dalam bentuk placeholder:

```
https://forms.google.com/ganti-link-<jurusan>-<jenis-surat>
```

Contoh: link Seminar Proposal untuk Jurusan Matematika placeholder-nya adalah
`ganti-link-matematika-seminar-proposal`. Gunakan Ctrl+F di file tersebut
untuk mencari tiap `ganti-link-...` dan menggantinya dengan link Google Form
asli. Tidak perlu menyentuh file lain — tampilan otomatis mengikuti data ini.

Menambah jurusan atau kategori baru juga cukup mengedit array `jurusanBase`
atau `categoryBlueprint` di file yang sama.
