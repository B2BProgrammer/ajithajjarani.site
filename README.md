# Ajith Ajjarani Chandrappa — Resume Site (React + Vite)

A responsive, single-page resume built with React 18 and Vite. All content lives in
`src/data/resume.js`, so updating the resume never requires touching components.

## Project structure

```
ajith-resume/
├── index.html              # HTML shell (fonts, meta, root div)
├── package.json            # scripts + dependencies
├── vite.config.js          # Vite + React plugin, dev server on :5173
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Page layout
    ├── index.css           # Styles (light/dark, responsive, print)
    ├── data/
    │   └── resume.js       # ← all resume content
    └── components/
        ├── Nav.jsx
        ├── Header.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx  # timeline with expandable projects
        └── Education.jsx   # education + footer
```

## 1. Prerequisites

Install **Node.js 18+** (LTS recommended) from https://nodejs.org, then verify:

```bash
node -v
npm -v
```

## 2. Create the folder & initialize the project

### Option A — use this codebase (recommended)
Unzip `ajith-resume.zip`, then:

```bash
cd ajith-resume
npm install
```

### Option B — scaffold from scratch, then drop in the files
```bash
mkdir projects && cd projects
npm create vite@latest ajith-resume -- --template react
cd ajith-resume
npm install
mkdir src/components src/data
# copy src/, index.html, public/favicon.svg from this codebase over the generated files
# delete the generated src/App.css and src/assets/ (not used)
```

## 3. Run on localhost

```bash
npm run dev
```

Open **http://localhost:5173** (it opens automatically). Edits hot-reload instantly.

## Other commands

| Command           | What it does                                   |
|-------------------|------------------------------------------------|
| `npm run build`   | Production build into `dist/`                  |
| `npm run preview` | Serves the production build at localhost:4173  |

## Features
- Sticky nav with smooth scrolling
- Expandable project cards per employer (timeline layout)
- Automatic light/dark theme
- Mobile-responsive
- "Print / Save PDF" button with print-optimized styles

## Deploy (optional)
`npm run build` then drag the `dist/` folder onto Netlify, or push to GitHub and import into Vercel.
