export function GenreCard({ title }) {
  return (
    <div className="bg-surface-card border-border-subtle relative flex flex-col justify-between overflow-hidden rounded-lg border text-white shadow-lg transition-transform duration-200 hover:scale-105">
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-[rgba(0,0,0,0.5)]"></div>
      <div className="grid grid-cols-2 gap-2 p-6">
        <img
          src="https://picsum.photos/300/450"
          alt="random photo"
          className="border-border-subtle rounded border"
        />
        <img
          src="https://picsum.photos/300/450"
          alt="random photo"
          className="border-border-subtle rounded border"
        />
        <img
          src="https://picsum.photos/300/450"
          alt="random photo"
          className="border-border-subtle rounded border"
        />
        <img
          src="https://picsum.photos/300/450"
          alt="random photo"
          className="border-border-subtle rounded border"
        />
      </div>
      <div className="relative z-50 flex items-center justify-between gap-1 px-4 py-2 text-center">
        <button className="cursor-pointer text-sm tracking-wide uppercase">
          {title}
        </button>
        <span> → </span>
      </div>
    </div>
  );
}

export default GenreCard;
