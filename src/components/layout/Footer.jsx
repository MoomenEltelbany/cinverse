import { FaFileCode, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-border-subtle bg-surface-alt border-t py-3">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-text-secondary">
          &copy; Cineverse. All rights reserved
        </div>
        <div className="text-text-secondary">
          Site created by Moomen Eltelbany
        </div>
        <ul className="flex items-center gap-2.5">
          <li>
            <a
              href="https://moomen-portfolio.vercel.app/profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio"
              className="border-border-subtle bg-surface-card text-text-secondary hover:text-text-primary hover:bg-surface-alt focus-visible:ring-brand inline-flex items-center justify-center rounded-md border p-2 transition-colors outline-none focus-visible:ring-2"
            >
              <FaFileCode className="text-xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/moomen-eltelbany/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="border-border-subtle bg-surface-card text-text-secondary hover:text-text-primary hover:bg-surface-alt focus-visible:ring-brand inline-flex items-center justify-center rounded-md border p-2 transition-colors outline-none focus-visible:ring-2"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
