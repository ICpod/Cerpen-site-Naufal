# PDF Flipbook Viewer

## Overview
An elegant, interactive PDF flipbook viewer with smooth page-turning animations and intuitive navigation. Built with React, TypeScript, and PDF.js, this application provides an immersive reading experience on both desktop and mobile devices.

## Recent Changes
- **October 16, 2025**: Enhancement features completed (Phase 2)
  - Added zoom controls with 50%-200% range and visual zoom level indicator
  - Implemented fullscreen mode with UI chrome auto-hide and ESC key support
  - Built customizable page transition speeds (slow/normal/fast) with localStorage persistence
  - Created page thumbnails sidebar with mini previews and current page highlighting
  - Added bookmark functionality with localStorage persistence and sidebar indicators
  - Implemented download PDF and print current page capabilities
- **October 16, 2025**: Initial implementation of PDF flipbook viewer
  - Implemented 3D page flip animations with perspective transforms
  - Added touch gesture support for mobile navigation (50px swipe threshold)
  - Created navigation arrows with opacity transitions
  - Built page indicator with slide-up animation
  - Implemented keyboard navigation (arrow keys)
  - Added dark/light theme toggle (dark mode as default)
  - Configured responsive design for mobile, tablet, and desktop

## Features

### Core Features
- **Smooth Page Turning**: 3D flip animation with customizable speed (slow/normal/fast)
- **Multi-Platform Navigation**:
  - Desktop: Click arrows, keyboard arrows, or click left/right 30% zones
  - Mobile: Swipe gestures with 50px threshold for intentional page turns
- **Theme Support**: Dark and light modes with persistent preference
- **Responsive Design**: Optimized for all screen sizes
- **Accessibility**: Keyboard navigation, ARIA labels, high contrast support
- **Loading States**: Beautiful skeleton loader while PDF renders

### Enhancement Features
- **Zoom Controls**: 
  - Zoom in/out buttons with 50%-200% range
  - Visual zoom level indicator
  - Smooth scaling transitions
- **Fullscreen Mode**: 
  - One-click fullscreen toggle
  - Auto-hide UI chrome in fullscreen (except navigation arrows)
  - ESC key to exit fullscreen
- **Page Transition Speed**: 
  - Three speed options: slow (900ms), normal (600ms), fast (300ms)
  - Visual speed indicator
  - Preference persisted in localStorage
- **Page Thumbnails Sidebar**: 
  - Collapsible sidebar with mini page previews
  - Click any thumbnail to jump to that page
  - Current page highlighted
  - Shows bookmarked pages with indicator
- **Bookmark Functionality**: 
  - Toggle bookmark on current page
  - Bookmarks persisted in localStorage
  - Visual indicators in page indicator and thumbnails sidebar
- **Download/Print**: 
  - Download entire PDF with one click
  - Print current page to any printer

## User Preferences
- Default theme: Dark mode (reduced eye strain for reading)
- Animation preference: Smooth 3D page flips (respects prefers-reduced-motion)
- Design approach: Minimalist Apple HIG-inspired interface
- Font: Inter for UI elements

## Project Architecture

### Frontend Stack
- **React 18** with TypeScript
- **PDF.js** for PDF rendering
- **Tailwind CSS** for styling with custom animations
- **Wouter** for routing
- **Lucide React** for icons

### Key Components
1. **FlipbookViewer** (`client/src/components/flipbook-viewer.tsx`)
   - Main PDF viewer with flip animations
   - Touch and keyboard event handlers
   - Canvas-based PDF rendering with responsive scaling
   - Navigation arrows with opacity states
   - Page indicator with bookmark toggle
   - Zoom controls (50%-200% range)
   - Fullscreen mode with UI chrome auto-hide
   - Customizable transition speed (slow/normal/fast)
   - Download and print functionality

2. **ThumbnailsSidebar** (`client/src/components/thumbnails-sidebar.tsx`)
   - Collapsible sidebar with page thumbnails
   - Mini PDF page previews rendered on canvas
   - Click to navigate to specific page
   - Current page highlighting
   - Bookmark indicators on thumbnails
   - Smooth slide-in/out animations

3. **ThemeProvider** (`client/src/components/theme-provider.tsx`)
   - Dark/light mode management
   - localStorage persistence
   - Context API for global theme access

4. **Home Page** (`client/src/pages/home.tsx`)
   - Entry point that loads the PDF viewer

### Design System
- **Colors**: Custom cyan accent (200 95% 65% dark, 200 85% 45% light)
- **Spacing**: Tailwind units (2, 4, 6, 8, 12)
- **Animations**: 
  - flip-page: 600ms cubic-bezier(0.4, 0.0, 0.2, 1)
  - slide-up: 300ms ease-out
  - pulse: 2s for loading states
- **Typography**: Inter font with 400, 500, 600 weights

### PDF Setup
The application expects a PDF file at `/sample.pdf`. To use your own PDF:
1. Place your PDF file in the `public` folder as `sample.pdf`
2. Or update the `pdfUrl` prop in `client/src/pages/home.tsx`

### Backend
- Express.js server for static file serving
- PDF.js CDN worker for PDF processing

## Development Commands
- `npm run dev`: Start development server (Vite + Express)
- Frontend: http://localhost:5000
- Backend API: http://localhost:5000/api

## LocalStorage Data
The application persists user preferences and data in localStorage:
- `theme`: User's theme preference (light/dark)
- `flipbook-zoom`: Current zoom level (0.5 to 2.0)
- `flipbook-transition-speed`: Page transition speed (slow/normal/fast)
- `flipbook-bookmarks`: Array of bookmarked page numbers

## Future Enhancements (Next Phase)
- Search within PDF text
- Table of contents navigation
- Page notes/annotations
- Multi-PDF library management
- Share specific page via URL
