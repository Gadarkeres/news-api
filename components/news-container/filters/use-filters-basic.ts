"use client";

import { parseAsString, useQueryState } from "nuqs";

export function useFiltersBasic() {
  const [word, setWord] = useQueryState("word", parseAsString.withDefault(""));
  const [category, setCategory] = useQueryState(
    "category",
    parseAsString.withDefault("")
  );

  return {
    word,
    category,
    setCategory,
    setWord,
  };
}
