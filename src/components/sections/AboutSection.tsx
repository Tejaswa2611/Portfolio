import { MapPin, GraduationCap, Mail } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-text-secondary leading-relaxed">
                I'm a Full Stack Engineer passionate about building scalable applications that solve real-world problems. 
                My expertise spans modern web technologies, mobile development, and cloud infrastructure, with a track record 
                of delivering high-impact solutions from concept to production.
              </p>
              
              <p className="text-lg text-text-secondary leading-relaxed">
                I thrive on turning complex business problems into elegant technical solutions. My sweet spot is building 
                scalable systems that deliver real-world impact through thoughtful engineering and clean architecture.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 glass rounded-lg hover-lift">
                  <div className="text-3xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-text-muted">Years Experience</div>
                </div>
                <div className="text-center p-4 glass rounded-lg hover-lift">
                  <div className="text-3xl font-bold text-accent mb-2">10+</div>
                  <div className="text-sm text-text-muted">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Profile Card */}
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl rounded-2xl"></div>
                
                {/* Main Card */}
                <div className="relative glass rounded-2xl p-8 hover-lift">
                  <div className="text-center">
                    {/* Avatar Placeholder */}
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground">
                      TM
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">Tejaswa Mathur</h3>
                    <p className="text-primary font-medium mb-4">Full Stack Engineer</p>
                    
                    <div className="space-y-2 text-sm text-text-secondary">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-primary" />
                        <span>IIT Kanpur</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap size={16} className="text-primary" />
                        <span>B.Tech Electrical Engineering</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={16} className="text-primary" />
                        <span>mathurkiit@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;