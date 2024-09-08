"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFiltersAdvanced } from "./use-filters-advanced";

export function AdvancedFilters() {
  const { country, order, setCountry, setOrder, setLanguage } =
    useFiltersAdvanced();

  const handleCountryChange = (countryCode: string): void => {
    let languageCode: string;
    switch (countryCode) {
      case "br":
        languageCode = "pt";
        break;
      case "us":
        languageCode = "en";
        break;
      case "jp":
        languageCode = "ja";
        break;
      case "in":
        languageCode = "hi";
        break;
      default:
        languageCode = "und";
    }

    setCountry(countryCode);
    setLanguage(languageCode);
  };
  return (
    <div className="flex flex-col justify-center items-center m-5 gap-5 lg:flex-row">
      <Select
        value={country || ""}
        onValueChange={(value) => handleCountryChange(value)}
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
            Índia
          </SelectItem>
        </SelectContent>
      </Select>
      <Select
        value={order || ""}
        onValueChange={(value) => setOrder(value)}
        disabled={!country} // Desabilita o campo de ordenação se o país não for selecionado
      >
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
    </div>
  );
}
