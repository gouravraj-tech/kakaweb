import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronRight, X, ArrowUpRight } from 'lucide-react';
import PolymorphicFoodFrame from './PolymorphicFoodFrame';

const OFFERING_TILES = [
  {
    id: 'rajasthani',
    categoryName: 'Royal Rajasthani Bhojan & Marwari Classics',
    h3: 'Traditional Rajasthani Cuisine & Marwadi Bhojanalaya Flavors',
    profile: 'Rooted in desert royalty; stone-ground spices, pure buttermilk, and aromatic hing slow-cooked with generations-old dignity.',
    image: '/assets/dal_bati_churma.webp',
    shape: 'jharokha',
    badge: 'Royal Desert Thali',
    dishes: [
      'Dal Bati Churma (6 Ghee Batis)',
      'Dudh Sev Tamatar [J]',
      'Sev Tamatar [J]',
      'Jaipuriya Papad Ki Sabzi [J]',
      'Rajasthani Besan Kadhi [J]',
      'Traditional Garlic Chutney & Mint Chutney',
      'Rajasthani Roasted Papad & Pickle',
      'Fresh Tawa Phulkas with Pure Ghee'
    ]
  },
  {
    id: 'paneer_curry',
    categoryName: 'Hearty Punjabi Rasoi & North Indian Curries',
    h3: 'Authentic Punjabi Food, Rich Paneer Gravies & Classic Dals',
    profile: 'Slow-simmered onion-tomato gravies, roasted cashew bases, and pure malai with bold punjabi tadka flavors.',
    image: '/assets/kaju_paneer.jpg',
    shape: 'handi',
    badge: 'Punjabi Tadka',
    dishes: [
      'Kaju Paneer [J]',
      'Kaju Curry [J]',
      'Kadai Paneer',
      'Paneer Butter Masala [J]',
      'Paneer Bhurji',
      'Matar Paneer',
      'Dal Special [J]',
      'Dal Tadka Punjabi [J]',
      'Veg Kolhapuri',
      'Mix Veg [J]',
      'Executive Thali Combo [J]'
    ]
  },
  {
    id: 'parathas',
    categoryName: 'Desi Ghee Tawa Parathas (Punjab De Parathe)',
    h3: 'Golden-Crusted Ghee Roasted Stuffed Parathas',
    profile: 'Hand-stuffed whole-wheat flatbreads roasted on heavy cast-iron tawas in pure desi ghee; served with thick curd, home butter, and pickle.',
    image: '/assets/ghee_paratha.jpg',
    shape: 'medallion',
    badge: 'Pure Desi Ghee Tawa',
    dishes: [
      "Kaka's Cheese Special Paratha [J]",
      "Kaka's Special Mixed Veg Paratha",
      'Cheese Paratha [J]',
      'Paneer Paratha [J]',
      'Garlic Paratha',
      'Gobi Paratha',
      'Aloo Paratha',
      'Aloo Pyaz Paratha',
      'Green Peas Paratha',
      'Corn Cheese Paratha [J]'
    ]
  },
  {
    id: 'starters',
    categoryName: 'Sindhi Starters, Munchies & Street Snacks',
    h3: 'Crispy Sindhi Pakwaan, Chaats & Evening Bites',
    profile: 'Handcrafted crunchy flatbreads, crispy corn delights, and comforting evening street-style bites paired with hot chai or coolers.',
    image: '/assets/crispy_starters_chaat.jpg',
    shape: 'jharokha',
    badge: 'Sindhi Heritage Snack',
    dishes: [
      'Dal Pakwaan (Crispy Ajwain Discs)',
      'Dahi Pakwaan (Yogurt & Sev)',
      'Cheese Grilled Sandwich [J]',
      'Peri Peri French Fries',
      'Crispy Corn [J]',
      'Cheese Masala Papad [J]',
      'Bhel Puri',
      'Desi Butter Veg Maggi'
    ]
  },
  {
    id: 'desserts',
    categoryName: 'Desi Chinese, Breads & Royal Desserts',
    h3: 'Wok Comfort, Fluffy Rices & Traditional Sweets',
    profile: 'Wok-tossed comforting rices paired with ancient wholesome desserts cooked in organic jaggery and pure ghee.',
    image: '/assets/gulab_jamun_dessert.jpg',
    shape: 'handi',
    badge: 'Jaggery Caramelized Dessert',
    dishes: [
      'Sindhi Shahi Gurari [J]',
      'Sindhi Gurari [J]',
      'Shahi Crunch with Rabri & Ice Cream [J]',
      'Traditional Churma [J]',
      'Paneer Fried Rice',
      'Veg Fried Rice',
      'Ghee Rice [J]',
      'Jeera Rice [J]',
      'Curd Rice'
    ]
  }
];

export default function OfferingsSection({ onSelectCategory }) {
  const [selectedTile, setSelectedTile] = useState(null);

  const handleTileClick = (tile) => {
    setSelectedTile(tile);
  };

  const handleGoToMenu = (categoryId) => {
    setSelectedTile(null);
    if (onSelectCategory) {
      onSelectCategory(categoryId);
    }
    const el = document.getElementById('menu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="offerings" className="py-20 px-4 md:px-8 bg-kaka-cream relative overflow-hidden">
      {/* Decorative Rajasthani jaali overlay */}
      <div className="absolute inset-0 bg-jaali-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kaka-ochre/20 text-kaka-charcoal text-xs font-serif font-bold uppercase tracking-wider border border-kaka-gold/50 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-kaka-terracotta" />
            <span>5 Polymorphic Culinary Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-kaka-charcoal tracking-tight">
            What We Offer: <span className="text-kaka-terracotta">A Royal Spread</span>
          </h2>

          <p className="text-sm md:text-base text-kaka-charcoal/80">
            Explore our curated spreads of authentic Marwari delicacies, Punjab de parathe, crisp Sindhi munchies, and caramelized royal desserts.
          </p>
        </div>

        {/* 5 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {OFFERING_TILES.map((tile, idx) => (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-kaka-parchment/60 rounded-3xl p-6 border-2 border-kaka-gold/50 shadow-royal hover:shadow-royal-hover transition-all flex flex-col justify-between group ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Polymorphic Food Frame inside each tile */}
                <div className="mb-5">
                  <PolymorphicFoodFrame
                    src={tile.image}
                    alt={tile.categoryName}
                    shape={tile.shape}
                    badgeText={tile.badge}
                    aspectRatio="aspect-[16/10]"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-serif font-bold uppercase tracking-widest text-kaka-terracotta">
                    Pillar 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-kaka-charcoal leading-snug group-hover:text-kaka-terracotta transition-colors">
                    {tile.categoryName}
                  </h3>
                  <h4 className="text-xs font-serif font-semibold text-kaka-gold-dark italic">
                    {tile.h3}
                  </h4>
                  <p className="text-xs text-kaka-charcoal/80 leading-relaxed font-sans pt-1">
                    {tile.profile}
                  </p>
                </div>
              </div>

              {/* Inclusions summary preview */}
              <div className="mt-5 pt-4 border-t border-kaka-gold/30">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleTileClick(tile)}
                    className="text-xs font-serif font-bold text-kaka-terracotta hover:text-kaka-terracotta-dark flex items-center gap-1 group-hover:underline"
                  >
                    <span>View Signature Inclusions</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleGoToMenu(tile.id)}
                    className="p-2 rounded-xl bg-kaka-ochre/20 hover:bg-kaka-ochre text-kaka-charcoal transition-colors border border-kaka-gold/40"
                    title="View in Menu"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Signature Inclusions Pop-up Modal */}
      <AnimatePresence>
        {selectedTile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-kaka-charcoal/80 backdrop-blur-sm">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTile(null)}
            />

            <motion.div
              className="relative w-full max-w-xl bg-kaka-cream rounded-3xl border-2 border-kaka-gold shadow-2xl overflow-hidden z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="bg-gradient-to-r from-kaka-ochre to-[#F5AC18] p-6 border-b-2 border-kaka-gold flex items-center justify-between">
                <div>
                  <span className="text-xs font-serif font-bold uppercase tracking-wider text-kaka-charcoal">
                    Signature Culinary Offerings
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-black text-kaka-charcoal">
                    {selectedTile.categoryName}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedTile(null)}
                  className="p-2 rounded-full hover:bg-black/10 text-kaka-charcoal transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                <p className="text-xs sm:text-sm text-kaka-charcoal/85 leading-relaxed bg-kaka-parchment p-3.5 rounded-xl border border-kaka-gold/30">
                  {selectedTile.profile}
                </p>

                <div>
                  <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-kaka-terracotta mb-2.5">
                    Included Signature Delicacies:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedTile.dishes.map((dish, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-white border border-kaka-gold/30 text-xs font-medium text-kaka-charcoal flex items-center gap-2 shadow-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-sattvic-green shrink-0" />
                        <span>{dish}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-end gap-3 border-t border-kaka-gold/30">
                  <button
                    onClick={() => handleGoToMenu(selectedTile.id)}
                    className="py-2.5 px-5 rounded-xl bg-kaka-terracotta text-white font-serif font-bold text-xs shadow-md hover:bg-kaka-terracotta-dark transition-colors flex items-center gap-1.5"
                  >
                    <span>Open in Menu Catalog</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
