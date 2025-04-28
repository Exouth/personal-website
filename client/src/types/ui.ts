import { ComponentPropsWithoutRef } from "react";

/**
 * Available Color Options
 */
export type ColorKey = 'blue' | 'purple' | 'amber';

/**
  * Properties for text with animated gradient
 */
export interface AnimatedGradientTextProps extends ComponentPropsWithoutRef<"div"> {
  speed?: number;
  colorFrom?: string;
  colorTo?: string;
}

/**
 * Properties for a statistics card
 */
export interface StatItem {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

/**
 * Properties for the stats cards component
 */
export interface StatsCardsProps {
  stats?: StatItem[];
}

/**
 * Typedefinitions for Technology Categories
 */
export interface TechCategory {
  title: string;
  icon: string;
  color: string;
  textColor: string;
  bgColor: string;
  items: string[];
}

/**
 * Color Schemes for UI Elements
 */
export type CategoryColorScheme = Record<ColorKey, string>; 