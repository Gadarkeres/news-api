import { parseAsString, useQueryState } from "nuqs";

export function useFiltersAdvanced() {
  const [order, setOrder] = useQueryState(
    "order",
    parseAsString.withDefault("published_desc")
  );
  const [country, setCountry] = useQueryState(
    "country",
    parseAsString.withDefault("br")
  );
  const [language, setLanguage] = useQueryState(
    "language",
    parseAsString.withDefault("pt")
  );

  return {
    order,
    country,
    language,
    setOrder,
    setCountry,
    setLanguage,
  };
}
