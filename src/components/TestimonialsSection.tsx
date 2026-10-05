import React, { useState, useMemo } from 'react';
import { getLocalizedTestimonials } from '../data/legalData';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const TestimonialsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const testimonials = useMemo(() => getLocalizedTestimonials(language), [language]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Guard index bounds if testimonials length varies
  const safeIndex = currentIndex >= testimonials.length ? 0 : currentIndex;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[safeIndex] || testimonials[0];

  return (
    <section id="testemunhos" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#8C6D58] font-semibold">
            {t.testimonials.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C1E16]">
            {t.testimonials.heading}
          </h2>
          <div className="w-12 h-0.5 bg-[#8C6D58] mx-auto rounded-full mt-2" />
          <p className="text-base sm:text-lg text-[#6B5E55] font-light pt-2">
            {t.testimonials.subheading}
          </p>
        </div>

        {/* Featured Testimonial Slider Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#EAE3DA] shadow-md p-8 sm:p-12 relative">
          
          <Quote className="w-12 h-12 text-[#8C6D58]/20 absolute top-6 right-6" />

          <div className="space-y-6">
            
            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="font-serif text-xl sm:text-2xl text-[#2C1E16] italic font-normal leading-relaxed">
              "{currentTestimonial.content}"
            </p>

            {/* Author Info */}
            <div className="pt-4 border-t border-[#EAE3DA] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#2C1E16] flex items-center gap-2">
                  <span>{currentTestimonial.author}</span>
                  <span className="inline-flex items-center gap-1 text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-sans">
                    <ShieldCheck className="w-3 h-3" />
                    {t.testimonials.verifiedClient}
                  </span>
                </h4>
                <p className="text-xs text-[#6B5E55] mt-0.5">
                  {currentTestimonial.role} • {currentTestimonial.location}
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs uppercase font-medium text-[#8C6D58] block">
                  {currentTestimonial.serviceType}
                </span>
                <span className="text-[11px] text-[#A8988C]">{currentTestimonial.date}</span>
              </div>
            </div>

          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between pt-8 mt-6 border-t border-[#EAE3DA]/60">
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === safeIndex ? 'w-8 bg-[#8C6D58]' : 'w-2 bg-[#EAE3DA]'
                  }`}
                  aria-label={`View testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-xl border border-[#EAE3DA] bg-[#FAF8F5] text-[#2C1E16] hover:bg-[#2C1E16] hover:text-[#FAF8F5] transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className="p-2.5 rounded-xl border border-[#EAE3DA] bg-[#FAF8F5] text-[#2C1E16] hover:bg-[#2C1E16] hover:text-[#FAF8F5] transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
