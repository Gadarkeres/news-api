/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { fetchNewsServer } from "@/services/useRequestNews";
import News from "./news";
import { useEffect, useState } from "react";
import { NewsResponseDTO } from "@/models/responde.model";
import { BasicFilters } from "./filters/basic-filters";
import { AdvancedFilters } from "./filters/advanced-filters";
import { useFiltersBasic } from "./filters/use-filters-basic";
import { useFiltersAdvanced } from "./filters/use-filters-advanced";
import Loading from "@/app/news/loading";
import { ButtonSearch } from "../ui/button-custom";
export default function NewsContainer() {
  const { word, category, setWord, setCategory } = useFiltersBasic();
  const { country, order, language, setCountry, setOrder, setLanguage } =
    useFiltersAdvanced();

  const [news, setNews] = useState<NewsResponseDTO>();
  const body = {
    category: category,
    country: country,
    keywords: word,
    language: language,
    orderby: order,
  };

  const fetchNews = async () => {
    const newsData = await fetchNewsServer(body);
    setNews(newsData);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      {news ? (
        <section className="min-w-full min-h-screen">
          <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row flex-wrap">
            <BasicFilters />
            <AdvancedFilters />
            <hr className="w-full m-5" />
            <ButtonSearch onClick={fetchNews} className="mt-2" />
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row flex-wrap lg:gap-5 mt-5">
            {news?.data.map((news: any) => (
              <News key={news.title} news={news} />
            ))}
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}
