export type Language = 'pt' | 'en' | 'ru' | 'uk';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    testimonials: string;
    contact: string;
    bookConsultation: string;
    selectLanguage: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    bookButton: string;
    exploreServices: string;
    aboutButton: string;
    statYears: string;
    statYearsLabel: string;
    statCases: string;
    statCasesLabel: string;
    statLocation: string;
    statLocationLabel: string;
    availabilityBadge: string;
    feature1: string;
    feature2: string;
    feature3: string;
    feature4: string;
    officeAddressLabel: string;
    quoteText: string;
  };
  about: {
    badge: string;
    heading: string;
    subheading: string;
    role: string;
    p1: string;
    p2: string;
    yearsExp: string;
    casesGuided: string;
    officeTitle: string;
    officeDesc: string;
    officeHours: string;
    multilingualTitle: string;
    langEn: string;
    langPt: string;
    langUaRu: string;
    educationTitle: string;
    guaranteesTitle: string;
    registeredBadge: string;
    bookCta: string;
    servicesCta: string;
  };
  services: {
    badge: string;
    heading: string;
    subheading: string;
    allCat: string;
    imigracaoCat: string;
    empresasCat: string;
    realEstateCat: string;
    taxCat: string;
    searchPlaceholder: string;
    viewDetails: string;
    requestService: string;
    noResults: string;
    modalScope: string;
    modalTimeframe: string;
    modalFee: string;
    modalDocs: string;
    modalCompliance: string;
    modalClose: string;
    modalBook: string;
  };
  testimonials: {
    badge: string;
    heading: string;
    subheading: string;
    verifiedClient: string;
    prev: string;
    next: string;
  };
  contact: {
    badge: string;
    heading: string;
    subheading: string;
    bookingUnavailable: string;
    bookingConfirmation: string;
    fullName: string;
    phone: string;
    email: string;
    serviceReq: string;
    format: string;
    inPerson: string;
    online: string;
    prefDate: string;
    prefTime: string;
    caseDetails: string;
    caseDetailsPlaceholder: string;
    submitBtn: string;
    submitting: string;
    successTitle: string;
    successMsg: string;
    submitAnother: string;
    officeInfo: string;
    locationLabel: string;
    locationDesc: string;
    directContact: string;
    hoursLabel: string;
    hoursDesc: string;
    privacyNote: string;
    googleMapsBtn: string;
  };
  footer: {
    tagline: string;
    badge: string;
    navTitle: string;
    officeTitle: string;
    platformTitle: string;
    backToTop: string;
    rights: string;
    legalDisclaimer: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  pt: {
    nav: {
      home: "Início",
      about: "Sobre Mim",
      services: "Serviços Jurídicos",
      testimonials: "Testemunhos",
      contact: "Contactos",
      bookConsultation: "Agendar Consulta",
      selectLanguage: "Selecionar Idioma",
    },
    hero: {
      badge: "Assistente Jurídica Sénior • Escritório em Faro, Algarve",
      titleLine1: "Serviços Jurídicos e Apoio à",
      titleHighlight: "Relocalização em Portugal",
      subtitle: "Apoio personalizado para cidadãos estrangeiros, reformados, investidores e empresas nos processos de Imigração, Vistos, NIF, Fiscalidade e Atos Administrativos em Portugal.",
      bookButton: "Agendar Consulta em Faro",
      exploreServices: "Ver Serviços Jurídicos",
      aboutButton: "Conhecer Trajetória",
      statYears: "8+ Anos",
      statYearsLabel: "Experiência Administrativa",
      statCases: "980+",
      statCasesLabel: "Processos e Casos Acompanhados",
      statLocation: "Faro, Algarve",
      statLocationLabel: "Escritório Presencial em Portugal",
      availabilityBadge: "Escritório Aberto • Atendimento Presencial e Online",
      feature1: "Escritório Presencial em Faro (Algarve) e Online",
      feature2: "Atendimento Presencial e por Videochamada",
      feature3: "Total Transparência de Honorários",
      feature4: "Acompanhamento Direto perante AIMA e Finanças",
      officeAddressLabel: "Avenida da República, 8000-078 Faro, Portugal (Algarve)",
      quoteText: "Rigor, eficiência e dedicação pessoal são os pilares para uma relocalização de sucesso em Portugal.",
    },
    about: {
      badge: "Percurso Profissional",
      heading: "Apoio Jurídico Dedicado em Portugal",
      subheading: "Rigor técnico, eficiência e dedicação pessoal para a sua relocalização e soluções administrativas em Portugal.",
      role: "Assistente Jurídica Sénior e Coordenadora de Relocalização",
      p1: "Olá, sou Yuliya Malyshko, Assistente Jurídica Sénior e Coordenadora de Relocalização sediada em Faro, Algarve. Há mais de 8 anos, presto apoio administrativo e jurídico profissional a clientes internacionais que pretendem residir ou investir em Portugal.",
      p2: "O meu escritório oferece um acompanhamento transparente e rigoroso para pedidos de vistos, autorizações de residência, registos fiscais e representação administrativa junto de entidades públicas como a AIMA, Finanças e Segurança Social.",
      yearsExp: "Anos de Experiência",
      casesGuided: "Processos Acompanhados",
      officeTitle: "Escritório em Faro (Algarve, Portugal)",
      officeDesc: "Localizado no centro de Faro para prestar atendimento presencial e próximo a residentes internacionais, investidores e nómadas digitais em todo o Algarve e Portugal.",
      officeHours: "Atendimento presencial por agendamento prévio e videochamada",
      multilingualTitle: "Comunicação Multilingue:",
      langEn: "Inglês (Fluente)",
      langPt: "Português (Profissional)",
      langUaRu: "Ucraniano & Russo (Nativo)",
      educationTitle: "Formação e Qualificações",
      guaranteesTitle: "Compromissos Fundamentais",
      registeredBadge: "Serviços de Assistência Jurídica • Escritório de Faro",
      bookCta: "Marcar Consulta em Faro",
      servicesCta: "Explorar Serviços",
    },
    services: {
      badge: "Âmbito de Atuação",
      heading: "Serviços Jurídicos e Administrativos",
      subheading: "Acompanhamento tailor-made para todas as fases da sua instalação legal e residência em Portugal.",
      allCat: "Todos os Serviços",
      imigracaoCat: "Imigração e Vistos",
      empresasCat: "Empresas e Negócios",
      realEstateCat: "Contratos e Imobiliário",
      taxCat: "Fiscalidade e NIF",
      searchPlaceholder: "Pesquisar serviço (ex: D7, D8, NIF, Nacionalidade, AIMA)...",
      viewDetails: "Ver Detalhes",
      requestService: "Agendar uma Consulta",
      noResults: "Nenhum serviço jurídico encontrado para o termo pesquisado.",
      modalScope: "Âmbito do Serviço",
      modalTimeframe: "Prazo Estimado",
      modalFee: "Estrutura de Honorários",
      modalDocs: "Documentação Normalmente Necessária",
      modalCompliance: "Todos os processos são preparados com estrito cumprimento da legislação portuguesa e das normas de privacidade de dados.",
      modalClose: "Fechar",
      modalBook: "Agendar uma Consulta",
    },
    testimonials: {
      badge: "Confiança e Opiniões",
      heading: "Testemunhos de Clientes",
      subheading: "A tranquilidade e satisfação de quem confiou a sua relocalização para Portugal ao nosso escritório.",
      verifiedClient: "Cliente Verificado",
      prev: "Anterior",
      next: "Seguinte",
    },
    contact: {
      badge: "Atendimento Personalizado",
      heading: "Agende uma consulta",
      subheading: "Escolha um horário disponível e preencha os seus dados para confirmar a consulta.",
      bookingUnavailable: "A marcação online ainda está a ser preparada. Contacte o escritório por e-mail ou telefone.",
      bookingConfirmation: "Depois de reservar, você e a Yuliya recebem um e-mail de confirmação com o convite do calendário.",
      fullName: "Nome Completo *",
      phone: "Telefone / WhatsApp *",
      email: "E-mail de Contacto *",
      serviceReq: "Serviço Pretendido *",
      format: "Formato da Consulta *",
      inPerson: "Presencial (Escritório em Faro)",
      online: "Videochamada Online (Zoom / Meet)",
      prefDate: "Data Preferida *",
      prefTime: "Horário Preferencial *",
      caseDetails: "Resumo / Detalhes do Caso",
      caseDetailsPlaceholder: "Descreva brevemente o seu objetivo, a sua situação atual ou as suas dúvidas...",
      submitBtn: "Ver horários disponíveis",
      submitting: "A Enviar Pedido...",
      successTitle: "Pedido Submetido com Sucesso!",
      successMsg: "Entraremos em contacto para confirmar a data e o horário da sua consulta.",
      submitAnother: "Submeter Novo Pedido",
      officeInfo: "Informações do Escritório",
      locationLabel: "Localização em Portugal",
      locationDesc: "Avenida da República, 8000-078 Faro, Algarve, Portugal",
      directContact: "Telefone Direto e WhatsApp",
      hoursLabel: "Horário de Funcionamento",
      hoursDesc: "Segunda a Sexta: 09:00 – 18:00 (Horário de Lisboa)",
      privacyNote: "Não inclua documentos ou detalhes pessoais sensíveis. O pedido será partilhado com o escritório para responder ao agendamento.",
      googleMapsBtn: "Ver no Google Maps",
    },
    footer: {
      tagline: "Escritório de assistência jurídica e relocalização em Faro, Algarve, com apoio administrativo profissional para cidadãos estrangeiros, reformados, investidores e empresas em Portugal.",
      badge: "Serviços de Assistência Jurídica • Escritório em Faro",
      navTitle: "Navegação",
      officeTitle: "Escritório em Faro",
      platformTitle: "Plataforma",
      backToTop: "Voltar ao topo",
      rights: "Todos os direitos reservados.",
      legalDisclaimer: "As informações disponibilizadas neste site têm caráter informativo relativamente aos serviços de assistência jurídica e relocalização em Portugal. Atos próprios da advocacia e patrocínio judiciário são realizados em parceria com advogados licenciados.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About Me",
      services: "Legal Services",
      testimonials: "Testimonials",
      contact: "Contact",
      bookConsultation: "Book Consultation",
      selectLanguage: "Select Language",
    },
    hero: {
      badge: "Senior Legal Assistant • Faro Office, Algarve",
      titleLine1: "Legal Assistance & Relocation",
      titleHighlight: "Services in Portugal",
      subtitle: "Personalized assistance for foreign citizens, retirees, digital nomads, investors, and companies navigating Portuguese Immigration, Visas, NIF & Tax Setup, and Administrative Procedures.",
      bookButton: "Book Consultation in Faro",
      exploreServices: "Explore Legal Services",
      aboutButton: "Professional Bio",
      statYears: "8+ Years",
      statYearsLabel: "Administrative Expertise",
      statCases: "980+",
      statCasesLabel: "Cases & Files Guided",
      statLocation: "Faro, Algarve",
      statLocationLabel: "In-Person Office in Portugal",
      availabilityBadge: "Office Open • In-Person & Online Consultations",
      feature1: "In-Person Office in Faro (Algarve) & Online",
      feature2: "Face-to-Face & Video Call Consultations",
      feature3: "Full Fee Transparency & Fixed Quotes",
      feature4: "Direct Representation before AIMA and Tax Authorities",
      officeAddressLabel: "Avenida da República, 8000-078 Faro, Portugal (Algarve)",
      quoteText: "Precision, efficiency, and personal dedication are the pillars of a successful relocation to Portugal.",
    },
    about: {
      badge: "Professional Background",
      heading: "Dedicated Legal Assistance in Portugal",
      subheading: "Technical rigor, efficiency, and close personal dedication for your seamless relocation and administrative solutions in Portugal.",
      role: "Senior Legal Assistant & Relocation Coordinator",
      p1: "Hello, I am Yuliya Malyshko, a Senior Legal Assistant and Relocation Coordinator based in Faro, Algarve. For over 8 years, I have provided professional administrative and legal support to international clients moving to or investing in Portugal.",
      p2: "My office provides comprehensive, transparent assistance for visa applications, residence permits, tax registrations, and administrative representation before Portuguese public bodies like AIMA, Finanças, and Social Security.",
      yearsExp: "Years Experience",
      casesGuided: "Files Prepared",
      officeTitle: "Faro Office (Algarve, Portugal)",
      officeDesc: "Conveniently located in central Faro to provide face-to-face support for international residents, investors, and digital nomads across the Algarve and all of Portugal.",
      officeHours: "In-person appointments by prior booking & Online video calls",
      multilingualTitle: "Multilingual Communication:",
      langEn: "English (Fluent)",
      langPt: "Portuguese (Professional)",
      langUaRu: "Ukrainian & Russian (Native)",
      educationTitle: "Qualifications & Training",
      guaranteesTitle: "Core Commitments",
      registeredBadge: "Registered Legal Assistance • Faro Office",
      bookCta: "Book Consultation in Faro",
      servicesCta: "Explore Services",
    },
    services: {
      badge: "Specialized Scope",
      heading: "Legal & Administrative Services",
      subheading: "Tailored assistance covering every step of your legal entry and settlement in Portugal.",
      allCat: "All Services",
      imigracaoCat: "Immigration & Visas",
      empresasCat: "Business & Company Setup",
      realEstateCat: "Contracts & Real Estate",
      taxCat: "Tax & NIF Setup",
      searchPlaceholder: "Search service (e.g., D7, D8, NIF, Citizenship, AIMA)...",
      viewDetails: "View Details",
      requestService: "Book a Consultation",
      noResults: "No legal services found matching your search term.",
      modalScope: "Scope of Service",
      modalTimeframe: "Estimated Timeframe",
      modalFee: "Fee Structure",
      modalDocs: "Commonly Required Documents",
      modalCompliance: "All applications are prepared in strict compliance with Portuguese regulations and data privacy laws.",
      modalClose: "Close",
      modalBook: "Book a Consultation",
    },
    testimonials: {
      badge: "Trust & Client Reviews",
      heading: "Client Testimonials",
      subheading: "The peace of mind and satisfaction of clients who entrusted their Portuguese relocation to us.",
      verifiedClient: "Verified Client",
      prev: "Previous",
      next: "Next",
    },
    contact: {
      badge: "Personalized Assistance",
      heading: "Book a consultation",
      subheading: "Choose an available time and enter your details to book your consultation.",
      bookingUnavailable: "Online booking is not ready yet. Please email or call the office.",
      bookingConfirmation: "After you book, you and Yuliya will receive a confirmation email with a calendar invitation.",
      fullName: "Full Name *",
      phone: "Phone / WhatsApp *",
      email: "Contact Email *",
      serviceReq: "Service Requested *",
      format: "Consultation Format *",
      inPerson: "In-Person (Faro Office)",
      online: "Online Video Call (Zoom / Meet)",
      prefDate: "Preferred Date *",
      prefTime: "Preferred Time Slot *",
      caseDetails: "Case Summary / Details",
      caseDetailsPlaceholder: "Briefly describe your objectives, current status, or questions...",
      submitBtn: "See available times",
      submitting: "Submitting Request...",
      successTitle: "Request Submitted Successfully!",
      successMsg: "We will get in touch shortly to confirm your consultation time and format.",
      submitAnother: "Submit Another Request",
      officeInfo: "Office Information",
      locationLabel: "Location in Portugal",
      locationDesc: "Avenida da República, 8000-078 Faro, Algarve, Portugal",
      directContact: "Direct Phone & WhatsApp",
      hoursLabel: "Working Hours",
      hoursDesc: "Monday to Friday: 09:00 – 18:00 (Lisbon Time)",
      privacyNote: "Please do not include sensitive documents or personal details. Your request is shared with the office to arrange the appointment.",
      googleMapsBtn: "View on Google Maps",
    },
    footer: {
      tagline: "Legal assistance and relocation office based in Faro, Algarve, providing professional administrative support for foreign expats, retirees, investors, and businesses in Portugal.",
      badge: "Legal Assistance Services • Faro Office",
      navTitle: "Navigation",
      officeTitle: "Faro Office",
      platformTitle: "Platform",
      backToTop: "Back to top",
      rights: "All rights reserved.",
      legalDisclaimer: "The information on this website is for informational purposes regarding legal assistance and relocation in Portugal. Acts strictly reserved for lawyers are carried out in partnership with licensed attorneys.",
    },
  },

  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      services: "Юридические услуги",
      testimonials: "Отзывы",
      contact: "Контакты",
      bookConsultation: "Записаться на консультацию",
      selectLanguage: "Выбрать язык",
    },
    hero: {
      badge: "Старший юрист-ассистент • Офис в Фару, Алгарве",
      titleLine1: "Юридическая помощь и поддержка",
      titleHighlight: "Релокации в Португалию",
      subtitle: "Индивидуальная помощь для иностранных граждан, пенсионеров, инвесторов и предпринимателей: визы, ВНЖ, получение NIF, налоговый учет и взаимодействие с госорганами Португалии.",
      bookButton: "Записаться на консультацию в Фару",
      exploreServices: "Все юридические услуги",
      aboutButton: "Узнать обо мне",
      statYears: "8+ лет",
      statYearsLabel: "Практического опыта",
      statCases: "980+",
      statCasesLabel: "Успешно завершенных дел",
      statLocation: "Фару, Алгарве",
      statLocationLabel: "Офис в Португалии",
      availabilityBadge: "Офис открыт • Личные встречи и онлайн-консультации",
      feature1: "Офис в Фару (Алгарве) и онлайн по всей Португалии",
      feature2: "Личный прием и видеоконсультации (Zoom/Meet)",
      feature3: "Полная прозрачность тарифов без скрытых комиссий",
      feature4: "Прямое взаимодействие с AIMA, Finanças и Segurança Social",
      officeAddressLabel: "Avenida da República, 8000-078 Faro, Portugal (Алгарве)",
      quoteText: "Точность, оперативность и индивидуальное внимание — основа успешного переезда и легализации в Португалии.",
    },
    about: {
      badge: "Профессиональный опыт",
      heading: "Квалифицированная юридическая поддержка в Португалии",
      subheading: "Надежное оформление документов, внимание к деталям и всесторонняя помощь в релокации в Португалию.",
      role: "Старший юрист-ассистент и координатор релокации",
      p1: "Здравствуйте! Меня зовут Юлия Малышко (Yuliya Malyshko). Я старший юрист-ассистент и специалист по релокации с офисом в городе Фару, регион Алгарве. Более 8 лет я помогаю иностранным клиентам безопасно переехать, легализоваться и открыть бизнес в Португалии.",
      p2: "Мой офис обеспечивает полное сопровождение визовых программ, оформление ВНЖ, налоговых номеров (NIF), открытие счетов и представление интересов в государственных инстанциях (AIMA, Finanças, Segurança Social, Registos).",
      yearsExp: "Лет опыта",
      casesGuided: "Оформленных дел",
      officeTitle: "Офис в Фару (Алгарве, Португалия)",
      officeDesc: "Удобно расположен в центре города Фару для личного приема клиентов со всего Алгарве, а также для онлайн-сопровождения по всей территории Португалии.",
      officeHours: "Личный прием по предварительной записи и онлайн-видеосвязь",
      multilingualTitle: "Языки общения:",
      langEn: "Английский (Свободный)",
      langPt: "Португальский (Профессиональный)",
      langUaRu: "Украинский и Русский (Родные)",
      educationTitle: "Образование и квалификация",
      guaranteesTitle: "Наши обязательства",
      registeredBadge: "Официальные услуги юридической помощи • Офис в Фару",
      bookCta: "Записаться на прием в Фару",
      servicesCta: "Посмотреть услуги",
    },
    services: {
      badge: "Направления работы",
      heading: "Юридические и административные услуги",
      subheading: "Комплексное сопровождение на каждом этапе вашего переезда и обустройства в Португалии.",
      allCat: "Все услуги",
      imigracaoCat: "Иммиграция и визы",
      empresasCat: "Бизнес и компании",
      realEstateCat: "Недвижимость и контракты",
      taxCat: "Налоги и NIF",
      searchPlaceholder: "Поиск услуги (напр.: D7, D8, NIF, Гражданство, AIMA)...",
      viewDetails: "Подробнее",
      requestService: "Записаться на консультацию",
      noResults: "По вашему запросу услуг не найдено.",
      modalScope: "Описание и объем услуги",
      modalTimeframe: "Ориентировочные сроки",
      modalFee: "Стоимость и условия",
      modalDocs: "Необходимые документы",
      modalCompliance: "Все дела готовятся в строгом соответствии с португальским законодательством и европейскими стандартами защиты персональных данных.",
      modalClose: "Закрыть",
      modalBook: "Записаться на консультацию",
    },
    testimonials: {
      badge: "Доверие клиентов",
      heading: "Отзывы клиентов",
      subheading: "Реальный опыт людей, которые доверили нам свой переезд и оформление документов в Португалии.",
      verifiedClient: "Подтвержденный клиент",
      prev: "Назад",
      next: "Вперед",
    },
    contact: {
      badge: "Индивидуальный подход",
      heading: "Запишитесь на консультацию",
      subheading: "Выберите свободное время и укажите свои данные, чтобы записаться на консультацию.",
      bookingUnavailable: "Онлайн-запись пока настраивается. Напишите или позвоните в офис.",
      bookingConfirmation: "После записи вы и Юлия получите письмо с подтверждением и приглашением в календарь.",
      fullName: "Полное имя *",
      phone: "Телефон / WhatsApp *",
      email: "Электронная почта *",
      serviceReq: "Интересующая услуга *",
      format: "Формат консультации *",
      inPerson: "Лично в офисе (Фару)",
      online: "Онлайн-видеосвязь (Zoom / Meet)",
      prefDate: "Желаемая дата *",
      prefTime: "Удобное время *",
      caseDetails: "Краткое описание вопроса",
      caseDetailsPlaceholder: "Кратко опишите вашу ситуацию, цели или вопросы...",
      submitBtn: "Посмотреть свободное время",
      submitting: "Отправка заявки...",
      successTitle: "Заявка успешно отправлена!",
      successMsg: "Мы свяжемся с вами в ближайшее время для подтверждения даты и времени консультации.",
      submitAnother: "Отправить еще одну заявку",
      officeInfo: "Информация об офисе",
      locationLabel: "Адрес в Португалии",
      locationDesc: "Avenida da República, 8000-078 Faro, Algarve, Portugal",
      directContact: "Прямой телефон и WhatsApp",
      hoursLabel: "Часы работы",
      hoursDesc: "Понедельник – Пятница: 09:00 – 18:00 (по Лиссабону)",
      privacyNote: "Не указывайте конфиденциальные документы или личные сведения. Заявка будет передана офису для согласования встречи.",
      googleMapsBtn: "Открыть в Google Maps",
    },
    footer: {
      tagline: "Офис юридической помощи и координации релокации в Фару, Алгарве: профессиональная поддержка иностранцев, инвесторов и предпринимателей в Португалии.",
      badge: "Услуги юридической помощи • Офис в Фару",
      navTitle: "Навигация",
      officeTitle: "Офис в Фару",
      platformTitle: "Платформа",
      backToTop: "Наверх",
      rights: "Все права защищены.",
      legalDisclaimer: "Информация на данном сайте носит ознакомительный характер касательно услуг юридической помощи и релокации в Португалии. Действия, относящиеся исключительно к адвокатской монополии, осуществляются в сотрудничестве с лицензированными португальскими адвокатами.",
    },
  },

  uk: {
    nav: {
      home: "Головна",
      about: "Про мене",
      services: "Юридичні послуги",
      testimonials: "Відгуки",
      contact: "Контакти",
      bookConsultation: "Записатися на консультацію",
      selectLanguage: "Обрати мову",
    },
    hero: {
      badge: "Старший юрист-асистент • Офіс у Фару, Алгарве",
      titleLine1: "Юридична допомога та супровід",
      titleHighlight: "Релокації до Португалії",
      subtitle: "Індивідуальна підтримка для іноземних громадян, пенсіонерів, цифрових кочівників, інвесторів та бізнесу: візи, ВНЖ, отримання NIF, податки та взаємодія з державними органами Португалії.",
      bookButton: "Записатися на консультацію у Фару",
      exploreServices: "Переглянути послуги",
      aboutButton: "Дізнатися про мене",
      statYears: "8+ Років",
      statYearsLabel: "Практичного досвіду",
      statCases: "980+",
      statCasesLabel: "Успішно оформлених справ",
      statLocation: "Фару, Алгарве",
      statLocationLabel: "Офіс у Португалії",
      availabilityBadge: "Офіс відкритий • Особисті зустрічі та онлайн-консультації",
      feature1: "Офіс у Фару (Алгарве) та онлайн по всій Португалії",
      feature2: "Особистий прийом та відеоконсультації (Zoom/Meet)",
      feature3: "Повна прозорість гонорарів без прихованих платежів",
      feature4: "Прямий супровід в AIMA, Finanças та Segurança Social",
      officeAddressLabel: "Avenida da República, 8000-078 Faro, Portugal (Алгарве)",
      quoteText: "Точність, оперативність та щира увага до деталей — основа вашої успішної релокації до Португалії.",
    },
    about: {
      badge: "Професійний досвід",
      heading: "Кваліфікована юридична підтримка в Португалії",
      subheading: "Технічна точність, ефективність та особиста увага для комфортного переїзду та вирішення юридичних питань у Португалії.",
      role: "Старший юрист-асистент та координатор релокації",
      p1: "Вітаю! Я Юлія Малишко (Yuliya Malyshko), старший юрист-асистент та координатор релокації з офісом у Фару, регіон Алгарве. Понад 8 років я надаю професійну адміністративну та юридичну підтримку іноземним клієнтам, які переїжджають або відкривають бізнес у Португалії.",
      p2: "Мій офіс забезпечує повний супровід візових програм, оформлення посвідок на проживання (ВНЖ), отримання податкового номера (NIF), відкриття рахунків та представництво інтересів перед державними органами (AIMA, Finanças, Segurança Social, IRN).",
      yearsExp: "Років досвіду",
      casesGuided: "Оформлених справ",
      officeTitle: "Офіс у Фару (Алгарве, Португалія)",
      officeDesc: "Зручно розташований у центрі Фару для особистого прийому клієнтів з усього Алгарве, а також для дистанційного супроводу по всій Португалії.",
      officeHours: "Особистий прийом за попереднім записом та відеозв'язок",
      multilingualTitle: "Мови спілкування:",
      langEn: "Англійська (Вільно)",
      langPt: "Португальська (Професійно)",
      langUaRu: "Українська та Російська (Рідні)",
      educationTitle: "Освіта та кваліфікація",
      guaranteesTitle: "Наші зобов'язання",
      registeredBadge: "Офіційні послуги правової допомоги • Офіс у Фару",
      bookCta: "Записатися на прийом у Фару",
      servicesCta: "Переглянути послуги",
    },
    services: {
      badge: "Напрямки діяльності",
      heading: "Юридичні та адміністративні послуги",
      subheading: "Індивідуальний супровід на кожному етапі вашого переїзду та легального перебування в Португалії.",
      allCat: "Всі послуги",
      imigracaoCat: "Іміграція та візи",
      empresasCat: "Бізнес та компанії",
      realEstateCat: "Нерухомість та договори",
      taxCat: "Податки та NIF",
      searchPlaceholder: "Пошук послуги (напр.: D7, D8, NIF, Громадянство, AIMA)...",
      viewDetails: "Детальніше",
      requestService: "Записатися на консультацію",
      noResults: "За вашим запитом послуг не знайдено.",
      modalScope: "Опис та обсяг послуги",
      modalTimeframe: "Орієнтовний термін",
      modalFee: "Вартість та умови",
      modalDocs: "Необхідні документи",
      modalCompliance: "Усі процеси готуються в суворій відповідності до законодавства Португалії та європейських стандартів захисту персональних даних.",
      modalClose: "Закрити",
      modalBook: "Записатися на консультацію",
    },
    testimonials: {
      badge: "Довіра та репутація",
      heading: "Відгуки клієнтів",
      subheading: "Спокій та задоволення людей, які довірили свою релокацію до Португалії нашому офісу.",
      verifiedClient: "Підтверджений клієнт",
      prev: "Попередній",
      next: "Наступний",
    },
    contact: {
      badge: "Індивідуальний підхід",
      heading: "Запишіться на консультацію",
      subheading: "Оберіть вільний час і введіть свої дані, щоб записатися на консультацію.",
      bookingUnavailable: "Онлайн-запис ще налаштовується. Напишіть або зателефонуйте до офісу.",
      bookingConfirmation: "Після запису ви та Юлія отримаєте лист із підтвердженням і запрошенням у календар.",
      fullName: "Повне ім'я *",
      phone: "Телефон / WhatsApp *",
      email: "Електронна пошта *",
      serviceReq: "Послуга, яка вас цікавить *",
      format: "Формат консультації *",
      inPerson: "Особисто в офісі (Фару)",
      online: "Онлайн-відеозв'язок (Zoom / Meet)",
      prefDate: "Бажана дата *",
      prefTime: "Зручний час *",
      caseDetails: "Короткий опис справи",
      caseDetailsPlaceholder: "Коротко опишіть вашу мету, поточний статус або запитання...",
      submitBtn: "Переглянути вільний час",
      submitting: "Надсилання заявки...",
      successTitle: "Заявку успішно надіслано!",
      successMsg: "Ми зв'яжемося з вами найближчим часом для підтвердження дати та часу консультації.",
      submitAnother: "Надіслати ще одну заявку",
      officeInfo: "Інформація про офіс",
      locationLabel: "Адреса в Португалії",
      locationDesc: "Avenida da República, 8000-078 Faro, Algarve, Portugal",
      directContact: "Прямий телефон та WhatsApp",
      hoursLabel: "Години роботи",
      hoursDesc: "Понеділок – П'ятниця: 09:00 – 18:00 (за Лісабоном)",
      privacyNote: "Не додавайте конфіденційні документи або особисті відомості. Запит буде передано офісу для узгодження зустрічі.",
      googleMapsBtn: "Відкрити в Google Maps",
    },
    footer: {
      tagline: "Офіс правової допомоги та координації релокації у Фару, Алгарве: професійна підтримка для іноземців, інвесторів та бізнесу в Португалії.",
      badge: "Послуги правової допомоги • Офіс у Фару",
      navTitle: "Навігація",
      officeTitle: "Офіс у Фару",
      platformTitle: "Платформа",
      backToTop: "Вгору",
      rights: "Всі права захищені.",
      legalDisclaimer: "Інформація на цьому сайті має ознайомчий характер щодо послуг правової допомоги та релокації в Португалії. Дії, що належать виключно до адвокатської монополії, здійснюються у співпраці з ліцензованими адвокатами Португалії.",
    },
  },
};
