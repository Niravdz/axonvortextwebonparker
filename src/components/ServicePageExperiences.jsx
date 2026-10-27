import React, { useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Sparkles,
  ChevronRight,
  Search,
  MessageSquare,
  Bot,
  Workflow,
  PhoneCall,
  Monitor,
  Smartphone,
  Tablet,
  ShoppingBag,
  Layers,
  Database,
  Code2,
  Compass,
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  ShieldCheck,
  Zap,
  Users,
  Sliders,
  RefreshCw,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { SERVICES_CATALOG, CORE_SOLUTIONS } from '../data/agencyData';
import { useRouteMotion } from '../data/routeMotionMatrix';
import { useSectionMotionEngine } from '../data/motionManifest';
import { ServiceMotionLoopStage } from './ServiceMotionMedia';

function ServiceSupportingVisualBlock({ service }) {
  const webpSrc = `/media/services/${service.slug}/supporting-visual.webp`;
  const svgSrc = `/media/services/${service.slug}/supporting-visual.svg`;
  return (
    <div className="rx-supporting-visual-wrap" style={{ marginTop: 28 }}>
      <div className="rx-diagram-frame">
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={svgSrc}
            alt={`${service.title} before-vs-after diagnostic and 5 execution modules`}
            width="820"
            height="380"
            loading="lazy"
            className="rx-diagram-img"
          />
        </picture>
      </div>
    </div>
  );
}

/**
 * Utility to guarantee readable WCAG text contrast on any brand accent color
 */
export function getReadableTextColor(bgHex = '#f59e0b') {
  const hex = (bgHex || '').toLowerCase();
  if (
    hex === '#0b0f17' ||
    hex === '#091326' ||
    hex === '#132038' ||
    hex === '#2563eb' ||
    hex === '#8b5cf6' ||
    hex === '#ff4d2d' ||
    hex === '#194d15'
  ) {
    return '#ffffff';
  }
  return '#0b0f17';
}

/**
 * Shared Breadcrumb Bar for Service & Pillar Pages
 */
export function ServiceBreadcrumb({ crumbs = [], onNavigate, dark = false }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`svx-breadcrumb ${dark ? 'svx-breadcrumb--dark' : ''}`}
    >
      <button
        type="button"
        className="svx-crumb-btn"
        onClick={() => onNavigate('/')}
      >
        <ArrowLeft size={14} />
        <span>Home</span>
      </button>
      {crumbs.map((c) => (
        <React.Fragment key={c.label}>
          <ChevronRight size={13} className="svx-crumb-sep" />
          {c.route ? (
            <button
              type="button"
              className="svx-crumb-btn"
              onClick={() => onNavigate(c.route)}
            >
              {c.label}
            </button>
          ) : (
            <span className="svx-crumb-current">{c.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

/**
 * Bespoke Interactive Hero Visual for each of the 15 Services
 * Built directly from each service's actual content, flow, and whatWeDo items.
 * All illustrative interfaces are explicitly labeled as illustrative previews.
 */
function ServiceInteractiveVisual({ service, onOpenAudit, onNavigate }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [secondaryIdx, setSecondaryIdx] = useState(0);
  const [viewportMode, setViewportMode] = useState('desktop'); // 'desktop' | 'tablet' | 'mobile'
  const [systemMode, setSystemMode] = useState('connected'); // 'siloed' | 'connected'

  const slug = service.slug;

  // 01 · SOCIAL MEDIA MARKETING — Content Pillar & Platform Adaptation Studio
  if (slug === 'social-media-marketing') {
    const platforms = [
      {
        name: 'Instagram Reels & Carousels',
        role: 'Visual Discovery & Educational Swipe Frameworks',
        pillar: 'Education + Authority',
        stage: '01 Discover → 02 Understand',
        format: '9:16 Vertical Reel + 7-Slide Problem-Solver Carousel',
        action: 'Saves, Shares & Profile Enquiry Tap'
      },
      {
        name: 'LinkedIn Thought Leadership',
        role: 'Commercial Positioning & Decision-Maker Trust',
        pillar: 'Business Problems + Authority',
        stage: '02 Understand → 03 Trust',
        format: 'Strategic Breakdown Post + Architecture Diagram',
        action: 'Direct Message & Audit Consultation'
      },
      {
        name: 'Short-Form Video Systems',
        role: 'High-Reach Problem Identification',
        pillar: 'Education + Conversion',
        stage: '01 Discover → 04 Engage',
        format: 'Hook (0-3s) → Bottleneck Diagnosis → Clear Next Step',
        action: 'Inbound Comment & Bio Funnel Click'
      },
      {
        name: 'Stories & Community DMs',
        role: 'Two-Way Conversation & Enquiry Capture',
        pillar: 'Trust + Conversion',
        stage: '04 Engage → 05 Act',
        format: 'Interactive Diagnostic Polls + Guided DM Triage',
        action: 'Qualified Lead Handoff to CRM'
      }
    ];
    const currentPlat = platforms[activeIdx % platforms.length];

    return (
      <div className="svx-visual-card svx-visual-card--amber">
        <div className="svx-visual-topbar">
          <span className="svx-visual-tag">
            ILLUSTRATIVE CONTENT & PLATFORM STUDIO
          </span>
          <span className="svx-visual-status">
            <span className="svx-dot svx-dot--green" /> 5-STAGE SOCIAL FLOW
          </span>
        </div>

        <div className="svx-tab-row" role="tablist" aria-label="Platform Strategy">
          {platforms.map((p, i) => (
            <button
              key={p.name}
              type="button"
              role="tab"
              aria-selected={activeIdx === i}
              className={`svx-tab-btn ${activeIdx === i ? 'is-active' : ''}`}
              onClick={() => setActiveIdx(i)}
            >
              0{i + 1} · {p.name.split(' ')[0]}
            </button>
          ))}
        </div>

        <div className="svx-studio-preview">
          <div className="svx-studio-header">
            <div>
              <small className="svx-mono-label">PLATFORM-NATIVE FORMAT</small>
              <h4>{currentPlat.name}</h4>
            </div>
            <span className="svx-badge-pill" style={{ background: '#f59e0b', color: '#0b0f17' }}>
              {currentPlat.pillar}
            </span>
          </div>

          <p className="svx-studio-desc">{currentPlat.role}</p>

          <div className="svx-studio-grid-2">
            <div className="svx-studio-box">
              <small>CONTENT STRUCTURE</small>
              <strong>{currentPlat.format}</strong>
            </div>
            <div className="svx-studio-box">
              <small>BUSINESS NEXT STEP</small>
              <strong>{currentPlat.action}</strong>
            </div>
          </div>

          <div className="svx-journey-mini">
            <small className="svx-mono-label">
              AUDIENCE PROGRESSION: {currentPlat.stage}
            </small>
            <div className="svx-flow-pills">
              {service.flow.map((step, i) => {
                const isHighlighted =
                  i === activeIdx || i === (activeIdx + 1) % service.flow.length;
                return (
                  <span
                    key={step}
                    className={`svx-flow-pill ${isHighlighted ? 'is-lit' : ''}`}
                  >
                    0{i + 1} · {step}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 02 · META ADS — Creative Hook-to-Conversion Funnel Lab
  if (slug === 'meta-ads') {
    const angles = [
      {
        name: 'Angle 01 · Problem Diagnosis',
        audience: 'Founders & Marketing Leads with Disconnected Channels',
        hook: '“Spending on ads without knowing what actually drives enquiries?”',
        offer: 'Connected Meta Campaign + Conversion Landing Page',
        tracking: 'Meta Pixel + Conversions API (CAPI) + CRM Stage Sync'
      },
      {
        name: 'Angle 02 · Offer & Value Clarity',
        audience: 'High-Intent Retargeting & Lookalike Segments',
        hook: '“Turn paid social attention into tracked pipeline opportunities.”',
        offer: 'Dedicated Campaign Landing Page with 5-Second Value Clarity',
        tracking: 'Qualified Lead Event Optimization (Not Cheap Clicks)'
      },
      {
        name: 'Angle 03 · Direct Audit Entry',
        audience: 'Businesses Launching Offers or Fixing Ad Waste',
        hook: '“Where is your ad budget leaking between click and customer?”',
        offer: 'Marketing Waste Assessment & Funnel Restructuring',
        tracking: 'Full-Funnel Attribution: Ad → Page → Lead → Revenue'
      }
    ];
    const currentAngle = angles[activeIdx % angles.length];

    return (
      <div className="svx-visual-card svx-visual-card--dark">
        <div className="svx-visual-topbar">
          <span className="svx-visual-tag svx-visual-tag--lime">
            ILLUSTRATIVE META CAMPAIGN ARCHITECTURE
          </span>
          <span className="svx-visual-status">
            <span className="svx-dot svx-dot--red" /> FULL-FUNNEL CAPI SYNC
          </span>
        </div>

        <div className="svx-tab-row" role="tablist" aria-label="Meta Creative Angles">
          {angles.map((a, i) => (
            <button
              key={a.name}
              type="button"
              role="tab"
              aria-selected={activeIdx === i}
              className={`svx-tab-btn svx-tab-btn--dark ${
                activeIdx === i ? 'is-active' : ''
              }`}
              onClick={() => setActiveIdx(i)}
            >
              {a.name}
            </button>
          ))}
        </div>

        <div className="svx-ad-pipeline">
          <div className="svx-ad-stage-card">
            <div className="svx-ad-stage-head">
              <span className="svx-step-chip" style={{ background: '#ff4d2d', color: '#fff' }}>
                01 · AUDIENCE & CREATIVE HOOK
              </span>
              <small>META FEED / REELS</small>
            </div>
            <p className="svx-ad-hook">{currentAngle.hook}</p>
            <small className="svx-ad-meta">Target: {currentAngle.audience}</small>
          </div>

          <div className="svx-conduit-connector">
            <span className="svx-conduit-line" />
            <span className="svx-conduit-badge">MESSAGE CONTINUITY ↓</span>
          </div>

          <div className="svx-ad-stage-card">
            <div className="svx-ad-stage-head">
              <span className="svx-step-chip" style={{ background: '#f59e0b', color: '#000' }}>
                02 · OFFER & LANDING PAGE
              </span>
              <small>CONVERSION DESTINATION</small>
            </div>
            <strong>{currentAngle.offer}</strong>
          </div>

          <div className="svx-conduit-connector">
            <span className="svx-conduit-line" />
            <span className="svx-conduit-badge">CONVERSION SIGNAL LOOP ↓</span>
          </div>

          <div className="svx-ad-stage-card svx-ad-stage-card--mint">
            <div className="svx-ad-stage-head">
              <span className="svx-step-chip" style={{ background: '#0b0f17', color: '#a3e635' }}>
                03 · MEASUREMENT & OPTIMIZATION
              </span>
              <small>VERIFIED SIGNAL</small>
            </div>
            <strong>{currentAngle.tracking}</strong>
          </div>
        </div>
      </div>
    );
  }

  // 03 · GOOGLE ADS — High-Intent Search Query-to-Landing-Page Continuity Lab
  if (slug === 'google-ads') {
    const queries = [
      {
        query: '“custom crm & lead generation agency”',
        intent: 'High Commercial Intent · Solution Seeking',
        adTitle: 'Connected Lead Generation & CRM Systems | AxonVortex',
        adCopy:
          'Turn search demand into qualified enquiries. Strategy, landing pages, CRM integration & conversion tracking.',
        landingHero: 'Build a Lead System That Connects Search to Sales.',
        conversionAction: 'Growth Audit Request + Tracked Lead Event'
      },
      {
        query: '“ai workflow automation for small business”',
        intent: 'Problem-Aware · Operational Efficiency Search',
        adTitle: 'Practical AI & Workflow Automation | Keep Humans in Control',
        adCopy:
          'Eliminate repetitive manual tasks across CRM, email, and customer support with bounded AI workflows.',
        landingHero: 'Automate the Repetitive Work. Keep Humans in Control.',
        conversionAction: 'AI Opportunity Assessment Booking'
      },
      {
        query: '“shopify ecommerce store redesign conversion”',
        intent: 'Transactional Intent · Store Upgrade',
        adTitle: 'Shopify & E-Commerce Development | Built for Conversion',
        adCopy:
          'Custom Shopify stores designed around product discovery, trust architecture, and frictionless checkout.',
        landingHero: 'Turn Your Shopify Store Into a Better Buying Experience.',
        conversionAction: 'Store Conversion Review Enquiry'
      }
    ];
    const currentQ = queries[activeIdx % queries.length];

    return (
      <div className="svx-visual-card svx-visual-card--cream">
        <div className="svx-visual-topbar">
          <span className="svx-visual-tag">
            ILLUSTRATIVE SEARCH INTENT CONTINUITY LAB
          </span>
          <span className="svx-visual-status">
            <span className="svx-dot svx-dot--green" /> INTENT MATCH ACTIVE
          </span>
        </div>

        <div className="svx-search-bar-mock">
          <Search size={16} />
          <span>{currentQ.query}</span>
          <small className="svx-intent-pill">{currentQ.intent}</small>
        </div>

        <div className="svx-tab-row" role="tablist" aria-label="Sample Search Queries">
          {queries.map((q, i) => (
            <button
              key={q.query}
              type="button"
              role="tab"
              aria-selected={activeIdx === i}
              className={`svx-tab-btn ${activeIdx === i ? 'is-active' : ''}`}
              onClick={() => setActiveIdx(i)}
            >
              Search Query 0{i + 1}
            </button>
          ))}
        </div>

        <div className="svx-serp-stack">
          <div className="svx-serp-ad-card">
            <div className="svx-serp-meta">
              <span className="svx-sponsored-tag">Sponsored · Intent-Matched Ad</span>
              <small>axonvortex.com/solutions</small>
            </div>
            <h4>{currentQ.adTitle}</h4>
            <p>{currentQ.adCopy}</p>
          </div>

          <div className="svx-serp-arrow-row">
            <span>100% Message Continuity from Ad Click to Landing Page ↓</span>
          </div>

          <div className="svx-serp-lp-card">
            <div className="svx-serp-meta">
              <span className="svx-lp-tag">Dedicated Campaign Landing Page</span>
              <small>Conversion Tracking Enabled</small>
            </div>
            <h4>{currentQ.landingHero}</h4>
            <div className="svx-serp-lp-foot">
              <span>Tracked Action: {currentQ.conversionAction}</span>
              <CheckCircle2 size={16} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 04 · SEO — Site Structure, Search Intent & Crawl Visibility Explorer
  if (slug === 'seo') {
    const seoLayers = [
      {
        id: '01',
        title: 'Technical SEO Foundation',
        focus: 'Crawlability, Indexation & Site Architecture',
        nodes: [
          'Clean URL & Internal Link Hierarchy',
          'Core Web Vitals & Mobile Speed',
          'Structured Schema Markup',
          'Crawl Budget & Index Hygiene'
        ],
        outcome: 'Search engines can effortlessly crawl, parse, and index every commercial page.'
      },
      {
        id: '02',
        title: 'Search Intent & On-Page Relevance',
        focus: 'Aligning Pages With Real Customer Queries',
        nodes: [
          'Commercial & Problem-Aware Keyword Mapping',
          'Semantic Heading & Topic Structure',
          'Dedicated Service & Solution Architecture',
          'Clear Value Proposition & Engagement Signals'
        ],
        outcome: 'Each page directly answers the specific search intent behind high-value queries.'
      },
      {
        id: '03',
        title: 'Content Authority & Local Visibility',
        focus: 'Compounding Organic Discovery & Conversion',
        nodes: [
          'Educational Guides & Problem-Solving Content',
          'Local Search Presence & Geographic Relevance',
          'Internal Topic Clusters → Solution Pages',
          'Organic Visitor → Enquiry Conversion Path'
        ],
        outcome: 'Sustainable search visibility that compounds over time and brings qualified buyers.'
      }
    ];
    const currentLayer = seoLayers[activeIdx % seoLayers.length];

    return (
      <div className="svx-visual-card svx-visual-card--mint">
        <div className="svx-visual-topbar">
          <span className="svx-visual-tag">
            ILLUSTRATIVE SEARCH ARCHITECTURE EXPLORER
          </span>
          <span className="svx-visual-status">
            <span className="svx-dot svx-dot--green" /> ORGANIC DISCOVERY TREE
          </span>
        </div>

        <div className="svx-tab-row" role="tablist" aria-label="SEO Architecture Layers">
          {seoLayers.map((l, i) => (
            <button
              key={l.id}
              type="button"
              role="tab"
              aria-selected={activeIdx === i}
              className={`svx-tab-btn ${activeIdx === i ? 'is-active' : ''}`}
              onClick={() => setActiveIdx(i)}
            >
              Layer {l.id} · {l.title.split(' ')[0]}
            </button>
          ))}
        </div>

        <div className="svx-seo-tree-box">
          <div className="svx-seo-root-node">
            <Globe size={16} />
            <strong>{currentLayer.title}</strong>
            <small>{currentLayer.focus}</small>
          </div>

          <div className="svx-seo-branches">
            {currentLayer.nodes.map((n, i) => (
              <div key={n} className="svx-seo-branch-node">
                <span className="svx-branch-code">0{i + 1}</span>
                <span>{n}</span>
              </div>
            ))}
          </div>

          <div className="svx-seo-outcome-bar">
            <strong>Architectural Result:</strong> {currentLayer.outcome}
          </div>
        </div>
      </div>
    );
  }

  // 05 · AI CHATBOTS — Interactive Grounded Conversation & Escalation Simulator
  if (slug === 'ai-chatbots') {
    const scenarios = [
      {
        tab: '01 · Common Questions',
        visitorMsg: '“Do you work with existing CRM systems or only build new ones?”',
        botReply:
          '“We work with your existing systems wherever appropriate. We audit your current CRM, website, and workflows first before recommending changes.”',
        knowledgeSource: 'Approved FAQ & Service Scope Knowledge Base',
        nextAction: 'Offers link to CRM Service or Digital Growth Audit',
        escalation: 'Automated Grounded Response (0.8s)'
      },
      {
        tab: '02 · Guide Visitors',
        visitorMsg: '“We get website traffic, but very few visitors actually enquire.”',
        botReply:
          '“That usually points to a conversion or lead-capture gap. Would you like to explore our Website Conversion Checklist or Lead Generation systems?”',
        knowledgeSource: 'Problem-to-Solution Routing Matrix',
        nextAction: 'Guides visitor to Lead Generation & Website Conversion',
        escalation: 'Guided Discovery Flow'
      },
      {
        tab: '03 · Qualify Leads',
        visitorMsg: '“We want to automate lead follow-up and appointment booking.”',
        botReply:
          '“We can help with that. To point you to the right specialist, roughly how many inbound enquiries does your team handle each week?”',
        knowledgeSource: 'Pre-Call Lead Qualification Ruleset',
        nextAction: 'Captures business context + routes to CRM pipeline',
        escalation: 'Qualified Opportunity Scored'
      },
      {
        tab: '04 · Human Handoff',
        visitorMsg: '“We need a custom multi-department ERP & software integration.”',
        botReply:
          '“That requires custom architectural scoping. I’ve summarized your requirements and connected our strategy team—pick a discovery slot or leave your email.”',
        knowledgeSource: 'Complex Scope Escalation Boundary',
        nextAction: 'Instant Slack/CRM brief + Human Strategist Handoff',
        escalation: 'Human-in-the-Loop Escalation Triggered ✓'
      }
    ];
    const currentChat = scenarios[activeIdx % scenarios.length];

    return (
      <div className="svx-visual-card svx-visual-card--purple">
        <div className="svx-visual-topbar">
          <span className="svx-visual-tag">
            ILLUSTRATIVE CONVERSATION & GROUNDING SANDBOX
          </span>
          <span className="svx-visual-status">
            <span className="svx-dot svx-dot--green" /> HUMAN + AI GUARDRAILS
          </span>
        </div>

        <div className="svx-tab-row" role="tablist" aria-label="Chatbot Scenarios">
          {scenarios.map((s, i) => (
            <button
              key={s.tab}
              type="button"
              role="tab"
              aria-selected={activeIdx === i}
              className={`svx-tab-btn ${activeIdx === i ? 'is-active' : ''}`}
              onClick={() => setActiveIdx(i)}
            >
              {s.tab}
            </button>
          ))}
        </div>

        <div className="svx-chat-simulator">
          <div className="svx-chat-thread">
            <div className="svx-chat-bubble svx-chat-bubble--user">
              <small>WEBSITE VISITOR</small>
              <p>{currentChat.visitorMsg}</p>
            </div>
            <div className="svx-chat-bubble svx-chat-bubble--bot">
              <small>AXONVORTEX GROUNDED AI ASSISTANT</small>
              <p>{currentChat.botReply}</p>
            </div>
          </div>

          <div className="svx-chat-telemetry">
            <div className="svx-telemetry-row">
              <small>APPROVED KNOWLEDGE SOURCE</small>
              <strong>{currentChat.knowledgeSource}</strong>
            </div>
            <div className="svx-telemetry-row">
              <small>CONVERSATION NEXT STEP</small>
              <strong>{currentChat.nextAction}</strong>
            </div>
            <div className="svx-telemetry-row svx-telemetry-row--highlight">
              <small>CONTROL MODE</small>
              <strong>{currentChat.escalation}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 06 · AI AGENTS — Bounded Autonomous Task Execution Console
  if (slug === 'ai-agents') {
    const tasks = [
      {
        role: '01 · Sales Assistance Agent',
        task: 'Enrich inbound B2B enquiry & prepare pre-call brief',
        steps: [
          '1. Understand Task: New enquiry received from company domain',
          '2. Access Info: Retrieve website profile & historical CRM notes',
          '3. Bounded Decision: Match against ICP qualification criteria',
          '4. Perform Action: Populate structured CRM brief & assign owner',
          '5. Report Outcome: Send summary to sales rep in Slack'
        ]
      },
      {
        role: '02 · Customer Support Agent',
        task: 'Triage support ticket & draft grounded resolution',
        steps: [
          '1. Understand Task: Classify customer issue category & urgency',
          '2. Access Info: Query approved product documentation & order status',
          '3. Bounded Decision: Verify if resolution is standard or needs human review',
          '4. Perform Action: Prepare accurate response or escalate tier-2 ticket',
          '5. Report Outcome: Log resolution state in support dashboard'
        ]
      },
      {
        role: '03 · Research & Knowledge Agent',
        task: 'Synthesize internal operational documents & surface answers',
        steps: [
          '1. Understand Task: Parse team query across internal SOPs',
          '2. Access Info: Search connected knowledge base & project records',
          '3. Bounded Decision: Filter to verified, up-to-date policy sources',
          '4. Perform Action: Compile structured summary with exact citations',
          '5. Report Outcome: Deliver synthesized brief to team member'
        ]
      }
    ];
    const currentTask = tasks[activeIdx % tasks.length];

    return (
      <div className="svx-visual-card svx-visual-card--dark">
        <div className="svx-visual-topbar">
          <span className="svx-visual-tag svx-visual-tag--lime">
            ILLUSTRATIVE AI AGENT TASK RUNNER
          </span>
          <span className="svx-visual-status">
            <span className="svx-dot svx-dot--green" /> RULE-BOUNDED EXECUTION
          </span>
        </div>

        <div className="svx-tab-row" role="tablist" aria-label="AI Agent Workflows">
          {tasks.map((t, i) => (
            <button
              key={t.role}
              type="button"
              role="tab"
              aria-selected={activeIdx === i}
              className={`svx-tab-btn svx-tab-btn--dark ${
                activeIdx === i ? 'is-active' : ''
              }`}
              onClick={() => setActiveIdx(i)}
            >
              {t.role}
            </button>
          ))}
        </div>

        <div className="svx-agent-console">
          <div className="svx-agent-task-header">
            <small>ASSIGNED WORKFLOW OBJECTIVE</small>
            <h4>{currentTask.task}</h4>
          </div>

          <div className="svx-agent-steps-list">
            {currentTask.steps.map((st, idx) => (
              <div
                key={st}
                className={`svx-agent-step-row ${
                  secondaryIdx === idx ? 'is-focused' : ''
                }`}
                onClick={() => setSecondaryIdx(idx)}
              >
                <span className="svx-agent-step-num">0{idx + 1}</span>
                <span className="svx-agent-step-text">{st}</span>
                <Check size={14} className="svx-agent-check" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 07 · WORKFLOW AUTOMATION — Cross-System Node Orchestrator (Manual vs Automated)
  if (slug === 'workflow-automation') {
    const workflows = [
      {
        name: 'Lead Routing Workflow',
        manual: 'Form email sits in inbox → manual copy-paste to spreadsheet → slow reply hours later.',
        automated: [
          'Enquiry Captured',
          'AI Classifies Intent',
          'CRM Deal Created',
          'Team Notified in Slack',
          'Instant Personalized Reply'
        ]
      },
      {
        name: 'Customer Onboarding Workflow',
        manual: 'Rep manually creates folders, sends welcome email, and updates project tracker by hand.',
        automated: [
          'Proposal Approved',
          'Client Record Updated',
          'Onboarding Portal Provisioned',
          'Welcome Sequence Sent',
          'Kickoff Task Assigned'
        ]
      },
      {
        name: 'Internal Reporting & Sync',
        manual: 'Team spends Friday afternoon exporting CSVs from 4 tools to update status sheets.',
        automated: [
          'Cross-Tool Data Sync',
          'Records Normalized',
          'Exceptions Flagged for Human',
          'Live Dashboard Updated',
          'Weekly Digest Delivered'
        ]
      }
    ];
    const currentWf = workflows[activeIdx % workflows.length];

    return (
      <div className="svx-visual-card svx-visual-card--mint">
        <div className="svx-visual-topbar">
          <span className="svx-visual-tag">
            ILLUSTRATIVE WORKFLOW ORCHESTRATOR
          </span>
          <div className="svx-mode-switch">
            <button
              type="button"
              className={`svx-mini-toggle ${
                systemMode === 'siloed' ? 'is-active-red' : ''
              }`}
              onClick={() => setSystemMode('siloed')}
            >
              Manual Friction
            </button>
            <button
              type="button"
              className={`svx-mini-toggle ${
                systemMode === 'connected' ? 'is-active-green' : ''
              }`}
              onClick={() => setSystemMode('connected')}
            >
              Automated Flow
            </button>
          </div>
        </div>

        <div className="svx-tab-row" role="tablist" aria-label="Workflow Types">
          {workflows.map((w, i) => (
            <button
              key={w.name}
              type="button"
              role="tab"
              aria-selected={activeIdx === i}
              className={`svx-tab-btn ${activeIdx === i ? 'is-active' : ''}`}
              onClick={() => setActiveIdx(i)}
            >
              0{i + 1} · {w.name}
            </button>
          ))}
        </div>

        {systemMode === 'siloed' ? (
          <div className="svx-manual-warning-box">
            <div className="svx-warning-head">
              <AlertCircle size={18} />
              <strong>BEFORE: REPETITIVE MANUAL ADMINISTRATION</strong>
            </div>
            <p>{currentWf.manual}</p>
            <button
              type="button"
              className="svx-switch-action-btn"
              onClick={() => setSystemMode('connected')}
            >
              Switch to Automated Workflow →
            </button>
          </div>
        ) : (
          <div className="svx-node-chain-box">
            <small className="svx-mono-label">
              AFTER: CONNECTED AUTOMATION WITH HUMAN OVERSIGHT
            </small>
            <div className="svx-workflow-nodes-grid">
              {currentWf.automated.map((node, i) => (
                <div key={node} className="svx-wf-node-card">
                  <span className="svx-wf-step">STEP 0{i + 1}</span>
                  <strong>{node}</strong>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // 08 · VOICE AI — Intelligent Call Workflow & Structured Capture Console
  if (slug === 'voice-ai') {
    const calls = [
      {
        title: 'Appointment Booking Call',
        caller: '“Hi, I’d like to schedule a consultation for next Tuesday afternoon.”',
        voiceAi:
          '“I can help schedule that right away. I have Tuesday at 2:30 PM or 4:00 PM open—which works best for you?”',
        captured: {
          workflow: 'Appointment Handling',
          intent: 'Consultation Booking',
          status: 'Slot Confirmed + Calendar Synced',
          escalation: 'No human interruption needed'
        }
      },
      {
        title: 'Inbound Lead Qualification',
        caller: '“We’re looking to overhaul our website and set up automated lead routing.”',
        voiceAi:
          '“Got it—website modernization and lead automation. May I ask your business name and timeline so I can brief our strategy specialist?”',
        captured: {
          workflow: 'Lead Qualification',
          intent: 'Website + Lead Automation',
          status: 'Structured Lead Record Created in CRM',
          escalation: 'Routed to Strategy Team with Transcript'
        }
      },
      {
        title: 'Human Escalation Handoff',
        caller: '“I have an urgent question about a custom enterprise integration contract.”',
        voiceAi:
          '“Let me connect you directly with our account lead right now and pass along your call details so you don’t have to repeat yourself.”',
        captured: {
          workflow: 'Defined Boundary Escalation',
          intent: 'Complex Contract Query',
          status: 'Warm Transfer to Human Specialist',
          escalation: 'Immediate Human Escalation Path ✓'
        }
      }
    ];
    const currentCall = calls[activeIdx % calls.length];

    return (
      <div className="svx-visual-card svx-visual-card--dark">
        <div className="svx-visual-topbar">
          <span className="svx-visual-tag svx-visual-tag--lime">
            ILLUSTRATIVE VOICE AI CALL CONSOLE
          </span>
          <span className="svx-visual-status">
            <PhoneCall size={13} /> DEFINED VOICE WORKFLOW
          </span>
        </div>

        <div className="svx-tab-row" role="tablist" aria-label="Voice AI Scenarios">
          {calls.map((c, i) => (
            <button
              key={c.title}
              type="button"
              role="tab"
              aria-selected={activeIdx === i}
              className={`svx-tab-btn svx-tab-btn--dark ${
                activeIdx === i ? 'is-active' : ''
              }`}
              onClick={() => setActiveIdx(i)}
            >
              0{i + 1} · {c.title}
            </button>
          ))}
        </div>

        <div className="svx-voice-stage">
          <div className="svx-waveform-bar" aria-hidden="true">
            {[28, 52, 36, 74, 48, 86, 62, 40, 78, 54, 32, 64, 44, 70, 34].map(
              (h, idx) => (
                <span
                  key={idx}
                  className="svx-wave-bar"
                  style={{
                    height: `${Math.max(18, (h + activeIdx * 17) % 85)}%`
                  }}
                />
              )
            )}
          </div>

          <div className="svx-voice-transcript">
            <div className="svx-voice-line">
              <span className="svx-voice-speaker">CALLER</span>
              <p>{currentCall.caller}</p>
            </div>
            <div className="svx-voice-line svx-voice-line--ai">
              <span className="svx-voice-speaker">VOICE AI</span>
              <p>{currentCall.voiceAi}</p>
            </div>
          </div>

          <div className="svx-voice-capture-grid">
            <div>
              <small>WORKFLOW</small>
              <strong>{currentCall.captured.workflow}</strong>
            </div>
            <div>
              <small>STRUCTURED CAPTURE</small>
              <strong>{currentCall.captured.status}</strong>
            </div>
            <div>
              <small>BOUNDARY / ESCALATION</small>
              <strong>{currentCall.captured.escalation}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 09 · WEBSITE DEVELOPMENT — Interactive Responsive Viewport & 5-Requirement Anatomy Preview
  if (slug === 'website-development') {
    const hotspots = [
      {
        code: '01',
        label: 'Explain What You Do',
        detail: '5-second value clarity in the hero headline and subheadline so visitors immediately understand your offer.'
      },
      {
        code: '02',
        label: 'Differentiate Why Choose You',
        detail: 'Clear strategic positioning and problem-first architecture that separates your business from generic competitors.'
      },
      {
        code: '03',
        label: 'Build Credibility & Trust',
        detail: 'Structured service breakdowns, transparent process steps, and fast, reliable mobile responsiveness.'
      },
      {
        code: '04',
        label: 'Create a Clear Next Action',
        detail: 'Frictionless enquiry paths and conversion-focused CTAs placed at every natural decision point.'
      },
      {
        code: '05',
        label: 'Connect to Growth System',
        detail: 'Integrated directly with lead capture forms, CRM pipelines, analytics, and automated follow-up.'
      }
    ];
    const currentSpot = hotspots[activeIdx % hotspots.length];

    return (
      <div className="svx-visual-card svx-visual-card--blue">
        <div className="svx-visual-topbar">
          <span className="svx-visual-tag">
            ILLUSTRATIVE RESPONSIVE WEBSITE PREVIEW
          </span>
          <div className="svx-viewport-switcher" role="group" aria-label="Viewport Size">
            <button
              type="button"
              className={`svx-vp-btn ${viewportMode === 'desktop' ? 'is-active' : ''}`}
              onClick={() => setViewportMode('desktop')}
            >
              <Monitor size={13} /> Desktop
            </button>
            <button
              type="button"
              className={`svx-vp-btn ${viewportMode === 'tablet' ? 'is-active' : ''}`}
              onClick={() => setViewportMode('tablet')}
            >
              <Tablet size={13} /> Tablet
            </button>
            <button
              type="button"
              className={`svx-vp-btn ${viewportMode === 'mobile' ? 'is-active' : ''}`}
              onClick={() => setViewportMode('mobile')}
            >
              <Smartphone size={13} /> Mobile
            </button>
          </div>
        </div>

        <div className={`svx-browser-frame svx-browser-frame--${viewportMode}`}>
          <div className="svx-browser-chrome">
            <div className="svx-chrome-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="svx-chrome-url">
              yourbusiness.com · {viewportMode.toUpperCase()} VIEW
            </div>
          </div>

          <div className="svx-wireframe-canvas">
            <div className="svx-wf-hero-mock">
              <span className="svx-wf-pill">01 · CLEAR VALUE PROPOSITION</span>
              <h5>Explain What You Do & Why It Matters</h5>
              <div className="svx-wf-cta-row">
                <span className="svx-wf-btn-primary">04 · Primary Action CTA</span>
                <span className="svx-wf-btn-sec">02 · Differentiator</span>
              </div>
            </div>

            <div className="svx-wf-cards-row">
              <div className="svx-wf-mini-card">
                <small>03 · TRUST</small>
                <strong>Structured Proof</strong>
              </div>
              <div className="svx-wf-mini-card">
                <small>05 · INTEGRATION</small>
                <strong>CRM + Analytics Sync</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="svx-hotspot-selector">
          <div className="svx-tab-row">
            {hotspots.map((h, i) => (
              <button
                key={h.code}
                type="button"
                className={`svx-tab-btn ${activeIdx === i ? 'is-active' : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                {h.code} · {h.label.split(' ')[0]}
              </button>
            ))}
          </div>
          <div className="svx-hotspot-detail">
            <strong>
              {currentSpot.code} · {currentSpot.label}:
            </strong>{' '}
            <span>{currentSpot.detail}</span>
          </div>
        </div>
      </div>
    );
  }

  // 10 · E-COMMERCE DEVELOPMENT — 5-Stage Customer Buying Experience Simulator
  if (slug === 'ecommerce-development') {
    const buyingStages = [
      {
        stage: '01 · Discover',
        uiTitle: 'Intuitive Category & Search Discovery',
        desc: 'Customers find the right product quickly through clean catalog architecture, smart filters, and mobile-first navigation.',
        elements: ['Intent-driven category filters', 'Fast mobile product grid', 'Clear pricing & availability']
      },
      {
        stage: '02 · Evaluate',
        uiTitle: 'Clear Product Presentation & Information',
        desc: 'High-clarity product pages answer buyer questions before hesitation sets in.',
        elements: ['Structured specifications & benefits', 'Variant & sizing clarity', 'Use-case & comparison context']
      },
      {
        stage: '03 · Trust',
        uiTitle: 'Purchase Confidence & Proof Architecture',
        desc: 'Eliminate uncertainty with transparent shipping, returns, payment security, and authentic customer proof.',
        elements: ['Transparent shipping & return policies', 'Verified buyer reviews', 'Trust & payment badges']
      },
      {
        stage: '04 · Purchase',
        uiTitle: 'Frictionless Cart & Checkout Flow',
        desc: 'Reduce cart abandonment by removing unnecessary form steps and supporting express payment methods.',
        elements: ['Slide-out conversion cart', ' Minimal-step guest checkout', 'Express payment integration']
      },
      {
        stage: '05 · Return',
        uiTitle: 'Post-Purchase & Repeat Customer Loop',
        desc: 'Connect order data to CRM and automated post-purchase follow-ups so first-time buyers return.',
        elements: ['Automated order status updates', 'CRM customer profile sync', 'Replenishment & retention flows']
      }
    ];
    const currentBuy = buyingStages[activeIdx % buyingStages.length];

    return (
      <div className="svx-visual-card svx-visual-card--mint">
        <div className="svx-visual-topbar">
          <span className="svx-visual-tag">
            ILLUSTRATIVE E-COMMERCE BUYING JOURNEY
          </span>
          <span className="svx-visual-status">
            <ShoppingBag size={13} /> DISCOVER → RETURN
          </span>
        </div>

        <div className="svx-tab-row" role="tablist" aria-label="Buying Journey Stages">
          {buyingStages.map((b, i) => (
            <button
              key={b.stage}
              type="button"
              role="tab"
              aria-selected={activeIdx === i}
              className={`svx-tab-btn ${activeIdx === i ? 'is-active' : ''}`}
              onClick={() => setActiveIdx(i)}
            >
              {b.stage}
            </button>
          ))}
        </div>

        <div className="svx-ecom-stage-card">
          <div className="svx-ecom-head">
            <span className="svx-badge-pill" style={{ background: '#a3e635', color: '#0b0f17' }}>
              STAGE {currentBuy.stage}
            </span>
            <h4>{currentBuy.uiTitle}</h4>
          </div>
          <p>{currentBuy.desc}</p>
          <div className="svx-ecom-checks">
            {currentBuy.elements.map((el) => (
              <div key={el} className="svx-ecom-check-item">
                <Check size={14} />
                <span>{el}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 11 · SHOPIFY DEVELOPMENT — Modular 5-Pillar Shopify Formula Builder
  if (slug === 'shopify-development') {
    const formulaParts = [
      {
        part: '01 · Positioning',
        title: 'Brand Positioning & Store Architecture',
        detail: 'We structure your Shopify store around what makes your brand distinct—not a generic off-the-shelf template.'
      },
      {
        part: '02 · Product Experience',
        title: 'Organized Catalog & Custom PDP Sections',
        detail: 'Custom Shopify 2.0 sections, rich media galleries, bundle logic, and clear product storytelling.'
      },
      {
        part: '03 · Customer Journey',
        title: 'Intuitive Navigation & Collection Flows',
        detail: 'Seamless path from landing page or collection grid into product evaluation and slide-out cart.'
      },
      {
        part: '04 · Marketing',
        title: 'Connected Ad Pixels, SEO & Email/CRM Sync',
        detail: 'Server-side tracking, clean Shopify SEO structure, and automated lifecycle marketing integration.'
      },
      {
        part: '05 · Conversion',
        title: 'Checkout Optimization & Speed Performance',
        detail: 'Fast theme execution, streamlined checkout UX, and continuous conversion rate optimization.'
      }
    ];
    const currentPart = formulaParts[activeIdx % formulaParts.length];

    return (
      <div className="svx-visual-card svx-visual-card--purple">
        <div className="svx-visual-topbar">
          <span className="svx-visual-tag">
            ILLUSTRATIVE SHOPIFY STORE ARCHITECTURE
          </span>
          <span className="svx-visual-status">5-PART SHOPIFY FORMULA</span>
        </div>

        <div className="svx-formula-bar">
          {formulaParts.map((fp, i) => (
            <button
              key={fp.part}
              type="button"
              className={`svx-formula-node ${activeIdx === i ? 'is-active' : ''}`}
              onClick={() => setActiveIdx(i)}
            >
              <small>{fp.part.split(' · ')[0]}</small>
              <strong>{fp.part.split(' · ')[1]}</strong>
            </button>
          ))}
        </div>

        <div className="svx-shopify-preview">
          <div className="svx-shopify-store-mock">
            <div className="svx-shopify-header-mock">
              <span>BRAND STOREFRONT</span>
              <span>COLLECTION · PDP · CART</span>
            </div>
            <div className="svx-shopify-body-mock">
              <span className="svx-step-chip" style={{ background: '#8b5cf6', color: '#fff' }}>
                ACTIVE LAYER: {currentPart.part.toUpperCase()}
              </span>
              <h4>{currentPart.title}</h4>
              <p>{currentPart.detail}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 12 · LEAD GENERATION — End-to-End Lead Pipeline & Leak Diagnostic Simulator
  if (slug === 'lead-generation') {
    const leaks = [
      {
        stage: '01 · Traffic Without Enquiries',
        leak: 'Visitors land on a generic page with unclear messaging and leave without taking action.',
        fix: 'Audience-Offer Alignment + Dedicated Campaign Landing Pages'
      },
      {
        stage: '02 · Enquiries Without Follow-Up',
        leak: 'Form submissions sit in an email inbox for hours or days while the prospect moves on.',
        fix: 'Instant Automated SMS & Email Response + Real-Time Team Alert'
      },
      {
        stage: '03 · Leads Without Qualification',
        leak: 'Sales teams waste hours chasing low-fit enquiries with no context on budget or need.',
        fix: 'Structured Lead Capture + Pre-Call Qualification Questions'
      },
      {
        stage: '04 · Qualified Leads Without Process',
        leak: 'High-intent opportunities fall through the cracks in scattered spreadsheets.',
        fix: 'CRM Pipeline Integration + Automated Stage Follow-Up'
      }
    ];
    const currentLeak = leaks[activeIdx % leaks.length];

    return (
      <div className="svx-visual-card svx-visual-card--dark">
        <div className="svx-visual-topbar">
          <span className="svx-visual-tag svx-visual-tag--lime">
            ILLUSTRATIVE LEAD SYSTEM DIAGNOSTIC
          </span>
          <span className="svx-visual-status">7-STAGE LEAD PIPELINE</span>
        </div>

        <div className="svx-tab-row" role="tablist" aria-label="Lead System Breakdowns">
          {leaks.map((l, i) => (
            <button
              key={l.stage}
              type="button"
              role="tab"
              aria-selected={activeIdx === i}
              className={`svx-tab-btn svx-tab-btn--dark ${
                activeIdx === i ? 'is-active' : ''
              }`}
              onClick={() => setActiveIdx(i)}
            >
              Gap 0{i + 1}
            </button>
          ))}
        </div>

        <div className="svx-lead-comparison">
          <div className="svx-lead-box svx-lead-box--leak">
            <small>COMMON BREAKDOWN: {currentLeak.stage.toUpperCase()}</small>
            <p>{currentLeak.leak}</p>
          </div>
          <div className="svx-lead-box svx-lead-box--fix">
            <small>CONNECTED AXONVORTEX LEAD SYSTEM FIX</small>
            <strong>{currentLeak.fix}</strong>
          </div>
        </div>

        <div className="svx-flow-pills" style={{ marginTop: 12 }}>
          {service.flow.map((node, i) => (
            <span
              key={node}
              className={`svx-flow-pill svx-flow-pill--dark ${
                i <= activeIdx + 2 ? 'is-lit' : ''
              }`}
            >
              0{i + 1} · {node}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // 13 · CRM — Organized Dashboard View & 5 Customer Questions Inspector
  if (slug === 'crm') {
    const crmQuestions = [
      {
        q: '01 · Who is this customer?',
        module: 'Unified Customer Profile & Source Attribution',
        view: 'Company profile, contact stakeholders, acquisition channel, and initial enquiry problem statement in one record.'
      },
      {
        q: '02 · Where are they in the journey?',
        module: 'Structured Sales Pipeline Stage',
        view: 'Visual pipeline stage (New Enquiry → Qualified → Discovery Complete → Proposal Sent → Won) with zero ambiguity.'
      },
      {
        q: '03 · What happened previously?',
        module: 'Complete Interaction & Activity Timeline',
        view: 'Every email, call note, form submission, and website visit logged chronologically in a single view.'
      },
      {
        q: '04 · What should happen next?',
        module: 'Automated Next-Action & Task Triggers',
        view: 'Scheduled follow-up task, automated nurture reminder, and clear deadline so no opportunity stalls.'
      },
      {
        q: '05 · Who owns the opportunity?',
        module: 'Clear Team Ownership & Routing Rules',
        view: 'Assigned account owner, automated round-robin or territory routing, and SLA notifications.'
      }
    ];
    const currentCrm = crmQuestions[activeIdx % crmQuestions.length];

    return (
      <div className="svx-visual-card svx-visual-card--blue">
        <div className="svx-visual-topbar">
          <span className="svx-visual-tag">
            ILLUSTRATIVE CRM DASHBOARD & PIPELINE VIEW
          </span>
          <span className="svx-visual-status">
            <Database size={13} /> SINGLE SOURCE OF TRUTH
          </span>
        </div>

        <div className="svx-crm-kanban-mini">
          {['New Enquiry', 'Qualified', 'Proposal', 'Follow-Up', 'Won'].map(
            (col, i) => (
              <div
                key={col}
                className={`svx-kanban-col ${activeIdx === i ? 'is-active' : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                <small>STAGE 0{i + 1}</small>
                <strong>{col}</strong>
              </div>
            )
          )}
        </div>

        <div className="svx-crm-record-card">
          <div className="svx-crm-record-head">
            <span className="svx-badge-pill" style={{ background: '#2563eb', color: '#fff' }}>
              QUESTION {currentCrm.q}
            </span>
            <small>CONNECTED CRM MODULE</small>
          </div>
          <h4>{currentCrm.module}</h4>
          <p>{currentCrm.view}</p>
        </div>
      </div>
    );
  }

  // 14 · CUSTOM SOFTWARE — 4-Mode Custom Application & API Architecture Studio
  if (slug === 'custom-software') {
    const modes = [
      {
        title: '01 · Business Applications',
        subtitle: 'Software Built Around Your Specific Operating Model',
        modules: ['Custom domain logic & rules', 'Role-based team workspaces', 'Real-time operational dashboards'],
        bridge: 'Replaces rigid off-the-shelf workarounds with purpose-built workflows.'
      },
      {
        title: '02 · Internal Workflow Tools',
        subtitle: 'Specialized Operations & Fulfilment Consoles',
        modules: ['Multi-step approval queues', 'Automated task handoffs', 'Exception & quality tracking'],
        bridge: 'Eliminates manual spreadsheet coordination across departments.'
      },
      {
        title: '03 · Customer & Partner Portals',
        subtitle: 'Self-Service Digital Experiences for Stakeholders',
        modules: ['Secure client login & status views', 'Document & request submission', 'Live project or order tracking'],
        bridge: 'Reduces inbound support emails while improving customer transparency.'
      },
      {
        title: '04 · API & System Integrations',
        subtitle: 'Custom Data Bridges Between Existing Platforms',
        modules: ['Bi-directional webhook & REST sync', 'Legacy software connectors', 'Automated data validation'],
        bridge: 'Makes your existing CRM, ERP, website, and billing tools communicate.'
      }
    ];
    const currentMode = modes[activeIdx % modes.length];

    return (
      <div className="svx-visual-card svx-visual-card--dark">
        <div className="svx-visual-topbar">
          <span className="svx-visual-tag svx-visual-tag--lime">
            ILLUSTRATIVE CUSTOM SOFTWARE BLUEPRINT
          </span>
          <span className="svx-visual-status">
            <Code2 size={13} /> BESPOKE ARCHITECTURE
          </span>
        </div>

        <div className="svx-tab-row" role="tablist" aria-label="Custom Software Modes">
          {modes.map((m, i) => (
            <button
              key={m.title}
              type="button"
              role="tab"
              aria-selected={activeIdx === i}
              className={`svx-tab-btn svx-tab-btn--dark ${
                activeIdx === i ? 'is-active' : ''
              }`}
              onClick={() => setActiveIdx(i)}
            >
              {m.title}
            </button>
          ))}
        </div>

        <div className="svx-software-preview">
          <h4>{currentMode.subtitle}</h4>
          <div className="svx-software-modules">
            {currentMode.modules.map((mod, i) => (
              <div key={mod} className="svx-software-mod-card">
                <small>MODULE 0{i + 1}</small>
                <strong>{mod}</strong>
              </div>
            ))}
          </div>
          <div className="svx-software-bridge">
            <strong>Practical Business Value:</strong> {currentMode.bridge}
          </div>
        </div>
      </div>
    );
  }

  // 15 · DIGITAL TRANSFORMATION STRATEGY — Operational Bottleneck Map & Sequenced Roadmap
  const roadmapPhases = [
    {
      step: '01 · Understand & 02 · Map',
      title: 'Operational Audit & Silo Mapping',
      before: 'Disconnected tools, spreadsheets, duplicate data entry, and unclear visibility.',
      after: 'Complete map of how information, customers, and tasks flow across the business.'
    },
    {
      step: '03 · Prioritize & 04 · Design',
      title: 'Impact vs. Complexity Future-State Blueprint',
      before: 'Buying random software subscriptions without solving the underlying bottleneck.',
      after: 'Sequenced roadmap prioritizing high-impact, practical workflow improvements first.'
    },
    {
      step: '05 · Build & 06 · Improve',
      title: 'Connected Implementation & Iterative Refinement',
      before: 'Disruptive “big bang” software rollouts that teams struggle to adopt.',
      after: 'Phased implementation connecting CRM, ERP, automation, and reporting.'
    }
  ];
  const currentPhase = roadmapPhases[activeIdx % roadmapPhases.length];

  return (
    <div className="svx-visual-card svx-visual-card--amber">
      <div className="svx-visual-topbar">
        <span className="svx-visual-tag">
          ILLUSTRATIVE TRANSFORMATION ROADMAP
        </span>
        <span className="svx-visual-status">
          <Compass size={13} /> UNDERSTAND → IMPROVE
        </span>
      </div>

      <div className="svx-tab-row" role="tablist" aria-label="Transformation Phases">
        {roadmapPhases.map((p, i) => (
          <button
            key={p.step}
            type="button"
            role="tab"
            aria-selected={activeIdx === i}
            className={`svx-tab-btn ${activeIdx === i ? 'is-active' : ''}`}
            onClick={() => setActiveIdx(i)}
          >
            Phase 0{i + 1}
          </button>
        ))}
      </div>

      <div className="svx-transform-stage">
        <span className="svx-badge-pill" style={{ background: '#0b0f17', color: '#a3e635' }}>
          {currentPhase.step}
        </span>
        <h4>{currentPhase.title}</h4>
        <div className="svx-transform-compare">
          <div className="svx-transform-box svx-transform-box--before">
            <small>DISCONNECTED COMPLEXITY</small>
            <p>{currentPhase.before}</p>
          </div>
          <div className="svx-transform-box svx-transform-box--after">
            <small>CONNECTED FUTURE STATE</small>
            <strong>{currentPhase.after}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Distinct, Service-Specific Section Sequence for each Service Page
 * Replaces the single repetitive template with 5 distinct architectural layouts
 * tailored to the service discipline while keeping brand tokens 100% cohesive.
 */
export function BespokeServicePage({ slug, onNavigate, onOpenAudit }) {
  const pageRef = useRef(null);
  const [selectedStepIdx, setSelectedStepIdx] = useState(0);
  const [diagnosticChecks, setDiagnosticChecks] = useState({});

  const currentIdx = Math.max(
    0,
    SERVICES_CATALOG.findIndex((s) => s.slug === slug)
  );
  const service = SERVICES_CATALOG[currentIdx] || SERVICES_CATALOG[0];
  useRouteMotion(pageRef, `/services/${service.slug}`);

  const prevService =
    SERVICES_CATALOG[
      (currentIdx - 1 + SERVICES_CATALOG.length) % SERVICES_CATALOG.length
    ];
  const nextService =
    SERVICES_CATALOG[(currentIdx + 1) % SERVICES_CATALOG.length];
  const relatedServices = SERVICES_CATALOG.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  );

  // 5 Distinct Hero Layout Compositions rotated across the 15 services
  const heroCompositions = [
    'editorial-right',
    'editorial-left',
    'banner-over-split',
    'blueprint-command',
    'asymmetric-studio'
  ];
  const heroComposition = heroCompositions[currentIdx % heroCompositions.length];

  // Determine layout archetype based on service domain so pages have distinct compositions & section sequences
  const isDarkHeroArchetype = [
    'meta-ads',
    'ai-agents',
    'voice-ai',
    'lead-generation',
    'custom-software'
  ].includes(service.slug);
  const isBlueprintHeroArchetype = [
    'seo',
    'website-development',
    'crm',
    'workflow-automation'
  ].includes(service.slug);

  const isMarketingFunnelArchetype = [
    'social-media-marketing',
    'meta-ads',
    'google-ads',
    'lead-generation'
  ].includes(service.slug);
  const isSeoDiscoveryArchetype = service.slug === 'seo';
  const isAiWorkflowArchetype = [
    'ai-chatbots',
    'ai-agents',
    'workflow-automation',
    'voice-ai'
  ].includes(service.slug);
  const isProductInterfaceArchetype = [
    'website-development',
    'ecommerce-development',
    'shopify-development',
    'custom-software'
  ].includes(service.slug);
  // Remaining: 'crm', 'digital-transformation-strategy' -> Systems & Process Dashboard Archetype

  const badgeTextColor = getReadableTextColor(service.color);

  const toggleDiag = (key) => {
    setDiagnosticChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const activeCap =
    service.whatWeDo[selectedStepIdx % service.whatWeDo.length] ||
    service.whatWeDo[0];

  return (
    <div
      ref={pageRef}
      className={`mp-page svx-page svx-page--${service.slug} svx-hero-comp--${heroComposition}`}
    >
      {/* ==================== 1. BESPOKE SPLIT HERO (UNIQUE PER SERVICE) ==================== */}
      <section
        id={`srv-${service.slug}-hero`}
        data-section-id={`srv-${service.slug}-hero`}
        data-rx-section
        className={`svx-hero ${
          isDarkHeroArchetype
            ? 'svx-hero--dark'
            : isBlueprintHeroArchetype
            ? 'svx-hero--blueprint'
            : 'svx-hero--editorial'
        }`}
      >
        <div className="mp-container">
          <div className="svx-hero-top-row">
            <ServiceBreadcrumb
              dark={isDarkHeroArchetype}
              crumbs={[
                { label: 'Solutions', route: '/solutions' },
                { label: service.category, route: service.categoryRoute },
                { label: `${service.number} · ${service.title}` }
              ]}
              onNavigate={onNavigate}
            />

            {/* Compact Service Category Sibling Switcher */}
            <div className="svx-sibling-pills">
              {SERVICES_CATALOG.filter(
                (s) => s.category === service.category
              ).map((sib) => {
                const active = sib.slug === service.slug;
                return (
                  <button
                    key={sib.slug}
                    type="button"
                    className={`svx-sibling-chip ${active ? 'is-active' : ''}`}
                    style={
                      active
                        ? {
                            backgroundColor: sib.color,
                            color: getReadableTextColor(sib.color)
                          }
                        : {}
                    }
                    onClick={() => {
                      setSelectedStepIdx(0);
                      onNavigate(`/services/${sib.slug}`);
                    }}
                  >
                    {sib.number} · {sib.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`svx-hero-split-grid svx-hero-split-grid--${heroComposition}`}
          >
            {/* Left Column: Core Problem Statement, Positioning & Primary CTA */}
            <div className="svx-hero-copy-col" data-rx-parallax-y="-14">
              <span
                className="hp-mono-pill"
                style={{
                  backgroundColor: service.color,
                  color: badgeTextColor
                }}
              >
                SERVICE {service.number} OF {SERVICES_CATALOG.length} ·{' '}
                {service.category.toUpperCase()}
              </span>

              <h1
                className={`svx-hero-h1 ${
                  isDarkHeroArchetype ? 'svx-hero-h1--light' : ''
                }`}
              >
                {service.headline}
              </h1>

              <p
                className={`svx-hero-lead ${
                  isDarkHeroArchetype ? 'svx-hero-lead--light' : ''
                }`}
              >
                {service.subheadline}
              </p>

              <p
                className={`svx-hero-intro ${
                  isDarkHeroArchetype ? 'svx-hero-intro--light' : ''
                }`}
              >
                {service.intro}
              </p>

              <div className="svx-hero-cta-row">
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--red"
                  onClick={() => onOpenAudit(service.title)}
                >
                  <span className="hp-btn-3d-inner">{service.cta}</span>
                </button>
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--yellow"
                  onClick={() => onNavigate(service.categoryRoute)}
                >
                  <span className="hp-btn-3d-inner">
                    Explore {service.category} →
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column: Service-Specific Interactive Visual Workbench */}
            <div className="svx-hero-visual-col" data-rx-parallax-y="22">
              <ServiceInteractiveVisual
                service={service}
                onOpenAudit={onOpenAudit}
                onNavigate={onNavigate}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 1B. SERVICE-SPECIFIC 6S MOVING VISUAL & LOCAL ARCHITECTURE BLUEPRINT ==================== */}
      <section
        id={`srv-${service.slug}-motion-loop`}
        data-section-id={`srv-${service.slug}-motion-loop`}
        data-rx-section
        className="mp-section mp-section--cream"
      >
        <div className="mp-container">
          <ServiceMotionLoopStage service={service} />
        </div>
      </section>

      {/* ==================== ARCHETYPE A: CAMPAIGN & FUNNEL WATERFALL (Marketing & Lead Gen) ==================== */}
      {isMarketingFunnelArchetype && (
        <>
          <section
            id={`srv-${service.slug}-archetype-journey`}
            data-section-id={`srv-${service.slug}-archetype-journey`}
            className="svx-archetype-section svx-archetype-section--dark"
          >
            <div className="mp-container">
              <div className="svx-section-head-split">
                <div>
                  <span className="hp-mono-pill hp-mono-pill--yellow">
                    CAMPAIGN JOURNEY & FUNNEL PROGRESSION
                  </span>
                  <h2 className="mp-h2 mp-h2--white" style={{ marginTop: 10 }}>
                    How {service.title} Moves Buyers From Attention to Action
                  </h2>
                </div>
                <span className="svx-illustrative-badge">
                  ILLUSTRATIVE FUNNEL PROGRESSION MODEL
                </span>
              </div>

              <p className="svx-problem-banner-text">{service.problem}</p>

              {/* Interactive Funnel Waterfall Columns */}
              <div className="svx-funnel-waterfall">
                {service.flow.map((stage, idx) => {
                  const isActive = selectedStepIdx === idx;
                  const heightPct = Math.max(42, 100 - idx * 8);
                  return (
                    <button
                      key={stage}
                      type="button"
                      className={`svx-waterfall-col ${
                        isActive ? 'is-active' : ''
                      }`}
                      onClick={() => setSelectedStepIdx(idx)}
                    >
                      <div className="svx-waterfall-bar-wrap">
                        <div
                          className="svx-waterfall-bar"
                          style={{
                            height: `${heightPct}%`,
                            backgroundColor: isActive
                              ? service.color
                              : '#1e293b'
                          }}
                        />
                      </div>
                      <span className="svx-waterfall-step">STAGE 0{idx + 1}</span>
                      <strong>{stage}</strong>
                    </button>
                  );
                })}
              </div>

              <div className="svx-stage-focus-panel svx-stage-focus-panel--dark">
                <div className="svx-stage-focus-head">
                  <strong>
                    Active Stage 0{(selectedStepIdx % service.flow.length) + 1}:{' '}
                    {service.flow[selectedStepIdx % service.flow.length]}
                  </strong>
                  <span>Connected to {activeCap.title}</span>
                </div>
                <p>
                  <strong>{activeCap.title}:</strong> {activeCap.desc}. Every
                  stage in {service.title} feeds measurable signal into the next
                  step so budget and attention never leak into a dead end.
                </p>
              </div>
            </div>
          </section>

          <section
            id={`srv-${service.slug}-capabilities-fit`}
            data-section-id={`srv-${service.slug}-capabilities-fit`}
            className="mp-section mp-section--white"
          >
            <div className="mp-container">
              <div className="svx-ledger-layout">
                <div className="svx-ledger-col">
                  <span
                    className="hp-mono-pill"
                    style={{
                      backgroundColor: service.color,
                      color: badgeTextColor
                    }}
                  >
                    WHAT WE DO · {service.whatWeDo.length} CAMPAIGN PILLARS
                  </span>
                  <h2 className="mp-h2" style={{ marginTop: 10 }}>
                    What We Build Inside {service.title}
                  </h2>

                  <div className="svx-ledger-list">
                    {service.whatWeDo.map((cap, idx) => (
                      <div key={cap.title} className="svx-ledger-row">
                        <span
                          className="svx-ledger-index"
                          style={{
                            backgroundColor: service.color,
                            color: badgeTextColor
                          }}
                        >
                          0{idx + 1}
                        </span>
                        <div className="svx-ledger-body">
                          <h3>{cap.title}</h3>
                          <p>{cap.desc}</p>
                        </div>
                        <span className="svx-ledger-stage-pill">
                          {service.flow[idx % service.flow.length]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="svx-fit-card">
                  <span className="hp-mono-pill hp-mono-pill--yellow">
                    WHO IT&apos;S FOR · CAMPAIGN READINESS
                  </span>
                  <h3>Ideal For Businesses That:</h3>
                  <ul className="svx-fit-checklist">
                    {(service.whoItsFor || []).map((item, idx) => {
                      const key = `${service.slug}-fit-${idx}`;
                      const checked = !!diagnosticChecks[key];
                      return (
                        <li
                          key={item}
                          className={`svx-fit-item ${
                            checked ? 'is-checked' : ''
                          }`}
                          onClick={() => toggleDiag(key)}
                        >
                          <span className="svx-fit-checkbox">
                            {checked ? (
                              <Check size={14} strokeWidth={3} />
                            ) : (
                              `0${idx + 1}`
                            )}
                          </span>
                          <span className="svx-fit-text">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <button
                    type="button"
                    className="hp-btn-3d hp-btn-3d--red hp-btn-3d--full"
                    onClick={() => onOpenAudit(service.title)}
                  >
                    <span className="hp-btn-3d-inner">{service.cta} →</span>
                  </button>
                </div>
              </div>
              <ServiceSupportingVisualBlock service={service} />
            </div>
          </section>
        </>
      )}

      {/* ==================== ARCHETYPE B: SEO DISCOVERY & SITE ARCHITECTURE ==================== */}
      {isSeoDiscoveryArchetype && (
        <>
          <section
            id={`srv-${service.slug}-archetype-journey`}
            data-section-id={`srv-${service.slug}-archetype-journey`}
            className="svx-archetype-section svx-archetype-section--cream"
          >
            <div className="mp-container">
              <div className="svx-section-head-split">
                <div>
                  <span className="hp-mono-pill hp-mono-pill--yellow">
                    ORGANIC DISCOVERY & SITE STRUCTURE
                  </span>
                  <h2 className="mp-h2" style={{ marginTop: 10 }}>
                    How Search Engines & Customers Discover Your Business
                  </h2>
                </div>
                <span className="svx-illustrative-badge svx-illustrative-badge--dark">
                  5-STAGE ORGANIC DISCOVERY FLOW
                </span>
              </div>

              <p className="svx-bottleneck-body">{service.problem}</p>

              <div className="svx-seo-staircase">
                {service.flow.map((stage, idx) => (
                  <div
                    key={stage}
                    className={`svx-seo-stair-step ${
                      selectedStepIdx === idx ? 'is-active' : ''
                    }`}
                    onClick={() => setSelectedStepIdx(idx)}
                  >
                    <div className="svx-seo-stair-top">
                      <span className="svx-cap-num" style={{ background: '#a3e635' }}>
                        0{idx + 1}
                      </span>
                      <small>ORGANIC LAYER</small>
                    </div>
                    <h3>{stage}</h3>
                    <p>
                      {service.whatWeDo[idx % service.whatWeDo.length]?.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id={`srv-${service.slug}-capabilities-fit`}
            data-section-id={`srv-${service.slug}-capabilities-fit`}
            className="mp-section mp-section--white"
          >
            <div className="mp-container">
              <div className="svx-cap-header">
                <div>
                  <span className="hp-mono-pill" style={{ background: '#a3e635' }}>
                    6 SEO ARCHITECTURE CAPABILITIES
                  </span>
                  <h2 className="mp-h2" style={{ marginTop: 10 }}>
                    Technical Foundation, Search Intent & Local Relevance
                  </h2>
                </div>
              </div>

              <div className="svx-capabilities-bento">
                {service.whatWeDo.map((cap, idx) => (
                  <div key={cap.title} className="svx-cap-card">
                    <div className="svx-cap-card-top">
                      <span className="svx-cap-num" style={{ background: '#a3e635' }}>
                        0{idx + 1}
                      </span>
                      <span className="svx-cap-flow-tag">
                        {service.flow[idx % service.flow.length]}
                      </span>
                    </div>
                    <h3>{cap.title}</h3>
                    <p>{cap.desc}</p>
                  </div>
                ))}
              </div>

              <ServiceSupportingVisualBlock service={service} />

              <div className="svx-horizontal-fit-banner" style={{ marginTop: 24 }}>
                <div>
                  <span className="hp-mono-pill hp-mono-pill--yellow">
                    WHO SEO IS BUILT FOR
                  </span>
                  <div className="svx-fit-tags-row">
                    {service.whoItsFor.map((w) => (
                      <span key={w} className="svx-fit-pill">
                        <Check size={14} /> {w}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--red"
                  onClick={() => onOpenAudit(service.title)}
                >
                  <span className="hp-btn-3d-inner">{service.cta} →</span>
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ==================== ARCHETYPE C: AI CONVERSATION, AGENT EXECUTION & WORKFLOWS ==================== */}
      {isAiWorkflowArchetype && (
        <>
          <section
            id={`srv-${service.slug}-archetype-journey`}
            data-section-id={`srv-${service.slug}-archetype-journey`}
            className="svx-archetype-section svx-archetype-section--dark"
          >
            <div className="mp-container">
              <div className="svx-section-head-split">
                <div>
                  <span className="hp-mono-pill hp-mono-pill--yellow">
                    HUMAN + AI CONTROL ARCHITECTURE
                  </span>
                  <h2 className="mp-h2 mp-h2--white" style={{ marginTop: 10 }}>
                    How {service.title} Connects Into Your Operations
                  </h2>
                </div>
                <span className="svx-illustrative-badge">
                  BOUNDED WORKFLOW PIPELINE
                </span>
              </div>

              <p className="svx-problem-banner-text">{service.problem}</p>

              {/* Interactive Master-Detail AI Capability & Workflow Console */}
              <div className="svx-ai-console-grid">
                <div className="svx-ai-Left-list">
                  <small className="svx-mono-label" style={{ color: '#a3e635' }}>
                    SELECT A {service.title.toUpperCase()} WORKFLOW CAPABILITY:
                  </small>
                  {service.whatWeDo.map((cap, idx) => (
                    <button
                      key={cap.title}
                      type="button"
                      className={`svx-ai-selector-btn ${
                        selectedStepIdx === idx ? 'is-active' : ''
                      }`}
                      onClick={() => setSelectedStepIdx(idx)}
                    >
                      <span
                        className="svx-ai-sel-num"
                        style={{
                          backgroundColor:
                            selectedStepIdx === idx ? service.color : '#1e293b',
                          color:
                            selectedStepIdx === idx
                              ? badgeTextColor
                              : '#ffffff'
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <div className="svx-ai-sel-copy">
                        <strong>{cap.title}</strong>
                        <small>{cap.desc}</small>
                      </div>
                      <ChevronRight size={16} />
                    </button>
                  ))}
                </div>

                <div className="svx-ai-right-inspector">
                  <div className="svx-ai-inspector-top">
                    <span
                      className="hp-mono-pill"
                      style={{
                        backgroundColor: service.color,
                        color: badgeTextColor
                      }}
                    >
                      ACTIVE MODULE 0{(selectedStepIdx % service.whatWeDo.length) + 1}
                    </span>
                    <span className="svx-guardrail-pill">
                      <ShieldCheck size={14} /> HUMAN ESCALATION READY
                    </span>
                  </div>

                  <h3>{activeCap.title}</h3>
                  <p>{activeCap.desc}</p>

                  <div className="svx-ai-boundary-grid">
                    <div className="svx-boundary-box">
                      <small>WHAT THE SYSTEM AUTOMATES</small>
                      <strong>
                        Fast response, structured data capture, and repeatable execution for {activeCap.title.toLowerCase()}.
                      </strong>
                    </div>
                    <div className="svx-boundary-box svx-boundary-box--human">
                      <small>WHERE HUMANS STAY IN CONTROL</small>
                      <strong>
                        Approved business knowledge, defined decision boundaries, and high-judgment customer relationships.
                      </strong>
                    </div>
                  </div>

                  <div className="svx-ai-flow-strip">
                    <small className="svx-mono-label" style={{ color: '#a3e635' }}>
                      IMPLEMENTATION SEQUENCE:
                    </small>
                    <div className="svx-flow-pills">
                      {service.flow.map((f, i) => (
                        <span
                          key={f}
                          className={`svx-flow-pill svx-flow-pill--dark ${
                            i <= (selectedStepIdx % service.flow.length) + 1
                              ? 'is-lit'
                              : ''
                          }`}
                        >
                          0{i + 1} · {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id={`srv-${service.slug}-capabilities-fit`}
            data-section-id={`srv-${service.slug}-capabilities-fit`}
            className="mp-section mp-section--cream"
          >
            <div className="mp-container">
              <div className="svx-horizontal-fit-banner">
                <div>
                  <span className="hp-mono-pill hp-mono-pill--yellow">
                    IDEAL USE CASES FOR {service.title.toUpperCase()}
                  </span>
                  <h3 style={{ marginTop: 8, marginBottom: 12 }}>
                    Built for Businesses & Teams That:
                  </h3>
                  <div className="svx-fit-tags-row">
                    {service.whoItsFor.map((w) => (
                      <span key={w} className="svx-fit-pill">
                        <Check size={14} /> {w}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--red"
                  onClick={() => onOpenAudit(service.title)}
                >
                  <span className="hp-btn-3d-inner">{service.cta} →</span>
                </button>
              </div>
              <ServiceSupportingVisualBlock service={service} />
            </div>
          </section>
        </>
      )}

      {/* ==================== ARCHETYPE D: PRODUCT, STOREFRONT & INTERFACE ARCHITECTURE ==================== */}
      {isProductInterfaceArchetype && (
        <>
          <section
            id={`srv-${service.slug}-archetype-journey`}
            data-section-id={`srv-${service.slug}-archetype-journey`}
            className="svx-archetype-section svx-archetype-section--white"
          >
            <div className="mp-container">
              <div className="svx-section-head-split">
                <div>
                  <span
                    className="hp-mono-pill"
                    style={{
                      backgroundColor: service.color,
                      color: badgeTextColor
                    }}
                  >
                    PRODUCT & CONVERSION ARCHITECTURE
                  </span>
                  <h2 className="mp-h2" style={{ marginTop: 10 }}>
                    From First Impression to Connected Business Action
                  </h2>
                </div>
              </div>

              <div className="svx-contrast-duo">
                <div className="svx-contrast-panel svx-contrast-panel--problem">
                  <span className="hp-mono-pill" style={{ background: '#ff4d2d', color: '#fff' }}>
                    WHY STANDARD BUILDS UNDERPERFORM
                  </span>
                  <h3>The Common Friction Points</h3>
                  <p>{service.problem}</p>
                </div>

                <div className="svx-contrast-panel svx-contrast-panel--solution">
                  <span className="hp-mono-pill" style={{ background: '#a3e635', color: '#0b0f17' }}>
                    THE AXONVORTEX ARCHITECTURE
                  </span>
                  <h3>Built Around Your Growth System</h3>
                  <p>{service.intro}</p>
                  <div className="svx-flow-pills" style={{ marginTop: 10 }}>
                    {service.flow.map((step, i) => (
                      <span key={step} className="svx-flow-pill is-lit">
                        0{i + 1} · {step}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id={`srv-${service.slug}-capabilities-fit`}
            data-section-id={`srv-${service.slug}-capabilities-fit`}
            className="mp-section mp-section--cream"
          >
            <div className="mp-container">
              <div className="svx-capabilities-bento">
                {service.whatWeDo.map((cap, idx) => (
                  <div
                    key={cap.title}
                    className={`svx-cap-card ${
                      idx === 0 ? 'svx-cap-card--featured' : ''
                    }`}
                  >
                    <div className="svx-cap-card-top">
                      <span
                        className="svx-cap-num"
                        style={{
                          backgroundColor: service.color,
                          color: badgeTextColor
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <span className="svx-cap-flow-tag">
                        {service.flow[idx % service.flow.length]}
                      </span>
                    </div>
                    <h3>{cap.title}</h3>
                    <p>{cap.desc}</p>
                  </div>
                ))}
              </div>

              <ServiceSupportingVisualBlock service={service} />

              <div className="svx-horizontal-fit-banner" style={{ marginTop: 24 }}>
                <div>
                  <span className="hp-mono-pill hp-mono-pill--yellow">
                    WHO {service.title.toUpperCase()} IS FOR
                  </span>
                  <div className="svx-fit-tags-row" style={{ marginTop: 10 }}>
                    {service.whoItsFor.map((w) => (
                      <span key={w} className="svx-fit-pill">
                        <Check size={14} /> {w}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--red"
                  onClick={() => onOpenAudit(service.title)}
                >
                  <span className="hp-btn-3d-inner">{service.cta} →</span>
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ==================== ARCHETYPE E: CRM & DIGITAL TRANSFORMATION SYSTEMS BOARD ==================== */}
      {!isMarketingFunnelArchetype &&
        !isSeoDiscoveryArchetype &&
        !isAiWorkflowArchetype &&
        !isProductInterfaceArchetype && (
          <>
            <section
              id={`srv-${service.slug}-archetype-journey`}
              data-section-id={`srv-${service.slug}-archetype-journey`}
              className="svx-archetype-section svx-archetype-section--dark"
            >
              <div className="mp-container">
                <div className="svx-section-head-split">
                  <div>
                    <span className="hp-mono-pill hp-mono-pill--yellow">
                      CONNECTED SYSTEMS & PROCESS ARCHITECTURE
                    </span>
                    <h2 className="mp-h2 mp-h2--white" style={{ marginTop: 10 }}>
                      Replacing Disconnected Spreadsheets & Silos With One System
                    </h2>
                  </div>
                  <span className="svx-illustrative-badge">
                    PROCESS & MODULE ARCHITECTURE
                  </span>
                </div>

                <p className="svx-problem-banner-text">{service.problem}</p>

                <div className="svx-crm-board-grid">
                  {service.flow.map((node, idx) => (
                    <div
                      key={node}
                      className={`svx-crm-stage-tile ${
                        selectedStepIdx === idx ? 'is-active' : ''
                      }`}
                      onClick={() => setSelectedStepIdx(idx)}
                    >
                      <span className="svx-Stage-pill-num">0{idx + 1}</span>
                      <h3>{node}</h3>
                      <p>
                        {service.whatWeDo[idx % service.whatWeDo.length]?.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section
              id={`srv-${service.slug}-capabilities-fit`}
              data-section-id={`srv-${service.slug}-capabilities-fit`}
              className="mp-section mp-section--cream"
            >
              <div className="mp-container">
                <div className="svx-ledger-layout">
                  <div className="svx-ledger-col">
                    <span
                      className="hp-mono-pill"
                      style={{
                        backgroundColor: service.color,
                        color: badgeTextColor
                      }}
                    >
                      {service.whatWeDo.length} CORE SYSTEM MODULES
                    </span>
                    <h2 className="mp-h2" style={{ marginTop: 10 }}>
                      What We Architect Inside {service.title}
                    </h2>

                    <div className="svx-ledger-list">
                      {service.whatWeDo.map((cap, idx) => (
                        <div key={cap.title} className="svx-ledger-row">
                          <span
                            className="svx-ledger-index"
                            style={{
                              backgroundColor: service.color,
                              color: badgeTextColor
                            }}
                          >
                            0{idx + 1}
                          </span>
                          <div className="svx-ledger-body">
                            <h3>{cap.title}</h3>
                            <p>{cap.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="svx-fit-card">
                    <span className="hp-mono-pill hp-mono-pill--yellow">
                      OPERATIONAL FIT CHECKLIST
                    </span>
                    <h3>Ideal For Businesses That:</h3>
                    <ul className="svx-fit-checklist">
                      {(service.whoItsFor || []).map((item, idx) => {
                        const key = `${service.slug}-fit-${idx}`;
                        const checked = !!diagnosticChecks[key];
                        return (
                          <li
                            key={item}
                            className={`svx-fit-item ${
                              checked ? 'is-checked' : ''
                            }`}
                            onClick={() => toggleDiag(key)}
                          >
                            <span className="svx-fit-checkbox">
                              {checked ? (
                                <Check size={14} strokeWidth={3} />
                              ) : (
                                `0${idx + 1}`
                              )}
                            </span>
                            <span className="svx-fit-text">{item}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <button
                      type="button"
                      className="hp-btn-3d hp-btn-3d--red hp-btn-3d--full"
                      onClick={() => onOpenAudit(service.title)}
                    >
                      <span className="hp-btn-3d-inner">{service.cta} →</span>
                    </button>
                  </div>
                </div>
                <ServiceSupportingVisualBlock service={service} />
              </div>
            </section>
          </>
        )}

      {/* ==================== 4. SERVICE DIRECTORY & PREV/NEXT NAVIGATION ==================== */}
      <section
        id={`srv-${service.slug}-related-navigation`}
        data-section-id={`srv-${service.slug}-related-navigation`}
        className="mp-section mp-section--white"
        style={{ paddingTop: 40 }}
      >
        <div className="mp-container">
          <div className="mp-prev-next-bar">
            <button
              type="button"
              className="mp-prev-next-card"
              onClick={() => onNavigate(`/services/${prevService.slug}`)}
            >
              <small>
                ← PREVIOUS SERVICE ({prevService.number}/
                {SERVICES_CATALOG.length})
              </small>
              <strong>{prevService.title}</strong>
            </button>
            <button
              type="button"
              className="mp-prev-next-card mp-prev-next-card--right"
              onClick={() => onNavigate(`/services/${nextService.slug}`)}
            >
              <small>
                NEXT SERVICE ({nextService.number}/{SERVICES_CATALOG.length}) →
              </small>
              <strong>{nextService.title}</strong>
            </button>
          </div>

          {relatedServices.length > 0 && (
            <div className="mp-related-block">
              <h3>Connected Services in {service.category}</h3>
              <div className="hp-services-grid">
                {relatedServices.map((rel) => (
                  <div
                    key={rel.slug}
                    className="hp-service-card"
                    onClick={() => onNavigate(`/services/${rel.slug}`)}
                  >
                    <div className="hp-service-card-top">
                      <span
                        className="hp-service-num"
                        style={{
                          backgroundColor: rel.color,
                          color: getReadableTextColor(rel.color)
                        }}
                      >
                        {rel.number}
                      </span>
                      <span className="hp-service-cat">{rel.category}</span>
                    </div>
                    <h4>{rel.title}</h4>
                    <p>{rel.headline}</p>
                    <div className="hp-service-card-foot">
                      <span>Open {rel.title}</span>
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/**
 * Bespoke Interactive Pillar Visual for each of the 5 Core Solution Pillars (/solutions/:pillarId)
 */
export function PillarInteractiveMatrix({ pillar, onNavigate }) {
  const [activeSubIdx, setActiveSubIdx] = useState(0);
  const sub =
    pillar.subServicesDetail[activeSubIdx % pillar.subServicesDetail.length] ||
    pillar.subServicesDetail[0];
  const badgeColor = getReadableTextColor(pillar.accentColor);

  return (
    <div className="svx-pillar-workbench">
      <div className="svx-visual-topbar">
        <span className="svx-visual-tag">
          PILLAR {pillar.index} SYSTEM ARCHITECTURE · INTERACTIVE EXPLORER
        </span>
        <span className="svx-visual-status">
          {pillar.subServicesDetail.length} CONNECTED CAPABILITIES
        </span>
      </div>

      <div className="svx-tab-row" role="tablist" aria-label={pillar.title}>
        {pillar.subServicesDetail.map((s, i) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            aria-selected={activeSubIdx === i}
            className={`svx-tab-btn ${activeSubIdx === i ? 'is-active' : ''}`}
            style={
              activeSubIdx === i
                ? { backgroundColor: pillar.accentColor, color: badgeColor }
                : {}
            }
            onClick={() => setActiveSubIdx(i)}
          >
            0{i + 1} · {s.title}
          </button>
        ))}
      </div>

      <div className="svx-pillar-active-card">
        <div className="svx-pillar-active-head">
          <div>
            <small className="svx-mono-label">
              CAPABILITY 0{activeSubIdx + 1} OF {pillar.subServicesDetail.length}
            </small>
            <h3>{sub.title}</h3>
          </div>
          <button
            type="button"
            className="hp-service-chip"
            onClick={() => onNavigate(`/services/${sub.slug}`)}
          >
            <span>Open Dedicated Service Page</span>
            <ArrowUpRight size={15} />
          </button>
        </div>

        <p className="svx-pillar-active-desc">{sub.desc}</p>

        <div className="svx-pillar-includes-grid">
          {sub.includes.map((inc) => (
            <div key={inc} className="svx-pillar-inc-chip">
              <Check size={14} />
              <span>{inc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
