import { formatDate } from "../../utils/dateUtils";
import { getGenreName } from "../../services/moviesAPI";
import MediaImage from "../../ui/MediaImage";
import { Link } from "react-router-dom";

function TopRatedMovieCard({ movie }) {
  return (
    <div className="bg-surface-card border-border-subtle flex h-[650px] flex-col gap-2 rounded border p-5 shadow shadow-black">
      <div className="mx-auto">
        <MediaImage path={movie.poster_path} />
      </div>
      <h3 className="text-text-primary text-lg font-semibold">{movie.title}</h3>
      <p className="text-text-tertiary text-sm">
        {formatDate(movie.release_date)}
      </p>
      <p>⭐ {movie.vote_average}</p>
      <div className="flex flex-wrap gap-1.5">
        {movie["genre_ids"].map((item) => (
          <span
            className="bg-surface-main inline-block rounded px-2 py-1"
            key={item}
          >
            {getGenreName(item)}
          </span>
        ))}
      </div>
      <Link
        to={`/movies/${movie.id}`}
        className="bg-surface-alt mt-auto w-full rounded py-2 text-center font-semibold transition-colors duration-200 hover:bg-black"
      >
        Show Movie Details
      </Link>
    </div>
  );
}

export default TopRatedMovieCard;
