import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { L as Leaf, A as ArrowRight, R as Recycle, B as Boxes, S as Sprout, e as BookOpen, f as Calendar } from "../_libs/lucide-react.mjs";
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
const heroImg = "/assets/hero-komposter-CgPsnMeW.jpg";
const metrics = [{
  label: "Volume Sampah Terolah",
  value: "1.248",
  unit: "Kg",
  icon: Recycle
}, {
  label: "Tong Komposter Aktif",
  value: "24",
  unit: "Unit",
  icon: Boxes
}, {
  label: "Pupuk Kompos Dihasilkan",
  value: "312",
  unit: "Kg",
  icon: Sprout
}];
const shortcuts = [{
  to: "/program-kerja",
  title: "Program Kerja",
  desc: "Tiga pilar utama: infrastruktur komposter, SI-Komp, dan ekonomi sirkular.",
  icon: Boxes
}, {
  to: "/edukasi",
  title: "Pusat Edukasi",
  desc: "8 modul edukasi pemilahan sampah dan panduan komposter — akses 24 jam.",
  icon: BookOpen
}, {
  to: "/tentang-kami",
  title: "Tentang Kami",
  desc: "Profil kelompok KKN PMD, sambutan, dan profil 7 dusun Desa Gelora.",
  icon: Calendar
}];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-5 pt-10 pb-14 md:grid-cols-2 md:items-center md:pt-16 md:pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-leaf-soft px-4 py-1.5 text-xs font-semibold text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-3.5 w-3.5" }),
          " Kampanye Ekonomi Hijau"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl font-extrabold leading-tight text-foreground sm:text-5xl md:text-6xl", children: [
          "Ubah Sampah, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Menjadi Peluang" }),
          " Bagi Desa."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base text-muted-foreground sm:text-lg", children: "Program KKN PMD Desa Gelora mengajak masyarakat mengolah sampah organik menjadi kompos bernilai guna, mendukung lingkungan yang lebih bersih sekaligus meningkatkan ekonomi desa secara berkelanjutan." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/program-kerja", className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:opacity-90", children: [
            "Lihat Program Kerja ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/edukasi", className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-leaf-soft", children: "Pusat Edukasi" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-leaf-soft to-accent/40 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Warga Desa Gelora mengelola komposter komunal", width: 1536, height: 1024, className: "aspect-[4/3] w-full rounded-[2rem] object-cover shadow-xl ring-1 ring-border" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card p-6 shadow-sm ring-1 ring-border sm:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-foreground sm:text-xl", children: "Dampak Program (Live)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 animate-pulse rounded-full bg-primary" }),
          " diperbarui mingguan"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-3", children: metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-leaf-soft/60 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(m.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground/80", children: m.label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-baseline gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-extrabold text-foreground", children: m.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-muted-foreground", children: m.unit })
        ] })
      ] }, m.label)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-5 py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground sm:text-3xl", children: "Akses Cepat" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Jelajahi tiga area utama platform kami." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: shortcuts.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.to, className: "group rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary hover:shadow-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-secondary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-xl font-bold text-foreground", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary", children: [
          "Buka halaman ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-1" })
        ] })
      ] }, s.to)) })
    ] })
  ] });
}
export {
  Index as component
};
