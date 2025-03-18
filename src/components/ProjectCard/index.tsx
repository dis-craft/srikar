import { motion } from 'framer-motion';
import styled from 'styled-components';
import Tilt from 'react-tilt';

interface ProjectCardProps {
  title: string;
  description: string;
  projectLink?: string;
  githubLink?: string;
  isComingSoon?: boolean;
}

const CardWrapper = styled(Tilt)`
  width: 100%;
  height: 100%;
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const CardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  color: #3498db;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const Link = styled.a`
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
  }
`;

const ComingSoon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-style: italic;
  color: #666;
`;

const ProjectCard = ({ title, description, projectLink, githubLink, isComingSoon }: ProjectCardProps) => {
  if (isComingSoon) {
    return (
      <CardWrapper options={{ max: 5, scale: 1.05 }}>
        <Card>
          <ComingSoon>Coming soon!</ComingSoon>
        </Card>
      </CardWrapper>
    );
  }

  return (
    <CardWrapper options={{ max: 5, scale: 1.05 }}>
      <Card
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <CardContent>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <LinksContainer>
            {projectLink && <Link href={projectLink} target="_blank" rel="noopener noreferrer">Project link</Link>}
            {githubLink && <Link href={githubLink} target="_blank" rel="noopener noreferrer">GitHub link</Link>}
          </LinksContainer>
        </CardContent>
      </Card>
    </CardWrapper>
  );
};

export default ProjectCard; 