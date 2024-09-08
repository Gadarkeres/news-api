"use client";

import { parseAsString, useQueryState } from "nuqs";

export function useFiltersBasic() {
  const [category, setCategory] = useQueryState(
    "category",
    parseAsString.withDefault("")
  );

  return {
    category,
    setCategory,
  };
}
