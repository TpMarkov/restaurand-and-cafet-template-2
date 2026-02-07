# Flor Porto Design System - Color & Typography Guide

## Color Palette

### Primary Colors
- **flor-primary**: `#1a3a52` - Deep Slate Navy
  - Use for: Main headings, primary navigation, dominant backgrounds
  - Conveys: Authority, professionalism, trust

- **flor-dark**: `#0f1419` - Very Dark Navy  
  - Use for: Text, dark overlays, maximum contrast areas
  - Conveys: Depth, sophistication

- **flor-light**: `#f7f5f1` - Soft Off-white
  - Use for: Main background, neutral spaces
  - Conveys: Cleanliness, modernity, minimalism

### Accent Colors
- **flor-accent**: `#ff5757` - Vibrant Coral
  - Use for: Call-to-action buttons, important highlights, links
  - Conveys: Energy, urgency, excitement

- **flor-accent-alt**: `#ffa500` - Warm Orange
  - Use for: Secondary emphasis, hover states, gradients
  - Conveys: Warmth, friendliness, approachability

### Secondary Colors
- **flor-secondary**: `#20b8a1` - Fresh Teal
  - Use for: Accents, hover states, decorative elements
  - Conveys: Freshness, modernity, balance

### Supporting Colors
- **flor-charcoal**: `#1d2e3f` - Dark Text
  - Use for: Body text, descriptions
  
- **flor-cream**: `#faf9f7` - Warm Cream
  - Use for: Alternative light background
  
- **flor-gray**: `#55555a` - Medium Gray
  - Use for: Secondary text, borders
  
- **flor-warm**: `#f0e6dc` - Warm Neutral
  - Use for: Subtle backgrounds, borders
  
- **flor-gold**: `#ffd700` - Bright Gold
  - Use for: Premium/luxury highlights (reserved use)

---

## Typography System

### Font Families
- **Headings**: Merriweather (Serif)
  - Weights: 400 (Regular), 700 (Bold)
  - Use for: h1-h6, major titles
  - Effect: Modern elegance, readability

- **Body**: Inter (Sans-serif)
  - Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
  - Use for: Paragraphs, labels, UI elements
  - Effect: Clean, contemporary, professional

### Type Scale

| Element      | Size    | Weight     | Line Height | Color               |
| ------------ | ------- | ---------- | ----------- | ------------------- |
| h1 (Hero)    | 5xl-8xl | bold (700) | 1.2         | flor-primary/white  |
| h2 (Section) | 4xl-6xl | bold (700) | 1.3         | flor-primary        |
| h3           | 2xl     | bold (700) | 1.4         | flor-charcoal       |
| h4           | xl      | bold (700) | 1.4         | flor-charcoal       |
| Body         | base-lg | 300-400    | 1.6         | flor-charcoal       |
| Labels       | xs-sm   | bold (700) | 1.2         | flor-primary/accent |

---

## Component Styling Guide

### Buttons
```
Primary Button (.btn-primary):
- Background: flor-accent (#ff5757)
- Hover: flor-accent-alt (#ffa500)
- Padding: px-8 py-3
- Rounded: rounded-lg
- Shadow enhancement on hover

Secondary Button (.btn-secondary):
- Border: 2px flor-accent
- Text: flor-accent
- Hover Background: flor-accent
- Padding: px-8 py-3
- Rounded: rounded-lg
```

### Cards
```
Modern Card Style:
- Background: white
- Border Radius: rounded-xl (16px)
- Shadow: shadow-sm (baseline)
- Hover Shadow: shadow-xl (on interaction)
- Padding: p-8
```

### Form Elements
```
Input/Select/Textarea:
- Background: gray-50
- Border: 2px border-gray-200
- Focus Border: border-flor-accent
- Focus Background: white
- Border Radius: rounded-lg
- Padding: px-4 py-3
- Transition: all duration-300
```

### Section Headers
```
.section-subtitle:
- Font Size: text-sm md:text-base
- Font Weight: bold
- Color: flor-accent
- Letter Spacing: tracking-widest
- Transform: uppercase

.section-title:
- Font Size: text-4xl md:text-5xl lg:text-6xl
- Font Weight: bold (serif)
- Color: flor-primary
- Initial State: opacity-0 (animated in)
```

---

## Animation & Interaction Guide

### Transitions
- **Default Duration**: 300ms
- **Enhanced Duration**: 700ms (on hover)
- **Timing Function**: ease-out (smooth)

### Hover States
- Buttons: Translate up (-translate-y-0.5) + shadow growth
- Images: Scale up (scale-105 to scale-110)
- Links: Color change + underline animation
- Cards: Shadow enhancement

### Scroll Animations (GSAP)
- Hero title: Fade in + slide up (1.2s)
- Section content: Fade in + stagger effect
- Gallery items: Fade in with cascade (0.1s delay between items)

---

## Usage Guidelines

### When to Use Each Color

**Flor-Primary (#1a3a52)**
- Navigation background
- Main headings
- Primary backgrounds
- Important text

**Flor-Accent (#ff5757)**
- Primary CTAs
- Emphasis elements
- Hover states
- Accent lines

**Flor-Secondary (#20b8a1)**
- Secondary accents
- Decorative elements
- Accent lines (paired with coral)
- Balance points

**Flor-Light (#f7f5f1)**
- Section backgrounds
- Card backgrounds
- Empty space
- Clean sections

**Flor-Dark (#0f1419)**
- Footer background
- High contrast text
- Dark overlays
- Deep sections

---

## Responsive Breakpoints
Using Tailwind's default breakpoints:
- **sm**: 640px (small mobile)
- **md**: 768px (tablet)
- **lg**: 1024px (desktop)
- **xl**: 1280px (large desktop)

---

## Accessibility Notes
- Vibrant coral (flor-accent) has high contrast against white and dark backgrounds
- Text uses dark colors (flor-charcoal, flor-dark, flor-primary) for readability
- Minimum text size: 14px (0.875rem)
- Focus states clearly visible with color changes
- All interactive elements have hover/focus states

---

## Design Tokens Summary
```javascript
{
  colors: {
    "flor-primary": "#1a3a52",
    "flor-secondary": "#20b8a1",
    "flor-accent": "#ff5757",
    "flor-accent-alt": "#ffa500",
    "flor-dark": "#0f1419",
    "flor-light": "#f7f5f1",
    "flor-gold": "#ffd700",
    "flor-cream": "#faf9f7",
    "flor-charcoal": "#1d2e3f",
    "flor-warm": "#f0e6dc",
    "flor-gray": "#55555a",
  },
  fontFamily: {
    serif: "Merriweather",
    sans: "Inter",
  },
  radii: {
    DEFAULT: "0.5rem", // rounded
    lg: "0.5rem", // rounded-lg
    xl: "1rem", // rounded-xl
  }
}
```
