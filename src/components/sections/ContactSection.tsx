import { Mail, Phone, Github, Linkedin, ExternalLink, Send } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      label: "Email",
      value: "mathurkiit@gmail.com",
      link: "mailto:mathurkiit@gmail.com",
      icon: Mail
    },
    {
      label: "Phone", 
      value: "(+91) 9761580119",
      link: "tel:+919761580119",
      icon: Phone
    },
    {
      label: "GitHub",
      value: "github.com/Tejaswa2611",
      link: "https://github.com/Tejaswa2611",
      icon: Github
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/tejaswa-mathur",
      link: "https://linkedin.com/in/tejaswa-mathur", 
      icon: Linkedin
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-card/50 to-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 fade-in-up">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.link}
                      target={contact.link.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="flex items-center gap-4 p-4 rounded-lg bg-hover/50 hover:bg-hover transition-all duration-300 group"
                    >
                      <div className="text-primary group-hover:scale-110 transition-transform">
                        <contact.icon size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-text-muted">{contact.label}</div>
                        <div className="text-foreground group-hover:text-primary transition-colors">
                          {contact.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl rounded-2xl"></div>
                
                {/* Main CTA Card */}
                <div className="relative glass rounded-2xl p-8 text-center">
                  <div className="mb-8">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-3xl font-bold text-primary-foreground mx-auto mb-4">
                      TM
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Ready to collaborate?</h3>
                    <p className="text-text-secondary">
                      Let's build something amazing together. I bring passion, expertise, and a commitment to excellence to every project.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <a
                      href="mailto:mathurkiit@gmail.com"
                      className="block w-full px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold hover-lift transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Send size={20} />
                        <span>Send Message</span>
                        <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </a>
                    
                    <a
                      href="https://github.com/Tejaswa2611"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Github size={20} />
                        <span>View GitHub Profile</span>
                        <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </a>
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

export default ContactSection;