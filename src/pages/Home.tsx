import { useEffect } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

const WelcomeSection = styled(motion.section)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 0 20px;

  h1 {
    font-size: 4rem;
    color: #2c3e50;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #2c3e50;
  cursor: pointer;

  span {
    font-size: 0.9rem;
  }
`;

const ScrollToTopButton = styled(motion.button)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: #3498db;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;

  &:hover {
    background: #2980b9;
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

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <WelcomeSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <h1>Welcome to My Portfolio</h1>
          <ScrollIndicator
            onClick={scrollToProjects}
            whileHover={{ y: 5 }}
            transition={{ repeat: Infinity, duration: 1 }}
          >
            <span>Scroll down</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </ScrollIndicator>
        </div>
      </WelcomeSection>

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
    </>
  );
};

export default Home; 