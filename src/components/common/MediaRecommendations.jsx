import { Link } from "react-router-dom";
import MediaImage from "./MediaImage";
import Main from "./Main";

function MediaRecommendations({ title, media }) {
  const chosenMedia = media.results.slice(0, 5);

  if (chosenMedia.length === 0) return null;
  return (
    <Main>
      <h3 className="text-text-secondary mb-2 text-xl">{title}</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {chosenMedia.map((media) => (
          <div
            key={media.id}
            className="bg-surface-alt border-border-strong flex min-w-[140px] shrink-0 flex-col rounded border p-2 shadow-sm transition-transform duration-200 hover:scale-105"
          >
            <div className="mb-5">
              <MediaImage
                path={media.poster_path}
                size="original"
                className="w-full rounded-md"
                alt={media.title || media.name}
              />
            </div>

            <p className="text-text-primary text-md mt-auto mb-2 font-medium">
              {media.title || media.name}
            </p>

            <Link
              to={`/movies/${media.id}`}
              className="hover:bg-text-primary rounded bg-red-500 px-2 py-1 text-center transition-colors duration-200 hover:text-red-500"
            >
              Show More
            </Link>
          </div>
        ))}
      </div>
    </Main>
  );
}

export default MediaRecommendations;
