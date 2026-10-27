import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Sparkles,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import TypewriterHeading from '../components/TypewriterHeading';
import HandDrawnArrows from '../components/HandDrawnArrows';
import {
  AxonProblemBadge,
  AxonFloatingStickerSvg,
  AxonCtaEmblemSvg,
  AxonMazeComparisonSvg,
  AxonMarkerOrbSvg
} from '../components/AxonCustomVisuals';
import {
  BespokeServicePage,
  PillarInteractiveMatrix,
  getReadableTextColor
} from '../components/ServicePageExperiences';
import {
  SolutionPillarSignatureStage,
  SolutionsConnectedArchitectureMap
} from '../components/ServiceMotionMedia';
import { BespokeSolutionPillarPage } from '../components/BespokeSolutionPillars';
import { useRouteMotion } from '../data/routeMotionMatrix';
import { useSectionMotionEngine } from '../data/motionManifest';
import {
  BRAND,
  CORE_SOLUTIONS,
  SERVICES_CATALOG,
  GROWTH_SYSTEM_FLOW,
  PROBLEM_SOLVER_MATRIX,
  APPROACH_PAGE_DATA,
  ABOUT_PAGE_DATA,
  GROWTH_AUDIT_DATA,
  DIAGNOSTIC_AUDITS,
  INSIGHTS_DATA,
  IMPROVEMENT_OPTIONS,
  FAQ_LIST
} from '../data/agencyData';

gsap.registerPlugin(ScrollTrigger);

/**
 * Shared GSAP ScrollTrigger + Lenis Parallax Engine for All Subpages
 * Animates floating hero stickers, scroll-scrubbed system chains, sticky folder cards,
 * differential parallax columns, and 3D neo-brutalist card reveals on every route.
 */
function useSubpageScrollEffects(pageRef, depKey) {
  useEffect(() => {
    const root = pageRef.current;
    if (!root) return undefined;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: '(max-width: 767px)',
        isTabletOrStackedHero: '(min-width: 768px) and (max-width: 1080px)',
        isDesktopHero: '(min-width: 1081px)',
        isTwoColDesktop: '(min-width: 981px)',
        reduceMotion: '(prefers-reduced-motion: reduce)'
      },
      (context) => {
        const {
          isMobile,
          isDesktopHero,
          isTwoColDesktop,
          reduceMotion
        } = context.conditions;

        // 1. Parallax Floating Hero Stickers (safe bounded offsets when stacked on mobile/tablet)
        gsap.utils.toArray('[data-mp-sticker]').forEach((el) => {
          if (reduceMotion) {
            gsap.set(el, { y: 0, rotate: 0 });
            return;
          }
          const speed = parseFloat(el.getAttribute('data-mp-sticker') || '1');
          const rawRot = parseFloat(el.getAttribute('data-mp-rot') || '8');
          const maxOffset = isDesktopHero ? 36 * speed : 7 * speed;
          const maxRot = isDesktopHero
            ? rawRot
            : Math.sign(rawRot || 1) * Math.min(1.2, Math.abs(rawRot) * 0.15);

          gsap.fromTo(
            el,
            { y: maxOffset, rotate: -maxRot },
            {
              y: -maxOffset,
              rotate: maxRot,
              ease: 'none',
              overwrite: 'auto',
              scrollTrigger: {
                trigger: el.closest('.mp-hero') || root,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.45
              }
            }
          );
        });

        // 2. Scroll-Scrubbed Connected System Chain Progress Beam
        gsap.utils.toArray('[data-mp-chain-fill]').forEach((bar) => {
          if (reduceMotion) {
            gsap.set(bar, { scaleX: 1 });
            return;
          }
          const container =
            bar.closest('[data-mp-chain-wrap]') || bar.parentElement;
          gsap.fromTo(
            bar,
            { scaleX: 0.06 },
            {
              scaleX: 1,
              ease: 'none',
              overwrite: 'auto',
              scrollTrigger: {
                trigger: container,
                start: 'top 86%',
                end: 'bottom 35%',
                scrub: 0.35
              }
            }
          );
        });

        // 3. Differential 2-Column Scroll Parallax (desktop 2-column viewports only)
        gsap.utils.toArray('[data-mp-col-speed]').forEach((col) => {
          if (reduceMotion || !isTwoColDesktop) {
            gsap.set(col, { y: 0 });
            return;
          }
          const speed = parseFloat(col.getAttribute('data-mp-col-speed') || '1');
          gsap.fromTo(
            col,
            { y: 20 * speed },
            {
              y: -20 * speed,
              ease: 'none',
              overwrite: 'auto',
              scrollTrigger: {
                trigger: col.parentElement || col,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.5
              }
            }
          );
        });

        // 4. 3D Neo-Brutalist Scroll Reveal Cards (excluding cards managed by BoxOverlapSystem)
        gsap.utils.toArray('[data-mp-reveal]').forEach((card, i) => {
          if (
            card.hasAttribute('data-box-overlap-card') ||
            card.closest('.mp-steps-grid') ||
            card.closest('.mp-flow-strip') ||
            card.closest('.mp-outcomes-grid')
          ) {
            return;
          }

          if (reduceMotion) {
            gsap.set(card, { y: 0, opacity: 1, scale: 1 });
            return;
          }

          gsap.fromTo(
            card,
            {
              y: isMobile ? 14 : 22,
              opacity: 0.94,
              scale: 0.99
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.48,
              delay: (i % 3) * 0.04,
              ease: 'power3.out',
              overwrite: 'auto',
              scrollTrigger: {
                trigger: card,
                start: 'top 92%',
                toggleActions: 'play none none none'
              }
            }
          );
        });
      },
      root
    );

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 90);

    return () => {
      clearTimeout(timer);
      mm.revert();
    };
  }, [pageRef, depKey]);
}

/**
 * Shared Subpage Top Breadcrumb Bar
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
      {crumbs.map((c) => (
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
 * Reusable Scroll-Scrubbed Connected System Chain Banner
 */
function ScrollChainBanner({ label, nodes = [], dark = true }) {
  return (
    <div
      data-mp-chain-wrap
      className={`mp-chain-banner ${dark ? '' : 'mp-chain-banner--light'}`}
    >
      <div className="mp-chain-header-row">
        <span
          className="hp-box-label"
          style={{ color: dark ? '#a3e635' : '#0b0f17' }}
        >
          {label}
        </span>
        <span className="mp-chain-scroll-tag">SCROLL-SCRUBBED SYSTEM FLOW</span>
      </div>

      {/* Scroll-Scrubbed Progress Track */}
      <div className="mp-chain-progress-rail">
        <div data-mp-chain-fill className="mp-chain-progress-fill" />
      </div>

      <div className="hp-flow-chain">
        {nodes.map((node, i) => (
          <React.Fragment key={`${node}-${i}`}>
            <span className="hp-flow-node">
              0{i + 1} · {node}
            </span>
            {i < nodes.length - 1 && (
              <span
                className="hp-flow-arrow"
                style={{ color: dark ? '#a3e635' : '#ff4d2d' }}
              >
                →
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/**
 * Reusable Subpage Hero with Non-Overlapping Parallax Side Stickers & Hand-Drawn Arrows
 */
function SubpageParallaxHero({
  sectionId,
  crumbs,
  pillText,
  pillColor = '#f59e0b',
  pillTextColor = '#0b0f17',
  title,
  subheadline,
  description,
  children,
  stickerVariants = [0, 1, 2, 3],
  onNavigate
}) {
  return (
    <section
      id={sectionId}
      data-section-id={sectionId}
      className="mp-hero mp-hero--cream"
    >
      <div className="mp-container">
        <SubpageBreadcrumb crumbs={crumbs} onNavigate={onNavigate} />

        {/* 3-Column Non-Overlapping Parallax Stage */}
        <div className="mp-hero-parallax-grid">
          <div className="mp-hero-stickers-col">
            <AxonProblemBadge
              variant={stickerVariants[0] ?? 0}
              className="hp-problem-sticker"
              data-mp-sticker="1.1"
              data-mp-rot="-8"
            />
            <AxonProblemBadge
              variant={stickerVariants[1] ?? 1}
              className="hp-problem-sticker"
              data-mp-sticker="0.85"
              data-mp-rot="7"
            />
          </div>

          <div className="mp-hero-center-col">
            <span
              className="hp-mono-pill"
              style={{ backgroundColor: pillColor, color: pillTextColor }}
            >
              {pillText}
            </span>

            <TypewriterHeading
              tag="h1"
              text={title}
              typingSpeed={32}
              className="hp-serif-display mp-hero-title"
            />

            {subheadline && <p className="mp-hero-lead">{subheadline}</p>}
            {description && <p className="mp-hero-sub">{description}</p>}

            {children}

            {/* Hand-Drawn Downward Arrows Below Hero Copy */}
            <div className="mp-hero-arrows-wrap">
              <HandDrawnArrows visible />
            </div>
          </div>

          <div className="mp-hero-stickers-col">
            <AxonProblemBadge
              variant={stickerVariants[2] ?? 2}
              className="hp-problem-sticker"
              data-mp-sticker="1.15"
              data-mp-rot="9"
            />
            <AxonProblemBadge
              variant={stickerVariants[3] ?? 3}
              className="hp-problem-sticker"
              data-mp-sticker="0.9"
              data-mp-rot="-7"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Reusable Parker-Style Concentric Dashed Ellipses CTA at Bottom of Every Subpage
 */
function SubpageConcentricCta({
  sectionId,
  headlineTop = 'Ready to build a smarter',
  highlightText = 'growth system?',
  bodyText = 'Tell us about your business and what you are working toward, or begin with a Digital Growth Audit.',
  primaryLabel = 'Start Your Project',
  onPrimaryClick,
  secondaryLabel = 'Request a Growth Audit',
  onSecondaryClick
}) {
  return (
    <section
      id={sectionId}
      data-section-id={sectionId}
      className="hp-cta-section mp-subpage-cta"
    >
      <div className="hp-cta-ellipses" aria-hidden="true">
        <div className="hp-ellipse hp-ellipse--outer" />
        <div className="hp-ellipse hp-ellipse--middle" />
        <div className="hp-ellipse hp-ellipse--inner" />
      </div>

      <AxonFloatingStickerSvg
        label="01 · ATTRACT"
        sub="ADS · SEO · SOCIAL"
        color="#f59e0b"
        className="hp-cta-float-sticker hp-cta-float-sticker--1"
      />
      <AxonFloatingStickerSvg
        label="02 · CONVERT"
        sub="WEB · SHOPIFY · CRM"
        color="#a3e635"
        className="hp-cta-float-sticker hp-cta-float-sticker--2"
      />
      <AxonFloatingStickerSvg
        label="03 · AUTOMATE"
        sub="AI CHAT · VOICE · AGENTS"
        color="#ffdfd6"
        className="hp-cta-float-sticker hp-cta-float-sticker--3"
      />
      <AxonFloatingStickerSvg
        label="04 · IMPROVE"
        sub="HYPOTHESIS → SCALE"
        color="#ede9fe"
        className="hp-cta-float-sticker hp-cta-float-sticker--4"
      />

      <div className="hp-cta-content">
        <div className="hp-cta-headline-box">
          <h2 className="hp-display-title hp-display-title--white">
            {headlineTop}
          </h2>
          <span className="hp-tilted-highlight hp-tilted-highlight--yellow">
            {highlightText}
          </span>
          <p className="hp-cta-body">{bodyText}</p>
        </div>

        <div className="hp-cta-main-sticker-wrap">
          <AxonCtaEmblemSvg />
        </div>

        <div className="hp-cta-button-stage mp-cta-dual-btns">
          <button
            type="button"
            className="hp-btn-3d hp-btn-3d--large"
            onClick={onPrimaryClick}
          >
            <span className="hp-btn-3d-inner">{primaryLabel}</span>
          </button>
          {secondaryLabel && (
            <button
              type="button"
              className="hp-btn-3d hp-btn-3d--yellow"
              onClick={onSecondaryClick}
            >
              <span className="hp-btn-3d-inner">{secondaryLabel}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

/**
 * 1. SOLUTIONS OVERVIEW PAGE (/solutions)
 * Exact Document Copy + Sticky Stacking Folder Cards + Interactive Problem Matcher
 */
export function SolutionsOverviewPage({ onNavigate, onOpenAudit }) {
  const pageRef = useRef(null);
  const [selectedQuoteIdx, setSelectedQuoteIdx] = useState(0);
  useSubpageScrollEffects(pageRef, 'solutions-overview');
  useRouteMotion(pageRef, '/solutions');
  useSectionMotionEngine(pageRef, '/solutions');

  const tabAlignments = ['left', 'center', 'right', 'left', 'center'];

  return (
    <div ref={pageRef} className="mp-page">
      <SubpageParallaxHero
        sectionId="solutions-overview-hero"
        crumbs={[{ label: 'Solutions Overview' }]}
        pillText="SOLUTIONS OVERVIEW · CONNECTED GROWTH ARCHITECTURE"
        title="Digital Solutions Built Around Your Growth."
        subheadline="From marketing and websites to AI, automation, and business technology, AxonVortex connects the right capabilities around your commercial goals."
        description="Instead of isolated deliverables, we connect strategy, marketing, websites, CRM, and automation around how your business actually wins customers."
        stickerVariants={[0, 1, 2, 3]}
        onNavigate={onNavigate}
      >
        <div className="mp-hero-actions">
          <button
            type="button"
            className="hp-btn-3d hp-btn-3d--red"
            onClick={() => onNavigate('/growth-audit')}
          >
            <span className="hp-btn-3d-inner">
              Start With a Growth Audit
            </span>
          </button>
          <button
            type="button"
            className="hp-btn-3d hp-btn-3d--yellow"
            onClick={() => onNavigate('/contact')}
          >
            <span className="hp-btn-3d-inner">Talk to Us</span>
          </button>
        </div>

        {/* 5-Stage Connected Growth System Strip */}
        <div className="mp-flow-strip">
          {GROWTH_SYSTEM_FLOW.map((stage) => (
            <div
              key={stage.step}
              data-mp-reveal
              className="mp-flow-card"
              onClick={() => onNavigate(stage.route)}
            >
              <div className="mp-flow-card-top">
                <span
                  className="mp-flow-badge"
                  style={{
                    backgroundColor: stage.color,
                    color: getReadableTextColor(stage.color)
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
      </SubpageParallaxHero>

      {/* Interactive Connected Growth Architecture Map */}
      <SolutionsConnectedArchitectureMap
        solutions={CORE_SOLUTIONS}
        onNavigate={onNavigate}
      />

      {/* Parker-Style Sticky Stacking Folder Cards for All 5 Core Solution Pillars + 06 Digital Growth Audit */}
      <section
        id="solutions-overview-sticky-folders"
        data-section-id="solutions-overview-sticky-folders"
        className="hp-folders-section mp-folders-subpage"
      >
        <div className="mp-container" style={{ marginBottom: 36 }}>
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              STICKY STACKING SOLUTION FOLDERS
            </span>
            <h2 className="mp-h2">
              5 Core Solution Pillars + 06 Digital Growth Audit
            </h2>
          </div>
        </div>

        <div className="hp-folders-stack">
          {CORE_SOLUTIONS.map((sol, index) => {
            const align = tabAlignments[index % tabAlignments.length];
            const isLightText =
              sol.accentColor === '#2563eb' ||
              sol.accentColor === '#8b5cf6' ||
              sol.accentColor === '#ff4d2d';
            return (
              <div
                key={sol.id}
                className={`hp-folder-step hp-folder-step--${(index % 3) + 1}`}
                style={{ zIndex: index + 1 }}
              >
                <div className={`hp-folder-tab-row hp-folder-tab-row--${align}`}>
                  <button
                    type="button"
                    className="hp-folder-tab"
                    style={{
                      backgroundColor: sol.accentColor,
                      color: isLightText ? '#ffffff' : '#0b0f17'
                    }}
                    onClick={() => onNavigate(sol.route)}
                  >
                    <span>
                      Pillar {sol.index} · {sol.title}
                    </span>
                  </button>
                </div>

                <div className="hp-folder-body">
                  <div className="hp-folder-grid">
                    <div className="hp-folder-text-col">
                      <div className="hp-folder-stage-pill">
                        PILLAR {sol.index} · {sol.title.toUpperCase()}
                      </div>
                      <h3 className="hp-folder-headline">{sol.headline}</h3>
                      <p className="hp-folder-paragraph">{sol.shortDesc}</p>
                      <p className="hp-folder-paragraph">{sol.fullDesc}</p>

                      <div className="mp-tag-cloud-row">
                        {sol.tags.map((tag) => (
                          <span key={tag} className="mp-inline-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="hp-folder-services-wrap">
                        <span className="hp-folder-mini-label">
                          FINAL ARCHITECTURE SERVICES IN THIS PILLAR:
                        </span>
                        <div className="hp-folder-service-pills">
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
                      </div>
                    </div>

                    <div className="hp-folder-media-col">
                      <div
                        className="hp-folder-video-card"
                        style={{ backgroundColor: sol.accentColor }}
                      >
                        <div className="hp-video-window-bar">
                          <div className="hp-window-dots">
                            <span />
                            <span />
                            <span />
                          </div>
                          <span className="hp-window-title">
                            {sol.index} · {sol.title}
                          </span>
                        </div>

                        <div
                          className="hp-video-frame-wrap"
                          style={{
                            padding: 22,
                            background: '#091326',
                            color: '#ffffff'
                          }}
                        >
                          <span
                            className="hp-box-label"
                            style={{ color: '#a3e635', display: 'block', marginBottom: 10 }}
                          >
                            BEST FOR BUSINESSES THAT:
                          </span>
                          <ul className="mp-folder-bestfor-list">
                            {sol.bestFor.map((item) => (
                              <li key={item}>
                                <Check size={15} color="#a3e635" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          <div style={{ marginTop: 18 }}>
                            <span
                              className="hp-box-label"
                              style={{ color: '#f59e0b', display: 'block', marginBottom: 8 }}
                            >
                              CONNECTED SYSTEM CHAIN:
                            </span>
                            <div className="hp-flow-chain">
                              {sol.systemChain.map((node, i) => (
                                <React.Fragment key={node}>
                                  <span className="hp-flow-node">
                                    0{i + 1} · {node}
                                  </span>
                                  {i < sol.systemChain.length - 1 && (
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

                        <button
                          type="button"
                          className="hp-btn-3d hp-btn-3d--full"
                          onClick={() => onNavigate(sol.route)}
                        >
                          <span className="hp-btn-3d-inner" style={{ background: '#fff', color: '#0b0f17' }}>
                            {sol.ctaText} →
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* 06 · Digital Growth Audit Sticky Folder Card */}
          <div className="hp-folder-step hp-folder-step--3" style={{ zIndex: 6 }}>
            <div className="hp-folder-tab-row hp-folder-tab-row--right">
              <button
                type="button"
                className="hp-folder-tab"
                style={{ backgroundColor: '#ff4d2d', color: '#ffffff' }}
                onClick={() => onNavigate('/growth-audit')}
              >
                <span>06 · Digital Growth Audit</span>
              </button>
            </div>
            <div className="hp-folder-body">
              <div className="hp-folder-grid">
                <div className="hp-folder-text-col">
                  <div className="hp-folder-stage-pill">
                    06 · DIAGNOSTIC ENTRY POINT
                  </div>
                  <h3 className="hp-folder-headline">
                    Find What&apos;s Holding Your Growth Back.
                  </h3>
                  <p className="hp-folder-paragraph">
                    Identify the gaps, opportunities and priorities across your
                    digital presence, marketing, conversion and operations.
                  </p>
                  <div className="mp-tag-cloud-row">
                    {[
                      'Digital Presence Review',
                      'Social Media Audit',
                      'Website & Conversion Review',
                      'Marketing Performance Review',
                      'AI & Automation Opportunity Review'
                    ].map((t) => (
                      <span key={t} className="mp-inline-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hp-folder-media-col">
                  <div
                    className="hp-folder-video-card"
                    style={{ backgroundColor: '#ff4d2d' }}
                  >
                    <div
                      className="hp-video-frame-wrap"
                      style={{
                        padding: 24,
                        background: '#091326',
                        color: '#fff'
                      }}
                    >
                      <span
                        className="hp-box-label"
                        style={{ color: '#a3e635', display: 'block', marginBottom: 10 }}
                      >
                        BEST FOR BUSINESSES THAT:
                      </span>
                      <p style={{ lineHeight: 1.6, marginBottom: 18 }}>
                        Are unsure where to start or where their current
                        efforts are leaking value.
                      </p>
                      <button
                        type="button"
                        className="hp-btn-3d hp-btn-3d--yellow hp-btn-3d--full"
                        onClick={() => onNavigate('/growth-audit')}
                      >
                        <span className="hp-btn-3d-inner">
                          Request Your Growth Audit
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Problem-to-Solution Matcher ("Which Solution Do You Need?") */}
      <section
        id="solutions-overview-problem-matcher"
        data-section-id="solutions-overview-problem-matcher"
        className="mp-section mp-section--dark"
      >
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              PROBLEM-TO-SOLUTION MATCHER
            </span>
            <h2 className="mp-h2 mp-h2--white">
              Which Solution Do You Need? Start With Your Challenge.
            </h2>
          </div>

          <div className="mp-two-col">
            <div data-mp-col-speed="0.6" className="mp-matcher-quotes-col">
              {PROBLEM_SOLVER_MATRIX.map((item, idx) => (
                <button
                  key={item.code}
                  type="button"
                  className={`mp-matcher-quote-btn ${
                    selectedQuoteIdx === idx ? 'is-active' : ''
                  }`}
                  onClick={() => setSelectedQuoteIdx(idx)}
                >
                  <span className="mp-matcher-code">{item.code}</span>
                  <span className="mp-matcher-quote">{item.quote}</span>
                  <ArrowUpRight size={16} />
                </button>
              ))}
            </div>

            <div data-mp-col-speed="-0.5" className="mp-bestfor-panel">
              <span className="hp-mono-pill hp-mono-pill--yellow">
                RECOMMENDED SOLUTION PATH ·{' '}
                {PROBLEM_SOLVER_MATRIX[selectedQuoteIdx].code}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.9rem',
                  marginTop: 12,
                  marginBottom: 10
                }}
              >
                {PROBLEM_SOLVER_MATRIX[selectedQuoteIdx].quote}
              </h3>
              <p style={{ marginBottom: 18, lineHeight: 1.55 }}>
                Recommended AxonVortex System:{' '}
                <strong>
                  {PROBLEM_SOLVER_MATRIX[selectedQuoteIdx].solution}
                </strong>
              </p>
              <button
                type="button"
                className="hp-btn-3d hp-btn-3d--red hp-btn-3d--full"
                onClick={() =>
                  onNavigate(PROBLEM_SOLVER_MATRIX[selectedQuoteIdx].route)
                }
              >
                <span className="hp-btn-3d-inner">
                  Explore {PROBLEM_SOLVER_MATRIX[selectedQuoteIdx].solution} →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Complete 15-Service Directory */}
      <section
        id="solutions-overview-service-directory"
        data-section-id="solutions-overview-service-directory"
        className="mp-section mp-section--white"
      >
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              FINAL ARCHITECTURE · 15 INDIVIDUAL SERVICE PAGES
            </span>
            <h2 className="mp-h2">
              Complete Directory of All 15 Specialized Services
            </h2>
          </div>

          <div className="hp-services-grid">
            {SERVICES_CATALOG.map((srv) => (
              <div
                key={srv.slug}
                data-mp-reveal
                className="hp-service-card"
                onClick={() => onNavigate(`/services/${srv.slug}`)}
              >
                <div className="hp-service-card-top">
                  <span
                    className="hp-service-num"
                    style={{
                      backgroundColor: srv.color,
                      color:
                        srv.color === '#2563eb' ||
                        srv.color === '#8b5cf6' ||
                        srv.color === '#ff4d2d'
                          ? '#fff'
                          : '#000'
                    }}
                  >
                    {srv.number}
                  </span>
                  <span className="hp-service-cat">{srv.category}</span>
                </div>
                <h4>{srv.title}</h4>
                <p>{srv.headline}</p>
                <div className="hp-service-card-foot">
                  <span>Open Service Page</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubpageConcentricCta
        sectionId="solutions-overview-cta"
        headlineTop="Not sure which solution"
        highlightText="fits your business?"
        bodyText="Start with an AxonVortex Digital Growth Audit and we’ll identify where you are, what’s holding you back, and what matters first."
        primaryLabel="Request Digital Growth Audit"
        onPrimaryClick={() => onNavigate('/growth-audit')}
        secondaryLabel="Talk to Us"
        onSecondaryClick={() => onNavigate('/contact')}
      />
    </div>
  );
}

/**
 * 2. DEDICATED SOLUTION PILLAR PAGE (/solutions/:pillarId)
 * Bespoke Open-Canvas Visual Storytelling & Signature Scroll Sequences for All 5 Core Solution Pillars
 */
export function SolutionPillarPage({ pillarId, onNavigate, onOpenAudit }) {
  return (
    <BespokeSolutionPillarPage
      pillarId={pillarId}
      onNavigate={onNavigate}
      onOpenAudit={onOpenAudit}
    />
  );
}

/**
 * 3. DEDICATED INDIVIDUAL SERVICE PAGE (/services/:slug)
 * Bespoke Service Storytelling, Interactive Hero Workbench & Archetype-Specific Section Sequence
 */
export function ServiceDetailPage({ slug, onNavigate, onOpenAudit }) {
  const outerPageRef = useRef(null);
  const currentIdx = Math.max(
    0,
    SERVICES_CATALOG.findIndex((s) => s.slug === slug)
  );
  const service = SERVICES_CATALOG[currentIdx] || SERVICES_CATALOG[0];
  useSectionMotionEngine(outerPageRef, `/services/${service.slug}`);

  return (
    <div ref={outerPageRef} className="mp-page">
      <BespokeServicePage
        slug={service.slug}
        onNavigate={onNavigate}
        onOpenAudit={onOpenAudit}
      />
      <SubpageConcentricCta
        sectionId={`srv-${service.slug}-cta`}
        headlineTop={service.headline}
        highlightText={service.title}
        bodyText={service.subheadline}
        primaryLabel={service.cta}
        onPrimaryClick={() => onOpenAudit(service.title)}
        secondaryLabel="Request Digital Growth Audit"
        onSecondaryClick={() => onNavigate('/growth-audit')}
      />
    </div>
  );
}

/**
 * 4. OUR APPROACH PAGE (/approach)
 * Exact Document Copy + Parker-Style Interactive Maze Bypass + 7-Step Framework + Growth Loop + 6 Principles
 */
export function ApproachPage({ onNavigate, onOpenAudit }) {
  const pageRef = useRef(null);
  const [activeLoopIdx, setActiveLoopIdx] = useState(0);
  const [mazeMode, setMazeMode] = useState('finish');
  useSubpageScrollEffects(pageRef, 'approach-page');
  useRouteMotion(pageRef, '/approach');
  useSectionMotionEngine(pageRef, '/approach');

  const stepMechanics = [
    'CONTEXT RADAR & DIAGNOSTIC INTAKE',
    'LEAK ISOLATION FILTER',
    'ARCHITECTURE BLUEPRINT BUILDER',
    'INTEGRATION PIPELINE LINKER',
    'LIVE VALIDATION TELEMETRY',
    'OUTCOME SIGNAL LEDGER',
    'COMPOUNDING EXPANSION ENGINE'
  ];

  return (
    <div ref={pageRef} className="mp-page">
      <SubpageParallaxHero
        sectionId="approach-hero"
        crumbs={[{ label: 'Our Approach' }]}
        pillText="OUR APPROACH · STRATEGY BEFORE TECHNOLOGY"
        title={APPROACH_PAGE_DATA.headline}
        subheadline={APPROACH_PAGE_DATA.subheadline}
        description={APPROACH_PAGE_DATA.intro}
        stickerVariants={[0, 2, 1, 3]}
        onNavigate={onNavigate}
      >
        <div className="mp-hero-actions">
          <button
            type="button"
            className="hp-btn-3d hp-btn-3d--red"
            onClick={() => onNavigate('/growth-audit')}
          >
            <span className="hp-btn-3d-inner">
              Start With a Growth Audit
            </span>
          </button>
          <button
            type="button"
            className="hp-btn-3d hp-btn-3d--yellow"
            onClick={() => onNavigate('/solutions')}
          >
            <span className="hp-btn-3d-inner">Explore All 5 Solutions</span>
          </button>
        </div>
      </SubpageParallaxHero>

      {/* Problem-First Philosophy + Human + AI + Data-Informed */}
      <section
        id="approach-problem-philosophy"
        data-section-id="approach-problem-philosophy"
        className="mp-section mp-section--dark"
      >
        <div className="mp-container">
          <div className="mp-two-col">
            <div data-mp-col-speed="0.5" className="mp-problem-panel">
              <span className="hp-mono-pill hp-mono-pill--yellow">
                01 · PROBLEM-FIRST PHILOSOPHY
              </span>
              <h2 className="mp-h2 mp-h2--white">
                {APPROACH_PAGE_DATA.problemFirstTitle}
              </h2>
              <p className="mp-body-light">
                {APPROACH_PAGE_DATA.problemFirstBody}
              </p>
            </div>

            <div data-mp-col-speed="-0.5" className="mp-bestfor-panel">
              <span className="hp-mono-pill hp-mono-pill--yellow">
                HUMAN + AI
              </span>
              <h4 style={{ marginTop: 10 }}>
                {APPROACH_PAGE_DATA.humanPlusAi.title}
              </h4>
              <p style={{ color: '#0b0f17', lineHeight: 1.55 }}>
                {APPROACH_PAGE_DATA.humanPlusAi.description}
              </p>
              <hr className="hp-dashed-divider" style={{ margin: '18px 0' }} />
              <span className="hp-mono-pill hp-mono-pill--yellow">
                {APPROACH_PAGE_DATA.dataInformed.title}
              </span>
              <p style={{ color: '#0b0f17', lineHeight: 1.55, marginTop: 10 }}>
                {APPROACH_PAGE_DATA.dataInformed.description}
              </p>
            </div>
          </div>

          <ScrollChainBanner
            label="THE AXONVORTEX GROWTH LOOP"
            nodes={APPROACH_PAGE_DATA.growthLoop.nodes}
            dark
          />
        </div>
      </section>

      {/* Interactive Parker-Style Maze Comparison Stage inside Approach */}
      <section
        id="approach-maze-comparison"
        data-section-id="approach-maze-comparison"
        className="mp-section mp-section--cream"
      >
        <div className="mp-container" style={{ alignItems: 'center' }}>
          <div className="mp-section-header" style={{ alignItems: 'center', textAlign: 'center' }}>
            <span className="hp-mono-pill hp-mono-pill--yellow">
              TOOL-FIRST NOISE VS. PROBLEM-FIRST STRATEGY
            </span>
            <h2 className="mp-h2">
              {APPROACH_PAGE_DATA.problemFirstTitle}
            </h2>
          </div>

          <div className="hp-maze-toggle-bar">
            <span
              className={`hp-maze-toggle-label ${
                mazeMode === 'old' ? 'is-active' : ''
              }`}
              onClick={() => setMazeMode('old')}
            >
              Tool-First Silos (Disconnected Activity)
            </span>

            <button
              type="button"
              className={`hp-switch-pill ${
                mazeMode !== 'old' ? 'is-on' : ''
              }`}
              onClick={() =>
                setMazeMode((m) => (m === 'old' ? 'finish' : 'old'))
              }
              aria-label="Toggle between tool-first maze and problem-first strategy"
            >
              <span className="hp-switch-thumb" />
            </button>

            <span
              className={`hp-maze-toggle-label ${
                mazeMode !== 'old' ? 'is-active' : ''
              }`}
              onClick={() => setMazeMode('finish')}
            >
              Problem-First AxonVortex System
            </span>
          </div>

          <div className={`hp-maze-stage hp-maze-stage--${mazeMode}`}>
            <div className="hp-maze-bg-layer">
              <AxonMazeComparisonSvg isBypassed={mazeMode !== 'old'} />
            </div>
            <div className="hp-maze-bypass-track" aria-hidden="true">
              <div
                className={`hp-maze-bypass-line hp-maze-bypass-line--${mazeMode}`}
              />
            </div>
            <div className={`hp-maze-marker hp-maze-marker--${mazeMode}`}>
              <span className="hp-marker-tag">
                {mazeMode === 'old'
                  ? 'Chasing disconnected tools'
                  : 'Strategy → Action → Measure → Improve ✓'}
              </span>
              <AxonMarkerOrbSvg isComplete={mazeMode !== 'old'} />
            </div>
            <span className="hp-maze-edge-pill hp-maze-edge-pill--start">
              PROBLEM
            </span>
            <span
              className={`hp-maze-edge-pill hp-maze-edge-pill--end ${
                mazeMode === 'finish' ? 'is-reached' : ''
              }`}
            >
              GROWTH
            </span>
          </div>
        </div>
      </section>

      {/* The 7-Step AxonVortex Framework */}
      <section
        id="approach-seven-step-framework"
        data-section-id="approach-seven-step-framework"
        className="mp-section mp-section--white"
      >
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              02 · THE AXONVORTEX FRAMEWORK
            </span>
            <h2 className="mp-h2">
              7 Steps From Business Understanding to Continuous Improvement
            </h2>
          </div>

          <div
            data-rx-progress-track
            className="mp-chain-progress-rail"
            style={{ marginBottom: 22 }}
          >
            <div data-rx-progress-fill className="mp-chain-progress-fill" />
          </div>

          <div className="mp-steps-grid">
            {APPROACH_PAGE_DATA.frameworkSteps.map((step, idx) => (
              <div
                key={step.index}
                data-mp-reveal
                data-step-mechanic={stepMechanics[idx]}
                className="mp-step-card"
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <span
                    className="mp-step-num"
                    style={{ backgroundColor: '#f59e0b' }}
                  >
                    STEP {step.index}
                  </span>
                  <small style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', fontWeight: 700, color: '#334155' }}>
                    {stepMechanics[idx]}
                  </small>
                </div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Growth Loop */}
          <div data-mp-reveal className="mp-loop-box">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              {APPROACH_PAGE_DATA.growthLoop.title}
            </span>
            <h3>Hypothesis → Action → Measure → Learn → Improve</h3>
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

          {/* 6 Principles That Guide Our Work */}
          <div style={{ marginTop: 32 }}>
            <div className="mp-section-header" style={{ marginBottom: 20 }}>
              <span className="hp-mono-pill hp-mono-pill--yellow">
                03 · PRINCIPLES THAT GUIDE OUR WORK
              </span>
              <h2 className="mp-h2">The 6 AxonVortex Operating Principles</h2>
            </div>

            <div className="mp-steps-grid">
              {APPROACH_PAGE_DATA.principles.map((p, idx) => (
                <div key={p.title} data-mp-reveal className="mp-step-card">
                  <span
                    className="mp-step-num"
                    style={{ backgroundColor: '#a3e635' }}
                  >
                    PRINCIPLE 0{idx + 1}
                  </span>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SubpageConcentricCta
        sectionId="approach-cta"
        headlineTop="Start with the problem,"
        highlightText="not the tool."
        bodyText="Request a Digital Growth Audit or tell us what your business needs to move forward."
        primaryLabel="Start With a Growth Audit"
        onPrimaryClick={() => onNavigate('/growth-audit')}
        secondaryLabel="Contact AxonVortex"
        onSecondaryClick={() => onNavigate('/contact')}
      />
    </div>
  );
}

/**
 * 5. ABOUT AXONVORTEX PAGE (/about)
 * Exact Document Copy + What We're Building + 4 Beliefs + Do/Don't Believe In + Full 10-Question FAQ
 */
export function AboutPage({ onNavigate, onOpenAudit }) {
  const pageRef = useRef(null);
  const [openFaqIdx, setOpenFaqIdx] = useState(0);
  useSubpageScrollEffects(pageRef, 'about-page');
  useRouteMotion(pageRef, '/about');
  useSectionMotionEngine(pageRef, '/about');

  return (
    <div ref={pageRef} className="mp-page">
      <SubpageParallaxHero
        sectionId="about-hero"
        crumbs={[{ label: 'About AxonVortex' }]}
        pillText="ABOUT AXONVORTEX · BUILDING FROM ZERO"
        title={ABOUT_PAGE_DATA.headline}
        subheadline={ABOUT_PAGE_DATA.intro}
        description={ABOUT_PAGE_DATA.whatWereBuilding}
        stickerVariants={[3, 1, 0, 2]}
        onNavigate={onNavigate}
      >
        <div className="mp-hero-actions">
          <button
            type="button"
            className="hp-btn-3d hp-btn-3d--red"
            onClick={() => onNavigate('/growth-audit')}
          >
            <span className="hp-btn-3d-inner">
              Request Digital Growth Audit
            </span>
          </button>
          <button
            type="button"
            className="hp-btn-3d hp-btn-3d--yellow"
            onClick={() => onNavigate('/insights')}
          >
            <span className="hp-btn-3d-inner">Read Public Experiments</span>
          </button>
        </div>
      </SubpageParallaxHero>

      <section
        id="about-why-chapters"
        data-section-id="about-why-chapters"
        className="mp-section mp-section--dark"
      >
        <div className="mp-container">
          <div className="mp-two-col">
            <div data-mp-col-speed="0.5" className="mp-problem-panel">
              <span className="hp-mono-pill hp-mono-pill--yellow">
                WHY AXONVORTEX EXISTS
              </span>
              <h2 className="mp-h2 mp-h2--white">
                Having More Tools Doesn&apos;t Automatically Make a Business
                Better.
              </h2>
              <p className="mp-body-light">{ABOUT_PAGE_DATA.whyExists}</p>
            </div>

            <div data-mp-col-speed="-0.5" className="mp-bestfor-panel">
              <span className="hp-mono-pill hp-mono-pill--yellow">
                BUILDING IN PUBLIC
              </span>
              <h4 style={{ marginTop: 10 }}>
                Why We Are Building From Zero in the Open
              </h4>
              <p style={{ color: '#0b0f17', lineHeight: 1.6 }}>
                {ABOUT_PAGE_DATA.buildingInPublic}
              </p>
              <hr className="hp-dashed-divider" style={{ margin: '16px 0' }} />
              <span className="hp-mono-pill hp-mono-pill--yellow">
                WHAT WE&apos;RE BUILDING
              </span>
              <p style={{ color: '#0b0f17', lineHeight: 1.6, marginTop: 10 }}>
                {ABOUT_PAGE_DATA.whatWereBuilding}
              </p>
            </div>
          </div>
          <div
            data-rx-stagger-group
            className="mp-steps-grid"
            style={{ marginTop: 28 }}
          >
            {[
              {
                chapter: 'CHAPTER 01 · ORIGIN',
                title: 'Starting From Zero With Clarity',
                desc: 'Built to solve the fragmentation between disconnected marketing, websites, AI tools, and business operations.'
              },
              {
                chapter: 'CHAPTER 02 · PHILOSOPHY',
                title: 'Problem First, Tool Second',
                desc: 'Technology only creates leverage when mapped directly to a verified business bottleneck.'
              },
              {
                chapter: 'CHAPTER 03 · BUILDING IN PUBLIC',
                title: 'Documenting Real Systems',
                desc: 'Sharing honest frameworks, architectures, and lessons instead of inflated agency claims.'
              },
              {
                chapter: 'CHAPTER 04 · HUMAN + AI',
                title: 'Judgment Paired With Speed',
                desc: 'Human strategy and creative direction amplified by intelligent automation and AI agents.'
              },
              {
                chapter: 'CHAPTER 05 · FUTURE DIRECTION',
                title: 'Connected Growth Infrastructure',
                desc: 'Helping ambitious businesses unite demand, conversion, retention, and operations under one roof.'
              }
            ].map((ch) => (
              <div
                key={ch.chapter}
                data-rx-stagger-item
                className="mp-step-card"
                style={{ backgroundColor: '#f8f6f0', color: '#0b0f17' }}
              >
                <span
                  className="mp-step-num"
                  style={{ backgroundColor: '#f59e0b', color: '#0b0f17' }}
                >
                  {ch.chapter}
                </span>
                <h4>{ch.title}</h4>
                <p>{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="about-beliefs-contrast"
        data-section-id="about-beliefs-contrast"
        className="mp-section mp-section--white"
      >
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              WHAT WE BELIEVE
            </span>
            <h2 className="mp-h2">4 Foundational Beliefs</h2>
          </div>

          <div className="mp-steps-grid">
            {ABOUT_PAGE_DATA.beliefs.map((b) => (
              <div key={b.index} data-mp-reveal className="mp-step-card">
                <span
                  className="mp-step-num"
                  style={{
                    backgroundColor: b.color,
                    color:
                      b.color === '#8b5cf6' || b.color === '#ff4d2d'
                        ? '#fff'
                        : '#000'
                  }}
                >
                  BELIEF {b.index}
                </span>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>

          {/* What We Believe In vs What We Don't Believe In */}
          <div className="mp-two-col" style={{ marginTop: 40 }}>
            <div
              data-mp-reveal
              className="mp-contrast-card mp-contrast-card--no"
            >
              <h3>What We Don&apos;t Believe In</h3>
              <ul>
                {ABOUT_PAGE_DATA.dontBelieveIn.map((item) => (
                  <li key={item}>
                    <span className="mp-x-badge">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              data-mp-reveal
              className="mp-contrast-card mp-contrast-card--yes"
            >
              <h3>What We Do Believe In</h3>
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
          </div>
        </div>
      </section>

      {/* Complete 10-Question FAQ Section from Document */}
      <section
        id="about-faq-accordion"
        data-section-id="about-faq-accordion"
        className="mp-section mp-section--cream"
      >
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              FREQUENTLY ASKED QUESTIONS (10/10)
            </span>
            <h2 className="mp-h2">
              Honest Answers About AxonVortex & How We Work
            </h2>
          </div>

          <div className="hp-faq-list">
            {FAQ_LIST.map((item, i) => (
              <div
                key={item.q}
                className={`hp-faq-item ${openFaqIdx === i ? 'is-open' : ''}`}
              >
                <button
                  type="button"
                  className="hp-faq-question"
                  onClick={() => setOpenFaqIdx(openFaqIdx === i ? -1 : i)}
                >
                  <span>
                    0{i + 1}. {item.q}
                  </span>
                  <ChevronDown size={20} />
                </button>
                {openFaqIdx === i && (
                  <div className="hp-faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <SubpageConcentricCta
        sectionId="about-cta"
        headlineTop="Build with us"
        highlightText="from the ground up."
        bodyText="Tell us what your business does and where growth is getting stuck. We will help map out the most practical next step."
        primaryLabel="Talk to Us"
        onPrimaryClick={() => onNavigate('/contact')}
        secondaryLabel="Request a Growth Audit"
        onSecondaryClick={() => onNavigate('/growth-audit')}
      />
    </div>
  );
}

/**
 * 6. DIGITAL GROWTH AUDIT PAGE (/growth-audit)
 * Exact Document Copy: 6 What We Look At + 4 What You Get + Discover->Diagnose->Prioritize->Recommend + 8 Who Should Request + 5 Lead Magnets
 */
export function GrowthAuditPage({ onNavigate }) {
  const pageRef = useRef(null);
  const [selectedAudit, setSelectedAudit] = useState(DIAGNOSTIC_AUDITS[0]);
  const [checkedItems, setCheckedItems] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [auditError, setAuditError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    bottleneck: ''
  });

  useSubpageScrollEffects(pageRef, 'growth-audit-page');
  useRouteMotion(pageRef, '/growth-audit');
  useSectionMotionEngine(pageRef, '/growth-audit');

  const toggleCheck = (key) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setAuditError(
        'Your name is missing. Please enter your name above so we know who to prepare the audit for.'
      );
      return;
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      setAuditError(
        'That email address looks incomplete. Please enter a valid work email (such as name@company.com) so we can send your audit summary.'
      );
      return;
    }
    setAuditError('');
    setSubmitted(true);
  };

  return (
    <div ref={pageRef} className="mp-page">
      <SubpageParallaxHero
        sectionId="audit-hero"
        crumbs={[{ label: 'Digital Growth Audit' }]}
        pillText="DIGITAL GROWTH AUDIT · DISCOVER → DIAGNOSE → PRIORITIZE → RECOMMEND"
        title={GROWTH_AUDIT_DATA.headline}
        subheadline={GROWTH_AUDIT_DATA.intro}
        stickerVariants={[1, 3, 0, 2]}
        onNavigate={onNavigate}
      />

      {/* 6 Areas What We Look At */}
      <section
        id="audit-six-areas"
        data-section-id="audit-six-areas"
        className="mp-section mp-section--white"
      >
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              01 · WHAT WE LOOK AT
            </span>
            <h2 className="mp-h2">6 Core Areas Evaluated in Your Audit</h2>
          </div>

          <div className="mp-steps-grid">
            {GROWTH_AUDIT_DATA.whatWeLookAt.map((item) => (
              <div key={item.index} data-mp-reveal className="mp-step-card">
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
        </div>
      </section>

      {/* What You Get (4 Outcomes) + Audit Framework + Who Should Request */}
      <section
        id="audit-outcomes-framework"
        data-section-id="audit-outcomes-framework"
        className="mp-section mp-section--dark"
      >
        <div className="mp-container">
          <div className="mp-two-col">
            <div data-mp-col-speed="0.5" className="mp-problem-panel">
              <span className="hp-mono-pill hp-mono-pill--yellow">
                02 · WHAT YOU GET
              </span>
              <h2 className="mp-h2 mp-h2--white">
                4 Clear Diagnostic Outcomes
              </h2>
              <div className="mp-outcomes-grid">
                {GROWTH_AUDIT_DATA.whatYouGet.map((out) => (
                  <div key={out.step} className="mp-outcome-card">
                    <span className="mp-step-num" style={{ backgroundColor: '#f59e0b' }}>
                      {out.step}
                    </span>
                    <h4>{out.title}</h4>
                    <p>{out.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div data-mp-col-speed="-0.5" className="mp-bestfor-panel">
              <h4>Who Should Request an Audit?</h4>
              <p style={{ marginBottom: 14, color: '#334155' }}>
                Ideal for businesses that:
              </p>
              <ul>
                {GROWTH_AUDIT_DATA.whoShouldRequest.map((item) => (
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

          <ScrollChainBanner
            label="THE AXONVORTEX AUDIT FRAMEWORK"
            nodes={GROWTH_AUDIT_DATA.framework}
            dark
          />
        </div>
      </section>

      {/* 5 Lead Magnets / Entry Points + Interactive Checklist Workstation */}
      <section
        id="audit-workstation-form"
        data-section-id="audit-workstation-form"
        className="mp-section mp-section--cream"
      >
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              03 · 5 DIAGNOSTIC ENTRY POINTS & SELF-CHECKLISTS
            </span>
            <h2 className="mp-h2">
              Choose Your Assessment & Request Your Audit
            </h2>
          </div>

          <div data-no-parallax className="mp-audit-workstation">
            <div className="hp-audit-split">
              <div className="hp-audit-selector-col">
                <span className="hp-box-label">
                  1. SELECT ONE OF THE 5 DIAGNOSTIC ASSESSMENTS
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
                          ? {
                              backgroundColor: audit.color,
                              color:
                                audit.color === '#2563eb' ||
                                audit.color === '#8b5cf6' ||
                                audit.color === '#ff4d2d'
                                  ? '#fff'
                                  : '#000'
                            }
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
                    INTERACTIVE SELF-CHECKLIST FOR{' '}
                    {selectedAudit.title.toUpperCase()} (CLICK TO FLAG GAPS):
                  </span>
                  <p style={{ fontSize: '0.9rem', marginBottom: 10 }}>
                    {selectedAudit.description}
                  </p>
                  <ul>
                    {selectedAudit.checkpoints.map((cp) => {
                      const key = `${selectedAudit.id}-${cp}`;
                      const isFlagged = !!checkedItems[key];
                      return (
                        <li
                          key={cp}
                          onClick={() => toggleCheck(key)}
                          style={{
                            cursor: 'pointer',
                            padding: '6px 10px',
                            borderRadius: 8,
                            background: isFlagged ? '#fef0c7' : 'transparent',
                            border: isFlagged
                              ? '1.5px solid #0b0f17'
                              : '1.5px solid transparent'
                          }}
                        >
                          <Sparkles size={14} />
                          <span>{cp}</span>
                          {isFlagged && (
                            <strong style={{ marginLeft: 'auto', fontSize: '0.72rem' }}>
                              NEEDS REVIEW
                            </strong>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              <div className="hp-audit-form-col">
                {submitted ? (
                  <div className="hp-audit-success">
                    <div className="hp-success-badge">REQUEST RECEIVED ✓</div>
                    <h4>Your {selectedAudit.title} Is Queued</h4>
                    <p>
                      We will review{' '}
                      <strong>
                        {formData.website || 'your digital presence'}
                      </strong>{' '}
                      across Discover → Diagnose → Prioritize → Recommend and
                      send your roadmap to <strong>{formData.email}</strong>.
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
                  <form className="hp-audit-form" noValidate onSubmit={handleSubmit}>
                    <span className="hp-box-label">
                      2. REQUEST YOUR {selectedAudit.title.toUpperCase()}
                    </span>
                    {auditError && (
                      <p
                        role="alert"
                        style={{
                          margin: '0 0 12px',
                          padding: '10px 12px',
                          borderRadius: 8,
                          border: '2px solid #0b0f17',
                          backgroundColor: '#ffdfd6',
                          color: '#0b0f17',
                          fontSize: '0.88rem',
                          fontWeight: 600
                        }}
                      >
                        {auditError}
                      </p>
                    )}
                    <label className="hp-field">
                      <span>Name *</span>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => {
                          setAuditError('');
                          setFormData({ ...formData, name: e.target.value });
                        }}
                      />
                    </label>
                    <label className="hp-field">
                      <span>Email *</span>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setAuditError('');
                          setFormData({ ...formData, email: e.target.value });
                        }}
                      />
                    </label>
                    <label className="hp-field">
                      <span>Website (if available)</span>
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
                      <span>What are you looking to improve?</span>
                      <select
                        value={formData.bottleneck}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            bottleneck: e.target.value
                          })
                        }
                      >
                        <option value="">Select primary area...</option>
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
                        {selectedAudit.cta || 'Request My Growth Audit'}
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
 * Exact Document Copy: 5 Categories + 7 Content Types + Content Loop + 6 Journal Entries
 */
export function InsightsPage({ onNavigate }) {
  const pageRef = useRef(null);
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [expandedId, setExpandedId] = useState('entry-01');

  useSubpageScrollEffects(pageRef, `insights-${selectedTopic}`);
  useRouteMotion(pageRef, '/insights');
  useSectionMotionEngine(pageRef, '/insights');

  const entries =
    selectedTopic === 'All'
      ? INSIGHTS_DATA.journalEntries
      : INSIGHTS_DATA.journalEntries.filter((e) => e.topic === selectedTopic);

  return (
    <div ref={pageRef} className="mp-page">
      <SubpageParallaxHero
        sectionId="insights-hero"
        crumbs={[{ label: 'Insights & Public Experiments' }]}
        pillText="INSIGHTS · QUESTION → RESEARCH → INSIGHT → ACTION → SOLUTION"
        title={INSIGHTS_DATA.headline}
        subheadline={INSIGHTS_DATA.intro}
        stickerVariants={[2, 1, 0, 3]}
        onNavigate={onNavigate}
      >
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
      </SubpageParallaxHero>

      {/* 5 Core Content Categories + 7 Content Types + Scroll-Scrubbed Content Loop */}
      <section
        id="insights-categories-architecture"
        data-section-id="insights-categories-architecture"
        className="mp-section mp-section--dark"
      >
        <div className="mp-container">
          <div className="mp-section-header">
            <span className="hp-mono-pill hp-mono-pill--yellow">
              CONTENT ARCHITECTURE · 5 CATEGORIES & 7 CONTENT FORMATS
            </span>
            <h2 className="mp-h2 mp-h2--white">
              Practical Thinking Around Marketing, AI, Automation & Growth
            </h2>
          </div>

          <div className="mp-steps-grid">
            {INSIGHTS_DATA.categories
              .filter((c) => c.id !== 'All')
              .map((cat, idx) => (
                <div
                  key={cat.id}
                  data-mp-reveal
                  className="mp-step-card"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedTopic(cat.id)}
                >
                  <span
                    className="mp-step-num"
                    style={{ backgroundColor: '#f59e0b' }}
                  >
                    CATEGORY 0{idx + 1}
                  </span>
                  <h4>{cat.title}</h4>
                  <p>{cat.topics}</p>
                </div>
              ))}
          </div>

          {/* 7 Content Types from Document */}
          <div className="mp-content-types-strip">
            {INSIGHTS_DATA.contentTypes.map((ct) => (
              <div key={ct.name} className="mp-content-type-pill">
                <strong>{ct.name}</strong>
                <span>{ct.desc}</span>
              </div>
            ))}
          </div>

          <ScrollChainBanner
            label="THE AXONVORTEX CONTENT LOOP"
            nodes={INSIGHTS_DATA.contentLoop}
            dark
          />
        </div>
      </section>

      {/* Journal Entries */}
      <section
        id="insights-journal-feed"
        data-section-id="insights-journal-feed"
        className="mp-section mp-section--white"
      >
        <div className="mp-container">
          {entries[0] && (
            <div
              data-rx-parallax-y="18"
              className="rx-featured-insight-banner"
            >
              <div className="rx-featured-insight-top">
                <span className="hp-mono-pill hp-mono-pill--yellow">
                  FEATURED EDITORIAL SPOTLIGHT · {entries[0].index}
                </span>
                <span className="mp-journal-time">{entries[0].readTime}</span>
              </div>
              <h3>{entries[0].title}</h3>
              <p>{entries[0].excerpt}</p>
            </div>
          )}

          <div className="mp-journal-list">
            {entries.map((entry) => {
              const isOpen = expandedId === entry.id;
              return (
                <div
                  key={entry.id}
                  data-mp-reveal
                  className="mp-journal-card"
                >
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
                        KEY TAKEAWAYS & PRACTICAL APPLICATION:
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
                      onClick={() => setExpandedId(isOpen ? null : entry.id)}
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

      <SubpageConcentricCta
        sectionId="insights-cta"
        headlineTop="Turn useful ideas into"
        highlightText="connected action."
        bodyText="Every insight connects back to a practical growth system: Question → Research → Insight → Action → Solution."
        primaryLabel="Request Digital Growth Audit"
        onPrimaryClick={() => onNavigate('/growth-audit')}
        secondaryLabel="Explore All Solutions"
        onSecondaryClick={() => onNavigate('/solutions')}
      />
    </div>
  );
}

/**
 * 8. CONTACT PAGE (/contact)
 * Exact Document Copy + Exact Form Fields (Name, Business Name, Email, Phone, Website, What are you looking to improve?, What are you trying to achieve?, What is currently getting in the way?)
 */
export function ContactPage({ onNavigate }) {
  const pageRef = useRef(null);
  const [selectedAreas, setSelectedAreas] = useState(['Not sure yet']);
  const [sent, setSent] = useState(false);
  const [contactError, setContactError] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    goal: '',
    bottleneck: ''
  });

  useSubpageScrollEffects(pageRef, 'contact-page');
  useRouteMotion(pageRef, '/contact');
  useSectionMotionEngine(pageRef, '/contact');

  const toggleArea = (area) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.businessName.trim()) {
      setContactError(
        'Your name or business name is missing. Please fill in both fields so we know who we are speaking with.'
      );
      return;
    }
    if (
      !contactForm.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email.trim())
    ) {
      setContactError(
        'That email address looks incomplete. Please enter a valid email address (such as you@company.com) so we can reply.'
      );
      return;
    }
    if (!contactForm.goal.trim()) {
      setContactError(
        'The project goal field is empty. Please share a brief note on what you want to achieve so we can prepare a relevant response.'
      );
      return;
    }
    setContactError('');
    setSent(true);
  };

  return (
    <div ref={pageRef} className="mp-page">
      <SubpageParallaxHero
        sectionId="contact-hero"
        crumbs={[{ label: 'Contact AxonVortex' }]}
        pillText="CONTACT · START WITH A CONVERSATION"
        title="Let’s Talk About Your Next Stage of Growth."
        subheadline="You don’t need a finished technical brief before reaching out. Tell us where your business stands today, what you want to achieve next, and what is getting in the way."
        description="Whether you have a specific website, campaign, or AI project in mind or simply want to diagnose where leads are dropping off, start by sharing a few details below."
        stickerVariants={[0, 3, 2, 1]}
        onNavigate={onNavigate}
      />

      <section
        id="contact-form-section"
        data-section-id="contact-form-section"
        data-no-parallax
        className="mp-section mp-section--white"
      >
        <div className="mp-container">
          <div className="mp-two-col">
            <div className="mp-contact-form-card">
              {sent ? (
                <div className="hp-audit-success">
                  <div className="hp-success-badge">MESSAGE RECEIVED ✓</div>
                  <h4>Thank You for Reaching Out to AxonVortex</h4>
                  <p>
                    We have received your message for{' '}
                    <strong>{contactForm.businessName}</strong> and will review
                    your goals and current bottlenecks before replying to{' '}
                    <strong>{contactForm.email}</strong>.
                  </p>
                  <button
                    type="button"
                    className="hp-btn-3d hp-btn-3d--yellow"
                    onClick={() => setSent(false)}
                  >
                    <span className="hp-btn-3d-inner">Send Another Message</span>
                  </button>
                </div>
              ) : (
                <form
                  className="hp-audit-form"
                  noValidate
                  onSubmit={handleContactSubmit}
                >
                  <h3>What are you looking to improve?</h3>
                  {contactError && (
                    <p
                      role="alert"
                      style={{
                        margin: '0 0 12px',
                        padding: '10px 12px',
                        borderRadius: 8,
                        border: '2px solid #0b0f17',
                        backgroundColor: '#ffdfd6',
                        color: '#0b0f17',
                        fontSize: '0.88rem',
                        fontWeight: 600
                      }}
                    >
                      {contactError}
                    </p>
                  )}
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
                      <span>Name *</span>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={contactForm.name}
                        onChange={(e) => {
                          setContactError('');
                          setContactForm({ ...contactForm, name: e.target.value });
                        }}
                      />
                    </label>
                    <label className="hp-field">
                      <span>Business Name *</span>
                      <input
                        type="text"
                        required
                        placeholder="Your Business Name"
                        value={contactForm.businessName}
                        onChange={(e) => {
                          setContactError('');
                          setContactForm({
                            ...contactForm,
                            businessName: e.target.value
                          });
                        }}
                      />
                    </label>
                  </div>

                  <div className="mp-form-grid">
                    <label className="hp-field">
                      <span>Email *</span>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={contactForm.email}
                        onChange={(e) => {
                          setContactError('');
                          setContactForm({ ...contactForm, email: e.target.value });
                        }}
                      />
                    </label>
                    <label className="hp-field">
                      <span>Phone</span>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={contactForm.phone}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, phone: e.target.value })
                        }
                      />
                    </label>
                  </div>

                  <label className="hp-field">
                    <span>Website (if available)</span>
                    <input
                      type="text"
                      placeholder="https://yourbusiness.com"
                      value={contactForm.website}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, website: e.target.value })
                      }
                    />
                  </label>

                  <label className="hp-field">
                    <span>What are you trying to achieve? *</span>
                    <textarea
                      rows={3}
                      required
                      className="mp-textarea"
                      placeholder="Describe the business goals or growth outcomes you want to reach..."
                      value={contactForm.goal}
                      onChange={(e) => {
                        setContactError('');
                        setContactForm({ ...contactForm, goal: e.target.value });
                      }}
                    />
                  </label>

                  <label className="hp-field">
                    <span>What is currently getting in the way?</span>
                    <textarea
                      rows={3}
                      className="mp-textarea"
                      placeholder="Tell us about current bottlenecks, marketing challenges, website issues, or manual processes..."
                      value={contactForm.bottleneck}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          bottleneck: e.target.value
                        })
                      }
                    />
                  </label>

                  <div className="mp-contact-submit-row">
                    <button
                      type="submit"
                      className="hp-btn-3d hp-btn-3d--red hp-btn-3d--full"
                    >
                      <span className="hp-btn-3d-inner">Start the Conversation</span>
                    </button>
                    <button
                      type="button"
                      className="hp-btn-3d hp-btn-3d--yellow hp-btn-3d--full"
                      onClick={() => onNavigate('/growth-audit')}
                    >
                      <span className="hp-btn-3d-inner">
                        Get a Digital Growth Audit
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            <div className="mp-contact-info-col">
              <div className="mp-info-card">
                <span className="hp-mono-pill hp-mono-pill--yellow">
                  NOT READY TO TALK?
                </span>
                <h4>Explore AxonVortex at Your Own Pace</h4>
                <div className="mp-email-list" style={{ gap: '12px' }}>
                  <button
                    type="button"
                    className="hp-service-chip"
                    style={{ width: '100%', justifyContent: 'space-between' }}
                    onClick={() => onNavigate('/solutions')}
                  >
                    <span><strong>Explore Solutions:</strong> See how our 5 core pillars connect.</span>
                    <ArrowUpRight size={15} />
                  </button>
                  <button
                    type="button"
                    className="hp-service-chip"
                    style={{ width: '100%', justifyContent: 'space-between' }}
                    onClick={() => onNavigate('/insights')}
                  >
                    <span><strong>Read Insights:</strong> Practical notes on marketing, AI, and workflows.</span>
                    <ArrowUpRight size={15} />
                  </button>
                  <button
                    type="button"
                    className="hp-service-chip"
                    style={{ width: '100%', justifyContent: 'space-between' }}
                    onClick={() => onNavigate('/growth-audit')}
                  >
                    <span><strong>Request a Growth Audit:</strong> Spot the gaps in your current digital setup.</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>

              <div className="mp-info-card">
                <span className="hp-mono-pill hp-mono-pill--yellow">
                  DIRECT CHANNELS
                </span>
                <h4>Reach AxonVortex Directly</h4>
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
                    <small>PARTNERSHIPS</small>
                    <strong>{BRAND.partnershipsEmail}</strong>
                  </div>
                  <div>
                    <small>CAREERS</small>
                    <strong>{BRAND.careersEmail}</strong>
                  </div>
                </div>
              </div>

              <div
                className="mp-info-card"
                style={{ backgroundColor: '#091326', color: '#fff' }}
              >
                <span className="hp-mono-pill hp-mono-pill--yellow">
                  NOT SURE WHERE TO START?
                </span>
                <h4 style={{ color: '#fff' }}>
                  Get a Digital Growth Audit
                </h4>
                <p style={{ color: '#f8f6f0', fontSize: '0.95rem' }}>
                  We evaluate your Digital Presence, Social Media, Marketing,
                  Lead Generation, AI & Automation, and Digital Systems to show
                  you where you are and what to prioritize first.
                </p>
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--yellow hp-btn-3d--full"
                  onClick={() => onNavigate('/growth-audit')}
                >
                  <span className="hp-btn-3d-inner">
                    Get a Digital Growth Audit
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
