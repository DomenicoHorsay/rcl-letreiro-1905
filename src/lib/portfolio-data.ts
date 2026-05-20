import letreiro1 from "@/assets/letreiro/letreiro-1.jpg";
import letreiro2 from "@/assets/letreiro/letreiro-2.jpg";
import letreiro3 from "@/assets/letreiro/letreiro-3.jpg";
import letreiro4 from "@/assets/letreiro/letreiro-4.jpg";
import letreiro5 from "@/assets/letreiro/letreiro-5.jpg";
import letreiro6 from "@/assets/letreiro/letreiro-6.jpg";

import placa1 from "@/assets/placas/placa-1.jpg";
import placa2 from "@/assets/placas/placa-2.jpg";
import placa3 from "@/assets/placas/placa-3.jpg";

import totem1 from "@/assets/totens/totem-1.jpg";
import totem2 from "@/assets/totens/totem-2.jpg";
import totem3 from "@/assets/totens/totem-3.jpg";

import adesivo1 from "@/assets/adesivacao/adesivo-1.jpg";
import adesivo2 from "@/assets/adesivacao/adesivo-2.jpg";
import adesivo3 from "@/assets/adesivacao/adesivo-3.jpg";

import fachada1 from "@/assets/fachadas/fachada-1.jpg";
import fachada2 from "@/assets/fachadas/fachada-2.jpg";
import fachada3 from "@/assets/fachadas/fachada-3.jpg";
import fachada4 from "@/assets/fachadas/fachada-4.jpg";
import fachada5 from "@/assets/fachadas/fachada-5.jpg";

import sinalizacao1 from "@/assets/sinalizacao/sinalizacao-1.jpg";
import sinalizacao2 from "@/assets/sinalizacao/sinalizacao-2.jpg";
import sinalizacao3 from "@/assets/sinalizacao/sinalizacao-3.jpg";

export type PortfolioCategory = {
  slug: string;
  title: string;
  description: string;
  cover: string;

  images: {
    src: string;
    alt: string;
  }[];
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: "letreiro-luminoso",

    title: "Letreiro Luminoso",

    description:
      "Projetos de letras caixa, painéis luminosos, instalação LED, montagem e acabamento premium.",

    cover: letreiro6,

    images: [
      {
        src: letreiro1,
        alt: "Equipe realizando instalação de letreiro luminoso",
      },

      {
        src: letreiro2,
        alt: "Letras caixa sendo montadas em fachada",
      },

      {
        src: letreiro3,
        alt: "Estrutura de letreiro em processo de instalação",
      },

      {
        src: letreiro4,
        alt: "Projeto de comunicação visual em LED",
      },

      {
        src: letreiro5,
        alt: "Letreiro comercial iluminado",
      },

      {
        src: letreiro6,
        alt: "Projeto finalizado de letreiro luminoso",
      },
    ],
  },

  {
    slug: "placas",

    title: "Placas",

    description:
      "Placas comerciais, promocionais, institucionais e projetos de comunicação visual.",

    cover: placa1,

    images: [
      {
        src: placa1,
        alt: "Placa comercial externa personalizada",
      },

      {
        src: placa2,
        alt: "Placa institucional moderna",
      },

      {
        src: placa3,
        alt: "Placa empresarial de identificação",
      },
    ],
  },

  {
    slug: "totens",

    title: "Totens",

    description:
      "Totens empresariais, sinalização vertical e estruturas de destaque visual.",

    cover: totem1,

    images: [
      {
        src: totem1,
        alt: "Totem vertical iluminado",
      },

      {
        src: totem2,
        alt: "Totem externo comercial",
      },

      {
        src: totem3,
        alt: "Totem corporativo personalizado",
      },
    ],
  },

  {
    slug: "adesivacao",

    title: "Adesivação",

    description:
      "Adesivação profissional para vitrines, ambientes, fachadas e veículos.",

    cover: adesivo1,

    images: [
      {
        src: adesivo1,
        alt: "Adesivação de vitrine comercial",
      },

      {
        src: adesivo2,
        alt: "Aplicação de adesivo personalizado",
      },

      {
        src: adesivo3,
        alt: "Adesivação interna profissional",
      },
    ],
  },

  {
    slug: "fachadas",

    title: "Fachadas",

    description:
      "Projetos completos de fachadas comerciais com ACM, iluminação, instalação e acabamento premium.",

    cover: fachada5,

    images: [
      {
        src: fachada1,
        alt: "Equipe realizando instalação de fachada comercial",
      },

      {
        src: fachada2,
        alt: "Montagem de fachada em ACM",
      },

      {
        src: fachada3,
        alt: "Estrutura metálica para fachada",
      },

      {
        src: fachada4,
        alt: "Fachada comercial em fase de acabamento",
      },

      {
        src: fachada5,
        alt: "Projeto de fachada iluminada",
      },
    ],
  },

  {
    slug: "sinalizacao",

    title: "Sinalização",

    description:
      "Sinalização interna, externa e empresarial para empresas e ambientes corporativos.",

    cover: sinalizacao1,

    images: [
      {
        src: sinalizacao1,
        alt: "Sinalização corporativa interna",
      },

      {
        src: sinalizacao2,
        alt: "Placas de sinalização empresarial",
      },

      {
        src: sinalizacao3,
        alt: "Sinalização externa personalizada",
      },
    ],
  },
];

export function getCategory(slug: string) {
  return portfolioCategories.find(
    (category) => category.slug === slug
  );
}