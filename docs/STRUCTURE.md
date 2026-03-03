# Project Structure

## Folder Layout

```
src/
├── app/                  # Next.js App Router pages and layouts
│   ├── layout.tsx        # Root layout (HTML, fonts, global providers)
│   ├── page.tsx          # Homepage
│   └── globals.css       # Tailwind + shadcn CSS variables
├── components/
│   ├── ui/               # shadcn primitives (Button, Card, etc.)
│   └── sections/         # Proposal-specific section components
├── content/              # Static content, copy, and data files
└── lib/
    └── utils.ts          # Utility functions (cn helper, etc.)

docs/                     # Project documentation and tracking
public/
└── images/               # Static images and assets
```

## Section Composition Rules
- Each major section lives in `src/components/sections/`
- Sections are composed on page files in `src/app/`
- shadcn primitives from `src/components/ui/` are used as building blocks
- Keep sections self-contained: each file exports a single default component

## Content Management
- All proposal copy lives in `src/content/` as TypeScript objects or JSON
- Pages import content and pass it as props to section components
- This keeps content editable without touching component logic
