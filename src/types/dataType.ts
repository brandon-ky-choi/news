interface Link {
  self: string;
  canonical: string;
}

interface Platform {
  id: string;
  instance: string;
  system: string;
  documentId: string;
  parentId: string;
  userUpdated: string;
  systemUpdated: string;
  capiOrigin: string;
}

interface Date {
  live: string;
  updated: string;
  custom: string;
  created: string;
  processed: string;
}

interface Category {
  id: string;
  slug: string;
  path: string;
  provider: string;
  providerSource: string;
  classification: string;
  link: Link;
}

interface ExtendedMetadata {
  "newswire-court": {
    slugs: string;
  };
}

interface Categories {
  other: Category[];
  tone: Category[];
  person: Category[];
  rating: Category[];
  organisation: Category[];
  keyword: Category[];
}

interface Revision {
  major: number;
  minor: number;
}

interface RightsMetadata {
  originatedSource: string;
}

interface DomainLink {
  [key: string]: {
    link: string;
  };
}

interface Target {
  domainLink: DomainLink;
  domains: string[];
  sections: {
    id: string;
    path: string;
    slug: string;
    link: Link;
    domain: string;
  }[];
}

interface ArticleHeadline {
  default: string;
}

interface ArticleStandfirst {
  default: string;
}

interface ArticleRelatedThumbnails {
  default: string[];
}

interface ArticleRelated {
  thumbnail: ArticleRelatedThumbnails;
}

export interface Article {
  id: string;
  link: Link;
  type: string;
  draft: boolean;
  status: string;
  locale: string;
  originalLocale: string;
  platform: Platform;
  date: Date;
  extendedMetadata: ExtendedMetadata;
  categories: Categories;
  keywords: string[];
  revision: Revision;
  rightsMetadata: RightsMetadata;
  target: Target;
  headline: ArticleHeadline;
  standfirst: ArticleStandfirst;
  related: ArticleRelated;
}

export interface DataResponse {
  hits: number;
  page: number;
  results: Article[];
  size: number;
  totalHits: number;
}
