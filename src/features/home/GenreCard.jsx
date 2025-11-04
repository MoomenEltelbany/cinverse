import { Link } from "react-router-dom";

export function GenreCard({ title, posters, genreId }) {
  return (
    <div className="bg-surface-card border-border-subtle relative flex flex-col justify-between overflow-hidden rounded-lg border text-white shadow-lg transition-transform duration-200 hover:scale-105">
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[rgba(0,0,0,0.5)]"></div>
      <div className="grid grid-cols-2 gap-2 p-6">
        {posters.map((poster) => (
          <img
            key={poster.id}
            src={poster.path}
            alt={poster.title}
            className="border-border-subtle aspect-2/3 rounded border object-cover"
          />
        ))}
      </div>
      <div className="relative z-50 flex items-center justify-around gap-1 px-4 py-2 text-center md:justify-between">
        <Link to={`/genres/${genreId}?genreName=${title}`} className="cursor-pointer text-sm tracking-wide uppercase bg-brand rounded py-1 px-2 text-text-primary w-full text-center hover:bg-text-primary hover:text-brand transition-colors duration-200">
          {title}
        </Link>
      </div>
    </div>
  );
}

export default GenreCard;
