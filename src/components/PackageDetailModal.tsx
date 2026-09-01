import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Clock, 
  Calendar, 
  Star, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Heart, 
  Share2, 
  Sparkles,
  Utensils,
  BedDouble,
  Bus,
  Play,
  Tv
} from 'lucide-react';
import { TourPackage } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface PackageDetailModalProps {
  tour: TourPackage | null;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (tour: TourPackage) => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (tourId: string) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  tour,
  isOpen,
  onClose,
  onBookNow,
  isWishlisted = false,
  onToggleWishlist,
}) => {
  const { language, t, formatCurrency, formatNumber } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions' | 'dates' | 'video'>('overview');
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);

  if (!isOpen || !tour) return null;

  const currentHeroImage = selectedImage || tour.featuredImage;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Cholo Ghuri Bangladesh, I want to get information and book the tour: ${tour.titleEn} (Price: BDT ${tour.priceDiscounted}). Hotline: 01312816223.`
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-5xl max-h-[92vh] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl text-neutral-900 dark:text-neutral-100 flex flex-col overflow-hidden shadow-2xl animate-scale-up">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50/80 dark:bg-neutral-950/60">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] sm:text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block truncate">
                {language === 'bn' ? tour.districtBn : tour.districtEn} • {language === 'bn' ? tour.divisionBn : tour.divisionEn}
              </span>
              <h2 className="text-base sm:text-xl font-bold truncate">
                {language === 'bn' ? tour.titleBn : tour.titleEn}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1.5 flex-shrink-0">
            {onToggleWishlist && (
              <button
                onClick={() => onToggleWishlist(tour.id)}
                className={`p-2 rounded-xl border transition-colors ${
                  isWishlisted 
                    ? 'bg-rose-500 text-white border-rose-500' 
                    : 'border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800'
                }`}
                title="Save to Wishlist"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            )}

            <button
              onClick={handleShare}
              className="p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              title="Share Tour Link"
            >
              <Share2 className="w-4 h-4 text-neutral-600 dark:text-neutral-300" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Top Gallery & Quick Summary Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            
            {/* Left: Gallery (7 cols) */}
            <div className="lg:col-span-7 space-y-2.5">
              <div className="aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-800 relative shadow-md">
                <img
                  src={currentHeroImage}
                  alt={tour.titleEn}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-black/60 backdrop-blur-md text-white text-xs font-bold font-mono">
                  {language === 'bn' ? tour.durationTextBn : tour.durationTextEn}
                </div>
              </div>

              {/* Thumbnails list */}
              {tour.gallery && tour.gallery.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                  {tour.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`w-16 sm:w-20 aspect-[16/10] rounded-xl overflow-hidden flex-shrink-0 border-2 transition-transform active:scale-95 ${
                        (selectedImage || tour.featuredImage) === img
                          ? 'border-emerald-500 ring-2 ring-emerald-500/40'
                          : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt="thumbnail"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Quick Booking Box (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-4 sm:p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-950/70 border border-neutral-200 dark:border-neutral-800 space-y-4">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                    {t('perPerson')}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{formatNumber(tour.rating)}</span>
                    <span className="text-neutral-400">({formatNumber(tour.reviewCount)} reviews)</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-mono font-extrabold text-emerald-600 dark:text-emerald-400">
                    {formatCurrency(tour.priceDiscounted)}
                  </span>
                  {tour.priceRegular > tour.priceDiscounted && (
                    <span className="text-sm text-neutral-400 line-through font-mono">
                      {formatCurrency(tour.priceRegular)}
                    </span>
                  )}
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold">
                    {t('budgetFriendlyBadge')}
                  </span>
                </div>

                <p className="text-xs text-neutral-600 dark:text-neutral-400 italic">
                  "{language === 'bn' ? tour.taglineBn : tour.taglineEn}"
                </p>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs pt-2">
                  <div className="p-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <span className="text-[10px] text-neutral-400 block">{t('duration')}</span>
                    <span className="font-bold">{language === 'bn' ? tour.durationTextBn : tour.durationTextEn}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                    <span className="text-[10px] text-neutral-400 block">{t('departure')}</span>
                    <span className="font-bold truncate">{language === 'bn' ? tour.departureFromBn : tour.departureFromEn}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onBookNow(tour);
                  }}
                  className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-emerald-900/30 transition-all cursor-pointer active:scale-95"
                >
                  <span>{t('instantBookingBtn')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/8801312816223?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-2 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="tel:01312816223"
                    className="py-2.5 px-2 bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors font-mono"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>01312816223</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 border-b border-neutral-200 dark:border-neutral-800 overflow-x-auto no-scrollbar">
            {[
              { id: 'overview', label: t('overviewTab') },
              { id: 'itinerary', label: t('itineraryTab') },
              { id: 'inclusions', label: t('inclusionsTab') },
              { id: 'dates', label: t('datesTab') },
              ...(tour.youtubeVideoId ? [{ id: 'video', label: `▶ ${t('videoTabTour')}` }] : []),
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                    : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-5 animate-fade-in text-xs sm:text-sm leading-relaxed">
              <div>
                <h4 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white mb-2">
                  {language === 'bn' ? 'ট্যুর সংক্ষিপ্ত বিবরণ' : 'Tour Summary & Experience'}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {language === 'bn' ? tour.descriptionBn : tour.descriptionEn}
                </p>
              </div>

              {/* Highlights Bullet List */}
              <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/20 space-y-2.5">
                <h5 className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{t('highlightsTitle')}</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(language === 'bn' ? tour.highlightsBn : tour.highlightsEn).map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Day-by-Day Itinerary */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4 animate-fade-in">
              {tour.itinerary.map((dayPlan) => (
                <div 
                  key={dayPlan.day}
                  className="p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/40 space-y-3"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-xs font-bold font-mono">
                      {language === 'bn' ? `দিন ${formatNumber(dayPlan.day)}` : `Day ${dayPlan.day}`}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                      {language === 'bn' ? dayPlan.titleBn : dayPlan.titleEn}
                    </h4>
                  </div>

                  {/* Day activities */}
                  <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300 pl-2">
                    {(language === 'bn' ? dayPlan.activitiesBn : dayPlan.activitiesEn).map((act, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Meals and stay tags */}
                  <div className="flex items-center gap-3 pt-2 border-t border-neutral-200/60 dark:border-neutral-800/60 text-[11px] text-neutral-500 dark:text-neutral-400 flex-wrap">
                    <span className="flex items-center gap-1">
                      <Utensils className="w-3 h-3 text-emerald-500" />
                      <span><strong>{language === 'bn' ? 'খাবার:' : 'Meals:'}</strong> {language === 'bn' ? dayPlan.mealsBn : dayPlan.mealsEn}</span>
                    </span>
                    {dayPlan.stayBn && (
                      <span className="flex items-center gap-1">
                        <BedDouble className="w-3 h-3 text-emerald-500" />
                        <span><strong>{language === 'bn' ? 'রাত্রিবাস:' : 'Stay:'}</strong> {language === 'bn' ? dayPlan.stayBn : dayPlan.stayEn}</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Inclusions & Exclusions */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in text-xs sm:text-sm">
              {/* Included */}
              <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/20 space-y-3">
                <h4 className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t('includedTitle')}</span>
                </h4>
                <ul className="space-y-2">
                  {(language === 'bn' ? tour.includedBn : tour.includedEn).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded */}
              <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-500/20 space-y-3">
                <h4 className="font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" />
                  <span>{t('excludedTitle')}</span>
                </h4>
                <ul className="space-y-2">
                  {(language === 'bn' ? tour.excludedBn : tour.excludedEn).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-neutral-600 dark:text-neutral-400">
                      <XCircle className="w-3.5 h-3.5 text-rose-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Tab 4: Upcoming Dates */}
          {activeTab === 'dates' && (
            <div className="space-y-3 animate-fade-in">
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {language === 'bn' 
                  ? 'নিচের যেকোনো নির্ধারিত ব্যাচে বুকিং করতে ক্লিক করুন অথবা কাস্টম তারিখে গ্রুপ ট্যুরের জন্য হটলাইনে যোগাযোগ করুন:' 
                  : 'Select any upcoming batch date or contact our hotline for private group departure:'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.upcomingDates.map((date, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950/50 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-emerald-500" />
                      <span className="text-xs font-bold">{date}</span>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onBookNow(tour);
                      }}
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold transition-colors"
                    >
                      {t('bookNow')}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: Direct YouTube Video Player */}
          {activeTab === 'video' && tour.youtubeVideoId && (
            <div className="space-y-4 animate-fade-in">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-lg border border-neutral-800">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${tour.youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                  title={language === 'bn' ? tour.titleBn : tour.titleEn}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              <div className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-neutral-100">
                    {language === 'bn' ? `${tour.titleBn} - সরাসরি ভ্রমণ ভিডিও` : `${tour.titleEn} - Official Travel Video Tour`}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {language === 'bn' ? 'সরাসরি ইউটিউব থেকে ভিডিও প্লে হচ্ছে' : 'Playing high quality 4K video stream from YouTube'}
                  </p>
                </div>

                <a
                  href={`https://www.youtube.com/watch?v=${tour.youtubeVideoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold shadow-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{t('watchOnYouTube')}</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
