import toast from "react-hot-toast";
import Button from "../../components/common/Button";
import Main from "../../components/common/Main";
import PopularMediaCard from "../../components/common/PopularMediaCard";
import { useBookmarks } from "../../contexts/BookmarkContext";

function FavoritesPage() {
  const { state, dispatch } = useBookmarks();

  function handleClearList() {
    const response = confirm("Are you sure that you want to clear your list?");

    if (response) dispatch({ type: "media/clear" });

    toast.success("Your favorites list has been cleared.");
  }

  return (
    <>
      <Main>
        <h2 className="text-text-primary mb-4 text-center text-2xl font-bold">
          Your personal vault of favorites
        </h2>
        <p className="text-text-secondary mb-2 text-center text-base">
          Revisit the stories you loved, the ones you bookmarked to remember,
          and everything worth watching again
        </p>
      </Main>
      {state.length === 0 ? (
        <Main>
          <p className="text-text-secondary text-center text-base">
            You haven't added any favorites yet. Start exploring and bookmark
            what you love!
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
            <Button onClick={handleClearList}>Clear all favorites</Button>
          </div>
        </Main>
      )}
    </>
  );
}

export default FavoritesPage;
