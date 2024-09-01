"use client";

import { useEffect } from "react";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { parseAsString, useQueryState } from "nuqs";

export function FiltersOptions() {
  const [filter, setFilter] = useQueryState(
    "filter",
    parseAsString.withDefault("basic")
  );

  useEffect(() => {
    setFilter("basic");
  }, [setFilter]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div>
        <h2 className="text-xl">Selecione uma opção de filtro de notícias</h2>
      </div>
      <RadioGroup
        value={filter}
        onValueChange={setFilter}
        className="flex gap-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="basic" id="basic" />
          <Label htmlFor="basic">Básica</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="advanced" id="advanced" />
          <Label htmlFor="advanced">Avançada</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
