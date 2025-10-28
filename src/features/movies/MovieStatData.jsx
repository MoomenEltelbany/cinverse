// eslint-disable-next-line no-unused-vars
function MovieStatData({ title, icon: Icon, children }) {
  return (
    <div>
      <h3 className="text-text-tertiary mb-2 flex items-center gap-2">
        <span>
          <Icon />
        </span>
        {title}
      </h3>
      <div>{children}</div>
    </div>
  );
}

export default MovieStatData;
