"use client";

import { NewsResponseDTO, RequestDTO } from "@/models/responde.model";
import axios from "axios";

export async function fetchNewsServer(
  body: RequestDTO
): Promise<NewsResponseDTO> {
  const response = await axios.post<NewsResponseDTO>(
    `http://localhost:8080/api/news`,
    body
  );
  return response.data;
}
