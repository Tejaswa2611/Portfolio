import TechIcon from '../TechIcon';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Permitly",
      subtitle: "Enterprise Visitor Management System",
      status: "In Development",
      technologies: ["Kotlin", "Node.js", "Jetpack Compose"],
      description: "Enterprise-grade visitor management platform with biometric integration and compliance automation, currently in beta testing for Google Play Store release.",
      features: [
        "Offline-first architecture with intelligent sync and conflict resolution",
        "Role-based approval workflows with Active Directory integration", 
        "Advanced security framework including facial recognition and end-to-end encryption",
        "Real-time analytics dashboard with sub-2-second API response times"
      ],
      highlights: [
        "Built with Kotlin/Jetpack Compose for native Android performance",
        "Node.js backend with automated compliance reporting",
        "GDPR-compliant data handling with automatic PII anonymization",
        "Cloudinary integration for secure photo processing"
      ]
    },
    {
      title: "CodeTrail", 
      subtitle: "Competitive Programming Analytics",
      status: "February 2025",
      technologies: ["React", "Node.js", "PostgreSQL"],
      description: "AI-powered analytics platform that unifies competitive programming data from multiple sources with personalized insights.",
      features: [
        "Reverse-engineered LeetCode GraphQL API for seamless data integration",
        "AI mentor system using DeepSeek API for personalized coding recommendations", 
        "Redis caching with Docker containerization for scalable performance",
        "Unified dashboard combining LeetCode and Codeforces analytics"
      ],
      highlights: [
        "Custom API integration with real-time data sync",
        "AI-powered personalized learning recommendations",
        "Docker-based scalable architecture",
        "Performance optimization with Redis caching"
      ]
    },
    {
      title: "Alumni Hunt",
      subtitle: "Custom Database Engine", 
      status: "Academic Project",
      technologies: ["Python"],
      description: "High-performance database query engine optimized for large-scale alumni data retrieval with advanced indexing strategies.",
      features: [
        "Custom query processing for 100,000+ records with efficient indexing",
        "Dual-sorted disk layout optimization to minimize seek times",
        "Memory-efficient data structures including tries and hashed buckets", 
        "Support for complex query patterns with fast retrieval times"
      ],
      highlights: [
        "Optimized for 100K+ record queries",
        "Custom indexing algorithms for performance",
        "Memory-efficient data structures",
        "Fast complex query processing"
      ]
    },
    {
      title: "FeedForward",
      subtitle: "Anonymous Feedback Platform",
      status: "December 2023", 
      technologies: ["Next.js", "MongoDB"],
      description: "Secure feedback platform combining anonymous communication with AI-powered suggestion systems.",
      features: [
        "Next.js/TypeScript with MongoDB and Mongoose ODM",
        "AI-powered feedback suggestions using OpenAI API",
        "Redis rate limiting and comprehensive spam prevention",
        "Analytics dashboard with MongoDB aggregation pipelines"
      ],
      highlights: [
        "Anonymous feedback with AI suggestions",
        "Advanced spam prevention system",
        "Real-time analytics dashboard", 
        "Secure communication platform"
      ]
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-center fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Visual - Always on Left */}
                <div>
                  <div className="relative group">
                    {/* Glowing Background */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl rounded-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    {/* Main Card */}
                    <div className="relative glass rounded-2xl p-8 hover-lift">
                      <div className="aspect-video bg-gradient-surface rounded-lg flex items-center justify-center relative overflow-hidden">
                        {/* Project Preview */}
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mb-4 mx-auto">
                            {project.title.charAt(0)}
                          </div>
                          <h4 className="text-xl font-bold text-foreground mb-2">{project.title}</h4>
                          <p className="text-text-muted text-sm">{project.subtitle}</p>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      </div>

                      {/* Technical Highlights */}
                      <div className="mt-6 space-y-2">
                        <h5 className="text-sm font-semibold text-foreground mb-2">Technical Highlights:</h5>
                        {project.highlights.slice(0, 2).map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info - Always on Right */}
                <div>
                  <div className="space-y-6">
                    {/* Header */}
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-bold text-foreground">{project.title}</h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                          {project.status}
                        </span>
                      </div>
                      <p className="text-xl text-text-secondary font-medium">{project.subtitle}</p>
                    </div>

                    {/* Technologies */}
                    <div className="flex items-center gap-3">
                      {project.technologies.map((tech, i) => (
                        <div key={i} className="flex items-center gap-2 px-3 py-1 bg-accent/20 text-accent rounded-full">
                          <TechIcon name={tech} className="w-4 h-4" />
                          <span className="text-sm font-medium">{tech}</span>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 2).map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-text-secondary">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <button className="px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover-lift transition-all duration-300">
                        View Live
                      </button>
                      <button className="px-6 py-2 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300">
                        View on GitHub
                      </button>
                      <button className="px-6 py-2 border border-text-muted text-text-muted rounded-lg font-medium hover:border-foreground hover:text-foreground transition-all duration-300">
                        Engineering
                      </button>
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

export default ProjectsSection;