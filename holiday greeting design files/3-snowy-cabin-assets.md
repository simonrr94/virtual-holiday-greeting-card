# Snowy Cabin Scene - Current Assets

## Overview

| Metric | Value |
|--------|-------|
| Total CSS Lines | ~375 |
| HTML Elements | ~25 divs |
| Absolute Positions | 28 |
| Pseudo-elements (::before/::after) | 15 |
| Z-index Layers | 1-5 |

---

## Scene Structure

```
scene-snowy-cabin
├── scene-sky (night gradient)
├── scene-background
│   ├── bg-hill-1
│   ├── bg-hill-2
│   ├── bg-tree bg-tree-1
│   ├── bg-tree bg-tree-2
│   ├── bg-tree bg-tree-3
│   └── bg-tree bg-tree-4
├── scene-midground
│   ├── pine-tree-md tree-1
│   ├── pine-tree-sm tree-2
│   ├── pine-tree-md tree-3
│   ├── pine-tree-sm tree-4
│   └── cabin
│       ├── smoke
│       ├── chimney
│       ├── cabin-roof
│       ├── cabin-walls
│       ├── cabin-window
│       ├── cabin-door
│       └── sleigh
└── scene-foreground (empty)
```

---

## Detailed Asset Inventory

### 1. Sky
| Element | CSS Class | Description |
|---------|-----------|-------------|
| Night Sky | `.scene-sky` | Dark blue gradient |

**Gradient**: #0a1628 (top) → #152238 → #1e3a5f → #2a4a6b (bottom)

---

### 2. Background Hills
| Element | CSS Class | Position | Size |
|---------|-----------|----------|------|
| Hill 1 (left) | `.bg-hill-1` | bottom: 45%, left: -20% | 70% × 25% |
| Hill 2 (right) | `.bg-hill-2` | bottom: 42%, right: -15% | 60% × 22% |

**Technique**: Large divs with `border-radius: 50% 60% 0 0 / 100% 100% 0 0` for rolling hill shape

**Colors**: 
- Hill 1: #3d5c6e → #2d4a5a
- Hill 2: #4a6878 → #3a5868

---

### 3. Background Trees (×4)
| Element | CSS Class | Position | Scale |
|---------|-----------|----------|-------|
| Tree 1 | `.bg-tree.bg-tree-1` | left: 8%, bottom: 62% | 1.0 |
| Tree 2 | `.bg-tree.bg-tree-2` | left: 18%, bottom: 65% | 0.8 |
| Tree 3 | `.bg-tree.bg-tree-3` | right: 25%, bottom: 58% | 1.0 |
| Tree 4 | `.bg-tree.bg-tree-4` | right: 12%, bottom: 55% | 0.9 |

**Structure** (per tree):
- Container: `.bg-tree` (20px × 35px)
- Tree body: `::before` (triangle via borders, #1a3d2a)
- Trunk: `::after` (4px × 8px rectangle, #2d261f)

**Efficiency Note**: Base class `.bg-tree` defines structure, position classes only set location and scale.

---

### 4. Snow Ground (Midground)
| Element | CSS Class | Description |
|---------|-----------|-------------|
| Snow | `.scene-midground::before` | Covers bottom 55% |

**Technique**: 
- Curved top via `border-radius: 40% 50% 0 0 / 20% 25% 0 0`
- Snow gradient: #c8d8e8 → #d8e8f0 → #e0ecf4
- Inner shadow for depth: `box-shadow: inset 0 15px 40px rgba(100, 140, 180, 0.3)`

---

### 5. Foreground Trees (×4)
| Element | CSS Class | Position |
|---------|-----------|----------|
| Tree 1 | `.pine-tree-md.tree-1` | left: 5%, bottom: 5% |
| Tree 2 | `.pine-tree-sm.tree-2` | left: 15%, bottom: 8% |
| Tree 3 | `.pine-tree-md.tree-3` | right: 8%, bottom: 5% |
| Tree 4 | `.pine-tree-sm.tree-4` | right: 18%, bottom: 8% |

**Sizes**:
- `.pine-tree-md`: 45px × 65px
- `.pine-tree-sm`: 30px × 45px

**Structure** (per tree):
- Container: Positioning wrapper
- Tree layers: `::before` (green triangle)
- Trunk: `::after` (brown rectangle)
- Snow caps: Part of tree styling

---

### 6. Cabin (7 elements)
| Element | CSS Class | Size | Position |
|---------|-----------|------|----------|
| Container | `.cabin` | 240px × 170px | center, bottom: 10% |
| Walls | `.cabin-walls` | Main structure | Log cabin texture |
| Roof | `.cabin-roof` | Triangle + overhang | Snow on top |
| Window | `.cabin-window` | Small square | With warm glow |
| Door | `.cabin-door` | Rectangle | With frame |
| Chimney | `.chimney` | On roof | Stone texture |
| Smoke | `.smoke` | Above chimney | Animated puffs |

#### Cabin Walls
- Base color: Brown log gradient
- Texture: Horizontal log lines via box-shadow or borders
- Size: Covers main cabin body

#### Cabin Roof
- Shape: Triangle using CSS borders
- Snow layer: White `::before` on top
- Overhang: Extends past walls

#### Cabin Window
- Frame: Dark brown border
- Glass: `::before` with warm yellow glow
- Cross panes: `::after` for window dividers

#### Cabin Door
- Base: Dark wood color
- Handle: `::before` small circle
- Frame: Darker border

#### Chimney
- Position: On right side of roof
- Stone texture: Gradient or pattern
- Snow cap: White top

#### Smoke Animation
- Technique: Multiple `::before`/`::after` puffs
- Animation: `@keyframes` for rising + fading
- Color: White/gray, translucent

---

### 7. Sleigh
| Element | CSS Class | Description |
|---------|-----------|-------------|
| Sleigh | `.sleigh` | Red with gold accents |
| Runners | `::before` or `::after` | Curved metal runners |

**Position**: Near cabin, on snow
**Details**: Curved body, possibly gifts visible

---

## Color Palette

### Sky Colors
| Name | Hex | Usage |
|------|-----|-------|
| Deep Night | #0a1628 | Sky top |
| Night Blue | #152238 | Sky upper-mid |
| Dusk Blue | #1e3a5f | Sky lower-mid |
| Horizon Blue | #2a4a6b | Sky bottom |

### Ground Colors
| Name | Hex | Usage |
|------|-----|-------|
| Snow Light | #c8d8e8 | Snow top |
| Snow Mid | #d8e8f0 | Snow middle |
| Snow White | #e0ecf4 | Snow bottom |

### Hill Colors
| Name | Hex | Usage |
|------|-----|-------|
| Hill Dark | #3d5c6e | Distant hills |
| Hill Light | #4a6878 | Closer hills |

### Tree Colors
| Name | Hex | Usage |
|------|-----|-------|
| Pine Dark | #1a3d2a | Background trees |
| Pine Green | #2d5a3d | Foreground trees |
| Trunk Brown | #2d261f | Tree trunks |

### Cabin Colors
| Name | Hex | Usage |
|------|-----|-------|
| Log Brown | #8B4513 | Cabin walls |
| Roof Brown | #654321 | Roof base |
| Door Dark | #3d2817 | Door |
| Window Glow | #ffcc66 | Warm light |

---

## Z-Index Layers

| Z-Index | Elements |
|---------|----------|
| 1 | Background hills |
| 2 | Background trees |
| 3 | Cabin, midground trees |
| 4 | Cabin details (chimney, smoke) |
| 5 | Foreground elements |

---

## Animations

### Smoke Animation
```css
@keyframes smoke-rise {
    0% {
        opacity: 0;
        transform: translateY(0) scale(0.5);
    }
    50% {
        opacity: 0.8;
    }
    100% {
        opacity: 0;
        transform: translateY(-30px) scale(1.2);
    }
}
```

---

## Efficiency Techniques Used

### 1. Base Class + Modifiers
```css
.bg-tree { /* base styles */ }
.bg-tree-1 { left: 8%; bottom: 62%; }
.bg-tree-2 { left: 18%; bottom: 65%; transform: scale(0.8); }
```

### 2. Pseudo-Elements for Multi-Part Objects
```css
.bg-tree::before { /* tree triangle */ }
.bg-tree::after { /* trunk */ }
```

### 3. Box-Shadow for Texture
```css
.cabin-walls {
    box-shadow: 
        inset 0 10px 0 rgba(0,0,0,0.1),
        inset 0 20px 0 rgba(0,0,0,0.1),
        /* log lines */
}
```

### 4. Border-Radius for Organic Shapes
```css
.bg-hill-1 {
    border-radius: 50% 60% 0 0 / 100% 100% 0 0;
}
```

---

## Comparison to Santa's Workshop

| Aspect | Snowy Cabin | Santa's Workshop |
|--------|-------------|------------------|
| CSS Lines | 375 | 1,802 |
| HTML Elements | ~25 | ~85 |
| Characters | 0 | 4 (Santa, 2 elves, teddy) |
| Complexity | Static scene | Interactive characters |
| Reuse | High (base classes) | Low (individual classes) |
| Pseudo-elements | Maximized | Underutilized |

---

## Migration Notes for Next.js

### Reusable Components
1. `<Tree variant="pine" size="sm|md|lg" />` - Multiple instances
2. `<Hill position="left|right" />` - Background hills
3. `<Snow />` - Ground element

### Scene-Specific Components
4. `<Cabin />` - Main focal point with sub-components:
   - `<CabinWalls />`
   - `<CabinRoof />`
   - `<Window glow={true} />`
   - `<Door />`
   - `<Chimney />`
   - `<Smoke animated={true} />`
5. `<Sleigh />` - Near cabin

### Shared with Other Scenes
- `<Sky gradient={nightColors} />` - Reusable across scenes
- `<Tree />` - Different variants for different scenes
