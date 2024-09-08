"use client";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFiltersAdvanced } from "./use-filters-advanced";

export function AdvancedFilters() {
  const { country, order, language, setCountry, setOrder, setLanguage } =
    useFiltersAdvanced();

  return (
    <div className="flex flex-col justify-center items-center m-5 gap-5 lg:flex-row">
      <Select
        value={country || ""}
        onValueChange={(value) => setCountry(value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Selecione um País de origem" />
        </SelectTrigger>
        <SelectContent className="bg-white text-black">
          <SelectItem className="cursor-pointer" value="br">
            Brasil
          </SelectItem>
          <SelectItem className="cursor-pointer" value="us">
            Estados Unidos
          </SelectItem>
          <SelectItem className="cursor-pointer" value="jp">
            Japão
          </SelectItem>
          <SelectItem className="cursor-pointer" value="in">
            India
          </SelectItem>
        </SelectContent>
      </Select>
      <Select value={order || ""} onValueChange={(value) => setOrder(value)}>
        <SelectTrigger>
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent className="bg-white text-black">
          <SelectItem className="cursor-pointer" value="popularity">
            Popularidade
          </SelectItem>
          <SelectItem className="cursor-pointer" value="published_desc">
            Data de publicação
          </SelectItem>
        </SelectContent>
      </Select>
      <Select
        value={language || ""}
        onValueChange={(value) => setLanguage(value)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Selecione um idioma" />
        </SelectTrigger>
        <SelectContent className="bg-white text-black">
          <SelectItem className="cursor-pointer" value="pt">
            Portugues
          </SelectItem>
          <SelectItem className="cursor-pointer" value="en">
            Inglês
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
