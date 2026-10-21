import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'offerings', label: 'Offerings' },
  { id: 'menu', label: 'Menu' },
  { id: 'catering', label: 'Catering' },
  { id: 'host', label: 'Host with Us' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ onOpenOrderOnline }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'offerings', 'menu', 'catering', 'host', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -75;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 120);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-kaka-charcoal/95 backdrop-blur-md shadow-2xl border-b border-kaka-gold/50 py-2.5'
          : 'bg-black/75 backdrop-blur-md shadow-xl border-b border-kaka-gold/30 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo with Handlebar Moustache Always Visible */}
        <div
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3.5 cursor-pointer group select-none"
        >
          <div className="relative w-[50px] h-[50px] sm:w-[58px] sm:h-[58px] rounded-full bg-[#FFFDF7] p-1.5 border-2 border-[#FAB818] flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(250,184,24,0.4)] group-hover:scale-105 transition-transform shrink-0">
            <img
              src="/assets/logo.png"
              alt="Kaka Cafe Royal Handlebar Moustache Logo"
              className="w-full h-full object-contain filter drop-shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-black text-xl sm:text-2xl tracking-wider text-white group-hover:text-kaka-ochre transition-colors flex items-center gap-1.5 leading-tight">
              KAKA CAFE
              <span className="w-2.5 h-2.5 rounded-full bg-sattvic-green" title="100% Pure Veg" />
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-widest text-[#FAB818] uppercase font-sans font-bold">
              Pure Veg - Jain - Vegan
            </span>
          </div>
        </div>

        {/* Clean Center Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-sans font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'text-kaka-ochre bg-white/10 shadow-sm border border-kaka-gold/30 font-bold'
                    : 'text-white/90 hover:text-kaka-ochre hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Single Elegant "ORDER ONLINE" Button (Triggers Order Online Modal) */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenOrderOnline}
            className="py-2.5 px-5 sm:px-6 rounded-xl bg-gradient-to-r from-kaka-ochre via-[#F5B418] to-kaka-gold text-kaka-charcoal font-sans font-extrabold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 border border-kaka-gold"
          >
            Order Online
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl bg-black/50 text-kaka-ochre hover:bg-black/70 transition-colors border border-kaka-gold/40"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-kaka-charcoal/98 backdrop-blur-xl border-b-2 border-kaka-gold px-4 py-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-3 rounded-xl font-sans text-sm font-bold transition-all ${
                    activeSection === link.id
                      ? 'bg-kaka-ochre text-kaka-charcoal font-extrabold shadow-sm'
                      : 'text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 border-t border-kaka-gold/20 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenOrderOnline();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-kaka-ochre via-[#FFD050] to-kaka-gold text-kaka-charcoal font-sans font-bold text-sm text-center shadow-md active:scale-95 transition-transform"
                >
                  Order Online (Zomato • Swiggy • WhatsApp)
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
