import React from 'react';
import { techCategories } from '@data/technologies';

const TechTags: React.FC = () => {
  return (
    <div className="space-y-8">
      {techCategories.map((category) => (
        <div key={category.title} className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xl ${category.textColor}`}>{category.icon}</span>
            <h4
              className={`text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r ${category.color}`}
            >
              {category.title}
            </h4>
            <div className={`h-px flex-grow bg-gradient-to-r ${category.color} opacity-20`}></div>
          </div>

          <div className="flex flex-wrap gap-3">
            {category.items.map((tech) => (
              <span
                key={tech}
                className={`px-4 py-1.5 ${category.bgColor} ${category.textColor} rounded-full text-sm font-medium
                         backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg
                         border border-white/5 shadow-sm`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechTags;
