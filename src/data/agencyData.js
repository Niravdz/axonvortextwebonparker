// 100% Original AXONVORTEX Content & Multi-Page Architecture
// Zero external/Parker assets or copy — pure AxonVortex strategy, solutions, 13 services, approach, about, audits & journal experiments.

export const BRAND = {
  name: 'AXONVORTEX',
  shortName: 'AXON',
  tagline: 'Build Smarter. Market Better. Grow Faster.',
  subTagline: 'AI-driven digital growth for businesses ready to move forward.',
  mission:
    'AxonVortex helps businesses build, market and scale smarter by combining AI, strategy, creativity, marketing, automation and data.',
  promise:
    'From building your digital presence to generating leads and reducing repetitive work, we design practical growth systems around your specific business goals — not a fixed package.',
  email: 'hello@axonvortex.com',
  auditEmail: 'audit@axonvortex.com',
  partnershipsEmail: 'partnerships@axonvortex.com',
  careersEmail: 'careers@axonvortex.com',
  copyright: 'Copyright © 2026 AXONVORTEX — All Rights Reserved.'
};

export const PROBLEM_TICKER_ITEMS = [
  'posting content consistently that never turns into enquiries',
  'spending on Meta & Google Ads without knowing what drives revenue',
  'losing warm leads to 4-hour manual response times',
  'running a website that looks fine but fails to convert visitors',
  'spending 20+ team hours a week on repetitive manual tasks',
  'having access to AI tools with zero clear business direction'
];

export const FOLDER_STEPS = [
  {
    id: 'step-1',
    tabLabel: 'Phase 01 · Attract & Market',
    tabAlign: 'left',
    tabColor: '#f59e0b',
    tabTextColor: '#0b0f17',
    pillarRoute: '/solutions/digital-marketing',
    badge: 'ATTRACT · DIGITAL MARKETING & SEARCH',
    headline: 'Get Seen. Get Remembered. Get Chosen.',
    stackedLines: [
      'Social Media Marketing.',
      'Content Strategy.',
      'Targeted Meta Ads.',
      'High-Intent Google Ads.',
      'Technical & Local SEO.'
    ],
    summaryLines: [
      'Strategy → Content → Distribution → Traffic → Conversion → Measurement.',
      'Built around business outcomes, not vanity activity.'
    ],
    solutionCategory: '01 · Digital Marketing Architecture',
    metrics: [
      { label: 'System Chain', value: '6 Connected Stages' },
      { label: 'Acquisition', value: 'Paid + Organic + Social' },
      { label: 'Focus', value: 'Qualified Demand' }
    ],
    servicesIncluded: [
      { slug: 'social-media-marketing', name: 'Social Media Marketing', tag: 'Authority' },
      { slug: 'meta-ads', name: 'Meta Ads Campaigns', tag: 'Paid Social' },
      { slug: 'google-ads', name: 'Google Search Ads', tag: 'Search Intent' },
      { slug: 'seo', name: 'Technical & Local SEO', tag: 'Organic' }
    ]
  },
  {
    id: 'step-2',
    tabLabel: 'Phase 02 · Experience & Convert',
    tabAlign: 'center',
    tabColor: '#2563eb',
    tabTextColor: '#ffffff',
    pillarRoute: '/solutions/websites-ecommerce',
    badge: 'ENGAGE & CONVERT · WEBSITES, SHOPIFY & LEAD SYSTEMS',
    headline: 'Where Attention Becomes Measurable Opportunity.',
    stackedLines: [],
    paragraphs: [
      'Your website is not just an online brochure, and traffic is not the same as customers. AxonVortex engineers conversion-focused Business Websites, Landing Pages, E-Commerce & Shopify stores connected directly to structured Lead Generation funnels.',
      'From Audience and Offer clarity through Landing Page, Lead Capture, CRM integration, and Automated Follow-Up — every stage works as one system.'
    ],
    summaryLines: [
      'Audience → Offer → Landing Page → Lead Capture → CRM → Follow-Up → Conversion.'
    ],
    solutionCategory: '02 · Websites, E-Commerce & Lead Generation',
    metrics: [
      { label: 'Value Clarity', value: '5-Second Architecture' },
      { label: 'Commerce', value: 'Custom Web & Shopify' },
      { label: 'Pipeline', value: 'CRM + Instant Nurture' }
    ],
    servicesIncluded: [
      { slug: 'website-development', name: 'Website & Landing Page Dev', tag: 'Conversion UX' },
      { slug: 'ecommerce-development', name: 'E-Commerce Development', tag: 'Online Store' },
      { slug: 'shopify-development', name: 'Shopify Store Architecture', tag: 'Shopify' },
      { slug: 'lead-generation', name: 'End-to-End Lead Generation System', tag: 'CRM & Funnels' }
    ]
  },
  {
    id: 'step-3',
    tabLabel: 'Phase 03 · Automate & Transform',
    tabAlign: 'right',
    tabColor: '#a3e635',
    tabTextColor: '#0b0f17',
    pillarRoute: '/solutions/ai-automation',
    badge: 'AUTOMATE & OPTIMIZE · PRACTICAL AI & TRANSFORMATION',
    headline: 'Automate the Repetitive Work. Keep Humans in Control.',
    stackedLines: [
      'AI Chatbots & Support.',
      'Autonomous AI Agents.',
      'Voice AI Call & Booking.',
      'Cross-System Workflow Automation.',
      'Digital Transformation Strategy.'
    ],
    summaryLines: [
      'Find the Problem → Identify the Opportunity → Design the Workflow → Build → Test → Improve.',
      'AI brings speed and scale. Humans bring context, creativity, and judgment.'
    ],
    solutionCategory: '03 · AI, Automation & Digital Transformation',
    metrics: [
      { label: 'AI Philosophy', value: 'Practical ROI Only' },
      { label: 'Control Model', value: 'Human-in-the-Loop' },
      { label: 'Growth Loop', value: 'Hypothesis → Scale' }
    ],
    servicesIncluded: [
      { slug: 'ai-chatbots', name: 'AI Chatbots & Customer Support', tag: '24/7 Capture' },
      { slug: 'ai-agents', name: 'Bounded Autonomous AI Agents', tag: 'AI Action' },
      { slug: 'workflow-automation', name: 'Workflow & Business Automation', tag: 'Operations' },
      { slug: 'voice-ai', name: 'Voice AI Qualification & Booking', tag: 'Voice AI' },
      { slug: 'digital-transformation-strategy', name: 'Digital Transformation Strategy', tag: 'Roadmap' }
    ]
  }
];

// Coordinates carefully bounded so tags orbit cleanly around the central core without touching the top subtitle box
export const BRAIN_STATES = [
  {
    id: '01',
    name: 'Understand & Diagnose',
    bgColor: '#ffdfd6',
    borderColor: '#ff4d2d',
    accentColor: '#ff4d2d',
    subtitle: '01 · Understand & Diagnose: We study your business model, buyers, and bottlenecks before proposing any tool.',
    tags: [
      { label: 'Business model & goals', x: -340, y: -125, rotate: -3, slug: 'digital-transformation-strategy' },
      { label: 'Customer journey analysis', x: 340, y: -125, rotate: 3, slug: 'lead-generation' },
      { label: 'Digital presence audit', x: -390, y: -20, rotate: 2, slug: 'website-development' },
      { label: 'Marketing spend review', x: 390, y: -20, rotate: -3, slug: 'meta-ads' },
      { label: 'Conversion barrier mapping', x: -340, y: 85, rotate: -2, slug: 'ecommerce-development' },
      { label: 'Lead response latency check', x: 345, y: 85, rotate: 3, slug: 'ai-chatbots' },
      { label: 'Manual process inventory', x: -205, y: 158, rotate: 2, slug: 'workflow-automation' },
      { label: 'Practical AI readiness', x: 205, y: 158, rotate: -2, slug: 'ai-agents' }
    ]
  },
  {
    id: '02',
    name: 'Attract & Position',
    bgColor: '#fef0c7',
    borderColor: '#f59e0b',
    accentColor: '#f59e0b',
    subtitle: '02 · Attract & Position: We build visibility and capture demand across search, social, and paid acquisition.',
    tags: [
      { label: 'Social Media Strategy', x: -340, y: -125, rotate: 3, slug: 'social-media-marketing' },
      { label: 'High-Intent Google Ads', x: 340, y: -125, rotate: -3, slug: 'google-ads' },
      { label: 'Targeted Meta Campaigns', x: -390, y: -20, rotate: -2, slug: 'meta-ads' },
      { label: 'Technical & On-Page SEO', x: 390, y: -20, rotate: 2, slug: 'seo' },
      { label: 'Local Search Visibility', x: -340, y: 85, rotate: 3, slug: 'seo' },
      { label: 'Educational & Brand Content', x: 345, y: 85, rotate: -3, slug: 'social-media-marketing' },
      { label: 'Audience & Offer Alignment', x: -205, y: 158, rotate: -2, slug: 'meta-ads' },
      { label: 'Conversion Attribution', x: 205, y: 158, rotate: 2, slug: 'google-ads' }
    ]
  },
  {
    id: '03',
    name: 'Experience & Convert',
    bgColor: '#dcfce7',
    borderColor: '#16a34a',
    accentColor: '#194d15',
    subtitle: '03 · Experience & Convert: We turn attention into enquiries and sales through high-converting web & CRM systems.',
    tags: [
      { label: 'Business Websites', x: -340, y: -125, rotate: -3, slug: 'website-development' },
      { label: 'Custom Shopify Stores', x: 340, y: -125, rotate: 3, slug: 'shopify-development' },
      { label: 'Campaign Landing Pages', x: -390, y: -20, rotate: 2, slug: 'lead-generation' },
      { label: 'E-Commerce Checkout UX', x: 390, y: -20, rotate: -2, slug: 'ecommerce-development' },
      { label: 'Multi-Step Lead Funnels', x: -340, y: 85, rotate: -3, slug: 'lead-generation' },
      { label: 'CRM Pipeline Integration', x: 345, y: 85, rotate: 3, slug: 'lead-generation' },
      { label: 'Automated SMS/Email Nurture', x: -205, y: 158, rotate: 2, slug: 'workflow-automation' },
      { label: '5-Second Value Clarity', x: 205, y: 158, rotate: -2, slug: 'website-development' }
    ]
  },
  {
    id: '04',
    name: 'Automate & Improve',
    bgColor: '#ede9fe',
    borderColor: '#8b5cf6',
    accentColor: '#8b5cf6',
    subtitle: '04 · Automate & Improve: We embed practical AI agents, workflow automation, and continuous experiment loops.',
    tags: [
      { label: '24/7 AI Chatbots', x: -340, y: -125, rotate: 3, slug: 'ai-chatbots' },
      { label: 'Autonomous AI Agents', x: 340, y: -125, rotate: -3, slug: 'ai-agents' },
      { label: 'Voice AI Call Booking', x: -390, y: -20, rotate: -2, slug: 'voice-ai' },
      { label: 'Lead Routing Automation', x: 390, y: -20, rotate: 3, slug: 'workflow-automation' },
      { label: 'Cross-System Data Sync', x: -340, y: 85, rotate: 2, slug: 'workflow-automation' },
      { label: 'Human Escalation Controls', x: 345, y: 85, rotate: -3, slug: 'ai-chatbots' },
      { label: 'Hypothesis → Measure → Learn', x: -205, y: 158, rotate: -2, slug: 'digital-transformation-strategy' },
      { label: 'Stack Rationalization', x: 205, y: 158, rotate: 2, slug: 'digital-transformation-strategy' }
    ]
  }
];

export const WHY_AXONVORTEX_PRINCIPLES = [
  '01 · Strategy Before Technology — Understand the business problem before choosing a single tool.',
  '02 · Practical AI — Deploy AI only where it saves time, improves response, and creates real ROI.',
  '03 · Human + AI — Combine machine speed & automation with human context, creativity, and judgment.',
  '04 · Connected Growth — Unite website, content, ads, leads, CRM, and automation into one system.',
  '05 · Data-Informed Decisions — Track meaningful business outcomes over vanity activity metrics.',
  '06 · Continuous Improvement — Build → Launch → Measure → Learn → Improve → Scale.'
];

export const CORE_SOLUTION_SYSTEMS = [
  {
    id: 'digital-marketing',
    route: '/solutions/digital-marketing',
    name: '01 · Digital Marketing System',
    badge: 'ATTRACT & DEMAND',
    tagline: 'Get Seen. Get Remembered. Get Chosen.',
    accentColor: '#f59e0b',
    description:
      'For businesses that need stronger online visibility, qualified search & social traffic, and structured content & ad execution.',
    ctaText: 'Explore Digital Marketing System',
    highlights: [
      'Social Media Marketing & Content Pillar Strategy',
      'Meta Ads (Audience Research, Creative Direction & CAPI)',
      'Google Ads (High-Intent Search & Conversion Tracking)',
      'Technical, On-Page & Local SEO Architecture',
      'Closed-Loop Channel Attribution & Optimization'
    ]
  },
  {
    id: 'websites-ecommerce',
    route: '/solutions/websites-ecommerce',
    name: '02 · Websites, Shopify & Lead System',
    badge: 'ENGAGE & CONVERT',
    tagline: 'Where Attention Becomes Measurable Opportunity.',
    accentColor: '#a3e635',
    featured: true,
    description:
      'For businesses whose website or store isn’t converting visitors, or whose traffic isn’t turning into qualified enquiries and customers.',
    ctaText: 'Explore Conversion & Lead Engine',
    highlights: [
      'Conversion-Focused Business Websites & Landing Pages',
      'Custom E-Commerce & Bespoke Shopify Store Development',
      'End-to-End Lead Funnels & Qualification Architecture',
      'CRM Pipeline Integration & Source Attribution',
      'Automated Instant SMS & Email Lead Follow-Up Sequences'
    ]
  },
  {
    id: 'ai-automation',
    route: '/solutions/ai-automation',
    name: '03 · AI, Automation & Transformation',
    badge: 'AUTOMATE & MODERNIZE',
    tagline: 'AI That Works for Your Business — Without the Hype.',
    accentColor: '#8b5cf6',
    description:
      'For teams losing hours to repetitive manual tasks, slow customer response, or disconnected tools and workflows.',
    ctaText: 'Explore AI & Automation System',
    highlights: [
      '24/7 AI Chatbots & Grounded Customer Support Systems',
      'Bounded Autonomous AI Agents for Sales & Research',
      'Voice AI for Inbound Call Qualification & Booking',
      'Cross-System Workflow & Business Process Automation',
      'Digital Transformation Audit & Sequenced Modernization Roadmap'
    ]
  }
];

export const PROBLEM_SOLVER_CARDS = [
  {
    quote: '“People don’t know about my business.”',
    name: 'Visibility Bottleneck',
    role: 'Solved via 01 · Digital Marketing (SEO, Social, Meta & Google Ads)',
    tag: 'ATTRACT',
    bg: '#f8f6f0',
    slug: 'meta-ads',
    route: '/solutions/digital-marketing'
  },
  {
    quote: '“People visit our website, but they don’t take action.”',
    name: 'Conversion Bottleneck',
    role: 'Solved via 03 · Websites, Landing Pages & E-Commerce UX',
    tag: 'ENGAGE',
    bg: '#ffffff',
    slug: 'website-development',
    route: '/solutions/websites-ecommerce'
  },
  {
    quote: '“We’re getting attention and clicks, but not enough enquiries.”',
    name: 'Funnel & Follow-Up Gap',
    role: 'Solved via 04 · Lead Generation Systems & CRM Automation',
    tag: 'CONVERT',
    bg: '#f8f6f0',
    slug: 'lead-generation',
    route: '/solutions/lead-generation'
  },
  {
    quote: '“Our team is losing 20+ hours a week on repetitive manual work.”',
    name: 'Operational Drag',
    role: 'Solved via 02 · AI Chatbots, AI Agents & Workflow Automation',
    tag: 'AUTOMATE',
    bg: '#ffffff',
    slug: 'workflow-automation',
    route: '/solutions/ai-automation'
  },
  {
    quote: '“Our processes, spreadsheets, and software tools are disconnected.”',
    name: 'System Complexity',
    role: 'Solved via 05 · Technology & Digital Transformation Strategy',
    tag: 'TRANSFORM',
    bg: '#f8f6f0',
    slug: 'digital-transformation-strategy',
    route: '/solutions/digital-transformation'
  },
  {
    quote: '“We’re spending on marketing, but we’re not sure what we actually need.”',
    name: 'Diagnostic Priority',
    role: 'Solved via The AxonVortex Digital Growth Audit',
    tag: 'DIAGNOSE',
    bg: '#ffffff',
    slug: 'digital-transformation-strategy',
    route: '/growth-audit'
  }
];

export const JOURNAL_EXPERIMENTS = [
  {
    id: 'entry-01',
    quote: '“No manufactured success stories. How we are structuring an AI-driven growth company around connected systems rather than isolated vendor services.”',
    name: 'Experiment 01 · Building in Public',
    role: 'Why We Are Building AxonVortex From Zero — In the Open',
    tag: 'EXPERIMENTS · 04 MIN',
    bg: '#ffffff',
    route: '/insights'
  },
  {
    id: 'entry-02',
    quote: '“Don’t ask ‘Where can we add AI?’ — Ask ‘Where is friction costing us customers?’ A framework for bounded chatbots, Voice AI, and autonomous agents.”',
    name: 'Framework 02 · AI for Business',
    role: 'Separating Expensive AI Hype From Immediate Operational ROI',
    tag: 'FRAMEWORKS · 06 MIN',
    bg: '#f8f6f0',
    route: '/insights'
  },
  {
    id: 'entry-03',
    quote: '“If your offer is unclear, more traffic won’t fix it. If your sales team doesn’t follow up in 60 seconds, more leads simply create more waste.”',
    name: 'Teardown 03 · Business Growth',
    role: 'The Gap Between Click and Customer: 8-Stage Lead Architecture',
    tag: 'TEARDOWNS · 05 MIN',
    bg: '#ffffff',
    route: '/insights'
  },
  {
    id: 'entry-04',
    quote: '“Stop running Social Media, Meta Ads, Google Ads, and SEO in isolated boxes. Connect them into one measurable Hypothesis → Learn → Improve loop.”',
    name: 'Guide 04 · Marketing Systems',
    role: 'Marketing Activity vs. Marketing Progress',
    tag: 'GUIDES · 07 MIN',
    bg: '#f8f6f0',
    route: '/insights'
  },
  {
    id: 'entry-05',
    quote: '“Automation isn’t about removing humans. It’s about giving your team time for strategy, creativity, and relationships while machines route the data.”',
    name: 'How-To 05 · Workflow Architecture',
    role: 'Automate the Work, Keep Humans in Control',
    tag: 'HOW-TO · 05 MIN',
    bg: '#ffffff',
    route: '/insights'
  },
  {
    id: 'entry-06',
    quote: '“The goal isn’t more software. The goal is a business that works better — mapping bottlenecks and sequencing what to modernize first.”',
    name: 'Opinion 06 · Digital Transformation',
    role: 'Escaping Disconnected SaaS Tool Sprawl',
    tag: 'OPINIONS · 04 MIN',
    bg: '#f8f6f0',
    route: '/insights'
  }
];

export const GROWTH_SYSTEM_FLOW = [
  {
    step: '01',
    stage: 'ATTRACT',
    discipline: 'Digital Marketing',
    summary: 'Build visibility and reach the right audience.',
    metrics: 'Search Intent · Paid Reach · Social Authority',
    color: '#f59e0b',
    route: '/solutions/digital-marketing'
  },
  {
    step: '02',
    stage: 'ENGAGE',
    discipline: 'Content + Website',
    summary: 'Create interest, communicate value and build trust.',
    metrics: 'Information Architecture · Value Clarity · UX',
    color: '#2563eb',
    route: '/solutions/websites-ecommerce'
  },
  {
    step: '03',
    stage: 'CONVERT',
    discipline: 'Lead Generation',
    summary: 'Turn attention into enquiries and opportunities.',
    metrics: 'Funnels · Landing Pages · CRM Capture',
    color: '#ff4d2d',
    route: '/solutions/lead-generation'
  },
  {
    step: '04',
    stage: 'AUTOMATE',
    discipline: 'AI + Automation',
    summary: 'Reduce repetitive work and improve response time.',
    metrics: 'AI Agents · Chatbots · Workflow Routing',
    color: '#8b5cf6',
    route: '/solutions/ai-automation'
  },
  {
    step: '05',
    stage: 'OPTIMIZE',
    discipline: 'Data + Strategy',
    summary: 'Measure what happened, learn why, and improve the next move.',
    metrics: 'Attribution · Hypothesis Loop · Scale',
    color: '#a3e635',
    route: '/approach'
  }
];

export const CORE_SOLUTIONS = [
  {
    id: 'digital-marketing',
    index: '01',
    title: 'Digital Marketing',
    headline: 'Get Seen. Get Remembered. Get Chosen.',
    accentColor: '#f59e0b',
    shortDesc: 'Build visibility, attract the right audience and create meaningful demand.',
    fullDesc:
      'Digital marketing should do more than keep your business active online. It should help the right people discover you, understand your value and take the next step. AxonVortex combines strategy, content, advertising and search to create marketing systems built around business goals.',
    tags: ['Social Media Marketing', 'Content Marketing', 'Meta Ads', 'Google Ads', 'SEO'],
    finalArchitectureServices: [
      { name: 'Social Media Marketing', slug: 'social-media-marketing' },
      { name: 'Meta Ads', slug: 'meta-ads' },
      { name: 'Google Ads', slug: 'google-ads' },
      { name: 'SEO', slug: 'seo' }
    ],
    bestFor: [
      'Need stronger online visibility',
      'Want to build an engaged audience',
      'Need more qualified search & social traffic',
      'Want to improve paid advertising ROI',
      'Need a structured content strategy'
    ],
    ctaText: 'Explore Digital Marketing',
    actionCta: 'Build My Marketing Strategy',
    route: '/solutions/digital-marketing',
    problemTitle: "Marketing Activity Doesn't Always Mean Marketing Progress.",
    problemBody:
      "You may be posting consistently but getting little business from it. You may be spending on ads without knowing what's working. You may have a website but very little organic visibility. Or your marketing channels may be operating independently.",
    systemChain: ['Strategy', 'Content', 'Distribution', 'Traffic', 'Conversion', 'Measurement'],
    subServicesDetail: [
      {
        title: 'Social Media Marketing',
        slug: 'social-media-marketing',
        desc: 'Build a stronger social presence with content designed around your audience, brand and business objectives.',
        includes: [
          'Social strategy & positioning',
          'Content pillar planning',
          'Reels, carousels & visual assets',
          'Platform management',
          'Community engagement',
          'Performance analysis'
        ]
      },
      {
        title: 'Meta Ads',
        slug: 'meta-ads',
        desc: 'Reach relevant audiences across Facebook and Instagram with campaigns built around clear commercial objectives.',
        includes: [
          'Campaign strategy',
          'Audience research',
          'Creative direction',
          'Campaign setup & CAPI',
          'Conversion tracking',
          'Performance optimization'
        ]
      },
      {
        title: 'Google Ads',
        slug: 'google-ads',
        desc: 'Capture demand when potential customers are actively searching for products, services or solutions.',
        includes: [
          'High-intent search campaigns',
          'Account & ad group structure',
          'Keyword & negative keyword strategy',
          'Intent-matched ad copy',
          'Conversion tracking',
          'Continuous bid & query optimization'
        ]
      },
      {
        title: 'SEO',
        slug: 'seo',
        desc: 'Build sustainable search visibility by improving your website, content and relevance around the searches that matter.',
        includes: [
          'Technical SEO audit & fixes',
          'On-page SEO architecture',
          'Local SEO visibility',
          'Search-intent content strategy',
          'Keyword mapping',
          'Performance monitoring'
        ]
      }
    ],
    approachSteps: [
      { step: '01', title: 'Understand', desc: 'Business goals, audience and current performance.' },
      { step: '02', title: 'Position', desc: 'Clarify what makes your business relevant to the right audience.' },
      { step: '03', title: 'Create', desc: 'Build content and campaigns designed around the customer journey.' },
      { step: '04', title: 'Distribute', desc: 'Use the right combination of organic and paid channels.' },
      { step: '05', title: 'Measure', desc: 'Track the metrics that actually reflect business impact, not just activity.' },
      { step: '06', title: 'Improve', desc: 'Use what we learn to make the next campaign better.' }
    ]
  },
  {
    id: 'ai-automation',
    index: '02',
    title: 'AI & Automation',
    headline: 'AI That Works for Your Business.',
    accentColor: '#8b5cf6',
    shortDesc:
      'Use AI and automation where they can save time, improve customer experience and create measurable business value.',
    fullDesc:
      "AI shouldn't be about chasing the latest tool. It should be about solving real business problems. AxonVortex helps businesses identify practical opportunities to use AI and automation to save time, improve customer experience and create smarter workflows.",
    tags: [
      'AI Chatbots',
      'AI Customer Support',
      'AI Appointment Booking',
      'Voice AI',
      'AI Agents',
      'Workflow & Business Automation'
    ],
    finalArchitectureServices: [
      { name: 'AI Chatbots', slug: 'ai-chatbots' },
      { name: 'AI Agents', slug: 'ai-agents' },
      { name: 'Workflow & Business Automation', slug: 'workflow-automation' },
      { name: 'Voice AI', slug: 'voice-ai' }
    ],
    bestFor: [
      'Handle repetitive customer questions daily',
      'Lose leads because of slow manual response',
      'Spend too much team time on administrative tasks',
      'Want 24/7 customer support & qualification',
      'Want practical, bounded AI with human control'
    ],
    ctaText: 'Explore AI & Automation',
    actionCta: 'Find My AI Opportunities',
    route: '/solutions/ai-automation',
    problemTitle: "Your Team Shouldn't Spend Valuable Time Doing Work Machines Can Handle.",
    problemBody:
      "Businesses often spend hours on repetitive customer questions, manual lead responses, appointment scheduling, data entry, follow-up, internal workflows and repetitive administrative tasks. The opportunity isn't to automate everything. It's to automate the right things.",
    systemChain: [
      'Find the Problem',
      'Identify the Opportunity',
      'Design the Workflow',
      'Build',
      'Test',
      'Improve'
    ],
    subServicesDetail: [
      {
        title: 'AI Chatbots & Customer Support',
        slug: 'ai-chatbots',
        desc: 'Create conversational experiences grounded in your business knowledge that answer questions, qualify visitors, and capture enquiries 24/7.',
        includes: ['Instant FAQ resolution', 'Guided service discovery', 'Lead qualification', 'Human escalation paths']
      },
      {
        title: 'AI Agents',
        slug: 'ai-agents',
        desc: 'Build intelligent systems designed to perform specific business tasks with bounded autonomy and human oversight.',
        includes: [
          'Sales assistance & research',
          'Customer support workflows',
          'Data synthesis & reporting',
          'Internal knowledge retrieval'
        ]
      },
      {
        title: 'Workflow & Business Automation',
        slug: 'workflow-automation',
        desc: 'Connect repetitive business processes across marketing, sales, CRM, and operations to eliminate manual data movement.',
        includes: [
          'Instant lead routing & Slack alerts',
          'CRM & spreadsheet synchronization',
          'Automated SMS & email sequences',
          'Internal approvals & reporting'
        ]
      },
      {
        title: 'Voice AI',
        slug: 'voice-ai',
        desc: 'Deploy natural AI-powered voice experiences for inbound call handling, qualification, and calendar booking.',
        includes: ['24/7 inbound call answering', 'Appointment booking sync', 'Pre-call lead qualification', 'Structured CRM call notes']
      }
    ],
    approachSteps: [
      { step: '01', title: 'Find the Problem', desc: 'What is slowing the business down?' },
      { step: '02', title: 'Identify the Opportunity', desc: 'Where can AI or automation create real value?' },
      { step: '03', title: 'Design the Workflow', desc: 'What should happen, when and why?' },
      { step: '04', title: 'Build', desc: 'Implement the appropriate AI or automation system.' },
      { step: '05', title: 'Test', desc: 'Check accuracy, usability and business impact before it touches real customers.' },
      { step: '06', title: 'Improve', desc: 'Continuously refine the system based on real usage.' }
    ]
  },
  {
    id: 'websites-ecommerce',
    index: '03',
    title: 'Websites & E-Commerce',
    headline: 'Your Digital Presence Should Do More Than Exist.',
    accentColor: '#2563eb',
    shortDesc: 'Build digital experiences designed to communicate your value, create action and support growth.',
    fullDesc:
      'Your website is not just an online brochure. It should help people understand your business, trust your offer and take action. AxonVortex creates digital experiences designed around your business goals and customer journey.',
    tags: ['Business Websites', 'Landing Pages', 'E-Commerce', 'Shopify'],
    finalArchitectureServices: [
      { name: 'Website Development', slug: 'website-development' },
      { name: 'E-Commerce Development', slug: 'ecommerce-development' },
      { name: 'Shopify Development', slug: 'shopify-development' }
    ],
    bestFor: [
      'Need a high-converting new business website',
      'Have an outdated website that fails to convert',
      'Need dedicated campaign landing pages',
      'Want to move an offline store online',
      'Want to build or scale a Shopify / E-Commerce store'
    ],
    ctaText: 'Explore Websites & E-Commerce',
    actionCta: 'Build My Digital Presence',
    route: '/solutions/websites-ecommerce',
    problemTitle: 'A Website Can Look Good and Still Fail to Grow a Business.',
    problemBody:
      'Common problems include outdated design, confusing messaging, poor mobile experience, slow navigation, weak calls to action, poor lead capture, low conversion, and disconnected marketing. We build with the commercial objective in mind.',
    systemChain: ['Strategy', 'Structure', 'Content', 'Experience', 'Conversion', 'Integration', 'Optimization'],
    subServicesDetail: [
      {
        title: 'Website & Landing Page Development',
        slug: 'website-development',
        desc: 'Professional websites and campaign landing pages engineered around 5-second value clarity, trust architecture, and conversion.',
        includes: ['5-second value clarity', 'Information architecture', 'Mobile-first responsive UX', 'CRM & analytics integration']
      },
      {
        title: 'E-Commerce Development',
        slug: 'ecommerce-development',
        desc: 'Online shopping experiences designed to make discovering, evaluating, and purchasing products effortless.',
        includes: ['Catalog strategy', 'Product presentation UX', 'Frictionless cart & checkout', 'Inventory & payment integrations']
      },
      {
        title: 'Shopify Development',
        slug: 'shopify-development',
        desc: 'Build, customize, and optimize Shopify stores tailored around your brand, products, and conversion goals.',
        includes: ['Core Shopify setup', 'Bespoke theme customization', 'Collection & variant architecture', 'CRO & app workflow integrations']
      }
    ],
    approachSteps: [
      { step: '01', title: 'Strategy', desc: 'Understand the business and customer.' },
      { step: '02', title: 'Structure', desc: 'Create the right information architecture.' },
      { step: '03', title: 'Content', desc: 'Communicate the value clearly.' },
      { step: '04', title: 'Experience', desc: 'Design intuitive and responsive user journeys.' },
      { step: '05', title: 'Conversion', desc: 'Create clear next steps.' },
      { step: '06', title: 'Integration & Optimization', desc: 'Connect marketing, lead-capture and automation systems, and improve based on real data.' }
    ]
  },
  {
    id: 'lead-generation',
    index: '04',
    title: 'Lead Generation',
    headline: 'Where Attention Becomes Opportunity.',
    accentColor: '#ff4d2d',
    shortDesc: 'Build systems that attract, capture, nurture and convert potential customers.',
    fullDesc:
      'Traffic is not the same as leads. Leads are not the same as customers. A strong lead-generation system connects every stage between them. AxonVortex helps businesses build that system.',
    tags: ['Lead Funnels', 'Campaigns', 'Landing Pages', 'CRM Integration', 'Automated Follow-ups'],
    finalArchitectureServices: [
      { name: 'Lead Generation System', slug: 'lead-generation' },
      { name: 'Landing Pages', slug: 'website-development' },
      { name: 'Automated Follow-Up', slug: 'workflow-automation' }
    ],
    bestFor: [
      'Need more qualified business enquiries',
      'Get website traffic but very few leads',
      'Generate leads but struggle with slow follow-up',
      'Lose warm opportunities between marketing and sales',
      'Want a structured CRM & conversion pipeline'
    ],
    ctaText: 'Explore Lead Generation',
    actionCta: 'Build My Lead System',
    route: '/solutions/lead-generation',
    problemTitle: "More Leads Aren't Always the Answer.",
    problemBody:
      "If your offer is unclear, more traffic won't fix it. If your landing page doesn't convert, more advertising won't fix it. If your sales team doesn't follow up, more leads may simply create more waste. That's why we look at the entire system.",
    systemChain: ['Audience', 'Offer', 'Content / Ads', 'Landing Page', 'Lead Capture', 'CRM', 'Follow-Up', 'Conversion'],
    subServicesDetail: [
      {
        title: 'Lead Funnels & Campaigns',
        slug: 'lead-generation',
        desc: 'Design the complete journey from targeted ad/search interaction to qualified enquiry.',
        includes: ['Audience-offer alignment', 'Multi-step qualification forms', 'Channel orchestration', 'Source attribution']
      },
      {
        title: 'CRM Pipeline & Automated Follow-Up',
        slug: 'workflow-automation',
        desc: 'Ensure zero leads go cold with instant pipeline routing and automated multi-channel nurture.',
        includes: ['Structured CRM stages', '60-second SMS/Email response', 'Sales team task triggers', 'Conversion tracking']
      }
    ],
    approachSteps: [
      { step: '01', title: 'Attract', desc: 'Find the right people and give them a clear reason to act.' },
      { step: '02', title: 'Capture', desc: 'Communicate value on focused landing pages and make enquiry effortless.' },
      { step: '03', title: 'Manage', desc: 'Organize and route every opportunity inside a structured CRM.' },
      { step: '04', title: 'Follow Up', desc: 'Keep the conversation moving automatically and consistently.' },
      { step: '05', title: 'Convert', desc: 'Turn qualified opportunities into measurable business.' },
      { step: '06', title: 'Improve', desc: 'Analyze conversion drop-offs and refine the system.' }
    ]
  },
  {
    id: 'digital-transformation',
    index: '05',
    title: 'Technology & Digital Transformation',
    headline: "Build for What's Next.",
    accentColor: '#a3e635',
    shortDesc: 'Identify where process and technology decisions can create a stronger foundation for growth.',
    fullDesc:
      'As businesses grow, disconnected processes and outdated systems can quietly become a barrier to growth. AxonVortex helps businesses take a clear-eyed look at how they currently operate and build a practical roadmap for modernizing processes and technology decisions.',
    tags: ['Digital Transformation Strategy', 'Process Mapping', 'System Architecture', 'Modernization Roadmap'],
    finalArchitectureServices: [{ name: 'Digital Transformation Strategy', slug: 'digital-transformation-strategy' }],
    bestFor: [
      'Rely heavily on manual, disconnected processes',
      'Are unsure what to prioritize as they modernize',
      'Want a vendor-neutral roadmap before committing to new software',
      'Growing businesses with operational bottlenecks'
    ],
    ctaText: 'Explore Digital Transformation',
    actionCta: 'Build My Transformation Roadmap',
    route: '/solutions/digital-transformation',
    problemTitle: 'Growth Can Create Complexity.',
    problemBody:
      'You may have multiple disconnected tools, manual processes, repetitive administrative work, poor visibility into operations, or systems that no longer fit the way the business actually runs. Technology should reduce complexity — not create more of it.',
    systemChain: ['Understand', 'Map', 'Prioritize', 'Design', 'Recommend'],
    subServicesDetail: [
      {
        title: 'Digital Transformation Strategy',
        slug: 'digital-transformation-strategy',
        desc: 'We help you understand how the business currently operates, where the biggest bottlenecks are, and what a more connected, efficient way of working would actually look like.',
        includes: [
          'Operational bottleneck audit',
          'Tool & software stack rationalization',
          'Future-state workflow architecture',
          'Sequenced implementation roadmap'
        ]
      }
    ],
    approachSteps: [
      { step: '01', title: 'Understand', desc: 'How does the business currently operate?' },
      { step: '02', title: 'Map', desc: 'Where are the bottlenecks, gaps and disconnected processes?' },
      { step: '03', title: 'Prioritize', desc: 'Which improvements can create the most value?' },
      { step: '04', title: 'Design', desc: 'What should the future workflow look like?' },
      { step: '05', title: 'Recommend', desc: 'A clear, sequenced roadmap for what to change first, and why.' }
    ]
  }
];

export const SERVICES_CATALOG = [
  {
    slug: 'social-media-marketing',
    number: '01',
    category: 'Digital Marketing',
    categoryRoute: '/solutions/digital-marketing',
    color: '#f59e0b',
    title: 'Social Media Marketing',
    headline: 'Your Social Media Should Do More Than Look Active.',
    subheadline:
      'Build attention, trust and meaningful business opportunities with a social media strategy built around your goals.',
    intro:
      'AxonVortex combines strategy, content, creativity and data to turn social media from a posting activity into a structured growth channel.',
    cta: 'Build My Social Media Strategy',
    problem:
      'Posting regularly without a clear positioning or conversion path creates vanity activity instead of qualified enquiries. Your content should help people discover, understand, trust, engage and act.',
    flow: ['Discover', 'Understand', 'Trust', 'Engage', 'Act'],
    deliverables: [
      'Social media strategy & positioning',
      'Content pillar planning around buyer problems',
      'Platform-native Reels, carousels & stories',
      'Community management & engagement',
      'Platform-specific distribution strategy',
      'Performance & business-interest analysis'
    ],
    whoItsFor: [
      'New businesses building awareness',
      'Small businesses establishing an online presence',
      'Businesses with inconsistent content',
      'Brands struggling to turn social attention into enquiries'
    ]
  },
  {
    slug: 'meta-ads',
    number: '02',
    category: 'Digital Marketing',
    categoryRoute: '/solutions/digital-marketing',
    color: '#ff4d2d',
    title: 'Meta Ads',
    headline: "Stop Paying for Attention That Doesn't Move Your Business Forward.",
    subheadline:
      'Create targeted Meta campaigns designed around the audience, offer and business outcome that matter.',
    intro:
      'Running ads is easy. Building the right campaign is not. We connect audience, offer, creative, landing page and conversion tracking into one measurable system.',
    cta: 'Plan My Meta Campaign',
    problem:
      'Running ads is easy. Building the connected system — Audience → Offer → Creative → Campaign → Landing Page → Conversion — is where ROI happens.',
    flow: ['Audience', 'Offer', 'Creative', 'Campaign', 'Landing Page', 'Conversion', 'Measurement'],
    deliverables: [
      'Campaign strategy & objective structure',
      'Audience research & intent segmentation',
      'Creative direction & messaging concepts',
      'Full campaign setup & Conversion API tracking',
      'Landing page message continuity',
      'Iterative creative & budget optimization'
    ],
    whoItsFor: [
      'Businesses looking to reach new audiences',
      'Businesses launching offers or campaigns',
      'Advertisers struggling with unattributed spend',
      'Brands connecting paid social with lead generation'
    ]
  },
  {
    slug: 'google-ads',
    number: '03',
    category: 'Digital Marketing',
    categoryRoute: '/solutions/digital-marketing',
    color: '#f59e0b',
    title: 'Google Ads',
    headline: 'Be Visible When Customers Are Already Looking.',
    subheadline:
      'Reach relevant searchers with Google Ads campaigns built around intent, business objectives and conversion.',
    intro:
      'Capture high-intent demand at the exact moment potential customers are searching for your services, products or solutions.',
    cta: 'Plan My Google Ads Strategy',
    problem:
      'A campaign can receive clicks without producing results if search intent, offer relevance, and landing page conversion are disconnected.',
    flow: ['Search', 'Relevant Ad', 'Landing Page', 'Action', 'Lead / Conversion', 'Optimization'],
    deliverables: [
      'High-intent search opportunity research',
      'Product/service campaign structure',
      'Demand-focused keyword & negative keyword strategy',
      'Intent-aligned ad copy & extensions',
      'Meaningful conversion action tracking',
      'Continuous search term & bid optimization'
    ],
    whoItsFor: [
      'Service and local businesses with active search demand',
      'E-commerce brands capturing shopping intent',
      'Businesses launching specific commercial offers',
      'Teams wanting measurable search acquisition'
    ]
  },
  {
    slug: 'seo',
    number: '04',
    category: 'Digital Marketing',
    categoryRoute: '/solutions/digital-marketing',
    color: '#a3e635',
    title: 'SEO',
    headline: "Don't Just Build a Website. Build Search Visibility.",
    subheadline:
      'Create a stronger organic presence around the searches your customers actually care about.',
    intro:
      'We optimize for search intent, relevance, experience and business value — not traffic for its own sake.',
    cta: 'Improve My Search Visibility',
    problem:
      "If search engines and customers can't easily discover or understand your business around high-intent searches, organic growth stalls.",
    flow: ['Technical Foundation', 'Search Intent', 'On-Page Relevance', 'Content Authority', 'Organic Conversion'],
    deliverables: [
      'Technical SEO foundation improvements',
      'On-page relevance & structure optimization',
      'Customer search intent & keyword research',
      'Educational & commercial content strategy',
      'Local SEO visibility optimization',
      'Search performance monitoring'
    ],
    whoItsFor: [
      'Businesses with low organic search visibility',
      'Local businesses competing in regional markets',
      'Companies launching new websites',
      'Brands building a compounding organic channel'
    ]
  },
  {
    slug: 'ai-chatbots',
    number: '05',
    category: 'AI & Automation',
    categoryRoute: '/solutions/ai-automation',
    color: '#8b5cf6',
    title: 'AI Chatbots',
    headline: 'Give Customers Answers Without Making Them Wait.',
    subheadline:
      'Build AI-powered conversations that help visitors find information, ask questions and take the next step.',
    intro:
      'AI should not replace every human interaction. The objective is to automate useful conversations while making it easy to involve a person when needed.',
    cta: 'Explore an AI Chatbot',
    problem:
      'Common questions consume team time, visitors leave when they cannot find answers, and after-hours leads go cold.',
    flow: ['Business Knowledge', 'Conversation Design', 'AI Configuration', 'Integration', 'Testing', 'Improvement'],
    deliverables: [
      'Fast, approved responses grounded in your business',
      'Guided discovery to relevant services/products',
      'Automated pre-handoff lead qualification',
      '24/7 enquiry capture into your CRM',
      'Clear human escalation paths when needed',
      'Continuous conversation accuracy refinement'
    ],
    whoItsFor: [
      'Businesses with frequent customer questions',
      'Service businesses capturing website enquiries',
      'E-commerce stores assisting product buyers',
      'Teams wanting instant 24/7 lead response'
    ]
  },
  {
    slug: 'ai-agents',
    number: '06',
    category: 'AI & Automation',
    categoryRoute: '/solutions/ai-automation',
    color: '#8b5cf6',
    title: 'AI Agents',
    headline: 'Move From AI Answers to AI Action.',
    subheadline: 'Build AI agents designed to perform specific business tasks and workflows.',
    intro:
      'A chatbot primarily responds to conversations. An AI agent can be designed to understand a task, access relevant information, make decisions within defined boundaries, perform actions and report the outcome.',
    cta: 'Explore AI Agents',
    problem:
      'Repetitive knowledge work slows teams down. Bounded AI agents understand a defined task, access information, act within strict rules, and report back.',
    flow: ['Identify', 'Define Boundaries', 'Connect', 'Test', 'Deploy', 'Monitor'],
    deliverables: [
      'Sales assistance, lead research & qualification',
      'Defined customer support workflows with escalation',
      'Structured research & synthesis agents',
      'Internal cross-system operations assistance',
      'Fast internal knowledge retrieval',
      'Bounded human-in-the-loop governance'
    ],
    whoItsFor: [
      'Businesses with repetitive knowledge workflows',
      'Sales teams needing automated lead enrichment',
      'Operations teams managing multi-system tasks'
    ]
  },
  {
    slug: 'workflow-automation',
    number: '07',
    category: 'AI & Automation',
    categoryRoute: '/solutions/ai-automation',
    color: '#a3e635',
    title: 'Workflow & Business Automation',
    headline: 'Automate the Work. Keep Humans in Control.',
    subheadline:
      'Connect AI, business tools and workflows to reduce repetitive work and improve how your business operates.',
    intro:
      "Automation isn't about removing humans. It's about giving people more time for work that requires judgment, creativity, relationships and strategy.",
    cta: 'Find My Automation Opportunities',
    problem:
      'Moving data between systems, sending routine emails, updating records, and routing leads manually creates operational friction.',
    flow: ['Map Workflow', 'Find Repetitive Steps', 'Design System', 'Build Integrations', 'Test', 'Monitor'],
    deliverables: [
      'Automated lead capture, routing & team alerts',
      'Customer response & follow-up triggers',
      'Cross-tool data synchronization',
      'Internal approval & reporting workflows',
      'AI-powered classification & drafting steps',
      'Reliability monitoring & error handling'
    ],
    whoItsFor: [
      'Businesses losing hours to manual data entry',
      'Teams with disconnected CRM, email and project tools',
      'Operations leaders wanting reliable execution'
    ]
  },
  {
    slug: 'voice-ai',
    number: '08',
    category: 'AI & Automation',
    categoryRoute: '/solutions/ai-automation',
    color: '#ff4d2d',
    title: 'Voice AI',
    headline: 'Make Business Conversations More Intelligent.',
    subheadline: 'Use AI-powered voice experiences to support defined customer and business workflows.',
    intro:
      'A voice system should not simply sound impressive. It needs a defined task, a clear workflow, appropriate information, defined boundaries, and a human escalation path where needed.',
    cta: 'Explore Voice AI',
    problem:
      'Missed calls and repetitive phone enquiries cost businesses valuable opportunities and interrupt focused team work.',
    flow: ['Define Use Case', 'Design Conversation', 'Connect Workflow', 'Test', 'Improve'],
    deliverables: [
      'Natural-voice appointment booking & scheduling',
      'Predefined inbound lead qualification',
      'First-level customer assistance & routing',
      'Structured CRM data capture from calls',
      'Defined boundaries & human transfer rules',
      'Call flow testing & refinement'
    ],
    whoItsFor: [
      'Clinics, agencies & service businesses booking appointments',
      'Businesses missing inbound phone enquiries',
      'Teams exploring voice-based qualification'
    ]
  },
  {
    slug: 'website-development',
    number: '09',
    category: 'Websites & E-Commerce',
    categoryRoute: '/solutions/websites-ecommerce',
    color: '#2563eb',
    title: 'Website Development',
    headline: 'Build a Website That Works as Part of Your Growth System.',
    subheadline:
      'Create a digital experience that communicates your value, builds trust and helps visitors take action.',
    intro:
      'A strong website should explain what you do, differentiate why someone should choose you, build trust, create a clear next action, and connect into the broader growth system.',
    cta: 'Build My Website',
    problem:
      "Many websites don't clearly explain the offer, look outdated, are hard to navigate on mobile, or fail to capture enquiries.",
    flow: ['Discover', 'Plan', 'Structure', 'Design', 'Develop', 'Test', 'Launch', 'Improve'],
    deliverables: [
      'Professional business websites built for clarity',
      'Conversion-focused campaign & offer landing pages',
      'Clear service evaluation information architecture',
      'Responsive mobile-first user experience',
      'Integrated forms, CRM capture & automation',
      'Ongoing conversion optimization'
    ],
    whoItsFor: [
      'New businesses building their digital foundation',
      'Companies with outdated websites',
      'Service businesses needing better conversion'
    ]
  },
  {
    slug: 'ecommerce-development',
    number: '10',
    category: 'Websites & E-Commerce',
    categoryRoute: '/solutions/websites-ecommerce',
    color: '#a3e635',
    title: 'E-Commerce Development',
    headline: 'Turn Your Online Store Into a Better Buying Experience.',
    subheadline:
      'Build an e-commerce experience that makes it easier for customers to discover, evaluate and purchase your products.',
    intro:
      'Selling online is more than uploading products — an effective store needs to help customers discover, evaluate, trust, purchase and return.',
    cta: 'Build My E-Commerce Store',
    problem:
      'Friction in product discovery, unclear presentation, or a clunky checkout silently erodes online store revenue.',
    flow: ['Discover', 'Evaluate', 'Trust', 'Purchase', 'Return'],
    deliverables: [
      'Store catalog structure & customer journey strategy',
      'Clear product presentation, specs & trust signals',
      'Intuitive mobile & desktop shopping UX',
      'Frictionless cart & checkout conversion flow',
      'Inventory, CRM, payment & fulfillment integrations',
      'Data-driven store optimization'
    ],
    whoItsFor: [
      'Retailers moving into e-commerce',
      'Existing online stores with high cart abandonment',
      'D2C product brands scaling online'
    ]
  },
  {
    slug: 'shopify-development',
    number: '11',
    category: 'Websites & E-Commerce',
    categoryRoute: '/solutions/websites-ecommerce',
    color: '#8b5cf6',
    title: 'Shopify Development',
    headline: 'Build a Shopify Store Around Your Business.',
    subheadline:
      'Create, customize and optimize a Shopify store designed around your products, customers and growth goals.',
    intro:
      'Shopify is the platform. Your strategy still comes first. A successful store needs positioning, product experience, customer journey, marketing and conversion — not just a template.',
    cta: 'Build My Shopify Store',
    problem:
      'Generic templates without strategic positioning or conversion logic fail to differentiate your brand or grow order value.',
    flow: ['Positioning', 'Product Experience', 'Customer Journey', 'Conversion', 'Retention'],
    deliverables: [
      'Core Shopify store setup & scalable catalog',
      'Bespoke theme customization around your brand',
      'Collections, variants, metadata & search structure',
      'Streamlined navigation & buying experience',
      'Marketing, CRM & fulfillment app integrations',
      'Speed, usability & CRO improvements'
    ],
    whoItsFor: [
      'New Shopify brands launching properly',
      'Offline stores moving onto Shopify',
      'Existing Shopify stores needing higher conversion'
    ]
  },
  {
    slug: 'lead-generation',
    number: '12',
    category: 'Lead Generation',
    categoryRoute: '/solutions/lead-generation',
    color: '#ff4d2d',
    title: 'Lead Generation',
    headline: 'Build a Lead System, Not Just a Lead Campaign.',
    subheadline:
      'Create a connected journey that turns relevant attention into enquiries and gives your team a better path to conversion.',
    intro:
      'A business may have traffic without enquiries, enquiries without follow-up, or leads without qualification. Lead generation needs to connect the entire journey.',
    cta: 'Build My Lead System',
    problem:
      'Traffic without enquiries, or enquiries without fast follow-up and qualification, turns marketing spend into waste.',
    flow: ['Attract', 'Capture', 'Qualify', 'Manage', 'Follow Up', 'Convert', 'Measure'],
    deliverables: [
      'Audience, offer & channel lead strategy',
      'Targeted acquisition campaigns',
      'Conversion-engineered landing pages',
      'Structured qualification & lead capture forms',
      'CRM pipeline organization & routing',
      'Automated multi-channel follow-up workflows'
    ],
    whoItsFor: [
      'Service and B2B businesses',
      'Local businesses needing steady enquiries',
      'Companies investing in ads without a structured funnel'
    ]
  },
  {
    slug: 'digital-transformation-strategy',
    number: '13',
    category: 'Technology & Transformation',
    categoryRoute: '/solutions/digital-transformation',
    color: '#f59e0b',
    title: 'Digital Transformation Strategy',
    headline: "The Goal Isn't More Software. The Goal Is a Business That Works Better.",
    subheadline:
      'Understand how your business currently operates, where the bottlenecks are, and build a prioritized roadmap for modernization.',
    intro:
      'We help you take a clear-eyed look at how the business currently runs and design a practical, sequenced roadmap — not a sales pitch for a specific platform.',
    cta: 'Explore Digital Transformation',
    problem:
      'Multiple disconnected tools, manual processes, and poor operational visibility quietly cap how fast a business can grow.',
    flow: ['Understand', 'Map', 'Prioritize', 'Design', 'Recommend'],
    deliverables: [
      'Operational bottleneck & workflow audit',
      'Data silo & manual process mapping',
      'Impact vs. complexity prioritization',
      'Connected future-state workflow architecture',
      'Sequenced, vendor-neutral implementation roadmap',
      'Seamless handoff to AI & Automation execution'
    ],
    whoItsFor: [
      'Growing businesses with disconnected processes',
      'Teams relying heavily on spreadsheets and manual work',
      'Leaders wanting a clear roadmap before buying new software'
    ]
  }
];

export const APPROACH_PAGE_DATA = {
  headline: 'AI Is Powerful. Strategy Makes It Useful.',
  subheadline:
    'Technology can accelerate execution. But without the right strategy, faster execution can simply create more activity.',
  intro:
    'AxonVortex combines AI, strategy, creativity, marketing, automation and data to build practical digital growth systems around real business goals.',
  problemFirstTitle: "Don't Start With the Tool. Start With the Problem.",
  problemFirstBody:
    "A business doesn't need AI because AI exists. It doesn't need a website simply because every business has one. It doesn't need advertising simply because competitors are advertising. The right question is: what does the business need to move forward? From there, we identify the right combination of strategy, marketing, technology and automation.",
  frameworkSteps: [
    {
      index: '01',
      title: 'Understand',
      desc: 'We look at business goals, customers, current digital presence, existing systems, marketing activity, operational challenges and growth opportunities.'
    },
    {
      index: '02',
      title: 'Diagnose',
      desc: "We identify what's working, what's not, and where the biggest opportunities may exist — digital gaps, marketing inefficiencies, conversion barriers, manual processes, technology limitations, AI opportunities."
    },
    {
      index: '03',
      title: 'Strategize',
      desc: "We turn observations into a practical direction. The objective isn't to recommend everything — it's to prioritize what matters most."
    },
    {
      index: '04',
      title: 'Create',
      desc: 'We build the required assets and systems, which could include content, campaigns, websites, landing pages, lead systems, AI solutions or automation.'
    },
    {
      index: '05',
      title: 'Automate',
      desc: 'Where repetitive processes can be improved through automation or AI, we identify opportunities to reduce unnecessary manual work.'
    },
    {
      index: '06',
      title: 'Measure',
      desc: 'We track meaningful signals and business outcomes — not vanity metrics.'
    },
    {
      index: '07',
      title: 'Improve',
      desc: 'We use what we learn to make the next iteration smarter and more effective.'
    }
  ],
  growthLoop: {
    title: 'THE AXONVORTEX GROWTH LOOP',
    nodes: ['Hypothesis', 'Action', 'Measure', 'Learn', 'Improve'],
    description:
      "We treat digital growth as a continuous experiment. A strategy shouldn't remain unchanged simply because it was created months ago — markets, customers, platforms and technology all change, and growth systems need to learn too."
  },
  humanPlusAi: {
    title: 'AI Brings Speed. Humans Bring Judgment.',
    description:
      "We believe the strongest systems combine both. AI can help with speed, scale, pattern recognition, automation, information processing and repetitive tasks. Humans bring strategy, context, creativity, empathy, judgment and business understanding."
  },
  dataInformed: {
    title: 'DATA-INFORMED, NOT DATA-OBSESSED',
    description:
      "Numbers matter, but not every number matters equally. A high number of views isn't automatically growth. A large audience isn't automatically revenue. More leads aren't automatically better leads. We focus on the metrics that help a business make better decisions."
  }
};

export const ABOUT_PAGE_DATA = {
  headline: "We're Building AxonVortex From Zero. And We're Building It Differently.",
  intro:
    "AxonVortex is a new AI-driven digital growth company, built around a simple belief: businesses don't need more digital noise, they need smarter growth systems. We're building at the intersection of AI, strategy, creativity, marketing, automation and data.",
  whyExists:
    "Businesses have more digital tools than ever — more platforms, more advertising options, more AI tools, more automation possibilities, more data. Yet having more tools doesn't automatically make a business better. The challenge is knowing what to use, why, how it should connect, what to measure and what to improve. That's the problem AxonVortex is being built to solve.",
  beliefs: [
    {
      index: '01',
      title: 'Technology Should Serve the Business',
      desc: 'Technology should serve the business, not the other way around — making it more efficient, connected, responsive, scalable and capable.',
      color: '#f59e0b'
    },
    {
      index: '02',
      title: 'AI Should Be Practical',
      desc: "We aren't interested in AI hype — we're interested in where AI can save time, improve customer experience, support teams, automate repetitive work and create new opportunities.",
      color: '#8b5cf6'
    },
    {
      index: '03',
      title: 'Marketing Should Have a Purpose',
      desc: "Content shouldn't exist simply to fill a calendar, advertising shouldn't exist simply to spend a budget, and SEO shouldn't exist simply to increase traffic. Every activity should have a reason.",
      color: '#ff4d2d'
    },
    {
      index: '04',
      title: 'Growth Should Be Measurable',
      desc: 'Not everything can be reduced to one number, but a business should understand what is happening and why: Measure → Learn → Improve.',
      color: '#a3e635'
    }
  ],
  buildingInPublic:
    "We're not going to pretend AxonVortex has already achieved things it hasn't. We're building from zero — experimenting, testing, learning, improving and documenting as we go. We'll share the marketing experiments, the AI systems we're testing, the processes we're building, and the lessons — wins and failures both. The journey is part of the brand.",
  dontBelieveIn: [
    'Fake authority',
    'Manufactured results',
    'Empty AI hype',
    'One-size-fits-all strategies',
    'Vanity metrics without business context',
    "Technology for technology's sake"
  ],
  doBelieveIn: [
    'Useful ideas',
    'Practical execution',
    'Honest learning',
    'Continuous improvement',
    'Human creativity',
    'Intelligent technology',
    'Long-term growth'
  ]
};

export const DIAGNOSTIC_AUDITS = [
  {
    id: 'digital-growth-audit',
    badge: '01 · FULL SYSTEM DIAGNOSTIC',
    title: 'Digital Growth Audit',
    question: "Find what's holding your digital growth back.",
    description:
      'Evaluate digital presence, website, social media, marketing, lead generation, customer journey, AI opportunities and automation opportunities.',
    color: '#f59e0b',
    checkpoints: [
      'Digital Presence & Messaging Clarity',
      'Website & Landing Page Conversion Path',
      'Marketing & Search Channel Alignment',
      'Lead Capture & Follow-Up Speed',
      'Practical AI & Workflow Opportunities'
    ]
  },
  {
    id: 'ai-readiness-assessment',
    badge: '02 · AI & AUTOMATION',
    title: 'AI Readiness Assessment',
    question: 'Is your business ready to use practical AI?',
    description:
      'Explore opportunities across business processes, customer interactions, data, automation and AI use cases.',
    color: '#8b5cf6',
    checkpoints: [
      'Repetitive Manual Process Inventory',
      'Customer Query & Support Volume',
      'Data & Software Stack Connectivity',
      'Bounded AI Agent & Voice AI Use Cases',
      'Human-in-the-Loop Governance Controls'
    ]
  },
  {
    id: 'website-conversion-checklist',
    badge: '03 · WEB & E-COMMERCE',
    title: 'Website Conversion Checklist',
    question: 'Is your website turning visitors into opportunities?',
    description:
      'Evaluate messaging, trust, user experience, calls to action, lead capture, mobile experience and conversion paths.',
    color: '#a3e635',
    checkpoints: [
      '5-Second Value Proposition Clarity',
      'Trust & Credibility Architecture',
      'Mobile Experience & Navigation Speed',
      'Call-to-Action Friction & Placement',
      'CRM & Automated Follow-Up Integration'
    ]
  },
  {
    id: 'social-media-audit',
    badge: '04 · CONTENT & AUTHORITY',
    title: 'Social Media Audit',
    question: 'Is your social media actually helping your business grow?',
    description:
      'Evaluate positioning, content, audience, engagement, conversion and consistency.',
    color: '#2563eb',
    checkpoints: [
      'Positioning & Audience Relevance',
      'Content Pillar Balance (Education vs. Offer)',
      'Platform-Native Formatting',
      'Meaningful Audience Engagement Signals',
      'Social-to-Enquiry Conversion Path'
    ]
  },
  {
    id: 'marketing-waste-assessment',
    badge: '05 · PAID & SEARCH ROI',
    title: 'Marketing Waste Assessment',
    question: 'Where is your marketing budget silently leaking?',
    description:
      'Evaluate acquisition, targeting, creative, conversion, tracking and follow-up.',
    color: '#ff4d2d',
    checkpoints: [
      'Search & Audience Intent Alignment',
      'Offer-to-Landing-Page Message Continuity',
      'Conversion Tracking & Attribution Integrity',
      'Lead Response Latency After Click',
      'Hypothesis → Measure → Improve Loop'
    ]
  }
];

export const GROWTH_AUDIT_DATA = {
  headline: "Find What's Holding Your Digital Growth Back.",
  intro:
    'Your business may already be doing marketing. You may have a website. You may be running ads. You may even be using AI. But are all the pieces actually working together? The AxonVortex Digital Growth Audit helps identify the gaps, opportunities and priorities across your digital growth system.',
  whatWeLookAt: [
    {
      index: '01',
      title: 'Digital Presence',
      desc: 'How clearly does the business communicate its value online? We look at website, brand presence, messaging, user experience and conversion opportunities.'
    },
    {
      index: '02',
      title: 'Social Media',
      desc: 'Content quality, positioning, platform strategy, audience relevance, engagement and conversion potential.'
    },
    {
      index: '03',
      title: 'Marketing',
      desc: 'Acquisition channels, content strategy, advertising opportunities, search visibility and customer journey.'
    },
    {
      index: '04',
      title: 'Lead Generation',
      desc: 'Offers, landing pages, lead capture, conversion paths and follow-up opportunities.'
    },
    {
      index: '05',
      title: 'AI & Automation',
      desc: 'Potential opportunities to reduce repetitive work, improve customer response, automate workflows and introduce practical AI.'
    },
    {
      index: '06',
      title: 'Digital Systems',
      desc: 'Disconnected tools, manual processes, integration gaps and technology limitations.'
    }
  ],
  whatYouGet: [
    { step: '01', title: 'Where You Are', desc: "What's currently working and where the gaps are" },
    { step: '02', title: "What's Holding You Back", desc: 'The areas creating friction or limiting growth' },
    { step: '03', title: 'What Matters Most', desc: 'Which opportunities should get attention first' },
    { step: '04', title: 'What to Do Next', desc: 'A clearer direction for your next digital growth steps' }
  ],
  framework: ['Discover', 'Diagnose', 'Prioritize', 'Recommend']
};

export const INSIGHTS_DATA = {
  headline: 'Ideas for Businesses Growing in a Digital World.',
  intro:
    'Practical thinking around marketing, AI, automation, digital transformation and business growth. No empty trends, no technology hype — just useful ideas designed to help businesses make smarter digital decisions.',
  categories: [
    { id: 'All', title: 'All Topics', topics: 'Complete AxonVortex knowledge base & live experiments.' },
    { id: 'Marketing', title: 'Marketing', topics: 'Social media, advertising, SEO, content, positioning, marketing strategy.' },
    { id: 'AI for Business', title: 'AI for Business', topics: 'AI use cases, AI agents, AI chatbots, Voice AI, practical AI strategy.' },
    { id: 'Automation', title: 'Automation', topics: 'Workflow automation, business process automation, system integration.' },
    { id: 'Digital Transformation', title: 'Digital Transformation', topics: 'Business technology, websites, software, digital systems.' },
    { id: 'Business Growth', title: 'Business Growth', topics: 'Lead generation, conversion, customer experience, growth systems.' }
  ],
  contentLoop: ['Question', 'Research', 'Insight', 'Action', 'Solution'],
  journalEntries: [
    {
      id: 'entry-01',
      index: '01',
      category: 'Experiments',
      pillar: 'Building in Public',
      topic: 'Business Growth',
      title: 'Why We Are Building AxonVortex From Zero — In the Open',
      excerpt:
        'No manufactured success stories. No inflated promises. How we are structuring an AI-driven digital growth company around connected systems rather than disconnected services.',
      keyTakeaways: [
        'Why most businesses suffer from disconnected vendor silos rather than a lack of digital tools.',
        'How our 5-stage system (Attract → Engage → Convert → Automate → Optimize) replaces fragmented campaigns.',
        'Our commitment to documenting real experiments, hypotheses, and lessons publicly.'
      ],
      readTime: '04 MIN',
      relatedSolution: { label: 'Explore Our Approach', route: '/approach' }
    },
    {
      id: 'entry-02',
      index: '02',
      category: 'Frameworks',
      pillar: 'AI for Business',
      topic: 'AI for Business',
      title: "Don't Ask 'Where Can We Add AI?' — Ask 'Where Is Friction Costing Us Customers?'",
      excerpt:
        'A decision framework for separating expensive AI hype from bounded workflows where chatbots, voice AI, and autonomous agents create immediate operational ROI.',
      keyTakeaways: [
        'Start with the operational bottleneck (slow response, missed calls, repetitive triage) before selecting any AI model.',
        'Define strict boundaries and human-in-the-loop escalation rules for every AI Chatbot and Voice AI workflow.',
        'Measure AI success by hours saved and speed-to-lead improvement.'
      ],
      readTime: '06 MIN',
      relatedSolution: { label: 'Explore AI & Automation', route: '/solutions/ai-automation' }
    },
    {
      id: 'entry-03',
      index: '03',
      category: 'Teardowns',
      pillar: 'Business Growth',
      topic: 'Business Growth',
      title: 'The Gap Between Click and Customer: Why More Traffic Fails Broken Lead Systems',
      excerpt:
        'Mapping the 8-stage lead journey from Audience and Offer through Landing Page, CRM Capture, and Automated Follow-Up.',
      keyTakeaways: [
        'Why sending paid Meta or Google traffic to a generic homepage destroys conversion efficiency.',
        'The 5-second clarity test every campaign landing page must pass.',
        'How automated 60-second SMS and CRM routing prevents warm enquiries from going cold.'
      ],
      readTime: '05 MIN',
      relatedSolution: { label: 'Explore Lead Generation', route: '/solutions/lead-generation' }
    },
    {
      id: 'entry-04',
      index: '04',
      category: 'Guides',
      pillar: 'Marketing',
      topic: 'Marketing',
      title: 'Marketing Activity vs. Marketing Progress: Connecting Strategy, Content, and Search',
      excerpt:
        'How to stop running social media, Meta Ads, Google Ads, and SEO in isolated silos and connect them into a single measurable loop.',
      keyTakeaways: [
        'Aligning organic Social Media content pillars with paid Meta creative testing.',
        'Capturing high-intent demand with Google Search Ads while compounding long-term Technical & Local SEO.',
        'Tracking qualified pipeline contribution instead of surface impressions.'
      ],
      readTime: '07 MIN',
      relatedSolution: { label: 'Explore Digital Marketing', route: '/solutions/digital-marketing' }
    },
    {
      id: 'entry-05',
      index: '05',
      category: 'How-To',
      pillar: 'Automation',
      topic: 'Automation',
      title: 'Automate the Work, Keep Humans in Control: Designing Reliable Business Workflows',
      excerpt:
        'Step-by-step architecture for lead routing, CRM synchronization, and internal notifications without losing the human touch.',
      keyTakeaways: [
        'Mapping every manual handoff between website forms, CRM records, Slack alerts, and email sequences.',
        'Automating deterministic data movement so humans can focus on high-judgment conversations.',
        'Building error handling and visibility into automated business processes.'
      ],
      readTime: '05 MIN',
      relatedSolution: { label: 'Explore Workflow Automation', route: '/services/workflow-automation' }
    },
    {
      id: 'entry-06',
      index: '06',
      category: 'Opinions',
      pillar: 'Digital Transformation',
      topic: 'Digital Transformation',
      title: "The Goal Isn't More Software. The Goal Is a Business That Works Better.",
      excerpt:
        'Why growing businesses drown in disconnected SaaS tools — and how to map, prioritize, and sequence a practical digital transformation roadmap.',
      keyTakeaways: [
        'Auditing software sprawl and identifying where disconnected tools create double work.',
        'Ranking modernization priorities by commercial impact vs. implementation complexity.',
        'Designing a vendor-neutral future-state workflow before buying new subscriptions.'
      ],
      readTime: '04 MIN',
      relatedSolution: { label: 'Explore Digital Transformation', route: '/solutions/digital-transformation' }
    }
  ]
};

export const IMPROVEMENT_OPTIONS = [
  'Digital presence',
  'Social media',
  'Advertising (Meta / Google)',
  'SEO & Search Visibility',
  'Website / Landing Pages',
  'E-Commerce / Shopify',
  'Lead Generation & CRM',
  'AI Chatbots / Voice AI / Agents',
  'Workflow Automation',
  'Digital Transformation Strategy',
  'Not sure yet — Need Growth Audit'
];

export const FAQ_LIST = [
  {
    q: 'What is AxonVortex?',
    a: 'AxonVortex is an AI-driven digital growth company helping businesses build, market and scale smarter through strategy, marketing, creativity, technology, AI, automation and data.'
  },
  {
    q: 'What types of businesses do you work with?',
    a: 'We focus on new businesses building their foundation, small and medium businesses, offline businesses moving online, businesses with a weak digital presence, businesses wasting marketing spend, and teams ready for practical AI and automation.'
  },
  {
    q: 'Do you only provide AI services?',
    a: 'No. AI is one part of our connected digital growth system. Depending on your business challenge, the right solution may involve digital marketing, websites & Shopify, lead generation, digital transformation, automation, AI, or a combination.'
  },
  {
    q: 'Do I need to know which service I need before reaching out?',
    a: 'No. We follow Strategy Before Technology. Start by sharing your business challenge or requesting a Digital Growth Audit — we will diagnose the bottleneck and recommend what matters first.'
  },
  {
    q: 'Are you a new company?',
    a: 'Yes. AxonVortex is being built from zero in the open. We believe transparency, rigorous engineering, and honest experimentation are far more valuable than manufactured case studies or empty AI hype.'
  },
  {
    q: 'How does AI fit into your services without the hype?',
    a: 'We use AI where it creates measurable, practical value — 24/7 AI chatbots for instant answers, Voice AI for appointment booking, bounded AI agents for repetitive knowledge work, and workflow automation that keeps humans in control.'
  },
  {
    q: 'Can I work with AxonVortex for a single service first?',
    a: 'Yes. You can start with a specific priority (such as a Website, Shopify store, Meta/Google Ads campaign, or AI Chatbot) and connect additional layers as your growth system expands.'
  }
];
