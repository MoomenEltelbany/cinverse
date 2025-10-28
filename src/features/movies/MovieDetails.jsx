/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";

import {
  fetchMovieById,
  fetchMovieCastById,
  fetchMoviesRecommendations,
} from "../../services/moviesAPI";

import MovieStats from "./MovieStats";
import MovieDescription from "./MovieDescription";
import MovieCast from "./MovieCast";
import MovieHero from "./MovieHero";
import MoviesRecommendations from "./MoviesRecommendations";

function MovieDetails() {
  const { movie, castData, moviesRecommendations } = useLoaderData();

  return (
    <section>
      <MovieHero movie={movie} />

      <div className="flex flex-col-reverse gap-6 lg:flex-row lg:gap-4">
        {/* Main content: description, cast, overview */}
        <div className="min-w-0 flex-1">
          <MovieDescription movie={movie} />
          <MovieCast castData={castData} />
        </div>

        {/* Sidebar: stats */}
        <div className="w-full shrink-0 lg:w-[300px]">
          <MovieStats movie={movie} />
        </div>
      </div>
      <MoviesRecommendations movies={moviesRecommendations} />
    </section>
  );
}

export async function loader({ params }) {
  const [movie, castData, moviesRecommendations] = await Promise.all([
    fetchMovieById(params.movieId),
    fetchMovieCastById(params.movieId),
    fetchMoviesRecommendations(params.movieId),
  ]);

  return { movie, castData, moviesRecommendations };
}

export default MovieDetails;
