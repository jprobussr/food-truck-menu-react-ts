import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = (): void => {
    setIsMenuOpen((prevMenu) => !prevMenu);
  };

  return (
    <header>
      <button onClick={handleMenuClick}>{isMenuOpen ? "x" : "☰"}</button>
      <h1>{isMenuOpen ? "The menu is opened" : "The menu is closed"}</h1>
    </header>
  );
};

export default Navbar;
