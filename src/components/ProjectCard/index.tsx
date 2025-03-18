import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Tilt } from 'react-tilt';

interface ProjectCardProps {
  title?: string;
  description?: string;
  projectLink?: string;
  githubLink?: string;
  isComingSoon?: boolean;
}

const CardWrapper = styled(Tilt)`
  width: 100%;
  height: 100%;
  perspective: 1000px;
`;

const Card = styled(motion.div)`
  background: rgba(25, 30, 45, 0.7);
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  min-height: 320px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(52, 152, 219, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    background: linear-gradient(
      45deg,
      rgba(52, 152, 219, 0.05) 0%,
      rgba(155, 89, 182, 0.05) 25%,
      rgba(231, 76, 60, 0.05) 50%,
      rgba(155, 89, 182, 0.05) 75%,
      rgba(52, 152, 219, 0.05) 100%
    );
    top: -25%;
    left: -25%;
    transform: rotate(35deg);
    pointer-events: none;
  }

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
    transform: translateY(-5px);
  }
`;

const CardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #3498db, #9b59b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.6;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const Link = styled(motion.a)`
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  border: 1px solid rgba(52, 152, 219, 0.3);
  transition: all 0.3s ease;
  background: rgba(52, 152, 219, 0.1);
  
  &:hover {
    background: rgba(52, 152, 219, 0.2);
    border-color: rgba(52, 152, 219, 0.5);
    color: #ffffff;
  }
`;

const ComingSoon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    border: 2px solid rgba(52, 152, 219, 0.2);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(0.8);
      opacity: 0.6;
    }
    70% {
      transform: scale(1.2);
      opacity: 0;
    }
    100% {
      transform: scale(0.8);
      opacity: 0;
    }
  }
`;

// Particle effect for the card
const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 0;
  opacity: 0.3;
`;

const Particle = styled.div<{ size: number; x: number; y: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: #3498db;
  border-radius: 50%;
  top: ${props => props.y}%;
  left: ${props => props.x}%;
  animation: floatParticle 3s infinite ease-in-out;
  animation-delay: ${props => props.delay}s;
  
  @keyframes floatParticle {
    0%, 100% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-20px) translateX(10px);
    }
  }
`;

const generateParticles = (count: number) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 2;
    
    particles.push(
      <Particle key={i} size={size} x={x} y={y} delay={delay} />
    );
  }
  return particles;
};

const ProjectCard = ({ title, description, projectLink, githubLink, isComingSoon }: ProjectCardProps) => {
  if (isComingSoon) {
    return (
      <CardWrapper options={{ max: 15, scale: 1.05, speed: 300 }}>
        <Card
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ParticlesContainer>
            {generateParticles(10)}
          </ParticlesContainer>
          <ComingSoon>Coming soon</ComingSoon>
        </Card>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper options={{ max: 15, scale: 1.05, speed: 300 }}>
      <Card
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ParticlesContainer>
          {generateParticles(15)}
        </ParticlesContainer>
        
        <CardContent>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <LinksContainer>
            {projectLink && (
              <Link 
                href={projectLink} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Project link
              </Link>
            )}
            {githubLink && (
              <Link 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub link
              </Link>
            )}
          </LinksContainer>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default ProjectCard; 