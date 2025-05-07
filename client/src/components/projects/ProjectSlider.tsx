import React, { useState, useRef, useEffect, useCallback } from 'react';
import ProjectCard from '@components/projects/ProjectCard';
import { projectsData } from '@data/projects';
import { motion } from 'framer-motion';
import useAnimation from '@hooks/useAnimation';
import useWindowSize from '@hooks/useWindowSize';

interface ProjectsSliderProps {
  // Optional prop for a unique ID prefix if multiple sliders are used on a page
  idPrefix?: string;
}

const ProjectsSlider: React.FC<ProjectsSliderProps> = ({ idPrefix = 'main' }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [totalSlides, setTotalSlides] = useState(1);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const { fadeInLeft, fadeInRight, hoverScale } = useAnimation();

  const windowSize = useWindowSize();

  const calculateTotalSlides = useCallback(() => {
    if (!sliderRef.current) return;

    const sliderWidth = sliderRef.current.scrollWidth;
    const containerWidth = sliderRef.current.offsetWidth;
    const slideCount = Math.ceil(sliderWidth / containerWidth);

    setTotalSlides(Math.max(1, slideCount));
  }, []);

  useEffect(() => {
    if (windowSize.isClient && windowSize.width > 0) {
      calculateTotalSlides();
    }
  }, [windowSize.width, calculateTotalSlides, windowSize.isClient]);

  const handleScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollPosition = slider.scrollLeft;
    const containerWidth = slider.offsetWidth;
    const maxScroll = slider.scrollWidth - containerWidth;

    if (maxScroll <= 0) {
      setIsAtStart(true);
      setIsAtEnd(true);
      setActiveIndex(0);
      return;
    }

    const tolerance = 10;
    const newIsAtStart = scrollPosition <= tolerance;
    const newIsAtEnd = maxScroll - scrollPosition <= tolerance;

    setIsAtStart(newIsAtStart);
    setIsAtEnd(newIsAtEnd);

    const newIndex = Math.round((scrollPosition / maxScroll) * (totalSlides - 1));

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  }, [activeIndex, totalSlides]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    slider.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => slider.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleSlideLeft = () => {
    if (!sliderRef.current) return;

    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const handleSlideRight = () => {
    if (!sliderRef.current) return;

    if (activeIndex < totalSlides - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current || totalSlides <= 1) return;

    const slider = sliderRef.current;
    const maxScroll = slider.scrollWidth - slider.offsetWidth;

    const scrollPosition = (index / (totalSlides - 1)) * maxScroll;

    slider.scrollTo({
      left: scrollPosition,
      behavior: 'smooth',
    });

    setActiveIndex(index);
  };

  if (projectsData.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-800/50 rounded-xl">
        <p className="text-gray-400">No projects found</p>
      </div>
    );
  }

  const sliderId = `projects-slider-${idPrefix}`;

  const getCardWidth = () => {
    const width = windowSize.width;
    if (width < 640) return 'w-full'; // Mobile View
    if (width < 768) return 'w-[85%]'; // Small Tablets
    if (width < 1024) return 'w-[70%]'; // Tablets
    return 'w-[550px]'; // Desktop
  };

  const cardWidthClass = getCardWidth();

  return (
    <div className="relative">
      {!isAtStart && windowSize.width >= 768 && (
        <motion.button
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-900/80 p-3 rounded-full flex items-center justify-center z-10 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors shadow-md backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSlideLeft}
          aria-label="Show previous project"
          aria-controls={sliderId}
          {...fadeInLeft()}
          {...hoverScale()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </motion.button>
      )}

      {!isAtEnd && windowSize.width >= 768 && (
        <motion.button
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-900/80 p-3 rounded-full flex items-center justify-center z-10 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors shadow-md backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSlideRight}
          aria-label="Show next project"
          aria-controls={sliderId}
          {...fadeInRight()}
          {...hoverScale()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      )}

      <div
        ref={sliderRef}
        id={sliderId}
        className="flex overflow-x-auto gap-6 py-2 px-1 snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingBottom: '20px',
        }}
        aria-live="polite"
        role="region"
        aria-label="Project carousel"
        tabIndex={0}
      >
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`flex-shrink-0 ${cardWidthClass} snap-start`}
            aria-hidden={activeIndex !== index}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {totalSlides > 1 && (
        <div
          className="flex justify-center mt-8 gap-2"
          role="tablist"
          aria-label="Slider Navigation"
        >
          {[...Array(totalSlides)].map((_, index) => (
            <motion.button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                index === activeIndex ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to page ${index + 1}`}
              aria-selected={index === activeIndex}
              role="tab"
              tabIndex={index === activeIndex ? 0 : -1}
              {...hoverScale(1.2)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsSlider;
