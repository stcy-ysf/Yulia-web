import React from 'react';
import { ArrowUp, Award, MapPin, Phone, Mail, Globe, Calendar } from 'lucide-react';
import { ATTORNEY_INFO } from '../data/legalData';
import { useLanguage } from '../context/LanguageContext';
import { NavTab } from './Navbar';
import { Language } from '../data/translations';

interface FooterProps {
  onNavigate: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { language, setLanguage, t, availableLanguages } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabClick = (tab: NavTab) => {
    onNavigate(tab);
    scrollToTop();
  };

  return (
    <footer className="bg-[#2C1E16] text-[#FAF8F5] pt-16 pb-12 border-t border-[#4A3B31]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#4A3B31]">
          
          {/* Brand & Monogram (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#8C6D58] text-[#FAF8F5] flex items-center justify-center font-serif text-lg font-semibold shadow-sm">
                YM
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#FAF8F5]">
                  {ATTORNEY_INFO.name}
                </h3>
                <p className="text-xs text-[#D8CCC0]">
                  {t.hero.titleLine1} {t.hero.titleHighlight}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#D8CCC0] font-light leading-relaxed max-w-sm">
              {t.about.p2}
            </p>

            <div className="inline-flex items-center gap-2 text-[11px] text-[#D8CCC0] bg-[#3B2C23] px-3 py-1.5 rounded-lg border border-[#4A3B31]">
              <Award className="w-3.5 h-3.5 text-[#8C6D58]" />
              <span>{t.hero.feature1}</span>
            </div>
          </div>

          {/* Quick Nav Links (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#FAF8F5] border-b border-[#4A3B31] pb-2">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2 text-xs text-[#D8CCC0]">
              <li>
                <button
                  onClick={() => handleTabClick('home')}
                  className="hover:text-[#FAF8F5] transition-colors text-left"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('about')}
                  className="hover:text-[#FAF8F5] transition-colors text-left"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('services')}
                  className="hover:text-[#FAF8F5] transition-colors text-left"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('testimonials')}
                  className="hover:text-[#FAF8F5] transition-colors text-left"
                >
                  {t.nav.testimonials}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleTabClick('contact')}
                  className="hover:text-[#FAF8F5] transition-colors text-left font-medium text-amber-200"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Office Location & Contact (Col 4) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#FAF8F5] border-b border-[#4A3B31] pb-2">
              {t.footer.officeTitle}
            </h4>
            <div className="space-y-2.5 text-xs text-[#D8CCC0]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8C6D58] shrink-0 mt-0.5" />
                <span>{ATTORNEY_INFO.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#8C6D58] shrink-0" />
                <span>{ATTORNEY_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#8C6D58] shrink-0" />
                <a href={`mailto:${ATTORNEY_INFO.email}`} className="hover:underline">
                  {ATTORNEY_INFO.email}
                </a>
              </p>
            </div>

            {/* Language Switcher Buttons in Footer */}
            <div className="pt-3 border-t border-[#4A3B31]">
              <span className="text-[10px] uppercase font-semibold text-[#8C6D58] block mb-2 tracking-wider">
                {t.nav.selectLanguage}
              </span>
              <div className="flex flex-wrap gap-2">
                {availableLanguages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code as Language)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors flex items-center gap-1.5 ${
                      language === l.code
                        ? 'bg-[#8C6D58] text-[#FAF8F5] border-[#8C6D58]'
                        : 'bg-[#3B2C23] text-[#D8CCC0] border-[#4A3B31] hover:border-[#8C6D58]'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Legal Disclaimer & Back to Top */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#A8988C]">
          <p className="text-center md:text-left leading-relaxed max-w-3xl">
            © {new Date().getFullYear()} {ATTORNEY_INFO.name}. {t.footer.rights}
            <br />
            {t.footer.legalDisclaimer}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 bg-[#3B2C23] hover:bg-[#8C6D58] text-[#FAF8F5] px-4 py-2 rounded-xl text-xs font-medium transition-colors border border-[#4A3B31] shrink-0"
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
