import { useEffect, useRef, useState } from "react";

interface UseScrollAnimationOptions {
  threshold?: number;
  direction?: "up" | "left" | "right";
}

export const useScrollAnimation = ({ 
  threshold = 0.1, 
  direction = "up" 
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
          return "opacity-0 translate-y-10";
        case "left":
          return "opacity-0 -translate-x-10";
        case "right":
          return "opacity-0 translate-x-10";
        default:
          return "opacity-0";
      }
    }
    return "opacity-100 translate-y-0 translate-x-0";
  };

  return {
    ref,
    className: `transition-all duration-[600ms] ease-out ${getAnimationClass()}`,
  };
};
