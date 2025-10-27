import Main from "../../ui/Main";
import MovieCastCard from "./MovieCastCard";

function MovieCast({ castData }) {
  // const { cast, crew } = castData;
  const { cast } = castData;

  const topCastMembers = cast.slice(0, 12);

  return (
    <Main>
      <h3 className="text-text-secondary mb-2 text-xl">Main characters</h3>
      <div className="bg-surface-card flex flex-wrap justify-evenly gap-2 rounded px-4 py-2 text-center">
        {topCastMembers.map((cast) => (
          <MovieCastCard cast={cast} key={cast.name} />
        ))}
      </div>
    </Main>
  );
}

export default MovieCast;
