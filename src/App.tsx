import React, { useState, useEffect } from 'react';
import { Navbar, NavTab } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast, ToastMessage } from './components/Toast';
import { LegalService, AppointmentBooking } from './types';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { MessageCircle } from 'lucide-react';

const MainApp: React.FC = () => {
  const { t } = useLanguage();
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<LegalService | null>(null);
  const [bookingServiceId, setBookingServiceId] = useState<string>('consulta-juridica');
  const [bookingInitialMessage, setBookingInitialMessage] = useState<string>('');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Parse initial hash or history
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.toLowerCase().replace('#', '');
      if (hash === 'sobre' || hash === 'about') {
        setCurrentTab('home');
        setTimeout(() => {
          const el = document.getElementById('about') || document.getElementById('sobre');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
      else if (hash === 'servicos' || hash === 'services') setCurrentTab('services');
      else if (hash === 'testemunhos' || hash === 'testimonials') setCurrentTab('testimonials');
      else if (hash === 'contactos' || hash === 'contact') setCurrentTab('contact');
      else if (hash === 'home' || hash === '') setCurrentTab('home');
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigate = (tab: NavTab) => {
    if (tab === 'about') {
      setCurrentTab('home');
      window.location.hash = 'about';
      setTimeout(() => {
        const el = document.getElementById('about') || document.getElementById('sobre');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    setCurrentTab(tab);
    window.location.hash = tab === 'home' ? '' : tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookServiceDirect = (serviceId: string) => {
    setBookingServiceId(serviceId);
    handleNavigate('contact');
  };

  const addToast = (type: 'success' | 'error' | 'info', title: string, message: string) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, type, title, message }]);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleSuccessSubmit = (booking: AppointmentBooking) => {
    addToast(
      'success',
      t.contact.successTitle,
      `Obrigado, ${booking.name}. Responderemos para ${booking.email} no prazo de 24 horas úteis.`
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C1E16] flex flex-col font-sans selection:bg-[#EAE3DA]">
      
      {/* Top Navigation Bar with active tab state and 4 languages */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenBooking={(serviceId) => {
          if (serviceId) setBookingServiceId(serviceId);
          handleNavigate('contact');
        }}
      />

      {/* Main Single Page View Container */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <div className="animate-fade-in">
            <Hero onNavigate={handleNavigate} />
            
            {/* Integrated About Me Section directly on Home Page */}
            <AboutSection onNavigate={handleNavigate} />
          </div>
        )}

        {currentTab === 'services' && (
          <div className="animate-fade-in">
            <ServicesSection
              onSelectServiceModal={(service) => setSelectedServiceForModal(service)}
              onBookServiceDirect={handleBookServiceDirect}
            />
          </div>
        )}

        {currentTab === 'testimonials' && (
          <div className="animate-fade-in">
            <TestimonialsSection />
          </div>
        )}

        {currentTab === 'contact' && (
          <div className="animate-fade-in">
            <ContactSection
              initialServiceId={bookingServiceId}
              initialMessage={bookingInitialMessage}
              onSuccessSubmit={handleSuccessSubmit}
            />
          </div>
        )}
      </main>

      {/* Footer with Tab Navigation Links & Language Switcher */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Quick Action */}
      <a
        href="https://wa.me/351912345678"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-40 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
        aria-label="WhatsApp"
        title="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-semibold pr-1">
          WhatsApp
        </span>
      </a>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onBookService={(serviceId) => {
          setSelectedServiceForModal(null);
          handleBookServiceDirect(serviceId);
        }}
      />

      {/* Toast Notifications */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />

    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}
