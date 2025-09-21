# Jacob Asker - Portfolio Website

A modern and simple, responsive portfolio website showcasing my projects, skills, and experiences.

**Live Site:** [jacobasker.com](jacobasker.com)

## Features
- **Responsive Design** - Optimized for desktop and mobile devices
- **Dark/Light Theme Toggle** - Theming (light/ dark) saved via local storage
- **Project Filtering** - Filter projects by category

## Technologies Used
- **React**
- **Vite**
- **React Router** 
- **CSS Modules**
- **SVGR**
- **GitHub Pages**

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/Jackan04/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header/         # Navigation header with theme toggle
│   ├── ProjectCard/    # Project display cards
│   ├── LinkCard/       # Social media and contact links
│   └── CreativeCard/   # Creative project showcases
├── pages/              # Route components
│   ├── Home.jsx        # Landing page with intro and links
│   └── Projects.jsx    # Projects gallery with filtering
├── assets/             # Static assets
│   ├── icons/          # SVG icons with theme support
│   └── images/         # Project screenshots and profile
├── data/               # Project data and content
└── styles/             # Global styles and CSS variables
```

## Design Features
- **CSS Variables** - Consistent theming with light/dark mode support
- **Responsive Typography** - Fluid font sizes using rem units
- **Component Scoping** - CSS Modules prevent style conflicts
- **Icon System** - SVG icons that adapt to current theme colors

## Responsive Breakpoints
- **Mobile**: < 768px - Hamburger menu, stacked layout
- **Desktop**: ≥ 768px - Full navigation, side-by-side layout

## Highlights
This portfolio demonstrates:
- Modern React development patterns with hooks and functional components
- Effective use of CSS Modules for maintainable styling
- Responsive design principles and mobile-first development
- Clean project structure and component organization
- Proper routing for SPA 

## Contact
**Jacob Asker**
- Email: jacob.asker@icloud.com
- LinkedIn: [jacob-asker](https://www.linkedin.com/in/jacob-asker-a096a7352/)

Built with ❤️ using React and Vite
