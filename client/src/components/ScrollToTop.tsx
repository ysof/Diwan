import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * ScrollToTop Component
 * Resets the scroll position to the top of the page whenever the route changes.
 * This is essential for Single Page Applications (SPAs) to ensure a consistent user experience.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to the top of the window
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
