"use client";

import { BasicFilters } from "./filters/basic-filters";
import { AdvancedFilters } from "./filters/advanced-filters";
import { ButtonSearch } from "../ui/button-custom";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export function Filters() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-center gap-3"
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
