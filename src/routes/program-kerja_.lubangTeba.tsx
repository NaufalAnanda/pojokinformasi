import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Sprout } from 'lucide-react'
// TODO: Siapkan gambar teba.jpg di folder assets
import tebaImg from "@/assets/teba.jpg"

import dok1 from "@/assets/dok1-teba.jpg"
import dok2 from "@/assets/dok2-teba.jpg"
import dok3 from "@/assets/dok3-teba.jpg"
import dok4 from "@/assets/dok4-teba.jpg"

export const Route = createFileRoute('/program-kerja_/lubangTeba')({
  component: DetailLubangTeba,
})

function DetailLubangTeba() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans pb-20 relative overflow-hidden">
      
      {/* Ornamen Background Halaman (Warna Membumi/Earth Tone) */}
      <div className="absolute top-40 right-0 -z-10 w-[500px] h-[500px] bg-amber-50 rounded-full blur-3xl opacity-70 translate-x-1/3 pointer-events-none"></div>

      {/* 1. HERO BANNER */}
      <div className="w-full h-[350px] md:h-[450px] relative overflow-hidden group">
        <img 
          src={tebaImg} 
          alt="Pembuatan Lubang Teba Desa Gelora" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Overlay gradasi agar teks/badge kontras */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-6 md:px-16 max-w-5xl mx-auto">
          <span className="w-max bg-white/90 backdrop-blur-sm text-amber-800 font-extrabold tracking-wider px-4 py-1.5 rounded-full text-xs uppercase shadow-lg mb-4 translate-y-2 opacity-90 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            Infrastruktur Lingkungan
          </span>
        </div>
      </div>

      {/* 2. KONTEN UTAMA */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 mt-10">
        
        {/* Judul Halaman */}
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-gray-900 via-amber-900 to-yellow-600 bg-clip-text text-transparent mb-12 leading-tight pb-2">
          Lubang Teba: Solusi Tradisional <br className="hidden md:block" /> Resapkan Air dan Komposkan Sampah
        </h1>

        {/* Teks Artikel (Data dilebur ke dalam paragraf kedua) */}
        <div className="text-gray-600 leading-relaxed space-y-8 text-lg">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-amber-500 rounded-full inline-block"></span>
              Latar Belakang Kegiatan
            </h3>
            <p>
              Selain mengandalkan tong komposter, pengelolaan sampah organik sisa makanan dan dedaunan kering dapat dilakukan dengan metode yang lebih menyatu dengan alam. Metode ini tidak hanya menuntaskan masalah sampah, tetapi juga membantu menjaga cadangan air tanah di musim kemarau.
            </p>
            <p className="mt-4">
              Sebagai langkah nyata dalam <strong className="text-amber-800">pelestarian lingkungan desa</strong>, mahasiswa KKN PMD Unram menginisiasi pembuatan <strong className="text-amber-800">Lubang Teba (Biopori/Resapan)</strong>. Program ini menyasar <strong className="text-amber-800">pekarangan rumah warga</strong> dan fasilitas umum di <strong className="text-amber-800">Desa Gelora</strong>, guna menciptakan sistem pengelolaan limbah organik yang mandiri, nol biaya, dan ramah lingkungan.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-amber-500 rounded-full inline-block"></span>
              Tahapan Pembuatan & Penggunaan
            </h3>
            <p className="mb-5">
              Pembuatan Lubang Teba sangat mudah dan bisa direplikasi oleh warga secara mandiri. Berikut adalah tahapan yang kami sosialisasikan dan praktikkan:
            </p>
            <ul className="space-y-4">
              {[
                { title: 'Penentuan Lokasi', desc: 'Mencari titik pekarangan yang aman dari bangunan inti, idealnya di area yang sering tergenang air hujan atau di dekat pepohonan.' },
                { title: 'Penggalian Teba', desc: 'Menggali tanah dengan kedalaman sekitar 1 hingga 1,5 meter. Lubang ini berfungsi sebagai wadah utama penampungan materi organik.' },
                { title: 'Pengisian Sampah Organik', desc: 'Warga dapat membuang sisa sayur, kulit buah, rumput, dan dedaunan kering langsung ke dalam lubang setiap harinya tanpa perlu dicacah halus.' },
                { title: 'Panen Kompos Alami', desc: 'Setelah lubang penuh, permukaannya ditutup dengan tanah. Dalam beberapa bulan, materi di dalamnya akan terurai menjadi pupuk kompos yang menyuburkan tanah sekitarnya.' },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-50 shadow-sm transition-colors hover:border-amber-200 group/list">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm transition-transform group-hover/list:scale-110">
                    {idx + 1}
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1">{item.title}</strong>
                    <span className="text-gray-600 text-base">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Callout Info Inspiratif */}
          <div className="relative overflow-hidden bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-yellow-500 p-8 rounded-r-2xl my-10 shadow-sm flex flex-col md:flex-row gap-6 items-center">
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-amber-200 rounded-full blur-2xl opacity-50"></div>
            
            <div className="flex-shrink-0 bg-white p-4 rounded-full shadow-md relative z-10 text-yellow-600">
              <Sprout className="w-8 h-8" />
            </div>
            
            <div className="relative z-10 flex-1">
              <h4 className="text-xl font-extrabold text-amber-900 mb-1">Kembali Membumi</h4>
              <p className="text-amber-800 m-0 leading-relaxed text-base">
                Mengembalikan apa yang berasal dari bumi kembali ke bumi. Lubang Teba adalah bukti bahwa solusi terbaik untuk kelestarian alam terkadang adalah metode yang paling sederhana.
              </p>
            </div>
          </div>
        </div>

        {/* 3. GALERI DOKUMENTASI */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-amber-500 rounded-full inline-block"></span>
            Galeri Dokumentasi
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { src: dok1},
              { src: dok2 },
              { src: dok3 },
              { src: dok4 },
            ].map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-sm bg-gray-200 aspect-video">
                {/* TODO: Siapkan foto dokumentasi Lubang Teba di folder public/images */}
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. NAVIGASI BAWAH */}
        <div className="mt-20 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-8 gap-6">
          {/* Tombol Back */}
          <Link 
            to="/program-kerja" 
            className="group/back flex items-center gap-2 text-gray-500 font-semibold hover:text-amber-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/back:-translate-x-1.5" />
            Kembali ke Daftar Program
          </Link>
          
          {/* Tombol Next Proker (Diarahkan ke SI-Komp atau Tong Komposter) */}
          <Link 
            to="/program-kerja/mengajarSD" 
            className="group/next flex items-center gap-2 rounded-2xl bg-amber-50 px-7 py-4 text-sm font-bold text-amber-700 transition-all duration-300 hover:bg-amber-500 hover:text-white hover:shadow-lg hover:shadow-amber-200"
          >
            Lihat Program Mengajar SD
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/next:translate-x-1.5" />
          </Link>
        </div>

      </div>
    </div>
  )
}