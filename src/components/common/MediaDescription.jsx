import Main from "./Main";

function MediaDescription({ media }) {
  return (
    <Main>
      <h3 className="text-text-secondary mb-2 text-xl">Description</h3>
      <p className="text-text-primary tracking-wider">{media.overview}</p>
    </Main>
  );
}

export default MediaDescription;
