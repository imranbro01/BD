import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: keyof typeof translations.bn) => string;
  formatNumber: (num: number | string) => string;
  formatCurrency: (num: number) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const banglaDigits: { [key: string]: string } = {
  '0': '০',
  '1': '১',
  '2': '২',
  '3': '৩',
  '4': '৪',
  '5': '৫',
  '6': '৬',
  '7': '৭',
  '8': '৮',
  '9': '৯',
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('cholo_ghuri_lang');
    return (saved === 'en' || saved === 'bn') ? saved : 'bn';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('cholo_ghuri_lang', lang);
  };

  const toggleLanguage = () => {
    const next = language === 'bn' ? 'en' : 'bn';
    setLanguage(next);
  };

  const t = (key: keyof typeof translations.bn): string => {
    const langDict = translations[language] || translations.bn;
    return langDict[key] || translations.bn[key] || key;
  };

  const formatNumber = (num: number | string): string => {
    const str = num.toString();
    if (language === 'bn') {
      return str.replace(/[0-9]/g, (w) => banglaDigits[w] || w);
    }
    return str;
  };

  const formatCurrency = (num: number): string => {
    const formatted = num.toLocaleString('en-US');
    if (language === 'bn') {
      const bnStr = formatted.replace(/[0-9]/g, (w) => banglaDigits[w] || w);
      return `৳ ${bnStr}`;
    }
    return `৳ ${formatted}`;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        formatNumber,
        formatCurrency,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
