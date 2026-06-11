import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Leaf, g as MessageCircle, I as Instagram, h as Music2, i as Briefcase, E as ExternalLink } from "../_libs/lucide-react.mjs";
const menuItems = [{
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
}, {
  id: "proker",
  label: "Program Kerja",
  sublabel: "Lihat seluruh program KKN kami",
  icon: Briefcase,
  to: "/beranda",
  external: false,
  color: "bg-primary",
  textColor: "text-primary-foreground"
}];
function Splash() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col items-center justify-center bg-background px-5 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10 flex flex-col items-center gap-4 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-20 w-20 place-items-center rounded-3xl bg-primary shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { className: "h-10 w-10 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl", children: "KKN PMD Desa Gelora" }),
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
