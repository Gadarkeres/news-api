export interface NewsResponseDTO {
  pagination: PaginationDTO;
  data: NewsDTO[];
}

export interface PaginationDTO {
  limit: number;
  offset: number;
  count: number;
  total: number;
}

export interface NewsDTO {
  [x: string]: string;
  author: string;
  title: string;
  description: string;
  url: string;
  source: string;
  image: string;
  category: string;
  language: string;
  country: string;
  publishedAt: string;
}

export interface RequestDTO {
  keywords: string | null;
  category: string | null;
  language: string;
  country: string;
  orderby: string;
}
