import {
  IncludePrefixResponsiveSizes,
  includeResponsive,
} from "@/utils/imagePrefixes";
import { HERO_ASSETS } from "@/assets/hero.assets";

export interface IHero {
  id: string;
  title: string | JSX.Element;
  titleStories: string | JSX.Element;
  description: string | JSX.Element;
  descriptionStories: string | JSX.Element;
  cardTitle: string;
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
    title: <h1></h1>,
    titleStories: <></>,
    description: <></>,
    descriptionStories: <></>,
    titleTag: "",
    altTag:
      "",
    cardTitle: "",
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
