import { NewsResponseDTO } from "@/models/responde.model";
import { fetchNewsServer } from "@/services/useRequestNews";
import { useState } from "react";
import { useFiltersAdvanced } from "./filters/use-filters-advanced";
import { useFiltersBasic } from "./filters/use-filters-basic";
export function useNewsHook() {
  const { category } = useFiltersBasic();
  const { country, order, language } = useFiltersAdvanced();

  const [news, setNews] = useState<NewsResponseDTO>();
  const categoryTranslations: any = {
    general: "Geral",
    business: "Negócios",
    health: "Saúde",
    sports: "Esportes",
    technology: "Tecnologia",
    science: "Ciências",
  };

  const fetchNews = async () => {
    setNews(undefined);
    const body = {
      category: category,
      country: country,
      language: language,
      orderby: order,
    };
    try {
      const newsData = await fetchNewsServer(body);
      setNews(newsData);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    fetchNews,
    news,
    categoryTranslations,
  };
}
