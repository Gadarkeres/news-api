"use client";

import { useRequestNews } from "@/app/services/useRequestNews";
import News from "./news";
import { useEffect, useState } from "react";
import { ArticlesResponseDTO } from "@/app/models/responde.model";

export default function NewsContainer() {
  const [news, setNews] = useState<ArticlesResponseDTO[]>([]);
  const request = useRequestNews();

  const fetechNews = () => {
    request
      .requestNews()
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetechNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log("Updated news:", news);
  }, [news]);

  return (
    <section className="min-w-full min-h-screen flex flex-col justify-center items-center lg:flex-row flex-wrap lg:gap-5 mt-5">
      {Array.from({ length: 6 }).map((_, index) => (
        <News key={index} />
      ))}
    </section>
  );
}
