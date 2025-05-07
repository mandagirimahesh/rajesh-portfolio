
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
import { 
  Code2, Server, Database, FileCode, Palette, CodeSquare, 
  Layers, Leaf, Layout, Network, Boxes, GitBranch, 
  Send, Package, Github, Clock, PuzzlePiece, Lightbulb, 
  Users, RefreshCw
} from "lucide-react";

// This creates the Lucide React components for the skills section
const createLucideIcons = () => {
  const icons = [
    <Code2 size={24} key="code" className="hidden" />,
    <Server size={24} key="server" className="hidden" />,
    <Database size={24} key="database" className="hidden" />,
    <FileCode size={24} key="file-code" className="hidden" />,
    <Palette size={24} key="palette" className="hidden" />,
    <CodeSquare size={24} key="code-square" className="hidden" />,
    <Layers size={24} key="layers" className="hidden" />,
    <Leaf size={24} key="leaf" className="hidden" />,
    <Layout size={24} key="layout" className="hidden" />,
    <Network size={24} key="network" className="hidden" />,
    <Boxes size={24} key="boxes" className="hidden" />,
    <GitBranch size={24} key="git-branch" className="hidden" />,
    <Send size={24} key="send" className="hidden" />,
    <Package size={24} key="package" className="hidden" />,
    <Github size={24} key="github" className="hidden" />,
    <Clock size={24} key="clock" className="hidden" />,
    <PuzzlePiece size={24} key="puzzle-piece" className="hidden" />,
    <Lightbulb size={24} key="lightbulb" className="hidden" />,
    <Users size={24} key="users" className="hidden" />,
    <RefreshCw size={24} key="refresh-cw" className="hidden" />,
  ];
  
  return (
    <div style={{ display: 'none' }}>
      {icons}
    </div>
  );
};

const Index: React.FC = () => {
  useEffect(() => {
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
      {createLucideIcons()}
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
