import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Sparkles,
  ChevronRight,
  Layers,
  Cpu,
  Globe,
  TrendingUp,
  Compass,
  BookOpen,
  Mail
} from 'lucide-react';
import TypewriterHeading from '../components/TypewriterHeading';
import {
  BRAND,
  CORE_SOLUTIONS,
  SERVICES_CATALOG,
  GROWTH_SYSTEM_FLOW,
  PROBLEM_SOLVER_CARDS,
  APPROACH_PAGE_DATA,
  ABOUT_PAGE_DATA,
  GROWTH_AUDIT_DATA,
  DIAGNOSTIC_AUDITS,
  INSIGHTS_DATA,
  IMPROVEMENT_OPTIONS,
  FAQ_LIST
} from '../data/agencyData';

/**
 * Shared Subpage Top Breadcrumb & Quick-Switcher Bar
 */
function SubpageBreadcrumb({ crumbs = [], onNavigate }) {
  return (
    <div className="mp-breadcrumb-bar">
      <button
        type="button"
        className="mp-back-btn"
        onClick={() => onNavigate('/')}
      >
        <ArrowLeft size={15} />
        <span>Home</span>
      </button>
      {crumbs.map((c, idx) => (
        <React.Fragment key={c.label}>
          <ChevronRight size={14} className="mp-crumb-sep" />
          {c.route ? (
            <button
              type="button"
              className="mp-crumb-link"
              onClick={() => onNavigate(c.route)}
            >
              {c.label}
            </button>
          ) : (
            <span className="mp-crumb-current">{c.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

/**
 * 1. SOLUTIONS OVERVIEW PAGE (/solutions)
 */
export function SolutionsOverviewPage({ onNavigate, onOpenAudit }) {
  return (
    <div className="mp-page">
      <section className="mp-hero mp-hero--cream">
        <div className="mp-container">
          <SubpageBreadcrumb
            crumbs={[{ label: 'All 5 Core Solutions & 13 Services' }]}
            onNavigate={onNavigate}
          />
          <span className="hp-mono-pill hp-mono-pill--yellow">
            CONNECTED DIGITAL GROWTH ARCHITECTURE
          </span>
          <TypewriterHeading
            tag="h1"
            text="Five Core Solution Pillars. Thirteen Connected Services."
            typingSpeed={34}
            className="hp-serif-display mp-hero-title"
          />
          <p className="mp-hero-lead">
            {BRAND.promise} Explore how our 5 solution pillars and 13
            specialized execution services work together as one measurable
            system.
          </p>

          {/* 5-Stage Connected Growth System Strip */}
          <div className="mp-flow-strip">
            {GROWTH_SYSTEM_FLOW.map((stage) => (
              <div
                key={stage.step}
                className="mp-flow-card"
                onClick={() => onNavigate(stage.route)}
              >
                <div className="mp-flow-card-top">
                  <span
                    className="mp-flow-badge"
                    style={{
                      backgroundColor: stage.color,
                      color:
                        stage.color === '#2563eb' ||
                        stage.color === '#8b5cf6' ||
                        stage.color === '#ff4d2d'
                          ? '#fff'
                          : '#000'
                    }}
                  >
                    {stage.step} · {stage.stage}
                  </span>
                  <ArrowUpRight size={16} />
                </div>
                <strong>{stage.discipline}</strong>
                <p>{stage.summary}</p>
                <small>{stage.metrics}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All 5 Core Solution Pillars */}
      <section className="mp-section mp-section--white">
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              5 CORE SOLUTION PILLARS
            </span>
            <h2 className="mp-h2">
              Choose a Pillar to Inspect Its Complete System
            </h2>
          </div>

          <div className="mp-pillars-stack">
            {CORE_SOLUTIONS.map((sol) => (
              <div key={sol.id} className="mp-pillar-card">
                <div
                  className="mp-pillar-card-banner"
                  style={{ backgroundColor: sol.accentColor }}
                >
                  <span
                    className="mp-pillar-idx"
                    style={{
                      color:
                        sol.accentColor === '#2563eb' ||
                        sol.accentColor === '#8b5cf6' ||
                        sol.accentColor === '#ff4d2d'
                          ? '#fff'
                          : '#0b0f17'
                    }}
                  >
                    PILLAR {sol.index} · {sol.title.toUpperCase()}
                  </span>
                  <button
                    type="button"
                    className="mp-pillar-open-btn"
                    onClick={() => onNavigate(sol.route)}
                  >
                    <span>Open Pillar Page</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                <div className="mp-pillar-card-body">
                  <div className="mp-pillar-main">
                    <h3>{sol.headline}</h3>
                    <p>{sol.fullDesc}</p>

                    <div className="mp-chain-wrap">
                      <span className="hp-box-label">CONNECTED SYSTEM CHAIN</span>
                      <div className="hp-flow-chain">
                        {sol.systemChain.map((node, i) => (
                          <React.Fragment key={node}>
                            <span className="hp-flow-node">
                              0{i + 1} · {node}
                            </span>
                            {i < sol.systemChain.length - 1 && (
                              <span className="hp-flow-arrow">→</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mp-pillar-side">
                    <span className="hp-box-label">
                      INDIVIDUAL SERVICES IN THIS PILLAR
                    </span>
                    <div className="mp-service-links-list">
                      {sol.finalArchitectureServices.map((srv) => (
                        <button
                          key={srv.slug}
                          type="button"
                          className="hp-service-chip"
                          onClick={() => onNavigate(`/services/${srv.slug}`)}
                        >
                          <span>{srv.name}</span>
                          <ArrowUpRight size={14} />
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="hp-btn-3d hp-btn-3d--full"
                      onClick={() => onNavigate(sol.route)}
                    >
                      <span
                        className="hp-btn-3d-inner"
                        style={{
                          backgroundColor: sol.accentColor,
                          color:
                            sol.accentColor === '#2563eb' ||
                            sol.accentColor === '#8b5cf6' ||
                            sol.accentColor === '#ff4d2d'
                              ? '#fff'
                              : '#0b0f17'
                        }}
                      >
                        {sol.ctaText}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem-Solver Matrix */}
      <section className="mp-section mp-section--dark">
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              START WITH YOUR CHALLENGE
            </span>
            <h2 className="mp-h2 mp-h2--white">
              What Is Holding Your Business Back Right Now?
            </h2>
          </div>

          <div className="mp-matrix-grid">
            {PROBLEM_SOLVER_CARDS.map((card) => (
              <div
                key={card.quote}
                className="mp-matrix-card"
                onClick={() => onNavigate(card.route)}
              >
                <span className="hp-testimonial-tag">{card.tag}</span>
                <h4>{card.quote}</h4>
                <p>{card.role}</p>
                <div className="mp-matrix-foot">
                  <span>Inspect Solution</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * 2. DEDICATED SOLUTION PILLAR PAGE (/solutions/:pillarId)
 */
export function SolutionPillarPage({ pillarId, onNavigate, onOpenAudit }) {
  const pillar =
    CORE_SOLUTIONS.find((p) => p.id === pillarId) || CORE_SOLUTIONS[0];

  return (
    <div className="mp-page">
      <section
        className="mp-hero"
        style={{ backgroundColor: '#f8f6f0' }}
      >
        <div className="mp-container">
          <SubpageBreadcrumb
            crumbs={[
              { label: 'Solutions', route: '/solutions' },
              { label: `${pillar.index} · ${pillar.title}` }
            ]}
            onNavigate={onNavigate}
          />

          <div className="mp-pillar-switcher">
            {CORE_SOLUTIONS.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`mp-switch-chip ${
                  s.id === pillar.id ? 'is-active' : ''
                }`}
                style={
                  s.id === pillar.id
                    ? {
                        backgroundColor: s.accentColor,
                        color:
                          s.accentColor === '#2563eb' ||
                          s.accentColor === '#8b5cf6' ||
                          s.accentColor === '#ff4d2d'
                            ? '#fff'
                            : '#0b0f17'
                      }
                    : {}
                }
                onClick={() => onNavigate(s.route)}
              >
                {s.index} · {s.title}
              </button>
            ))}
          </div>

          <span
            className="hp-mono-pill"
            style={{
              backgroundColor: pillar.accentColor,
              color:
                pillar.accentColor === '#2563eb' ||
                pillar.accentColor === '#8b5cf6' ||
                pillar.accentColor === '#ff4d2d'
                  ? '#fff'
                  : '#0b0f17'
            }}
          >
            CORE SOLUTION PILLAR {pillar.index} · {pillar.title.toUpperCase()}
          </span>

          <TypewriterHeading
            tag="h1"
            text={pillar.headline}
            typingSpeed={34}
            className="hp-serif-display mp-hero-title"
          />

          <p className="mp-hero-lead">{pillar.fullDesc}</p>

          <div className="mp-hero-actions">
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
              <span className="hp-btn-3d-inner">
                Request Digital Growth Audit
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Problem & Connected System Chain */}
      <section className="mp-section mp-section--dark">
        <div className="mp-container">
          <div className="mp-two-col">
            <div className="mp-problem-panel">
              <span className="hp-mono-pill hp-mono-pill--yellow">
                THE CORE BOTTLENECK
              </span>
              <h2 className="mp-h2 mp-h2--white">{pillar.problemTitle}</h2>
              <p className="mp-body-light">{pillar.problemBody}</p>
            </div>

            <div className="mp-bestfor-panel">
              <h4>Who This Pillar Is Built For</h4>
              <ul>
                {pillar.bestFor.map((item) => (
                  <li key={item}>
                    <span className="hp-check-badge">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mp-chain-banner">
            <span className="hp-box-label" style={{ color: '#a3e635' }}>
              THE CONNECTED {pillar.title.toUpperCase()} ARCHITECTURE
            </span>
            <div className="hp-flow-chain">
              {pillar.systemChain.map((node, i) => (
                <React.Fragment key={node}>
                  <span className="hp-flow-node">
                    0{i + 1} · {node}
                  </span>
                  {i < pillar.systemChain.length - 1 && (
                    <span
                      className="hp-flow-arrow"
                      style={{ color: '#a3e635' }}
                    >
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sub-Services Breakdown */}
      <section className="mp-section mp-section--white">
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              SPECIALIZED CAPABILITIES
            </span>
            <h2 className="mp-h2">
              Services Connected Inside {pillar.title}
            </h2>
          </div>

          <div className="mp-subservices-grid">
            {pillar.subServicesDetail.map((sub) => (
              <div key={sub.title} className="mp-subservice-card">
                <div className="mp-subservice-top">
                  <h3>{sub.title}</h3>
                  <button
                    type="button"
                    className="hp-service-chip"
                    onClick={() => onNavigate(`/services/${sub.slug}`)}
                  >
                    <span>Full Service Page</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
                <p>{sub.desc}</p>
                <div className="mp-includes-grid">
                  {sub.includes.map((inc) => (
                    <div key={inc} className="hp-deliverable-item">
                      <Check size={15} />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Steps for this Pillar */}
      <section className="mp-section mp-section--cream">
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              EXECUTION SEQUENCE
            </span>
            <h2 className="mp-h2">How We Build & Scale {pillar.title}</h2>
          </div>

          <div className="mp-steps-grid">
            {pillar.approachSteps.map((st) => (
              <div key={st.step} className="mp-step-card">
                <span
                  className="mp-step-num"
                  style={{
                    backgroundColor: pillar.accentColor,
                    color:
                      pillar.accentColor === '#2563eb' ||
                      pillar.accentColor === '#8b5cf6' ||
                      pillar.accentColor === '#ff4d2d'
                        ? '#fff'
                        : '#000'
                  }}
                >
                  STEP {st.step}
                </span>
                <h4>{st.title}</h4>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * 3. DEDICATED INDIVIDUAL SERVICE PAGE (/services/:slug)
 */
export function ServiceDetailPage({ slug, onNavigate, onOpenAudit }) {
  const service =
    SERVICES_CATALOG.find((s) => s.slug === slug) || SERVICES_CATALOG[0];
  const relatedServices = SERVICES_CATALOG.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  );

  return (
    <div className="mp-page">
      <section className="mp-hero mp-hero--cream">
        <div className="mp-container">
          <SubpageBreadcrumb
            crumbs={[
              { label: 'Solutions', route: '/solutions' },
              { label: service.category, route: service.categoryRoute },
              { label: `${service.number} · ${service.title}` }
            ]}
            onNavigate={onNavigate}
          />

          <div className="mp-pillar-switcher">
            {SERVICES_CATALOG.map((srv) => (
              <button
                key={srv.slug}
                type="button"
                className={`mp-switch-chip ${
                  srv.slug === service.slug ? 'is-active' : ''
                }`}
                style={
                  srv.slug === service.slug
                    ? {
                        backgroundColor: srv.color,
                        color:
                          srv.color === '#2563eb' ||
                          srv.color === '#8b5cf6' ||
                          srv.color === '#ff4d2d'
                            ? '#fff'
                            : '#0b0f17'
                      }
                    : {}
                }
                onClick={() => onNavigate(`/services/${srv.slug}`)}
              >
                {srv.number} · {srv.title}
              </button>
            ))}
          </div>

          <span
            className="hp-mono-pill"
            style={{
              backgroundColor: service.color,
              color:
                service.color === '#2563eb' ||
                service.color === '#8b5cf6' ||
                service.color === '#ff4d2d'
                  ? '#fff'
                  : '#0b0f17'
            }}
          >
            SERVICE {service.number} OF 13 · {service.category.toUpperCase()}
          </span>

          <TypewriterHeading
            tag="h1"
            text={service.headline}
            typingSpeed={34}
            className="hp-serif-display mp-hero-title"
          />

          <p className="mp-hero-lead">{service.subheadline}</p>
          <p className="mp-hero-sub">{service.intro}</p>

          <div className="mp-hero-actions">
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
                Explore {service.category} Pillar
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Problem & Execution Flow */}
      <section className="mp-section mp-section--dark">
        <div className="mp-container">
          <div className="mp-two-col">
            <div className="mp-problem-panel">
              <span className="hp-mono-pill hp-mono-pill--yellow">
                WHY STANDALONE TACTICS FAIL
              </span>
              <h2 className="mp-h2 mp-h2--white">The Bottleneck We Solve</h2>
              <p className="mp-body-light">{service.problem}</p>
            </div>

            <div className="mp-bestfor-panel">
              <h4>Who {service.title} Is Built For</h4>
              <ul>
                {(service.whoItsFor || []).map((item) => (
                  <li key={item}>
                    <span className="hp-check-badge">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mp-chain-banner">
            <span className="hp-box-label" style={{ color: '#a3e635' }}>
              CONNECTED EXECUTION FLOW FOR {service.title.toUpperCase()}
            </span>
            <div className="hp-flow-chain">
              {service.flow.map((node, i) => (
                <React.Fragment key={node}>
                  <span className="hp-flow-node">
                    0{i + 1} · {node}
                  </span>
                  {i < service.flow.length - 1 && (
                    <span
                      className="hp-flow-arrow"
                      style={{ color: '#a3e635' }}
                    >
                      →
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Related Services */}
      <section className="mp-section mp-section--white">
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              WHAT WE ENGINEER
            </span>
            <h2 className="mp-h2">
              What&apos;s Included in {service.title}
            </h2>
          </div>

          <div className="mp-steps-grid">
            {service.deliverables.map((del, idx) => (
              <div key={del} className="mp-step-card">
                <span
                  className="mp-step-num"
                  style={{
                    backgroundColor: service.color,
                    color:
                      service.color === '#2563eb' ||
                      service.color === '#8b5cf6' ||
                      service.color === '#ff4d2d'
                        ? '#fff'
                        : '#000'
                  }}
                >
                  DELIVERABLE 0{idx + 1}
                </span>
                <h4>{del}</h4>
              </div>
            ))}
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
                          color:
                            rel.color === '#2563eb' ||
                            rel.color === '#8b5cf6' ||
                            rel.color === '#ff4d2d'
                              ? '#fff'
                              : '#000'
                        }}
                      >
                        {rel.number}
                      </span>
                      <span className="hp-service-cat">{rel.category}</span>
                    </div>
                    <h4>{rel.title}</h4>
                    <p>{rel.headline}</p>
                    <div className="hp-service-card-foot">
                      <span>Open Service Page</span>
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
 * 4. OUR APPROACH PAGE (/approach)
 */
export function ApproachPage({ onNavigate, onOpenAudit }) {
  const [activeLoopIdx, setActiveLoopIdx] = useState(0);

  return (
    <div className="mp-page">
      <section className="mp-hero mp-hero--cream">
        <div className="mp-container">
          <SubpageBreadcrumb
            crumbs={[{ label: 'Our Approach & 7-Step Framework' }]}
            onNavigate={onNavigate}
          />
          <span className="hp-mono-pill hp-mono-pill--yellow">
            STRATEGY BEFORE TECHNOLOGY
          </span>
          <TypewriterHeading
            tag="h1"
            text={APPROACH_PAGE_DATA.headline}
            typingSpeed={34}
            className="hp-serif-display mp-hero-title"
          />
          <p className="mp-hero-lead">{APPROACH_PAGE_DATA.subheadline}</p>
          <p className="mp-hero-sub">{APPROACH_PAGE_DATA.intro}</p>
        </div>
      </section>

      <section className="mp-section mp-section--dark">
        <div className="mp-container">
          <div className="mp-two-col">
            <div className="mp-problem-panel">
              <span className="hp-mono-pill hp-mono-pill--yellow">
                PROBLEM-FIRST ARCHITECTURE
              </span>
              <h2 className="mp-h2 mp-h2--white">
                {APPROACH_PAGE_DATA.problemFirstTitle}
              </h2>
              <p className="mp-body-light">
                {APPROACH_PAGE_DATA.problemFirstBody}
              </p>
            </div>

            <div className="mp-bestfor-panel">
              <h4>{APPROACH_PAGE_DATA.humanPlusAi.title}</h4>
              <p style={{ color: '#0b0f17', lineHeight: 1.55 }}>
                {APPROACH_PAGE_DATA.humanPlusAi.description}
              </p>
              <hr className="hp-dashed-divider" style={{ margin: '16px 0' }} />
              <h4>{APPROACH_PAGE_DATA.dataInformed.title}</h4>
              <p style={{ color: '#0b0f17', lineHeight: 1.55 }}>
                {APPROACH_PAGE_DATA.dataInformed.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7-Step Framework */}
      <section className="mp-section mp-section--white">
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              THE 7-STEP AXONVORTEX METHODOLOGY
            </span>
            <h2 className="mp-h2">
              How We Turn Business Goals Into Connected Systems
            </h2>
          </div>

          <div className="mp-steps-grid">
            {APPROACH_PAGE_DATA.frameworkSteps.map((step) => (
              <div key={step.index} className="mp-step-card">
                <span
                  className="mp-step-num"
                  style={{ backgroundColor: '#f59e0b' }}
                >
                  PHASE {step.index}
                </span>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Growth Loop */}
          <div className="mp-loop-box">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              {APPROACH_PAGE_DATA.growthLoop.title}
            </span>
            <h3>Digital Growth Is a Continuous Experiment</h3>
            <p>{APPROACH_PAGE_DATA.growthLoop.description}</p>
            <div className="mp-loop-nodes">
              {APPROACH_PAGE_DATA.growthLoop.nodes.map((n, idx) => (
                <button
                  key={n}
                  type="button"
                  className={`mp-loop-node ${
                    activeLoopIdx === idx ? 'is-active' : ''
                  }`}
                  onClick={() => setActiveLoopIdx(idx)}
                >
                  <small>0{idx + 1}</small>
                  <strong>{n}</strong>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * 5. ABOUT AXONVORTEX PAGE (/about)
 */
export function AboutPage({ onNavigate, onOpenAudit }) {
  return (
    <div className="mp-page">
      <section className="mp-hero mp-hero--cream">
        <div className="mp-container">
          <SubpageBreadcrumb
            crumbs={[{ label: 'About AxonVortex · Building From Zero' }]}
            onNavigate={onNavigate}
          />
          <span className="hp-mono-pill hp-mono-pill--yellow">
            RADICAL TRANSPARENCY · BUILDING IN PUBLIC
          </span>
          <TypewriterHeading
            tag="h1"
            text={ABOUT_PAGE_DATA.headline}
            typingSpeed={34}
            className="hp-serif-display mp-hero-title"
          />
          <p className="mp-hero-lead">{ABOUT_PAGE_DATA.intro}</p>
        </div>
      </section>

      <section className="mp-section mp-section--dark">
        <div className="mp-container">
          <div className="mp-two-col">
            <div className="mp-problem-panel">
              <span className="hp-mono-pill hp-mono-pill--yellow">
                WHY AXONVORTEX EXISTS
              </span>
              <h2 className="mp-h2 mp-h2--white">
                More Tools Don&apos;t Automatically Make a Better Business.
              </h2>
              <p className="mp-body-light">{ABOUT_PAGE_DATA.whyExists}</p>
            </div>

            <div className="mp-bestfor-panel">
              <span className="hp-mono-pill hp-mono-pill--yellow">
                BUILDING IN THE OPEN
              </span>
              <h4 style={{ marginTop: 10 }}>
                Why We Document Every Experiment From Zero
              </h4>
              <p style={{ color: '#0b0f17', lineHeight: 1.6 }}>
                {ABOUT_PAGE_DATA.buildingInPublic}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Beliefs */}
      <section className="mp-section mp-section--white">
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              OUR 4 FOUNDATIONAL BELIEFS
            </span>
            <h2 className="mp-h2">What Guides Every System We Architect</h2>
          </div>

          <div className="mp-steps-grid">
            {ABOUT_PAGE_DATA.beliefs.map((b) => (
              <div key={b.index} className="mp-step-card">
                <span
                  className="mp-step-num"
                  style={{
                    backgroundColor: b.color,
                    color: b.color === '#8b5cf6' || b.color === '#ff4d2d' ? '#fff' : '#000'
                  }}
                >
                  BELIEF {b.index}
                </span>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>

          {/* What We Believe In vs What We Reject */}
          <div className="mp-two-col" style={{ marginTop: 48 }}>
            <div className="mp-contrast-card mp-contrast-card--yes">
              <h3>What We Stand For</h3>
              <ul>
                {ABOUT_PAGE_DATA.doBelieveIn.map((item) => (
                  <li key={item}>
                    <span className="hp-check-badge">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mp-contrast-card mp-contrast-card--no">
              <h3>What We Reject</h3>
              <ul>
                {ABOUT_PAGE_DATA.dontBelieveIn.map((item) => (
                  <li key={item}>
                    <span className="mp-x-badge">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * 6. DIGITAL GROWTH AUDIT PAGE (/growth-audit)
 */
export function GrowthAuditPage({ onNavigate }) {
  const [selectedAudit, setSelectedAudit] = useState(DIAGNOSTIC_AUDITS[0]);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    bottleneck: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mp-page">
      <section className="mp-hero mp-hero--cream">
        <div className="mp-container">
          <SubpageBreadcrumb
            crumbs={[{ label: 'Digital Growth Audit & 5 Assessments' }]}
            onNavigate={onNavigate}
          />
          <span className="hp-mono-pill hp-mono-pill--yellow">
            DIAGNOSE BEFORE YOU SPEND
          </span>
          <TypewriterHeading
            tag="h1"
            text={GROWTH_AUDIT_DATA.headline}
            typingSpeed={34}
            className="hp-serif-display mp-hero-title"
          />
          <p className="mp-hero-lead">{GROWTH_AUDIT_DATA.intro}</p>
        </div>
      </section>

      <section className="mp-section mp-section--white">
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              6 DIAGNOSTIC DIMENSIONS
            </span>
            <h2 className="mp-h2">What We Evaluate Across Your Business</h2>
          </div>

          <div className="mp-steps-grid">
            {GROWTH_AUDIT_DATA.whatWeLookAt.map((item) => (
              <div key={item.index} className="mp-step-card">
                <span
                  className="mp-step-num"
                  style={{ backgroundColor: '#a3e635' }}
                >
                  AREA {item.index}
                </span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive 5-Assessment Selector + Form */}
          <div className="mp-audit-workstation">
            <div className="hp-audit-split">
              <div className="hp-audit-selector-col">
                <span className="hp-box-label">
                  1. SELECT YOUR DIAGNOSTIC ASSESSMENT
                </span>
                <div className="hp-audit-tabs">
                  {DIAGNOSTIC_AUDITS.map((audit) => (
                    <button
                      key={audit.id}
                      type="button"
                      className={`hp-audit-tab ${
                        selectedAudit.id === audit.id ? 'is-active' : ''
                      }`}
                      style={
                        selectedAudit.id === audit.id
                          ? { backgroundColor: audit.color, color: audit.color === '#2563eb' || audit.color === '#8b5cf6' || audit.color === '#ff4d2d' ? '#fff' : '#000' }
                          : {}
                      }
                      onClick={() => {
                        setSelectedAudit(audit);
                        setSubmitted(false);
                      }}
                    >
                      <span className="hp-audit-tab-badge">{audit.badge}</span>
                      <strong>{audit.title}</strong>
                      <small>{audit.question}</small>
                    </button>
                  ))}
                </div>

                <div className="hp-audit-checkpoints">
                  <span className="hp-box-label">
                    WHAT WE EVALUATE IN {selectedAudit.title.toUpperCase()}:
                  </span>
                  <ul>
                    {selectedAudit.checkpoints.map((cp) => (
                      <li key={cp}>
                        <Sparkles size={14} />
                        <span>{cp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hp-audit-form-col">
                {submitted ? (
                  <div className="hp-audit-success">
                    <div className="hp-success-badge">REQUEST RECEIVED ✓</div>
                    <h4>Your {selectedAudit.title} Is Queued</h4>
                    <p>
                      We will review <strong>{formData.website || 'your digital presence'}</strong>{' '}
                      and send your prioritized diagnostic roadmap to{' '}
                      <strong>{formData.email}</strong>.
                    </p>
                    <button
                      type="button"
                      className="hp-btn-3d hp-btn-3d--yellow"
                      onClick={() => setSubmitted(false)}
                    >
                      <span className="hp-btn-3d-inner">
                        Submit Another Assessment
                      </span>
                    </button>
                  </div>
                ) : (
                  <form className="hp-audit-form" onSubmit={handleSubmit}>
                    <span className="hp-box-label">
                      2. TELL US ABOUT YOUR BUSINESS
                    </span>
                    <label className="hp-field">
                      <span>Your Name *</span>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </label>
                    <label className="hp-field">
                      <span>Work Email *</span>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </label>
                    <label className="hp-field">
                      <span>Website / Store / Social URL</span>
                      <input
                        type="text"
                        placeholder="https://yourbusiness.com"
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                      />
                    </label>
                    <label className="hp-field">
                      <span>Primary Growth Bottleneck</span>
                      <select
                        value={formData.bottleneck}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            bottleneck: e.target.value
                          })
                        }
                      >
                        <option value="">Select your #1 priority...</option>
                        {IMPROVEMENT_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </label>
                    <button
                      type="submit"
                      className="hp-btn-3d hp-btn-3d--red hp-btn-3d--full"
                    >
                      <span className="hp-btn-3d-inner">
                        Request My {selectedAudit.title}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * 7. INSIGHTS & EXPERIMENTS HUB PAGE (/insights)
 */
export function InsightsPage({ onNavigate }) {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [expandedId, setExpandedId] = useState('entry-01');

  const entries =
    selectedTopic === 'All'
      ? INSIGHTS_DATA.journalEntries
      : INSIGHTS_DATA.journalEntries.filter((e) => e.topic === selectedTopic);

  return (
    <div className="mp-page">
      <section className="mp-hero mp-hero--cream">
        <div className="mp-container">
          <SubpageBreadcrumb
            crumbs={[{ label: 'Insights, Frameworks & Public Experiments' }]}
            onNavigate={onNavigate}
          />
          <span className="hp-mono-pill hp-mono-pill--yellow">
            QUESTION → RESEARCH → INSIGHT → ACTION → SOLUTION
          </span>
          <TypewriterHeading
            tag="h1"
            text={INSIGHTS_DATA.headline}
            typingSpeed={34}
            className="hp-serif-display mp-hero-title"
          />
          <p className="mp-hero-lead">{INSIGHTS_DATA.intro}</p>

          <div className="mp-pillar-switcher">
            {INSIGHTS_DATA.categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`mp-switch-chip ${
                  selectedTopic === cat.id ? 'is-active' : ''
                }`}
                onClick={() => setSelectedTopic(cat.id)}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mp-section mp-section--white">
        <div className="mp-container">
          <div className="mp-journal-list">
            {entries.map((entry) => {
              const isOpen = expandedId === entry.id;
              return (
                <div key={entry.id} className="mp-journal-card">
                  <div className="mp-journal-meta">
                    <span className="hp-mono-pill hp-mono-pill--yellow">
                      {entry.index} · {entry.category.toUpperCase()}
                    </span>
                    <span className="mp-journal-pillar">{entry.pillar}</span>
                    <span className="mp-journal-time">{entry.readTime}</span>
                  </div>

                  <h3>{entry.title}</h3>
                  <p>{entry.excerpt}</p>

                  {isOpen && entry.keyTakeaways && (
                    <div className="mp-journal-takeaways">
                      <span className="hp-box-label">
                        ARCHITECTURAL TAKEAWAYS & EXECUTION NOTES:
                      </span>
                      <ul>
                        {entry.keyTakeaways.map((kt) => (
                          <li key={kt}>
                            <Check size={15} />
                            <span>{kt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mp-journal-actions">
                    <button
                      type="button"
                      className="hp-service-chip"
                      onClick={() =>
                        setExpandedId(isOpen ? null : entry.id)
                      }
                    >
                      <span>
                        {isOpen ? 'Hide Key Takeaways' : 'Read Key Takeaways'}
                      </span>
                    </button>
                    {entry.relatedSolution && (
                      <button
                        type="button"
                        className="hp-service-chip"
                        onClick={() =>
                          onNavigate(entry.relatedSolution.route)
                        }
                      >
                        <span>{entry.relatedSolution.label}</span>
                        <ArrowUpRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * 8. CONTACT & PROJECT DISCOVERY PAGE (/contact)
 */
export function ContactPage({ onNavigate }) {
  const [selectedAreas, setSelectedAreas] = useState([
    'Not sure yet — Need Growth Audit'
  ]);
  const [sent, setSent] = useState(false);

  const toggleArea = (area) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  return (
    <div className="mp-page">
      <section className="mp-hero mp-hero--cream">
        <div className="mp-container">
          <SubpageBreadcrumb
            crumbs={[{ label: 'Contact & Project Discovery' }]}
            onNavigate={onNavigate}
          />
          <span className="hp-mono-pill hp-mono-pill--yellow">
            START WITH A CONVERSATION
          </span>
          <TypewriterHeading
            tag="h1"
            text="Tell Us Where You Are. We'll Help Architect What's Next."
            typingSpeed={34}
            className="hp-serif-display mp-hero-title"
          />
          <p className="mp-hero-lead">
            You don&apos;t need to know which service package to pick. Share
            your business goal or bottleneck and we will map the right
            combination of strategy, marketing, websites, and AI automation.
          </p>
        </div>
      </section>

      <section className="mp-section mp-section--white">
        <div className="mp-container">
          <div className="mp-two-col">
            <div className="mp-contact-form-card">
              {sent ? (
                <div className="hp-audit-success">
                  <div className="hp-success-badge">MESSAGE RECEIVED ✓</div>
                  <h4>Thank You for Reaching Out to AxonVortex</h4>
                  <p>
                    Our strategy team has received your project brief and will
                    respond within 1 business day.
                  </p>
                  <button
                    type="button"
                    className="hp-btn-3d hp-btn-3d--yellow"
                    onClick={() => setSent(false)}
                  >
                    <span className="hp-btn-3d-inner">Send Another Brief</span>
                  </button>
                </div>
              ) : (
                <form
                  className="hp-audit-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <h3>1. What Areas Would You Like to Improve?</h3>
                  <div className="mp-area-chips">
                    {IMPROVEMENT_OPTIONS.map((area) => {
                      const active = selectedAreas.includes(area);
                      return (
                        <button
                          key={area}
                          type="button"
                          className={`mp-area-chip ${
                            active ? 'is-selected' : ''
                          }`}
                          onClick={() => toggleArea(area)}
                        >
                          {active && <Check size={13} />}
                          <span>{area}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mp-form-grid">
                    <label className="hp-field">
                      <span>Your Name *</span>
                      <input type="text" required placeholder="Alex Morgan" />
                    </label>
                    <label className="hp-field">
                      <span>Work Email *</span>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                      />
                    </label>
                  </div>

                  <label className="hp-field">
                    <span>Business Name & Website URL</span>
                    <input
                      type="text"
                      placeholder="https://yourbusiness.com"
                    />
                  </label>

                  <label className="hp-field">
                    <span>What Is Your #1 Goal or Challenge Right Now?</span>
                    <textarea
                      rows={4}
                      className="mp-textarea"
                      placeholder="Tell us about your business, current marketing or workflows, and what you want to achieve..."
                    />
                  </label>

                  <button
                    type="submit"
                    className="hp-btn-3d hp-btn-3d--red hp-btn-3d--full"
                  >
                    <span className="hp-btn-3d-inner">
                      Send Discovery Brief to AxonVortex
                    </span>
                  </button>
                </form>
              )}
            </div>

            <div className="mp-contact-info-col">
              <div className="mp-info-card">
                <span className="hp-mono-pill hp-mono-pill--yellow">
                  DIRECT CHANNELS
                </span>
                <h4>Reach Our Team Directly</h4>
                <div className="mp-email-list">
                  <div>
                    <small>GENERAL & STRATEGY</small>
                    <strong>{BRAND.email}</strong>
                  </div>
                  <div>
                    <small>DIGITAL GROWTH AUDITS</small>
                    <strong>{BRAND.auditEmail}</strong>
                  </div>
                  <div>
                    <small>PARTNERSHIPS & ECOSYSTEM</small>
                    <strong>{BRAND.partnershipsEmail}</strong>
                  </div>
                </div>
              </div>

              <div className="mp-info-card" style={{ backgroundColor: '#091326', color: '#fff' }}>
                <span className="hp-mono-pill hp-mono-pill--yellow">
                  PREFER A STRUCTURED DIAGNOSTIC?
                </span>
                <h4 style={{ color: '#fff' }}>
                  Start With a Digital Growth Audit
                </h4>
                <p style={{ color: '#f8f6f0', fontSize: '0.95rem' }}>
                  We evaluate 6 dimensions across your digital presence,
                  marketing, conversion funnel, and AI/automation readiness.
                </p>
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--yellow hp-btn-3d--full"
                  onClick={() => onNavigate('/growth-audit')}
                >
                  <span className="hp-btn-3d-inner">
                    Go to Interactive Growth Audit
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
