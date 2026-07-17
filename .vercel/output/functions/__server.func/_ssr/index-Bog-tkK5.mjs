import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { l as logo } from "./router-uZoqRZVe.mjs";
import { B as Briefcase, f as MessageCircle, I as Instagram, g as Music2, E as ExternalLink } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const menuItems = [{
  id: "proker",
  label: "Program Kerja",
  sublabel: "Lihat seluruh program KKN kami",
  icon: Briefcase,
  to: "/beranda",
  external: false,
  color: "bg-primary",
  textColor: "text-primary-foreground"
}, {
  id: "wa",
  label: "WhatsApp",
  sublabel: "Hubungi kami via WhatsApp",
  icon: MessageCircle,
  href: "https://wa.me/6281933039319",
  external: true,
  color: "bg-[#25D366]",
  textColor: "text-white"
}, {
  id: "ig",
  label: "Instagram",
  sublabel: "@KKN DESA GELORA",
  icon: Instagram,
  href: "https://www.instagram.com/kkn_desagelora2026?igsh=YzhrbWIzc3o4MTNm",
  external: true,
  color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045]",
  textColor: "text-white"
}, {
  id: "tt",
  label: "TikTok",
  sublabel: "@KKN DESA GELORA",
  icon: Music2,
  href: "https://www.tiktok.com/@kkn.desa.gelora_p?is_from_webapp=1&sender_device=pc",
  external: true,
  color: "bg-black",
  textColor: "text-white"
}];
function Splash() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col items-center justify-center bg-background px-5 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex flex-col items-center gap-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Logo KKN PMD Desa Gelora", className: "h-24 w-24 rounded-full object-cover shadow-[0_0_15px_rgba(0,0,0,0.4)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-extrabold tracking-tight text-green-700 sm:text-3xl", children: "SI-Komp" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-black-800 sm:text-3xl", children: "KKN PMD Desa Gelora" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-semibold text-primary", children: "2026" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Kampanye Ekonomi Hijau" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full max-w-sm space-y-3", children: menuItems.map((item) => item.external ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: item.href, target: "_blank", rel: "noopener noreferrer", className: `flex w-full items-center gap-4 rounded-2xl px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${item.color} ${item.textColor}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold leading-tight", children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-80", children: item.sublabel })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-4 w-4 opacity-70" })
    ] }, item.id) : /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: item.to, className: `flex w-full items-center gap-4 rounded-2xl px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${item.color} ${item.textColor}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold leading-tight", children: item.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs opacity-80", children: item.sublabel })
      ] })
    ] }, item.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 text-xs text-muted-foreground", children: "© 2026 KKN PMD Desa Gelora. Semua hak dilindungi." })
  ] });
}
export {
  Splash as component
};
