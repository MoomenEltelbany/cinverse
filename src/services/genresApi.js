import { tmdb } from "./api.js";

// fetch movies by genre
export async function fetchMoviesByGenre(genreId, page = 1) {
  const data = await tmdb(
    "/discover/movie",
    `&with_genres=${genreId}&sort_by=popularity.desc&page=${page}`,
  );
  return data.results;
}
