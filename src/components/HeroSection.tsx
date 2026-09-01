import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  Users, 
  Star, 
  PhoneCall, 
  ArrowRight,
  TreePine,
  Landmark,
  Waves,
  Compass
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TourCategory } from '../types';

interface HeroSectionProps {
  onSearch: (query: string, category: TourCategory) => void;
  onSelectCategory: (category: TourCategory) => void;
  onOpenCustomPlanner: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  onSelectCategory,
  onOpenCustomPlanner,
}) => {
  const { language, t, formatNumber } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState<TourCategory>('all');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, selectedCat);
  };

  const quickPillTags: { labelBn: string; labelEn: string; query: string; cat: TourCategory }[] = [
    { labelBn: 'সাজেক ভ্যালি', labelEn: 'Sajek Valley', query: 'সাজেক', cat: 'hill' },
    { labelBn: 'সুন্দরবন ম্যানগ্রোভ', labelEn: 'Sundarbans', query: 'সুন্দরবন', cat: 'natural' },
    { labelBn: '৬০ গম্বুজ মসজিদ', labelEn: '60 Dome Mosque', query: 'বাগেরহাট', cat: 'historical' },
    { labelBn: 'সেন্টমার্টিন দ্বীপ', labelEn: 'Saint Martin', query: 'সেন্টমার্টিন', cat: 'beach' },
    { labelBn: 'টাঙ্গুয়ার হাওর', labelEn: 'Tanguar Haor', query: 'টাঙ্গুয়ার', cat: 'haor' },
    { labelBn: 'পাহাড়পুর বৌদ্ধ বিহার', labelEn: 'Paharpur Vihara', query: 'পাহাড়পুর', cat: 'historical' },
    { labelBn: 'শ্রীমঙ্গল চা বাগান', labelEn: 'Sreemangal Tea', query: 'শ্রীমঙ্গল', cat: 'natural' },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-neutral-900 text-white min-h-[560px] lg:min-h-[640px] flex items-center justify-center">
      
      {/* Background Scenic Hero Image with Subtle Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
          alt="Beautiful Bangladesh Scenery"
          className="w-full h-full object-cover opacity-35 scale-105 transform hover:scale-100 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Multi-layered natural gradient overlays for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-900/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/70 via-transparent to-teal-950/70" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center text-center space-y-6 sm:space-y-8">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-lg animate-fade-in">
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span>{t('heroBadge')}</span>
        </div>

        {/* Main Display Headline */}
        <div className="space-y-2 max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {t('heroTitlePrefix')}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 underline decoration-emerald-500/40">
              {t('heroTitleHighlight')}
            </span>
          </h1>
          <p className="text-sm sm:text-lg text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed pt-2">
            {t('heroSubtitle')}
          </p>
        </div>

        {/* Interactive Search & Filter Card */}
        <div className="w-full max-w-3xl bg-white/10 dark:bg-neutral-900/80 backdrop-blur-xl border border-white/20 dark:border-neutral-700/80 p-3 sm:p-4 rounded-3xl shadow-2xl space-y-3">
          <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center gap-2.5">
            
            {/* Input Search Box */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('heroSearchPlaceholder')}
                className="w-full pl-11 pr-4 py-3 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white rounded-2xl text-xs sm:text-sm outline-none border border-neutral-200 dark:border-neutral-800 placeholder-neutral-400 focus:ring-2 focus:ring-emerald-500 transition-all font-medium"
              />
            </div>

            {/* Category Dropdown Filter */}
            <div className="w-full sm:w-48">
              <select
                value={selectedCat}
                onChange={(e) => setSelectedCat(e.target.value as TourCategory)}
                className="w-full px-3 py-3 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white rounded-2xl text-xs sm:text-sm outline-none border border-neutral-200 dark:border-neutral-800 font-medium cursor-pointer"
              >
                <option value="all">{t('catAll')}</option>
                <option value="natural">{t('catNatural')}</option>
                <option value="historical">{t('catHistorical')}</option>
                <option value="beach">{t('catBeach')}</option>
                <option value="hill">{t('catHill')}</option>
                <option value="haor">{t('catHaor')}</option>
                <option value="daytrip">{t('catDaytrip')}</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/30 transition-transform active:scale-95 whitespace-nowrap cursor-pointer"
            >
              <Compass className="w-4 h-4" />
              <span>{t('heroSearchButton')}</span>
            </button>

          </form>

          {/* Quick Filter Tag Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 text-[11px] font-medium">
            <span className="text-neutral-400 whitespace-nowrap hidden sm:inline">
              {language === 'bn' ? 'জনপ্রিয় গন্তব্য:' : 'Popular:'}
            </span>
            {quickPillTags.map((tag, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSearchQuery(tag.query);
                  setSelectedCat(tag.cat);
                  onSearch(tag.query, tag.cat);
                }}
                className="px-2.5 py-1 rounded-xl bg-white/10 hover:bg-emerald-600/30 border border-white/15 hover:border-emerald-500/40 text-neutral-200 hover:text-white whitespace-nowrap transition-all"
              >
                {language === 'bn' ? tag.labelBn : tag.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full max-w-4xl pt-4 sm:pt-6 border-t border-white/10 text-left">
          
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/30">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-mono">{t('heroStatDestinations')}</div>
              <div className="text-[10px] sm:text-xs text-neutral-400">{t('heroStatDestinationsDesc')}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0 border border-teal-500/30">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-mono">{t('heroStatTravelers')}</div>
              <div className="text-[10px] sm:text-xs text-neutral-400">{t('heroStatTravelersDesc')}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-500/30">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-mono">{t('heroStatRatings')}</div>
              <div className="text-[10px] sm:text-xs text-neutral-400">{t('heroStatRatingsDesc')}</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center flex-shrink-0 border border-rose-500/30">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-bold text-white font-mono">01312816223</div>
              <div className="text-[10px] sm:text-xs text-neutral-400">{t('heroStatSupportDesc')}</div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
