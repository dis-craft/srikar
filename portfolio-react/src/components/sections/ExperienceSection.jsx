import { motion } from 'framer-motion';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Coming soon",
      description: "Loading...",
      date: "Loading..."
    },
    {
      title: "Coming soon",
      description: "Loading...",
      date: "Loading..."
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Work Experience</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="timeline">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="content">
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                <span className="date">{experience.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 