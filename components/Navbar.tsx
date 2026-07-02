import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40">
      <div className="border-b border-hairline bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3 focus-ring rounded-md">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl overflow-hidden">
                <img src="/untan-logo.png" alt="Logo Universitas Tanjungpura" className="h-full w-full object-contain" />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-bold tracking-tight text-gold">
                LAJU
              </span>
              <span className="block text-[11px] leading-tight text-muted">
                Layanan Administrasi Jurusan
              </span>
            </span>
          </Link>
          <span className="hidden max-w-xs text-right text-[11px] leading-snug text-muted sm:block">
            Urus Berkas Seminar dan Sidang Jurusan,
            <br />
            Tinggal Klik Tanpa Ngantrii
          </span>
        </div>
      </div>
    </header>
  );
}
