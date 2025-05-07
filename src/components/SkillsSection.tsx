
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { 
  Code2Icon, ServerIcon, DatabaseIcon, FileCodeIcon, PaletteIcon, 
  CodeSquareIcon, LayersIcon, LeafIcon, LayoutIcon, PackageIcon,
  NetworkIcon, BoxesIcon, GitBranchIcon, SendIcon, GithubIcon,
  ClockIcon, PuzzlePieceIcon, LightbulbIcon, UsersIcon, 
  RefreshCwIcon
} from "lucide-react";

interface SkillProps {
  name: string;
  icon: React.ReactNode;
  category: string;
}

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "code":
      return <Code2Icon className="w-6 h-6" />;
    case "server":
      return <ServerIcon className="w-6 h-6" />;
    case "database":
      return <DatabaseIcon className="w-6 h-6" />;
    case "file-code":
      return <FileCodeIcon className="w-6 h-6" />;
    case "palette":
      return <PaletteIcon className="w-6 h-6" />;
    case "code-square":
      return <CodeSquareIcon className="w-6 h-6" />;
    case "layers":
      return <LayersIcon className="w-6 h-6" />;
    case "leaf":
      return <LeafIcon className="w-6 h-6" />;
    case "layout":
      return <LayoutIcon className="w-6 h-6" />;
    case "boot":
      return <PackageIcon className="w-6 h-6" />;
    case "network":
      return <NetworkIcon className="w-6 h-6" />;
    case "boxes":
      return <BoxesIcon className="w-6 h-6" />;
    case "git-branch":
      return <GitBranchIcon className="w-6 h-6" />;
    case "send":
      return <SendIcon className="w-6 h-6" />;
    case "package":
      return <PackageIcon className="w-6 h-6" />;
    case "github":
      return <GithubIcon className="w-6 h-6" />;
    case "clock":
      return <ClockIcon className="w-6 h-6" />;
    case "puzzle":
      return <PuzzlePieceIcon className="w-6 h-6" />;
    case "lightbulb":
      return <LightbulbIcon className="w-6 h-6" />;
    case "users":
      return <UsersIcon className="w-6 h-6" />;
    case "refresh-cw":
      return <RefreshCwIcon className="w-6 h-6" />;
    default:
      return <Code2Icon className="w-6 h-6" />;
  }
};

const skillsList: Array<Omit<SkillProps, "icon"> & { iconName: string }> = [
  // Programming Languages
  { name: "Java 8", iconName: "code", category: "Programming" },
  { name: "J2EE", iconName: "server", category: "Programming" },
  // Databases
  { name: "MySQL", iconName: "database", category: "Database" },
  { name: "Oracle SQL", iconName: "database", category: "Database" },
  // Web Technologies
  { name: "HTML", iconName: "file-code", category: "Web" },
  { name: "CSS", iconName: "palette", category: "Web" },
  { name: "JavaScript", iconName: "code-square", category: "Web" },
  // Frameworks
  { name: "Hibernate", iconName: "layers", category: "Frameworks" },
  { name: "Spring Framework", iconName: "leaf", category: "Frameworks" },
  { name: "Spring MVC", iconName: "layout", category: "Frameworks" },
  { name: "Spring Boot", iconName: "boot", category: "Frameworks" },
  // APIs
  { name: "JDBC", iconName: "database", category: "API" },
  { name: "Servlets", iconName: "server", category: "API" },
  { name: "JSP", iconName: "file-code", category: "API" },
  { name: "RESTful APIs", iconName: "network", category: "API" },
  { name: "Microservices", iconName: "boxes", category: "API" },
  // Tools
  { name: "Eclipse IDE", iconName: "code", category: "Tools" },
  { name: "Git", iconName: "git-branch", category: "Tools" },
  { name: "VS Code", iconName: "code", category: "Tools" },
  { name: "Postman", iconName: "send", category: "Tools" },
  { name: "Maven", iconName: "package", category: "Tools" },
  { name: "GitHub", iconName: "github", category: "Tools" },
  // Soft Skills
  { name: "Time Management", iconName: "clock", category: "Soft Skills" },
  { name: "Problem Solving", iconName: "puzzle", category: "Soft Skills" },
  { name: "Creativity", iconName: "lightbulb", category: "Soft Skills" },
  { name: "Teamwork", iconName: "users", category: "Soft Skills" },
  { name: "Adaptability", iconName: "refresh-cw", category: "Soft Skills" },
  { name: "Collaboration", iconName: "users", category: "Soft Skills" },
];

const SkillCard: React.FC<SkillProps> = ({ name, icon, category }) => (
  <AnimatedSection className="skill-card bg-accent/30 rounded-lg p-5 transition-all duration-300 hover:bg-accent/50 hover:-translate-y-1">
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 flex items-center justify-center mb-3 bg-portfolio-primary/20 rounded-full">
        {icon}
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
                    name={skill.name} 
                    icon={getIconComponent(skill.iconName)}
                    category={skill.category} 
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
