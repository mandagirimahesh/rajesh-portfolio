
import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-portfolio-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-display mb-2 hero-text-gradient">Rajesh Ravanaboina</h2>
            <p className="text-foreground/70">Software Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/RAVANABOINARAJESH" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/70 hover:text-portfolio-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rajeshravanaboina" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/70 hover:text-portfolio-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:ravanavenirajesh00@gmail.com" 
              className="text-foreground/70 hover:text-portfolio-secondary transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 mb-4 md:mb-0">© {new Date().getFullYear()} Rajesh Ravanaboina. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop} 
            className="flex items-center text-foreground/60 hover:text-portfolio-secondary transition-colors"
            aria-label="Back to top"
          >
            <span className="mr-2">Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
