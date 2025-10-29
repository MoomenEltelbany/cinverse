import HeaderNavLink from "./HeaderNavLink";

const NAV_Links = [
  { title: "Home", to: "/" },
  { title: "Movies", to: "/movies" },
  { title: "Series", to: "/series" },
  { title: "Watch List", to: "/watchlist" },
  { title: "Favorites", to: "/favorites" },
];

function HeaderNav() {
  return (
    <nav aria-label="Primary">
      <ul className="bg-surface-main border-border-subtle flex items-center justify-center gap-3 rounded-2xl border px-3 py-1.5">
        {NAV_Links.map((link) => (
          <HeaderNavLink key={link.title} title={link.title} to={link.to} />
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;
