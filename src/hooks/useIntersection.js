import { useEffect, useState } from "react";

/**
 * Takes a ref and threshold, returns whether element is intersecting.
 */
export default function useIntersection(ref, threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!ref || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return isVisible;
}
