import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../css/Nav.css";
const Nav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="nav-left"></div>
        
        {!isMobile ? (
          <div className="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="active-indicator" />
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div className="mobile-nav-wrapper">
            <button 
              onClick={toggleMenu} 
              className="menu-button" 
              aria-label="Menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>

            <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div 
              className={`overlay ${isOpen ? 'open' : ''}`} 
              onClick={closeMenu} 
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;