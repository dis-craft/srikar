import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionContainer = styled.section`
  background-color: #0a0b14;
  padding: 100px 20px;
  position: relative;
  overflow: hidden;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
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

const TitleContainer = styled.div`
  text-align: center;
  position: relative;
  margin-bottom: 4rem;
`;

const FormSection = styled(motion.div)`
  background: rgba(25, 30, 45, 0.7);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(52, 152, 219, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    background: linear-gradient(
      45deg,
      rgba(52, 152, 219, 0.05) 0%,
      rgba(155, 89, 182, 0.05) 25%,
      rgba(231, 76, 60, 0.05) 50%,
      rgba(155, 89, 182, 0.05) 75%,
      rgba(52, 152, 219, 0.05) 100%
    );
    top: -25%;
    left: -25%;
    transform: rotate(35deg);
    pointer-events: none;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 0.95rem;
`;

const Input = styled.input`
  padding: 0.9rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(52, 152, 219, 0.2);
  border-radius: 8px;
  font-size: 1rem;
  color: white;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(52, 152, 219, 0.5);
    box-shadow: 0 0 15px rgba(52, 152, 219, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const TextArea = styled.textarea`
  padding: 0.9rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(52, 152, 219, 0.2);
  border-radius: 8px;
  font-size: 1rem;
  color: white;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: rgba(52, 152, 219, 0.5);
    box-shadow: 0 0 15px rgba(52, 152, 219, 0.2);
  }
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(45deg, #3498db, #9b59b6);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`;

const SocialSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: rgba(25, 30, 45, 0.7);
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(52, 152, 219, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    background: linear-gradient(
      45deg,
      rgba(52, 152, 219, 0.05) 0%,
      rgba(155, 89, 182, 0.05) 25%,
      rgba(231, 76, 60, 0.05) 50%,
      rgba(155, 89, 182, 0.05) 75%,
      rgba(52, 152, 219, 0.05) 100%
    );
    top: -25%;
    left: -25%;
    transform: rotate(35deg);
    pointer-events: none;
  }
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #3498db, #9b59b6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    display: inline-block;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  z-index: 1;
`;

const SocialLink = styled(motion.a)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.8rem;
  border-radius: 50px;
  background: rgba(52, 152, 219, 0.1);
  border: 1px solid rgba(52, 152, 219, 0.2);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background: rgba(52, 152, 219, 0.2);
    border-color: rgba(52, 152, 219, 0.5);
    color: white;
    transform: translateY(-3px);
  }
`;

// Background stars
const Stars = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Star = styled.div<{ size: number; top: number; left: number; duration: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: white;
  border-radius: 50%;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  opacity: 0.3;
  animation: twinkle ${props => props.duration}s infinite ease-in-out;
  
  @keyframes twinkle {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.2);
    }
  }
`;

const renderStars = (count: number) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 2 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 3 + 2;
    
    stars.push(
      <Star 
        key={i} 
        size={size} 
        top={top} 
        left={left} 
        duration={duration}
      />
    );
  }
  return stars;
};

const ContactSection = () => {
  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });
  
  const [socialRef, socialInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <SectionContainer id="contact">
      <Stars>
        {renderStars(50)}
      </Stars>
      
      <TitleContainer ref={titleRef}>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Contact Me
        </SectionTitle>
      </TitleContainer>
      
      <ContactContainer>
        <FormSection
          ref={formRef}
          initial={{ opacity: 0, x: -50 }}
          animate={formInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Form action="https://formspree.io/f/xbljkdgp" method="POST">
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="Your name" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Your email" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea name="message" id="message" placeholder="Your message" required />
            </FormGroup>
            <SubmitButton 
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </SubmitButton>
          </Form>
        </FormSection>

        <SocialSection
          ref={socialRef}
          initial={{ opacity: 0, x: 50 }}
          animate={socialInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3>Connect With Me</h3>
          <SocialLinks>
            <SocialLink 
              href="https://x.com/w_srikar" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
              </svg>
              Twitter
            </SocialLink>
            <SocialLink 
              href="https://github.com/dis-craft" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.164 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/in/srikar-t-118581286/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69-.92 0-1.67.76-1.67 1.69a1.68 1.68 0 001.67 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              LinkedIn
            </SocialLink>
          </SocialLinks>
        </SocialSection>
      </ContactContainer>
    </SectionContainer>
  );
};

export default ContactSection; 