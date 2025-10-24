import { formatDate } from "../../utils/dateUtils";
import { getGenreName } from "../../services/moviesAPI";
import MediaImage from "../../ui/MediaImage";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";

function TopRatedMovieCard({ topMovie }) {
  console.log(topMovie);
  return (
    <div className="bg-surface-card border-border-subtle flex flex-col gap-2 rounded border p-5">
      <div className="mx-auto">
        <MediaImage path={topMovie.poster_path} />
      </div>
      <h3 className="text-text-primary text-lg font-semibold">
        {topMovie.title}
      </h3>
      <p className="text-text-tertiary text-sm">
        {formatDate(topMovie.release_date)}
      </p>
      <p>⭐ {topMovie.vote_average}</p>
      <div className="flex flex-wrap gap-1.5">
        {topMovie["genre_ids"].map((item) => (
          <span className="bg-surface-main inline-block rounded px-2 py-1">
            {getGenreName(item)}
          </span>
        ))}
      </div>
      <Link
        to={`/movies/${topMovie.id}`}
        className="bg-surface-alt mt-auto w-full rounded py-2 text-center font-semibold transition-colors duration-200 hover:bg-black"
      >
        Show Movie Details
      </Link>
    </div>
  );
}

export default TopRatedMovieCard;
