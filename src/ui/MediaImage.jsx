function MediaImage({ path, size = "w500", alt }) {
  const src = path ? `https://image.tmdb.org/t/p/${size}${path}` : null;
  return (
    <img src={src} alt={alt} loading="lazy" className="rounded shadow-md" />
  );
}

export default MediaImage;
