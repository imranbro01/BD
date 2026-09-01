import React, { useState } from 'react';
import { 
  Play, 
  Sparkles, 
  Tv, 
  MapPin, 
  Clock, 
  Eye, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TravelVideo } from '../types';
import { TRAVEL_VIDEOS } from '../data/packagesData';
import { YouTubePlayerModal } from './YouTubePlayerModal';

interface YouTubeVideoSectionProps {
  onNavigateToTour?: (destination: string) => void;
}

export const YouTubeVideoSection: React.FC<YouTubeVideoSectionProps> = ({
  onNavigateToTour
}) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeVideoForModal, setActiveVideoForModal] = useState<TravelVideo | null>(null);
  const [inlinePlayingId, setInlinePlayingId] = useState<string | null>(null);

  const categories = [
    { id: 'all', labelBn: 'সকল ভিডিও', labelEn: 'All Videos' },
    { id: 'hill', labelBn: 'পাহাড় ও মেঘ', labelEn: 'Hills & Clouds' },
    { id: 'beach', labelBn: 'সমুদ্র সৈকত', labelEn: 'Sea Beaches' },
    { id: 'natural', labelBn: 'ম্যানগ্রোভ ও বন', labelEn: 'Mangrove & Nature' },
    { id: 'haor', labelBn: 'হাওর ও হাউসবোট', labelEn: 'Haor & Houseboat' },
    { id: 'historical', labelBn: 'ঐতিহাসিক প্রত্নতত্ত্ব', labelEn: 'Historical Heritage' },
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? TRAVEL_VIDEOS 
    : TRAVEL_VIDEOS.filter(v => v.category === selectedCategory);

  return (
    <section id="videos-section" className="py-16 sm:py-20 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 text-xs sm:text-sm font-semibold mb-3 border border-red-200 dark:border-red-800/50">
          <Tv className="w-4 h-4 text-red-600 dark:text-red-400" />
          <span>{t('videosBadge')}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight">
          {t('videosTitle')}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
          {t('videosSubtitle')}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
        {categories.map(cat => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              id={`filter-video-category-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20 ring-2 ring-red-600 ring-offset-2 dark:ring-offset-neutral-950'
                  : 'bg-white dark:bg-neutral-800/80 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700/60 border border-neutral-200 dark:border-neutral-700'
              }`}
            >
              {language === 'bn' ? cat.labelBn : cat.labelEn}
            </button>
          );
        })}
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => {
          const title = language === 'bn' ? video.titleBn : video.titleEn;
          const destination = language === 'bn' ? video.destinationBn : video.destinationEn;
          const description = language === 'bn' ? video.descriptionBn : video.descriptionEn;
          const views = language === 'bn' ? video.viewsBn : video.viewsEn;
          const isInlinePlaying = inlinePlayingId === video.id;

          return (
            <div
              key={video.id}
              id={`video-card-${video.id}`}
              className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Media Area */}
              <div className="relative aspect-video w-full bg-neutral-950 overflow-hidden">
                {isInlinePlaying ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                    {/* Big YouTube Play Button */}
                    <button
                      id={`play-btn-${video.id}`}
                      onClick={() => setActiveVideoForModal(video)}
                      className="absolute inset-0 flex items-center justify-center group/btn cursor-pointer"
                      title={t('playVideo')}
                    >
                      <div className="w-14 h-14 rounded-full bg-red-600 group-hover/btn:bg-red-500 text-white flex items-center justify-center shadow-lg transform group-hover/btn:scale-110 transition-all duration-200">
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      </div>
                    </button>

                    {/* Duration Badge */}
                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/80 text-white text-[11px] font-mono flex items-center gap-1 backdrop-blur-xs">
                      <Clock className="w-3 h-3 text-neutral-300" />
                      <span>{video.duration}</span>
                    </div>

                    {/* Destination Badge */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/60 text-white text-xs font-semibold backdrop-blur-md flex items-center gap-1.5 border border-white/10">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="truncate max-w-[180px]">{destination}</span>
                    </div>
                  </>
                )}
              </div>

              {/* Body Content */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-neutral-900 dark:text-neutral-100 line-clamp-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                    {description}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
                    <Eye className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{views}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      id={`open-player-btn-${video.id}`}
                      onClick={() => setActiveVideoForModal(video)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 cursor-pointer"
                    >
                      <span>{t('playVideo')}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                      title={t('watchOnYouTube')}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Video Lightbox Player Modal */}
      <YouTubePlayerModal
        video={activeVideoForModal}
        isOpen={!!activeVideoForModal}
        onClose={() => setActiveVideoForModal(null)}
      />
    </section>
  );
};
