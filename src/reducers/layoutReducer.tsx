import { reducerActionType } from "@/types/reducerActionType"

export interface LayoutType {
  heroIndex: number
  isDesktop: boolean
  isMobile: boolean
  pageX: number
}

export const layoutInitialState: LayoutType = {
  heroIndex: 0,
  isDesktop: false,
  isMobile: false,
  pageX: 0,
}

export const layoutReducer = (
  state: LayoutType,
  action: reducerActionType
): any => {
  switch (action.type) {
    case "SET_HERO_INDEX": {
      return {
        ...state,
        heroIndex: action.payload.heroIndex,
      }
    }
    case "SET_IS_DESKTOP":
      return {
        ...state,
        isDesktop: action.payload.isDesktop,
      }
    case "SET_IS_MOBILE":
      return {
        ...state,
        isMobile: action.payload.isMobile,
      }
  }

  return state
}
