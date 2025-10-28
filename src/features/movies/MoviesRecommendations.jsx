import { Link } from "react-router-dom";
import Main from "../../ui/Main";
import MediaImage from "../../ui/MediaImage";

function MoviesRecommendations({ movies }) {
  const chosenMovies = movies.results.slice(0, 5);
  return (
    <Main>
      <h3 className="text-text-secondary mb-2 text-xl">
        Movies You Might Like
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {chosenMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-surface-alt border-border-strong flex min-w-[140px] shrink-0 flex-col rounded border p-2 shadow-sm transition-transform duration-200 hover:scale-105"
          >
            <div className="mb-5">
              <MediaImage
                path={movie.poster_path}
                size="original"
                className="w-full rounded-md"
                alt={movie.title || movie.name}
              />
            </div>

            <p className="text-text-primary text-md mt-auto mb-2 font-medium">
              {movie.title || movie.name}
            </p>

            <Link
              to={`/movies/${movie.id}`}
              className="hover:bg-text-primary rounded bg-red-500 px-2 py-1 text-center transition-colors duration-200 hover:text-red-500"
            >
              Show More
            </Link>
          </div>
        ))}
      </div>
    </Main>
  );
}

export default MoviesRecommendations;
