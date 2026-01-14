# Holiday Greeting Generator - Postcard Scene Assets Documentation

## Overview

This document describes the CSS-based artwork assets for the three postcard scene themes. All scenes are created entirely with CSS using gradients, shapes, pseudo-elements, and positioning - no images are used.

---

## Scene Architecture

Each scene follows a layered structure within the `.postcard-scene` container:

```
┌─────────────────────────────────────────┐
│              .scene-sky                 │  ← Background (sky/wall)
├─────────────────────────────────────────┤
│           .scene-background             │  ← Distant elements (hills, windows)
├─────────────────────────────────────────┤
│            .scene-midground             │  ← Ground/floor, main structures
├─────────────────────────────────────────┤
│           .scene-foreground             │  ← Characters, front objects
└─────────────────────────────────────────┘
```

**File References:**
- `scene-snowy-cabin.css`
- `scene-santas-workshop.css`
- `scene-winter-wonderland.css`

---

## Scene 1: Snowy Cabin

**Theme:** Cozy, peaceful winter night
**Mood:** Warm, tranquil, nostalgic

### Sky Layer
```css
.scene-snowy-cabin .scene-sky {
    background: linear-gradient(180deg,
        #0a1628 0%,      /* Deep navy at top */
        #152238 30%,
        #1e3a5f 60%,
        #2a4a6b 100%     /* Lighter blue at horizon */
    );
}
```

### Background Elements

| Element | Description | CSS Technique |
|---------|-------------|---------------|
| `.bg-hill-1` | Far left rolling hill | Elliptical border-radius, gradient fill |
| `.bg-hill-2` | Far right rolling hill | Elliptical border-radius, gradient fill |
| `.bg-tree` (1-4) | Distant pine trees | Border triangles with ::before/::after |

**Background Hill Styling:**
```css
.scene-snowy-cabin .bg-hill-1 {
    background: linear-gradient(180deg, #3d5c6e 0%, #2d4a5a 100%);
    border-radius: 50% 60% 0 0 / 100% 100% 0 0;  /* Asymmetric curve */
}
```

### Midground Elements

**Snow Ground:**
```css
.scene-snowy-cabin .scene-midground::before {
    background: linear-gradient(180deg,
        #c8d8e8 0%,      /* Slightly blue-tinted snow */
        #d8e8f0 30%,
        #e0ecf4 100%     /* Bright white snow */
    );
    border-radius: 40% 50% 0 0 / 20% 25% 0 0;
    box-shadow: inset 0 15px 40px rgba(100, 140, 180, 0.3);  /* Snow shadow */
}
```

### Main Structure: Log Cabin

| Component | Size | Key Styling |
|-----------|------|-------------|
| `.cabin` | 240px × 170px | Container, centered |
| `.cabin-walls` | 100% × 62% | Log texture via repeating-linear-gradient |
| `.cabin-roof` | 116% × 65px | Triangular clip-path |
| `.cabin-window` | 50px × 45px | Glowing radial gradient |
| `.cabin-door` | 40px × 65px | Dark wood gradient |
| `.chimney` | 26px × 55px | Behind roof (z-index: -1) |
| `.smoke` | 24px × 55px | Stacked radial gradients |

**Log Texture Effect:**
```css
.scene-snowy-cabin .cabin-walls {
    background:
        /* Horizontal log lines */
        repeating-linear-gradient(0deg,
            transparent, transparent 13px,
            rgba(0,0,0,0.3) 13px, rgba(0,0,0,0.4) 14px,
            rgba(255,255,255,0.1) 15px, transparent 16px
        ),
        /* Wood color gradient */
        linear-gradient(180deg, #A0724D 0%, #8B5A2B 20%, #6d4422 50%, #5D3A1A 80%, #4a2e14 100%);
}
```

**Glowing Window Effect:**
```css
.scene-snowy-cabin .cabin-window {
    background: radial-gradient(ellipse at center,
        #FEF9C3 0%, #FEF3C7 40%, #FDE68A 70%, #FCD34D 100%
    );
    box-shadow:
        0 0 25px rgba(254, 243, 199, 0.8),   /* Outer glow */
        0 0 50px rgba(254, 243, 199, 0.4),   /* Extended glow */
        inset 0 0 12px rgba(255,255,255,0.5); /* Inner brightness */
}
```

### Accessory Elements

| Element | Description |
|---------|-------------|
| `.sleigh` | Red sleigh with wooden runner |
| `.pine-tree-md` | Medium pine trees (45px × 75px) |
| `.pine-tree-sm` | Small pine trees (30px × 50px) |

**Tree Positions:**
- `.tree-1`: left 8%, flanking cabin
- `.tree-2`: left 18%, scaled 0.85
- `.tree-3`: right 8%, flanking cabin
- `.tree-4`: right 18%, scaled 0.9

---

## Scene 2: Santa's Workshop

**Theme:** Magical toy workshop interior
**Mood:** Whimsical, bustling, cheerful

### Sky Layer (Interior Wall)
```css
.scene-santas-workshop .scene-sky {
    background: linear-gradient(180deg,
        #e8d4b8 0%,     /* Warm tan wall */
        #dcc8a8 50%,
        #d4c0a0 100%
    );
}
```

### Background Elements

#### String Lights
Colorful lights across the top of the scene using box-shadow technique:
```css
.scene-santas-workshop .string-lights::after {
    width: 10px;
    height: 12px;
    background: radial-gradient(ellipse, #ff6666 0%, #cc0000 100%);
    box-shadow:
        28px 3px 0 0 #66ff66,    /* Green */
        56px -2px 0 0 #ffff66,   /* Yellow */
        84px 2px 0 0 #6666ff,    /* Blue */
        112px -1px 0 0 #ff66ff,  /* Magenta */
        /* ... continues for full width */
}
```

#### Arched Windows (2)
Night sky visible through arched windows with falling snow:
```css
.scene-santas-workshop .window-1 {
    background: linear-gradient(180deg, #1a1a4e 0%, #2a2a6e 50%, #3a3a8e 100%);
    border: 5px solid #5a4030;
    border-radius: 28px 28px 0 0;  /* Arched top */
}
```

**Snow Effect (static particles via box-shadow):**
```css
.scene-santas-workshop .window-1::before {
    width: 4px;
    height: 4px;
    background: #fff;
    border-radius: 50%;
    box-shadow:
        15px 15px 0 #fff,
        -5px 30px 0 #fff,
        /* ... multiple positions */
}
```

### Midground Elements

#### Wooden Floor
Multi-layered gradient creating realistic wood planks:
```css
.scene-santas-workshop .scene-midground::before {
    background:
        /* Horizontal plank lines */
        linear-gradient(0deg, ...),
        /* Staggered vertical joints */
        linear-gradient(90deg, ...),
        /* Wood grain color variation */
        linear-gradient(90deg, #8B5A2B 0%, #9a6b3a 8%, ...),
        /* Base color */
        linear-gradient(180deg, #8B5A2B 0%, #6d4422 100%);
}
```

#### Bookshelves (2)
Wooden shelves with presents on each level:

| Bookshelf | Position | Size |
|-----------|----------|------|
| `.bookshelf-1` | Left 25% | 70px × 40% height |
| `.bookshelf-2` | Right 25% | 70px × 40% height |

**Shelf Dividers (3 per bookshelf):**
```css
.scene-santas-workshop .bookshelf-1::before {
    top: 25%;
    background: #4a2d1b;
    box-shadow: 0 48px 0 #4a2d1b, 0 96px 0 #4a2d1b;  /* 3 shelves */
}
```

#### Christmas Tree
Centered between bookshelves:

| Component | Description |
|-----------|-------------|
| `.xmas-tree` | Container (90px × 150px) |
| `::before` | Green triangle (border technique) |
| `::after` | Brown trunk |
| `.tree-star` | Gold star using clip-path polygon |
| `.tree-ornament-1` to `-10` | Colored ball ornaments |

**Star Shape:**
```css
.scene-santas-workshop .tree-star {
    background: #ffd700;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%,
                       50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}
```

### Foreground Characters

#### Santa Claus
Position: Bottom left (8%), Size: 140px × 200px

| Body Part | Technique |
|-----------|-----------|
| `.santa-body` | Rounded rectangle with red gradient |
| `.santa-buckle` | Gold rectangle |
| `.santa-head` | Circle with skin tone |
| `.santa-beard` | Large white rounded shape |
| `.santa-hat` | Red triangle with white trim |
| `.santa-teddy` | Small teddy bear (holding) |

#### Elf 1 (Green Outfit)
Position: Right 32%, Size: 70px × 100px

| Component | Color |
|-----------|-------|
| `.elf-1-body` | Green (#2e8b57) |
| `.elf-1-hat` | Red (#c41e3a) |
| `.elf-1-head` | Skin tone (#ffdbac) |

**Pointed Ears:**
```css
.scene-santas-workshop .elf-1-ear-left {
    border-radius: 50% 50% 20% 50%;  /* Pointed ear shape */
    transform: rotate(-20deg);
}
```

#### Elf 2 (Girl Elf - Red Outfit with Blonde Hair)
Position: Right 8%, Size: 70px × 100px

| Component | Color |
|-----------|-------|
| `.elf-2-body` | Red (#c41e3a) |
| `.elf-2-hat` | Green (#228b22) |
| `.elf-2-hair` | Blonde (#f4d03f) |
| `.elf-2-bangs` | Blonde (#f4d03f) |

**Blonde Hair Styling:**
```css
.scene-santas-workshop .elf-2-hair {
    width: 36px;
    height: 28px;
    background: #f4d03f;
    border-radius: 50% 50% 40% 40%;
    z-index: 7;  /* Behind head */
}

/* Side strands hanging down */
.scene-santas-workshop .elf-2-hair::before,
.scene-santas-workshop .elf-2-hair::after {
    width: 12px;
    height: 20px;
    background: #f4d03f;
    border-radius: 0 0 50% 50%;
}

/* Bangs - below hat, above head */
.scene-santas-workshop .elf-2-bangs {
    width: 26px;
    height: 6px;
    background: #f4d03f;
    border-radius: 0 0 40% 40%;
    z-index: 8;
}
```

### Props

#### Gift Bows (Rounded Style)
All gifts now use rounded balloon-style bows:
```css
.shelf1-present-1::after {
    width: 8px;
    height: 8px;
    background: #c41e3a;
    border-radius: 50%;
    box-shadow:
        -8px 2px 0 0 #c41e3a,  /* Left loop */
        8px 2px 0 0 #c41e3a;   /* Right loop */
}
```

#### Conveyor Belt
```css
.scene-santas-workshop .conveyor-belt {
    bottom: 8%;
    right: -10%;
    width: 75%;
    height: 45px;
}
```

#### Shelf Presents
Each shelf has one wrapped present with ribbon and bow:

| Present | Box Color | Ribbon Color |
|---------|-----------|--------------|
| Shelf 1 Top | Gold (#ffd700) | Red |
| Shelf 1 Mid | Pink (#ff69b4) | Royal Blue |
| Shelf 1 Bot | Purple (#9932cc) | Sea Green |
| Shelf 2 Top | Cyan (#00ced1) | Tomato |
| Shelf 2 Mid | Green (#2e8b57) | Gold |
| Shelf 2 Bot | Blue (#4169e1) | Hot Pink |

---

## Scene 3: Winter Wonderland

**Theme:** Outdoor winter fun
**Mood:** Playful, bright, adventurous
**Status:** Fully implemented

### Sky Layer
```css
.scene-winter-wonderland .scene-sky {
    background: linear-gradient(180deg,
        #87CEEB 0%,     /* Light sky blue */
        #B0E0E6 40%,    /* Powder blue */
        #E0F4FF 100%    /* Near white at horizon */
    );
}
```

### Midground Elements

| Element | Position | Description |
|---------|----------|-------------|
| `.pine-tree-tall` | left 8%, bottom 12% | Large pine tree behind gifts |
| `.igloo` | right 20%, bottom 32% | Ice block igloo |
| `.tree-3`, `.tree-4` | right side | Small pine trees |

### Foreground Characters

#### Ice Skating Polar Bear
Position: left 38%, bottom 12%

| Component | Styling |
|-----------|---------|
| `.skating-penguin .body` | White with inner shadows for visibility |
| `.skating-penguin .head` | Round with inner shadows |
| `.skating-penguin .flipper` | Arms with inner shadows |
| `.skate` | Red ice skates |

**Inner Shadow for Visibility Against Snow:**
```css
.scene-winter-wonderland .skating-penguin .body {
    background: radial-gradient(ellipse at 45% 35%, #ffffff 0%, #f8f8f8 30%, #f0f0f0 60%, #e5e5e5 100%);
    box-shadow:
        inset -4px -4px 12px rgba(0,0,0,0.15),
        inset 4px 4px 12px rgba(0,0,0,0.08),
        2px 3px 8px rgba(0,0,0,0.1);
}
```

#### Penguin Family
| Penguin | Position |
|---------|----------|
| `.penguin-1` (Mom) | right 18%, bottom 14% |
| `.baby-penguin-1` | right 10%, bottom 12% |

#### Penguin on Sled
Position: left 22%, bottom 45% (on hill)

### Props

#### Snowball Pile (10 snowballs in 4-3-2-1 pyramid)
Position: right 15%, bottom 4%

```css
.scene-winter-wonderland .snowball-pile .snowball {
    width: 12px;
    height: 12px;
    background: radial-gradient(circle at 35% 35%, #ffffff 0%, #f5f5f5 40%, #e0e5e8 100%);
    border-radius: 50%;
    box-shadow: inset -2px -2px 5px rgba(0,0,0,0.18);
}

/* Positions: Bottom row (4), Second row (3), Third row (2), Top (1) */
.sb1 { bottom: 0; left: 0; }
.sb2 { bottom: 0; left: 13px; }
/* ... continues for all 10 snowballs */
```

#### Gift Boxes
Position: bottom left corner
- `.gift-1` (Red): left 5%, bottom 3%
- `.gift-2` (Blue): left 13%, bottom 2%

#### Frozen Pond
Position: center, bottom 8%
- Elliptical ice surface with blue gradient
- Subtle crack lines for realism

---

## CSS Techniques Reference

### Creating Shapes

**Triangle (Tree/Hat):**
```css
.element {
    width: 0;
    height: 0;
    border-left: 45px solid transparent;
    border-right: 45px solid transparent;
    border-bottom: 135px solid #228B22;
}
```

**Circle:**
```css
.element {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
```

**Arch:**
```css
.element {
    border-radius: 28px 28px 0 0;
}
```

### Creating Textures

**Wood Grain:**
```css
background:
    repeating-linear-gradient(...),  /* Grain lines */
    linear-gradient(...);            /* Base color */
```

**Snow:**
```css
background: radial-gradient(circle at 30% 30%,
    #ffffff 0%,
    #f8fafc 30%,
    #e2e8f0 70%,
    #cbd5e1 100%
);
```

### Creating Depth

**Multiple Box Shadows:**
```css
box-shadow:
    0 4px 8px rgba(0,0,0,0.4),           /* Drop shadow */
    inset 0 -8px 16px rgba(0,0,0,0.4),   /* Inner bottom shadow */
    inset 4px 0 8px rgba(255,255,255,0.1); /* Inner highlight */
```

**3D Button/Object Effect:**
```css
border: 1px solid;
border-color: #light #dark #darker #medium;  /* 4-side border technique */
```

### Creating Glow

```css
box-shadow:
    0 0 25px rgba(254, 243, 199, 0.8),  /* Close glow */
    0 0 50px rgba(254, 243, 199, 0.4);  /* Extended glow */
```

---

## Color Palettes

### Snowy Cabin
| Purpose | Colors |
|---------|--------|
| Night Sky | #0a1628 → #2a4a6b |
| Snow | #c8d8e8 → #e0ecf4 |
| Cabin Wood | #A0724D → #4a2e14 |
| Roof | #6d4c0e → #2a1504 |
| Window Glow | #FEF9C3 → #FCD34D |
| Pine Trees | #2D5A3D |

### Santa's Workshop
| Purpose | Colors |
|---------|--------|
| Wall | #e8d4b8 → #d4c0a0 |
| Floor Wood | #8B5A2B → #6d4422 |
| Bookshelf | #6d4422 → #4a2d1b |
| Santa Red | #c41e3a |
| Elf Green | #2e8b57, #228b22 |
| Skin Tone | #ffdbac |
| Gold | #ffd700 |

### Winter Wonderland
| Purpose | Colors |
|---------|--------|
| Day Sky | #87CEEB → #E0F4FF |
| Snow | #FFFFFF → #F0F7FA |
| Accent Red | #ef4444, #dc2626 |
| Accent Green | #22c55e, #16a34a |
| Accent Blue | #3b82f6, #2563eb |

---

## Z-Index Layering

### Snowy Cabin
| Layer | Z-Index | Elements |
|-------|---------|----------|
| Back | -1 | Chimney |
| Ground | 1-2 | Hills, trees |
| Cabin | 3 | Main structure |
| Front | 4 | Sleigh |

### Santa's Workshop
| Layer | Z-Index | Elements |
|-------|---------|----------|
| Background | 1-2 | Windows, bookshelves |
| Decorations | 3 | Tree, ornaments, string lights |
| Characters | 8-9 | Elves |
| Front | 10-12 | Conveyor belt, Santa |
