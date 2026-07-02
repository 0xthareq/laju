export type JurusanIconKey =
  | "matematika"
  | "kimia"
  | "biologi"
  | "fisika"
  | "rsk"
  | "si"
  | "kelautan";

export type MenuIconKey = "seminar" | "sidang";

export type MenuItem = {
  label: string;
  icon: MenuIconKey;
  // PENTING: ganti dengan link Google Form asli untuk menu ini.
  url: string;
};

export type Jurusan = {
  slug: string;
  nama: string;
  singkatan: string;
  icon: JurusanIconKey;
  menu: MenuItem[];
};

const jurusanBase: { slug: string; nama: string; singkatan: string; icon: JurusanIconKey }[] = [
  { slug: "matematika", nama: "Matematika", singkatan: "MTK", icon: "matematika" },
  { slug: "biologi", nama: "Biologi", singkatan: "BIO", icon: "biologi" },
  { slug: "kimia", nama: "Kimia", singkatan: "KIM", icon: "kimia" },
  { slug: "fisika", nama: "Fisika", singkatan: "FIS", icon: "fisika" },
  {
    slug: "rekayasa-sistem-komputer",
    nama: "Rekayasa Sistem Komputer",
    singkatan: "RSK",
    icon: "rsk",
  },
  { slug: "sistem-informasi", nama: "Sistem Informasi", singkatan: "SI", icon: "si" },
  { slug: "ilmu-kelautan", nama: "Ilmu Kelautan", singkatan: "IKL", icon: "kelautan" },
];

// Matematika hanya punya 2 menu: Pengajuan Seminar & Pengajuan Sidang.
const menuMatematika: { label: string; icon: MenuIconKey; slug: string }[] = [
  { label: "Pengajuan Seminar", icon: "seminar", slug: "seminar" },
  { label: "Pengajuan Sidang", icon: "sidang", slug: "sidang" },
];

// Jurusan lainnya punya 3 menu: Seminar Proposal, Seminar Hasil, Sidang.
const menuDefault: { label: string; icon: MenuIconKey; slug: string }[] = [
  { label: "Pengajuan Seminar Proposal", icon: "seminar", slug: "seminar-proposal" },
  { label: "Pengajuan Seminar Hasil", icon: "seminar", slug: "seminar-hasil" },
  { label: "Pengajuan Sidang", icon: "sidang", slug: "sidang" },
];

// PENTING: setiap link Google Form punya alamat placeholder unik dalam bentuk
// https://forms.google.com/ganti-link-<jurusan>-<menu>
// Cari & ganti (Ctrl+F) tiap "ganti-link-..." dengan link Google Form asli kamu.
export const jurusanList: Jurusan[] = jurusanBase.map((base) => {
  const blueprint = base.slug === "matematika" ? menuMatematika : menuDefault;
  return {
    ...base,
    menu: blueprint.map((m) => ({
      label: m.label,
      icon: m.icon,
      url: `https://forms.google.com/ganti-link-${base.slug}-${m.slug}`,
    })),
  };
});

export function getJurusanBySlug(slug: string) {
  return jurusanList.find((j) => j.slug === slug);
}
