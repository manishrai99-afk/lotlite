# LotLite - Real Estate Web Application

LotLite is a high-fidelity frontend preview of a premium real-estate platform designed in the spirit of 99acres and housing.com. It is built as a highly responsive Single Page Application (SPA) using HTML5, Vanilla CSS, and modular Vanilla JavaScript.

## Features

- **Dynamic SPA Routing**: Instant, hash-based URL routing (`#home`, `#search`, `#property`, `#list-property`, `#favorites`).
- **Interactive Search & Advanced Filters**: Real-time filtering by property type, BHK configuration, furnishing status, construction status, location, and maximum budget (range slider).
- **Interactive Map Simulator**: A coordinate-synced SVG vector map displaying property location pins dynamically matching your filter selection. Clicking map pins triggers rich property popovers.
- **Home Loan & EMI Calculator**: Interactive, reactive calculator on the property detail view. Adjust sliders for down payment, interest rates, and loan tenure to see monthly payment break-downs instantly.
- **Listing Form (Post Property)**: Fully interactive form that allows owners to publish new listings directly into the browser memory (persists using `localStorage`).
- **Persistent Favorites**: Save your preferred listings by clicking the heart button on cards; favorites are synced automatically with `localStorage` across page reloads.
- **Responsive Dark/Light Mode**: Premium glassmorphism design tokens optimized for both dark and light styling themes.

## File Structure

```
lotlite/
├── index.html            # Main entry point and SPA views shell
├── style.css             # Premium custom styling (Variables, CSS Grid, animations, themes)
├── app.js                # Core JS logic: Routing, property datasets, filters, map simulator, state
├── assets/               # Folder for generated visual assets
│   ├── logo.png          # App logo
│   ├── hero_bg.jpg       # Hero banner image
│   ├── prop_1.jpg        # Property mock photo 1
│   ├── prop_2.jpg        # Property mock photo 2
│   └── prop_3.jpg        # Property mock photo 3
└── README.md             # Project information and setup instruction
```

## How to Run Locally

You can preview the website by running any local development server inside this directory.

### Option 1: Python HTTP Server (Built-in)
Run the following command in your terminal inside the project directory:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 2: Live Server (VS Code Extension)
Right-click on `index.html` and select **"Open with Live Server"**.

### Option 3: Node.js (npx)
Run:
```bash
npx serve
```
Then open the displayed address in your web browser.
