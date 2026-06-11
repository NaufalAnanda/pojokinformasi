import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Recycle, Boxes, Sprout, BookOpen, Calendar, Leaf } from "lucide-react";
import heroImg from "@/assets/hero-komposter.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beranda — KKN PMD Gelora" },
      {
        name: "description",
        content:
          "Kampanye Ekonomi Hijau Desa Gelora: dampak komposter komunal, edukasi, dan ekonomi sirkular.",
      },
    ],
  }),
  component: Index,
});

const metrics = [
  { label: "Volume Sampah Terolah", value: "1.248", unit: "Kg", icon: Recycle },
  { label: "Tong Komposter Aktif", value: "24", unit: "Unit", icon: Boxes },
  { label: "Pupuk Kompos Dihasilkan", value: "312", unit: "Kg", icon: Sprout },
];

const shortcuts = [
  {
    to: "/program-kerja" as const,
    title: "Program Kerja",
    desc: "Tiga pilar utama: infrastruktur komposter, SI-Komp, dan ekonomi sirkular.",
    icon: Boxes,
  },
  {
    to: "/edukasi" as const,
    title: "Pusat Edukasi",
    desc: "8 modul edukasi pemilahan sampah dan panduan komposter — akses 24 jam.",
    icon: BookOpen,
  },
  {
    to: "/tentang-kami" as const,
    title: "Tentang Kami",
    desc: "Profil kelompok KKN PMD, sambutan, dan profil 7 dusun Desa Gelora.",
    icon: Calendar,
  },
];

function Index() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-10 pb-14 md:grid-cols-2 md:items-center md:pt-16 md:pb-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-leaf-soft px-4 py-1.5 text-xs font-semibold text-primary">
              <Leaf className="h-3.5 w-3.5" /> Kampanye Ekonomi Hijau
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl md:text-6xl">
              Ubah Sampah, <span className="text-primary">Menjadi Peluang</span> Bagi Desa.
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Program KKN PMD Desa Gelora mengajak masyarakat mengolah sampah organik menjadi kompos
              bernilai guna, mendukung lingkungan yang lebih bersih sekaligus meningkatkan ekonomi
              desa secara berkelanjutan.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/program-kerja"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90"
              >
                Lihat Program Kerja <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/edukasi"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-leaf-soft"
              >
                Pusat Edukasi
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-leaf-soft to-accent/40 blur-2xl" />
            <img
              src={heroImg}
              alt="Warga Desa Gelora mengelola komposter komunal"
              width={1536}
              height={1024}
              className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl ring-1 ring-border"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5">
        <div className="rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border sm:p-8">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">Dampak Program (Live)</h2>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> diperbarui mingguan
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-2xl bg-leaf-soft/60 p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <p className="text-sm font-medium text-foreground/80">{m.label}</p>
                </div>
                <div className="mt-4 flex items-baseline gap-1.5">
                  <span className="text-4xl font-extrabold text-foreground">{m.value}</span>
                  <span className="text-sm font-semibold text-muted-foreground">{m.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Akses Cepat</h2>
          <p className="mt-2 text-muted-foreground">Jelajahi tiga area utama platform kami.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shortcuts.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-lg"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-secondary-foreground">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Buka halaman <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
