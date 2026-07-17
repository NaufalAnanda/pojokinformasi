import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Newspaper, ExternalLink } from "lucide-react";
import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/program-2.jpg";
import program3 from "@/assets/program-3.jpg";
import program4 from "@/assets/cfd.jpg";
import program5 from "@/assets/mengajar.jpg";

export const Route = createFileRoute("/program-kerja")({
  head: () => ({
    meta: [
      { title: "Program Kerja — KKN PMD Gelora" },
      {
        name: "description",
        content:
          "Tiga pilar utama: Infrastruktur Komposter Komunal, SI-Komp, dan Ekonomi Sirkular & Sedekah Hijau.",
      },
    ],
  }),
  component: ProgramKerja,
});

const cards = [
  {
    image: program1,
    tag: "Program 1",
    title: "Tong Komposter Sederhana",
    desc: "Mengelola sampah organik menjadi kompos secara mudah dan ramah lingkngan.",
    cta: "Detail Program",
  },
  {
    image: program2,
    tag: "Program 2",
    title: "SI-Komp (Sistem Informasi Sampah Terurai)",
    desc: "Digitalisasi panduan komposter via web-app yang diakses melalui stiker QR di pojok informasi.",
    cta: "Detail Program",
  },
  {
    image: program3,
    tag: "Program 3",
    title: "Daur Ulang Kreatif",
    desc: "Mengubah sampah menjadi barang bernilai guna dan estetis secara kreatif",
    cta: "Detail Program",
  },
  {
    image: program4,
    tag: "Program 4",
    title: "Car Free Day",
    desc: "Car Free Day di Desa Gelora",
    cta: "Detail Program",
  },
  {
    image: program5,
    tag: "Program 4",
    title: "Mengajar Anak SD",
    desc: "Mengajarkan mata pelajaran bahasa inggris dan matematika",
    cta: "Detail Program",
  },
];

function ProgramKerja() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
      <header className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-leaf-soft px-4 py-1.5 text-xs font-semibold text-primary">
          Program Kerja
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">
          Program Kerja KKN PMD Desa Gelora 2026.
        </h1>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Setiap pilar saling melengkapi: infrastruktur fisik, edukasi digital, dan sirkulasi
          ekonomi yang kembali ke warga.
        </p>
      </header>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <article
            key={c.title}
            className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary backdrop-blur">
                {c.tag}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <button
                type="button"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground transition hover:opacity-90"
              >
                {c.cta} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
