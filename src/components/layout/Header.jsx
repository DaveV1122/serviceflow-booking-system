import { NavLink } from "react-router-dom";
import { CalendarCheck, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand" aria-label="ServiceFlow startsida">
          <span className="brand-icon">
            <CalendarCheck size={22} aria-hidden="true" />
          </span>
          <span className="brand-text">ServiceFlow</span>
        </NavLink>

        <nav className="main-nav" aria-label="Huvudmeny">
          <NavLink to="/" className="nav-link">
            Hem
          </NavLink>
          <NavLink to="/services" className="nav-link">
            Tjänster
          </NavLink>
          <NavLink to="/booking" className="nav-link">
            Boka
          </NavLink>
          <NavLink to="/admin" className="nav-link">
            Admin
          </NavLink>
        </nav>

        <button className="mobile-menu-button" type="button" aria-label="Öppna meny">
          <Menu size={22} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}