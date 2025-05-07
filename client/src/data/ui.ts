import { CategoryColorScheme, ColorKey } from '@/types/ui';

/**
 * Color Schemes for Categories (used in Project Cards)
 */
export const categoryColors: CategoryColorScheme = {
  blue: 'bg-blue-600/20 text-blue-400 ring-blue-400/30',
  purple: 'bg-purple-600/20 text-purple-400 ring-purple-400/30',
  amber: 'bg-amber-600/20 text-amber-400 ring-amber-400/30',
};

/**
 * Text hover colors for different categories
 */
export const hoverTextColors: Record<ColorKey, string> = {
  blue: 'group-hover:text-blue-400',
  purple: 'group-hover:text-purple-400',
  amber: 'group-hover:text-amber-400',
};

/**
 * Button background colors for different categories
 */
export const buttonColors: Record<ColorKey, string> = {
  blue: 'bg-blue-600/80 hover:bg-blue-600',
  purple: 'bg-purple-600/80 hover:bg-purple-600',
  amber: 'bg-amber-600/80 hover:bg-amber-600',
};
