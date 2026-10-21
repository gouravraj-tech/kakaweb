import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, Flame, Award, Heart, ShieldCheck } from 'lucide-react';
import PolymorphicFoodFrame from './PolymorphicFoodFrame';

const MUST_TRY_ITEMS = [
  {
    id: 1,
    title: 'The Royal Dal Bati Churma Thali',
    badge: '👑 #1 Signature Masterpiece',
    isJain: true,
    jainLabel: 'Strict Jain Friendly [J] Available',
    description: 'Hand-baked golden whole-wheat batis crushed and soaked in pure hot desi ghee, served with our signature slow-simmered panchmel dal, fiery red garlic chutney, cooling raw onion rings, fresh lemon wedges, and rich, sweet churma.',
    image: '/assets/dal_bati_churma.webp',
    shape: 'jharokha',
    dietaryNote: '100% pure desi ghee, zero palm oil. Jain preparation prepared without onion and garlic.',
    whatsappMsg: 'Namaste Kaka Cafe, I would like to order the Royal Dal Bati Churma Thali.'
  },
  {
    id: 2,
    title: 'Dudh Sev Tamatar & Fresh Ghee Rotis',
    badge: '🌟 Marwari Household Treasure',
    isJain: true,
    jainLabel: 'Highly Recommended in Jain [J]',
    description: 'Thick, spicy Ratlami sev gently simmered in a velvety, milk-infused tomato gravy delicately tempered with cumin, turmeric, and royal spices. Paired with hot, puffed ghee rotis.',
    image: '/assets/dudh_sev_tamatar.jpg',
    shape: 'handi',
    dietaryNote: 'Authentic Marwari household recipe rarely found in commercial restaurants.',
    whatsappMsg: 'Namaste Kaka Cafe, I would like to order Dudh Sev Tamatar with Fresh Ghee Rotis.'
  },
  {
    id: 3,
    title: "Kaka’s Cheese Special Paratha",
    badge: '🧀 Melty Comfort Hero',
    isJain: true,
    jainLabel: 'Jain Friendly [J] Available',
    description: 'Generously stuffed with a spiced blend of premium cheeses, herbs, and mild green chillies, roasted to crisp golden perfection on cast iron in pure desi ghee. Served with chilled set curd, home-style pickle, and fresh butter.',
    image: '/assets/cheese_paratha_melt.jpg',
    shape: 'medallion',
    dietaryNote: 'Cast-iron tawa roasted with generous dollop of fresh white butter.',
    whatsappMsg: "Namaste Kaka Cafe, I would like to order Kaka's Cheese Special Paratha."
  },
  {
    id: 4,
    title: 'Dal Pakwaan',
    badge: '🌿 Quintessential Sindhi Classic',
    isJain: false,
    jainLabel: null,
    description: 'Two large, handcrafted crispy flatbreads seasoned with ajwain and black pepper, served alongside a bowl of tempered chana dal topped with sweet tamarind chutney, green mint sauce, and chopped onions.',
    image: '/assets/dal_pakwaan.jpg',
    shape: 'jharokha',
    dietaryNote: 'Crunchy savory afternoon and evening comfort snack.',
    whatsappMsg: 'Namaste Kaka Cafe, I would like to order Dal Pakwaan.'
  },
  {
    id: 5,
    title: 'Sindhi Shahi Gurari',
    badge: '🍯 Ancient Royal Dessert',
    isJain: true,
    jainLabel: 'Strict Jain Friendly [J]',
    description: 'Ancient wholesome dessert: whole-wheat dough stuffed with organic jaggery, crushed almonds, cashews, and cardamom, roasted gently with pure ghee until the jaggery caramelizes into sweet indulgence.',
    image: '/assets/shahi_gurari.jpg',
    shape: 'handi',
    dietaryNote: 'Rich, natural sweetness crafted with unrefined organic jaggery and pure ghee.',
    whatsappMsg: 'Namaste Kaka Cafe, I would like to order Sindhi Shahi Gurari dessert.'
  }
];

export default function MustTrySection() {
  return (
    <section id="must-try" className="py-20 px-4 md:px-8 bg-gradient-to-b from-kaka-cream via-kaka-parchment to-kaka-cream relative overflow-hidden">
      {/* Decorative background jaali overlay */}
      <div className="absolute inset-0 bg-jaali-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-kaka-terracotta/15 text-kaka-terracotta text-xs font-serif font-bold uppercase tracking-wider border border-kaka-terracotta/30 shadow-sm">
            <Award className="w-4 h-4 text-kaka-terracotta" />
            <span>Chef's Hall of Fame</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-kaka-charcoal tracking-tight">
            5 Signature <span className="gold-gradient-text">Must-Try Delicacies</span>
          </h2>

          <p className="text-sm md:text-base text-kaka-charcoal/80">
            Handpicked best sellers that showcase the pure ghee soul of our kitchen. Cooked fresh, served piping hot, and loved by hundreds across Bangalore.
          </p>
        </div>

        {/* 5 Best Seller Cards */}
        <div className="space-y-12">
          {MUST_TRY_ITEMS.map((item, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`bg-white rounded-3xl p-6 sm:p-8 border-2 border-kaka-gold/60 shadow-royal hover:shadow-royal-hover transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Food Image with Polymorphic Frame */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <PolymorphicFoodFrame
                    src={item.image}
                    alt={item.title}
                    shape={item.shape}
                    badgeText="Pure Desi Ghee"
                    isJain={item.isJain}
                    aspectRatio="aspect-[4/3]"
                  />
                </div>

                {/* Content Details */}
                <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-kaka-ochre/25 text-kaka-charcoal font-serif font-bold text-xs border border-kaka-gold/60">
                      {item.badge}
                    </span>

                    {item.jainLabel && (
                      <span className="px-3 py-1 rounded-full bg-jain-amber/15 text-jain-amber font-bold text-xs border border-jain-amber/30 flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        {item.jainLabel}
                      </span>
                    )}

                    <span className="px-2.5 py-1 rounded-full bg-sattvic-green/10 text-sattvic-green font-bold text-xs border border-sattvic-green/20">
                      🌿 100% Pure Veg
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-black text-kaka-charcoal leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-kaka-charcoal/85 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  <div className="p-3 bg-kaka-parchment/60 rounded-xl border border-kaka-gold/30 text-xs text-kaka-charcoal/80 flex items-center gap-2 font-medium">
                    <Flame className="w-4 h-4 text-kaka-terracotta shrink-0" />
                    <span>{item.dietaryNote}</span>
                  </div>

                  {/* WhatsApp Order Button */}
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/917022470962?text=${encodeURIComponent(item.whatsappMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-kaka-terracotta to-kaka-terracotta-dark text-white font-serif font-bold text-sm shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-4 h-4 text-kaka-ochre" />
                      <span>Inquire & Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
