import MediaImage from "../../components/common/MediaImage";

function MovieHero({ movie }) {
  return (
    <div className="relative h-fit overflow-hidden lg:h-svh">
      {/* Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(42,42,42,0.5), #000 80%)",
        }}
      ></div>

      {/* Hero image */}
      <div className="max-h-svh">
        <MediaImage
          path={movie.backdrop_path}
          alt={`${movie.title} Image`}
          size="original"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Text overlay */}
      <div className="absolute inset-0 z-50 flex flex-col items-center justify-center px-4 text-center">
        <h3 className="text-text-primary mb-2 text-base font-bold uppercase sm:text-xl">
          Featured Title
        </h3>
        <p className="text-text-secondary mb-3 text-2xl leading-tight font-semibold sm:text-4xl">
          {movie.title}
        </p>
        <p className="text-text-tertiary text-sm leading-snug font-medium italic sm:text-xl">
          {movie.tagline}
        </p>
      </div>
    </div>
  );
}

export default MovieHero;
