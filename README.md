# Om Sai Trade Concern - Website

A modern, responsive website for Om Sai Trade Concern, an ISO 9001:2000 certified electronics and electrical products company based in Nepal.

## 📁 Project Structure

```
omsai-trade-newwebsite/
│
├── index.html              # Main homepage (standard)
├── home.html              # Modern responsive homepage
│
├── about-us.html          # Company information
├── products.html          # Product catalog
├── services.html          # Services offered
├── clients.html           # Client information
├── careers.html           # Career opportunities
├── contact-us.html        # Contact information
├── enquiry.html           # Enquiry form
├── news-events.html      # News and events
├── customer-voice.html    # Customer testimonials
│
├── css/
│   └── sai.css           # Main stylesheet
│
├── images/               # All image assets
│
├── js-menu/              # JavaScript menu
│   ├── sai.js            # Menu configuration
│   └── mmenu.js          # Menu library
│
└── send.php              # PHP form handler for enquiry form
```

## 🚀 Getting Started

1. Upload all files to your web server (cPanel public_html directory)
2. Ensure PHP is enabled on your server
3. Configure recipient email in `send.php` (line 3: `$_to = 'info@omsai-trade.com';`)
4. Access `index.html` or `home.html` in your browser

## 🔧 Configuration

- **Menu**: Edit `js-menu/sai.js`
- **Forms**: Edit `send.php` to configure recipient email (line 3)
- **Styles**: Edit `css/sai.css`

## 📄 Main Pages

- **index.html** - Standard homepage
- **home.html** - Modern responsive homepage (recommended)
- **about-us.html** - Company info, vision, mission
- **products.html** - Product catalog
- **contact-us.html** - Contact information

## 🌐 Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge)

## 📧 Contact Form

The enquiry form uses **PHP mail()** function via `send.php`.
- ✅ No API keys needed
- ✅ Uses server's built-in mail configuration
- ✅ Simple and straightforward

**Configuration:** Edit `send.php` line 3 to set your recipient email:
```php
$_to = 'your-email@example.com';
```

**Note:** Some cPanel hosts may disable PHP mail(). If emails don't send, check with your hosting provider or see `FORM_OPTIONS.md` for alternatives.

---

**Copyright © 2024 Om Sai Trade Concern. All rights reserved.**
