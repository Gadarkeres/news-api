import { parseAsString, useQueryState } from "nuqs";

export function useFiltersBasic() {
  const [title, setTitle] = useQueryState("title", parseAsString);
  const [category, setCategory] = useQueryState("category", parseAsString);

  return {
    title,
    category,
    setCategory,
    setTitle,
  };
}
