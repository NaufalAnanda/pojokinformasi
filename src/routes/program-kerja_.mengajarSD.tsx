import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
// Mengambil gambar sd.jpg dari folder assets
import sdImg from "@/assets/dok3-sd.jpg"

import dok1 from "@/assets/dok1-sd.jpg"
import dok2 from "@/assets/dok2-sd.jpg"
import dok3 from "@/assets/sd.jpg"
import dok4 from "@/assets/dok4-sd.jpg"

export const Route = createFileRoute('/program-kerja_/mengajarSD')({
  component: DetailMengajarSD,
})

function DetailMengajarSD() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans pb-20 relative overflow-hidden">
      
      {/* Ornamen Background Halaman (Warna Biru Lembut) */}
      <div className="absolute top-40 right-0 -z-10 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 translate-x-1/3 pointer-events-none"></div>

      {/* 1. HERO BANNER */}
      <div className="w-full h-[350px] md:h-[450px] relative overflow-hidden group">
        <img 
          src={sdImg} 
          alt="Kegiatan Mengajar Anak SD Desa Gelora" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Overlay gradasi agar teks/badge kontras */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-6 md:px-16 max-w-5xl mx-auto">
          <span className="w-max bg-white/90 backdrop-blur-sm text-blue-800 font-extrabold tracking-wider px-4 py-1.5 rounded-full text-xs uppercase shadow-lg mb-4 translate-y-2 opacity-90 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            Pendidikan Dasar
          </span>
        </div>
      </div>

      {/* 2. KONTEN UTAMA */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 mt-10">
        
        {/* Judul Halaman */}
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-500 bg-clip-text text-transparent mb-12 leading-tight pb-2">
          Mengajar Anak SD: Penguatan Literasi <br className="hidden md:block" /> Bahasa dan Numerasi Dini
        </h1>

        {/* Teks Artikel (Data dilebur ke dalam paragraf kedua) */}
        <div className="text-gray-600 leading-relaxed space-y-8 text-lg">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500 rounded-full inline-block"></span>
              Latar Belakang Kegiatan
            </h3>
            <p>
              Literasi dan numerasi merupakan dua pilar utama dalam pendidikan dasar yang akan menentukan kemampuan anak dalam menyerap ilmu di jenjang selanjutnya. Namun, di beberapa wilayah pedesaan, akses terhadap metode pembelajaran yang variatif masih terbatas.
            </p>
            <p className="mt-4">
              Sebagai wujud <strong className="text-blue-800">penguatan akademik</strong> bagi <strong className="text-blue-800">siswa Sekolah Dasar</strong>, mahasiswa KKN PMD Unram hadir secara rutin untuk mendampingi kegiatan belajar mengajar di <strong className="text-blue-800">SDN 2 Desa Gelora</strong>. Kami berupaya mengubah stigma belajar menjadi seru dan interaktif melalui pengajaran mata pelajaran esensial, yakni <strong className="text-blue-800">Bahasa Inggris, Matematika, dan Akuntansi Dasar</strong>.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500 rounded-full inline-block"></span>
              Metode & Materi Pembelajaran
            </h3>
            <p className="mb-5">
              Pembelajaran dilakukan pada jam sekolah maupun membersamai guru di dalam kelas. Fokus kegiatan kami mencakup:
            </p>
            <ul className="space-y-4">
              {[
                { title: 'English', desc: 'Membangun kepercayaan diri anak dalam berbahasa asing dengan mengajarkan penguasaan kosakata (vocabulary), kata ganti (pronoun), serta struktur kalimat dasar (tenses) secara interaktif.' },
                { title: 'Matematika', desc: 'Mendampingi siswa kelas 4, 5, dan 6 SD mendalami materi sekolah. Kami juga membekali mereka dengan trik hitung perkalian cepat agar matematika terasa lebih mudah dan menyenangkan.' },
                { title: 'Akuntansi Dasar', desc: 'Menanamkan literasi keuangan sejak dini dengan mengajarkan cara sederhana mencatat uang jajan, simulasi menabung, dan memahami nilai uang melalui permainan peran (role-play).' },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-50 shadow-sm transition-colors hover:border-blue-200 group/list">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm transition-transform group-hover/list:scale-110">
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
        </div>

        {/* 3. GALERI DOKUMENTASI */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-blue-500 rounded-full inline-block"></span>
            Galeri Dokumentasi
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { src: dok1 },
              { src: dok2 },
              { src: dok3 },
              { src: dok4 },
            ].map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-sm bg-gray-200 aspect-video">
                {/* TODO: Siapkan foto dokumentasi SD di folder public/images */}
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
            className="group/back flex items-center gap-2 text-gray-500 font-semibold hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/back:-translate-x-1.5" />
            Kembali ke Daftar Program
          </Link>
          
          {/* Tombol Next Proker (Kembali ke program pertama: Komposter) */}
          <Link 
            to="/program-kerja/mengajarTK" 
            className="group/next flex items-center gap-2 rounded-2xl bg-blue-50 px-7 py-4 text-sm font-bold text-blue-700 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-200"
          >
            Lihat Program Mengajar TK
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/next:translate-x-1.5" />
          </Link>
        </div>

      </div>
    </div>
  )
}