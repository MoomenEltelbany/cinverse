import { Link } from "react-router-dom";
import { getSeriesGenreName } from "../../services/seriesApi";
import { formatDate } from "../../utils/dateUtils";
import MediaImage from "./MediaImage";
import { getGenreName } from "../../services/moviesAPI";

function SearchResultCard({ media }) {
  const { media_type } = media;

  console.log(media);

  let type;
  if (media_type === "tv") {
    type = "series";
  } else {
    type = "movies";
  }

  const genres = media.genre_ids ?? [];

  return (
    <div className="bg-surface-card border-border-subtle flex h-[650px] min-h-fit flex-col gap-2 rounded border p-5 shadow shadow-black">
      <div className="relative mx-auto">
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
      <p>
        ⭐ {media.vote_average}{" "}
        <span className="text-yellow-400">({media.vote_count})</span>
      </p>
      <div className="flex flex-wrap gap-1.5">
        {genres.map((item) => (
          <span
            className="bg-surface-main md:text-md inline-block rounded px-2 py-1 text-sm"
            key={item}
          >
            {getGenreName(item) || getSeriesGenreName(item)}
          </span>
        ))}
      </div>

      <p className="bg-surface-main md:text-md text-brand inline-block w-fit rounded px-2 py-1 text-sm font-semibold uppercase">
        {type}
      </p>

      <Link
        to={`/${type}/${media.id}`}
        className="bg-surface-alt mt-auto w-full rounded py-2 text-center font-semibold transition-colors duration-200 hover:bg-black"
      >
        Show {type} Details
      </Link>
    </div>
  );
}

export default SearchResultCard;
