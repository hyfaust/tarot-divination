# 🔮 Tarot Divination

[English](README.md) | [简体中文](README_zh.md)

---

[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

> A bilingual (Chinese/English) tarot card divination website that runs entirely locally. No server required — just open `index.html` in your browser.

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Spreads](#spreads)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## Features

- **78 Tarot Cards** — Complete Rider-Waite-Smith deck with bilingual meanings (upright & reversed)
- **6 Spreads** — Single Card, Three Card, Celtic Cross, Horseshoe, Relationship, Decision Making
- **Language Toggle** — Seamless Chinese ↔ English switching for all UI and card data
- **Daily Card** — Draw a card each day with localStorage persistence
- **Card Meanings Browser** — Search and filter all 78 cards with detailed meanings
- **Mystical Theme** — Dark background with gold accents, starry animation, card flip effects
- **Responsive** — Works on desktop and mobile
- **Zero Dependencies** — Pure HTML + CSS + JavaScript, no build tools needed

## Quick Start

1. Open `index.html` in any modern browser.

2. Or use a local server (recommended for best experience):

   ```bash
   # Python
   python -m http.server 8080

   # Node.js
   npx serve .
   ```

3. Visit `http://localhost:8080`.

## Project Structure

```
tarot/
├── index.html          # Main page
├── css/
│   └── style.css       # Mystical dark gold theme
├── js/
│   ├── card-data.js    # 78 cards data (bilingual)
│   ├── spreads.js      # 6 spread definitions
│   ├── i18n.js         # UI translations
│   └── app.js          # Main application logic
├── README.md           # English documentation
└── README_zh.md        # Chinese documentation
```

## Spreads

| Spread | Cards | Use Case |
|--------|-------|----------|
| Single Card | 1 | Daily guidance, quick questions |
| Three Card | 3 | Past / Present / Future |
| Celtic Cross | 10 | Deep comprehensive analysis |
| Horseshoe | 7 | General life guidance |
| Relationship | 6 | Relationship dynamics |
| Decision | 5 | Weighing options |

## Browser Support

Chrome, Firefox, Safari, Edge (latest 2 versions).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the **GNU General Public License v2.0** — see the [GNU website](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) for details.
