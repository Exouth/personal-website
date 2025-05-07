import { useEffect, useState, useMemo } from "react";

/**
 * Responsive and accessible background effects
 * The component dynamically adapts to different screen sizes
 */
export default function BackgroundEffect() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Monitor window size changes with delayed execution for better performance
  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 100);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  // Adjust grid size based on screen width
  const gridSize = useMemo(() => {
    if (windowWidth < 640) return "bg-[size:40px_40px]";
    if (windowWidth < 1024) return "bg-[size:50px_50px]";
    return "bg-[size:60px_60px]";
  }, [windowWidth]);

  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
      role="presentation"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-slate-900 to-gray-950"></div>

      <div
        className={`absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] ${gridSize} opacity-30`}
      ></div>
    </div>
  );
}