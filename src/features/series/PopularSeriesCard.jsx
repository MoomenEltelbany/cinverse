import { Link } from "react-router-dom";

import MediaImage from "../../components/common/MediaImage";

import { formatDate } from "../../utils/dateUtils";
import { getSeriesGenreName } from "../../services/seriesApi";

import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

import { useBookmarks } from "../../contexts/BookmarkContext";
import toast from "react-hot-toast";

function PopularSeriesCard({ series, isAiringToday }) {
  const { state, dispatch } = useBookmarks();

  const isBookmarked = state.some((item) => item.id === series.id);

  function handleToggleBookmark() {
    const name = series.name || "The series";

    if (isBookmarked) {
      dispatch({ type: "media/remove", payload: series.id });
      toast.success(`${name} was removed successfully to your favorites list`);
    } else {
      dispatch({ type: "media/add", payload: series });
      toast.success(`${name} was added successfully to your favorites list`);
    }
  }

  return (
    <div className="bg-surface-card border-border-subtle flex h-[720px] flex-col gap-2 rounded border p-5 shadow shadow-black">
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
      <div className="relative mx-auto">
        {isAiringToday && (
          <p className="absolute -top-2.5 -right-2.5 rounded bg-red-500 px-2 py-1 text-[10px] font-bold">
            New Episode
          </p>
        )}
        <MediaImage
          path={series.poster_path}
          alt={`The photo of ${series.name}`}
        />
      </div>
      <h3 className="text-text-primary text-lg font-semibold">{series.name}</h3>
      <p className="text-text-tertiary text-sm">
        {formatDate(series.first_air_date)}
      </p>
      <p>⭐ {series.vote_average}</p>
      <div className="flex flex-wrap gap-1.5">
        {series["genre_ids"].map((item) => (
          <span
            className="bg-surface-main md:text-md inline-block rounded px-2 py-1 text-sm"
            key={item}
          >
            {getSeriesGenreName(item)}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-col gap-2">
        <Link
          to={`/series/${series.id}`}
          className="bg-surface-alt w-full rounded py-2 text-center font-semibold transition-colors duration-200 hover:bg-black"
        >
          Show Series Details
        </Link>
        <button className="bg-surface-alt mt-auto w-full rounded py-2 text-center font-semibold transition-colors duration-200 hover:bg-black">
          + Add to your watch list
        </button>
      </div>
    </div>
  );
}

export default PopularSeriesCard;
