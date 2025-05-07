
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  delay = 0,
  threshold = 0.1,
  triggerOnce = false,
  id,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (!sectionRef.current) return;

    const element = sectionRef.current;
    
    if (inView) {
      setTimeout(() => {
        element.classList.add("is-visible");
      }, delay);
    } else if (!triggerOnce) {
      element.classList.remove("is-visible");
    }
  }, [inView, delay, triggerOnce]);

  return (
    <div 
      ref={(node) => {
        // This assigns the ref to both the inView hook and our local ref
        if (node) {
          ref(node);
          sectionRef.current = node;
        }
      }} 
      className={`animate-on-scroll ${className}`}
      id={id}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
