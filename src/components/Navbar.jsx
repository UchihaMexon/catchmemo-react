import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <Link to="/" className="logo" style={{ textDecoration: "none" }}>
        Catchmemo
      </Link>
      <div className="hamburger">
        <span />
        <span />
        <span />
      </div>
      <div className="nav-menu">
        <div className="nav-links">
          <Link to="/celebration">Celebration</Link>
          <Link to="/wall-of-love">Wall of love</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/faq">FAQ</Link>
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
