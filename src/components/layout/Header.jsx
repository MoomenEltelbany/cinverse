import { useState } from "react";
import HeaderNav from "./HeaderNav";
import Logo from "./Logo";
import SearchBar from "../common/SearchBar";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function toggleNav() {
    setIsNavOpen((prev) => !prev);
  }

  return (
    <header className="border-border-subtle bg-surface-alt bg-bg-elevated/80 sticky top-0 z-50 border-b backdrop-blur">
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3 md:px-0">
        <Logo />

        {/* Mobile toggle button */}
        <button
          className="text-text-primary text-xl md:hidden"
          onClick={toggleNav}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Desktop nav */}
        <div className="hidden md:block">
          <HeaderNav />
        </div>

        <div className="hidden md:block">
          <SearchBar />
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isNavOpen && (
        <div className="border-border-subtle bg-surface-alt border-t px-4 py-3 md:hidden">
          <HeaderNav />
          <div className="mt-3">
            <SearchBar />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
