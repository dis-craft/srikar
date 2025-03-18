import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';
import ParticlesBackground from '../3d/ParticlesBackground';
import './HeroSection.css';

const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(containerRef.current, {
      max: 5,
      speed: 400,
      glare: true,
      'max-glare': 0.2,
      gyroscope: true
    });

    return () => {
      if (containerRef.current) {
        containerRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <section className="hero-section">
      <ParticlesBackground />
      <div className="hero-overlay"></div>
      <motion.div 
        ref={containerRef}
        className="hero-content container glass-card"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="hero-title">
          Welcome to My Portfolio
        </motion.h1>
        
        <motion.p variants={itemVariants} className="hero-subtitle">
          Hi, I'm Srikar! A passionate developer and researcher.
        </motion.p>
        
        <motion.div variants={itemVariants} className="hero-cta">
          <motion.a 
            href="#projects" 
            className="hero-button primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
          <motion.a 
            href="#contact" 
            className="hero-button secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div 
          className="tech-stack"
          variants={itemVariants}
        >
          <div className="tech-item">React</div>
          <div className="tech-item">Node.js</div>
          <div className="tech-item">Python</div>
          <div className="tech-item">Three.js</div>
          <div className="tech-item">Machine Learning</div>
        </motion.div>
      </motion.div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="scroll-arrow">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 