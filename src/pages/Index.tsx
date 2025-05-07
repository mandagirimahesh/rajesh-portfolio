
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ThreeBackground from "@/components/ThreeBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// This function creates the icons for our skills section
const createLucideIcons = () => {
  // This is a workaround to dynamically create the Lucide icons that we reference in the SkillsSection
  const iconNames = [
    "code", "server", "database", "file-code", "palette", "code-square", 
    "layers", "leaf", "layout", "boot", "network", "boxes", "git-branch", 
    "send", "package", "github", "clock", "puzzle", "lightbulb", "users", 
    "refresh-cw"
  ];
  
  iconNames.forEach(name => {
    const icon = document.createElement("i");
    icon.className = `lucide-${name}`;
    icon.style.display = "none";
    document.body.appendChild(icon);
  });
};

const Index: React.FC = () => {
  useEffect(() => {
    createLucideIcons();
    
    // Initialize scroll animation observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          // If you want animations to replay when scrolling back up
          entry.target.classList.remove('is-visible');
        }
      });
    };
    
    // Create and setup the observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Target all sections with animation
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden relative">
      <ThreeBackground />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
