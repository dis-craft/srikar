import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';
import './ProjectsSection.css';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Initialize vanilla-tilt on the card
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
      });
    }

    // Cleanup vanilla-tilt instance
    return () => {
      if (cardRef.current && cardRef.current.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <motion.div 
      className="project-card-wrapper"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div ref={cardRef} className="project-card">
        <div className="project-card-content">
          {project.title ? (
            <>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-card-links">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Project Link
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub Link
                  </a>
                )}
              </div>
            </>
          ) : (
            <div className="cursive">
              <p>Coming soon!</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      title: "DSA-Wizard",
      description: "The DSA-Bot is an interactive tool designed to teach Data Structures and Algorithms (DSA) using the Socratic method. Instead of giving direct answers, it asks thought-provoking questions to help users develop a deeper understanding of DSA concepts. This bot offers an engaging, question-driven learning experience for students and developers aiming to master DSA efficiently.",
      liveLink: "https://dsa-wizard.pages.dev/",
      githubLink: "https://github.com/dis-craft/DSA-Bot/tree/main"
    },
    {
      title: "Tensor MVJCE",
      description: "Designed and developed a visually engaging website for the Tensor Club to showcase its teams, blogs, updates, projects, and recruitment activities. The site features a sleek, modern UI with interactive elements to enhance user experience and provide comprehensive information about the club's initiatives and contributions.",
      liveLink: "https://tensormvjce.pages.dev",
      githubLink: "https://github.com/tensormvjce"
    },
    {
      title: "Tensor portal",
      description: "A web-based portal designed for the Tensor Club to manage Instagram post scheduling efficiently. It allows team members to book roles for content creation and design for two weekly posts while displaying availability and tracking assignments. The portal enforces review deadlines to streamline workflow and ensure consistent posting.",
      liveLink: "https://tensormvjce.github.io/portal/",
      githubLink: "https://github.com/tensormvjce/portal"
    },
    {
      title: "Falcon",
      description: "Falcon is a tool designed to estimate carbon emissions and provide actionable insights for reversing them. It calculates emissions based on user inputs and suggests the number of plants and area required for reforestation to offset the carbon footprint, promoting sustainability and environmental awareness.",
      liveLink: "https://team-falcom.pages.dev/",
      githubLink: "https://github.com/dis-craft/Falcon"
    },
    {}, // Coming soon placeholder
    {}  // Coming soon placeholder
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Projects</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 