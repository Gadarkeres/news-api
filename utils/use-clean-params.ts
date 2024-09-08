import { useFiltersBasic } from "@/components/news-container/filters/use-filters-basic";

export function useCleanParams() {
  const { setCategory } = useFiltersBasic();

  const removeBasicParams = () => {
    setCategory(null);
  };

  return {
    removeBasicParams,
  };
}
