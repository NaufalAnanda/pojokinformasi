import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import program1 from "@/assets/program-1.jpg";
import program2 from "@/assets/papan.jpg";
import program3 from "@/assets/teba.jpg";
import program4 from "@/assets/dok3-sd.jpg";
import program5 from "@/assets/tk.jpg";

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
    tag: "1",
    title: "Tong Komposter Sederhana",
    desc: "Mengelola sampah organik menjadi kompos secara mudah dan ramah lingkungan.",
    cta: "Detail Program",
    path: "/program-kerja/tongKomposter",
  },
  {
    image: program2,
    tag: "2",
    title: "SI-Komp (Sistem Informasi)",
    desc: "Digitalisasi panduan komposter via web-app yang diakses melalui stiker QR di pojok informasi.",
    cta: "Detail Program",
    path: "/program-kerja/siKomp",
  },
  {
    image: program3,
    tag: "3",
    title: "Lubang Teba",
    desc: "Kembalikan sisa organik ke alam. Solusi praktis tanpa biaya untuk mencegah genangan air dan menyuburkan tanah pekarangan.",
    cta: "Detail Program",
    path: "/program-kerja/lubangTeba",
  },
  {
    image: program4,
    tag: "4",
    title: "Mengajar Anak SD",
    desc: "Mengajarkan mata pelajaran bahasa Inggris dan matematika secara interaktif.",
    cta: "Detail Program",
    path: "/program-kerja/mengajarSD",
  },
  {
    image: program5,
    tag: "5",
    title: "Mengajar TK",
    desc: "Mengajar di taman kanak-kanak untuk membangun pondasi pendidikan anak usia dini.",
    cta: "Detail Program",
    path: "/program-kerja/mengajarTK",
  },
];

function ProgramKerja() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:py-20 relative overflow-hidden">
      
      {/* Ornamen Latar Belakang (Opsional: memberi kesan tidak polos) */}
      <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-green-50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <header className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700 shadow-sm">
          Program Kerja
        </span>
        <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl lg:text-6xl bg-gradient-to-br from-green-900 via-green-700 to-emerald-500 bg-clip-text text-transparent pb-2">
          Inovasi KKN PMD <br/> Desa Gelora 2026.
        </h1>
        <p className="mt-4 text-gray-600 sm:text-lg leading-relaxed max-w-2xl">
          Setiap pilar saling melengkapi: infrastruktur fisik, edukasi digital, dan sirkulasi
          ekonomi yang kembali ke tangan warga.
        </p>
      </header>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((c) => (
          <article
            key={c.title}
            // Tambahkan "group" untuk mengontrol animasi child element saat card di-hover
            className="group flex flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-900/10"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
              {/* Gambar dengan efek Zoom-in */}
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay gradasi tipis agar tag lebih terbaca */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              
              <span className="absolute left-5 top-5 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-green-700 shadow-sm transition-transform duration-300 group-hover:-translate-y-1">
                {c.tag}
              </span>
            </div>
            
            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-700">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500 line-clamp-3">
                {c.desc}
              </p>
              
              {/* Memaksa tombol selalu berada di bawah menggunakan mt-auto */}
              <div className="mt-auto pt-8">
                {/* group/btn digunakan khusus untuk hover state pada tombol */}
                <Link
                  to={c.path}
                  className="group/btn relative flex w-full items-center justify-center gap-2 rounded-2xl bg-green-50 px-5 py-3.5 text-sm font-semibold text-green-700 transition-all duration-300 hover:bg-green-600 hover:text-white hover:shadow-lg hover:shadow-green-200"
                >
                  <span>{c.cta}</span> 
                  {/* Panah bergeser ke kanan saat tombol di-hover */}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}