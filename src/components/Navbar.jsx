import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Brightness4, Brightness7 } from '@material-ui/icons';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  // State to handle the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navbar container */}
      <div className="navbar_container">
        
        {/* Company Logo - Wrapped with Link to navigate to Home */}
        <div className="compny_logo">
          <Link to="/" className="logo-link">
            <h3>
              <span className="R_text">R</span>edTilt
            </h3>
          </Link>
        </div>

        {/* Web Pages Links - Visible on Desktop and when mobile menu is closed */}
        <div className={`web_pages ${isMenuOpen ? 'show_menu' : ''}`}>
          <Link to="/" className="Home">Home</Link>
          <Link to="/services" className="Services">Services</Link>
          <Link to="/blogs" className="Blogs">Blogs</Link>
          <Link to="/contact-us" className="Contactus">Contact Us</Link>
        </div>

        {/* Theme Toggle and Start Project Section */}
        <div className="themechange_container">
          {/* Theme icon that toggles between light/dark mode */}
          <div className="theme_icon" onClick={toggleTheme}>
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </div>

          {/* Start a Project text */}
          <div className="project_text">Start a Project</div>

          {/* Mobile Menu Icon */}
          <div className="menu_icon" onClick={toggleMenu}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Only visible when the mobile menu is open */}
      {isMenuOpen && (
        <div className="mobile_menu">
          <Link to="/" className="Home">Home</Link>
          <Link to="/services" className="Services">Services</Link>
          <Link to="/blogs" className="Blogs">Blogs</Link>
          <Link to="/contact-us" className="Contactus">Contact Us</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
