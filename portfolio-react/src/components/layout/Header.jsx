import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <div className="container header-container">
        <Link to="/" className="logo-container">
          <img src="/images/mainlogo.png" alt="Srikar's Logo" className="logo" />
        </Link>

        <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link to="/#projects" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
          <Link to="/#experience" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Experience</Link>
          <Link to="/#research" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Research</Link>
          <Link to="/timeline" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Timeline</Link>
          <Link to="/#blogs" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link>
          <Link to="/#contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header; 