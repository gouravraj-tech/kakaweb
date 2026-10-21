import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, Calendar, MapPin, ExternalLink, Clock, Mail, ChevronDown, ChevronUp, Sparkles, Navigation } from 'lucide-react';
import { FAQS } from '../data/faqData';

const GOOGLE_MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Shop+No+5+Maruthi+Nagar+Beside+Sobha+Althea+5th+Main+Road+Yelahanka+Bengaluru+560064";

export default function ContactSection({ onOpenReservation, onOpenKakaGroup }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-kaka-parchment relative overflow-hidden">
      {/* Decorative jaali overlay */}
      <div className="absolute inset-0 bg-jaali-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kaka-ochre/25 text-kaka-charcoal text-xs font-serif font-bold uppercase tracking-wider border border-kaka-gold/50 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-kaka-terracotta" />
            <span>Visit Us in Yelahanka</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-kaka-charcoal tracking-tight">
            Contact, Directions & <span className="text-kaka-terracotta">Local Hub</span>
          </h2>

          <p className="text-sm md:text-base text-kaka-charcoal/80">
            Conveniently nestled beside Sobha Althea on 5th Main Road, Yelahanka. We are open all 7 days for dine-in, takeaway, and celebrations.
          </p>
        </div>

        {/* 1. 5 Master Action Buttons Dock */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-kaka-gold shadow-royal">
          <div className="text-center mb-6">
            <h3 className="text-base sm:text-lg font-serif font-black text-kaka-charcoal">
              ⚡ 5 Direct Master Action Shortcuts
            </h3>
            <p className="text-xs text-kaka-charcoal/70">
              One-click access to connect with our culinary team immediately
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {/* Button 1: Call */}
            <a
              href="tel:+917022470962"
              className="p-4 rounded-2xl bg-gradient-to-b from-kaka-cream to-white border-2 border-kaka-gold/50 hover:border-kaka-terracotta text-center shadow-sm hover:shadow-md transition-all group flex flex-col items-center justify-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-kaka-ochre/20 group-hover:bg-kaka-ochre text-kaka-charcoal flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-serif font-bold text-kaka-charcoal group-hover:text-kaka-terracotta">
                Call Kaka
              </span>
              <span className="text-[10px] text-kaka-charcoal/60">7022470962</span>
            </a>

            {/* Button 2: WhatsApp Chat */}
            <a
              href="https://wa.me/917022470962?text=Namaste%20Kaka%20Cafe,%20I%20have%20an%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-gradient-to-b from-kaka-cream to-white border-2 border-kaka-gold/50 hover:border-sattvic-green text-center shadow-sm hover:shadow-md transition-all group flex flex-col items-center justify-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-sattvic-green/15 group-hover:bg-sattvic-green text-sattvic-green group-hover:text-white flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-xs font-serif font-bold text-kaka-charcoal group-hover:text-sattvic-green">
                WhatsApp Chat
              </span>
              <span className="text-[10px] text-kaka-charcoal/60">Instant Reply</span>
            </a>

            {/* Button 3: Reserve Table */}
            <button
              onClick={onOpenReservation}
              className="p-4 rounded-2xl bg-gradient-to-b from-kaka-cream to-white border-2 border-kaka-gold/50 hover:border-kaka-gold text-center shadow-sm hover:shadow-md transition-all group flex flex-col items-center justify-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-kaka-gold/20 group-hover:bg-kaka-gold text-kaka-charcoal group-hover:text-white flex items-center justify-center transition-colors">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-xs font-serif font-bold text-kaka-charcoal group-hover:text-kaka-terracotta">
                Reserve Table
              </span>
              <span className="text-[10px] text-kaka-charcoal/60">Garden & Hall</span>
            </button>

            {/* Button 4: Directions */}
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-gradient-to-b from-kaka-cream to-white border-2 border-kaka-gold/50 hover:border-blue-500 text-center shadow-sm hover:shadow-md transition-all group flex flex-col items-center justify-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/15 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center transition-colors">
                <Navigation className="w-5 h-5" />
              </div>
              <span className="text-xs font-serif font-bold text-kaka-charcoal group-hover:text-blue-600">
                Maps Directions
              </span>
              <span className="text-[10px] text-kaka-charcoal/60">Beside Sobha Althea</span>
            </a>

            {/* Button 5: Visit The Kaka Group */}
            <button
              onClick={onOpenKakaGroup}
              className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-gradient-to-b from-kaka-cream to-white border-2 border-kaka-gold/50 hover:border-kaka-ochre text-center shadow-sm hover:shadow-md transition-all group flex flex-col items-center justify-center gap-2 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-kaka-charcoal text-kaka-ochre flex items-center justify-center transition-colors">
                <ExternalLink className="w-5 h-5" />
              </div>
              <span className="text-xs font-serif font-bold text-kaka-charcoal group-hover:text-kaka-terracotta">
                The Kaka Group
              </span>
              <span className="text-[10px] text-kaka-charcoal/60">Grand Banquets</span>
            </button>
          </div>
        </div>

        {/* 2. Contact Details & Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border-2 border-kaka-gold/60 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-serif font-bold uppercase tracking-wider text-kaka-terracotta">
                Direct Contact Card
              </span>
              <h3 className="text-2xl font-serif font-black text-kaka-charcoal">
                Kaka Cafe Yelahanka
              </h3>
              <p className="text-xs text-kaka-charcoal/70">A Venture of The Kaka Group Syndicate</p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-kaka-charcoal/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-kaka-terracotta shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-kaka-charcoal">Address:</strong>
                  Shop No 5, Maruthi Nagar, Harohalli, Beside Sobha Althea, 5th Main Road, Yelahanka, Bengaluru, Karnataka — 560064.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-kaka-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-kaka-charcoal">Operating Hours:</strong>
                  Open Every Day, 10:00 AM – 10:00 PM (Monday through Sunday)
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sattvic-green shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-kaka-charcoal">Direct Mobile & WhatsApp:</strong>
                  <a href="tel:+917022470962" className="hover:text-kaka-terracotta font-semibold">
                    +91 7022470962
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-kaka-ochre shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-kaka-charcoal">Official Email:</strong>
                  <a href="mailto:kakacafe.blr@gmail.com" className="hover:text-kaka-terracotta font-semibold">
                    kakacafe.blr@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-pink-600 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <div>
                  <strong className="block text-kaka-charcoal">Instagram Profile:</strong>
                  <a
                    href="https://www.instagram.com/kakacafe.blr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-600 font-semibold"
                  >
                    @kakacafe.blr
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-kaka-parchment/70 border border-kaka-gold/40 text-xs text-kaka-charcoal/80 space-y-1">
              <span className="font-serif font-bold text-kaka-terracotta block">🚗 Parking Facility:</span>
              Spacious curbside parking for cars and two-wheelers available directly along 5th Main Road beside Sobha Althea.
            </div>
          </div>

          {/* Google Maps Embed with Overlay */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-3 border-2 border-kaka-gold/60 shadow-royal overflow-hidden relative">
            <div className="relative w-full h-[420px] rounded-2xl overflow-hidden bg-kaka-parchment">
              {/* Responsive Google Maps Iframe */}
              <iframe
                title="Kaka Cafe Yelahanka Location Map"
                src="https://maps.google.com/maps?q=Sobha+Althea+Yelahanka+Bengaluru+Karnataka&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Maps Overlay Button */}
              <div className="absolute bottom-4 right-4 z-10">
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-2xl bg-kaka-charcoal/95 text-kaka-cream border border-kaka-gold hover:bg-black font-serif font-bold text-xs shadow-xl flex items-center gap-2 backdrop-blur-md transition-transform hover:scale-105"
                >
                  <Navigation className="w-4 h-4 text-kaka-ochre" />
                  <span>Open in Google Maps App</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Local SEO FAQ Accordion (Hidden from UI as per user feedback - code preserved) */}
        <div className="hidden bg-white rounded-3xl p-6 sm:p-10 border-2 border-kaka-gold shadow-sm space-y-8" aria-hidden="true">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-serif font-bold uppercase tracking-wider text-kaka-terracotta">
              Everything You Need to Know
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-kaka-charcoal">
              Local Knowledge & FAQs
            </h3>
            <p className="text-xs sm:text-sm text-kaka-charcoal/70">
              Answers about Dal Bati Churma in Yelahanka, Jain preparations, pure desi ghee quality, and hosting.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-kaka-gold/40 overflow-hidden bg-kaka-cream/50 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 text-left font-serif font-bold text-sm sm:text-base text-kaka-charcoal flex items-center justify-between gap-4 hover:bg-kaka-parchment/60 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="p-1 rounded-full bg-kaka-ochre/20 text-kaka-terracotta shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-kaka-charcoal/80 leading-relaxed font-sans border-t border-kaka-gold/20 pt-3"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
