
import React from "react";
import AnimatedSection from "./AnimatedSection";
import { Calendar, School, Award } from "lucide-react";

interface EducationItemProps {
  degree: string;
  institution: string;
  duration: string;
  percentage: string;
  delay?: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, duration, percentage, delay = 0 }) => (
  <AnimatedSection delay={delay} className="relative">
    <div className="pl-8 pb-8 relative before:absolute before:left-0 before:top-2 before:bottom-0 before:w-0.5 before:bg-portfolio-primary/40">
      <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-portfolio-primary transform -translate-x-0.5" />
      
      <div className="bg-accent/30 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-portfolio-secondary mb-3">{degree}</h3>
        
        <div className="space-y-2 text-foreground/80">
          <div className="flex items-center">
            <School size={18} className="mr-3 text-portfolio-primary" />
            <span>{institution}</span>
          </div>
          
          <div className="flex items-center">
            <Calendar size={18} className="mr-3 text-portfolio-primary" />
            <span>{duration}</span>
          </div>
          
          <div className="flex items-center">
            <Award size={18} className="mr-3 text-portfolio-primary" />
            <span>Percentage: {percentage}</span>
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Mechanical Engineering",
      institution: "Sree Dattha Engineering and Science",
      duration: "August 2019 – May 2022",
      percentage: "73%",
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "Government Polytechnic Masab Tank",
      duration: "June 2016 – July 2019",
      percentage: "87%",
    },
  ];

  const certifications = [
    "Java Certificate – HackerRank",
    "Full Stack Java Development – Q & J Spider's, Hyderabad",
    "Java Certificate – Geekster",
  ];

  return (
    <section id="education" className="page-section">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="section-heading text-center">Education & Certifications</h2>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div>
            <AnimatedSection delay={200}>
              <h3 className="text-2xl font-display font-bold mb-8 text-portfolio-secondary flex items-center">
                <School size={24} className="mr-3" />
                <span>Education</span>
              </h3>
            </AnimatedSection>
            
            <div className="space-y-4">
              {education.map((item, index) => (
                <EducationItem
                  key={index}
                  {...item}
                  delay={300 + index * 100}
                />
              ))}
            </div>
          </div>
          
          <div>
            <AnimatedSection delay={200}>
              <h3 className="text-2xl font-display font-bold mb-8 text-portfolio-secondary flex items-center">
                <Award size={24} className="mr-3" />
                <span>Certifications</span>
              </h3>
            </AnimatedSection>
            
            <AnimatedSection delay={400} className="bg-accent/30 p-6 rounded-lg shadow-md">
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start">
                    <Award size={18} className="mr-3 mt-1 text-portfolio-primary" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
