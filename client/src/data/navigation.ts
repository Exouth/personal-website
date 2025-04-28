import { NavLink, SocialLinkInfo } from "@/types/navigation";

/**
 * Navigation links for the main navigation
 * Used in Navbar and Footer
 */
export const navigationLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about-me" },
  {
    name: "Projects",
    href: "#projects",
    dropdown: [
      { name: "SoundFX-Framework", href: "#soundfx-framework" },
      { name: "RequiemAutoMagicPatcher", href: "#requiemautomagicpatcher" },
    ],
  },
  { name: "Donate", href: "#donate" },
  { name: "Contact", href: "#contact" },
];

/**
 * Simple Links for the Footer without Dropdown
 */
export const footerLinks: { name: string; href: string }[] = [
  { name: "Home", href: "#home" },
  { name: "About Me", href: "#about-me" },
  { name: "Projects", href: "#projects" },
  { name: "Donate", href: "#donate" },
  { name: "Contact", href: "#contact" },
];

/**
 * Social Media Links for Footer and other components
 * Note: The actual icon must be created in the component
 */
export const socialLinksInfo: SocialLinkInfo[] = [
  { 
    name: "GitHub", 
    href: "https://github.com/exouth", 
    ariaLabel: "Visit my GitHub profile" 
  },
  { 
    name: "Nexus Mods", 
    href: "https://next.nexusmods.com/profile/Exouth", 
    ariaLabel: "Visit my Nexus Mods profile" 
  },
  { 
    name: "Ko-fi", 
    href: "https://ko-fi.com/exouth", 
    ariaLabel: "Support me on Ko-fi" 
  },
]; 