import toast from "react-hot-toast";
import { useWatchlist } from "../../contexts/WatchlistContext";

function WatchlistButtons({ media }) {
  const { state, dispatch } = useWatchlist();

  const isWatchlist = state.some((item) => item.id === media.id);

  function handleToggleWatchlist() {
    const name = media.title || media.name || "The movie";

    if (isWatchlist) {
      dispatch({ type: "watchlist/remove", payload: media.id });
      toast.success(`${name} was removed successfully from your watchlist`);
    } else {
      dispatch({ type: "watchlist/add", payload: media });
      toast.success(`${name} was added successfully from your watchlist`);
    }
  }
  return isWatchlist ? (
    <button
      className="bg-surface-alt text-brand w-full cursor-pointer rounded py-2 text-center font-semibold transition-colors duration-200 hover:bg-black"
      onClick={handleToggleWatchlist}
    >
      - Remove from Watchlist
    </button>
  ) : (
    <button
      className="bg-surface-alt w-full cursor-pointer rounded py-2 text-center font-semibold transition-colors duration-200 hover:bg-black"
      onClick={handleToggleWatchlist}
    >
      + Add to Watchlist
    </button>
  );
}

export default WatchlistButtons;
