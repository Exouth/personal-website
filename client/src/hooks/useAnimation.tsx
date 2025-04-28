import { useCallback } from 'react';
import { AnimationProps } from '@/types/hooks';

/**
 * Hook for frequently used animations with Framer Motion
 * 
 * @returns An object with predefined animation presets
 */
export const useAnimation = () => {
  /**
   * Fade-In from bottom Animation
   * @param delay Delay in seconds (optional)
   */
  const fadeInUp = useCallback((delay: number = 0): AnimationProps => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.5, 
      delay, 
      ease: [0.25, 0.1, 0.25, 1.0] 
    },
  }), []);

  /**
   * Fade-In from left Animation
   * @param delay Delay in seconds (optional)
   */
  const fadeInLeft = useCallback((delay: number = 0): AnimationProps => ({
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { 
      duration: 0.5, 
      delay, 
      ease: [0.25, 0.1, 0.25, 1.0] 
    },
  }), []);

  /**
   * Fade-In from right Animation
   * @param delay Delay in seconds (optional)
   */
  const fadeInRight = useCallback((delay: number = 0): AnimationProps => ({
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { 
      duration: 0.5, 
      delay, 
      ease: [0.25, 0.1, 0.25, 1.0] 
    },
  }), []);

  /**
   * Scale-In Animation (Increase with visibility)
   * @param delay Delay in seconds (optional)
   */
  const scaleIn = useCallback((delay: number = 0): AnimationProps => ({
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { 
      duration: 0.6, 
      delay,
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }), []);

  /**
   * Staggered-Appearing Animation for lists
   * @param delayChildren Delay between child elements
   * @param initialDelay Initial delay
   */
  const staggerContainer = useCallback((delayChildren: number = 0.1, initialDelay: number = 0): AnimationProps => ({
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      delayChildren: delayChildren,
      staggerChildren: 0.1,
      delay: initialDelay,
    },
  }), []);

  /**
   * Staggered-Item Animation for child elements
   * @param delay Delay in seconds (optional)
   */
  const staggerItem = useCallback((delay: number = 0): AnimationProps => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.4, 
      delay, 
      ease: [0.25, 0.1, 0.25, 1.0] 
    },
  }), []);

  /**
   * Scaling Animation for hover states
   * @param scale Scaling factor (optional)
   */
  const hoverScale = useCallback((scale: number = 1.05): AnimationProps => ({
    whileHover: { 
      scale,
      y: -5 
    },
    whileTap: { scale: 0.98 },
    transition: { 
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1.0]
    },
  }), []);

  /**
   * Scaling Animation for hover states without vertical movement
   * @param scale Scaling factor (optional)
   */
  const hoverScaleOnly = useCallback((scale: number = 1.05): AnimationProps => ({
    whileHover: { 
      scale 
    },
    whileTap: { scale: 0.98 },
    transition: { 
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1.0]
    },
  }), []);

  /**
   * Vertical Animation for hover states
   * @param distance Distance upwards in pixels (optional)
   */
  const hoverUp = useCallback((distance: number = 5): AnimationProps => ({
    whileHover: { 
      y: -distance 
    },
    whileTap: { y: -1 },
    transition: { 
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1.0]
    },
  }), []);

  /**
   * Pulse Animation
   */
  const pulse = useCallback((): AnimationProps => ({
    animate: { 
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  }), []);

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerContainer,
    staggerItem,
    hoverScale,
    hoverScaleOnly,
    hoverUp,
    pulse,
  };
};

export default useAnimation; 