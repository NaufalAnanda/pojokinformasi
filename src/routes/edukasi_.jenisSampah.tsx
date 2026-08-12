import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Trash2, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/edukasi_/jenisSampah")({
  component: JenisSampahModule,
});

function JenisSampahModule() {
  return (
    <div className="min-h-screen bg-background pb-24">
      
      {/* HEADER NAVIGASI (Full Page Width) */}
      <div className="sticky top-0 z-10 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center px-5 py-4">
          <Link
            to="/edukasi"
            className="group flex items-center gap-2 rounded-full px-4 py-2 pl-0 text-sm font-bold text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Pusat Edukasi
          </Link>
        </div>
      </div>

      {/* KONTEN UTAMA (Max Width 7xl - Full Page) */}
      <article className="mx-auto mt-8 max-w-7xl px-5">
        
        {/* HEADER ARTIKEL */}
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
              <Trash2 className="h-4 w-4" /> Modul 02
            </div>
            <h1 className="text-4xl font-black leading-tight text-foreground sm:text-5xl">
              Mengenal Jenis-Jenis Sampah
            </h1>
            <p className="mt-4 text-lg font-medium leading-relaxed text-muted-foreground">
              Sebelum mulai membuat kompos menggunakan <strong className="text-foreground">SI-Komp</strong>, ketahui dulu tiga kategori utama sampah rumah tangga beserta perbedaannya di bawah ini.
            </p>
          </div>
        </div>

        {/* GAMBAR HERO (Lebar Penuh) */}
        <div className="mt-8 aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] border border-border bg-muted lg:aspect-[4/1.5]">
          <img 
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Ilustrasi jenis sampah" 
            className="h-full w-full object-cover"
          />
        </div>

        {/* GRID KONTEN (3 Kolom Murni Penjelasan) */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          
          {/* KARTU 1: ORGANIK */}
          <section className="flex flex-col rounded-3xl border-2 border-green-500/20 bg-green-500/5 p-6 transition-colors hover:border-green-500/40 sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/20 text-green-700 dark:text-green-400">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-green-700 dark:text-green-400">Sampah Organik</h2>
            <p className="mb-5 font-medium text-muted-foreground">
              Sisa makhluk hidup yang mudah membusuk atau hancur secara alami. Jenis ini adalah bahan baku utama untuk pembuatan kompos SI-Komp.
            </p>
            <ul className="space-y-3 text-sm font-medium text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-green-500">•</span> Sisa sayur & buah-buahan</li>
              <li className="flex items-start gap-2"><span className="text-green-500">•</span> Nasi & sisa makanan (tanpa kuah)</li>
              <li className="flex items-start gap-2"><span className="text-green-500">•</span> Cangkang telur & ampas kopi</li>
              <li className="flex items-start gap-2"><span className="text-green-500">•</span> Daun kering & ranting kecil</li>
            </ul>
          </section>

          {/* KARTU 2: ANORGANIK */}
          <section className="flex flex-col rounded-3xl border-2 border-orange-500/20 bg-orange-500/5 p-6 transition-colors hover:border-orange-500/40 sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-700 dark:text-orange-400">
              <XCircle className="h-7 w-7" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-orange-700 dark:text-orange-400">Sampah Anorganik</h2>
            <p className="mb-5 font-medium text-muted-foreground">
              Terbuat dari bahan sintetis yang butuh puluhan hingga ratusan tahun untuk terurai. Sampah ini tidak boleh masuk ke tong komposter.
            </p>
            <ul className="space-y-3 text-sm font-medium text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-orange-500">•</span> Plastik kemasan & kantong kresek</li>
              <li className="flex items-start gap-2"><span className="text-orange-500">•</span> Botol & gelas air mineral</li>
              <li className="flex items-start gap-2"><span className="text-orange-500">•</span> Kardus & kertas karton</li>
              <li className="flex items-start gap-2"><span className="text-orange-500">•</span> Kaleng & bahan logam lainnya</li>
            </ul>
          </section>

          {/* KARTU 3: B3 */}
          <section className="flex flex-col rounded-3xl border-2 border-red-500/20 bg-red-500/5 p-6 transition-colors hover:border-red-500/40 sm:p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/20 text-red-700 dark:text-red-400">
              <AlertTriangle className="h-7 w-7" />
            </div>
            <h2 className="mb-3 text-2xl font-bold text-red-700 dark:text-red-400">Sampah B3</h2>
            <p className="mb-5 font-medium text-muted-foreground">
              Bahan Berbahaya dan Beracun yang dapat mencemari kesuburan tanah & air. Sangat dilarang untuk dibakar atau dikubur sembarangan.
            </p>
            <ul className="space-y-3 text-sm font-medium text-muted-foreground">
              <li className="flex items-start gap-2"><span className="text-red-500">•</span> Baterai bekas & aki kendaraan</li>
              <li className="flex items-start gap-2"><span className="text-red-500">•</span> Lampu bohlam / neon rusak</li>
              <li className="flex items-start gap-2"><span className="text-red-500">•</span> Botol bekas pestisida pertanian</li>
              <li className="flex items-start gap-2"><span className="text-red-500">•</span> Obat-obatan medis kadaluarsa</li>
            </ul>
          </section>

        </div>
      </article>
    </div>
  );
}