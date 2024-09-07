export interface ArticlesResponseDTO {
  status: string;
  totalResults: number;
  articles: NewsDTO[];
}

export interface NewsDTO {
  title: string;
  description: string;
  urlImage: string;
  source: Source;
  author: string;
  url: string;
}

export interface Source {
  id: string | null;
  name: string;
}
