# personal-website

A modern and responsive personal website with a brief intro, projects, and links.

![License](https://img.shields.io/badge/license-View%20Only-red)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Vite](https://img.shields.io/badge/Vite-6.3.5-blue)

## Overview

This repository contains the code for my personal website at [exouth.dev](https://exouth.dev).

![Website Preview](media/preview.gif)

## Project Structure

```
client/
├── public/        # Static assets
├── src/
│   ├── assets/      # Images and other static files
│   ├── components/  # React components
│   ├── data/        # Data files for content
│   ├── hooks/       # Custom hooks
│   ├── lib/         # Utility functions
│   ├── styles/      # Global styles
│   ├── types/       # Type definitions
│   ├── ui/          # UI components
│   ├── App.tsx      # Main application component
│   └── main.tsx     # Entry point
└── ...
```

## Tech Stack

- **Core**: React 19, Vite 6.3 with SWC, TypeScript 5.8.3

- **Main Libraries**:
  - TailwindCSS: UI styling
  - Framer Motion: Animations
  - Lenis: Smooth scrolling
  - React Helmet Async: SEO management
  - React Icons: UI icons
  - clsx / tailwind-merge: Class utilities

## Hosting

The website is hosted on a Hetzner CX22 server with the following specifications:
- 2 vCPU
- 4 GB RAM
- 40 GB NVME SSD
- x86 Intel architecture
- Ubuntu operating system
- NGINX web server

## License

**Not Open Source**

This project is protected under a custom license that does not permit open-source usage. The code is provided exclusively for viewing and code-review purposes. No use, modification, or distribution is permitted without explicit permission.

See [LICENSE](./LICENSE) for full details.

© 2025 Exouth. All rights reserved.