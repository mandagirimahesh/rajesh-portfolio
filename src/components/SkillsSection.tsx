
import React from "react";
import AnimatedSection from "./AnimatedSection";

interface SkillProps {
  name: string;
  icon: string;
  category: string;
}

const skillsList: SkillProps[] = [
  // Programming Languages
  { name: "Java 8", icon: "code", category: "Programming" },
  { name: "J2EE", icon: "server", category: "Programming" },
  // Databases
  { name: "MySQL", icon: "database", category: "Database" },
  { name: "Oracle SQL", icon: "database", category: "Database" },
  // Web Technologies
  { name: "HTML", icon: "file-code", category: "Web" },
  { name: "CSS", icon: "palette", category: "Web" },
  { name: "JavaScript", icon: "code-square", category: "Web" },
  // Frameworks
  { name: "Hibernate", icon: "layers", category: "Frameworks" },
  { name: "Spring Framework", icon: "leaf", category: "Frameworks" },
  { name: "Spring MVC", icon: "layout", category: "Frameworks" },
  { name: "Spring Boot", icon: "boot", category: "Frameworks" },
  // APIs
  { name: "JDBC", icon: "database", category: "API" },
  { name: "Servlets", icon: "server", category: "API" },
  { name: "JSP", icon: "file-code", category: "API" },
  { name: "RESTful APIs", icon: "network", category: "API" },
  { name: "Microservices", icon: "boxes", category: "API" },
  // Tools
  { name: "Eclipse IDE", icon: "code", category: "Tools" },
  { name: "Git", icon: "git-branch", category: "Tools" },
  { name: "VS Code", icon: "code", category: "Tools" },
  { name: "Postman", icon: "send", category: "Tools" },
  { name: "Maven", icon: "package", category: "Tools" },
  { name: "GitHub", icon: "github", category: "Tools" },
  // Soft Skills
  { name: "Time Management", icon: "clock", category: "Soft Skills" },
  { name: "Problem Solving", icon: "puzzle", category: "Soft Skills" },
  { name: "Creativity", icon: "lightbulb", category: "Soft Skills" },
  { name: "Teamwork", icon: "users", category: "Soft Skills" },
  { name: "Adaptability", icon: "refresh-cw", category: "Soft Skills" },
  { name: "Collaboration", icon: "users", category: "Soft Skills" },
];

const SkillCard: React.FC<SkillProps> = ({ name, icon, category }) => (
  <AnimatedSection className="skill-card bg-accent/30 rounded-lg p-5 transition-all duration-300 hover:bg-accent/50 hover:-translate-y-1">
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 flex items-center justify-center mb-3 bg-portfolio-primary/20 rounded-full">
        <i className={`lucide-${icon} skill-icon text-portfolio-primary transition-transform duration-300`} />
      </div>
      <h3 className="font-medium mb-1">{name}</h3>
      <p className="text-sm text-foreground/70">{category}</p>
    </div>
  </AnimatedSection>
);

const SkillsSection: React.FC = () => {
  const categories = Array.from(new Set(skillsList.map(skill => skill.category)));

  return (
    <section id="skills" className="page-section">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-heading text-center">My Skills</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            I've developed expertise across a range of technologies and tools, with a focus on Java backend development and web technologies.
          </p>
        </AnimatedSection>

        {categories.map((category, index) => (
          <div key={category} className="mb-16 last:mb-0">
            <AnimatedSection delay={index * 100}>
              <h3 className="text-2xl font-display font-bold mb-6 text-portfolio-secondary">{category}</h3>
            </AnimatedSection>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {skillsList
                .filter(skill => skill.category === category)
                .map((skill, i) => (
                  <SkillCard 
                    key={skill.name} 
                    {...skill} 
                  />
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
