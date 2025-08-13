const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Electrical Engineering",
      institution: "Indian Institute of Technology, Kanpur",
      period: "2021 - 2025",
      logo: "/assets/institutions/iitk-logo white.png",
      description: "Pursued Electrical Engineering at one of India's premier technical institutions.",
      achievements: [
        "Relevant Coursework: Data Structures & Algorithms, Probability and Statistics, Database Systems, Computer Networks, Software Engineering, Operating Systems, Intro to Machine Learning",
        "3rd Position in Decrypt – E-Summit, E-Cell IIT Kanpur (2024)",
        "1st Position in Treasure Hunt, IIT Kanpur (2022)",
        "Cricket Team Captain, Hall 12, IIT Kanpur"
      ],
      highlights: [
        "Strong foundation in computer science fundamentals",
        "Leadership experience in large-scale technical events",
        "Hands-on experience in full-stack development",
        "Active participation in competitive programming"
      ]
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 sm:mb-6">
              Education
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Education Content */}
          <div className="space-y-8 sm:space-y-12">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Institution Visual - Left Side */}
                <div>
                  <div className="relative group">
                    {/* Glowing Background */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    {/* Main Card */}
                    <div className="relative glass rounded-2xl p-4 sm:p-6 lg:p-8 hover-lift">
                      <div className="aspect-video bg-gradient-surface rounded-lg flex items-center justify-center relative overflow-hidden">
                        {/* Institution Logo and Info */}
                        <div className="text-center">
                          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                            <img 
                              src={edu.logo} 
                              alt={`${edu.institution} logo`}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.className = "w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-primary rounded-full flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold text-primary-foreground mx-auto mb-4 sm:mb-6";
                                  parent.innerHTML = "IIT";
                                }
                              }}
                            />
                          </div>
                          <h4 className="text-lg sm:text-xl font-bold text-foreground mb-1 sm:mb-2">{edu.institution}</h4>
                          <p className="text-text-muted text-xs sm:text-sm">{edu.period}</p>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-2 sm:w-3 h-2 sm:h-3 bg-primary rounded-full animate-pulse"></div>
                        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education Details - Right Side */}
                <div>
                  <div className="space-y-4 sm:space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{edu.degree}</h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full self-start sm:self-auto">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-lg sm:text-xl text-text-secondary font-medium">{edu.field}</p>
                      <p className="text-base sm:text-lg text-accent font-medium mt-1">{edu.institution}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-3 text-text-secondary">
                            <span className="w-2 h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default EducationSection;
