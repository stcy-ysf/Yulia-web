import React, { useState, useMemo } from 'react';
import { ChevronRight } from 'lucide-react';
import { getLocalizedServices } from '../data/legalData';
import { LegalService, ServiceCategory } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ServicesSectionProps {
  onSelectServiceModal: (service: LegalService) => void;
  onBookServiceDirect: (serviceId: string) => void;
}

// Heading for services that aren't tied to one specific category
const GENERAL_LABEL: Record<string, string> = {
  pt: 'Apoio Geral',
  en: 'General Support',
  ru: 'Общая поддержка',
  uk: 'Загальна підтримка',
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceModal,
  onBookServiceDirect,
}) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('todos');

  const services = useMemo(() => getLocalizedServices(language), [language]);

  const categories: { key: ServiceCategory; label: string }[] = [
    { key: 'todos', label: t.services.allCat },
    { key: 'imigracao', label: t.services.imigracaoCat },
    { key: 'fiscal', label: t.services.taxCat },
    { key: 'empresas', label: t.services.empresasCat },
    { key: 'civil_imobiliario', label: t.services.realEstateCat },
  ];

  // Topic groups shown in the list, each with its own heading
  const groups: { key: ServiceCategory; label: string }[] = [
    { key: 'todos', label: GENERAL_LABEL[language] ?? GENERAL_LABEL.pt },
    ...categories.filter((c) => c.key !== 'todos'),
  ];

  const visibleGroups = groups
    .filter((g) => selectedCategory === 'todos' || g.key === selectedCategory || g.key === 'todos')
    .map((g) => ({ ...g, items: services.filter((s) => s.category === g.key) }))
    .filter((g) => g.items.length > 0);

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#8C6D58] font-semibold">
            {t.services.badge}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2C1E16]">
            {t.services.heading}
          </h2>
          <div className="w-12 h-0.5 bg-[#8C6D58] mx-auto rounded-full mt-2" />
          
        </div>

        

        {/* Services grouped by topic */}
        <div className="max-w-4xl mx-auto space-y-14">
          {visibleGroups.map((group) => (
            <div key={group.key}>
              {/* Topic heading */}
              <div className="mb-2">
                <span className="text-xs uppercase tracking-widest text-[#8C6D58] font-semibold">
                  {group.label}
                </span>
                <div className="w-10 h-0.5 bg-[#8C6D58] rounded-full mt-2" />
              </div>

              <ul className="divide-y divide-[#EAE3DA]">
                {group.items.map((service) => (
                  <li
                    key={service.id}
                    className="py-5 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 group"
                  >
                    <div className="flex items-start gap-4">
                      {/* Dot */}
                      <span className="mt-2.5 w-2 h-2 rounded-full bg-[#8C6D58] shrink-0" />

                      {/* Title & Description */}
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <button
                            onClick={() => onSelectServiceModal(service)}
                            className="text-left font-serif text-lg sm:text-xl font-semibold text-[#2C1E16] group-hover:text-[#8C6D58] transition-colors leading-snug"
                          >
                            {service.title}
                          </button>
                          {service.badge && (
                            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#F2EAE1] text-[#8C6D58]">
                              {service.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-[#6B5E55] mt-1 font-light leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Action */}
                    <div className="flex items-center pl-6 sm:pl-0 shrink-0">
                      <button
                        onClick={() => onBookServiceDirect(service.id)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#2C1E16] hover:text-[#8C6D58] transition-colors"
                      >
                        <span>{t.services.requestService}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
