import React from 'react';
import { motion } from 'framer-motion';
import useAnimation from '@hooks/useAnimation';
import { ProjectBase } from '@/types/project';
import { projectCategories } from '@data/projects';
import { buttonColors, categoryColors, hoverTextColors } from '@data/ui';
import { ColorKey } from '@/types/ui';

const ProjectCard: React.FC<ProjectBase> = ({
  id,
  title,
  active,
  category,
  description,
  tags,
  links,
}) => {
  const hasLinks = Object.values(links).some((link) => !!link);
  const { scaleIn, pulse, hoverUp } = useAnimation();

  const categoryInfo = projectCategories[category];
  const colorKey = (categoryInfo?.color || 'purple') as ColorKey;

  const categoryColorClass = categoryColors[colorKey];
  const dynamicHoverTextClass = hoverTextColors[colorKey];
  const dynamicButtonClass = buttonColors[colorKey];

  return (
    <motion.div
      id={id}
      {...scaleIn()}
      {...hoverUp()}
      className="h-full flex-shrink-0 w-full bg-gradient-to-r from-gray-900/90 to-gray-800/90 rounded-xl p-6 transition-all duration-300 hover:shadow-xl shadow-lg border border-gray-700/50 group hover:border-opacity-80 hover:border-gray-600"
    >
      <div className="flex flex-col gap-6 h-full">
        <header className="flex flex-col gap-2">
          <div>
            <h3
              className={`text-2xl font-bold text-white transition-colors duration-300 flex items-center flex-wrap ${dynamicHoverTextClass}`}
            >
              {title}
              {active && (
                <div className="flex items-center ml-3">
                  <motion.div
                    className="w-2.5 h-2.5 bg-green-500 rounded-full mr-2"
                    {...pulse()}
                    aria-hidden="true"
                  />
                  <span className="text-green-500 text-sm font-medium">Active Project</span>
                </div>
              )}
            </h3>
            {categoryInfo && (
              <span
                className={`inline-flex mt-1 items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${categoryColorClass}`}
              >
                {categoryInfo.label}
              </span>
            )}
          </div>
        </header>

        <div className="flex-grow">
          {description.map((paragraph, index) => (
            <p key={index} className="text-gray-300 mb-3 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <footer className="mt-auto">
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-700/80 text-gray-300 rounded-lg text-sm transition-colors duration-200 hover:bg-gray-600/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {hasLinks && (
            <div className="flex flex-wrap gap-3">
              {links.github && (
                <a
                  href={links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 ${dynamicButtonClass} transition-all duration-200 rounded-lg text-white flex items-center gap-2 hover:scale-105 active:scale-95`}
                  aria-label={`View ${title} on GitHub`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}

              {links.nexusMods && (
                <a
                  href={links.nexusMods}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 transition-all duration-200 rounded-lg text-white flex items-center gap-2 hover:scale-105 active:scale-95"
                  aria-label={`View ${title} on Nexus Mods`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm0 2c5.513 0 10 4.487 10 10s-4.487 10-10 10S2 17.513 2 12 6.487 2 12 2zm0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z" />
                  </svg>
                  Nexus Mods
                </a>
              )}

              {links.download && (
                <a
                  href={links.download}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-700/80 hover:bg-blue-600 transition-all duration-200 rounded-lg text-white flex items-center gap-2 hover:scale-105 active:scale-95"
                  aria-label={`Download ${title}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download
                </a>
              )}
            </div>
          )}
        </footer>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
