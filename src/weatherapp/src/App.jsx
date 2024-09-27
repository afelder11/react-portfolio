import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Weather from './components/Weather'; // Import Weather.jsx (not Weather.css)
import Home from './components/Home'; // Optional: if you have a Home component
import Navbar from './components/Navbar'; // Optional: if you have a Navbar component

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Optional Navbar for navigation */}
        <Navbar />

        {/* Define the routes */}
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Weather app route */}
          <Route path="/weatherapp" element={<Weather />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
