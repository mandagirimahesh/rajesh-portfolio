
import React, { useEffect, useRef } from "react";
import { ArrowDownCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "./AnimatedSection";

const HeroSection: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center relative"
      ref={ref}
    >
      <div className="container mx-auto px-4 text-center">
        <div className={`transition-all duration-700 ${inView ? "opacity-100" : "opacity-0 transform translate-y-10"}`}>
          <img 
            src="/lovable-uploads/0a07f5ae-f678-4966-ba17-2a2e009bc1c5.png" 
            alt="Rajesh Ravanaboina" 
            className="w-32 h-32 mx-auto rounded-full border-4 border-portfolio-primary mb-8 shadow-lg animate-float"
          />
          
          <AnimatedSection delay={200}>
            <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 hero-text-gradient">
              Rajesh Ravanaboina
            </h1>
          </AnimatedSection>
          
          <AnimatedSection delay={400}>
            <h2 className="text-xl md:text-2xl text-foreground/80 mb-8">
              Software Developer
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={600} className="flex justify-center space-x-4">
            <a 
              href="https://github.com/RAVANABOINARAJESH" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-portfolio-primary hover:bg-portfolio-secondary text-white rounded-lg transition-colors shadow-lg"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/rajeshravanaboina" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0077B5] hover:bg-[#0069a2] text-white rounded-lg transition-colors shadow-lg"
            >
              LinkedIn
            </a>
          </AnimatedSection>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground/70 hover:text-portfolio-secondary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDownCircle size={36} />
      </button>
    </section>
  );
};

export default HeroSection;
