import MediaImage from "../../ui/MediaImage";

function MovieCastCard({ cast }) {
  return (
    <div className="bg-surface-alt flex min-h-64 w-full flex-col items-center rounded px-4 py-4 text-center">
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
  );
}

export default MovieCastCard;
