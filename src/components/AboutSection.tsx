
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="page-section bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-heading text-center">About Me</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={200}>
            <div className="space-y-6">
              <p className="text-lg">
                I am a <span className="text-portfolio-secondary font-medium">Software Developer</span> seeking an entry-level role to apply my academic programming skills in active projects. I aim to learn from experienced professionals and contribute effectively to innovative solutions.
              </p>
              <p className="text-lg">
                My background in Mechanical Engineering has given me strong analytical and problem-solving skills that I've transitioned into software development, with expertise in Java, Spring Boot, and web technologies.
              </p>
              <p className="text-lg">
                I'm dedicated to continuous learning and collaborative problem-solving in a dynamic work environment.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <div className="bg-accent/30 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium mb-6 text-portfolio-secondary">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-portfolio-primary mr-3" size={20} />
                  <span>ravanavenirajesh00@gmail.com</span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-portfolio-primary mr-3" size={20} />
                  <span>+91 7995263280</span>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="text-portfolio-primary mr-3" size={20} />
                  <span>Hyderabad, India</span>
                </div>
                
                <div className="pt-4 border-t border-muted/30 mt-4">
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/RAVANABOINARAJESH" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-portfolio-secondary transition-colors"
                    >
                      GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/rajeshravanaboina" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-foreground/70 hover:text-portfolio-secondary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
