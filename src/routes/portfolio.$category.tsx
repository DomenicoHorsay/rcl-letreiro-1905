import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import {
  getCategory,
  type PortfolioCategory,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/portfolio/$category")({
  loader: ({ params }) => {
    const cat = getCategory(params.category);

    if (!cat) {
      throw notFound();
    }

    return { cat };
  },

  component: CategoryGallery,
});

function CategoryGallery() {
  const { cat } = Route.useLoaderData() as {
    cat: PortfolioCategory;
  };

  const [open, setOpen] = useState<number | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
      }

      if (e.key === "ArrowRight") {
        setOpen((prev) =>
          prev === null
            ? prev
            : (prev + 1) % cat.images.length
        );
      }

      if (e.key === "ArrowLeft") {
        setOpen((prev) =>
          prev === null
            ? prev
            : (prev - 1 + cat.images.length) %
              cat.images.length
        );
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open, cat.images.length]);

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* HEADER */}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="container-rcl flex h-20 items-center justify-between">

          <Link
            to="/"
            className="font-display text-2xl font-bold tracking-tight"
          >
            RCL
            <span className="text-brand">.</span>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition hover:border-brand hover:text-brand"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
        </div>
      </header>

      {/* HERO */}

      <section className="relative isolate overflow-hidden">

        <div className="absolute inset-0 -z-10">
          <img
            src={cat.cover}
            alt={cat.title}
            className="h-full w-full object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-background" />
        </div>

        <div className="container-rcl flex min-h-[85vh] flex-col justify-end pb-20 pt-32">

          <div className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <Link to="/">Início</Link>

            <span>/</span>

            <span className="text-brand">
              {cat.title}
            </span>
          </div>

          <h1 className="max-w-5xl font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            {cat.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {cat.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.18em]">
              {cat.images.length} Projetos
            </div>

            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.18em]">
              Comunicação Visual Premium
            </div>

          </div>
        </div>
      </section>

      {/* SHOWCASE */}

      <section className="py-20">

        <div className="container-rcl">

          <div className="mb-10 flex items-end justify-between">

            <div>
              <span className="text-xs uppercase tracking-[0.18em] text-brand">
                Portfólio
              </span>

              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
                Projetos em destaque
              </h2>
            </div>

            <div className="hidden items-center gap-3 md:flex">

              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-brand hover:text-brand"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-brand hover:text-brand"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

            </div>
          </div>

          <div
            ref={emblaRef}
            className="overflow-hidden"
          >
            <div className="flex gap-6">

              {cat.images.map((img, index) => (

                <div
                  key={index}
                  className="min-w-0 shrink-0 grow-0 basis-[92%] md:basis-[75%]"
                >

                  <button
                    type="button"
                    onClick={() => setOpen(index)}
                    className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-surface"
                  >

                    <img
                      src={img.src}
                      alt={img.alt}
                      className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-8">

                      <span className="text-xs uppercase tracking-[0.18em] text-brand">
                        Projeto
                      </span>

                      <h3 className="mt-2 font-display text-2xl font-bold">
                        {img.alt}
                      </h3>

                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GRID PREMIUM MOBILE FIRST */}

      <section className="pb-20 pt-4">
        <div className="container-rcl">

          <div className="mb-8 flex items-end justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-brand">
                Galeria Completa
              </span>

              <h2 className="mt-2 font-display text-3xl font-bold leading-[1] tracking-tight md:text-5xl">
                Todos os projetos
              </h2>
            </div>

            <div className="hidden md:block">
              <span className="text-sm text-muted-foreground">
                Clique para ampliar
              </span>
            </div>
          </div>

          {/* MOBILE */}

          <div className="md:hidden">
            <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3">

              {cat.images.map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setOpen(index)}
                  className="group relative min-w-[88%] overflow-hidden rounded-[30px] border border-white/10 bg-surface"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 w-full p-5 text-left">

                    <div className="mb-3 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-brand" />

                      <span className="text-[10px] uppercase tracking-[0.22em] text-white/70">
                        Projeto RCL
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold leading-tight text-white">
                      {img.alt}
                    </h3>

                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* DESKTOP */}

          <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">

            {cat.images.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setOpen(index)}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-surface"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 opacity-0 transition duration-500 group-hover:opacity-100" />

                <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 transition duration-500 group-hover:opacity-100">

                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand" />

                    <span className="text-[10px] uppercase tracking-[0.22em] text-white/70">
                      Projeto RCL
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold leading-tight text-white">
                    {img.alt}
                  </h3>

                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* LIGHTBOX */}

      {open !== null && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
          onClick={() => setOpen(null)}
        >

          <button
            type="button"
            onClick={() => setOpen(null)}
            className="absolute right-6 top-6 rounded-full border border-white/10 bg-black/50 p-3 text-white transition hover:bg-black"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              setOpen((prev) =>
                prev === null
                  ? prev
                  : (prev - 1 + cat.images.length) %
                    cat.images.length
              );
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-3 text-white transition hover:bg-black"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              setOpen((prev) =>
                prev === null
                  ? prev
                  : (prev + 1) % cat.images.length
              );
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-black/50 p-3 text-white transition hover:bg-black"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="w-full max-w-6xl px-6"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={cat.images[open].src}
              alt={cat.images[open].alt}
              className="max-h-[85vh] w-full rounded-2xl object-contain"
            />

            <div className="mt-5 flex items-center justify-between">

              <div>
                <h3 className="text-lg font-semibold">
                  {cat.images[open].alt}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {open + 1} / {cat.images.length}
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}