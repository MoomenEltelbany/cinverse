import { useEffect } from "react";
import { getPopularMovies, getMovieGenres } from "../services/moviesAPI";

function MoviesPage() {
  useEffect(() => {
    getMovieGenres(1)
      .then((data) => {
        console.log("TMDB popular:", data); // look at .results, .page, .total_pages
      })
      .catch((err) => console.error(err));
  }, []);

  return <div>Movies Page</div>;
}

export default MoviesPage;
