import { useState } from "react";
import "./Navbar.css";

type NavLink = {
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (): void => {
    setIsMenuOpen((prevMenu) => {
      return !prevMenu;
    });
  };

  return (
    <header className="site-header">
      <a href="#home" className="site-logo">
        Fire & Fork
      </a>

      <button
        className="menu-toggle"
        onClick={handleMenuClick}
        aria-label={
          isMenuOpen ? "Close navigation menu" : "Open navigation menu"
        }
      >
        {isMenuOpen ? "X" : "☰"}
      </button>

      <nav className={isMenuOpen ? "site-nav site-nav--open" : "site-nav"}>
        {navLinks.map((link) => {
          return <a key={link.href} href={link.href}>{link.label}</a>;
        })}
      </nav>
    </header>
  );
};

export default Navbar;
