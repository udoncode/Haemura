import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  let active = isOpen ? "active" : ""
  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={active}>
      <div className="img-box">
        <Link to="/">
          <img src="/img/logo.png" alt="logo" />
        </Link>
      </div>

      <ul className="menu">
        <li>
          <Link to="/explore/all/1" onClick={() => setIsOpen(false)}>
            <span>Explore</span>
          </Link>
        </li>
        <li>
          <Link to="/search" onClick={() => setIsOpen(false)}>
            <span>Search</span>
          </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
