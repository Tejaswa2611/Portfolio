import TechIcon from '../TechIcon';

const SkillsSection = () => {
  const technologies = [
    // Core Programming & Most In-Demand
    "JavaScript", "TypeScript", "Python", "React.js", "Next.js", "Node.js",
    // Cloud & DevOps (High Priority for SDE1)
    "AWS", "Docker", "Git", "PostgreSQL", "MongoDB", "Redis",
    // Backend & Database Technologies
    "GraphQL", "Prisma", "MySQL", "Firebase", "GCP",
    // Mobile & Advanced Frontend
    "Flutter", "Tailwind CSS", "Jetpack Compose", 
    // Systems Programming & Others
    "C++", "Kotlin", "Dart"
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-secondary/30 to-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Technology Icons Grid */}
          <div className="fade-in-up">
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-1 justify-items-center">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="relative"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Icon container - just for positioning */}
                  <div className="relative w-32 h-32 flex items-center justify-center">
                    
                    {/* Hoverable icon with tooltip */}
                    <div className="group relative hover-lift">
                      {/* Glowing background */}
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl rounded-full transition-opacity duration-500"></div>
                      
                      <TechIcon 
                        name={tech} 
                        className="w-18 h-18 group-hover:scale-110 transition-transform duration-300" 
                      />
                      
                      {/* Cool Tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1 pointer-events-none z-10">
                        <div className="relative">
                          {/* Tooltip background with gradient */}
                          <div className="bg-gradient-to-r from-primary/90 to-accent/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-2 rounded-lg shadow-lg border border-white/20">
                            <span className="whitespace-nowrap">{tech}</span>
                            {/* Tooltip arrow */}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary/90"></div>
                          </div>
                          
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse rounded-lg"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;