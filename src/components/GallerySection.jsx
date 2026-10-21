import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ExternalLink, Sparkles, X, Camera } from 'lucide-react';
import { GOOGLE_REVIEWS_URL, RATING_SUMMARY, TESTIMONIALS, GALLERY_PHOTOS } from '../data/reviewsData';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPhotos = activeCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <section id="gallery" className="py-20 px-4 md:px-8 bg-kaka-cream relative overflow-hidden">
      {/* Decorative Jaali texture */}
      <div className="absolute inset-0 bg-jaali-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kaka-ochre/25 text-kaka-charcoal text-xs font-serif font-bold uppercase tracking-wider border border-kaka-gold/50 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-kaka-terracotta" />
            <span>Verified Acclaim & Haveli Snaps</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-kaka-charcoal tracking-tight">
            Loved by Bangalore, <span className="text-kaka-terracotta">Cherished by Guests</span>
          </h2>

          <p className="text-sm md:text-base text-kaka-charcoal/80">
            Real guest reviews and glimpses from our Yelahanka dining hall, night garden patio, and shahi rasoi.
          </p>
        </div>

        {/* 1. Google Verified Acclaim Banner & Testimonial Cards */}
        <div className="space-y-8">
          {/* Rating Summary Bar */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-kaka-charcoal via-[#261B16] to-kaka-charcoal border-2 border-kaka-gold shadow-royal flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-kaka-ochre text-kaka-charcoal flex flex-col items-center justify-center font-black shadow-md border-2 border-kaka-gold">
                <span className="text-2xl font-serif leading-none">4.8</span>
                <span className="text-[10px] tracking-wider uppercase font-sans">/ 5.0</span>
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-kaka-ochre mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-kaka-ochre" />
                  ))}
                </div>
                <h3 className="text-lg font-serif font-bold text-kaka-cream">
                  {RATING_SUMMARY.badgeText}
                </h3>
                <p className="text-xs text-kaka-parchment/80">
                  Based on 180+ verified Google reviews from diners across Yelahanka & North Bangalore
                </p>
              </div>
            </div>

            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-2xl bg-kaka-ochre hover:bg-[#ffc636] text-kaka-charcoal font-serif font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Read All Verified Google Reviews</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl p-6 border-2 border-kaka-gold/40 shadow-sm hover:shadow-royal transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-kaka-ochre">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-kaka-ochre" />
                      ))}
                    </div>
                    <span className="text-[10px] font-serif font-bold text-kaka-terracotta bg-kaka-parchment px-2 py-0.5 rounded-full border border-kaka-gold/30">
                      {item.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-kaka-charcoal/85 leading-relaxed italic font-sans">
                    "{item.comment}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-kaka-gold/20 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-serif font-bold text-kaka-charcoal">
                      {item.name}
                    </h4>
                    <p className="text-[10px] text-kaka-charcoal/60">{item.role}</p>
                  </div>
                  <span className="text-[10px] text-kaka-charcoal/50 font-medium">{item.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. Polymorphic Animated Gallery Grid */}
        <div className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl font-serif font-black text-kaka-charcoal flex items-center gap-2">
                <Camera className="w-6 h-6 text-kaka-terracotta" />
                <span>Haveli Gallery & Dining Moments</span>
              </h3>
              <p className="text-xs text-kaka-charcoal/70">
                Click any photograph to view high-resolution details
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 bg-kaka-parchment p-1 rounded-2xl border border-kaka-gold/40">
              {['All', 'Food', 'Ambiance', 'Heritage'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-serif font-bold transition-all ${
                    activeCategory === cat
                      ? 'bg-kaka-charcoal text-kaka-ochre shadow-sm'
                      : 'text-kaka-charcoal/70 hover:text-kaka-charcoal'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Masonry/Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(photo)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden border-2 border-kaka-gold/50 shadow-sm hover:shadow-royal-hover transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-kaka-parchment">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kaka-charcoal/80 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-0.5 text-[10px] font-serif font-bold uppercase rounded-full bg-kaka-charcoal/80 text-kaka-gold border border-kaka-gold/40 backdrop-blur-sm">
                      {photo.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 inset-x-3 text-white">
                    <h4 className="text-sm font-serif font-bold text-white group-hover:text-kaka-ochre transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-[11px] text-kaka-parchment/80 line-clamp-1">
                      {photo.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-kaka-charcoal/90 backdrop-blur-md">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            />

            <motion.div
              className="relative max-w-4xl w-full bg-kaka-cream rounded-3xl border-2 border-kaka-gold shadow-2xl overflow-hidden z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="relative aspect-[16/10] bg-black">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 bg-kaka-cream flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-kaka-gold/30">
                <div>
                  <span className="text-xs font-serif font-bold text-kaka-terracotta uppercase tracking-wider">
                    {selectedImage.category} • Kaka Cafe Yelahanka
                  </span>
                  <h3 className="text-xl font-serif font-bold text-kaka-charcoal">
                    {selectedImage.title}
                  </h3>
                  <p className="text-xs text-kaka-charcoal/70">{selectedImage.subtitle}</p>
                </div>

                <a
                  href={`https://wa.me/917022470962?text=${encodeURIComponent(
                    `Namaste Kaka Cafe, I saw the photo of "${selectedImage.title}" on your website and would like to know more.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-kaka-terracotta to-kaka-terracotta-dark text-white font-serif font-bold text-xs shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5 whitespace-nowrap"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
