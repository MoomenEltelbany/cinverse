/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";

import {
  fetchMovieById,
  fetchMovieCastById,
  fetchMoviesRecommendations,
} from "../../services/moviesAPI";

import MovieStats from "./MovieStats";
import MediaRecommendations from "../../components/common/MediaRecommendations";
import MediaHero from "../../components/common/MediaHero";
import MediaDescription from "../../components/common/MediaDescription";
import MediaCredits from "../../components/common/MediaCredits";

function MovieDetails() {
  const { movie, castData, moviesRecommendations } = useLoaderData();

  return (
    <section>
      <MediaHero media={movie} />

      <div className="flex flex-col-reverse gap-6 lg:flex-row lg:gap-4">
        {/* Main content: description, cast, overview */}
        <div className="min-w-0 flex-1">
          <MediaDescription media={movie} />
          <MediaCredits credits={castData} />
        </div>

        {/* Sidebar: stats */}
        <div className="w-full shrink-0 lg:w-[300px]">
          <MovieStats movie={movie} />
        </div>
      </div>
      <MediaRecommendations
        title="Movies You Might Like"
        media={moviesRecommendations}
      />
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
