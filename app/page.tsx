import Container from "@/components/container/container";
import { Header } from "@/components/header/header";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Carregando ...</div>}>
        <Header />
      </Suspense>
      <Container />
    </main>
  );
}
