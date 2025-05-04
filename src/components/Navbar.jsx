import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4">
      <div className="container-fluid">
        <a className="navbar-brand d-flex flex-column" href="#">
          <div><span style={{ color: 'red', fontWeight: 'bold' }}>TEDx</span>PondicherryUniversity</div>
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
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Speakers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sponsors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Season 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
