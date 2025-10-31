import { Link } from "react-router-dom";
import Main from "../../components/common/Main";
import MediaImage from "../../components/common/MediaImage";

function SeriesRecommendations({ series }) {
  const chosenSeries = series.results.slice(0, 5);

  if (!chosenSeries) return null;

  return (
    <Main>
      <h3 className="text-text-secondary mb-2 text-xl">
        Series You Might Like
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {chosenSeries.map((series) => (
          <div
            key={series.id}
            className="bg-surface-alt border-border-strong flex min-w-[140px] shrink-0 flex-col rounded border p-2 shadow-sm transition-transform duration-200 hover:scale-105"
          >
            <div className="mb-5">
              <MediaImage
                path={series.poster_path}
                size="original"
                className="w-full rounded-md"
                alt={series.title || series.name}
              />
            </div>

            <p className="text-text-primary text-md mt-auto mb-2 font-medium">
              {series.title || series.name}
            </p>

            <Link
              to={`/series/${series.id}`}
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

export default SeriesRecommendations;
