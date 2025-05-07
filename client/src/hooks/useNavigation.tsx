import { useCallback } from 'react';
import { UseNavigationOptions } from '@/types/hooks';

/**
 * Hook for central management of navigation logic in the entire app
 * Handles navigation to different pages, sections, and external links
 */
export const useNavigation = (options: UseNavigationOptions) => {
  const { scrollToSection, navigate, isHomePage, onBeforeNavigate } = options;

  const handleNavigation = useCallback(
    (href: string) => {
      if (onBeforeNavigate) {
        onBeforeNavigate();
      }

      if (href.startsWith('#')) {
        const sectionId = href.substring(1);

        if (isHomePage) {
          scrollToSection(sectionId);
        } else {
          sessionStorage.setItem('scrollTarget', sectionId);
          navigate('/');
        }
      } else if (href.startsWith('/')) {
        navigate(href);
      } else {
        window.open(href, '_blank', 'noopener,noreferrer');
      }
    },
    [scrollToSection, isHomePage, navigate, onBeforeNavigate],
  );

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      handleNavigation(href);
    },
    [handleNavigation],
  );

  return {
    handleNavigation,
    handleNavClick,
  };
};

export default useNavigation;
