import { useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const Container = styled.div`
  background-color: #0a0b14;
  min-height: 100vh;
  color: white;
`;

const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: linear-gradient(45deg, #3498db, #9b59b6);
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
  z-index: 1000;

  &:hover {
    background: linear-gradient(45deg, #2980b9, #8e44ad);
  }

  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }
`;

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.getElementById('scrollTopBtn');
      if (scrollButton) {
        scrollButton.style.display = window.scrollY > 300 ? 'flex' : 'none';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container>
      <HeroSection />
      <ProjectsSection />
      <ContactSection />

      <ScrollToTopButton
        id="scrollTopBtn"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ display: 'none' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </ScrollToTopButton>
    </Container>
  );
};

export default Home; 