import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
  Pause,
  Play,
  Sparkles,
  Layers,
  Workflow,
  Search,
  Bot,
  PhoneCall,
  Globe,
  ShoppingBag,
  Database,
  Code2,
  Compass,
  TrendingUp,
  ShieldCheck,
  GitBranch,
  Activity,
  Cpu,
  Sliders,
  Filter
} from 'lucide-react';
import TypewriterHeading from './TypewriterHeading';
import { CapabilityStorySystem } from './CapabilityStorySystem';
import { CORE_SOLUTIONS } from '../data/agencyData';
import { useRouteMotion } from '../data/routeMotionMatrix';
import { useSectionMotionEngine } from '../data/motionManifest';
import { getReadableTextColor } from './ServicePageExperiences';

gsap.registerPlugin(ScrollTrigger);

/**
 * Shared Open-Canvas Top Breadcrumb + 5-Pillar Switcher Bar
 */
function PillarOpenTopBar({ pillar, onNavigate }) {
  return (
    <div className="bsp-topbar">
      <div className="mp-breadcrumb-bar" style={{ marginBottom: 14 }}>
        <button
          type="button"
          className="mp-back-btn"
          onClick={() => onNavigate('/')}
        >
          <ArrowLeft size={15} />
          <span>Home</span>
        </button>
        <ChevronRight size={14} className="mp-crumb-sep" />
        <button
          type="button"
          className="mp-crumb-link"
          onClick={() => onNavigate('/solutions')}
        >
          Solutions
        </button>
        <ChevronRight size={14} className="mp-crumb-sep" />
        <span className="mp-crumb-current">
          {pillar.index} · {pillar.title}
        </span>
      </div>

      <div className="bsp-pillar-ribbon" role="navigation" aria-label="Core Solution Pillars">
        {CORE_SOLUTIONS.map((s) => {
          const active = s.id === pillar.id;
          return (
            <button
              key={s.id}
              type="button"
              className={`bsp-ribbon-tab ${active ? 'is-active' : ''}`}
              style={
                active
                  ? {
                      backgroundColor: s.accentColor,
                      color: getReadableTextColor(s.accentColor)
                    }
                  : {}
              }
              onClick={() => onNavigate(s.route)}
            >
              <span className="bsp-ribbon-idx">{s.index}</span>
              <span>{s.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Reusable Viewport-Aware Short Looping WebM Video + Static Poster Stage
 * Pauses automatically when offscreen; renders static poster in prefers-reduced-motion mode.
 */
function PillarLoopVideoCanvas({ pillar, caption }) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => {
      setReducedMotion(e.matches);
      if (e.matches) setIsPlaying(false);
    };
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  useEffect(() => {
    if (!wrapRef.current || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(wrapRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (reducedMotion || !isPlaying || !isInView) {
      vid.pause();
    } else {
      vid.play().catch(() => {});
    }
  }, [reducedMotion, isPlaying, isInView, pillar.id]);

  const posterWebp = `/media/pillars/${pillar.id}/hero-system.webp`;
  const fallbackSvg = `/media/pillars/${pillar.id}/hero-system.svg`;
  const videoWebm = `/media/pillars/${pillar.id}/motion-loop.webm`;
  const badgeText = getReadableTextColor(pillar.accentColor);

  return (
    <div ref={wrapRef} className="bsp-media-stage">
      <div className="bsp-media-header">
        <span
          className="hp-mono-pill"
          style={{ backgroundColor: pillar.accentColor, color: badgeText }}
        >
          {reducedMotion
            ? 'STATIC BLUEPRINT POSTER (REDUCED MOTION)'
            : 'LIVE 5S SYSTEM LOOP · AUTO-PAUSED OFFSCREEN'}
        </span>
        {!reducedMotion && (
          <button
            type="button"
            className="bsp-media-toggle-btn"
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? 'Pause system loop video' : 'Play system loop video'}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            <span>{isPlaying ? 'Pause Clip' : 'Play Clip'}</span>
          </button>
        )}
      </div>

      <div className="bsp-media-dual-view">
        <div
          className="bsp-video-frame rx-video-loop-frame"
          data-video-state={isPlaying && !reducedMotion ? 'playing' : 'paused'}
        >
          {reducedMotion ? (
            <img
              src={posterWebp}
              alt={`${pillar.title} static architecture poster`}
              width="720"
              height="260"
              loading="lazy"
              className="rx-diagram-img bsp-diagram-img"
            />
          ) : (
            <video
              ref={videoRef}
              src={videoWebm}
              poster={posterWebp}
              muted
              loop
              playsInline
              preload="metadata"
              width="720"
              height="260"
              className="bsp-loop-video"
              aria-label={`${pillar.title} looping system animation`}
            />
          )}
        </div>

        <div className="bsp-poster-frame">
          <picture>
            <source srcSet={posterWebp} type="image/webp" />
            <img
              src={fallbackSvg}
              alt={`${pillar.title} system architecture blueprint`}
              width="960"
              height="520"
              loading="lazy"
              className="bsp-diagram-img"
            />
          </picture>
        </div>
      </div>

      {caption && <p className="bsp-media-caption">{caption}</p>}
    </div>
  );
}

/**
 * Shared Supporting Diagram Strip (2nd Local Visual Composition per Page)
 */
function PillarSupportingBlueprint({ pillar, label, caption }) {
  const supWebp = `/media/pillars/${pillar.id}/supporting-diagram.webp`;
  const supSvg = `/media/pillars/${pillar.id}/supporting-diagram.svg`;
  return (
    <figure className="bsp-supporting-figure">
      <div className="bsp-supporting-top">
        <span className="hp-mono-pill hp-mono-pill--yellow">{label}</span>
        <span className="bsp-supporting-chain">
          {pillar.systemChain.join(' → ')}
        </span>
      </div>
      <picture>
        <source srcSet={supWebp} type="image/webp" />
        <img
          src={supSvg}
          alt={`${pillar.title} supporting feedback and execution diagram`}
          width="960"
          height="440"
          loading="lazy"
          className="bsp-supporting-img"
        />
      </picture>
      {caption && <figcaption className="bsp-supporting-caption">{caption}</figcaption>}
    </figure>
  );
}

/* ============================================================================
 * 1. DIGITAL MARKETING PAGE (/solutions/digital-marketing)
 * Concept: "From scattered market signals to measurable demand."
 * Rhythm: Signal → Problem Drift → Demand Engine (Signature Sequence) →
 *         Open Spatial Channel Map → Closed-Loop Measurement → Signal Convergence CTA
 * ========================================================================== */
const DM_SIGNALS = [
  {
    id: 'search-query',
    category: 'Search Intent',
    tag: 'GOOGLE SEARCH SIGNAL',
    text: '“best growth partner for B2B lead generation”',
    channel: 'Google Ads + SEO',
    angle: -18,
    color: '#f59e0b'
  },
  {
    id: 'social-reel',
    category: 'Social Reach',
    tag: '9:16 REEL & CAROUSEL',
    text: 'Problem-led breakdown shared across LinkedIn & Instagram',
    channel: 'Social Media Marketing',
    angle: -6,
    color: '#ff4d2d'
  },
  {
    id: 'meta-layer',
    category: 'Paid Media',
    tag: 'TARGETED AUDIENCE LAYER',
    text: 'Decision-maker segment matched with conversion creative',
    channel: 'Meta Ads',
    angle: 8,
    color: '#8b5cf6'
  },
  {
    id: 'organic-guide',
    category: 'Search Intent',
    tag: 'TOPIC AUTHORITY CLUSTER',
    text: 'High-intent comparison & solution architecture page',
    channel: 'SEO + Content Marketing',
    angle: 19,
    color: '#a3e635'
  }
];

const DM_DEMAND_ENGINE_STAGES = [
  {
    step: '01',
    name: 'Strategy Foundation',
    role: 'DEFINE AUDIENCE & POSITIONING',
    desc: 'Before a single post or ad goes live, Strategy establishes who you need to reach, what problem they are solving, and why your offer matters.',
    activeNodes: ['Strategy']
  },
  {
    step: '02',
    name: 'Content Branching',
    role: 'MULTI-FORMAT MESSAGE ADAPTATION',
    desc: 'One core strategic narrative branches into educational guides, social carousels, short-form video hooks, and search-intent landing copy.',
    activeNodes: ['Strategy', 'Content']
  },
  {
    step: '03',
    name: 'Channel Activation',
    role: 'SOCIAL · META · GOOGLE · SEO',
    desc: 'Social builds authority, Meta Ads reach targeted audience layers, Google Ads capture active searchers, and SEO compounds organic visibility.',
    activeNodes: ['Strategy', 'Content', 'Distribution']
  },
  {
    step: '04',
    name: 'Traffic Convergence',
    role: 'QUALIFIED VISITOR STREAMS',
    desc: 'Instead of scattered clicks going to generic pages, qualified attention converges toward message-matched website and campaign destinations.',
    activeNodes: ['Strategy', 'Content', 'Distribution', 'Traffic']
  },
  {
    step: '05',
    name: 'Conversion Capture',
    role: 'ATTENTION BECOMES ENQUIRY',
    desc: 'Clear value hierarchy and friction-free capture turn qualified visitors into real business enquiries and pipeline opportunities.',
    activeNodes: ['Strategy', 'Content', 'Distribution', 'Traffic', 'Conversion']
  },
  {
    step: '06',
    name: 'Attribution Return',
    role: 'VERIFIED PERFORMANCE SIGNALS',
    desc: 'Conversion tracking feeds real outcome data back to the campaign layer so you know which channels and messages drive actual business.',
    activeNodes: ['Strategy', 'Content', 'Distribution', 'Traffic', 'Conversion', 'Measurement']
  },
  {
    step: '07',
    name: 'Connected Marketing Loop',
    role: 'COMPOUNDING DEMAND SYSTEM',
    desc: 'Every cycle sharpens audience targeting, creative positioning, and search authority—turning disconnected activity into measurable progress.',
    activeNodes: ['Strategy', 'Content', 'Distribution', 'Traffic', 'Conversion', 'Measurement']
  }
];

function DigitalMarketingPillarExperience({ pillar, onNavigate, onOpenAudit }) {
  const [signalFilter, setSignalFilter] = useState('All Signals');
  const [engineStage, setEngineStage] = useState(6);
  const [activeChannelIdx, setActiveChannelIdx] = useState(0);

  const visibleSignals =
    signalFilter === 'All Signals'
      ? DM_SIGNALS
      : DM_SIGNALS.filter((s) => s.category === signalFilter);

  const currentEngine = DM_DEMAND_ENGINE_STAGES[engineStage] || DM_DEMAND_ENGINE_STAGES[0];

  return (
    <div className="bsp-pillar-root bsp-pillar--dm">
      {/* 1. ASYMMETRIC OPEN SIGNAL-TO-DEMAND HERO (NO OUTER BOX) */}
      <section
        id="pillar-digital-marketing-hero"
        data-section-id="pillar-digital-marketing-hero"
        className="bsp-open-hero"
      >
        <div className="mp-container">
          <PillarOpenTopBar pillar={pillar} onNavigate={onNavigate} />

          <div className="bsp-dm-hero-layout">
            {/* Left Editorial Column on Open Cream Canvas */}
            <div className="bsp-dm-hero-copy">
              <div className="bsp-eyebrow-row">
                <span
                  className="hp-mono-pill"
                  style={{ backgroundColor: pillar.accentColor, color: '#0b0f17' }}
                >
                  SOLUTION PILLAR {pillar.index} · {pillar.title.toUpperCase()}
                </span>
                <span className="bsp-rhythm-tag">
                  SIGNAL → DISTRIBUTION → DEMAND → CONVERSION → MEASUREMENT
                </span>
              </div>

              <TypewriterHeading
                tag="h1"
                text={pillar.headline}
                typingSpeed={8}
                className="hp-serif-display bsp-hero-h1"
              />

              <p className="bsp-hero-lead">{pillar.shortDesc}</p>
              <p className="bsp-hero-body">{pillar.fullDesc}</p>

              <div className="mp-hero-actions" style={{ justifyContent: 'flex-start' }}>
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--red"
                  onClick={() => onOpenAudit(pillar.title)}
                >
                  <span className="hp-btn-3d-inner">{pillar.actionCta}</span>
                </button>
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--yellow"
                  onClick={() => onNavigate('/growth-audit')}
                >
                  <span className="hp-btn-3d-inner">Request Digital Growth Audit</span>
                </button>
              </div>
            </div>

            {/* Right Asymmetric Spatial Signal Convergence Stage */}
            <div className="bsp-dm-signal-field">
              <div className="bsp-signal-filter-row" role="tablist" aria-label="Filter market signals">
                {['All Signals', 'Search Intent', 'Social Reach', 'Paid Media'].map((f) => (
                  <button
                    key={f}
                    type="button"
                    role="tab"
                    aria-selected={signalFilter === f}
                    className={`bsp-filter-chip ${signalFilter === f ? 'is-active' : ''}`}
                    onClick={() => setSignalFilter(f)}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="bsp-dm-signal-canvas">
                {/* Hand-Drawn Directional Vector Conduits */}
                <svg
                  className="bsp-dm-signal-svg"
                  viewBox="0 0 560 360"
                  aria-hidden="true"
                >
                  <path
                    d="M 40 60 C 190 60, 240 180, 355 180"
                    fill="none"
                    stroke="#0b0f17"
                    strokeWidth="2.5"
                    strokeDasharray="7 5"
                  />
                  <path
                    d="M 40 140 C 180 140, 245 180, 355 180"
                    fill="none"
                    stroke="#ff4d2d"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M 40 220 C 180 220, 245 180, 355 180"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M 40 300 C 190 300, 240 180, 355 180"
                    fill="none"
                    stroke="#0b0f17"
                    strokeWidth="2.5"
                    strokeDasharray="7 5"
                  />
                  <path
                    d="M 430 180 L 525 180"
                    fill="none"
                    stroke="#a3e635"
                    strokeWidth="4"
                  />
                  <polygon points="525,173 542,180 525,187" fill="#0b0f17" />
                </svg>

                {/* Scattered Signal Fragments */}
                <div className="bsp-dm-fragments-col">
                  {visibleSignals.map((sig) => (
                    <div
                      key={sig.id}
                      className="bsp-signal-fragment"
                      style={{ '--sig-color': sig.color }}
                    >
                      <div className="bsp-signal-fragment-meta">
                        <span
                          className="bsp-signal-dot"
                          style={{ backgroundColor: sig.color }}
                        />
                        <small>{sig.tag}</small>
                      </div>
                      <strong>{sig.text}</strong>
                      <span className="bsp-signal-channel-label">
                        → {sig.channel}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Central Demand Engine Core + Output Conversion Node */}
                <div className="bsp-dm-engine-hub">
                  <div className="bsp-dm-core-orb">
                    <small>AXONVORTEX</small>
                    <strong>DEMAND ENGINE</strong>
                    <span>Strategy + Creative + Data</span>
                  </div>
                  <div className="bsp-dm-conversion-node">
                    <span className="bsp-node-badge">MEASURABLE DEMAND</span>
                    <strong>Qualified Visit → Enquiry</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE MARKETING PROBLEM: SCATTERED SIGNAL DRIFT VS. CONNECTED SYSTEM */}
      <section
        id="pillar-digital-marketing-problem-system"
        data-section-id="pillar-digital-marketing-problem-system"
        className="bsp-section bsp-section--ink"
      >
        <div className="mp-container">
          <div className="bsp-open-editorial-split">
            <div className="bsp-editorial-left">
              <span className="hp-mono-pill hp-mono-pill--yellow">
                01 · THE MARKETING PROBLEM
              </span>
              <h2 className="mp-h2 mp-h2--white" style={{ marginTop: 14 }}>
                {pillar.problemTitle}
              </h2>
              <p className="bsp-editorial-lead-light">{pillar.problemBody}</p>
            </div>

            {/* Fragmented Signals Moving in Unrelated Directions */}
            <div className="bsp-drift-canvas" aria-label="Disconnected marketing signals drifting apart">
              <div className="bsp-drift-header">
                <span>SYMPTOM DIAGNOSTIC: UNCOORDINATED CHANNEL DRIFT</span>
              </div>
              <div className="bsp-drift-vectors">
                <div className="bsp-drift-ray bsp-drift-ray--up">
                  <span className="bsp-drift-arrow">↖</span>
                  <div>
                    <strong>Posting Without Pipeline</strong>
                    <small>Consistent social activity with little business impact</small>
                  </div>
                </div>
                <div className="bsp-drift-ray bsp-drift-ray--right">
                  <span className="bsp-drift-arrow">↗</span>
                  <div>
                    <strong>Unattributed Ad Spend</strong>
                    <small>Budget spent without clarity on what drives enquiries</small>
                  </div>
                </div>
                <div className="bsp-drift-ray bsp-drift-ray--left">
                  <span className="bsp-drift-arrow">↙</span>
                  <div>
                    <strong>Invisible Search Presence</strong>
                    <small>Website live online but missing high-intent searchers</small>
                  </div>
                </div>
                <div className="bsp-drift-ray bsp-drift-ray--down">
                  <span className="bsp-drift-arrow">↘</span>
                  <div>
                    <strong>Siloed Channel Execution</strong>
                    <small>Content, ads, and search operating independently</small>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Open Horizontal Audience Fit Baseline (No Card Box) */}
          <div className="bsp-open-bestfor-strip">
            <span className="bsp-bestfor-eyebrow">BEST FOR BUSINESSES THAT:</span>
            <div className="bsp-bestfor-inline-list">
              {pillar.bestFor.map((item, idx) => (
                <div key={item} className="bsp-bestfor-tick">
                  <span className="bsp-tick-idx">0{idx + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE SCROLL-STOPPING SEQUENCE: THE 7-STAGE "DEMAND ENGINE" */}
      <section
        id="pillar-digital-marketing-signature-stage"
        data-section-id="pillar-digital-marketing-signature-stage"
        className="bsp-section bsp-section--cream"
      >
        <div className="mp-container">
          <div className="bsp-signature-intro">
            <span
              className="hp-mono-pill"
              style={{ backgroundColor: pillar.accentColor, color: '#0b0f17' }}
            >
              02 · SIGNATURE SEQUENCE · THE CONNECTED DEMAND ENGINE
            </span>
            <h2 className="mp-h2" style={{ marginTop: 12 }}>
              How Strategy, Content, Channels &amp; Attribution Lock Into One Loop
            </h2>
            <p className="bsp-section-sub">
              Step through the 7 stages of the AxonVortex Demand Engine—from foundational strategy and multi-channel activation to website conversion and closed-loop measurement.
            </p>
          </div>

          {/* Interactive & Scroll-Controlled 7-Stage Demand Engine */}
          <div className="bsp-demand-engine-stage">
            <div className="bsp-engine-stepper" role="tablist" aria-label="Demand Engine Stages">
              {DM_DEMAND_ENGINE_STAGES.map((st, idx) => {
                const active = idx === engineStage;
                const passed = idx < engineStage;
                return (
                  <button
                    key={st.step}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    className={`bsp-engine-step-btn ${active ? 'is-active' : passed ? 'is-passed' : ''}`}
                    onClick={() => setEngineStage(idx)}
                  >
                    <span className="bsp-step-code">{st.step}</span>
                    <strong>{st.name}</strong>
                  </button>
                );
              })}
            </div>

            <div className="bsp-engine-schematic">
              {/* Visual Connected Marketing Loop Diagram */}
              <div className="bsp-engine-loop-visual">
                <div className="bsp-loop-chain-row">
                  {pillar.systemChain.map((node, i) => {
                    const isLit = currentEngine.activeNodes.includes(node);
                    return (
                      <React.Fragment key={node}>
                        <div className={`bsp-loop-node ${isLit ? 'is-lit' : ''}`}>
                          <small>0{i + 1}</small>
                          <strong>{node}</strong>
                        </div>
                        {i < pillar.systemChain.length - 1 && (
                          <span className={`bsp-loop-connector ${isLit ? 'is-lit' : ''}`}>
                            →
                          </span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Branching Channel Lanes Inside the Loop */}
                <div className="bsp-engine-channel-branches">
                  {[
                    { name: 'Social Media', role: 'Authority & Community', slug: 'social-media-marketing', color: '#f59e0b' },
                    { name: 'Meta Ads', role: 'Audience Layer & Creative', slug: 'meta-ads', color: '#ff4d2d' },
                    { name: 'Google Ads', role: 'High-Intent Search Capture', slug: 'google-ads', color: '#2563eb' },
                    { name: 'SEO', role: 'Compounding Search Visibility', slug: 'seo', color: '#a3e635' }
                  ].map((ch) => (
                    <button
                      key={ch.slug}
                      type="button"
                      className={`bsp-branch-lane ${engineStage >= 2 ? 'is-energized' : ''}`}
                      onClick={() => onNavigate(`/services/${ch.slug}`)}
                    >
                      <span
                        className="bsp-branch-indicator"
                        style={{ backgroundColor: ch.color }}
                      />
                      <div>
                        <strong>{ch.name}</strong>
                        <small>{ch.role}</small>
                      </div>
                      <ArrowUpRight size={15} />
                    </button>
                  ))}
                </div>

                {/* Return Feedback Loop Bar */}
                <div className={`bsp-feedback-return-arc ${engineStage >= 5 ? 'is-active' : ''}`}>
                  <span>↺ CLOSED-LOOP MEASUREMENT: CONVERSION DATA RETURNS TO STRATEGY &amp; TARGETING</span>
                </div>
              </div>

              {/* Active Stage Narrative Callout */}
              <div className="bsp-engine-stage-detail">
                <span className="bsp-stage-role-tag">
                  STAGE {currentEngine.step} · {currentEngine.role}
                </span>
                <h3>{currentEngine.name}</h3>
                <p>{currentEngine.desc}</p>
                <div className="bsp-stage-progress-dots">
                  {DM_DEMAND_ENGINE_STAGES.map((s, idx) => (
                    <span
                      key={s.step}
                      className={`bsp-dot ${idx <= engineStage ? 'is-on' : ''}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Local 5s Looping WebM Clip + Architecture Blueprint */}
          <PillarLoopVideoCanvas
            pillar={pillar}
            caption="Connected Digital Marketing Demand Engine: Strategy → Content → Multi-Channel Distribution → Qualified Traffic → Website Conversion → Attribution Feedback."
          />
        </div>
      </section>

      {/* 4. DEMAND CHANNEL CONSTELLATION (CAPABILITY STORY SYSTEM) */}
      <CapabilityStorySystem
        variant="digital-marketing"
        sectionId="pillar-digital-marketing-subservices-breakdown"
        eyebrow="03 · DEMAND CHANNEL CONSTELLATION"
        title="Five Connected Marketing Capabilities — Mapped Around Central Strategy"
        subtitle="Select any channel node in the constellation to inspect how Strategy, Content, Social, Paid Ads, and SEO connect into shared traffic, conversion, and attribution."
        stages={pillar.subServicesDetail}
        activeStage={activeChannelIdx}
        onStageChange={setActiveChannelIdx}
        visualType="demand-constellation"
        motionType="radial-convergence"
        ctaMode="contextual-single"
        mobileMode="vertical-connected-path"
        accentColor={pillar.accentColor}
        onNavigate={onNavigate}
      />

      {/* 5. MEASUREMENT & 6-STEP CLOSED-LOOP METHODOLOGY */}
      <section
        id="pillar-digital-marketing-approach-steps"
        data-section-id="pillar-digital-marketing-approach-steps"
        className="bsp-section bsp-section--cream"
      >
        <div className="mp-container">
          <div className="bsp-section-head-split">
            <div>
              <span className="hp-mono-pill hp-mono-pill--yellow">
                04 · MEASUREMENT &amp; CONTINUOUS IMPROVEMENT LOOP
              </span>
              <h2 className="mp-h2" style={{ marginTop: 10 }}>
                How We Build, Measure &amp; Improve {pillar.title}
              </h2>
            </div>
          </div>

          {/* Open Horizontal 6-Step Arc with Return Feedback Line */}
          <div className="bsp-open-timeline-loop">
            <div className="bsp-timeline-steps-track">
              {pillar.approachSteps.map((st, idx) => (
                <div key={st.step} className="bsp-timeline-node">
                  <div className="bsp-timeline-node-head">
                    <span
                      className="bsp-timeline-step-badge"
                      style={{ backgroundColor: pillar.accentColor, color: '#0b0f17' }}
                    >
                      {st.step}
                    </span>
                    {idx < pillar.approachSteps.length - 1 && (
                      <div className="bsp-timeline-line" />
                    )}
                  </div>
                  <h4>{st.title}</h4>
                  <p>{st.desc}</p>
                </div>
              ))}
            </div>
            <div className="bsp-timeline-feedback-bar">
              <span>↺ STEP 06 (IMPROVE) FEEDS DIRECTLY BACK INTO STEP 01 (UNDERSTAND) FOR THE NEXT CAMPAIGN CYCLE</span>
            </div>
          </div>

          <PillarSupportingBlueprint
            pillar={pillar}
            label="CLOSED-LOOP ATTRIBUTION & CHANNEL FEEDBACK ARCHITECTURE"
            caption="Every campaign, search query, and content asset feeds measurable business signals back into the strategy layer."
          />
        </div>
      </section>

      {/* 6. CONTENT-SPECIFIC CTA: SCATTERED SIGNALS CONVERGE INTO ONE ACTION */}
      <section
        id="pillar-digital-marketing-cta"
        data-section-id="pillar-digital-marketing-cta"
        className="bsp-cta-section bsp-cta--dm"
      >
        <div className="mp-container">
          <div className="bsp-cta-convergence-stage">
            <div className="bsp-cta-incoming-signals" aria-hidden="true">
              <span>SOCIAL AUTHORITY ↘</span>
              <span>META AUDIENCE LAYERS →</span>
              <span>GOOGLE SEARCH INTENT →</span>
              <span>ORGANIC SEO ↗</span>
            </div>

            <div className="bsp-cta-focal-core">
              <span className="hp-mono-pill hp-mono-pill--yellow">
                ALL SIGNALS CONVERGE INTO ONE CLEAR NEXT STEP
              </span>
              <h2 className="bsp-cta-h2">{pillar.headline}</h2>
              <p className="bsp-cta-sub">{pillar.shortDesc}</p>
              <div className="hp-cta-buttons" style={{ justifyContent: 'center' }}>
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--red"
                  onClick={() => onOpenAudit(pillar.title)}
                >
                  <span className="hp-btn-3d-inner">{pillar.actionCta}</span>
                </button>
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--yellow"
                  onClick={() => onNavigate('/solutions')}
                >
                  <span className="hp-btn-3d-inner">Explore All 5 Solutions</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
 * 2. AI & AUTOMATION PAGE (/solutions/ai-automation)
 * Concept: "From repetitive business input to controlled intelligent action."
 * Rhythm: Trigger → Context → Intelligence → Human Control → Action → Feedback
 * ========================================================================== */
const AI_RAW_INPUTS = [
  {
    id: 'question',
    label: 'Customer Question',
    source: 'Website Chat / WhatsApp / DM',
    context: 'Retrieves approved service & pricing knowledge base',
    aiAction: 'Answers immediately with grounded accuracy + offers next step',
    humanGate: 'Escalates complex custom quotes to human advisor',
    toolUpdate: 'Logs conversation transcript & intent tag in CRM'
  },
  {
    id: 'call',
    label: 'Inbound Phone Call',
    source: 'Voice AI Reception Line',
    context: 'Checks live calendar availability & caller history',
    aiAction: 'Qualifies enquiry requirements & books confirmed slot',
    humanGate: 'Transfers urgent/VIP callers directly to team member',
    toolUpdate: 'Syncs calendar invite + sends SMS confirmation'
  },
  {
    id: 'lead',
    label: 'New Website Lead',
    source: 'Enquiry Form / Campaign Page',
    context: 'Enriches company profile & matches service pillar',
    aiAction: 'Scores fit & triggers instant personalized response',
    humanGate: 'Assigns account owner for discovery review',
    toolUpdate: 'Creates deal stage in CRM + alerts Slack channel'
  },
  {
    id: 'booking',
    label: 'Booking Request',
    source: 'Consultation Scheduler',
    context: 'Cross-checks timezone, team role & pre-call questionnaire',
    aiAction: 'Confirms meeting + dispatches preparation brief',
    humanGate: 'Advisor reviews diagnostic summary before call',
    toolUpdate: 'Updates pipeline stage + schedules reminder sequence'
  },
  {
    id: 'task',
    label: 'Internal Task',
    source: 'Operations / Delivery Handoff',
    context: 'Reads project scope & standard operating checklist',
    aiAction: 'Generates onboarding tasks & draft client workspace',
    humanGate: 'Project lead approves milestone schedule',
    toolUpdate: 'Synchronizes project tracker, docs & reporting'
  },
  {
    id: 'crm-update',
    label: 'CRM Status Update',
    source: 'Pipeline Stage Change',
    context: 'Detects deal progression or stalled opportunity',
    aiAction: 'Drafts contextual follow-up or status report',
    humanGate: 'Sales owner approves outbound proposal message',
    toolUpdate: 'Logs activity timestamp & updates forecast view'
  }
];

const AI_ORCHESTRATION_STEPS = [
  {
    step: '01',
    stage: 'TRIGGER',
    title: 'A Business Event Triggers the System',
    detail: 'An inbound customer question, phone call, form submission, or internal status change initiates the workflow automatically.'
  },
  {
    step: '02',
    stage: 'CONTEXT',
    title: 'Verified Business Context Is Retrieved',
    detail: 'The system pulls relevant customer history, calendar availability, and approved company knowledge before taking any step.'
  },
  {
    step: '03',
    stage: 'INTELLIGENCE',
    title: 'AI Evaluates the Bounded Task',
    detail: 'Practical AI classifies intent, extracts structured details, or drafts a response within strict operational guardrails.'
  },
  {
    step: '04',
    stage: 'HUMAN CONTROL',
    title: 'Human Approval Checkpoint Appears Where Required',
    detail: 'Routine actions proceed at machine speed, while high-judgment decisions pause at a clear human approval checkpoint.'
  },
  {
    step: '05',
    stage: 'ACTION',
    title: 'The Structured Action Is Executed',
    detail: 'The customer receives an immediate answer, the appointment is booked, or the lead is routed without manual copy-pasting.'
  },
  {
    step: '06',
    stage: 'INTEGRATION',
    title: 'Connected Business Tools Update Together',
    detail: 'CRM records, calendars, email sequences, and team notifications synchronize across your stack simultaneously.'
  },
  {
    step: '07',
    stage: 'FEEDBACK',
    title: 'Telemetry Returns to Improve the Workflow',
    detail: 'Real usage data highlights edge cases and accuracy improvements so the workflow grows smarter over time.'
  }
];

function AiAutomationPillarExperience({ pillar, onNavigate, onOpenAudit }) {
  const [selectedInputIdx, setSelectedInputIdx] = useState(0);
  const [orchIdx, setOrchIdx] = useState(3);
  const activeInput = AI_RAW_INPUTS[selectedInputIdx] || AI_RAW_INPUTS[0];

  return (
    <div className="bsp-pillar-root bsp-pillar--ai">
      {/* 1. HERO: RAW BUSINESS INPUTS ENTERING CONTROLLED WORKFLOW */}
      <section
        id="pillar-ai-automation-hero"
        data-section-id="pillar-ai-automation-hero"
        className="bsp-open-hero"
      >
        <div className="mp-container">
          <PillarOpenTopBar pillar={pillar} onNavigate={onNavigate} />

          <div className="bsp-ai-hero-header">
            <div className="bsp-eyebrow-row">
              <span
                className="hp-mono-pill"
                style={{ backgroundColor: pillar.accentColor, color: '#ffffff' }}
              >
                SOLUTION PILLAR {pillar.index} · {pillar.title.toUpperCase()}
              </span>
              <span className="bsp-rhythm-tag">
                TRIGGER → CONTEXT → INTELLIGENCE → HUMAN CONTROL → ACTION → FEEDBACK
              </span>
            </div>

            <TypewriterHeading
              tag="h1"
              text={pillar.headline}
              typingSpeed={8}
              className="hp-serif-display bsp-hero-h1"
            />
            <p className="bsp-hero-lead">{pillar.shortDesc}</p>
            <p className="bsp-hero-body" style={{ maxWidth: '76ch' }}>
              {pillar.fullDesc}
            </p>
          </div>

          {/* Interactive Multi-Input to Controlled Action Pipeline Workbench */}
          <div className="bsp-ai-pipeline-hero-stage">
            <div className="bsp-ai-inputs-rail" role="tablist" aria-label="Business Input Triggers">
              <span className="bsp-rail-title">01 · SELECT RAW BUSINESS INPUT:</span>
              {AI_RAW_INPUTS.map((inp, idx) => (
                <button
                  key={inp.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedInputIdx === idx}
                  className={`bsp-ai-input-node ${selectedInputIdx === idx ? 'is-active' : ''}`}
                  onClick={() => setSelectedInputIdx(idx)}
                >
                  <span className="bsp-input-num">0{idx + 1}</span>
                  <div>
                    <strong>{inp.label}</strong>
                    <small>{inp.source}</small>
                  </div>
                  <span className="bsp-input-arrow">→</span>
                </button>
              ))}
            </div>

            {/* Center & Right: Live Decision Logic, Human Checkpoint & Connected Tool Output */}
            <div className="bsp-ai-transformation-bus">
              <div className="bsp-ai-bus-step">
                <span className="bsp-bus-tag bsp-bus-tag--amber">02 · CONTEXT RETRIEVAL</span>
                <strong>{activeInput.context}</strong>
              </div>
              <div className="bsp-ai-bus-connector">↓</div>
              <div className="bsp-ai-bus-step">
                <span className="bsp-bus-tag bsp-bus-tag--purple">03 · BOUNDED AI ACTION</span>
                <strong>{activeInput.aiAction}</strong>
              </div>
              <div className="bsp-ai-bus-connector">↓</div>
              <div className="bsp-ai-bus-step bsp-ai-bus-step--human">
                <span className="bsp-bus-tag bsp-bus-tag--red">04 · HUMAN CONTROL CHECKPOINT</span>
                <strong>{activeInput.humanGate}</strong>
              </div>
              <div className="bsp-ai-bus-connector">↓</div>
              <div className="bsp-ai-bus-step bsp-ai-bus-step--green">
                <span className="bsp-bus-tag bsp-bus-tag--green">05 · CONNECTED TOOL SYNC</span>
                <strong>{activeInput.toolUpdate}</strong>
              </div>
            </div>
          </div>

          <div className="mp-hero-actions" style={{ marginTop: 28 }}>
            <button
              type="button"
              className="hp-btn-3d hp-btn-3d--red"
              onClick={() => onOpenAudit(pillar.title)}
            >
              <span className="hp-btn-3d-inner">{pillar.actionCta}</span>
            </button>
            <button
              type="button"
              className="hp-btn-3d hp-btn-3d--yellow"
              onClick={() => onNavigate('/growth-audit')}
            >
              <span className="hp-btn-3d-inner">Request Digital Growth Audit</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE SCROLL-STOPPING SEQUENCE: 7-STAGE "AI ORCHESTRATION FLOW" */}
      <section
        id="pillar-ai-automation-signature-stage"
        data-section-id="pillar-ai-automation-signature-stage"
        className="bsp-section bsp-section--ink"
      >
        <div className="mp-container">
          <div className="bsp-signature-intro">
            <span
              className="hp-mono-pill"
              style={{ backgroundColor: pillar.accentColor, color: '#ffffff' }}
            >
              01 · SIGNATURE SEQUENCE · AI ORCHESTRATION FLOW
            </span>
            <h2 className="mp-h2 mp-h2--white" style={{ marginTop: 12 }}>
              From Business Event to Human-Verified Execution &amp; Feedback
            </h2>
          </div>

          {/* 7-Stage Circuit Spine */}
          <div className="bsp-ai-orchestration-circuit">
            <div className="bsp-orch-nodes-row">
              {AI_ORCHESTRATION_STEPS.map((st, idx) => {
                const active = idx === orchIdx;
                const completed = idx < orchIdx;
                return (
                  <button
                    key={st.step}
                    type="button"
                    className={`bsp-orch-node ${active ? 'is-active' : completed ? 'is-done' : ''}`}
                    onClick={() => setOrchIdx(idx)}
                  >
                    <div className="bsp-orch-node-top">
                      <span className="bsp-orch-step">{st.step}</span>
                      <span className="bsp-orch-stage">{st.stage}</span>
                    </div>
                    <h4>{st.title}</h4>
                    <p>{st.detail}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <PillarLoopVideoCanvas
            pillar={pillar}
            caption="AI Orchestration Flow: Trigger → Context Retrieval → Bounded AI Evaluation → Human Approval Gate → Tool Execution → Telemetry Feedback."
          />
        </div>
      </section>

      {/* 3. THE PROBLEM: REPETITIVE MANUAL LOOP VS. AUTOMATION SPINE */}
      <section
        id="pillar-ai-automation-problem-system"
        data-section-id="pillar-ai-automation-problem-system"
        className="bsp-section bsp-section--cream"
      >
        <div className="mp-container">
          <div className="bsp-ai-manual-vs-auto">
            <div className="bsp-manual-loop-col">
              <span className="hp-mono-pill hp-mono-pill--yellow">
                02 · THE MANUAL BOTTLENECK
              </span>
              <h2 className="mp-h2" style={{ marginTop: 12 }}>
                {pillar.problemTitle}
              </h2>
              <p className="bsp-editorial-body">{pillar.problemBody}</p>

              {/* Visual Manual Friction Loop Diagram */}
              <div className="bsp-manual-wheel">
                <div className="bsp-manual-wheel-title">
                  ↻ THE REPETITIVE MANUAL WORK LOOP
                </div>
                <div className="bsp-manual-wheel-items">
                  <span>Repetitive Customer Questions</span>
                  <span>→</span>
                  <span>Manual Lead Follow-Up</span>
                  <span>→</span>
                  <span>Calendar Ping-Pong</span>
                  <span>→</span>
                  <span>Copy-Paste Data Entry</span>
                  <span>→</span>
                  <span>Delayed Customer Response</span>
                </div>
              </div>
            </div>

            <div className="bsp-auto-spine-col">
              <span className="bsp-bestfor-eyebrow" style={{ color: '#0b0f17' }}>
                WHERE PRACTICAL AI CREATES IMMEDIATE VALUE:
              </span>
              <div className="bsp-vertical-check-spine">
                {pillar.bestFor.map((item, idx) => (
                  <div key={item} className="bsp-spine-check-row">
                    <span className="bsp-spine-check-num">0{idx + 1}</span>
                    <strong>{item}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BUSINESS AUTOMATION ORCHESTRATOR (CAPABILITY STORY SYSTEM) */}
      <CapabilityStorySystem
        variant="ai-automation"
        sectionId="pillar-ai-automation-subservices-breakdown"
        eyebrow="03 · BUSINESS AUTOMATION ORCHESTRATOR"
        title="Six Practical AI & Automation Systems — Engineered Around Real Work"
        subtitle="Trace how a business trigger passes through context logic and human approval checkpoints into specialized AI Chatbots, Customer Support, Booking, Voice AI, Agents, and Workflow systems."
        stages={pillar.subServicesDetail}
        visualType="automation-orchestrator"
        motionType="trigger-circuit"
        ctaMode="contextual-single"
        mobileMode="vertical-connected-path"
        accentColor={pillar.accentColor}
        onNavigate={onNavigate}
      />

      {/* 5. HUMAN CONTROL CHECKPOINT & 6-STEP ENGINEERING SEQUENCE */}
      <section
        id="pillar-ai-automation-approach-steps"
        data-section-id="pillar-ai-automation-approach-steps"
        className="bsp-section bsp-section--cream"
      >
        <div className="mp-container">
          <div className="bsp-human-control-banner">
            <div className="bsp-hc-col">
              <span className="hp-mono-pill" style={{ backgroundColor: '#8b5cf6', color: '#fff' }}>
                MACHINE SPEED · AUTOMATED
              </span>
              <h4>What AI &amp; Automation Handle 24/7</h4>
              <p>Instant first response, FAQ resolution, appointment scheduling, data synchronization, and routine notifications.</p>
            </div>
            <div className="bsp-hc-gate-badge">
              <ShieldCheck size={24} />
              <span>HUMAN APPROVAL CHECKPOINT</span>
            </div>
            <div className="bsp-hc-col">
              <span className="hp-mono-pill hp-mono-pill--yellow">
                HUMAN JUDGMENT · IN CONTROL
              </span>
              <h4>Where Humans Stay in Command</h4>
              <p>Strategic direction, nuanced customer relationships, high-stakes approvals, and continuous quality oversight.</p>
            </div>
          </div>

          <div className="bsp-open-timeline-loop" style={{ marginTop: 36 }}>
            <div className="bsp-timeline-steps-track">
              {pillar.approachSteps.map((st, idx) => (
                <div key={st.step} className="bsp-timeline-node">
                  <div className="bsp-timeline-node-head">
                    <span
                      className="bsp-timeline-step-badge"
                      style={{ backgroundColor: pillar.accentColor, color: '#ffffff' }}
                    >
                      {st.step}
                    </span>
                    {idx < pillar.approachSteps.length - 1 && (
                      <div className="bsp-timeline-line" />
                    )}
                  </div>
                  <h4>{st.title}</h4>
                  <p>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <PillarSupportingBlueprint
            pillar={pillar}
            label="BOUNDED AI GOVERNANCE & MULTI-TOOL INTEGRATION BUS"
            caption="Every automated workflow is tested for accuracy, usability, and business impact before touching real customers."
          />
        </div>
      </section>

      {/* 6. CONTENT-SPECIFIC CTA: COMPLETED WORKFLOW STABILIZES INTO CLEAR NEXT STEP */}
      <section
        id="pillar-ai-automation-cta"
        data-section-id="pillar-ai-automation-cta"
        className="bsp-cta-section bsp-cta--ai"
      >
        <div className="mp-container">
          <div className="bsp-cta-workflow-terminal">
            <div className="bsp-terminal-status-bar">
              <span className="bsp-status-led" />
              <span>WORKFLOW STATUS: HUMAN-IN-THE-LOOP VERIFIED · READY FOR DEPLOYMENT</span>
            </div>
            <h2 className="bsp-cta-h2">{pillar.headline}</h2>
            <p className="bsp-cta-sub">{pillar.shortDesc}</p>
            <div className="hp-cta-buttons" style={{ justifyContent: 'center' }}>
              <button
                type="button"
                className="hp-btn-3d hp-btn-3d--red"
                onClick={() => onOpenAudit(pillar.title)}
              >
                <span className="hp-btn-3d-inner">{pillar.actionCta}</span>
              </button>
              <button
                type="button"
                className="hp-btn-3d hp-btn-3d--yellow"
                onClick={() => onNavigate('/growth-audit')}
              >
                <span className="hp-btn-3d-inner">Request Digital Growth Audit</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
 * 3. WEBSITES & E-COMMERCE PAGE (/solutions/websites-ecommerce)
 * Concept: "From structure to experience to conversion."
 * Rhythm: Strategy → Structure → Experience → Commerce → Integration → Optimization
 * ========================================================================== */
const WEB_BUILD_STAGES = [
  {
    step: '01',
    layer: 'STRATEGY',
    title: 'Strategy Establishes the Commercial Goal',
    detail: 'Define what the business needs the digital experience to achieve and what the customer needs to understand first.'
  },
  {
    step: '02',
    layer: 'SITEMAP',
    title: 'Sitemap & Information Architecture Form',
    detail: 'Organize pages, navigation paths, and hierarchy so visitors never have to guess where to go next.'
  },
  {
    step: '03',
    layer: 'WIREFRAMES',
    title: 'Structural Wireframes Assemble',
    detail: 'Map the page flow, proof blocks, product grids, and conversion zones before decorative styling begins.'
  },
  {
    step: '04',
    layer: 'CONTENT',
    title: 'Value-Clarity Content Enters',
    detail: 'Communicate what you do, who you help, and why customers should trust your offer in seconds.'
  },
  {
    step: '05',
    layer: 'INTERFACE',
    title: 'Visual Interface & Editorial Identity Appear',
    detail: 'Bring the brand to life with bold typography, clean visual hierarchy, and purposeful interaction.'
  },
  {
    step: '06',
    layer: 'RESPONSIVE',
    title: 'Desktop Adapts Seamlessly to Mobile & Tablet',
    detail: 'Every navigation bar, product gallery, and enquiry form adapts cleanly across mobile and desktop screens.'
  },
  {
    step: '07',
    layer: 'CONVERSION',
    title: 'Conversion Elements & Checkout Activate',
    detail: 'Clear calls to action, frictionless lead capture, and streamlined cart-to-checkout flows turn interest into action.'
  },
  {
    step: '08',
    layer: 'INTEGRATION',
    title: 'E-Commerce, Analytics & CRM Systems Connect',
    detail: 'Connect your storefront or website directly to marketing attribution, CRM pipelines, and automated follow-up.'
  }
];

function WebsitesEcommercePillarExperience({ pillar, onNavigate, onOpenAudit }) {
  const [heroLayerMode, setHeroLayerMode] = useState('experience');
  const [viewportPreview, setViewportPreview] = useState('desktop');
  const [buildStepIdx, setBuildStepIdx] = useState(7);

  return (
    <div className="bsp-pillar-root bsp-pillar--web">
      {/* 1. LAYERED EDITORIAL COMPOSITION HERO: SITEMAP -> WIREFRAME -> EXPERIENCE */}
      <section
        id="pillar-websites-ecommerce-hero"
        data-section-id="pillar-websites-ecommerce-hero"
        className="bsp-open-hero"
      >
        <div className="mp-container">
          <PillarOpenTopBar pillar={pillar} onNavigate={onNavigate} />

          <div className="bsp-web-hero-grid">
            <div className="bsp-web-hero-copy">
              <div className="bsp-eyebrow-row">
                <span
                  className="hp-mono-pill"
                  style={{ backgroundColor: pillar.accentColor, color: '#ffffff' }}
                >
                  SOLUTION PILLAR {pillar.index} · {pillar.title.toUpperCase()}
                </span>
                <span className="bsp-rhythm-tag">
                  STRATEGY → STRUCTURE → EXPERIENCE → COMMERCE → INTEGRATION → OPTIMIZATION
                </span>
              </div>

              <TypewriterHeading
                tag="h1"
                text={pillar.headline}
                typingSpeed={8}
                className="hp-serif-display bsp-hero-h1"
              />
              <p className="bsp-hero-lead">{pillar.shortDesc}</p>
              <p className="bsp-hero-body">{pillar.fullDesc}</p>

              <div className="mp-hero-actions" style={{ justifyContent: 'flex-start' }}>
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--red"
                  onClick={() => onOpenAudit(pillar.title)}
                >
                  <span className="hp-btn-3d-inner">{pillar.actionCta}</span>
                </button>
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--yellow"
                  onClick={() => onNavigate('/growth-audit')}
                >
                  <span className="hp-btn-3d-inner">Request Digital Growth Audit</span>
                </button>
              </div>
            </div>

            {/* Layered Sitemap -> Wireframe -> Live Experience Stage */}
            <div className="bsp-web-layered-stage">
              <div className="bsp-web-stage-controls">
                <div className="bsp-layer-tabs" role="tablist" aria-label="Architecture Layer Mode">
                  {[
                    { id: 'sitemap', label: '01 · Sitemap Tree' },
                    { id: 'wireframe', label: '02 · Wireframe Grid' },
                    { id: 'experience', label: '03 · Live Experience' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      role="tab"
                      aria-selected={heroLayerMode === t.id}
                      className={`bsp-filter-chip ${heroLayerMode === t.id ? 'is-active' : ''}`}
                      onClick={() => setHeroLayerMode(t.id)}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <div className="bsp-viewport-switch">
                  <button
                    type="button"
                    className={`bsp-vp-btn ${viewportPreview === 'desktop' ? 'is-active' : ''}`}
                    onClick={() => setViewportPreview('desktop')}
                  >
                    Desktop
                  </button>
                  <button
                    type="button"
                    className={`bsp-vp-btn ${viewportPreview === 'mobile' ? 'is-active' : ''}`}
                    onClick={() => setViewportPreview('mobile')}
                  >
                    Mobile
                  </button>
                </div>
              </div>

              {/* Overlapping Architectural Canvas */}
              <div className={`bsp-web-preview-canvas is-${heroLayerMode} is-${viewportPreview}`}>
                {/* Sitemap Connector Layer */}
                <div className="bsp-web-sitemap-overlay">
                  <span className="bsp-sitemap-node">HOME / VALUE PROPOSITION</span>
                  <div className="bsp-sitemap-branches">
                    <span>SOLUTIONS &amp; OFFER</span>
                    <span>PRODUCT CATALOG / STORE</span>
                    <span>CONVERSION &amp; CHECKOUT</span>
                  </div>
                </div>

                {/* Wireframe & Live Experience Morph Frame */}
                <div className="bsp-web-interface-frame">
                  <div className="bsp-frame-browser-bar">
                    <span className="bsp-dots"><i /><i /><i /></span>
                    <small>
                      {heroLayerMode === 'sitemap'
                        ? 'ARCHITECTURE: INFORMATION HIERARCHY'
                        : heroLayerMode === 'wireframe'
                        ? 'WIREFRAME: CONVERSION LAYOUT ZONES'
                        : 'LIVE EXPERIENCE: CLARITY + TRUST + ACTION'}
                    </small>
                  </div>
                  <div className="bsp-frame-body">
                    <div className="bsp-frame-hero-zone">
                      <small>5-SECOND VALUE CLARITY</small>
                      <strong>Clear Offer Positioning &amp; Primary Action Path</strong>
                    </div>
                    <div className="bsp-frame-commerce-row">
                      <div className="bsp-frame-module">
                        <span>Product Discovery</span>
                        <small>Structured Catalog &amp; Filters</small>
                      </div>
                      <div className="bsp-frame-module">
                        <span>Cart &amp; Checkout</span>
                        <small>Friction-Free Purchase Flow</small>
                      </div>
                      <div className="bsp-frame-module">
                        <span>CRM &amp; Analytics</span>
                        <small>Connected Lead &amp; Order Sync</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE SCROLL-STOPPING SEQUENCE: 8-STAGE "BUILD THE EXPERIENCE" */}
      <section
        id="pillar-websites-ecommerce-signature-stage"
        data-section-id="pillar-websites-ecommerce-signature-stage"
        className="bsp-section bsp-section--cream"
      >
        <div className="mp-container">
          <div className="bsp-signature-intro">
            <span
              className="hp-mono-pill"
              style={{ backgroundColor: pillar.accentColor, color: '#ffffff' }}
            >
              01 · SIGNATURE SEQUENCE · BUILD THE EXPERIENCE
            </span>
            <h2 className="mp-h2" style={{ marginTop: 12 }}>
              Eight Connected Layers From Strategy &amp; Sitemap to Conversion &amp; Integration
            </h2>
          </div>

          <div className="bsp-web-build-sequence">
            <div className="bsp-build-rail" role="tablist" aria-label="Build the Experience Stages">
              {WEB_BUILD_STAGES.map((st, idx) => (
                <button
                  key={st.step}
                  type="button"
                  role="tab"
                  aria-selected={buildStepIdx === idx}
                  className={`bsp-build-step-tab ${buildStepIdx === idx ? 'is-active' : idx < buildStepIdx ? 'is-passed' : ''}`}
                  onClick={() => setBuildStepIdx(idx)}
                >
                  <small>{st.step}</small>
                  <strong>{st.layer}</strong>
                </button>
              ))}
            </div>

            <div className="bsp-build-active-stage">
              <div className="bsp-build-stage-copy">
                <span className="bsp-stage-role-tag">
                  LAYER {WEB_BUILD_STAGES[buildStepIdx].step} · {WEB_BUILD_STAGES[buildStepIdx].layer}
                </span>
                <h3>{WEB_BUILD_STAGES[buildStepIdx].title}</h3>
                <p>{WEB_BUILD_STAGES[buildStepIdx].detail}</p>
              </div>
              <div className="bsp-build-layer-stack-visual">
                {pillar.systemChain.map((node, i) => (
                  <span
                    key={node}
                    className={`bsp-stack-pill ${i <= buildStepIdx ? 'is-lit' : ''}`}
                  >
                    0{i + 1} · {node}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <PillarLoopVideoCanvas
            pillar={pillar}
            caption="Build the Experience: Strategy → Sitemap → Wireframes → Content → Visual Interface → Responsive Layouts → Conversion → E-Commerce & CRM Integration."
          />
        </div>
      </section>

      {/* 3. DIGITAL EXPERIENCE BUILDER (CAPABILITY STORY SYSTEM) */}
      <CapabilityStorySystem
        variant="websites-ecommerce"
        sectionId="pillar-websites-ecommerce-subservices-breakdown"
        eyebrow="02 · DIGITAL EXPERIENCE BUILDER"
        title="Websites, Landing Pages, E-Commerce & Shopify — Built to Convert"
        subtitle="Explore how Strategy, Sitemap, Wireframe, Interface, Responsive Adaptation, Commerce, and Conversion assemble into high-performing digital experiences."
        stages={pillar.subServicesDetail}
        visualType="experience-builder"
        motionType="layered-assembly"
        ctaMode="contextual-single"
        mobileMode="vertical-connected-path"
        accentColor={pillar.accentColor}
        onNavigate={onNavigate}
      />

      {/* 4. THE PROBLEM: DECONSTRUCTED BROKEN HIERARCHY */}
      <section
        id="pillar-websites-ecommerce-problem-system"
        data-section-id="pillar-websites-ecommerce-problem-system"
        className="bsp-section bsp-section--ink"
      >
        <div className="mp-container">
          <div className="bsp-open-editorial-split">
            <div>
              <span className="hp-mono-pill hp-mono-pill--yellow">
                03 · THE DIGITAL PRESENCE PROBLEM
              </span>
              <h2 className="mp-h2 mp-h2--white" style={{ marginTop: 12 }}>
                {pillar.problemTitle}
              </h2>
              <p className="bsp-editorial-lead-light">{pillar.problemBody}</p>
            </div>

            {/* Annotated Broken Hierarchy X-Ray */}
            <div className="bsp-broken-xray">
              <div className="bsp-xray-title">COMMON CONVERSION BARRIERS WE ELIMINATE:</div>
              <div className="bsp-xray-tags">
                <span>✕ Confusing Messaging</span>
                <span>✕ Poor Mobile Experience</span>
                <span>✕ Slow or Difficult Navigation</span>
                <span>✕ Weak Calls to Action</span>
                <span>✕ Poor Lead Capture</span>
                <span>✕ Disconnected Marketing</span>
              </div>
            </div>
          </div>

          <div className="bsp-open-bestfor-strip" style={{ marginTop: 28 }}>
            <span className="bsp-bestfor-eyebrow">BEST FOR BUSINESSES THAT:</span>
            <div className="bsp-bestfor-inline-list">
              {pillar.bestFor.map((item, idx) => (
                <div key={item} className="bsp-bestfor-tick">
                  <span className="bsp-tick-idx">0{idx + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTEGRATION & 6-STEP METHODOLOGY */}
      <section
        id="pillar-websites-ecommerce-approach-steps"
        data-section-id="pillar-websites-ecommerce-approach-steps"
        className="bsp-section bsp-section--cream"
      >
        <div className="mp-container">
          <div className="bsp-section-head-split">
            <div>
              <span className="hp-mono-pill hp-mono-pill--yellow">
                04 · CONNECTED ECOSYSTEM &amp; 6-STEP BUILD PROCESS
              </span>
              <h2 className="mp-h2" style={{ marginTop: 10 }}>
                How We Architect, Launch &amp; Optimize {pillar.title}
              </h2>
            </div>
          </div>

          <div className="bsp-open-timeline-loop">
            <div className="bsp-timeline-steps-track">
              {pillar.approachSteps.map((st, idx) => (
                <div key={st.step} className="bsp-timeline-node">
                  <div className="bsp-timeline-node-head">
                    <span
                      className="bsp-timeline-step-badge"
                      style={{ backgroundColor: pillar.accentColor, color: '#ffffff' }}
                    >
                      {st.step}
                    </span>
                    {idx < pillar.approachSteps.length - 1 && (
                      <div className="bsp-timeline-line" />
                    )}
                  </div>
                  <h4>{st.title}</h4>
                  <p>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <PillarSupportingBlueprint
            pillar={pillar}
            label="STOREFRONT, WEBSITE & CRM INTEGRATION ARCHITECTURE"
            caption="Your website or store connects directly with marketing campaigns, lead capture, CRM pipelines, and analytics."
          />
        </div>
      </section>

      {/* 6. CONTENT-SPECIFIC CTA: COMPLETED DIGITAL EXPERIENCE */}
      <section
        id="pillar-websites-ecommerce-cta"
        data-section-id="pillar-websites-ecommerce-cta"
        className="bsp-cta-section bsp-cta--web"
      >
        <div className="mp-container">
          <div className="bsp-cta-blueprint-frame">
            <div className="bsp-blueprint-corner-marks" aria-hidden="true">
              <span>STRUCTURE ✓</span>
              <span>EXPERIENCE ✓</span>
              <span>CONVERSION ✓</span>
              <span>INTEGRATION ✓</span>
            </div>
            <h2 className="bsp-cta-h2">{pillar.headline}</h2>
            <p className="bsp-cta-sub">{pillar.shortDesc}</p>
            <div className="hp-cta-buttons" style={{ justifyContent: 'center' }}>
              <button
                type="button"
                className="hp-btn-3d hp-btn-3d--red"
                onClick={() => onOpenAudit(pillar.title)}
              >
                <span className="hp-btn-3d-inner">{pillar.actionCta}</span>
              </button>
              <button
                type="button"
                className="hp-btn-3d hp-btn-3d--yellow"
                onClick={() => onNavigate('/solutions')}
              >
                <span className="hp-btn-3d-inner">Explore All 5 Solutions</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
 * 4. LEAD GENERATION PAGE (/solutions/lead-generation)
 * Concept: "From attention to qualified opportunity."
 * Rhythm: Audience → Offer → Capture → Qualification → CRM → Follow-Up → Opportunity
 * ========================================================================== */
const LEAD_JOURNEY_STAGES = [
  {
    step: '01',
    stage: 'AUDIENCE',
    title: 'Audience Discovers the Offer',
    detail: 'Right-fit decision-makers encounter a clear, relevant reason to pay attention across search, social, or targeted campaigns.'
  },
  {
    step: '02',
    stage: 'OFFER & PAGE',
    title: 'Interest Moves Toward a Focused Landing Page',
    detail: 'Audience intent and offer value converge on a dedicated conversion page built around one clear next step.'
  },
  {
    step: '03',
    stage: 'CAPTURE',
    title: 'The Lead Submits an Enquiry',
    detail: 'Progressive, frictionless lead capture collects essential context without overwhelming the visitor.'
  },
  {
    step: '04',
    stage: 'QUALIFICATION',
    title: 'Qualification Separates Fit From Noise',
    detail: 'Structured qualification criteria route high-fit opportunities to sales while guiding early-stage visitors to helpful resources.'
  },
  {
    step: '05',
    stage: 'CRM ENTRY',
    title: 'Qualified Data Enters the CRM Cleanly',
    detail: 'Every enquiry becomes an organized CRM record complete with source attribution, service interest, and timeline.'
  },
  {
    step: '06',
    stage: 'OWNERSHIP',
    title: 'Pipeline Ownership Is Assigned Immediately',
    detail: 'Instant internal notifications assign clear ownership so no opportunity sits forgotten in an inbox.'
  },
  {
    step: '07',
    stage: 'FOLLOW-UP',
    title: 'Automated Multi-Channel Follow-Up Triggers',
    detail: 'Immediate SMS and email follow-up sequences keep the conversation warm while the buyer’s intent is highest.'
  },
  {
    step: '08',
    stage: 'OPPORTUNITY',
    title: 'Opportunity Moves Toward Conversion',
    detail: 'Structured pipeline stages track every conversation from initial enquiry to booked consultation and closed business.'
  }
];

function LeadGenerationPillarExperience({ pillar, onNavigate, onOpenAudit }) {
  const [bridgesSealed, setBridgesSealed] = useState(true);
  const [journeyIdx, setJourneyIdx] = useState(7);

  return (
    <div className="bsp-pillar-root bsp-pillar--lead">
      {/* 1. HERO: OPPORTUNITY SIGNAL ENTERING & COMPLETING AN INCOMPLETE LEAD SYSTEM */}
      <section
        id="pillar-lead-generation-hero"
        data-section-id="pillar-lead-generation-hero"
        className="bsp-open-hero"
      >
        <div className="mp-container">
          <PillarOpenTopBar pillar={pillar} onNavigate={onNavigate} />

          <div className="bsp-lead-hero-head">
            <div className="bsp-eyebrow-row">
              <span
                className="hp-mono-pill"
                style={{ backgroundColor: pillar.accentColor, color: '#ffffff' }}
              >
                SOLUTION PILLAR {pillar.index} · {pillar.title.toUpperCase()}
              </span>
              <span className="bsp-rhythm-tag">
                AUDIENCE → OFFER → CAPTURE → QUALIFICATION → CRM → FOLLOW-UP → OPPORTUNITY
              </span>
            </div>

            <TypewriterHeading
              tag="h1"
              text={pillar.headline}
              typingSpeed={8}
              className="hp-serif-display bsp-hero-h1"
            />
            <p className="bsp-hero-lead">{pillar.shortDesc}</p>
            <p className="bsp-hero-body" style={{ maxWidth: '76ch' }}>
              {pillar.fullDesc}
            </p>
          </div>

          {/* Interactive Opportunity Signal Bridge Stage */}
          <div className="bsp-lead-bridge-stage">
            <div className="bsp-bridge-toolbar">
              <span className="bsp-bridge-status">
                {bridgesSealed
                  ? 'CONNECTED SYSTEM: ALL 8 STAGES SEALED FROM ATTENTION TO CONVERSION'
                  : 'INCOMPLETE SYSTEM: LEADING TO MISSED ENQUIRIES & SLOW FOLLOW-UP'}
              </span>
              <button
                type="button"
                className="bsp-filter-chip is-active"
                onClick={() => setBridgesSealed((b) => !b)}
              >
                {bridgesSealed ? 'Simulate Broken Leaks' : 'Restore Connected System'}
              </button>
            </div>

            <div className={`bsp-bridge-track ${bridgesSealed ? 'is-sealed' : 'is-leaking'}`}>
              {pillar.systemChain.map((stage, idx) => {
                const isGapStage = idx === 1 || idx === 3 || idx === 5 || idx === 6;
                return (
                  <div
                    key={stage}
                    className={`bsp-bridge-node ${!bridgesSealed && isGapStage ? 'is-missing' : 'is-connected'}`}
                  >
                    <small>0{idx + 1}</small>
                    <strong>{stage}</strong>
                    <span className="bsp-bridge-node-state">
                      {!bridgesSealed && isGapStage ? 'LEAK DETECTED' : 'CONNECTED ✓'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mp-hero-actions" style={{ marginTop: 28 }}>
            <button
              type="button"
              className="hp-btn-3d hp-btn-3d--red"
              onClick={() => onOpenAudit(pillar.title)}
            >
              <span className="hp-btn-3d-inner">{pillar.actionCta}</span>
            </button>
            <button
              type="button"
              className="hp-btn-3d hp-btn-3d--yellow"
              onClick={() => onNavigate('/growth-audit')}
            >
              <span className="hp-btn-3d-inner">Request Digital Growth Audit</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM: VISIBLE LEAD LEAKAGE DIAGNOSTIC */}
      <section
        id="pillar-lead-generation-problem-system"
        data-section-id="pillar-lead-generation-problem-system"
        className="bsp-section bsp-section--ink"
      >
        <div className="mp-container">
          <div className="bsp-open-editorial-split">
            <div>
              <span className="hp-mono-pill hp-mono-pill--yellow">
                01 · VISIBLE PIPELINE LEAKAGE
              </span>
              <h2 className="mp-h2 mp-h2--white" style={{ marginTop: 12 }}>
                {pillar.problemTitle}
              </h2>
              <p className="bsp-editorial-lead-light">{pillar.problemBody}</p>
            </div>

            <div className="bsp-leakage-diagram">
              <div className="bsp-leak-row">
                <span className="bsp-leak-badge">LEAK 01 · UNCLEAR OFFER</span>
                <p>More traffic fails when visitors cannot tell why your offer matters.</p>
              </div>
              <div className="bsp-leak-row">
                <span className="bsp-leak-badge">LEAK 02 · WEAK LANDING PAGE</span>
                <p>More advertising wastes budget if the destination page does not convert.</p>
              </div>
              <div className="bsp-leak-row">
                <span className="bsp-leak-badge">LEAK 03 · SLOW FOLLOW-UP</span>
                <p>More leads create waste when enquiries wait hours or days for a response.</p>
              </div>
            </div>
          </div>

          <div className="bsp-open-bestfor-strip" style={{ marginTop: 28 }}>
            <span className="bsp-bestfor-eyebrow">BEST FOR BUSINESSES THAT:</span>
            <div className="bsp-bestfor-inline-list">
              {pillar.bestFor.map((item, idx) => (
                <div key={item} className="bsp-bestfor-tick">
                  <span className="bsp-tick-idx">0{idx + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE OPPORTUNITY PIPELINE (CAPABILITY STORY SYSTEM) */}
      <CapabilityStorySystem
        variant="lead-generation"
        sectionId="pillar-lead-generation-subservices-breakdown"
        eyebrow="02 · OPPORTUNITY PIPELINE ARCHITECTURE"
        title="Five Connected Stages That Turn Attention Into Qualified Opportunities"
        subtitle="Follow the directional Opportunity Pipeline from Lead Funnels and Demand Campaigns to Conversion Landing Pages, CRM Organization, and Automated Follow-ups."
        stages={pillar.subServicesDetail}
        visualType="opportunity-pipeline"
        motionType="pipeline-progression"
        ctaMode="contextual-single"
        mobileMode="vertical-connected-path"
        accentColor={pillar.accentColor}
        onNavigate={onNavigate}
      />

      {/* 4. SIGNATURE SCROLL-STOPPING SEQUENCE: 8-STAGE INTERACTIVE "LEAD JOURNEY" */}
      <section
        id="pillar-lead-generation-signature-stage"
        data-section-id="pillar-lead-generation-signature-stage"
        className="bsp-section bsp-section--cream"
      >
        <div className="mp-container">
          <div className="bsp-signature-intro">
            <span
              className="hp-mono-pill"
              style={{ backgroundColor: pillar.accentColor, color: '#ffffff' }}
            >
              03 · SIGNATURE SEQUENCE · INTERACTIVE LEAD JOURNEY
            </span>
            <h2 className="mp-h2" style={{ marginTop: 12 }}>
              Follow One Opportunity Signal Through All 8 Stages of Conversion
            </h2>
          </div>

          <div className="bsp-lead-journey-board">
            <div className="bsp-journey-stepper" role="tablist" aria-label="Lead Journey Stages">
              {LEAD_JOURNEY_STAGES.map((st, idx) => (
                <button
                  key={st.step}
                  type="button"
                  role="tab"
                  aria-selected={journeyIdx === idx}
                  className={`bsp-journey-node-btn ${journeyIdx === idx ? 'is-active' : idx < journeyIdx ? 'is-passed' : ''}`}
                  onClick={() => setJourneyIdx(idx)}
                >
                  <small>{st.step}</small>
                  <strong>{st.stage}</strong>
                </button>
              ))}
            </div>

            <div className="bsp-journey-spotlight">
              <div className="bsp-journey-spotlight-copy">
                <span className="bsp-stage-role-tag">
                  STAGE {LEAD_JOURNEY_STAGES[journeyIdx].step} · {LEAD_JOURNEY_STAGES[journeyIdx].stage}
                </span>
                <h3>{LEAD_JOURNEY_STAGES[journeyIdx].title}</h3>
                <p>{LEAD_JOURNEY_STAGES[journeyIdx].detail}</p>
              </div>

              {/* Qualification Branching & CRM Record Visual */}
              <div className="bsp-journey-branch-preview">
                <div className="bsp-branch-box bsp-branch-box--fit">
                  <small>QUALIFIED OPPORTUNITY PATH</small>
                  <strong>CRM Record Created → Owner Assigned → Instant Follow-Up</strong>
                </div>
                <div className="bsp-branch-box bsp-branch-box--nurture">
                  <small>EARLY-STAGE NURTURE PATH</small>
                  <strong>Educational Sequence &amp; Future Readiness Tracking</strong>
                </div>
              </div>
            </div>
          </div>

          <PillarLoopVideoCanvas
            pillar={pillar}
            caption="Interactive Lead Journey: Audience → Offer → Landing Page → Lead Capture → Qualification → CRM Integration → Automated Follow-Up → Opportunity."
          />
        </div>
      </section>

      {/* 5. PIPELINE VISIBILITY & 6-STEP METHODOLOGY */}
      <section
        id="pillar-lead-generation-approach-steps"
        data-section-id="pillar-lead-generation-approach-steps"
        className="bsp-section bsp-section--cream"
      >
        <div className="mp-container">
          <div className="bsp-section-head-split">
            <div>
              <span className="hp-mono-pill hp-mono-pill--yellow">
                04 · END-TO-END PIPELINE VISIBILITY
              </span>
              <h2 className="mp-h2" style={{ marginTop: 10 }}>
                How We Build &amp; Refine Your {pillar.title} System
              </h2>
            </div>
          </div>

          <div className="bsp-open-timeline-loop">
            <div className="bsp-timeline-steps-track">
              {pillar.approachSteps.map((st, idx) => (
                <div key={st.step} className="bsp-timeline-node">
                  <div className="bsp-timeline-node-head">
                    <span
                      className="bsp-timeline-step-badge"
                      style={{ backgroundColor: pillar.accentColor, color: '#ffffff' }}
                    >
                      {st.step}
                    </span>
                    {idx < pillar.approachSteps.length - 1 && (
                      <div className="bsp-timeline-line" />
                    )}
                  </div>
                  <h4>{st.title}</h4>
                  <p>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <PillarSupportingBlueprint
            pillar={pillar}
            label="END-TO-END LEAD CAPTURE, CRM ROUTING & FOLLOW-UP BLUEPRINT"
            caption="Every stage between initial click and customer conversation is connected, tracked, and continuously refined."
          />
        </div>
      </section>

      {/* 6. CONTENT-SPECIFIC CTA: COMPLETE OPPORTUNITY PATH BECOMES VISIBLE */}
      <section
        id="pillar-lead-generation-cta"
        data-section-id="pillar-lead-generation-cta"
        className="bsp-cta-section bsp-cta--lead"
      >
        <div className="mp-container">
          <div className="bsp-cta-opportunity-path">
            <div className="bsp-opportunity-chain-header">
              {pillar.systemChain.map((s, i) => (
                <span key={s} className="bsp-opp-chip">
                  0{i + 1} · {s} ✓
                </span>
              ))}
            </div>
            <h2 className="bsp-cta-h2">{pillar.headline}</h2>
            <p className="bsp-cta-sub">{pillar.shortDesc}</p>
            <div className="hp-cta-buttons" style={{ justifyContent: 'center' }}>
              <button
                type="button"
                className="hp-btn-3d hp-btn-3d--red"
                onClick={() => onOpenAudit(pillar.title)}
              >
                <span className="hp-btn-3d-inner">{pillar.actionCta}</span>
              </button>
              <button
                type="button"
                className="hp-btn-3d hp-btn-3d--yellow"
                onClick={() => onNavigate('/growth-audit')}
              >
                <span className="hp-btn-3d-inner">Request Digital Growth Audit</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
 * 5. TECHNOLOGY & DIGITAL TRANSFORMATION PAGE (/solutions/digital-transformation)
 * Concept: "From disconnected operational systems to a connected business architecture."
 * Rhythm: Discover → Map → Prioritize → Architect → Integrate → Modernize → Improve
 * ========================================================================== */
const DT_BLUEPRINT_STAGES = [
  {
    step: '01',
    phase: 'DISCOVER',
    title: 'Existing Systems & Operational Habits Are Discovered',
    detail: 'Audit every current spreadsheet, legacy tool, customer touchpoint, and manual workaround across teams.'
  },
  {
    step: '02',
    phase: 'MAP',
    title: 'Broken Connections & Hidden Dependencies Are Mapped',
    detail: 'Expose where teams re-enter duplicate data, where handoffs break between sales and operations, and where visibility disappears.'
  },
  {
    step: '03',
    phase: 'PRIORITIZE',
    title: 'High-Impact Operational Bottlenecks Are Prioritized',
    detail: 'Sequence improvements by business value and operational readiness instead of trying to replace everything at once.'
  },
  {
    step: '04',
    phase: 'ARCHITECT',
    title: 'Unified Architecture Layers Appear',
    detail: 'Design the clean target structure across CRM (Customer Layer), ERP (Operations Layer), and Custom Software.'
  },
  {
    step: '05',
    phase: 'INTEGRATE',
    title: 'Data Bridges Connect Separate Systems',
    detail: 'Build reliable API and workflow bridges so customer, order, and operational records flow between systems automatically.'
  },
  {
    step: '06',
    phase: 'DATA FLOW',
    title: 'Real-Time Operational Data Begins Moving',
    detail: 'Replace static spreadsheets with live operational dashboards and shared customer context across departments.'
  },
  {
    step: '07',
    phase: 'SIMPLIFY',
    title: 'Manual Administrative Steps Reduce',
    detail: 'Eliminate repetitive status chasing, duplicate entry, and manual reporting bottlenecks.'
  },
  {
    step: '08',
    phase: 'UNIFIED OS',
    title: 'A Connected Business Architecture Becomes Visible',
    detail: 'Your technology, processes, and teams operate on a cohesive foundation built for the next stage of growth.'
  }
];

function DigitalTransformationPillarExperience({ pillar, onNavigate, onOpenAudit }) {
  const [alignedArchitecture, setAlignedArchitecture] = useState(true);
  const [blueprintIdx, setBlueprintIdx] = useState(7);

  return (
    <div className="bsp-pillar-root bsp-pillar--dt">
      {/* 1. HERO: DISCONNECTED OPERATIONAL FRAGMENTS -> UNIFIED BUSINESS ARCHITECTURE */}
      <section
        id="pillar-digital-transformation-hero"
        data-section-id="pillar-digital-transformation-hero"
        className="bsp-open-hero"
      >
        <div className="mp-container">
          <PillarOpenTopBar pillar={pillar} onNavigate={onNavigate} />

          <div className="bsp-dt-hero-layout">
            <div className="bsp-dt-hero-copy">
              <div className="bsp-eyebrow-row">
                <span
                  className="hp-mono-pill"
                  style={{ backgroundColor: pillar.accentColor, color: '#0b0f17' }}
                >
                  SOLUTION PILLAR {pillar.index} · {pillar.title.toUpperCase()}
                </span>
                <span className="bsp-rhythm-tag">
                  DISCOVER → MAP → PRIORITIZE → ARCHITECT → INTEGRATE → MODERNIZE → IMPROVE
                </span>
              </div>

              <TypewriterHeading
                tag="h1"
                text={pillar.headline}
                typingSpeed={8}
                className="hp-serif-display bsp-hero-h1"
              />
              <p className="bsp-hero-lead">{pillar.shortDesc}</p>
              <p className="bsp-hero-body">{pillar.fullDesc}</p>

              <div className="mp-hero-actions" style={{ justifyContent: 'flex-start' }}>
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--red"
                  onClick={() => onOpenAudit(pillar.title)}
                >
                  <span className="hp-btn-3d-inner">{pillar.actionCta}</span>
                </button>
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--yellow"
                  onClick={() => onNavigate('/growth-audit')}
                >
                  <span className="hp-btn-3d-inner">Request Digital Growth Audit</span>
                </button>
              </div>
            </div>

            {/* Interactive Disconnected Fragments -> Connected Architecture Blueprint */}
            <div className="bsp-dt-fragments-stage">
              <div className="bsp-dt-stage-bar">
                <span>
                  {alignedArchitecture
                    ? 'FUTURE STATE: UNIFIED BUSINESS ARCHITECTURE'
                    : 'CURRENT STATE: DISCONNECTED OPERATIONAL FRAGMENTS'}
                </span>
                <button
                  type="button"
                  className="bsp-filter-chip is-active"
                  onClick={() => setAlignedArchitecture((a) => !a)}
                >
                  {alignedArchitecture ? 'View Disconnected Fragments' : 'Align System Architecture'}
                </button>
              </div>

              <div className={`bsp-dt-blueprint-canvas ${alignedArchitecture ? 'is-unified' : 'is-fragmented'}`}>
                {[
                  {
                    code: 'LAYER 01',
                    frag: 'Manual Spreadsheets & Duplicate Entry',
                    unified: 'CRM · Structured Customer & Sales Pipeline System'
                  },
                  {
                    code: 'LAYER 02',
                    frag: 'Separate Department Tools & Silos',
                    unified: 'ERP · Connected Operational & Resource Visibility'
                  },
                  {
                    code: 'LAYER 03',
                    frag: 'Off-the-Shelf Tool Workarounds',
                    unified: 'Custom Software · Built Around Your Business Logic'
                  },
                  {
                    code: 'LAYER 04',
                    frag: 'Broken Manual Handoffs & Delays',
                    unified: 'Business Automation · Cross-System Data Bridges'
                  },
                  {
                    code: 'LAYER 05',
                    frag: 'Missing Visibility Into Operations',
                    unified: 'Digital Transformation · Sequenced Growth Roadmap'
                  }
                ].map((layer, idx) => (
                  <div key={layer.code} className={`bsp-dt-fragment-block bsp-dt-frag--${idx + 1}`}>
                    <span className="bsp-dt-layer-code">{layer.code}</span>
                    <strong>{alignedArchitecture ? layer.unified : layer.frag}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CURRENT STATE & PROCESS DEPENDENCY MAPPING */}
      <section
        id="pillar-digital-transformation-problem-system"
        data-section-id="pillar-digital-transformation-problem-system"
        className="bsp-section bsp-section--ink"
      >
        <div className="mp-container">
          <div className="bsp-open-editorial-split">
            <div>
              <span className="hp-mono-pill hp-mono-pill--yellow">
                01 · CURRENT STATE &amp; PROCESS MAPPING
              </span>
              <h2 className="mp-h2 mp-h2--white" style={{ marginTop: 12 }}>
                {pillar.problemTitle}
              </h2>
              <p className="bsp-editorial-lead-light">{pillar.problemBody}</p>
            </div>

            <div className="bsp-dt-dependency-map">
              <div className="bsp-dep-header">HIDDEN OPERATIONAL DEPENDENCIES WE MAP &amp; RESOLVE:</div>
              <div className="bsp-dep-lines">
                <div className="bsp-dep-item">
                  <span>Marketing &amp; Lead Capture</span>
                  <span className="bsp-dep-bridge">═══ DATA BRIDGE ═══▶</span>
                  <span>CRM Sales Pipeline</span>
                </div>
                <div className="bsp-dep-item">
                  <span>Closed Sales Opportunity</span>
                  <span className="bsp-dep-bridge">═══ DATA BRIDGE ═══▶</span>
                  <span>ERP &amp; Operations Delivery</span>
                </div>
                <div className="bsp-dep-item">
                  <span>Internal Custom Workflows</span>
                  <span className="bsp-dep-bridge">═══ DATA BRIDGE ═══▶</span>
                  <span>Executive Reporting Visibility</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bsp-open-bestfor-strip" style={{ marginTop: 28 }}>
            <span className="bsp-bestfor-eyebrow">BEST FOR BUSINESSES THAT:</span>
            <div className="bsp-bestfor-inline-list">
              {pillar.bestFor.map((item, idx) => (
                <div key={item} className="bsp-bestfor-tick">
                  <span className="bsp-tick-idx">0{idx + 1}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPATIAL TRANSFORMATION ROADMAP */}
      <section
        id="pillar-digital-transformation-approach-steps"
        data-section-id="pillar-digital-transformation-approach-steps"
        className="bsp-section bsp-section--cream"
      >
        <div className="mp-container">
          <div className="bsp-section-head-split">
            <div>
              <span className="hp-mono-pill hp-mono-pill--yellow">
                02 · SPATIAL TRANSFORMATION ROADMAP
              </span>
              <h2 className="mp-h2" style={{ marginTop: 10 }}>
                Six Sequenced Milestones From Discovery to Continuous Improvement
              </h2>
            </div>
          </div>

          <div className="bsp-open-timeline-loop">
            <div className="bsp-timeline-steps-track">
              {pillar.approachSteps.map((st, idx) => (
                <div key={st.step} className="bsp-timeline-node">
                  <div className="bsp-timeline-node-head">
                    <span
                      className="bsp-timeline-step-badge"
                      style={{ backgroundColor: pillar.accentColor, color: '#0b0f17' }}
                    >
                      {st.step}
                    </span>
                    {idx < pillar.approachSteps.length - 1 && (
                      <div className="bsp-timeline-line" />
                    )}
                  </div>
                  <h4>{st.title}</h4>
                  <p>{st.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <PillarSupportingBlueprint
            pillar={pillar}
            label="CROSS-SYSTEM DATA BRIDGES & FUTURE-STATE ARCHITECTURE ROADMAP"
            caption="Technology should reduce complexity—connecting CRM, ERP, custom software, and automation around how your business actually operates."
          />
        </div>
      </section>

      {/* 4. SIGNATURE SCROLL-STOPPING SEQUENCE: 8-STAGE "SYSTEM TRANSFORMATION BLUEPRINT" */}
      <section
        id="pillar-digital-transformation-signature-stage"
        data-section-id="pillar-digital-transformation-signature-stage"
        className="bsp-section bsp-section--white"
      >
        <div className="mp-container">
          <div className="bsp-signature-intro">
            <span
              className="hp-mono-pill"
              style={{ backgroundColor: pillar.accentColor, color: '#0b0f17' }}
            >
              03 · SIGNATURE SEQUENCE · SYSTEM TRANSFORMATION BLUEPRINT
            </span>
            <h2 className="mp-h2" style={{ marginTop: 12 }}>
              From Disconnected Tools to a Unified Business Operating Architecture
            </h2>
          </div>

          <div className="bsp-dt-elevation-board">
            <div className="bsp-dt-phase-tabs" role="tablist" aria-label="Transformation Blueprint Stages">
              {DT_BLUEPRINT_STAGES.map((st, idx) => (
                <button
                  key={st.step}
                  type="button"
                  role="tab"
                  aria-selected={blueprintIdx === idx}
                  className={`bsp-dt-phase-btn ${blueprintIdx === idx ? 'is-active' : idx < blueprintIdx ? 'is-passed' : ''}`}
                  onClick={() => setBlueprintIdx(idx)}
                >
                  <small>{st.step}</small>
                  <strong>{st.phase}</strong>
                </button>
              ))}
            </div>

            <div className="bsp-dt-elevation-detail">
              <span className="bsp-stage-role-tag">
                ARCHITECTURAL PHASE {DT_BLUEPRINT_STAGES[blueprintIdx].step} · {DT_BLUEPRINT_STAGES[blueprintIdx].phase}
              </span>
              <h3>{DT_BLUEPRINT_STAGES[blueprintIdx].title}</h3>
              <p>{DT_BLUEPRINT_STAGES[blueprintIdx].detail}</p>
            </div>
          </div>

          <PillarLoopVideoCanvas
            pillar={pillar}
            caption="System Transformation Blueprint: Discover → Map Broken Connections → Prioritize → Architect Layers → Connect Data Bridges → Unified Operating System."
          />
        </div>
      </section>

      {/* 5. CONNECTED BUSINESS BLUEPRINT (CAPABILITY STORY SYSTEM) */}
      <CapabilityStorySystem
        variant="digital-transformation"
        sectionId="pillar-digital-transformation-subservices-breakdown"
        eyebrow="04 · CONNECTED BUSINESS BLUEPRINT"
        title="CRM, ERP, Custom Software & Automation — Connected as One Stack"
        subtitle="Inspect how disconnected operational silos transform into a unified business architecture across CRM, ERP, Custom Software, Business Automation, and Digital Transformation."
        stages={pillar.subServicesDetail}
        visualType="connected-blueprint"
        motionType="dependency-bridge"
        ctaMode="contextual-single"
        mobileMode="vertical-connected-path"
        accentColor={pillar.accentColor}
        onNavigate={onNavigate}
      />

      {/* 6. CONTENT-SPECIFIC CTA: SYSTEM BLUEPRINT RESOLVES INTO PRACTICAL STARTING POINT */}
      <section
        id="pillar-digital-transformation-cta"
        data-section-id="pillar-digital-transformation-cta"
        className="bsp-cta-section bsp-cta--dt"
      >
        <div className="mp-container">
          <div className="bsp-cta-blueprint-resolution">
            <span className="hp-mono-pill" style={{ backgroundColor: '#a3e635', color: '#0b0f17' }}>
              PHASE 01 STARTING POINT · ARCHITECTURAL DIAGNOSTIC
            </span>
            <h2 className="bsp-cta-h2" style={{ marginTop: 14 }}>{pillar.headline}</h2>
            <p className="bsp-cta-sub">{pillar.shortDesc}</p>
            <div className="hp-cta-buttons" style={{ justifyContent: 'center' }}>
              <button
                type="button"
                className="hp-btn-3d hp-btn-3d--red"
                onClick={() => onOpenAudit(pillar.title)}
              >
                <span className="hp-btn-3d-inner">{pillar.actionCta}</span>
              </button>
              <button
                type="button"
                className="hp-btn-3d hp-btn-3d--yellow"
                onClick={() => onNavigate('/growth-audit')}
              >
                <span className="hp-btn-3d-inner">Request Digital Growth Audit</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Master Dispatcher for All 5 Bespoke Core Solution Pillar Pages
 */
export function BespokeSolutionPillarPage({ pillarId, onNavigate, onOpenAudit }) {
  const pageRef = useRef(null);
  const pillar =
    CORE_SOLUTIONS.find((p) => p.id === pillarId) || CORE_SOLUTIONS[0];

  useRouteMotion(pageRef, pillar.route);
  useSectionMotionEngine(pageRef, pillar.route);

  return (
    <div ref={pageRef} className="mp-page bsp-page-shell">
      {pillar.id === 'digital-marketing' && (
        <DigitalMarketingPillarExperience
          pillar={pillar}
          onNavigate={onNavigate}
          onOpenAudit={onOpenAudit}
        />
      )}
      {pillar.id === 'ai-automation' && (
        <AiAutomationPillarExperience
          pillar={pillar}
          onNavigate={onNavigate}
          onOpenAudit={onOpenAudit}
        />
      )}
      {pillar.id === 'websites-ecommerce' && (
        <WebsitesEcommercePillarExperience
          pillar={pillar}
          onNavigate={onNavigate}
          onOpenAudit={onOpenAudit}
        />
      )}
      {pillar.id === 'lead-generation' && (
        <LeadGenerationPillarExperience
          pillar={pillar}
          onNavigate={onNavigate}
          onOpenAudit={onOpenAudit}
        />
      )}
      {pillar.id === 'digital-transformation' && (
        <DigitalTransformationPillarExperience
          pillar={pillar}
          onNavigate={onNavigate}
          onOpenAudit={onOpenAudit}
        />
      )}
    </div>
  );
}
