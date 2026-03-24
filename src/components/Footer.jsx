import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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

        <div className="footer-right">
          <Link to="/forfait">Forfaits</Link>{" "}
          <span className="gold-line">|</span>
          <Link to="/realisation">Réalisations</Link>{" "}
          <span className="gold-line">|</span>
          <Link to="/carriere">Carrières</Link>{" "}
          <span className="gold-line">|</span>
          <HashLink smooth to="/#temoignages">
            Témoignages
          </HashLink>{" "}
          <span className="gold-line">|</span>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
