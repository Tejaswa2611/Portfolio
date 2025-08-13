import SpotlightCursor from '@/components/SpotlightCursor';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import EducationSection from '@/components/sections/EducationSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <SpotlightCursor />
      <Navigation />
      
      <main className="pt-16 lg:pt-0">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
