# Om Sai Trade Concern - Website

A modern, responsive website for Om Sai Trade Concern, an ISO 9001:2000 certified electronics and electrical products company.

## 🎨 Modernization Update (2026)

This website has been fully modernized with:

### ✅ What's New

- **Semantic HTML5** - Replaced all table-based layouts with `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`
- **Responsive Design** - Mobile-first CSS with Grid and Flexbox layouts
- **Modern CSS System** - Modular CSS architecture with CSS custom properties (variables)
- **Hero Sections** - Each page features a modern hero section with gradient overlays
- **Card-Based Design** - Services and products displayed in visually appealing cards
- **Modern Footer** - 4-column responsive footer with clean links
- **HTML5 Forms** - Modern form validation using `required` attributes
- **Accessibility** - ARIA labels, semantic structure, and focus states
- **Performance** - Lazy loading for images, reduced dependencies

### ❌ Removed Legacy Tech

- Table-based layouts
- `mmenu.js` / `sai.js` (Milonic menu)
- `MM_validateForm` JavaScript validation
- Image-sliced UI components (box corners, banners)
- Deprecated CSS classes

## 📁 Project Structure

```
omsai-trade-newwebsite/
│
├── index.html              # Homepage with hero section
├── about-us.html           # Company information
├── products.html           # Product catalog (card grid)
├── services.html           # Services (card grid)
├── clients.html            # Client information
├── careers.html            # Career opportunities
├── contact-us.html         # Contact information & form
├── enquiry.html            # Enquiry form
├── news-events.html        # News and events
├── customer-voice.html     # Customer testimonials
├── 404.shtml               # Error page
│
├── css/
│   ├── base.css            # Fonts, colors, typography, variables
│   ├── layout.css          # Grid, header, main layout, footer
│   ├── components.css      # Cards, buttons, forms, badges
│   ├── pages.css           # Page-specific styles
│   ├── modern-header.css   # Navigation header styles
│   └── sai.css             # Legacy styles (gradually being replaced)
│
├── images/
│   ├── hero/               # Hero section images
│   ├── services/           # Service card images
│   ├── products/           # Product card images
│   ├── icons/              # Icon assets
│   └── (existing images)   # Logo, certification, etc.
│
├── send.php                # PHP form handler (unchanged)
└── README.md               # This file
```

## 🚀 Getting Started

1. Upload all files to your web server
2. Ensure PHP is enabled for form submissions
3. Configure recipient email in `send.php`
4. Access `index.html` in your browser

## 🔧 CSS Architecture

The CSS is organized into modular files:

| File | Purpose |
|------|---------|
| `base.css` | CSS variables, reset, typography, links |
| `layout.css` | Grid system, containers, header, footer |
| `components.css` | Reusable UI components (cards, buttons, forms) |
| `pages.css` | Page-specific styles |
| `modern-header.css` | Navigation header with responsive behavior |

### CSS Variables

Key design tokens defined in `base.css`:

```css
--primary-color: #016BB9;
--container-max-width: 1200px;
--spacing-lg: 24px;
--radius-lg: 12px;
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px (2-column layout: sidebar + content)
- **Tablet**: 768px - 1024px (single column, sidebar below)
- **Mobile**: < 768px (stacked layout)

## 📝 Form Handling

Forms submit to `send.php` (unchanged from original):
- Uses HTML5 `required` attribute for validation
- Field names preserved: `Name`, `Email`, `Message`, etc.
- Success/error message placeholders included

## 🖼️ Adding Images

To add hero images or service/product images:

1. Add images to appropriate folders:
   - `images/hero/` - Page hero backgrounds
   - `images/services/` - Service card images
   - `images/products/` - Product card images

2. Update the inline styles or CSS to reference new images

## 📄 License

© 2026 Om Sai Trade Concern. All rights reserved.
