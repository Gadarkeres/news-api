import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function News() {
  const news = {
    title: "Trump's Crypto Embrace Could Be a Disaster for Bitcoin",
    description:
      "At the Bitcoin 2024 conference in Nashville, Donald Trump promised the crypto community the moon. They'd better hope they don't get it.",
    urlToImage: "/Screenshot_1.png",
    source: { name: "Wired" },
    author: "Steven Levy",
    publishedAt: "02/09/2024",
    url: "https://www.wired.com/story/donald-trump-bitcoin-reserve-promises/",
  };

  return (
    <div className="my-5 w-3/4 h-auto lg:w-1/4 hover:shadow-sm">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{news.title}</CardTitle>
          <CardDescription>{news.description}</CardDescription>
        </CardHeader>
        <CardContent className="w-full flex justify-center">
          <Image
            className="rounded-md"
            width={"400"}
            height={"400"}
            alt={news.title}
            src={news.urlToImage}
          />
        </CardContent>
        <CardContent className="flex flex-col lg:flex-row lg:gap-3">
          <p className="text-sm text-gray-500">
            Fonte: {news.source.name} -{" "}
            {new Date(news.publishedAt).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-500">
            {"Escrito por: " + news.author}
          </p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Link href={news.url} className="text-azulPrimaria hover:underline">
            Leia mais
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
