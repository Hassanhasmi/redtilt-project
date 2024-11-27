import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'; // Correct place for BrowserRouter
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Blogs from './components/Blogs';
import ContactUs from './components/ContactUs';
import './styles/App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  };

  return (
    <BrowserRouter> {/* Router only here */}
      <div className="app">
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        
        {/* Main content area where the routed pages will show */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
