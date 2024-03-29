import {
  IncludePrefixResponsiveSizes,
  includeResponsive,
} from "@/utils/imagePrefixes";
import { HERO_ASSETS } from "@/assets/hero.assets";

export interface IHero {
  id: string;
  title: {
    desktop: string | JSX.Element;
    mobile: string | JSX.Element;
  };
  description: {
    desktop: string | JSX.Element;
    mobile: string | JSX.Element;
  };
  cardSrc: { desktop: string; mobile: string };
  backgrounds?: IncludePrefixResponsiveSizes[];
  src: { desktop: string; mobile: string };
  titleTag: string;
  altTag: string;
}

const STORIES_PREFIX = "Stories/";
const HERO_DESKTOP_PREFIX = "HeroDesktop/";
const BACKGROUNDS_PREFIX = `${HERO_DESKTOP_PREFIX}backgrounds/`;

export const dataHero: IHero[] = [
  {
    id: "0",
    title: {
      desktop: "Teste Título 01",
      mobile: "Teste Título 01",
    },
    description: {
      desktop: "Teste Descrição 01",
      mobile: "Teste Descrição 01",
    },
    titleTag: "Teste Título Tag 01",
    altTag:
      "Teste Alt Tag 01",
    cardSrc: {
      desktop: HERO_ASSETS.desktop.thumb.welcome,
      mobile: HERO_ASSETS.mobile.thumb.welcome,
    },
    src: {
      desktop: HERO_ASSETS.desktop.welcome,
      mobile: HERO_ASSETS.mobile.welcome,
    },
  },
  {
    id: "1",
    title: {
      desktop: "Teste Título 02",
      mobile: "Teste Título 02",
    },
    description: {
      desktop: "Teste Descrição 02",
      mobile: "Teste Descrição 02",
    },
    titleTag: "Teste Título Tag 02",
    altTag:
      "Teste Alt Tag 02",
    cardSrc: {
      desktop: HERO_ASSETS.desktop.thumb.welcome,
      mobile: HERO_ASSETS.mobile.thumb.welcome,
    },
    src: {
      desktop: HERO_ASSETS.desktop.welcome,
      mobile: HERO_ASSETS.mobile.welcome,
    },
  },
  {
    id: "2",
    title: {
      desktop: "Teste Título 03",
      mobile: "Teste Título 03",
    },
    description: {
      desktop: "Teste Descrição 03",
      mobile: "Teste Descrição 03",
    },
    titleTag: "Teste Título Tag 03",
    altTag:
      "Teste Alt Tag 03",
    cardSrc: {
      desktop: HERO_ASSETS.desktop.thumb.welcome,
      mobile: HERO_ASSETS.mobile.thumb.welcome,
    },
    src: {
      desktop: HERO_ASSETS.desktop.welcome,
      mobile: HERO_ASSETS.mobile.welcome,
    },
  },
  {
    id: "3",
    title: {
      desktop: "Teste Título 04",
      mobile: "Teste Título 04",
    },
    description: {
      desktop: "Teste Descrição 04",
      mobile: "Teste Descrição 04",
    },
    titleTag: "Teste Título Tag 04",
    altTag:
      "Teste Alt Tag 04",
    cardSrc: {
      desktop: HERO_ASSETS.desktop.thumb.welcome,
      mobile: HERO_ASSETS.mobile.thumb.welcome,
    },
    src: {
      desktop: HERO_ASSETS.desktop.welcome,
      mobile: HERO_ASSETS.mobile.welcome,
    },
  },
];
