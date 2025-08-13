const ExperienceSection = () => {
  const experiences = [
    {
      role: "Backend Engineer",
      company: "Aris Investing",
      period: "July 2025 - Present",
      logo: "/assets/institutions/aris investing.jpeg",
      description: "Building financial infrastructure using AWS serverless architecture. Focused on automated portfolio management and real-time financial data processing.",
      achievements: [
        "Developed serverless CRUD APIs using AWS Lambda for email service management with RESTful endpoints",
        "Engineered AWS Step Functions for parallel database migration across 50+ tables with 10K-record batches, maintaining ACID compliance and reducing migration time by 75%",
        "Engineered S3-MySQL integration to fetch files, compare financial data, and generate automated reports",
        "Built policy engine using AWS Lambda & Node.js to monitor cash thresholds & automate portfolio rebalancing"
      ],
      technologies: ["AWS Lambda", "S3", "MySQL", "Node.js", "Serverless"],
      current: true
    },
    {
      role: "Full Stack Engineer Intern", 
      company: "EquiDEI",
      period: "June 2024 - August 2024",
      logo: "/assets/institutions/equiDEI.avif",
      description: "Delivered automation solutions that transformed manual processes into intelligent systems, achieving significant operational efficiency gains.",
      achievements: [
        "Built a Dialogflow chatbot & Node.js backend to automate user-database tasks, reducing manual entry by ∼90%",
        "Developed REST APIs with Node.js (TS), Sequelize, and PostgreSQL for real-time validation and integration",
        "Created a React dashboard with dynamic graphs and responsive design, reducing navigation time by ∼30%",
        "Automated data flow via Google Apps Script with batching & backoff techniques, optimizing API usage by ∼60%"
      ],
      technologies: ["React", "Node.js", "Dialogflow", "Google Apps Script", "MongoDB"],
      current: false
    },
    { 
      role: "Technical Lead",
      company: "Techkriti IIT Kanpur",
      period: "2023-2024",
      logo: "/assets/institutions/iitk-logo white.png",
      secondaryLogo: "/assets/institutions/Techkriti.png",
      description: "Led technical infrastructure for Asia's largest student-run technical festival, managing systems for 30,000+ attendees.",
      achievements: [
        "Led 200+ cross-functional executives to successfully execute Techkriti for 30K+ attendees",
        "Launched 10+ event portals with centralized MERN backend, streamlining event management & user registration",
        "Developed Techkriti's first mobile app (Flutter, Node.js, MongoDB, Firebase), gaining 1.5K+ downloads",
        "Managed high-traffic platforms with 400K+ views, 29.5K daily active users, & 14,500+ registered participants"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "AWS", "Mobile Development"],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-card/50 to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 sm:mb-6">
              Experience
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Enhanced Timeline */}
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative fade-in-up card-hover" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Enhanced Timeline Line - Hidden on mobile */}
                <div className="absolute left-8 top-8 bottom-0 w-px bg-gradient-primary opacity-30 glow-pulse hidden sm:block"></div>
                
                {/* Enhanced Timeline Dot - Hidden on mobile */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow glow-pulse hover:scale-125 transition-transform duration-300 hidden sm:block"></div>

                {/* Enhanced Content Card */}
                <div className="sm:ml-20 glass rounded-xl p-4 sm:p-6 lg:p-8 hover-lift hover:shadow-2xl transition-all duration-500 group">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 sm:mb-6 stagger-children">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                      {/* Enhanced Company Logo */}
                      <div className="flex items-center justify-center sm:justify-start gap-2 flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center hover:scale-110 transition-transform duration-300 magnetic-btn">
                          <img 
                            src={exp.logo} 
                            alt={`${exp.company} logo`}
                            className="w-full h-full object-contain group-hover:drop-shadow-xl transition-all duration-300"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.className = "w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-sm sm:text-lg font-bold text-primary-foreground";
                                parent.innerHTML = exp.company.charAt(0);
                              }
                            }}
                          />
                        </div>
                        {exp.secondaryLogo && (
                          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                            <img 
                              src={exp.secondaryLogo} 
                              alt={`${exp.company} secondary logo`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                      </div>
                      
                      {/* Role and Company Info */}
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                          <span className="text-lg sm:text-xl text-primary font-semibold">{exp.company}</span>
                          {exp.current && (
                            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full self-center sm:self-auto">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-text-muted bg-muted px-3 sm:px-4 py-1 sm:py-2 rounded-full mt-3 sm:mt-4 lg:mt-0 self-center sm:self-auto">
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-text-secondary">
                          <span className="w-2 h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-2 sm:px-3 py-1 bg-accent/20 text-accent text-xs sm:text-sm rounded-full border border-accent/30 hover:bg-accent/30 transition-colors"
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