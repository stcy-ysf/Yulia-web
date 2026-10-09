import React, { useMemo } from 'react';
import {
  Calendar, CheckCircle2, Clock, Mail, MapPin, MessageCircle, Phone,
} from 'lucide-react';
import { ATTORNEY_INFO, getAttorneyInfoLocalized } from '../data/legalData';
import { useLanguage } from '../context/LanguageContext';
import { getGoogleBookingEmbedUrl } from '../config/booking';

interface ContactSectionProps {
  officeMapPhotoUrl?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ officeMapPhotoUrl }) => {
  const { language, t } = useLanguage();
  const localizedInfo = useMemo(() => getAttorneyInfoLocalized(language), [language]);
  const displayMapPhoto = officeMapPhotoUrl || "https://images.unsplash.com/photo-1548625361-18516086f4a8?q=80&w=800&auto=format&fit=crop";
  const bookingUrl = getGoogleBookingEmbedUrl();

  return (
    <section id="contactos" className="py-20 md:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#8C6D58] font-semibold">
            {t.contact.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C1E16]">
            {t.contact.heading}
          </h2>
          <div className="w-12 h-0.5 bg-[#8C6D58] mx-auto rounded-full mt-2" />
          <p className="text-base sm:text-lg text-[#6B5E55] font-light pt-2">
            {t.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Google Calendar's booking page confirms the selected slot and notifies both sides. */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#EAE3DA] shadow-sm overflow-hidden">
            {bookingUrl ? (
              <>
                <div className="px-6 sm:px-8 py-5 border-b border-[#EAE3DA] bg-[#FAF8F5]">
                  <p className="flex items-start gap-2.5 text-sm leading-relaxed text-[#6B5E55]">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#8C6D58]" aria-hidden="true" />
                    <span>{t.contact.bookingConfirmation}</span>
                  </p>
                </div>
                <iframe
                  title="Book an appointment with Yuliya Malyshko"
                  src={bookingUrl}
                  className="block w-full min-h-[720px] bg-white"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </>
            ) : (
              <div role="status" className="min-h-80 p-8 sm:p-10 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#F4EFEA] text-[#8C6D58] flex items-center justify-center mb-5">
                  <Calendar className="w-8 h-8" aria-hidden="true" />
                </div>
                <p className="max-w-lg text-sm leading-relaxed text-[#6B5E55]">{t.contact.bookingUnavailable}</p>
                <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
                  <a className="font-semibold text-[#8C6D58] underline" href={`mailto:${ATTORNEY_INFO.email}`}>
                    {ATTORNEY_INFO.email}
                  </a>
                  <a className="font-semibold text-[#8C6D58] underline" href={`tel:${ATTORNEY_INFO.phone.replace(/\s/g, '')}`}>
                    {ATTORNEY_INFO.phone}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Office Info & Interactive Faro Map (Right / Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#EAE3DA] shadow-sm space-y-6">
              
              <h3 className="font-serif text-2xl font-semibold text-[#2C1E16] border-b border-[#EAE3DA] pb-3">
                {t.contact.officeInfo}
              </h3>

              <div className="space-y-4 text-sm text-[#4A3B31]">
                
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F4EFEA] flex items-center justify-center text-[#8C6D58] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#2C1E16] block">{t.contact.locationLabel}</span>
                    <p className="text-xs text-[#6B5E55] mt-0.5">
                      {ATTORNEY_INFO.fullAddress}<br />
                      <span className="text-[11px] text-[#8C6D58] italic">{t.contact.locationDesc}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F4EFEA] flex items-center justify-center text-[#8C6D58] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#2C1E16] block">{t.contact.directContact}</span>
                    <p className="text-xs text-[#6B5E55] mt-0.5">
                      {ATTORNEY_INFO.phone}<br />
                      <a href={`https://wa.me/351912345678`} target="_blank" rel="noreferrer" className="text-[#8C6D58] font-semibold underline">
                        {ATTORNEY_INFO.mobileWhatsApp}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F4EFEA] flex items-center justify-center text-[#8C6D58] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#2C1E16] block">{t.contact.email}</span>
                    <a href={`mailto:${ATTORNEY_INFO.email}`} className="text-xs text-[#8C6D58] hover:underline font-medium">
                      {ATTORNEY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F4EFEA] flex items-center justify-center text-[#8C6D58] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#2C1E16] block">{t.contact.hoursLabel}</span>
                    <p className="text-xs text-[#6B5E55] mt-0.5">
                      {localizedInfo.workingHours}
                    </p>
                  </div>
                </div>

              </div>

              {/* Socials & Messenger Links */}
              <div className="pt-4 border-t border-[#EAE3DA] flex items-center gap-3">
                <a
                  href="https://wa.me/351912345678"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-xl text-xs font-semibold shadow-xs hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                
              </div>

            </div>

            {/* Simulated Interactive Faro Map Component */}
            <div className="bg-white p-3 rounded-2xl border border-[#EAE3DA] shadow-sm overflow-hidden">
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-[#EAE3DA] flex flex-col justify-between p-4">
                <img
                  src={displayMapPhoto}
                  alt="City Map of Faro, Algarve, Portugal"
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                
                <div className="relative z-10 bg-[#2C1E16]/90 text-[#FAF8F5] p-3 rounded-xl backdrop-blur-xs flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold">Faro Office (Algarve)</p>
                    <p className="text-[10px] text-[#D8CCC0]">Avenida da República • Faro</p>
                  </div>
                </div>

                <div className="relative z-10 self-end">
                  <a
                    href="https://maps.google.com/?q=Faro,Portugal"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white text-[#2C1E16] px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md hover:bg-[#F4EFEA] transition-colors"
                  >
                    <span>{t.contact.googleMapsBtn}</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
