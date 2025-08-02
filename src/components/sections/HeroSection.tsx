import { useEffect, useState } from 'react';
import { MapPin, GraduationCap, Mail } from 'lucide-react';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Full Stack Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top Section - Name and Title */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
              <span className="block text-text-primary">Tejaswa</span>
              <span className="block text-gradient">Mathur</span>
            </h1>

            {/* Animated Subtitle */}
            <div className="text-2xl md:text-3xl text-text-secondary mb-8 h-12 flex items-center justify-center">
              <span className="border-r-2 border-primary pr-2 animate-pulse">
                {typedText}
              </span>
            </div>
          </div>

          {/* Combined Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Description and CTA */}
            <div className="space-y-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                Hi! I'm a Full Stack Engineer who genuinely loves tackling tough problems and turning big ideas into real, usable solutions. I thrive on building scalable systems that make a difference—whether it's a sleek web app, a powerful mobile tool, or a robust cloud platform. For me, clean architecture and thoughtful engineering aren't just buzzwords; they're the foundation of every project I take from concept all the way to launch. If there's a complex challenge, I'm always excited to dig in and deliver something that really works.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group relative px-8 py-4 bg-gradient-primary text-primary-foreground rounded-full font-semibold text-lg transition-all duration-300 hover-lift hover:scale-105"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </button>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover-lift"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right Side - Profile Card */}
            <div className="fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl rounded-2xl"></div>
                
                {/* Main Card */}
                <div className="relative glass rounded-2xl p-8 hover-lift">
                  <div className="text-center">
                    {/* Profile Picture */}
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                      <img 
                        src="/assets/profilepic.jpeg" 
                        alt="Tejaswa Mathur"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image doesn't load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.className = "w-32 h-32 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground";
                            parent.innerHTML = "TM";
                          }
                        }}
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">Tejaswa Mathur</h3>
                    <p className="text-primary font-medium mb-6">Full Stack Engineer</p>
                    
                    <div className="space-y-3 text-sm text-text-secondary">
                      <div className="flex items-center justify-center gap-2">
                        <MapPin size={16} className="text-primary" />
                        <span>IIT Kanpur</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <GraduationCap size={16} className="text-primary" />
                        <span>B.Tech Electrical Engineering</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <Mail size={16} className="text-primary" />
                        <span>mathurkiit@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
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