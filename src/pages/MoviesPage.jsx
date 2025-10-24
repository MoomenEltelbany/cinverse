/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import MoviesHero from "../features/movies/MoviesHero";
import MoviesTitle from "../features/movies/MoviesTitle";
import { fetchMovieGenres } from "../services/moviesAPI";
import MoviesGenres from "../features/movies/MoviesGenres";

function MoviesPage() {
  const genres = useLoaderData();

  console.log(genres);

  return (
    <>
      <MoviesHero />
      <MoviesTitle />
      <MoviesGenres genres={genres} />
    </>
  );
}

export async function loader() {
  const data = await fetchMovieGenres();

  return data;
}

export default MoviesPage;
