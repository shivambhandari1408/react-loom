import { useEffect, useState } from "react";

/**
 * Returns boolean (visible) based on scroll direction.
 * Not used directly in this final layout (kept for future use).
 */
export default function useScrollVisibility() {
  const [visible, setVisible] = useState(true);
  const [last, setLast] = useState(0);

  useEffect(() => {
    const handler = () => {
      const current = window.scrollY;
      if (current > last && current > 10) setVisible(false);
      else setVisible(true);
      setLast(current);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [last]);

  return visible;
}
