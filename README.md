# F90 Motion — BMW M5 CS Interactive Experience

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

An immersive, high-performance web experience dedicated to the BMW M5 CS (F90) — the apex predator of the M legacy. This project combines cinematic automotive storytelling with fluid, scroll-driven animations and a dynamic telemetry dashboard to bring the engineering of the F90 to life across all devices.

Built as an advanced frontend project to explore GSAP animations, CDN-based media pipelines, complex React state management, and SPA routing.

---

##  Live Demo

> https://f90-motion.netlify.app/

---

##  Key Features

- **Cinematic Landing (Home):** Full-screen background video served via CDN with staggered typography reveals.
- **Scroll-Linked Animations (Machine):** ScrollTrigger-mapped image sequences simulating a 3D car rotation linked directly to scroll velocity.
- **Dynamic Telemetry Dashboard (Telemetry):** A live-updating UI simulating the car's internal microcontrollers. Features interactive `EFFICIENT`, `SPORT`, and `TRACK` modes that instantly alter:
  - Powertrain vital bars (Oil/Coolant Temps, Boost Pressure)
  - Simulated IMU G-Force radar with dynamic dot positioning
  - Tire contact patch pressures and compound temperatures
  - Dynamic atmospheric background shifts (React Bits `DarkVeil`)
- **Seamless Page Transitions:** Custom GSAP routing animations using GPU-composited `scaleY` transitions (Zig) to eliminate layout thrash.
- **Responsive Architecture:** Built with adaptive viewport units (`vw/vh`) for precision scaling from mobile screens to 4K displays.

---

##  Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | React 18 + Vite |
| **Styling** | Tailwind CSS (v3) |
| **Animation Engine** | GSAP (ScrollTrigger) + React Bits |
| **Routing** | React Router DOM |
| **Asset Pipeline** | jsDelivr CDN (via `shubhamkx34/f90-assets`) |
| **Deployment** | Netlify (Configured with `_redirects` for SPA routing) |

---

##  Core Mechanics

### Telemetry State Management
The dashboard utilizes a centralized data dictionary and React `useState` to swap between drive modes without re-rendering complex WebGL/Canvas components, ensuring 60fps performance during UI updates.

### SPA Routing & Deployment
Utilizes a custom `public/_redirects` configuration to ensure seamless client-side routing on Netlify, preventing 404 errors upon manual page refreshes.

### Scroll Performance Optimization
Heavy scroll lag was eliminated by offloading background color transitions directly to the GPU via GSAP tweens, bypassing React's virtual DOM re-render cycle where possible.

---

##  Project Structure

```text
F90-Motion/
├── public/                 # Static assets (SVGs, Local Images, _redirects)
├── Fonts/                  # Custom Typography
├── src/
│   ├── assets/             # Brand assets (F-90.svg, hero.png)
│   ├── components/          
│   │   ├── common/         # Global UI (Zig Transitions, Navbar, FullNav)
│   │   ├── Home/           # Landing page sections (Video, Top/Bottom layouts)
│   │   ├── Machine/        # Scroll-mapped components (flaptext, flyposter)
│   │   ├── Records/        # Track record data displays (bg, record)
│   │   └── Telemetry/      # Dashboard micro-components (bg, targetCursor)
│   ├── pages/              # Main Route Views (Home, machine, records, telemetry)
│   ├── App.jsx             # Main router and layout wrapper
│   ├── main.jsx            # React DOM entry point
│   └── index.css           # Global Tailwind and custom styles
├── index.html
├── package.json
└── vite.config.js
```

---

##  Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/shubhamkx34/F90-Motion.git
   ```
2. Navigate to the directory:
   ```bash
   cd F90-Motion
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```

---

