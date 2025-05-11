import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName.toLowerCase());
  };

  const navItems = ["Home", "About", "Speakers", "Sponsors", "Contact"];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4">
      <div className="container-fluid">
        <a className="navbar-brand d-flex flex-column" href="/">
          <div>
            <span style={{ color: 'red', fontWeight: 'bold' }}>TEDx</span>PondicherryUniversity
          </div>
          <small style={{ fontSize: '0.75rem', color: 'white' }}>
            x = independently organized TED event
          </small>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="navb-items collapse navbar-collapse justify-content-space-between" id="navbarNav">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li className="nav-item" key={item}>
                <a
                  className={`nav-link ${activeLink === item.toLowerCase() ? "active" : ""}`}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => handleLinkClick(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;