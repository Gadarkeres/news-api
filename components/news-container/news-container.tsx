import { fetchNewsServer } from "@/services/useRequestNews";
import News from "./news";
export default async function NewsContainer() {
  const body = {
    category: "",
    country: "br",
    keywords: "",
    language: "pt",
    orderby: "published_desc",
  };

  const newsData = await fetchNewsServer(body);

  return (
    <section className="min-w-full min-h-screen">
      <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row flex-wrap lg:gap-5 mt-5">
        {newsData.data.map((news: any) => (
          <News key={news.title} news={news} />
        ))}
      </div>
    </section>
  );
}
