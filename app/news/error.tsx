"use client"; // Error boundaries must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h2>Ops... Algo deu errado!</h2>
        <p className="mt-4 text-red-400 max-w-1/2">
          Se você estiver vendo esta mensagem, é possivel que o limite gratuito
          da api tenha sido atingido.
        </p>
        <button
          className="mt-4 rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90"
          onClick={() => reset()}
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
