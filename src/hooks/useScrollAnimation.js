// hooks/useScrollAnimation.js
import { useState, useEffect } from "react";
import { useScroll, useSpring } from "framer-motion";

export const useScrollAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll();
  const smoothScrollProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    const unsubscribe = smoothScrollProgress.on("change", (latest) => {
      setScrollProgress(latest);
    });

    return () => unsubscribe();
  }, [smoothScrollProgress]);

  return scrollProgress;
};
