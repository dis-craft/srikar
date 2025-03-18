import { motion } from 'framer-motion';
import './TimelineSection.css';

const TimelineSection = () => {
  const timelineData = [
    {
      year: '2023',
      title: 'Graduated from University',
      description: 'Completed my degree in Computer Science with a focus on AI and Machine Learning.'
    },
    {
      year: '2022',
      title: 'Research Internship',
      description: 'Worked on cutting-edge research in natural language processing at a leading tech company.'
    },
    {
      year: '2021',
      title: 'Software Engineering Internship',
      description: 'Developed full-stack applications using modern technologies and best practices.'
    },
    {
      year: '2020',
      title: 'Started Learning Web Development',
      description: 'Began my journey in web development, learning HTML, CSS, and JavaScript.'
    }
  ];

  return (
    <section className="timeline-section" id="timeline">
      <div className="section-header">
        <h2>My Journey</h2>
        <div className="section-divider"></div>
      </div>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="timeline-dot"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection; 