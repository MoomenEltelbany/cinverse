import { tmdb } from "./api.js";

// popular movies list (page defaults to 1)
export function getPopularMovies(page = 1) {
  return tmdb("/movie/popular", `&page=${page}`);
}

// list all movie genres
export async function fetchMovieGenres(language = "en-US") {
  const { genres } = await tmdb("/genre/movie/list", `&language=${language}`);

  return genres;
}
