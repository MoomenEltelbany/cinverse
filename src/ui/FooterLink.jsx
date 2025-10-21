export default function FooterLink({ href, label }) {
  return (
    <a
      href={href}
      className="text-text-secondary hover:text-text-primary transition-colors duration-200"
    >
      {label}
    </a>
  );
}
