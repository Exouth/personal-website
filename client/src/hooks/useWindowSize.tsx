import { useState, useEffect, useCallback } from 'react';
import { debounce } from '@lib/utils';
import { WindowSize } from '@/types/hooks';

/**
 * Hook for querying the window size
 *
 * @param debounceDelay Delay in ms for the debounce function (optional)
 * @returns The object with the width and height of the window
 */
export const useWindowSize = (debounceDelay: number = 250): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
    isClient: false,
    breakpoint: 'lg',
  });

  const getBreakpoint = (width: number): WindowSize['breakpoint'] => {
    if (width < 640) return 'xs';
    if (width < 768) return 'sm';
    if (width < 1024) return 'md';
    if (width < 1280) return 'lg';
    if (width < 1536) return 'xl';
    return '2xl';
  };

  const getSize = useCallback((): WindowSize => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    return {
      width,
      height,
      isClient: true,
      breakpoint: getBreakpoint(width),
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setWindowSize(getSize());

    const handleResize = debounce(() => {
      setWindowSize(getSize());
    }, debounceDelay);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [getSize, debounceDelay]);

  return windowSize;
};

export default useWindowSize;
