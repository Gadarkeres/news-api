"use client";

import { BasicFilters } from "./filters/basic-filters";
import { AdvancedFilters } from "./filters/advanced-filters";
import { ButtonSearch } from "../ui/button-custom";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useFiltersAdvanced } from "./filters/use-filters-advanced";
import { useFiltersBasic } from "./filters/use-filters-basic";
import { RequestDTO } from "@/models/responde.model";
import { fetchNewsServer } from "@/services/useRequestNews";

export function Filters() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const { country, language, order } = useFiltersAdvanced();
  const { word, category } = useFiltersBasic();
  const [body, setBody] = useState<RequestDTO>();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBody({
      category: category,
      country: country,
      keywords: word,
      language: language,
      orderby: order,
    });
    const newsData = await fetchNewsServer(body as RequestDTO);
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-center gap-3 lg:w-3/12"
    >
      <BasicFilters />

      {showAdvanced && <AdvancedFilters />}
      {showAdvanced ? (
        <ChevronUpIcon
          className="text-azulPrimaria cursor-pointer"
          onClick={() => setShowAdvanced(!showAdvanced)}
        />
      ) : (
        <ChevronDownIcon
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-azulPrimaria cursor-pointer"
        />
      )}
      <hr className="w-full" />
      <ButtonSearch />
    </form>
  );
}
