import { useWatchlist } from "../../contexts/WatchlistContext";

import toast from "react-hot-toast";

import PopularMediaCard from "../../components/common/PopularMediaCard";
import Button from "../../components/common/Button";
import Main from "../../components/common/Main";

function WatchListPage() {
  const { state, dispatch } = useWatchlist();

  function handleClearList() {
    const response = confirm("Are you sure that you want to clear your list?");

    if (response) dispatch({ type: "watchlist/clear" });
    toast.success("Watchlist cleared successfully.");
  }

  return (
    <>
      <Main>
        <h2 className="text-text-primary mb-4 text-center text-2xl font-bold">
          Your curated watchlist
        </h2>
        <p className="text-text-secondary mb-2 text-center text-base">
          Discover what's next. Everything you've saved to watch later, ready
          when you are
        </p>
      </Main>
      {state.length === 0 ? (
        <Main>
          <p className="text-text-secondary text-center text-base">
            Your watchlist is still empty. Start exploring and save the stories
            you want to watch next.
          </p>
        </Main>
      ) : (
        <Main>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {state.map((media) => (
              <PopularMediaCard media={media} key={media.id} />
            ))}
          </div>
          <div className="mt-5 ml-auto w-fit">
            <Button onClick={handleClearList}>Clear watchlist</Button>
          </div>
        </Main>
      )}
    </>
  );
}

export default WatchListPage;
