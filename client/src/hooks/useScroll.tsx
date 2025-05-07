import { useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import { ScrollOptions, ScrollToOptions } from '@/types/hooks';

/**
 * A hook for smooth scrolling with Lenis
 *
 * @param options Lenis configuration options
 * @returns An object with the Lenis ref and scrollTo functions
 */
export const useScroll = (options: ScrollOptions = {}) => {
  const lenisRef = useRef<Lenis | null>(null);

  const defaultOptions: ScrollOptions = {
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
    infinite: false,
  };

  const mergedOptions = { ...defaultOptions, ...options };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const lenis = new Lenis({
      duration: mergedOptions.duration,
      easing: mergedOptions.easing,
      smoothWheel: mergedOptions.smoothWheel,
      wheelMultiplier: mergedOptions.wheelMultiplier,
      touchMultiplier: mergedOptions.touchMultiplier,
      infinite: mergedOptions.infinite,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [
    mergedOptions.duration,
    mergedOptions.smoothWheel,
    mergedOptions.wheelMultiplier,
    mergedOptions.touchMultiplier,
    mergedOptions.infinite,
    mergedOptions.easing,
  ]);

  /**
   * Scrolls to a specific element
   * @param elementId The ID of the element to scroll to
   * @param options Additional scroll options
   */
  const scrollToSection = useCallback((elementId: string, options?: ScrollToOptions) => {
    const element = document.getElementById(elementId);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, options as unknown as Record<string, unknown>);
    }
  }, []);

  /**
   * Scrolls to a specific position
   * @param position The Y-position to scroll to
   * @param options Additional scroll options
   */
  const scrollToPosition = useCallback((position: number, options?: ScrollToOptions) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(position, options as unknown as Record<string, unknown>);
    }
  }, []);

  /**
   * Stops the scroll
   */
  const stop = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.stop();
    }
  }, []);

  /**
   * Starts the scroll
   */
  const start = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.start();
    }
  }, []);

  return {
    lenisRef,
    scrollToSection,
    scrollToPosition,
    stop,
    start,
  };
};

export default useScroll;
