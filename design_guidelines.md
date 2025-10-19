# PDF Flipbook Viewer - Design Guidelines

## Design Approach: Minimalist Reading Experience
**Selected Approach**: Apple HIG-inspired minimalist design focused on content immersion with subtle Material Design interaction patterns for the flip animation and controls.

**Core Principle**: Create an unobtrusive, elegant reading interface where the PDF content is the hero, with intuitive navigation controls that fade into the background until needed.

## Color Palette

### Dark Mode (Primary)
- **Background**: 15 5% 12% (Deep charcoal for reduced eye strain)
- **Surface/Reader**: 220 10% 18% (Slate for PDF container)
- **Navigation Controls**: 220 8% 25% (Subtle control backgrounds)
- **Accent/Active**: 200 95% 65% (Bright cyan for active states)
- **Text/Icons**: 0 0% 95% (High contrast white for UI elements)

### Light Mode
- **Background**: 30 15% 96% (Warm off-white)
- **Surface/Reader**: 0 0% 100% (Pure white for PDF)
- **Navigation Controls**: 220 8% 92% (Light gray controls)
- **Accent/Active**: 200 85% 45% (Rich cyan for interactions)
- **Text/Icons**: 220 15% 25% (Dark gray)

## Typography
- **Primary Font**: Inter (Google Fonts) - Clean, modern sans-serif for UI elements
- **Page Numbers/Controls**: font-weight: 500 (medium) for clarity
- **Navigation**: text-sm to text-base for optimal readability

## Layout System
**Spacing Units**: Tailwind 2, 4, 6, 8, 12 (p-2, h-8, m-4, gap-6, py-12)
- Consistent rhythm for navigation controls and padding
- Generous touch targets (min 44px) for mobile arrows

### Layout Structure
- **Full-Screen Reader**: The PDF viewer occupies 100vh with no distractions
- **Centered Content**: PDF pages centered with max-width constraint for readability
- **Floating Navigation**: Arrow controls positioned absolutely on left/right edges
- **Bottom Bar**: Page indicator and controls anchored at bottom

## Component Library

### A. PDF Viewer Container
- Centered layout with shadow-2xl for depth
- Responsive sizing: 90vw on mobile, max-w-5xl on desktop
- Smooth background blur effect when controls are visible
- Border radius: rounded-lg for modern feel

### B. Page Flip Animation
- **3D Transform Effect**: Use CSS perspective and rotateY for realistic page turn
- **Duration**: 600ms for smooth, natural flip feeling
- **Easing**: cubic-bezier(0.4, 0.0, 0.2, 1) for polished motion
- **Mobile**: Swipe threshold of 50px for intentional gestures

### C. Navigation Arrows
- **Desktop**: Large circular buttons (w-14 h-14) on left/right edges
- **Mobile**: Wider touch zones (w-16 h-16) with semi-transparent backgrounds
- **States**: 
  - Default: 40% opacity, hover to 100%
  - Disabled (first/last page): 20% opacity, not clickable
- **Icons**: Chevron left/right from Heroicons (outline)
- **Position**: Fixed at vertical center, offset from edges (left-6, right-6)

### D. Page Indicator
- **Bottom Bar**: Fixed position at bottom with backdrop-blur-md
- **Display**: "Page X of Y" with current page highlighted
- **Micro-interaction**: Brief scale animation on page change
- **Mobile**: Slide up from bottom with page thumbnails option

### E. Control Bar (Optional Features)
- **Zoom Controls**: +/- buttons for PDF scaling
- **Fullscreen Toggle**: Expand icon for immersive reading
- **Download Button**: Save icon for PDF download
- **Theme Toggle**: Sun/moon icon for dark/light mode
- Position: Top-right corner, auto-hide after 3s of inactivity

### F. Loading State
- Skeleton loader matching PDF page proportions
- Pulsing animation while PDF renders
- Progress indicator for multi-page documents

## Interaction Design

### Desktop Experience
- **Arrow Keys**: Navigate with keyboard (left/right arrows)
- **Click Zones**: Large clickable areas on left/right 30% of viewer
- **Hover Effects**: Arrow buttons scale slightly (scale-105) on hover
- **Smooth Scrolling**: Prevent page jumping during transitions

### Mobile Experience  
- **Swipe Gestures**: Natural left/right swipes for page navigation
- **Touch Feedback**: Brief opacity change on touch
- **Edge Swipe**: Swipe from screen edges for guaranteed navigation
- **Haptic Feedback**: Subtle vibration on page turn (if supported)

## Animations & Transitions
**Philosophy**: Minimal, purposeful motion only for page transitions

### Page Flip Effect
```
- Transform: perspective(2000px) rotateY(-15deg to 0)
- Opacity: 0.8 to 1 during flip
- Shadow: Dynamic shadow that follows page curl
```

### Control Animations
- **Arrow Fade**: transition-opacity duration-300
- **Page Indicator**: slide-up animation on page change (translateY)
- **NO decorative animations**: Focus on functional feedback only

## Images
**No hero images needed** - The PDF content IS the visual focus. Use placeholder PDF thumbnail or abstract geometric pattern as loading state only.

## Accessibility
- High contrast mode support with WCAG AA compliance
- Keyboard navigation fully supported (arrows, space, enter)
- Screen reader announcements for page changes
- Focus indicators on all interactive elements (ring-2 ring-accent)
- Touch targets minimum 44x44px
- Reduce motion support: disable page flip animation if prefers-reduced-motion

## Responsive Breakpoints
- **Mobile** (< 768px): Single page view, full-width navigation
- **Tablet** (768-1024px): Larger PDF display, visible arrows
- **Desktop** (> 1024px): Maximum readability, hover-based controls

**Critical**: Navigation controls must always be accessible but unobtrusive - they should enhance, not distract from the reading experience.