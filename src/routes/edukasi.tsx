import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Info,
  Trash2,
  Clock,
  Video,
  QrCode,
} from "lucide-react";

export const Route = createFileRoute("/edukasi")({
  head: () => ({
    meta: [
      { title: "Pusat Edukasi — KKN PMD Gelora" },
      {
        name: "description",
        content:
          "Portal edukasi pemilahan sampah dan panduan komposter — 8 modul interaktif, akses 24 jam.",
      },
    ],
  }),
  component: Edukasi,
});

const grids = [
  { 
    icon: Info, 
    title: "Mengenal Ekonomi Hijau", 
    desc: "Pentingnya menjaga lingkungan desa.", 
    to: "/edukasi/ekonomiHijau" 
  },
  { 
    icon: Trash2, 
    title: "Jenis-Jenis Sampah", 
    desc: "Organik, Anorganik, dan B3.", 
    to: "/edukasi/jenisSampah" 
  },
  { 
    icon: Clock, 
    title: "Waktu Penguraian Sampah", 
    desc: "Infografis durasi terurainya sampah.", 
    to: "/edukasi/waktuPenguraian" 
  },
  { 
    icon: Video, 
    title: "Video Edukasi", 
    desc: "Tutorial visual untuk warga.", 
    to: "/edukasi/video" 
  },
];

function Edukasi() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
      <header className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-leaf-soft px-4 py-1.5 text-xs font-semibold text-primary">
            <QrCode className="h-3.5 w-3.5" /> Scan QR di Papan Informasi
          </span>
          <h1 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            Pusat Edukasi Ekonomi Hijau.
          </h1>
          <p className="mt-2 text-muted-foreground">
            Empat modul edukasi, pilih topik dan langsung pelajari.
          </p>
        </div>
      </header>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {grids.map((g, i) => (
          <Link
            key={g.title}
            to={g.to} 
            className="group flex flex-col rounded-3xl border border-border bg-card p-5 text-left transition hover:-translate-y-1 hover:border-primary hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground transition group-hover:scale-105">
                <g.icon className="h-6 w-6" />
              </span>
              <span className="text-xs font-bold text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="mt-4 text-base font-bold leading-snug text-foreground">{g.title}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{g.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
