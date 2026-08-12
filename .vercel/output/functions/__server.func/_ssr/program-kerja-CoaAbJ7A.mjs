import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as sikompImg2 } from "./papan-C_Z05zJV.mjs";
import { t as tebaImg } from "./teba--UwF8d53.mjs";
import { s as sdImg } from "./dok3-sd-BJWnt2no.mjs";
import { t as tkImg } from "./tk-DirRDEWV.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const program1 = "/assets/program-1-beKwJJIN.jpg";
const cards = [{
  image: program1,
  tag: "1",
  title: "Tong Komposter Sederhana",
  desc: "Mengelola sampah organik menjadi kompos secara mudah dan ramah lingkungan.",
  cta: "Detail Program",
  path: "/program-kerja/tongKomposter"
}, {
  image: sikompImg2,
  tag: "2",
  title: "SI-Komp (Sistem Informasi)",
  desc: "Digitalisasi panduan komposter via web-app yang diakses melalui stiker QR di pojok informasi.",
  cta: "Detail Program",
  path: "/program-kerja/siKomp"
}, {
  image: tebaImg,
  tag: "3",
  title: "Lubang Teba",
  desc: "Kembalikan sisa organik ke alam. Solusi praktis tanpa biaya untuk mencegah genangan air dan menyuburkan tanah pekarangan.",
  cta: "Detail Program",
  path: "/program-kerja/lubangTeba"
}, {
  image: sdImg,
  tag: "4",
  title: "Mengajar Anak SD",
  desc: "Mengajarkan mata pelajaran bahasa Inggris dan matematika secara interaktif.",
  cta: "Detail Program",
  path: "/program-kerja/mengajarSD"
}, {
  image: tkImg,
  tag: "5",
  title: "Mengajar TK",
  desc: "Mengajar di taman kanak-kanak untuk membangun pondasi pendidikan anak usia dini.",
  cta: "Detail Program",
  path: "/program-kerja/mengajarTK"
}];
function ProgramKerja() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-12 md:py-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-green-50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-green-700 shadow-sm", children: "Program Kerja" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl font-extrabold sm:text-5xl lg:text-6xl bg-gradient-to-br from-green-900 via-green-700 to-emerald-500 bg-clip-text text-transparent pb-2", children: [
        "Inovasi KKN PMD ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        " Desa Gelora 2026."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-gray-600 sm:text-lg leading-relaxed max-w-2xl", children: "Setiap pilar saling melengkapi: infrastruktur fisik, edukasi digital, dan sirkulasi ekonomi yang kembali ke tangan warga." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: cards.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "group flex flex-col overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-900/10",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-gray-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.image, alt: c.title, loading: "lazy", width: 1024, height: 768, className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-5 top-5 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-widest text-green-700 shadow-sm transition-transform duration-300 group-hover:-translate-y-1", children: c.tag })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6 sm:p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-700", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-gray-500 line-clamp-3", children: c.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: c.path, className: "group/btn relative flex w-full items-center justify-center gap-2 rounded-2xl bg-green-50 px-5 py-3.5 text-sm font-semibold text-green-700 transition-all duration-300 hover:bg-green-600 hover:text-white hover:shadow-lg hover:shadow-green-200", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: c.cta }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" })
            ] }) })
          ] })
        ]
      },
      c.title
    )) })
  ] });
}
export {
  ProgramKerja as component
};
