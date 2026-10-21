import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';

const ZOMATO_URL = "https://www.zomato.com/bangalore/kaka-cafe-yelahanka-bangalore";
const SWIGGY_URL = "https://www.swiggy.com/city/bangalore/kaka-cafe-yelahanka-rest1312767";
const WHATSAPP_URL = "https://wa.me/917022470962?text=Namaste%20Kaka%20Cafe,%20I%20would%20like%20to%20place%20an%20order.";
const PHONE_NUMBER = "+91 7022470962";

export default function OrderOnlineModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
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
            className="relative w-full max-w-xl bg-kaka-cream rounded-3xl border-2 border-kaka-gold shadow-2xl overflow-hidden z-10 my-auto"
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 25 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header with Title and Cross Close Button */}
            <div className="bg-gradient-to-r from-kaka-charcoal via-[#2A1D18] to-kaka-charcoal p-5 sm:p-6 text-kaka-cream border-b-2 border-kaka-gold/60 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-kaka-ochre/20 border border-kaka-gold flex items-center justify-center text-kaka-ochre shrink-0 shadow-md">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-serif font-black uppercase tracking-widest text-kaka-ochre">
                      KAKA CAFE ONLINE ORDERING
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-black text-white">
                      Order Online
                    </h3>
                  </div>
                </div>

                {/* Close Cross Option */}
                <button
                  onClick={onClose}
                  className="p-2 sm:p-2.5 rounded-full hover:bg-white/20 text-kaka-parchment hover:text-white transition-colors border border-white/20 shadow-sm"
                  aria-label="Close Order Online Modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="mt-2 text-xs text-kaka-parchment/80 font-medium">
                Choose your preferred way to order fresh, pure desi ghee meals right now:
              </p>
            </div>

            {/* Modal Body: 3 Options (Zomato, Swiggy, Call Us) */}
            <div className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              {/* Option 1: Zomato */}
              <a
                href={ZOMATO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group p-4 sm:p-5 rounded-2xl bg-white border-2 border-red-200 hover:border-[#E23744] shadow-sm hover:shadow-xl transition-all flex items-center justify-between gap-4 block hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  {/* Zomato Official Style Logo Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-[#E23744] flex items-center justify-center text-white shadow-md shrink-0 border border-red-300">
                    <span className="italic font-black text-xl tracking-tighter drop-shadow select-none">
                      zomato
                    </span>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base sm:text-lg font-sans font-bold text-kaka-charcoal group-hover:text-[#E23744] transition-colors">
                        Zomato
                      </h4>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-sans font-bold bg-red-50 text-[#E23744] border border-red-200">
                        4.8 ★ Rating
                      </span>
                    </div>
                    <p className="text-xs text-kaka-charcoal/70 mt-0.5">
                      Fast doorstep delivery across Yelahanka & North Bangalore
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-red-50 text-[#E23744] group-hover:bg-[#E23744] group-hover:text-white transition-colors shrink-0">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </a>

              {/* Option 2: Swiggy */}
              <a
                href={SWIGGY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group p-4 sm:p-5 rounded-2xl bg-white border-2 border-orange-200 hover:border-[#FC8019] shadow-sm hover:shadow-xl transition-all flex items-center justify-between gap-4 block hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  {/* Swiggy Official Style Logo Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-[#FC8019] flex items-center justify-center text-white shadow-md shrink-0 border border-orange-300 p-2">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C7.58 2 4 5.58 4 10c0 4.97 7.06 11.45 7.36 11.72.37.33.91.33 1.28 0 .3-.27 7.36-6.75 7.36-11.72 0-4.42-3.58-8-8-8zm-1.2 12.8c-1.8-.7-2.9-1.8-2.9-3.4 0-2.1 1.8-3.6 4.3-3.6 1.9 0 3.5.9 4.3 2.3-.3.2-.9.6-1.2.9-.5-1-1.7-1.5-3.1-1.5-1.5 0-2.5.8-2.5 1.9 0 1 .6 1.5 2 2l1.7.6c2.1.8 3.2 2 3.2 3.7 0 2.3-1.9 3.8-4.6 3.8-2.3 0-4.1-1.2-4.8-2.8.3-.2.9-.7 1.3-1 .5 1.2 1.8 2.2 3.5 2.2 1.7 0 2.8-.9 2.8-2.1 0-1.1-.7-1.7-2.1-2.2l-1.7-.7z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base sm:text-lg font-serif font-black text-kaka-charcoal group-hover:text-[#FC8019] transition-colors">
                        Swiggy
                      </h4>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-orange-50 text-[#FC8019] border border-orange-200">
                        Live Tracking
                      </span>
                    </div>
                    <p className="text-xs text-kaka-charcoal/70 mt-0.5">
                      Hot desi meals delivered via Swiggy Food in 30-40 mins
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-orange-50 text-[#FC8019] group-hover:bg-[#FC8019] group-hover:text-white transition-colors shrink-0">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </a>

              {/* Option 3: Call Us (Shows number & opens WhatsApp) */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="group p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-emerald-50 border-2 border-emerald-300 hover:border-emerald-600 shadow-sm hover:shadow-xl transition-all flex items-center justify-between gap-4 block hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  {/* WhatsApp Official Style Logo Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-md shrink-0 border border-emerald-400 p-2">
                    <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.414z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h4 className="text-base sm:text-lg font-serif font-black text-kaka-charcoal group-hover:text-emerald-700 transition-colors">
                        Call Us
                      </h4>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                        WhatsApp Kitchen
                      </span>
                    </div>
                    <div className="text-sm font-black text-emerald-700 mt-0.5 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{PHONE_NUMBER}</span>
                    </div>
                    <p className="text-xs text-kaka-charcoal/70 mt-0.5">
                      Click to chat on WhatsApp • Instant customized orders & takeaway
                    </p>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-700 group-hover:bg-[#25D366] group-hover:text-white transition-colors shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </a>

              {/* Purity Guarantee Note */}
              <div className="pt-2 text-center text-xs text-kaka-charcoal/80 flex items-center justify-center gap-2 font-medium">
                <ShieldCheck className="w-4 h-4 text-sattvic-green shrink-0" />
                <span>100% Pure Desi Ghee • Zero Palm Oil • Strict Jain Options</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
