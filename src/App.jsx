import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroDashboard from './components/HeroDashboard';
import AboutSection from './components/AboutSection';
import OfferingsSection from './components/OfferingsSection';
import MustTrySection from './components/MustTrySection';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import EventsAndCateringSection from './components/EventsAndCateringSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TableReservationModal from './components/TableReservationModal';
import KakaGroupModal from './components/KakaGroupModal';
import OrderOnlineModal from './components/OrderOnlineModal';
import MobileStickyDock from './components/MobileStickyDock';

export default function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isKakaGroupOpen, setIsKakaGroupOpen] = useState(false);
  const [isOrderOnlineOpen, setIsOrderOnlineOpen] = useState(false);
  const [selectedMenuCategory, setSelectedMenuCategory] = useState('all');

  const handleSelectCategory = (categoryId) => {
    setSelectedMenuCategory(categoryId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1A1412] font-sans antialiased selection:bg-[#FAB818] selection:text-[#1A1412]">
      {/* 1. Transparent Sticky Top Navbar (Always shows logo + clean links + Order Online) */}
      <Navbar onOpenOrderOnline={() => setIsOrderOnlineOpen(true)} />

      {/* 2. Full 100vh Hero Dashboard with Two Glassmorphism Hover Tiles, 3 Buttons & Down-Middle Info Bar */}
      <HeroDashboard
        onOpenKakaGroup={() => setIsKakaGroupOpen(true)}
        onOpenOrderOnline={() => setIsOrderOnlineOpen(true)}
      />

      {/* 3. Main Sections */}
      <main className="flex-1">
        {/* About: Heritage Brand Story & The Moustache */}
        <AboutSection />

        {/* 5 Polymorphic Category Offerings */}
        <OfferingsSection onSelectCategory={handleSelectCategory} />

        {/* Must-Try Best Sellers */}
        <MustTrySection />

        {/* Complete Shahi Menu Catalog (Strictly Zero Prices) */}
        <MenuSection
          selectedCategory={selectedMenuCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Gallery & Verified Google Reviews (4.8 Stars) */}
        <GallerySection />

        {/* Micro-Events (15-60 Guests) & The Kaka Group Outdoor Catering */}
        <EventsAndCateringSection onOpenKakaGroup={() => setIsKakaGroupOpen(true)} />

        {/* Contact, Directions & Local Hub */}
        <ContactSection
          onOpenReservation={() => setIsReservationOpen(true)}
          onOpenKakaGroup={() => setIsKakaGroupOpen(true)}
        />
      </main>

      {/* 4. Midnight Haveli Slate Footer */}
      <Footer onOpenKakaGroup={() => setIsKakaGroupOpen(true)} />

      {/* 5. Sticky Bottom Dock for Mobile Viewports under 768px */}
      <MobileStickyDock
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenOrderOnline={() => setIsOrderOnlineOpen(true)}
      />

      {/* Interactive Modals */}
      <TableReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      <KakaGroupModal
        isOpen={isKakaGroupOpen}
        onClose={() => setIsKakaGroupOpen(false)}
      />

      <OrderOnlineModal
        isOpen={isOrderOnlineOpen}
        onClose={() => setIsOrderOnlineOpen(false)}
      />
    </div>
  );
}
