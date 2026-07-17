import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import heroImg from "@/assets/dpk.jpg";
import heroImg2 from "@/assets/sekdes.jpg";
import heroImg3 from "@/assets/posyandu.jpg";
import heroImg4 from "@/assets/penerimaan.jpg";

export const Route = createFileRoute("/beranda")({
  head: () => ({
    meta: [
      { title: "Beranda — Program KKN Desa Gelora" },
    ],
  }),
  component: Beranda,
});

function Beranda() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:py-16 flex flex-col gap-12 md:gap-12">

      {/* 1. JUDUL UTAMA */}
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl">
          Ubah Sampah Menjadi Peluang
        </h1>
        <p className="mt-3 text-base text-muted-foreground md:text-lg">
          Program KKN PMD Desa Gelora mengajak masyarakat mengolah sampah organik menjadi kompos bernilai guna
        </p>
      </div>

      {/* 2. GALERI KEGIATAN (FULL WIDTH) */}
      <div className="w-full flex flex-col">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000, 
            }),
          ]}
          className="w-full overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-border"
        >
          <CarouselContent>
            {/* Foto 1 */}
            <CarouselItem>
              {/* Rasio diubah: 4:3 untuk HP, 21:9 (panoramik) untuk Desktop */}
              <div className="relative aspect-[4/3] md:aspect-[21/9] w-full">
                <img
                  src={heroImg}
                  alt="Foto bersama DPK"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent px-5 pb-3 pt-8 text-white md:px-8 md:pb-5 md:pt-12">
                  {/* <p className="text-1xl font-bold md:text-2xl">Kerja Bakti Komposter</p> */}
                  <p className="mt-1 text-sm opacity-90 md:text-base">Foto bersama DPK</p>
                </div>
              </div>
            </CarouselItem>

            {/* Foto 2 - Placeholder */}
            <CarouselItem>
              <div className="relative aspect-[4/3] md:aspect-[21/9] w-full bg-blue-500">
                <div className="flex h-full w-full items-center justify-center font-semibold text-white">
                  <img
                  src={heroImg2}
                  alt="Kunjungan Hari Pertama"
                  className="h-full w-full object-cover"
                />
                </div>
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent px-6 pb-6 pt-16 text-white md:px-10 md:pb-10">
                  {/* <p className="text-2xl font-bold md:text-3xl">Kunjungan Hari Pertama</p> */}
                  <p className="mt-1 text-sm opacity-90 md:text-base">Kunjungan Hari Pertama</p>
                </div>
              </div>
            </CarouselItem>

            {/* Foto 3 - Placeholder */}
            <CarouselItem>
              <div className="relative aspect-[4/3] md:aspect-[21/9] w-full bg-green-500">
                <div className="flex h-full w-full items-center justify-center font-semibold text-white">
                  <img
                  src={heroImg3}
                  alt="Kegiatan Posyandu"
                  className="h-full w-full object-cover"
                />
                </div>
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent px-6 pb-6 pt-16 text-white md:px-10 md:pb-10">
                  {/* <p className="text-2xl font-bold md:text-3xl">Kegiatan Posyandu Mawar</p> */}
                  <p className="mt-1 text-sm opacity-90 md:text-base">Kegiatan Posyandu</p>
                </div>
              </div>
            </CarouselItem>

            {/* Foto 4 - Placeholder */}
            <CarouselItem>
              <div className="relative aspect-[4/3] md:aspect-[21/9] w-full bg-green-500">
                <div className="flex h-full w-full items-center justify-center font-semibold text-white">
                  <img
                  src={heroImg4}
                  alt="Kegiatan Kantor Desa"
                  className="h-full w-full object-cover"
                />
                </div>
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent px-6 pb-6 pt-16 text-white md:px-10 md:pb-10">
                  {/* <p className="text-2xl font-bold md:text-3xl">Piket Kantor Desa</p> */}
                  <p className="mt-1 text-sm opacity-90 md:text-base">Penerimaan di Kantor Desa</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      {/* 3. MENU PILIHAN (3 KOLOM HORIZONTAL DI DESKTOP) */}
      <div className="w-full flex flex-col">
        <h2 className="mb-6 text-center text-2xl font-bold text-foreground md:text-3xl">
          Menu Pilihan
        </h2>
        
        {/* Perubahan utama: md:grid-cols-3 akan menyejajarkan menu secara horizontal di layar besar */}
        <div className="grid w-full gap-4 md:grid-cols-3 md:gap-6">
          
          <Link
            to="/program-kerja"
            className="group flex flex-row items-center justify-between rounded-[2rem] bg-[#C1A88D]/30 p-6 transition-all hover:bg-[#C1A88D]/50 hover:shadow-md active:scale-95"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground">Program Kompos</h3>
              <p className="mt-1 text-sm text-muted-foreground">Cara mengolah sampah dapur</p>
            </div>
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-background shadow-sm transition group-hover:scale-110 group-hover:text-primary">
              <ArrowRight className="h-6 w-6" />
            </div>
          </Link>

          <Link
            to="/edukasi"
            className="group flex flex-row items-center justify-between rounded-[2rem] bg-[#C1A88D]/30 p-6 transition-all hover:bg-[#C1A88D]/50 hover:shadow-md active:scale-95"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground">Panduan </h3>
              <p className="mt-1 text-sm text-muted-foreground">Panduan pembuatan kompos </p>
            </div>
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-background shadow-sm transition group-hover:scale-110 group-hover:text-primary">
              <ArrowRight className="h-6 w-6" />
            </div>
          </Link>

          <Link
            to="/tentang-kami"
            className="group flex flex-row items-center justify-between rounded-[2rem] bg-[#C1A88D]/30 p-6 transition-all hover:bg-[#C1A88D]/50 hover:shadow-md active:scale-95"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground">Tentang Kami</h3>
              <p className="mt-1 text-sm text-muted-foreground">Profil mahasiswa KKN</p>
            </div>
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-background shadow-sm transition group-hover:scale-110 group-hover:text-primary">
              <ArrowRight className="h-6 w-6" />
            </div>
          </Link>

        </div>
      </div>

    </div>
  );
}