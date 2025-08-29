# Muhammad Sameer - Professional Link in Bio

A beautifully designed, mobile-first "link in bio" landing page for Muhammad Sameer, freelance software developer. Built with React, Vite, Tailwind CSS, Framer Motion, and EmailJS.

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

### 2. Replace Profile Information

Edit the `PROFILE_DATA` object in `src/App.tsx`:

```javascript
const PROFILE_DATA = {
  name: "Muhammad Sameer", // Already updated
  title: "Freelance Software Developer", 
  company: "Your Company", // Update this
  companyUrl: "https://yourcompany.com",
  headline: "Your elevator pitch here",
  portfolioUrl: "https://your-portfolio-url.com", // Replace PASTE_YOUR_PORTFOLIO_URL
  profileImage: "path/to/your/profile-image.jpg",
  animeAvatar: "path/to/your/anime-avatar.jpg"
};
```

### 3. Update Social Links

Modify the `SOCIAL_LINKS` array in `src/App.tsx`:

```javascript
const SOCIAL_LINKS = [
  {
    name: "GitHub",
    label: "Code & Projects", 
    icon: Github,
    url: "https://github.com/yourusername", // Update this
    color: "hover:bg-gray-50"
  },
  // ... update all URLs
];
```

## New Features

### Form Data Persistence
The contact form automatically saves your progress to localStorage. If you navigate to the privacy policy and return, your form data will be preserved.

### Privacy Policy
A dedicated privacy policy page is accessible from the contact form and footer. Navigation preserves form state.

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

## Customization

### Colors
The design uses an emerald/green color system:
- Primary: `emerald-500` (#10b981)
- Secondary: `green-500` (#22c55e)
- Accent: `teal-500` (#14b8a6)
- Gradients: Multiple emerald-to-green combinations

To change colors, replace the color classes throughout the component.

### Animation & Motion
- All animations respect `prefers-reduced-motion`
- Framer Motion provides smooth page transitions
- Floating background elements for visual interest
- Hover effects with scale, lift, and glow changes

### Typography
- Uses system font stack for optimal performance
- Responsive typography scales from mobile to desktop
- Proper heading hierarchy for accessibility
- Gradient text effects for headings

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

## Deployment

This page works perfectly with:
- Netlify (recommended for forms)
- Vercel
- GitHub Pages
- Any static hosting service

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