# Sanguline Theme for OJS 3.4

A modern, elegant, and highly customizable theme for Open Journal Systems (OJS) 3.4.

> **Created by Thoha Firdaus with love for the academic community**

**Developed by [Sangu Ilmu](https://sanguilmu.com/)**

---

## Features

### 🎨 Visual Design
- **Modern Card-Based Layout** - Clean and elegant card styling for content blocks
- **Customizable Primary Color** - Choose your brand color from theme settings
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Typography Options** - Multiple font pairings to choose from
- **Subtle Animations** - Smooth hover effects and transitions

### 📰 Homepage
- **Announcement Slider** - Elegant slider with date badges, navigation controls, and auto-play
- **Current Issue Section** - Styled card with cover image hover effects
- **Homepage Image Options** - Display in hero section or as header background

### 📄 Article Pages
- **Entry Details Sidebar** - Article metadata displayed as right sidebar
- **Author Tooltips** - Hover to see author details
- **Keywords Below Abstract** - Better reading flow
- **No External Sidebar** - Clean article view without distracting sidebar

### 📱 Navigation
- **Responsive Header** - Adaptive navigation with mobile hamburger menu
- **Search Form in Navigation** - Integrated search with elegant styling
- **Sidebar Block Navigation** - Vertical menu with hover effects

### ⚙️ Theme Options
- **Primary Colour** - Customize the main theme color
- **Typography** - Choose from multiple font combinations
- **Homepage Image Width** - Control the hero image width (80%, 90%, 100%)
- **Header Logo Size** - Small, Medium, Large, or Extra Large
- **Journal Logo Size** - Right side header logo sizing
- **Homepage Image Placement** - Show in hero or move to header background
- **Usage Statistics** - Bar chart, line chart, or disabled

---

## Installation

1. Download the theme files
2. Extract to `plugins/themes/sanguline/` in your OJS installation
3. Navigate to **Settings > Website > Appearance**
4. Select **Sanguline** as your theme
5. Configure theme options as desired

---

## Requirements

- OJS 3.4.x
- PHP 8.0 or higher

---

## Theme Options

### Primary Colour
Choose the main accent color used throughout the theme for headers, links, buttons, and decorative elements.

### Typography
Select from these font combinations:
- **Noto Sans** - Clean and universal
- **Noto Serif** - Classic serif styling
- **Lato** - Modern sans-serif
- **Lora** - Elegant serif
- **Lora/Open Sans** - Serif headings with sans-serif body

### Homepage Image Width
Control how wide the homepage hero image displays:
- 80% - Boxed layout with margins
- 90% - Slightly boxed
- 100% - Full width

### Header Logo Size
Adjust the main header logo height:
- Small (60px)
- Medium (80px)
- Large (100px)
- Extra Large (120px)

### Move Homepage Image to Header
When enabled, the homepage image moves to the header background and is hidden from the hero section.

---

## Customization

### Colors
The theme uses LESS variables for easy customization. Main color variables are defined in `styles/variables.less`.

### CSS/LESS Structure
```
styles/
├── index.less          # Main entry point
├── variables.less      # Color and spacing variables
├── body.less          # Page structure
├── head.less          # Header and navigation
├── main.less          # Main content area
├── sidebar.less       # Sidebar blocks
├── footer.less        # Footer styling
├── components/        # Reusable components
├── objects/           # Article, issue objects
└── pages/             # Page-specific styles
```

---

## Credits

- **Theme Development**: [Sangu Ilmu](https://sanguilmu.com/)
- **Based on**: OJS Default Theme
- **Icons**: Font Awesome

---

## License

This theme is distributed under the GNU General Public License v3.0.

---

## Support

For support and customization requests, please contact:
- Website: [https://sanguilmu.com/](https://sanguilmu.com/)

---

© 2025 Sangu Ilmu. All rights reserved.
