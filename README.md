# Roadmap — DevOps Telco Cloud (Interactive React App)

This repository contains an interactive roadmap for mastering DevOps in the Telco Cloud environment, built with React and Vite.

## 🎯 What's Included

- **Interactive React App** (`/site`) — Modern, roadmap.sh-inspired UI with React + Vite
  - Interactive roadmap with tooltips, expandable sub-topics, and progress tracking
  - Internal Markdown documentation for each topic
  - Responsive design for desktop and mobile
  - Keyboard navigation and accessibility features
- **Static Assets**
  - `roadmap-telco-devops-cloud.svg` — Original static infographic
  - `roadmap.json` — Legacy data file (now superseded by `/site/src/data/roadmap.json`)
- **GitHub Pages Deployment** — Automated deployment via GitHub Actions

## 🚀 Live Demo

Visit the interactive roadmap: **https://taoufikbo.github.io/BlogTaoufik/**

## 💻 Local Development

### Prerequisites
- Node.js 20+ and npm

### Setup and Run

```bash
# Navigate to the site directory
cd site

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
cd site
npm run build
```

The production build will be in `site/dist/`

### Preview Production Build

```bash
cd site
npm run preview
```

## 📂 Project Structure

```
/site
├── public/
│   └── docs/          # Markdown documentation files
├── src/
│   ├── components/    # React components (Roadmap, Tooltip, Badge, etc.)
│   ├── pages/         # Page components (Topic viewer)
│   ├── data/          # Enriched roadmap data (roadmap.json)
│   ├── icons/         # SVG icon sprite
│   ├── styles.css     # Main stylesheet (roadmap.sh-inspired)
│   ├── App.tsx        # Root app component
│   ├── router.tsx     # Routing configuration
│   └── main.tsx       # App entry point
├── vite.config.ts     # Vite configuration
└── package.json       # Dependencies and scripts
```

## 📖 Documentation Topics

The roadmap covers 15 key topics across 4 skill levels:

### Débutant (Foundational)
1. Linux & Shell
2. Réseaux IP
3. Containers & Virtualisation

### Intermédiaire (Orchestration & IaC)
4. Kubernetes — Concepts & Objects
5. Terraform & IaC
6. CI/CD & GitOps

### Avancé (Observability, Data Plane & MANO)
7. Observability & Assurance
8. MANO & Orchestrators
9. Data Plane & Acceleration (Deep Dive)
10. Tunneling & Overlay

### Expert (Security, Cluster Lifecycle, Edge & 5G)
11. Security & Supply Chain
12. Cluster API (CAPI) & Sylva
13. ACM (OpenShift) & Multi-Cluster Ops
14. 5G Core & Edge Integration
15. Runbooks & Ops at scale

Each topic includes:
- Summary and key concepts
- Essential tasks to master
- Links to official documentation and learning resources

## ✨ Features

### Interactive Roadmap
- **Visual Layout**: Roadmap.sh-inspired design with a central spine
- **Tooltips**: Hover over cards for quick summaries and links
- **Expandable Sub-topics**: Some topics have expandable child nodes
- **Hash Anchors**: Direct links to specific topics (e.g., `#kubernetes-concepts`)
- **Progress Tracking**: Toggle progress tracking to mark completed topics (stored in localStorage)

### Documentation
- **Internal Docs**: Click any topic card to view detailed Markdown documentation
- **Rich Formatting**: Support for headings, lists, code blocks, links, and more
- **Easy Navigation**: Back button to return to the roadmap

### Responsive & Accessible
- **Mobile-Friendly**: Stacks vertically on smaller screens
- **Keyboard Navigation**: Full keyboard support with visible focus indicators
- **ARIA Labels**: Screen reader friendly

## 🎨 Customization

### Styling
The app uses a custom CSS file (`src/styles.css`) that closely matches roadmap.sh aesthetics:
- Inter font family
- Dark theme with specific color palette
- Cyan, purple, green, and orange accent colors

### Data Format
The roadmap data (`src/data/roadmap.json`) follows this structure:

```json
{
  "meta": {
    "title": "Roadmap Title",
    "style": { "bg": "#0b1220", ... }
  },
  "lanes": [
    {
      "id": "lane-id",
      "title": "Lane Title",
      "items": [
        {
          "id": "unique-id",
          "slug": "url-slug",
          "title": "Topic Title",
          "desc": "Short description",
          "badge": "Badge Text",
          "accent": 0-3,
          "side": "left|right",
          "tags": ["tag1", "tag2"],
          "prereqs": ["prerequisite-id"],
          "links": [
            { "label": "Link Text", "url": "https://...", "primary": true }
          ],
          "children": [
            { "id": "child-id", "slug": "child-slug", "title": "...", "desc": "..." }
          ]
        }
      ]
    }
  ]
}
```

### Adding Documentation
1. Create a new Markdown file in `site/public/docs/` with the filename matching the `slug` field
2. Add the topic to `site/src/data/roadmap.json`
3. The app will automatically link the card to the documentation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Test locally: `cd site && npm run dev`
5. Build and verify: `npm run build && npm run preview`
6. Commit your changes: `git commit -am 'Add new feature'`
7. Push to the branch: `git push origin feature/my-feature`
8. Submit a pull request

## 📜 License

This project is open source and available for educational purposes.

## 🙏 Credits

- Design inspired by [roadmap.sh](https://roadmap.sh/)
- Built with [React](https://react.dev/) and [Vite](https://vite.dev/)
- Icons from various open sources
- Documentation compiled from official sources and community resources