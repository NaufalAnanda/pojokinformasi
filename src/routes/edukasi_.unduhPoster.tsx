import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, Download, FileText, Printer } from 'lucide-react'

export const Route = createFileRoute('/edukasi_/unduhPoster')({
  component: DetailUnduhPoster,
})

function DetailUnduhPoster() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans pb-20 relative overflow-hidden flex flex-col">
      
      {/* Ornamen Background */}
      <div className="absolute top-1/2 left-1/2 -z-10 w-[800px] h-[800px] bg-teal-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-6 md:px-0 pt-24 pb-12 w-full flex-grow flex flex-col justify-center">
        
        {/* Judul */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 mb-6">
            Pusat Unduhan
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Poster Edukasi <br /> Ekonomi Hijau Gelora
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Gunakan poster edukasi ini untuk ditempel di rumah, fasilitas desa, atau dibagikan melalui grup WhatsApp sebagai pengingat bersama.
          </p>
        </div>

        {/* Card Download */}
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-10">
          
          {/* Preview Poster */}
          <div className="w-full md:w-1/2 aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-inner relative group">
            {/* TODO: Ganti dengan gambar preview poster aslimu */}
            <img src="/images/preview-poster.jpg" alt="Preview Poster Ekonomi Hijau" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
            {/* Overlay Icon saat di-hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
              <Printer className="text-white w-12 h-12" />
            </div>
          </div>

          {/* Info File & Tombol */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4 text-teal-600">
              <FileText className="w-6 h-6" />
              <span className="font-bold tracking-widest uppercase text-sm">PDF & JPG Format</span>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Panduan Lengkap Ekonomi Hijau
            </h3>
            
            <ul className="text-gray-600 mb-8 space-y-2 text-lg">
              <li>✓ Resolusi Tinggi (Siap Cetak A3/A4)</li>
              <li>✓ Ukuran File: 4.5 MB</li>
              <li>✓ Desain Ramah Pembaca</li>
            </ul>

            {/* Tombol Download (Menggunakan tag <a> agar bisa mengunduh file) */}
            <a 
              href="/files/Poster-Ekonomi-Hijau-Desa-Gelora.pdf" 
              download
              className="flex items-center justify-center gap-3 bg-teal-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-200 transition-all active:scale-95 w-full"
            >
              <Download className="w-6 h-6" />
              Unduh Poster Sekarang
            </a>
            <p className="text-center text-sm text-gray-400 mt-4">Gratis untuk keperluan non-komersial.</p>
          </div>

        </div>

        {/* NAVIGASI BAWAH */}
        <div className="mt-16 flex justify-center border-t border-gray-200 pt-8">
          <Link 
            to="/pusat-edukasi" 
            className="group/back flex items-center gap-2 text-gray-500 font-semibold hover:text-teal-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/back:-translate-x-1.5" />
            Kembali ke Pusat Edukasi
          </Link>
        </div>

      </div>
    </div>
  )
}