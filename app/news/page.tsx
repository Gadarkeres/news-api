import { Header } from "@/components/header/header";
import NewsContainer from "@/components/news-container/news-container";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Header />
      <NewsContainer />
    </>
  );
}
