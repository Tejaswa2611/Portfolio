import TechIcon from '../TechIcon';

const ProjectsSection = () => {
  // Project image mapping
  const projectImages: { [key: string]: string } = {
    "Permitly": "/assets/Projects/Permitly.png",
    "CodeTrail": "/assets/Projects/CodeTrail.png", 
    "FeedForward": "/assets/Projects/FeedForward.png",
    "Alumni Hunt": "/assets/institutions/IITk logo.png"
  };

  const projects = [
    {
      title: "CodeTrail", 
      subtitle: "Competitive Programming Analytics",
      status: "February 2025",
      technologies: ["React", "Node.js", "PostgreSQL", "GraphQL", "TypeScript", "Prisma", "Redis", "Docker", "DeepSeek"],
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
      title: "Permitly",
      subtitle: "Enterprise Visitor Management System",
      status: "Soon Releasing on Google Play Store",
      technologies: ["Kotlin", "Node.js", "Jetpack Compose", "AWS", "Android", "Redis", "Prisma", "Firebase"],
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
      title: "FeedForward",
      subtitle: "Anonymous Feedback Platform",
      status: "December 2023", 
      technologies: ["Next.js", "MongoDB", "Tailwind", "OpenAI", "Redis"],
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
    },
    {
      title: "Alumni Hunt",
      subtitle: "Custom Database Engine", 
      status: "Academic Project",
      technologies: ["Python", "DSA", "Database", "IITK"],
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
                        {/* Project Image or Fallback */}
                        {projectImages[project.title] ? (
                          <img 
                            src={projectImages[project.title]}
                            alt={`${project.title} preview`}
                            className={`w-full h-full rounded-lg ${project.title === 'Alumni Hunt' ? 'object-contain p-4 bg-white' : 'object-cover'}`}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `
                                  <div class="text-center p-8">
                                    <div class="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mb-4 mx-auto">
                                      ${project.title.charAt(0)}
                                    </div>
                                    <h4 class="text-xl font-bold text-foreground mb-2">${project.title}</h4>
                                    <p class="text-text-muted text-sm">${project.subtitle}</p>
                                  </div>
                                `;
                              }
                            }}
                          />
                        ) : (
                          <div className="text-center p-8">
                            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl font-bold text-primary-foreground mb-4 mx-auto">
                              {project.title.charAt(0)}
                            </div>
                            <h4 className="text-xl font-bold text-foreground mb-2">{project.title}</h4>
                            <p className="text-text-muted text-sm">{project.subtitle}</p>
                          </div>
                        )}

                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                      </div>

                      {/* Tech Stack Icons */}
                      <div className="mt-6 flex justify-center gap-4">
                        {project.technologies.map((tech, i) => (
                          <div key={i} className="w-8 h-8 flex items-center justify-center">
                            <TechIcon name={tech} className="w-full h-full opacity-70 hover:opacity-100 transition-opacity" />
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
                      {/* View Live / Download Button */}
                      {project.title === "CodeTrail" && (
                        <a
                          href="https://main.d2jc37kgdt0gqz.amplifyapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover-lift transition-all duration-300"
                        >
                          View Live
                        </a>
                      )}
                      {project.title === "FeedForward" && (
                        <a
                          href="https://main.d2hkbxalmybjjw.amplifyapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover-lift transition-all duration-300"
                        >
                          View Live
                        </a>
                      )}
                      {project.title === "Permitly" && (
                        <button className="px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium opacity-75 cursor-not-allowed transition-all duration-300">
                          Download Now
                        </button>
                      )}
                      
                      {/* GitHub Button */}
                      {project.title === "Permitly" ? (
                        <button className="px-6 py-2 border border-accent text-accent rounded-lg font-medium opacity-75 cursor-not-allowed transition-all duration-300">
                          View on GitHub
                        </button>
                      ) : (
                        <a 
                          href={
                            project.title === "CodeTrail" ? "https://github.com/Tejaswa2611/CodeTrail" :
                            project.title === "FeedForward" ? "https://github.com/Tejaswa2611/Ghost-Note" :
                            project.title === "Alumni Hunt" ? "https://github.com/Tejaswa2611/Alumni-Hunt" :
                            "#"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                        >
                          View on GitHub
                        </a>
                      )}
                      
                      {/* PDF Report Button for Alumni Hunt */}
                      {project.title === "Alumni Hunt" && (
                        <a
                          href="/assets/Projects/Report.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300 flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          PDF Report
                        </a>
                      )}
                      
                      {/* Engineering Button */}
                      {(project.title === "CodeTrail" || project.title === "FeedForward") && (
                        <a
                          href={
                            project.title === "CodeTrail" ? "https://main.d2jc37kgdt0gqz.amplifyapp.com/engineering" :
                            "https://main.d2hkbxalmybjjw.amplifyapp.com/engineering"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 overflow-hidden group transform hover:scale-105 hover:-translate-y-1"
                          style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4), 0 0 20px rgba(118, 75, 162, 0.3)',
                            animation: 'rainbow-glow 2s ease-in-out infinite alternate'
                          }}
                        >
                          {/* Animated rainbow background */}
                          <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #fd79a8, #fdcb6e)',
                              backgroundSize: '400% 400%',
                              animation: 'rainbow-shift 3s ease infinite'
                            }}
                          ></div>
                          
                          {/* Sparkle overlay */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full animate-ping"></div>
                            <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute bottom-2 left-4 w-1 h-1 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute bottom-3 right-2 w-1 h-1 bg-pink-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                          </div>
                          
                          {/* Sliding shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                          
                          {/* Button text */}
                          <span className="relative z-10 text-white font-bold tracking-wide text-shadow">
                            Engineering
                          </span>
                          
                          {/* Pulsing border */}
                          <div className="absolute inset-0 rounded-lg border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
                        </a>
                      )}
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