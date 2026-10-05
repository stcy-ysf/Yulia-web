import React from 'react';
import { GraduationCap, Building, Check, HeartHandshake, Clock, ArrowRight } from 'lucide-react';
import { ATTORNEY_INFO, getAttorneyInfoLocalized } from '../data/legalData';
import { useLanguage } from '../context/LanguageContext';

interface AboutSectionProps {
  onNavigate?: (tab: 'home' | 'about' | 'services' | 'testimonials' | 'contact') => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const localizedInfo = getAttorneyInfoLocalized(language);

  return (
    <section id="about" className="py-20 md:py-28 bg-[#F4EFEA] relative scroll-mt-16">
      <div id="sobre" className="absolute -top-16 left-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#8C6D58] font-semibold">
            {t.about.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C1E16]">
            {t.about.heading}
          </h2>
          <div className="w-12 h-0.5 bg-[#8C6D58] mx-auto rounded-full mt-2" />
          <p className="text-base sm:text-lg text-[#6B5E55] font-light pt-2">
            {t.about.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Key Metrics & Highlights Panel */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Key Highlight Card */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#EAE3DA] space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#2C1E16] text-[#FAF8F5] flex items-center justify-center font-serif text-xl font-bold">
                  YM
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#2C1E16]">{ATTORNEY_INFO.name}</h3>
                  <p className="text-xs text-[#8C6D58] font-medium">
                    {t.about.role}
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#6B5E55] leading-relaxed">
                {t.about.p2}
              </p>

              <div className="grid grid-cols-2 gap-3 text-center border-t border-[#EAE3DA] pt-4">
                <div className="p-3 rounded-xl bg-[#FAF8F5]">
                  <p className="font-serif text-2xl font-bold text-[#2C1E16]">8+</p>
                  <p className="text-[11px] text-[#6B5E55] uppercase tracking-wider font-medium">
                    {t.about.yearsExp}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF8F5]">
                  <p className="font-serif text-2xl font-bold text-[#2C1E16]">980+</p>
                  <p className="text-[11px] text-[#6B5E55] uppercase tracking-wider font-medium">
                    {t.about.casesGuided}
                  </p>
                </div>
              </div>
            </div>

            

            {/* Languages Badge */}
            <div className="p-4 rounded-xl bg-white border border-[#EAE3DA] space-y-2 text-xs">
              <span className="font-semibold text-[#2C1E16] block">
                {t.about.multilingualTitle}
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#EAE3DA] text-[11px] text-[#2C1E16] font-medium">
                  {t.about.langPt}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#EAE3DA] text-[11px] text-[#2C1E16] font-medium">
                  {t.about.langEn}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#EAE3DA] text-[11px] text-[#2C1E16] font-medium">
                  {t.about.langUaRu}
                </span>
              </div>
            </div>


          </div>

          {/* Detailed Description & Experience */}
          <div className="lg:col-span-8 space-y-8 bg-white p-8 rounded-2xl border border-[#EAE3DA] shadow-xs">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2C1E16]">
                {t.about.heading}
              </h3>
              <p className="text-[#6B5E55] leading-relaxed font-light text-sm sm:text-base">
                {t.about.p1}
              </p>
              <p className="text-[#6B5E55] leading-relaxed font-light text-sm sm:text-base">
                {t.about.p2}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
