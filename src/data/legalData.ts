import { LegalService, Testimonial } from '../types';
import { Language } from './translations';

export const ATTORNEY_INFO = {
  name: "Yuliya Malyshko",
  location: "Faro, Algarve, Portugal",
  addressShort: "Centro Profissional de Faro, Portugal",
  fullAddress: "Avenida da República, 8000-078 Faro, Portugal",
  phone: "+351 289 123 456",
  mobileWhatsApp: "+351 912 345 678",
  email: "contacto@yuliyamalyshko-legal.com",
  experienceYears: 8,
  casesResolved: 980,
  googleMapsUrl: "https://maps.google.com/?q=Avenida+da+República+Faro+Portugal",
};

export const getAttorneyInfoLocalized = (lang: Language) => {
  const titles = {
    pt: {
      title: "Assistente Jurídica Sénior e Coordenadora de Serviços de Relocalização",
      license: "Escritório em Faro | Apoio Jurídico Registado",
      workingHours: "Segunda a Sexta-feira: 09:00 – 18:00 (Horário de Lisboa)",
      languages: ["Português (Profissional)", "Inglês (Fluente)", "Ucraniano e Russo (Nativo)"],
      officeFaroStatus: "Escritório Presencial em Faro (Algarve) e Consultas Online",
      education: [
        { degree: "Licenciatura em Direito e Prática Jurídica", institution: "Faculdade de Direito", year: "2016" },
        { degree: "Especialização em Procedimentos Administrativos e Imigração em Portugal", institution: "Instituto de Estudos Jurídicos", year: "2019" },
        { degree: "Certificação em Tradução Jurídica e Legalização de Documentos", institution: "Formação Europeia de Assistência Jurídica", year: "2021" }
      ],
      guarantees: [
        { title: "Apoio Personalizado", desc: "Acompanhamento direto e focado na sua situação específica de relocalização ou ato administrativo." },
        { title: "Confidencialidade Estrita", desc: "Tratamento de todos os dados e documentos com máxima segurança e privacidade." },
        { title: "Transparência de Honorários", desc: "Orçamentos claros desde o primeiro dia, sem custos ocultos nem surpresas." },
        { title: "Comunicação Rápida", desc: "Respostas claras e atualizações periódicas em 24 a 48 horas úteis." },
        { title: "Gestão Integral de Dossiers", desc: "Acompanhamento desde a recolha de documentos e traduções até ao pedido final nos organismos competentes." },
        { title: "Experiência com Entidades Públicas", desc: "Vasta prática junto da AIMA, Autoridade Tributária (Finanças), Segurança Social (NISS) e Conservatórias." }
      ]
    },
    en: {
      title: "Senior Legal Assistant & Relocation Services Coordinator",
      license: "Faro Office | Registered Legal & Administrative Services",
      workingHours: "Monday to Friday: 09:00 – 18:00 (Lisbon Time)",
      languages: ["English (Fluent)", "Portuguese (Professional)", "Ukrainian & Russian (Native)"],
      officeFaroStatus: "In-Person Office in Faro (Algarve) & Online Consultations",
      education: [
        { degree: "Degree in Law & Legal Practice", institution: "Faculty of Law", year: "2016" },
        { degree: "Specialization in Portuguese Administrative & Immigration Procedures", institution: "Institute of Legal Studies", year: "2019" },
        { degree: "Certification in Legal Translation & Document Legalization", institution: "European Legal Assistance Training", year: "2021" }
      ],
      guarantees: [
        { title: "Personalized Support", desc: "Direct, focused guidance tailored specifically to your relocation or administrative file." },
        { title: "Strict Confidentiality", desc: "All personal data and documents handled with the highest security and GDPR privacy." },
        { title: "Fee Transparency", desc: "Clear, fixed quotes from day one with zero hidden costs or surprises." },
        { title: "Prompt Communication", desc: "Fast responses and regular case status updates within 24–48 business hours." },
        { title: "Full File Management", desc: "Complete support from document gathering and certified translations to final filings." },
        { title: "Public Registry Experience", desc: "Extensive daily track record with AIMA, Tax Authority (Finanças), Social Security, and IRN." }
      ]
    },
    ru: {
      title: "Старший юрист-ассистент и координатор программ релокации",
      license: "Офис в Фару | Зарегистрированные юридические и административные услуги",
      workingHours: "Понедельник – Пятница: 09:00 – 18:00 (по Лиссабону)",
      languages: ["Русский и Украинский (Родные)", "Английский (Свободный)", "Португальский (Профессиональный)"],
      officeFaroStatus: "Офис в Фару (Алгарве) и онлайн-консультации по всей Португалии",
      education: [
        { degree: "Диплом в области права и юридической практики", institution: "Юридический факультет", year: "2016" },
        { degree: "Специализация по иммиграционным и административным процедурам в Португалии", institution: "Институт юридических исследований", year: "2019" },
        { degree: "Сертификация по юридическому переводу и апостилированию документов", institution: "Европейская ассоциация правовой помощи", year: "2021" }
      ],
      guarantees: [
        { title: "Индивидуальный подход", desc: "Персональное ведение вашего дела с учетом всех нюансов вашей жизненной ситуации." },
        { title: "Строгая конфиденциальность", desc: "Полная защита персональных данных и документов по европейским стандартам GDPR." },
        { title: "Прозрачность цен", desc: "Фиксированные и прозрачные тарифы без скрытых доплат и непредвиденных расходов." },
        { title: "Быстрая обратная связь", desc: "Оперативные ответы и регулярные обновления по статусу дела в течение 24–48 часов." },
        { title: "Сопровождение под ключ", desc: "От подготовки справок и заверенных переводов до финальной подачи в госорганы." },
        { title: "Опыт работы с госорганами", desc: "Постоянное и успешное взаимодействие с AIMA, Finanças, Segurança Social и IRN." }
      ]
    },
    uk: {
      title: "Старший юрист-асистент та координатор програм релокації",
      license: "Офіс у Фару | Офіційні юридичні та адміністративні послуги",
      workingHours: "Понеділок – П'ятниця: 09:00 – 18:00 (за Лісабоном)",
      languages: ["Українська та Російська (Рідні)", "Англійська (Вільно)", "Португальська (Професійно)"],
      officeFaroStatus: "Офіс у Фару (Алгарве) та онлайн-консультації по всій Португалії",
      education: [
        { degree: "Диплом у галузі права та юридичної практики", institution: "Юридичний факультет", year: "2016" },
        { degree: "Спеціалізація з імміграційних та адміністративних процедур у Португалії", institution: "Інститут юридичних досліджень", year: "2019" },
        { degree: "Сертифікація з юридичного перекладу та апостилювання документів", institution: "Європейська асоціація правової допомоги", year: "2021" }
      ],
      guarantees: [
        { title: "Індивідуальний підхід", desc: "Особистий супровід вашої справи з урахуванням усіх деталей та життєвих обставин." },
        { title: "Сувора конфіденційність", desc: "Надійний захист персональних даних та документів відповідно до європейських норм GDPR." },
        { title: "Прозорість вартості", desc: "Чіткі та фіксовані тарифи з першого дня без прихованих витрат." },
        { title: "Швидкий зв'язок", desc: "Оперативні відповіді та регулярні оновлення статусу вашої справи протягом 24–48 годин." },
        { title: "Супровід під ключ", desc: "Від збору довідок та сертифікованих перекладів до фінальної подачі в органи влади." },
        { title: "Практика з держорганами", desc: "Щоденна успішна взаємодія з AIMA, Finanças, Segurança Social та IRN." }
      ]
    }
  };
  return titles[lang] || titles.pt;
};

export const SERVICES_DATA: LegalService[] = [
  {
    id: "consulta-juridica",
    title: "Consulta Inicial de Apoio Jurídico",
    category: "todos",
    shortDescription: "Consulta presencial no escritório de Faro ou por videochamada para analisar o seu caso, definir etapas e traçar o plano de ação.",
    fullDescription: "Uma reunião detalhada com Yuliya Malyshko para analisar os seus objetivos pessoais, familiares ou empresariais em Portugal. Identificamos a documentação necessária, antecipamos eventuais exigências burocráticas e definimos a melhor estratégia antes do contacto com as autoridades portuguesas.",
    documentsRequired: ["Documento de Identificação (Passaporte / Cartão de Cidadão UE)", "Documentos relevantes do processo", "Resumo breve da dúvida (opcional)"],
    estimatedTimeframe: "Sessão de 60 minutos (Agendamento em 24–48 horas)",
    feeGuideline: "Valor fixo de consulta, dedutível em pacotes de serviços contratados",
    badge: "Mais Procurado",
    iconName: "MessageSquareQuote"
  },
  {
    id: "pedido-residencia",
    title: "Apoio ao Pedido de Autorização de Residência",
    category: "imigracao",
    shortDescription: "Preparação completa da documentação e acompanhamento para submissão na AIMA (antigo SEF).",
    fullDescription: "Suporte administrativo integral para pedidos e renovações de Autorização de Residência em Portugal (Primeira concessão, renovação, reagrupamento familiar e alteração de estatuto). Verificação rigorosa de cada documento para evitar atrasos ou indeferimentos.",
    documentsRequired: ["Passaporte Válido", "Comprovativo de Meios de Subsistência", "Comprovativo de Alojamento em Portugal", "Certidão de NIF e NISS", "Registo Criminal do País de Origem Apostilado"],
    estimatedTimeframe: "Preparação do dossier em 5 a 10 dias úteis",
    feeGuideline: "Variável consoante a tipologia do visto/residência",
    badge: "Essencial",
    iconName: "FileCheck"
  },
  {
    id: "servicos-imigracao",
    title: "Apoio Integral à Relocalização em Portugal",
    category: "imigracao",
    shortDescription: "Acompanhamento de ponta a ponta para nómadas digitais, reformados, investidores e profissionais qualificados.",
    fullDescription: "Apoio especializado em todo o percurso de imigração para Portugal. Desde os trâmites no país de origem até à chegada, instalação e obtenção de documentos de residência no território nacional.",
    documentsRequired: ["Passaporte", "Comprovativo de rendimentos passivos ou contrato de trabalho remoto", "Extratos bancários", "Seguro de saúde"],
    estimatedTimeframe: "Acompanhamento contínuo ao longo de 2 a 6 meses",
    feeGuideline: "Pacote completo de apoio à relocalização",
    badge: "Internacional",
    iconName: "Globe"
  },
  {
    id: "nacionalidade-portuguesa",
    title: "Processos de Nacionalidade Portuguesa",
    category: "imigracao",
    shortDescription: "Análise de elegibilidade, recolha de documentos, apostilas e submissão junto da Conservatória dos Registos Centrais.",
    fullDescription: "Análise minuciosa de requisitos para atribuição ou aquisição de nacionalidade por tempo de residência (5 anos), casamento/união de facto ou ascendência (pais/avós). Gestão de certidões, traduções, apostilas e acompanhamento no IRN.",
    documentsRequired: ["Certidões de nascimento em narrativa completa", "Registo criminal limpo", "Certificado de língua portuguesa (quando aplicável)", "Título de residência"],
    estimatedTimeframe: "Análise inicial em 3 dias; prazos de tramitação oficial do IRN",
    feeGuideline: "Valor fixo por fase do processo",
    badge: "Nacionalidade",
    iconName: "Award"
  },
  {
    id: "servicos-fiscais",
    title: "Obtenção de NIF e Representação Fiscal",
    category: "fiscal",
    shortDescription: "Emissão rápida de NIF (Número de Identificação Fiscal), representação fiscal para não residentes e atualização junto das Finanças.",
    fullDescription: "Ato fundamental para qualquer transação ou residência em Portugal. Pedido urgente do NIF, nomeação de Representante Fiscal registado e apoio no cumprimento das obrigações perante a Autoridade Tributária (AT).",
    documentsRequired: ["Cópia do Passaporte", "Comprovativo de morada no país de origem", "Procuração para pedido de NIF"],
    estimatedTimeframe: "NIF emitido em 24 a 48 horas",
    feeGuideline: "Valor fixo para NIF + Representação Fiscal anual",
    badge: "Rápido",
    iconName: "Receipt"
  },
  {
    id: "contabilidade",
    title: "Obtenção de NISS e Registo na Segurança Social",
    category: "fiscal",
    shortDescription: "Emissão do NISS, abertura de atividade de trabalhador independente (Recibos Verdes) e apoio administrativo.",
    fullDescription: "Apoio administrativo para inscrição na Segurança Social portuguesa, abertura de atividade no Portal das Finanças e orientação para o cumprimento regular de obrigações de trabalho autónomo.",
    documentsRequired: ["Número de NIF", "Passaporte / Cartão de Cidadão", "Contrato de trabalho ou comprovativo de atividade"],
    estimatedTimeframe: "Concluído em 2 a 4 dias úteis",
    feeGuideline: "Taxa fixa de abertura ou acompanhamento pontual",
    iconName: "Calculator"
  },
  {
    id: "constituicao-empresas",
    title: "Apoio à Constituição de Empresas",
    category: "empresas",
    shortDescription: "Acompanhamento na criação de sociedades comerciais em Portugal, estatutos, registo comercial e abertura de conta empresarial.",
    fullDescription: "Suporte a empreendedores e investidores para a criação de empresas em Portugal. Coordenação com cartórios, conservatórias ('Empresa na Hora'), advogados parceiros e bancos.",
    documentsRequired: ["NIF e documentos dos sócios/gerentes", "Opções de denominação social", "Capital social estipulado"],
    estimatedTimeframe: "Empresa constituída em 3 a 5 dias úteis",
    feeGuideline: "Pacote chave-na-mão de constituição de empresa",
    badge: "Chave-na-mão",
    iconName: "Building2"
  },
  {
    id: "contratos",
    title: "Análise de Contratos e Documentos Imobiliários",
    category: "civil_imobiliario",
    shortDescription: "Preparação e revisão minuciosa de Contratos Promessa de Compra e Venda (CPCV), arrendamento e prestação de serviços.",
    fullDescription: "Coordenação administrativa e verificação legal de transações imobiliárias e contratos de arrendamento. Análise de cláusulas, verificação da Caderneta Predial, Certidão Permanente e Licença de Utilização.",
    documentsRequired: ["Certidão Permanente do Imóvel", "Caderneta Predial / Licença de Utilização", "Identificação e NIF das partes contratantes"],
    estimatedTimeframe: "Minuta ou parecer em 48 a 72 horas úteis",
    feeGuideline: "Valor fixo por análise de contrato ou minutas",
    iconName: "FileText"
  },
  {
    id: "entidades-publicas",
    title: "Representação e Submissão perante Entidades Públicas",
    category: "todos",
    shortDescription: "Atendimento e representação presencial/escrita em seu nome na AIMA, Finanças, Segurança Social, Câmaras Municipais e Conservatórias.",
    fullDescription: "Acompanhamento administrativo direto com procuração perante serviços públicos em Portugal. Submissão de requerimentos, resposta a notificações oficiais e pedido de certidões.",
    documentsRequired: ["Procuração emitida", "Histórico do processo ou notificação oficial"],
    estimatedTimeframe: "Atuação imediata após receção da documentação",
    feeGuideline: "Análise inicial + taxa fixa por ato administrativo",
    iconName: "Landmark"
  },
  {
    id: "apoio-vistos",
    title: "Preparação de Processos para Vistos Consulares",
    category: "imigracao",
    shortDescription: "Organização completa dos dossiers de Visto D7 (Rendimentos), D8 (Nómada Digital), D2 (Empreendedor) e Vistos de Estudante.",
    fullDescription: "Orientação passo a passo para pedido de visto nos Consulados de Portugal e Centros VFS Global no estrangeiro. Organização de meios financeiros, alojamento, seguros e requerimento fundamentado.",
    documentsRequired: ["Formulário consular preenchido", "Comprovativos de rendimentos / trabalho remoto", "Seguro de viagem", "Registo criminal sem cadastro"],
    estimatedTimeframe: "Preparação do dossier em 7 dias antes da marcação consular",
    feeGuideline: "Valor fixo por processo consular",
    badge: "Consular",
    iconName: "Stamp"
  },
  {
    id: "direito-familia",
    title: "Legalização e Tradução de Documentos",
    category: "civil_imobiliario",
    shortDescription: "Apostilas de Haia, traduções certificadas, averbamentos e registos civis de casamento e nascimento.",
    fullDescription: "Coordenação de traduções certificadas (Português, Inglês, Ucraniano, Russo), obtenção de Apostila de Haia e registo de certidões estrangeiras nas Conservatórias do Registo Civil em Portugal.",
    documentsRequired: ["Certidões originais", "Selos de Apostila ou legalização consular", "Traduções certificadas"],
    estimatedTimeframe: "3 a 10 dias úteis consoante o volume",
    feeGuideline: "Preço fixo por documento / página de tradução",
    iconName: "HeartHandshake"
  },
  {
    id: "apoio-empresas",
    title: "Apoio Administrativo Continuado a Empresas",
    category: "empresas",
    shortDescription: "Apoio administrativo em regime de avença para empresas e startups em expansão em Portugal.",
    fullDescription: "Acompanhamento contínuo para a sua empresa em Portugal. Gestão administrativa de dossiers de colaboradores estrangeiros, licenças, contratos com fornecedores e cumprimento de prazos legais.",
    documentsRequired: ["Certidão de Registo Comercial da Empresa", "Identificação dos gerentes", "Contratos em vigor"],
    estimatedTimeframe: "Apoio contínuo 365 dias por ano",
    feeGuideline: "Avença mensal personalizada",
    badge: "Corporativo",
    iconName: "Briefcase"
  }
];

export const getLocalizedServices = (lang: Language): LegalService[] => {
  if (lang === 'pt') return SERVICES_DATA;

  const translationsMap: Record<Language, Record<string, Partial<LegalService>>> = {
    pt: {},
    en: {
      "consulta-juridica": {
        title: "Initial Legal & Relocation Consultation",
        shortDescription: "In-person consultation in Faro or online video call to review your case, clarify regulations, and outline a step-by-step roadmap.",
        fullDescription: "A thorough 60-minute strategy session with Yuliya Malyshko to review your personal, family, or business goals in Portugal. We inspect necessary documentation, outline legal pathways (D7, D8, D2, Golden Visa), and ensure zero delays.",
        documentsRequired: ["Identification document (Passport / EU ID card)", "Relevant immigration or legal paperwork", "Brief summary of questions (optional)"],
        estimatedTimeframe: "60-minute session (Scheduled within 24–48 hours)",
        feeGuideline: "Fixed consultation fee, fully deductible from package bookings",
        badge: "Most Popular",
      },
      "pedido-residencia": {
        title: "Residence Permit Application & Renewal Support",
        shortDescription: "Comprehensive file preparation and procedural guidance for submissions to AIMA (Portuguese Agency for Integration, Migration and Asylum).",
        fullDescription: "Full administrative support for initial grants, renewals, family reunification, and status changes with AIMA. Meticulous document audits prevent costly delays or refusals.",
        documentsRequired: ["Valid Passport", "Proof of financial means & subsistence", "Proof of registered accommodation in Portugal", "NIF and NISS tax certificates", "Apostilled criminal record check"],
        estimatedTimeframe: "Complete file ready in 5–10 business days",
        feeGuideline: "Fixed tiered rate based on residency type",
        badge: "Essential",
      },
      "servicos-imigracao": {
        title: "Full Relocation & Settlement Assistance",
        shortDescription: "End-to-end guidance for digital nomads, retirees, investors, and qualified professionals moving to Portugal.",
        fullDescription: "Specialized assistance through every milestone of relocating to Portugal. From pre-departure consular paperwork to arrival, house leasing, bank account setup, and legal residency cards.",
        documentsRequired: ["Passport", "Proof of passive income or remote employment contract", "Bank statements", "Comprehensive health insurance"],
        estimatedTimeframe: "Continuous step-by-step guidance over 2–6 months",
        feeGuideline: "All-inclusive relocation package",
        badge: "International",
      },
      "nacionalidade-portuguesa": {
        title: "Portuguese Citizenship & Nationality Applications",
        shortDescription: "Eligibility review, document procurement, certified translations, apostilles, and submission to the Central Registries (IRN).",
        fullDescription: "Detailed assessment and dossier management for citizenship by 5 years of legal residence, marriage/de facto union, or Portuguese descent (parents/grandparents).",
        documentsRequired: ["Full-narrative birth certificates", "Clean police clearance certificates", "Portuguese language certificate (A2 level, where required)", "Valid residence title"],
        estimatedTimeframe: "Initial audit in 3 days; official IRN processing timelines",
        feeGuideline: "Fixed milestone fees per application phase",
        badge: "Citizenship",
      },
      "servicos-fiscais": {
        title: "NIF Procurement & Fiscal Representation",
        shortDescription: "Express issuance of Portuguese NIF (Tax Number), fiscal representation for non-EU residents, and Finanças registration.",
        fullDescription: "The essential first step for any property purchase, rental lease, bank account, or visa in Portugal. Fast NIF procurement with professional registered fiscal representation.",
        documentsRequired: ["Passport copy", "Proof of residential address in home country", "Power of attorney for NIF application"],
        estimatedTimeframe: "NIF issued within 24 to 48 hours",
        feeGuideline: "Fixed fee for NIF + 12-month fiscal representation",
        badge: "Express",
      },
      "contabilidade": {
        title: "NISS Social Security & Freelance Activity Setup",
        shortDescription: "Procurement of NISS (Social Security Number), opening of sole-trader freelance activity (Recibos Verdes), and compliance.",
        fullDescription: "Administrative assistance registering with Portuguese Social Security (Segurança Social) and opening commercial activity on the Tax Authority portal.",
        documentsRequired: ["NIF Certificate", "Passport / ID card", "Service agreement or proof of freelance activity"],
        estimatedTimeframe: "Completed within 2–4 business days",
        feeGuideline: "Flat registration fee",
      },
      "constituicao-empresas": {
        title: "Company Formation & Business Incorporation",
        shortDescription: "Guidance for founding Portuguese companies (Lda, Unipessoal), articles of association, commercial registry, and corporate bank accounts.",
        fullDescription: "Full assistance for entrepreneurs and foreign investors incorporating in Portugal. Coordination with notary offices, commercial registries (Empresa na Hora), and banking institutions.",
        documentsRequired: ["Shareholders/Directors identification & NIFs", "Chosen company trade names", "Designated share capital"],
        estimatedTimeframe: "Company formed within 3–5 business days",
        feeGuideline: "Turnkey company formation package",
        badge: "Turnkey",
      },
      "contratos": {
        title: "Contract Review & Real Estate Due Diligence",
        shortDescription: "Thorough drafting and scrutiny of Promissory Buy-Sell Agreements (CPCV), residential leases, and commercial contracts.",
        fullDescription: "Legal and administrative verification of real estate transactions and rental agreements. Scrutiny of Caderneta Predial, Land Registry Certidão Permanente, and Habitation Licenses.",
        documentsRequired: ["Property Land Registry Certificate (Certidão Permanente)", "Tax registration (Caderneta Predial) & Habitation License", "IDs and NIFs of involved parties"],
        estimatedTimeframe: "Draft or review in 48–72 business hours",
        feeGuideline: "Fixed fee per contract draft or review",
      },
      "entidades-publicas": {
        title: "Public Administration Representation & Filings",
        shortDescription: "In-person and written administrative representation before AIMA, Finanças, Social Security, Municipalities, and Registry Offices.",
        fullDescription: "Direct representation under Power of Attorney before Portuguese public bodies. Filing petitions, resolving administrative bottlenecks, and obtaining official certificates.",
        documentsRequired: ["Executed Power of Attorney (Procuração)", "Official notices or previous case files"],
        estimatedTimeframe: "Immediate action upon receipt of authorization",
        feeGuideline: "Initial review + flat fee per administrative filing",
      },
      "apoio-vistos": {
        title: "Consular Visa Dossier Preparation (D7, D8, D2)",
        shortDescription: "Comprehensive file preparation for D7 (Passive Income), D8 (Digital Nomad), D2 (Entrepreneur), and Student Visas abroad.",
        fullDescription: "Step-by-step guidance for consular submissions at Portuguese Consulates and VFS Global centers worldwide. Financial proofs, accommodation certificates, and legal motivation letters.",
        documentsRequired: ["Completed consular application forms", "Proof of income / remote work contracts", "Travel & medical insurance", "Clean criminal record certificate"],
        estimatedTimeframe: "Complete file compiled 7 days before consular appointment",
        feeGuideline: "Fixed fee per consular file",
        badge: "Consular",
      },
      "direito-familia": {
        title: "Certified Document Translations & Hague Apostilles",
        shortDescription: "Hague apostille legalization, certified multi-language translations, marriage transcripts, and vital record registrations.",
        fullDescription: "Sworn and certified translations (Portuguese, English, Ukrainian, Russian), Hague apostilles, and civil registrations with Portuguese Civil Registry Conservatórias.",
        documentsRequired: ["Original vital certificates", "Apostille stamps or consular legalizations", "Certified translations"],
        estimatedTimeframe: "3–10 business days depending on volume",
        feeGuideline: "Fixed fee per document or page",
      },
      "apoio-empresas": {
        title: "Ongoing Corporate & Expat Administrative Retainer",
        shortDescription: "Monthly retainer support for expanding companies, startups, and foreign employers managing staff in Portugal.",
        fullDescription: "Continuous administrative and compliance backing for your business. Handling foreign staff relocation dossiers, license filings, supplier agreements, and statutory deadlines.",
        documentsRequired: ["Company Commercial Registry Certificate", "Directors ID documents", "Active company contracts"],
        estimatedTimeframe: "Ongoing monthly advisory & assistance",
        feeGuideline: "Tailored monthly retainer",
        badge: "Corporate",
      }
    },
    ru: {
      "consulta-juridica": {
        title: "Первичная консультация по релокации и праву",
        shortDescription: "Личный прием в офисе в Фару или онлайн-видеосвязь для анализа вашей ситуации, подбора программы и разработки пошагового плана.",
        fullDescription: "Подробная 60-минутная стратегическая сессия с Юлией Малышко. Мы разберем ваши цели (визы D7, D8, D2, ВНЖ, бизнес), проверим документы, предупредим возможные риски и выстроим четкий план действий.",
        documentsRequired: ["Паспорт / удостоверение личности", "Имеющиеся документы по делу", "Краткий список вопросов (по желанию)"],
        estimatedTimeframe: "Консультация 60 минут (запись на ближайшие 24–48 часов)",
        feeGuideline: "Фиксированная стоимость, засчитывается в пакет услуг",
        badge: "Популярно",
      },
      "pedido-residencia": {
        title: "Оформление и продление ВНЖ (AIMA)",
        shortDescription: "Полная подготовка досье и сопровождение для подачи в миграционную службу AIMA (ранее SEF).",
        fullDescription: "Комплексная помощь при первом получении и продлении ВНЖ Португалии (первичный ВНЖ, продление, воссоединение семьи). Тщательный аудит каждой справки для исключения отказов и задержек.",
        documentsRequired: ["Действующий загранпаспорт", "Подтверждение дохода и средств к существованию", "Договор аренды или подтверждение жилья", "Справки NIF и NISS", "Справка о несудимости с апостилем"],
        estimatedTimeframe: "Подготовка досье за 5–10 рабочих дней",
        feeGuideline: "Фиксированный тариф в зависимости от типа ВНЖ",
        badge: "Базовая услуга",
      },
      "servicos-imigracao": {
        title: "Комплексное сопровождение релокации в Португалию",
        shortDescription: "Поддержка под ключ для цифровых кочевников, пенсионеров, инвесторов и квалифицированных специалистов.",
        fullDescription: "Экспертное сопровождение на каждом этапе: от первичной подачи документов на родине до прибытия, открытия счетов, аренды жилья и получения карты резидента в Португалии.",
        documentsRequired: ["Загранпаспорт", "Подтверждение пассивного дохода или удаленной работы", "Банковские выписки", "Медицинская страховка"],
        estimatedTimeframe: "Пошаговое ведение дела в течение 2–6 месяцев",
        feeGuideline: "Пакет комплексного сопровождения",
        badge: "Под ключ",
      },
      "nacionalidade-portuguesa": {
        title: "Оформление гражданства Португалии",
        shortDescription: "Анализ права на гражданство, истребование документов, сертифицированные переводы, апостили и подача в IRN.",
        fullDescription: "Подготовка и подача документов на получение гражданства Португалии по сроку проживания (5 лет), браку или португальским корням. Прохождение всех процедур в Консерватории (IRN).",
        documentsRequired: ["Свидетельства о рождении (полная выписка)", "Справки о несудимости", "Сертификат знания португальского языка (А2, если требуется)", "Карта резидента ВНЖ"],
        estimatedTimeframe: "Аудит за 3 дня; регламентные сроки рассмотрения IRN",
        feeGuideline: "Фиксированная поэтапная оплата",
        badge: "Гражданство",
      },
      "servicos-fiscais": {
        title: "Получение налогового номера NIF и налоговое представительство",
        shortDescription: "Срочное оформление NIF, зарегистрированное налоговое представительство для нерезидентов и регистрация в Finanças.",
        fullDescription: "Базовый шаг для любых действий в Португалии (покупка недвижимости, аренда, визы, банковский счет). Оформление NIF за 24–48 часов с надежным налоговым представителем.",
        documentsRequired: ["Копия загранпаспорта", "Подтверждение адреса в стране проживания", "Доверенность на получение NIF"],
        estimatedTimeframe: "Выпуск NIF за 24–48 часов",
        feeGuideline: "Фиксированная цена за NIF + годовое представительство",
        badge: "Срочно",
      },
      "contabilidade": {
        title: "Номер соцстрахования NISS и открытие ИП (Recibos Verdes)",
        shortDescription: "Получение номера NISS, регистрация деятельности индивидуального предпринимателя и консультация по отчетности.",
        fullDescription: "Помощь в регистрации в португальской службе социального страхования (Segurança Social) и открытие коммерческой деятельности в налоговой службе (Finanças).",
        documentsRequired: ["Свидетельство NIF", "Загранпаспорт", "Контракт на услуги или подтверждение деятельности"],
        estimatedTimeframe: "Оформление за 2–4 рабочих дня",
        feeGuideline: "Фиксированный разовый сбор",
      },
      "constituicao-empresas": {
        title: "Регистрация компании в Португалии",
        shortDescription: "Открытие юридических лиц (Lda, Unipessoal), подготовка устава, регистрация в реестре и корпоративный банковский счет.",
        fullDescription: "Полная поддержка бизнеса и инвесторов при открытии фирмы в Португалии. Взаимодействие с нотариусами, коммерческим регистром (Empresa na Hora) и банками.",
        documentsRequired: ["Паспорта и NIF учредителей/директоров", "Варианты названия компании", "Уставный капитал"],
        estimatedTimeframe: "Регистрация компании за 3–5 рабочих дней",
        feeGuideline: "Пакет открытия бизнеса под ключ",
        badge: "Бизнес",
      },
      "contratos": {
        title: "Проверка договоров аренды и недвижимости",
        shortDescription: "Составление и правовой аудит предварительных договоров купли-продажи (CPCV), аренды и коммерческих контрактов.",
        fullDescription: "Юридическая проверка объектов недвижимости перед покупкой или долгосрочной арендой. Проверка выписки Caderneta Predial, постоянного сертификата (Certidão Permanente) и лицензии (Licença de Utilização).",
        documentsRequired: ["Постоянный сертификат объекта (Certidão Permanente)", "Налоговая выписка Caderneta Predial", "Документы и NIF сторон"],
        estimatedTimeframe: "Заключение или правки за 48–72 рабочих часа",
        feeGuideline: "Фиксированная ставка за проверку договора",
      },
      "entidades-publicas": {
        title: "Представительство в государственных органах Португалии",
        shortDescription: "Личное и письменное представительство ваших интересов по доверенности в AIMA, Finanças, Segurança Social и мэриях.",
        fullDescription: "Решение административных вопросов, подача запросов, ответы на официальные уведомления и получение архивных справок без вашего личного присутствия.",
        documentsRequired: ["Оформленная доверенность (Procuração)", "Уведомление от госоргана или материалы дела"],
        estimatedTimeframe: "Немедленное действие после получения документов",
        feeGuideline: "Первичный анализ + фиксированный сбор за действие",
      },
      "apoio-vistos": {
        title: "Подготовка досье на визы D7, D8, D2 в консульство",
        shortDescription: "Формирование пакета документов для подачи в консульства Португалии и визовые центры VFS Global по всему миру.",
        fullDescription: "Детальная подготовка досье на визы: D7 (пассивный доход), D8 (Digital Nomad), D2 (бизнес-виза). Подтверждение финансов, договор аренды жилья, сопроводительное мотивационное письмо.",
        documentsRequired: ["Заполненная анкета консульства", "Документы о доходах / удаленной работе", "Медицинская страховка", "Справка о несудимости"],
        estimatedTimeframe: "Полный пакет готов за 7 дней до визита в консульство",
        feeGuideline: "Фиксированная стоимость за визовое досье",
        badge: "Консульство",
      },
      "direito-familia": {
        title: "Сертифицированные переводы и апостилирование",
        shortDescription: "Проставление апостиля Гааги, заверенные переводы (португальский, английский, украинский, русский) и легализация.",
        fullDescription: "Официальные переводы документов, заверение в Португалии, легализация свидетельств о рождении и браке для португальских регистров (Conservatória).",
        documentsRequired: ["Оригиналы документов", "Штампы апостиля или консульской легализации"],
        estimatedTimeframe: "От 3 до 10 рабочих дней в зависимости от объема",
        feeGuideline: "Фиксированная стоимость за документ или страницу",
      },
      "apoio-empresas": {
        title: "Абонентское административное обслуживание бизнеса",
        shortDescription: "Регулярное сопровождение для компаний, стартапов и работодателей, привлекающих иностранных сотрудников в Португалию.",
        fullDescription: "Постоянная поддержка вашего бизнеса: оформление релокации сотрудников, продление документов, контракты с подрядчиками и контроль сроков.",
        documentsRequired: ["Выписка о регистрации компании", "Документы директоров", "Действующие договоры"],
        estimatedTimeframe: "Постоянное абонентское обслуживание",
        feeGuideline: "Индивидуальный ежемесячный тариф",
        badge: "Для бизнеса",
      }
    },
    uk: {
      "consulta-juridica": {
        title: "Первинна консультація з релокації та права",
        shortDescription: "Особиста зустріч в офісі у Фару або відеозв'язок для аналізу вашої ситуації, вибору програми та складання покрокового плану.",
        fullDescription: "Ґрунтовна 60-хвилинна консультація з Юлією Малишко. Аналіз ваших цілей (візи D7, D8, D2, ВНЖ, бізнес), аудит наявних документів, попередження ризиків та чітка стратегія дій.",
        documentsRequired: ["Закордонний паспорт / посвідчення особи", "Наявні документи у справі", "Перелік запитань (за бажанням)"],
        estimatedTimeframe: "Сесія 60 хвилин (запис на найближчі 24–48 годин)",
        feeGuideline: "Фіксована вартість, зараховується у вартість пакету послуг",
        badge: "Популярно",
      },
      "pedido-residencia": {
        title: "Оформлення та продовження посвідки на проживання (AIMA)",
        shortDescription: "Повна підготовка пакету документів та супровід для подачі в міграційну службу AIMA (раніше SEF).",
        fullDescription: "Адміністративна допомога при первинному отриманні та продовженні посвідок на проживання в Португалії (первинний ВНЖ, продовження, возз'єднання сім'ї). Ретельна перевірка кожної довідки.",
        documentsRequired: ["Дійсний закордонний паспорт", "Підтвердження доходів та засобів існування", "Підтвердження житла в Португалії", "Довідки NIF та NISS", "Довідка про несудимість з апостилем"],
        estimatedTimeframe: "Підготовка досьє за 5–10 робочих днів",
        feeGuideline: "Фіксований тариф залежно від типу посвідки",
        badge: "Базова послуга",
      },
      "servicos-imigracao": {
        title: "Комплексний супровід релокації до Португалії",
        shortDescription: "Супровід під ключ для цифрових кочівників, пенсіонерів, інвесторів та кваліфікованих спеціалістів.",
        fullDescription: "Професійний супровід на кожному кроці: від підготовки документів у країні проживання до прибуття, відкриття рахунків, оренди житла та отримання карти резидента.",
        documentsRequired: ["Закордонний паспорт", "Підтвердження пасивного доходу або віддаленої роботи", "Банківські виписки", "Медичне страхування"],
        estimatedTimeframe: "Покроковий супровід справи протягом 2–6 місяців",
        feeGuideline: "Пакет комплексного супроводу",
        badge: "Під ключ",
      },
      "nacionalidade-portuguesa": {
        title: "Оформлення громадянства Португалії",
        shortDescription: "Аналіз підстав, витребування документів, сертифіковані переклади, апостилі та подача до IRN.",
        fullDescription: "Підготовка та подача документів на набуття громадянства Португалії за 5 років легального проживання, через шлюб або за португальським походженням.",
        documentsRequired: ["Свідоцтва про народження (повний витяг)", "Довідка про несудимість", "Сертифікат знання португальської мови (А2, за потреби)", "Карта резидента ВНЖ"],
        estimatedTimeframe: "Аудит за 3 дні; регламентні терміни розгляду IRN",
        feeGuideline: "Фіксована поетапна оплата",
        badge: "Громадянство",
      },
      "servicos-fiscais": {
        title: "Отримання податкового номера NIF та податкове представництво",
        shortDescription: "Термінове оформлення NIF, офіційне податкове представництво для нерезидентів та реєстрація у Finanças.",
        fullDescription: "Обов'язковий перший крок для будь-яких угод у Португалії (купівля чи оренда житла, банківський рахунок, візи). Оформлення NIF за 24–48 годин із надійним представником.",
        documentsRequired: ["Копія закордонного паспорта", "Підтвердження адреси в країні проживання", "Довіреність на отримання NIF"],
        estimatedTimeframe: "Видача NIF протягом 24–48 годин",
        feeGuideline: "Фіксована ціна за NIF + річне представництво",
        badge: "Терміново",
      },
      "contabilidade": {
        title: "Номер соцстрахування NISS та відкриття ФОП (Recibos Verdes)",
        shortDescription: "Отримання номера NISS, реєстрація незалежної професійної діяльності та консультація щодо податків.",
        fullDescription: "Допомога у реєстрації в системі соціального страхування Португалії (Segurança Social) та відкриття діяльності на податковому порталі Finanças.",
        documentsRequired: ["Свідоцтво NIF", "Закордонний паспорт", "Контракт на послуги або підтвердження зайнятості"],
        estimatedTimeframe: "Оформлення за 2–4 робочих дні",
        feeGuideline: "Фіксований разовий збір",
      },
      "constituicao-empresas": {
        title: "Реєстрація бізнесу та компанії в Португалії",
        shortDescription: "Створення юридичних осіб (Lda, Unipessoal), підготовка статуту, реєстрація в комерційному реєстрі та рахунок у банку.",
        fullDescription: "Комплексна допомога підприємцям та інвесторам при створенні бізнесу в Португалії. Взаємодія з нотаріусами, реєстрами (Empresa na Hora) та банками.",
        documentsRequired: ["Паспорти та NIF засновників/директорів", "Варіанти назви компанії", "Статутний капітал"],
        estimatedTimeframe: "Реєстрація компанії за 3–5 робочих днів",
        feeGuideline: "Пакет відкриття компанії під ключ",
        badge: "Бізнес",
      },
      "contratos": {
        title: "Правовий аудит договорів оренди та нерухомості",
        shortDescription: "Складання та детальна перевірка попередніх договорів купівлі-продажу (CPCV), оренди та комерційних угод.",
        fullDescription: "Юридична перевірка нерухомості перед купівлею чи орендою. Аналіз документів Caderneta Predial, витягу Certidão Permanente та ліцензії на житло (Licença de Utilização).",
        documentsRequired: ["Постійний витяг на об'єкт (Certidão Permanente)", "Податкова довідка Caderneta Predial", "Документи та NIF сторін"],
        estimatedTimeframe: "Проект або висновок за 48–72 робочі години",
        feeGuideline: "Фіксована ставка за перевірку або складання договору",
      },
      "entidades-publicas": {
        title: "Представництво в державних установах Португалії",
        shortDescription: "Особисте та письмове представництво за довіреністю в AIMA, Finanças, Segurança Social та муніципалітетах.",
        fullDescription: "Вирішення адміністративних питань, подача офіційних клопотань, відповіді на запити органів та отримання довідок без вашої особистої присутності.",
        documentsRequired: ["Оформлена довіреність (Procuração)", "Повідомлення держоргану або матеріали справи"],
        estimatedTimeframe: "Негайний початок дій після отримання довіреності",
        feeGuideline: "Первинний аналіз + фіксована ставка за адміністративну дію",
      },
      "apoio-vistos": {
        title: "Підготовка досьє на візи D7, D8, D2 до консульства",
        shortDescription: "Формування пакету документів для подачі до консульств Португалії та візових центрів VFS Global по всьому світу.",
        fullDescription: "Покроковий супровід для віз: D7 (пасивний дохід), D8 (Digital Nomad для віддалених працівників), D2 (підприємницька віза). Докази фінансів, підтвердження житла, мотиваційні листи.",
        documentsRequired: ["Заповнена консульська анкета", "Підтвердження доходів / віддаленої роботи", "Медичне страхування", "Довідка про несудимість"],
        estimatedTimeframe: "Повний пакет готовий за 7 днів до візиту до консульства",
        feeGuideline: "Фіксована вартість за консульське досьє",
        badge: "Консульство",
      },
      "direito-familia": {
        title: "Сертифіковані переклади та апостилювання документів",
        shortDescription: "Проставлення апостиля Гааги, сертифіковані переклади (португальська, англійська, українська, російська) та легалізація.",
        fullDescription: "Офіційні переклади, завірення в Португалії, легалізація свідоцтв про шлюб та народження для органів реєстрації актів цивільного стану (Conservatória).",
        documentsRequired: ["Оригінали документів", "Штампи апостиля або консульська легалізація"],
        estimatedTimeframe: "Від 3 до 10 робочих днів залежно від обсягу",
        feeGuideline: "Фіксована ставка за документ або сторінку",
      },
      "apoio-empresas": {
        title: "Абонентське адміністративне обслуговування бізнесу",
        shortDescription: "Постійний адміністративний супровід для компаній, стартапів та бізнесу з іноземними працівниками в Португалії.",
        fullDescription: "Безперервна підтримка вашої компанії: оформлення та продовження документів співробітників, ліцензії, договори з контрагентами та дотримання термінів.",
        documentsRequired: ["Виписка про комерційну реєстрацію фірми", "Документи директорів", "Чинні договори"],
        estimatedTimeframe: "Постійне абонентське супровід",
        feeGuideline: "Індивідуальний щомісячний тариф",
        badge: "Для бізнесу",
      }
    }
  };

  const localizedMap = translationsMap[lang] || {};

  return SERVICES_DATA.map((service) => {
    const override = localizedMap[service.id];
    if (override) {
      return { ...service, ...override };
    }
    return service;
  });
};

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "1",
    author: "Marc & Helen Dubois",
    role: "Nómadas Digitais & Investidores",
    location: "Faro / França",
    serviceType: "Visto D8 Nómada Digital e NIF",
    rating: 5,
    content: "A Yuliya foi impecável desde a primeira consulta. Tratou dos nossos NIFs em 24 horas, tratou da representação fiscal e preparou o processo do Visto D8 sem falhas. Ter o escritório em Faro facilitou imenso a nossa mudança para o Algarve!",
    date: "Julho 2026"
  },
  {
    id: "2",
    author: "Teresa Vasconcelos",
    role: "Empresária da Restauração",
    location: "Loulé, Algarve",
    serviceType: "Constituição de Empresa e Análise de Contrato",
    rating: 5,
    content: "Atenção ao detalhe fantástica, resposta rápida e clareza total de preços. A Yuliya ajudou a coordenar a constituição da empresa e a revisão do contrato de arrendamento comercial sem qualquer percalço. Recomendo vivamente!",
    date: "Junho 2026"
  },
  {
    id: "3",
    author: "David & Sarah Miller",
    role: "Reformados",
    location: "Tavira / Reino Unido",
    serviceType: "Visto D7 de Rendimentos e Cartão AIMA",
    rating: 5,
    content: "Tratar dos papéis parecia assustador até conhecermos a Yuliya Malyshko. O acompanhamento passo a passo sobre os comprovativos financeiros e o apoio na marcação da AIMA deram-nos total tranquilidade.",
    date: "Maio 2026"
  },
  {
    id: "4",
    author: "Carlos Mendes",
    role: "Requerente de Nacionalidade",
    location: "Lisboa / Brasil",
    serviceType: "Nacionalidade Portuguesa por Descendência",
    rating: 5,
    content: "Pesquisa documental e acompanhamento de registo exemplares. O meu processo de cidadania foi preparado com enorme rigor e a Yuliya enviou-me atualizações regulares sobre cada fase.",
    date: "Março 2026"
  }
];

export const getLocalizedTestimonials = (lang: Language): Testimonial[] => {
  if (lang === 'pt') return TESTIMONIALS_DATA;

  const localizedMap: Record<Language, Testimonial[]> = {
    pt: TESTIMONIALS_DATA,
    en: [
      {
        id: "1",
        author: "Marc & Helen Dubois",
        role: "Digital Nomads & Tech Founders",
        location: "Faro / France",
        serviceType: "D8 Digital Nomad Visa & NIF Setup",
        rating: 5,
        content: "Yuliya was exceptional from our first consultation. She delivered our NIFs in 24 hours, handled fiscal representation, and organized our D8 visa dossier seamlessly. Having her physical office in central Faro made settling in the Algarve effortless!",
        date: "July 2026"
      },
      {
        id: "2",
        author: "Teresa Vasconcelos",
        role: "Hospitality & Restaurant Entrepreneur",
        location: "Loulé, Algarve",
        serviceType: "Company Formation & Commercial Lease Review",
        rating: 5,
        content: "Fantastic attention to detail, lightning-fast turnaround, and transparent fixed pricing. Yuliya managed our company formation and commercial lease review without a single hitch. I highly recommend her services!",
        date: "June 2026"
      },
      {
        id: "3",
        author: "David & Sarah Miller",
        role: "UK Retirees",
        location: "Tavira / United Kingdom",
        serviceType: "D7 Passive Income Visa & AIMA Residence Cards",
        rating: 5,
        content: "Navigating Portuguese bureaucracy seemed overwhelming until we met Yuliya Malyshko. Her structured guidance with bank requirements and AIMA appointment coordination gave us total peace of mind.",
        date: "May 2026"
      },
      {
        id: "4",
        author: "Carlos Mendes",
        role: "Citizenship Applicant",
        location: "Lisbon / Brazil",
        serviceType: "Portuguese Nationality by Descent",
        rating: 5,
        content: "Exemplary document research and registry tracking. My Portuguese citizenship application was prepared with absolute rigor, and Yuliya kept me informed at every stage.",
        date: "March 2026"
      }
    ],
    ru: [
      {
        id: "1",
        author: "Марк и Элен Дюбуа",
        role: "IT-предприниматели и цифровые кочевники",
        location: "Фару / Франция",
        serviceType: "Виза D8 Digital Nomad и NIF",
        rating: 5,
        content: "Юлия проявила высочайший профессионализм с первой минуты. Оформила нам номера NIF буквально за сутки, взяла на себя налоговое представительство и безупречно собрала досье на визу D8. Наличие реального офиса в Фару очень помогло при переезде в Алгарве!",
        date: "Июль 2026"
      },
      {
        id: "2",
        author: "Тереза Васконселуш",
        role: "Владелица ресторанного бизнеса",
        location: "Лоле, Алгарве",
        serviceType: "Регистрация фирмы и аудит договора аренды",
        rating: 5,
        content: "Потрясающая точность, быстрая реакция и полная прозрачность цен. Юлия помогла скоординировать открытие компании и проверила коммерческий договор аренды без единой заминки. Искренне рекомендую!",
        date: "Июнь 2026"
      },
      {
        id: "3",
        author: "Дэвид и Сара Миллер",
        role: "Пенсионеры из Великобритании",
        location: "Тавира / Великобритания",
        serviceType: "Виза пассивного дохода D7 и ВНЖ AIMA",
        rating: 5,
        content: "Оформление документов казалось пугающим, пока мы не обратились к Юлии Малышко. Пошаговое руководство по подтверждению доходов и сопровождение записи в AIMA подарили нам абсолютное спокойствие.",
        date: "Май 2026"
      },
      {
        id: "4",
        author: "Карлос Мендеш",
        role: "Заявитель на гражданство",
        location: "Лиссабон / Бразилия",
        serviceType: "Гражданство Португалии по происхождению",
        rating: 5,
        content: "Образцовая проверка архивных справок и сопровождение в ЗАГСе (IRN). Мое дело о гражданстве было подготовлено с максимальной точностью, и Юлия регулярно присылала отчеты по каждому этапу.",
        date: "Март 2026"
      }
    ],
    uk: [
      {
        id: "1",
        author: "Марк та Елен Дюбуа",
        role: "IT-підприємці та цифрові кочівники",
        location: "Фару / Франція",
        serviceType: "Віза D8 Digital Nomad та податковий номер NIF",
        rating: 5,
        content: "Юлія була бездоганною від першої ж консультації. Оформила наші номери NIF за 24 години, взяла на себе податкове представництво та бездоганно підготувала справу на візу D8. Наявність затишного офісу у Фару надзвичайно полегшила наш переїзд до Алгарве!",
        date: "Липень 2026"
      },
      {
        id: "2",
        author: "Тереза Васконселуш",
        role: "Власниця ресторанного бізнесу",
        location: "Лоле, Алгарве",
        serviceType: "Реєстрація компанії та перевірка договору оренди",
        rating: 5,
        content: "Фантастична увага до деталей, швидкі відповіді та повна прозорість цін. Юлія допомогла зареєструвати компанію та перевірити комерційний договір оренди приміщення без жодних проблем. Щиро рекомендую!",
        date: "Червень 2026"
      },
      {
        id: "3",
        author: "Девід та Сара Міллер",
        role: "Пенсіонери з Великої Британії",
        location: "Тавіра / Велика Британія",
        serviceType: "Віза пасивного доходу D7 та карти резидента AIMA",
        rating: 5,
        content: "Оформлення документів здавалося складним, поки ми не зустріли Юлію Малишко. Її чіткий покроковий супровід щодо фінансових довідок та запису в AIMA надав нам повний спокій.",
        date: "Травень 2026"
      },
      {
        id: "4",
        author: "Карлос Мендеш",
        role: "Заявник на громадянство",
        location: "Лісабон / Бразилія",
        serviceType: "Громадянство Португалії за походженням",
        rating: 5,
        content: "Зразковий збір документів та супровід у реєстрах IRN. Моя справа щодо набуття громадянства була підготовлена з максимальною точністю, а Юлія постійно тримала мене в курсі кожного етапу.",
        date: "Березень 2026"
      }
    ]
  };

  return localizedMap[lang] || TESTIMONIALS_DATA;
};
