import React from 'react';

const AboutMe: React.FC = () => (
  <div className="relative">
    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-transparent rounded-full"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <p className="text-lg text-gray-300 leading-relaxed">
          Im a developer interested in all aspects of software, from front-end web development to
          game modding and low-level systems. I enjoy diving into different domains and
          experimenting with technical challenges.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          My background also includes cybersecurity, especially low-level areas like reverse
          engineering and system internals. Thats where I started and it still influences how I
          approach problems today.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          I like diving into things like HackTheBox or crackmes in my free time. I also enjoy
          reading and learning about new technologies, especially anything related to systems,
          security or programming.
        </p>
      </div>
      <div className="space-y-4">
        <p className="text-lg text-gray-300 leading-relaxed">
          My tech stack usually includes C++, C# and Python, but Im comfortable jumping into
          whatever a project needs.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Ive been modding Skyrim for a long time, and because I really enjoy the game, I also like
          creating and sharing a few public mods for it.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          On the side, Ive reported security vulnerabilities via HackerOne for companies like
          Glassdoor and Logitech.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Most of what I work on is driven by curiosity and Im always looking to learn, build
          something useful or improve on what already exists.
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
