import Main from "../../components/common/Main";
import PopularMediaCard from "../../components/common/PopularMediaCard";
import { useBookmarks } from "../../contexts/BookmarkContext";

function FavoritesPage() {
  const { state } = useBookmarks();

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
      <Main>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {state.map((media) => (
            <PopularMediaCard media={media} key={media.id} />
          ))}
        </div>
      </Main>
    </>
  );
}

export default FavoritesPage;
