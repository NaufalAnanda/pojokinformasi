import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { m as Printer, F as FileText, D as Download, d as ArrowLeft } from "../_libs/lucide-react.mjs";
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
function DetailUnduhPoster() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#FDFBF7] font-sans pb-20 relative overflow-hidden flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -z-10 w-[800px] h-[800px] bg-teal-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 md:px-0 pt-24 pb-12 w-full flex-grow flex flex-col justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-800 mb-6", children: "Pusat Unduhan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight", children: [
          "Poster Edukasi ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " Ekonomi Hijau Gelora"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto", children: "Gunakan poster edukasi ini untuk ditempel di rumah, fasilitas desa, atau dibagikan melalui grup WhatsApp sebagai pengingat bersama." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col md:flex-row items-center gap-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-1/2 aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-inner relative group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/preview-poster.jpg", alt: "Preview Poster Ekonomi Hijau", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { className: "text-white w-12 h-12" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-1/2 flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4 text-teal-600", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-6 h-6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold tracking-widest uppercase text-sm", children: "PDF & JPG Format" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Panduan Lengkap Ekonomi Hijau" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-gray-600 mb-8 space-y-2 text-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Resolusi Tinggi (Siap Cetak A3/A4)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Ukuran File: 4.5 MB" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "✓ Desain Ramah Pembaca" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/files/Poster-Ekonomi-Hijau-Desa-Gelora.pdf", download: true, className: "flex items-center justify-center gap-3 bg-teal-600 text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-200 transition-all active:scale-95 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-6 h-6" }),
            "Unduh Poster Sekarang"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-gray-400 mt-4", children: "Gratis untuk keperluan non-komersial." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 flex justify-center border-t border-gray-200 pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/pusat-edukasi", className: "group/back flex items-center gap-2 text-gray-500 font-semibold hover:text-teal-700 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5 transition-transform duration-300 group-hover/back:-translate-x-1.5" }),
        "Kembali ke Pusat Edukasi"
      ] }) })
    ] })
  ] });
}
export {
  DetailUnduhPoster as component
};
