/**
 * Navigation Link with optional Dropdown
 */
export interface NavLink {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
  ariaLabel?: string;
}

/**
 * Social Media Link
 * Note: The actual icon must be created in the component
 */
export interface SocialLinkInfo {
  name: string;
  href: string;
  ariaLabel: string;
}
