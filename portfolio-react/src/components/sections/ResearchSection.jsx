import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';
import './ResearchSection.css';

const ResearchCard = ({ research, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
      });
    }

    return () => {
      if (cardRef.current && cardRef.current.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <motion.div 
      className="research-card-wrapper"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div ref={cardRef} className="research-card">
        <div className="research-card-content">
          {research.title ? (
            <>
              <h3>{research.title}</h3>
              <p>{research.description}</p>
              <div className="research-card-links">
                {research.liveLink && (
                  <a href={research.liveLink} target="_blank" rel="noopener noreferrer">
                    View Research
                  </a>
                )}
                {research.githubLink && (
                  <a href={research.githubLink} target="_blank" rel="noopener noreferrer">
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

const ResearchSection = () => {
  const researches = [
    {}, // Coming soon placeholder
    {}, // Coming soon placeholder
    {}, // Coming soon placeholder
    {}, // Coming soon placeholder
    {}, // Coming soon placeholder
    {}  // Coming soon placeholder
  ];

  return (
    <section className="research-section" id="research">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Research</h2>
          <div className="section-divider"></div>
        </motion.div>

        <div className="research-grid">
          {researches.map((research, index) => (
            <ResearchCard key={index} research={research} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection; 