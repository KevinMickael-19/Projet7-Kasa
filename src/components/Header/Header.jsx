import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const getNavLinkClass = ({ isActive }) =>
  isActive ? "header__link active" : "header__link";

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="Kasa" className="header__logo" />
      </NavLink>
      <nav className="header__nav">
        <NavLink to="/" className={getNavLinkClass}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={getNavLinkClass}>
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
