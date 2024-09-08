"use client";

import { parseAsString, useQueryState } from "nuqs";

export function useFiltersBasic() {
  const [word, setWord] = useQueryState("word", parseAsString);
  const [category, setCategory] = useQueryState("category", parseAsString);

  return {
    word,
    category,
    setCategory,
    setWord,
  };
}
