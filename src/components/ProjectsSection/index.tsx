import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from '../ProjectCard';

const SectionContainer = styled.section`
  background-color: #0a0b14;
  padding: 100px 20px;
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: white;
  background: linear-gradient(45deg, #3498db, #9b59b6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 4px;
    background: linear-gradient(45deg, #3498db, #9b59b6);
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
`;

const TitleContainer = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 4rem;
`;

// Animated particles in background
const Particles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
`;

const Particle = styled.div<{ size: number; posX: number; posY: number; duration: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: rgba(52, 152, 219, 0.15);
  border-radius: 50%;
  top: ${props => props.posY}%;
  left: ${props => props.posX}%;
  animation: float ${props => props.duration}s infinite linear;
  
  @keyframes float {
    0% {
      transform: translateY(0) translateX(0);
    }
    25% {
      transform: translateY(-20px) translateX(10px);
    }
    50% {
      transform: translateY(0) translateX(20px);
    }
    75% {
      transform: translateY(20px) translateX(10px);
    }
    100% {
      transform: translateY(0) translateX(0);
    }
  }
`;

const projects = [
  {
    title: 'DSA-Wizard',
    description: 'The DSA-Bot is an interactive tool designed to teach Data Structures and Algorithms (DSA) using the Socratic method. Instead of giving direct answers, it asks thought-provoking questions to help users develop a deeper understanding of DSA concepts.',
    projectLink: 'https://dsa-wizard.pages.dev/',
    githubLink: 'https://github.com/dis-craft/DSA-Bot/tree/main'
  },
  {
    title: 'Tensor MVJCE',
    description: 'Designed and developed a visually engaging website for the Tensor Club to showcase its teams, blogs, updates, projects, and recruitment activities. The site features a sleek, modern UI with interactive elements.',
    projectLink: 'https://tensormvjce.pages.dev',
    githubLink: 'https://github.com/tensormvjce'
  },
  {
    title: 'Tensor portal',
    description: 'A web-based portal designed for the Tensor Club to manage Instagram post scheduling efficiently. It allows team members to book roles for content creation and design for two weekly posts.',
    projectLink: 'https://tensormvjce.github.io/portal/',
    githubLink: 'https://github.com/tensormvjce/portal'
  },
  {
    title: 'Falcon',
    description: 'Falcon is a tool designed to estimate carbon emissions and provide actionable insights for reversing them. It calculates emissions based on user inputs and suggests the number of plants and area required for reforestation.',
    projectLink: 'https://team-falcom.pages.dev/',
    githubLink: 'https://github.com/dis-craft/Falcon'
  },
  {
    isComingSoon: true
  },
  {
    isComingSoon: true
  }
];

// Generate random particles for the background
const renderParticles = (count: number) => {
  const particles = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 8 + 2;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 15 + 5;
    
    particles.push(
      <Particle 
        key={i} 
        size={size} 
        posX={posX} 
        posY={posY} 
        duration={duration}
      />
    );
  }
  return particles;
};

const ProjectsSection = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <SectionContainer id="projects">
      <Particles>
        {renderParticles(30)}
      </Particles>
      
      <TitleContainer ref={titleRef}>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Stellar Projects
        </SectionTitle>
      </TitleContainer>
      
      <ProjectsGrid
        ref={projectsRef}
        variants={containerVariants}
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </ProjectsGrid>
    </SectionContainer>
  );
};

export default ProjectsSection; 