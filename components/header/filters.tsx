"use client";

import { parseAsString, useQueryState } from "nuqs";
import { BasicFilters } from "./filters/basic-filters";
import { AdvancedFilters } from "./filters/advanced-filters";

export function Filters() {
  const [filter] = useQueryState("filter", parseAsString.withDefault("basic"));
  return (
    <div className="flex flex-col items-center gap-3">
      {filter === "basic" ? (
        <BasicFilters />
      ) : (
        <>
          <BasicFilters />
          <AdvancedFilters />
        </>
      )}
    </div>
  );
}
