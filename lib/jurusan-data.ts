export type JurusanIconKey =
  | "matematika"
  | "kimia"
  | "biologi"
  | "fisika"
  | "rsk"
  | "si"
  | "kelautan";

export type MenuIconKey = "seminar" | "sidang" | "perubahan";

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

const jurusanBase: {
  slug: string;
  nama: string;
  singkatan: string;
  icon: JurusanIconKey;
  active: boolean;
}[] = [
  { slug: "matematika", nama: "Matematika", singkatan: "MTK", icon: "matematika", active: true },
  { slug: "biologi", nama: "Biologi", singkatan: "BIO", icon: "biologi", active: true },
  { slug: "kimia", nama: "Kimia", singkatan: "KIM", icon: "kimia", active: true },
  { slug: "fisika", nama: "Fisika", singkatan: "FIS", icon: "fisika", active: false },
  {
    slug: "rekayasa-sistem-komputer",
    nama: "Rekayasa Sistem Komputer",
    singkatan: "RSK",
    icon: "rsk",
    active: false,
  },
  { slug: "sistem-informasi", nama: "Sistem Informasi", singkatan: "SI", icon: "si", active: false },
  { slug: "ilmu-kelautan", nama: "Ilmu Kelautan", singkatan: "IKL", icon: "kelautan", active: true },
];

// Matematika hanya punya 3 menu: Pengajuan Seminar & Pengajuan Sidang.
const menuMatematika: { label: string; icon: MenuIconKey; slug: string }[] = [
  { label: "Pengajuan Seminar", icon: "seminar", slug: "seminar" },
  { label: "Pengajuan Sidang", icon: "sidang", slug: "sidang" },
  { label: "Pengajuan SK Perubahan", icon: "perubahan", slug: "sk-perubahan" },
  { label: "Pengajuan SK Pembimbing", icon: "perubahan", slug: "sk-pembimbing" },
];

// Jurusan lainnya punya 4 menu: SK Perubahan, Seminar Proposal, Seminar Hasil, Sidang.
const menuDefault: { label: string; icon: MenuIconKey; slug: string }[] = [
  { label: "Pengajuan SK Perubahan", icon: "perubahan", slug: "sk-perubahan" },
  { label: "Pengajuan Seminar Proposal", icon: "seminar", slug: "seminar-proposal" },
  { label: "Pengajuan Seminar Hasil", icon: "seminar", slug: "seminar-hasil" },
  { label: "Pengajuan Sidang", icon: "sidang", slug: "sidang" },
];

// Kimia punya menu tambahan khusus: Seminar Proposal Tesis S2.
const menuKimia: { label: string; icon: MenuIconKey; slug: string }[] = [
  ...menuDefault,
  { label: "Pengajuan Seminar Proposal Tesis S2", icon: "seminar", slug: "seminar-proposal-tesis-s2" },
];

// PENTING: isi link Google Form asli untuk tiap jurusan
const formLinks: Record<string, string> = {
  "matematika-seminar": "https://forms.gle/b9PP8AdHqrnMuvvn9",
  "matematika-sidang": "https://forms.gle/TxNn427r5d4AkFJd6",
  "matematika-sk-perubahan": "https://forms.gle/Abwc8BjFWjCd6Erz6", // ← tambah ini
  "matematika-sk-pembimbing": "https://forms.gle/b8scXmwou5Dz8Sjz7",

  "biologi-sk-perubahan": "https://forms.gle/ydjRUZP7QGHiCuMV7", // ← tambah ini
  "biologi-seminar-proposal": "https://forms.gle/JbXnuQHEQQYWhBVH9",
  "biologi-seminar-hasil": "https://forms.gle/V71yY7exXBktw3HE6",
  "biologi-sidang": "https://forms.gle/skt9tw8QfFCYzrP18",

  "kimia-sk-perubahan": "https://forms.gle/kiKvZQRZ5XJCBZr5A",
  "kimia-seminar-proposal": "https://forms.gle/wirznc8YpAL9xFu69",
  "kimia-seminar-hasil": "https://forms.gle/rmg87tjFPosUUCyT7",
  "kimia-sidang": "https://forms.gle/rkUP1wdS1FTW5Ufm8",
  "kimia-seminar-proposal-tesis-s2": "https://forms.gle/V6jYgvVRMRtfyEVL7",

  // "fisika-sk-perubahan": "ganti-link-fisika-sk-perubahan", // ← tambah ini
  // "fisika-seminar-proposal": "ganti-link-fisika-seminar-proposal",
  // "fisika-seminar-hasil": "ganti-link-fisika-seminar-hasil",
  // "fisika-sidang": "ganti-link-fisika-sidang",

  // "rekayasa-sistem-komputer-sk-perubahan": "ganti-link-rsk-sk-perubahan", // ← tambah ini
  // "rekayasa-sistem-komputer-seminar-proposal": "ganti-link-rsk-seminar-proposal",
  // "rekayasa-sistem-komputer-seminar-hasil": "ganti-link-rsk-seminar-hasil",
  // "rekayasa-sistem-komputer-sidang": "ganti-link-rsk-sidang",

  // "sistem-informasi-sk-perubahan": "ganti-link-si-sk-perubahan", // ← tambah ini
  // "sistem-informasi-seminar-proposal": "ganti-link-si-seminar-proposal",
  // "sistem-informasi-seminar-hasil": "ganti-link-si-seminar-hasil",
  // "sistem-informasi-sidang": "ganti-link-si-sidang",

  // "ilmu-kelautan-sk-perubahan": "ganti-link-ikl-sk-perubahan", // ← tambah ini
  "ilmu-kelautan-seminar-hasil": "https://forms.gle/GyyUFn6GPBfUCA6w6",
  "ilmu-kelautan-seminar-proposal": "https://forms.gle/1FtZNoWsGGtwFZ2e6",
  "ilmu-kelautan-sidang": "https://forms.gle/L7h5X6WEfNYX1ayTA",
};

function getBlueprint(slug: string) {
  if (slug === "matematika") return menuMatematika;
  if (slug === "kimia") return menuKimia;
  return menuDefault;
}

export const jurusanList: Jurusan[] = jurusanBase
  .filter((base) => base.active)
  .map((base) => {
    const blueprint = getBlueprint(base.slug);
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