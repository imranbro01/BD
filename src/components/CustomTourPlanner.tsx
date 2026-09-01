import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  Bus, 
  Hotel, 
  Utensils, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  ArrowRight,
  Send
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface CustomTourPlannerProps {
  onSubmitInquiry: (inquiry: {
    destination: string;
    durationDays: number;
    travelers: number;
    transport: string;
    hotel: string;
    estimatedCost: number;
    contactPhone: string;
    notes: string;
  }) => void;
}

export const CustomTourPlanner: React.FC<CustomTourPlannerProps> = ({ onSubmitInquiry }) => {
  const { language, t, formatCurrency, formatNumber } = useLanguage();

  const [destination, setDestination] = useState('সাজেক ভ্যালি (Sajek Valley)');
  const [durationDays, setDurationDays] = useState(3);
  const [travelers, setTravelers] = useState(4);
  const [transport, setTransport] = useState<'non_ac' | 'ac_bus' | 'private_hiace' | 'train'>('ac_bus');
  const [hotelStandard, setHotelStandard] = useState<'budget' | 'standard' | 'luxury'>('standard');
  const [includeBbq, setIncludeBbq] = useState(true);
  const [contactPhone, setContactPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Dynamic cost calculation algorithm based on Bangladesh domestic travel averages
  let basePerDay = 1200; // Base food and local transport
  if (hotelStandard === 'budget') basePerDay += 800;
  if (hotelStandard === 'standard') basePerDay += 1500;
  if (hotelStandard === 'luxury') basePerDay += 3200;

  let transportCostPerPerson = 1200;
  if (transport === 'ac_bus') transportCostPerPerson = 2200;
  if (transport === 'private_hiace') transportCostPerPerson = Math.round(24000 / Math.max(1, travelers));
  if (transport === 'train') transportCostPerPerson = 1600;

  let extras = 0;
  if (includeBbq) extras += 450;

  const estimatedPerPerson = (basePerDay * durationDays) + transportCostPerPerson + extras;
  const estimatedTotal = estimatedPerPerson * travelers;

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Cholo Ghuri Bangladesh! I planned a custom tour quote:\n` +
      `📍 Destination: ${destination}\n` +
      `⏳ Duration: ${durationDays} Days\n` +
      `👥 Travelers: ${travelers} Persons\n` +
      `🚌 Transport: ${transport}\n` +
      `🏨 Stay: ${hotelStandard}\n` +
      `💰 Estimated Per Head: BDT ${estimatedPerPerson}\n` +
      `💵 Estimated Total: BDT ${estimatedTotal}\n` +
      `📞 My Phone: ${contactPhone || 'Provided in chat'}\n` +
      `Please confirm availability and best discount. Hotline: 01312816223`
    );
    window.open(`https://wa.me/8801312816223?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactPhone.trim()) {
      alert('Please enter your phone number to submit');
      return;
    }
    onSubmitInquiry({
      destination,
      durationDays,
      travelers,
      transport,
      hotel: hotelStandard,
      estimatedCost: estimatedTotal,
      contactPhone: contactPhone.trim(),
      notes
    });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="custom-tour-section" className="py-12 sm:py-16 bg-neutral-900 text-white relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t('customTourBadge')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            {t('customTourTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400">
            {t('customTourDesc')}
          </p>
        </div>

        {/* Interactive Planner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Controls Box (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-950/80 border border-neutral-800 p-5 sm:p-6 rounded-3xl space-y-5 shadow-xl">
            
            {/* Destination Selection */}
            <div>
              <label className="text-xs font-bold text-neutral-300 flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{language === 'bn' ? 'গন্তব্য স্থান বেছে নিন' : 'Choose Destination'}</span>
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-2xl text-xs sm:text-sm outline-none focus:border-emerald-500 font-semibold cursor-pointer"
              >
                <option value="সাজেক ভ্যালি (Sajek Valley)">সাজেক ভ্যালি (Sajek Valley - Hill & Cloud)</option>
                <option value="সেন্টমার্টিন দ্বীপ (Saint Martin)">সেন্টমার্টিন দ্বীপ (Saint Martin Coral Island)</option>
                <option value="সুন্দরবন (Sundarbans)">সুন্দরবন ম্যানগ্রোভ বন (Sundarbans World Heritage)</option>
                <option value="টাঙ্গুয়ার হাওর (Tanguar Haor)">টাঙ্গুয়ার হাওর ও নীলাদ্রি লেক (Tanguar Haor Houseboat)</option>
                <option value="বাগেরহাট ও ৬০ গম্বুজ (Bagerhat)">বাগেরহাট ৬০ গম্বুজ মসজিদ ও সুন্দরবন গেট (Bagerhat Heritage)</option>
                <option value="পাহাড়পুর ও মহাস্থানগড় (Paharpur)">পাহাড়পুর সোমপুর মহাবিহার ও উত্তরবঙ্গ (Archaeology Tour)</option>
                <option value="শ্রীমঙ্গল চা বাগান (Sreemangal)">শ্রীমঙ্গল লাউয়াছড়া ও হামহাম জলপ্রপাত (Tea Capital)</option>
                <option value="কক্সবাজার সমুদ্র সৈকত (Cox's Bazar)">কক্সবাজার ও ইনানী মেরিন ড্রাইভ (Sea Beach Tour)</option>
                <option value="বান্দরবান নীলগিরি (Bandarban)">বান্দরবান নীলগিরি ও নাফাখুম (Mountain Adventure)</option>
              </select>
            </div>

            {/* Duration Slider & Travelers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{language === 'bn' ? 'ট্যুরের মেয়াদ:' : 'Duration:'}</span>
                  </span>
                  <span className="text-emerald-400 font-mono">
                    {formatNumber(durationDays)} {language === 'bn' ? 'দিন' : 'Days'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="7"
                  value={durationDays}
                  onChange={(e) => setDurationDays(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-500">
                  <span>1 {language === 'bn' ? 'দিন' : 'Day'}</span>
                  <span>4 {language === 'bn' ? 'দিন' : 'Days'}</span>
                  <span>7 {language === 'bn' ? 'দিন' : 'Days'}</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-neutral-300">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{language === 'bn' ? 'যাত্রী সংখ্যা:' : 'Group Size:'}</span>
                  </span>
                  <span className="text-emerald-400 font-mono">
                    {formatNumber(travelers)} {language === 'bn' ? 'জন' : 'Persons'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={travelers}
                  onChange={(e) => setTravelers(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-500">
                  <span>1 {language === 'bn' ? 'জন' : 'Person'}</span>
                  <span>15 {language === 'bn' ? 'জন' : 'Persons'}</span>
                  <span>30+ {language === 'bn' ? 'জন' : 'Persons'}</span>
                </div>
              </div>

            </div>

            {/* Transport & Accommodation Class */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div>
                <label className="text-xs font-bold text-neutral-300 flex items-center gap-1.5 mb-2">
                  <Bus className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{language === 'bn' ? 'যাতায়াত ব্যবস্থা' : 'Transport Class'}</span>
                </label>
                <select
                  value={transport}
                  onChange={(e) => setTransport(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-xs outline-none cursor-pointer"
                >
                  <option value="non_ac">নন-এসি চেয়ার কোচ (Non-AC Coach)</option>
                  <option value="ac_bus">এসি লাক্সারি বাস (AC Luxury Bus)</option>
                  <option value="private_hiace">প্রাইভেট নোয়া / হায়েস (Private Micro)</option>
                  <option value="train">শোভন / স্নিগ্ধা ট্রেন (Intercity Train)</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-neutral-300 flex items-center gap-1.5 mb-2">
                  <Hotel className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{language === 'bn' ? 'হোটেল / রিসোর্ট মান' : 'Hotel Category'}</span>
                </label>
                <select
                  value={hotelStandard}
                  onChange={(e) => setHotelStandard(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 bg-neutral-900 border border-neutral-700 rounded-xl text-xs outline-none cursor-pointer"
                >
                  <option value="budget">ইকো কটেজ ও স্ট্যান্ডার্ড রিসোর্ট (Budget)</option>
                  <option value="standard">৩-স্টার স্ট্যান্ডার্ড কাপল/টুইন রুম (Standard)</option>
                  <option value="luxury">প্রিমিয়াম ভিউ লাক্সারি রিসোর্ট (Premium 4/5 Star)</option>
                </select>
              </div>

            </div>

            {/* Addon checkboxes */}
            <div className="pt-2 border-t border-neutral-800 flex items-center gap-3">
              <label className="flex items-center gap-2 text-xs text-neutral-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeBbq}
                  onChange={(e) => setIncludeBbq(e.target.checked)}
                  className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                />
                <span>{language === 'bn' ? 'স্পেশাল বারবিকিউ ও ক্যাম্পফায়ার নাইট (+৳৪৫০)' : 'Include BBQ & Campfire Night (+৳450)'}</span>
              </label>
            </div>

          </div>

          {/* Live Estimate Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-emerald-950/60 to-neutral-950 border border-emerald-500/30 p-5 sm:p-6 rounded-3xl space-y-5 shadow-2xl">
            
            <div className="flex items-center justify-between border-b border-emerald-500/20 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t('estimatedCalculation')}</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold">
                100% Budget Friendly
              </span>
            </div>

            {/* Price Showcase */}
            <div className="space-y-1">
              <span className="text-xs text-neutral-400 block">
                {language === 'bn' ? 'জনপ্রতি আনুমানিক বাজেট:' : 'Estimated Per Person:'}
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">
                {formatCurrency(estimatedPerPerson)}
              </div>
              <div className="text-xs text-neutral-400 font-medium pt-1">
                {language === 'bn' ? 'সম্পূর্ণ গ্রুপের মোট বাজেট:' : 'Total Group Estimate:'}{' '}
                <strong className="text-white font-mono">{formatCurrency(estimatedTotal)}</strong>
              </div>
            </div>

            {/* Inclusions summary */}
            <div className="space-y-2 text-xs text-neutral-300 bg-black/40 p-3.5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>{language === 'bn' ? 'ঢাকা থেকে আসা-যাওয়া ট্রিপ' : 'Roundtrip Travel from Dhaka'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>{language === 'bn' ? 'সকল ব্রেকফাস্ট, লাঞ্চ ও ডিনার' : 'All Meals (Breakfast, Lunch, Dinner)'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>{language === 'bn' ? 'অভিজ্ঞ স্থানীয় গাইড ও দর্শনীয় স্থান ভ্রমণ' : 'Professional Tour Guide & Sightseeing'}</span>
              </div>
            </div>

            {/* Direct WhatsApp Quote Button */}
            <button
              type="button"
              onClick={handleSendWhatsApp}
              className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950 transition-all cursor-pointer active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>{t('getInstantWhatsAppQuote')}</span>
            </button>

            {/* Quick Contact submission form */}
            <form onSubmit={handleSubmit} className="space-y-2 pt-2 border-t border-neutral-800">
              <span className="text-[11px] text-neutral-400 block">
                {language === 'bn' ? 'অথবা আপনার নম্বর দিন, আমাদের টিম কল করবে:' : 'Or enter your phone for an official call back:'}
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="tel"
                  required
                  placeholder="01712345678"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="flex-1 px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-xl text-xs font-mono outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  <Send className="w-3 h-3" />
                  <span>{t('submitCustomPlan')}</span>
                </button>
              </div>
              {isSubmitted && (
                <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold text-center">
                  ✓ {language === 'bn' ? 'অনুরোধ জমা হয়েছে! হটলাইন 01312816223 থেকে শীঘ্রই কল করা হবে।' : 'Request received! We will call you shortly from 01312816223.'}
                </div>
              )}
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
