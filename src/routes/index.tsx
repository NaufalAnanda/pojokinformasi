import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Instagram, Music2, Briefcase, Leaf, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KKN PMD Desa Gelora 2026" },
      {
        name: "description",
        content: "KKN PMD Desa Gelora 2026 — Kontak dan Program Kerja.",
      },
    ],
  }),
  component: Splash,
});

const menuItems = [
  {
    id: "wa",
    label: "WhatsApp",
    sublabel: "Hubungi kami via WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/6281933039319",
    external: true,
    color: "bg-[#25D366]",
    textColor: "text-white",
  },
  {
    id: "ig",
    label: "Instagram",
    sublabel: "@KKN DESA GELORA",
    icon: Instagram,
    href: "https://www.instagram.com/kkn_desagelora2026?igsh=YzhrbWIzc3o4MTNm",
    external: true,
    color: "bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045]",
    textColor: "text-white",
  },
  {
    id: "tt",
    label: "TikTok",
    sublabel: "@KKN DESA GELORA",
    icon: Music2,
    href: "https://www.tiktok.com/@kkn.desa.gelora_p?is_from_webapp=1&sender_device=pc",
    external: true,
    color: "bg-black",
    textColor: "text-white",
  },
  {
    id: "proker",
    label: "Program Kerja",
    sublabel: "Lihat seluruh program KKN kami",
    icon: Briefcase,
    to: "/beranda",
    external: false,
    color: "bg-primary",
    textColor: "text-primary-foreground",
  },
];

function Splash() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-5 py-12">
      {/* Logo + Judul */}
      <div className="mb-10 flex flex-col items-center gap-4 text-center">
        <span className="grid h-20 w-20 place-items-center rounded-3xl bg-primary shadow-lg">
          <Leaf className="h-10 w-10 text-primary-foreground" />
        </span>
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            KKN PMD Desa Gelora
          </h1>
          <p className="mt-1 text-sm font-semibold text-primary">2026</p>
          <p className="mt-1 text-xs text-muted-foreground">Kampanye Ekonomi Hijau</p>
        </div>
      </div>

      {/* Menu list */}
      <div className="w-full max-w-sm space-y-3">
        {menuItems.map((item) =>
          item.external ? (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex w-full items-center gap-4 rounded-2xl px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${item.color} ${item.textColor}`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/20">
                <item.icon className="h-5 w-5" />
              </span>
              <div className="flex-1 text-left">
                <p className="font-bold leading-tight">{item.label}</p>
                <p className="text-xs opacity-80">{item.sublabel}</p>
              </div>
              <ExternalLink className="h-4 w-4 opacity-70" />
            </a>
          ) : (
            <a
              key={item.id}
              href={item.to}
              className={`flex w-full items-center gap-4 rounded-2xl px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${item.color} ${item.textColor}`}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/20">
                <item.icon className="h-5 w-5" />
              </span>
              <div className="flex-1 text-left">
                <p className="font-bold leading-tight">{item.label}</p>
                <p className="text-xs opacity-80">{item.sublabel}</p>
              </div>
            </a>
          ),
        )}
      </div>

      <p className="mt-10 text-xs text-muted-foreground">
        © 2026 KKN PMD Desa Gelora. Semua hak dilindungi.
      </p>
    </div>
  );
}
