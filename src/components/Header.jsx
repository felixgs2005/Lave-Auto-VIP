import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [scrollDir, setScrollDir] = useState("up");
  const [scrolled, setScrolled] = useState(false);
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
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            className="logo-navbar"
            src="/images/logo-lave-auto-vip-club.png"
            alt="logo-lavage-auto-VIP"
          />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/forfait" className="nav-link">
          Forfaits
        </Link>
        <Link to="/realisation" className="nav-link">
          Réalisations
        </Link>
      </div>

      <div className="nav-contact">
        <Link to="/contact">
          <button className="contact-btn">Contact</button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
