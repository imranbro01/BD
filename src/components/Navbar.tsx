import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Globe, 
  Sun, 
  Moon, 
  User as UserIcon, 
  ShieldCheck, 
  LogOut, 
  Menu, 
  X, 
  Compass, 
  Calendar,
  Sparkles,
  MapPin,
  Bookmark
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  activeSection: string;
  onNavigate: (section: string) => void;
  onOpenAuth: (defaultTab?: 'customer' | 'admin' | 'register') => void;
  wishlistCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  activeSection,
  onNavigate,
  onOpenAuth,
  wishlistCount
}) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { user, isAdmin, isLoggedIn, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: t('navHome') },
    { id: 'packages', label: t('navPackages') },
    { id: 'videos', label: t('navVideos') },
    { id: 'natural', label: t('navNatural') },
    { id: 'historical', label: t('navHistorical') },
    { id: 'custom-tour', label: t('navCustomTour') },
    { id: 'reviews', label: t('navReviews') },
    { id: 'contact', label: t('navContact') },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors duration-300 bg-white/90 dark:bg-neutral-900/90 border-neutral-200/80 dark:border-neutral-800/80 shadow-xs">
      
      {/* Top Hotline Bar */}
      <div className="bg-emerald-700 dark:bg-emerald-950 text-white text-[11px] sm:text-xs py-1.5 px-4 border-b border-emerald-600/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          <div className="flex items-center gap-4 flex-wrap">
            <a 
              href="tel:01312816223" 
              className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors font-mono font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
              <span>{t('hotlineText')}: <strong>01312816223</strong></span>
            </a>

            <a 
              href="mailto:eleashahmed6223@gmail.com" 
              className="hidden sm:flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-300" />
              <span>eleashahmed6223@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <a
              href="https://wa.me/8801312816223?text=Hello%20Cholo%20Ghuri%20Bangladesh,%20I%20want%20to%20know%20about%20your%20tour%20packages."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-0.5 rounded-full text-[10px] font-semibold transition-all shadow-2xs"
            >
              <MessageCircle className="w-3 h-3 fill-current" />
              <span>{t('chatWhatsApp')}</span>
            </a>

            {/* Quick Demo Badges */}
            <span className="hidden md:inline-flex items-center gap-1 text-[10px] bg-emerald-800/60 px-2 py-0.5 rounded-full text-emerald-200 border border-emerald-500/30">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Govt. Approved Tour Operator</span>
            </span>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
            <Compass className="w-6 h-6 animate-spin-slow" />
          </div>

          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-neutral-900 dark:text-white flex items-center gap-1">
              <span>{language === 'bn' ? 'চলো ঘুরি' : 'Cholo Ghuri'}</span>
              <span className="text-emerald-600 dark:text-emerald-400">{language === 'bn' ? 'বাংলাদেশ' : 'Bangladesh'}</span>
            </span>
            <span className="text-[10px] text-neutral-500 dark:text-neutral-400 -mt-1 font-medium hidden sm:block">
              {language === 'bn' ? 'প্রাকৃতিক সৌন্দর্য ও ঐতিহাসিক ঐতিহ্য' : 'Natural Beauty & Heritage Tours'}
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold'
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all bg-neutral-100 hover:bg-neutral-200 border-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-750 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200"
            title="Switch Language / ভাষা পরিবর্তন"
          >
            <Globe className="w-3.5 h-3.5 text-emerald-500" />
            <span className="font-bold">{language === 'bn' ? 'EN' : 'বাংলা'}</span>
          </button>

          {/* Theme Switcher Toggle */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl border text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 border-neutral-300 dark:border-neutral-700 transition-colors"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>

          {/* User Account / Admin Action Button */}
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className={`flex items-center gap-2 p-1.5 sm:px-3 sm:py-1.5 rounded-xl border transition-all ${
                  isAdmin 
                    ? 'bg-purple-600/10 border-purple-500/30 text-purple-600 dark:text-purple-400' 
                    : 'bg-emerald-600/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                }`}
              >
                <img
                  src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'}
                  alt={user?.name}
                  className="w-6 h-6 rounded-lg object-cover ring-1 ring-emerald-500/40"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs font-bold hidden sm:inline max-w-[100px] truncate">
                  {user?.name.split(' ')[0]}
                </span>
                {isAdmin && (
                  <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-purple-600 text-white font-bold hidden sm:inline">
                    Admin
                  </span>
                )}
              </button>

              {/* Dropdown Menu */}
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-xl py-2 z-50 text-neutral-800 dark:text-neutral-200 text-xs">
                  <div className="px-3 py-2 border-b border-neutral-100 dark:border-neutral-800">
                    <p className="font-bold truncate">{user?.name}</p>
                    <p className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate">{user?.email}</p>
                  </div>

                  {isAdmin ? (
                    <button
                      onClick={() => handleNavClick('admin-dashboard')}
                      className="w-full text-left px-3 py-2 hover:bg-purple-500/10 hover:text-purple-600 flex items-center gap-2 font-medium"
                    >
                      <ShieldCheck className="w-4 h-4 text-purple-500" />
                      <span>{t('navAdminPanel')}</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavClick('user-dashboard')}
                      className="w-full text-left px-3 py-2 hover:bg-emerald-500/10 hover:text-emerald-600 flex items-center gap-2 font-medium"
                    >
                      <Calendar className="w-4 h-4 text-emerald-500" />
                      <span>{t('navDashboard')}</span>
                    </button>
                  )}

                  <button
                    onClick={() => {
                      logout();
                      setUserDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-rose-500/10 hover:text-rose-600 text-rose-500 flex items-center gap-2 font-medium border-t border-neutral-100 dark:border-neutral-800 mt-1"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>{t('navLogout')}</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => onOpenAuth('customer')}
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5"
              >
                <UserIcon className="w-3.5 h-3.5" />
                <span>{t('navLogin')}</span>
              </button>

              <button
                onClick={() => onOpenAuth('admin')}
                className="hidden sm:flex px-2.5 py-1.5 border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-xl text-xs font-semibold transition-all items-center gap-1"
                title="Admin Control Panel Login"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Admin</span>
              </button>
            </div>
          )}

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 space-y-2 text-xs">
          <div className="grid grid-cols-2 gap-1.5 py-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-xl font-medium ${
                  activeSection === link.id
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2">
            {isLoggedIn ? (
              <div className="flex items-center justify-between bg-neutral-100 dark:bg-neutral-800 p-2.5 rounded-xl">
                <div className="flex items-center gap-2">
                  <img
                    src={user?.avatar}
                    alt={user?.name}
                    className="w-7 h-7 rounded-lg object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <p className="font-bold text-neutral-900 dark:text-white">{user?.name}</p>
                    <p className="text-[10px] text-neutral-500">{user?.role === 'admin' ? 'Administrator' : 'Customer'}</p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    logout();
                    setMobileMenuOpen(false);
                  }}
                  className="p-1.5 text-rose-500 hover:bg-rose-500/10 rounded-lg"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onOpenAuth('customer');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 bg-emerald-600 text-white rounded-xl font-bold flex items-center justify-center gap-1"
                >
                  <UserIcon className="w-4 h-4" />
                  <span>Traveler Login</span>
                </button>
                <button
                  onClick={() => {
                    onOpenAuth('admin');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2 bg-purple-600 text-white rounded-xl font-bold flex items-center justify-center gap-1"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Admin Panel</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </header>
  );
};
