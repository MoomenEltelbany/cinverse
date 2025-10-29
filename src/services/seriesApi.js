import { tmdb } from "./api.js";

const tvGenreMap = {
  10759: "Action & Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  10762: "Kids",
  9648: "Mystery",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10767: "Talk",
  10768: "War & Politics",
  37: "Western",
};

export function getSeriesGenreName(id) {
  return tvGenreMap[id] || "Unknown";
}

// list all the upcoming movies
export async function fetchPopularSeries(page = 1) {
  const data = await tmdb("/tv/popular", `&page=${page}`);
  return data;
}
