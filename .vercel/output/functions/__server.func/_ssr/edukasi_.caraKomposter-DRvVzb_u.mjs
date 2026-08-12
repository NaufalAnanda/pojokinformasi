import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as CirclePlay, q as Scissors, T as Trash2, r as Droplet, C as Clock, d as ArrowLeft, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
function DetailCaraKomposter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#FDFBF7] font-sans pb-20 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 left-0 -z-10 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-60 -translate-x-1/3 -translate-y-1/4 pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-6 md:px-0 pt-24 pb-12 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-6", children: "Modul Edukasi 05" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight", children: [
        "Langkah Mudah ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
        " Menggunakan Tong Komposter"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-600 leading-relaxed", children: "Ubah sisa makanan dari dapur Anda menjadi pupuk organik cair dan padat yang menyuburkan tanaman. Ikuti panduan praktis berikut ini." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-6 md:px-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 bg-gray-900 rounded-3xl overflow-hidden shadow-xl aspect-video relative group flex items-center justify-center border-4 border-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-emerald-900/40 mix-blend-multiply" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/thumbnail-video.jpg", alt: "Thumbnail Video", className: "w-full h-full object-cover opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute z-10 flex flex-col items-center cursor-pointer transition-transform group-hover:scale-110", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "w-20 h-20 text-white opacity-90 drop-shadow-lg mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white font-bold tracking-wider drop-shadow-md", children: "TONTON TUTORIAL" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: [{
        step: "01",
        icon: Scissors,
        title: "Cacah Sampah Organik",
        desc: "Semakin kecil ukurannya, semakin cepat proses penguraiannya. Potong-potong sisa sayuran, buah, atau sisa makanan menjadi ukuran kecil (sekitar 2-3 cm) sebelum dimasukkan ke dalam tong."
      }, {
        step: "02",
        icon: Trash2,
        title: "Masukkan ke Tong Komposter",
        desc: "Buka tutup atas komposter, lalu masukkan sampah organik yang sudah dicacah. Pastikan hanya memasukkan sampah organik (jangan ada plastik, karet, atau beling yang ikut masuk)."
      }, {
        step: "03",
        icon: Droplet,
        title: "Semprotkan Cairan Bioaktivator (EM4)",
        desc: "Untuk menghilangkan bau dan mempercepat pembusukan, semprotkan atau tuangkan sedikit cairan EM4 (Effective Microorganisms) yang sudah dicampur air gula secukupnya ke atas tumpukan sampah."
      }, {
        step: "04",
        icon: Clock,
        title: "Tutup Rapat & Panen",
        desc: "Tutup kembali komposter dengan rapat agar proses anaerob berjalan maksimal. Pupuk cair (POC) bisa dipanen melalui keran bawah setelah 1-2 minggu, sementara kompos padat di bagian dalam siap panen setelah 1 bulan."
      }].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start transition-all hover:shadow-md hover:border-emerald-200 group/step", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center transition-colors group-hover/step:bg-emerald-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-8 h-8" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-bold text-emerald-500 uppercase tracking-widest mb-2 block", children: [
            "Langkah ",
            item.step
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-3", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 leading-relaxed text-lg", children: item.desc })
        ] })
      ] }, idx)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-8 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/pusat-edukasi", className: "group/back flex items-center gap-2 text-gray-500 font-semibold hover:text-emerald-700 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-5 w-5 transition-transform duration-300 group-hover/back:-translate-x-1.5" }),
          "Kembali ke Pusat Edukasi"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/edukasi/unduhPoster", className: "group/next flex items-center gap-2 rounded-2xl bg-emerald-50 px-7 py-4 text-sm font-bold text-emerald-700 transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:shadow-lg hover:shadow-emerald-200", children: [
          "Buka Halaman Unduh Poster",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5 transition-transform duration-300 group-hover/next:translate-x-1.5" })
        ] })
      ] })
    ] })
  ] });
}
export {
  DetailCaraKomposter as component
};
