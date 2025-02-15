import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth } from "./Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaUserCircle } from "react-icons/fa"; // User Icon
import "./Navbar.css";

const Navbar = ({ user, setUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Track authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed in Navbar component:", user); // Log the user object
      setUser(user);
    });

    return () => unsubscribe();
  }, [setUser]);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

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
          <li>
            {user ? (
              <FaUserCircle className="user-icon" onClick={handleLogout} title="Logout" />
            ) : (
              <Link to="/Auth" className={location.pathname === "/Auth" ? "active" : ""}>Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;