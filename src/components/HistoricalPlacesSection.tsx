import React from 'react';
import { 
  Landmark, 
  Sparkles, 
  Compass, 
  BookOpen, 
  MapPin, 
  ShieldCheck 
} from 'lucide-react';
import { TourPackage } from '../types';
import { PackageCard } from './PackageCard';
import { useLanguage } from '../context/LanguageContext';

interface HistoricalPlacesSectionProps {
  tours: TourPackage[];
  onSelectTour: (tour: TourPackage) => void;
  onBookNow: (tour: TourPackage) => void;
  wishlist: string[];
  onToggleWishlist: (tourId: string) => void;
}

export const HistoricalPlacesSection: React.FC<HistoricalPlacesSectionProps> = ({
  tours,
  onSelectTour,
  onBookNow,
  wishlist,
  onToggleWishlist,
}) => {
  const { language, t } = useLanguage();

  // Filter historical and cultural heritage packages
  const historicalTours = tours.filter((tour) => 
    tour.category === 'historical' || tour.id === 'cgb_sonargaon_01' || tour.id === 'cgb_bagerhat_01' || tour.id === 'cgb_paharpur_01'
  );

  return (
    <section id="historical-section" className="py-12 sm:py-16 bg-white dark:bg-neutral-900/60 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold border border-amber-500/20">
              <Landmark className="w-3.5 h-3.5" />
              <span>{t('historicalBadge')}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              {t('historicalTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              {t('historicalDesc')}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-neutral-500 dark:text-neutral-400">
            <span className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800 px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>UNESCO World Heritage Sites</span>
            </span>
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {historicalTours.map((tour) => (
            <PackageCard
              key={tour.id}
              tour={tour}
              onSelect={onSelectTour}
              onBookNow={onBookNow}
              isWishlisted={wishlist.includes(tour.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
