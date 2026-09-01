import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { language } = useLanguage();

  const whatsappUrl = `https://wa.me/8801312816223?text=${encodeURIComponent(
    'Hello Cholo Ghuri Bangladesh, I want to inquire about tour packages and booking.'
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 group">
      
      {/* Tooltip prompt */}
      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-neutral-900/90 text-white text-xs font-bold shadow-xl border border-neutral-700/80 backdrop-blur-md animate-bounce opacity-90 group-hover:opacity-100 transition-opacity">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>{language === 'bn' ? 'ট্যুর সম্পর্কিত যেকোনো তথ্যে WhatsApp করুন' : 'Chat with Tour Officer (24/7)'}</span>
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 hover:from-emerald-500 hover:to-emerald-300 text-white flex items-center justify-center shadow-2xl shadow-emerald-950/50 transform hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-emerald-500/30"
        title="Chat on WhatsApp (01312816223)"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>

    </div>
  );
};
