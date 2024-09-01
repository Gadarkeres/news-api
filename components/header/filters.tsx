"use client";

import { parseAsString, useQueryState } from "nuqs";
import { BasicFilters } from "./filters/basic-filters";
import { AdvancedFilters } from "./filters/advanced-filters";
import { ButtonSearch } from "../ui/button-custom";

export function Filters() {
  const [filter] = useQueryState("filter", parseAsString.withDefault("basic"));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-center gap-3"
    >
      {filter === "basic" ? (
        <>
          <BasicFilters />
          <ButtonSearch />
        </>
      ) : (
        <>
          <BasicFilters />
          <AdvancedFilters />
          <ButtonSearch />
        </>
      )}
    </form>
  );
}
