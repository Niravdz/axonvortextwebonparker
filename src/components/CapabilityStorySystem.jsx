import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Layers,
  ShieldCheck,
  Sparkles,
  GitBranch,
  Cpu,
  Globe,
  Workflow
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Helper to detect reduced motion preference
 */
function usePrefersReducedMotion(override) {
  const [reduced, setReduced] = useState(() => {
    if (typeof override === 'boolean') return override;
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof override === 'boolean') {
      setReduced(override);
      return undefined;
    }
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [override]);

  return reduced;
}

/* ============================================================================
 * 1. LEAD GENERATION VARIANT — INTERACTIVE "OPPORTUNITY PIPELINE"
 * Journey: Audience → Offer → Lead Funnel → Landing Page → Qualification → CRM → Follow-Up → Opportunity
 * ========================================================================== */
const LEAD_PIPELINE_META = [
  {
    stageTag: 'STAGE 01 · JOURNEY ENTRY & QUALIFICATION',
    upstream: 'Target Audience + Offer Hook',
    mechanism: 'Multi-Step Intent & Fit Capture',
    downstream: 'High-Intent Campaign & Landing Flow',
    nodeCoords: { x: 90, y: 80 },
    metricsLabel: 'FUNNEL ARCHITECTURE'
  },
  {
    stageTag: 'STAGE 02 · DEMAND ACTIVATION',
    upstream: 'Funnel Offer Positioning',
    mechanism: 'Targeted Search & Social Demand',
    downstream: 'Dedicated Conversion Destination',
    nodeCoords: { x: 255, y: 175 },
    metricsLabel: 'DEMAND GENERATION'
  },
  {
    stageTag: 'STAGE 03 · CONVERSION POINT',
    upstream: 'Qualified Ad & Content Traffic',
    mechanism: 'Message-Matched Value + Proof + Form',
    downstream: 'Structured Enquiry Payload',
    nodeCoords: { x: 420, y: 80 },
    metricsLabel: 'CONVERSION ARCHITECTURE'
  },
  {
    stageTag: 'STAGE 04 · PIPELINE ORGANIZATION',
    upstream: 'Captured Lead + Source Attribution',
    mechanism: 'CRM Record, Deal Stage & Owner Routing',
    downstream: 'Instant Sales & Nurture Trigger',
    nodeCoords: { x: 585, y: 175 },
    metricsLabel: 'CRM SYSTEM SYNC'
  },
  {
    stageTag: 'STAGE 05 · RELATIONSHIP CONTINUITY',
    upstream: 'Assigned CRM Opportunity',
    mechanism: 'Automated SMS, Email & Task Sequences',
    downstream: 'Booked Consultation & Closed Deal',
    nodeCoords: { x: 750, y: 80 },
    metricsLabel: 'FOLLOW-UP ENGINE'
  }
];

const LEAD_MACRO_FLOW = [
  'Audience',
  'Offer',
  'Lead Funnel',
  'Landing Page',
  'Qualification',
  'CRM',
  'Follow-Up',
  'Opportunity'
];

function LeadGenerationOpportunityPipeline({
  sectionId,
  eyebrow,
  title,
  subtitle,
  stages = [],
  activeStage = 0,
  onSelectStage,
  accentColor = '#ff4d2d',
  reducedMotion,
  onNavigate
}) {
  const rootRef = useRef(null);
  const currentIdx = activeStage % Math.max(stages.length, 1);
  const current = stages[currentIdx] || stages[0];
  const meta = LEAD_PIPELINE_META[currentIdx] || LEAD_PIPELINE_META[0];
  const progressPct = Math.round(((currentIdx + 1) / Math.max(stages.length, 1)) * 100);

  useEffect(() => {
    if (!rootRef.current || reducedMotion) return undefined;
    const ctx = gsap.context(() => {
      const pathEl = rootRef.current.querySelector('.css-lead-svg-active-path');
      if (pathEl) {
        gsap.fromTo(
          pathEl,
          { strokeDashoffset: 900 },
          {
            strokeDashoffset: 900 - (900 * (currentIdx + 1)) / stages.length,
            duration: 0.65,
            ease: 'power3.out'
          }
        );
      }
    }, rootRef);
    return () => ctx.revert();
  }, [currentIdx, stages.length, reducedMotion]);

  return (
    <section
      ref={rootRef}
      id={sectionId}
      data-section-id={sectionId}
      data-capability-variant="lead-generation"
      data-reduced-motion={reducedMotion ? 'true' : 'false'}
      className="bsp-section bsp-section--white css-cap-section css-cap--lead"
    >
      <div className="mp-container">
        {/* Compact, tightly connected editorial header */}
        <div className="css-compact-header">
          <div className="css-header-title-group">
            <span className="hp-mono-pill hp-mono-pill--yellow">{eyebrow}</span>
            <h2 className="mp-h2 css-tight-h2">{title}</h2>
            <p className="css-header-sub">{subtitle}</p>
          </div>

          <div className="css-header-status-box">
            <small>PIPELINE PROGRESSION</small>
            <strong>
              STAGE 0{currentIdx + 1} OF 0{stages.length} · {progressPct}% CONNECTED
            </strong>
            <div className="css-mini-progress-bar" aria-hidden="true">
              <span
                style={{
                  width: `${progressPct}%`,
                  backgroundColor: accentColor
                }}
              />
            </div>
          </div>
        </div>

        {/* Full-Width 8-Stage Connected Journey Ribbon */}
        <div className="css-lead-macro-ribbon" aria-label="Full Opportunity Journey">
          {LEAD_MACRO_FLOW.map((node, idx) => {
            const isReached = idx <= currentIdx + 3;
            return (
              <React.Fragment key={node}>
                <div className={`css-macro-pill ${isReached ? 'is-reached' : ''}`}>
                  <small>0{idx + 1}</small>
                  <span>{node}</span>
                </div>
                {idx < LEAD_MACRO_FLOW.length - 1 && (
                  <span className="css-macro-arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Asymmetric Split Stage: Left Connected Pipeline Canvas + Right Active Stage Inspector */}
        <div className="css-lead-pipeline-workspace">
          {/* Left: Interactive Directional S-Curve Pipeline */}
          <div className="css-lead-pipeline-canvas">
            <div className="css-canvas-topbar">
              <span className="css-canvas-tag">
                INTERACTIVE OPPORTUNITY PIPELINE · SELECT ANY STAGE TO INSPECT
              </span>
              <div className="css-step-Cycle-btns">
                <button
                  type="button"
                  className="css-cycle-btn"
                  onClick={() =>
                    onSelectStage((currentIdx - 1 + stages.length) % stages.length)
                  }
                  aria-label="Previous pipeline stage"
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  className="css-cycle-btn"
                  onClick={() => onSelectStage((currentIdx + 1) % stages.length)}
                  aria-label="Next pipeline stage"
                >
                  Next Stage →
                </button>
              </div>
            </div>

            {/* SVG Directional Conduit */}
            <div className="css-lead-svg-stage" aria-hidden="true">
              <svg viewBox="0 0 840 245" className="css-lead-svg">
                <defs>
                  <pattern
                    id="leadGrid"
                    width="28"
                    height="28"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="1.2" fill="rgba(11,15,23,0.14)" />
                  </pattern>
                </defs>
                <rect width="840" height="245" rx="16" fill="url(#leadGrid)" />

                {/* Base Pipeline Track */}
                <path
                  d="M 90 80 C 172 80, 172 175, 255 175 C 337 175, 337 80, 420 80 C 502 80, 502 175, 585 175 C 667 175, 667 80, 750 80"
                  fill="none"
                  stroke="#0b0f17"
                  strokeWidth="12"
                  strokeLinecap="round"
                  opacity="0.14"
                />
                <path
                  d="M 90 80 C 172 80, 172 175, 255 175 C 337 175, 337 80, 420 80 C 502 80, 502 175, 585 175 C 667 175, 667 80, 750 80"
                  fill="none"
                  stroke="#0b0f17"
                  strokeWidth="3"
                  strokeDasharray="7 7"
                />

                {/* Active Illuminated Pipeline Path */}
                <path
                  className="css-lead-svg-active-path"
                  d="M 90 80 C 172 80, 172 175, 255 175 C 337 175, 337 80, 420 80 C 502 80, 502 175, 585 175 C 667 175, 667 80, 750 80"
                  fill="none"
                  stroke={accentColor}
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeDasharray="900"
                  strokeDashoffset={
                    reducedMotion
                      ? 0
                      : 900 - (900 * (currentIdx + 1)) / Math.max(stages.length, 1)
                  }
                />

                {/* Stage Nodes Along the Curved Conduit */}
                {stages.map((st, idx) => {
                  const pt = LEAD_PIPELINE_META[idx]?.nodeCoords || {
                    x: 90 + idx * 165,
                    y: 120
                  };
                  const isCurrent = idx === currentIdx;
                  const isPassed = idx <= currentIdx;
                  return (
                    <g
                      key={st.title}
                      transform={`translate(${pt.x}, ${pt.y})`}
                      style={{ cursor: 'pointer' }}
                      onClick={() => onSelectStage(idx)}
                    >
                      <circle
                        r={isCurrent ? 30 : 23}
                        fill={isCurrent ? accentColor : isPassed ? '#0b0f17' : '#ffffff'}
                        stroke="#0b0f17"
                        strokeWidth="3"
                      />
                      <text
                        y="5"
                        textAnchor="middle"
                        fill={isPassed || isCurrent ? '#ffffff' : '#0b0f17'}
                        fontFamily="JetBrains Mono, monospace"
                        fontWeight="800"
                        fontSize="13"
                      >
                        0{idx + 1}
                      </text>
                      <rect
                        x="-68"
                        y={idx % 2 === 0 ? -58 : 36}
                        width="136"
                        height="24"
                        rx="6"
                        fill={isCurrent ? '#0b0f17' : '#f6f2e8'}
                        stroke="#0b0f17"
                        strokeWidth="1.5"
                      />
                      <text
                        y={idx % 2 === 0 ? -42 : 52}
                        textAnchor="middle"
                        fill={isCurrent ? '#a3e635' : '#0b0f17'}
                        fontFamily="Plus Jakarta Sans, sans-serif"
                        fontWeight="800"
                        fontSize="10.5"
                      >
                        {st.title}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Interactive Connected Stage Selector Rail (Accessible Buttons) */}
            <div
              className="css-lead-node-selector-grid"
              role="tablist"
              aria-label="Opportunity Pipeline Stages"
            >
              {stages.map((st, idx) => {
                const isCurrent = idx === currentIdx;
                const isPassed = idx < currentIdx;
                return (
                  <button
                    key={st.title}
                    type="button"
                    role="tab"
                    aria-selected={isCurrent}
                    className={`css-lead-stage-pill-btn ${
                      isCurrent ? 'is-active' : isPassed ? 'is-passed' : ''
                    }`}
                    onClick={() => onSelectStage(idx)}
                  >
                    <div className="css-stage-pill-top">
                      <span className="css-stage-pill-num">0{idx + 1}</span>
                      <span className="css-stage-pill-status">
                        {isCurrent ? 'ACTIVE' : isPassed ? 'CONNECTED ✓' : 'STAGE'}
                      </span>
                    </div>
                    <strong>{st.title}</strong>
                    <small>{LEAD_PIPELINE_META[idx]?.metricsLabel}</small>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Single Active-Stage Detail Panel (One Contextual CTA!) */}
          <div className="css-active-stage-inspector" role="tabpanel">
            <div className="css-inspector-eyebrow-row">
              <span
                className="css-inspector-badge"
                style={{ backgroundColor: accentColor, color: '#ffffff' }}
              >
                {meta.stageTag}
              </span>
              <span className="css-inspector-step-count">
                0{currentIdx + 1} / 0{stages.length}
              </span>
            </div>

            <h3 className="css-inspector-title">{current.title}</h3>
            <p className="css-inspector-desc">{current.desc}</p>

            {/* Stage Connection Handoff Box */}
            <div className="css-stage-handoff-box">
              <div className="css-handoff-row">
                <small>UPSTREAM INPUT</small>
                <strong>{meta.upstream}</strong>
              </div>
              <div className="css-handoff-row is-highlight">
                <small>ACTIVE STAGE MECHANISM</small>
                <strong>{meta.mechanism}</strong>
              </div>
              <div className="css-handoff-row">
                <small>DOWNSTREAM OUTPUT</small>
                <strong>{meta.downstream}</strong>
              </div>
            </div>

            {/* Connected Capability Attributes */}
            <div className="css-inspector-attributes">
              <small className="css-attr-heading">INCLUDED CAPABILITY ARCHITECTURE:</small>
              <div className="css-attr-tag-grid">
                {current.includes.map((inc) => (
                  <span key={inc} className="css-attr-tag">
                    <Check size={13} />
                    <span>{inc}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Single Contextual CTA for the Active Stage */}
            <div className="css-inspector-cta-row">
              <button
                type="button"
                className="hp-btn-3d hp-btn-3d--red css-contextual-primary-btn"
                onClick={() => onNavigate(`/services/${current.slug}`)}
              >
                <span className="hp-btn-3d-inner">
                  <span>Explore {current.title}</span>
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Compact Inline Service Directory Bar (Preserves 1-click access to all 5 routes without button noise) */}
        <div className="css-inline-service-directory" aria-label="Direct Capability Links">
          <span className="css-directory-label">ALL PIPELINE CAPABILITIES:</span>
          <div className="css-directory-links">
            {stages.map((st, idx) => (
              <button
                key={st.title}
                type="button"
                className={`css-inline-service-link ${idx === currentIdx ? 'is-current' : ''}`}
                onClick={() => onNavigate(`/services/${st.slug}`)}
              >
                <span>
                  0{idx + 1} · {st.title}
                </span>
                <ArrowUpRight size={13} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
 * 2. DIGITAL MARKETING VARIANT — INTERACTIVE "DEMAND CHANNEL CONSTELLATION"
 * Strategy at center; Content, Social, Meta Ads, Google Ads, SEO as orbital nodes;
 * Traffic & Conversion as shared outcomes; Measurement as feedback loop.
 * ========================================================================== */
const DM_CONSTELLATION_NODES = [
  {
    angleLabel: 'NODE 01 · SOCIAL REACH & COMMUNITY',
    coords: { x: 135, y: 82 },
    roleInEcosystem: 'Builds visible brand familiarity and active audience conversation.',
    flowSteps: ['Core Brand Insight', '9:16 Reels & Carousels', 'Audience Engagement', 'Profile & Site Traffic'],
    outcomeContribution: 'Warm Audience & Assisted Demand'
  },
  {
    angleLabel: 'NODE 02 · AUTHORITY & CONTENT ENGINE',
    coords: { x: 525, y: 82 },
    roleInEcosystem: 'Educates buyers, answers objections, and earns compounding trust.',
    flowSteps: ['Buyer Question Map', 'Editorial & Case Guides', 'Distribution Assets', 'High-Trust Consideration'],
    outcomeContribution: 'Buyer Trust & Conversion Readiness'
  },
  {
    angleLabel: 'NODE 03 · PAID AUDIENCE DEMAND (META)',
    coords: { x: 110, y: 245 },
    roleInEcosystem: 'Reaches targeted decision-makers with conversion-focused creative.',
    flowSteps: ['Audience Layering', 'Creative Hook Testing', 'Retargeting Sequence', 'Tracked Lead Action'],
    outcomeContribution: 'Scalable Paid Demand & Retargeting'
  },
  {
    angleLabel: 'NODE 04 · HIGH-INTENT SEARCH (GOOGLE)',
    coords: { x: 550, y: 245 },
    roleInEcosystem: 'Captures active buyers at the exact moment they search for solutions.',
    flowSteps: ['High-Intent Query', 'Keyword Architecture', 'Message-Matched Page', 'Qualified Enquiry'],
    outcomeContribution: 'Immediate High-Intent Capture'
  },
  {
    angleLabel: 'NODE 05 · COMPOUNDING ORGANIC SEARCH (SEO)',
    coords: { x: 330, y: 315 },
    roleInEcosystem: 'Secures long-term search authority across technical, on-page, and local signals.',
    flowSteps: ['Technical Foundation', 'Intent Topic Clusters', 'Local & Authority Signals', 'Compounding Organic Visits'],
    outcomeContribution: 'Sustainable Organic Pipeline'
  }
];

function DigitalMarketingConstellation({
  sectionId,
  eyebrow,
  title,
  subtitle,
  stages = [],
  activeStage = 0,
  onSelectStage,
  accentColor = '#f59e0b',
  reducedMotion,
  onNavigate
}) {
  const currentIdx = activeStage % Math.max(stages.length, 1);
  const current = stages[currentIdx] || stages[0];
  const nodeMeta = DM_CONSTELLATION_NODES[currentIdx] || DM_CONSTELLATION_NODES[0];

  return (
    <section
      id={sectionId}
      data-section-id={sectionId}
      data-capability-variant="digital-marketing"
      data-reduced-motion={reducedMotion ? 'true' : 'false'}
      className="bsp-section bsp-section--white css-cap-section css-cap--dm"
    >
      <div className="mp-container">
        <div className="css-compact-header">
          <div className="css-header-title-group">
            <span className="hp-mono-pill hp-mono-pill--yellow">{eyebrow}</span>
            <h2 className="mp-h2 css-tight-h2">{title}</h2>
            <p className="css-header-sub">{subtitle}</p>
          </div>

          <div className="css-header-status-box">
            <small>DEMAND CHANNEL CONSTELLATION</small>
            <strong>
              ACTIVE CHANNEL: 0{currentIdx + 1} · {current.title.toUpperCase()}
            </strong>
            <span className="css-status-subnote">
              Strategy Core ⇄ {current.title} ⇄ Conversion &amp; Attribution Loop
            </span>
          </div>
        </div>

        <div className="css-dm-constellation-grid">
          {/* Left: Interactive Orbital SVG Constellation */}
          <div className="css-dm-constellation-stage">
            <div className="css-canvas-topbar">
              <span className="css-canvas-tag">
                STRATEGY CORE + 5 CONNECTED DEMAND CHANNELS
              </span>
              <span className="css-canvas-hint">Click any channel node to inspect</span>
            </div>

            <div className="css-dm-svg-wrapper">
              <svg viewBox="0 0 660 410" className="css-dm-constellation-svg">
                {/* Orbital Rings */}
                <ellipse
                  cx="330"
                  cy="185"
                  rx="235"
                  ry="135"
                  fill="none"
                  stroke="#0b0f17"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  opacity="0.3"
                />
                <ellipse
                  cx="330"
                  cy="185"
                  rx="135"
                  ry="82"
                  fill="none"
                  stroke="#0b0f17"
                  strokeWidth="1.5"
                  opacity="0.18"
                />

                {/* Closed-Loop Measurement Return Arc */}
                <path
                  d="M 120 375 Q 330 402 540 375"
                  fill="none"
                  stroke="#a3e635"
                  strokeWidth="3"
                  strokeDasharray="5 5"
                />
                <rect
                  x="175"
                  y="362"
                  width="310"
                  height="28"
                  rx="14"
                  fill="#0b0f17"
                  stroke="#0b0f17"
                  strokeWidth="2"
                />
                <text
                  x="330"
                  y="380"
                  textAnchor="middle"
                  fill="#a3e635"
                  fontFamily="JetBrains Mono, monospace"
                  fontWeight="800"
                  fontSize="10"
                >
                  ↺ SHARED OUTCOME: TRAFFIC → CONVERSION → ATTRIBUTION
                </text>

                {/* Radial Connection Lines From Strategy Center (330, 175) to All 5 Channel Nodes */}
                {stages.map((st, idx) => {
                  const pt = DM_CONSTELLATION_NODES[idx]?.coords || { x: 330, y: 100 };
                  const isActive = idx === currentIdx;
                  return (
                    <g key={`beam-${st.title}`}>
                      <line
                        x1="330"
                        y1="175"
                        x2={pt.x}
                        y2={pt.y}
                        stroke={isActive ? accentColor : '#0b0f17'}
                        strokeWidth={isActive ? '5' : '2'}
                        strokeDasharray={isActive ? 'none' : '5 5'}
                        opacity={isActive ? '1' : '0.35'}
                      />
                      {/* Outcome Flow Line to Bottom Conversion Bar */}
                      {isActive && (
                        <line
                          x1={pt.x}
                          y1={pt.y}
                          x2="330"
                          y2="362"
                          stroke="#a3e635"
                          strokeWidth="3"
                          strokeDasharray="4 4"
                        />
                      )}
                    </g>
                  );
                })}

                {/* Central Strategy Hub */}
                <g transform="translate(330, 175)">
                  <circle
                    r="54"
                    fill="#0b0f17"
                    stroke={accentColor}
                    strokeWidth="4"
                  />
                  <text
                    y="-10"
                    textAnchor="middle"
                    fill="#f59e0b"
                    fontFamily="JetBrains Mono, monospace"
                    fontWeight="800"
                    fontSize="9.5"
                  >
                    CENTRAL HUB
                  </text>
                  <text
                    y="6"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    fontWeight="800"
                    fontSize="12"
                  >
                    STRATEGY &amp;
                  </text>
                  <text
                    y="21"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                    fontWeight="800"
                    fontSize="12"
                  >
                    POSITIONING
                  </text>
                </g>

                {/* 5 Orbital Channel Nodes */}
                {stages.map((st, idx) => {
                  const pt = DM_CONSTELLATION_NODES[idx]?.coords || { x: 330, y: 100 };
                  const isActive = idx === currentIdx;
                  return (
                    <g
                      key={st.title}
                      transform={`translate(${pt.x}, ${pt.y})`}
                      style={{ cursor: 'pointer' }}
                      onClick={() => onSelectStage(idx)}
                    >
                      <rect
                        x="-88"
                        y="-26"
                        width="176"
                        height="52"
                        rx="14"
                        fill={isActive ? accentColor : '#f6f2e8'}
                        stroke="#0b0f17"
                        strokeWidth={isActive ? '3' : '2'}
                      />
                      <text
                        x="0"
                        y="-6"
                        textAnchor="middle"
                        fill="#0b0f17"
                        fontFamily="JetBrains Mono, monospace"
                        fontWeight="800"
                        fontSize="10"
                      >
                        0{idx + 1} · {isActive ? 'ACTIVE NODE' : 'CHANNEL'}
                      </text>
                      <text
                        x="0"
                        y="12"
                        textAnchor="middle"
                        fill="#0b0f17"
                        fontFamily="Plus Jakarta Sans, sans-serif"
                        fontWeight="800"
                        fontSize="12"
                      >
                        {st.title}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Accessible Channel Node Selector Buttons */}
            <div
              className="css-dm-node-buttons"
              role="tablist"
              aria-label="Marketing Constellation Nodes"
            >
              {stages.map((st, idx) => {
                const isActive = idx === currentIdx;
                return (
                  <button
                    key={st.title}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`css-dm-node-tab ${isActive ? 'is-active' : ''}`}
                    onClick={() => onSelectStage(idx)}
                  >
                    <small>0{idx + 1}</small>
                    <strong>{st.title}</strong>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Contextual Editorial Side Panel */}
          <div className="css-active-stage-inspector" role="tabpanel">
            <div className="css-inspector-eyebrow-row">
              <span
                className="css-inspector-badge"
                style={{ backgroundColor: accentColor, color: '#0b0f17' }}
              >
                {nodeMeta.angleLabel}
              </span>
              <span className="css-inspector-step-count">
                NODE 0{currentIdx + 1} / 0{stages.length}
              </span>
            </div>

            <h3 className="css-inspector-title">{current.title}</h3>
            <p className="css-inspector-desc">{current.desc}</p>

            {/* Constellation Path Sequence */}
            <div className="css-dm-flow-box">
              <small className="css-attr-heading">
                HOW {current.title.toUpperCase()} CONNECTS TO DEMAND:
              </small>
              <div className="css-dm-flow-steps">
                {nodeMeta.flowSteps.map((stepText, sIdx) => (
                  <div key={stepText} className="css-dm-flow-step">
                    <span className="css-dm-step-idx">0{sIdx + 1}</span>
                    <strong>{stepText}</strong>
                  </div>
                ))}
              </div>
              <div className="css-dm-outcome-bar">
                <span>ECOSYSTEM CONTRIBUTION:</span>
                <strong>{nodeMeta.outcomeContribution}</strong>
              </div>
            </div>

            <div className="css-inspector-attributes">
              <small className="css-attr-heading">CHANNEL DELIVERABLES:</small>
              <div className="css-attr-tag-grid">
                {current.includes.map((inc) => (
                  <span key={inc} className="css-attr-tag">
                    <Check size={13} />
                    <span>{inc}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="css-inspector-cta-row">
              <button
                type="button"
                className="hp-btn-3d hp-btn-3d--red css-contextual-primary-btn"
                onClick={() => onNavigate(`/services/${current.slug}`)}
              >
                <span className="hp-btn-3d-inner">
                  <span>Explore {current.title}</span>
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Inline Constellation Directory */}
        <div className="css-inline-service-directory" aria-label="Direct Channel Links">
          <span className="css-directory-label">ALL 5 MARKETING CHANNELS:</span>
          <div className="css-directory-links">
            {stages.map((st, idx) => (
              <button
                key={st.title}
                type="button"
                className={`css-inline-service-link ${idx === currentIdx ? 'is-current' : ''}`}
                onClick={() => onNavigate(`/services/${st.slug}`)}
              >
                <span>
                  0{idx + 1} · {st.title}
                </span>
                <ArrowUpRight size={13} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
 * 3. AI & AUTOMATION VARIANT — INTERACTIVE "BUSINESS AUTOMATION ORCHESTRATOR"
 * Left: Business Trigger | Center: Context, Decision Logic & Human Checkpoint +
 * Specialized Execution Paths | Right: Business Action, Feedback & Active Spec.
 * ========================================================================== */
const AI_EXECUTION_PATHS = [
  {
    pathCode: 'PATH 01 · CONVERSATIONAL FRONTDOOR',
    triggerSource: 'Website Visitor / Messaging Question',
    contextLogic: 'Approved Service & Pricing Knowledge Base',
    humanGate: 'Escalates complex custom scoping to human advisor',
    businessAction: 'Instant grounded answer + guided service match',
    feedbackLoop: 'Logs conversation intent & unresolved queries'
  },
  {
    pathCode: 'PATH 02 · CUSTOMER SUPPORT RESOLUTION',
    triggerSource: 'Inbound Support Ticket / Order Enquiry',
    contextLogic: 'Account History + Support Playbook Verification',
    humanGate: 'Routes sensitive account exceptions to support lead',
    businessAction: '24/7 first-response resolution + ticket enrichment',
    feedbackLoop: 'Updates support resolution speed & FAQ coverage'
  },
  {
    pathCode: 'PATH 03 · AUTOMATED SCHEDULING FLOW',
    triggerSource: 'Consultation Request / Qualified Lead',
    contextLogic: 'Pre-Call Qualification + Team Calendar Availability',
    humanGate: 'Confirms advisor assignment & pre-call brief',
    businessAction: 'Books confirmed slot + dispatches SMS/email reminders',
    feedbackLoop: 'Tracks show-rate & rescheduling patterns'
  },
  {
    pathCode: 'PATH 04 · ACOUSTIC VOICE AI RECEPTION',
    triggerSource: 'Inbound / Outbound Phone Call',
    contextLogic: 'Spoken Intent Recognition + Caller CRM Lookup',
    humanGate: 'Warm-transfers priority callers to live specialist',
    businessAction: 'Answers call, qualifies caller & logs structured summary',
    feedbackLoop: 'Syncs call transcript & outcome to CRM'
  },
  {
    pathCode: 'PATH 05 · GOAL-DRIVEN AI AGENT',
    triggerSource: 'Assigned Sales / Research / Operations Objective',
    contextLogic: 'Multi-Source Retrieval + Synthesis Guardrails',
    humanGate: 'Human review checkpoint before external dispatch',
    businessAction: 'Compiles research brief, qualification score & draft action',
    feedbackLoop: 'Refines agent prompt templates from reviewer feedback'
  },
  {
    pathCode: 'PATH 06 · CROSS-SYSTEM WORKFLOW BUS',
    triggerSource: 'Form Submission / Deal Stage Change / Internal Handoff',
    contextLogic: 'Conditional Routing Rules + Data Validation',
    humanGate: 'Exception alert if required field or approval is missing',
    businessAction: 'Synchronizes CRM, email sequences, tasks & reporting',
    feedbackLoop: 'Eliminates manual copy-paste across departments'
  }
];

function AiAutomationOrchestrator({
  sectionId,
  eyebrow,
  title,
  subtitle,
  stages = [],
  activeStage = 0,
  onSelectStage,
  accentColor = '#8b5cf6',
  reducedMotion,
  onNavigate
}) {
  const currentIdx = activeStage % Math.max(stages.length, 1);
  const current = stages[currentIdx] || stages[0];
  const pathMeta = AI_EXECUTION_PATHS[currentIdx] || AI_EXECUTION_PATHS[0];

  return (
    <section
      id={sectionId}
      data-section-id={sectionId}
      data-capability-variant="ai-automation"
      data-reduced-motion={reducedMotion ? 'true' : 'false'}
      className="bsp-section bsp-section--white css-cap-section css-cap--ai"
    >
      <div className="mp-container">
        <div className="css-compact-header">
          <div className="css-header-title-group">
            <span className="hp-mono-pill hp-mono-pill--yellow">{eyebrow}</span>
            <h2 className="mp-h2 css-tight-h2">{title}</h2>
            <p className="css-header-sub">{subtitle}</p>
          </div>

          <div className="css-header-status-box">
            <small>BUSINESS AUTOMATION ORCHESTRATOR</small>
            <strong>HUMAN-IN-THE-LOOP GUARDRAILS: ACTIVE ✓</strong>
            <span className="css-status-subnote">
              Trigger → Context &amp; Human Gate → {current.title} → Verified Action
            </span>
          </div>
        </div>

        {/* 3-Zone Business Automation Orchestrator Board */}
        <div className="css-ai-orchestrator-board">
          {/* LEFT + CENTER: Trigger -> Context -> Human Gate -> 6 Execution Paths */}
          <div className="css-ai-circuit-stage">
            <div className="css-ai-flow-columns">
              {/* Column 1: Business Trigger & Context Logic */}
              <div className="css-ai-col-trigger">
                <div className="css-ai-box css-ai-box--trigger">
                  <small>01 · BUSINESS TRIGGER</small>
                  <strong>{pathMeta.triggerSource}</strong>
                </div>

                <div className="css-ai-vertical-connector" aria-hidden="true">
                  ↓
                </div>

                <div className="css-ai-box css-ai-box--context">
                  <small>02 · CONTEXT &amp; DECISION LOGIC</small>
                  <strong>{pathMeta.contextLogic}</strong>
                </div>

                <div className="css-ai-vertical-connector" aria-hidden="true">
                  ↓
                </div>

                <div className="css-ai-box css-ai-box--humangate">
                  <div className="css-humangate-head">
                    <ShieldCheck size={16} />
                    <span>03 · HUMAN APPROVAL CHECKPOINT</span>
                  </div>
                  <p>{pathMeta.humanGate}</p>
                </div>
              </div>

              {/* Column 2: Specialized Execution Paths (All 6 Capabilities) */}
              <div
                className="css-ai-col-paths"
                role="tablist"
                aria-label="Specialized AI Execution Paths"
              >
                <div className="css-paths-header">
                  04 · SELECT SPECIALIZED EXECUTION PATH:
                </div>
                {stages.map((st, idx) => {
                  const isSelected = idx === currentIdx;
                  return (
                    <button
                      key={st.title}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      className={`css-ai-path-node ${isSelected ? 'is-active' : ''}`}
                      onClick={() => onSelectStage(idx)}
                    >
                      <span className="css-ai-path-idx">0{idx + 1}</span>
                      <div className="css-ai-path-copy">
                        <strong>{st.title}</strong>
                        <small>{AI_EXECUTION_PATHS[idx]?.pathCode}</small>
                      </div>
                      <ChevronRight size={16} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom: Business Action & Telemetry Feedback Strip */}
            <div className="css-ai-action-feedback-bar">
              <div className="css-ai-outcome-cell">
                <small>05 · VERIFIED BUSINESS ACTION</small>
                <strong>{pathMeta.businessAction}</strong>
              </div>
              <span className="css-ai-outcome-arrow" aria-hidden="true">
                ⇄
              </span>
              <div className="css-ai-outcome-cell is-feedback">
                <small>06 · TELEMETRY &amp; CONTINUOUS LEARNING</small>
                <strong>{pathMeta.feedbackLoop}</strong>
              </div>
            </div>
          </div>

          {/* RIGHT: Contextual Execution Path Inspector */}
          <div className="css-active-stage-inspector" role="tabpanel">
            <div className="css-inspector-eyebrow-row">
              <span
                className="css-inspector-badge"
                style={{ backgroundColor: accentColor, color: '#ffffff' }}
              >
                {pathMeta.pathCode}
              </span>
              <span className="css-inspector-step-count">
                SYSTEM 0{currentIdx + 1} / 0{stages.length}
              </span>
            </div>

            <h3 className="css-inspector-title">{current.title}</h3>
            <p className="css-inspector-desc">{current.desc}</p>

            <div className="css-stage-handoff-box">
              <div className="css-handoff-row">
                <small>TRIGGER INPUT</small>
                <strong>{pathMeta.triggerSource}</strong>
              </div>
              <div className="css-handoff-row is-highlight">
                <small>HUMAN-IN-THE-LOOP CONTROL</small>
                <strong>{pathMeta.humanGate}</strong>
              </div>
              <div className="css-handoff-row">
                <small>AUTOMATED OUTPUT</small>
                <strong>{pathMeta.businessAction}</strong>
              </div>
            </div>

            <div className="css-inspector-attributes">
              <small className="css-attr-heading">SYSTEM CAPABILITIES INCLUDED:</small>
              <div className="css-attr-tag-grid">
                {current.includes.map((inc) => (
                  <span key={inc} className="css-attr-tag">
                    <Check size={13} />
                    <span>{inc}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="css-inspector-cta-row">
              <button
                type="button"
                className="hp-btn-3d hp-btn-3d--red css-contextual-primary-btn"
                onClick={() => onNavigate(`/services/${current.slug}`)}
              >
                <span className="hp-btn-3d-inner">
                  <span>Explore {current.title}</span>
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Inline Directory for All 6 AI & Automation Services */}
        <div className="css-inline-service-directory" aria-label="Direct AI Service Links">
          <span className="css-directory-label">ALL 6 AI &amp; AUTOMATION SYSTEMS:</span>
          <div className="css-directory-links">
            {stages.map((st, idx) => (
              <button
                key={st.title}
                type="button"
                className={`css-inline-service-link ${idx === currentIdx ? 'is-current' : ''}`}
                onClick={() => onNavigate(`/services/${st.slug}`)}
              >
                <span>
                  0{idx + 1} · {st.title}
                </span>
                <ArrowUpRight size={13} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
 * 4. WEBSITES & E-COMMERCE VARIANT — INTERACTIVE "DIGITAL EXPERIENCE BUILDER"
 * Layered stages: Strategy → Sitemap → Wireframe → Interface → Responsive Experience → Commerce → Conversion
 * ========================================================================== */
const WEB_EXPERIENCE_LAYERS = [
  'Strategy',
  'Sitemap',
  'Wireframe',
  'Interface',
  'Responsive Experience',
  'Commerce',
  'Conversion'
];

const WEB_MODULE_SPECS = [
  {
    layerBadge: 'MODULE 01 · BRAND & CONVERSION ARCHITECTURE',
    activeLayerIndex: 3,
    wireframeLabel: 'SITEMAP & MESSAGE HIERARCHY',
    interfaceTitle: 'High-Trust Brand & Service Experience',
    interfaceSub: 'Clear value proposition, authority proof, and guided buyer navigation.',
    mobilePreviewLabel: 'Responsive Mobile Navigation & Fast Tap CTA',
    commerceFlow: ['Brand Positioning', 'Information Architecture', 'Responsive Interface', 'Enquiry Conversion']
  },
  {
    layerBadge: 'MODULE 02 · CAMPAIGN CONVERSION ARCHITECTURE',
    activeLayerIndex: 4,
    wireframeLabel: 'MESSAGE-MATCHED OFFER WIREFRAME',
    interfaceTitle: 'Focused Campaign Landing Experience',
    interfaceSub: 'Zero-distraction offer framing built around one measurable conversion goal.',
    mobilePreviewLabel: 'Thumb-Friendly Mobile Form & Social Proof Strip',
    commerceFlow: ['Ad Hook Alignment', 'Focused Value Offer', 'Trust Signals', 'Frictionless Lead Capture']
  },
  {
    layerBadge: 'MODULE 03 · DIGITAL STOREFRONT & CHECKOUT',
    activeLayerIndex: 5,
    wireframeLabel: 'CATALOG, FILTER & CART FLOW',
    interfaceTitle: 'Conversion-Focused E-Commerce Storefront',
    interfaceSub: 'Intuitive product discovery, rich evaluation pages, and frictionless checkout.',
    mobilePreviewLabel: 'Mobile Product Gallery + 1-Tap Cart & Payment',
    commerceFlow: ['Product Discovery', 'Clear Product Evaluation', 'Streamlined Cart', 'Frictionless Checkout']
  },
  {
    layerBadge: 'MODULE 04 · SHOPIFY GROWTH ECOSYSTEM',
    activeLayerIndex: 6,
    wireframeLabel: 'SHOPIFY THEME, APPS & ORDER SYNC',
    interfaceTitle: 'Custom Shopify Store & Connected Operations',
    interfaceSub: 'Tailored Shopify storefront integrated with inventory, analytics, and retention apps.',
    mobilePreviewLabel: 'High-Speed Mobile Checkout + Order Sync',
    commerceFlow: ['Shopify Core Setup', 'Brand Customization', 'Catalog Structure', 'App & CRM Workflow Sync']
  }
];

function WebsitesExperienceBuilder({
  sectionId,
  eyebrow,
  title,
  subtitle,
  stages = [],
  activeStage = 0,
  onSelectStage,
  accentColor = '#2563eb',
  reducedMotion,
  onNavigate
}) {
  const [viewMode, setViewMode] = useState('assembled'); // 'wireframe' | 'assembled'
  const currentIdx = activeStage % Math.max(stages.length, 1);
  const current = stages[currentIdx] || stages[0];
  const spec = WEB_MODULE_SPECS[currentIdx] || WEB_MODULE_SPECS[0];

  return (
    <section
      id={sectionId}
      data-section-id={sectionId}
      data-capability-variant="websites-ecommerce"
      data-reduced-motion={reducedMotion ? 'true' : 'false'}
      className="bsp-section bsp-section--white css-cap-section css-cap--web"
    >
      <div className="mp-container">
        <div className="css-compact-header">
          <div className="css-header-title-group">
            <span className="hp-mono-pill hp-mono-pill--yellow">{eyebrow}</span>
            <h2 className="mp-h2 css-tight-h2">{title}</h2>
            <p className="css-header-sub">{subtitle}</p>
          </div>

          <div className="css-header-status-box">
            <small>DIGITAL EXPERIENCE BUILDER</small>
            <strong>
              ACTIVE MODULE: 0{currentIdx + 1} · {current.title.toUpperCase()}
            </strong>
            <span className="css-status-subnote">
              Wireframe → Styled Interface → Responsive Mobile → Conversion
            </span>
          </div>
        </div>

        {/* 7-Stage Layered Construction Ribbon */}
        <div className="css-web-layers-ribbon" aria-label="Experience Construction Layers">
          {WEB_EXPERIENCE_LAYERS.map((layerName, lIdx) => {
            const isLit = lIdx <= spec.activeLayerIndex;
            return (
              <div
                key={layerName}
                className={`css-web-layer-step ${isLit ? 'is-lit' : ''}`}
              >
                <small>0{lIdx + 1}</small>
                <span>{layerName}</span>
              </div>
            );
          })}
        </div>

        {/* Asymmetric Experience Builder Workspace */}
        <div className="css-web-builder-workspace">
          {/* Left: Capability Module Tabs + Active Editorial Specification */}
          <div className="css-web-builder-left">
            <div
              className="css-web-module-tabs"
              role="tablist"
              aria-label="Web and E-Commerce Capability Modules"
            >
              {stages.map((st, idx) => {
                const isSelected = idx === currentIdx;
                return (
                  <button
                    key={st.title}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`css-web-module-tab ${isSelected ? 'is-active' : ''}`}
                    onClick={() => onSelectStage(idx)}
                  >
                    <span className="css-web-tab-num">0{idx + 1}</span>
                    <strong>{st.title}</strong>
                  </button>
                );
              })}
            </div>

            <div className="css-active-stage-inspector css-web-inspector" role="tabpanel">
              <div className="css-inspector-eyebrow-row">
                <span
                  className="css-inspector-badge"
                  style={{ backgroundColor: accentColor, color: '#ffffff' }}
                >
                  {spec.layerBadge}
                </span>
                <span className="css-inspector-step-count">
                  0{currentIdx + 1} / 0{stages.length}
                </span>
              </div>

              <h3 className="css-inspector-title">{current.title}</h3>
              <p className="css-inspector-desc">{current.desc}</p>

              <div className="css-inspector-attributes">
                <small className="css-attr-heading">INCLUDED IN THIS BUILD:</small>
                <div className="css-attr-tag-grid">
                  {current.includes.map((inc) => (
                    <span key={inc} className="css-attr-tag">
                      <Check size={13} />
                      <span>{inc}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="css-inspector-cta-row">
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--red css-contextual-primary-btn"
                  onClick={() => onNavigate(`/services/${current.slug}`)}
                >
                  <span className="hp-btn-3d-inner">
                    <span>Explore {current.title}</span>
                    <ArrowUpRight size={16} />
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Evolving Wireframe-to-Interface + Responsive Mobile + Commerce Canvas */}
          <div className="css-web-live-assembly-stage">
            <div className="css-canvas-topbar">
              <span className="css-canvas-tag">{spec.wireframeLabel}</span>
              <div className="css-web-view-toggle">
                <button
                  type="button"
                  className={`css-cycle-btn ${viewMode === 'wireframe' ? 'is-active' : ''}`}
                  onClick={() => setViewMode('wireframe')}
                >
                  01 · Structural Wireframe
                </button>
                <button
                  type="button"
                  className={`css-cycle-btn ${viewMode === 'assembled' ? 'is-active' : ''}`}
                  onClick={() => setViewMode('assembled')}
                >
                  02 · Live Styled Interface
                </button>
              </div>
            </div>

            <div className={`css-web-viewport-composer is-${viewMode}`}>
              {/* Desktop Interface Canvas */}
              <div className="css-web-desktop-window">
                <div className="css-window-chrome">
                  <span className="css-chrome-dots">● ● ●</span>
                  <span className="css-chrome-url">
                    axonvortex.build/{current.slug}
                  </span>
                  <span className="css-chrome-mode">
                    {viewMode === 'wireframe' ? 'WIREFRAME GRID' : 'LIVE INTERFACE'}
                  </span>
                </div>

                <div className="css-window-body">
                  <div className="css-window-hero-block">
                    <small>{spec.layerBadge}</small>
                    <h4>{spec.interfaceTitle}</h4>
                    <p>{spec.interfaceSub}</p>
                  </div>

                  {/* 4-Stage Connected Journey Inside the Evolving Interface */}
                  <div className="css-window-flow-grid">
                    {spec.commerceFlow.map((stepLabel, sIdx) => (
                      <div key={stepLabel} className="css-window-flow-card">
                        <span className="css-wf-num">0{sIdx + 1}</span>
                        <strong>{stepLabel}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Overlapping Responsive Mobile Adaptation Frame */}
              <div className="css-web-mobile-companion">
                <div className="css-mobile-notch" />
                <small>RESPONSIVE ADAPTATION</small>
                <strong>{spec.mobilePreviewLabel}</strong>
                <span className="css-mobile-check">✓ Mobile Conversion Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Inline Directory for All 4 Web & E-Commerce Services */}
        <div className="css-inline-service-directory" aria-label="Direct Web Service Links">
          <span className="css-directory-label">ALL 4 WEB &amp; COMMERCE CAPABILITIES:</span>
          <div className="css-directory-links">
            {stages.map((st, idx) => (
              <button
                key={st.title}
                type="button"
                className={`css-inline-service-link ${idx === currentIdx ? 'is-current' : ''}`}
                onClick={() => onNavigate(`/services/${st.slug}`)}
              >
                <span>
                  0{idx + 1} · {st.title}
                </span>
                <ArrowUpRight size={13} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
 * 5. TECHNOLOGY & DIGITAL TRANSFORMATION VARIANT — "CONNECTED BUSINESS BLUEPRINT"
 * Existing tools & processes → CRM → ERP → Custom Software → Integrations → Automation → Roadmap
 * ========================================================================== */
const DT_BLUEPRINT_MODULES = [
  {
    tierCode: 'ARCHITECTURE LAYER 01 · CUSTOMER & PIPELINE CORE',
    legacyState: 'Scattered spreadsheets, inbox threads & untracked sales follow-up',
    connectedRole: 'Centralizes every lead, customer record, pipeline stage, and sales activity.',
    inboundData: 'Marketing Campaigns, Website Forms & Direct Enquiries',
    outboundData: 'Closed-Won Deals → ERP Operations & Automated Onboarding'
  },
  {
    tierCode: 'ARCHITECTURE LAYER 02 · OPERATIONS & RESOURCE CORE',
    legacyState: 'Disconnected department trackers, inventory blindspots & manual reporting',
    connectedRole: 'Unifies finance, inventory, fulfillment, and cross-department resource visibility.',
    inboundData: 'CRM Orders, Supplier Feeds & Resource Schedules',
    outboundData: 'Real-Time Margin, Inventory & Delivery Telemetry'
  },
  {
    tierCode: 'ARCHITECTURE LAYER 03 · TAILORED BUSINESS LOGIC',
    legacyState: 'Rigid off-the-shelf tool workarounds that force manual team habits',
    connectedRole: 'Custom portals, internal tools, and API bridges built around your exact workflows.',
    inboundData: 'Proprietary Operational Rules & Customer Portal Actions',
    outboundData: 'Bi-Directional API Sync with CRM & ERP Cores'
  },
  {
    tierCode: 'ARCHITECTURE LAYER 04 · CROSS-SYSTEM AUTOMATION BUS',
    legacyState: 'Repetitive copy-pasting, manual approvals & delayed handoffs between teams',
    connectedRole: 'Automates multi-system data transfers, approvals, alerts, and recurring tasks.',
    inboundData: 'Triggers from CRM, ERP & Custom Software Events',
    outboundData: 'Instant Cross-Department Execution & Audit Logs'
  },
  {
    tierCode: 'ARCHITECTURE LAYER 05 · SEQUENCED TRANSFORMATION ROADMAP',
    legacyState: 'Ad-hoc tool purchases without an overarching operational architecture',
    connectedRole: 'Phased modernization roadmap aligning technology, processes, and team adoption.',
    inboundData: 'Operational Bottleneck Audit & Legacy Dependency Map',
    outboundData: 'Unified, Scalable Business Operating Architecture'
  }
];

function DigitalTransformationConnectedBlueprint({
  sectionId,
  eyebrow,
  title,
  subtitle,
  stages = [],
  activeStage = 0,
  onSelectStage,
  accentColor = '#a3e635',
  reducedMotion,
  onNavigate
}) {
  const [blueprintState, setBlueprintState] = useState('connected'); // 'disconnected' | 'connected'
  const currentIdx = activeStage % Math.max(stages.length, 1);
  const current = stages[currentIdx] || stages[0];
  const modMeta = DT_BLUEPRINT_MODULES[currentIdx] || DT_BLUEPRINT_MODULES[0];

  return (
    <section
      id={sectionId}
      data-section-id={sectionId}
      data-capability-variant="digital-transformation"
      data-reduced-motion={reducedMotion ? 'true' : 'false'}
      className="bsp-section bsp-section--cream css-cap-section css-cap--dt"
    >
      <div className="mp-container">
        <div className="css-compact-header">
          <div className="css-header-title-group">
            <span className="hp-mono-pill hp-mono-pill--yellow">{eyebrow}</span>
            <h2 className="mp-h2 css-tight-h2">{title}</h2>
            <p className="css-header-sub">{subtitle}</p>
          </div>

          <div className="css-header-status-box">
            <small>CONNECTED BUSINESS BLUEPRINT</small>
            <strong>
              {blueprintState === 'connected'
                ? 'STATE: UNIFIED ARCHITECTURE SYNCED ✓'
                : 'STATE: LEGACY SILOS & HIDDEN DEPENDENCIES'}
            </strong>
            <div className="css-dt-state-switch">
              <button
                type="button"
                className={`css-cycle-btn ${blueprintState === 'disconnected' ? 'is-active' : ''}`}
                onClick={() => setBlueprintState('disconnected')}
              >
                01 · Legacy Silos
              </button>
              <button
                type="button"
                className={`css-cycle-btn ${blueprintState === 'connected' ? 'is-active' : ''}`}
                onClick={() => setBlueprintState('connected')}
              >
                02 · Unified Blueprint
              </button>
            </div>
          </div>
        </div>

        <div className="css-dt-blueprint-workspace">
          {/* Left: Interactive Architectural Blueprint Schematic */}
          <div
            className={`css-dt-schematic-board is-${blueprintState}`}
            role="tablist"
            aria-label="Connected Business Blueprint Layers"
          >
            <div className="css-dt-board-header">
              <span>EXISTING TOOLS &amp; PROCESSES → CONNECTED ARCHITECTURE BUS</span>
              <small>Select any architecture layer to inspect its data bridges</small>
            </div>

            <div className="css-dt-modules-matrix">
              {stages.map((st, idx) => {
                const isSelected = idx === currentIdx;
                const m = DT_BLUEPRINT_MODULES[idx] || DT_BLUEPRINT_MODULES[0];
                return (
                  <button
                    key={st.title}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`css-dt-module-node ${isSelected ? 'is-active' : ''}`}
                    onClick={() => onSelectStage(idx)}
                  >
                    <div className="css-dt-node-top">
                      <span className="css-dt-layer-pill">LAYER 0{idx + 1}</span>
                      <span className="css-dt-bridge-state">
                        {blueprintState === 'connected' ? 'DATA BRIDGE ACTIVE ⇄' : 'SILO DETECTED'}
                      </span>
                    </div>
                    <h4>{st.title}</h4>
                    <p>
                      {blueprintState === 'connected' ? m.connectedRole : m.legacyState}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Central Data-Flow Conduit Bar */}
            <div className="css-dt-conduit-bus">
              <span>REAL-TIME DATA CONDUIT:</span>
              <strong>
                CRM ⇄ ERP ⇄ Custom Software ⇄ Integrations &amp; Automation ⇄ Executive Visibility
              </strong>
            </div>
          </div>

          {/* Right: Active Architecture Layer Specification Panel */}
          <div className="css-active-stage-inspector" role="tabpanel">
            <div className="css-inspector-eyebrow-row">
              <span
                className="css-inspector-badge"
                style={{ backgroundColor: accentColor, color: '#0b0f17' }}
              >
                {modMeta.tierCode}
              </span>
              <span className="css-inspector-step-count">
                LAYER 0{currentIdx + 1} / 0{stages.length}
              </span>
            </div>

            <h3 className="css-inspector-title">{current.title}</h3>
            <p className="css-inspector-desc">{current.desc}</p>

            <div className="css-stage-handoff-box">
              <div className="css-handoff-row">
                <small>LEGACY FRICTION REPLACED</small>
                <strong>{modMeta.legacyState}</strong>
              </div>
              <div className="css-handoff-row is-highlight">
                <small>INBOUND DATA CONNECTIONS</small>
                <strong>{modMeta.inboundData}</strong>
              </div>
              <div className="css-handoff-row">
                <small>OUTBOUND SYSTEM SYNC</small>
                <strong>{modMeta.outboundData}</strong>
              </div>
            </div>

            <div className="css-inspector-attributes">
              <small className="css-attr-heading">ARCHITECTURAL DELIVERABLES:</small>
              <div className="css-attr-tag-grid">
                {current.includes.map((inc) => (
                  <span key={inc} className="css-attr-tag">
                    <Check size={13} />
                    <span>{inc}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="css-inspector-cta-row">
              <button
                type="button"
                className="hp-btn-3d hp-btn-3d--red css-contextual-primary-btn"
                onClick={() => onNavigate(`/services/${current.slug}`)}
              >
                <span className="hp-btn-3d-inner">
                  <span>Explore {current.title}</span>
                  <ArrowUpRight size={16} />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Inline Directory for All 5 Technology & Digital Transformation Services */}
        <div className="css-inline-service-directory" aria-label="Direct Technology Service Links">
          <span className="css-directory-label">ALL 5 TRANSFORMATION CAPABILITIES:</span>
          <div className="css-directory-links">
            {stages.map((st, idx) => (
              <button
                key={st.title}
                type="button"
                className={`css-inline-service-link ${idx === currentIdx ? 'is-current' : ''}`}
                onClick={() => onNavigate(`/services/${st.slug}`)}
              >
                <span>
                  0{idx + 1} · {st.title}
                </span>
                <ArrowUpRight size={13} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Shared Flexible Capability-Story System
 * Supports controlled or uncontrolled `activeStage` and renders a distinct visual + interactive
 * architecture for each of the 5 AxonVortex Core Solution pages.
 */
export function CapabilityStorySystem({
  variant = 'lead-generation',
  sectionId,
  title,
  eyebrow,
  subtitle,
  stages = [],
  activeStage,
  onStageChange,
  visualType,
  motionType,
  ctaMode = 'contextual-single',
  mobileMode = 'vertical-connected-path',
  reducedMotion: reducedMotionProp,
  accentColor,
  onNavigate
}) {
  const [internalStage, setInternalStage] = useState(0);
  const reducedMotion = usePrefersReducedMotion(reducedMotionProp);

  const resolvedStage =
    typeof activeStage === 'number' ? activeStage : internalStage;
  const handleSelectStage = (idx) => {
    setInternalStage(idx);
    if (typeof onStageChange === 'function') {
      onStageChange(idx);
    }
  };

  const commonProps = {
    sectionId,
    eyebrow,
    title,
    subtitle,
    stages,
    activeStage: resolvedStage,
    onSelectStage: handleSelectStage,
    visualType,
    motionType,
    ctaMode,
    mobileMode,
    reducedMotion,
    accentColor,
    onNavigate
  };

  switch (variant) {
    case 'digital-marketing':
      return <DigitalMarketingConstellation {...commonProps} />;
    case 'ai-automation':
      return <AiAutomationOrchestrator {...commonProps} />;
    case 'websites-ecommerce':
      return <WebsitesExperienceBuilder {...commonProps} />;
    case 'digital-transformation':
      return <DigitalTransformationConnectedBlueprint {...commonProps} />;
    case 'lead-generation':
    default:
      return <LeadGenerationOpportunityPipeline {...commonProps} />;
  }
}

export default CapabilityStorySystem;
