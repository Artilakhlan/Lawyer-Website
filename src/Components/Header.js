import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Lawyer</h1>
      <div className="phone">
        <span className="phone-icon">&#9742;</span>
        <div className="phone-details">
  <p>
    <span className="consultation-text">Call for a free consultation</span>
    <br />
    3214-691-3411
  </p>
</div>

      </div>
      <a href="#" className="consultation-button">Free Consultation</a>
    </header>
  );
}

export default Header;
