import { Link } from "react-router-dom";

function GenreCard({ genreId, name }) {
  return (
    <Link
      to={`/genres/${genreId}`}
      className="bg-surface-card hover:bg-surface-alt cursor-pointer rounded-lg p-4 text-center text-white shadow-md transition"
    >
      {name}
    </Link>
  );
}

export default GenreCard;
