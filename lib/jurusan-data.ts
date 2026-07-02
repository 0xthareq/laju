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

// PENTING: isi link Google Form asli untuk tiap jurusan
const formLinks: Record<string, string> = {
  "matematika-seminar": "https://forms.gle/b9PP8AdHqrnMuvvn9",
  "matematika-sidang": "https://forms.gle/TxNn427r5d4AkFJd6",

  "biologi-seminar-proposal": "ganti-link-biologi-seminar-proposal",
  "biologi-seminar-hasil": "ganti-link-biologi-seminar-hasil",
  "biologi-sidang": "ganti-link-biologi-sidang",

  "kimia-seminar-proposal": "ganti-link-kimia-seminar-proposal",
  "kimia-seminar-hasil": "ganti-link-kimia-seminar-hasil",
  "kimia-sidang": "ganti-link-kimia-sidang",

  "fisika-seminar-proposal": "ganti-link-fisika-seminar-proposal",
  "fisika-seminar-hasil": "ganti-link-fisika-seminar-hasil",
  "fisika-sidang": "ganti-link-fisika-sidang",

  "rekayasa-sistem-komputer-seminar-proposal": "ganti-link-rsk-seminar-proposal",
  "rekayasa-sistem-komputer-seminar-hasil": "ganti-link-rsk-seminar-hasil",
  "rekayasa-sistem-komputer-sidang": "ganti-link-rsk-sidang",

  "sistem-informasi-seminar-proposal": "ganti-link-si-seminar-proposal",
  "sistem-informasi-seminar-hasil": "ganti-link-si-seminar-hasil",
  "sistem-informasi-sidang": "ganti-link-si-sidang",

  "ilmu-kelautan-seminar-proposal": "ganti-link-ikl-seminar-proposal",
  "ilmu-kelautan-seminar-hasil": "ganti-link-ikl-seminar-hasil",
  "ilmu-kelautan-sidang": "ganti-link-ikl-sidang",
};

export const jurusanList: Jurusan[] = jurusanBase.map((base) => {
  const blueprint = base.slug === "matematika" ? menuMatematika : menuDefault;
  return {
    ...base,
    menu: blueprint.map((m) => ({
      label: m.label,
      icon: m.icon,
      url: formLinks[`${base.slug}-${m.slug}`] ?? "ganti-link-belum-diisi",
    })),
  };
});

export function getJurusanBySlug(slug: string) {
  return jurusanList.find((j) => j.slug === slug);
}

