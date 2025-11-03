import HeaderNav from "./HeaderNav";
import Logo from "./Logo";
import SearchBar from "../common/SearchBar";

function Header() {
  return (
    <header className="border-border-subtle bg-surface-alt bg-bg-elevated/80 sticky top-0 z-50 border-b backdrop-blur">
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3 md:px-0">
        <Logo />
        <div className="mx-auto hidden md:block">
          <HeaderNav />
        </div>
        <div className="hidden md:block">
          <SearchBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
