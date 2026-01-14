# Holiday Greeting Generator - Page Design Documentation

## Overview

This document covers the HTML structure and CSS styling of the Holiday Greeting Generator webpage, excluding the postcard scene assets used in the generator frames.

---

## File Structure

**Main File:** `holiday greeting scenes and web ui/webpage-skeleton.html`

The page is a single self-contained HTML file with all CSS embedded in a `<style>` tag. No external CSS frameworks are used.

---

## CSS Architecture

### 1. Custom Utility Classes (Tailwind-like)

The project implements its own utility class system inspired by Tailwind CSS. These are defined at the top of the `<style>` block.

#### Display & Flexbox
```css
.flex { display: flex; }
.flex-col { flex-direction: column; }
.flex-wrap { flex-wrap: wrap; }
.flex-grow { flex-grow: 1; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
```

#### Spacing (Margin & Padding)
```css
/* Margins */
.mx-auto { margin-left: auto; margin-right: auto; }
.mb-4 { margin-bottom: 1rem; }
.mt-8 { margin-top: 2rem; }

/* Padding */
.p-4 { padding: 1rem; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
```

#### Typography
```css
.text-lg { font-size: 1.125rem; line-height: 1.75rem; }
.text-5xl { font-size: 3rem; line-height: 1; }
.font-bold { font-weight: 700; }
.font-extrabold { font-weight: 800; }
.text-center { text-align: center; }
```

#### Layout
```css
.w-full { width: 100%; }
.max-w-7xl { max-width: 80rem; }
.hidden { display: none; }
```

---

### 2. CSS Custom Properties (Design Tokens)

Located in the `:root` selector:

```css
:root {
    /* Sky Colors */
    --sky-blue: #C1E1F5;
    --deep-sky: #63B3ED;
    --snow-white: #F9FAFB;

    /* Brand Colors */
    --primary-red: #B91C1C;
    --primary-red-light: #D93B3B;
    --secondary-green: #065F46;
    --secondary-green-light: #088c68;

    /* Accent Colors */
    --gold-yellow: #FCD34D;
    --gift-blue: #3B82F6;
    --gift-purple: #8B5CF6;

    /* Button Gradients */
    --btn-red-gradient: linear-gradient(180deg, var(--primary-red-light) 0%, var(--primary-red) 100%);
    --btn-green-gradient: linear-gradient(180deg, var(--secondary-green-light) 0%, var(--secondary-green) 100%);
    --btn-gray-gradient: linear-gradient(180deg, #F3F4F6 0%, #D1D5DB 100%);
    --btn-white-gradient: linear-gradient(180deg, #FFFFFF 0%, #F3F4F6 100%);
}
```

---

### 3. Typography

**Font Families:**
- **Display Font:** `'Limelight', cursive` - Used for headings and decorative text
- **UI Font:** `'Boogaloo', cursive` - Used for buttons and interactive elements
- **Body Font:** `system-ui, -apple-system, sans-serif` - System font stack

**Font Loading:**
```html
<link href="https://fonts.googleapis.com/css2?family=Limelight&family=Boogaloo&display=swap" rel="stylesheet">
```

**Font Classes:**
```css
.font-display { font-family: 'Limelight', cursive !important; }
```

---

## Page Layout

### Background System

The page uses a layered background system:

#### 1. Winter Sky Background
```css
.winter-background {
    background-image:
        linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.1)),
        linear-gradient(to bottom, var(--deep-sky) 0%, var(--sky-blue) 40%, var(--sky-blue) 100%);
    background-color: var(--sky-blue);
    background-attachment: fixed;
}
```

#### 2. Snowy Hills Layer
```css
.hill-layer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -2;
    pointer-events: none;
}

/* Front hill (::before) */
.hill-layer::before {
    background-color: var(--snow-white);
    opacity: 0.85;
    border-radius: 90% 10% 0 0 / 100% 100% 0 0;
    transform: translateY(80%);
    z-index: 5;
}

/* Back hill (::after) */
.hill-layer::after {
    background-color: var(--snow-white);
    border-radius: 40% 60% 70% 30% / 100% 100% 0 0;
    transform: translateY(90%);
    z-index: 10;
}
```

#### 3. Scenery Layer (Cabin, Trees)
```css
.scenery-layer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40vh;
    z-index: 6;
    pointer-events: none;
}
```

### Main Content Container
```css
.full-height-container {
    min-height: 100vh;
    position: relative;
    z-index: 20;
}

.main-content-card {
    background-color: transparent;
}
```

---

## UI Components

### 1. Frosted Glass Panel

Used for the main input section:
```css
.frosted-glass {
    background-color: rgba(255, 255, 255, 0.35) !important;
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.5);
}
```

### 2. Button System

#### Base Button Style
```css
.unified-btn {
    font-family: 'Boogaloo', cursive;
    font-size: 0.95rem;
    padding: 14px 18px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    color: white;
    text-shadow: 0 1px 2px rgba(0,0,0,0.2);
    box-shadow:
        inset 0 1px 2px rgba(255,255,255,0.25),
        inset 0 -2px 4px rgba(0,0,0,0.15),
        0 3px 6px rgba(0,0,0,0.2);
}

/* Hover State */
.unified-btn:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
}

/* Active State */
.unified-btn:active {
    transform: translateY(1px);
    filter: brightness(0.95);
}
```

#### Button Variants

**Red Button:**
```css
.unified-btn.btn-red {
    background: linear-gradient(180deg, #dc3545 0%, #c82333 50%, #b71c1c 100%);
}
```

**Green Button:**
```css
.unified-btn.btn-green {
    background: linear-gradient(180deg, #28a745 0%, #218838 50%, #1e7e34 100%);
}
```

**Gray Button:**
```css
.unified-btn.btn-gray {
    background: linear-gradient(180deg, #6c757d 0%, #5a6268 50%, #4e555b 100%);
}
```

### 3. Postcard Theme Selector Buttons

```css
.postcard-btn {
    font-family: 'Boogaloo', cursive;
    padding: 14px 18px;
    border-radius: 8px;
    min-width: 140px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(180deg, #dc3545 0%, #c82333 50%, #b71c1c 100%);
}

.postcard-btn.active {
    background: linear-gradient(180deg, #ff6b6b 0%, #ee5a5a 50%, #dc3545 100%);
    box-shadow: 0 0 0 3px rgba(220,53,69,0.3);
}
```

### 4. Clear Button (Textarea)

```css
.clear-btn {
    position: absolute;
    top: 8px;
    right: 8px;
    height: 28px;
    padding: 0 12px;
    background: rgba(185, 28, 28, 0.15);
    border-radius: 14px;
    font-size: 0.75rem;
    color: #b91c1c;
}

.clear-btn:hover {
    background: rgba(185, 28, 28, 0.3);
}
```

### 5. Share Button

```css
#share-btn {
    font-size: 1.4rem;
    padding: 1rem 2rem;
    min-width: 260px;
    border-radius: 6px;
    background: linear-gradient(180deg, #dc4444 0%, #b71c1c 50%, #dc4444 100%);
    box-shadow:
        inset 0 2px 3px rgba(255,255,255,0.35),
        inset 0 -2px 4px rgba(0,0,0,0.2),
        0 3px 6px rgba(0,0,0,0.25);
}
```

---

## Decorative Elements

### Snowman & Gifts

Positioned in lower-left corner:

```css
.snowman-container {
    position: fixed;
    bottom: 2%;
    left: 8%;
    z-index: 15;
    display: flex;
    align-items: flex-end;
    gap: 40px;
    transform: scale(0.85);
    transform-origin: bottom left;
}
```

**Snowman Structure:**
- `.snowman-base-ball` - Large bottom sphere
- `.snowman-mid-ball` - Middle sphere with buttons
- `.snowman-head-ball` - Top sphere with face
- `.snowman-hat` - Top hat with red band
- `.snowman-scarf` - Red scarf with tail
- `.snowman-nose` - Orange carrot nose

**Gift Boxes:**
- `.gift-large-red` - Red box with green ribbon
- `.gift-tall-blue` - Blue box with gold ribbon
- `.gift-medium-green` - Green box with red ribbon

### Log Cabin

```css
.log-cabin {
    position: absolute;
    bottom: 25%;
    right: 8%;
    width: 130px;
    height: 90px;
    z-index: 7;
}
```

**Cabin Components:**
- `.cabin-walls` - Wood log texture walls
- `.cabin-roof` - Triangular roof
- `.cabin-window` - Glowing window with animation
- `.cabin-door` - Wooden door with doorknob
- `.cabin-chimney` - Stone chimney with smoke
- `.woodpile` - Stacked logs

### Pine Trees

Positioned throughout scenery layer with varying sizes and z-index values.

---

## Animations

### Window Glow Animation
```css
@keyframes windowGlow {
    0%, 100% {
        box-shadow: 0 0 20px rgba(254, 243, 199, 0.8);
    }
    50% {
        box-shadow: 0 0 30px rgba(254, 243, 199, 1);
    }
}

.cabin-window {
    animation: windowGlow 3s ease-in-out infinite;
}
```

### Chimney Smoke Animation
```css
@keyframes smokeRise {
    0% { transform: translateY(0) scale(1); opacity: 0.6; }
    100% { transform: translateY(-30px) scale(1.5); opacity: 0; }
}
```

---

## Responsive Design

### Breakpoints

**Medium (768px+):**
```css
@media (min-width: 768px) {
    .md\:pt-12 { padding-top: 3rem; }
    .md\:px-8 { padding-left: 2rem; padding-right: 2rem; }
    .md\:text-6xl { font-size: 3.75rem; }
}
```

**Small (640px+):**
```css
@media (min-width: 640px) {
    .sm\:space-x-4 > * + * { margin-left: 1rem; }
}
```

---

## Z-Index Layers

| Layer | Z-Index | Purpose |
|-------|---------|---------|
| Background hills | -2, 5, 10 | Snow hill layers |
| Scenery | 6, 7 | Cabin, trees |
| Snowman/Gifts | 15 | Decorative elements |
| Main content | 20 | Form, buttons, cards |
| Modals | 50 | Share modal overlay |

---

## Color Palette Summary

| Name | Hex | Usage |
|------|-----|-------|
| Sky Blue | `#C1E1F5` | Background gradient |
| Deep Sky | `#63B3ED` | Background gradient top |
| Snow White | `#F9FAFB` | Hills, backgrounds |
| Primary Red | `#B91C1C` | Buttons, accents |
| Secondary Green | `#065F46` | Buttons, text |
| Gold Yellow | `#FCD34D` | Ribbons, accents |

---

## Browser Support

The design uses modern CSS features:
- CSS Custom Properties (variables)
- `backdrop-filter` (frosted glass effect)
- `clip-path` (shapes)
- CSS Grid and Flexbox
- CSS Transforms and Transitions

**Note:** `backdrop-filter` has limited support in some browsers and may require vendor prefixes.
