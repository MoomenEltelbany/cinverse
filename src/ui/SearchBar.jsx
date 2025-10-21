import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="border-border bg-card focus-within:ring-text flex items-center gap-2 rounded-(--radius-md) border px-3 py-2 transition-shadow duration-200 focus-within:ring-2">
      <input
        type="text"
        placeholder="Search by name..."
        className="text-text placeholder:text-muted w-48 bg-transparent outline-none"
      />
      <FaSearch className="text-muted cursor-pointer transition-colors hover:text-white" />
    </div>
  );
}

export default SearchBar;
