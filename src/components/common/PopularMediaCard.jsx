import { Link } from "react-router-dom";

import MediaImage from "./MediaImage";
import BookmarkButtons from "./BookmarkButtons";
import WatchlistButtons from "./WatchlistButtons";

import { formatDate } from "../../utils/dateUtils";
import { getGenreName } from "../../services/moviesAPI";
import { getSeriesGenreName } from "../../services/seriesApi";

function PopularMediaCard({ media, isAiringToday }) {
  // I made this component reusable for both of series and movies, so I had to make some tweaks to make it reusable for both, so those two lines are define what to display based if it's a movie or a series
  const categoryType = media.name ? "series" : "movies";

  const getGenre = media.name ? getSeriesGenreName : getGenreName;

  const genres = media.genre_ids ?? [];

  return (
    <div className="bg-surface-card border-border-subtle relative flex h-[720px] min-h-fit flex-col gap-2 rounded border p-5 shadow shadow-black">
      <BookmarkButtons media={media} />
      <div className="mx-auto">
        {isAiringToday && (
          <p className="absolute top-5 right-3 rounded bg-red-500 px-2 py-1 text-[10px] font-bold">
            New Episode
          </p>
        )}
      </div>

      <div className="mx-auto">
        <MediaImage
          path={media.poster_path}
          alt={
            media.poster_path
              ? `The photo of ${media.name}`
              : `This photo can't be displayed`
          }
        />
      </div>
      <h3 className="text-text-primary text-lg font-semibold">
        {media.title || media.name}
      </h3>
      <p className="text-text-tertiary text-sm">
        {formatDate(media.release_date || media.first_air_date)}
      </p>
      <p>⭐ {media.vote_average}</p>
      <div className="flex flex-wrap gap-1.5">
        {genres.map((item) => (
          <span
            className="bg-surface-main inline-block rounded px-2 py-1"
            key={item}
          >
            {getGenre(item)}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-col gap-2">
        <Link
          to={`/${categoryType}/${media.id}`}
          className="bg-surface-alt w-full rounded py-2 text-center font-semibold capitalize transition-colors duration-200 hover:bg-black"
        >
          Show{" "}
          {categoryType === "movies" ? categoryType.slice(0, -1) : categoryType}{" "}
          details
        </Link>
        <WatchlistButtons media={media} />
      </div>
    </div>
  );
}

export default PopularMediaCard;
