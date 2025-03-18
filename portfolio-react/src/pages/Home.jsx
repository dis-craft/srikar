import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ResearchSection from '../components/sections/ResearchSection';
import TimelineSection from '../components/sections/TimelineSection';
import BlogsSection from '../components/sections/BlogsSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <ResearchSection />
      <TimelineSection />
      <BlogsSection />
      <ContactSection />
    </main>
  );
};

export default Home; 