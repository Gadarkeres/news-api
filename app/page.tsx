import { Header } from "@/components/header/header";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Carregando ...</div>}>
        <Header />
      </Suspense>
    </main>
  );
}
