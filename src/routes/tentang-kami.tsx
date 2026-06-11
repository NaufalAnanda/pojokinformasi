import { createFileRoute } from "@tanstack/react-router";
import { Quote, MapPin, Users, Phone, Instagram } from "lucide-react";

export const Route = createFileRoute("/tentang-kami")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — KKN PMD Gelora" },
      { name: "description", content: "Profil kelompok KKN PMD Desa Gelora, sambutan Kepala Desa & DPL, dan profil 7 dusun." },
    ],
  }),
  component: TentangKami,
});

const pengurus = [
  { name: "-", role: "Ketua Kelompok" },
  { name: "-", role: "Sekretaris" },
  { name: "-", role: "Bendahara" },
];

const divisi = [
  { name: "-", role: "Divisi Humas" },
  { name: "-", role: "Divisi Acara" },
  { name: "-", role: "Divisi Perlengkapan" },
  { name: "-", role: "Divisi PDD" },
];

const dusun = [
  "Dusun Rungkang", "Dusun Tunas Harapan", "Dusun Bumi Hijau",
  "Dusun Cipta Karya", "Dusun Sumber Rejeki", "Dusun Wana Asri", "Dusun Tirta Mulya",
];

function TentangKami() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
      <header className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-leaf-soft px-4 py-1.5 text-xs font-semibold text-primary">
          Tentang Kami
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">
          Kelompok KKN PMD Desa Gelora.
        </h1>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Mahasiswa pengabdian masyarakat yang berkolaborasi dengan warga 7 dusun untuk
          membangun ekosistem ekonomi hijau berkelanjutan.
        </p>
      </header>

      <section className="mt-12">
        <div className="mb-6 flex items-center gap-3">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">
            Profil Kelompok
          </h2>
        </div>

        {/* Baris Pengurus */}
        <div className="mx-auto mb-6 grid max-w-4xl gap-4 md:grid-cols-3">
          {pengurus.map((m) => (
            <div
              key={m.role}
              className="rounded-3xl border border-border bg-card p-5 text-center"
            >
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-leaf-soft text-2xl font-extrabold text-primary">
                {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>

              <h3 className="mt-4 text-sm font-bold text-foreground">
                {m.name}
              </h3>

              <p className="mt-0.5 text-xs text-muted-foreground">
                {m.role}
              </p>
            </div>
          ))}
        </div>

        {/* Baris Divisi */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {divisi.map((m) => (
            <div
              key={m.role}
              className="rounded-3xl border border-border bg-card p-5 text-center"
            >
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-leaf-soft text-2xl font-extrabold text-primary">
                {m.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>

              <h3 className="mt-4 text-sm font-bold text-foreground">
                {m.name}
              </h3>

              <p className="mt-0.5 text-xs text-muted-foreground">
                {m.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-2">
        {[
          { from: "Kepala Desa Gelora", role: "Pemerintah Desa" },
          { from: "Dosen Pembimbing Lapangan", role: "Universitas Mataram" },
        ].map((s) => (
          <article key={s.from} className="rounded-3xl border border-border bg-card p-7">
            <Quote className="h-8 w-8 text-secondary" />
            <p className="mt-4 text-base leading-relaxed text-foreground/85">
              "Program Ekonomi Hijau ini menjadi langkah nyata kolaborasi mahasiswa dan warga
              Gelora — bukan hanya mengurangi sampah, tetapi menumbuhkan kemandirian ekonomi
              dari halaman rumah kita sendiri."
            </p>
            <div className="mt-5 border-t border-border pt-4">
              <p className="font-bold text-foreground">{s.from}</p>
              <p className="text-sm text-muted-foreground">{s.role}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-16">
        <div className="mb-6 flex items-center gap-3">
          <Phone className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Hubungi Kami</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          <a
            href="https://wa.me/6281933039319"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
              <Phone className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Ketua KKN</p>
              <p className="truncate text-base font-bold text-foreground">+62 819-3303-9319</p>
              <p className="text-xs text-muted-foreground">Ahmad Fauzi</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/kkn_desagelora2026?igsh=YzhrbWIzc3o4MTNm"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
              <Instagram className="h-6 w-6" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Instagram</p>
              <p className="truncate text-base font-bold text-foreground">@kknpmdgelora</p>
              <p className="text-xs text-muted-foreground">Update kegiatan harian</p>
            </div>
          </a>

          <a
            href="https://www.tiktok.com/@kkn.desa.gelora_p?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-foreground text-background">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.4a8.16 8.16 0 0 0 4.77 1.52V6.47a4.85 4.85 0 0 1-1.84-.22z"/>
              </svg>
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">TikTok</p>
              <p className="truncate text-base font-bold text-foreground">@kknpmdgelora</p>
              <p className="text-xs text-muted-foreground">Video edukasi & dokumentasi</p>
            </div>
          </a>
        </div>
      </section>

      <section className="mt-16">
        <div className="mb-6 flex items-center gap-3">
          <MapPin className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Profil Desa Gelora</h2>
        </div>
        <div className="rounded-3xl bg-card p-7 ring-1 ring-border">
          <p className="text-foreground/85">
            Desa Gelora terdiri dari <strong>7 dusun</strong> dengan karakter demografis yang
            beragam — dari pemukiman padat hingga area pertanian dan kerajinan bambu. Setiap
            dusun memiliki titik komposter komunal yang dikelola bersama warga.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {dusun.map((d) => (
              <div key={d} className="rounded-2xl bg-leaf-soft/70 px-4 py-3 text-sm font-semibold text-primary">
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
