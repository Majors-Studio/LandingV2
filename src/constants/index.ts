import { MetaType } from "@/models/index"
import {
  ProjectBrand,
  ProjectInfoInterface,
  ProjectType,
} from "@/models/ProjectInfo"
import { PREFIX } from "@/utils/imagePrefixes"

export const BRAND_NAME = "FIAT"
export const PAGE_TITLE = `${BRAND_NAME} Titano`

export const project: ProjectInfoInterface = {
  year: "2024",
  version: "1.5",
  debug: true,
  product: "titano",
  brand: ProjectBrand.FIAT,
  type: ProjectType.LANDING_PAGE,
  url: "https://titano.fiat.com.br",
}

export const metaTags: MetaType = {
  description:
    "Exclusiva, poderosa e tecnológica! Chegou a Fiat Titano, uma picape com alta capacidade Off-Road, pronta para atuar no agro e em terrenos desafiadores. Conheça agora!",
  title: "Conheça a nova Fiat Titano | FIAT",
  brandName: "Fiat",
  productName: "Titano",
  heading: "Fiat Titano",
  image: `${PREFIX}og-image.webp`,
  twitter: {
    card: "summary",
    site: "@fiat",
    imageAlt: "Fiat Titano",
    image: `${PREFIX}og-image.webp`,
  },
  facebook: {
    type: "website",
    image: `${PREFIX}og-image.webp`,
    imageAlt: "Fiat Titano",
    imageWidth: "1200",
    imageHeight: "630",
  },
  url: "https://titano.fiat.com.br",
  imageAlt: "Fiat Titano",
}

export const STORAGE_PREFIX = "@digital_code/"

export const brandLinks = {
  mainUrl: "https://www.fiat.com.br",
  privacyPolicy: "https://www.fiat.com.br/politica-de-privacidade.html",
  twitter: "https://twitter.com/fiatbr",
  facebook: "https://www.facebook.com/fiatbr",
  instagram: "https://www.instagram.com/fiatbr",
  youtube: "https://www.youtube.com/c/fiatbr/featured",
}

export * as menu from "../data/menu.data"
