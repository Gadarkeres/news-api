import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <main>
      <header className="flex flex-col items-center justify-center w-full bg-slate-50 gap-5 p-2">
        <div>
          <h1 className="text-3xl font-bold">
            News <strong className="text-azulPrimaria">API</strong>
          </h1>
          <p className="text-slate-500"> - Busca de notícias </p>
        </div>
      </header>
      <div className="min-w-screen max-h-screen flex items-center flex-col gap-5 p-10 text-center">
        <h2 className=" lg:w-1/2">
          <strong>
            Bem-vindo ao meu projeto de API de notícias! Aqui você pode
            encontrar várias notícias com diversos filtros, como, por exemplo,
            palavra-chave, país, autor, e muito mais!
          </strong>
        </h2>
        <Link href="/news">
          <Button
            type="submit"
            className="w-full max-w-[300px] mx-auto rounded-md p-7 bg-azulPrimaria text-slate-50 text-3xl font-bold hover:bg-azulPrimaria/80 flex items-center jrustify-cente"
          >
            Vá para Noticias
          </Button>
        </Link>
      </div>
    </main>
  );
}
