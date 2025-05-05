import { TargetAndTransition, VariantLabels } from 'framer-motion';
import { NavigateFunction } from 'react-router-dom';

/**
 * WindowSize returns window size and breakpoint information
 */
export interface WindowSize {
  width: number;
  height: number;
  isClient: boolean;
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

/**
 * ScrollOptions for the useScroll Hook
 */
export interface ScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
  smoothWheel?: boolean;
  wheelMultiplier?: number;
  touchMultiplier?: number;
  infinite?: boolean;
}

/**
 * ScrollToOptions for the scrollTo functions in the useScroll Hook
 */
export interface ScrollToOptions {
  offset?: number;
  immediate?: boolean;
  duration?: number;
  lock?: boolean;
  force?: boolean;
  lerp?: number;
  onComplete?: () => void;
}

/**
 * AnimationProps for the useAnimation Hook
 */
export interface AnimationProps {
  initial?: TargetAndTransition | VariantLabels;
  animate?: TargetAndTransition | VariantLabels;
  transition?: any;
  whileHover?: TargetAndTransition | VariantLabels;
  whileTap?: TargetAndTransition | VariantLabels;
  whileInView?: TargetAndTransition | VariantLabels;
  viewport?: any;
}

/**
 * Options for the useClipboard Hook
 */
export interface UseClipboardOptions {
  /**
   * Duration in milliseconds for the success/error status
   * @default 2000
   */
  successDuration?: number;
}

/**
 * Type for the Clipboard status
 */
export type CopyState = string | boolean | null;

/**
 * Responsive Padding settings for the useResponsivePadding Hook
 */
export interface ResponsivePadding {
  sectionPadding: string;
  containerPadding: string;
}

/**
 * Options for the useNavigation Hook
 */
export interface UseNavigationOptions {
  scrollToSection: (sectionId: string) => void;
  navigate: NavigateFunction;
  isHomePage: boolean;
  onBeforeNavigate?: () => void;
}

/**
 * Options for the useDownload Hook
 */
export interface UseDownloadOptions {
  /**
   * Duration in milliseconds for the download status feedback
   * @default 2000
   */
  successDuration?: number;
}

/**
 * Type for the Download status
 */
export type DownloadState = string | boolean | null; 