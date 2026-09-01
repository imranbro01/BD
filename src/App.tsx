import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { 
  TourPackage, 
  Booking, 
  Review, 
  InquiryMessage, 
  ThemeMode, 
  TourCategory 
} from './types';
import { 
  initialTourPackages, 
  initialBookings, 
  initialReviews, 
  initialInquiries 
} from './data/packagesData';

// Components
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PackageCard } from './components/PackageCard';
import { PackageDetailModal } from './components/PackageDetailModal';
import { BookingModal } from './components/BookingModal';
import { BookingVoucherModal } from './components/BookingVoucherModal';
import { YouTubeVideoSection } from './components/YouTubeVideoSection';
import { NaturalWondersSection } from './components/NaturalWondersSection';
import { HistoricalPlacesSection } from './components/HistoricalPlacesSection';
import { CustomTourPlanner } from './components/CustomTourPlanner';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { AuthModal } from './components/AuthModal';
import { UserDashboard } from './components/UserDashboard';
import { AdminDashboard } from './components/AdminDashboard';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

// Icons
import { 
  Compass, 
  Sparkles, 
  Filter, 
  ArrowUpDown, 
  TreePine, 
  Landmark, 
  Search,
  CheckCircle2,
  Calendar
} from 'lucide-react';

function MainAppContent() {
  const { language, t, formatCurrency, formatNumber } = useLanguage();
  const { user, isAdmin, isLoggedIn } = useAuth();

  // Global Theme State
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('cholo_ghuri_theme');
    return (saved === 'dark' || saved === 'light') ? saved : 'light';
  });

  // Apply dark mode class to document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('cholo_ghuri_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Active View / Section
  const [activeSection, setActiveSection] = useState<string>('home');

  // App Data State (stored & modifiable by Admin)
  const [tourPackages, setTourPackages] = useState<TourPackage[]>(() => {
    const saved = localStorage.getItem('cholo_ghuri_tours');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return initialTourPackages;
  });

  const [bookings, setBookings] = useState<Booking[]>(() => {
    const saved = localStorage.getItem('cholo_ghuri_bookings');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* fallback */ }
    }
    return initialBookings;
  });

  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [inquiries, setInquiries] = useState<InquiryMessage[]>(initialInquiries);
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('cholo_ghuri_wishlist');
    return saved ? JSON.parse(saved) : ['cgb_sajek_01', 'cgb_sundarban_01'];
  });

  // Persist tours & bookings
  useEffect(() => {
    localStorage.setItem('cholo_ghuri_tours', JSON.stringify(tourPackages));
  }, [tourPackages]);

  useEffect(() => {
    localStorage.setItem('cholo_ghuri_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('cholo_ghuri_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Modals & Selected items
  const [selectedTourForDetail, setSelectedTourForDetail] = useState<TourPackage | null>(null);
  const [selectedTourForBooking, setSelectedTourForBooking] = useState<TourPackage | null>(null);
  const [selectedBookingForVoucher, setSelectedBookingForVoucher] = useState<Booking | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authDefaultTab, setAuthDefaultTab] = useState<'customer' | 'admin' | 'register'>('customer');

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TourCategory>('all');
  const [sortBy, setSortBy] = useState<'recommended' | 'price_asc' | 'price_desc' | 'rating'>('recommended');

  // Wishlist handler
  const handleToggleWishlist = (tourId: string) => {
    setWishlist(prev => 
      prev.includes(tourId) ? prev.filter(id => id !== tourId) : [...prev, tourId]
    );
  };

  // Booking handlers
  const handleOpenBookingModal = (tour: TourPackage) => {
    setSelectedTourForDetail(null);
    setSelectedTourForBooking(tour);
  };

  const handleBookingCreated = (newBooking: Booking) => {
    setBookings(prev => [newBooking, ...prev]);
    setSelectedBookingForVoucher(newBooking);
  };

  // Inquiry message handler
  const handleSendMessage = (msg: InquiryMessage) => {
    setInquiries(prev => [msg, ...prev]);
  };

  // Custom tour inquiry handler
  const handleCustomTourInquiry = (customData: any) => {
    const newInq: InquiryMessage = {
      id: 'inq_custom_' + Date.now(),
      name: `Custom Tour Lead (${customData.destination})`,
      phone: customData.contactPhone,
      email: 'custom@traveler.com',
      subject: `Custom Tour: ${customData.destination} (${customData.travelers} Pax)`,
      message: `Duration: ${customData.durationDays} Days, Transport: ${customData.transport}, Hotel: ${customData.hotel}, Estimated Total: BDT ${customData.estimatedCost}. Note: ${customData.notes || 'None'}`,
      createdAt: new Date().toISOString().split('T')[0],
      isRead: false,
    };
    setInquiries(prev => [newInq, ...prev]);
  };

  // Admin Mutations
  const handleAddTour = (newTour: TourPackage) => {
    setTourPackages(prev => [newTour, ...prev]);
  };

  const handleUpdateTour = (updatedTour: TourPackage) => {
    setTourPackages(prev => prev.map(t => t.id === updatedTour.id ? updatedTour : t));
  };

  const handleDeleteTour = (tourId: string) => {
    setTourPackages(prev => prev.filter(t => t.id !== tourId));
  };

  const handleUpdateBookingStatus = (bookingId: string, status: Booking['bookingStatus']) => {
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, bookingStatus: status } : b));
  };

  // Filtered and Sorted Tour Packages
  const filteredPackages = tourPackages
    .filter(tour => {
      // Category filter
      if (selectedCategory !== 'all' && tour.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = tour.titleEn.toLowerCase().includes(q) || tour.titleBn.includes(q);
        const matchDistrict = tour.districtEn.toLowerCase().includes(q) || tour.districtBn.includes(q);
        const matchHighlights = tour.highlightsEn.some(h => h.toLowerCase().includes(q)) || tour.highlightsBn.some(h => h.includes(q));
        if (!matchTitle && !matchDistrict && !matchHighlights) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'price_asc') return a.priceDiscounted - b.priceDiscounted;
      if (sortBy === 'price_desc') return b.priceDiscounted - a.priceDiscounted;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // recommended
    });

  // Navigate to section
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'user-dashboard' || sectionId === 'admin-dashboard') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(`${sectionId}-section`) || document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenAuth = (tab: 'customer' | 'admin' | 'register' = 'customer') => {
    setAuthDefaultTab(tab);
    setAuthModalOpen(true);
  };

  // If on Admin Dashboard view
  if (activeSection === 'admin-dashboard' && isAdmin) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
        <AdminDashboard
          tours={tourPackages}
          bookings={bookings}
          inquiries={inquiries}
          onAddTour={handleAddTour}
          onUpdateTour={handleUpdateTour}
          onDeleteTour={handleDeleteTour}
          onUpdateBookingStatus={handleUpdateBookingStatus}
          onBackToHome={() => setActiveSection('home')}
          onSelectBooking={(b) => setSelectedBookingForVoucher(b)}
        />
        {/* Voucher Modal */}
        <BookingVoucherModal
          booking={selectedBookingForVoucher}
          isOpen={!!selectedBookingForVoucher}
          onClose={() => setSelectedBookingForVoucher(null)}
        />
      </div>
    );
  }

  // If on User Dashboard view
  if (activeSection === 'user-dashboard') {
    const wishlistTourObjects = tourPackages.filter(t => wishlist.includes(t.id));
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans">
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          activeSection={activeSection}
          onNavigate={handleNavigate}
          onOpenAuth={handleOpenAuth}
          wishlistCount={wishlist.length}
        />
        <UserDashboard
          bookings={bookings}
          wishlistTours={wishlistTourObjects}
          onSelectBooking={(b) => setSelectedBookingForVoucher(b)}
          onSelectTour={(t) => setSelectedTourForDetail(t)}
          onBookTour={(t) => handleOpenBookingModal(t)}
          onBackToHome={() => setActiveSection('home')}
          onToggleWishlist={handleToggleWishlist}
        />
        {/* Modals */}
        <BookingVoucherModal
          booking={selectedBookingForVoucher}
          isOpen={!!selectedBookingForVoucher}
          onClose={() => setSelectedBookingForVoucher(null)}
        />
        <PackageDetailModal
          tour={selectedTourForDetail}
          isOpen={!!selectedTourForDetail}
          onClose={() => setSelectedTourForDetail(null)}
          onBookNow={handleOpenBookingModal}
          isWishlisted={selectedTourForDetail ? wishlist.includes(selectedTourForDetail.id) : false}
          onToggleWishlist={handleToggleWishlist}
        />
        <BookingModal
          tour={selectedTourForBooking}
          isOpen={!!selectedTourForBooking}
          onClose={() => setSelectedTourForBooking(null)}
          onBookingSuccess={handleBookingCreated}
        />
        <FloatingWhatsApp />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:text-emerald-200">
      
      {/* 1. Global Navigation Bar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenAuth={handleOpenAuth}
        wishlistCount={wishlist.length}
      />

      {/* 2. Scenic Hero Section */}
      <HeroSection
        onSearch={(query, cat) => {
          setSearchQuery(query);
          setSelectedCategory(cat);
          const pkgSection = document.getElementById('packages-section');
          if (pkgSection) pkgSection.scrollIntoView({ behavior: 'smooth' });
        }}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          const pkgSection = document.getElementById('packages-section');
          if (pkgSection) pkgSection.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenCustomPlanner={() => handleNavigate('custom-tour')}
      />

      {/* 3. Main Tour Packages Catalog Section */}
      <section id="packages-section" className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Title & Filter Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
              <Compass className="w-3.5 h-3.5" />
              <span>{t('packagesBadge')}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              {t('packagesTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              {t('packagesDesc')}
            </p>
          </div>

          {/* Sorting and Search Indicator */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold">
              <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl outline-none text-xs font-bold cursor-pointer"
              >
                <option value="recommended">{language === 'bn' ? 'প্রস্তাবিত জনপ্রিয়' : 'Recommended'}</option>
                <option value="price_asc">{language === 'bn' ? 'বাজেট: কম থেকে বেশি' : 'Price: Low to High'}</option>
                <option value="price_desc">{language === 'bn' ? 'বাজেট: বেশি থেকে কম' : 'Price: High to Low'}</option>
                <option value="rating">{language === 'bn' ? 'সর্বোচ্চ রেটিং' : 'Highest Rating'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          {[
            { id: 'all', label: t('catAll') },
            { id: 'natural', label: t('catNatural') },
            { id: 'historical', label: t('catHistorical') },
            { id: 'beach', label: t('catBeach') },
            { id: 'hill', label: t('catHill') },
            { id: 'haor', label: t('catHaor') },
            { id: 'daytrip', label: t('catDaytrip') },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as TourCategory)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/20'
                  : 'bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Notice if Active */}
        {searchQuery && (
          <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between text-xs">
            <span className="text-neutral-700 dark:text-neutral-300">
              {language === 'bn' ? 'অনুসন্ধান ফলাফল:' : 'Showing search results for:'} <strong>"{searchQuery}"</strong> ({formatNumber(filteredPackages.length)} {language === 'bn' ? 'টি প্যাকেজ' : 'packages found'})
            </span>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-rose-500 hover:underline font-bold"
            >
              {language === 'bn' ? 'রিসেট করুন' : 'Clear Search'}
            </button>
          </div>
        )}

        {/* Tour Cards Grid */}
        {filteredPackages.length === 0 ? (
          <div className="text-center py-16 bg-neutral-50 dark:bg-neutral-900/50 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-3">
            <Search className="w-12 h-12 text-neutral-400 mx-auto" />
            <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-200">
              {language === 'bn' ? 'কোনো ট্যুর প্যাকেজ খুঁজে পাওয়া যায়নি' : 'No Tour Packages Match Your Filter'}
            </h3>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-xl"
            >
              {language === 'bn' ? 'সব প্যাকেজ দেখুন' : 'Reset All Filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((tour) => (
              <PackageCard
                key={tour.id}
                tour={tour}
                onSelect={(t) => setSelectedTourForDetail(t)}
                onBookNow={(t) => handleOpenBookingModal(t)}
                isWishlisted={wishlist.includes(tour.id)}
                onToggleWishlist={handleToggleWishlist}
              />
            ))}
          </div>
        )}

      </section>

      {/* 4. Natural Wonders Spotlight Section */}
      <NaturalWondersSection
        tours={tourPackages}
        onSelectTour={(t) => setSelectedTourForDetail(t)}
        onBookNow={(t) => handleOpenBookingModal(t)}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* 5. Direct YouTube Video Showcase Section */}
      <YouTubeVideoSection
        onNavigateToTour={(dest) => {
          setSearchQuery(dest);
          const pkgSection = document.getElementById('packages-section');
          if (pkgSection) pkgSection.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 6. Historical & Cultural Heritage Places Spotlight */}
      <HistoricalPlacesSection
        tours={tourPackages}
        onSelectTour={(t) => setSelectedTourForDetail(t)}
        onBookNow={(t) => handleOpenBookingModal(t)}
        wishlist={wishlist}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* 6. Interactive Custom Tour Planner & Budget Calculator */}
      <CustomTourPlanner
        onSubmitInquiry={handleCustomTourInquiry}
      />

      {/* 7. Verified Reviews & Testimonials Section */}
      <ReviewsSection
        reviews={reviews}
        onAddReview={(newRev) => setReviews(prev => [newRev, ...prev])}
      />

      {/* 8. Contact & Hotline Section (01312816223 / eleashahmed6223@gmail.com) */}
      <ContactSection
        onSendMessage={handleSendMessage}
      />

      {/* 9. Official Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAuth={handleOpenAuth}
      />

      {/* 10. Floating WhatsApp Chat Widget (01312816223) */}
      <FloatingWhatsApp />

      {/* 11. Interactive Modals */}
      {/* Tour Details Modal */}
      <PackageDetailModal
        tour={selectedTourForDetail}
        isOpen={!!selectedTourForDetail}
        onClose={() => setSelectedTourForDetail(null)}
        onBookNow={handleOpenBookingModal}
        isWishlisted={selectedTourForDetail ? wishlist.includes(selectedTourForDetail.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* Booking Form Modal */}
      <BookingModal
        tour={selectedTourForBooking}
        isOpen={!!selectedTourForBooking}
        onClose={() => setSelectedTourForBooking(null)}
        onBookingSuccess={handleBookingCreated}
      />

      {/* Digital Printable Voucher Modal */}
      <BookingVoucherModal
        booking={selectedBookingForVoucher}
        isOpen={!!selectedBookingForVoucher}
        onClose={() => setSelectedBookingForVoucher(null)}
      />

      {/* Login / Register / Admin Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultTab={authDefaultTab}
      />

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <MainAppContent />
      </AuthProvider>
    </LanguageProvider>
  );
}
