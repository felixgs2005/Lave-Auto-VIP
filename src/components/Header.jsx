import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Styles/header.css";

function Header() {
  const [scrollDir, setScrollDir] = useState("up");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollDir(
        currentScroll > lastScroll.current && currentScroll > 50
          ? "down"
          : "up",
      );
      setScrolled(currentScroll > 0);
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar-lavageVIP ${
        scrollDir === "down" ? "navbar-hide" : ""
      } ${scrolled ? "navbar-bg" : ""}`}
    >
      <div className="nav-logo">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMenuOpen(false);
          }}
        >
          <img
            className="logo-navbar"
            src="/images/logo-lave-auto-vip-club.png"
            alt="logo-lavage-auto-VIP"
          />
        </Link>
      </div>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <Link
          to="/forfait"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Forfaits
        </Link>
        <Link
          to="/realisation"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Réalisations
        </Link>
        <Link
          to="/carriere"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Carrières
        </Link>
      </div>

      <div className="nav-contact">
        <a href="mailto:info@laveautovipqc.com">
          <button className="contact-btn">Contact</button>
        </a>
      </div>

      {/* Burger */}
      <div
        className={`burger ${menuOpen ? "toggle" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export default Header;
