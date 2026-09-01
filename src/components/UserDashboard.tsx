import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Printer, 
  CheckCircle, 
  Clock, 
  Heart, 
  Compass, 
  ArrowLeft, 
  Sparkles,
  DollarSign
} from 'lucide-react';
import { Booking, TourPackage } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { PackageCard } from './PackageCard';

interface UserDashboardProps {
  bookings: Booking[];
  wishlistTours: TourPackage[];
  onSelectBooking: (booking: Booking) => void;
  onSelectTour: (tour: TourPackage) => void;
  onBookTour: (tour: TourPackage) => void;
  onBackToHome: () => void;
  onToggleWishlist: (tourId: string) => void;
}

export const UserDashboard: React.FC<UserDashboardProps> = ({
  bookings,
  wishlistTours,
  onSelectBooking,
  onSelectTour,
  onBookTour,
  onBackToHome,
  onToggleWishlist,
}) => {
  const { language, t, formatCurrency, formatNumber } = useLanguage();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'bookings' | 'wishlist' | 'profile'>('bookings');

  // Filter bookings for this user if available
  const userBookings = bookings;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Breadcrumb / Return */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{language === 'bn' ? 'হোমপেজে ফিরে যান' : 'Back to Home'}</span>
          </button>

          <span className="text-xs text-neutral-500 font-mono">
            {language === 'bn' ? 'ভ্রমণকারী পোর্টাল' : 'Traveler Portal'}
          </span>
        </div>

        {/* User Banner Header */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-800 to-teal-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'}
              alt={user?.name}
              className="w-16 h-16 rounded-2xl object-cover ring-2 ring-emerald-400"
              referrerPolicy="no-referrer"
            />
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-200 text-[10px] font-bold">
                <Sparkles className="w-3 h-3" />
                <span>Verified Traveler</span>
              </div>
              <h1 className="text-xl sm:text-2xl font-extrabold">{user?.name || 'Valued Traveler'}</h1>
              <p className="text-xs text-emerald-200">{user?.email} • {user?.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 bg-white/10 rounded-2xl backdrop-blur-md text-center">
              <span className="text-[10px] uppercase text-emerald-200 block">Total Tours</span>
              <span className="text-lg font-bold font-mono">{formatNumber(userBookings.length)}</span>
            </div>
            <div className="px-4 py-2 bg-white/10 rounded-2xl backdrop-blur-md text-center">
              <span className="text-[10px] uppercase text-emerald-200 block">Wishlist</span>
              <span className="text-lg font-bold font-mono">{formatNumber(wishlistTours.length)}</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm font-bold">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`pb-3 px-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'bookings'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 font-extrabold'
                : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            {t('myBookings')} ({formatNumber(userBookings.length)})
          </button>

          <button
            onClick={() => setActiveTab('wishlist')}
            className={`pb-3 px-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'wishlist'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 font-extrabold'
                : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            {t('savedWishlist')} ({formatNumber(wishlistTours.length)})
          </button>
        </div>

        {/* Tab 1: Bookings List */}
        {activeTab === 'bookings' && (
          <div className="space-y-4">
            {userBookings.length === 0 ? (
              <div className="text-center py-16 bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-3">
                <Compass className="w-12 h-12 text-neutral-400 mx-auto" />
                <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-200">
                  {language === 'bn' ? 'আপনার কোনো বুকিং পাওয়া যায়নি' : 'No Tour Bookings Yet'}
                </h3>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                  {language === 'bn' ? 'আমাদের সাশ্রয়ী ট্যুর প্যাকেজগুলো ঘুরে দেখুন এবং আপনার স্বপ্নের ভ্রমণ বুক করুন।' : 'Explore our budget-friendly tour packages and book your dream getaway.'}
                </p>
                <button
                  onClick={onBackToHome}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl"
                >
                  {t('exploreAllPackages')}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {userBookings.map((b) => (
                  <div
                    key={b.id}
                    className="p-5 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xs hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <img
                        src={b.packageImage}
                        alt={b.packageTitleEn}
                        className="w-20 h-20 rounded-2xl object-cover flex-shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="min-w-0 space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-mono font-bold">
                            {b.bookingCode}
                          </span>
                          <span className="text-[10px] text-neutral-400">
                            Booked on {b.createdAt}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white truncate">
                          {language === 'bn' ? b.packageTitleBn : b.packageTitleEn}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-neutral-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                            <span>{b.travelDate}</span>
                          </span>
                          <span>•</span>
                          <span>{formatNumber(b.travelersCount.adults)} Adults</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-3 md:pt-0 border-neutral-100 dark:border-neutral-800">
                      <div className="text-left md:text-right">
                        <span className="text-[10px] text-neutral-400 block uppercase font-bold">Total Price</span>
                        <span className="text-base sm:text-lg font-mono font-bold text-emerald-600 dark:text-emerald-400">
                          {formatCurrency(b.totalPrice)}
                        </span>
                      </div>

                      <button
                        onClick={() => onSelectBooking(b)}
                        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>{t('viewVoucher')}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Wishlist */}
        {activeTab === 'wishlist' && (
          <div>
            {wishlistTours.length === 0 ? (
              <div className="text-center py-16 bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 space-y-3">
                <Heart className="w-12 h-12 text-neutral-400 mx-auto" />
                <h3 className="text-base font-bold text-neutral-800 dark:text-neutral-200">
                  {language === 'bn' ? 'উইশলিস্ট খালি' : 'Wishlist is Empty'}
                </h3>
                <p className="text-xs text-neutral-500">
                  {language === 'bn' ? 'প্যাকেজের হার্ট আইকনে ক্লিক করে পছন্দের ট্যুর সেভ করে রাখুন।' : 'Click the heart icon on any tour package to save it here.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {wishlistTours.map((tour) => (
                  <PackageCard
                    key={tour.id}
                    tour={tour}
                    onSelect={onSelectTour}
                    onBookNow={onBookTour}
                    isWishlisted={true}
                    onToggleWishlist={onToggleWishlist}
                  />
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
