import { Link } from "react-router-dom";
import MediaImage from "../../ui/MediaImage";

function MovieCastCard({ cast }) {
  return (
    <div className="group perspective-1000px w-full max-w-[200px]">
      <div className="relative h-[280px] w-full transition-transform duration-700 transform-3d group-hover:transform-[rotateY(180deg)]">
        {/* Front Side */}
        <div className="bg-surface-alt absolute inset-0 z-10 flex flex-col items-center justify-center rounded px-4 py-4 text-center backface-hidden">
          <MediaImage
            path={cast.profile_path}
            alt={`Photo of ${cast.name}`}
            size="w92"
            className="mx-auto h-auto w-24 rounded-md"
          />
          <p className="text-md text-text-primary wrap-break-words mt-2 leading-tight">
            {cast.name}
          </p>
          <p className="text-text-secondary wrap-break-words text-sm leading-snug">
            {cast.character}
          </p>
        </div>

        {/* Back Side */}
        <div className="bg-yellow absolute inset-0 z-0 flex transform-[rotateY(180deg)] flex-col items-center justify-center rounded px-4 py-4 text-center backface-hidden">
          <p className="text-text-secondary mb-2 text-sm italic">Want more?</p>
          <Link
            to={`/actor/${cast.id}`}
            className="hover:bg-text-primary rounded bg-red-500 px-2 py-1 transition-colors duration-200 hover:text-red-500"
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCastCard;
