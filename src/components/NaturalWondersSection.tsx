import React, { useState } from 'react';
import { 
  TreePine, 
  Sparkles, 
  ArrowRight, 
  Waves, 
  SunMedium, 
  Compass,
  MapPin
} from 'lucide-react';
import { TourPackage } from '../types';
import { PackageCard } from './PackageCard';
import { useLanguage } from '../context/LanguageContext';

interface NaturalWondersSectionProps {
  tours: TourPackage[];
  onSelectTour: (tour: TourPackage) => void;
  onBookNow: (tour: TourPackage) => void;
  wishlist: string[];
  onToggleWishlist: (tourId: string) => void;
}

export const NaturalWondersSection: React.FC<NaturalWondersSectionProps> = ({
  tours,
  onSelectTour,
  onBookNow,
  wishlist,
  onToggleWishlist,
}) => {
  const { language, t } = useLanguage();
  const [filterSub, setFilterSub] = useState<'all' | 'hill' | 'beach' | 'haor' | 'forest'>('all');

  // Filter natural packages
  const naturalTours = tours.filter((tour) => {
    if (tour.category === 'historical' || tour.category === 'daytrip') return false;
    if (filterSub === 'all') return true;
    if (filterSub === 'hill') return tour.category === 'hill';
    if (filterSub === 'beach') return tour.category === 'beach';
    if (filterSub === 'haor') return tour.category === 'haor';
    if (filterSub === 'forest') return tour.districtEn.includes('Sundarbans') || tour.districtEn.includes('Moulvibazar');
    return true;
  });

  return (
    <section id="natural-section" className="py-12 sm:py-16 bg-neutral-50/50 dark:bg-neutral-950/40 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
              <TreePine className="w-3.5 h-3.5" />
              <span>{t('naturalBadge')}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              {t('naturalTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              {t('naturalDesc')}
            </p>
          </div>

          {/* Sub-filter chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {[
              { id: 'all', labelBn: 'সব প্রাকৃতিক স্পট', labelEn: 'All Wonders' },
              { id: 'hill', labelBn: 'পাহাড় ও মেঘ', labelEn: 'Hills & Clouds' },
              { id: 'beach', labelBn: 'সমুদ্র ও প্রবাল', labelEn: 'Beach & Island' },
              { id: 'haor', labelBn: 'হাওর ও হাউসবোট', labelEn: 'Haor Water' },
              { id: 'forest', labelBn: 'বন ও ম্যানগ্রোভ', labelEn: 'Forests & Tea' },
            ].map((chip) => (
              <button
                key={chip.id}
                onClick={() => setFilterSub(chip.id as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  filterSub === chip.id
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                {language === 'bn' ? chip.labelBn : chip.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {naturalTours.map((tour) => (
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
