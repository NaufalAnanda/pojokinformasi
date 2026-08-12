import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, b as useRouterState, O as Outlet, H as HeadContent, S as Scripts, d as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { X, M as Menu, a as MapPin, I as Instagram } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-BI1OVn3-.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
const logo = "/assets/logo-DZez7TAz.jpg";
const navItems = [
  { to: "/", label: "Links", exact: true },
  { to: "/beranda", label: "Beranda", exact: false },
  { to: "/program-kerja", label: "Program Kerja", exact: false },
  { to: "/edukasi", label: "Pusat Edukasi", exact: false },
  { to: "/tentang-kami", label: "Tentang Kami", exact: false }
];
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5 font-bold text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: logo,
            alt: "Logo KKN",
            className: "h-10 w-10 shrink-0 rounded-full object-cover shadow-[0_0_10px_rgba(0,0,0,0.4)]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col leading-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base", children: "KKN PMD Desa Gelora" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-muted-foreground", children: "2026" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 md:flex", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: item.to,
          className: "flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-leaf-soft hover:text-primary",
          activeProps: {
            className: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground"
          },
          activeOptions: { exact: item.exact },
          children: [
            "icon" in item && item.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-3.5 w-3.5" }),
            item.label
          ]
        },
        item.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setOpen((o) => !o),
          className: "grid h-10 w-10 place-items-center rounded-full border border-border bg-card md:hidden",
          "aria-label": "Toggle menu",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "border-t border-border bg-background px-5 py-3 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1", children: navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: item.to,
        onClick: () => setOpen(false),
        className: "flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-leaf-soft",
        activeProps: { className: "bg-primary text-primary-foreground" },
        activeOptions: { exact: item.exact },
        children: [
          "icon" in item && item.icon && /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-4 w-4" }),
          item.label
        ]
      },
      item.to
    )) }) })
  ] });
}
const unram = "/assets/underam-QRr_si0I.jpg";
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-20 w-full bg-[#1b4332] pt-12 pb-6 text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              className: "flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-sm ring-2 ring-white/20 transition hover:scale-105 hover:ring-white/50",
              title: "Kembali ke Beranda",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: logo,
                  alt: "Logo KKN Gelora",
                  className: "h-full w-full object-contain",
                  onError: (e) => e.currentTarget.src = "https://via.placeholder.com/150/ffffff/1b4332?text=KKN"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white p-1.5 shadow-sm ring-2 ring-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: unram,
              alt: "Logo Universitas",
              className: "h-full w-full object-contain",
              onError: (e) => e.currentTarget.src = "https://via.placeholder.com/150/ffffff/1b4332?text=UNRAM"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-xl font-extrabold text-green-100", children: "KKN PMD Desa Gelora" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-green-50/80", children: "Kampanye Ekonomi Hijau. Program pengabdian masyarakat dari mahasiswa Universitas Mataram berkolaborasi dengan warga untuk membangun ekosistem desa yang mandiri dan berkelanjutan." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-lg font-bold text-green-100", children: "Hubungi Kami" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4 text-sm text-green-50/80", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-5 w-5 shrink-0 text-green-400" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://maps.app.goo.gl/5VXNcJKbzZNd1f626",
              target: "_blank",
              rel: "noreferrer",
              className: "transition hover:text-green-300",
              title: "Buka di Google Maps",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Posko KKN UNRAM 2026" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Kec. Sikur, Kab. Lombok Timur,",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Nusa Tenggara Barat"
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-4 text-lg font-bold text-green-100", children: "Didukung Oleh" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 text-sm font-semibold text-green-50/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Pemerintah Desa Gelora" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Universitas Mataram" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/kkn_desagelora2026?igsh=YzhrbWIzc3o4MTNm", target: "_blank", rel: "noreferrer", className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#E1306C] hover:text-white", title: "Instagram", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.tiktok.com/@kkn.desa.gelora_p?is_from_webapp=1&sender_device=pc", target: "_blank", rel: "noreferrer", className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-black hover:text-white", title: "TikTok", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/6281933039319", target: "_blank", rel: "noreferrer", className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#25D366] hover:text-white", title: "WhatsApp", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-5 w-5 fill-current", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" }) }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-12 max-w-7xl border-t border-white/20 px-5 pt-6 text-center md:text-left", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-green-100/60", children: "© 2026 Tim KKN PMD Universitas Mataram — Desa Gelora. Semua hak dilindungi." }) })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$g = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "KKN PMD Desa Gelora 2026" },
      {
        name: "description",
        content: "KKN PMD Desa Gelora 2026 — Kampanye Ekonomi Hijau: komposter komunal, edukasi, dan ekonomi sirkular."
      },
      { property: "og:title", content: "KKN PMD Desa Gelora 2026" },
      {
        property: "og:description",
        content: "Komposter komunal, edukasi pemilahan sampah, dan ekonomi sirkular Desa Gelora."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "id", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$g.useRouteContext();
  useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
const $$splitComponentImporter$f = () => import("./tentang-kami-DUOTXPjU.mjs");
const Route$f = createFileRoute("/tentang-kami")({
  head: () => ({
    meta: [{
      title: "Tentang Kami — KKN PMD Gelora"
    }, {
      name: "description",
      content: "Profil kelompok KKN PMD Desa Gelora, sambutan Kepala Desa & DPL, dan profil 7 dusun."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./program-kerja-CoaAbJ7A.mjs");
const Route$e = createFileRoute("/program-kerja")({
  head: () => ({
    meta: [{
      title: "Program Kerja — KKN PMD Gelora"
    }, {
      name: "description",
      content: "Tiga pilar utama: Infrastruktur Komposter Komunal, SI-Komp, dan Ekonomi Sirkular & Sedekah Hijau."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./edukasi-CAaxi2_7.mjs");
const Route$d = createFileRoute("/edukasi")({
  head: () => ({
    meta: [{
      title: "Pusat Edukasi — KKN PMD Gelora"
    }, {
      name: "description",
      content: "Portal edukasi pemilahan sampah dan panduan komposter — 8 modul interaktif, akses 24 jam."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./beranda-ClzwBSt6.mjs");
const Route$c = createFileRoute("/beranda")({
  head: () => ({
    meta: [{
      title: "Beranda — Program KKN Desa Gelora"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./index-BhjsLd4h.mjs");
const Route$b = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "KKN PMD Desa Gelora 2026"
    }, {
      name: "description",
      content: "KKN PMD Desa Gelora 2026 — Kontak dan Program Kerja."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./program-kerja_.tongKomposter-DC1gR_Wx.mjs");
const Route$a = createFileRoute("/program-kerja_/tongKomposter")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./program-kerja_.siKomp-DeSO2SsZ.mjs");
const Route$9 = createFileRoute("/program-kerja_/siKomp")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./program-kerja_.mengajarTK-BmucalyN.mjs");
const Route$8 = createFileRoute("/program-kerja_/mengajarTK")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./program-kerja_.mengajarSD-CFBlvpLn.mjs");
const Route$7 = createFileRoute("/program-kerja_/mengajarSD")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./program-kerja_.lubangTeba-BAtJ6xq6.mjs");
const Route$6 = createFileRoute("/program-kerja_/lubangTeba")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./edukasi_.waktuPenguraian-BWmo8sJN.mjs");
const Route$5 = createFileRoute("/edukasi_/waktuPenguraian")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./edukasi_.video-4L895rtl.mjs");
const Route$4 = createFileRoute("/edukasi_/video")({
  // head: () => ({
  //   meta: [{ title: "Galeri Video Edukasi — KKN PMD Gelora" }],
  // }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./edukasi_.unduhPoster-C9WJ5MwG.mjs");
const Route$3 = createFileRoute("/edukasi_/unduhPoster")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./edukasi_.jenisSampah-CYjTXWAt.mjs");
const Route$2 = createFileRoute("/edukasi_/jenisSampah")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./edukasi_.ekonomiHijau-VSbcCFtf.mjs");
const Route$1 = createFileRoute("/edukasi_/ekonomiHijau")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./edukasi_.caraKomposter-DRvVzb_u.mjs");
const Route = createFileRoute("/edukasi_/caraKomposter")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TentangKamiRoute = Route$f.update({
  id: "/tentang-kami",
  path: "/tentang-kami",
  getParentRoute: () => Route$g
});
const ProgramKerjaRoute = Route$e.update({
  id: "/program-kerja",
  path: "/program-kerja",
  getParentRoute: () => Route$g
});
const EdukasiRoute = Route$d.update({
  id: "/edukasi",
  path: "/edukasi",
  getParentRoute: () => Route$g
});
const BerandaRoute = Route$c.update({
  id: "/beranda",
  path: "/beranda",
  getParentRoute: () => Route$g
});
const IndexRoute = Route$b.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$g
});
const ProgramKerjaTongKomposterRoute = Route$a.update({
  id: "/program-kerja_/tongKomposter",
  path: "/program-kerja/tongKomposter",
  getParentRoute: () => Route$g
});
const ProgramKerjaSiKompRoute = Route$9.update({
  id: "/program-kerja_/siKomp",
  path: "/program-kerja/siKomp",
  getParentRoute: () => Route$g
});
const ProgramKerjaMengajarTKRoute = Route$8.update({
  id: "/program-kerja_/mengajarTK",
  path: "/program-kerja/mengajarTK",
  getParentRoute: () => Route$g
});
const ProgramKerjaMengajarSDRoute = Route$7.update({
  id: "/program-kerja_/mengajarSD",
  path: "/program-kerja/mengajarSD",
  getParentRoute: () => Route$g
});
const ProgramKerjaLubangTebaRoute = Route$6.update({
  id: "/program-kerja_/lubangTeba",
  path: "/program-kerja/lubangTeba",
  getParentRoute: () => Route$g
});
const EdukasiWaktuPenguraianRoute = Route$5.update({
  id: "/edukasi_/waktuPenguraian",
  path: "/edukasi/waktuPenguraian",
  getParentRoute: () => Route$g
});
const EdukasiVideoRoute = Route$4.update({
  id: "/edukasi_/video",
  path: "/edukasi/video",
  getParentRoute: () => Route$g
});
const EdukasiUnduhPosterRoute = Route$3.update({
  id: "/edukasi_/unduhPoster",
  path: "/edukasi/unduhPoster",
  getParentRoute: () => Route$g
});
const EdukasiJenisSampahRoute = Route$2.update({
  id: "/edukasi_/jenisSampah",
  path: "/edukasi/jenisSampah",
  getParentRoute: () => Route$g
});
const EdukasiEkonomiHijauRoute = Route$1.update({
  id: "/edukasi_/ekonomiHijau",
  path: "/edukasi/ekonomiHijau",
  getParentRoute: () => Route$g
});
const EdukasiCaraKomposterRoute = Route.update({
  id: "/edukasi_/caraKomposter",
  path: "/edukasi/caraKomposter",
  getParentRoute: () => Route$g
});
const rootRouteChildren = {
  IndexRoute,
  BerandaRoute,
  EdukasiRoute,
  ProgramKerjaRoute,
  TentangKamiRoute,
  EdukasiCaraKomposterRoute,
  EdukasiEkonomiHijauRoute,
  EdukasiJenisSampahRoute,
  EdukasiUnduhPosterRoute,
  EdukasiVideoRoute,
  EdukasiWaktuPenguraianRoute,
  ProgramKerjaLubangTebaRoute,
  ProgramKerjaMengajarSDRoute,
  ProgramKerjaMengajarTKRoute,
  ProgramKerjaSiKompRoute,
  ProgramKerjaTongKomposterRoute
};
const routeTree = Route$g._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  logo as l,
  router as r
};
