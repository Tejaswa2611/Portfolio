const LeadershipSection = () => {
  const leadership = {
    role: "Technical Lead",
    organization: "Techkriti IIT Kanpur", 
    period: "2023-2024",
    description: "Led technical infrastructure for Asia's largest student-run technical festival, managing systems for 30,000+ attendees.",
    achievements: [
      "Coordinated 200+ team members across multiple technical verticals",
      "Launched 10+ event portals with centralized backend architecture", 
      "Developed festival's first mobile app with 1,500+ downloads",
      "Managed platforms serving 400K+ page views and 29.5K daily active users"
    ],
    impact: [
      { metric: "30,000+", label: "Attendees Managed" },
      { metric: "200+", label: "Team Members" },
      { metric: "400K+", label: "Page Views" },
      { metric: "10+", label: "Event Portals" }
    ]
  };

  return (
    <section id="leadership" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Leadership
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Leadership Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Main Content */}
            <div className="fade-in-up">
              <div className="glass rounded-2xl p-8 hover-lift">
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-foreground mb-2">{leadership.role}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl text-primary font-semibold">{leadership.organization}</span>
                  </div>
                  <div className="text-sm text-text-muted bg-muted px-4 py-2 rounded-full inline-block">
                    {leadership.period}
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {leadership.description}
                </p>

                {/* Achievements */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {leadership.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 text-text-secondary">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-accent opacity-20 blur-xl rounded-2xl"></div>
                
                {/* Metrics Grid */}
                <div className="relative grid grid-cols-2 gap-6">
                  {leadership.impact.map((item, index) => (
                    <div 
                      key={index}
                      className="glass rounded-xl p-6 text-center hover-lift group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform">
                        {item.metric}
                      </div>
                      <div className="text-sm text-text-muted font-medium">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Info Card */}
                <div className="mt-8 glass rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Festival Highlights</h4>
                  <div className="space-y-3 text-sm text-text-secondary">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span>Asia's largest student-run technical festival</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span>First mobile app development for the festival</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span>Centralized backend architecture implementation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      <span>Multi-vertical team coordination and management</span>
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

export default LeadershipSection;