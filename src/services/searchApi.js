import { tmdb } from "./api.js";

export async function fetchMediaBySearch(query, page = 1) {
  const data = await tmdb(`/search/multi?query=${query}&page=${page}`);

  return data;
}
