import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Leaf, Sprout, Coins, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/edukasi_/ekonomiHijau")({
  component: EkonomiHijauModule,
});

function EkonomiHijauModule() {
  return (
    <div className="min-h-screen bg-background pb-24">
      
      {/* HEADER NAVIGASI */}
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

      {/* KONTEN ARTIKEL (Menggunakan max-w-4xl agar teks nyaman dibaca seperti buku) */}
      <article className="mx-auto mt-8 max-w-7xl px-5">
        
        {/* HEADER ARTIKEL */}
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
            <Leaf className="h-4 w-4" /> Modul 01
          </div>
          <h1 className="text-4xl font-black leading-tight text-foreground sm:text-5xl">
            Mengenal Ekonomi Hijau: Alam Lestari, Warga Sejahtera
          </h1>
          <p className="mt-4 text-lg font-medium leading-relaxed text-muted-foreground">
            Mengapa kita harus repot memikirkan lingkungan? Temukan bagaimana menjaga kebersihan desa ternyata bisa membawa keuntungan ekonomi bagi dapur tangga kita.
          </p>
        </div>

        {/* GAMBAR HERO */}
        <div className="mb-12 aspect-video w-full overflow-hidden rounded-[2.5rem] border border-border bg-muted lg:aspect-[21/9]">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Ilustrasi alam hijau dan pertanian" 
            className="h-full w-full object-cover"
          />
        </div>

        {/* ISI BACAAN */}
        <div className="prose prose-lg prose-green max-w-none text-muted-foreground">
          <p className="text-xl font-medium leading-relaxed text-foreground">
            Selama ini, kita sering berpikir bahwa membuang sampah pada tempatnya hanyalah soal menjaga pemandangan agar enak dilihat. Namun, ada konsep besar bernama <strong>Ekonomi Hijau</strong> yang membuktikan bahwa alam yang bersih adalah kunci dari kesejahteraan ekonomi warga.
          </p>

          <h2 className="mt-10 mb-4 text-2xl font-bold text-foreground">Apa itu Ekonomi Hijau?</h2>
          <p>
            Secara sederhana, Ekonomi Hijau adalah cara kita hidup, bertani, dan beraktivitas yang bisa menghasilkan keuntungan ekonomi <strong>tanpa harus merusak lingkungan</strong>. Di Desa Gelora, konsep ini sangat cocok diterapkan. Daripada membakar sampah daun atau membuang sisa sayur yang menimbulkan penyakit, kita bisa "menabung" sampah tersebut kembali ke alam untuk menghasilkan sesuatu yang bernilai jual.
          </p>

          {/* KARTU SOROTAN (HIGHLIGHTS) */}
          <div className="my-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col rounded-3xl border border-border/50 bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                <HeartHandshake className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Desa Lebih Sehat</h3>
              <p className="text-sm font-medium">Tanpa asap bakaran sampah dan selokan mampet, kesehatan keluarga dan anak-anak jadi lebih terjaga.</p>
            </div>
            
            <div className="flex flex-col rounded-3xl border border-border/50 bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600">
                <Coins className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Hemat Pengeluaran</h3>
              <p className="text-sm font-medium">Mulai mengurangi ketergantungan pada pupuk kimia mahal karena kita bisa memproduksi pupuk sendiri.</p>
            </div>

            <div className="flex flex-col rounded-3xl border border-border/50 bg-card p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-green-600">
                <Sprout className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">Tanah Makin Subur</h3>
              <p className="text-sm font-medium">Bahan organik mengembalikan unsur hara tanah yang hilang, membuat hasil panen kebun lebih maksimal.</p>
            </div>
          </div>

          <h2 className="mb-4 text-2xl font-bold text-foreground">Peran SI-Komp di Desa Gelora</h2>
          <p>
            Di sinilah program <strong>SI-Komp (Sistem Informasi Komposter)</strong> hadir sebagai langkah nyata penerapan ekonomi hijau di desa kita. Dengan memanfaatkan tong komposter yang telah disediakan, sisa dapur tangga tidak lagi menjadi sumber penyakit. 
          </p>
          
          <div className="mt-8 rounded-3xl bg-primary px-8 py-8 text-primary-foreground shadow-xl shadow-primary/20">
            <h3 className="mb-3 text-2xl font-bold text-white">Langkah Kecil, Dampak Besar</h3>
            <p className="mb-0 text-primary-foreground/90 font-medium leading-relaxed">
              Setiap kali Anda memasukkan sisa sayuran ke dalam tong SI-Komp, Anda sedang membantu Desa Gelora menciptakan pupuk gratis secara mandiri. Mari kita mulai mengelola sampah dapur tangga kita, dan ubah sisa menjadi berkah!
            </p>
          </div>

        </div>
      </article>
    </div>
  );
}