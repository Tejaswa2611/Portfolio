import TechIcon from '../TechIcon';
import { useScrollAnimation, useStaggeredScrollAnimation } from '../../hooks/useScrollAnimation';
// import { useScrollAnimation } from '../../hooks/useScrollAnimation';

// Project type definition
interface Project {
  title: string;
  subtitle: string;
  status: string;
  technologies: string[];
  description: string;
  features: string[];
  highlights: string[];
}

const ProjectsSection = () => {
  // Scroll animation hooks
  const headerRef = useScrollAnimation({ threshold: 0.1 });
  const projectsContainerRef = useStaggeredScrollAnimation({ threshold: 0.1 });
  // Temporarily comment out scroll animation to fix the app
  // const { elementRef: headerRef, isInView: headerInView } = useScrollAnimation({
  //   threshold: 0.3,
  //   rootMargin: '0px 0px -100px 0px'
  // });

  // Project image mapping
  const projectImages: { [key: string]: string } = {
    "Permitly": "/assets/Projects/Permitly.png",
    "CodeTrail": "/assets/Projects/CodeTrail.png", 
    "FeedForward": "/assets/Projects/FeedForward.png",
    "Alumni Hunt": "/assets/institutions/iitk-logo white.png"
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
    <section id="projects" className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div 
            ref={headerRef.elementRef as React.RefObject<HTMLDivElement>}
            className={`text-center mb-12 sm:mb-16 scroll-fade-in-up ${headerRef.isInView ? 'animate' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient mb-4 sm:mb-6">
              Featured Projects
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          {/* Projects Grid with Alternating Layout */}
          <div 
            ref={projectsContainerRef.elementRef as React.RefObject<HTMLDivElement>}
            className="space-y-16 sm:space-y-24 lg:space-y-32"
          >
            {projects.map((project, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                index % 2 === 0 ? 'scroll-slide-in-from-left' : 'scroll-slide-in-from-right'
              } ${projectsContainerRef.animateChildren ? 'animate' : ''}`} style={{ animationDelay: `${index * 0.15}s` }}>
                {/* Project Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group card-hover">
                    {/* Clean Border Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    <div className="relative glass rounded-xl p-4 sm:p-6 overflow-hidden">
                      {/* Project Image or Fallback */}
                      <div className="aspect-video rounded-lg overflow-hidden bg-background/50 mb-3 sm:mb-4 parallax">
                        {projectImages[project.title] ? (
                          <img 
                            src={projectImages[project.title]} 
                            alt={project.title}
                            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                              project.title === "Alumni Hunt" 
                                ? "object-contain p-4" 
                                : "object-cover"
                            }`}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-text-secondary">
                            <div className="text-center slide-in-content" style={{ animationDelay: '0.3s' }}>
                              <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-primary/20 flex items-center justify-center animate-float">
                                <span className="text-2xl font-bold text-primary">{project.title.charAt(0)}</span>
                              </div>
                              <p className="text-sm opacity-70">Project Preview</p>
                            </div>
                          </div>
                        )}

                        {/* Clean Floating Elements */}
                        <div className="absolute top-4 right-4 w-3 h-3 bg-primary/60 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute top-1/2 left-8 w-1.5 h-1.5 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                      </div>

                      {/* Tech Stack Icons with Stagger Animation */}
                      <div className="mt-4 sm:mt-6 flex justify-center gap-2 sm:gap-4 stagger-fast">
                        {project.technologies.map((tech: string, i: number) => (
                          <div key={i} className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center tech-icon-hover">
                            <TechIcon name={tech} className="w-full h-full opacity-70 hover:opacity-100 transition-all duration-300" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-4 sm:space-y-6 slide-in-content" style={{ animationDelay: `${index * 0.15 + 0.2}s` }}>
                    {/* Header */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground hover:text-gradient transition-all duration-300 cursor-default">{project.title}</h3>
                        <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full scale-in self-start sm:self-auto" style={{ animationDelay: `${index * 0.15 + 0.4}s` }}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-lg sm:text-xl text-text-secondary font-medium">{project.subtitle}</p>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">Key Features:</h4>
                      <ul className="space-y-2 stagger-fast">
                        {project.features.slice(0, 2).map((feature: string, i: number) => (
                          <li key={i} className="flex items-start gap-2 sm:gap-3 text-text-secondary group">
                            <span className="w-2 h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                            <span className="text-sm group-hover:text-foreground transition-colors duration-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 stagger-fast">
                      {/* View Live / Download Button */}
                      {project.title === "CodeTrail" && (
                        <a
                          href="https://main.d2jc37kgdt0gqz.amplifyapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 sm:px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover-lift transition-all duration-300 magnetic-btn text-sm sm:text-base"
                        >
                          View Live
                        </a>
                      )}
                      {project.title === "FeedForward" && (
                        <a
                          href="https://main.d2hkbxalmybjjw.amplifyapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 sm:px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium hover-lift transition-all duration-300 magnetic-btn text-sm sm:text-base"
                        >
                          View Live
                        </a>
                      )}
                      {project.title === "Permitly" && (
                        <button className="px-4 sm:px-6 py-2 bg-gradient-primary text-primary-foreground rounded-lg font-medium opacity-75 cursor-not-allowed transition-all duration-300 text-sm sm:text-base">
                          Download Now
                        </button>
                      )}
                      
                      {/* GitHub Button */}
                      {project.title === "Permitly" ? (
                        <button className="px-4 sm:px-6 py-2 border border-accent text-accent rounded-lg font-medium opacity-75 cursor-not-allowed transition-all duration-300 text-sm sm:text-base">
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
                          className="px-6 py-2 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 magnetic-btn"
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
                          className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-all duration-300 flex items-center gap-2 magnetic-btn hover-lift"
                        >
                          <svg className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                          PDF Report
                        </a>
                      )}
                      
                      {/* Enhanced Engineering Button */}
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
                            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                          }}
                        >
                          {/* Clean animated background */}
                          <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #fd79a8, #fdcb6e)',
                              backgroundSize: '400% 400%',
                              animation: 'rainbow-shift 3s ease infinite'
                            }}
                          ></div>
                          
                          {/* Subtle sparkle overlay */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                            <div className="absolute top-1 left-2 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
                            <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-yellow-300/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute bottom-2 left-4 w-1 h-1 bg-cyan-300/60 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute bottom-3 right-2 w-1 h-1 bg-pink-300/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                          </div>
                          
                          {/* Sliding shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                          
                          {/* Button text */}
                          <span className="relative z-10 text-white font-bold tracking-wide text-shadow">
                            Engineering
                          </span>
                          
                          {/* Clean border */}
                          <div className="absolute inset-0 rounded-lg border-2 border-white/10 group-hover:border-white/30 transition-all duration-300"></div>
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