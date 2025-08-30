# Muhammad Sameer - Professional Link in Bio

A beautifully designed, mobile-first "link in bio" landing page for Muhammad Sameer, freelance software developer.  
Built with **React, Vite, Tailwind CSS, Framer Motion, and EmailJS**.

---

## ✨ Features
- 🎨 Modern emerald gradient theme with animated backgrounds  
- 📱 Mobile-first responsive design  
- ♿ Accessibility support with ARIA labels & keyboard navigation  
- 🚀 Fast loading with optimized images  
- 💫 Smooth animations with Framer Motion  
- 📧 Contact form with EmailJS + GDPR compliance  
- 🔗 Social media integration  
- 🖼️ Modal profile picture viewer  
- 📄 Privacy policy page with smooth navigation  
- 💾 Form data persistence (saves progress in localStorage)  

---

## ⚡ Quick Setup

### 1. Install Dependencies
```bash
npm install
2. Configure EmailJS
Create an account at EmailJS

Set up a service, template, and get your public key

Create a .env file at the project root and add your credentials:

env
Copy code
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
3. Development
bash
Copy code
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
🎨 Customization
Update profile info in src/App.tsx (PROFILE_DATA object).

Replace social links in SOCIAL_LINKS array.

Customize colors & gradients via Tailwind CSS classes.

Update images (profile + avatar) in the assets folder.

🌐 Deployment
This app works seamlessly with:

Netlify (recommended for forms)

Vercel

GitHub Pages

Any static hosting service

For Instagram bio, you can use your custom domain or a short link.

📄 License
MIT License – feel free to customize & use for your personal projects.

🔗 Website
👉 https://links.sameerdev.online