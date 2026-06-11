import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { U as Users, Q as Quote, P as Phone, I as Instagram, a as MapPin } from "../_libs/lucide-react.mjs";
const pengurus = [{
  name: "-",
  role: "Ketua Kelompok"
}, {
  name: "-",
  role: "Sekretaris"
}, {
  name: "-",
  role: "Bendahara"
}];
const divisi = [{
  name: "-",
  role: "Divisi Humas"
}, {
  name: "-",
  role: "Divisi Acara"
}, {
  name: "-",
  role: "Divisi Perlengkapan"
}, {
  name: "-",
  role: "Divisi PDD"
}];
const dusun = ["Dusun Rungkang", "Dusun Tunas Harapan", "Dusun Bumi Hijau", "Dusun Cipta Karya", "Dusun Sumber Rejeki", "Dusun Wana Asri", "Dusun Tirta Mulya"];
function TentangKami() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-12 md:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full bg-leaf-soft px-4 py-1.5 text-xs font-semibold text-primary", children: "Tentang Kami" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-4xl font-extrabold text-foreground sm:text-5xl", children: "Kelompok KKN PMD Desa Gelora." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground sm:text-lg", children: "Mahasiswa pengabdian masyarakat yang berkolaborasi dengan warga 7 dusun untuk membangun ekosistem ekonomi hijau berkelanjutan." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Profil Kelompok" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 grid max-w-4xl gap-4 md:grid-cols-3", children: pengurus.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-5 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-20 w-20 place-items-center rounded-full bg-leaf-soft text-2xl font-extrabold text-primary", children: m.name.split(" ").map((n) => n[0]).slice(0, 2).join("") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-sm font-bold text-foreground", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: m.role })
      ] }, m.role)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: divisi.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-5 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-20 w-20 place-items-center rounded-full bg-leaf-soft text-2xl font-extrabold text-primary", children: m.name.split(" ").map((n) => n[0]).slice(0, 2).join("") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-sm font-bold text-foreground", children: m.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: m.role })
      ] }, m.role)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-16 grid gap-5 md:grid-cols-2", children: [{
      from: "Kepala Desa Gelora",
      role: "Pemerintah Desa"
    }, {
      from: "Dosen Pembimbing Lapangan",
      role: "Universitas Mataram"
    }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-3xl border border-border bg-card p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-8 w-8 text-secondary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-foreground/85", children: '"Program Ekonomi Hijau ini menjadi langkah nyata kolaborasi mahasiswa dan warga Gelora — bukan hanya mengurangi sampah, tetapi menumbuhkan kemandirian ekonomi dari halaman rumah kita sendiri."' }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-foreground", children: s.from }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: s.role })
      ] })
    ] }, s.from)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Hubungi Kami" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/6281933039319", target: "_blank", rel: "noopener noreferrer", className: "group flex items-center gap-4 rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Ketua KKN" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-base font-bold text-foreground", children: "+62 819-3303-9319" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Ahmad Fauzi" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.instagram.com/kkn_desagelora2026?igsh=YzhrbWIzc3o4MTNm", target: "_blank", rel: "noopener noreferrer", className: "group flex items-center gap-4 rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-secondary text-secondary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Instagram" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-base font-bold text-foreground", children: "@kknpmdgelora" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Update kegiatan harian" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.tiktok.com/@kkn.desa.gelora_p?is_from_webapp=1&sender_device=pc", target: "_blank", rel: "noopener noreferrer", className: "group flex items-center gap-4 rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-lg", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-foreground text-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "h-6 w-6", "aria-hidden": "true", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.4a8.16 8.16 0 0 0 4.77 1.52V6.47a4.85 4.85 0 0 1-1.84-.22z" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "TikTok" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-base font-bold text-foreground", children: "@kknpmdgelora" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Video edukasi & dokumentasi" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Profil Desa Gelora" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-card p-7 ring-1 ring-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/85", children: [
          "Desa Gelora terdiri dari ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "7 dusun" }),
          " dengan karakter demografis yang beragam — dari pemukiman padat hingga area pertanian dan kerajinan bambu. Setiap dusun memiliki titik komposter komunal yang dikelola bersama warga."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4", children: dusun.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-leaf-soft/70 px-4 py-3 text-sm font-semibold text-primary", children: d }, d)) })
      ] })
    ] })
  ] });
}
export {
  TentangKami as component
};
