/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Loading from "@/app/news/loading";
import { useEffect } from "react";
import { ButtonSearch } from "../ui/button-custom";
import { AdvancedFilters } from "./filters/advanced-filters";
import { BasicFilters } from "./filters/basic-filters";
import News from "./news";
import { useNewsHook } from "./useNewsHook";
import { NewsDTO } from "@/models/responde.model";
export default function NewsContainer() {
  const { fetchNews, news } = useNewsHook();

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
            {news?.data.map((news: NewsDTO) => (
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
