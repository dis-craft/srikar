import { useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 100px 20px;
`;

const Timeline = styled.div`
  position: relative;
  padding: 20px 0;

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #3498db;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 3px;

    @media screen and (max-width: 600px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ position: 'left' | 'right' }>`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  ${props => props.position === 'left' ? 'left: 0;' : 'left: 50%;'}

  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: ${props => props.position === 'left' ? '-17px' : 'auto'};
    left: ${props => props.position === 'right' ? '-16px' : 'auto'};
    background-color: #f0f0f0;
    border: 4px solid #3498db;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  &::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    ${props => props.position === 'left' ? 'right: 30px;' : 'left: 30px;'}
    border: medium solid #fff;
    border-width: ${props => props.position === 'left' ? '10px 0 10px 10px' : '10px 10px 10px 0'};
    border-color: ${props => props.position === 'left' 
      ? 'transparent transparent transparent #fff'
      : 'transparent #fff transparent transparent'};
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;

    &::before {
      left: 60px;
      border: medium solid #fff;
      border-width: 10px 10px 10px 0;
      border-color: transparent #fff transparent transparent;
    }

    &::after {
      left: 15px;
    }
  }
`;

const Content = styled.div`
  padding: 20px 30px;
  background-color: #fff;
  position: relative;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    color: #3498db;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }

  .date {
    font-style: italic;
    color: #777;
  }

  a {
    color: #3498db;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const timelineData = [
  {
    title: 'Maths python tool',
    description: 'Built a tool using streamlit.io to solve maths using python libraries. Reached and helped 100+ students.',
    date: 'February 6 2025',
    projectLink: 'https://pythonwmath.streamlit.app/',
    position: 'right'
  },
  {
    title: 'C Language',
    description: 'Completed 10hr C-language tutorial.',
    date: 'January 29 2025',
    githubLink: 'https://github.com/dis-craft/C-Language/',
    position: 'left'
  },
  // Add more timeline items here...
];

const TimelineComponent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <TimelineContainer>
      <Timeline>
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            position={item.position as 'left' | 'right'}
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Content>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {item.projectLink && (
                <a href={item.projectLink} target="_blank" rel="noopener noreferrer">
                  Project link
                </a>
              )}
              {item.githubLink && (
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub link
                </a>
              )}
              <p className="date">{item.date}</p>
            </Content>
          </TimelineItem>
        ))}
      </Timeline>
    </TimelineContainer>
  );
};

export default TimelineComponent; 