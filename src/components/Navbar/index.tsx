import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  img {
    height: 40px;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
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
  color: ${props => props.active ? '#3498db' : '#333'};
  font-weight: ${props => props.active ? '600' : '400'};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background: #3498db;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">
          <img src="/Images/mainlogo.png" alt="Logo" />
        </Logo>
        
        <NavLinks>
          <NavLink to="/#projects" active={location.hash === '#projects'}>Projects</NavLink>
          <NavLink to="/#experience" active={location.hash === '#experience'}>Experience</NavLink>
          <NavLink to="/#research" active={location.hash === '#research'}>Research</NavLink>
          <NavLink to="/timeline" active={location.pathname === '/timeline'}>Timeline</NavLink>
          <NavLink to="/#blogs" active={location.hash === '#blogs'}>Blogs</NavLink>
          <NavLink to="/#footer" active={location.hash === '#footer'}>Contact</NavLink>
        </NavLinks>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </MobileMenuButton>
      </NavContent>

      <MobileMenu
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <NavLink to="/#projects">Projects</NavLink>
        <NavLink to="/#experience">Experience</NavLink>
        <NavLink to="/#research">Research</NavLink>
        <NavLink to="/timeline">Timeline</NavLink>
        <NavLink to="/#blogs">Blogs</NavLink>
        <NavLink to="/#footer">Contact</NavLink>
      </MobileMenu>
    </NavContainer>
  );
};

export default Navbar; 