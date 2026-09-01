import React, { useState } from 'react';
import { 
  Star, 
  Sparkles, 
  MessageSquarePlus, 
  CheckCircle2, 
  Quote, 
  User, 
  MapPin, 
  X 
} from 'lucide-react';
import { Review } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

interface ReviewsSectionProps {
  reviews: Review[];
  onAddReview: (review: Review) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews, onAddReview }) => {
  const { language, t, formatNumber } = useLanguage();
  const { user } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  // Form State
  const [name, setName] = useState(user?.name || '');
  const [destination, setDestination] = useState('সাজেক ভ্যালি (Sajek Valley)');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newRev: Review = {
      id: 'rev_' + Date.now(),
      userName: name.trim(),
      userAvatar: user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      tourNameBn: destination,
      tourNameEn: destination,
      rating,
      commentBn: comment.trim(),
      commentEn: comment.trim(),
      date: new Date().toISOString().split('T')[0],
      verified: true,
    };

    onAddReview(newRev);
    setComment('');
    setModalOpen(false);
  };

  return (
    <section id="reviews-section" className="py-12 sm:py-16 bg-neutral-50 dark:bg-neutral-950/60 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{t('reviewsBadge')}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              {t('reviewsTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              {t('reviewsDesc')}
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all cursor-pointer self-start md:self-auto"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>{t('writeReviewBtn')}</span>
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="p-5 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <div className="space-y-3">
                
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < rev.rating ? 'fill-current' : 'text-neutral-300 dark:text-neutral-700'}`}
                      />
                    ))}
                  </div>

                  {rev.verifiedBooking && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{t('verifiedTraveler')}</span>
                    </span>
                  )}
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                  "{language === 'bn' ? rev.commentBn : rev.commentEn}"
                </p>
              </div>

              {/* User info footer */}
              <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-3">
                <img
                  src={rev.userAvatar}
                  alt={rev.userName}
                  className="w-10 h-10 rounded-full object-cover ring-1 ring-emerald-500/40"
                  referrerPolicy="no-referrer"
                />
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white truncate">
                    {rev.userName}
                  </h4>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate">
                    {language === 'bn' ? rev.tourNameBn : rev.tourNameEn} • {rev.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Write Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 shadow-2xl text-neutral-900 dark:text-white space-y-4">
            
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <MessageSquarePlus className="w-5 h-5 text-emerald-500" />
                <span>{t('writeReviewBtn')}</span>
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-lg text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitReview} className="space-y-3.5 text-xs">
              <div>
                <label className="font-bold block mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Tanvir Hassan"
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">Tour Destination *</label>
                <input
                  type="text"
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Sajek Valley / Sundarbans"
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="font-bold block mb-1">Your Rating *</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`p-1.5 rounded-lg border transition-colors ${
                        rating >= star
                          ? 'text-amber-400 border-amber-400 bg-amber-400/10'
                          : 'text-neutral-400 border-neutral-300 dark:border-neutral-700'
                      }`}
                    >
                      <Star className={`w-5 h-5 ${rating >= star ? 'fill-current' : ''}`} />
                    </button>
                  ))}
                  <span className="font-bold text-sm font-mono ml-2">{rating} / 5</span>
                </div>
              </div>

              <div>
                <label className="font-bold block mb-1">Experience Review *</label>
                <textarea
                  required
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell us about the resort, food, transport and tour guide..."
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-colors cursor-pointer"
                >
                  Submit Review
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </section>
  );
};
