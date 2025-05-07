/**
 * Available Project Categories
 */
export type ProjectCategory = 'MODDING' | 'SOFTWARE' | 'WEBSITE';

/**
 * Base interface for project data
 */
export interface ProjectBase {
  id: string;
  title: string;
  active: boolean;
  category: ProjectCategory;
  description: string[];
  tags: string[];
  links: ProjectLinks;
}

/**
 * Available project links
 */
export interface ProjectLinks {
  github?: string;
  nexusMods?: string;
  download?: string;
}

/**
 * Extended ProjectBase, if additional properties are needed in the future
 */
export type Project = ProjectBase;
