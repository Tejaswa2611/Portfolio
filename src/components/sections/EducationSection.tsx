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
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Education Content */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-center fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Institution Visual - Left Side */}
                <div>
                  <div className="relative group">
                    {/* Glowing Background */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    {/* Main Card */}
                    <div className="relative glass rounded-2xl p-8 hover-lift">
                      <div className="aspect-video bg-gradient-surface rounded-lg flex items-center justify-center relative overflow-hidden">
                        {/* Institution Logo and Info */}
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                            <img 
                              src={edu.logo} 
                              alt={`${edu.institution} logo`}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                  parent.className = "w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-6";
                                  parent.innerHTML = "IIT";
                                }
                              }}
                            />
                          </div>
                          <h4 className="text-xl font-bold text-foreground mb-2">{edu.institution}</h4>
                          <p className="text-text-muted text-sm">{edu.period}</p>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Education Details - Right Side */}
                <div>
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold text-foreground">{edu.degree}</h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-xl text-text-secondary font-medium">{edu.field}</p>
                      <p className="text-lg text-accent font-medium mt-1">{edu.institution}</p>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Key Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-text-secondary">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
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
