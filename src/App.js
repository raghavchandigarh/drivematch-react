import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Render Navbar for other routes */}
        <Route path="*" element={<><Navbar /></>} />
      </Routes>
    </Router>
  );
}

export default App;
