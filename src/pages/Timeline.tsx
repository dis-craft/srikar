import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import TimelineComponent from '../components/Timeline';

const TimelinePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <TimelineComponent />
    </motion.div>
  );
};

export default TimelinePage; 