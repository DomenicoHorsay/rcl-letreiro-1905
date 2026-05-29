import letreiro1 from "@/assets/letreiro/letreiro-1.jpg";
import letreiro2 from "@/assets/letreiro/letreiro-2.jpg";
import letreiro3 from "@/assets/letreiro/letreiro-3.jpg";
import letreiro4 from "@/assets/letreiro/letreiro-4.jpg";
import letreiro5 from "@/assets/letreiro/letreiro-5.jpg";
import letreiro6 from "@/assets/letreiro/letreiro-6.jpg";
import letreiro7 from "@/assets/letreiro/letreiro-7.jpg";
import letreiro8 from "@/assets/letreiro/letreiro-8.jpg";
import letreiro9 from "@/assets/letreiro/letreiro-9.jpg";
import letreiro10 from "@/assets/letreiro/letreiro-10.jpg";
import letreiro11 from "@/assets/letreiro/letreiro-11.jpg";
import letreiro12 from "@/assets/letreiro/letreiro-12.jpg";
import letreiro13 from "@/assets/letreiro/letreiro-13.jpg";
import letreiro14 from "@/assets/letreiro/letreiro-14.jpg";
import letreiro15 from "@/assets/letreiro/letreiro-15.jpg";
import letreiro16 from "@/assets/letreiro/letreiro-16.jpg";
import letreiro17 from "@/assets/letreiro/letreiro-17.jpg";
import letreiro18 from "@/assets/letreiro/letreiro-18.jpg";
import letreiro19 from "@/assets/letreiro/letreiro-19.jpg";
import letreiro20 from "@/assets/letreiro/letreiro-20.jpg";
import letreiro21 from "@/assets/letreiro/letreiro-21.jpg";
import letreiro22 from "@/assets/letreiro/letreiro-22.jpg";
import letreiro23 from "@/assets/letreiro/letreiro-23.jpg";
import letreiro24 from "@/assets/letreiro/letreiro-24.jpg";
import letreiro25 from "@/assets/letreiro/letreiro-25.jpg";
import letreiro26 from "@/assets/letreiro/letreiro-26.jpg";
import letreiro27 from "@/assets/letreiro/letreiro-27.jpg";
import letreiro28 from "@/assets/letreiro/letreiro-28.jpg";
import letreiro29 from "@/assets/letreiro/letreiro-29.jpg";
import letreiro30 from "@/assets/letreiro/letreiro-30.jpg";
import letreiro31 from "@/assets/letreiro/letreiro-31.jpg";
import letreiro32 from "@/assets/letreiro/letreiro-32.jpg";


import placa1 from "@/assets/placas/placa-1.jpg";
import placa2 from "@/assets/placas/placa-2.jpg";
import placa3 from "@/assets/placas/placa-3.jpg";
import placa4 from "@/assets/placas/placa-4.jpg";
import placa5 from "@/assets/placas/placa-5.jpg";
import placa6 from "@/assets/placas/placa-6.jpg";
import placa7 from "@/assets/placas/placa-7.jpg";
import placa8 from "@/assets/placas/placa-8.jpg";
import placa9 from "@/assets/placas/placa-9.jpg";
import placa10 from "@/assets/placas/placa-10.jpg";
import placa11 from "@/assets/placas/placa-11.jpg";
import placa12 from "@/assets/placas/placa-12.jpg";
import placa13 from "@/assets/placas/placa-13.jpg";
import placa14 from "@/assets/placas/placa-14.jpg";
import placa15 from "@/assets/placas/placa-15.jpg";
import placa16 from "@/assets/placas/placa-16.jpg";
import placa17 from "@/assets/placas/placa-17.jpg";
import placa20 from "@/assets/placas/placa-20.jpg";
import placa21 from "@/assets/placas/placa-21.jpg";
import placa22 from "@/assets/placas/placa-22.jpg";
import placa23 from "@/assets/placas/placa-23.jpg";
import placa24 from "@/assets/placas/placa-24.jpg";
import placa25 from "@/assets/placas/placa-25.jpg";
import placa26 from "@/assets/placas/placa-26.jpg";
import placa27 from "@/assets/placas/placa-27.jpg";
import placa28 from "@/assets/placas/placa-28.jpg";



import totem1 from "@/assets/totens/toten-1.jpg";
import totem2 from "@/assets/totens/toten-2.jpg";
import totem3 from "@/assets/totens/toten-3.jpg";
import totem4 from "@/assets/totens/toten-4.jpg";
import totem5 from "@/assets/totens/toten-5.jpg";
import totem6 from "@/assets/totens/toten-6.jpg";
import totem7 from "@/assets/totens/toten-7.jpg";
import totem8 from "@/assets/totens/toten-8.jpg";
import totem9 from "@/assets/totens/toten-9.jpg";
import totem10 from "@/assets/totens/toten-10.jpg";


import adesivo1 from "@/assets/adesivacao/adesivo-1.jpg";
import adesivo2 from "@/assets/adesivacao/adesivo-2.jpg";
import adesivo3 from "@/assets/adesivacao/adesivo-3.jpg";
import adesivo4 from "@/assets/adesivacao/adesivo-4.jpg";
import adesivo5 from "@/assets/adesivacao/adesivo-5.jpg";
import adesivo6 from "@/assets/adesivacao/adesivo-6.jpg";
import adesivo7 from "@/assets/adesivacao/adesivo-7.jpg";

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
    slug: "letreiros",
    title: "Letreiros",
    description:
      "Projetos de letras caixa, painéis luminosos, instalação LED, montagem e acabamento premium.",
    cover: letreiro6,
    images: [
{
  src: letreiro1,
  alt: "Letreiro luminoso desenvolvido para destacar a identidade da marca.",
},
{
  src: letreiro3,
  alt: "Projeto de comunicação visual com alto impacto visual.",
},
{
  src: letreiro4,
  alt: "Solução personalizada para valorização da fachada comercial.",
},
{
  src: letreiro5,
  alt: "Presença visual que fortalece o reconhecimento da marca.",
},
{
  src: letreiro6,
  alt: "Acabamento sofisticado para ambientes corporativos e comerciais.",
},
{
  src: letreiro7,
  alt: "Projeto executado com precisão e excelência em cada detalhe.",
},
{
  src: letreiro8,
  alt: "Comunicação visual planejada para gerar destaque e visibilidade.",
},
{
  src: letreiro9,
  alt: "Design moderno aliado à funcionalidade e elegância.",
},
{
  src: letreiro10,
  alt: "Marca em evidência através de uma comunicação visual estratégica.",
},
{
  src: letreiro11,
  alt: "Projeto exclusivo criado para fortalecer a presença da marca.",
},
{
  src: letreiro12,
  alt: "Comunicação visual desenvolvida para máxima visibilidade.",
},
{
  src: letreiro13,
  alt: "Letreiro corporativo com acabamento de alto padrão.",
},
{
  src: letreiro14,
  alt: "Solução visual personalizada para empresas e comércios.",
},
{
  src: letreiro15,
  alt: "Identidade visual aplicada com qualidade e precisão.",
},
{
  src: letreiro16,
  alt: "Projeto luminoso criado para gerar reconhecimento da marca.",
},
{
  src: letreiro17,
  alt: "Letras caixa modernas com excelente acabamento.",
},
{
  src: letreiro18,
  alt: "Comunicação visual elegante para ambientes comerciais.",
},
{
  src: letreiro19,
  alt: "Projeto executado para valorizar a fachada do negócio.",
},
{
  src: letreiro20,
  alt: "Solução visual desenvolvida para fortalecer a imagem da empresa.",
},
{
  src: letreiro21,
  alt: "Letreiro personalizado com design moderno e sofisticado.",
},
{
  src: letreiro22,
  alt: "Projeto comercial com iluminação e acabamento premium.",
},
{
  src: letreiro23,
  alt: "Presença visual marcante para fortalecer a identidade da marca.",
},
{
  src: letreiro24,
  alt: "Comunicação visual estratégica para destacar o negócio.",
},
{
  src: letreiro25,
  alt: "Projeto desenvolvido para gerar impacto visual e reconhecimento.",
},
{
  src: letreiro26,
  alt: "Acabamento profissional aliado à comunicação visual eficiente.",
},
{
  src: letreiro27,
  alt: "Solução criativa para destacar marcas em ambientes comerciais.",
},
{
  src: letreiro28,
  alt: "Projeto luminoso executado com atenção aos mínimos detalhes.",
},
{
  src: letreiro29,
  alt: "Letras caixa produzidas com materiais de alta qualidade.",
},
{
  src: letreiro30,
  alt: "Comunicação visual pensada para valorizar a marca e o ambiente.",
},
{
  src: letreiro31,
  alt: "Projeto de destaque desenvolvido para fortalecer a presença visual.",
},
{
  src: letreiro32,
  alt: "Letreiro premium criado para ampliar a visibilidade da empresa.",
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
  alt: "Placa personalizada desenvolvida para fortalecer a identidade visual.",
},
{
  src: placa2,
  alt: "Comunicação visual com acabamento profissional e alta durabilidade.",
},
{
  src: placa3,
  alt: "Projeto criado para ampliar a visibilidade da marca.",
},
{
  src: placa4,
  alt: "Identificação corporativa com design moderno e elegante.",
},
{
  src: placa5,
  alt: "Placa comercial produzida com materiais de alta qualidade.",
},
{
  src: placa6,
  alt: "Solução visual estratégica para empresas e estabelecimentos.",
},
{
  src: placa7,
  alt: "Projeto executado com precisão e excelente acabamento.",
},
{
  src: placa8,
  alt: "Comunicação visual desenvolvida para gerar reconhecimento.",
},
{
  src: placa9,
  alt: "Placa institucional que transmite credibilidade e confiança.",
},
{
  src: placa10,
  alt: "Destaque visual pensado para valorizar o negócio.",
},
{
  src: placa11,
  alt: "Projeto personalizado para fortalecer a presença da marca.",
},
{
  src: placa12,
  alt: "Comunicação visual criada para máxima visibilidade.",
},
{
  src: placa13,
  alt: "Placa corporativa com acabamento premium.",
},
{
  src: placa14,
  alt: "Solução desenvolvida para destacar empresas e comércios.",
},
{
  src: placa15,
  alt: "Identificação visual produzida com qualidade e precisão.",
},
{
  src: placa16,
  alt: "Projeto criado para gerar impacto e reconhecimento visual.",
},
{
  src: placa17,
  alt: "Placa personalizada com design moderno e sofisticado.",
},

{
  src: placa20,
  alt: "Solução visual criada para fortalecer a imagem da marca.",
},
{
  src: placa21,
  alt: "Placa comercial desenvolvida para máxima visibilidade.",
},
{
  src: placa22,
  alt: "Projeto institucional com acabamento de alto padrão.",
},
{
  src: placa23,
  alt: "Comunicação visual estratégica para empresas e negócios.",
},
{
  src: placa24,
  alt: "Identificação corporativa com excelente acabamento.",
},
{
  src: placa25,
  alt: "Projeto desenvolvido para destacar a presença da marca.",
},
{
  src: placa26,
  alt: "Placa produzida com materiais resistentes e duráveis.",
},
{
  src: placa27,
  alt: "Solução personalizada para comunicação visual eficiente.",
},
{
  src: placa28,
  alt: "Projeto visual criado para ampliar o reconhecimento da empresa.",
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
  alt: "Totem corporativo desenvolvido para máxima visibilidade.",
},
{
  src: totem2,
  alt: "Estrutura personalizada para fortalecer a presença da marca.",
},
{
  src: totem3,
  alt: "Comunicação visual vertical com acabamento premium.",
},
{
  src: totem4,
  alt: "Projeto de destaque para identificação empresarial.",
},
{
  src: totem5,
  alt: "Totem criado para gerar impacto e reconhecimento visual.",
},
{
  src: totem6,
  alt: "Solução moderna para sinalização e posicionamento da marca.",
},
{
  src: totem7,
  alt: "Projeto executado com excelência e alta durabilidade.",
},
{
  src: totem8,
  alt: "Estrutura visual planejada para grandes áreas comerciais.",
},
{
  src: totem9,
  alt: "Totem personalizado que reforça a identidade da empresa.",
},
{
  src: totem10,
  alt: "Presença marcante através de comunicação visual estratégica.",
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
  alt: "Adesivação personalizada para ambientes comerciais e corporativos.",
},
{
  src: adesivo2,
  alt: "Projeto visual aplicado com precisão e acabamento profissional.",
},
{
  src: adesivo3,
  alt: "Solução desenvolvida para fortalecer a identidade da marca.",
},
{
  src: adesivo4,
  alt: "Aplicação de adesivos criada para gerar impacto visual.",
},
{
  src: adesivo5,
  alt: "Comunicação visual moderna para vitrines e espaços internos.",
},
{
  src: adesivo6,
  alt: "Projeto personalizado para transformar ambientes comerciais.",
},
{
  src: adesivo7,
  alt: "Adesivação estratégica para ampliar a presença da marca.",
},
    ],
  },
];

export function getCategory(slug: string) {
  return portfolioCategories.find(
    (category) => category.slug === slug
  );
}