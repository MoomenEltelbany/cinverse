import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  function handleSearchNavigate(e) {
    e.preventDefault();

    if (!searchValue) return;

    navigate(`/search?query=${searchValue}`);

    setSearchValue("");
  }

  return (
    <form
      className="border-border-subtle bg-card focus-within:ring-text flex items-center gap-2 rounded-(--radius-md) border px-3 py-2 transition-shadow duration-200 focus-within:ring-2"
      onSubmit={handleSearchNavigate}
    >
      <input
        type="text"
        placeholder="Search by name..."
        className="text-text placeholder:text-muted w-48 bg-transparent outline-none"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">
        <FaSearch className="text-muted cursor-pointer transition-colors hover:text-white" />
      </button>
    </form>
  );
}

export default SearchBar;
