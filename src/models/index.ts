/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import { IncludePrefixResponsiveSizes } from '@/utils/imagePrefixes';
import {
  StandardLonghandProperties,
  StandardShorthandProperties,
} from 'csstype';
import { MediaHTMLAttributes, MutableRefObject } from 'react';

interface TwitterMetatagInterface {
  card: 'summary';
  title?: string;
  description?: string;
  site?: string;
  imageAlt?: string;
  image: string;
}

interface FacebookMetatagInterface {
  type: 'website';
  title?: string;
  description?: string;
  app_id?: string;
  imageAlt?: string;
  image: string;
  imageWidth: '1200';
  imageHeight: '630';
}

export interface NavRefs {
  [x: string]: MutableRefObject<unknown>;
}

interface featureProps {
  title?: string;
  content?: string | JSX.Element | boolean;
  contentIcon?: string;
  hasCheck?: boolean;
}

export interface Features {
  id: string;
  title: string;
  icon: string;
  featuresContent: featureProps[];
}
export interface ComparativeCTA {
  id: string;
  label: string;
  url: string;
  backgroundColor: string;
  color: string;
  excludeArrow: boolean;
}

export interface ComparativeProps {
  id: string;
  versionName: string;
  features: Features[];
  cta: ComparativeCTA[];
  pdf: string;
}

export interface IVersionFragment {
  id: string;
  name: string;
  nameParts: {
    first: string;
    second: string;
  };
  short: string;
  details: string[];
  text: 'dark' | 'light';
}

export interface IVersion extends IVersionFragment {
  fullName: string;
}

export interface MenuLabels {
  numberId: number;
  id: string;
  slug: string;
  label: string;
  url: string;
  reference?: MenuLabels;
  prefixRelation?: MenuLabels;
  nestedPrefix?: string;
  tabId?: string;
  isDetails?: true;
}

export interface MenuCTAs {
  id: string;
  label: string;
  url: string;
  iconCode?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

export interface MetaType {
  title: string;
  description: string;
  url: string;
  heading: string;
  brandName?: string;
  twitter: TwitterMetatagInterface;
  facebook: FacebookMetatagInterface;
  image: string;
  imageAlt: string;
  productName: string;
}

export type AnimationType = 'top' | 'slide-in' | 'scale' | 'fade-in';

export interface StoriesBackgroundStyleProps {
  backgroundRepeat?: StandardLonghandProperties<
    string | number,
    string & unknown
  >['backgroundRepeat'];
  backgroundPosition?: StandardShorthandProperties<
    string | number,
    string & unknown
  >['backgroundPosition'];
  backgroundImage?: StandardLonghandProperties<
    string | number,
    string & unknown
  >['backgroundImage'];
  backgroundColor?: StandardLonghandProperties<
    string | number,
    string & unknown
  >['backgroundColor'];
  backgroundSize?: StandardLonghandProperties<
    string | number,
    string & unknown
  >['backgroundSize'];
}

export interface StoriesVideoProps {
  src?: string;
  autoPlay?: MediaHTMLAttributes<HTMLVideoElement>['autoPlay'];
  muted?: MediaHTMLAttributes<HTMLVideoElement>['muted'];
  loop?: MediaHTMLAttributes<HTMLVideoElement>['loop'];
}

export interface StoriesItemProps {
  titleTag: string | undefined;
  altTag: string | undefined;
  nextTitle: string;
  title: string | JSX.Element;
  title2?: string;
  scrollCtaOrientation?: 'horizontal' | 'vertical';
  durationInS: number;
  body: JSX.Element;
  showNext?: boolean;
  includeGradient?: boolean;
  videoProps?: StoriesVideoProps;
  teste: string;
  background?: {
    color?: string;
    style?: StoriesBackgroundStyleProps;
    src?: IncludePrefixResponsiveSizes;
  };
}

export interface DisplayItemProps {
  altteste: string | undefined;
  titleteste: string | undefined;
  body: JSX.Element;
  title?: string;
  videoProps?: StoriesVideoProps;
  activeIndex?: number;
  teste: string;
  background?: {
    color?: string;
    style?: StoriesBackgroundStyleProps;
    src?: IncludePrefixResponsiveSizes;
  };
}

export interface AccessibilityProps {
  alt?: string;
  title?: string;
  ariaLabel?: string;
  caption?: string;
  transcript?: string;
}

export interface Image360Item {
  id?: string;
  index?: number;
  src: string;
  accessibility?: AccessibilityProps;
}

export interface React360Props {
  images?: Image360Item[];
  startIndex?: number;
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
}

export interface imageProps {
  src: string;
  alt: string;
}

export interface CardsItemsProps {
  id: string;
  title: string;
  title2?: string;
  src: string;
  isSelected?: boolean;
  titleTag: string;
  altTag: string;
  cardSrc: {
    desktop: string;
    mobile: string;
  };
}
