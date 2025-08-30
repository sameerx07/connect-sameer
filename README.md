# Muhammad Sameer - Professional Link in Bio

A beautifully designed, mobile-first "link in bio" landing page, freelance software developer. Built with React, Vite, Tailwind CSS, Framer Motion, and EmailJS.

## Features

- 🎨 Modern emerald gradient theme with animated backgrounds
- 📱 Mobile-first responsive design
- ♿ Full accessibility support with ARIA labels and keyboard navigation
- 🚀 Fast loading with optimized images and performance
- 💫 Smooth animations with Framer Motion and floating elements
- 📧 Contact form with EmailJS integration, file upload, and GDPR compliance
- 🔗 Social media integration
- 🖼️ Modal profile picture viewer
- 🎯 SEO optimized with semantic HTML
- 💾 Form data persistence (survives page navigation)
- 📄 Privacy policy page with smooth navigation
- ✨ Floating background animations and micro-interactions

## Quick Setup

### 1. EmailJS Configuration

First, set up EmailJS for the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Project type
   - `{{message}}` - Project details
   - `{{to_name}}` - Your name (Muhammad Sameer)

4. Update the EmailJS configuration in `src/App.tsx`:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',    // Replace with your service ID
  'YOUR_TEMPLATE_ID',   // Replace with your template ID
  templateParams,
  'YOUR_PUBLIC_KEY'     // Replace with your public key
);
```



### Enhanced Animations
- Floating sparkle elements in the background
- Smooth page transitions with Framer Motion
- Hover effects with scale and lift animations
- Rotating anime avatar decoration

### Technology Showcase
Colored technology icons with emoji representations and hover effects.

## Asset Requirements

### Profile Images
- **Profile Picture**: 400×400px (circular crop), high quality
- **Anime Avatar**: 200×200px for decorative background element

### Recommended Image Formats
- `.jpg` for photographs (profile pictures)
- `.webp` for better compression and quality
- Ensure images are optimized for web (under 200KB each)

## SEO & Meta Tags

Add to your `index.html`:

```html
<meta name="description" content="Muhammad Sameer - Freelance Software Developer specializing in React, Node.js, TypeScript, WordPress, and Flutter development">
<meta property="og:title" content="Muhammad Sameer - Freelance Software Developer">
<meta property="og:description" content="Your professional bio">
<meta property="og:image" content="https://your-domain.com/og-image.jpg">
<meta property="og:type" content="profile">
<meta name="twitter:card" content="summary_large_image">
```

### OG Image Specifications
- Size: 1200×630px
- Format: JPG or PNG
- Include your photo, name, and key skills
- Keep text readable at small sizes

## Performance Optimization

- Images use `loading="lazy"` except above-the-fold content
- Optimized bundle with Framer Motion tree-shaking
- CSS is optimized and purged by Tailwind
- Uses modern CSS features for better performance
- Form data persistence reduces re-entry friction

## Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements  
- Keyboard navigation support
- Focus indicators for all interactive elements
- Screen reader friendly
- Color contrast ratios meet WCAG AA standards
- Reduced motion support for accessibility

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```


For Instagram bio, use a URL shortener like bit.ly or your custom domain.

## Dependencies

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animation library
- **EmailJS** - Email service integration
- **Lucide React** - Icon library

## License

MIT License - feel free to customize and use for your personal projects.

# Muhammad Sameer - Professional Link in Bio
👉 [Live Website](https://links.sameerdev.online)
