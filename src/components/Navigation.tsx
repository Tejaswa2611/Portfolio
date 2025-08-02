import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'Introduction' },
    { id: 'experience', label: 'Work Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Technical Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const navItems = [
      { id: 'about', label: 'Introduction' },
      { id: 'experience', label: 'Work Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Technical Skills' },
      { id: 'contact', label: 'Contact' }
    ];

    const handleScroll = () => {
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-12 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="space-y-8">
        {navItems.map((item) => (
          <div key={item.id} className="relative flex items-center group">
            {/* Dash indicator */}
            <div className={`w-8 h-px mr-6 transition-all duration-300 ${
              activeSection === item.id 
                ? 'bg-white' 
                : 'bg-gray-600 group-hover:bg-gray-400'
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
  );
};

export default Navigation;