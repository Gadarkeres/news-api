import { useFiltersBasic } from "@/components/header/filters/use-filters-basic";

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
