import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Flame, ShieldCheck } from 'lucide-react';

const SHAPE_STYLES = {
  jharokha: 'clip-jharokha-full rounded-b-2xl',
  handi: 'clip-handi rounded-3xl',
  medallion: 'rounded-[38%_62%_63%_37%_/_41%_44%_56%_59%]',
  scalloped: 'clip-jharokha rounded-b-3xl'
};

export default function PolymorphicFoodFrame({
  src,
  alt = 'Kaka Cafe Delicacy',
  shape = 'jharokha',
  badgeText = 'Pure Desi Ghee',
  badgeColor = 'gold', // 'gold' | 'jain' | 'veg'
  className = '',
  onClick,
  isJain = false,
  aspectRatio = 'aspect-[4/3]'
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const fallbackSrc = '/assets/royal_thali_spread.webp';
  const displaySrc = imgError || !src ? fallbackSrc : src;

  return (
    <motion.div
      className={`relative group cursor-pointer select-none ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      layout
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20
      }}
    >
      {/* Decorative Gold Filigree Backdrop Shadow & Halo */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-kaka-gold/30 via-kaka-terracotta/20 to-kaka-ochre/30 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500 -z-10"
        animate={{
          rotate: isHovered ? 4 : 0,
          scale: isHovered ? 1.03 : 1
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      />

      {/* Spice Vapor / Steam Particle Animation on Hover */}
      <AnimatePresence>
        {isHovered && (
          <div className="absolute -top-7 inset-x-0 flex justify-center items-center pointer-events-none z-20 space-x-3">
            <motion.span
              initial={{ opacity: 0, y: 10, scale: 0.6 }}
              animate={{ opacity: 0.8, y: -16, scale: 1.1 }}
              exit={{ opacity: 0, y: -26 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeOut' }}
              className="text-xs bg-kaka-charcoal/80 text-kaka-ochre px-2.5 py-0.5 rounded-full border border-kaka-gold/40 shadow-md backdrop-blur-sm flex items-center gap-1 font-serif font-semibold"
            >
              <Flame className="w-3 h-3 text-kaka-terracotta animate-pulse" /> Desi Ghee Aroma
            </motion.span>
          </div>
        )}
      </AnimatePresence>

      {/* Main Container with dynamic spring morphing */}
      <motion.div
        className={`relative overflow-hidden w-full ${aspectRatio} border-2 border-kaka-gold/60 bg-kaka-parchment shadow-royal group-hover:shadow-royal-hover group-hover:border-kaka-gold transition-all duration-300 ${
          isHovered ? SHAPE_STYLES.scalloped : SHAPE_STYLES[shape] || SHAPE_STYLES.jharokha
        }`}
        animate={{
          scale: isHovered ? 1.04 : 1
        }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20
        }}
      >
        {/* Actual Image with subtle zoom on hover */}
        <motion.img
          src={displaySrc}
          alt={alt}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center"
          animate={{
            scale: isHovered ? 1.08 : 1
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          loading="lazy"
        />

        {/* Shimmer / Vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-kaka-charcoal/70 via-transparent to-black/20 pointer-events-none" />

        {/* Corner filigree star accents */}
        <div className="absolute top-2 left-2 pointer-events-none text-kaka-gold opacity-75">
          <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '10s' }} />
        </div>

        {/* Dietary Badges */}
        <div className="absolute bottom-2.5 inset-x-2.5 flex items-center justify-between pointer-events-none gap-2">
          {badgeText && (
            <motion.span
              className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold rounded-full backdrop-blur-md shadow-sm border border-white/20 text-white bg-gradient-to-r from-kaka-terracotta to-kaka-terracotta-dark"
              animate={{ y: isHovered ? -2 : 0 }}
            >
              <ShieldCheck className="w-3 h-3 text-kaka-ochre" />
              {badgeText}
            </motion.span>
          )}

          {isJain && (
            <span
              className="px-2 py-0.5 text-[10px] font-black tracking-wide rounded-md border border-jain-amber/40 shadow-sm text-white bg-gradient-to-r from-jain-amber to-amber-600"
              title="Strict Jain Friendly Available"
            >
              JAIN [J]
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
