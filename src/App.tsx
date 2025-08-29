import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  MessageCircle,
  ExternalLink,
  X,
  Upload,
  Check,
  AlertCircle,
  ChevronRight,
  Briefcase,
  Code,
  Smartphone,
  ArrowLeft,
  Shield,
  FileText,
  Zap,
  Sparkles
} from 'lucide-react';

// --- Carousel Images ---
const CAROUSEL_IMAGES = [
  "images/profile-1.jpg",
  "images/profile-2.jpg",
  "images/profile-3.jpg",
  "images/profile-4.jpg",
  "images/profile-5.jpg"
];

// --- Animation variants for the carousel ---
const carouselAnimations = [
  { initial: { x: '100%', opacity: 0 }, animate: { x: '0%', opacity: 1 }, exit: { x: '-100%', opacity: 0 }, transition: { type: "spring", stiffness: 300, damping: 30 } },
  { initial: { y: '100%', opacity: 0 }, animate: { y: '0%', opacity: 1 }, exit: { y: '-100%', opacity: 0 }, transition: { type: "spring", stiffness: 300, damping: 30 } },
  { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, transition: { duration: 0.7 } },
  { initial: { scale: 0.5, opacity: 0, rotate: -90 }, animate: { scale: 1, opacity: 1, rotate: 0 }, exit: { scale: 0.5, opacity: 0, rotate: 90 }, transition: { duration: 0.7 } },
  { initial: { clipPath: "circle(0% at 50% 50%)" }, animate: { clipPath: "circle(75% at 50% 50%)" }, exit: { clipPath: "circle(0% at 50% 50%)" }, transition: { duration: 0.8 } }
];

// Technology icons
const TECH_ICONS = [
  { name: 'React', icon: '⚛️' }, { name: 'Node.js', icon: '🟢' }, { name: 'TypeScript', icon: '🔷' },
  { name: 'WordPress', icon: '📝' }, { name: 'Flutter', icon: '📱' }, { name: 'Next.js', icon: '▲' },
  { name: 'Tailwind', icon: '🎨' }, { name: 'MongoDB', icon: '🍃' }
];

// Profile data
const PROFILE_DATA = {
  name: "Muhammad Sameer",
  title: "Freelance Software Developer",
  company: "ATEMZ AI",
  companyUrl: "https://atmez.ai",
  headline: "I build reliable web apps and delightful developer experiences.",
  portfolioUrl: "https://sameerdev.online",
  profileImage: "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face",
  animeAvatar: "https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
};

const SOCIAL_LINKS = [
  { name: "GitHub", label: "Code & Projects", icon: Github, url: "https://github.com/sameerx07" },
  { name: "LinkedIn", label: "Professional", icon: Linkedin, url: "https://linkedin.com/in/muhammad-sameer-9767921b7/" },
  { name: "Twitter", label: "Thoughts & Updates", icon: Twitter, url: "https://twitter.com/" },
  { name: "Instagram", label: "Behind the Scenes", icon: Instagram, url: "https://instagram.com/sameerx.07_" },
  { name: "Email", label: "Direct Contact", icon: Mail, url: "mailto:sameersam.s199@gmail.com" },
  { name: "WhatsApp", label: "Quick Chat", icon: MessageCircle, url: "https://wa.me/918978704174" }
];

const FORM_STORAGE_KEY = 'contact-form-data';

// --- Reusable Components ---

function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [-20, 20, -20], rotate: [0, 180, 360], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
        >
          <Sparkles className="w-4 h-4 text-emerald-300" />
        </motion.div>
      ))}
    </div>
  );
}

function ModalImageCarousel({ images, animations }: { images: string[]; animations: any[]; }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setIndex(prev => (prev + 1) % images.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [images.length]);

  const currentAnimation = animations[index % animations.length];

  return (
    <div className="relative w-48 h-48 mx-auto mb-4">
      <AnimatePresence initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt={PROFILE_DATA.name}
          className="absolute inset-0 w-full h-full rounded-full object-cover shadow-2xl gradient-border"
          variants={currentAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={currentAnimation.transition || { duration: 0.7 }}
        />
      </AnimatePresence>
    </div>
  );
}

function ProfileModal({ isOpen, onClose, carouselImages, name }: {
  isOpen: boolean; onClose: () => void; carouselImages: string[]; name: string;
}) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-3xl p-6 max-w-sm w-full"
          initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end mb-4">
            <button
              onClick={onClose}
              className="p-2 rounded-full transition-colors bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white"
              aria-label="Close modal"
            ><X className="w-6 h-6" /></button>
          </div>
          <div className="text-center">
            <ModalImageCarousel images={carouselImages} animations={carouselAnimations} />
            <h3 className="text-xl font-semibold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">{name}</h3>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Toast({ message, type, isVisible, onClose }: { message: string; type: 'success' | 'error'; isVisible: boolean; onClose: () => void; }) {
  useEffect(() => {
    if (isVisible) { const timer = setTimeout(onClose, 5000); return () => clearTimeout(timer); }
  }, [isVisible, onClose]);
  if (!isVisible) return null;
  return (
    <AnimatePresence>
      <motion.div className="fixed bottom-4 right-4 z-50" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }}>
        <div className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg ${type === 'success' ? 'bg-emerald-500' : 'bg-red-500'} text-white`}>
          {type === 'success' ? <Check className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          <span>{message}</span>
          <button onClick={onClose} className="ml-2 p-1 rounded-full bg-black/20 hover:bg-black/30"><X className="w-4 h-4" /></button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function SocialCard({ social, index }: { social: typeof SOCIAL_LINKS[0]; index: number }) {
  const Icon = social.icon;
  return (
    <motion.a
      href={social.url} target="_blank" rel="noopener noreferrer"
      className={`group flex items-center gap-3 p-4 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-2 relative`}
      style={{ background: 'linear-gradient(to right, #ee9ca7, #ffdde1)' }}
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
    >
      <Icon className="w-6 h-6 text-gray-800" />
      <div className="flex-1">
        <div className="font-medium text-gray-900">{social.name}</div>
        <div className="text-gray-700 text-xs">{social.label}</div>
      </div>
      <ChevronRight className="w-4 h-4 text-gray-600" />
    </motion.a>
  );
}

function ImageCarousel({ images, animations, onImageClick }: { images: string[]; animations: any[]; onImageClick: () => void; }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => { setIndex(prev => (prev + 1) % images.length); }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);
  const currentAnimation = animations[index % animations.length];
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto flex items-center justify-center">
      <button onClick={onImageClick} className="relative w-full h-full rounded-full hover:scale-105 group transition-transform" aria-label={`View ${PROFILE_DATA.name}'s profile picture`}>
        <AnimatePresence initial={false}>
          <motion.img
            key={index} src={images[index]} alt={PROFILE_DATA.name}
            className="absolute inset-0 w-full h-full rounded-full object-cover shadow-2xl gradient-border"
            variants={currentAnimation} initial="initial" animate="animate" exit="exit"
            transition={currentAnimation.transition || { duration: 0.7 }} loading="eager"
          />
        </AnimatePresence>
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100" />
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-lg z-10">
          <Code className="w-4 h-4 text-white" />
        </div>
      </button>
    </div>
  );
}

// --- RESTORED: PrivacyPolicy Component ---
function PrivacyPolicy({ onBack }: { onBack: () => void }) {
    return (
      <motion.div
        className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white mb-6 transition-colors px-4 py-2 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-emerald-600" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">Privacy Policy</h1>
            </div>
            <div className="prose prose-gray max-w-none space-y-6">
              <section>
                <h2 className="text-xl font-semibold">Data Collection</h2>
                <p>When you contact me, I collect your name, email, and project details solely to respond to your inquiry.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold">Data Usage</h2>
                <p>Your information is used exclusively for communication regarding potential collaborations.</p>
              </section>
              <section>
                <h2 className="text-xl font-semibold">Data Protection</h2>
                <p>I implement security measures to protect your information and do not share it with third parties.</p>
              </section>
              <div className="mt-8 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                <p className="text-sm text-emerald-800">
                  <strong>Last updated:</strong> August 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
  
// --- RESTORED: ContactForm Component ---
function ContactForm({ onShowPrivacy }: { onShowPrivacy: () => void }) {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', gdprConsent: false });
    const [file, setFile] = useState<File | null>(null);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error'; visible: boolean }>({ message: '', type: 'success', visible: false });
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    useEffect(() => {
      const savedData = localStorage.getItem(FORM_STORAGE_KEY);
      if (savedData) { try { setFormData(JSON.parse(savedData)); } catch (error) { console.error('Error loading form data:', error); } }
    }, []);
  
    useEffect(() => {
      localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(formData));
    }, [formData]);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        const templateParams = { from_name: formData.name, from_email: formData.email, subject: formData.subject, message: formData.message, to_name: 'Muhammad Sameer' };
        await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY');
        setToast({ message: 'Message sent successfully!', type: 'success', visible: true });
        setFormData({ name: '', email: '', subject: '', message: '', gdprConsent: false });
        setFile(null);
        localStorage.removeItem(FORM_STORAGE_KEY);
      } catch (error) {
        console.error('EmailJS error:', error);
        setToast({ message: 'Failed to send message. Please try again.', type: 'error', visible: true });
      } finally {
        setIsSubmitting(false);
      }
    };
  
    return (
      <section className="w-full max-w-2xl mx-auto px-4">
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-3xl border border-emerald-100 p-6 shadow-xl"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        >
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">Let's Work Together</h2>
            </div>
            <p className="text-gray-600 max-w-md mx-auto">Ready to bring your ideas to life? I specialize in creating modern web and mobile apps.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500" placeholder="Name *" />
              <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500" placeholder="Email *" />
            </div>
            <select id="subject" required value={formData.subject} onChange={(e) => setFormData(p => ({ ...p, subject: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500">
              <option value="">Select project type</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-app">Mobile App (Flutter)</option>
              <option value="wordpress">WordPress Development</option>
              <option value="other">Other</option>
            </select>
            <textarea id="message" required rows={4} value={formData.message} onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 resize-none" placeholder="Project Details..."></textarea>
            <div className="relative">
              <input type="file" id="file" accept=".pdf,.doc,.docx" onChange={(e) => setFile(e.target.files?.[0] || null)} className="hidden" />
              <label htmlFor="file" className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-xl hover:border-emerald-500 cursor-pointer">
                <Upload className="w-5 h-5 text-gray-400" />
                <span className="text-sm text-gray-600">{file ? file.name : 'Upload file (Optional)'}</span>
              </label>
            </div>
            <div className="flex items-start gap-3">
              <input type="checkbox" id="gdpr" required checked={formData.gdprConsent} onChange={(e) => setFormData(p => ({ ...p, gdprConsent: e.target.checked }))} className="mt-1 w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500" />
              <label htmlFor="gdpr" className="text-sm text-gray-600">I consent to the <button type="button" onClick={onShowPrivacy} className="text-emerald-600 hover:underline">privacy policy</button>.</label>
            </div>
            <motion.button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-semibold py-4 rounded-xl hover:from-violet-600 hover:to-fuchsia-600 transform transition-all disabled:opacity-50" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {isSubmitting ? 'Sending...' : 'Send Request'}
            </motion.button>
          </form>
        </motion.div>
        <Toast message={toast.message} type={toast.type} isVisible={toast.visible} onClose={() => setToast(p => ({ ...p, visible: false }))} />
      </section>
    );
}

function StatsCard({ value, label, suffix }: { value: number; label: string; suffix?: string }) {
  const [currentValue, setCurrentValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, { duration: 2, onUpdate: (latest) => setCurrentValue(Math.round(latest)) });
      return () => controls.stop();
    }
  }, [inView, value]);
  return (
    <motion.div ref={ref} className="stats-card" initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}>
      <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">{currentValue}{suffix}</h3>
      <p className="text-gray-500 text-sm mt-1">{label}</p>
    </motion.div>
  );
}

// --- Main App Component ---

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  if (showPrivacy) {
    return <PrivacyPolicy onBack={() => setShowPrivacy(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-x-hidden">
      <FloatingElements />
      <div className="absolute top-20 right-4 w-32 h-32 opacity-20 hidden md:block">
        <motion.img src={PROFILE_DATA.animeAvatar} alt="" className="w-full h-full object-cover rounded-full filter blur-sm" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
      </div>

      <div className="relative z-10">
        <header className="text-center pt-8 pb-12 px-4">
          <div className="mb-6">
            <ImageCarousel images={CAROUSEL_IMAGES} animations={carouselAnimations} onImageClick={() => setIsModalOpen(true)} />
          </div>

          <motion.h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent mb-2" style={{ backgroundImage: 'linear-gradient(to right, #0f0c29, #302b63)' }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>{PROFILE_DATA.name}</motion.h1>
          <motion.p className="text-black font-medium mb-1 md:text-base" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>Freelancer • React • Node • TypeScript • WordPress • Flutter</motion.p>
          <motion.p className="text-gray-500 text-sm mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <a href={PROFILE_DATA.companyUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:underline">{PROFILE_DATA.company}</a>
          </motion.p>
          <motion.p className="text-lg md:text-xl text-gray-800 font-medium max-w-md mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>{PROFILE_DATA.headline}</motion.p>
        </header>

        <main className="px-4 space-y-8 pb-8">
          <section className="max-w-md mx-auto">
            <motion.a href={PROFILE_DATA.portfolioUrl} target="_blank" rel="noopener noreferrer" className="group block bg-gradient-to-r from-teal-600 to-green-800 text-white p-6 rounded-3xl shadow-2xl hover:shadow-3xl transition-all" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.98 }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"><Briefcase className="w-6 h-6 text-white" /></div>
                  <div>
                    <div className="font-semibold text-lg">My Portfolio</div>
                    <div className="text-sm">Live Projects & Case Studies</div>
                  </div>
                </div>
                <ExternalLink className="w-6 h-6 text-white/80 group-hover:text-white" />
              </div>
            </motion.a>
          </section>

          <section className="max-w-4xl mx-auto">
            <motion.h2 className="text-xl font-bold text-center mb-6 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>Connect & Follow</motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SOCIAL_LINKS.map((social, index) => <SocialCard key={social.name} social={social} index={index} />)}
            </div>
          </section>

          <section className="max-w-2xl mx-auto text-center">
            <motion.h2 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Technologies I Work With</motion.h2>
            <div className="flex flex-wrap justify-center gap-3">
              {TECH_ICONS.map((tech, index) => (
                <motion.span key={tech.name} className="flex items-center gap-2 px-4 py-2 rounded-full font-medium text-gray-900 hover:shadow-lg transition-all hover:-translate-y-1" style={{ background: 'linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)' }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + index * 0.05 }} whileHover={{ scale: 1.05 }}>
                  <span className="text-lg">{tech.icon}</span>{tech.name}
                </motion.span>
              ))}
            </div>
          </section>

          <ContactForm onShowPrivacy={() => setShowPrivacy(true)} />

          <section className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <StatsCard value={20} label="Projects Completed" suffix="+" />
              <StatsCard value={98} label="Client Satisfaction" suffix="%" />
              <StatsCard value={2} label="Years Experience" suffix="yrs" />
              <StatsCard value={24} label="Response Time" suffix="h" />
            </div>
          </section>

          <section className="text-center max-w-md mx-auto">
            <motion.div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border border-emerald-100 shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
              <h2 className="text-lg font-semibold mb-3 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">Ready to Start Your Project?</h2>
              <p className="text-gray-600 text-sm mb-4">Let's discuss how I can help bring your ideas to life.</p>
              <motion.a href="mailto:sameersam.s199@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-ine-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-violet-600 hover:to-fuchsia-600 transition-all" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Mail className="w-4 h-4" /> Hire Me
              </motion.a>
            </motion.div>
          </section>
        </main>

        <footer className="text-center py-8 px-4 border-t border-emerald-200 bg-white/50 backdrop-blur-sm">
          <p className="text-gray-500 text-sm">© 2025 {PROFILE_DATA.name}. Built with React & Tailwind CSS.</p>
          <div className="mt-2">
            <button onClick={() => setShowPrivacy(true)} className="text-emerald-600 hover:text-emerald-700 text-sm underline">Privacy Policy</button>
          </div>
        </footer>
      </div>

      <ProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        carouselImages={CAROUSEL_IMAGES}
        name={PROFILE_DATA.name}
      />
    </div>
  );
}

export default App;