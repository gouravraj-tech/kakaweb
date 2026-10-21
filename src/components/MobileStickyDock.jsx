import { Phone, MessageCircle, Utensils, Calendar } from 'lucide-react';

export default function MobileStickyDock({ onOpenReservation, onOpenOrderOnline }) {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside aria-label="Mobile Navigation Bar" className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-kaka-charcoal/95 backdrop-blur-lg border-t-2 border-kaka-gold/60 py-2.5 px-3 shadow-[0_-5px_20px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between gap-1.5">
        {/* Call CTA */}
        <a
          href="tel:+917022470962"
          className="flex-1 py-2.5 px-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-kaka-cream border border-kaka-gold/30 text-[11px] font-sans font-bold flex items-center justify-center gap-1 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-kaka-ochre" />
          <span>Call</span>
        </a>

        {/* Reserve Table CTA */}
        <button
          onClick={onOpenReservation}
          className="flex-1 py-2.5 px-1.5 rounded-xl bg-kaka-gold/20 hover:bg-kaka-gold/30 text-kaka-ochre border border-kaka-gold/40 text-[11px] font-sans font-bold flex items-center justify-center gap-1 transition-colors"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Table</span>
        </button>

        {/* View Menu CTA */}
        <button
          onClick={scrollToMenu}
          className="flex-1 py-2.5 px-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-kaka-cream border border-kaka-gold/30 text-[11px] font-sans font-bold flex items-center justify-center gap-1 transition-colors"
        >
          <Utensils className="w-3.5 h-3.5 text-kaka-ochre" />
          <span>Menu</span>
        </button>

        {/* Order Online CTA */}
        <button
          onClick={onOpenOrderOnline}
          className="flex-[1.4] py-2.5 px-2 rounded-xl bg-gradient-to-r from-kaka-ochre via-[#FFD050] to-kaka-gold text-kaka-charcoal font-sans font-extrabold text-[11px] flex items-center justify-center gap-1 shadow-md active:scale-95 transition-transform border border-kaka-gold"
        >
          <span>Order Online</span>
        </button>
      </div>
    </aside>
  );
}
