import React from 'react';
import { 
  MapPin, 
  Clock, 
  Star, 
  Calendar, 
  Sparkles, 
  Heart, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { TourPackage } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface PackageCardProps {
  tour: TourPackage;
  onSelect: (tour: TourPackage) => void;
  onBookNow: (tour: TourPackage) => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (tourId: string) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  tour,
  onSelect,
  onBookNow,
  isWishlisted = false,
  onToggleWishlist,
}) => {
  const { language, t, formatCurrency, formatNumber } = useLanguage();

  const discountPercent = Math.round(
    ((tour.priceRegular - tour.priceDiscounted) / tour.priceRegular) * 100
  );

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'natural': return language === 'bn' ? 'প্রাকৃতিক স্থান' : 'Natural Beauty';
      case 'historical': return language === 'bn' ? 'ঐতিহাসিক ঐতিহ্য' : 'Historical Heritage';
      case 'beach': return language === 'bn' ? 'সমুদ্র সৈকত' : 'Beach & Coral';
      case 'hill': return language === 'bn' ? 'পাহাড় ও মেঘ' : 'Hills & Clouds';
      case 'haor': return language === 'bn' ? 'হাওর ও হাউসবোট' : 'Haor & Houseboat';
      case 'daytrip': return language === 'bn' ? 'বাজেট ডে ট্যুর' : 'Budget Day Trip';
      default: return cat;
    }
  };

  return (
    <div className="group relative rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col bg-white dark:bg-neutral-900 border-neutral-200/90 dark:border-neutral-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:shadow-xl dark:hover:shadow-emerald-950/20">
      
      {/* Thumbnail Area */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-800">
        <img
          src={tour.featuredImage}
          alt={language === 'bn' ? tour.titleBn : tour.titleEn}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />

        {/* Gradient Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-2.5 py-1 rounded-xl text-[10px] font-bold tracking-wide uppercase bg-black/60 text-white backdrop-blur-md border border-white/20">
              {getCategoryLabel(tour.category)}
            </span>

            {discountPercent > 0 && (
              <span className="px-2 py-0.5 rounded-lg text-[10px] font-extrabold bg-rose-600 text-white shadow-xs">
                {formatNumber(discountPercent)}% {t('discountOff')}
              </span>
            )}
          </div>

          {onToggleWishlist && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onToggleWishlist(tour.id);
              }}
              className={`pointer-events-auto p-2 rounded-xl backdrop-blur-md border transition-transform active:scale-90 ${
                isWishlisted
                  ? 'bg-rose-600 border-rose-500 text-white'
                  : 'bg-black/50 border-white/20 text-white hover:bg-black/70'
              }`}
              title="Add to Wishlist"
            >
              <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
          )}
        </div>

        {/* Bottom image overlay: Duration & Rating */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-1.5 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-xs font-semibold">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>{language === 'bn' ? tour.durationTextBn : tour.durationTextEn}</span>
          </div>

          <div className="flex items-center gap-1 bg-amber-500/90 text-neutral-950 font-bold px-2 py-0.5 rounded-lg text-[11px]">
            <Star className="w-3 h-3 fill-current" />
            <span>{formatNumber(tour.rating)}</span>
            <span className="text-[9px] opacity-80">({formatNumber(tour.reviewCount)})</span>
          </div>
        </div>

      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          
          {/* Location & Division */}
          <div className="flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>{language === 'bn' ? tour.districtBn : tour.districtEn}</span>
            <span>•</span>
            <span className="text-neutral-400">{language === 'bn' ? tour.divisionBn : tour.divisionEn}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelect(tour)}
            className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors cursor-pointer line-clamp-1"
          >
            {language === 'bn' ? tour.titleBn : tour.titleEn}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed font-normal">
            {language === 'bn' ? tour.taglineBn : tour.taglineEn}
          </p>

          {/* Highlights Chips */}
          <div className="flex items-center gap-1 flex-wrap pt-1">
            {(language === 'bn' ? tour.highlightsBn : tour.highlightsEn).slice(0, 3).map((hl, i) => (
              <span 
                key={i} 
                className="text-[10px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium"
              >
                ✓ {hl}
              </span>
            ))}
          </div>

        </div>

        {/* Pricing & Action Buttons */}
        <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 space-y-3">
          
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider block">
                {t('perPerson')}
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-lg sm:text-xl font-mono font-extrabold text-emerald-600 dark:text-emerald-400">
                  {formatCurrency(tour.priceDiscounted)}
                </span>
                {tour.priceRegular > tour.priceDiscounted && (
                  <span className="text-xs text-neutral-400 line-through font-mono">
                    {formatCurrency(tour.priceRegular)}
                  </span>
                )}
              </div>
            </div>

            <div className="text-[10px] text-right font-medium text-neutral-400">
              <span>{t('departure')}:</span>
              <div className="font-semibold text-neutral-700 dark:text-neutral-200">
                {language === 'bn' ? 'ঢাকা থেকে' : 'From Dhaka'}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => onSelect(tour)}
              className="py-2.5 px-3 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-xs font-semibold transition-colors flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>{t('viewDetails')}</span>
            </button>

            <button
              type="button"
              onClick={() => onBookNow(tour)}
              className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-900/20 flex items-center justify-center gap-1 cursor-pointer active:scale-95"
            >
              <span>{t('bookNow')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
