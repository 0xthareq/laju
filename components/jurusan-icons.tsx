import type { JurusanIconKey } from "@/lib/jurusan-data";

type IconProps = { className?: string };

function SigmaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M17 6H7l5.5 6L7 18h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FlaskIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9 3h6M10 3v6.2L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.2V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.5" cy="16.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 19c8-1 12-6.5 12-14-8 0-13 4-13 12 0 1 0 2 1 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M6 18c3-3.5 6-6.5 11-10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function WaveformIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 12h3l2-6 4 12 2-9 2 3h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CircuitIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="8" y="8" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 3v5M12 16v5M3 12h5M16 12h5M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function NetworkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.8 7.2 10.4 16M16.2 7.2 13.6 16M8.2 6h7.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function WavesIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 9c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 15c1.5-1.5 3-1.5 4.5 0s3 1.5 4.5 0 3-1.5 4.5 0 3 1.5 4.5 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const registry: Record<JurusanIconKey, (props: IconProps) => JSX.Element> = {
  matematika: SigmaIcon,
  kimia: FlaskIcon,
  biologi: LeafIcon,
  fisika: WaveformIcon,
  rsk: CircuitIcon,
  si: NetworkIcon,
  kelautan: WavesIcon,
};

export function JurusanIcon({ icon, className }: { icon: JurusanIconKey; className?: string }) {
  const Cmp = registry[icon];
  return <Cmp className={className} />;
}
