import Main from "../../components/common/Main";

function SeriesDescription({ series }) {
  return (
    <Main>
      <h3 className="text-text-secondary mb-2 text-xl">Description</h3>
      <p className="text-text-primary tracking-wider">{series.overview}</p>
    </Main>
  );
}

export default SeriesDescription;
