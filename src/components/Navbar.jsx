import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get current route

  return (
    <div className="navbar">
      <nav>
        <div className="logo">Terratech</div>
        <input
          type="checkbox"
          id="click"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
          </li>
          <li>
            <Link to="/About" className={location.pathname === "/About" ? "active" : ""}>About</Link>
          </li>
          <li>
            <Link to="/Services" className={location.pathname === "/Services" ? "active" : ""}>Services</Link>
          </li>
          <li>
            <Link to="/Feedback" className={location.pathname === "/Feedback" ? "active" : ""}>Feedback</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
