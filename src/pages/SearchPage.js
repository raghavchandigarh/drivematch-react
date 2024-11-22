import React, { useState } from 'react';

function SearchPage() {
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for cars in ${location}`);
  };

  return (
    <div>
      <h1>Search Cars</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchPage;
