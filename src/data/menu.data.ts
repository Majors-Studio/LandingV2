import { MenuCTAs, MenuLabels } from "@/models";
import productDetails, { ProductTab } from "./product-details.data";

export const PRODUCT_DETAILS_PREFIX = "";
export const PRODUCT_DETAILS_REF: MenuLabels = {
  numberId: 5,
  id: "",
  label: "",
  slug: PRODUCT_DETAILS_PREFIX,
  url: `/${PRODUCT_DETAILS_PREFIX}`,
  nestedPrefix: PRODUCT_DETAILS_PREFIX,
};

const getProductDetails = (pDetails: ProductTab[]): MenuLabels[] => {
  if (!pDetails) {
    return [];
  }
  return pDetails.reduce((prev, item, index) => {
    return [
      ...prev,
      {
        id: `data-menu-details-${index}`,
        label: item.title,
        slug: `${item.slug}`,
        url: `${item.slug}`,
        nestedPrefix: PRODUCT_DETAILS_PREFIX,
        reference: PRODUCT_DETAILS_REF,
        tabId: item.id,
        isDetails: true,
      } as MenuLabels,
    ];
  }, [] as MenuLabels[]);
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

export const dataMenuLabelMobile: () => MenuLabels[] = () => [
  {
    numberId: 0,
    id: "datamenu-0",
    label: "Majors Solutions",
    url: "/",
    slug: "",
  },
];

export const dataMenuLabels: () => MenuLabels[] = () => [
  {
    numberId: 0,
    id: "datamenu-0",
    label: "Majors Solutions",
    url: "/",
    slug: "",
  },
  ...getProductDetails(productDetails),
];

export const dataMenuButtonsMobile: MenuCTAs[] = [
  {
    id: "0",
    label: "",
    url: links.monte,
  },
];

export const dataFooterButtonsMobile: MenuCTAs[] = [
  {
    id: "0",
    label: "",
    url: links.monte,
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
