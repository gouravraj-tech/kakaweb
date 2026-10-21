import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, UtensilsCrossed, CalendarCheck, ShieldCheck, PhoneCall, Award } from 'lucide-react';

export default function KakaGroupModal({ isOpen, onClose }) {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-kaka-charcoal/80 backdrop-blur-md">
          {/* Backdrop click to close */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-2xl bg-kaka-cream rounded-3xl border-2 border-kaka-gold shadow-2xl overflow-hidden z-10 my-auto"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header with Royal Arch pattern */}
            <div className="bg-gradient-to-r from-kaka-charcoal via-[#2a1e19] to-kaka-charcoal px-6 py-6 text-kaka-cream relative border-b-2 border-kaka-gold/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-2xl bg-kaka-ochre/20 border border-kaka-gold text-kaka-ochre shadow-inner">
                    <Sparkles className="w-6 h-6" />
                  </span>
                  <div>
                    <span className="text-xs tracking-widest text-kaka-ochre uppercase font-bold font-serif">
                      ROYAL EVENT SYNDICATE
                    </span>
                    <h3 className="text-2xl font-serif font-black text-kaka-cream tracking-wide">
                      THE KAKA GROUP
                    </h3>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 text-kaka-parchment transition-colors"
                  aria-label="Close Modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-3 flex items-center gap-2 text-xs text-kaka-ochre font-medium">
                <Award className="w-4 h-4 text-kaka-gold" />
                <span>Full-Scale Banquets, Mandap Decor & Grand Catering across Bangalore (100 to 2,000+ Guests)</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              {/* Highlight paragraph from prompt */}
              <div className="p-5 bg-kaka-parchment/60 rounded-2xl border border-kaka-gold/40 text-kaka-charcoal leading-relaxed text-sm md:text-base font-medium relative">
                <div className="absolute -top-3 left-6 px-3 py-0.5 bg-kaka-terracotta text-white text-[11px] font-bold rounded-full uppercase tracking-wider">
                  Event Management Mandate
                </div>
                <p className="mt-1">
                  "Planning a milestone gathering, wedding reception, griha pravesh, or corporate gala? The Kaka Group delivers end-to-end event management, royal banquet catering, theme mandap decor, and live food counters across Bangalore. We specialize in dry, non-alcoholic, 100% pure vegetarian spreads featuring authentic rajasthani bhojan, luxury punjabi food items, and contemporary live counters (additional dishes as per request)."
                </p>
              </div>

              {/* Core Offerings Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white border border-kaka-gold/30 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 text-kaka-terracotta font-serif font-bold text-sm">
                    <UtensilsCrossed className="w-4 h-4" />
                    <span>Royal Rajasthani Banquets</span>
                  </div>
                  <p className="text-xs text-kaka-charcoal/80 leading-normal">
                    Live bati roasting on coals, fragrant panchmel dals, hot jalebi-churma counters, and traditional sit-down Marwari royal hospitality.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-kaka-gold/30 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 text-kaka-terracotta font-serif font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-sattvic-green" />
                    <span>Strict Sattvic & Jain Protocols</span>
                  </div>
                  <p className="text-xs text-kaka-charcoal/80 leading-normal">
                    Segregated mobile kitchens, zero alcohol, zero onion-garlic options, and 100% pure desi ghee culinary assurance.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-kaka-gold/30 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 text-kaka-terracotta font-serif font-bold text-sm">
                    <Sparkles className="w-4 h-4 text-kaka-gold" />
                    <span>Grand Punjabi Rasoi & Chaats</span>
                  </div>
                  <p className="text-xs text-kaka-charcoal/80 leading-normal">
                    Live tawa paratha setups, Amritsari chole kulche, rich kaju-paneer gravies, and interactive street chaat carts.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-kaka-gold/30 shadow-sm space-y-1.5">
                  <div className="flex items-center gap-2 text-kaka-terracotta font-serif font-bold text-sm">
                    <CalendarCheck className="w-4 h-4" />
                    <span>Turnkey Mandap & Heritage Decor</span>
                  </div>
                  <p className="text-xs text-kaka-charcoal/80 leading-normal">
                    Rajputana arches, floral mandap installations, ambient fairy lights, sound systems, and guest hosting under a single consolidated team.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => setShowComingSoon(true)}
                  className="w-full sm:w-1/2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-kaka-charcoal to-[#2B1F19] text-kaka-cream border-2 border-kaka-gold/60 font-sans font-bold text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
                >
                  <span>🌐 thekakagroup.in</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-kaka-ochre text-kaka-charcoal font-black">
                    Coming Soon
                  </span>
                </button>

                <a
                  href="https://wa.me/917022470962?text=Namaste%20The%20Kaka%20Group,%20I%20would%20like%20to%20inquire%20about%20event%20catering%20and%20decor%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-1/2 py-3.5 px-6 rounded-2xl bg-sattvic-green text-white font-sans font-bold text-center flex items-center justify-center gap-2 shadow-lg hover:bg-emerald-700 transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Discuss Event on WhatsApp</span>
                </a>
              </div>

              {showComingSoon && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-2xl bg-amber-50 border-2 border-kaka-gold text-center text-xs text-kaka-charcoal font-medium"
                >
                  <span className="font-bold text-kaka-terracotta text-sm">🚀 Official Website Launching Soon!</span>
                  <p className="mt-1 text-xs text-kaka-charcoal/80">
                    The standalone web portal <strong>thekakagroup.in</strong> is currently under development. For event bookings, catering menus (100 to 2,000+ guests), and mandap decor consultations, please connect directly with our event directors on WhatsApp or call <strong>+91 7022470962</strong>.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
