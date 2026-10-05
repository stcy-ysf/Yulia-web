import React, { useState, useEffect, useMemo } from 'react';
import { 
  Send, Phone, Mail, MapPin, Clock, 
  CheckCircle2, MessageCircle, Linkedin, Globe 
} from 'lucide-react';
import { ATTORNEY_INFO, getAttorneyInfoLocalized, getLocalizedServices } from '../data/legalData';
import { AppointmentBooking } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ContactSectionProps {
  initialServiceId?: string;
  initialMessage?: string;
  onSuccessSubmit: (booking: AppointmentBooking) => void;
  officeMapPhotoUrl?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialServiceId,
  initialMessage,
  onSuccessSubmit,
  officeMapPhotoUrl,
}) => {
  const { language, t } = useLanguage();
  const localizedInfo = useMemo(() => getAttorneyInfoLocalized(language), [language]);
  const services = useMemo(() => getLocalizedServices(language), [language]);

  const displayMapPhoto = officeMapPhotoUrl || "https://images.unsplash.com/photo-1548625361-18516086f4a8?q=80&w=800&auto=format&fit=crop";
  const [formData, setFormData] = useState<AppointmentBooking>({
    name: '',
    phone: '',
    email: '',
    serviceId: initialServiceId || 'consulta-juridica',
    mode: 'presencial',
    preferredDate: '',
    preferredTime: '10:00',
    message: initialMessage || '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
    if (initialMessage) {
      setFormData((prev) => ({ ...prev, message: initialMessage }));
    }
  }, [initialServiceId, initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      onSuccessSubmit(formData);
    }, 1000);
  };

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
          
          {/* Booking Form (Left / Col 7) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-[#EAE3DA] shadow-sm space-y-6">
            
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#2C1E16]">
                  {t.contact.successTitle}
                </h3>
                <p className="text-sm text-[#6B5E55] max-w-md mx-auto leading-relaxed">
                  {t.contact.successMsg.replace('{name}', formData.name)}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 inline-flex items-center gap-2 bg-[#2C1E16] text-[#FAF8F5] px-6 py-2.5 rounded-xl text-xs font-medium hover:bg-[#8C6D58] transition-colors"
                >
                  {t.contact.submitAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#2C1E16]">
                      {t.contact.fullName}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.fullName}
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#EAE3DA] rounded-xl focus:outline-none focus:border-[#8C6D58] text-[#2C1E16]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#2C1E16]">
                      {t.contact.phone}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+351 912 345 678"
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#EAE3DA] rounded-xl focus:outline-none focus:border-[#8C6D58] text-[#2C1E16]"
                    />
                  </div>
                </div>

                {/* Email & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#2C1E16]">
                      {t.contact.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@email.com"
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#EAE3DA] rounded-xl focus:outline-none focus:border-[#8C6D58] text-[#2C1E16]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#2C1E16]">
                      {t.contact.serviceReq}
                    </label>
                    <select
                      value={formData.serviceId}
                      onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#EAE3DA] rounded-xl focus:outline-none focus:border-[#8C6D58] text-[#2C1E16]"
                    >
                      {services.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mode (In-Person vs Online) */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#2C1E16]">
                    {t.contact.format}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, mode: 'presencial' })}
                      className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                        formData.mode === 'presencial'
                          ? 'border-[#8C6D58] bg-[#F2EAE1] text-[#2C1E16] font-semibold shadow-xs'
                          : 'border-[#EAE3DA] bg-[#FAF8F5] text-[#6B5E55] hover:bg-white'
                      }`}
                    >
                      <MapPin className="w-4 h-4 text-[#8C6D58]" />
                      <span>{t.contact.inPerson}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, mode: 'online' })}
                      className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-2 transition-all ${
                        formData.mode === 'online'
                          ? 'border-[#8C6D58] bg-[#F2EAE1] text-[#2C1E16] font-semibold shadow-xs'
                          : 'border-[#EAE3DA] bg-[#FAF8F5] text-[#6B5E55] hover:bg-white'
                      }`}
                    >
                      <Globe className="w-4 h-4 text-[#8C6D58]" />
                      <span>{t.contact.online}</span>
                    </button>
                  </div>
                </div>

                {/* Preferred Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#2C1E16]">
                      {t.contact.prefDate}
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#EAE3DA] rounded-xl focus:outline-none focus:border-[#8C6D58] text-[#2C1E16]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#2C1E16]">
                      {t.contact.prefTime}
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#EAE3DA] rounded-xl focus:outline-none focus:border-[#8C6D58] text-[#2C1E16]"
                    >
                      <option value="10:00">10:00</option>
                      <option value="11:30">11:30</option>
                      <option value="14:30">14:30</option>
                      <option value="16:00">16:00</option>
                      <option value="17:30">17:30</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#2C1E16]">
                    {t.contact.caseDetails}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.caseDetailsPlaceholder}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#EAE3DA] rounded-xl focus:outline-none focus:border-[#8C6D58] text-[#2C1E16]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#2C1E16] hover:bg-[#8C6D58] text-[#FAF8F5] py-3.5 rounded-xl text-base font-medium transition-colors shadow-sm disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>{t.contact.submitting}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.contact.submitBtn}</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#A8988C] text-center font-light pt-1">
                  🔒 {t.contact.privacyNote}
                </p>

              </form>
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
