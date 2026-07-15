# 🎬 React Movie TMDB

A modern, high-performance web application built with **React**, **TypeScript**, and **Vite**, leveraging **The Movie Database (TMDB) API**. This project demonstrates enterprise-ready frontend development practices, focusing on secure API communication, responsive fluid UI design, and efficient state management.


---

## 🚀 Key Features

- **Dynamic Category Filtering:** Toggle seamlessly between Popular, Top Rated, Now Playing, and Upcoming movies via conditional tab rendering.
- **Secure API Architecture:** Implements standalone custom Axios instances utilizing system environment variables (`.env`) to isolate sensitive access tokens.
- **Fluid & Responsive UI:** Fully responsive card grid layout utilizing Pico CSS and custom semantic layout logic that smoothly scales down to mobile viewports.
- **Adaptive Mobile View:** Optimizes navbar estate on smaller viewports by dynamically hiding heavy textual elements while emphasizing graphic visual anchors.
- **Robust Error & String Resilience:** Safe string-truncation logic for movie titles (text-overflow ellipsis) and localized floating-point math for movie ratings.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Core:** React 18+ (Functional Components & Hooks)
- **Type Safety:** TypeScript (Strict interfaces for explicit component contract definition)
- **Build Tooling:** Vite (Lightning-fast Hot Module Replacement)
- **HTTP Client:** Axios (With interceptors/pre-configured headers capability)
- **Styling Paradigm:** Pico CSS (Semantic, lightweight HTML-first framework) + Custom CSS Media Queries

---

## ⚙️ Project Installation & Setup

Follow these steps to run the development environment locally:

### 1. Clone the Repository
```bash
git clone https://github.com
cd React-Movie-TMDB
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variable Configuration
Create a `.env` file in the root directory (parallel to `package.json`). Add your TMDB credentials using the strict Vite prefix convention:

```env
VITE_MOVIE_APP_BASE_URL=https://themoviedb.org
VITE_MOVIE_APP_TOKEN=your_tmdb_read_access_token_here
```
*(Note: The system `.gitignore` is pre-configured to strictly prevent exposing this configuration file to remote version control).*

### 4. Execute Local Development Server
```bash
npm run dev
```
Open your browser and navigate to the local port displayed in your terminal (typically `http://localhost:5173`).

---

## 📁 Key Directory Architecture

```text
├── src/
│   ├── components/
│   │   └── Navbar.tsx      # Handles conditional rendering for tab states & mobile view
│   ├── services/
│   │   └── api.ts          # Centralized Custom Axios instance for TMDB API interactions
│   ├── App.tsx             # Parent Orchestrator utilizing asynchronous effects and state sync
│   └── main.tsx            # Application entry point
├── .env                    # System variables (Ignored by Git)
├── .gitignore              # Tracking exclusions matrix
└── package.json            # Manifest file and project dependencies
```

---

## 📝 Performance & UI Engineering Highlights

- **Asynchronous Syncing:** Uses React `useEffect` bound to strict dependency matrices to trigger deterministic layout updates on state transitions without causing redundant render cascades.
- **Implicit vs Explicit Returns:** Avoids core UI rendering blocks by standardizing deterministic collection iterators over collection streams (`.map()`).
