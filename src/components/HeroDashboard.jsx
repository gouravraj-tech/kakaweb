import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, PartyPopper, Phone, Mail, Clock, ArrowRight, Sparkles } from 'lucide-react';

export default function HeroDashboard({ onOpenKakaGroup, onOpenOrderOnline }) {
  const [hoverBox1, setHoverBox1] = useState(false);
  const [hoverBox2, setHoverBox2] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between items-center text-white overflow-hidden pt-24 sm:pt-28 pb-6 px-4 sm:px-6 z-10"
    >
      {/* 1. Majestic Hawa Mahal / Rajasthani Palace Heritage Background (Fixing z-index to z-0) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/assets/hawa_mahal_heritage.jpg"
          alt="Majestic Hawa Mahal Palace Rajasthan Facade at Royal Dusk"
          className="w-full h-full object-cover object-center filter brightness-[0.6] contrast-[1.12] scale-100 transition-transform duration-1000"
        />
        {/* Cinematic rich dark gradient & vignette overlay for maximum contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/85" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80" />
      </div>

      {/* 2. Center Hero Section Content (z-10 on top of background) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center text-center my-auto py-4">

        {/* Welcoming Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-2"
        >
          <span className="inline-block text-xs sm:text-sm font-serif font-black uppercase tracking-[0.3em] text-[#FAB818] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] bg-black/60 px-4 py-1 rounded-full border border-kaka-gold/40">
            ✦ WELCOME TO ✦
          </span>
        </motion.div>

        {/* Main Title Heading with Deep Drop Shadow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-wide text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.95)]">
            Kaka Cafe
          </h1>
          <span className="mt-1 text-sm sm:text-base md:text-lg font-serif italic font-normal text-[#FAB818] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide">
            (A Venture of The Kaka Group)
          </span>
        </motion.div>

        {/* Subtitle with High Contrast */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-2 text-xs sm:text-base text-[#FDFBF7] font-semibold max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        >
          Authentic North Indian Food & Royal Rajasthani Cuisine in Yelahanka, Bangalore
        </motion.p>

        {/* Two Tile Boxes with Glassmorphism & High-Contrast Styling */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mt-7 max-w-4xl">
          {/* Tile 1: Kaka Cafe */}
          <motion.div
            onMouseEnter={() => setHoverBox1(true)}
            onMouseLeave={() => setHoverBox1(false)}
            onClick={() => scrollTo('offerings')}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className={`cursor-pointer rounded-3xl p-6 sm:p-7 border-2 transition-all duration-300 text-left relative overflow-hidden backdrop-blur-xl ${
              hoverBox1
                ? 'bg-black/85 border-[#FAB818] shadow-[0_15px_45px_rgba(250,184,24,0.35),0_0_20px_rgba(250,184,24,0.2)]'
                : 'bg-black/70 border-kaka-gold/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:border-[#FAB818]'
            }`}
          >
            {/* Corner filigree shimmer */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-kaka-ochre/25 via-transparent to-transparent pointer-events-none" />

            <div className="flex items-center gap-3.5 mb-2.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FAB818] to-[#C85A32] flex items-center justify-center text-white shadow-xl border border-kaka-gold shrink-0">
                <Utensils className="w-6 h-6 text-[#1A1412]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-black text-white tracking-wide flex items-center gap-2 drop-shadow">
                  Kaka Cafe
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" title="100% Pure Veg" />
                </h2>
                <p className="text-xs font-serif font-black text-[#FAB818] uppercase tracking-wider">
                  Yelahanka Dine-in & Hangout
                </p>
              </div>
            </div>

            {/* Content (Expanded on Hover, Summary on Default) */}
            <AnimatePresence initial={false}>
              {hoverBox1 ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 pt-2"
                >
                  <p className="text-xs sm:text-sm text-[#FDFBF7] leading-relaxed font-sans font-medium">
                    Your cozy culinary corner for daily comfort food. Drop by for rich north indian breakfast dishes, crisp punjab de parathe, street-style dal pakwaan, refreshing beverages, and soulful north indian thali spreads. Perfect for college students, working professionals, and weekend family outings.
                  </p>
                  <div className="pt-2 flex items-center justify-between border-t border-kaka-gold/40 text-xs font-serif font-bold text-[#FAB818]">
                    <span className="flex items-center gap-1.5 underline">
                      Explore Cafe Experience <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-white/80 text-[11px]">Click to jump to dishes</span>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-2 pt-1">
                  <p className="text-xs sm:text-sm text-white/90 font-sans font-medium line-clamp-2">
                    Daily homestyle comfort food, crisp Punjab de parathe, Dal Pakwaan & pure desi ghee thalis.
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-[#FAB818] pt-1">
                    <span>Hover to explore cafe experience</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Tile 2: The Kaka Group */}
          <motion.div
            onMouseEnter={() => setHoverBox2(true)}
            onMouseLeave={() => setHoverBox2(false)}
            onClick={onOpenKakaGroup}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className={`cursor-pointer rounded-3xl p-6 sm:p-7 border-2 transition-all duration-300 text-left relative overflow-hidden backdrop-blur-xl ${
              hoverBox2
                ? 'bg-black/85 border-[#FAB818] shadow-[0_15px_45px_rgba(250,184,24,0.35),0_0_20px_rgba(250,184,24,0.2)]'
                : 'bg-black/70 border-kaka-gold/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:border-[#FAB818]'
            }`}
          >
            {/* Corner filigree shimmer */}
            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-kaka-terracotta/25 via-transparent to-transparent pointer-events-none" />

            <div className="flex items-center gap-3.5 mb-2.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C85A32] to-[#A33C1E] flex items-center justify-center text-[#FAB818] shadow-xl border border-kaka-gold shrink-0">
                <PartyPopper className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-black text-white tracking-wide flex items-center gap-2 drop-shadow">
                  The Kaka Group
                  <Sparkles className="w-3.5 h-3.5 text-[#FAB818]" />
                </h2>
                <p className="text-xs font-serif font-black text-[#FAB818] uppercase tracking-wider">
                  Catering, Decor & Large Events
                </p>
              </div>
            </div>

            {/* Content (Expanded on Hover, Summary on Default) */}
            <AnimatePresence initial={false}>
              {hoverBox2 ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 pt-2"
                >
                  <p className="text-xs sm:text-sm text-[#FDFBF7] leading-relaxed font-sans font-medium">
                    Planning a milestone gathering, wedding reception, griha pravesh, or corporate gala? The Kaka Group delivers end-to-end event management, royal banquet catering, theme mandap decor, and live food counters across Bangalore. We specialize in dry, non-alcoholic, 100% pure vegetarian spreads featuring authentic rajasthani bhojan, luxury punjabi food items, and contemporary live counters (additional dishes as per request).
                  </p>
                  <div className="pt-2 flex items-center justify-between border-t border-kaka-gold/40 text-xs font-serif font-bold text-[#FAB818]">
                    <span className="flex items-center gap-1.5 underline">
                      Explore Grand Catering & Decor <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-white/80 text-[11px]">Click to open details</span>
                  </div>
                </motion.div>
              ) : (
                <div className="space-y-2 pt-1">
                  <p className="text-xs sm:text-sm text-white/90 font-sans font-medium line-clamp-2">
                    Grand outdoor catering, Rajputana floral mandaps & live vegetarian rasoi counters for 100 to 2,000+ guests.
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-serif font-bold text-[#FAB818] pt-1">
                    <span>Hover to explore catering syndicate details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* 3 Prominent Buttons Below the Two Boxes (Menu, Order Online, Host with Us) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-7 w-full max-w-xl"
        >
          {/* Button 1: Menu */}
          <button
            onClick={() => scrollTo('menu')}
            className="flex-1 min-w-[140px] py-3.5 px-6 rounded-2xl bg-[#C85A32] hover:bg-[#A33C1E] text-white font-sans font-bold text-sm shadow-[0_10px_25px_rgba(200,90,50,0.5)] hover:shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-kaka-gold flex items-center justify-center gap-2"
          >
            <span>🍽️ View Menu</span>
          </button>

          {/* Button 2: Order Online */}
          <button
            onClick={onOpenOrderOnline}
            className="flex-1 min-w-[140px] py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#FAB818] via-[#FFD050] to-[#FAB818] text-[#1A1412] font-sans font-extrabold text-sm shadow-[0_10px_25px_rgba(250,184,24,0.5)] hover:shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-[#D4AF37] flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>🛍️ Order Online</span>
          </button>

          {/* Button 3: Host with Us */}
          <button
            onClick={() => scrollTo('host')}
            className="flex-1 min-w-[140px] py-3.5 px-6 rounded-2xl bg-black/80 hover:bg-black text-white font-sans font-bold text-sm shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:shadow-2xl transition-all hover:scale-105 active:scale-95 border-2 border-kaka-gold backdrop-blur-md flex items-center justify-center gap-2"
          >
            <span>🎉 Host with Us</span>
          </button>
        </motion.div>
      </div>

      {/* 4. Down Middle of Dashboard: Creed & Direct Helpline Bar (High Contrast) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full max-w-4xl mx-auto pt-4"
      >
        <div className="bg-black/85 backdrop-blur-xl rounded-2xl p-3.5 sm:p-4 border-2 border-kaka-gold/60 shadow-[0_10px_35px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center gap-2.5 text-center text-xs">
          {/* Top Line: Sattvic & Purity Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs font-bold">
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              100% Pure Vegetarian
            </span>
            <span className="text-white/40">•</span>
            <span className="text-[#FAB818]">🧈 Pure Desi Ghee</span>
            <span className="text-white/40">•</span>
            <span className="text-white">🚫 Zero Palm Oil</span>
            <span className="text-white/40">•</span>
            <span className="text-amber-400">Strict Jain Available [J]</span>
          </div>

          {/* Bottom Line: Timings, Helpline, and Email */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-white/90 font-medium border-t border-white/20 pt-2 w-full">
            <span className="flex items-center gap-1.5 text-kaka-parchment">
              <Clock className="w-3.5 h-3.5 text-[#FAB818]" />
              Open Daily: 10:00 AM to 10:00 PM
            </span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a
              href="tel:+917022470962"
              className="flex items-center gap-1.5 text-[#FAB818] hover:text-white transition-colors font-bold"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 7022470962
            </a>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a
              href="mailto:kakacafe.blr@gmail.com"
              className="flex items-center gap-1.5 text-white hover:text-[#FAB818] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#FAB818]" />
              kakacafe.blr@gmail.com
            </a>
          </div>
        </div>

        {/* Subtle Animated Mouse Scroll Pill */}
        <div className="flex justify-center mt-3">
          <button
            onClick={() => scrollTo('about')}
            aria-label="Scroll down to content"
            className="w-6 h-9 rounded-full border-2 border-kaka-gold/80 flex items-start justify-center p-1 hover:border-[#FAB818] transition-colors bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="w-1.5 h-2.5 rounded-full bg-[#FAB818]"
            />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
