import {
  ProjectBrand,
  ProjectInfoInterface,
  ProjectType,
} from "@/models/ProjectInfo"
import { PREFIX } from "@/utils/imagePrefixes"
import { Metadata } from "next"

export const BRAND_NAME = "MAJORS SOLUTIONS"
export const PAGE_TITLE = `${BRAND_NAME} | Conheça o seu futuro!`

export const project: ProjectInfoInterface = {
  year: "2024",
  version: "2",
  debug: true,
  product: "",
  brand: ProjectBrand.MAJORS_SOLUTIONS,
  type: ProjectType.LANDING_PAGE,
  url: "https://www.majorssolutions.com.br",
}

export const metaTags: Metadata = {
  description:
    "Exclusiva, poderosa e tecnológica! Chegou a Fiat Titano, uma picape com alta capacidade Off-Road, pronta para atuar no agro e em terrenos desafiadores. Conheça agora!",
  title: "Conheça a nova Fiat Titano | FIAT",
  twitter: {
    card: "summary",
    site: "@fiat",
  },
  openGraph: {
    title: "Conheça a nova Fiat Titano | FIAT",
    type: "website",
  },
  creator: "MAJORS SOLUTIONS",
  authors: [
    {
      name: "MAJORS SOLUTIONS",
      url: "https://www.majorssolutions.com.br",
    },
    {
      name: "João Vinicius Vitral",
      url: "https://www.linkedin.com/in/joaoviniciusvitral/",
    },
    {
      name: "Marcelo Bracet",
      url: "https://www.linkedin.com/in/marcelobracet/",
    },
  ],
  keywords: [
    "fiat",
    "titano",
    "picape",
    "off-road",
    "agro",
    "tecnologia",
    "desempenho",
    "conforto",
    "segurança",
  ],
  category: "Automotive",
  bookmarks: ["fiat", "titano", "picape", "off-road", "agro"],
  icons: [
    {
      url: `${PREFIX}/favicon.ico`,
      sizes: "16x16",
      type: "image/x-icon",
    },
    {
      url: `${PREFIX}/favicon.ico`,
      sizes: "32x32",
      type: "image/x-icon",
    },
    {
      url: `${PREFIX}/favicon.ico`,
      sizes: "96x96",
      type: "image/x-icon",
    },
  ],

  abstract:
    "Exclusiva, poderosa e tecnológica! Chegou a Fiat Titano, uma picape com alta capacidade Off-Road, pronta para atuar no agro e em terrenos desafiadores. Conheça agora!",
  alternates: {
    canonical: "https://titano.fiat.com.br",
    languages: {
      br: "https://titano.fiat.com.br",
    },
  },
  classification: "Automotive",
  appleWebApp: {
    title: "Conheça a nova Fiat Titano | FIAT",
    statusBarStyle: "black",
  },
  applicationName: "Fiat Titano",
  appLinks: {
    web: {
      url: "https://titano.fiat.com.br",
    },
  },
  robots: "index, follow",
  archives: "none",
  assets: "none",
  formatDetection: {
    address: false,
    date: false,
    email: false,
    telephone: false,
    url: false,
  },
  generator: "MAJORS SOLUTIONS",
  manifest: `${PREFIX}/manifest.json`,
  publisher: "MAJORS SOLUTIONS",
  referrer: "no-referrer",
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
