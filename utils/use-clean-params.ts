import { useFiltersBasic } from "@/components/header/filters/use-filters-basic";

export function useCleanParams() {
  const { setCategory, setTitle } = useFiltersBasic();

  const removeBasicParams = () => {
    setCategory(null);
    setTitle(null);
  };

  return {
    removeBasicParams,
  };
}
