import FooterLinksColumn from "./FooterLinksColumn";

const FOOTER_COLUMNS = [
  {
    title: "Home",
    links: [
      { label: "Categories", href: "#" },
      { label: "Devices", href: "/#devices" },
      { label: "Pricing", href: "/#plans" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Movies",
    links: [
      { label: "Genres", href: "#" },
      { label: "Trending", href: "#" },
      { label: "New Release", href: "#" },
      { label: "Popular", href: "#" },
    ],
  },
  {
    title: "Shows",
    links: [
      { label: "Genres", href: "#" },
      { label: "Trending", href: "#" },
      { label: "New Release", href: "#" },
      { label: "Popular", href: "#" },
    ],
  },
  { title: "Support", links: [{ label: "Contact Us", href: "#" }] },
  {
    title: "Subscription",
    links: [
      { label: "Plans", href: "#" },
      { label: "Features", href: "#" },
    ],
  },
];

export default function FooterLinksSection() {
  return (
    <section className="bg-surface-alt py-10">
      <div className="container mx-auto px-7 md:px-0">
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-9 md:grid-cols-4 lg:grid-cols-5">
            {FOOTER_COLUMNS.map((col) => (
              <li key={col.title}>
                <FooterLinksColumn title={col.title} links={col.links} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
