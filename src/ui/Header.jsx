import HeaderNav from "./HeaderNav";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="border-border-subtle bg-surface-alt bg-bg-elevated/80 sticky top-0 z-30 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Logo />
        <div className="mx-auto hidden md:block">
          <HeaderNav />
        </div>
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
