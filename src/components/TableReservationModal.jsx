import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function TableReservationModal({ isOpen, onClose }) {
  const [guestName, setGuestName] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('2-4 Guests');
  const [seating, setSeating] = useState('Garden Patio (Gravel Seating)');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('1:00 PM');
  const [dietary, setDietary] = useState('Standard Pure Veg');

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    const text = `Namaste Kaka Cafe! 🪑\n\nI would like to reserve a table at Kaka Cafe Yelahanka:\n\n• Name: ${guestName}\n• Phone: ${phone}\n• Party Size: ${guests}\n• Seating Preference: ${seating}\n• Date: ${date || 'Today'}\n• Time: ${time}\n• Dietary Preference: ${dietary}\n\nPlease confirm availability. Thank you!`;

    const url = `https://wa.me/917022470962?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-kaka-charcoal/80 backdrop-blur-md">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-lg bg-kaka-cream rounded-3xl border-2 border-kaka-gold shadow-2xl overflow-hidden z-10"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
          >
            <div className="bg-gradient-to-r from-kaka-charcoal via-[#2A1D18] to-kaka-charcoal p-6 border-b-2 border-kaka-gold flex items-center justify-between text-kaka-cream">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-kaka-ochre/20 text-kaka-ochre border border-kaka-gold/40">
                  <Calendar className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[10px] font-serif font-bold uppercase tracking-widest text-kaka-ochre">
                    DINE-IN RESERVATION
                  </span>
                  <h3 className="text-xl font-serif font-black text-kaka-cream">
                    Reserve a Table at Kaka Cafe
                  </h3>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-white/10 text-kaka-parchment transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-kaka-charcoal mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Gupta"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-kaka-gold/50 focus:border-kaka-terracotta text-xs sm:text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-kaka-charcoal mb-1">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-kaka-gold/50 focus:border-kaka-terracotta text-xs sm:text-sm outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-kaka-charcoal mb-1">
                    Table Size *
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-kaka-gold/50 focus:border-kaka-terracotta text-xs sm:text-sm outline-none"
                  >
                    <option>1-2 Guests (Couples / Solo)</option>
                    <option>2-4 Guests (Family / Friends)</option>
                    <option>5-8 Guests (Small Group)</option>
                    <option>9-14 Guests (Large Group)</option>
                    <option>15+ Guests (See Micro-Events)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-kaka-charcoal mb-1">
                    Seating Preference
                  </label>
                  <select
                    value={seating}
                    onChange={(e) => setSeating(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-kaka-gold/50 focus:border-kaka-terracotta text-xs sm:text-sm outline-none"
                  >
                    <option>Garden Patio (Gravel & Red Umbrellas)</option>
                    <option>Indoor Haveli Hall</option>
                    <option>First Available Table</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-kaka-charcoal mb-1">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-kaka-gold/50 focus:border-kaka-terracotta text-xs sm:text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-kaka-charcoal mb-1">
                    Time *
                  </label>
                  <input
                    type="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-kaka-gold/50 focus:border-kaka-terracotta text-xs sm:text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-kaka-charcoal mb-1">
                  Dietary Mandate
                </label>
                <select
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-kaka-gold/50 focus:border-kaka-terracotta text-xs sm:text-sm outline-none"
                >
                  <option>Standard Pure Veg (Desi Ghee)</option>
                  <option>Strict Jain [J] (No Onion, Garlic, Roots)</option>
                  <option>Vegan (100% Plant-Based / Dairy-Free)</option>
                </select>
              </div>

              <p className="text-[11px] text-kaka-charcoal/70 bg-kaka-parchment p-3 rounded-xl border border-kaka-gold/30">
                ✨ Instant confirmation via WhatsApp. Open 10:00 AM – 10:00 PM every day beside Sobha Althea, Yelahanka.
              </p>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-kaka-terracotta to-kaka-terracotta-dark text-white font-serif font-bold text-sm shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-kaka-ochre" />
                <span>Confirm Reservation via WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
