import { ButtonSearch } from "../ui/button-custom";
import { Filters } from "./filters";

export function Header() {
  return (
    <header className="flex flex-col items-center justify-center w-full bg-slate-50 gap-5 p-2">
      <div>
        <h1 className="text-3xl font-bold">
          News <strong className="text-azulPrimaria">API</strong>
        </h1>
        <p className="text-slate-500"> - Busca de notícias </p>
      </div>
      <div className="w-2/3 flex flex-col items-center justify-center gap-2">
        <Filters />
      </div>
    </header>
  );
}
