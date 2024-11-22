import React from 'react';
import '../styles/homepage.css';
import logo from '../assets/logo.png';
import customerImage from '../assets/customer-placeholder.png'; // Replace with actual customer images

function HomePage() {
  return (
    <div className="homepage bg-black text-white min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="logo-container">
            <img src={logo} alt="DriveMatch Logo" className="h-12" />
          </div>
          <nav className="space-x-6">
            <a href="/" className="text-gray-400 hover:text-white transition">Home</a>
            <a href="/rent-out" className="text-gray-400 hover:text-white transition">Rent Out Your Vehicle</a>
            <a href="/language" className="text-gray-400 hover:text-white transition">Language</a>
            <a href="/login" className="text-gray-400 hover:text-white transition">Sign Up/Log In</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        {/* Headline */}
        <section className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4 text-green-500">Share a Vehicle, Help Save the Planet</h1>
          <p className="text-lg text-gray-400">Find the perfect vehicle wherever you need it.</p>
        </section>

        {/* Search Bar */}
        <section className="bg-gray-900 py-8">
          <div className="container mx-auto px-6">
            <form className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Where to?"
                className="flex-grow px-4 py-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-green-500"
              />
              <select
                className="px-4 py-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-green-500"
              >
                <option>Select Vehicle Type</option>
                <option>Car</option>
                <option>Truck</option>
                <option>Bike</option>
              </select>
              <input
                type="date"
                className="px-4 py-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-green-500"
              />
              <input
                type="date"
                className="px-4 py-3 rounded bg-gray-700 text-white border border-gray-600 focus:ring focus:ring-green-500"
              />
              <button
                type="submit"
                className="bg-green-500 text-black px-6 py-3 rounded hover:bg-green-400 transition"
              >
                Search
              </button>
            </form>
          </div>
        </section>

        {/* Customer Reviews */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-center text-green-500 mb-6">What Our Customers Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Review 1 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <img
                  src={customerImage}
                  alt="Customer"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <p className="text-lg font-bold text-white">John Doe</p>
                <p className="text-gray-400">“Excellent service! Renting a car has never been easier.”</p>
              </div>
              {/* Review 2 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <img
                  src={customerImage}
                  alt="Customer"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <p className="text-lg font-bold text-white">Jane Smith</p>
                <p className="text-gray-400">“I found the perfect car in minutes. Highly recommend!”</p>
              </div>
              {/* Review 3 */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                <img
                  src={customerImage}
                  alt="Customer"
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <p className="text-lg font-bold text-white">Emily White</p>
                <p className="text-gray-400">“Affordable and super easy to use. Love it!”</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>&copy; 2024 DriveMatch. All rights reserved.</p>
        <a href="/privacy" className="text-green-500 hover:underline">Privacy Policy</a>
      </footer>
    </div>
  );
}

export default HomePage;
