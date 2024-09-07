"use client";

import { parseAsString, useQueryState } from "nuqs";

export function useFiltersBasic() {
  const [title, setTitle] = useQueryState(
    "title",
    parseAsString.withDefault("Bitcoin")
  );
  const [category, setCategory] = useQueryState("category", parseAsString);

  return {
    title,
    category,
    setCategory,
    setTitle,
  };
}
