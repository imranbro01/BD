import React, { useState } from 'react';
import { 
  X, 
  User, 
  ShieldCheck, 
  Lock, 
  Mail, 
  Phone, 
  KeyRound, 
  ArrowRight, 
  Sparkles,
  Compass
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'customer' | 'admin' | 'register';
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'customer',
}) => {
  const { language, t } = useLanguage();
  const { login, loginAsDemoAdmin, loginAsDemoCustomer, register } = useAuth();

  const [activeTab, setActiveTab] = useState<'customer' | 'admin' | 'register'>(defaultTab);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleCustomerLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMsg('Please enter your email or phone');
      return;
    }
    login(email.trim(), 'customer');
    onClose();
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setErrorMsg('Please enter your admin email');
      return;
    }
    // Admin login
    login(email.trim(), 'admin');
    onClose();
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMsg('Please enter all required fields');
      return;
    }
    register(name.trim(), email.trim(), phone.trim());
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="w-full max-w-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl text-neutral-900 dark:text-neutral-100 flex flex-col overflow-hidden shadow-2xl animate-scale-up">
        
        {/* Header */}
        <div className="p-5 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between bg-neutral-50 dark:bg-neutral-950">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-emerald-600 text-white flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white">
                {activeTab === 'admin' ? t('adminLoginTitle') : activeTab === 'register' ? t('registerNewAccount') : t('loginTitle')}
              </h3>
              <p className="text-[10px] text-neutral-500">
                {language === 'bn' ? 'চলো ঘুরি বাংলাদেশ সিকিউর পোর্টাল' : 'Cholo Ghuri Bangladesh Portal'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="grid grid-cols-3 p-1.5 bg-neutral-100 dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 text-xs font-semibold text-center">
          <button
            type="button"
            onClick={() => {
              setActiveTab('customer');
              setErrorMsg('');
            }}
            className={`py-2 rounded-xl transition-all ${
              activeTab === 'customer'
                ? 'bg-white dark:bg-neutral-900 text-emerald-600 dark:text-emerald-400 font-bold shadow-xs'
                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            {language === 'bn' ? 'ভ্রমণকারী লগইন' : 'Traveler'}
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('admin');
              setErrorMsg('');
            }}
            className={`py-2 rounded-xl transition-all ${
              activeTab === 'admin'
                ? 'bg-purple-600 text-white font-bold shadow-xs'
                : 'text-neutral-500 hover:text-purple-500'
            }`}
          >
            {language === 'bn' ? 'অ্যাডমিন পোর্টাল' : 'Admin'}
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('register');
              setErrorMsg('');
            }}
            className={`py-2 rounded-xl transition-all ${
              activeTab === 'register'
                ? 'bg-white dark:bg-neutral-900 text-emerald-600 dark:text-emerald-400 font-bold shadow-xs'
                : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
            }`}
          >
            {language === 'bn' ? 'রেজিস্ট্রেশন' : 'Register'}
          </button>
        </div>

        {/* Quick Demo One-Click Access Bar */}
        <div className="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 border-b border-emerald-500/20 flex flex-col gap-1.5 text-xs">
          <span className="text-[10px] uppercase font-bold text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Instant One-Click Demo Access:</span>
          </span>

          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                loginAsDemoAdmin();
                onClose();
              }}
              className="py-1.5 px-2 bg-purple-600 hover:bg-purple-500 text-white text-[11px] font-bold rounded-xl flex items-center justify-center gap-1 transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Admin Demo (Eleash)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                loginAsDemoCustomer();
                onClose();
              }}
              className="py-1.5 px-2 bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-bold rounded-xl flex items-center justify-center gap-1 transition-colors cursor-pointer"
            >
              <User className="w-3.5 h-3.5" />
              <span>Traveler Demo</span>
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-5 space-y-4 text-xs sm:text-sm">
          {errorMsg && (
            <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs font-semibold">
              {errorMsg}
            </div>
          )}

          {activeTab === 'customer' && (
            <form onSubmit={handleCustomerLogin} className="space-y-3.5">
              <div>
                <label className="font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                  {t('emailOrPhone')} *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="traveler@gmail.com / 01711223344"
                    className="w-full pl-10 pr-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                  {t('password')} *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>{t('signInBtn')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          {activeTab === 'admin' && (
            <form onSubmit={handleAdminLogin} className="space-y-3.5">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs">
                {language === 'bn' 
                  ? 'অ্যাডমিন ক্রেডেনশিয়াল: eleashahmed6223@gmail.com অথবা সরাসরি উপরের "Admin Demo" বাটনে ক্লিক করুন।' 
                  : 'Admin email: eleashahmed6223@gmail.com or click the one-click Admin Demo button.'}
              </div>

              <div>
                <label className="font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                  Admin Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eleashahmed6223@gmail.com"
                    className="w-full pl-10 pr-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl outline-none focus:border-purple-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="font-semibold text-neutral-700 dark:text-neutral-300 block mb-1">
                  Admin Master Password *
                </label>
                <div className="relative">
                  <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="admin123"
                    className="w-full pl-10 pr-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl outline-none focus:border-purple-500 font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Access Admin Control Panel</span>
              </button>
            </form>
          )}

          {activeTab === 'register' && (
            <form onSubmit={handleRegister} className="space-y-3">
              <div>
                <label className="font-semibold block mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Mahfuzur Rahman"
                  className="w-full px-3.5 py-2 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Phone Number (WhatsApp) *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="01712345678"
                  className="w-full px-3.5 py-2 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl font-mono outline-none"
                />
              </div>

              <div>
                <label className="font-semibold block mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="mahfuz@gmail.com"
                  className="w-full px-3.5 py-2 bg-neutral-50 dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-xl outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-colors mt-2 cursor-pointer"
              >
                {t('createAccountBtn')}
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
