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
  const { word, setword, country, setCountry, order, setOrder } =
    useFiltersAdvanced();

  return (
    <div className="flex flex-col justify-center items-center m-5 gap-5">
      <Input
        placeholder="Pesquisar por palavra chave no conteúdo"
        value={word ? word : ""}
        onChange={(e) => setword(e.target.value)}
      />

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
        </SelectContent>
      </Select>
      <Select value={order || ""} onValueChange={(value) => setOrder(value)}>
        <SelectTrigger>
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent className="bg-white text-black">
          <SelectItem className="cursor-pointer" value="relevancy">
            Revelância
          </SelectItem>
          <SelectItem className="cursor-pointer" value="popularity">
            Popularidade
          </SelectItem>
          <SelectItem className="cursor-pointer" value="publishedAt">
            Data de publicação
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
