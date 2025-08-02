import TechIcon from '../TechIcon';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C++", "Kotlin", "Dart"],
      color: "primary"
    },
    {
      title: "Frontend", 
      skills: ["React.js", "Next.js", "Jetpack Compose", "Flutter", "Tailwind CSS"],
      color: "accent"
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "AWS Lambda", "Serverless"],
      color: "primary"
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
      color: "accent"
    },
    {
      title: "Cloud & Tools", 
      skills: ["AWS", "Docker", "GCP", "Firebase", "Git"],
      color: "primary"
    }
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

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass rounded-xl p-6 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-3 h-3 rounded-full ${
                      category.color === 'primary' ? 'bg-primary' : 'bg-accent'
                    }`}></div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center gap-3 p-3 rounded-lg bg-hover/50 hover:bg-hover transition-colors group"
                      >
                        <TechIcon name={skill} className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        <span className="text-text-secondary group-hover:text-foreground transition-colors">
                          {skill}
                        </span>
                      </div>
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

export default SkillsSection;