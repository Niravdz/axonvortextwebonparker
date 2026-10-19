import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  Check,
  Sparkles,
  ChevronDown,
  Menu,
  X,
  Zap,
  Bot,
  Globe,
  TrendingUp,
  Layers
} from 'lucide-react';

import {
  BRAND,
  HOME_PAIN_POINTS,
  PROBLEM_TICKER_ITEMS,
  FOLDER_STEPS,
  BRAIN_STATES,
  WHY_AXONVORTEX_PRINCIPLES,
  WHO_WE_HELP,
  HOW_WE_WORK_PROCESS,
  CORE_SOLUTION_SYSTEMS,
  CORE_SOLUTIONS,
  PROBLEM_SOLVER_CARDS,
  JOURNAL_EXPERIMENTS,
  SERVICES_CATALOG,
  DIAGNOSTIC_AUDITS,
  FAQ_LIST
} from './data/agencyData';

import AxonScrollSceneCanvas from './components/AxonScrollSceneCanvas';
import TypewriterHeading from './components/TypewriterHeading';
import HandDrawnArrows from './components/HandDrawnArrows';
import {
  AxonProblemBadge,
  AxonFolderLiveSimulator,
  AxonMazeComparisonSvg,
  AxonMarkerOrbSvg,
  AxonNeuralCoreSvg,
  AxonCtaEmblemSvg,
  AxonFloatingStickerSvg
} from './components/AxonCustomVisuals';
import {
  ServiceDetailModal,
  GrowthAuditModal
} from './components/InteractiveModals';
import {
  SolutionsOverviewPage,
  SolutionPillarPage,
  ServiceDetailPage,
  ApproachPage,
  AboutPage,
  GrowthAuditPage,
  InsightsPage,
  ContactPage
} from './pages/MultipageViews';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenisRef = useRef(null);
  const [currentPath, setCurrentPath] = useState(
    () => window.location.pathname || '/'
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false);

  // Hero scroll state
  const heroTrackRef = useRef(null);
  const [heroStage, setHeroStage] = useState(0);
  const [showScrollHint, setShowScrollHint] = useState(true);

  // Problem scroll sequence ref
  const problemSectionRef = useRef(null);
  const problemSeqTrackRef = useRef(null);
  const [tickerIndex, setTickerIndex] = useState(0);

  // How It Works Intro ref & stage
  const hiwIntroTrackRef = useRef(null);
  const [hiwIntroStage, setHiwIntroStage] = useState(0);

  // Folder Steps refs
  const folderContainerRef = useRef(null);
  const stepRefs = [useRef(null), useRef(null), useRef(null)];
  const [activeFolderStep, setActiveFolderStep] = useState(0);

  // Notification section ref
  const notificationTrackRef = useRef(null);

  // Maze section refs & state
  const mazeTrackRef = useRef(null);
  const mazeSeqTrackRef = useRef(null);
  const [mazeTextStage, setMazeTextStage] = useState(0);
  const [mazeMode, setMazeMode] = useState('old'); // 'old' | 'new' | 'finish'

  // Brain section ref & state
  const brainTrackRef = useRef(null);
  const [brainStageIdx, setBrainStageIdx] = useState(0);
  const [brainCircleScale, setBrainCircleScale] = useState(0.72);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Service catalog filter
  const [selectedCategory, setSelectedCategory] = useState('All');

  // FAQ state
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  // Modals state
  const [activeServiceSlug, setActiveServiceSlug] = useState(null);
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [auditInitialTopic, setAuditInitialTopic] = useState('');

  const isHomePage = currentPath === '/' || currentPath === '';

  const openAuditWithTopic = (topic = '') => {
    setAuditInitialTopic(topic);
    setAuditModalOpen(true);
  };

  // Multi-page navigation helper with smooth scroll reset & ScrollTrigger refresh
  const navigateTo = (path, hashSelector = null) => {
    setMobileMenuOpen(false);
    setSolutionsMenuOpen(false);
    const cleanPath = path || '/';
    if (cleanPath !== currentPath) {
      window.history.pushState({}, '', cleanPath);
      setCurrentPath(cleanPath);
    }

    if (hashSelector && cleanPath === '/') {
      setTimeout(() => {
        const el = document.querySelector(hashSelector);
        if (el) {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(el, { offset: -20, duration: 1.1 });
          } else {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 90);
    } else {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 80);
    }
  };

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname || '/');
      setTimeout(() => ScrollTrigger.refresh(), 80);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // Initialize Lenis smooth scroll + GSAP ScrollTrigger sync
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.12,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const rafCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(rafCallback);
      lenis.destroy();
    };
  }, []);

  // Rotate Problem Section slot-machine ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((i) => (i + 1) % PROBLEM_TICKER_ITEMS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // Mouse parallax handler for Neural Core Tags & floating badges
  useEffect(() => {
    const handleMouseMove = (e) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouseOffset({ x: nx, y: ny });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Setup GSAP ScrollTriggers whenever on Home Page
  useEffect(() => {
    if (!isHomePage) return undefined;

    const ctx = gsap.context(() => {
      // 1. Hero scroll stage & scroll hint
      if (heroTrackRef.current) {
        ScrollTrigger.create({
          trigger: heroTrackRef.current,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            setShowScrollHint(self.progress < 0.14);
            setHeroStage(self.progress > 0.42 ? 1 : 0);
          }
        });
      }

      // 2. Problem section floating architectural badges parallax (bounded inside side columns so they never touch text)
      gsap.utils.toArray('[data-parallax-sticker]').forEach((el) => {
        const speed = parseFloat(
          el.getAttribute('data-parallax-sticker') || '1'
        );
        const rot = parseFloat(el.getAttribute('data-parallax-rot') || '8');
        gsap.fromTo(
          el,
          { y: 38 * speed, rotate: -rot },
          {
            y: -38 * speed,
            rotate: rot,
            ease: 'none',
            scrollTrigger: {
              trigger: problemSectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.4
            }
          }
        );
      });

      // 3. How It Works Intro 2-stage typewriter + hand-drawn arrows trigger
      if (hiwIntroTrackRef.current) {
        ScrollTrigger.create({
          trigger: hiwIntroTrackRef.current,
          start: 'top 60%',
          end: 'bottom bottom',
          onUpdate: (self) => {
            setHiwIntroStage(self.progress > 0.36 ? 1 : 0);
          }
        });
      }

      // 4. Folder Steps active tab tracking
      stepRefs.forEach((ref, idx) => {
        if (!ref.current) return;
        ScrollTrigger.create({
          trigger: ref.current,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActiveFolderStep(idx),
          onEnterBack: () => setActiveFolderStep(idx)
        });
      });

      // 5. Maze Section scroll-driven toggle (Old way -> New way -> Finish)
      if (mazeTrackRef.current) {
        ScrollTrigger.create({
          trigger: mazeTrackRef.current,
          start: 'top 55%',
          end: 'bottom bottom',
          onUpdate: (self) => {
            setMazeTextStage(self.progress > 0.25 ? 1 : 0);
            if (self.progress < 0.3) {
              setMazeMode('old');
            } else if (self.progress < 0.62) {
              setMazeMode('new');
            } else {
              setMazeMode('finish');
            }
          }
        });
      }

      // 6. 4-Stage Architecture Core color & tag morph (01 -> 02 -> 03 -> 04)
      if (brainTrackRef.current) {
        ScrollTrigger.create({
          trigger: brainTrackRef.current,
          start: 'top top',
          end: 'bottom bottom',
          onUpdate: (self) => {
            const p = self.progress;
            const scaleVal = 0.72 + Math.min(1, p * 1.8) * 0.68;
            setBrainCircleScale(scaleVal);

            if (p < 0.25) setBrainStageIdx(0);
            else if (p < 0.52) setBrainStageIdx(1);
            else if (p < 0.78) setBrainStageIdx(2);
            else setBrainStageIdx(3);
          }
        });
      }
    });

    return () => ctx.revert();
  }, [isHomePage]);

  const scrollToSection = (selector) => {
    setMobileMenuOpen(false);
    setSolutionsMenuOpen(false);
    if (!isHomePage) {
      navigateTo('/', selector);
      return;
    }
    const el = document.querySelector(selector);
    if (!el) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -20, duration: 1.15 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeBrain = BRAIN_STATES[brainStageIdx] || BRAIN_STATES[0];

  const categories = [
    'All',
    ...new Set(SERVICES_CATALOG.map((s) => s.category))
  ];
  const filteredServices =
    selectedCategory === 'All'
      ? SERVICES_CATALOG
      : SERVICES_CATALOG.filter((s) => s.category === selectedCategory);

  // Render active subpage if not on '/'
  const renderSubpage = () => {
    if (currentPath === '/solutions') {
      return (
        <SolutionsOverviewPage
          onNavigate={navigateTo}
          onOpenAudit={openAuditWithTopic}
        />
      );
    }
    if (currentPath.startsWith('/solutions/')) {
      const pillarId = currentPath.replace('/solutions/', '');
      return (
        <SolutionPillarPage
          pillarId={pillarId}
          onNavigate={navigateTo}
          onOpenAudit={openAuditWithTopic}
        />
      );
    }
    if (currentPath.startsWith('/services/')) {
      const slug = currentPath.replace('/services/', '');
      return (
        <ServiceDetailPage
          slug={slug}
          onNavigate={navigateTo}
          onOpenAudit={openAuditWithTopic}
        />
      );
    }
    if (currentPath === '/approach') {
      return (
        <ApproachPage
          onNavigate={navigateTo}
          onOpenAudit={openAuditWithTopic}
        />
      );
    }
    if (currentPath === '/about') {
      return (
        <AboutPage onNavigate={navigateTo} onOpenAudit={openAuditWithTopic} />
      );
    }
    if (currentPath === '/growth-audit') {
      return <GrowthAuditPage onNavigate={navigateTo} />;
    }
    if (currentPath === '/insights') {
      return <InsightsPage onNavigate={navigateTo} />;
    }
    if (currentPath === '/contact') {
      return <ContactPage onNavigate={navigateTo} />;
    }
    return (
      <SolutionsOverviewPage
        onNavigate={navigateTo}
        onOpenAudit={openAuditWithTopic}
      />
    );
  };

  return (
    <div className="hp-page-root">
      {/* ==================== FLOATING MULTIPAGE NAVBAR ==================== */}
      <header className="hp-navbar-host">
        <nav className="hp-navbar">
          <a
            href="/"
            className="hp-brand-logo"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('/');
            }}
          >
            <span className="hp-brand-mark">AV</span>
            <span className="hp-brand-name">AXONVORTEX</span>
          </a>

          <div className="hp-nav-links">
            <button
              type="button"
              className={`hp-nav-link ${isHomePage ? 'is-active' : ''}`}
              onClick={() => navigateTo('/')}
            >
              Home
            </button>

            <div
              className="hp-nav-dropdown-wrap"
              onMouseEnter={() => setSolutionsMenuOpen(true)}
              onMouseLeave={() => setSolutionsMenuOpen(false)}
            >
              <button
                type="button"
                className={`hp-nav-link hp-nav-link--dropdown ${
                  currentPath.startsWith('/solutions') ||
                  currentPath.startsWith('/services')
                    ? 'is-active'
                    : ''
                }`}
                onClick={() => navigateTo('/solutions')}
              >
                <span>Solutions & 13 Services</span>
                <ChevronDown size={14} />
              </button>

              {solutionsMenuOpen && (
                <div className="hp-mega-menu">
                  <div className="hp-mega-col">
                    <span className="hp-mega-title">
                      5 CORE SOLUTION PILLARS
                    </span>
                    {CORE_SOLUTIONS.map((sol) => (
                      <button
                        key={sol.id}
                        type="button"
                        className="hp-mega-item"
                        onClick={() => navigateTo(sol.route)}
                      >
                        <span
                          className="hp-mega-badge"
                          style={{ backgroundColor: sol.accentColor }}
                        >
                          {sol.index}
                        </span>
                        <div>
                          <strong>{sol.title}</strong>
                          <small>{sol.headline}</small>
                        </div>
                      </button>
                    ))}
                    <button
                      type="button"
                      className="hp-mega-all-btn"
                      onClick={() => navigateTo('/solutions')}
                    >
                      <span>View Complete Solutions Matrix</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>

                  <div className="hp-mega-col hp-mega-col--wide">
                    <span className="hp-mega-title">
                      13 DEDICATED SERVICE PAGES
                    </span>
                    <div className="hp-mega-services-grid">
                      {SERVICES_CATALOG.map((srv) => (
                        <button
                          key={srv.slug}
                          type="button"
                          className="hp-mega-service-link"
                          onClick={() => navigateTo(`/services/${srv.slug}`)}
                        >
                          <span className="hp-mega-num">{srv.number}</span>
                          <span>{srv.title}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              className={`hp-nav-link ${
                currentPath === '/approach' ? 'is-active' : ''
              }`}
              onClick={() => navigateTo('/approach')}
            >
              Approach
            </button>

            <button
              type="button"
              className={`hp-nav-link ${
                currentPath === '/about' ? 'is-active' : ''
              }`}
              onClick={() => navigateTo('/about')}
            >
              About
            </button>

            <button
              type="button"
              className={`hp-nav-link ${
                currentPath === '/growth-audit' ? 'is-active' : ''
              }`}
              onClick={() => navigateTo('/growth-audit')}
            >
              Growth Audit
            </button>

            <button
              type="button"
              className={`hp-nav-link ${
                currentPath === '/insights' ? 'is-active' : ''
              }`}
              onClick={() => navigateTo('/insights')}
            >
              Insights
            </button>

            <button
              type="button"
              className={`hp-nav-link ${
                currentPath === '/contact' ? 'is-active' : ''
              }`}
              onClick={() => navigateTo('/contact')}
            >
              Contact
            </button>
          </div>

          <div className="hp-nav-cta">
            <button
              type="button"
              className="hp-btn-3d hp-btn-3d--nav"
              onClick={() => openAuditWithTopic('Digital Growth Audit')}
            >
              <span className="hp-btn-3d-inner">Request Growth Audit</span>
            </button>

            <button
              type="button"
              className="hp-mobile-toggle"
              onClick={() => setMobileMenuOpen((o) => !o)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="hp-mobile-drawer">
            <button type="button" onClick={() => navigateTo('/')}>
              Home Page
            </button>
            <button type="button" onClick={() => navigateTo('/solutions')}>
              All 5 Core Solutions & 13 Services
            </button>
            <button type="button" onClick={() => navigateTo('/approach')}>
              Our Approach (7-Step Framework)
            </button>
            <button type="button" onClick={() => navigateTo('/about')}>
              About AxonVortex (Building From Zero)
            </button>
            <button type="button" onClick={() => navigateTo('/growth-audit')}>
              Digital Growth Audit & 5 Assessments
            </button>
            <button type="button" onClick={() => navigateTo('/insights')}>
              Insights & Public Experiments
            </button>
            <button type="button" onClick={() => navigateTo('/contact')}>
              Contact & Project Discovery
            </button>
            <button
              type="button"
              className="hp-btn-3d hp-btn-3d--red"
              onClick={() => {
                setMobileMenuOpen(false);
                openAuditWithTopic('Digital Growth Audit');
              }}
            >
              <span className="hp-btn-3d-inner">Request Growth Audit</span>
            </button>
          </div>
        )}
      </header>

      {/* ==================== CONDITIONAL PAGE RENDERING ==================== */}
      {!isHomePage ? (
        renderSubpage()
      ) : (
        <>
          {/* ==================== 1. HERO SECTION (NON-OVERLAPPING 2-ZONE STICKY LAYOUT) ==================== */}
          <section id="hero" ref={heroTrackRef} className="hp-hero-track">
            <div className="hp-hero-sticky">
              {/* Top Zone: Badge + Typewriter Headline + Quick Pillar Links (never overlaps canvas!) */}
              <div className="hp-hero-header-zone">
                <div className="hp-hero-badge-pill">
                  <span className="hp-pulse-dot" />
                  STRATEGY BEFORE TECHNOLOGY · HUMAN + AI GROWTH SYSTEMS
                </div>

                <div className="hp-hero-typewriter-box">
                  <TypewriterHeading
                    tag="h1"
                    text={
                      heroStage === 0
                        ? 'Build Smarter. Market Better. Grow Faster.'
                        : 'We connect AI, strategy, marketing, websites & automation into one system'
                    }
                    typingSpeed={36}
                    className="hp-serif-display hp-hero-serif"
                  />
                </div>

                <div className="hp-hero-Floating-pills">
                  <button
                    type="button"
                    className="hp-hero-quick-pill"
                    onClick={() => navigateTo('/solutions/digital-marketing')}
                  >
                    <Zap size={14} /> 01 · Digital Marketing
                  </button>
                  <button
                    type="button"
                    className="hp-hero-quick-pill"
                    onClick={() => navigateTo('/solutions/ai-automation')}
                  >
                    <Bot size={14} /> 02 · AI & Automation
                  </button>
                  <button
                    type="button"
                    className="hp-hero-quick-pill"
                    onClick={() => navigateTo('/solutions/websites-ecommerce')}
                  >
                    <Globe size={14} /> 03 · Websites & E-Commerce
                  </button>
                  <button
                    type="button"
                    className="hp-hero-quick-pill"
                    onClick={() => navigateTo('/solutions/lead-generation')}
                  >
                    <TrendingUp size={14} /> 04 · Lead Generation
                  </button>
                  <button
                    type="button"
                    className="hp-hero-quick-pill"
                    onClick={() =>
                      navigateTo('/solutions/digital-transformation')
                    }
                  >
                    <Layers size={14} /> 05 · Transformation
                  </button>
                </div>
              </div>

              {/* Bottom Zone: Dedicated Scroll-Scrubbed Vortex Stage + Scroll Hint Pill */}
              <div className="hp-hero-stage-zone">
                <AxonScrollSceneCanvas
                  scene="hero-vortex"
                  triggerRef={heroTrackRef}
                  start="top top"
                  end="bottom bottom"
                />

                <button
                  type="button"
                  className={`hp-scroll-down-pill ${
                    showScrollHint ? 'is-visible' : 'is-hidden'
                  }`}
                  onClick={() => scrollToSection('#problem')}
                >
                  <span>Scroll to converge the system</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </section>

          {/* ==================== 2. PROBLEM SECTION (NON-OVERLAPPING 3-COLUMN PARALLAX GRID) ==================== */}
          <section
            id="problem"
            ref={problemSectionRef}
            className="hp-problem-section"
          >
            <div className="hp-problem-content">
              {/* Top Row: Headline stands completely clear of floating badges */}
              <div className="hp-problem-headline-wrap">
                <h2 className="hp-display-title hp-display-title--white">
                  Buying digital tools is easy.
                </h2>
                <div className="hp-display-row hp-display-row--center">
                  <h2 className="hp-display-title hp-display-title--white">
                    Building
                  </h2>
                  <span className="hp-tilted-highlight hp-tilted-highlight--red">
                    one system
                  </span>
                  <h2 className="hp-display-title hp-display-title--white">
                    that grows is hard.
                  </h2>
                </div>
              </div>

              {/* 3-Column Stage Below Headline: [Left Parallax Badges] [Center Dashed Boxes] [Right Parallax Badges] */}
              <div className="hp-problem-body-grid">
                <div className="hp-problem-stickers-col">
                  <AxonProblemBadge
                    variant={0}
                    className="hp-problem-sticker"
                    data-parallax-sticker="1.1"
                    data-parallax-rot="-8"
                  />
                  <AxonProblemBadge
                    variant={1}
                    className="hp-problem-sticker"
                    data-parallax-sticker="0.85"
                    data-parallax-rot="7"
                  />
                </div>

                <div className="hp-problem-boxes-col">
                  <div className="hp-dashed-box hp-dashed-box--darkgreen">
                    <p className="hp-problem-lead">
                      Most businesses don&apos;t suffer from a lack of activity.
                      <br />
                      They stall because they are stuck
                    </p>
                    <div className="hp-slot-ticker-window">
                      <div key={tickerIndex} className="hp-slot-ticker-item">
                        {PROBLEM_TICKER_ITEMS[tickerIndex]}
                      </div>
                    </div>
                  </div>

                  <div className="hp-dashed-box hp-dashed-box--darkgreen hp-dashed-box--compact">
                    <p className="hp-problem-sub">
                      Your business doesn&apos;t need more digital noise.
                      <br />
                      It needs <strong>Strategy Before Technology</strong>.
                    </p>
                  </div>
                </div>

                <div className="hp-problem-stickers-col">
                  <AxonProblemBadge
                    variant={2}
                    className="hp-problem-sticker"
                    data-parallax-sticker="1.15"
                    data-parallax-rot="9"
                  />
                  <AxonProblemBadge
                    variant={3}
                    className="hp-problem-sticker"
                    data-parallax-sticker="0.9"
                    data-parallax-rot="-7"
                  />
                </div>
              </div>

              {/* 6 Verbatim Home Pain Points from Document */}
              <div className="hp-pain-points-grid">
                {HOME_PAIN_POINTS.map((pp) => (
                  <div
                    key={pp.index}
                    className="hp-pain-point-card"
                    onClick={() => navigateTo(pp.route)}
                  >
                    <div className="hp-pain-point-top">
                      <span
                        className="hp-pain-point-num"
                        style={{
                          backgroundColor: pp.color,
                          color:
                            pp.color === '#2563eb' ||
                            pp.color === '#8b5cf6' ||
                            pp.color === '#ff4d2d'
                              ? '#fff'
                              : '#0b0f17'
                        }}
                      >
                        {pp.index}
                      </span>
                      <span className="hp-pain-point-rec">
                        → {pp.recommendedSolution}
                      </span>
                    </div>
                    <h4>{pp.title}</h4>
                    <p>{pp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem Section Scroll-Scrubbed Diagnostic X-Ray Scanner */}
            <div
              id="problem-trigger"
              ref={problemSeqTrackRef}
              className="hp-problem-seq-track"
            >
              <div className="hp-problem-seq-sticky">
                <AxonScrollSceneCanvas
                  scene="problem-diagnosis"
                  triggerRef={problemSeqTrackRef}
                  start="top top"
                  end="bottom bottom"
                />
              </div>
            </div>
          </section>

          {/* ==================== 3. HOW IT WORKS INTRO (TEXT ON TOP, DOWNWARD ARROWS BELOW) ==================== */}
          <section
            id="how-it-works"
            ref={hiwIntroTrackRef}
            className="hp-hiw-intro-track"
          >
            <div className="hp-hiw-intro-sticky">
              <div className="hp-hiw-intro-box">
                <div className="hp-hiw-text-wrap">
                  <TypewriterHeading
                    tag="h2"
                    text={
                      hiwIntroStage === 0
                        ? 'AxonVortex designs practical growth systems around your business goals'
                        : 'Here is how our \n3-phase architecture works'
                    }
                    typingSpeed={38}
                    className="hp-serif-display hp-serif-display--dark"
                  />
                </div>

                {/* Dedicated Arrow Row Below Headline — Points Downward to the 3 Folder Tabs */}
                <HandDrawnArrows visible={hiwIntroStage === 1} />
              </div>
            </div>
          </section>

          {/* ==================== 4. STICKY STACKING FOLDER CARDS + LIVE INTERACTIVE SIMULATORS ==================== */}
          <section
            id="hiw-01"
            ref={folderContainerRef}
            className="hp-folders-section"
          >
            <div className="hp-folders-stack">
              {FOLDER_STEPS.map((step, index) => (
                <div
                  key={step.id}
                  ref={stepRefs[index]}
                  className={`hp-folder-step hp-folder-step--${index + 1} ${
                    activeFolderStep === index ? 'is-current' : ''
                  }`}
                  style={{ zIndex: index + 1 }}
                >
                  <div
                    className={`hp-folder-tab-row hp-folder-tab-row--${step.tabAlign}`}
                  >
                    <button
                      type="button"
                      className="hp-folder-tab"
                      style={{
                        backgroundColor: step.tabColor,
                        color: step.tabTextColor
                      }}
                      onClick={() => {
                        if (stepRefs[index]?.current && lenisRef.current) {
                          lenisRef.current.scrollTo(stepRefs[index].current, {
                            offset: -86,
                            duration: 1
                          });
                        }
                      }}
                    >
                      <span>{step.tabLabel}</span>
                    </button>
                  </div>

                  <div className="hp-folder-body">
                    <div className="hp-folder-grid">
                      <div className="hp-folder-text-col">
                        <div className="hp-folder-stage-pill">{step.badge}</div>
                        <h3 className="hp-folder-headline">{step.headline}</h3>

                        {step.stackedLines && step.stackedLines.length > 0 && (
                          <div className="hp-folder-stacked-list">
                            {step.stackedLines.map((line) => (
                              <p key={line}>{line}</p>
                            ))}
                          </div>
                        )}

                        {step.paragraphs &&
                          step.paragraphs.map((p, i) => (
                            <p key={i} className="hp-folder-paragraph">
                              {p}
                            </p>
                          ))}

                        {step.summaryLines && (
                          <div className="hp-folder-summary-list">
                            {step.summaryLines.map((line) => (
                              <p key={line}>{line}</p>
                            ))}
                          </div>
                        )}

                        <div className="hp-folder-services-wrap">
                          <span className="hp-folder-mini-label">
                            CLICK ANY SERVICE TO OPEN ITS DEDICATED PAGE OR
                            MODAL:
                          </span>
                          <div className="hp-folder-service-pills">
                            {step.servicesIncluded.map((srv) => (
                              <button
                                key={srv.slug}
                                type="button"
                                className="hp-service-chip"
                                onClick={() =>
                                  navigateTo(`/services/${srv.slug}`)
                                }
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
                          style={{ backgroundColor: step.tabColor }}
                        >
                          <div className="hp-video-window-bar">
                            <div className="hp-window-dots">
                              <span />
                              <span />
                              <span />
                            </div>
                            <span className="hp-window-title">
                              {step.solutionCategory}
                            </span>
                          </div>

                          <div className="hp-video-frame-wrap hp-video-frame-wrap--interactive">
                            <AxonFolderLiveSimulator stepIndex={index} />
                          </div>

                          <div className="hp-video-metrics-strip">
                            {step.metrics.map((m) => (
                              <div key={m.label} className="hp-video-metric">
                                <small>{m.label}</small>
                                <strong>{m.value}</strong>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== 5. AUTONOMOUS EXECUTION SECTION (NON-OVERLAPPING 2-ZONE LAYOUT) ==================== */}
          <section
            id="notification-section"
            ref={notificationTrackRef}
            className="hp-notification-track"
          >
            <div className="hp-notification-sticky">
              {/* Top Zone: Typewriter Card sits cleanly above the telemetry stream */}
              <div className="hp-notification-header-zone">
                <div className="hp-notification-card">
                  <span className="hp-mono-tag">
                    QUIET EXECUTION · PRACTICAL AI
                  </span>
                  <TypewriterHeading
                    tag="h2"
                    text="AI brings speed, scale & 24/7 automation. Humans bring context, creativity & strategy"
                    typingSpeed={34}
                    className="hp-serif-display hp-serif-display--dark hp-notification-serif"
                  />
                </div>
              </div>

              {/* Bottom Zone: Dedicated Canvas Stream — zero overlap with top card */}
              <div className="hp-notification-canvas-zone">
                <AxonScrollSceneCanvas
                  scene="autonomous-loop"
                  triggerRef={notificationTrackRef}
                  start="top top"
                  end="bottom bottom"
                />
              </div>
            </div>
          </section>

          {/* ==================== 6. MAZE SECTION (PARKER-STYLE BLURRED MAZE + STRAIGHT LINE BYPASS + GLIDING MARKER) ==================== */}
          <section id="maze" ref={mazeTrackRef} className="hp-maze-section">
            <div className="hp-maze-track-inner">
              <div className="hp-maze-sticky">
                <div className="hp-maze-container">
                  <div className="hp-maze-header">
                    <TypewriterHeading
                      tag="h2"
                      text={
                        mazeTextStage === 0
                          ? 'Disconnected vendors\ncreate a tangled maze'
                          : 'One connected system\nmoves you straight forward'
                      }
                      typingSpeed={40}
                      className="hp-serif-display hp-serif-display--dark"
                    />
                  </div>

                  {/* Interactive Toggle Switch: Fragmented Silos / Connected System */}
                  <div className="hp-maze-toggle-bar">
                    <span
                      className={`hp-maze-toggle-label ${
                        mazeMode === 'old' ? 'is-active' : ''
                      }`}
                      onClick={() => setMazeMode('old')}
                    >
                      The old way (Fragmented silos)
                    </span>

                    <button
                      type="button"
                      className={`hp-switch-pill ${
                        mazeMode !== 'old' ? 'is-on' : ''
                      }`}
                      onClick={() =>
                        setMazeMode((m) => (m === 'old' ? 'finish' : 'old'))
                      }
                      aria-label="Toggle between fragmented silos and connected system"
                    >
                      <span className="hp-switch-thumb" />
                    </button>

                    <span
                      className={`hp-maze-toggle-label ${
                        mazeMode !== 'old' ? 'is-active' : ''
                      }`}
                      onClick={() => setMazeMode('finish')}
                    >
                      The new way (AxonVortex system)
                    </span>
                  </div>

                  {/* Continuous Maze Stage: Maze stays mounted, blurs in 'new'/'finish' as straight green line & marker cut straight across */}
                  <div className={`hp-maze-stage hp-maze-stage--${mazeMode}`}>
                    {/* Background Multi-Turn Labyrinth SVG (Sharp in 'old', Blurred & Dimmed in 'new'/'finish') */}
                    <div className="hp-maze-bg-layer">
                      <AxonMazeComparisonSvg isBypassed={mazeMode !== 'old'} />
                    </div>

                    {/* Straight Green Bypass Line Cutting Right Through the Center of the Maze */}
                    <div className="hp-maze-bypass-track" aria-hidden="true">
                      <div
                        className={`hp-maze-bypass-line hp-maze-bypass-line--${mazeMode}`}
                      />
                    </div>

                    {/* Gliding Signal Orb Marker Moving From Left Entrance -> Center -> Right Finish */}
                    <div
                      className={`hp-maze-marker hp-maze-marker--${mazeMode}`}
                    >
                      <span className="hp-marker-tag">
                        {mazeMode === 'old'
                          ? 'Stuck in disconnected tools'
                          : mazeMode === 'new'
                          ? 'Cutting straight through silos...'
                          : 'Measurable Business Growth! ✓'}
                      </span>
                      <AxonMarkerOrbSvg isComplete={mazeMode !== 'old'} />
                    </div>

                    {/* Start & Finish Edge Badges */}
                    <span className="hp-maze-edge-pill hp-maze-edge-pill--start">
                      START
                    </span>
                    <span
                      className={`hp-maze-edge-pill hp-maze-edge-pill--end ${
                        mazeMode === 'finish' ? 'is-reached' : ''
                      }`}
                    >
                      GROWTH GOAL
                    </span>
                  </div>

                  {/* 5 Connected Stage Pills Below Maze Stage */}
                  <div className="hp-connected-nodes-row">
                    {[
                      {
                        code: '01',
                        label: 'Attract · Marketing & SEO',
                        route: '/solutions/digital-marketing'
                      },
                      {
                        code: '02',
                        label: 'Engage · Web & Shopify',
                        route: '/solutions/websites-ecommerce'
                      },
                      {
                        code: '03',
                        label: 'Convert · Lead Funnels',
                        route: '/solutions/lead-generation'
                      },
                      {
                        code: '04',
                        label: 'Automate · Practical AI',
                        route: '/solutions/ai-automation'
                      },
                      {
                        code: '05',
                        label: 'Optimize · Growth Loop',
                        route: '/approach'
                      }
                    ].map((node, idx) => {
                      const isLit =
                        mazeMode === 'finish' ||
                        (mazeMode === 'new' && idx <= 2);
                      return (
                        <button
                          key={node.code}
                          type="button"
                          className={`hp-connected-node ${
                            isLit ? 'is-lit' : ''
                          }`}
                          onClick={() => navigateTo(node.route)}
                        >
                          <small>{node.code}</small>
                          <span>{node.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* 4th Procedural Scroll Sequence: The AxonVortex Growth Loop */}
            <div ref={mazeSeqTrackRef} className="hp-maze-seq-track">
              <div className="hp-maze-seq-sticky">
                <AxonScrollSceneCanvas
                  scene="system-convergence"
                  triggerRef={mazeSeqTrackRef}
                  start="top top"
                  end="bottom bottom"
                />
              </div>
            </div>
          </section>

          {/* ==================== 7. 4-STAGE ARCHITECTURE CORE (EXPANDING CIRCLE + NON-OVERLAPPING TAGS) ==================== */}
          <section
            id="why-axonvortex"
            ref={brainTrackRef}
            className="hp-brain-track"
          >
            <div className="hp-brain-sticky">
              <div
                className="hp-brain-bg-circle"
                style={{
                  backgroundColor: activeBrain.bgColor,
                  transform: `translate(-50%, -50%) scale(${brainCircleScale})`
                }}
              />

              <div className="hp-brain-content">
                <div className="hp-brain-header">
                  <div className="hp-display-row hp-display-row--center">
                    <h2 className="hp-display-title">What makes</h2>
                    <span className="hp-tilted-highlight hp-tilted-highlight--red">
                      AxonVortex
                    </span>
                  </div>
                  <h2 className="hp-display-title">work as one system?</h2>
                </div>

                <div className="hp-brain-stage-switcher">
                  {BRAIN_STATES.map((st, idx) => (
                    <button
                      key={st.id}
                      type="button"
                      className={`hp-brain-stage-btn ${
                        brainStageIdx === idx ? 'is-active' : ''
                      }`}
                      onClick={() => setBrainStageIdx(idx)}
                    >
                      {st.id} · {st.name}
                    </button>
                  ))}
                </div>

                <div className="hp-brain-dynamic-box">
                  <p>{activeBrain.subtitle}</p>
                </div>

                <div className="hp-brain-diagram-stage">
                  <AxonNeuralCoreSvg
                    activeStage={activeBrain.id}
                    mouseOffset={mouseOffset}
                  />

                  <div className="hp-brain-tags-cloud">
                    {activeBrain.tags.map((t, i) => {
                      const depth = (i % 3) + 1;
                      const px = t.x + mouseOffset.x * 10 * depth;
                      const py = t.y + mouseOffset.y * 8 * depth;
                      return (
                        <button
                          key={`${activeBrain.id}-${t.label}`}
                          type="button"
                          className="hp-brain-tag"
                          style={{
                            borderColor: activeBrain.borderColor,
                            transform: `translate(calc(-50% + ${px}px), calc(-50% + ${py}px)) rotate(${t.rotate}deg)`
                          }}
                          onClick={() => setActiveServiceSlug(t.slug)}
                        >
                          <span>{t.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== 8. VELOCITY MANIFESTO RIBBON TICKER ==================== */}
          <div className="hp-ribbon-bar">
            <div className="hp-ribbon-track">
              {[0, 1, 2, 3].map((rep) => (
                <div key={rep} className="hp-ribbon-group">
                  <span className="hp-ribbon-text">
                    Strategy Before Technology · Practical AI · Connected Growth
                  </span>
                  <span className="hp-ribbon-star">✦</span>
                  <span className="hp-ribbon-text">
                    Hypothesis → Action → Measure → Learn → Improve
                  </span>
                  <span className="hp-ribbon-star">✦</span>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== 9. CORE SOLUTIONS & 13 CONNECTED SERVICES SECTION ==================== */}
          <section id="solutions" className="hp-pricing-section">
            <div className="hp-pricing-container">
              <div className="hp-pricing-layout">
                <div className="hp-pricing-left-sticky">
                  <div className="hp-pricing-title-block">
                    <h2 className="hp-display-title hp-display-title--white">
                      Systems built around
                    </h2>
                    <div className="hp-display-row">
                      <span className="hp-tilted-highlight hp-tilted-highlight--yellow">
                        your goals
                      </span>
                      <h2 className="hp-display-title hp-display-title--white">
                        not
                      </h2>
                      <span className="hp-tilted-highlight hp-tilted-highlight--green">
                        fixed boxes.
                      </span>
                    </div>
                    <p className="hp-pricing-sub">
                      {BRAND.promise} Explore our connected system architectures
                      or open any dedicated Solution or Service page below.
                    </p>
                  </div>

                  <div className="hp-included-card">
                    <h4>The 6 AxonVortex Principles</h4>
                    <ul>
                      {WHY_AXONVORTEX_PRINCIPLES.map((item) => (
                        <li key={item}>
                          <span className="hp-check-badge">
                            <Check size={14} strokeWidth={3} />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="hp-included-card">
                    <h4>Who We Help (6 Business Segments)</h4>
                    <ul>
                      {WHO_WE_HELP.map((seg) => (
                        <li key={seg.index}>
                          <span className="hp-check-badge">
                            <Check size={14} strokeWidth={3} />
                          </span>
                          <span>
                            <strong>
                              {seg.index} · {seg.title}:
                            </strong>{' '}
                            {seg.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hp-pricing-cards-col">
                  {CORE_SOLUTION_SYSTEMS.map((sys) => {
                    const isLight =
                      sys.accentColor === '#2563eb' ||
                      sys.accentColor === '#8b5cf6' ||
                      sys.accentColor === '#ff4d2d';
                    return (
                      <div
                        key={sys.name}
                        className={`hp-pricing-card ${
                          sys.featured ? 'hp-pricing-card--featured' : ''
                        }`}
                      >
                        <div className="hp-pricing-card-top">
                          <div>
                            <span
                              className="hp-tier-badge"
                              style={{
                                backgroundColor: sys.accentColor,
                                color: isLight ? '#fff' : '#000'
                              }}
                            >
                              {sys.badge}
                            </span>
                            <h3 className="hp-tier-name">{sys.name}</h3>
                          </div>
                        </div>

                        <p className="hp-tier-tagline">{sys.tagline}</p>

                        <hr className="hp-dashed-divider" />

                        <p className="hp-tier-desc">{sys.description}</p>

                        <ul className="hp-tier-highlights">
                          {sys.highlights.map((h) => (
                            <li key={h}>
                              <Check size={16} />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="hp-card-dual-btns">
                          <button
                            type="button"
                            className="hp-btn-3d hp-btn-3d--full"
                            onClick={() => navigateTo(sys.route)}
                          >
                            <span
                              className="hp-btn-3d-inner"
                              style={{
                                backgroundColor: sys.accentColor,
                                color: isLight ? '#ffffff' : '#0b0f17'
                              }}
                            >
                              {sys.ctaText}
                            </span>
                          </button>
                        </div>
                      </div>
                    );
                  })}

                  <div className="hp-pricing-card hp-pricing-card--enterprise">
                    <div className="hp-enterprise-content">
                      <span className="hp-mono-pill hp-mono-pill--yellow">
                        NOT SURE WHAT YOU ACTUALLY NEED?
                      </span>
                      <h3>Start With a Digital Growth Audit</h3>
                      <p>
                        We evaluate your digital presence, social media,
                        marketing, lead generation, and AI/automation
                        opportunities to tell you where you are, what&apos;s
                        holding you back, and what to do first.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="hp-btn-3d hp-btn-3d--red hp-btn-3d--full"
                      onClick={() => navigateTo('/growth-audit')}
                    >
                      <span className="hp-btn-3d-inner">
                        Open Interactive Growth Audit Page
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 6-Step How We Work Process from Document */}
              <div className="hp-services-explorer">
                <div className="hp-explorer-header">
                  <div>
                    <span className="hp-mono-pill hp-mono-pill--yellow">
                      HOW WE WORK · 6-STEP PROCESS
                    </span>
                    <h3 className="hp-explorer-title">
                      Understand → Diagnose → Strategize → Create → Automate →
                      Measure & Improve
                    </h3>
                  </div>
                  <button
                    type="button"
                    className="hp-service-chip"
                    onClick={() => navigateTo('/approach')}
                  >
                    <span>Explore Full Approach Page</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>

                <div className="hp-services-grid">
                  {HOW_WE_WORK_PROCESS.map((proc) => (
                    <div
                      key={proc.index}
                      className="hp-service-card"
                      onClick={() => navigateTo('/approach')}
                    >
                      <div className="hp-service-card-top">
                        <span
                          className="hp-service-num"
                          style={{ backgroundColor: '#a3e635', color: '#000' }}
                        >
                          {proc.index}
                        </span>
                        <span className="hp-service-cat">HOW WE WORK</span>
                      </div>
                      <h4>{proc.title}</h4>
                      <p>{proc.description}</p>
                      <div className="hp-service-card-foot">
                        <span>View 7-Step Methodology</span>
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive 13-Service Explorer Matrix */}
              <div className="hp-services-explorer">
                <div className="hp-explorer-header">
                  <div>
                    <span className="hp-mono-pill hp-mono-pill--yellow">
                      COMPLETE 13-SERVICE ARCHITECTURE
                    </span>
                    <h3 className="hp-explorer-title">
                      Click Any Service to Open Its Dedicated Page
                    </h3>
                  </div>
                  <div className="hp-category-pills">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        className={`hp-cat-pill ${
                          selectedCategory === cat ? 'is-active' : ''
                        }`}
                        onClick={() => setSelectedCategory(cat)}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="hp-services-grid">
                  {filteredServices.map((srv) => (
                    <div
                      key={srv.slug}
                      className="hp-service-card"
                      onClick={() => navigateTo(`/services/${srv.slug}`)}
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
                        <span>Open Dedicated Service Page</span>
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ==================== 10. PROBLEM-SOLVER & BUILDING IN PUBLIC TICKERS + FAQ ==================== */}
          <section id="insights" className="hp-testimonials-section">
            <div className="hp-testimonials-header">
              <div className="hp-testimonials-title-col">
                <h2 className="hp-display-title hp-display-title--white">
                  Real bottlenecks.
                </h2>
                <span className="hp-tilted-highlight hp-tilted-highlight--red">
                  Practical systems.
                </span>
              </div>
              <div className="hp-testimonials-sub-col">
                <p>
                  No manufactured results or empty AI hype. We map every
                  business bottleneck to a concrete growth system and document
                  our experiments in the open.
                </p>
              </div>
            </div>

            <div className="hp-ticker-viewport">
              <div className="hp-ticker-belt hp-ticker-belt--left">
                {[...PROBLEM_SOLVER_CARDS, ...PROBLEM_SOLVER_CARDS].map(
                  (item, idx) => (
                    <div
                      key={`r1-${idx}`}
                      className="hp-testimonial-card"
                      style={{ backgroundColor: item.bg, cursor: 'pointer' }}
                      onClick={() => navigateTo(item.route)}
                    >
                      <span className="hp-testimonial-tag">{item.tag}</span>
                      <p className="hp-testimonial-quote">{item.quote}</p>
                      <div className="hp-testimonial-author">
                        <div className="hp-author-avatar">
                          0{(idx % 6) + 1}
                        </div>
                        <div>
                          <strong>{item.name}</strong>
                          <span>{item.role}</span>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="hp-ticker-viewport">
              <div className="hp-ticker-belt hp-ticker-belt--right">
                {[...JOURNAL_EXPERIMENTS, ...JOURNAL_EXPERIMENTS].map(
                  (item, idx) => (
                    <div
                      key={`r2-${idx}`}
                      className="hp-testimonial-card"
                      style={{ backgroundColor: item.bg, cursor: 'pointer' }}
                      onClick={() => navigateTo('/insights')}
                    >
                      <span className="hp-testimonial-tag">{item.tag}</span>
                      <p className="hp-testimonial-quote">{item.quote}</p>
                      <div className="hp-testimonial-author">
                        <div
                          className="hp-author-avatar"
                          style={{ backgroundColor: '#f59e0b' }}
                        >
                          AV
                        </div>
                        <div>
                          <strong>{item.name}</strong>
                          <span>{item.role}</span>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="hp-faq-container">
              <div className="hp-faq-header">
                <span className="hp-mono-pill hp-mono-pill--yellow">
                  TRANSPARENT ANSWERS · ZERO HYPE
                </span>
                <h3>Frequently Asked Questions</h3>
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
                      <span>{item.q}</span>
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

          {/* ==================== 11. CTA SECTION (CONCENTRIC DASHED ELLIPSES + CUSTOM SVG STICKERS) ==================== */}
          <section id="cta" className="hp-cta-section">
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
              style={{
                transform: `translate(${mouseOffset.x * 16}px, ${
                  mouseOffset.y * 12
                }px) rotate(-7deg)`
              }}
            />
            <AxonFloatingStickerSvg
              label="02 · CONVERT"
              sub="WEB · SHOPIFY · CRM"
              color="#a3e635"
              className="hp-cta-float-sticker hp-cta-float-sticker--2"
              style={{
                transform: `translate(${mouseOffset.x * -14}px, ${
                  mouseOffset.y * 14
                }px) rotate(8deg)`
              }}
            />
            <AxonFloatingStickerSvg
              label="03 · AUTOMATE"
              sub="AI CHAT · VOICE · AGENTS"
              color="#ffdfd6"
              className="hp-cta-float-sticker hp-cta-float-sticker--3"
              style={{
                transform: `translate(${mouseOffset.x * 14}px, ${
                  mouseOffset.y * -12
                }px) rotate(-6deg)`
              }}
            />
            <AxonFloatingStickerSvg
              label="04 · IMPROVE"
              sub="HYPOTHESIS → SCALE"
              color="#ede9fe"
              className="hp-cta-float-sticker hp-cta-float-sticker--4"
              style={{
                transform: `translate(${mouseOffset.x * -16}px, ${
                  mouseOffset.y * -10
                }px) rotate(10deg)`
              }}
            />

            <div className="hp-cta-content">
              <div className="hp-cta-headline-box">
                <h2 className="hp-display-title hp-display-title--white">
                  Find what&apos;s holding
                </h2>
                <span className="hp-tilted-highlight hp-tilted-highlight--yellow">
                  your growth back.
                </span>
                <p className="hp-cta-body">
                  Start with an AxonVortex Digital Growth Audit or tell us your
                  business goal — we&apos;ll help identify the right combination
                  of strategy, marketing, websites, and AI automation.
                </p>
              </div>

              <div className="hp-cta-main-sticker-wrap">
                <AxonCtaEmblemSvg />
              </div>

              <div className="hp-cta-button-stage">
                <button
                  type="button"
                  className="hp-btn-3d hp-btn-3d--large"
                  onClick={() => navigateTo('/growth-audit')}
                >
                  <span className="hp-btn-3d-inner">
                    Request Your Growth Audit
                  </span>
                </button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ==================== 12. SHARED MULTIPAGE NEO-BRUTALIST FOOTER ==================== */}
      <footer className="hp-footer">
        <div className="hp-footer-container">
          <div className="hp-footer-top">
            <div className="hp-footer-brand-col">
              <div
                className="hp-footer-wordmark"
                style={{ cursor: 'pointer' }}
                onClick={() => navigateTo('/')}
              >
                AXONVORTEX
              </div>
              <p className="hp-footer-tagline">
                {BRAND.tagline} {BRAND.mission}
              </p>
              <div className="hp-footer-badges">
                {DIAGNOSTIC_AUDITS.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    className="hp-footer-audit-pill"
                    onClick={() => navigateTo('/growth-audit')}
                  >
                    <Sparkles size={13} /> {a.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="hp-footer-links-col">
              <h5>5 Core Solution Pages</h5>
              {CORE_SOLUTIONS.map((sol) => (
                <button
                  key={sol.id}
                  type="button"
                  onClick={() => navigateTo(sol.route)}
                >
                  {sol.index} · {sol.title}
                </button>
              ))}
              <button
                type="button"
                onClick={() => navigateTo('/solutions')}
              >
                → All 5 Solutions & 13 Services
              </button>
            </div>

            <div className="hp-footer-links-col">
              <h5>Company & Architecture</h5>
              <button type="button" onClick={() => navigateTo('/')}>
                Home Showcase
              </button>
              <button type="button" onClick={() => navigateTo('/approach')}>
                Our Approach (7-Step System)
              </button>
              <button type="button" onClick={() => navigateTo('/about')}>
                About AxonVortex (Building From Zero)
              </button>
              <button type="button" onClick={() => navigateTo('/growth-audit')}>
                Digital Growth Audit Page
              </button>
              <button type="button" onClick={() => navigateTo('/insights')}>
                Insights & Public Experiments
              </button>
              <button type="button" onClick={() => navigateTo('/contact')}>
                Contact & Discovery
              </button>
            </div>
          </div>

          <div className="hp-footer-bottom">
            <span>{BRAND.copyright}</span>
            <span>
              {BRAND.email} · {BRAND.auditEmail}
            </span>
            <span>Engineered with Lenis Smooth Scroll & GSAP ScrollTrigger</span>
          </div>
        </div>
      </footer>

      {/* ==================== INTERACTIVE MODALS ==================== */}
      <ServiceDetailModal
        serviceSlug={activeServiceSlug}
        onClose={() => setActiveServiceSlug(null)}
        onOpenAudit={(topic) => openAuditWithTopic(topic)}
      />

      <GrowthAuditModal
        isOpen={auditModalOpen}
        initialTopic={auditInitialTopic}
        onClose={() => setAuditModalOpen(false)}
      />
    </div>
  );
}
