import type { MenuIconKey } from "@/lib/jurusan-data";

type IconProps = { className?: string };

function SeminarIcon({ className }: IconProps) {
  // pena + kertas — pengajuan seminar
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 4h9l3 3v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M15 4v3h3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path
        d="M8.5 12.5 13.5 12M8.5 15.5h5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SidangIcon({ className }: IconProps) {
  // palu sidang
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="m9.5 8.5 3.6-3.6a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4L13.5 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="m6 12 6 6M4 20l4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M13 12 6 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PerubahanIcon({ className }: IconProps) {
  // panah refresh/putar — pengajuan SK perubahan
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 12a8 8 0 0 1 13.66-5.66M20 12a8 8 0 0 1-13.66 5.66"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M17 4v3.5h-3.5M7 20v-3.5h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const registry: Record<MenuIconKey, (props: IconProps) => JSX.Element> = {
  seminar: SeminarIcon,
  sidang: SidangIcon,
  perubahan: PerubahanIcon,
};

export function DocumentIcon({ icon, className }: { icon: MenuIconKey; className?: string }) {
  const Cmp = registry[icon];
  return <Cmp className={className} />;
}