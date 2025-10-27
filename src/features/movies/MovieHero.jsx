import MediaImage from "../../ui/MediaImage";

function MovieHero({ movie }) {
  return (
    <div className="relative h-dvh overflow-hidden">
      {/* The overlay element */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(42,42,42,0.5), #000 80%)",
        }}
      ></div>
      {/* The Title and hero image */}
      <div className="max-h-dvh">
        <MediaImage
          path={movie["backdrop_path"]}
          alt={`${movie.title} Image`}
          size="original"
        />
        <div className="text-text-primary absolute inset-0 top-[30%] z-50 flex flex-col items-center justify-center">
          <h3 className="text-text-tertiary mb-3 text-2xl font-bold uppercase">
            Featured Title
          </h3>
          <p className="text-text-secondary mb-4 text-4xl font-semibold">
            {movie.title}
          </p>
          <p className="text-text-tertiary text-xl font-medium italic">
            {movie.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieHero;
