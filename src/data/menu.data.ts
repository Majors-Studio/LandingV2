import { MenuCTAs, MenuLabels } from "@/models";

export const PRODUCT_DETAILS_PREFIX = "";
export const PRODUCT_DETAILS_REF: MenuLabels = {
  numberId: 5,
  id: "",
  label: "",
  slug: PRODUCT_DETAILS_PREFIX,
  url: `/${PRODUCT_DETAILS_PREFIX}`,
  nestedPrefix: PRODUCT_DETAILS_PREFIX,
};

export const links = {
  reserve: "/",
  financiamento:
    "/",
  agendarTeste: "/",
  monte: "/",
  concessionarias: "/",
  compre: "/",
  ofertas: "/",
};

export const dataMenuLabels: () => MenuLabels[] = () => [
  {
    numberId: 0,
    id: "datamenu-0",
    label: "Majors Solutions",
    url: "/",
    slug: "",
  },
];

export const dataMenuButtons: MenuCTAs[] = [
  {
    id: "0",
    label: "",
    url: links.monte,
  },
  {
    id: "1",
    label: "",
    url: links.compre,
  },
];
