import { performance } from "@/assets/productDetails"
import { PRODUCT_DETAILS_REF } from "@/data/menu.data"
import { MenuLabels } from "@/models"
import formatString from "@/utils/formatString"

export interface ProductTabSlide {
  id: string
  index?: number
  title: string
  titleToFront: JSX.Element
  altImage: string
  titleImage: string
  slug: string
  linkBtn?: string
  labelBtn?: string
  titleBtn?: string
  altBtn?: string
  titleFirst?: string
  titleSecond?: string
  highLightedFirst: boolean
  breakTitle?: boolean
  descriptionDesktop: JSX.Element
  descriptionMobile: JSX.Element
  parentSlug?: string
  //image: IncludePrefixResponsiveSizes;
  image: string
  vimeoId?: {
    mobile: string
    desktop: string
  }
  tabId: string
  fileUrl?: string
  videoId?: string
}

export interface ProductTab {
  id: string
  title: string
  slug: string
  parentSlug?: string
  children: Omit<ProductTabSlide, "tabId">[]
}

const PREFIX = `${process.env.BASE_PREFIX}images/ProductDetails/`
const QUERO_LINK = "/"
const QUERO_LABEL = "Eu quero"

const detailTitle = [{ title: "performance", titleToFront: "Performance" }]
export const productDetails: ProductTab[] = [
  {
    id: detailTitle[0].title,
    title: detailTitle[0].titleToFront,
    slug: detailTitle[0].title,
    children: [
      {
        id: formatString(""),
        slug: formatString(""),
        title: "",
        titleToFront: <></>,
        highLightedFirst: true,
        parentSlug: detailTitle[0].title,
        altImage: "",
        titleImage: "",
        descriptionDesktop: <></>,
        descriptionMobile: <></>,
        image: performance[0].fullPath,
      },
    ],
  },
]

export const getProductDetails = (pDetails: ProductTab[]): MenuLabels[] => {
  return pDetails.reduce<MenuLabels[]>((prev, item) => {
    return [
      ...prev,
      {
        numberId: 0,
        id: `data-${item.id}`,
        label: item.title,
        slug: item.slug,
        url: `/${item.slug}`,
        prefixRelation: PRODUCT_DETAILS_REF,
        isDetails: true,
      },
    ]
  }, [])
}

let index = -1

export const allSlides: ProductTabSlide[] = productDetails.reduce(
  (prev, curr) => {
    return [
      ...prev,
      ...curr.children.map((c) => {
        index++
        return {
          ...c,
          index,
          parentSlug: curr.slug,
          tabId: curr.id,
        }
      }),
    ]
  },
  [] as ProductTabSlide[]
)

export default productDetails
