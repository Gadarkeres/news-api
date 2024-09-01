import { useQueryState, parseAsString } from "nuqs";
import { useEffect } from "react";

export function useFiltersBasic() {
  const [title, setTitle] = useQueryState("title", parseAsString);
  const [category, setCategory] = useQueryState("category", parseAsString);

  useEffect(() => {
    setTitle("Real Madrid");
  }, [setCategory, setTitle]);

  return {
    title,
    category,
    setCategory,
    setTitle,
  };
}
