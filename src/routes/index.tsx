import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  Hammer,
  Instagram,
  Lightbulb,
  Mail,
  MapPin,
  MoreVertical,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  X,
} from "lucide-react";
import heroImg from "@/assets/hero-facade.jpg";
import p1 from "@/assets/letreiro/letreiro-27.jpg";
import p2 from "@/assets/placas/placa-25.jpg";
import p3 from "@/assets/totem-categoria.jpg";
import p4 from "@/assets/adesivo-categoria.jpg";


import p7 from "@/assets/instagram/officiodenotas-instagram.jpg";
import p8 from "@/assets/instagram/skudocybersecurity-instagram.jpg";
import p9 from "@/assets/instagram/mbp-instagram.jpg";
import p10 from "@/assets/instagram/leblon-instagram.jpg";
import p11 from "@/assets/instagram/imagemlegal-instagram.jpg";
import p12 from "@/assets/instagram/hospital-instagram.jpg";
import p13 from "@/assets/instagram/emgeprom-instagram.jpg";
import p14 from "@/assets/instagram/copabarkana-instagram.jpg";
import p15 from "@/assets/instagram/2r-instagram.jpg";
import p16 from "@/assets/instagram/atendimento-instagram.jpg";
import p17 from "@/assets/instagram/cidadania-instagram.jpg";
import p18 from "@/assets/instagram/poseidon-instagram.jpg";
import p19 from "@/assets/instagram/smartrio-instagram.jpg";
import p20 from "@/assets/instagram/zerezes-instagram.jpg";
import p21 from "@/assets/instagram/riobarra-instagram.jpg";
import p22 from "@/assets/instagram/novaiguacu-instagram.jpg";



export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP_URL =
  "https://wa.me/552120511881?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.11 4.91A10.05 10.05 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.27-1.38a9.93 9.93 0 0 0 4.76 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.84-7.01ZM12.04 20.15h-.01a8.23 8.23 0 0 1-4.2-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.22 8.22 0 0 1-1.26-4.37c0-4.54 3.69-8.23 8.24-8.23 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.22 8.23Zm4.51-6.16c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.49-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.23.25-.86.84-.86 2.04s.88 2.37 1 2.54c.12.16 1.74 2.66 4.21 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Differentials />
      <Portfolio />
      <Segments />
      <InstagramStrip />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#portfolio", label: "Portfólio" },
    { href: "#instagram", label: "Instagram" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-rcl flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-xl font-bold tracking-tight">
            RCL<span className="text-brand">.</span>
          </span>
          <span className="hidden border-l border-border pl-3 text-[10px] font-semibold uppercase leading-tight tracking-[0.18em] text-muted-foreground sm:block">
            Comunicação<br />Visual
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-foreground transition hover:opacity-90 sm:px-5 sm:text-sm"
          >
            Vamos Conversar
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/40 text-foreground backdrop-blur transition hover:border-foreground md:hidden"
          >
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-4 top-4 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-border bg-background p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Menu
              </span>
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition hover:border-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="mt-6 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition hover:bg-muted"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Fachada comercial iluminada produzida pela RCL"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>

      <div className="container-rcl relative flex min-h-[70svh] flex-col justify-center pb-8 pt-20 sm:min-h-[80svh] sm:pt-24 md:min-h-[80vh] md:justify-end md:pb-16 md:pt-32">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Comunicação visual estratégica · RJ
          </div>
          <h1 className="font-display text-[1.75rem] font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Sua fachada está <span className="text-brand">posicionando sua marca</span>
            <br className="hidden md:block" /> ou apenas identificando seu endereço?
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:mt-5 md:text-base">
            Projetos de comunicação visual que transformam estruturas físicas em
            ativos estratégicos de visibilidade e posicionamento.
          </p>
          <div className="mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:mt-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-brand-foreground transition hover:opacity-90"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Falar no WhatsApp
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground sm:justify-start"
            >
              Ver projetos realizados
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: "+30", label: "Anos de mercado" },
    { value: "+2000", label: "Projetos entregues" },
    { value: "Brasil", label: "Atendimento em todo o país" },
    { value: "100%", label: "Produção própria" },
  ];
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-rcl grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
        {items.map((it) => (
          <div key={it.label} className="px-2 py-7 text-center md:px-6 md:py-14">
            <div className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {it.value}
            </div>
            <div className="mt-1.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs md:mt-2">
              {it.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
      <span className="h-px w-8 bg-brand" />
      {children}
    </div>
  );
}

function About() {
  return (
    <section id="sobre" className="py-16 sm:py-20 md:py-32">
      <div className="container-rcl grid gap-8 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5">
          <SectionLabel>Sobre a RCL</SectionLabel>
          <h2 className="font-display text-[1.65rem] font-bold leading-[1.15] sm:text-3xl md:text-5xl">
            Do projeto à instalação,{" "}
            <span className="text-brand">controle total</span> de cada etapa.
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-2">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            A RCL Comunicação Visual é especializada na criação, produção e
            instalação de fachadas comerciais e projetos de comunicação visual
            no Rio de Janeiro. Com produção própria e equipe técnica
            qualificada, entregamos soluções completas — do desenho do projeto
            ao serviço de instalação.
          </p>
          <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
            {[
              "Produção própria",
              "Controle de qualidade",
              "Equipe técnica especializada",
              "Entrega completa e integrada",
            ].map((it) => (
              <div key={it} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand" />
                <span>{it}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Building2, title: "Fachadas comerciais", desc: "Projetos completos do conceito à instalação." },
    { icon: Lightbulb, title: "Letreiros luminosos LED", desc: "Tecnologia LED com alto desempenho visual." },
    { icon: Sparkles, title: "Letras caixa", desc: "Acabamento premium e impacto institucional." },
    { icon: Factory, title: "Revestimento em ACM", desc: "Modernização e padronização de estruturas." },
    { icon: Award, title: "Totens e estruturas verticais", desc: "Sinalização de alto destaque." },
    { icon: ClipboardCheck, title: "Painéis promocionais", desc: "Soluções para campanhas e PDV." },
    { icon: Wrench, title: "Comunicação visual interna", desc: "Identidade aplicada a cada ambiente." },
    { icon: ShieldCheck, title: "Padronização para redes", desc: "Consistência de marca em escala." },
  ];
  return (
    <section id="servicos" className="border-t border-border bg-surface py-16 sm:py-20 md:py-32">
      <div className="container-rcl">
        <div className="max-w-2xl">
          <SectionLabel>Serviços</SectionLabel>
          <h2 className="font-display text-[1.65rem] font-bold leading-[1.15] sm:text-3xl md:text-5xl">
            Soluções completas em comunicação visual.
          </h2>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl bg-border sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex flex-col gap-3 bg-card p-6 transition hover:bg-background sm:gap-4 sm:p-7"
            >
              <Icon className="h-7 w-7 text-brand" strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    { title: "Produção própria", desc: "Controle total de qualidade em cada etapa." },
    { title: "Equipe técnica especializada", desc: "Profissionais qualificados em todas as frentes." },
    { title: "Atendimento consultivo", desc: "Visão estratégica aplicada ao seu projeto." },
    { title: "Instalação profissional", desc: "Segurança, precisão e acabamento impecável." },
    { title: "Gestão de prazos", desc: "Compromisso contratual e entrega no tempo certo." },
    { title: "Padronização para redes", desc: "Consistência de marca em múltiplas unidades." },
  ];
  return (
    <section className="py-16 sm:py-20 md:py-24">
      <div className="container-rcl">
        <div className="mb-8 max-w-2xl sm:mb-10 md:mb-14">
          <SectionLabel>Diferenciais</SectionLabel>
          <h2 className="font-display text-[1.65rem] font-bold leading-[1.15] sm:text-3xl md:text-5xl">
            Por que empresas escolhem a <span className="text-brand">RCL</span>.
          </h2>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {items.map((it, i) => (
            <div key={it.title} className="flex items-start gap-4 bg-card p-5 sm:gap-5 sm:p-6 md:p-7">
              <span className="font-display text-base font-semibold text-brand">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold tracking-tight md:text-lg">
                  {it.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {it.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const items = [
    {
      src: p1,
      alt: "Letras caixa iluminadas em fachada corporativa",
      slug: "letreiros",
      label: "Letreiros",
    },
    {
      src: p2,
      alt: "Placas em fachada de grande porte",
      slug: "placas",
      label: "Placas",
    },
    {
      src: p3,
      alt: "Totem vertical iluminado",
      slug: "totens",
      label: "Totens",
    },
    {
      src: p4,
      alt: "Adesivação em ambiente interno",
      slug: "adesivacao",
      label: "Adesivação",
    },
  ];

  return (
    <section
      id="portfolio"
      className="border-t border-border bg-surface py-16 sm:py-20 md:py-32"
    >
      <div className="container-rcl">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Portfólio</SectionLabel>
            <h2 className="font-display text-[1.65rem] font-bold leading-[1.15] sm:text-3xl md:text-5xl">
              Projetos que posicionam marcas no ponto de venda.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Cada projeto representa o posicionamento estratégico de uma marca no
            ponto de venda — pensado, produzido e instalado pela nossa equipe.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {items.map((img) => (
            <Link
              key={img.slug}
              to="/portfolio/$category"
              params={{ category: img.slug }}
              className="group relative block overflow-hidden rounded-xl border border-border bg-background"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={1024}
                height={1024}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-90 transition group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-4 sm:p-5">
                <span className="font-display text-sm font-semibold tracking-tight sm:text-base">
                  {img.label}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-brand">
                  Ver galeria
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Segments() {
  const segments = [
    { icon: Building2, label: "Varejo" },
    { icon: ShieldCheck, label: "Franquias" },
    { icon: Hammer, label: "Saúde" },
    { icon: Sparkles, label: "Alimentação" },
    { icon: Users, label: "Corporativo" },
  ];
  return (
    <section className="border-t border-border bg-surface py-16 sm:py-20 md:py-24">
      <div className="container-rcl">
        <div className="max-w-2xl">
          <SectionLabel>Segmentos atendidos</SectionLabel>
          <h2 className="font-display text-[1.65rem] font-bold leading-[1.15] sm:text-3xl md:text-5xl">
            Atuamos em segmentos que exigem padrão e escala.
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 md:mt-12 md:grid-cols-5">
          {segments.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-card px-4 py-6 text-center transition hover:border-brand/60 hover:bg-background sm:gap-4 sm:px-6 sm:py-8"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background transition group-hover:border-brand/60 sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 text-brand" strokeWidth={1.5} />
              </span>
              <span className="font-display text-sm font-semibold tracking-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstagramStrip() {
  const row1 = [p7, p8, p9, p10, p11, p12, p13, p14];
  const row2 = [p15, p16, p17, p18, p19, p20, p21, p22];
  return (
    <section id="instagram" className="overflow-hidden border-t border-border bg-background py-16 sm:py-20 md:py-24">
      <div className="container-rcl mb-8 text-center sm:mb-12">
        <SectionLabel>
          <span className="mx-auto inline-flex items-center gap-2">
            <Instagram className="h-3.5 w-3.5" /> @rclletreiros
          </span>
        </SectionLabel>
        <h2 className="font-display text-[1.65rem] font-bold leading-[1.15] sm:text-3xl md:text-5xl">
          Acompanhe nosso <span className="text-brand">Instagram</span>
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Bastidores de produção, instalações e projetos entregues — atualizado toda semana.
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        <MarqueeRow images={row1} duration={50} />
        <MarqueeRow images={row2} duration={65} reverse />
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://instagram.com/rclletreiros"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition hover:border-brand hover:text-brand"
        >
          <Instagram className="h-4 w-4" />
          Seguir no Instagram
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

function MarqueeRow({
  images,
  duration,
  reverse = false,
}: {
  images: string[];
  duration: number;
  reverse?: boolean;
}) {
  const loop = [...images, ...images];
  return (
    <div className="group relative overflow-hidden">
      <div
        className="flex w-max gap-3 sm:gap-4"
        style={{
          animation: `${reverse ? "marquee-reverse" : "marquee"} ${duration}s linear infinite`,
        }}
      >
        {loop.map((src, i) => (
          <div
            key={i}
            className="relative h-40 w-56 shrink-0 overflow-hidden rounded-xl border border-border bg-surface sm:h-48 sm:w-64 md:h-56 md:w-72"
          >
            <img
              src={src}
              alt="Projeto RCL no Instagram"
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <section id="contato" className="relative overflow-hidden border-y border-border bg-surface py-16 sm:py-20 md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, var(--brand) 0, transparent 40%), radial-gradient(circle at 80% 30%, var(--brand) 0, transparent 35%)",
        }}
      />
      <div className="container-rcl text-center">
        <SectionLabel>
          <span className="mx-auto">Vamos conversar</span>
        </SectionLabel>
        <h2 className="mx-auto max-w-3xl font-display text-[1.85rem] font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-6xl">
          Transforme sua fachada em um{" "}
          <span className="text-brand">diferencial competitivo.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground sm:mt-6 sm:text-base">
          Conte com a RCL para um atendimento estratégico e uma entrega
          completa, do projeto à instalação.
        </p>
        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex min-h-[52px] w-full max-w-sm items-center justify-center gap-3 rounded-full bg-brand px-6 py-4 text-sm font-semibold text-brand-foreground transition hover:opacity-90 sm:w-auto sm:px-8 sm:py-5 sm:text-base"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Solicitar orçamento no WhatsApp
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10 sm:py-14 md:py-16">
      <div className="container-rcl">
        <div className="flex flex-col items-center text-center">
          <div className="font-display text-2xl font-bold">
            RCL<span className="text-brand">.</span>
          </div>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Comunicação Visual
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Fachadas e projetos de comunicação visual com produção própria,
            atendimento estratégico e instalação completa em todo o RJ.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-8 text-center sm:mt-12 sm:grid-cols-3 sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Endereço
            </h4>
            <p className="mt-3 flex items-start justify-center gap-2 text-sm sm:justify-start">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>Rua Sariema, 104<br />Olaria — Rio de Janeiro / RJ</span>
            </p>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Contato
            </h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center justify-center gap-2 sm:justify-start">
                <Phone className="h-4 w-4 text-brand" />
                <a href="tel:+552120511881" className="hover:text-brand">(21) 2051-1881</a>
              </li>
              <li className="flex items-center justify-center gap-2 sm:justify-start">
                <Mail className="h-4 w-4 text-brand" />
                <a href="mailto:rcl.atendimento@gmail.com" className="hover:text-brand">
                  rcl.atendimento@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center gap-2 sm:justify-start">
                <Instagram className="h-4 w-4 text-brand" />
                <a
                  href="https://instagram.com/rclletreiros"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand"
                >
                  @rclletreiros
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Atendimento
            </h4>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-foreground hover:text-brand"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp comercial
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© 2011 - RCL Comunicação Visual. Todos os direitos reservados.</span>
          <span>Rio de Janeiro · RJ</span>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lg shadow-black/40 transition hover:scale-105 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}
