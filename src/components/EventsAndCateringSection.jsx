import { useState } from 'react';
import { motion } from 'framer-motion';
import { PartyPopper, Users, Calendar, Phone, Sparkles, ExternalLink, ShieldCheck, Flame, UtensilsCrossed, HeartHandshake, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EventsAndCateringSection({ onOpenKakaGroup }) {
  // In-Cafe Micro Events Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occasion: 'Birthday Celebration',
    guestCount: 25,
    dietary: 'Standard Pure Veg (Desi Ghee)',
    date: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }

    setSubmitted(true);

    // Format WhatsApp message
    const message = `Namaste Kaka Cafe! 🎉\n\nI would like to inquire about hosting a micro-event at Kaka Cafe Yelahanka:\n\n• Host Name: ${formData.name}\n• Mobile: ${formData.phone}\n• Occasion: ${formData.occasion}\n• Guest Count: ${formData.guestCount} guests (15-60)\n• Dietary Preference: ${formData.dietary}\n• Preferred Date: ${formData.date || 'To be finalized'}\n• Special Notes: ${formData.notes || 'None'}\n\nPlease share availability and package options.`;

    const whatsappUrl = `https://wa.me/917022470962?text=${encodeURIComponent(message)}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-kaka-cream via-kaka-parchment/70 to-kaka-cream relative overflow-hidden">
      {/* Decorative Jaali Pattern */}
      <div className="absolute inset-0 bg-jaali-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        {/* Tier 1: In-Cafe Micro-Events (#host) */}
        <div id="host" className="pt-4 scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kaka-terracotta/15 text-kaka-terracotta text-xs font-serif font-bold uppercase tracking-wider border border-kaka-terracotta/30">
              <PartyPopper className="w-4 h-4" />
              <span>Operational Tier 01 • In-Cafe Hosting</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-kaka-charcoal tracking-tight">
              Host Intimate Gatherings & <span className="text-kaka-terracotta">Kitty Parties</span>
            </h2>

            <p className="text-sm md:text-base text-kaka-charcoal/80">
              Finding a cozy, hygienic, 100% pure vegetarian venue for private milestone events can be difficult. Kaka Cafe offers dedicated property reservations for small gatherings of <strong>15 to 60 guests</strong> in Yelahanka.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Event Types Overview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-kaka-gold/40 shadow-sm flex items-start gap-3.5">
                <span className="p-2.5 rounded-xl bg-kaka-ochre/20 text-kaka-charcoal">
                  <Sparkles className="w-5 h-5 text-kaka-terracotta" />
                </span>
                <div>
                  <h3 className="text-sm font-serif font-bold text-kaka-charcoal">Kitty Parties & Ladies’ Lunches</h3>
                  <p className="text-xs text-kaka-charcoal/75 mt-1 leading-relaxed">
                    Customized multi-course grazing menus featuring chatpata street chaats, crispy dal pakwaan, cheese parathas, mocktails, and royal desserts.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-kaka-gold/40 shadow-sm flex items-start gap-3.5">
                <span className="p-2.5 rounded-xl bg-kaka-terracotta/10 text-kaka-terracotta">
                  <PartyPopper className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-sm font-serif font-bold text-kaka-charcoal">Birthday & Anniversary Celebrations</h3>
                  <p className="text-xs text-kaka-charcoal/75 mt-1 leading-relaxed">
                    Reserved seating, warm haveli garden ambiance, customizable pure veg buffets, and zero interference from regular cafe footfall.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-kaka-gold/40 shadow-sm flex items-start gap-3.5">
                <span className="p-2.5 rounded-xl bg-sattvic-green/10 text-sattvic-green">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="text-sm font-serif font-bold text-kaka-charcoal">Family Reunions & Poojas</h3>
                  <p className="text-xs text-kaka-charcoal/75 mt-1 leading-relaxed">
                    Dedicated sattvic and strict Jain menus prepared purely without onion, garlic, or root vegetables.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-kaka-gold/40 shadow-sm flex items-start gap-3.5">
                <span className="p-2.5 rounded-xl bg-kaka-charcoal/10 text-kaka-charcoal">
                  <Users className="w-5 h-5 text-kaka-ochre" />
                </span>
                <div>
                  <h3 className="text-sm font-serif font-bold text-kaka-charcoal">Corporate Team Luncheons</h3>
                  <p className="text-xs text-kaka-charcoal/75 mt-1 leading-relaxed">
                    Fast, fresh executive thalis and live paratha spreads for technology and business teams along the Airport Road corridor.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Interactive Booking Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-kaka-gold shadow-royal">
              <div className="mb-6">
                <span className="text-xs font-serif font-bold uppercase tracking-wider text-kaka-terracotta">
                  Instant WhatsApp Booking Request
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-black text-kaka-charcoal">
                  Reserve Kaka Cafe for 15 to 60 Guests
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-kaka-charcoal mb-1">
                      Host Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pooja Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-kaka-cream border border-kaka-gold/50 focus:border-kaka-terracotta text-xs sm:text-sm outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-kaka-charcoal mb-1">
                      WhatsApp Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-kaka-cream border border-kaka-gold/50 focus:border-kaka-terracotta text-xs sm:text-sm outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-kaka-charcoal mb-1">
                      Occasion *
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-kaka-cream border border-kaka-gold/50 focus:border-kaka-terracotta text-xs sm:text-sm outline-none"
                    >
                      <option>Kitty Party / Ladies Lunch</option>
                      <option>Birthday Celebration</option>
                      <option>Anniversary Dinner</option>
                      <option>Family Reunion / Pooja</option>
                      <option>Corporate Team Lunch</option>
                      <option>Other Gathering</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-xs font-bold text-kaka-charcoal">
                        Guest Count (15 to 60) *
                      </label>
                      <span className="text-xs font-serif font-black text-kaka-terracotta bg-kaka-parchment px-2 py-0.5 rounded border border-kaka-gold/30">
                        {formData.guestCount} Guests
                      </span>
                    </div>
                    <input
                      type="range"
                      min="15"
                      max="60"
                      step="5"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) })}
                      className="w-full accent-kaka-terracotta cursor-pointer"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-kaka-charcoal mb-1">
                      Dietary Mandate *
                    </label>
                    <select
                      value={formData.dietary}
                      onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-kaka-cream border border-kaka-gold/50 focus:border-kaka-terracotta text-xs sm:text-sm outline-none"
                    >
                      <option>Standard Pure Veg (Desi Ghee)</option>
                      <option>100% Strict Jain Only [No Onion/Garlic/Roots]</option>
                      <option>Vegan (100% Plant-Based / Dairy-Free)</option>
                      <option>Mixed (Both Regular & Jain Buffets)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-kaka-charcoal mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-kaka-cream border border-kaka-gold/50 focus:border-kaka-terracotta text-xs sm:text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-kaka-charcoal mb-1">
                    Custom Menu Preferences / Notes
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Specific dishes you want, seating preferences, cake cutting time..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-kaka-cream border border-kaka-gold/50 focus:border-kaka-terracotta text-xs sm:text-sm outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-kaka-terracotta to-kaka-terracotta-dark text-white font-serif font-bold text-sm shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <PartyPopper className="w-4 h-4 text-kaka-ochre" />
                  <span>Submit Booking Request to WhatsApp (+91 7022470962)</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Tier 2: Outdoor Banquets & Full-Scale Event Management (#catering) */}
        <div id="catering" className="pt-8 scroll-mt-24 border-t-2 border-kaka-gold/40">
          <div className="bg-gradient-to-r from-kaka-charcoal via-[#231A16] to-kaka-charcoal text-kaka-cream rounded-3xl p-8 sm:p-12 border-2 border-kaka-gold shadow-2xl relative overflow-hidden">
            {/* Jaali dots */}
            <div className="absolute inset-0 bg-jaali-dark opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-3">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kaka-ochre/20 text-kaka-ochre text-xs font-serif font-bold uppercase tracking-wider border border-kaka-gold/40">
                  <Sparkles className="w-3.5 h-3.5 text-kaka-gold" />
                  <span>Operational Tier 02 • Large Outdoor Gatherings</span>
                </span>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-kaka-cream tracking-wide">
                  The Kaka Group — <span className="gold-shine-text">Grand Catering & Mandap Decor</span>
                </h2>

                <p className="text-sm md:text-base text-kaka-parchment/80 max-w-2xl mx-auto">
                  For large-scale events with <strong>100 to 2,000+ guests</strong>, The Kaka Group takes charge of your milestone celebration anywhere in Bangalore.
                </p>
              </div>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-white/5 border border-kaka-gold/30 backdrop-blur-sm space-y-2">
                  <div className="flex items-center gap-2 text-kaka-ochre font-serif font-bold text-base">
                    <UtensilsCrossed className="w-5 h-5 text-kaka-gold" />
                    <span>Royal Rajasthani Banquets</span>
                  </div>
                  <p className="text-xs text-kaka-parchment/80 leading-relaxed">
                    Authentic sit-down Marwari thalis served with traditional warmth, or modern buffet spreads featuring live bati roasting, kadhi, kaju curries, and hot jalebi-churma counters.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-kaka-gold/30 backdrop-blur-sm space-y-2">
                  <div className="flex items-center gap-2 text-kaka-ochre font-serif font-bold text-base">
                    <Flame className="w-5 h-5 text-kaka-terracotta" />
                    <span>Grand Punjabi Rasoi Counters</span>
                  </div>
                  <p className="text-xs text-kaka-parchment/80 leading-relaxed">
                    Live tandoor and tawa paratha setups, authentic Punjabi chole kulche, rich paneer curries, and rich lassi bars.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-kaka-gold/30 backdrop-blur-sm space-y-2">
                  <div className="flex items-center gap-2 text-kaka-ochre font-serif font-bold text-base">
                    <ShieldCheck className="w-5 h-5 text-sattvic-green" />
                    <span>Sattvic & Jain Wedding Protocols</span>
                  </div>
                  <p className="text-xs text-kaka-parchment/80 leading-relaxed">
                    Dedicated separate production kitchens guaranteeing strict non-cross-contaminated vegetarianism with zero onion-garlic or alcohol service.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-kaka-gold/30 backdrop-blur-sm space-y-2">
                  <div className="flex items-center gap-2 text-kaka-ochre font-serif font-bold text-base">
                    <Sparkles className="w-5 h-5 text-kaka-gold" />
                    <span>Turnkey Decor & Production</span>
                  </div>
                  <p className="text-xs text-kaka-parchment/80 leading-relaxed">
                    Integrated floral mandaps, Rajputana heritage arches, lighting, sound setups, and guest management under a single consolidated window.
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={onOpenKakaGroup}
                  className="w-full sm:w-auto py-3.5 px-8 rounded-2xl bg-gradient-to-r from-kaka-ochre to-[#ECA012] text-kaka-charcoal font-sans font-extrabold text-sm shadow-xl hover:shadow-2xl transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore The Kaka Group Services</span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenKakaGroup}
                  className="w-full sm:w-auto py-3.5 px-8 rounded-2xl bg-white/10 hover:bg-white/15 text-kaka-gold border border-kaka-gold/40 font-serif font-bold text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <span>View Catering Dossier Modal</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
