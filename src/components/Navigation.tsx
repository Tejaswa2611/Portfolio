import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  const navItems = [
    { id: 'about', label: 'Introduction' },
    { id: 'experience', label: 'Work Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Technical Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const navItems = [
      { id: 'about', label: 'Introduction' },
      { id: 'experience', label: 'Work Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'education', label: 'Education' },
      { id: 'skills', label: 'Technical Skills' },
      { id: 'contact', label: 'Contact' }
    ];

    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      // Show navigation while scrolling
      setIsScrolling(true);
      
      // Hide navigation after scrolling stops
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 1500);

      // Check if user is in hero section
      const heroSection = document.getElementById('about');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isHeroVisible = rect.bottom > window.innerHeight * 0.2;
        setIsInHeroSection(isHeroVisible);
      }

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block group">
      {/* Hover trigger area */}
      <div className="w-16 h-96 absolute left-0 top-1/2 transform -translate-y-1/2"></div>
      
      {/* Navigation content */}
      <nav className={`ml-4 transition-all duration-300 transform translate-x-0 ${
        isInHeroSection
          ? 'opacity-100 translate-x-8' // Always visible in hero section
          : isScrolling 
            ? 'opacity-100 translate-x-8' // Show while scrolling in other sections
            : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-8' // Hide/show on hover in other sections
      }`}>
        <div className="space-y-8">
          {navItems.map((item) => (
            <div key={item.id} className="relative flex items-center group/item">
              {/* Dash indicator */}
              <div className={`w-8 h-px mr-6 transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-white' 
                  : 'bg-gray-600 group-hover/item:bg-gray-400'
              }`}></div>
              
              {/* Navigation text */}
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-left font-bold text-base tracking-wide transition-all duration-300 whitespace-nowrap ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                style={{ fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
              >
                {item.label}
              </button>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;