import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Calendar, Globe, Check, ChevronDown } from 'lucide-react';
import { ATTORNEY_INFO } from '../data/legalData';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../data/translations';

export type NavTab = 'home' | 'about' | 'services' | 'testimonials' | 'contact';

interface NavbarProps {
  currentTab: NavTab;
  onNavigate: (tab: NavTab) => void;
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { language, setLanguage, t, availableLanguages } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks: { id: NavTab; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleSelectTab = (tab: NavTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
  };

  const handleSelectLanguage = (code: Language) => {
    setLanguage(code);
    setLangDropdownOpen(false);
  };

  const currentLangObj = availableLanguages.find((l) => l.code === language) || availableLanguages[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-sm border-b border-[#EAE3DA] py-3'
          : 'bg-[#FAF8F5]/85 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Monogram & Name */}
        <button
          onClick={() => handleSelectTab('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#2C1E16] text-[#FAF8F5] flex items-center justify-center font-serif text-lg font-semibold tracking-wider group-hover:bg-[#8C6D58] transition-colors shadow-xs">
            YM
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl font-semibold text-[#2C1E16] leading-tight group-hover:text-[#8C6D58] transition-colors">
              {ATTORNEY_INFO.name}
            </span>
            <span className="text-[11px] uppercase tracking-wider text-[#8C6D58] font-medium">
              Faro, Portugal • Legal Support
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-[#EAE3DA] shadow-xs">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleSelectTab(link.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#2C1E16] text-[#FAF8F5] shadow-xs font-semibold'
                    : 'text-[#6B5E55] hover:text-[#2C1E16] hover:bg-[#FAF8F5]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Actions (Language Switcher + Booking CTA) */}
        <div className="hidden lg:flex items-center gap-3">
          
          {/* Multilingual Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border border-[#EAE3DA] bg-white hover:bg-[#F4EFEA] text-xs font-semibold text-[#2C1E16] transition-colors shadow-xs"
              aria-label="Select Language"
            >
              <span className="text-base leading-none">{currentLangObj.flag}</span>
              <span className="uppercase tracking-wider">{currentLangObj.code}</span>
              <ChevronDown className="w-3.5 h-3.5 text-[#8C6D58]" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl border border-[#EAE3DA] shadow-xl py-1 z-50 animate-fade-in">
                <div className="px-3 py-1.5 text-[10px] uppercase font-semibold text-[#8C6D58] border-b border-[#EAE3DA]">
                  {t.nav.selectLanguage}
                </div>
                {availableLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleSelectLanguage(lang.code)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                      language === lang.code
                        ? 'bg-[#F4EFEA] text-[#2C1E16] font-semibold'
                        : 'text-[#6B5E55] hover:bg-[#FAF8F5] hover:text-[#2C1E16]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-base">{lang.flag}</span>
                      <span>{lang.nativeLabel}</span>
                    </div>
                    {language === lang.code && (
                      <Check className="w-3.5 h-3.5 text-[#8C6D58]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Primary CTA */}
          <button
            onClick={() => handleSelectTab('contact')}
            className="flex items-center gap-2 bg-[#2C1E16] hover:bg-[#8C6D58] text-[#FAF8F5] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.nav.bookConsultation}</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle + Quick Lang */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Quick Lang Cycler */}
          <button
            onClick={() => {
              const codes: Language[] = ['pt', 'en', 'uk', 'ru'];
              const nextIdx = (codes.indexOf(language) + 1) % codes.length;
              setLanguage(codes[nextIdx]);
            }}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-[#EAE3DA] bg-white text-xs font-bold text-[#2C1E16] shadow-xs"
            title="Switch language"
          >
            <span>{currentLangObj.flag}</span>
            <span className="uppercase text-[11px]">{currentLangObj.code}</span>
          </button>

          <button
            onClick={() => handleSelectTab('contact')}
            className="bg-[#2C1E16] text-[#FAF8F5] p-2 rounded-xl text-xs font-medium flex items-center justify-center shadow-xs"
            aria-label="Book Consultation"
          >
            <Calendar className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-[#EAE3DA] bg-white text-[#2C1E16] hover:bg-[#F4EFEA] transition-colors shadow-xs"
            aria-label="Open Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#EAE3DA] px-4 pt-4 pb-6 space-y-4 shadow-xl animate-fade-in">
          
          {/* Nav List */}
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleSelectTab(link.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#2C1E16] text-[#FAF8F5] font-semibold'
                      : 'text-[#4A3B31] hover:bg-[#F4EFEA]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Language Selector inside Mobile Menu */}
          <div className="pt-3 border-t border-[#EAE3DA] space-y-2">
            <span className="text-[10px] uppercase font-semibold text-[#8C6D58] tracking-wider block">
              {t.nav.selectLanguage}
            </span>
            <div className="grid grid-cols-2 gap-2">
              {availableLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-medium transition-all ${
                    language === lang.code
                      ? 'border-[#8C6D58] bg-white font-semibold text-[#2C1E16] shadow-xs'
                      : 'border-[#EAE3DA] bg-white/60 text-[#6B5E55]'
                  }`}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.nativeLabel}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleSelectTab('contact')}
            className="w-full flex items-center justify-center gap-2 bg-[#2C1E16] text-[#FAF8F5] py-3 rounded-xl text-sm font-medium shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.nav.bookConsultation}</span>
          </button>
        </div>
      )}
    </header>
  );
};
