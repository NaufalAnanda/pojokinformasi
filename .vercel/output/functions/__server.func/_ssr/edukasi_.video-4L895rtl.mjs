import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { e as ArrowLeft, h as CirclePlay, Y as Youtube } from "../_libs/lucide-react.mjs";
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
const daftarVideo = [{
  id: 1,
  judul: "Cara Memilah Sampah Dapur",
  deskripsi: "Panduan memisahkan sampah organik dan anorganik dari rumah.",
  thumbnail: "https://img.youtube.com/vi/0qfGNQ499JA/hqdefault.jpg",
  urlYoutube: "https://youtu.be/0qfGNQ499JA?si=dR1K6bC5HzpJnClo"
}, {
  id: 2,
  judul: "Tutorial Menggunakan Tong Komposter",
  deskripsi: "Langkah-langkah mencampur daun kering dan sisa sayur.",
  thumbnail: "https://img.youtube.com/vi/6RRojjnLJko/hqdefault.jpg",
  urlYoutube: "https://youtu.be/6RRojjnLJko?si=1Zgpy3wqe0B5DlYE"
}, {
  id: 3,
  judul: "Manfaat Pupuk Kompos untuk Tanaman",
  deskripsi: "Melihat hasil nyata penggunaan kompos pada tanaman pekarangan.",
  thumbnail: "https://img.youtube.com/vi/_acH-EorKIU/hqdefault.jpg",
  urlYoutube: "https://youtu.be/_acH-EorKIU?si=zm7CPzrUU6PCU2ej"
}];
function VideoEdukasi() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-10 md:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/edukasi", className: "mb-8 inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition hover:text-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5" }),
      " Kembali ke Pusat Edukasi"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-extrabold text-foreground md:text-4xl", children: "Galeri Video Edukasi" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-lg text-muted-foreground", children: "Pilih dan tonton video panduan program ekonomi hijau Desa Gelora." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8", children: daftarVideo.map((video) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex flex-col overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-all hover:shadow-xl ring-1 ring-border/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video w-full overflow-hidden bg-gray-200", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: video.thumbnail,
            alt: `Thumbnail ${video.judul}`,
            className: "h-full w-full object-cover transition duration-500 group-hover:scale-105",
            onError: (e) => {
              e.currentTarget.src = "https://via.placeholder.com/640x360.png?text=Video+Edukasi";
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "h-16 w-16 text-white opacity-80 shadow-sm transition group-hover:scale-110 group-hover:opacity-100" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold leading-snug text-foreground", children: video.judul }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 flex-1 text-sm text-muted-foreground", children: video.deskripsi }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: video.urlYoutube, target: "_blank", rel: "noopener noreferrer", className: "mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-700 active:scale-95", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "h-5 w-5" }),
          " Tonton di YouTube"
        ] })
      ] })
    ] }, video.id)) })
  ] });
}
export {
  VideoEdukasi as component
};
