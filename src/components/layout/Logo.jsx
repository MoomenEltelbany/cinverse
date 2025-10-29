import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <div className="flex items-center bg-white">
      <Link to="/" className="inline-flex items-center">
        <img
          src={logo}
          alt="Cineverse Logo"
          loading="eager"
          width={96}
          height={40}
          className="h-10 w-24 object-contain"
        />
      </Link>
    </div>
  );
}

export default Logo;
