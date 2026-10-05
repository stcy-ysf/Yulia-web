import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, TRANSLATIONS, Translations } from '../data/translations';

export interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  flag: string;
}

export const AVAILABLE_LANGUAGES: LanguageOption[] = [
  { code: 'pt', label: 'Português', nativeLabel: 'Português', flag: '🇵🇹' },
  { code: 'en', label: 'English', nativeLabel: 'English', flag: '🇬🇧' },
  { code: 'uk', label: 'Ukrainian', nativeLabel: 'Українська', flag: '🇺🇦' },
  { code: 'ru', label: 'Russian', nativeLabel: 'Русский', flag: '🇷🇺' },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  availableLanguages: LanguageOption[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('ym_preferred_language') as Language;
      if (saved && (saved === 'pt' || saved === 'en' || saved === 'ru' || saved === 'uk')) {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('ym_preferred_language', lang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    // Sync html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const t = TRANSLATIONS[language] || TRANSLATIONS.pt;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLanguages: AVAILABLE_LANGUAGES }}>
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
