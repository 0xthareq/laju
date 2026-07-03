export type Contact = {
  name: string;
  phone: string; // format internasional, contoh: "+6282351862413"
  initials: string;
  desc: string;
};

export const contacts: Contact[] = [
  {
    name: "Pak Prima",
    phone: "+6282351862413",
    initials: "PP",
    desc: "Admin Matematika & Statistika",
  },
  {
    name: "Surya Dharma",
    phone: "+62882019580331",
    initials: "SD",
    desc: "Admin Ilmu Kelautan, Fisika & Geofisika",
  },
  {
    name: "Raymount",
    phone: "+6285750114081",
    initials: "RM",
    desc: "Admin Sisfo & Siskom",
  },
  {
    name: "Bu Warsih",
    phone: "+6285750079543",
    initials: "WK",
    desc: "Admin S1 Kimia & S2 Kimia",
  },
  {
    name: "Pak Udin",
    phone: "+6285252036331",
    initials: "PU",
    desc: "Admin Biologi",
  },
];

// Bikin link WhatsApp dari nomor telepon.
export function getWhatsAppLink(phone: string) {
  const cleanNumber = phone.replace(/[^0-9]/g, "");
  return `https://wa.me/${cleanNumber}`;
}