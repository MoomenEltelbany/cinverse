import { Link } from "react-router-dom";
import MediaImage from "../../components/common/MediaImage";

function RandomPicks({ credits }) {
  return (
    <div className="mt-6">
      <h3 className="text-text-primary mb-4 text-xl font-semibold">
        Random Picks from Their Career
      </h3>
      {/* <div className="flex gap-4 overflow-x-auto pb-2"> */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {credits.map((credit) => (
          <div
            key={credit.id}
            className="bg-surface-alt border-border-strong flex min-w-[140px] shrink-0 flex-col rounded border p-2 shadow-sm transition-transform duration-200 hover:scale-105"
          >
            <div className="mb-5">
              <MediaImage
                path={credit.poster_path}
                size="original"
                className="w-full rounded-md"
                alt={credit.title || credit.name}
              />
            </div>

            <p className="text-text-primary mt-auto text-sm font-medium">
              {credit.title || credit.name}
            </p>
            <p className="text-text-secondary text-xs italic">
              Played as {credit.character}
            </p>
            <Link
              to={`/movies/${credit.id}`}
              className="bg-brand text-text-primary mt-2 rounded px-2 py-1 text-center font-semibold"
            >
              Show more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RandomPicks;
