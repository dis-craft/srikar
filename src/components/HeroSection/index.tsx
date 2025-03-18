import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Tilt } from 'react-tilt';
import SpaceBackground from '../SpaceBackground';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  position: relative;
  overflow: hidden;
`;

const ContentContainer = styled.div`
  z-index: 1;
  text-align: center;
  color: white;
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #3498db, #9b59b6, #e74c3c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 30px rgba(52, 152, 219, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(45deg, #3498db, #9b59b6);
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(52, 152, 219, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(52, 152, 219, 0.4);
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.6rem 1.5rem;
  }
`;

const FloatingCard = styled(Tilt)`
  position: absolute;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  color: white;
  width: 300px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  @media (max-width: 1200px) {
    display: none;
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
  color: white;
  cursor: pointer;

  span {
    font-size: 0.9rem;
  }
`;

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroContainer>
      {/* 3D Space Background */}
      <SpaceBackground />
      
      {/* Floating UI Elements */}
      <FloatingCard 
        options={{ max: 25, scale: 1.05 }} 
        style={{ top: '25%', right: '15%' }}
      >
        <span>Explore the universe of possibilities</span>
      </FloatingCard>
      
      <FloatingCard 
        options={{ max: 25, scale: 1.05 }} 
        style={{ bottom: '25%', left: '15%' }}
      >
        <span>Innovative solutions for the future</span>
      </FloatingCard>
      
      {/* Main Content */}
      <ContentContainer>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to My Universe
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Explore my portfolio and discover amazing projects
        </Subtitle>
        <CTAButton
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Projects
        </CTAButton>
      </ContentContainer>
      
      {/* Scroll Indicator */}
      <ScrollIndicator
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.5, ease: 'easeInOut' } 
        }}
      >
        <span>Scroll down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection; 