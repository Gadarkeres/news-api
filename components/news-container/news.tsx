/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NewsDTO } from "@/models/responde.model";
import Link from "next/link";
import { useNewsHook } from "./useNewsHook";

export default function News({ news }: { news: NewsDTO }) {
  const { categoryTranslations } = useNewsHook();
  return (
    <div className="my-5 w-3/4 lg:w-[27%]">
      <Card className="min-h-[450px] flex flex-col justify-between lg:min-h-[600px]">
        <CardHeader>
          <CardTitle className="text-xl line-clamp-3">{news.title}</CardTitle>
          <CardDescription className="line-clamp-3">
            {news.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="w-full flex justify-center flex-grow">
          {news.image ? (
            <img
              src={news.image}
              alt={news.title}
              className="max-h-64 w-full object-cover"
            />
          ) : (
            <div className="max-h-64 w-full object-cover bg-gray-200 flex items-center justify-center">
              Imagem indisponível
            </div>
          )}
        </CardContent>
        <CardContent className="flex flex-col justify-between gap-2 lg:flex-row mt-auto">
          <p className="text-sm text-gray-500">
            Fonte: {news.source} -{" "}
            {new Date(Date.parse(news.published_at)).toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-500">
            {"Escrito por: " + news.author ? news.author : "Desconhecido"}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-sm text-gray-500">
            Categoría: {categoryTranslations[news.category] || news.category}
          </p>
          <Link
            href={news.url}
            target="_blank"
            className="text-azulPrimaria hover:underline"
          >
            Leia mais
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
