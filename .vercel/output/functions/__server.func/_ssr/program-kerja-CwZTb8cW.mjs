import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
const program1 = "/assets/program-1-beKwJJIN.jpg";
const program2 = "/assets/program-2-CwT_L-t6.jpg";
const program3 = "/assets/program-3-D17XZrG4.jpg";
const program4 = "/assets/cfd-CDyTZgYm.jpg";
const program5 = "/assets/mengajar-DgLyqzZg.jpg";
const cards = [{
  image: program1,
  tag: "Program 1",
  title: "Tong Komposter Sederhana",
  desc: "Mengelola sampah organik menjadi kompos secara mudah dan ramah lingkngan.",
  cta: "Detail Program"
}, {
  image: program2,
  tag: "Program 2",
  title: "SI-Komp (Sistem Informasi Sampah Terurai)",
  desc: "Digitalisasi panduan komposter via web-app yang diakses melalui stiker QR di pojok informasi.",
  cta: "Detail Program"
}, {
  image: program3,
  tag: "Program 3",
  title: "Daur Ulang Kreatif",
  desc: "Mengubah sampah menjadi barang bernilai guna dan estetis secara kreatif",
  cta: "Detail Program"
}, {
  image: program4,
  tag: "Program 4",
  title: "Car Free Day",
  desc: "Car Free Day di Desa Gelora",
  cta: "Detail Program"
}, {
  image: program5,
  tag: "Program 4",
  title: "Mengajar Anak SD",
  desc: "Mengajarkan mata pelajaran bahasa inggris dan matematika",
  cta: "Detail Program"
}];
function ProgramKerja() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-5 py-12 md:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full bg-leaf-soft px-4 py-1.5 text-xs font-semibold text-primary", children: "Program Kerja" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-4xl font-extrabold text-foreground sm:text-5xl", children: "Program Kerja KKN PMD Desa Gelora 2026." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground sm:text-lg", children: "Setiap pilar saling melengkapi: infrastruktur fisik, edukasi digital, dan sirkulasi ekonomi yang kembali ke warga." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: cards.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-muted", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.image, alt: c.title, loading: "lazy", width: 1024, height: 768, className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary backdrop-blur", children: c.tag })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: c.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground transition hover:opacity-90", children: [
          c.cta,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }, c.title)) })
  ] });
}
export {
  ProgramKerja as component
};
