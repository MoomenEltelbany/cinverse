import { useNavigate } from "react-router-dom";

export default function FooterLink({ href, label }) {
  const navigate = useNavigate();

  return (
    <a
      href={href}
      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
      onClick={() => navigate(href)}
    >
      {label}
    </a>
  );
}
