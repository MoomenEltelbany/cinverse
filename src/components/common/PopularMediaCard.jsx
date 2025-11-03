import { Link } from "react-router-dom";

import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

import toast from "react-hot-toast";
import { useBookmarks } from "../../contexts/BookmarkContext";
import MediaImage from "./MediaImage";
import { formatDate } from "../../utils/dateUtils";
import { getGenreName } from "../../services/moviesAPI";
import { getSeriesGenreName } from "../../services/seriesApi";

function PopularMediaCard({ media, isAiringToday }) {
  const { state, dispatch } = useBookmarks();

  console.log(media);

  const isBookmarked = state.some((item) => item.id === media.id);

  function handleToggleBookmark() {
    const name = media.title || media.name || "The movie";

    if (isBookmarked) {
      dispatch({ type: "media/remove", payload: media.id });
      toast.success(`${name} was removed successfully from your Favorites`);
    } else {
      dispatch({ type: "media/add", payload: media });
      toast.success(`${name} was added successfully from your Favorites`);
    }
  }

  // I made this component reusable for both of series and movies, so I had to make some tweaks to make it reusable for both, so those two lines are define what to display based if it's a movie or a series
  const categoryType = media.name ? "series" : "movies";

  const getGenre = media.name ? getSeriesGenreName : getGenreName;

  return (
    <div className="bg-surface-card border-border-subtle relative flex h-[720px] min-h-fit flex-col gap-2 rounded border p-5 shadow shadow-black">
      {isBookmarked ? (
        <FaBookmark
          className="absolute top-0 left-0 z-40 cursor-pointer text-3xl text-red-500"
          onClick={handleToggleBookmark}
        />
      ) : (
        <CiBookmark
          className="absolute top-0 left-0 z-40 cursor-pointer text-3xl text-red-500"
          onClick={handleToggleBookmark}
        />
      )}

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
          alt={`Poster of ${media.title || media.name}`}
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
        {media["genre_ids"].map((item) => (
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
          className="bg-surface-alt w-full rounded py-2 text-center font-semibold transition-colors duration-200 hover:bg-black"
        >
          Show {categoryType} Details
        </Link>
        <button className="bg-surface-alt w-full cursor-pointer rounded py-2 text-center font-semibold transition-colors duration-200 hover:bg-black">
          + Add to your watch list
        </button>
      </div>
    </div>
  );
}

export default PopularMediaCard;
