import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, PlayCircle, Youtube } from "lucide-react";

export const Route = createFileRoute("/edukasi_/video")({
  // head: () => ({
  //   meta: [{ title: "Galeri Video Edukasi — KKN PMD Gelora" }],
  // }),
  component: VideoEdukasi,
});

const daftarVideo = [
  {
    id: 1,
    judul: "Cara Memilah Sampah Dapur",
    deskripsi: "Panduan memisahkan sampah organik dan anorganik dari rumah.",
    thumbnail: "https://img.youtube.com/vi/0qfGNQ499JA/hqdefault.jpg", 
    urlYoutube: "https://youtu.be/0qfGNQ499JA?si=dR1K6bC5HzpJnClo",
  },
  {
    id: 2,
    judul: "Tutorial Menggunakan Tong Komposter",
    deskripsi: "Langkah-langkah mencampur daun kering dan sisa sayur.",
    thumbnail: "https://img.youtube.com/vi/6RRojjnLJko/hqdefault.jpg",
    urlYoutube: "https://youtu.be/6RRojjnLJko?si=1Zgpy3wqe0B5DlYE",
  },
  {
    id: 3,
    judul: "Manfaat Pupuk Kompos untuk Tanaman",
    deskripsi: "Melihat hasil nyata penggunaan kompos pada tanaman pekarangan.",
    thumbnail: "https://img.youtube.com/vi/_acH-EorKIU/hqdefault.jpg",
    urlYoutube: "https://youtu.be/_acH-EorKIU?si=zm7CPzrUU6PCU2ej",
  }
];

function VideoEdukasi() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:py-16">
      
      {/* TOMBOL KEMBALI */}
      <Link
        to="/edukasi"
        className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition hover:text-primary"
      >
        <ArrowLeft className="h-5 w-5" /> Kembali ke Pusat Edukasi
      </Link>

      {/* HEADER HALAMAN */}
      <div className="mb-10 max-w-2xl">
        <h1 className="text-3xl font-extrabold text-foreground md:text-4xl">
          Galeri Video Edukasi
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Pilih dan tonton video panduan program ekonomi hijau Desa Gelora.
        </p>
      </div>

      {/* GRID KARTU VIDEO */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
        {daftarVideo.map((video) => (
          <div 
            key={video.id} 
            className="group flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-all hover:shadow-xl ring-1 ring-border/50"
          >
            {/* BAGIAN ATAS: Thumbnail Gambar */}
            <div className="relative aspect-video w-full overflow-hidden bg-gray-200">
              <img 
                src={video.thumbnail} 
                alt={`Thumbnail ${video.judul}`} 
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                // Fallback jika thumbnail gagal dimuat
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/640x360.png?text=Video+Edukasi";
                }}
              />
              {/* Overlay Hitam Transparan & Ikon Play Besar di Tengah */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/40">
                <PlayCircle className="h-16 w-16 text-white opacity-80 shadow-sm transition group-hover:scale-110 group-hover:opacity-100" />
              </div>
            </div>

            {/* BAGIAN BAWAH: Teks & Tombol YouTube */}
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-xl font-bold leading-snug text-foreground">
                {video.judul}
              </h2>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {video.deskripsi}
              </p>
              
              {/* Tombol Nonton Eksternal (Menggunakan Tag <a> biasa karena keluar dari website) */}
              <a 
                href={video.urlYoutube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-700 active:scale-95"
              >
                <Youtube className="h-5 w-5" /> Tonton di YouTube
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}