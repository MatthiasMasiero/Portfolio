import { useState, useEffect } from "react";

/**
 * Custom hook to detect if the screen is mobile size
 * @param {number} breakpoint - The breakpoint in pixels (default: 640)
 * @returns {boolean} - True if mobile, false otherwise
 */
export function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth <= breakpoint
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = () => setIsMobile(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [breakpoint]);

  return isMobile;
}

