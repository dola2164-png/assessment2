# FloraVision 🌿

FloraVision is a modern, responsive landing page for a plant e-commerce brand. It features a glassmorphism design system, animated hero section, trendy plant showcases, a top-selling products grid, customer reviews, and a newsletter signup — all built with React, TypeScript, and Tailwind CSS.

**Live demo:** [https://tubular-beignet-561a2e.netlify.app/]((https://tubular-beignet-561a2e.netlify.app/))


## Features

- 🎨 **Glassmorphism UI** — frosted-glass cards with custom SVG dome shapes and backdrop blur
- 🌱 **Hero section** — featured product card with plant imagery breaking out of its container
- 📦 **Trendy Plants** — alternating image/text showcase rows
- 🛒 **Top Selling Plants** — responsive product grid with hover interactions
- ⭐ **Customer Reviews** — star-rated testimonial cards
- 💨 **O2 Plants Collection** — carousel-style feature section
- 📧 **Newsletter signup** — footer email capture form
- 📱 **Fully responsive** — mobile, tablet, and desktop layouts

## Tech Stack

- **React 18** with **TypeScript**
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- Custom SVG components for glass/dome card shapes

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/dola2164-png/assessment2.git
cd assessment2

# Install dependencies
npm install
```

### Development

Start the local dev server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

### Build

Create a production build:

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Preview production build locally

```bash
npm run preview
```

## Project Structure

```
assessment2/
├── src/
│   ├── app/
│   │   └── App.tsx          # Main application component
│   ├── imports/
│   │   └── Home/             # Image assets
│   ├── styles/
│   │   ├── index.css
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── fonts.css
│   ├── main.tsx               # App entry point
│   └── vite-env.d.ts
├── guidelines/
│   └── Guidelines.md
├── index.html
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Deployment

This project is configured for deployment on **Netlify**.

**Build settings:**
| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |


## Design Credits

UI/design assets sourced from Figma. https://www.figma.com/design/U0mtBXWgFim69YDj4pjY8f/Front-end-test?node-id=0-1&p=f&t=GJNVptiXs8HQe7fK-0

## License

This project is for educational/assessment purposes.

---

Built with 🌱 using React, TypeScript, and Tailwind CSS.
