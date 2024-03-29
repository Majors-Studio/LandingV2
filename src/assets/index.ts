import {
  BRAND_PREFIX,
  FILE_PREFIX,
  PREFIX,
  includeResponsive,
} from "@/utils/imagePrefixes";

const INTERNAL_360_PATH = `${PREFIX}internal360/desktop/`;
const INTERNAL_360_PATH_MOBILE = `${PREFIX}internal360/mobile/`;

const brand = {
  logoHeaderMobile: `${BRAND_PREFIX}heroLogoMobile.svg`,
  logoNav: `${BRAND_PREFIX}heroLogo.svg`,
  logoHeader: `${BRAND_PREFIX}brand/logoHeader.webp`,
  logoProduct: `${BRAND_PREFIX}brand/logoProduct.webp`,
  logoProductDark: `${BRAND_PREFIX}brand/logoProductDark.webp`,
  logoHeaderDesktop: `${BRAND_PREFIX}brand/logoHeaderDesktop.webp`,
  whatsBtn: `${BRAND_PREFIX}/whatsapp.svg`,
  logoFooter: `${BRAND_PREFIX}/logoFooter.svg`,
  fiatSimbol: `${PREFIX}brand/shortFiatIcon.svg`,
};

const ui = {
  menuClosed: `${PREFIX}ui/menuClosed.svg`,
  pointer: `${PREFIX}ui/pointer.webp`,
  accordionChevron: `${PREFIX}ui/accordionChevron.svg`,
  ibama: `${PREFIX}ui/ibama.svg`,
  arrowNext: `${PREFIX}ui/arrowNext.svg`,
  arrowPrev: `${PREFIX}ui/arrowPrev.svg`,
  plus: `${PREFIX}ui/plus.svg`,
  arrowVersions: `${PREFIX}ui/arrowversions.svg`,

  iconTwitter: `${PREFIX}ui/x.svg`,
  iconTFacebook: `${PREFIX}ui/facebook.svg`,
  iconYt: `${PREFIX}ui/youtube.svg`,
  iconInstagram: `${PREFIX}ui/instagram.svg`,
};

const stamps = {
  stamp1: `${PREFIX}stamps/stamp-1.webp`,
  stamp2: `${PREFIX}stamps/stamp-2.webp`,
  stamp3: `${PREFIX}stamps/stamp-3.webp`,
  stamp4: `${PREFIX}stamps/stamp-4.webp`,
};

const Photos = {
  backgroundImage: includeResponsive("Photos/nova-rampage-roda", "webp"),
  backgroundImage2: includeResponsive("Photos/nova-rampage-traseira", "webp"),
};
const ProdDetails = {
  backgroundImage: includeResponsive(
    "ProductDetails/background/bg-features-rampage",
    "webp"
  ),
};

const panoramaImage = `${PREFIX}Panorama/image.jpg`;

const panoramaImagePreview = `${PREFIX}Panorama/preview.png`;

const files = {
  accessoriesCatalogue: `${FILE_PREFIX}ram-rampage.pdf`,
};

export * as productDetails from "./productDetails";

export {
  INTERNAL_360_PATH,
  INTERNAL_360_PATH_MOBILE,
  Photos,
  ProdDetails,
  brand,
  files,
  panoramaImage,
  panoramaImagePreview,
  stamps,
  ui,
};
