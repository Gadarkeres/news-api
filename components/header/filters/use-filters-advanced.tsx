import { parseAsString, useQueryState } from "nuqs";

export function useFiltersAdvanced() {
  const [order, setOrder] = useQueryState("order", parseAsString);
  const [word, setword] = useQueryState("word", parseAsString);
  const [country, setCountry] = useQueryState("country", parseAsString);

  return {
    order,
    word,
    country,
    setOrder,
    setword,
    setCountry,
  };
}
