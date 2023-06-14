import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">About Us</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Practice Areas</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Our Team</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Blog</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">News &amp; Resources</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
