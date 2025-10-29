import FooterLink from "./FooterLink";

export default function FooterLinksColumn({ title, links = [] }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-text-primary mb-2 text-xl">{title}</h3>
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link.label}>
            <FooterLink href={link.href} label={link.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}
