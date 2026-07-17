import { MapPin, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";

import logokkn from "@/assets/logo.jpg";
import unram from "@/assets/underam.jpg";

export function Footer() {
  return (
    <footer className="mt-20 w-full bg-[#1b4332] pt-12 pb-6 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3">
        
        {/* Kolom 1: Tentang Program, Logo & Institusi */}
        <div className="flex flex-col">
          
          <div className="mb-6 flex items-center gap-4">
            
            {/* 1. Spot Logo KKN (Sekarang bisa diklik menuju Home) */}
            <Link 
              to="/" 
              className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-sm ring-2 ring-white/20 transition hover:scale-105 hover:ring-white/50"
              title="Kembali ke Beranda"
            >
              <img 
                src={logokkn}
                alt="Logo KKN Gelora" 
                className="h-full w-full object-contain"
                onError={(e) => e.currentTarget.src = "https://via.placeholder.com/150/ffffff/1b4332?text=KKN"}
              />
            </Link>

            {/* 2. Spot Logo Universitas */}
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-sm ring-2 ring-white/20">
              <img 
                src={unram}
                alt="Logo Universitas" 
                className="h-full w-full object-contain"
                onError={(e) => e.currentTarget.src = "https://via.placeholder.com/150/ffffff/1b4332?text=UNRAM"}
              />
            </div>
            
          </div>

          <h3 className="mb-4 text-xl font-extrabold text-green-100">
            KKN PMD Desa Gelora
          </h3>
          <p className="text-sm leading-relaxed text-green-50/80">
            Kampanye Ekonomi Hijau. Program pengabdian masyarakat dari mahasiswa Universitas Mataram 
            berkolaborasi dengan warga untuk membangun ekosistem desa yang mandiri dan berkelanjutan.
          </p>
        </div>

        {/* Kolom 2: Lokasi & Kontak Posko */}
        <div className="flex flex-col">
          <h3 className="mb-4 text-lg font-bold text-green-100">Hubungi Kami</h3>
          <ul className="space-y-4 text-sm text-green-50/80">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
              {/* Teks Lokasi ini sekarang akan membuka Google Maps jika diklik */}
              <a 
                href="https://maps.app.goo.gl/5VXNcJKbzZNd1f626"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-green-300"
                title="Buka di Google Maps"
              >
                <strong>Posko KKN UNRAM 2026</strong><br />
                Kec. Sikur, Kab. Lombok Timur,<br />
                Nusa Tenggara Barat
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Dukungan & Sosial Media */}
        <div className="flex flex-col">
          <h3 className="mb-4 text-lg font-bold text-green-100">Didukung Oleh</h3>
          <div className="flex flex-col gap-2 text-sm font-semibold text-green-50/80">
            <p>Pemerintah Desa Gelora</p>
            <p>Universitas Mataram</p>
          </div>
          
          {/* Ikon Sosial Media Terpadu */}
          <div className="mt-6 flex gap-4">
            
            {/* Instagram */}
            <a href="https://www.instagram.com/kkn_desagelora2026?igsh=YzhrbWIzc3o4MTNm" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#E1306C] hover:text-white" title="Instagram">
              <Instagram className="h-5 w-5" />
            </a>

            {/* TikTok */}
            <a href="https://www.tiktok.com/@kkn.desa.gelora_p?is_from_webapp=1&sender_device=pc" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-black hover:text-white" title="TikTok">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>

            {/* WhatsApp (Sesuaikan nomor wa.me dengan nomor posko yang benar) */}
            <a href="https://wa.me/6281933039319" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#25D366] hover:text-white" title="WhatsApp">
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>
            
          </div>
        </div>

      </div>

      {/* Bagian Bawah: Copyright */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/20 px-5 pt-6 text-center md:text-left">
        <p className="text-xs text-green-100/60">
          © 2026 Tim KKN PMD Universitas Mataram — Desa Gelora. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
}