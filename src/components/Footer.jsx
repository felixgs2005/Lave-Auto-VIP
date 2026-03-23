import React from "react";
import { Link } from "react-router-dom";
import "../Styles/footer.css";

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-left">
          <Link to="/">
            <img
              src="/images/logo-lave-auto-vip-club.png"
              alt="logo-lavage-auto-VIP"
              className="footer-logo"
            />
          </Link>
          <div className="footer-socials">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>

        <div className="footer-right"><Link to="/forfait">Forfait</Link>{" "}
          <span className="gold-line">|</span>
          <Link to="/realisation">Réalisations</Link>{" "}
          <span className="gold-line">|</span>
          <Link to="/#temoignage-section">Témoignages</Link>{" "}
          <span className="gold-line">|</span>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
