import React from 'react';
import { X, CheckCircle2, Clock, FileText, DollarSign, Calendar, ArrowRight, Shield } from 'lucide-react';
import { LegalService } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ServiceDetailModalProps {
  service: LegalService | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  const { t } = useLanguage();

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2C1E16]/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#FAF8F5] rounded-2xl max-w-2xl w-full border border-[#EAE3DA] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto">
        
        {/* Modal Header */}
        <div className="p-6 bg-white border-b border-[#EAE3DA] flex items-start justify-between gap-4">
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full bg-[#F2EAE1] text-[#8C6D58] border border-[#EAE3DA]">
              {service.badge || t.services.badge}
            </span>
            <h3 className="font-serif text-2xl font-semibold text-[#2C1E16] mt-2">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#6B5E55] hover:bg-[#F4EFEA] hover:text-[#2C1E16] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Detailed Overview */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-[#8C6D58]">
              {t.services.modalScope}
            </h4>
            <p className="text-sm text-[#4A3B31] leading-relaxed font-light">
              {service.fullDescription}
            </p>
          </div>

          {/* Timeframe & Fee Guidelines */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#EAE3DA] flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#8C6D58] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-[#2C1E16] block">{t.services.modalTimeframe}</span>
                <span className="text-xs text-[#6B5E55]">{service.estimatedTimeframe}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#EAE3DA] flex items-start gap-3">
              <DollarSign className="w-5 h-5 text-[#8C6D58] shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-semibold text-[#2C1E16] block">{t.services.modalFee}</span>
                <span className="text-xs text-[#6B5E55]">{service.feeGuideline}</span>
              </div>
            </div>
          </div>

          {/* Required Document Checklist */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs uppercase font-semibold tracking-wider text-[#8C6D58] flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#8C6D58]" />
              <span>{t.services.modalDocs}</span>
            </h4>

            <ul className="space-y-2">
              {service.documentsRequired.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#4A3B31] bg-white p-2.5 rounded-lg border border-[#EAE3DA]">
                  <CheckCircle2 className="w-4 h-4 text-[#8C6D58] shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guarantee Note */}
          <div className="p-4 rounded-xl bg-[#F4EFEA] border border-[#EAE3DA] flex items-center gap-3 text-xs text-[#6B5E55]">
            <Shield className="w-5 h-5 text-[#8C6D58] shrink-0" />
            <span>
              {t.services.modalCompliance}
            </span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-[#EAE3DA] flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#6B5E55] hover:text-[#2C1E16]"
          >
            {t.services.modalClose}
          </button>

          
        </div>

      </div>
    </div>
  );
};
