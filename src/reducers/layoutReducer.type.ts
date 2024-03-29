import {MutableRefObject} from "react";

export interface SlugSuffixes {
    [x: string]: (slugSuffix: string) => void;
}

export interface NavRefs {
    [x: string]: MutableRefObject<unknown>;
}