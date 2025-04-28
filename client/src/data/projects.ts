import { Project, ProjectCategory } from "@/types/project";

/**
 * Project-Category Definitions
 */
export const projectCategories: Record<ProjectCategory, { label: string; color: string }> = {
  MODDING: { 
    label: "Game Modding", 
    color: "blue" 
  },
  SOFTWARE: { 
    label: "Software", 
    color: "purple" 
  },
  WEBSITE: { 
    label: "Websites", 
    color: "amber" 
  }
};

/**
 * List of all projects
 */
export const projectsData: Project[] = [
  {
    id: "soundfx-framework",
    title: "SoundFX-Framework",
    active: true,
    category: "MODDING",
    description: [
      "An SKSE plugin that allows modders to add custom sound effects to various in-game events via an easy-to-use JSON configuration. Supports flexible settings like playback chance, volume, and repeat frequency. ",
      "Add immersive, event-driven sound design to Skyrim without the need for ESPs. Includes 3D positional audio, distance-based attenuation, and highly specific condition matching for triggering effects."
    ],
    tags: ["C++", "Skyrim", "Audio", "Modding", "SKSE", "GPL-3.0"],
    links: {
      github: "https://github.com/Exouth/SoundFX-Framework",
    },
  },
  {
    id: "requiemautomagicpatcher",
    title: "RequiemAutoMagicPatcher",
    active: true,
    category: "MODDING",
    description: [
      "An automatic Synthesis patcher for Requiem that balances magic mods using statistically derived values.",
      "This patcher aggregates data from multiple manually patched Requiem magic mods, primarily those using Requiem - Magic Redone patches. By analyzing and averaging key values across various patches, the system uses those values to patch your selected magic mods."
    ],
    tags: ["C#", "Synthesis", "Skyrim", "Requiem", "Modding", "Patcher", "GPL-3.0"],
    links: {
      github: "https://github.com/Exouth/RequiemAutoMagicPatcher",
    },
  },
  {
    id: "personal-website",
    title: "Personal Website",
    active: true,
    category: "WEBSITE",
    description: [
      "Modern, responsive website built with React, TailwindCSS, and Framer Motion.",
      "This site serves as a personal portfolio to showcase my projects, tools, and interests."
    ],
    tags: ["TypeScript", "Vite", "React", "TailwindCSS", "Framer Motion", "Lenis", "Copyright Only"],
    links: {
      github: "https://github.com/Exouth/personal-website"
    },
  },
  {
    id: "exam-generator",
    title: "Exam Generator",
    active: false,
    category: "SOFTWARE",
    description: [
      "Generates exams from Markdown topic files. Originally built for personal use to automate exam creation.",
      "Exams consist of multiple types of questions: 15 multiple choice, 10 true/false, and 15 full sentence tasks per overtopic.",
      "The program uses the user as an interface to ChatGPT (no direct API usage)."
    ],
    tags: ["Python", "Automation", "Markdown", "Obsidian", "CLI", "MIT"],
    links: {
      github: "https://github.com/Exouth/ExamGeneratorChatGPT"
    },
  },
  {
    id: "anki-card-generator",
    title: "Anki Card Generator",
    active: false,
    category: "SOFTWARE",
    description: [
      "Generates Anki flashcards from glossary definitions maintained in Obsidian.",
      "Originally created for personal use to streamline the process of turning study notes into Anki decks for spaced repetition learning."
    ],
    tags: ["Python", "Automation", "Markdown", "Obsidian", "Anki", "CLI", "MIT"],
    links: {
      github: "https://github.com/Exouth/AnkiCardGenerator"
    },
  }
];