# Holiday Greeting Generator - Logic Documentation

## Overview

This document describes the JavaScript logic that powers the Holiday Greeting Generator, including how it responds to user input, manages themes, generates messages, and handles sharing functionality.

---

## Core State Management

### Global Variables

```javascript
let currentThemeId = 'frame-1';  // Tracks the currently active theme

const shareThemeMap = {
    'frame-1': { index: 1, name: 'Snowy Cabin' },
    'frame-2': { index: 2, name: 'Santas Workshop' },
    'frame-3': { index: 3, name: 'Winter Wonderland' }
};

let lastMessageIndex = {};  // Prevents consecutive duplicate messages
```

---

## Theme System

### Available Themes

| Frame ID | Index | Theme Name | Description |
|----------|-------|------------|-------------|
| `frame-1` | 1 | Snowy Cabin | Cozy, peaceful winter scene |
| `frame-2` | 2 | Santa's Workshop | Magical, whimsical holiday scene |
| `frame-3` | 3 | Winter Wonderland | Fun, playful snow scene |

### Theme Switching

**Function:** `openTab(event, tabId)`

**Trigger:** User clicks a theme selector button

**Process:**
1. Hides all theme frames (`.tab-frame`)
2. Hides all message overlays (`.message-overlay`)
3. Shows the selected frame and its message overlay
4. Updates `currentThemeId` global variable
5. Updates button active states (visual feedback)
6. Auto-loads a random message for the new theme

```javascript
function openTab(event, tabId) {
    // Hide all frames
    document.querySelectorAll('.tab-frame').forEach(f => f.classList.add('hidden'));
    document.querySelectorAll('.message-overlay').forEach(t => t.classList.add('hidden'));

    // Show selected frame
    document.getElementById(tabId).classList.remove('hidden');
    document.getElementById(tabId.replace('frame', 'text')).classList.remove('hidden');

    // Update state
    currentThemeId = tabId;

    // Update button visual states
    document.querySelectorAll('.postcard-btn').forEach(b => b.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // Load random message for this theme
    shuffleMessage();
}
```

---

## Message System

### Message Pools

Each theme has a curated pool of 8 pre-written messages that match the theme's mood:

```javascript
const messagePools = {
    'frame-1': [  // Snowy Cabin - Cozy, warm messages
        "Wishing you a season filled with cozy moments, warm drinks, and peaceful winter nights.",
        "May your holidays be as warm and inviting as a cabin in the woods.",
        // ... 6 more messages
    ],
    'frame-2': [  // Santa's Workshop - Magical, wonder-filled messages
        "May your holidays be filled with wonder, surprises, and a little bit of magic!",
        "Wishing you a season as magical as Christmas morning.",
        // ... 6 more messages
    ],
    'frame-3': [  // Winter Wonderland - Fun, playful messages
        "Hope your holidays are filled with snowball fights, belly laughs, and frosty adventures!",
        "Wishing you a winter full of fun, friends, and a little friendly mischief!",
        // ... 6 more messages
    ]
};
```

### Randomize Message

**Function:** `shuffleMessage()`

**Trigger:**
- User clicks "Randomize Message" button
- User switches themes (auto-triggered)

**Process:**
1. Gets the message pool for current theme
2. Randomly selects a message (avoiding the last selected message)
3. Sets the textarea value to the selected message
4. Calls `generateMessage()` to display it on the postcard

```javascript
function shuffleMessage() {
    const pool = messagePools[currentThemeId];
    if (!pool) return;

    let index;
    do {
        index = Math.floor(Math.random() * pool.length);
    } while (index === lastMessageIndex[currentThemeId] && pool.length > 1);

    lastMessageIndex[currentThemeId] = index;
    document.getElementById('custom-message').value = pool[index];
    generateMessage();
}
```

### Generate Custom Message

**Function:** `generateFromCustom()` and `generateMessage()`

**Trigger:** User clicks "Generate Custom Message" button

**Process:**
1. Reads the text from the custom message textarea
2. Finds the active frame's text overlay element
3. Wraps the message in a styled div and inserts it into the overlay
4. If message is empty, clears the overlay

```javascript
function generateMessage() {
    const message = document.getElementById('custom-message').value.trim();
    const activeFrame = document.querySelector('.tab-frame:not(.hidden)');
    const textOverlay = document.getElementById(activeFrame.id.replace('frame', 'text'));

    if (textOverlay) {
        if (message) {
            textOverlay.innerHTML = '<div class="postcard-message">' + message + '</div>';
        } else {
            textOverlay.innerHTML = '';
        }
    }
}
```

### Clear Message

**Function:** `clearMessage()`

**Trigger:** User clicks the "Clear" button in the textarea

**Process:**
1. Clears the textarea value
2. Clears the message overlay on the active postcard

```javascript
function clearMessage() {
    document.getElementById('custom-message').value = '';
    const activeFrame = document.querySelector('.tab-frame:not(.hidden)');
    const textOverlay = document.getElementById(activeFrame.id.replace('frame', 'text'));
    if (textOverlay) textOverlay.innerHTML = '';
}
```

---

## User Input Flow

### Input Elements

| Element | ID | Type | Max Length |
|---------|-----|------|------------|
| Message Textarea | `custom-message` | `<textarea>` | 80 characters |

### Input → Output Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        USER INPUT                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐       │
│  │ Type Custom  │    │  Randomize   │    │   Select     │       │
│  │   Message    │    │   Message    │    │   Theme      │       │
│  └──────┬───────┘    └──────┬───────┘    └──────┬───────┘       │
│         │                   │                   │                │
│         ▼                   ▼                   ▼                │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐       │
│  │   Generate   │    │ shuffleMsg() │    │  openTab()   │       │
│  │   Button     │    │              │    │              │       │
│  └──────┬───────┘    └──────┬───────┘    └──────┬───────┘       │
│         │                   │                   │                │
│         └─────────┬─────────┴─────────┬─────────┘                │
│                   │                   │                          │
│                   ▼                   ▼                          │
│            ┌──────────────┐    ┌──────────────┐                  │
│            │ generateMsg()│    │ Update Frame │                  │
│            └──────┬───────┘    │  Visibility  │                  │
│                   │            └──────────────┘                  │
│                   ▼                                              │
│            ┌──────────────┐                                      │
│            │ Update Text  │                                      │
│            │   Overlay    │                                      │
│            └──────────────┘                                      │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Christmas Countdown Timer

**Function:** `updateCountdown()`

**Trigger:** Runs every 1 second via `setInterval`

**Process:**
1. Calculates time remaining until December 25th
2. Displays countdown in format: `XXD XXH XXM XXS`
3. On Christmas Day: Displays "MERRY CHRISTMAS!" and triggers confetti

```javascript
function updateCountdown() {
    const now = new Date();
    const christmasDate = new Date(now.getFullYear(), 11, 25);  // Month is 0-indexed

    // Check if it's Christmas Day
    const isChristmasDay = now.getMonth() === 11 && now.getDate() === 25;

    // If past Christmas, target next year
    if (now > christmasEnd) christmasDate.setFullYear(now.getFullYear() + 1);

    const diff = christmasDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (isChristmasDay) {
        el.innerHTML = "🎄 MERRY CHRISTMAS! 🎄";
        startChristmasConfetti();  // Trigger celebration
    } else {
        el.innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
    }
}
```

---

## Christmas Day Confetti

**Function:** `startChristmasConfetti()`

**Trigger:** Automatically when countdown detects Christmas Day

**Process:**
1. Creates a full-screen confetti container
2. Generates confetti particles bursting from the countdown ribbon
3. Particles burst left and right with random colors
4. Animation runs for 3 seconds, then stops
5. Stops early if user scrolls

**Colors Used:**
- Christmas Red: `#c41e3a`
- Christmas Green: `#228b22`
- Gold: `#ffd700`
- Light Red: `#ff6b6b`
- Teal: `#4ecdc4`
- White: `#fff`

---

## Sharing System

### Share Modal

**Function:** `openShareModal()`

**Trigger:** User clicks "Share Your Greeting!" button

**Process:**
1. Builds a shareable URL with query parameters
2. Sets the URL in the share input field
3. Generates an email mailto link with subject and body
4. Shows the modal

**URL Parameters:**
| Parameter | Description | Example |
|-----------|-------------|---------|
| `t` | Theme index (1, 2, or 3) | `?t=2` |
| `m` | Custom message (URL encoded) | `?m=Happy%20Holidays!` |

```javascript
function openShareModal() {
    const themeData = shareThemeMap[currentThemeId];
    const message = document.getElementById('custom-message').value.trim();

    const url = new URL(window.location.href);
    url.searchParams.set('t', themeData.index);
    if (message) url.searchParams.set('m', message);

    const shareLink = url.toString();
    document.getElementById('share-link').value = shareLink;

    // Email share setup
    const subject = encodeURIComponent(`A Virtual Holiday Greeting: ${themeData.name}`);
    const body = encodeURIComponent(`Check out my festive holiday greeting!\n\n${shareLink}`);
    document.getElementById('email-share-btn').href = `mailto:?subject=${subject}&body=${body}`;

    document.getElementById('share-modal').classList.remove('hidden');
}
```

### Copy Link

**Function:** `copyLink()`

**Trigger:** User clicks "Copy Link" button in share modal

**Process:**
1. Selects the share link input text
2. Copies to clipboard using `document.execCommand('copy')`
3. Shows "Link copied successfully!" message for 3 seconds

### Close Modal

**Function:** `closeShareModal()`

**Trigger:**
- User clicks "Close" button
- User clicks outside the modal (on backdrop)

---

## Page Initialization

**Function:** `window.onload`

**Process:**
1. Starts the countdown timer
2. Sets up 1-second interval for countdown updates
3. Checks URL for incoming share parameters (`t` and `m`)
4. If share parameters exist, loads that theme and message
5. Otherwise, loads default theme (Snowy Cabin)
6. Sets up modal backdrop click-to-close behavior

```javascript
window.onload = () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);

    const params = new URLSearchParams(window.location.search);
    const incomingTheme = params.get('t');
    const incomingMsg = params.get('m');

    if (incomingTheme && shareThemeMap['frame-' + incomingTheme]) {
        if (incomingMsg) {
            document.getElementById('custom-message').value = incomingMsg;
        }
        openTab(null, 'frame-' + incomingTheme);
    } else {
        openTab(null, 'frame-1');  // Default theme
    }

    // Close modal on backdrop click
    document.getElementById('share-modal').addEventListener('click', e => {
        if (e.target.id === 'share-modal') closeShareModal();
    });
};
```

---

## DOM Element Reference

### Input Elements
| ID | Element | Purpose |
|----|---------|---------|
| `custom-message` | `<textarea>` | User's custom message input |

### Theme Frames
| ID | Element | Theme |
|----|---------|-------|
| `frame-1` | `<div>` | Snowy Cabin scene |
| `frame-2` | `<div>` | Santa's Workshop scene |
| `frame-3` | `<div>` | Winter Wonderland scene |

### Message Overlays
| ID | Element | Associated Frame |
|----|---------|------------------|
| `text-1` | `<div>` | frame-1 |
| `text-2` | `<div>` | frame-2 |
| `text-3` | `<div>` | frame-3 |

### Buttons
| ID | Element | Action |
|----|---------|--------|
| `btn-1` | `<button>` | Select Snowy Cabin |
| `btn-2` | `<button>` | Select Santa's Workshop |
| `btn-3` | `<button>` | Select Winter Wonderland |
| `share-btn` | `<button>` | Open share modal |

### Modal Elements
| ID | Element | Purpose |
|----|---------|---------|
| `share-modal` | `<div>` | Share modal container |
| `share-link` | `<input>` | Display shareable URL |
| `email-share-btn` | `<a>` | Email share button |
| `copy-message` | `<p>` | "Link copied" feedback |

### Countdown
| ID | Element | Purpose |
|----|---------|---------|
| `countdown` | `<div>` | Displays countdown timer |

---

## Event Handlers Summary

| Event | Element | Handler | Description |
|-------|---------|---------|-------------|
| `click` | Theme buttons | `openTab()` | Switch theme |
| `click` | Randomize button | `shuffleMessage()` | Random message |
| `click` | Generate button | `generateFromCustom()` | Display custom message |
| `click` | Clear button | `clearMessage()` | Clear message |
| `click` | Share button | `openShareModal()` | Open share modal |
| `click` | Copy button | `copyLink()` | Copy URL to clipboard |
| `click` | Close button | `closeShareModal()` | Close modal |
| `click` | Modal backdrop | `closeShareModal()` | Close modal |
| `load` | window | Anonymous | Initialize page |
| `interval` | 1000ms | `updateCountdown()` | Update countdown |

---

## Cross-Stitch Pattern System

The code includes a cross-stitch letter rendering system (not actively used in the main generator output but available for decorative text):

**Function:** `createStitchLetter(char, colorClass)`

**Character Support:** A-Z, 0-9, and special characters (!, ?, ., ,, ', -, &, ♥, ★)

**Pattern Format:** 5x7 grid where `1` = filled stitch, `0` = empty

```javascript
const stitchPatterns = {
    'A': [
        [0,1,1,1,0],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,1,1,1,1],
        [1,0,0,0,1],
        [1,0,0,0,1],
        [1,0,0,0,1]
    ],
    // ... more patterns
};
```
