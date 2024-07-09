import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Logogo.png"; // Initial logo
import logo1 from "../../assets/logo.png"; // Scrolled logo

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 0);

      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close the mobile menu after clicking a link
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <a href="#" className="logo">
        <img src={hasScrolled ? logo1 : logo} alt="Logo" />
      </a>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li>
          <a href="#main" onClick={handleLinkClick}>
            Strona Główna
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleLinkClick}>
            O mnie
          </a>
        </li>
        <li>
          <a href="#offer" onClick={handleLinkClick}>
            Oferta
          </a>
        </li>
        <li>
          <a href="#gallery" onClick={handleLinkClick}>
            Galeria
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleLinkClick}>
            Kontakt
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
