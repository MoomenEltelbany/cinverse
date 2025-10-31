// eslint-disable-next-line no-unused-vars
function SeriesStatData({ title, icon: Icon, children }) {
  return (
    <div>
      <h3 className="text-text-tertiary mb-2 flex items-center gap-2">
        <span>
          <Icon />
        </span>
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
}

export default SeriesStatData;
