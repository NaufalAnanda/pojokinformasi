import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Clock, Apple, Package, ShoppingBag, CupSoda, Trash, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/edukasi_/waktuPenguraian")({
  component: WaktuPenguraianModule,
});

function WaktuPenguraianModule() {
  return (
    <div className="min-h-screen bg-background pb-24">
      
      {/* HEADER NAVIGASI (Full Page Width 7xl) */}
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

      {/* KONTEN ARTIKEL (Full Page Width 7xl) */}
      <article className="mx-auto mt-8 max-w-7xl px-5">
        
        {/* HERO SECTION SPLIT */}
        <div className="mb-16 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-bold text-primary">
              <Clock className="h-4 w-4" /> Modul 03
            </div>
            <h1 className="text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Waktu Penguraian Sampah
            </h1>
            <p className="mt-6 text-lg font-medium leading-relaxed text-muted-foreground">
              Tahukah Anda berapa lama bumi butuh waktu untuk "mencerna" sampah yang kita buang? Mari lihat fakta mengejutkan di balik umur sampah di tanah desa kita.
            </p>
          </div>
          
          <div className="aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] border border-border bg-muted lg:aspect-square xl:aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Ilustrasi jam dan tumpukan botol plastik" 
              className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
        </div>

        {/* SECTION 1: PENJELASAN (Split 1/3 Judul, 2/3 Teks) */}
        <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-16">
          <div className="col-span-1">
            <h2 className="text-3xl font-bold leading-tight text-foreground">Bumi Bukan Tempat Sampah Ajaib</h2>
          </div>
          <div className="col-span-1 space-y-6 text-lg font-medium leading-relaxed text-muted-foreground lg:col-span-2">
            <p className="text-xl text-foreground">
              Banyak orang mengira ketika sampah dilempar ke tanah atau dikubur, masalah selesai. Kenyataannya, tanah memiliki batas waktu untuk mengurai bahan-bahan tersebut.
            </p>
            <p>
              Sampah alami seperti daun dan sisa makanan memang mudah hancur dan menyatu dengan tanah dalam hitungan minggu. Namun, sampah sintetis buatan pabrik (plastik, kaca, kaleng) bisa <strong>bertahan hingga ratusan tahun</strong> dan mewariskan racun mematikan untuk anak cucu kita kelak.
            </p>
          </div>
        </div>

        {/* SECTION 2: INFOGRAFIS KARTU (Grid 5 Kolom yang responsif) */}
        <div className="mb-20">
          <h2 className="mb-8 text-center text-2xl font-black text-foreground sm:text-3xl">
            Perbandingan Umur Sampah di Alam
          </h2>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-5">
            
            {/* Kartu 1: Organik (Hijau) */}
            <div className="flex flex-col rounded-3xl border-2 border-green-500/20 bg-green-500/5 p-6 text-center">
              <Apple className="mx-auto mb-4 h-10 w-10 text-green-600" />
              <h4 className="mb-1 text-sm font-bold text-muted-foreground">Sisa Makanan & Sayur</h4>
              <p className="mb-4 text-4xl font-black text-green-700">2-6</p>
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-700">MINGGU</span>
            </div>

            {/* Kartu 2: Kertas (Kuning) */}
            <div className="flex flex-col rounded-3xl border-2 border-amber-500/20 bg-amber-500/5 p-6 text-center">
              <Package className="mx-auto mb-4 h-10 w-10 text-amber-600" />
              <h4 className="mb-1 text-sm font-bold text-muted-foreground">Kertas & Kardus</h4>
              <p className="mb-4 text-4xl font-black text-amber-700">2-5</p>
              <span className="rounded-full bg-amber-500/20 px-3 py-1 text-xs font-bold text-amber-700">BULAN</span>
            </div>

            {/* Kartu 3: Plastik Kresek (Oranye) */}
            <div className="flex flex-col rounded-3xl border-2 border-orange-500/20 bg-orange-500/5 p-6 text-center">
              <ShoppingBag className="mx-auto mb-4 h-10 w-10 text-orange-600" />
              <h4 className="mb-1 text-sm font-bold text-muted-foreground">Kantong Plastik Kresek</h4>
              <p className="mb-4 text-4xl font-black text-orange-700">10-20</p>
              <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-700">TAHUN</span>
            </div>

            {/* Kartu 4: Botol Plastik (Merah) */}
            <div className="flex flex-col rounded-3xl border-2 border-red-500/20 bg-red-500/5 p-6 text-center shadow-lg shadow-red-500/5">
              <CupSoda className="mx-auto mb-4 h-10 w-10 text-red-600" />
              <h4 className="mb-1 text-sm font-bold text-muted-foreground">Botol Air Mineral</h4>
              <p className="mb-4 text-4xl font-black text-red-700">450</p>
              <span className="rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-700">TAHUN</span>
            </div>

            {/* Kartu 5: Kaca/Styrofoam (Gelap) */}
            <div className="flex flex-col rounded-3xl border-2 border-slate-500/20 bg-slate-500/5 p-6 text-center">
              <Trash className="mx-auto mb-4 h-10 w-10 text-slate-600" />
              <h4 className="mb-1 text-sm font-bold text-muted-foreground">Kaca & Styrofoam</h4>
              <p className="mb-4 text-3xl font-black text-slate-700">Tidak Bisa</p>
              <span className="rounded-full bg-slate-500/20 px-3 py-1 text-xs font-bold text-slate-700">HANCUR / TERURAI</span>
            </div>

          </div>
        </div>

        {/* SECTION 3: BANNER KESIMPULAN/WARNING */}
        <div className="relative overflow-hidden rounded-[3rem] bg-amber-500 px-8 py-12 text-amber-950 shadow-2xl shadow-amber-500/20 sm:px-16 sm:py-16">
          <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-white/20 blur-2xl"></div>
          <div className="relative z-10 mx-auto max-w-3xl flex flex-col md:flex-row items-center gap-8 md:text-left text-center">
            <div className="flex shrink-0 h-24 w-24 items-center justify-center rounded-full bg-white/30 backdrop-blur-md">
               <AlertTriangle className="h-12 w-12 text-amber-950" />
            </div>
            <div>
              <h3 className="mb-3 text-3xl font-black sm:text-4xl">Fakta Menakutkan</h3>
              <p className="text-lg font-bold leading-relaxed text-amber-950/80">
                Semua plastik yang pernah diciptakan dan dibuang ke tanah desa kita sejak dulu, sampai detik ini masih ada di dalam tanah dan belum hancur! Mulailah pilah sampah Anda sekarang.
              </p>
            </div>
          </div>
        </div>

      </article>
    </div>
  );
}