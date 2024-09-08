import { useFiltersBasic } from "@/components/news-container/filters/use-filters-basic";

export function useCleanParams() {
  const { setCategory, setWord } = useFiltersBasic();

  const removeBasicParams = () => {
    setCategory(null);
    setWord(null);
  };

  return {
    removeBasicParams,
  };
}
