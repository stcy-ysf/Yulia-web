import React from 'react';
import { Calendar, MessageSquare, ShieldCheck, MapPin, Award, CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';
import { ATTORNEY_INFO } from '../data/legalData';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  onNavigate: (tab: 'home' | 'about' | 'services' | 'testimonials' | 'contact') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const displayPhoto = "/portrait.png";
  const { t } = useLanguage();

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#FAF8F5]">
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4EFEA] rounded-full blur-3xl opacity-60 -z-10 transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F2EAE1] rounded-full blur-3xl opacity-50 -z-10 transform -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            


            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2C1E16] leading-[1.12] tracking-tight">
                {ATTORNEY_INFO.name}
              </h1>
              <p className="text-lg sm:text-2xl font-medium text-[#8C6D58] font-serif italic">
                {t.hero.titleLine1} {t.hero.titleHighlight}
              </p>
            </div>

            {/* Slogan & Description */}
            <p className="text-base sm:text-lg text-[#6B5E55] leading-relaxed max-w-2xl font-light">
              {t.hero.subtitle}
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 w-full max-w-xl text-xs sm:text-sm text-[#4A3B31]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D58] shrink-0" />
                <span>{t.hero.feature1}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D58] shrink-0" />
                <span>{t.hero.feature2}</span>
              </div>
              
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2.5 bg-[#2C1E16] hover:bg-[#8C6D58] text-[#FAF8F5] px-6 py-3.5 rounded-xl text-sm sm:text-base font-medium transition-all shadow-md hover:shadow-lg active:scale-98 group"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t.hero.bookButton}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Office Location Quick Badge */}
            <div className="pt-4 flex items-center gap-3 text-xs text-[#6B5E55] border-t border-[#EAE3DA]/80 w-full max-w-xl">
              <MapPin className="w-4 h-4 text-[#8C6D58] shrink-0" />
              <span>
                <strong>{t.hero.statLocation}:</strong> {t.hero.officeAddressLabel}
              </span>
            </div>

          </div>

          {/* Assistant Photo / Visual Identity Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame Behind Photo */}
              <div className="absolute inset-0 bg-[#EAE3DA] rounded-2xl transform rotate-2 scale-[1.02] -z-10 transition-transform duration-500 hover:rotate-1" />
              
              <div className="bg-white p-3 rounded-2xl shadow-xl border border-[#EAE3DA] overflow-hidden">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#F4EFEA]">
                  <img
                    src={displayPhoto}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop";
                    }}
                    alt={`${ATTORNEY_INFO.name} - Portugal`}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#2C1E16]/90 backdrop-blur-md p-3.5 rounded-xl text-[#FAF8F5] border border-white/10 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-serif text-base font-semibold">{ATTORNEY_INFO.name}</p>
                        <p className="text-[11px] text-[#D8CCC0]">
                          {t.hero.badge}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#8C6D58] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-4 h-4 text-[#FAF8F5]" />
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
