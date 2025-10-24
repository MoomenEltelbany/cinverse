function GenreCard({ genreId, name }) {
  return (
    <div className="bg-surface-card hover:bg-surface-alt cursor-pointer rounded-lg p-4 text-white shadow-md transition">
      <h3 className="text-center">{name}</h3>
    </div>
  );
}

export default GenreCard;
