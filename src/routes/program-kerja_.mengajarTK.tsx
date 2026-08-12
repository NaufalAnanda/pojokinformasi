import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Palette } from 'lucide-react'
// Mengambil gambar tk.jpg dari folder assets sesuai kodemu sebelumnya
import tkImg from "@/assets/tk.jpg"

import dok1 from "@/assets/dok1-tk.jpg"
import dok2 from "@/assets/dok2-tk.jpg"
import dok3 from "@/assets/dok3-tk.jpg"
import dok4 from "@/assets/dok4-tk.jpg"

export const Route = createFileRoute('/program-kerja_/mengajarTK')({
  component: DetailMengajarTK,
})

function DetailMengajarTK() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans pb-20 relative overflow-hidden">

      {/* Ornamen Background Halaman (Warna Oranye Lembut) */}
      <div className="absolute top-40 left-0 -z-10 w-[500px] h-[500px] bg-orange-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 pointer-events-none"></div>

      {/* 1. HERO BANNER */}
      <div className="w-full h-[350px] md:h-[450px] relative overflow-hidden group">
        <img
          src={tkImg}
          alt="Kegiatan Mengajar TK Desa Gelora"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Overlay gradasi agar teks/badge kontras */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-6 md:px-16 max-w-5xl mx-auto">
          <span className="w-max bg-white/90 backdrop-blur-sm text-orange-800 font-extrabold tracking-wider px-4 py-1.5 rounded-full text-xs uppercase shadow-lg mb-4 translate-y-2 opacity-90 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            Pendidikan Anak Usia Dini
          </span>
        </div>
      </div>

      {/* 2. KONTEN UTAMA */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 mt-10">

        {/* Judul Halaman */}
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-gray-900 via-orange-900 to-amber-500 bg-clip-text text-transparent mb-12 leading-tight pb-2">
          Mengajar TK: Membangun Karakter <br className="hidden md:block" /> dan Kreativitas Sejak Dini
        </h1>

        {/* Teks Artikel (Data dilebur ke dalam paragraf kedua) */}
        <div className="text-gray-600 leading-relaxed space-y-8 text-lg">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-orange-500 rounded-full inline-block"></span>
              Latar Belakang Kegiatan
            </h3>
            <p>
              Pendidikan Anak Usia Dini (PAUD/TK) merupakan masa keemasan (<em className="italic">golden age</em>) bagi pembentukan karakter, motorik, dan kemampuan kognitif anak. Kehadiran metode pembelajaran yang variatif sangat penting untuk menstimulasi perkembangan mereka di usia ini.
            </p>
            <p className="mt-4">
              Sebagai bentuk komitmen dalam menanamkan <strong className="text-orange-800">kreativitas & etika</strong> bagi <strong className="text-orange-800">anak usia dini</strong>, mahasiswa KKN PMD Unram hadir secara <strong className="text-orange-800">rutin mingguan</strong> mendampingi kegiatan di <strong className="text-orange-800">TK Desa Gelora</strong>. Melalui program ini, kami ingin membawa warna baru dan membantu tenaga pendidik lokal untuk menciptakan suasana belajar yang interaktif, menyenangkan, dan tidak membosankan.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-orange-500 rounded-full inline-block"></span>
              Metode & Materi Pembelajaran
            </h3>
            <p className="mb-5">
              Pendekatan yang kami gunakan adalah "Belajar Sambil Bermain". Beberapa aktivitas seru yang kami lakukan bersama anak-anak meliputi:
            </p>
            <ul className="space-y-4">
              {[
                {
                  title: 'Melatih Kepercayaan Diri',
                  desc: 'Menumbuhkan keberanian anak untuk berinteraksi, menjawab pertanyaan, dan tampil maju ke depan kelas melalui kegiatan bernyanyi bersama, ice breaking.'
                },
                { title: 'Bina Karakter & Etika', desc: 'Mengajarkan sopan santun dasar seperti cara bersalaman, mengucapkan tolong, maaf, dan terima kasih melalui cerita dongeng.' },
                { title: 'Pengenalan Lingkungan Dasar', desc: 'Menyelipkan nilai-nilai kebersihan secara sederhana, seperti membuang sampah pada tempatnya dan menyayangi tanaman.' },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-50 shadow-sm transition-colors hover:border-orange-200 group/list">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-sm transition-transform group-hover/list:scale-110">
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
            <span className="w-8 h-1 bg-orange-500 rounded-full inline-block"></span>
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
            className="group/back flex items-center gap-2 text-gray-500 font-semibold hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/back:-translate-x-1.5" />
            Kembali ke Daftar Program
          </Link>

          {/* Tombol Next Proker (Mengarah ke Mengajar SD) */}
          <Link
            to="/program-kerja/tongKomposter"
            className="group/next flex items-center gap-2 rounded-2xl bg-orange-50 px-7 py-4 text-sm font-bold text-orange-700 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-200"
          >
            Lihat Program Tong Komposter
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/next:translate-x-1.5" />
          </Link>
        </div>

      </div>
    </div>
  )
}