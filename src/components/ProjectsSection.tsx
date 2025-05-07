
import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

interface ProjectProps {
  title: string;
  description: string[];
  technologies: string[];
  link: string;
  image?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Homeservo Web Application",
    description: [
      "Developed a web app for direct customer-vendor connections",
      "Reduced intermediary delays by 35%",
      "Improved user engagement and service response by 20%",
      "Used Spring IOC, MVC, Boot for performance optimization",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Spring Boot", "MySQL", "Postman", "Eclipse", "VS Code"],
    link: "https://github.com/RAVANABOINARAJESH/Homeservo_web_application",
  },
  {
    title: "Banking Application",
    description: [
      "Built a full-function banking app (create/update accounts, deposit, withdraw, fetch details)",
      "Created RESTful APIs using Spring Boot",
      "Used MySQL for database management",
    ],
    technologies: ["Java", "Maven", "Spring Boot", "Swagger UI", "Postman", "Git"],
    link: "https://github.com/RAVANABOINARAJESH/Banking-Application",
  },
];

const ProjectCard: React.FC<ProjectProps> = ({ title, description, technologies, link }) => (
  <AnimatedSection className="bg-accent/30 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-portfolio-secondary">{title}</h3>
      
      <ul className="list-disc list-inside mb-4 space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-foreground/80">{item}</li>
        ))}
      </ul>
      
      <div className="mb-4">
        <h4 className="text-sm font-medium mb-2 text-foreground/70">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2 py-1 text-xs rounded-md bg-portfolio-primary/20 text-portfolio-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-4 border-t border-muted/30">
        <span className="text-sm text-foreground/60">Project Link:</span>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-portfolio-secondary hover:text-portfolio-primary transition-colors"
        >
          <Github size={18} className="mr-1" />
          <span>View Repository</span>
        </a>
      </div>
    </div>
  </AnimatedSection>
);

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="page-section bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-heading text-center">My Projects</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            Here are some of my featured projects that showcase my technical skills and problem-solving abilities.
          </p>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
        
        <AnimatedSection delay={400} className="mt-12 text-center">
          <a 
            href="https://github.com/RAVANABOINARAJESH" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-portfolio-primary hover:bg-portfolio-secondary text-white rounded-lg transition-colors shadow-lg"
          >
            <ExternalLink size={18} className="mr-2" />
            <span>View More Projects on GitHub</span>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProjectsSection;
