import { Suspense } from "react";
import NewsContainer from "./news-container/news-container";
import Loading from "@/app/loading";

export default function Container() {
  return (
    <Suspense fallback={<Loading />}>
      <NewsContainer />
    </Suspense>
  );
}
