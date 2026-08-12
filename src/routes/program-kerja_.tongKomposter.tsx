import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import komposterImg from "@/assets/sosialisasi.jpg"

import dok1 from "@/assets/dok1-kompos.jpg"
import dok2 from "@/assets/dok2-kompos.jpg"
import dok3 from "@/assets/dok3-kompos.jpg"
import dok4 from "@/assets/dok4-kompos.jpg"

export const Route = createFileRoute('/program-kerja_/tongKomposter')({
  component: DetailTongKomposter,
})

function DetailTongKomposter() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans pb-20 relative overflow-hidden">
      
      {/* Ornamen Background Halaman */}
      <div className="absolute top-40 left-0 -z-10 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 pointer-events-none"></div>

      {/* 1. HERO BANNER */}
      <div className="w-full h-[350px] md:h-[450px] relative overflow-hidden group">
        {/* TODO: Ganti src dengan foto utama kegiatan */}
        <img 
          src={komposterImg}
          alt="Sosialisasi Tong Komposter" 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        {/* Overlay gradasi agar teks/badge kontras */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end pb-10 px-6 md:px-16 max-w-5xl mx-auto">
          <span className="w-max bg-white/90 backdrop-blur-sm text-green-800 font-extrabold tracking-wider px-4 py-1.5 rounded-full text-xs uppercase shadow-lg mb-4 translate-y-2 opacity-90 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            Program Kerja Utama
          </span>
        </div>
      </div>

      {/* 2. KONTEN UTAMA */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 mt-10">
        
        {/* Judul Halaman */}
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-br from-gray-900 via-green-900 to-emerald-600 bg-clip-text text-transparent mb-10 leading-tight pb-2">
          Tong Komposter Sederhana: <br className="hidden md:block" /> Solusi Praktis Kelola Sampah Dapur
        </h1>
        
        {/* Meta Info (Kotak-kotak Informasi) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Lokasi', value: 'Desa Gelora' },
            { label: 'Waktu', value: '24 Juli 2026' },
            { label: 'Sasaran', value: 'Ibu-ibu PKK' },
            { label: 'Fokus', value: 'Ekonomi Hijau' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-green-100">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">{stat.label}</p>
              <p className="text-gray-900 font-bold text-lg">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Teks Artikel */}
        <div className="text-gray-600 leading-relaxed space-y-8 text-lg">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-green-500 rounded-full inline-block"></span>
              Latar Belakang & Tujuan
            </h3>
            <p>
              Permasalahan limbah rumah tangga, khususnya sisa bahan makanan dari dapur, sering kali menjadi tantangan di lingkungan pedesaan. Jika tidak dikelola, sampah organik ini akan membusuk di tempat pembuangan terbuka, menimbulkan bau tidak sedap, dan berpotensi menjadi sumber penyakit.
            </p>
            <p className="mt-4">
              Program pengadaan dan pelatihan penggunaan <strong className="text-green-800">Tong Komposter Sederhana</strong> ini diinisiasi oleh mahasiswa KKN PMD Unram sebagai langkah nyata mewujudkan konsep Ekonomi Hijau di Desa Gelora. Tujuannya adalah mengubah sudut pandang masyarakat agar melihat sampah dapur bukan lagi sebagai kotoran, melainkan sebagai aset yang bisa disulap menjadi pupuk organik penyubur tanaman.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-8 h-1 bg-green-500 rounded-full inline-block"></span>
              Deskripsi Pelaksanaan Kegiatan
            </h3>
            <p className="mb-5">
              Kegiatan ini tidak hanya sekadar membagikan alat, tetapi juga difokuskan pada edukasi dan praktik langsung (<em className="italic text-gray-500">hands-on experience</em>). Beberapa tahapan kegiatan yang dilakukan bersama warga meliputi:
            </p>
            <ul className="space-y-4">
              {[
                { title: 'Edukasi Pemilahan', desc: 'Memberikan pemahaman kepada Ibu-ibu PKK mengenai perbedaan mendasar antara sampah organik (sisa sayur, buah, makanan) dengan sampah anorganik.' },
                { title: 'Praktik Perakitan', desc: 'Memperagakan cara menyusun komponen tong komposter agar memiliki sirkulasi udara yang baik.' },
                { title: 'Simulasi Penggunaan', desc: 'Mahasiswa mempraktikkan langsung cara mencacah sisa sayuran, memasukkannya ke dalam tong, dan mengatur tingkat kelembapan.' },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-gray-50 shadow-sm transition-colors hover:border-green-100">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm">
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

          {/* Callout Info SI-Komp dengan Desain Modern */}
          <div className="relative overflow-hidden bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-emerald-500 p-8 rounded-r-2xl my-10 shadow-sm">
            {/* Ornamen watermark di dalam kotak */}
            <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-green-200 rounded-full blur-2xl opacity-50"></div>
            
            <h4 className="text-xl font-extrabold text-green-900 mb-2 relative z-10">Terintegrasi dengan SI-Komp</h4>
            <p className="text-green-800 m-0 relative z-10 leading-relaxed">
              Salah satu keunggulan dari program komposter ini adalah integrasinya dengan teknologi digital. Pada setiap badan tong komposter, telah disematkan stiker <em className="italic font-medium">QR Code</em>. Warga cukup memindai kode tersebut menggunakan kamera <em className="italic font-medium">smartphone</em> untuk langsung terhubung ke web <strong className="text-green-950">SI-Komp</strong> guna melihat panduan lengkap dan video tutorial edukasi.
            </p>
          </div>
        </div>

        {/* 3. GALERI DOKUMENTASI */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <span className="w-8 h-1 bg-green-500 rounded-full inline-block"></span>
            Galeri Dokumentasi
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Array gambar galeri */}
            {[
              { src: dok1},
              { src: dok2},
              { src: dok3},
              { src: dok4},
            ].map((img, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl shadow-sm bg-gray-200 aspect-video">
                {/* TODO: Sesuaikan path src gambar */}
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

        {/* 4. NAVIGASI BAWAH (Smart CTA) */}
        <div className="mt-20 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-8 gap-6">

          <Link 
                      to="/program-kerja" 
                      className="group/back flex items-center gap-2 text-gray-500 font-semibold hover:text-blue-600 transition-colors"
                    >
                      <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/back:-translate-x-1.5" />
                      Kembali ke Daftar Program
                    </Link>

          {/* Tombol Back */}
          <Link 
            to="/program-kerja/siKomp" 
            className="group/next flex items-center gap-2 rounded-2xl bg-blue-50 px-7 py-4 text-sm font-bold text-blue-700 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-200"
          >
            Lihat Program Sistem Informasi
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/next:translate-x-1.5" />
          </Link>
        </div>

      </div>
    </div>
  )
}