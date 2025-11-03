import { NavLink } from "react-router-dom";

function HeaderNavLink({ title, to }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          [
            "relative z-50 block rounded-4xl px-3 py-1.5 transition-colors outline-none",
            "focus-visible:ring-primary focus-visible:ring-2",
            isActive
              ? "bg-border-subtle text-white"
              : "text-muted hover:text-white",
          ].join(" ")
        }
      >
        {title}
      </NavLink>
    </li>
  );
}

export default HeaderNavLink;
