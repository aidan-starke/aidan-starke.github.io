# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start Vite development server
- `npm run build` - Type-check with `tsc -b` and build with Vite
- `npm run preview` - Preview production build locally

### Code Quality
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Deployment
- `npm run deploy` - Build and deploy to GitHub Pages (runs predeploy → build automatically)

## Architecture

This is a personal portfolio/CV website built as a single-page React application.

### Tech Stack
- React 19 + TypeScript
- Vite for bundling and dev server
- React Router for routing
- Tailwind CSS 4 (via Vite plugin)
- shadcn/ui components (New York style)
- Deployed to GitHub Pages

### Project Structure

```
src/
├── components/
│   ├── sidebar/        # Left sidebar: Header, Contact, Education, Skills
│   ├── main/           # Main content: AboutMe, WorkExperience, KeyProjects, References
│   └── ui/             # shadcn/ui components (Badge, Button, Card, Separator)
├── App.tsx             # Router setup, redirects / to /cv
└── main.tsx            # Entry point
```

### Component Organization

The app uses a two-column layout (sidebar + main) rendered at `/cv`:

- **Sidebar** (`src/components/sidebar/index.tsx`): Dark-themed left column containing personal info sections
- **Main** (`src/components/main/index.tsx`): Light-themed right column containing professional content

Both are composed of smaller section components that can be edited independently.

### Path Aliases

The project uses `@` as an alias for `./src` (configured in vite.config.ts and components.json).

### Styling

Uses Tailwind CSS with custom gradients and animations. The design features a modern card-based layout with hover effects and responsive breakpoints (mobile-first, sidebar stacks on top on mobile).
