import React from 'react';
import '../styles/homepage.css';
import logo from '../assets/logo.png';

function HomePage() {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <div className="header-content">
          <img src={logo} alt="DriveMatch Logo" className="logo" />
          <nav className="nav">
            <ul className="nav-links">
              <li className="dropdown">
                <a href="/">Home</a>
              </li>
              <li className="dropdown">
                <a href="/rent-out">Rent Out Your Vehicle</a>
                <ul className="dropdown-menu">
                  <li><a href="/rent-out">Option 1</a></li>
                  <li><a href="/rent-out">Option 2</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="/language">Language</a>
                <ul className="dropdown-menu">
                  <li><a href="/language/en">English</a></li>
                  <li><a href="/language/es">Spanish</a></li>
                </ul>
              </li>
              <li><a href="/login">Sign Up/Log In</a></li>
            </ul>
          </nav>
        </div>
        <div className="hero">
          <h1 className="hero-title">Share a Vehicle, Help Save the Planet</h1>
          <p className="hero-subtitle">Find the perfect vehicle wherever you need it.</p>
        </div>
      </header>

      {/* Search Section */}
      <div className="search-container">
        <form className="search-form">
          <input type="text" placeholder="Where to?" />
          <select>
            <option>Select Vehicle Type</option>
            <option>Car</option>
            <option>Truck</option>
            <option>Bike</option>
          </select>
          <input type="date" placeholder="Pick-up Date" />
          <input type="date" placeholder="Return Date" />
          <button type="submit">Search</button>
        </form>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 DriveMatch. All rights reserved.</p>
        <a href="/privacy">Privacy Policy</a>
      </footer>
    </div>
  );
}

export default HomePage;
