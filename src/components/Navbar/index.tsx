import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 11, 20, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const LogoText = styled(motion.h1)`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #3498db, #9b59b6, #e74c3c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)<{ active?: boolean }>`
  position: relative;
  color: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
  font-weight: ${props => props.active ? '600' : '400'};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: linear-gradient(45deg, #3498db, #9b59b6);
    transition: width 0.3s ease;
  }

  &:hover {
    color: white;
    &::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 11, 20, 0.95);
    backdrop-filter: blur(10px);
    padding: 6rem 2rem 2rem;
    z-index: 1000;
  }
`;

const MobileNavLink = styled(Link)<{ active?: boolean }>`
  color: ${props => props.active ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
  text-decoration: none;
  font-size: 1.5rem;
  padding: 1rem 0;
  text-align: center;
  
  &:hover {
    color: white;
  }
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.3)' : 'none',
        background: scrolled ? 'rgba(10, 11, 20, 0.8)' : 'rgba(10, 11, 20, 0.5)'
      }}
    >
      <NavContent>
        <LogoLink to="/">
          <LogoText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cosmic Portfolio
          </LogoText>
        </LogoLink>
        
        <NavLinks>
          <NavLink to="/#projects" active={location.hash === '#projects'}>Projects</NavLink>
          <NavLink to="/timeline" active={location.pathname === '/timeline'}>Timeline</NavLink>
          <NavLink to="/#contact" active={location.hash === '#contact'}>Contact</NavLink>
        </NavLinks>

        <MobileMenuButton 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <motion.path 
                d="M18 6L6 18M6 6l12 12"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.path 
                d="M3 12h18M3 6h18M3 18h18"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </svg>
        </MobileMenuButton>
      </NavContent>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLink to="/#projects" active={location.hash === '#projects'}>Projects</MobileNavLink>
            <MobileNavLink to="/timeline" active={location.pathname === '/timeline'}>Timeline</MobileNavLink>
            <MobileNavLink to="/#contact" active={location.hash === '#contact'}>Contact</MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
};

export default Navbar; 