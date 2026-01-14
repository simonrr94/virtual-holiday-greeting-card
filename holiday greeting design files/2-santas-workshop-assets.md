# Santa's Workshop Scene - Current Assets

## Overview

| Metric | Value |
|--------|-------|
| Total CSS Lines | ~1,802 |
| HTML Elements | ~85 divs |
| Absolute Positions | 138 |
| Pseudo-elements (::before/::after) | 66 |
| Z-index Layers | 1-13 |

---

## Scene Structure

```
scene-santas-workshop
├── scene-sky (background gradient)
├── scene-background
│   ├── string-lights
│   ├── window-1 + window-1-panes
│   ├── window-2 + window-2-panes
│   ├── bookshelf-1
│   ├── bookshelf-2
│   ├── shelf1-present-1 through shelf1-present-6
│   ├── shelf2-present-1 through shelf2-present-6
│   ├── xmas-tree
│   ├── tree-star
│   └── tree-ornament-1 through tree-ornament-10
├── scene-midground (wood floor)
└── scene-foreground
    ├── santa (with all body parts)
    ├── elf-1 (with all body parts)
    ├── elf-2 (with all body parts)
    ├── conveyor-belt
    ├── conveyor-dots
    ├── conveyor-legs
    └── conv-present-1 through conv-present-4
```

---

## Detailed Asset Inventory

### 1. Sky/Background
| Element | CSS Class | Description |
|---------|-----------|-------------|
| Sky | `.scene-sky` | Warm beige gradient (#e8d4b8 → #d4c0a0) |

### 2. String Lights
| Element | CSS Class | Description |
|---------|-----------|-------------|
| Wire | `.string-lights::before` | Horizontal dark line |
| Bulbs | `.string-lights::after` | 16 colored bulbs via box-shadow |

**Bulb Colors**: Red, Green, Yellow, Blue, Magenta, Cyan (repeating)

### 3. Windows (×2)
| Element | CSS Class | Description |
|---------|-----------|-------------|
| Window Frame | `.window-1`, `.window-2` | Arched top, brown frame (#5a4030) |
| Night Sky | Window background | Dark blue gradient |
| Snow | `::before` | White dots via box-shadow (18 snowflakes) |
| Cross Panes | `.window-1-panes`, `.window-2-panes` | Vertical + horizontal dividers |

**Positions**: 
- Window 1: left: 8%
- Window 2: right: 8%

### 4. Bookshelves (×2)
| Element | CSS Class | Description |
|---------|-----------|-------------|
| Bookshelf Frame | `.bookshelf-1`, `.bookshelf-2` | Brown wood gradient with border |
| Shelf Dividers | `::before` with box-shadow | 3 horizontal shelves |

**Positions**:
- Bookshelf 1: left: 25%
- Bookshelf 2: right: 25%

### 5. Shelf Presents (×6 visible, 6 hidden)
| Element | CSS Class | Color | Ribbon Color |
|---------|-----------|-------|--------------|
| Shelf 1 Top | `.shelf1-present-1` | Gold (#ffd700) | Red |
| Shelf 1 Middle | `.shelf1-present-3` | Pink (#ff69b4) | Blue |
| Shelf 1 Bottom | `.shelf1-present-5` | Purple (#9932cc) | Green |
| Shelf 2 Top | `.shelf2-present-1` | Teal (#00ced1) | Orange |
| Shelf 2 Middle | `.shelf2-present-3` | Green (#2e8b57) | Gold |
| Shelf 2 Bottom | `.shelf2-present-5` | Blue (#4169e1) | Pink |

**Structure**: Box + `::before` (vertical ribbon) + `::after` (bow)

### 6. Christmas Tree
| Element | CSS Class | Description |
|---------|-----------|-------------|
| Tree Container | `.xmas-tree` | Positioning wrapper |
| Trunk | `::before` | Brown rectangle |
| Tree Body | Main element | Green triangle (border trick) |
| Star | `.tree-star` | Gold star (clip-path polygon) |
| Ornaments | `.tree-ornament-1` to `-10` | Colored circles |

**Ornament Colors**: Red, Yellow, Blue, Magenta, Cyan, Orange, Green

### 7. Wood Floor
| Element | CSS Class | Description |
|---------|-----------|-------------|
| Floor | `.scene-midground::before` | 25% height from bottom |
| Planks | Multiple linear-gradients | Horizontal lines, vertical joints |
| Wood Grain | Gradient variations | Color variation (#8B5A2B range) |

---

## Character Assets

### 8. Santa Claus (17 elements)
| Body Part | CSS Class | Size/Position |
|-----------|-----------|---------------|
| Container | `.santa` | 140px × 200px, bottom: 5%, left: 8% |
| Boots | `.santa-boots` | Black, rounded |
| Legs | `.santa-legs` | Red pants |
| Body | `.santa-body` | 90px × 85px red coat |
| Belt | `.santa-body::after` | Black, 14px tall |
| Buckle | `.santa-buckle` | Gold, 18px × 14px |
| Trim | `.santa-trim` | White fur at coat bottom |
| Left Arm | `.santa-arm-left` | Red with white cuff + glove |
| Right Arm | `.santa-arm-right` | Red with white cuff + glove |
| Head | `.santa-head` | 55px circle, skin tone |
| Beard | `.santa-beard` | White, rounded bottom |
| Smile | `.santa-beard::after` | Pink curved line |
| Mustache | `.santa-mustache` | White, curved |
| Nose | `.santa-nose` | Pink, 14px circle |
| Eyes | `.santa-face` | Two black dots |
| Cheeks | `.santa-cheeks` | Pink translucent circles |
| Hat | `.santa-hat` | Red triangle + white brim + pom |

### 9. Teddy Bear (7 elements)
| Body Part | CSS Class | Color |
|-----------|-----------|-------|
| Body | `.santa-teddy` | #CD853F (Peru) |
| Head | `::before` | 26px circle |
| Ears | `::after` | Two circles via box-shadow |
| Inner Ears | `.santa-teddy-face` | #DEB887 (BurlyWood) |
| Snout | `.santa-teddy-snout` | #F5DEB3 (Wheat) |
| Eyes + Nose | `::before`, `::after` | #2F2F2F (Dark) |
| Arms | `.santa-teddy-arms` | Two rounded rectangles |
| Legs | `.santa-teddy-legs` | Two rounded ovals |

### 10. Elf 1 - Green Outfit (10 elements)
| Body Part | CSS Class | Details |
|-----------|-----------|---------|
| Container | `.elf-1` | 70px × 100px, right: 32% |
| Body | `.elf-1-body` | Green gradient (#2e8b57 → #228b22) |
| Belt | `::after` | Black, 8px |
| Buckle | `.elf-1-buckle` | Gold, 10px × 8px |
| Left Arm | `.elf-1-arm-left` | Green + skin hand |
| Right Arm | `.elf-1-arm-right` | Green + skin hand |
| Head | `.elf-1-head` | 32px circle, skin tone |
| Left Ear | `.elf-1-ear-left` | Pointed, rotated |
| Right Ear | `.elf-1-ear-right` | Pointed, rotated |
| Eyes | `.elf-1-face` | Two black dots |
| Smile | `.elf-1-smile` | Pink curved line |
| Hat | `.elf-1-hat` | Red triangle + pom |

### 11. Elf 2 - Red Outfit (10 elements)
| Body Part | CSS Class | Details |
|-----------|-----------|---------|
| Container | `.elf-2` | 70px × 100px, right: 8% |
| Body | `.elf-2-body` | Red gradient (#c41e3a → #a01830) |
| Belt | `::after` | Black, 8px |
| Buckle | `.elf-2-buckle` | Gold, 10px × 8px |
| Left Arm | `.elf-2-arm-left` | Red + skin hand |
| Right Arm | `.elf-2-arm-right` | Red + skin hand |
| Head | `.elf-2-head` | 30px circle, skin tone |
| Left Ear | `.elf-2-ear-left` | Pointed, rotated |
| Right Ear | `.elf-2-ear-right` | Pointed, rotated |
| Eyes | `.elf-2-face` | Two black dots |
| Smile | `.elf-2-smile` | Pink curved line |
| Hat | `.elf-2-hat` | Green triangle + pom |

---

## Conveyor Belt System

### 12. Conveyor Belt
| Element | CSS Class | Description |
|---------|-----------|-------------|
| Belt Surface | `.conveyor-belt::before` | Red gradient, 20px tall |
| Belt Side | `.conveyor-belt::after` | Navy blue, 25px tall |
| Dots Container | `.conveyor-dots` | Positioning |
| Dots (×11) | `.conveyor-dot` | Orange circles, radial gradient |
| Legs Container | `.conveyor-legs` | Positioning |
| Legs (×2) | `.conveyor-leg` | Navy blue rectangles |

### 13. Conveyor Presents (×4)
| Element | CSS Class | Color | Ribbon |
|---------|-----------|-------|--------|
| Present 1 | `.conv-present-1` | Teal (#4ecdc4) | White |
| Present 2 | `.conv-present-2` | Yellow (#f9dc5c) | Gold |
| Present 3 | `.conv-present-3` | Coral (#ff8a80) | Teal |
| Present 4 | `.conv-present-4` | Mint (#a8e6cf) | Pink |

---

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Santa Red | #c41e3a | Santa suit, Elf 2 outfit, Elf 1 hat |
| Elf Green | #2e8b57 | Elf 1 outfit, Elf 2 hat |
| Gold | #ffd700 | Buckles, star, ribbons |
| Skin Tone | #ffdbac | Faces, hands |
| Teddy Brown | #CD853F | Teddy bear body |

### Secondary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Wood Brown | #8B5A2B | Floor |
| Belt Black | #1a1a1a | Belts, boots |
| Night Blue | #1a1a4e | Window sky |
| Frame Brown | #5a4030 | Window frames |

---

## Z-Index Layers

| Z-Index | Elements |
|---------|----------|
| 1 | Bookshelves, windows |
| 2 | Shelf presents, window panes |
| 3 | String lights |
| 7-8 | Elf/Santa body parts (back) |
| 9 | Elf/Santa body parts (front), hats |
| 10 | Conveyor belt, teddy body |
| 11 | Conveyor dots, teddy details |
| 12 | Santa container, conveyor presents |
| 13 | Teddy bowtie/knot (hidden) |

---

## Responsive Considerations

- Scene uses percentage-based positioning for major elements
- Character sizes are fixed in pixels (may need media queries for small screens)
- Conveyor belt extends past right edge (right: -10%)

---

## Migration Notes for Next.js

### High-Priority Components (Most Reusable)
1. `<Elf />` - Can render both elves with props
2. `<Present />` - Used 10+ times with different colors
3. `<Tree />` - Christmas tree with ornaments

### Medium-Priority Components
4. `<Santa />` - Complex but single instance
5. `<TeddyBear />` - Held by Santa
6. `<ConveyorBelt />` - With presents

### Low-Priority (Scene-Specific)
7. `<Bookshelf />` - With presents
8. `<Window />` - Arched with snow
9. `<StringLights />` - Decorative
