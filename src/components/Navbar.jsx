import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "nav-open" : ""}`}>
      <Link to="/" className="logo" style={{ textDecoration: "none" }} onClick={closeMenu}>
        Catchmemo
      </Link>
      <div className="hamburger" onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>
      <div className="nav-menu">
        <div className="nav-links">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/celebration" onClick={closeMenu}>Celebration</Link>
          <Link to="/wall-of-love" onClick={closeMenu}>Wall of love</Link>
          <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
          <Link to="/blog" onClick={closeMenu}>Blog</Link>
          <Link to="/faq" onClick={closeMenu}>FAQ</Link>
        </div>
        <div className="nav-actions">
          <a href="https://app.catchmemo.com" className="nav-btn create-btn">
            Create Event
          </a>
          <a href="https://app.catchmemo.com" className="nav-btn login-btn">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
