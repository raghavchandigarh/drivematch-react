import React from 'react';
import '../styles/homepage.css';
import logo from '../assets/logo.png';

function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="homepage-header">
        <img src={logo} alt="DriveMatch Logo" className="homepage-logo" />
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/rent-out">Rent Out Your Vehicle</a></li>
            <li><a href="/language">Language</a></li>
            <li><a href="/login">Sign Up/Log In</a></li>
          </ul>
        </nav>
      </header>

      <div className="hero">
        <h1>Share a Vehicle, Help Save the Planet</h1>
        <p>Find the perfect vehicle wherever you need it.</p>
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

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 DriveMatch. All rights reserved.</p>
        <a href="/privacy">Privacy Policy</a>
      </footer>
    </div>
  );
}

export default HomePage;
