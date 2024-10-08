import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "./button";

export function ButtonSearch({
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button
      {...props}
      type="submit"
      className="bg-azulPrimaria text-slate-50 hover:bg-azulPrimaria/80 flex items-center gap-1 flex-row-reverse"
    >
      Pesquisar
      <MagnifyingGlassIcon />
    </Button>
  );
}
