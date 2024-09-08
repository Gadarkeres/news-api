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
  category: any;
  language: string;
  country: string;
  publishedAt: string;
}

export interface RequestDTO {
  category: string | null;
  language: string;
  country: string;
  orderby: string;
}
