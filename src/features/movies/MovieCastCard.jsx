import MediaImage from "../../ui/MediaImage";

function MovieCastCard({ cast }) {
  return (
    <div className="bg-surface-alt flex w-[200px] flex-col items-center justify-center rounded px-4 py-2 text-center">
      <MediaImage
        path={cast.profile_path}
        alt={`Photo of ${cast.name}`}
        size="w92"
        className="h-auto w-24 rounded-md"
      />
      <p className="text-md text-text-primary">{cast.name}</p>
      <p className="text-text-secondary text-sm">{cast.character}</p>
    </div>
  );
}

export default MovieCastCard;
