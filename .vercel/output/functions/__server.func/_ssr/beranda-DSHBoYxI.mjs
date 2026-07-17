import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as Autoplay } from "../_libs/embla-carousel-autoplay.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { A as ArrowRight, e as ArrowLeft } from "../_libs/lucide-react.mjs";
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
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const CarouselContext = reactExports.createContext(null);
function useCarousel() {
  const context = reactExports.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = reactExports.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const onSelect = reactExports.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = reactExports.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = reactExports.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  reactExports.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  reactExports.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
const heroImg = "/assets/dpk-DGLX9hys.jpg";
const heroImg2 = "/assets/sekdes-KRktZKCs.jpg";
const heroImg3 = "/assets/posyandu-i_bKxSS6.jpg";
const heroImg4 = "/assets/penerimaan-jyKbsuXw.jpg";
function Beranda() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 py-10 md:py-16 flex flex-col gap-12 md:gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-extrabold text-foreground md:text-4xl lg:text-5xl", children: "Ubah Sampah Menjadi Peluang" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base text-muted-foreground md:text-lg", children: "Program KKN PMD Desa Gelora mengajak masyarakat mengolah sampah organik menjadi kompos bernilai guna" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full flex flex-col", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Carousel, { plugins: [Autoplay({
      delay: 4e3
    })], className: "w-full overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CarouselContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] md:aspect-[21/9] w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Foto bersama DPK", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent px-5 pb-3 pt-8 text-white md:px-8 md:pb-5 md:pt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm opacity-90 md:text-base", children: "Foto bersama DPK" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] md:aspect-[21/9] w-full bg-blue-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center font-semibold text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg2, alt: "Kunjungan Hari Pertama", className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent px-6 pb-6 pt-16 text-white md:px-10 md:pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm opacity-90 md:text-base", children: "Kunjungan Hari Pertama" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] md:aspect-[21/9] w-full bg-green-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center font-semibold text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg3, alt: "Kegiatan Posyandu", className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent px-6 pb-6 pt-16 text-white md:px-10 md:pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm opacity-90 md:text-base", children: "Kegiatan Posyandu" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] md:aspect-[21/9] w-full bg-green-500", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full w-full items-center justify-center font-semibold text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg4, alt: "Kegiatan Kantor Desa", className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent px-6 pb-6 pt-16 text-white md:px-10 md:pb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm opacity-90 md:text-base", children: "Penerimaan di Kantor Desa" }) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-6 text-center text-2xl font-bold text-foreground md:text-3xl", children: "Menu Pilihan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid w-full gap-4 md:grid-cols-3 md:gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/program-kerja", className: "group flex flex-row items-center justify-between rounded-[2rem] bg-[#C1A88D]/30 p-6 transition-all hover:bg-[#C1A88D]/50 hover:shadow-md active:scale-95", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground", children: "Program Kompos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Cara mengolah sampah dapur" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-background shadow-sm transition group-hover:scale-110 group-hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-6 w-6" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/edukasi", className: "group flex flex-row items-center justify-between rounded-[2rem] bg-[#C1A88D]/30 p-6 transition-all hover:bg-[#C1A88D]/50 hover:shadow-md active:scale-95", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground", children: "Panduan " }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Panduan pembuatan kompos " })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-background shadow-sm transition group-hover:scale-110 group-hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-6 w-6" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/tentang-kami", className: "group flex flex-row items-center justify-between rounded-[2rem] bg-[#C1A88D]/30 p-6 transition-all hover:bg-[#C1A88D]/50 hover:shadow-md active:scale-95", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground", children: "Tentang Kami" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Profil mahasiswa KKN" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-background shadow-sm transition group-hover:scale-110 group-hover:text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-6 w-6" }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  Beranda as component
};
