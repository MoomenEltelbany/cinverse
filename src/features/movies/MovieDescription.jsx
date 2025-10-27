import Main from "../../ui/Main";

export function MovieDescription({ movie }) {
  return (
    <Main>
      <h3 className="text-text-secondary mb-2 text-xl">Description</h3>
      <p className="text-text-primary tracking-wider">{movie.overview}</p>
    </Main>
  );
}

export default MovieDescription;
