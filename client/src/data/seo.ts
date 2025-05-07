/**
 * Contains central SEO data for the entire website
 */

export const DEFAULT_TITLE = 'Exouth.dev | Developer, Security Enthusiast, Game Modder';
export const DEFAULT_DESCRIPTION =
  'Website of Exouth - Developer, Security Enthusiast, and Game Modder. Learn more about my projects.';
export const DEFAULT_KEYWORDS =
  'Developer, Programmer, Security, Cybersecurity, Reverse Engineering, Game Modding, Mods, Skyrim Mods, C++, C#, JavaScript, TypeScript, Portfolio';
export const SITE_URL = 'https://exouth.dev';
export const DEFAULT_LANGUAGE = 'en';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.svg`;

/**
 * Generates metadata for a page
 */
export const getPageMetadata = (params?: {
  title?: string;
  description?: string;
  keywords?: string;
  noindex?: boolean;
  ogType?: string;
  ogImage?: string;
  language?: string;
}) => {
  const {
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    keywords = DEFAULT_KEYWORDS,
    noindex = false,
    ogType = 'website',
    ogImage = DEFAULT_OG_IMAGE,
    language = DEFAULT_LANGUAGE,
  } = params || {};

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      ...(noindex ? [{ name: 'robots', content: 'noindex,nofollow' }] : []),
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: ogType },
      { property: 'og:url', content: SITE_URL },
      { property: 'og:image', content: ogImage },
    ],
    htmlAttributes: {
      lang: language,
    },
  };
};
