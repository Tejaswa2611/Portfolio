const ExperienceSection = () => {
  const experiences = [
    {
      role: "Backend Engineer",
      company: "Aris Investing",
      period: "July 2025 - Present",
      description: "Building financial infrastructure using AWS serverless architecture. Focused on automated portfolio management and real-time financial data processing.",
      achievements: [
        "Developed serverless CRUD APIs with AWS Lambda for scalable email service management",
        "Built S3-MySQL integration for automated financial data comparison and reporting", 
        "Engineered policy monitoring system for automated portfolio rebalancing based on cash thresholds"
      ],
      technologies: ["AWS Lambda", "S3", "MySQL", "Node.js", "Serverless"],
      current: true
    },
    {
      role: "Full Stack Engineer", 
      company: "EquiDEI",
      period: "June 2024 - August 2024",
      description: "Delivered automation solutions that transformed manual processes into intelligent systems, achieving significant operational efficiency gains.",
      achievements: [
        "Built Dialogflow chatbot with Node.js backend, reducing manual data entry by 90%",
        "Developed React dashboard with real-time visualizations and responsive design",
        "Automated data workflows using Google Apps Script with intelligent batching algorithms"
      ],
      technologies: ["React", "Node.js", "Dialogflow", "Google Apps Script", "MongoDB"],
      current: false
    },
    {
      role: "Technical Lead",
      company: "Techkriti IIT Kanpur",
      period: "2023-2024",
      description: "Led technical infrastructure for Asia's largest student-run technical festival, managing systems for 30,000+ attendees.",
      achievements: [
        "Coordinated 200+ team members across multiple technical verticals",
        "Launched 10+ event portals with centralized backend architecture", 
        "Developed festival's first mobile app with 1,500+ downloads",
        "Managed platforms serving 400K+ page views and 29.5K daily active users"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS", "Mobile Development"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-card/50 to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative fade-in-up" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Line */}
                <div className="absolute left-8 top-8 bottom-0 w-px bg-gradient-primary opacity-30"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>

                {/* Content Card */}
                <div className="ml-20 glass rounded-xl p-8 hover-lift">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl text-primary font-semibold">{exp.company}</span>
                        {exp.current && (
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-sm text-text-muted bg-muted px-4 py-2 rounded-full">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-secondary">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full border border-accent/30 hover:bg-accent/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;