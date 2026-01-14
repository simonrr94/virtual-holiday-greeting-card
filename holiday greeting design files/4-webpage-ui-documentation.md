# Holiday Greeting Planner - Comprehensive UI Documentation

## Overview

This document provides exhaustive documentation of all user interface elements outside of the scene artwork, with special attention to the realistic visual effects achieved through CSS techniques.

---

## Table of Contents

1. Page Structure
2. Global Styles & Variables
3. Typography
4. Countdown Ribbon (3D Fabric Effect)
5. Theme Selector Buttons
6. Message Input Area
7. Unified Button System (3D Effect)
8. Candy Cane Frame (3D Peppermint Effect)
9. String Lights System (Glow Effect)
10. Wooden Sign (Realistic Wood Texture)
11. Tinsel Ropes & Hardware (Metallic Effects)
12. Carved Text Effect (Engraved Wood)
13. Message Overlay
14. Share Modal
15. Snowflake Animation
16. JavaScript Functions

---

## 1. Page Structure

```
body (gradient background)
├── Snowflakes (animated, fixed position)
├── full-height-container
│   ├── header
│   │   └── countdown-ribbon-wrapper
│   │       └── countdown-ticker
│   ├── section (controls)
│   │   ├── postcard-selector (theme buttons)
│   │   ├── textarea-wrapper
│   │   │   ├── #custom-message
│   │   │   └── clear-btn
│   │   └── controls-row (action buttons)
│   ├── main (scene display)
│   │   └── frame-1, frame-2, frame-3
│   │       └── candy-cane-border-fixed
│   │           └── inner-canvas
│   │               ├── postcard-scene
│   │               └── message-overlay
│   └── footer
│       ├── wooden-sign-container
│       │   ├── tinsel-ropes
│       │   └── wooden-sign
│       └── share-btn
└── share-modal (hidden)
```

---

## 2. Global Styles & Variables

### CSS Custom Properties

```css
:root {
    --primary-red: #c41e3a;
    --primary-red-light: #dc3545;
    --secondary-green: #065f46;
    --secondary-green-light: #10b981;
    
    --btn-red-gradient: linear-gradient(180deg, var(--primary-red-light) 0%, var(--primary-red) 100%);
    --btn-green-gradient: linear-gradient(180deg, var(--secondary-green-light) 0%, var(--secondary-green) 100%);
    --btn-gray-gradient: linear-gradient(180deg, #F3F4F6 0%, #D1D5DB 100%);
    --btn-white-gradient: linear-gradient(180deg, #FFFFFF 0%, #F3F4F6 100%);
}
```

---

## 3. Typography

| Font | Usage | Source |
|------|-------|--------|
| **Limelight** | Display headings, message overlay, branding | Google Fonts |
| **Boogaloo** | Buttons, countdown text, theme titles | Google Fonts |
| **System UI** | Body text, form inputs | System |

```html
<link href="https://fonts.googleapis.com/css2?family=Limelight&family=Boogaloo&display=swap" rel="stylesheet">
```

---

## 4. Countdown Ribbon (3D Fabric Effect)

### Key Visual Techniques

#### Fabric Curvature
```css
.countdown-ticker {
    /* Radial gradient creates curved fabric appearance */
    background: radial-gradient(
        ellipse 80% 100% at 50% 50%, 
        #ef4444 0%,      /* Center - lighter (light hitting fabric) */
        #dc2626 40%,     /* Mid tone */
        #b91c1c 70%,     /* Darker toward edges (shadow) */
        #991b1b 100%     /* Edges - darkest */
    );
    
    /* 3D depth */
    box-shadow: 
        0 6px 12px rgba(0, 0, 0, 0.3),           /* Drop shadow */
        inset 0 2px 4px rgba(255, 255, 255, 0.15), /* Top highlight */
        inset 0 -2px 4px rgba(0, 0, 0, 0.2);      /* Bottom shadow */
}
```

#### Gold Embroidered Trim
```css
.countdown-ticker::before,
.countdown-ticker::after {
    background: linear-gradient(
        90deg, 
        transparent,                    /* Fade in from edge */
        rgba(255, 215, 0, 0.5) 20%,     /* Gold */
        rgba(255, 215, 0, 0.5) 80%,     /* Gold */
        transparent                     /* Fade out to edge */
    );
}
```

#### Ribbon Tail Notches
```css
.countdown-ribbon-wrapper::before {
    /* Notched ribbon tail shape using clip-path */
    clip-path: polygon(
        100% 0,      /* Top right */
        100% 100%,   /* Bottom right */
        0% 80%,      /* Bottom left notch */
        40% 50%,     /* Center notch point (the V) */
        0% 20%       /* Top left notch */
    );
    filter: drop-shadow(-2px 3px 3px rgba(0,0,0,0.3));
}
```

| Effect | Technique |
|--------|-----------|
| Fabric curvature | `radial-gradient` with ellipse shape |
| 3D depth | Multiple `box-shadow` (inset + drop) |
| Gold trim | `linear-gradient` with transparency fade |
| Ribbon tails | `clip-path: polygon()` |
| Fold shadows | Darker gradient + `filter: drop-shadow` |

---

## 5. Theme Selector Buttons

```css
.postcard-btn {
    background: linear-gradient(180deg, #ffffff 0%, #f3f4f6 100%);
    box-shadow: 
        0 2px 4px rgba(0,0,0,0.1),
        inset 0 1px 2px rgba(255,255,255,0.8);
}

.postcard-btn.active {
    border-color: var(--primary-red);
    background: linear-gradient(180deg, #fff5f5 0%, #fee2e2 100%);
    box-shadow: 0 0 0 3px rgba(196, 30, 58, 0.2);
}
```

---

## 6. Message Input Area

```css
#custom-message:focus {
    border-color: var(--secondary-green);
    box-shadow: 0 0 0 3px rgba(6, 95, 70, 0.1);
}
```

---

## 7. Unified Button System (3D Effect)

### The 3D Button Formula

```css
.unified-btn {
    /* Vertical gradient creates rounded surface */
    background: linear-gradient(180deg, 
        #28a745 0%,    /* Light top */
        #218838 50%,   /* Mid */
        #1e7e34 100%   /* Dark bottom */
    );
    
    /* Multi-layer shadows create 3D effect */
    box-shadow: 
        inset 0 1px 2px rgba(255,255,255,0.25),  /* Top highlight */
        inset 0 -2px 4px rgba(0,0,0,0.15),        /* Bottom edge */
        0 3px 6px rgba(0,0,0,0.2);                /* Drop shadow (lift) */
}

.unified-btn:hover {
    transform: translateY(-2px);  /* Lift up */
    box-shadow: /* Enhanced shadows - more lift */
        inset 0 1px 2px rgba(255,255,255,0.3),
        inset 0 -2px 4px rgba(0,0,0,0.1),
        0 5px 10px rgba(0,0,0,0.25);
    filter: brightness(1.08);
}

.unified-btn:active {
    transform: translateY(1px);  /* Push down */
    box-shadow:  /* Inverted - pressed into surface */
        inset 0 2px 4px rgba(0,0,0,0.2),
        0 1px 2px rgba(0,0,0,0.15);
    filter: brightness(0.95);
}
```

| Effect | Technique |
|--------|-----------|
| Rounded surface | Vertical gradient (light → dark) |
| Top highlight | `inset 0 1px 2px rgba(255,255,255,0.25)` |
| Bottom edge | `inset 0 -2px 4px rgba(0,0,0,0.15)` |
| Floating effect | External `box-shadow` |
| Press feedback | `transform: translateY()` + inverted shadows |

---

## 8. Candy Cane Frame (3D Peppermint Effect)

### Layered Background Technique

```css
.candy-cane-border-fixed { 
    background: 
        /* Layer 1: Glossy highlight */
        linear-gradient(180deg,
            rgba(255,255,255,0.15) 0%,
            rgba(255,255,255,0.05) 10%,
            transparent 20%
        ),
        /* Layer 2: Candy cane stripes with internal shading */
        repeating-linear-gradient(-45deg, 
            /* White stripe */
            #ffffff 0px, #fff8f8 8px, #fff5f5 10px, #ffffff 12px, #ffffff 20px, 
            /* Red stripe - gradient within for cylindrical effect */
            #dd2020 20px,
            #cc0000 22px,
            #bb0000 28px,   /* Darkest = center of cylinder */
            #cc0000 32px,
            #ee3030 38px,   /* Lighter = edge */
            #dd2020 40px
        );
    
    /* Cylindrical 3D effect */
    box-shadow: 
        0 15px 35px rgba(0, 0, 0, 0.35),      /* Drop shadow */
        0 5px 15px rgba(0, 0, 0, 0.25),
        inset 0 1px 2px rgba(255,255,255,0.3), /* Top highlight */
        inset 0 -4px 8px rgba(0, 0, 0, 0.15),  /* Bottom shadow */
        inset 4px 0 8px rgba(0, 0, 0, 0.08),   /* Left shadow */
        inset -4px 0 8px rgba(0, 0, 0, 0.08);  /* Right shadow */
    
    /* 3D beveled border - different shade per side */
    border: 3px solid;
    border-color: #ffdddd #cc0000 #990000 #ee4444;
}
```

| Effect | Technique |
|--------|-----------|
| Diagonal stripes | `repeating-linear-gradient(-45deg)` |
| Stripe roundness | Gradient within each red stripe (dark center, light edges) |
| Glossy surface | Overlay `::before` with white gradient |
| Cylindrical shape | Multi-directional inset shadows |
| 3D beveled border | Different `border-color` per side |

---

## 9. String Lights System (Glow Effect)

### Glass Bulb Effect

```css
.light-bulb {
    /* Asymmetric border-radius for bulb shape */
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    
    /* Glass depth */
    box-shadow: 
        inset 0 -3px 4px rgba(0,0,0,0.2),    /* Bottom shadow */
        inset 0 2px 3px rgba(255,255,255,0.5); /* Top highlight */
}

/* Colored glass with highlight */
.light-red { 
    background: radial-gradient(
        ellipse at 30% 25%,   /* Highlight offset from center */
        #ff6b6b 0%,          /* Highlight */
        #ff4444 40%,         /* Main color */
        #cc0000 100%         /* Dark edge */
    );
    color: rgba(255, 68, 68, 0.6);  /* For glow effect */
}
```

### Hover Glow Effect

```css
#share-btn:hover .light-bulb {
    box-shadow: 
        0 0 8px 2px currentColor,   /* Inner glow */
        0 0 12px 4px currentColor,  /* Outer glow */
        inset 0 -3px 4px rgba(0,0,0,0.2),
        inset 0 2px 3px rgba(255,255,255,0.5);
}
```

---

## 10. Wooden Sign (Realistic Wood Texture)

### Multi-Layer Wood Texture

```css
.wooden-sign {
    background: 
        /* Layer 1: Horizontal plank grooves */
        repeating-linear-gradient(0deg,
            transparent 0px, transparent 26px,
            rgba(101,67,33,0.4) 26px,    /* Dark line */
            rgba(60,40,20,0.6) 28px,     /* Deeper groove */
            rgba(139,90,43,0.2) 29px,    /* Light edge (light catching) */
            transparent 30px
        ),
        /* Layer 2: Diagonal wood grain */
        repeating-linear-gradient(178deg,
            transparent 0px, transparent 40px,
            rgba(160,120,70,0.15) 40px,
            rgba(160,120,70,0.15) 42px,
            transparent 42px, transparent 80px
        ),
        /* Layer 3: Base color with horizontal variation */
        linear-gradient(90deg, 
            #C4956A 0%, #D9B07A 10%, #E8C99B 25%, 
            #D4A574 40%, #C9956A 55%, #D9B07A 70%, 
            #E8C99B 85%, #D4A574 100%
        );
    
    /* Beveled edge */
    border: 3px solid;
    border-color: #8B6914 #6B4E0A #5D4E37 #7A5C1A;
    
    /* Natural hanging angle */
    transform: rotate(2deg);
}
```

### SVG Noise for Wood Grain

```css
.wooden-sign::before {
    background-image: 
        /* Fractal noise texture */
        url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"),
        /* Knot holes */
        radial-gradient(ellipse 8px 6px at 15% 40%, rgba(101,67,33,0.3) 0%, transparent 70%),
        radial-gradient(ellipse 6px 5px at 75% 65%, rgba(101,67,33,0.25) 0%, transparent 70%);
    
    opacity: 0.5;
    mix-blend-mode: multiply;
}
```

| Effect | Technique |
|--------|-----------|
| Plank grooves | `repeating-linear-gradient` with multi-color stops |
| Color variation | Horizontal gradient with many stops |
| Wood grain texture | SVG `feTurbulence` filter (fractal noise) |
| Knot holes | Small `radial-gradient` ellipses |
| Depth | Multi-directional inset shadows |
| Beveled edge | Different `border-color` per side |
| Natural tilt | `transform: rotate(2deg)` |

---

## 11. Tinsel Ropes & Hardware

### Tinsel Effect

```css
.tinsel-rope {
    /* Alternating metallic colors */
    background: linear-gradient(180deg, 
        #C0C0C0 0%, #2d5a2d 8%, #FFD700 16%,  /* Silver, Green, Gold */
        #C0C0C0 24%, #2d5a2d 32%, #FFD700 40%,
        /* ... repeating pattern */
    );
}

/* Metallic shine */
.tinsel-rope::before {
    background: linear-gradient(90deg, 
        rgba(255,255,255,0.4) 0%,    /* Left highlight */
        rgba(255,255,255,0.1) 50%,   /* Center */
        rgba(0,0,0,0.1) 100%         /* Right shadow */
    );
}

/* Sparkle effect */
.tinsel-rope::after {
    background: 
        radial-gradient(circle at 20% 20%, rgba(192,192,192,0.3) 1px, transparent 1px),
        radial-gradient(circle at 80% 40%, rgba(45,90,45,0.3) 1px, transparent 1px),
        radial-gradient(circle at 40% 60%, rgba(255,215,0,0.3) 1px, transparent 1px),
        radial-gradient(circle at 60% 80%, rgba(192,192,192,0.3) 1px, transparent 1px);
    background-size: 8px 8px;
}
```

### Metal Hardware (Brushed Metal)

```css
.rope-connector-top {
    background: linear-gradient(180deg, 
        #9a9a9a 0%, #888 15%, #666 50%, #555 85%, #444 100%
    );
    box-shadow: 
        0 3px 4px rgba(0,0,0,0.5),
        inset 0 2px 3px rgba(255,255,255,0.4),
        inset 0 -2px 3px rgba(0,0,0,0.3);
}

/* Screw head detail */
.rope-connector-top::before {
    background: radial-gradient(circle at 30% 30%, 
        #666 0%, #444 40%, #333 70%, #222 100%
    );
    box-shadow: 
        inset 1px 1px 2px rgba(255,255,255,0.3),
        inset -1px -1px 2px rgba(0,0,0,0.5);
}
```

---

## 12. Carved Text Effect (Engraved Wood)

### The Carved/Etched Text Formula

```css
.wooden-letters span {
    color: #2a1a0a;  /* Dark base - appears recessed */
    
    text-shadow: 
        /* Bottom-right highlight (light catching lower edge of carving) */
        1px 1px 0px rgba(255, 235, 205, 0.4),
        
        /* Top-left shadow (depth of cut) */
        -1px -1px 1px rgba(0, 0, 0, 0.5),
        
        /* Subtle blur for realism */
        0 0 2px rgba(0, 0, 0, 0.3),
        
        /* Additional depth layers */
        -0.5px -0.5px 0px rgba(0, 0, 0, 0.4),
        0.5px 0.5px 0px rgba(210, 180, 140, 0.3);
}
```

### Visual Explanation

```
Light source (top-left)
        ↓
   ┌─────────────────────┐
   │  ████████████████  │  ← Top edge: shadow (-1px -1px dark)
   │  █              █  │
   │  █   LETTER     █  │  ← Recessed area (dark base color)
   │  █              █  │
   │  ████████████████  │  ← Bottom edge: highlight (1px 1px light)
   └─────────────────────┘
```

| Shadow | Purpose |
|--------|---------|
| `1px 1px` light | Bottom-right highlight (light catching edge) |
| `-1px -1px` dark | Top-left shadow (depth of carving) |
| `0 0 2px` blur | Softens for realism |

---

## 13. Message Overlay

```css
.message-overlay { 
    position: absolute; 
    top: 4%; 
    left: 50%; 
    transform: translateX(-50%); 
    z-index: 30; 
    pointer-events: none;
}

.postcard-message {
    /* White outline for readability over any background */
    text-shadow: 
        1px 1px 0 #fff, -1px -1px 0 #fff,
        1px -1px 0 #fff, -1px 1px 0 #fff;
    background: rgba(255,255,255,0.75);
}
```

---

## 14. Share Modal

```css
#share-modal {
    position: fixed;
    inset: 0;
    z-index: 50;
    background-color: rgba(31, 41, 55, 0.75);
}

.modal-box-frame { 
    /* Uses candy-cane-border-fixed styles */
}
```

---

## 15. Snowflake Animation

```css
.snowflake { 
    position: fixed; 
    top: -10%;
    animation: snowflakes-shake 3s ease-in-out infinite;
}

.snowflake .inner { 
    animation: snowflakes-fall 10s linear infinite;
}

@keyframes snowflakes-fall { 
    0% { transform: translateY(0); } 
    100% { transform: translateY(110vh); }
}

@keyframes snowflakes-shake { 
    0%, 100% { transform: translateX(0); } 
    50% { transform: translateX(80px); }
}
```

---

## 16. JavaScript Functions

| Function | Purpose |
|----------|---------|
| `selectPostcard(frameId)` | Switch between scene themes |
| `generateMessage()` | Update message overlay |
| `shuffleMessage()` | Pick random preset message |
| `generateFromCustom()` | Apply custom message |
| `updateCountdown()` | Calculate time to Christmas |
| `openShareModal()` | Generate URL and show modal |
| `closeShareModal()` | Hide modal |
| `copyLink()` | Copy share URL to clipboard |
| `triggerConfetti()` | Christmas Day celebration |

---

## Summary: Visual Effect Techniques

### 3D Effects
| Element | Key Technique |
|---------|---------------|
| Buttons | Vertical gradient + inset shadows + transform |
| Candy Cane | Multi-layer shadows + directional border colors |
| Wooden Sign | Layered gradients + beveled border |
| Light Bulbs | Radial gradient + inset shadows |
| Metal Hardware | Vertical gradient + screw detail |

### Realistic Textures
| Element | Key Technique |
|---------|---------------|
| Wood Grain | SVG feTurbulence + gradient overlays |
| Fabric Ribbon | Radial gradient for curvature |
| Tinsel | Striped gradient + sparkle pattern |
| Glass Bulbs | Radial gradient with offset highlight |

### Text Effects
| Element | Key Technique |
|---------|---------------|
| Carved Text | Multi-layer text-shadow (light bottom, dark top) |
| Gold Text | Color + glow text-shadow |
| Outlined Text | 4-direction white text-shadow |

---

## Migration Notes for Next.js

### Components to Create
1. `<CountdownRibbon />`
2. `<ThemeSelector />`
3. `<MessageInput />`
4. `<ActionButtons />`
5. `<CandyCaneFrame />`
6. `<StringLights />`
7. `<WoodenSign />`
8. `<CarvedText text="" />`
9. `<ShareModal />`
10. `<Snowflakes count={12} />`

### Recommended Libraries
- **Framer Motion** - Animations
- **React Hot Toast** - Notifications
- **Headless UI** - Accessible modal
- **date-fns** - Countdown
- **canvas-confetti** - Celebration
