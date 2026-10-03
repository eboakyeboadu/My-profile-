import ebenPortraitImg from '../assets/images/eben_portrait_1791064118200.jpg';

export interface ProjectItem {
  id: string;
  title: string;
  repoUrl: string;
  category: 'ai' | 'ops' | 'marketplace';
  categoryLabel: string;
  role: string;
  region: string;
  image: string;
  badge: string;
  badgeType: 'crimson' | 'gold' | 'blue';
  summary: string;
  kpis: {
    label: string;
    value: string;
    sublabel: string;
    highlightColor: 'crimson' | 'gold' | 'light';
  }[];
  tags: string[];
  fullSpec: {
    categoryHeader: string;
    title: string;
    overview: string;
    problem: string;
    deliverables: string[];
    technicalStack: string[];
    businessImpact: string[];
  };
}

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  provider: 'Google' | 'SAP' | 'McKinsey' | 'edX';
  badgeType: 'crimson' | 'gold' | 'blue';
  verifyUrl: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  logoType: 'hbs' | 'hse' | 'knust';
  honor?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  category: string;
  accentColor: 'crimson' | 'gold' | 'darkCrimson';
  bullets: {
    highlight: string;
    text: string;
    boldStat?: string;
    boldStatColor?: 'crimson' | 'gold' | 'light';
  }[];
  skills: string[];
}

export interface InterestItem {
  id: string;
  title: string;
  icon: string;
  iconColor: string;
  description: string;
  tag: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    shortName: string;
    role: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    linkedinDisplay: string;
    github: string;
    portraitImg: string;
    harvardMonogram: string;
  };
  impactMetrics: {
    id: string;
    tag: string;
    value: string;
    unit: string;
    unitColor: 'crimson' | 'gold' | 'light';
    description: string;
  }[];
  projects: ProjectItem[];
  credentials: CredentialItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  interests: InterestItem[];
}

export const PORTFOLIO_DATA: PortfolioData = {
  profile: {
    name: 'Ebenezer Boakye-Boadu',
    shortName: 'EBENEZER B.B.',
    role: 'Product Manager • Harvard Business School (MBA Candidate)',
    tagline: 'Building impactful tech products & scalable platforms.',
    bio: 'Product manager with experience leading global mobility, enterprise software, and fintech products across 17+ countries. Currently an MBA candidate at Harvard Business School.',
    location: 'Boston, MA • Global Operations',
    email: 'eboakyeboadu@mba2028.hbs.edu',
    phone: '+1 (617) 406-7616',
    linkedin: 'https://linkedin.com/in/eboakyeboadu',
    linkedinDisplay: 'linkedin.com/in/eboakyeboadu',
    github: 'https://github.com/eboakyeboadu',
    portraitImg: ebenPortraitImg,
    harvardMonogram: 'https://lh3.googleusercontent.com/aida/AEtjO1UriSibzEyykg-KP_TfKS9aEb7nRzedKnt--bTgwLFzZpV2LrsCVYbcQBAZQCiKHEwK9x_8dKQKdcXO7Tu60XMgzAcgoUIzuhvgdJb_nyQvXn0MS7YlrXxzLw_gOZ_4z83wQxuabd5kzelyh6402DDogWPA94Ce3yTi6i3EeWH9Lun227NP7yBPE0pGYebVIGp7Lkssn4_pdsy4wK6LBiAViAe-97VUnJvwto9NhvAGFfq5hpiMtQgo0A'
  },

  impactMetrics: [
    {
      id: 'market-expansion',
      tag: 'MARKET EXPANSION',
      value: '3.5x',
      unit: 'GMV',
      unitColor: 'crimson',
      description: 'Across 17+ international markets via synchronized driver supply lifecycle algorithms.'
    },
    {
      id: 'dispatch-efficiency',
      tag: 'DISPATCH EFFICIENCY',
      value: '2.8x',
      unit: 'Supply Hrs',
      unitColor: 'gold',
      description: 'Yango Pro redesign slashed wait times 50% and ignited 60%+ GMV uptick.'
    },
    {
      id: 'corporate-foresight',
      tag: 'CORPORATE FORESIGHT',
      value: '15-Yr',
      unit: 'Horizon',
      unitColor: 'light',
      description: 'Architected roadmap driving eight international service line deployments.'
    },
    {
      id: 'systems-integration',
      tag: 'SYSTEMS INTEGRATION',
      value: '-40%',
      unit: 'Delays',
      unitColor: 'gold',
      description: 'National E-Justice SAP architecture elevating transparency and docket throughput.'
    }
  ],

  projects: [
    {
      id: 'case-intelligence',
      title: 'Case-Intelligence-2.0',
      repoUrl: 'https://github.com/eboakyeboadu/Case-Intelligence-2.0',
      category: 'ai',
      categoryLabel: 'AI & Simulation',
      role: 'FOUNDING ARCHITECT',
      region: 'Case Mastery Cockpit',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      badge: 'CASE PREP & SIMULATION',
      badgeType: 'crimson',
      summary: 'A platform to prepare for cases and simulate case discussion. Equipped with structured strategic frameworks, conversational AI probes, and real-time synthesis.',
      kpis: [
        { label: 'Prep Speed', value: '3x', sublabel: 'Drill Velocity', highlightColor: 'light' },
        { label: 'Framework Fidelity', value: '98%', sublabel: 'Synthesis', highlightColor: 'crimson' },
        { label: 'Scenarios', value: '50+', sublabel: 'Industries', highlightColor: 'gold' }
      ],
      tags: ['Case Simulation', 'LLM Dialogues', 'Structured Framing', 'Quant Modeling', 'React / TypeScript'],
      fullSpec: {
        categoryHeader: 'STRATEGY & AI COCKPIT // CASE INTELLIGENCE',
        title: 'Case-Intelligence-2.0 — Interactive Strategic Case Simulation Engine',
        overview: 'Engineered an interactive case-prep cockpit allowing candidates to run realistic, dynamic case discussions with synthesized AI feedback across market entry, profitability, and M&A.',
        problem: 'Traditional case preparation relies on manual peer practice with inconsistent feedback loops and lack of rigorous quantitative stress-testing.',
        deliverables: [
          'Interactive scenario sandbox supporting dynamic interviewer pivots and branch paths.',
          'Automated structure evaluation assessing MECE rigor, hypothesis trees, and quantitative logic.',
          'Real-time synthesis transcript highlighting strengths and areas for strategic improvement.',
          'Built-in financial and market sizing calculator with formula validation.'
        ],
        technicalStack: ['React 18', 'TypeScript', 'Tailwind CSS', 'State Machine Orchestration', 'Structured Prompt Evaluation'],
        businessImpact: [
          'Accelerated candidate case readiness by 3x.',
          'Enabled autonomous multi-case practice sessions with instant rubric grading.'
        ]
      }
    },
    {
      id: 'recruitpilot-ai',
      title: 'recruitpilot-ai',
      repoUrl: 'https://github.com/eboakyeboadu/recruitpilot-ai',
      category: 'ai',
      categoryLabel: 'AI & Talent Intelligence',
      role: 'LEAD CREATOR • COCKPIT PROTOTYPE',
      region: 'Consulting, Tech & IB',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
      badge: 'TALENT COMMAND CENTER',
      badgeType: 'crimson',
      summary: 'A recruiting command center for high-stakes hiring, especially in consulting, tech, and investment banking. Early cockpit prototype for candidate diagnostics and pipeline telemetry.',
      kpis: [
        { label: 'Screening Cycle', value: '-65%', sublabel: 'Time Saved', highlightColor: 'crimson' },
        { label: 'Diagnostic Match', value: '94%', sublabel: 'Signal Accuracy', highlightColor: 'gold' },
        { label: 'Target Sectors', value: '3 Verticals', sublabel: 'Consulting/Tech/IB', highlightColor: 'light' }
      ],
      tags: ['Talent Cockpit', 'High-Stakes Hiring', 'Resume Diagnostic', 'Candidate Radar', 'AI Pipeline'],
      fullSpec: {
        categoryHeader: 'TALENT OPERATIONS // RECRUITPILOT AI',
        title: 'recruitpilot-ai — High-Stakes Hiring Command Cockpit',
        overview: 'Built a specialized candidate intelligence console calibrated to evaluate technical rigor, leadership signals, and institutional pedigree for competitive roles.',
        problem: 'Recruiters and hiring managers spend 100+ hours manually sifting through thousands of resumes with inconsistent evaluation criteria.',
        deliverables: [
          'Multi-dimensional rubric scoring across leadership, quantitative prowess, and cultural trajectory.',
          'Radar chart visualization benchmarking candidates against cohort percentiles.',
          'Automated interview question generator calibrated to resume claim diagnostics.'
        ],
        technicalStack: ['TypeScript', 'Vite / React', 'Tailwind CSS', 'Lucide / Material Icons', 'JSON-Schema Rubrics'],
        businessImpact: [
          'Reduces time-to-first-interview from 14 days to under 48 hours.',
          'Eliminates unconscious keyword bias through standardized competency scoring.'
        ]
      }
    },
    {
      id: 'envoy-ai',
      title: 'EnvoyAI',
      repoUrl: 'https://github.com/eboakyeboadu/EnvoyAI',
      category: 'ai',
      categoryLabel: 'Autonomous Agents',
      role: 'FOUNDING ARCHITECT',
      region: 'Autonomous Job Agent',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      badge: 'AUTONOMOUS JOB AGENT',
      badgeType: 'crimson',
      summary: 'An autonomous job search agent that helps with job hunting and application workflows. Automates role discovery, application tailoring, and lifecycle status tracking.',
      kpis: [
        { label: 'Search Capacity', value: '10x', sublabel: 'Throughput', highlightColor: 'gold' },
        { label: 'Match Precision', value: '99%', sublabel: 'Job Alignment', highlightColor: 'light' }
      ],
      tags: ['Autonomous Agents', 'Application Workflow', 'Opportunity Scout', 'Automation'],
      fullSpec: {
        categoryHeader: 'AUTONOMOUS WORKFLOWS // ENVOY AI',
        title: 'EnvoyAI — Autonomous Career Hunting & Application Agent',
        overview: 'Engineered an autonomous workflow agent that scouts relevant roles, matches skills against requirement criteria, and streamlines application submission pipelines.',
        problem: 'Job seekers lose countless hours to repetitive application forms and manual tracking spreadsheets across fragmented job boards.',
        deliverables: [
          'Smart opportunity scraper filtering high-signal target openings.',
          'Dynamic CV tailoring engine aligning impact achievements to specific job requirements.',
          'Kanban application telemetry tracker with automated follow-up triggers.'
        ],
        technicalStack: ['TypeScript', 'Workflow Orchestration', 'Tailwind CSS', 'REST Integration', 'Local Storage Persistence'],
        businessImpact: [
          '10x increase in weekly high-quality application submissions.',
          'Consolidated career search metrics into a unified dashboard.'
        ]
      }
    },
    {
      id: 'yango-marketing-studio',
      title: 'Yango-Marketing-Manager-Studio',
      repoUrl: 'https://github.com/eboakyeboadu/Yango-Marketing-Manager-Studio',
      category: 'ops',
      categoryLabel: 'Operations & Marketing',
      role: 'PRODUCT LEAD',
      region: 'Marketing Ops Suite',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      badge: 'MARKETING OPS SUITE',
      badgeType: 'gold',
      summary: 'A marketing operations and productivity suite for managing marketing work, sprint allocations, cross-functional campaigns, and creative asset delivery.',
      kpis: [
        { label: 'Sprint Speed', value: '2.5x', sublabel: 'Campaign Delivery', highlightColor: 'gold' },
        { label: 'Asset Cycle', value: '-45%', sublabel: 'Approval Latency', highlightColor: 'light' }
      ],
      tags: ['Marketing Operations', 'Campaign Management', 'Asset Workflow', 'Team Velocity'],
      fullSpec: {
        categoryHeader: 'ENTERPRISE PRODUCTIVITY // MARKETING STUDIO',
        title: 'Yango-Marketing-Manager-Studio — Marketing Ops Workspace',
        overview: 'Unified decentralized regional marketing teams into an audited operating workspace with live sprint boards, asset approval flows, and budget tracking.',
        problem: 'Marketing squads across multiple countries struggled with uncoordinated campaign launches and lost creative assets in scattered chat threads.',
        deliverables: [
          'Sprint planning board tailored for creative assets, copy reviews, and launch approvals.',
          'Centralized asset registry with version history and brand guideline validation.',
          'Live campaign calendar showing multi-channel rollout dates across target markets.'
        ],
        technicalStack: ['React', 'TypeScript', 'Tailwind CSS', 'Drag-and-Drop Kanban', 'Modular Workspace Architecture'],
        businessImpact: [
          'Delivered marketing sprints 2.5x faster across regional teams.',
          'Slashed creative asset sign-off delays by 45%.'
        ]
      }
    },
    {
      id: 'befakor',
      title: 'Befakor',
      repoUrl: 'https://github.com/eboakyeboadu/Befakor',
      category: 'marketplace',
      categoryLabel: 'Marketplace & Commerce',
      role: 'PLATFORM ARCHITECT',
      region: 'Campus Marketplace',
      image: 'https://images.unsplash.com/photo-1556742049-0a67e55722c0?auto=format&fit=crop&w=1200&q=80',
      badge: 'CAMPUS MARKETPLACE',
      badgeType: 'blue',
      summary: 'A student marketplace for buying, selling, and trading student-related goods and services. Designed to build trust, liquidity, and affordable access on campus.',
      kpis: [
        { label: 'Trust Verification', value: '100%', sublabel: 'Student Identity', highlightColor: 'gold' },
        { label: 'Match Time', value: '<5min', sublabel: 'Peer Exchange', highlightColor: 'light' }
      ],
      tags: ['Peer-to-Peer', 'Campus Commerce', 'Student Liquidity', 'Trust & Escrow'],
      fullSpec: {
        categoryHeader: 'COMMERCE PLATFORMS // BEFAKOR',
        title: 'Befakor — Trusted Student Peer-to-Peer Campus Marketplace',
        overview: 'Developed a verified campus commerce platform allowing university students to buy, sell, and exchange textbooks, electronics, and peer tutoring services safely.',
        problem: 'Campus students face high rates of marketplace fraud and price gouging on unvetted social media platforms.',
        deliverables: [
          'Verified student onboarding with official university domain authentication.',
          'Safe meet-up and escrow point coordination on campus.',
          'Categorized search with instant messaging and deal reservations.'
        ],
        technicalStack: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive Mobile-First UI', 'Peer Messaging'],
        businessImpact: [
          'Provided thousands of students with affordable, secure campus trading.',
          'Zero fraud incidents across verified student exchange loops.'
        ]
      }
    },
    {
      id: 'marketing-projects-dashboard',
      title: 'Marketing-Projects-Dashboard',
      repoUrl: 'https://github.com/eboakyeboadu/Marketing-Projects-Dashboard',
      category: 'ops',
      categoryLabel: 'Executive Analytics & Ops',
      role: 'SYSTEM ARCHITECT',
      region: 'Org-Wide Telemetry',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
      badge: 'PROJECT INTELLIGENCE',
      badgeType: 'gold',
      summary: 'A central dashboard that tracks all marketing projects across the organization, providing executive visibility on milestones, budgets, and delivery status.',
      kpis: [
        { label: 'Executive Sync', value: '100%', sublabel: 'Org Visibility', highlightColor: 'light' },
        { label: 'Telemetry Speed', value: 'Real-Time', sublabel: 'Milestone Tracking', highlightColor: 'gold' }
      ],
      tags: ['Org Intelligence', 'Milestone Tracking', 'Budget Analytics', 'Executive Dashboard'],
      fullSpec: {
        categoryHeader: 'ORGANIZATIONAL INTELLIGENCE // PROJECT DASHBOARD',
        title: 'Marketing-Projects-Dashboard — Centralized Project Telemetry',
        overview: 'Created an executive portfolio cockpit that aggregates progress, deadlines, resource allocation, and budget burn across dozens of active marketing initiatives.',
        problem: 'Senior leadership lacked a single source of truth for marketing portfolio health, leading to missed project deadlines and unmonitored budget overruns.',
        deliverables: [
          'Unified Gantt and milestone tracker visualizing project dependencies.',
          'Real-time budget burn charts and ROI projection models.',
          'Executive summary reports exportable for leadership reviews.'
        ],
        technicalStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js / Data Visualizations', 'Interactive Filter Matrix'],
        businessImpact: [
          'Achieved 100% executive visibility across organization projects.',
          'Reduced project milestone slippage by 35% in consecutive quarters.'
        ]
      }
    }
  ],

  credentials: [
    {
      id: 'cred-pm-edx',
      title: 'Product Management Professional Certificate',
      issuer: 'edX Professional Certificate',
      provider: 'edX',
      badgeType: 'crimson',
      verifyUrl: 'https://credentials.edx.org/credentials/992cc152153542fc885bd50d13aa6a7d/'
    },
    {
      id: 'cred-google-pm',
      title: 'Google Project Management Specialization',
      issuer: 'Google via Coursera',
      provider: 'Google',
      badgeType: 'blue',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/EQSST3XDBR5U'
    },
    {
      id: 'cred-google-ai',
      title: 'Google AI Essentials Specialization',
      issuer: 'Google via Coursera',
      provider: 'Google',
      badgeType: 'blue',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/KN977G741MMU'
    },
    {
      id: 'cred-mckinsey-fwd',
      title: 'McKinsey Forward Program',
      issuer: 'McKinsey & Company via Credly',
      provider: 'McKinsey',
      badgeType: 'crimson',
      verifyUrl: 'https://www.credly.com/badges/79455b15-8393-4624-a33a-14b10d17f78e/'
    },
    {
      id: 'cred-google-bi',
      title: 'Google Business Intelligence Specialization',
      issuer: 'Google via Coursera',
      provider: 'Google',
      badgeType: 'blue',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/9YZNS4V7DCSK'
    },
    {
      id: 'cred-google-adv-data',
      title: 'Google Advanced Data Analytics Specialization',
      issuer: 'Google via Coursera',
      provider: 'Google',
      badgeType: 'blue',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/CKEP2RUV2J38'
    },
    {
      id: 'cred-google-data',
      title: 'Google Data Analytics Specialization',
      issuer: 'Google via Coursera',
      provider: 'Google',
      badgeType: 'blue',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate/F376PM6H63GB'
    },
    {
      id: 'cred-sap-activate',
      title: 'SAP Certified Associate - SAP Activate Project Manager',
      issuer: 'SAP SE via Credly',
      provider: 'SAP',
      badgeType: 'gold',
      verifyUrl: 'https://www.credly.com/badges/c4694b5c-ba19-495f-aa83-1dcbd46974c3/'
    },
    {
      id: 'cred-sap-s4hana',
      title: 'SAP Certified Application Associate - Business Process Integration with SAP S/4HANA 1909',
      issuer: 'SAP SE via Credly',
      provider: 'SAP',
      badgeType: 'gold',
      verifyUrl: 'https://www.credly.com/badges/c99ae73d-0900-4f2f-8c93-b32bf0c36907/'
    }
  ],

  experiences: [
    {
      id: 'exp-yango',
      role: 'Senior Project Manager • Yango (Yandex Group)',
      company: 'Yango (Yandex Group)',
      period: 'Nov 2022 – Aug 2026',
      location: 'Moscow & Dubai • 30+ Countries',
      category: 'GLOBAL MOBILITY & PLATFORMS',
      accentColor: 'crimson',
      bullets: [
        {
          highlight: 'Core Driver OS Redesign',
          text: 'Increased driver supply hours by',
          boldStat: '2.8x',
          boldStatColor: 'light'
        },
        {
          highlight: 'Wait Time Reduction',
          text: 'Slashed arrival times by',
          boldStat: '50%',
          boldStatColor: 'crimson'
        },
        {
          highlight: 'Market Scale',
          text: 'Expanded across 17+ international territories unlocking',
          boldStat: '3.5x GMV',
          boldStatColor: 'gold'
        }
      ],
      skills: ['Platform Mobility', 'Supply Optimization', 'Foresight Strategy', 'GenAI Workflows']
    },
    {
      id: 'exp-sap',
      role: 'Lead SAP Consultant • Enterprise Solutions',
      company: 'Enterprise Solutions',
      period: 'Jul 2020 – Sep 2021',
      location: 'Accra, Ghana',
      category: 'ENTERPRISE ARCHITECTURE',
      accentColor: 'darkCrimson',
      bullets: [
        {
          highlight: 'National E-Justice Platform',
          text: 'Architected Ghana digital justice ecosystem, curtailing processing latency by',
          boldStat: '~40%',
          boldStatColor: 'light'
        },
        {
          highlight: 'Enterprise S/4HANA Suite',
          text: 'Drove enterprise user adoption to',
          boldStat: '>90%',
          boldStatColor: 'gold'
        }
      ],
      skills: ['SAP S/4HANA', 'SuccessFactors', 'GovTech Systems']
    },
    {
      id: 'exp-petra',
      role: 'Financial Advisor – Team Lead • Petra Securities',
      company: 'Petra Securities',
      period: 'Jun 2019 – Jul 2020',
      location: 'Accra, Ghana',
      category: 'FINTECH & ASSET MANAGEMENT',
      accentColor: 'crimson',
      bullets: [
        {
          highlight: 'Digital Advisory Engine',
          text: 'Co-developed algorithmic simulator driving a',
          boldStat: '50% conversion lift',
          boldStatColor: 'light'
        },
        {
          highlight: 'Fund Capitalization',
          text: 'Structured two mutual fund launches, securing',
          boldStat: '$25M+',
          boldStatColor: 'gold'
        }
      ],
      skills: ['FinTech Architecture', 'Portfolio Theory', 'Risk Analytics']
    },
    {
      id: 'exp-ssnit',
      role: 'Business Strategy & Operations Analyst • SSNIT',
      company: 'SSNIT',
      period: 'Sep 2017 – May 2019',
      location: 'Accra, Ghana',
      category: 'OPERATIONS & SCM',
      accentColor: 'gold',
      bullets: [
        {
          highlight: 'Procurement Automation',
          text: 'Automated procurement cycles with Oracle SCM, expanding throughput by',
          boldStat: '2.5x',
          boldStatColor: 'gold'
        },
        {
          highlight: 'Supply Reliability',
          text: 'Maintained a nationwide delivery completion rate of',
          boldStat: '97%',
          boldStatColor: 'crimson'
        }
      ],
      skills: ['Oracle SCM', 'Operations Analytics', 'Process Engineering']
    }
  ],

  education: [
    {
      id: 'edu-hbs',
      institution: 'Harvard Business School',
      degree: 'Master of Business Administration (MBA Candidate)',
      period: '2026 – 2028',
      location: 'Cambridge, MA • USA',
      logoType: 'hbs'
    },
    {
      id: 'edu-hse',
      institution: 'Higher School of Economics',
      degree: 'MSc, Technology & Innovation Management',
      period: '2021 – 2023',
      location: 'Moscow, Russia • Full Scholarship',
      logoType: 'hse',
      honor: 'Highest Merit Honors • 1st Place Open Doors Olympiad'
    },
    {
      id: 'edu-knust',
      institution: 'Kwame Nkrumah University of Science and Technology',
      degree: 'Bachelor of Arts in Economics (Minor: Sociology)',
      period: '2013 – 2017',
      location: 'Kumasi, Ghana • Highest Honors',
      logoType: 'knust',
      honor: 'Student of the Year (Top 2 of 60,000+ Students)'
    }
  ],

  interests: [
    {
      id: 'int-1',
      title: 'Smart Career Support',
      icon: 'groups',
      iconColor: 'text-[#ffb3b3]',
      description: 'Empowering young Ghanaian innovators with access to global tech scholarships, CV diagnostics, and interview frameworks.',
      tag: 'MENTORSHIP'
    },
    {
      id: 'int-2',
      title: 'The Jollof Cook-Offs',
      icon: 'soup_kitchen',
      iconColor: 'text-[#e9c349]',
      description: 'Host of West African culinary gatherings across Boston, Moscow, and Dubai, bringing together technologists and founders.',
      tag: 'COMMUNITY'
    },
    {
      id: 'int-3',
      title: 'Faith & Civic Leadership',
      icon: 'volunteer_activism',
      iconColor: 'text-[#c92a3e]',
      description: 'Youth mentorship and ethical leadership through Christian fellowship networks.',
      tag: 'STEWARDSHIP'
    }
  ]
};
