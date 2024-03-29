export enum ProjectType{
    LANDING_PAGE = 'landing-page',
    TEASER = 'teaser'
}

export enum ProjectBrand {
  MAJORS_SOLUTIONS = 'majors-solutions',
}

export interface ProjectInfoInterface {
    type: ProjectType,
    brand: ProjectBrand,
    product: string,
    version: string,
    debug: boolean,
    year: string,
    url: string,
}
