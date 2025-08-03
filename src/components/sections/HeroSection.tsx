import { useEffect, useState } from 'react';
import { Mail, User, Briefcase } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const fullText = 'Full Stack Engineer';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const quickActions = [
    {
      icon: Mail,
      label: "Contact Me",
      target: "contact",
      gradient: "from-primary to-primary/80",
      hoverGradient: "from-primary/80 to-primary"
    },
    {
      icon: Briefcase,
      label: "Projects",
      target: "projects",
      gradient: "from-accent to-accent/80",
      hoverGradient: "from-accent/80 to-accent"
    },
    {
      icon: User,
      label: "Experience",
      target: "experience",
      gradient: "from-secondary to-secondary/80",
      hoverGradient: "from-secondary/80 to-secondary"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden py-24">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float glow-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float glow-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-float glow-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Additional Floating Particles */}
        <div className="absolute top-16 left-16 w-4 h-4 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-accent/40 rounded-full animate-ping" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-secondary/50 rounded-full animate-ping" style={{ animationDelay: '2.1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-start">
            
            {/* Left Side - Enhanced Profile Image */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1 lg:pt-16 fade-in-left">
              <div className="relative">
                {/* Enhanced Glowing Ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full opacity-30 blur-xl animate-pulse glow-pulse"></div>
                
                {/* Profile Container */}
                <div className="relative w-52 h-52 md:w-64 md:h-64 card-hover">
                  {/* Floating Animation Container */}
                  <div className="w-full h-full animate-float">
                    <div className="relative w-full h-full">
                      {/* Enhanced Border Ring */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full p-1 glow-pulse">
                        <div className="w-full h-full bg-background rounded-full p-1">
                          {/* Profile Image */}
                          <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                            <img 
                              src="/assets/pp.png" 
                              alt="Tejaswa Mathur"
                              className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700 parallax"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.className = "w-full h-full bg-gradient-primary rounded-full flex items-center justify-center text-6xl font-bold text-primary-foreground";
                                  parent.innerHTML = "TM";
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Enhanced Floating Particles */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-bounce glow-pulse" style={{ animationDelay: '0.5s' }}></div>
                      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/20 rounded-full animate-bounce glow-pulse" style={{ animationDelay: '1s' }}></div>
                      <div className="absolute top-1/4 -left-6 w-4 h-4 bg-secondary/20 rounded-full animate-bounce glow-pulse" style={{ animationDelay: '1.5s' }}></div>
                      <div className="absolute bottom-1/4 -right-6 w-3 h-3 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Content */}
            <div className="text-center lg:text-left order-1 lg:order-2 space-y-8 fade-in-right">
              
              {/* Main Heading with Stagger Animation */}
              <div className="space-y-4 stagger-children">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="block text-foreground hover:text-gradient transition-all duration-500 cursor-default">Tejaswa</span>
                  <span className="block text-gradient hover:scale-105 transition-transform duration-300 cursor-default">Mathur</span>
                </h1>

                {/* Animated Subtitle with Typewriter Effect */}
                <div className="text-xl md:text-2xl lg:text-3xl text-text-secondary font-medium">
                  <span className="inline-block min-h-[1.5em]">
                    {displayText}
                    {isTyping && <span className="animate-pulse text-primary">|</span>}
                  </span>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(action.target)}
                    className={`group relative px-6 py-4 bg-gradient-to-r ${action.gradient} text-white rounded-xl font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover-lift hover:scale-105 overflow-hidden transform hover:shadow-2xl`}
                    style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${action.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <action.icon size={18} />
                      <span>{action.label}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Introduction */}
              <div className="max-w-2xl space-y-6">
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
                  Hi! I'm a Full Stack Engineer who genuinely loves tackling tough problems and turning big ideas into real, usable solutions. I thrive on building scalable systems that make a difference—whether it's a sleek web app, a powerful mobile tool, or a robust cloud platform.
                </p>
                
                <p className="text-lg md:text-xl text-text-secondary leading-relaxed opacity-90 hover:opacity-100 transition-opacity duration-300">
                  For me, clean architecture and thoughtful engineering aren't just buzzwords; they're the foundation of every project I take from concept all the way to launch. If there's a complex challenge, I'm always excited to dig in and deliver something that really works.
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70 hover:opacity-100 transition-opacity duration-300">
            <div className="w-6 h-10 border-2 border-text-muted rounded-full flex justify-center">
              <div className="w-1 h-3 bg-text-muted rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;