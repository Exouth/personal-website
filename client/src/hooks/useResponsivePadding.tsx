import { useMemo } from 'react';
import useWindowSize from '@hooks/useWindowSize';
import { ResponsivePadding } from '@/types/hooks';

/**
 * Hook for generating responsive padding classes based on current screen size
 * 
 * @returns An object with padding classes for sections and containers
 */
export default function useResponsivePadding(): ResponsivePadding {
  const windowSize = useWindowSize();

  /**
   * Vertical padding that scales with screen size
   */
  const sectionPadding = useMemo(() => {
    const paddingMap = {
      'xs': 'py-6',
      'sm': 'py-8',
      'md': 'py-10',
      'lg': 'py-12',
      'xl': 'py-14',
      '2xl': 'py-16'
    };
    
    return paddingMap[windowSize.breakpoint];
  }, [windowSize.breakpoint]);
  
  /**
   * Horizontal padding that's smaller on mobile devices
   */
  const containerPadding = useMemo(() => {
    return windowSize.breakpoint === 'xs' || windowSize.breakpoint === 'sm' 
      ? 'px-4' 
      : 'px-6';
  }, [windowSize.breakpoint]);

  return {
    sectionPadding,
    containerPadding
  };
} 