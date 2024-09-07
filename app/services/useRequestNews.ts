"use client";
import { useFiltersAdvanced } from "@/components/header/filters/use-filters-advanced";
import { useFiltersBasic } from "@/components/header/filters/use-filters-basic";
import axios, { AxiosResponse } from "axios";
import { ArticlesResponseDTO } from "../models/responde.model";
import { log } from "console";

export function useRequestNews() {
  const { category, title } = useFiltersBasic();
  const { country, order, word } = useFiltersAdvanced();
  async function requestNews(): Promise<AxiosResponse<ArticlesResponseDTO[]>> {
    console.log(title);

    const response = await axios.get(
      `http://localhost:8080/keyWords/${title}`,
      {
        timeout: 10000,
      }
    );

    return response;
  }

  return {
    requestNews,
  };
}
