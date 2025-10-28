import MediaImage from "../../ui/MediaImage";

function ActorImage({ actor }) {
  return (
    <div className="flex shrink-0 justify-center lg:block">
      <MediaImage
        path={actor.profile_path}
        size="w342"
        alt={`The photo of ${actor.name}`}
        className="rounded-md object-cover"
      />
    </div>
  );
}

export default ActorImage;
