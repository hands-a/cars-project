# Apex Motors | Premium Automotive Digital Showroom

An interactive automotive showroom built with React, Three.js, and React Three Fiber, featuring real-time 3D vehicle exploration, advanced search and filtering, favorites, vehicle comparison, responsive design, accessibility, and performance-focused architecture.

![Apex Motors Showcase](https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2525&auto=format&fit=crop)

## 🚀 Project Overview

Apex Motors is a production-quality frontend application designed to mimic a high-end, premium car manufacturer's digital presence. It moves beyond a static brochure by integrating a fully interactive 3D WebGL showroom directly into the React lifecycle.

The project demonstrates advanced frontend architecture, state management without external libraries (utilizing React hooks and LocalStorage), and performant animations using Framer Motion.

## ✨ Features

- **Interactive 3D Showroom:** View vehicles in real-time 3D using Three.js and React Three Fiber. Rotate, zoom, and explore models with environment reflections and dynamic shadows.
- **Advanced Inventory Search:** Real-time search by name, brand, or category.
- **Dynamic Filtering & Sorting:** Filter vehicles by class (Sports, Luxury, SUV, Supercar) and sort by Price or Power.
- **Head-to-Head Comparison:** Compare up to 3 vehicles side-by-side to evaluate specifications and features.
- **Favorites System:** Save vehicles to a persistent favorites list using LocalStorage.
- **Premium Animations:** Smooth page transitions and scroll-reveals powered by Framer Motion.
- **Form Simulation:** Asynchronous contact form submission with loading and success states.

## 🛠️ Tech Stack

- **Core:** React 19, Vite, React Router v7
- **Styling:** Tailwind CSS v4
- **3D Graphics:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animations:** Framer Motion
- **Icons:** `lucide-react`
- **Data Persistence:** Browser `localStorage` API

## 🏗️ Architecture

The application follows a modular, feature-based architecture to ensure maintainability and scalability:

```text
src/
├── assets/          # Static assets (3D models, global CSS)
├── canvas/          # WebGL and Three.js React components (VehicleViewer)
├── components/      # Reusable UI components
│   ├── layout/      # Navbar, Footer
│   ├── sections/    # Page sections (Hero, Featured, etc.)
│   ├── ui/          # Generic components (ErrorBoundary)
│   └── vehicle/     # Vehicle specific cards and lists
├── data/            # Static JSON-like data models (carsData)
├── hooks/           # Custom React hooks (useFavorites, useCompare)
├── pages/           # Route-level components (Home, Vehicles, SingleCar, etc.)
└── routes.jsx       # React Router configuration
```

## 🏎️ 3D Experience

The 3D viewer is implemented as a reusable component (`VehicleViewer`) wrapped in a custom Error Boundary.
- **Lazy Loading:** Models are loaded asynchronously via `Suspense` with a custom loader UI.
- **Performance:** `Environment` mapping and `ContactShadows` are used to achieve photorealistic lighting without expensive real-time light calculations.
- **Resilience:** If a 3D model fails to load, the Error Boundary gracefully degrades the UI to inform the user without crashing the application.

## ⚡ Performance

- **Optimized Builds:** Configured Vite for aggressive chunking and memory optimization (`--max_old_space_size=8192`).
- **Lazy Loading:** Images utilize native `loading="lazy"` to defer offscreen loads.
- **Asset Management:** 3D models are conditionally loaded only when the `VehicleViewer` mounts.

## ♿ Accessibility & SEO

- Semantic HTML5 structure.
- Premium SEO meta tags implemented globally.
- Contrast-compliant dark mode aesthetic.
- Graceful empty states for Search, Favorites, and Compare pages.

## 💻 Installation & Development

To run this project locally:

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd apex-motors
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

## 🏗️ Production Build

To build the application for production, run:
```bash
# Set Node memory limit for handling large 3D assets during build
export NODE_OPTIONS="--max_old_space_size=8192" # Linux/Mac
# or $env:NODE_OPTIONS="--max_old_space_size=8192" # Windows PowerShell
npm run build
```

## 🔮 Future Backend Integration

The current architecture uses static data (`src/data/carsData.js`) and `localStorage` to simulate a full-stack experience. The data layer is decoupled, making it trivial to swap out the static imports for a real backend (e.g., Node.js/Express, Firebase, or Supabase) utilizing standard `fetch` or `axios` calls within `useEffect` or React Query.
