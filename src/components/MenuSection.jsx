import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles, MessageCircle, ShieldCheck, Flame, RefreshCw } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';

export default function MenuSection({ selectedCategory, onSelectCategory }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [onlyJain, setOnlyJain] = useState(false);

  // Filter items based on active category, search term, and Jain toggle
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category check
      if (selectedCategory && selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Jain toggle check
      if (onlyJain && !item.isJain) {
        return false;
      }

      // Search term check
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, onlyJain, searchTerm]);

  return (
    <section id="menu" className="py-20 px-4 md:px-8 bg-kaka-parchment/80 relative overflow-hidden">
      {/* Decorative jaali backdrop */}
      <div className="absolute inset-0 bg-jaali-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kaka-ochre/25 text-kaka-charcoal text-xs font-serif font-bold uppercase tracking-wider border border-kaka-gold/50 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-kaka-terracotta" />
            <span>Pure Desi Ghee Gastronomy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-kaka-charcoal tracking-tight">
            Complete <span className="text-kaka-terracotta">Shahi Menu Catalog</span>
          </h2>

          <p className="text-sm md:text-base text-kaka-charcoal/80">
            Authentic preparations crafted without commercial shortcuts. Freshly cooked, never reheated from deep freezes.
          </p>
        </div>

        {/* Pure Veg Assurance Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-kaka-charcoal via-[#2A1D18] to-kaka-charcoal text-kaka-cream border-2 border-kaka-gold/50 shadow-royal flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <span className="p-2.5 rounded-xl bg-sattvic-green/20 text-sattvic-green border border-sattvic-green/40">
              <ShieldCheck className="w-6 h-6" />
            </span>
            <div>
              <div className="text-sm font-serif font-black text-kaka-ochre tracking-wide">
                100% SATTVIC ASSURANCE • ZERO PALM OIL POLICY
              </div>
              <div className="text-xs text-kaka-parchment/80">
                Segregated preparation tables for strict Jain patrons. Zero artificial colors or MSG.
              </div>
            </div>
          </div>

          <div className="flex items-center flex-wrap justify-center gap-2 text-xs font-bold font-serif">
            <span className="px-3 py-1 rounded-full bg-white/10 text-sattvic-green border border-sattvic-green/30">
              ✓ 100% Pure Veg
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-kaka-ochre border border-kaka-ochre/30">
              ✓ Pure Desi Ghee
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-jain-amber border border-jain-amber/30">
              ✓ Strict Jain [J]
            </span>
          </div>
        </div>

        {/* Search Bar & Jain Filter Controls */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-kaka-gold-dark pointer-events-none" />
              <input
                type="text"
                placeholder="Search delicacies (e.g. Dal Bati, Paratha, Paneer, Maggi, Lassi)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border-2 border-kaka-gold/60 focus:border-kaka-terracotta focus:ring-2 focus:ring-kaka-terracotta/20 text-kaka-charcoal placeholder-kaka-charcoal/50 text-sm shadow-sm outline-none transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-kaka-charcoal/50 hover:text-kaka-charcoal p-1"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Strict Jain Toggle Switch */}
            <div className="flex items-center justify-between sm:justify-end gap-3 px-4 py-3 rounded-2xl bg-white border-2 border-kaka-gold/60 shadow-sm shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-jain-amber" />
                <span className="text-xs font-serif font-bold text-kaka-charcoal select-none">
                  Show Only Jain Friendly [J]
                </span>
              </div>

              <button
                type="button"
                onClick={() => setOnlyJain(!onlyJain)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  onlyJain ? 'bg-jain-amber' : 'bg-gray-300'
                }`}
                aria-label="Toggle Jain filter"
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                    onlyJain ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = (selectedCategory || 'all') === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-serif font-bold whitespace-nowrap transition-all shadow-sm ${
                    isActive
                      ? 'bg-gradient-to-r from-kaka-terracotta to-kaka-terracotta-dark text-white border border-kaka-terracotta shadow-md scale-105'
                      : 'bg-white hover:bg-kaka-cream text-kaka-charcoal/80 border border-kaka-gold/40 hover:border-kaka-gold'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter & Reset */}
        <div className="mb-6 flex items-center justify-between text-xs font-medium text-kaka-charcoal/70 px-1">
          <span>
            Showing <strong className="text-kaka-charcoal">{filteredItems.length}</strong> authentic delicacies
            {onlyJain && ' (Strict Jain Friendly)'}
            {searchTerm && ` matching "${searchTerm}"`}
          </span>

          {(searchTerm || onlyJain || (selectedCategory && selectedCategory !== 'all')) && (
            <button
              onClick={() => {
                setSearchTerm('');
                setOnlyJain(false);
                onSelectCategory('all');
              }}
              className="text-kaka-terracotta hover:underline font-serif font-bold flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              Reset All Filters
            </button>
          )}
        </div>

        {/* Items Grid (Strictly NO PRICES) */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-5 border border-kaka-gold/40 shadow-sm hover:shadow-royal transition-all flex flex-col justify-between group hover:border-kaka-gold"
                >
                  <div>
                    {/* Top Row: Pure Veg Indicator & Jain Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded border border-sattvic-green p-0.5 flex items-center justify-center">
                          <span className="w-2 h-2 rounded-full bg-sattvic-green" />
                        </span>
                        <span className="text-[10px] font-bold text-sattvic-green uppercase tracking-wider">
                          100% PURE VEG
                        </span>
                      </div>

                      {item.isJain && (
                        <span
                          className="px-2 py-0.5 rounded text-[10px] font-black tracking-wide text-white bg-jain-amber border border-amber-600 shadow-sm"
                          title="Strict Jain Friendly Available"
                        >
                          JAIN [J]
                        </span>
                      )}
                    </div>

                    {/* Dish Name */}
                    <h3 className="text-base sm:text-lg font-serif font-bold text-kaka-charcoal leading-snug group-hover:text-kaka-terracotta transition-colors">
                      {item.name}
                    </h3>

                    {/* Ingredients Description */}
                    <p className="mt-1.5 text-xs text-kaka-charcoal/75 leading-relaxed font-sans line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action: WhatsApp Inquiry (NO PRICES) */}
                  <div className="mt-4 pt-3 border-t border-kaka-gold/20 flex items-center justify-between">
                    <span className="text-[11px] font-serif font-bold text-kaka-gold-dark flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-kaka-terracotta" />
                      Pure Desi Ghee
                    </span>

                    <a
                      href={`https://wa.me/917022470962?text=${encodeURIComponent(
                        `Namaste Kaka Cafe, I would like to inquire about ordering "${item.name}" from your menu.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-kaka-parchment hover:bg-kaka-ochre/30 text-kaka-terracotta hover:text-kaka-charcoal border border-kaka-gold/50 text-[11px] font-serif font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                      title="Inquire about this dish on WhatsApp"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>+ Inquire on WhatsApp</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border-2 border-dashed border-kaka-gold/60 max-w-md mx-auto space-y-3">
            <span className="text-4xl">🥘</span>
            <h3 className="text-lg font-serif font-bold text-kaka-charcoal">No Dishes Found</h3>
            <p className="text-xs text-kaka-charcoal/70">
              We couldn't find any dishes matching your current filter or search query.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setOnlyJain(false);
                onSelectCategory('all');
              }}
              className="mt-2 py-2 px-5 rounded-xl bg-kaka-terracotta text-white font-serif font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
