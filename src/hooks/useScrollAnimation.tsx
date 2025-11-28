import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  direction?: "up" | "left" | "right";
  duration?: number;
  delay?: number;
}

export const useScrollAnimation = ({ 
  threshold = 0.1, 
  direction = "up",
  duration = 2000, 
  delay = 100 // ms
}: UseScrollAnimationOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return "opacity-0 translate-y-20";
        case "left":
          return "opacity-0 -translate-x-20";
        case "right":
          return "opacity-0 translate-x-20";
        default:
          return "opacity-0";
      }
    }
    return "opacity-100 translate-y-0 translate-x-0";
  };

  return {
    ref,
    className: `transition-all duration-[1200ms] ease-out ${getAnimationClass()}`,
  };
};
