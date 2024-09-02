"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFiltersBasic } from "./use-filters-basic";

export function BasicFilters() {
  const { title, category, setTitle, setCategory } = useFiltersBasic();

  return (
    <div className="flex flex-col justify-center items-center m-5 gap-5">
      <Input
        required
        value={title ? title : ""}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Pesquisar por título"
        id="title"
      />
      <Select
        value={category || ""}
        onValueChange={(value) => setCategory(value)}
        defaultValue="general"
      >
        <SelectTrigger>
          <SelectValue placeholder="Selecione um tema" />
        </SelectTrigger>
        <SelectContent className="bg-white text-black">
          <SelectItem className="cursor-pointer" value="business">
            Negócios
          </SelectItem>
          <SelectItem className="cursor-pointer" value="health">
            Saúde
          </SelectItem>
          <SelectItem className="cursor-pointer" value="sports">
            Esportes
          </SelectItem>
          <SelectItem className="cursor-pointer" value="general">
            Geral
          </SelectItem>
          <SelectItem className="cursor-pointer" value="technology">
            Tecnologia
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
