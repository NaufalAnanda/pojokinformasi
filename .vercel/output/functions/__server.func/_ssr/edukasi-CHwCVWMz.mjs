import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { b as QrCode, c as Info, T as Trash2, C as Clock, F as Funnel, R as Recycle, V as Video, d as Images, D as Download } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const grids = [{
  icon: Info,
  title: "Tentang Program KKN PMD",
  desc: "Latar belakang & visi program.",
  to: "/edukasi/tentang"
}, {
  icon: Trash2,
  title: "Jenis-Jenis Sampah",
  desc: "Organik, Anorganik, dan B3.",
  to: "/edukasi/jenis-sampah"
}, {
  icon: Clock,
  title: "Waktu Penguraian Sampah",
  desc: "Infografis durasi terurainya sampah.",
  to: "/edukasi/waktu-penguraian"
}, {
  icon: Funnel,
  title: "Cara Pemilahan Sampah",
  desc: "Panduan praktis pemilahan di rumah.",
  to: "/edukasi/cara-pemilahan"
}, {
  icon: Recycle,
  title: "Cara Menggunakan Tong Komposter",
  desc: "Langkah pengoperasian komposter.",
  to: "/edukasi/panduan-komposter"
}, {
  icon: Video,
  title: "Video Edukasi",
  desc: "Tutorial visual untuk warga.",
  to: "/edukasi/video"
  // <-- Ini akan membuka file edukasi.video.tsx
}, {
  icon: Images,
  title: "Dokumentasi Kegiatan",
  desc: "Galeri praktik lapangan.",
  to: "/beranda"
  // Sementara dikembalikan ke beranda
}, {
  icon: Download,
  title: "Unduh Poster Edukasi",
  desc: "Materi siap cetak untuk dusun.",
  to: "/edukasi/poster"
}];
function Edukasi() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-12 md:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-leaf-soft px-4 py-1.5 text-xs font-semibold text-primary", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(QrCode, { className: "h-3.5 w-3.5" }),
        " Scan QR di Tong Komposter"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 text-3xl font-extrabold text-foreground sm:text-4xl", children: "Pusat Edukasi Ekonomi Hijau." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Delapan modul edukasi — pilih topik, langsung baca." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4", children: grids.map((g, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: g.to, className: "group flex flex-col rounded-3xl border border-border bg-card p-5 text-left transition hover:-translate-y-1 hover:border-primary hover:shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground transition group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(g.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-bold text-muted-foreground", children: [
          "0",
          i + 1
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-base font-bold leading-snug text-foreground", children: g.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: g.desc })
    ] }, g.title)) })
  ] });
}
export {
  Edukasi as component
};
