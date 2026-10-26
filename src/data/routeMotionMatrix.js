import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Complete Route & Motion Matrix for all 27 Public Routes of AxonVortex
 * Preserves the exact localhost:5175 design system while giving every route
 * its own visual metaphor, media, interactive element, and scroll choreography.
 */
export const ROUTE_MOTION_MATRIX = {
  '/': {
    route: '/',
    pagePurpose: 'Main brand growth-system overview & service story gateway',
    existingLayout: 'Hero orbital scroll stage + Problem ticker + Sticky folders + Maze + 4-Stage Brain + Service discovery',
    serviceCategory: 'Core Ecosystem',
    uniqueVisualConcept: 'Connected Growth Engine Overview & Service Story Gateway',
    heroMedia: 'AxonScrollSceneCanvas interactive orbital core',
    supportingImages: ['/media/solutions/digital-marketing/system-blueprint.webp'],
    shortVideoConcept: 'Scroll-synchronized orbital convergence & service story preview rail',
    interactiveElement: 'Interactive Folder Simulator + Maze Bypass Toggle + Service Story Filter',
    signatureAnimation: 'Multi-stage scroll-scrubbed orbital core & folder stack',
    parallaxDirection: 'Vertical counter-parallax on side problem badges (max 38px)',
    offset: 38,
    duration: 0.55,
    easing: 'power3.out',
    desktopBehavior: 'Full scroll-scrubbed stages + bounded 38px side sticker parallax',
    tabletBehavior: '50% parallax amplitude (19px) + stacked two-column cards',
    mobileFallback: 'Vertical flow + 8px subtle progress transitions',
    reducedMotionBehavior: 'All stages immediately visible; orbital & sticker motion disabled'
  },
  '/solutions': {
    route: '/solutions',
    pagePurpose: 'Connected architecture map showing how all 5 solution pillars + Growth Audit work together',
    existingLayout: 'Parallax hero + Connected Architecture Map + Sticky stacking folders + Problem-to-Solution Matcher + 15-Service Directory',
    serviceCategory: 'Solutions Ecosystem',
    uniqueVisualConcept: 'Interactive 6-Stage Connected Growth Architecture Map (Attract → Engage → Convert → Manage → Automate → Optimize)',
    heroMedia: '/media/solutions/digital-marketing/system-blueprint.webp',
    supportingImages: [
      '/media/solutions/digital-marketing/system-blueprint.webp',
      '/media/solutions/ai-automation/system-blueprint.webp',
      '/media/solutions/websites-ecommerce/system-blueprint.webp',
      '/media/solutions/lead-generation/system-blueprint.webp',
      '/media/solutions/digital-transformation/system-blueprint.webp'
    ],
    shortVideoConcept: '6-second signal pulse traveling across all 5 solution pillars into the Growth Loop',
    interactiveElement: 'Interactive Architecture Node Inspector + Challenge-to-Solution Matcher',
    signatureAnimation: 'Cross-pillar signal conduit scrub + sticky folder stack',
    parallaxDirection: 'Opposing column vertical parallax (28px desktop)',
    offset: 28,
    duration: 0.55,
    easing: 'power3.out',
    desktopBehavior: 'Interactive SVG architecture map + sticky folder stack + 28px parallax',
    tabletBehavior: '14px parallax + 2-column architecture cards',
    mobileFallback: 'Vertical connected stage cards with step progress bar',
    reducedMotionBehavior: 'Static completed architecture map; instant tab switching'
  },
  '/solutions/digital-marketing': {
    route: '/solutions/digital-marketing',
    pagePurpose: 'Pillar 01: Connected demand-generation architecture combining social, content, paid ads, and search',
    existingLayout: 'Demand-Generation Hero + Horizontal Signal Convergence Track + Capability Matrix + Sub-Service Blueprints',
    serviceCategory: 'Digital Marketing',
    uniqueVisualConcept: 'Multi-Channel Visibility Signals Converging Into Qualified Demand',
    heroMedia: '/media/solutions/digital-marketing/system-blueprint.webp',
    supportingImages: [
      '/media/services/social-media-marketing/architecture-diagram.webp',
      '/media/services/meta-ads/architecture-diagram.webp',
      '/media/services/google-ads/architecture-diagram.webp',
      '/media/services/seo/architecture-diagram.webp'
    ],
    shortVideoConcept: 'Organic content, paid social, and search intent streams converging into tracked enquiries',
    interactiveElement: 'Channel Signal Mixer & 5-Capability Pillar Workbench',
    signatureAnimation: 'Marketing signals move at different horizontal speeds before converging into qualified demand',
    parallaxDirection: 'Horizontal multi-speed signal lanes (36px desktop)',
    offset: 36,
    duration: 0.6,
    easing: 'power2.out',
    desktopBehavior: 'Differential horizontal signal streams + interactive demand funnel',
    tabletBehavior: '18px horizontal offset + 2-column capability cards',
    mobileFallback: 'Vertical channel progression stack',
    reducedMotionBehavior: 'Aligned static signal lanes without horizontal scrub'
  },
  '/solutions/ai-automation': {
    route: '/solutions/ai-automation',
    pagePurpose: 'Pillar 02: Input-to-intelligent-action workflow keeping humans in control',
    existingLayout: 'AI Workflow Hero + Depth-Layered Orchestration Stage + Human-in-the-Loop Gate + 6 AI Sub-Services',
    serviceCategory: 'AI & Automation',
    uniqueVisualConcept: 'Input → Context → Logic → Human Approval → Action → Feedback Loop',
    heroMedia: '/media/solutions/ai-automation/system-blueprint.webp',
    supportingImages: [
      '/media/services/ai-chatbots/architecture-diagram.webp',
      '/media/services/ai-agents/architecture-diagram.webp',
      '/media/services/workflow-automation/architecture-diagram.webp',
      '/media/services/voice-ai/architecture-diagram.webp'
    ],
    shortVideoConcept: 'Customer enquiry routed through grounded AI context and human approval into CRM action',
    interactiveElement: 'Interactive Human-in-the-Loop Automation Gate Simulator',
    signatureAnimation: 'Workflow nodes activate in depth (scale 0.96→1.0 + y-parallax) as the user scrolls',
    parallaxDirection: 'Depth-layered vertical & scale progression (32px desktop)',
    offset: 32,
    duration: 0.55,
    easing: 'power3.out',
    desktopBehavior: 'Depth-stepped node activation + interactive guardrail inspector',
    tabletBehavior: '16px vertical offset + 2-column node grid',
    mobileFallback: 'Vertical step-by-step workflow cards',
    reducedMotionBehavior: 'All workflow nodes active at scale 1.0'
  },
  '/solutions/websites-ecommerce': {
    route: '/solutions/websites-ecommerce',
    pagePurpose: 'Pillar 03: Layered digital-experience and conversion architecture',
    existingLayout: 'Layered Experience Hero + 6-Layer Assembly Stack + Storefront & Web Sub-Services',
    serviceCategory: 'Websites & E-Commerce',
    uniqueVisualConcept: 'Strategy → Structure → Interface → Content → Conversion → Integration',
    heroMedia: '/media/solutions/websites-ecommerce/system-blueprint.webp',
    supportingImages: [
      '/media/services/website-development/architecture-diagram.webp',
      '/media/services/ecommerce-development/architecture-diagram.webp',
      '/media/services/shopify-development/architecture-diagram.webp'
    ],
    shortVideoConcept: 'Wireframe skeleton assembling into a high-converting responsive storefront',
    interactiveElement: 'Interactive 6-Layer Digital Experience Stack Explorer',
    signatureAnimation: 'Wireframes, interface layers, and commerce components move at different vertical depths',
    parallaxDirection: 'Multi-depth vertical layer assembly (40px desktop)',
    offset: 40,
    duration: 0.6,
    easing: 'power3.out',
    desktopBehavior: 'Layered vertical depth parallax + responsive viewport switcher',
    tabletBehavior: '20px layer offset',
    mobileFallback: 'Clean vertical layer cards',
    reducedMotionBehavior: 'Assembled interface state shown immediately'
  },
  '/solutions/lead-generation': {
    route: '/solutions/lead-generation',
    pagePurpose: 'Pillar 04: Connected opportunity pipeline from attention to CRM follow-up',
    existingLayout: 'Opportunity Pipeline Hero + 7-Stage Lead Signal Spine + Sub-Services Breakdown',
    serviceCategory: 'Lead Generation',
    uniqueVisualConcept: 'Attention → Offer → Landing Page → Capture → Qualification → CRM → Follow-Up',
    heroMedia: '/media/solutions/lead-generation/system-blueprint.webp',
    supportingImages: ['/media/services/lead-generation/architecture-diagram.webp'],
    shortVideoConcept: 'Lead pulse traveling down the 7-stage capture and qualification pipeline',
    interactiveElement: 'Interactive Lead Friction & Qualification Stage Inspector',
    signatureAnimation: 'A lead indicator travels down the pipeline while each stage activates on scroll',
    parallaxDirection: 'Vertical pipeline spine progression (34px desktop)',
    offset: 34,
    duration: 0.55,
    easing: 'power2.out',
    desktopBehavior: 'Scroll-scrubbed vertical lead indicator + stage activation',
    tabletBehavior: '17px offset + full stage cards',
    mobileFallback: 'Vertical numbered pipeline steps',
    reducedMotionBehavior: 'Full pipeline illuminated statically'
  },
  '/solutions/digital-transformation': {
    route: '/solutions/digital-transformation',
    pagePurpose: 'Pillar 05: Evolving system blueprint connecting CRM, custom software, and operations',
    existingLayout: 'System Blueprint Hero + Silo-to-Connected Assembly Stage + Sub-Services Breakdown',
    serviceCategory: 'Technology & Digital Transformation',
    uniqueVisualConcept: 'Current Systems → Business Processes → Integration Layers → Data Flow → Roadmap → Future Architecture',
    heroMedia: '/media/solutions/digital-transformation/system-blueprint.webp',
    supportingImages: [
      '/media/services/crm/architecture-diagram.webp',
      '/media/services/custom-software/architecture-diagram.webp',
      '/media/services/digital-transformation-strategy/architecture-diagram.webp'
    ],
    shortVideoConcept: 'Disconnected legacy silos re-aligning into a single connected operating blueprint',
    interactiveElement: 'Legacy Silos vs. Connected Blueprint Toggle & Roadmap Explorer',
    signatureAnimation: 'Architecture layers assemble progressively from fragmented to connected during scroll',
    parallaxDirection: 'Converging horizontal & vertical blueprint blocks (36px desktop)',
    offset: 36,
    duration: 0.6,
    easing: 'power3.out',
    desktopBehavior: 'Scroll-driven convergence of system blocks into unified architecture',
    tabletBehavior: '18px convergence offset',
    mobileFallback: 'Before/After stacked comparison cards',
    reducedMotionBehavior: 'Connected architecture state shown immediately'
  },
  '/services/social-media-marketing': {
    route: '/services/social-media-marketing',
    pagePurpose: 'Service 01: Content pillars, platform-native formats, and audience engagement systems',
    existingLayout: 'Editorial Calendar Split Hero + 6s Content Transformation Loop + Staggered Publishing Timeline + Topic Cluster Board',
    serviceCategory: 'Digital Marketing',
    uniqueVisualConcept: 'Content Calendar, Post-Format Previews, Topic Clusters & Platform Publishing Sequence',
    heroMedia: '/media/services/social-media-marketing/architecture-diagram.webp',
    supportingImages: ['/media/services/social-media-marketing/architecture-diagram.svg'],
    shortVideoConcept: 'One core business insight transforming into a 9:16 Reel, 7-Slide Carousel, LinkedIn Post, and Topic Guide across Plan → Create → Publish → Measure',
    interactiveElement: 'Platform Format Switcher + Content Pillar & Topic Cluster Planner',
    signatureAnimation: 'Staggered content tiles moving through a publishing timeline during scroll',
    parallaxDirection: 'Horizontal staggered timeline tiles (32px desktop)',
    offset: 32,
    duration: 0.55,
    easing: 'power3.out',
    desktopBehavior: 'Staggered horizontal/vertical timeline + live 6s content format loop',
    tabletBehavior: '16px stagger offset + 2-column calendar grid',
    mobileFallback: 'Vertical publishing sequence cards',
    reducedMotionBehavior: 'Static poster frame of content calendar; no loop motion'
  },
  '/services/meta-ads': {
    route: '/services/meta-ads',
    pagePurpose: 'Service 02: Paid social creative testing, audience layering, and conversion tracking',
    existingLayout: 'Dark Command Split Hero + 6s Creative-to-Conversion Loop + Audience Layer Convergence Stage + Campaign Ledger',
    serviceCategory: 'Digital Marketing',
    uniqueVisualConcept: 'Audience Layers, Campaign Structure, Creative Variations & Conversion-Event Flow',
    heroMedia: '/media/services/meta-ads/architecture-diagram.webp',
    supportingImages: ['/media/services/meta-ads/architecture-diagram.svg'],
    shortVideoConcept: 'Creative variation → Audience layer → Ad click → Dedicated landing page → Verified CAPI conversion sequence',
    interactiveElement: 'Campaign Objective & Audience Layer Convergence Inspector',
    signatureAnimation: 'Audience layers separate and converge around the selected campaign objective on scroll',
    parallaxDirection: 'Opposing depth convergence (36px desktop)',
    offset: 36,
    duration: 0.6,
    easing: 'power3.out',
    desktopBehavior: 'Multi-layer audience convergence + 6s creative-to-CAPI motion loop',
    tabletBehavior: '18px layer offset',
    mobileFallback: 'Vertical campaign structure stack',
    reducedMotionBehavior: 'Converged campaign structure shown statically'
  },
  '/services/google-ads': {
    route: '/services/google-ads',
    pagePurpose: 'Service 03: Search-intent capture, keyword architecture, and landing-page continuity',
    existingLayout: 'Search Intent Banner Hero + 6s Query-to-Enquiry Loop + Intent Matching Conduit + Capability Ledger',
    serviceCategory: 'Digital Marketing',
    uniqueVisualConcept: 'Search-Intent Journey, Keyword Groups, Ad-Group Structure & Conversion Tracking Path',
    heroMedia: '/media/services/google-ads/architecture-diagram.webp',
    supportingImages: ['/media/services/google-ads/architecture-diagram.svg'],
    shortVideoConcept: 'Search query becoming intent classification, ad group match, landing page visit, and tracked enquiry',
    interactiveElement: 'Interactive Search Query Intent & Landing Page Continuity Tester',
    signatureAnimation: 'Search terms travel through matching and conversion stages along a scroll-scrubbed path',
    parallaxDirection: 'Horizontal-to-vertical intent conduit (30px desktop)',
    offset: 30,
    duration: 0.55,
    easing: 'power2.out',
    desktopBehavior: 'Scroll-scrubbed search term conduit + interactive query lab',
    tabletBehavior: '15px offset + stacked intent stages',
    mobileFallback: 'Vertical search-to-enquiry steps',
    reducedMotionBehavior: 'Static intent-match diagram with instant tab switching'
  },
  '/services/seo': {
    route: '/services/seo',
    pagePurpose: 'Service 04: Technical foundation, site architecture, topic clusters, and compounding search visibility',
    existingLayout: 'Blueprint Crawl Hero + 6s Search Engine Crawl Loop + Progressive Topic Cluster Graph + 6 SEO Capabilities',
    serviceCategory: 'Digital Marketing',
    uniqueVisualConcept: 'Website Crawl Map, Site Architecture, Topic Clusters, Internal Links & Technical Health Indicators',
    heroMedia: '/media/services/seo/architecture-diagram.webp',
    supportingImages: ['/media/services/seo/architecture-diagram.svg'],
    shortVideoConcept: 'Search engine crawler moving through site architecture and lighting up topic clusters',
    interactiveElement: 'Interactive Crawl Map & Topic Cluster Inspector',
    signatureAnimation: 'Content clusters and internal-link authority connections build progressively during scroll',
    parallaxDirection: 'Stepped elevation & link-path draw (34px desktop)',
    offset: 34,
    duration: 0.6,
    easing: 'power3.out',
    desktopBehavior: 'Progressive cluster node reveal + 6s crawler loop',
    tabletBehavior: '17px elevation offset',
    mobileFallback: 'Vertical crawl hierarchy list',
    reducedMotionBehavior: 'Fully connected site architecture map shown immediately'
  },
  '/services/ai-chatbots': {
    route: '/services/ai-chatbots',
    pagePurpose: 'Service 05: Grounded AI conversations, lead qualification, and seamless human handoff',
    existingLayout: 'Conversation Tree Hero + 6s Question-to-Action Loop + Scroll-Activated Branching Tree + Guardrail Matrix',
    serviceCategory: 'AI & Automation',
    uniqueVisualConcept: 'Conversation Branches, Grounded Knowledge Retrieval, Qualification Path & Human Handoff',
    heroMedia: '/media/services/ai-chatbots/architecture-diagram.webp',
    supportingImages: ['/media/services/ai-chatbots/architecture-diagram.svg'],
    shortVideoConcept: 'Customer question → grounded knowledge retrieval → qualification questions → booking or human handoff',
    interactiveElement: 'Interactive Conversation Branch & Handoff Trigger Simulator',
    signatureAnimation: 'Conversation branches activate sequentially as the user scrolls',
    parallaxDirection: 'Branching vertical & horizontal node reveal (28px desktop)',
    offset: 28,
    duration: 0.55,
    easing: 'power3.out',
    desktopBehavior: 'Sequential branch lighting + live dialogue simulator',
    tabletBehavior: '14px branch offset',
    mobileFallback: 'Vertical conversation thread steps',
    reducedMotionBehavior: 'All conversation branches visible immediately'
  },
  '/services/ai-agents': {
    route: '/services/ai-agents',
    pagePurpose: 'Service 06: Bounded multi-step AI task execution with mandatory human approval gates',
    existingLayout: 'Bounded Orchestration Hero + 6s Agent Coordination Loop + Sequential Node Activation Rail + Human Control Matrix',
    serviceCategory: 'AI & Automation',
    uniqueVisualConcept: 'Goal → Context → Decision → Tool Usage → Human Approval → Completed Task',
    heroMedia: '/media/services/ai-agents/architecture-diagram.webp',
    supportingImages: ['/media/services/ai-agents/architecture-diagram.svg'],
    shortVideoConcept: 'An agent receives a bounded task, gathers CRM/inbox context, drafts actions, waits for human approval, and executes',
    interactiveElement: 'Bounded Agent Task & Human Approval Checkpoint Inspector',
    signatureAnimation: 'Orchestration nodes activate sequentially along a bounded control rail during scroll',
    parallaxDirection: 'Sequential vertical rail progression (32px desktop)',
    offset: 32,
    duration: 0.55,
    easing: 'power3.out',
    desktopBehavior: 'Scroll-activated orchestration rail + 6s bounded agent loop',
    tabletBehavior: '16px offset',
    mobileFallback: 'Vertical 6-step agent guardrail flow',
    reducedMotionBehavior: 'All 6 orchestration nodes displayed in completed state'
  },
  '/services/workflow-automation': {
    route: '/services/workflow-automation',
    pagePurpose: 'Service 07: Cross-system event triggers, conditional routing, and automated operations',
    existingLayout: 'Pipeline Workbench Hero + 6s Signal Routing Loop + Scroll Signal Pipeline + Automation Ledger',
    serviceCategory: 'AI & Automation',
    uniqueVisualConcept: 'Trigger → Conditions → Actions → Notifications → CRM Updates → Human Checkpoints',
    heroMedia: '/media/services/workflow-automation/architecture-diagram.webp',
    supportingImages: ['/media/services/workflow-automation/architecture-diagram.svg'],
    shortVideoConcept: 'Lead submission automatically creates CRM record, assigns owner, sends team notification, and logs checkpoint',
    interactiveElement: 'Interactive Trigger-Condition-Action Rule Builder Preview',
    signatureAnimation: 'A signal pulse travels across the workflow pipeline during scroll',
    parallaxDirection: 'Horizontal signal pulse & counter-moving rule cards (34px desktop)',
    offset: 34,
    duration: 0.55,
    easing: 'power2.out',
    desktopBehavior: 'Scroll-scrubbed workflow signal pulse + 6s automation loop',
    tabletBehavior: '17px offset',
    mobileFallback: 'Vertical trigger-to-action pipeline',
    reducedMotionBehavior: 'Static completed workflow diagram'
  },
  '/services/voice-ai': {
    route: '/services/voice-ai',
    pagePurpose: 'Service 08: Spoken inquiry handling, appointment booking, and structured CRM call summaries',
    existingLayout: 'Acoustic Waveform Studio Hero + 6s Voice-to-Action Loop + Waveform-to-Data Morph Section + Call Routing Matrix',
    serviceCategory: 'AI & Automation',
    uniqueVisualConcept: 'Audio Waveform → Intent Detection → Conversation Logic → Structured Data → Human Handoff → CRM Record',
    heroMedia: '/media/services/voice-ai/architecture-diagram.webp',
    supportingImages: ['/media/services/voice-ai/architecture-diagram.svg'],
    shortVideoConcept: 'Inbound voice waveform transforming into transcribed intent, calendar booking, and structured CRM record',
    interactiveElement: 'Interactive Call Scenario & Intent Extraction Inspector',
    signatureAnimation: 'Waveform transforms into text, intent tags, and structured workflow data during scroll',
    parallaxDirection: 'Horizontal waveform compression into structured data cards (30px desktop)',
    offset: 30,
    duration: 0.6,
    easing: 'power3.out',
    desktopBehavior: 'Waveform-to-CRM transformation stage + 6s voice loop',
    tabletBehavior: '15px offset',
    mobileFallback: 'Vertical call-to-CRM progression',
    reducedMotionBehavior: 'Static waveform + structured CRM output card'
  },
  '/services/website-development': {
    route: '/services/website-development',
    pagePurpose: 'Service 09: Conversion-focused website architecture, value clarity, and responsive engineering',
    existingLayout: 'Blueprint-to-Interface Hero + 6s Wireframe Transformation Loop + Scroll Layer Assembly Stage + Capability Bento',
    serviceCategory: 'Websites & E-Commerce',
    uniqueVisualConcept: 'Sitemap → Wireframe → Content Hierarchy → Interface Design → Responsive Layouts → Conversion Path',
    heroMedia: '/media/services/website-development/architecture-diagram.webp',
    supportingImages: ['/media/services/website-development/architecture-diagram.svg'],
    shortVideoConcept: 'Structural wireframe transforming into a finished responsive website across Desktop, Tablet, and Mobile',
    interactiveElement: 'Interactive Desktop / Tablet / Mobile Architecture Viewport Switcher',
    signatureAnimation: 'Website layers assemble in depth as the page scrolls',
    parallaxDirection: 'Layered vertical depth assembly (38px desktop)',
    offset: 38,
    duration: 0.6,
    easing: 'power3.out',
    desktopBehavior: 'Multi-layer wireframe-to-UI assembly + viewport switcher',
    tabletBehavior: '19px offset',
    mobileFallback: 'Vertical 6-layer website build sequence',
    reducedMotionBehavior: 'Assembled website layers shown without parallax offset'
  },
  '/services/ecommerce-development': {
    route: '/services/ecommerce-development',
    pagePurpose: 'Service 10: Product discovery, merchandising clarity, cart, checkout, and fulfilment integration',
    existingLayout: 'Commerce Journey Hero + 6s Discovery-to-Checkout Loop + Connected Commerce Path Stage + Capability Matrix',
    serviceCategory: 'Websites & E-Commerce',
    uniqueVisualConcept: 'Product Discovery → Product Detail → Cart → Checkout → Payment State → Fulfilment Connection',
    heroMedia: '/media/services/ecommerce-development/architecture-diagram.webp',
    supportingImages: ['/media/services/ecommerce-development/architecture-diagram.svg'],
    shortVideoConcept: 'Customer progressing from catalog filter to product detail, frictionless cart, verified payment state, and fulfilment sync',
    interactiveElement: 'Interactive 6-Stage Buyer Journey Friction & Conversion Inspector',
    signatureAnimation: 'Commerce stages move through a connected path with scroll-scrubbed state activation',
    parallaxDirection: 'Horizontal commerce stage progression (34px desktop)',
    offset: 34,
    duration: 0.55,
    easing: 'power2.out',
    desktopBehavior: 'Connected commerce path scrub + 6s checkout loop',
    tabletBehavior: '17px offset',
    mobileFallback: 'Vertical commerce stage cards',
    reducedMotionBehavior: 'All 6 commerce stages active statically'
  },
  '/services/shopify-development': {
    route: '/services/shopify-development',
    pagePurpose: 'Service 11: Custom Shopify theme architecture, collection systems, app integrations, and checkout UX',
    existingLayout: 'Modular Storefront Hero + 6s Block Assembly Loop + Scroll Module Snap Stage + Storefront Ledger',
    serviceCategory: 'Websites & E-Commerce',
    uniqueVisualConcept: 'Storefront Blocks, Product Collection, Theme System, Apps & Integrations, Checkout Journey & Store Management',
    heroMedia: '/media/services/shopify-development/architecture-diagram.webp',
    supportingImages: ['/media/services/shopify-development/architecture-diagram.svg'],
    shortVideoConcept: 'Modular storefront blocks snapping together into a high-speed custom buying experience',
    interactiveElement: 'Interactive Storefront Block & App Integration Composer',
    signatureAnimation: 'Storefront modules snap into a connected theme architecture during scroll',
    parallaxDirection: 'Grid module snap-in convergence (32px desktop)',
    offset: 32,
    duration: 0.55,
    easing: 'power3.out',
    desktopBehavior: 'Scroll-triggered module snap + interactive block composer',
    tabletBehavior: '16px offset',
    mobileFallback: 'Vertical storefront block list',
    reducedMotionBehavior: 'Assembled storefront block grid shown immediately'
  },
  '/services/lead-generation': {
    route: '/services/lead-generation',
    pagePurpose: 'Service 12: End-to-end demand capture connecting audience, offer, landing page, CRM, and follow-up',
    existingLayout: 'Opportunity Engine Hero + 6s Visitor-to-Opportunity Loop + 8-Stage Pipeline Signal Track + Readiness Checklist',
    serviceCategory: 'Lead Generation',
    uniqueVisualConcept: 'Audience → Offer → Campaign → Landing Page → Lead Capture → Qualification → CRM → Follow-Up',
    heroMedia: '/media/services/lead-generation/architecture-diagram.webp',
    supportingImages: ['/media/services/lead-generation/architecture-diagram.svg'],
    shortVideoConcept: 'Target visitor engaging with offer, completing qualification form, and routing into CRM with instant follow-up',
    interactiveElement: 'Interactive 8-Stage Lead Funnel Leak & Conversion Diagnostic',
    signatureAnimation: 'A lead signal moves through the complete 8-stage pipeline during scroll',
    parallaxDirection: 'Pipeline signal scrub + stage elevation (36px desktop)',
    offset: 36,
    duration: 0.6,
    easing: 'power2.out',
    desktopBehavior: 'Scroll-scrubbed 8-stage lead signal + 6s opportunity loop',
    tabletBehavior: '18px offset',
    mobileFallback: 'Vertical 8-stage lead pipeline',
    reducedMotionBehavior: 'Complete 8-stage pipeline highlighted statically'
  },
  '/services/crm': {
    route: '/services/crm',
    pagePurpose: 'Service 13: Single source of truth for customer records, pipeline stages, ownership, and follow-up',
    existingLayout: 'CRM Command Hero + 6s Data-to-Record Loop + Scattered-to-Connected Convergence Stage + Module Ledger',
    serviceCategory: 'Technology & Digital Transformation',
    uniqueVisualConcept: 'Customer Record, Pipeline Stages, Team Ownership, Follow-Up Reminders, Communication History & Reporting',
    heroMedia: '/media/services/crm/architecture-diagram.webp',
    supportingImages: ['/media/services/crm/architecture-diagram.svg'],
    shortVideoConcept: 'Scattered spreadsheets, emails, and call notes converging into one structured customer record and pipeline stage',
    interactiveElement: 'Interactive 5-Stage Deal Pipeline & Customer Record Inspector',
    signatureAnimation: 'Disconnected data points converge into a structured CRM pipeline as the user scrolls',
    parallaxDirection: 'Opposing lateral convergence into center pipeline (36px desktop)',
    offset: 36,
    duration: 0.6,
    easing: 'power3.out',
    desktopBehavior: 'Lateral data convergence on scroll + 6s CRM record loop',
    tabletBehavior: '18px convergence offset',
    mobileFallback: 'Vertical pipeline stage board',
    reducedMotionBehavior: 'Unified CRM pipeline displayed statically'
  },
  '/services/custom-software': {
    route: '/services/custom-software',
    pagePurpose: 'Service 14: Tailored internal tools, portals, databases, role permissions, and API integrations',
    existingLayout: 'Software Stack Hero + 6s Architecture Build Loop + Scroll Component Snap Stage + Technical Ledger',
    serviceCategory: 'Technology & Digital Transformation',
    uniqueVisualConcept: 'Business Requirement → System Modules → Database → Integrations → User Roles → Deployment Layers',
    heroMedia: '/media/services/custom-software/architecture-diagram.webp',
    supportingImages: ['/media/services/custom-software/architecture-diagram.svg'],
    shortVideoConcept: 'Modular application architecture building progressively from database schema to role-based operational UI',
    interactiveElement: 'Interactive Architecture Layer & User Role Permission Inspector',
    signatureAnimation: 'Software components snap into a connected multi-layer system during scroll',
    parallaxDirection: 'Vertical stack snap assembly (34px desktop)',
    offset: 34,
    duration: 0.55,
    easing: 'power3.out',
    desktopBehavior: 'Layered software stack assembly + 6s build loop',
    tabletBehavior: '17px offset',
    mobileFallback: 'Vertical 6-layer software stack',
    reducedMotionBehavior: 'Complete software stack assembled immediately'
  },
  '/services/digital-transformation-strategy': {
    route: '/services/digital-transformation-strategy',
    pagePurpose: 'Service 15: Phased modernization roadmap replacing disconnected silos with connected operations',
    existingLayout: 'Transformation Blueprint Hero + 6s Silo-to-System Loop + Legacy-to-Unified Reconnection Stage + Phased Roadmap',
    serviceCategory: 'Technology & Digital Transformation',
    uniqueVisualConcept: 'Existing Process Silos → System Map → Priority Roadmap → Integration Sequence → Modernized Operating Model',
    heroMedia: '/media/services/digital-transformation-strategy/architecture-diagram.webp',
    supportingImages: ['/media/services/digital-transformation-strategy/architecture-diagram.svg'],
    shortVideoConcept: 'Fragmented process silos separating and reconnecting into a unified digital operating architecture',
    interactiveElement: 'Interactive Before/After Silo Reconnection & 4-Phase Roadmap Explorer',
    signatureAnimation: 'Legacy blocks separate and reconnect into a unified system during scroll',
    parallaxDirection: 'Silo separation to unified grid alignment (36px desktop)',
    offset: 36,
    duration: 0.6,
    easing: 'power3.out',
    desktopBehavior: 'Scroll-driven silo-to-system alignment + 6s transformation loop',
    tabletBehavior: '18px offset',
    mobileFallback: 'Vertical before-and-after phase cards',
    reducedMotionBehavior: 'Modernized operating model displayed statically'
  },
  '/approach': {
    route: '/approach',
    pagePurpose: 'Problem-first methodology: Understand → Diagnose → Strategize → Create → Automate → Measure → Improve',
    existingLayout: 'Methodology Hero + Scroll-Advancing 7-Step Spine + Interactive Maze Bypass + Growth Loop + 6 Operating Principles',
    serviceCategory: 'Company Methodology',
    uniqueVisualConcept: '7-Step Problem-First Methodology Spine & Continuous Growth Loop',
    heroMedia: '/media/solutions/digital-transformation/system-blueprint.webp',
    supportingImages: [],
    shortVideoConcept: 'Signal marker bypassing the tool-first maze and advancing through the 7-step methodology',
    interactiveElement: 'Interactive Tool-First vs. Problem-First Maze Toggle + 5-Node Growth Loop Explorer',
    signatureAnimation: 'A progress path advances through the 7-step methodology during scroll',
    parallaxDirection: 'Vertical methodology spine fill + 24px column counter-parallax',
    offset: 24,
    duration: 0.55,
    easing: 'power2.out',
    desktopBehavior: 'Scroll-scrubbed 7-step spine + interactive maze stage',
    tabletBehavior: '12px offset + 2-column framework cards',
    mobileFallback: 'Vertical numbered methodology timeline',
    reducedMotionBehavior: 'Full 7-step path illuminated immediately'
  },
  '/about': {
    route: '/about',
    pagePurpose: 'Editorial brand story: origin, philosophy, building-in-public, human + AI collaboration, and 10 FAQs',
    existingLayout: 'Editorial Brand Story Hero + Chapter Narrative Spine + 4 Foundational Beliefs + Do/Don’t Contrast Ledger + 10 FAQs',
    serviceCategory: 'Company Story',
    uniqueVisualConcept: 'Building From Zero in the Open — Editorial Manifesto & Human + AI Philosophy',
    heroMedia: '/media/solutions/ai-automation/system-blueprint.webp',
    supportingImages: [],
    shortVideoConcept: 'Subtle editorial chapter progression from Zero → Hypothesis → System → Public Proof',
    interactiveElement: 'Interactive Editorial Chapter Switcher + 10-Question Honest FAQ Accordion',
    signatureAnimation: 'Subtle editorial storytelling reveal along a vertical chapter spine',
    parallaxDirection: 'Gentle 20px editorial card counter-parallax',
    offset: 20,
    duration: 0.5,
    easing: 'power2.out',
    desktopBehavior: 'Editorial 2-column manifesto + subtle chapter reveal',
    tabletBehavior: '10px offset',
    mobileFallback: 'Single-column editorial reading flow',
    reducedMotionBehavior: 'All chapters and beliefs visible without motion'
  },
  '/growth-audit': {
    route: '/growth-audit',
    pagePurpose: 'Calm diagnostic experience: Discover → Diagnose → Prioritize → Recommend across 5 assessments',
    existingLayout: 'Diagnostic Hero + 4-Stage Assessment Progress Bar + 6 Evaluation Areas + Interactive Self-Checklist & Form (Zero Parallax on Form)',
    serviceCategory: 'Diagnostic Entry Point',
    uniqueVisualConcept: 'Calm 4-Stage Diagnostic Assessment & Self-Checklist Workstation',
    heroMedia: '/media/solutions/lead-generation/system-blueprint.webp',
    supportingImages: [],
    shortVideoConcept: 'Calm diagnostic progress indicator stepping through Discover → Diagnose → Prioritize → Recommend',
    interactiveElement: '5-Assessment Switcher + Interactive Gap Flagging Checklist + Live Readiness Meter',
    signatureAnimation: 'Calm assessment stage progress transition (zero parallax behind inputs or forms)',
    parallaxDirection: 'None behind form; 16px calm reveal on upper diagnostic cards only',
    offset: 16,
    duration: 0.45,
    easing: 'power2.out',
    desktopBehavior: 'Calm progress feedback + zero-parallax form workstation',
    tabletBehavior: 'Stacked selector and form',
    mobileFallback: 'Single-column touch-friendly checklist and form',
    reducedMotionBehavior: 'Instant tab & checklist state updates'
  },
  '/insights': {
    route: '/insights',
    pagePurpose: 'Editorial knowledge hub: Featured insight, 5 categories, experiments, frameworks, guides, and teardowns',
    existingLayout: 'Editorial Hub Hero + Featured Insight Spotlight + 5 Category Filter + 7 Content Formats + Expandable Journal Ledger',
    serviceCategory: 'Editorial Knowledge Hub',
    uniqueVisualConcept: 'Question → Research → Insight → Action → Solution Editorial Library',
    heroMedia: '/media/solutions/digital-marketing/system-blueprint.webp',
    supportingImages: [],
    shortVideoConcept: 'Content loop progression from Question to Connected Solution',
    interactiveElement: 'Category Filter + Featured Insight Reader + Expandable Key Takeaways',
    signatureAnimation: 'Reading-first editorial card reveal + content loop progress bar',
    parallaxDirection: 'Minimal 16px editorial header offset; reading body static',
    offset: 16,
    duration: 0.45,
    easing: 'power2.out',
    desktopBehavior: 'Featured spotlight split + filterable journal ledger',
    tabletBehavior: 'Stacked spotlight + journal cards',
    mobileFallback: 'Clean single-column reading cards',
    reducedMotionBehavior: 'All articles immediately visible'
  },
  '/contact': {
    route: '/contact',
    pagePurpose: 'Focused conversion layout for project discovery and Digital Growth Audit requests',
    existingLayout: 'Focused Conversion Hero + Zero-Parallax Project Discovery Form + Direct Channels & Self-Paced Exploration Rail',
    serviceCategory: 'Conversion & Discovery',
    uniqueVisualConcept: 'Distraction-Free Conversation & Bottleneck Intake',
    heroMedia: '/media/solutions/websites-ecommerce/system-blueprint.webp',
    supportingImages: [],
    shortVideoConcept: 'None around form (focused conversion mandate)',
    interactiveElement: 'Multi-Area Improvement Chip Selector + Structured Discovery Form',
    signatureAnimation: 'Calm focus state transitions only; zero parallax or video around contact form',
    parallaxDirection: '0px around form (strictly static conversion zone)',
    offset: 0,
    duration: 0.3,
    easing: 'power2.out',
    desktopBehavior: 'Static 2-column conversion layout with zero form parallax',
    tabletBehavior: 'Stacked conversion form and direct channel cards',
    mobileFallback: '44x44px touch-target chips and single-column form',
    reducedMotionBehavior: 'Identical static conversion layout'
  }
};

/**
 * Shared Route-Level GSAP ScrollTrigger & Bounded Parallax Hook
 * Enforces:
 * - Desktop max parallax: 24-52px
 * - Tablet (~50%): 12-26px
 * - Mobile: 0-8px
 * - Disabled inside [data-no-parallax] and when prefers-reduced-motion: reduce is active
 */
export function useRouteMotion(containerRef, routeKey) {
  useEffect(() => {
    if (!containerRef?.current) return undefined;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const width = typeof window !== 'undefined' ? window.innerWidth : 1440;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width <= 1024;
    const scaleFactor = prefersReducedMotion ? 0 : isMobile ? 0.2 : isTablet ? 0.5 : 1;

    const ctx = gsap.context(() => {
      // 1. Bounded Vertical & Horizontal Parallax Layers ([data-rx-parallax-y], [data-rx-parallax-x])
      gsap.utils.toArray('[data-rx-parallax-y], [data-rx-parallax-x]').forEach((el) => {
        if (el.closest('[data-no-parallax]')) return;
        const rawY = Math.max(-52, Math.min(52, parseFloat(el.getAttribute('data-rx-parallax-y') || '0')));
        const rawX = Math.max(-48, Math.min(48, parseFloat(el.getAttribute('data-rx-parallax-x') || '0')));
        const rawRot = Math.max(-3, Math.min(3, parseFloat(el.getAttribute('data-rx-parallax-rot') || '0')));

        if (prefersReducedMotion || (isMobile && Math.abs(rawX) > 0)) {
          gsap.set(el, { x: 0, y: 0, rotate: 0 });
          return;
        }

        const dy = rawY * scaleFactor;
        const dx = rawX * scaleFactor;
        const drot = rawRot * scaleFactor;

        gsap.fromTo(
          el,
          { y: dy, x: dx, rotate: -drot },
          {
            y: -dy,
            x: -dx,
            rotate: drot,
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('[data-rx-section]') || el.parentElement || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.45
            }
          }
        );
      });

      // 2. Scroll-Scrubbed Progress & Pipeline Fills ([data-rx-progress-fill])
      gsap.utils.toArray('[data-rx-progress-fill]').forEach((fill) => {
        if (prefersReducedMotion) {
          gsap.set(fill, { scaleX: 1, scaleY: 1 });
          return;
        }
        const axis = fill.getAttribute('data-rx-axis') || 'x';
        const host = fill.closest('[data-rx-progress-track]') || fill.parentElement;
        gsap.fromTo(
          fill,
          axis === 'y' ? { scaleY: 0.08 } : { scaleX: 0.08 },
          {
            ...(axis === 'y' ? { scaleY: 1 } : { scaleX: 1 }),
            ease: 'none',
            scrollTrigger: {
              trigger: host,
              start: 'top 84%',
              end: 'bottom 32%',
              scrub: 0.35
            }
          }
        );
      });

      // 3. Signature Staggered Stage Items ([data-rx-stage-group])
      gsap.utils.toArray('[data-rx-stage-group]').forEach((group) => {
        const items = group.querySelectorAll('[data-rx-stage-item]');
        if (!items.length) return;
        if (prefersReducedMotion) {
          gsap.set(items, { opacity: 1, y: 0, x: 0, scale: 1 });
          return;
        }
        gsap.fromTo(
          items,
          { opacity: 0.15, y: isMobile ? 10 : 24, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: group,
              start: 'top 86%',
              toggleActions: 'play none none none'
            }
          }
        );
      });
    }, containerRef);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 90);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, [containerRef, routeKey]);
}
