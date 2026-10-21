import { motion } from 'framer-motion';
import { Sparkles, Quote } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 md:py-20 px-4 md:px-8 bg-kaka-parchment/70 overflow-hidden border-t border-b border-kaka-gold/30 scroll-mt-20">
      {/* Subtle Rajasthani jaali texture */}
      <div className="absolute inset-0 bg-jaali-light opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heritage Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image with Royal Haveli Frame & Motion Effect */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.94, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative mx-auto max-w-md">
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-kaka-ochre/40 via-kaka-terracotta/30 to-kaka-gold/40 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Haveli Arch Frame */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative p-3 bg-gradient-to-b from-[#FAB818] via-[#EAA118] to-[#C85A32] rounded-3xl shadow-2xl border-2 border-kaka-gold overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-2xl border border-kaka-gold/50 bg-black/10">
                  <motion.img
                    src="/assets/heritage_fresco.jpg"
                    alt="Traditional Rajasthani Haveli Wall Fresco Niche at Kaka Cafe"
                    className="w-full h-80 sm:h-96 object-cover object-center filter brightness-[0.95] contrast-[1.05]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kaka-charcoal/85 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="text-[11px] uppercase tracking-widest text-[#FAB818] font-serif font-bold">
                      HAVELI TRADITION
                    </span>
                    <h4 className="text-lg font-serif font-black drop-shadow">
                      Honest Food, Cooked with Dignity
                    </h4>
                  </div>
                </div>
              </motion.div>

              {/* The Moustache Emblem Stamp Overlay */}
              <motion.div
                className="absolute -bottom-5 -right-3 sm:-right-4 bg-kaka-cream p-3.5 sm:p-4 rounded-3xl border-2 border-kaka-gold shadow-2xl flex items-center gap-3 max-w-[260px] sm:max-w-xs z-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-kaka-charcoal flex items-center justify-center p-1.5 border border-kaka-gold/60 shadow-inner shrink-0">
                  <img
                    src="/assets/logo.png"
                    alt="The Royal Handlebar Moustache Emblem"
                    className="w-full h-full object-contain invert"
                  />
                </div>
                <div>
                  <div className="text-xs font-serif font-black text-kaka-charcoal uppercase tracking-wider">
                    The Royal Moustache
                  </div>
                  <div className="text-[11px] text-kaka-terracotta font-bold leading-tight">
                    Symbol of Rajputana Pride & Hospitality
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Heritage Narrative */}
          <motion.div
            className="lg:col-span-7 space-y-5 text-left pt-6 lg:pt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-kaka-ochre/25 text-kaka-charcoal text-xs font-serif font-bold uppercase tracking-wider border border-kaka-gold/50 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-kaka-terracotta" />
              <span>Heritage Brand Story</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-kaka-charcoal leading-tight">
              The Story Behind the Moustache —{' '}
              <span className="text-kaka-terracotta">Honest Homestyle Cooking</span>
            </h2>

            {/* Highlighted Quote Box */}
            <div className="relative p-5 rounded-2xl bg-white border-l-4 border-kaka-terracotta border-y border-r border-kaka-gold/30 shadow-sm">
              <Quote className="w-6 h-6 text-kaka-ochre absolute top-3 right-3 opacity-40 pointer-events-none" />
              <p className="font-serif font-bold italic text-kaka-charcoal text-sm sm:text-base leading-relaxed">
                "We are engineers who traded blueprints for the belan because nothing in the city matched the authentic taste of real rajasthani food cooked with traditional dignity."
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-3.5 text-kaka-charcoal/90 text-sm sm:text-base leading-relaxed font-sans font-normal">
              <p>
                In Marwari and North Indian culture, <strong className="text-kaka-terracotta font-bold">‘Kaka’</strong> is that dependable uncle who always welcomes you with an open heart, listens without judgment, and ensures your plate is always full of piping hot rotis and rich dal. That warmth is the foundation of Kaka Cafe.
              </p>
              <p>
                Unlike commercial franchises or industrial cloud kitchens, our kitchen functions like a traditional new punjabi rasoi and Marwari home kitchen. Every batch of bati is hand-rolled, every curry is slow-simmered, and every guest is treated like family.
              </p>
            </div>

            {/* Left Down After Content: Founder Name & MD */}
            <div className="pt-4 border-t border-kaka-gold/40 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#FAB818] to-[#C85A32] flex items-center justify-center text-kaka-charcoal font-serif font-black shadow-md border border-kaka-gold text-sm shrink-0">
                PM
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-serif font-black text-kaka-charcoal tracking-wide">
                  Pankaj Motiani
                </h4>
                <p className="text-xs font-serif font-bold text-kaka-terracotta uppercase tracking-wider">
                  Founder & MD
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
