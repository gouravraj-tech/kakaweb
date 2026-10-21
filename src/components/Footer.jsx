import { Phone, Mail, MapPin, ExternalLink, ShieldCheck, Heart, Sparkles, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenKakaGroup }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-kaka-charcoal text-kaka-cream border-t-4 border-kaka-gold relative overflow-hidden pt-16 pb-24 md:pb-12">
      {/* Subtle jaali dark pattern overlay */}
      <div className="absolute inset-0 bg-jaali-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 space-y-12">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Moustache (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-kaka-cream p-1.5 border-2 border-kaka-gold flex items-center justify-center shadow-md">
                <img
                  src="/assets/logo.png"
                  alt="Kaka Cafe Royal Handlebar Moustache"
                  className="w-11 h-11 object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-black text-2xl tracking-wider text-kaka-cream">
                  KAKA CAFE
                </h3>
                <p className="text-xs font-sans font-bold text-kaka-gold uppercase tracking-widest">
                  Pure Veg - Jain - Vegan
                </p>
              </div>
            </div>

            <p className="text-xs text-kaka-parchment/80 leading-relaxed font-sans max-w-sm">
              We are engineers who traded blueprints for the belan to bring honest, dignified homestyle food to Yelahanka. Prepared exclusively with pure desi ghee, zero palm oil, and strict Jain friendly protocols.
            </p>

            {/* Sattvic Purity Badges */}
            <div className="flex flex-wrap gap-2 pt-1 text-[11px] font-bold">
              <span className="px-2.5 py-1 rounded-full bg-sattvic-green/20 text-sattvic-green border border-sattvic-green/30">
                🌿 100% Pure Veg
              </span>
              <span className="px-2.5 py-1 rounded-full bg-kaka-ochre/20 text-kaka-ochre border border-kaka-ochre/30">
                🧈 Pure Desi Ghee
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/10 text-kaka-cream border border-white/20">
                🚫 Zero Palm Oil
              </span>
              <span className="px-2.5 py-1 rounded-full bg-jain-amber/20 text-jain-amber border border-jain-amber/30">
                Strict Jain [J]
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-widest text-kaka-gold">
              Quick Portals
            </h4>
            <ul className="space-y-2 text-xs text-kaka-parchment/80 font-medium">
              <li>
                <button onClick={() => scrollTo('home')} className="hover:text-kaka-ochre transition-colors">
                  1. Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('about')} className="hover:text-kaka-ochre transition-colors">
                  2. About Heritage
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('offerings')} className="hover:text-kaka-ochre transition-colors">
                  Cuisines & Offerings
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('must-try')} className="hover:text-kaka-ochre transition-colors">
                  Must-Try Best Sellers
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('menu')} className="hover:text-kaka-ochre transition-colors">
                  3. Shahi Menu Catalog
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('gallery')} className="hover:text-kaka-ochre transition-colors">
                  4. Photo Gallery & Reviews
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('host')} className="hover:text-kaka-ochre transition-colors">
                  5. In-Cafe Micro Events
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('contact')} className="hover:text-kaka-ochre transition-colors">
                  6. Location & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Sister Syndicate: The Kaka Group (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-widest text-kaka-gold">
              Event Syndicate
            </h4>
            <ul className="space-y-2 text-xs text-kaka-parchment/80 font-medium">
              <li>
                <button
                  onClick={onOpenKakaGroup}
                  className="text-kaka-ochre hover:underline flex items-center gap-1 font-bold"
                >
                  <span>The Kaka Group</span>
                  <Sparkles className="w-3 h-3 text-kaka-gold" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenKakaGroup}
                  className="hover:text-kaka-ochre flex items-center gap-1.5 text-left text-xs cursor-pointer"
                >
                  <span>thekakagroup.in</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-kaka-gold/20 text-kaka-ochre font-bold">
                    Coming Soon
                  </span>
                </button>
              </li>
              <li>Outdoor Banquets</li>
              <li>Turnkey Mandap Decor</li>
              <li>Wedding Live Counters</li>
              <li>Corporate Galas</li>
              <li>100 to 2,000+ Guests</li>
            </ul>
          </div>

          {/* Col 4: Visit & Timings (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-serif font-bold uppercase tracking-widest text-kaka-gold">
              Visit Kaka Cafe
            </h4>
            <div className="space-y-2 text-xs text-kaka-parchment/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-kaka-terracotta shrink-0 mt-0.5" />
                <span>Shop No 5, Maruthi Nagar, Harohalli, Beside Sobha Althea, 5th Main Rd, Yelahanka, Bengaluru 560064</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sattvic-green shrink-0" />
                <a href="tel:+917022470962" className="text-kaka-ochre font-bold hover:underline">
                  +91 7022470962
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-kaka-gold shrink-0" />
                <a href="mailto:kakacafe.blr@gmail.com" className="hover:underline">
                  kakacafe.blr@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg className="w-4 h-4 text-pink-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <a
                  href="https://www.instagram.com/kakacafe.blr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @kakacafe.blr
                </a>
              </p>
              <p className="text-[11px] text-kaka-gold font-serif pt-1">
                Open Daily: 10:00 AM – 10:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* SEO Keywords Hub Accordion Bar */}
        <div className="p-4 rounded-2xl bg-white/5 border border-kaka-gold/30 text-[11px] text-kaka-parchment/60 leading-relaxed">
          <strong className="text-kaka-gold uppercase font-serif block mb-1">
            Local Search Discovery Hub:
          </strong>
          <span>
            Authentic North Indian food in Yelahanka • Rajasthani thali near me • Best Dal Bati Churma near me • Marwadi bhojanalaya Bangalore • Punjabi restaurant near Airport Road • Stuffed tawa paratha near Sobha Althea • Dal Pakwaan breakfast Yelahanka • Pure veg cafe in Sahakar Nagar • Strict Jain food delivery Yelahanka • Kitty party venue Bangalore • Small birthday party cafe • Outdoor vegetarian catering Bangalore.
          </span>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-6 border-t border-kaka-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-kaka-parchment/60">
          <div>
            © {new Date().getFullYear()} Kaka Cafe & The Kaka Group. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-kaka-gold/20 text-kaka-ochre hover:bg-kaka-gold/30 transition-colors flex items-center gap-1.5 font-serif font-bold text-xs"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
