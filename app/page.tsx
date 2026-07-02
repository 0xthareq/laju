import { Navbar } from "@/components/Navbar";
import { LineWaveBackground } from "@/components/LineWaveBackground";
import { HeroParticles } from "@/components/HeroParticles";
import { JurusanFlow } from "@/components/JurusanFlow";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden">
        <LineWaveBackground />
        <HeroParticles />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pb-28 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-hairline bg-white px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              Layanan Administrasi Jurusan
            </span>

            <h1 className="mx-auto mt-6 max-w-2xl text-[2.25rem] font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl">
              Urus Berkas Seminar dan Sidang Jurusan,{" "}
              <span className="text-gold">Tinggal Klik Tanpa Ngantrii</span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Pilih program studimu, lalu pilih jenis pengajuan yang kamu
              butuhkan — langsung terhubung ke form pengajuan resmi.
            </p>
          </div>

          <div className="mt-14">
            <JurusanFlow />
          </div>
        </div>
      </section>

      <footer className="border-t border-hairline bg-white/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-6 py-8 text-center">
          <span className="text-sm font-bold text-gold">LAJU</span>
          <p className="font-mono text-xs text-muted">
            Layanan Administrasi Jurusan · Fakultas MIPA · Universitas Tanjungpura
          </p>
        </div>
      </footer>
    </>
  );
}
