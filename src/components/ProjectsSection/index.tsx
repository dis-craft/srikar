import styled from 'styled-components';
import ProjectCard from '../ProjectCard';

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
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

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ProjectsGrid>
    </section>
  );
};

export default ProjectsSection; 