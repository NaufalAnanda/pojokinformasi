import { createFileRoute } from "@tanstack/react-router";
import { Quote, MapPin, Users } from "lucide-react";
import { MapDesa } from "@/components/MapDesa";
import heroImgKetua from "@/assets/ketua.jpg";
import heroImgSekre from "@/assets/nurul.jpg";
import heroImgBendahara from "@/assets/sisna.jpg";
import heroImgHumas from "@/assets/ecak.jpg";
import heroImgAcara1 from "@/assets/kayla.jpg";
import heroImgAcara2 from "@/assets/aris.jpg";
import heroImgPDD1 from "@/assets/wilda.jpg";
import heroImgPDD2 from "@/assets/leli.jpg";
import heroImgPerkap1 from "@/assets/ahsan.jpg";
import heroImgPerkap2 from "@/assets/naufall.jpg";
import heroImgDpk from "@/assets/budpk.jpg";

export const Route = createFileRoute("/tentang-kami")({
  head: () => ({
    meta: [
      { title: "Tentang Kami — KKN PMD Gelora" },
      {
        name: "description",
        content:
          "Profil kelompok KKN PMD Desa Gelora, sambutan Kepala Desa & DPL, dan profil 7 dusun.",
      },
    ],
  }),
  component: TentangKami,
});

const pengurus = [
  { name: "Dr. dr. Metta Octora, M.Kes", role: "DPK", photo: heroImgDpk },
  { name: "Rizky Agung Kurniawan", role: "Ketua Kelompok", photo: heroImgKetua },
  { name: "Nurul Hidayah", role: "Sekretaris", photo: heroImgSekre },
];

const divisi1 = [
  { name: "Sisna Fatmasari", role: "Bendahara", photo: heroImgBendahara },
  { name: "I Desak Kadek Dwi Sastrariani", role: "Divisi Humas", photo: heroImgHumas },
  { name: "Kayla Aisha Nugroho", role: "Divisi Acara", photo: heroImgAcara1 },
  { name: "Muhammada Rizqy Sya'bany", role: "Divisi Acara", photo: heroImgAcara2 },
];

const divisi2 = [
  { name: "Wilda Ayu Khairi Jumaini", role: "Divisi PDD", photo: heroImgPDD1 },
  { name: "Andi Deffi Nadiya Izzatillaeli", role: "Divisi PDD", photo: heroImgPDD2 },
  { name: "Muh. Ahsanur Rido", role: "Divisi Perlengkapan", photo: heroImgPerkap1 },
  { name: "Naufal Pramudya Ananda", role: "Divisi Perlengkapan", photo: heroImgPerkap2 },
];

const dusun = [
  "Dusun Serengat",
  "Dusun Rungkang",
  "Dusun Rungkang Barat",
  "Dusun Gerami",
  "Dusun Gerami Timur",
  "Dusun Dasan Tinggi",
  "Dusun Dasan Tinggi Utara",
];

function TentangKami() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
      <header className="max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-leaf-soft px-4 py-1.5 text-xs font-semibold text-primary">
          Tentang Kami
        </span>
        <h1 className="mt-4 text-4xl font-extrabold text-foreground sm:text-5xl">
          Kelompok KKN PMD Desa Gelora.
        </h1>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Mahasiswa pengabdian masyarakat yang berkolaborasi dengan warga 7 dusun untuk membangun
          ekosistem ekonomi hijau berkelanjutan.
        </p>
      </header>

      <section className="mt-12">
        <div className="mb-6 flex items-center gap-3">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Profil Kelompok</h2>
        </div>

        {/* Baris Pengurus */}
        <div className="mx-auto mb-6 grid max-w-4xl gap-4 md:grid-cols-3">
          {pengurus.map((m) => (
            <div key={m.role} className="rounded-3xl border border-border bg-card p-5 text-center transition-all hover:shadow-md">
              {/* PERUBAHAN: Blok Avatar dengan logika foto/inisial */}
              <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-leaf-soft text-2xl font-extrabold text-primary shadow-sm ring-2 ring-primary/20">
                {m.photo ? (
                  <img src={m.photo} alt={`Foto ${m.name}`} className="h-full w-full object-cover" />
                ) : (
                  <span>
                    {m.name !== "-"
                      ? m.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")
                      : "-"}
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-base font-bold text-foreground">{m.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>

        {/* Baris Divisi */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {divisi1.map((m) => (
            <div key={m.role} className="rounded-3xl border border-border bg-card p-5 text-center transition-all hover:shadow-md">
              {/* PERUBAHAN: Blok Avatar dengan logika foto/inisial */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-leaf-soft text-xl font-extrabold text-primary shadow-sm ring-2 ring-primary/20">
                {m.photo ? (
                  <img src={m.photo} alt={`Foto ${m.name}`} className="h-full w-full object-cover" />
                ) : (
                  <span>
                    {m.name !== "-"
                      ? m.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")
                      : "-"}
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-sm font-bold text-foreground">{m.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>

        {/* Baris Divisi */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {divisi2.map((m) => (
            <div key={m.role} className="rounded-3xl border border-border bg-card p-5 text-center transition-all hover:shadow-md">
              {/* PERUBAHAN: Blok Avatar dengan logika foto/inisial */}
              <div className="mx-auto flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-leaf-soft text-xl font-extrabold text-primary shadow-sm ring-2 ring-primary/20">
                {m.photo ? (
                  <img src={m.photo} alt={`Foto ${m.name}`} className="h-full w-full object-cover" />
                ) : (
                  <span>
                    {m.name !== "-"
                      ? m.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")
                      : "-"}
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-sm font-bold text-foreground">{m.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-2">
        {[
          { from: "Kepala Desa Gelora", role: "Pemerintah Desa" },
          { from: "Dosen Pembimbing Lapangan", role: "Universitas Mataram" },
        ].map((s) => (
          <article key={s.from} className="rounded-3xl border border-border bg-card p-7">
            <Quote className="h-8 w-8 text-secondary" />
            <p className="mt-4 text-base leading-relaxed text-foreground/85">
              "Program Ekonomi Hijau ini menjadi langkah nyata kolaborasi mahasiswa dan warga Gelora
              — bukan hanya mengurangi sampah, tetapi menumbuhkan kemandirian ekonomi dari halaman
              rumah kita sendiri."
            </p>
            <div className="mt-5 border-t border-border pt-4">
              <p className="font-bold text-foreground">{s.from}</p>
              <p className="text-sm text-muted-foreground">{s.role}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="mt-16">
        <div className="mb-6 flex items-center gap-3">
          <MapPin className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Profil Desa Gelora</h2>
        </div>

        {/* 1. Bagian Atas: Teks & Daftar Dusun */}
        <div className="rounded-3xl bg-card p-7 ring-1 ring-border">
          <p className="leading-relaxed text-foreground/85">
            Desa Gelora berlokasi di Kecamatan Sikur, Kabupaten Lombok Timur, Nusa Tenggara Barat.
            Selain mengandalkan sektor pertanian, roda ekonomi masyarakat juga digerakkan oleh usaha kreatif lokal, salah satunya adalah produksi batu bata. Secara administratif, desa ini terdiri dari 7 dusun yaitu:
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {dusun.map((d) => (
              <div
                key={d}
                className="rounded-2xl bg-leaf-soft/70 px-4 py-3 text-sm font-semibold text-primary"
              >
                {d}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Bagian Bawah: Peta Full Width Menggunakan React-Leaflet */}
        {/* Tambahkan properti z-0 agar peta tidak menutupi navbar saat di-scroll */}
        <div className="mt-6 relative h-[450px] w-full overflow-hidden rounded-3xl bg-muted ring-1 ring-border shadow-sm z-0">
          <MapDesa />
        </div>

      </section>
    </div>
  );
}