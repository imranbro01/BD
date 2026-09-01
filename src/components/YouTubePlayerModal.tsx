import React from 'react';
import { X, ExternalLink, Play, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TravelVideo } from '../types';

interface YouTubePlayerModalProps {
  video: TravelVideo | null;
  isOpen: boolean;
  onClose: () => void;
}

export const YouTubePlayerModal: React.FC<YouTubePlayerModalProps> = ({
  video,
  isOpen,
  onClose
}) => {
  const { language, t } = useLanguage();

  if (!isOpen || !video) return null;

  const title = language === 'bn' ? video.titleBn : video.titleEn;
  const destination = language === 'bn' ? video.destinationBn : video.destinationEn;
  const description = language === 'bn' ? video.descriptionBn : video.descriptionEn;

  return (
    <div 
      id="youtube-player-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        id="youtube-player-modal-container"
        className="relative w-full max-w-4xl bg-neutral-900 text-white rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 bg-neutral-950/80">
          <div className="flex items-center gap-2.5 min-w-0 pr-3">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600/20 text-red-500 shrink-0">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </span>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-base font-bold text-white truncate">
                {title}
              </h3>
              <p className="text-xs text-neutral-400 truncate">
                {destination} • {video.duration}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-medium text-neutral-200 transition-colors"
            >
              <span>{t('watchOnYouTube')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              id="close-youtube-modal-btn"
              onClick={onClose}
              className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
              title={t('closeVideo')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player 16:9 Aspect Ratio */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>

        {/* Video Footer Info */}
        <div className="p-4 sm:p-5 bg-neutral-900/95 border-t border-neutral-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs sm:text-sm text-neutral-300">
                {description}
              </p>
              <div className="flex items-center gap-3 mt-2 text-xs text-emerald-400 font-medium">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {destination}
                </span>
                <span>•</span>
                <span className="text-neutral-400">
                  {language === 'bn' ? video.viewsBn : video.viewsEn}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={`https://wa.me/8801312816223?text=${encodeURIComponent(`Hello Cholo Ghuri Bangladesh, I watched the video of "${title}" and want to know tour package details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-md"
              >
                <span>{t('askOnWhatsApp')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
