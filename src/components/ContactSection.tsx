
import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="page-section bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-heading text-center">Get In Touch</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Feel free to reach out if you're looking for a dedicated software developer or just want to connect!
          </p>
        </AnimatedSection>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <AnimatedSection delay={300} className="space-y-6">
            <div className="flex items-center p-4 bg-accent/30 rounded-lg">
              <div className="h-12 w-12 bg-portfolio-primary/20 rounded-full flex items-center justify-center mr-4">
                <Mail className="text-portfolio-primary" size={24} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground/70">Email</h3>
                <a href="mailto:ravanavenirajesh00@gmail.com" className="text-lg hover:text-portfolio-secondary transition-colors">
                  ravanavenirajesh00@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-accent/30 rounded-lg">
              <div className="h-12 w-12 bg-portfolio-primary/20 rounded-full flex items-center justify-center mr-4">
                <Phone className="text-portfolio-primary" size={24} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground/70">Phone</h3>
                <a href="tel:+917995263280" className="text-lg hover:text-portfolio-secondary transition-colors">
                  +91 7995263280
                </a>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-accent/30 rounded-lg">
              <div className="h-12 w-12 bg-portfolio-primary/20 rounded-full flex items-center justify-center mr-4">
                <MapPin className="text-portfolio-primary" size={24} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground/70">Location</h3>
                <p className="text-lg">Hyderabad, India</p>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-accent/30 rounded-lg">
              <div className="h-12 w-12 bg-portfolio-primary/20 rounded-full flex items-center justify-center mr-4">
                <Github className="text-portfolio-primary" size={24} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground/70">GitHub</h3>
                <a 
                  href="https://github.com/RAVANABOINARAJESH" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg hover:text-portfolio-secondary transition-colors"
                >
                  github.com/RAVANABOINARAJESH
                </a>
              </div>
            </div>
            
            <div className="flex items-center p-4 bg-accent/30 rounded-lg">
              <div className="h-12 w-12 bg-portfolio-primary/20 rounded-full flex items-center justify-center mr-4">
                <Linkedin className="text-portfolio-primary" size={24} />
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground/70">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/rajeshravanaboina" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg hover:text-portfolio-secondary transition-colors"
                >
                  linkedin.com/in/rajeshravanaboina
                </a>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={500} className="bg-accent/30 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-6 text-portfolio-secondary">Send me a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  id="name" 
                  type="text" 
                  className="w-full px-4 py-2 bg-muted/50 border border-muted rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-transparent outline-none transition-all duration-300" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  id="email" 
                  type="email" 
                  className="w-full px-4 py-2 bg-muted/50 border border-muted rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-transparent outline-none transition-all duration-300" 
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 bg-muted/50 border border-muted rounded-lg focus:ring-2 focus:ring-portfolio-primary focus:border-transparent outline-none transition-all duration-300" 
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-portfolio-primary hover:bg-portfolio-secondary text-white rounded-lg transition-colors shadow-lg"
              >
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
