import React from 'react';
import { 
  Compass, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  Sparkles,
  ArrowRight,
  Clock,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (section: string) => void;
  onOpenAuth: (defaultTab?: 'customer' | 'admin') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAuth }) => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800 text-xs pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white block">
                  {language === 'bn' ? 'চলো ঘুরি বাংলাদেশ' : 'Cholo Ghuri Bangladesh'}
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                  Govt. Approved Tourism Operator
                </span>
              </div>
            </div>

            <p className="text-neutral-400 leading-relaxed text-xs">
              {t('aboutAgencyDesc')}
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-xl bg-neutral-900 border border-neutral-800 text-[11px] font-semibold text-neutral-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Safe Travel</span>
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-neutral-900 border border-neutral-800 text-[11px] font-semibold text-neutral-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Budget Guarantee</span>
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('footerQuickLinks')}
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <button 
                  onClick={() => onNavigate('home')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t('navHome')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('packages')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t('navPackages')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('natural')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t('navNatural')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('historical')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t('navHistorical')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('custom-tour')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t('navCustomTour')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('reviews')} 
                  className="hover:text-emerald-400 transition-colors"
                >
                  {t('navReviews')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Destinations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('popularDestinations')}
            </h4>
            <ul className="space-y-1.5 text-neutral-400 text-xs">
              <li>📍 সাজেক ভ্যালি মেঘের উপত্যকা (Sajek Valley)</li>
              <li>📍 সুন্দরবন ও কটকা অভয়ারণ্য (Sundarbans)</li>
              <li>📍 সেন্টমার্টিন ও ছেঁড়া দ্বীপ (Saint Martin)</li>
              <li>📍 টাঙ্গুয়ার হাওর ও নীলাদ্রি লেক (Tanguar Haor)</li>
              <li>📍 বাগেরহাট ৬০ গম্বুজ মসজিদ (Sixty Dome Mosque)</li>
              <li>📍 পাহাড়পুর সোমপুর মহাবিহার (Paharpur Vihara)</li>
              <li>📍 শ্রীমঙ্গল চা বাগান ও লাউয়াছড়া (Sreemangal)</li>
            </ul>
          </div>

          {/* Col 4: Contact & Hotline (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {t('hotlineText')} & Office
            </h4>
            
            <div className="space-y-2">
              <a
                href="tel:01312816223"
                className="flex items-center gap-2 text-white hover:text-emerald-400 font-mono font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>01312816223</span>
              </a>

              <a
                href="mailto:eleashahmed6223@gmail.com"
                className="flex items-center gap-2 text-neutral-300 hover:text-emerald-400 font-mono text-xs transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>eleashahmed6223@gmail.com</span>
              </a>

              <div className="flex items-start gap-2 text-neutral-400 text-xs pt-1">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>House 14, Road 7, Block D, Banani, Dhaka-1213, Bangladesh</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenAuth('admin')}
                className="px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-900/80 text-[11px] font-semibold transition-all flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>Admin Login Portal</span>
              </button>
            </div>

          </div>

        </div>

        {/* Accepted Payment Badges & Copyright */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          
          <div>
            © {new Date().getFullYear()} <strong>Cholo Ghuri Bangladesh (চলো ঘুরি বাংলাদেশ)</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-2 flex-wrap text-[10px]">
            <span className="font-semibold text-neutral-400">Accepted Payments:</span>
            <span className="px-2 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-pink-400 font-bold">bKash</span>
            <span className="px-2 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-orange-400 font-bold">Nagad</span>
            <span className="px-2 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-blue-400 font-bold">Rocket</span>
            <span className="px-2 py-0.5 rounded-md bg-neutral-900 border border-neutral-800 text-emerald-400 font-bold">Bank Transfer</span>
          </div>

        </div>

      </div>
    </footer>
  );
};
