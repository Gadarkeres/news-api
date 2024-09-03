import { Header } from "@/components/header/header";
import NewsContainer from "@/components/news-container/news-container";
import { Suspense } from "react";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2500));
  return (
    <>
      <Suspense fallback={<div>Carregando ...</div>}>
        <Header />
      </Suspense>
      <NewsContainer />
    </>
  );
}
