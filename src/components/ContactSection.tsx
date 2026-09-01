import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Headphones
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { InquiryMessage } from '../types';

interface ContactSectionProps {
  onSendMessage: (msg: InquiryMessage) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSendMessage }) => {
  const { language, t } = useLanguage();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    const newInquiry: InquiryMessage = {
      id: 'inq_' + Date.now(),
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || 'info@traveler.com',
      subject: subject.trim() || 'Tour Package Inquiry',
      message: message.trim(),
      createdAt: new Date().toISOString().split('T')[0],
      isRead: false,
    };

    onSendMessage(newInquiry);
    setIsSuccess(true);
    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const whatsappLink = `https://wa.me/8801312816223?text=${encodeURIComponent(
    'Hello Cholo Ghuri Bangladesh, I want to inquire about your budget-friendly tour packages.'
  )}`;

  return (
    <section id="contact-section" className="py-12 sm:py-16 bg-white dark:bg-neutral-900 border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-500/20">
            <Headphones className="w-3.5 h-3.5" />
            <span>{t('contactBadge')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            {t('contactTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            {t('contactDesc')}
          </p>
        </div>

        {/* 2-Column Grid: Contact Cards & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp & Hotline Card */}
            <div className="p-5 rounded-3xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                  {t('hotlineText')} & WhatsApp
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>

              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-900 dark:text-emerald-200">
                01312816223
              </div>

              <p className="text-xs text-neutral-600 dark:text-neutral-300">
                {language === 'bn'
                  ? 'ট্যুর বুকিং, কাস্টমাইজেশন অথবা যেকোনো তথ্যের জন্য ২৪/৭ সরাসরি কল বা হোয়াটসঅ্যাপ করুন।'
                  : 'For instant bookings, queries, or custom quotes, contact our 24/7 hotline & WhatsApp.'}
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href="tel:01312816223"
                  className="py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors font-mono"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-3xl bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-wider">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>{t('officialEmail')}</span>
              </div>
              <a
                href="mailto:eleashahmed6223@gmail.com"
                className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-mono transition-colors block break-all"
              >
                eleashahmed6223@gmail.com
              </a>
              <p className="text-xs text-neutral-500">
                {language === 'bn' ? 'কর্পোরেট ও প্রাতিষ্ঠানিক ট্যুর প্রপোজালের জন্য ইমেইল পাঠাতে পারেন।' : 'Send your corporate & institutional tour requirements.'}
              </p>
            </div>

            {/* Office Address Card */}
            <div className="p-5 rounded-3xl bg-neutral-50 dark:bg-neutral-950/50 border border-neutral-200 dark:border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-neutral-500 uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>{t('officeAddress')}</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
                {language === 'bn' 
                  ? 'বাড়ি ১৪, রোড ৭, ব্লক ডি, বনানী, ঢাকা-১২১৩, বাংলাদেশ' 
                  : 'House 14, Road 7, Block D, Banani, Dhaka-1213, Bangladesh'}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 pt-1">
                <Clock className="w-3.5 h-3.5 text-emerald-500" />
                <span>{language === 'bn' ? 'অফিস সময়: সকাল ১০:০০ - রাত ০৮:০০ (প্রতিদিন)' : 'Open Daily: 10:00 AM - 08:00 PM'}</span>
              </div>
            </div>

          </div>

          {/* Right: Message Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-neutral-50 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 shadow-sm space-y-5">
            
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                {language === 'bn' ? 'আমাদের বার্তা পাঠান' : 'Send Us an Inquiry Message'}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {language === 'bn'
                  ? 'আপনার কোনো প্রশ্ন বা ট্যুর সম্পর্কিত মতামত থাকলে নিচের ফর্মে লিখুন, আমাদের টিম দ্রুত যোগাযোগ করবে।'
                  : 'Fill the form below and our travel support officer will reach out promptly.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold block mb-1 text-neutral-700 dark:text-neutral-300">
                    {t('yourName')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Shakib Al Hasan"
                    className="w-full px-4 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-1 text-neutral-700 dark:text-neutral-300">
                    {t('yourPhone')} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="01312816223"
                    className="w-full px-4 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl font-mono outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-semibold block mb-1 text-neutral-700 dark:text-neutral-300">
                    {t('yourEmail')}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="traveler@gmail.com"
                    className="w-full px-4 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="font-semibold block mb-1 text-neutral-700 dark:text-neutral-300">
                    {t('inquirySubject')}
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Sajek Tour for 6 Persons"
                    className="w-full px-4 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold block mb-1 text-neutral-700 dark:text-neutral-300">
                  {t('messagePlaceholder')} *
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={language === 'bn' ? 'আপনার ট্যুর পরিকল্পনা বা প্রশ্ন বিস্তারিত লিখুন...' : 'Describe your tour plan, dates, or question...'}
                  className="w-full px-4 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-xl outline-none focus:border-emerald-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-emerald-900/20 transition-transform active:scale-98 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t('sendMessageBtn')}</span>
              </button>

              {isSuccess && (
                <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-semibold text-center flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t('messageSentSuccess')}</span>
                </div>
              )}
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
