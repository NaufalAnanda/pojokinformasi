import { Link } from "@tanstack/react-router";
import { Leaf, Menu, X, Home } from "lucide-react";
import { useState } from "react";

const navItems = [
  { to: "/", label: "Home", icon: Home, exact: true },
  { to: "/beranda", label: "Beranda", exact: false },
  { to: "/program-kerja", label: "Program Kerja", exact: false },
  { to: "/edukasi", label: "Pusat Edukasi", exact: false },
  { to: "/tentang-kami", label: "Tentang Kami", exact: false },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link to="/" className="flex items-center gap-2.5 font-bold text-foreground">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base">KKN PMD Desa Gelora</span>
            <span className="text-[11px] font-medium text-muted-foreground">2026</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-leaf-soft hover:text-primary"
              activeProps={{
                className:
                  "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
              }}
              activeOptions={{ exact: item.exact }}
            >
              {"icon" in item && item.icon && <item.icon className="h-3.5 w-3.5" />}
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-leaf-soft"
                activeProps={{ className: "bg-primary text-primary-foreground" }}
                activeOptions={{ exact: item.exact }}
              >
                {"icon" in item && item.icon && <item.icon className="h-4 w-4" />}
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-5 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-medium text-foreground">
            KKN PMD Desa Gelora 2026 — Kampanye Ekonomi Hijau
          </p>
          <p>© {new Date().getFullYear()} Tim KKN PMD. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
