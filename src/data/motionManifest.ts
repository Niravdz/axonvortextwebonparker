import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { SERVICES_CATALOG, CORE_SOLUTIONS } from './agencyData.js';

gsap.registerPlugin(ScrollTrigger);

/**
 * Shared Motion System Tokens (Locked across AxonVortex)
 * - Fast interaction: ~180ms (0.18s)
 * - Standard transition: ~420ms (0.42s)
 * - Cinematic transition: ~700ms (0.70s)
 * - Main easing: cubic-bezier(0.22, 1, 0.36, 1)
 */
export const MOTION_TOKENS = {
  fastDuration: 0.18,
  standardDuration: 0.42,
  cinematicDuration: 0.7,
  mainEaseCss: 'cubic-bezier(0.22, 1, 0.36, 1)',
  gsapEase: 'power3.out',
  limits: {
    desktopBgMaxPx: 60,
    desktopContentMaxPx: 38,
    maxRotationDeg: 3,
    minScale: 0.96,
    maxScale: 1.04,
    tabletFactor: 0.5,
    mobileMaxPx: 10
  }
};

/**
 * 25 Distinct Animation Vocabulary Techniques
 */
export const ANIMATION_VOCABULARY = [
  'masked-headline-reveal',
  'line-by-line-editorial',
  'svg-path-drawing',
  'diagram-construction',
  'multi-depth-parallax',
  'counter-scroll',
  'sticky-narrative',
  'pinned-transformation',
  'progressive-clipping',
  'controlled-scale-depth',
  'content-convergence',
  'content-divergence',
  'perspective-assembly',
  'layer-separation',
  'pipeline-progression',
  'timeline-advancement',
  'interface-construction',
  'before-after-transformation',
  'orbital-relationship',
  'scroll-controlled-media',
  'horizontal-narrative-rail',
  'connected-node-activation',
  'data-flow-animation',
  'shape-morphing',
  'section-handoff'
];

/**
 * Helper to build a complete, validated Section Motion Manifest Entry
 */
function createSectionEntry({
  route,
  sectionId,
  purpose,
  currentLayout,
  newComposition,
  visualMetaphor,
  motionType,
  primarySubject,
  start = 'top 82%',
  end = 'bottom 22%',
  scrub = false,
  pin = false,
  axis = 'Y',
  depth = 2,
  maxOffset = 28,
  sequence = [],
  media = 'Inline SVG & Neo-Brutalist Interface',
  fingerprint
}) {
  return {
    route,
    sectionId,
    purpose,
    currentLayout,
    newComposition,
    visualMetaphor,
    motionType,
    primarySubject,
    trigger: `[data-section-id="${sectionId}"]`,
    start,
    end,
    scrub,
    pin,
    axis,
    depth,
    maxOffset,
    sequence,
    media,
    desktop: `Max offset ${maxOffset}px along ${axis}-axis (depth ${depth}, rot <= 3deg, scale 0.96–1.04)`,
    tablet: `50% displacement (${Math.round(maxOffset * 0.5)}px max) with simplified depth layers`,
    mobile: maxOffset === 0
      ? 'Static zero-parallax layout with 44x44px touch targets'
      : `Sequential vertical story (max ${Math.min(10, Math.round(maxOffset * 0.3))}px offset); pinning/perspective disabled`,
    reducedMotion:
      'Disable parallax, scrub, and loops; display all content and static poster images immediately',
    cleanup: 'gsap.context().revert() + ScrollTrigger instance kill on route change',
    fingerprint
  };
}

/**
 * 1. HOMEPAGE SECTIONS (/) — 10 Distinct Sections (Benchmark Choreography)
 */
const HOMEPAGE_SECTIONS = [
  createSectionEntry({
    route: '/',
    sectionId: 'home-hero-vortex',
    purpose: 'Introduce AxonVortex connected growth vision and 5 core solution pillars',
    currentLayout: '2-zone sticky hero with top typewriter + quick pills and bottom canvas stage',
    newComposition: 'Non-overlapping 2-zone sticky stage with converging vortex canvas and pillar quick-router',
    visualMetaphor: 'Scattered digital signals converging into one growth vortex',
    motionType: 'pinned-transformation',
    primarySubject: 'Hero vortex canvas + 2-stage typewriter headline',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.4,
    pin: true,
    axis: 'radial',
    depth: 3,
    maxOffset: 36,
    sequence: ['Badge pulse', 'Typewriter stage 01 -> 02', 'Canvas vortex convergence'],
    media: 'Interactive HTML5 Canvas Vortex (AxonScrollSceneCanvas)',
    fingerprint: {
      layoutChoreography: 'home-2zone-sticky-vortex',
      entrancePattern: 'radial-vortex-lock',
      movementAxis: 'radial-inward',
      pinningBehavior: 'sticky-track-2zone',
      scrubBehavior: 'canvas-progress-scrub',
      revealOrder: 'badge-headline-pills-canvas',
      visualTransformation: 'particle-convergence-to-core',
      contentRelationship: 'vision-to-5-pillars'
    }
  }),
  createSectionEntry({
    route: '/',
    sectionId: 'home-problem-diagnosis',
    purpose: 'Diagnose why disconnected tools stall growth and highlight 6 core pain points',
    currentLayout: '3-column non-overlapping problem stage + 6 pain-point cards + X-ray scanner',
    newComposition: 'Counter-drifting side problem stickers flanking slot-machine bottleneck ticker + X-ray diagnostic canvas',
    visualMetaphor: 'Diagnostic X-ray scanning fragmented business bottlenecks',
    motionType: 'multi-depth-parallax',
    primarySubject: '4 side problem badges + slot ticker + 6 pain-point cards + X-ray canvas',
    start: 'top bottom',
    end: 'bottom top',
    scrub: 0.4,
    pin: false,
    axis: 'XY',
    depth: 3,
    maxOffset: 38,
    sequence: ['Side problem stickers counter-rotate', 'Slot ticker cycles bottlenecks', '6 pain cards stagger by column', 'X-ray scan sweeps'],
    media: 'AxonProblemBadge SVGs + Problem Diagnosis Canvas',
    fingerprint: {
      layoutChoreography: 'home-3col-problem-xray',
      entrancePattern: 'flanking-sticker-drift',
      movementAxis: 'vertical-counter-tilt',
      pinningBehavior: 'subtrack-sticky-xray',
      scrubBehavior: 'dual-column-scrub',
      revealOrder: 'headline-flanks-ticker-grid',
      visualTransformation: 'xray-bottleneck-scan',
      contentRelationship: 'pain-point-to-solution-route'
    }
  }),
  createSectionEntry({
    route: '/',
    sectionId: 'home-hiw-intro',
    purpose: 'Bridge from business problems to the 3-phase AxonVortex architecture',
    currentLayout: 'Sticky centered editorial card with hand-drawn downward arrows',
    newComposition: '2-stage editorial typewriter with SVG hand-drawn arrow stroke draw pointing to folder tabs',
    visualMetaphor: 'Editorial blueprint callout directing into stacked system folders',
    motionType: 'svg-path-drawing',
    primarySubject: '2-stage serif headline + 3 hand-drawn downward SVG arrows',
    start: 'top 60%',
    end: 'bottom bottom',
    scrub: 0.3,
    pin: true,
    axis: 'Y',
    depth: 1,
    maxOffset: 24,
    sequence: ['Typewriter stage 01', 'Headline morphs to stage 02', '3 hand-drawn arrows draw downward'],
    media: 'HandDrawnArrows SVG path animation',
    fingerprint: {
      layoutChoreography: 'home-centered-bridge-callout',
      entrancePattern: 'typewriter-then-svg-draw',
      movementAxis: 'downward-vector-draw',
      pinningBehavior: 'sticky-bridge-box',
      scrubBehavior: 'threshold-stage-switch',
      revealOrder: 'headline-stage1-stage2-arrows',
      visualTransformation: 'stroke-dashoffset-arrow-draw',
      contentRelationship: 'intro-to-3-folder-tabs'
    }
  }),
  createSectionEntry({
    route: '/',
    sectionId: 'home-sticky-folders',
    purpose: 'Present the 3-phase growth architecture (Attract, Convert, Automate) with live simulators',
    currentLayout: '3 sticky stacking folder cards with left/center/right tabs',
    newComposition: 'Physical file-folder cards stacking vertically with interactive live simulators inside each folder',
    visualMetaphor: 'Tactile architectural blueprint folders stacking into one system',
    motionType: 'sticky-narrative',
    primarySubject: '3 sticky folder steps + AxonFolderLiveSimulator windows',
    start: 'top center',
    end: 'bottom center',
    scrub: 0.35,
    pin: true,
    axis: 'Y',
    depth: 3,
    maxOffset: 30,
    sequence: ['Folder 01 locks at top', 'Folder 02 slides up and stacks over 01', 'Folder 03 stacks and activates simulator'],
    media: 'AxonFolderLiveSimulator interactive SVG/UI windows',
    fingerprint: {
      layoutChoreography: 'home-3folder-vertical-stack',
      entrancePattern: 'tab-indexed-card-overstack',
      movementAxis: 'vertical-z-stacking',
      pinningBehavior: 'css-sticky-card-stack',
      scrubBehavior: 'active-tab-scroll-spy',
      revealOrder: 'folder01-folder02-folder03',
      visualTransformation: 'card-elevation-and-tab-highlight',
      contentRelationship: 'phase-to-included-services'
    }
  }),
  createSectionEntry({
    route: '/',
    sectionId: 'home-autonomous-execution',
    purpose: 'Demonstrate how AI speed + human judgment work together in quiet execution',
    currentLayout: '2-zone sticky notification card + autonomous loop canvas',
    newComposition: 'Floating editorial manifesto card above a continuous horizontal telemetry stream canvas',
    visualMetaphor: '24/7 autonomous signal stream supervised by human strategy',
    motionType: 'data-flow-animation',
    primarySubject: 'Notification manifesto card + autonomous telemetry canvas',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.4,
    pin: true,
    axis: 'X',
    depth: 2,
    maxOffset: 32,
    sequence: ['Manifesto card settles', 'Telemetry packets stream across canvas', 'Human checkpoint badges pulse'],
    media: 'Autonomous Loop Canvas (AxonScrollSceneCanvas)',
    fingerprint: {
      layoutChoreography: 'home-2zone-telemetry-stream',
      entrancePattern: 'top-card-bottom-stream',
      movementAxis: 'horizontal-packet-flow',
      pinningBehavior: 'sticky-2zone-canvas',
      scrubBehavior: 'continuous-stream-scrub',
      revealOrder: 'pill-serif-telemetry-canvas',
      visualTransformation: 'signal-packets-through-gates',
      contentRelationship: 'human-context-plus-ai-speed'
    }
  }),
  createSectionEntry({
    route: '/',
    sectionId: 'home-maze-bypass',
    purpose: 'Contrast fragmented vendor silos (tangled maze) with one connected AxonVortex system (straight green bypass)',
    currentLayout: 'Sticky maze comparison stage + toggle switch + 7 connected stage pills',
    newComposition: 'Multi-turn labyrinth SVG that blurs and dims as a straight lime-green bypass line and orb cut straight from START to GROWTH GOAL',
    visualMetaphor: 'Cutting straight through a tangled vendor labyrinth',
    motionType: 'before-after-transformation',
    primarySubject: 'AxonMazeComparisonSvg + straight green bypass line + gliding orb marker',
    start: 'top 55%',
    end: 'bottom bottom',
    scrub: 0.45,
    pin: true,
    axis: 'X',
    depth: 3,
    maxOffset: 36,
    sequence: ['Old way sharp maze', 'Maze blurs + green line extends left-to-right', 'Orb reaches GROWTH GOAL + 7 pills light up'],
    media: 'AxonMazeComparisonSvg + AxonMarkerOrbSvg + System Convergence Canvas',
    fingerprint: {
      layoutChoreography: 'home-labyrinth-bypass-stage',
      entrancePattern: 'maze-blur-line-pierce',
      movementAxis: 'horizontal-left-to-right-pierce',
      pinningBehavior: 'sticky-maze-track',
      scrubBehavior: '3state-progress-old-new-finish',
      revealOrder: 'maze-toggle-line-orb-7nodes',
      visualTransformation: 'labyrinth-blur-to-linear-vector',
      contentRelationship: 'silos-vs-connected-7stages'
    }
  }),
  createSectionEntry({
    route: '/',
    sectionId: 'home-architecture-core',
    purpose: 'Show how Attract, Convert, Automate, and Improve orbit around one neural core',
    currentLayout: 'Expanding background circle + 4-stage switcher + neural core SVG + orbital service tags',
    newComposition: 'Radial expanding color stage with interactive mouse-reactive orbital service tags around AxonNeuralCoreSvg',
    visualMetaphor: '4-stage orbital growth engine expanding with scroll',
    motionType: 'orbital-relationship',
    primarySubject: 'Expanding circle + AxonNeuralCoreSvg + floating service tags',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 0.5,
    pin: true,
    axis: 'Z-scale',
    depth: 4,
    maxOffset: 40,
    sequence: ['Circle scales 0.72 -> 1.40', 'Stage cycles 01 Attract -> 02 Convert -> 03 Automate -> 04 Improve', 'Orbital tags shift depth'],
    media: 'AxonNeuralCoreSvg + interactive orbital service chips',
    fingerprint: {
      layoutChoreography: 'home-radial-neural-core',
      entrancePattern: 'radial-scale-expansion',
      movementAxis: 'z-scale-plus-orbital-xy',
      pinningBehavior: 'sticky-4stage-core',
      scrubBehavior: 'scale-and-stage-index-scrub',
      revealOrder: 'circle-switcher-core-orbital-tags',
      visualTransformation: 'color-morph-and-radial-expansion',
      contentRelationship: 'core-stages-to-15-services'
    }
  }),
  createSectionEntry({
    route: '/',
    sectionId: 'home-core-solutions-matrix',
    purpose: 'Detail the 5 core solution systems, How We Work, Growth Journey, Building in Public, and 15-Service Explorer',
    currentLayout: 'Sticky left manifesto + right solution cards + 4 horizontal explorer grids',
    newComposition: 'Asymmetric sticky split ledger followed by progressive 4-tier architecture matrix with category filter pills',
    visualMetaphor: 'Modular architectural catalog organized by business problem and growth stage',
    motionType: 'perspective-assembly',
    primarySubject: '5 core solution system cards + 15-service filterable matrix',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: false,
    pin: false,
    axis: 'Y',
    depth: 2,
    maxOffset: 28,
    sequence: ['Left manifesto locks sticky', '5 solution tier cards assemble sequentially', '15-service grid filters dynamically'],
    media: 'Neo-brutalist tier cards + interactive category filter matrix',
    fingerprint: {
      layoutChoreography: 'home-sticky-split-plus-4explorers',
      entrancePattern: 'asymmetric-ledger-cascade',
      movementAxis: 'vertical-staggered-columns',
      pinningBehavior: 'left-column-sticky-anchor',
      scrubBehavior: 'viewport-threshold-cascade',
      revealOrder: 'manifesto-tiers-process-journey-catalog',
      visualTransformation: 'modular-grid-assembly',
      contentRelationship: 'principles-to-solutions-to-services'
    }
  }),
  createSectionEntry({
    route: '/',
    sectionId: 'home-bottleneck-tickers-faq',
    purpose: 'Pair real business bottlenecks and public experiments with 10 transparent FAQs',
    currentLayout: '2 counter-scrolling marquee belts + 10-question FAQ accordion',
    newComposition: 'Opposing horizontal problem/experiment ticker belts above a structured 10-question neo-brutalist accordion',
    visualMetaphor: 'Live stream of real business bottlenecks resolved into clear answers',
    motionType: 'counter-scroll',
    primarySubject: 'Left-scrolling bottleneck belt + right-scrolling experiment belt + FAQ list',
    start: 'top 85%',
    end: 'bottom 15%',
    scrub: 0.3,
    pin: false,
    axis: 'X',
    depth: 2,
    maxOffset: 34,
    sequence: ['Top belt glides left', 'Bottom belt glides right', 'FAQ items expand with crisp height reveal'],
    media: 'Dual counter-scrolling card belts + interactive FAQ',
    fingerprint: {
      layoutChoreography: 'home-dual-belt-plus-faq',
      entrancePattern: 'opposing-horizontal-belts',
      movementAxis: 'bidirectional-x-opposing',
      pinningBehavior: 'unpinned-continuous-belts',
      scrubBehavior: 'marquee-plus-scroll-velocity',
      revealOrder: 'header-beltLeft-beltRight-faq',
      visualTransformation: 'counter-directional-shear',
      contentRelationship: 'bottlenecks-and-experiments-to-faq'
    }
  }),
  createSectionEntry({
    route: '/',
    sectionId: 'home-concentric-cta',
    purpose: 'Convert visitors into a conversation or Digital Growth Audit',
    currentLayout: 'Concentric dashed ellipses + 4 floating stage stickers + emblem + dual 3D buttons',
    newComposition: 'Radial concentric target stage where 4 corner stickers converge inward toward the AxonCtaEmblemSvg and action buttons',
    visualMetaphor: 'All 4 growth stages converging into one clear next step',
    motionType: 'content-convergence',
    primarySubject: '3 concentric dashed ellipses + 4 floating stickers + emblem + dual CTAs',
    start: 'top 80%',
    end: 'bottom bottom',
    scrub: 0.35,
    pin: false,
    axis: 'radial',
    depth: 3,
    maxOffset: 28,
    sequence: ['Ellipses scale into alignment', '4 corner stickers converge toward center', 'Emblem and 3D CTA buttons lock'],
    media: 'AxonFloatingStickerSvg x4 + AxonCtaEmblemSvg',
    fingerprint: {
      layoutChoreography: 'home-concentric-ellipses-cta',
      entrancePattern: 'corner-stickers-radial-inward',
      movementAxis: 'diagonal-inward-convergence',
      pinningBehavior: 'unpinned-radial-stage',
      scrubBehavior: 'scroll-and-cursor-convergence',
      revealOrder: 'ellipses-stickers-headline-emblem-buttons',
      visualTransformation: 'radial-focus-tightening',
      contentRelationship: '4stages-to-growth-opportunity-cta'
    }
  })
];

/**
 * 2. SOLUTIONS OVERVIEW PAGE (/solutions) — 6 Distinct Sections
 */
const SOLUTIONS_OVERVIEW_SECTIONS = [
  createSectionEntry({
    route: '/solutions',
    sectionId: 'solutions-overview-hero',
    purpose: 'Frame all AxonVortex capabilities as a 5-stage connected growth architecture',
    currentLayout: '3-column parallax sticker hero + 5-stage flow strip',
    newComposition: 'Connected system-layer hero where 5 stage cards link sequentially from Attract to Optimize',
    visualMetaphor: '5 architectural system layers snapping into a single growth circuit',
    motionType: 'connected-node-activation',
    primarySubject: 'Hero headline + 4 problem badges + 5-stage connected flow strip',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.35,
    pin: false,
    axis: 'XY',
    depth: 3,
    maxOffset: 34,
    sequence: ['Hero copy reveals', 'Flanking problem badges drift at dual speeds', '5 stage cards light up 01 -> 05'],
    media: 'AxonProblemBadge SVGs + 5-Stage Connected Flow Strip',
    fingerprint: {
      layoutChoreography: 'sol-overview-3col-plus-5strip',
      entrancePattern: 'sequential-circuit-ignition',
      movementAxis: 'horizontal-chain-plus-y-flanks',
      pinningBehavior: 'unpinned-layered-hero',
      scrubBehavior: 'flank-scrub-plus-node-stagger',
      revealOrder: 'crumb-headline-ctas-5stage-strip',
      visualTransformation: 'node-chain-sequential-illumination',
      contentRelationship: 'overview-to-5-system-stages'
    }
  }),
  createSectionEntry({
    route: '/solutions',
    sectionId: 'solutions-overview-architecture-map',
    purpose: 'Allow interactive inspection of how the 5 Solution Pillars connect',
    currentLayout: 'Interactive 2-column topology selector + blueprint preview',
    newComposition: 'Interactive system topology console pairing 5 pillar nodes with live local WebP/SVG architecture blueprints',
    visualMetaphor: 'Interactive master blueprint switchboard',
    motionType: 'diagram-construction',
    primarySubject: '5 pillar topology nodes + active blueprint inspector frame',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: false,
    pin: false,
    axis: 'X',
    depth: 2,
    maxOffset: 26,
    sequence: ['Left node rail slides in', 'Active pillar blueprint constructs on right', 'Service chips cascade'],
    media: 'Local WebP/SVG blueprints (/media/solutions/*/system-blueprint.webp)',
    fingerprint: {
      layoutChoreography: 'sol-overview-topology-switchboard',
      entrancePattern: 'left-rail-right-blueprint-construct',
      movementAxis: 'horizontal-split-docking',
      pinningBehavior: 'unpinned-interactive-console',
      scrubBehavior: 'threshold-blueprint-build',
      revealOrder: 'header-nodeRail-inspectorCopy-blueprintMedia',
      visualTransformation: 'blueprint-frame-unfold',
      contentRelationship: 'pillar-node-to-child-services'
    }
  }),
  createSectionEntry({
    route: '/solutions',
    sectionId: 'solutions-overview-sticky-folders',
    purpose: 'Present all 5 Core Solution Pillars + 06 Digital Growth Audit as tactile stacking folders',
    currentLayout: '6 sticky stacking folders with alternating left/center/right tabs',
    newComposition: '6-tier spatial folder stack where each folder reveals its Best-For criteria and connected system chain',
    visualMetaphor: '6 master solution dossiers opening through spatial depth',
    motionType: 'layer-separation',
    primarySubject: '6 sticky folder cards (Pillars 01–05 + 06 Growth Audit)',
    start: 'top 75%',
    end: 'bottom 15%',
    scrub: 0.4,
    pin: true,
    axis: 'Y',
    depth: 4,
    maxOffset: 32,
    sequence: ['Folders 01–06 stack with alternating tab alignments', 'Dark system chain window slides into focus per folder'],
    media: '6 Neo-Brutalist Folder Windows + System Chain Rails',
    fingerprint: {
      layoutChoreography: 'sol-overview-6folder-dossier-stack',
      entrancePattern: 'alternating-tab-spatial-stack',
      movementAxis: 'vertical-depth-compression',
      pinningBehavior: 'sticky-6card-cascade',
      scrubBehavior: 'progressive-card-compression',
      revealOrder: 'pillar01-02-03-04-05-audit06',
      visualTransformation: 'spatial-dossier-overstack',
      contentRelationship: 'pillar-summary-to-bestfor-and-chain'
    }
  }),
  createSectionEntry({
    route: '/solutions',
    sectionId: 'solutions-overview-problem-matcher',
    purpose: 'Route a visitor’s specific business challenge to the right solution path',
    currentLayout: '2-column dark section with 6 challenge quotes on left and recommendation card on right',
    newComposition: 'Interactive challenge-to-solution router with counter-scrolling columns and dynamic route highlighting',
    visualMetaphor: 'Diagnostic routing switchboard matching symptom to system',
    motionType: 'section-handoff',
    primarySubject: '6 challenge quote buttons + dynamic Recommended Solution panel',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 0.35,
    pin: false,
    axis: 'Y',
    depth: 2,
    maxOffset: 28,
    sequence: ['Challenge list rises on left', 'Recommendation card counter-glides on right', 'Clicking quote reroutes visible solution path'],
    media: 'Interactive Problem-Solver Matrix UI',
    fingerprint: {
      layoutChoreography: 'sol-overview-2col-diagnostic-router',
      entrancePattern: 'opposing-column-dock',
      movementAxis: 'vertical-counter-shear',
      pinningBehavior: 'unpinned-dual-column',
      scrubBehavior: 'counter-column-scrub',
      revealOrder: 'badge-h2-quoteList-recommendationPanel',
      visualTransformation: 'symptom-to-prescription-reroute',
      contentRelationship: 'business-challenge-to-recommended-pillar'
    }
  }),
  createSectionEntry({
    route: '/solutions',
    sectionId: 'solutions-overview-service-directory',
    purpose: 'Provide a spatial, category-filterable directory of all 15 individual service pages',
    currentLayout: '3-column grid of 15 service cards',
    newComposition: 'Category-filterable 15-service architectural grid with spatial wave reveal and pill filtering',
    visualMetaphor: 'Complete 15-module component library indexed by discipline',
    motionType: 'interface-construction',
    primarySubject: 'Category filter bar + 15 numbered service cards',
    start: 'top 82%',
    end: 'bottom 20%',
    scrub: false,
    pin: false,
    axis: 'XY',
    depth: 2,
    maxOffset: 24,
    sequence: ['Category filter bar snaps in', '15 service cards construct in diagonal 3-col wave', 'Category filter re-indexes grid'],
    media: '15 Color-Coded Service Cards',
    fingerprint: {
      layoutChoreography: 'sol-overview-15service-spatial-grid',
      entrancePattern: 'diagonal-matrix-wave',
      movementAxis: 'xy-grid-cascade',
      pinningBehavior: 'unpinned-filterable-grid',
      scrubBehavior: 'threshold-wave-stagger',
      revealOrder: 'header-filterBar-cards01to15',
      visualTransformation: 'spatial-category-reindexing',
      contentRelationship: 'discipline-filter-to-15-service-routes'
    }
  }),
  createSectionEntry({
    route: '/solutions',
    sectionId: 'solutions-overview-cta',
    purpose: 'Guide undecided visitors to start with a Digital Growth Audit',
    currentLayout: 'SubpageConcentricCta with dashed ellipses and dual buttons',
    newComposition: 'Converging solution lines drawing inward to the Digital Growth Audit entry point',
    visualMetaphor: 'All 5 solution paths converging into one diagnostic starting point',
    motionType: 'controlled-scale-depth',
    primarySubject: 'Concentric ellipses + floating stage stickers + audit CTA',
    start: 'top 85%',
    end: 'bottom bottom',
    scrub: 0.3,
    pin: false,
    axis: 'Z-scale',
    depth: 2,
    maxOffset: 24,
    sequence: ['Concentric rings scale from 0.96 to 1.02', 'Headline & yellow highlight tilt in', 'Dual 3D buttons elevate'],
    media: 'AxonCtaEmblemSvg + Concentric Ellipses',
    fingerprint: {
      layoutChoreography: 'sol-overview-concentric-audit-cta',
      entrancePattern: 'scale-depth-ring-lock',
      movementAxis: 'z-scale-inward',
      pinningBehavior: 'unpinned-footer-cta',
      scrubBehavior: 'gentle-scale-scrub',
      revealOrder: 'rings-headline-emblem-dualButtons',
      visualTransformation: 'depth-ring-focus',
      contentRelationship: 'undecided-visitor-to-growth-audit'
    }
  })
];

/**
 * 3. FIVE CORE SOLUTION PILLAR PAGES (/solutions/:pillarId) — 6 Sections Each = 30 Sections
 * Each pillar has distinct choreography tailored to its domain (Digital Marketing, AI & Automation, Websites & E-Commerce, Lead Generation, Digital Transformation)
 */
const PILLAR_MOTION_CONFIGS = {
  'digital-marketing': {
    heroMetaphor: 'Audience visibility signals traveling toward a central demand hub',
    heroMotion: 'content-convergence',
    heroAxis: 'XY',
    sigMetaphor: '4 horizontal marketing signal lanes converging at multi-speed into conversion',
    sigMotion: 'horizontal-narrative-rail',
    sigAxis: 'X',
    probMetaphor: 'Disconnected marketing channels drifting apart vs. unified strategy-to-measurement rail',
    probMotion: 'content-divergence',
    probAxis: 'X',
    subMetaphor: 'Content, paid social, search intent, and SEO cards activating with distinct channel badges',
    subMotion: 'connected-node-activation',
    subAxis: 'Y',
    appMetaphor: '4 marketing methodology steps synchronizing into a measurable demand loop',
    appMotion: 'timeline-advancement',
    appAxis: 'X',
    ctaMetaphor: 'Scattered attention signals converging into one marketing strategy action',
    ctaMotion: 'controlled-scale-depth',
    ctaAxis: 'radial'
  },
  'ai-automation': {
    heroMetaphor: 'Raw unstructured inputs transforming into structured AI actions',
    heroMotion: 'data-flow-animation',
    heroAxis: 'Y',
    sigMetaphor: '6-stage Input -> Context -> Logic -> Human Approval -> Action -> Feedback decision chain',
    sigMotion: 'pipeline-progression',
    sigAxis: 'Y',
    probMetaphor: 'Repetitive manual admin loop interrupted by a scrubbed automation spine',
    probMotion: 'before-after-transformation',
    probAxis: 'XY',
    subMetaphor: 'Chatbots, AI Agents, Workflow Automation, and Voice AI connecting into one control bus',
    subMotion: 'perspective-assembly',
    subAxis: 'Z-scale',
    appMetaphor: 'Human-in-the-loop checkpoints gating automated execution steps',
    appMotion: 'layer-separation',
    appAxis: 'Y',
    ctaMetaphor: 'Completed workflow returning measurable feedback into the next AI opportunity',
    ctaMotion: 'section-handoff',
    ctaAxis: 'Y'
  },
  'websites-ecommerce': {
    heroMetaphor: 'Structural wireframe evolving into a finished responsive digital experience',
    heroMotion: 'interface-construction',
    heroAxis: 'Y',
    sigMetaphor: '6-layer digital experience stack (Strategy -> Structure -> Interface -> Content -> Conversion -> Integration)',
    sigMotion: 'layer-separation',
    sigAxis: 'Y',
    probMetaphor: 'Unclear page fragments reorganizing into a 5-second value hierarchy',
    probMotion: 'progressive-clipping',
    probAxis: 'Y',
    subMetaphor: 'Websites, E-Commerce, Shopify, and Conversion Optimization transforming across viewports',
    subMotion: 'diagram-construction',
    subAxis: 'XY',
    appMetaphor: 'Architecture-to-launch steps assembling like modular UI blocks',
    appMotion: 'perspective-assembly',
    appAxis: 'Y',
    ctaMetaphor: 'Interface components snapping together into the final conversion action',
    ctaMotion: 'content-convergence',
    ctaAxis: 'Z-scale'
  },
  'lead-generation': {
    heroMetaphor: 'Targeted prospect signal entering a connected capture-and-qualification pipeline',
    heroMotion: 'pipeline-progression',
    heroAxis: 'Y',
    sigMetaphor: '7-stage opportunity spine with traveling lead signal indicator',
    sigMotion: 'svg-path-drawing',
    sigAxis: 'Y',
    probMetaphor: 'Leaky disconnected stages vs. sealed Audience -> Offer -> Page -> CRM -> Follow-Up chain',
    probMotion: 'before-after-transformation',
    probAxis: 'X',
    subMetaphor: 'Funnels, Landing Pages, Capture, CRM Routing, and Follow-Up separating noise from fit',
    subMotion: 'connected-node-activation',
    subAxis: 'XY',
    appMetaphor: 'Timed follow-up and qualification sequence advancing stage by stage',
    appMotion: 'timeline-advancement',
    appAxis: 'X',
    ctaMetaphor: 'Complete lead journey resolving into a qualified sales conversation',
    ctaMotion: 'controlled-scale-depth',
    ctaAxis: 'radial'
  },
  'digital-transformation': {
    heroMetaphor: 'Disconnected operational blocks reorganizing into a unified system architecture',
    heroMotion: 'perspective-assembly',
    heroAxis: 'XY',
    sigMetaphor: 'Evolving 6-layer system blueprint transitioning from Fragmented Silos to Connected Model',
    sigMotion: 'before-after-transformation',
    sigAxis: 'Y',
    probMetaphor: 'Spatially isolated legacy tools bridged by a scrubbed data-flow spine',
    probMotion: 'diagram-construction',
    probAxis: 'X',
    subMetaphor: 'CRM, Custom Software, Process Mapping, and Integration modules locking in perspective',
    subMotion: 'interface-construction',
    subAxis: 'Z-scale',
    appMetaphor: 'Priority roadmap stages reordering by business impact and operational readiness',
    appMotion: 'layer-separation',
    appAxis: 'Y',
    ctaMetaphor: 'Final connected enterprise architecture stabilizing around one roadmap',
    ctaMotion: 'content-convergence',
    ctaAxis: 'Y'
  }
};

const SOLUTION_PILLAR_SECTIONS = CORE_SOLUTIONS.flatMap((pillar) => {
  const cfg = PILLAR_MOTION_CONFIGS[pillar.id] || PILLAR_MOTION_CONFIGS['digital-marketing'];
  return [
    createSectionEntry({
      route: pillar.route,
      sectionId: `pillar-${pillar.id}-hero`,
      purpose: `Introduce Pillar ${pillar.index} (${pillar.title}) and interactive capability switcher`,
      currentLayout: 'SubpageParallaxHero with pillar switcher + PillarInteractiveMatrix workbench',
      newComposition: `${pillar.title} command hero with interactive sub-capability workbench and flanking problem stickers`,
      visualMetaphor: cfg.heroMetaphor,
      motionType: cfg.heroMotion,
      primarySubject: `${pillar.title} headline + PillarInteractiveMatrix + side stickers`,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.35,
      pin: false,
      axis: cfg.heroAxis,
      depth: 3,
      maxOffset: 32,
      sequence: ['Breadcrumb & pillar switcher lock', 'Headline types in', 'Interactive capability workbench unfolds'],
      media: 'PillarInteractiveMatrix + AxonProblemBadge SVGs',
      fingerprint: {
        layoutChoreography: `pillar-${pillar.id}-hero-workbench`,
        entrancePattern: `pillar-${pillar.id}-hero-entrance`,
        movementAxis: `${cfg.heroAxis}-hero-drift`,
        pinningBehavior: 'unpinned-pillar-hero',
        scrubBehavior: 'sticker-scrub-plus-workbench',
        revealOrder: 'crumbs-switcher-headline-matrix',
        visualTransformation: cfg.heroMotion,
        contentRelationship: `pillar-${pillar.id}-to-subcapabilities`
      }
    }),
    createSectionEntry({
      route: pillar.route,
      sectionId: `pillar-${pillar.id}-signature-stage`,
      purpose: `Visualize the signature system architecture of ${pillar.title}`,
      currentLayout: 'SolutionPillarSignatureStage with local WebP/SVG blueprint',
      newComposition: `Bespoke ${pillar.title} signature interactive stage paired with retina local system blueprint`,
      visualMetaphor: cfg.sigMetaphor,
      motionType: cfg.sigMotion,
      primarySubject: `${pillar.title} signature interactive sequence + /media/pillars/${pillar.id}/motion-loop.webm + /media/pillars/${pillar.id}/hero-system.webp`,
      start: 'top 78%',
      end: 'bottom 22%',
      scrub: 0.4,
      pin: false,
      axis: cfg.sigAxis,
      depth: 3,
      maxOffset: 34,
      sequence: ['Section header reveals', 'Signature interactive nodes/lanes animate along axis', 'Looping WebM clip & local blueprint lock in depth'],
      media: `/media/pillars/${pillar.id}/motion-loop.webm + /media/pillars/${pillar.id}/hero-system.{webp,svg}`,
      fingerprint: {
        layoutChoreography: `pillar-${pillar.id}-signature-architecture`,
        entrancePattern: `pillar-${pillar.id}-stage-build`,
        movementAxis: `${cfg.sigAxis}-signature-axis`,
        pinningBehavior: 'unpinned-signature-stage',
        scrubBehavior: 'axis-scrub-plus-interactive-state',
        revealOrder: 'pill-h2-interactiveStage-localBlueprint',
        visualTransformation: cfg.sigMotion,
        contentRelationship: `pillar-${pillar.id}-architecture-to-services`
      }
    }),
    createSectionEntry({
      route: pillar.route,
      sectionId: `pillar-${pillar.id}-problem-system`,
      purpose: `Contrast the core business problem in ${pillar.title} with the connected system chain`,
      currentLayout: '2-column dark problem/best-for panel + ScrollChainBanner',
      newComposition: 'Opposing problem/fit panels above a scroll-scrubbed connected system flow rail',
      visualMetaphor: cfg.probMetaphor,
      motionType: cfg.probMotion,
      primarySubject: 'Problem panel + Best-For checklist + ScrollChainBanner progress fill',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 0.4,
      pin: false,
      axis: cfg.probAxis,
      depth: 2,
      maxOffset: 28,
      sequence: ['Problem panel and Best-For panel counter-glide', 'System chain progress bar scrubs 0% -> 100%', 'Chain nodes illuminate'],
      media: 'ScrollChainBanner + Best-For Checklist',
      fingerprint: {
        layoutChoreography: `pillar-${pillar.id}-problem-and-chain`,
        entrancePattern: `pillar-${pillar.id}-contrast-entry`,
        movementAxis: `${cfg.probAxis}-problem-chain`,
        pinningBehavior: 'unpinned-dark-diagnostic',
        scrubBehavior: 'dual-panel-plus-rail-scrub',
        revealOrder: 'problemPanel-bestForPanel-scrubChain',
        visualTransformation: cfg.probMotion,
        contentRelationship: `pillar-${pillar.id}-problem-to-system-chain`
      }
    }),
    createSectionEntry({
      route: pillar.route,
      sectionId: `pillar-${pillar.id}-subservices-breakdown`,
      purpose: `Break down every sub-service and deliverable inside ${pillar.title}`,
      currentLayout: '2-column grid of sub-service cards with deliverables checklists',
      newComposition: `Numbered capability dossiers for ${pillar.title} with direct service-page routing`,
      visualMetaphor: cfg.subMetaphor,
      motionType: cfg.subMotion,
      primarySubject: `${pillar.subServicesDetail.length} sub-service breakdown cards + deliverable chips`,
      start: 'top 82%',
      end: 'bottom 20%',
      scrub: false,
      pin: false,
      axis: cfg.subAxis,
      depth: 2,
      maxOffset: 26,
      sequence: ['Section header enters', 'Sub-service cards reveal with alternating spatial offset', 'Deliverable check chips stagger in'],
      media: 'Sub-Service Breakdown Cards + Deliverable Grids',
      fingerprint: {
        layoutChoreography: `pillar-${pillar.id}-subservice-dossiers`,
        entrancePattern: `pillar-${pillar.id}-dossier-cascade`,
        movementAxis: `${cfg.subAxis}-dossier-axis`,
        pinningBehavior: 'unpinned-subservices-grid',
        scrubBehavior: 'viewport-dossier-stagger',
        revealOrder: 'header-subserviceCards-deliverableChips',
        visualTransformation: cfg.subMotion,
        contentRelationship: `pillar-${pillar.id}-to-individual-service-pages`
      }
    }),
    createSectionEntry({
      route: pillar.route,
      sectionId: `pillar-${pillar.id}-approach-steps`,
      purpose: `Explain the 4-step methodology for executing ${pillar.title}`,
      currentLayout: '4-card step grid on cream background',
      newComposition: `Chronological 4-step execution rail for ${pillar.title}`,
      visualMetaphor: cfg.appMetaphor,
      motionType: cfg.appMotion,
      primarySubject: '4 pillar approach step cards',
      start: 'top 84%',
      end: 'bottom 22%',
      scrub: false,
      pin: false,
      axis: cfg.appAxis,
      depth: 2,
      maxOffset: 24,
      sequence: ['Step 01 -> 02 -> 03 -> 04 advance sequentially along the execution rail'],
      media: 'Step Progression Cards',
      fingerprint: {
        layoutChoreography: `pillar-${pillar.id}-4step-methodology`,
        entrancePattern: `pillar-${pillar.id}-step-progression`,
        movementAxis: `${cfg.appAxis}-step-rail`,
        pinningBehavior: 'unpinned-4step-row',
        scrubBehavior: 'sequential-step-trigger',
        revealOrder: 'step01-step02-step03-step04',
        visualTransformation: cfg.appMotion,
        contentRelationship: `pillar-${pillar.id}-methodology-sequence`
      }
    }),
    createSectionEntry({
      route: pillar.route,
      sectionId: `pillar-${pillar.id}-cta`,
      purpose: `Convert visitors on ${pillar.title} into a project enquiry or Growth Audit`,
      currentLayout: 'SubpageConcentricCta',
      newComposition: `Converging concentric action stage tailored to ${pillar.title}`,
      visualMetaphor: cfg.ctaMetaphor,
      motionType: cfg.ctaMotion,
      primarySubject: 'Concentric ellipses + emblem + pillar primary CTA',
      start: 'top 85%',
      end: 'bottom bottom',
      scrub: 0.3,
      pin: false,
      axis: cfg.ctaAxis,
      depth: 2,
      maxOffset: 24,
      sequence: ['Ellipses align', 'Pillar headline & highlight lock', 'Primary & secondary 3D CTAs rise'],
      media: 'AxonCtaEmblemSvg + Floating Stage Stickers',
      fingerprint: {
        layoutChoreography: `pillar-${pillar.id}-concentric-cta`,
        entrancePattern: `pillar-${pillar.id}-cta-convergence`,
        movementAxis: `${cfg.ctaAxis}-cta-axis`,
        pinningBehavior: 'unpinned-pillar-cta',
        scrubBehavior: 'cta-depth-scrub',
        revealOrder: 'ellipses-headline-emblem-ctaButtons',
        visualTransformation: cfg.ctaMotion,
        contentRelationship: `pillar-${pillar.id}-to-audit-modal`
      }
    })
  ];
});

/**
 * 4. FIFTEEN INDIVIDUAL SERVICE SUBPAGES (/services/:slug) — 6 Sections Each = 90 Sections
 * Every single service page has its own hero composition, 6s motion loop + WebM clip, archetype journey,
 * capabilities + supporting static visual, prev/next handoff, and CTA — with 0 duplicate fingerprints.
 */
const SERVICE_HERO_COMPOSITIONS = [
  'editorial-right',
  'editorial-left',
  'banner-over-split',
  'blueprint-command',
  'asymmetric-studio'
];

const SERVICE_MOTION_TYPES_CYCLE = [
  'content-divergence',
  'before-after-transformation',
  'connected-node-activation',
  'svg-path-drawing',
  'data-flow-animation',
  'pipeline-progression',
  'diagram-construction',
  'scroll-controlled-media',
  'interface-construction',
  'horizontal-narrative-rail',
  'perspective-assembly',
  'content-convergence',
  'layer-separation',
  'progressive-clipping',
  'timeline-advancement'
];

const INDIVIDUAL_SERVICE_SECTIONS = SERVICES_CATALOG.flatMap((srv, idx) => {
  const route = `/services/${srv.slug}`;
  const heroComp = SERVICE_HERO_COMPOSITIONS[idx % SERVICE_HERO_COMPOSITIONS.length];
  const primaryMotion = SERVICE_MOTION_TYPES_CYCLE[idx % SERVICE_MOTION_TYPES_CYCLE.length];
  const secondaryMotion =
    ANIMATION_VOCABULARY[(idx * 3 + 5) % ANIMATION_VOCABULARY.length];
  const tertiaryMotion =
    ANIMATION_VOCABULARY[(idx * 7 + 11) % ANIMATION_VOCABULARY.length];

  return [
    createSectionEntry({
      route,
      sectionId: `srv-${srv.slug}-hero`,
      purpose: `Introduce Service ${srv.number} (${srv.title}) with bespoke interactive hero workbench`,
      currentLayout: `Split hero (${heroComp}) with sibling switcher + ServiceInteractiveVisual`,
      newComposition: `${heroComp} hero pairing ${srv.title} positioning with its live interactive simulator`,
      visualMetaphor: `${srv.title} interactive control studio (${srv.flow.join(' -> ')})`,
      motionType: primaryMotion,
      primarySubject: `${srv.title} H1 + interactive workbench card`,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.35,
      pin: false,
      axis: idx % 2 === 0 ? 'Y' : 'XY',
      depth: 3,
      maxOffset: 30,
      sequence: [
        'Breadcrumb & sibling pills align',
        `Left copy column (-14px) and right ${srv.title} workbench (+22px) counter-move`,
        'Interactive tabs respond in 180ms'
      ],
      media: `Bespoke ${srv.title} Interactive Workbench UI`,
      fingerprint: {
        layoutChoreography: `srv-${srv.slug}-hero-${heroComp}`,
        entrancePattern: `srv-${srv.slug}-workbench-dock`,
        movementAxis: idx % 2 === 0 ? 'y-counter-split' : 'xy-asymmetric-split',
        pinningBehavior: 'unpinned-service-hero',
        scrubBehavior: 'dual-column-counter-scrub',
        revealOrder: `crumbs-siblings-copy-${srv.slug}-workbench`,
        visualTransformation: primaryMotion,
        contentRelationship: `srv-${srv.slug}-problem-to-interactive-proof`
      }
    }),
    createSectionEntry({
      route,
      sectionId: `srv-${srv.slug}-motion-loop`,
      purpose: `Explain how ${srv.title} works through a 6-second looping sequence, WebM clip, and local architecture diagram`,
      currentLayout: 'ServiceMotionLoopStage split player + local WebP/SVG architecture diagram',
      newComposition: '5-frame interactive 6s system player + muted looping WebM motion clip + retina architecture blueprint',
      visualMetaphor: `Live ${srv.title} signal progressing through ${srv.flow.join(' -> ')}`,
      motionType: 'scroll-controlled-media',
      primarySubject: `6s loop player + /media/services/${srv.slug}/motion-loop.webm + /media/services/${srv.slug}/architecture-diagram.webp`,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 0.35,
      pin: false,
      axis: 'X',
      depth: 3,
      maxOffset: 28,
      sequence: [
        'Top control bar reveals with Play/Pause toggle',
        '5-frame sequence + WebM loop auto-play when in viewport and pause offscreen',
        'Right architecture diagram reveals with depth offset'
      ],
      media: `/media/services/${srv.slug}/motion-loop.webm + /media/services/${srv.slug}/architecture-diagram.{webp,svg}`,
      fingerprint: {
        layoutChoreography: `srv-${srv.slug}-6s-loop-and-blueprint`,
        entrancePattern: `srv-${srv.slug}-player-plus-diagram`,
        movementAxis: 'horizontal-conduit-plus-y-diagram',
        pinningBehavior: 'intersection-observer-media-stage',
        scrubBehavior: '6s-state-loop-plus-scroll-entry',
        revealOrder: `topbar-5framePlayer-webmClip-${srv.slug}-diagram`,
        visualTransformation: 'temporal-node-progression',
        contentRelationship: `srv-${srv.slug}-5frames-to-architecture-blueprint`
      }
    }),
    createSectionEntry({
      route,
      sectionId: `srv-${srv.slug}-archetype-journey`,
      purpose: `Diagnose the bottleneck solved by ${srv.title} and walk through its stage-by-stage system flow`,
      currentLayout: 'Domain archetype section (Funnel Waterfall / SEO Staircase / AI Console / Contrast Duo / CRM Board)',
      newComposition: `Domain-specific interactive journey stage for ${srv.title} (${srv.flow.length} connected stages)`,
      visualMetaphor: `Stage-by-stage operational transformation inside ${srv.title}`,
      motionType: secondaryMotion,
      primarySubject: `${srv.title} stage progression interactive model`,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 0.3,
      pin: false,
      axis: idx % 3 === 0 ? 'X' : idx % 3 === 1 ? 'Y' : 'XY',
      depth: 2,
      maxOffset: 28,
      sequence: [
        'Problem statement banner reveals',
        `${srv.flow.length} interactive stage modules animate in domain formation`,
        'Active stage inspector updates on click'
      ],
      media: `Interactive ${srv.title} Stage Explorer`,
      fingerprint: {
        layoutChoreography: `srv-${srv.slug}-archetype-stage`,
        entrancePattern: `srv-${srv.slug}-stage-formation`,
        movementAxis: `srv-${srv.slug}-axis-${idx % 3}`,
        pinningBehavior: 'unpinned-archetype-workbench',
        scrubBehavior: 'stage-stagger-plus-inspector',
        revealOrder: `header-problem-${srv.slug}-stages-inspector`,
        visualTransformation: secondaryMotion,
        contentRelationship: `srv-${srv.slug}-bottleneck-to-flow-stages`
      }
    }),
    createSectionEntry({
      route,
      sectionId: `srv-${srv.slug}-capabilities-fit`,
      purpose: `Present all ${srv.whatWeDo.length} capabilities, buyer readiness checklist, and supporting static visual for ${srv.title}`,
      currentLayout: 'Capabilities ledger/bento + Who It Is For checklist + supporting static diagram',
      newComposition: `${srv.whatWeDo.length}-module capability ledger paired with interactive fit checklist and local supporting-visual.webp`,
      visualMetaphor: `Complete deliverable specification and before/after impact for ${srv.title}`,
      motionType: tertiaryMotion,
      primarySubject: `${srv.whatWeDo.length} capability cards + fit checklist + /media/services/${srv.slug}/supporting-visual.webp`,
      start: 'top 82%',
      end: 'bottom 20%',
      scrub: false,
      pin: false,
      axis: 'Y',
      depth: 2,
      maxOffset: 26,
      sequence: [
        'Capability modules assemble sequentially',
        'Supporting static visual (/media/services/' + srv.slug + '/supporting-visual.webp) reveals',
        'Interactive readiness checklist items toggle on click'
      ],
      media: `/media/services/${srv.slug}/supporting-visual.{webp,svg}`,
      fingerprint: {
        layoutChoreography: `srv-${srv.slug}-capabilities-and-supporting-visual`,
        entrancePattern: `srv-${srv.slug}-ledger-plus-visual`,
        movementAxis: 'vertical-ledger-and-card-lock',
        pinningBehavior: 'unpinned-capability-ledger',
        scrubBehavior: 'threshold-module-assembly',
        revealOrder: `capabilities-supportingVisual-${srv.slug}-fitChecklist`,
        visualTransformation: tertiaryMotion,
        contentRelationship: `srv-${srv.slug}-deliverables-to-buyer-fit`
      }
    }),
    createSectionEntry({
      route,
      sectionId: `srv-${srv.slug}-related-navigation`,
      purpose: `Connect ${srv.title} to adjacent services in ${srv.category} and Prev/Next service handoff`,
      currentLayout: 'Prev/Next service bar + related category services grid',
      newComposition: 'Bidirectional service handoff rail + sibling system cards',
      visualMetaphor: `Seamless system handoff from ${srv.title} to connected capabilities`,
      motionType: 'section-handoff',
      primarySubject: 'Prev/Next service cards + related category service cards',
      start: 'top 85%',
      end: 'bottom 20%',
      scrub: false,
      pin: false,
      axis: 'X',
      depth: 1,
      maxOffset: 22,
      sequence: ['Prev card slides from left', 'Next card slides from right', 'Related category cards rise in 3-col grid'],
      media: 'Prev/Next Service Cards + Sibling Cards',
      fingerprint: {
        layoutChoreography: `srv-${srv.slug}-handoff-and-siblings`,
        entrancePattern: `srv-${srv.slug}-opposing-prev-next`,
        movementAxis: 'bidirectional-x-handoff',
        pinningBehavior: 'unpinned-navigation-rail',
        scrubBehavior: 'threshold-handoff-reveal',
        revealOrder: `prevCard-nextCard-${srv.slug}-relatedGrid`,
        visualTransformation: 'horizontal-sibling-docking',
        contentRelationship: `srv-${srv.slug}-to-adjacent-services`
      }
    }),
    createSectionEntry({
      route,
      sectionId: `srv-${srv.slug}-cta`,
      purpose: `Convert visitors on ${srv.title} with a service-specific CTA journey`,
      currentLayout: 'SubpageConcentricCta',
      newComposition: `Concentric target CTA customized for ${srv.title} (${srv.cta})`,
      visualMetaphor: `${srv.title} system converging into an immediate project or audit action`,
      motionType: 'content-convergence',
      primarySubject: `Concentric rings + ${srv.title} headline + ${srv.cta} 3D button`,
      start: 'top 85%',
      end: 'bottom bottom',
      scrub: 0.3,
      pin: false,
      axis: 'radial',
      depth: 2,
      maxOffset: 24,
      sequence: ['Concentric ellipses align', 'Service headline & yellow highlight lock', '3D action buttons rise'],
      media: 'AxonCtaEmblemSvg + Concentric Ellipses',
      fingerprint: {
        layoutChoreography: `srv-${srv.slug}-concentric-cta`,
        entrancePattern: `srv-${srv.slug}-radial-cta-lock`,
        movementAxis: 'radial-inward-cta',
        pinningBehavior: 'unpinned-service-cta',
        scrubBehavior: 'gentle-radial-scrub',
        revealOrder: `rings-headline-emblem-${srv.slug}-buttons`,
        visualTransformation: 'concentric-target-lock',
        contentRelationship: `srv-${srv.slug}-to-audit-or-contact`
      }
    })
  ];
});

/**
 * 5. COMPANY, DIAGNOSTIC, EDITORIAL & CONVERSION PAGES (/approach, /about, /growth-audit, /insights, /contact) — 20 Sections
 */
const COMPANY_SECTIONS = [
  // /approach (5 sections)
  createSectionEntry({
    route: '/approach',
    sectionId: 'approach-hero',
    purpose: 'Establish the Strategy Before Technology methodology',
    currentLayout: 'SubpageParallaxHero with flanking problem stickers',
    newComposition: 'Architectural methodology hero with flanking problem stickers and downward hand-drawn arrows',
    visualMetaphor: 'Strategic lens focusing before any tool or tactic is chosen',
    motionType: 'masked-headline-reveal',
    primarySubject: 'Approach H1 + flanking stickers + HandDrawnArrows',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.35,
    pin: false,
    axis: 'Y',
    depth: 3,
    maxOffset: 30,
    sequence: ['Breadcrumb & mono pill lock', 'Typewriter headline reveals', 'Hand-drawn arrows draw downward'],
    media: 'AxonProblemBadge SVGs + HandDrawnArrows',
    fingerprint: {
      layoutChoreography: 'approach-3col-strategy-hero',
      entrancePattern: 'masked-serif-plus-arrows',
      movementAxis: 'vertical-flank-counter',
      pinningBehavior: 'unpinned-approach-hero',
      scrubBehavior: 'flank-scrub-plus-arrow-draw',
      revealOrder: 'crumbs-pill-h1-ctas-arrows',
      visualTransformation: 'strategy-lens-focus',
      contentRelationship: 'strategy-before-technology-intro'
    }
  }),
  createSectionEntry({
    route: '/approach',
    sectionId: 'approach-problem-philosophy',
    purpose: 'Contrast tool-first failure with Problem-First Philosophy + Human + AI + Data-Informed decisions',
    currentLayout: '2-column dark section + ScrollChainBanner (The AxonVortex Growth Loop)',
    newComposition: 'Opposing Problem-First and Human+AI manifesto panels above the scrubbed 5-node Growth Loop rail',
    visualMetaphor: 'Human strategic judgment and AI execution locking into one continuous loop',
    motionType: 'counter-scroll',
    primarySubject: 'Problem-First panel + Human+AI panel + Growth Loop scrubbed rail',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 0.4,
    pin: false,
    axis: 'Y',
    depth: 2,
    maxOffset: 28,
    sequence: ['Left dark panel rises', 'Right cream panel counter-glides', 'Growth Loop progress rail scrubs 0% -> 100%'],
    media: 'ScrollChainBanner + Dual Manifesto Panels',
    fingerprint: {
      layoutChoreography: 'approach-dual-manifesto-plus-loop-rail',
      entrancePattern: 'opposing-manifesto-columns',
      movementAxis: 'vertical-counter-glide',
      pinningBehavior: 'unpinned-dark-manifesto',
      scrubBehavior: 'column-shear-plus-rail-scrub',
      revealOrder: 'problemPanel-humanAiPanel-growthLoopRail',
      visualTransformation: 'dual-system-docking',
      contentRelationship: 'philosophy-to-growth-loop'
    }
  }),
  createSectionEntry({
    route: '/approach',
    sectionId: 'approach-maze-comparison',
    purpose: 'Demonstrate Tool-First Silos vs. Problem-First AxonVortex System interactively',
    currentLayout: 'Interactive Maze toggle + AxonMazeComparisonSvg stage',
    newComposition: 'Interactive labyrinth-bypass stage where toggling or scrolling pierces straight through tool-first noise',
    visualMetaphor: 'Problem-first strategy cutting straight through tool-first complexity',
    motionType: 'before-after-transformation',
    primarySubject: 'Maze toggle bar + AxonMazeComparisonSvg + AxonMarkerOrbSvg',
    start: 'top 78%',
    end: 'bottom 22%',
    scrub: 0.35,
    pin: false,
    axis: 'X',
    depth: 3,
    maxOffset: 28,
    sequence: ['Toggle bar locks', 'Maze blurs as straight green vector extends across stage', 'Marker orb reaches GROWTH'],
    media: 'AxonMazeComparisonSvg + AxonMarkerOrbSvg',
    fingerprint: {
      layoutChoreography: 'approach-interactive-maze-bypass',
      entrancePattern: 'vector-pierce-labyrinth',
      movementAxis: 'horizontal-vector-bypass',
      pinningBehavior: 'unpinned-interactive-maze',
      scrubBehavior: 'toggle-and-scroll-vector',
      revealOrder: 'header-toggleBar-mazeSvg-bypassVector-orb',
      visualTransformation: 'noise-to-clarity-bypass',
      contentRelationship: 'tool-first-noise-vs-problem-first-system'
    }
  }),
  createSectionEntry({
    route: '/approach',
    sectionId: 'approach-seven-step-framework',
    purpose: 'Walk through the 7-Step AxonVortex Framework where each step has its own visual mechanic, plus Growth Loop & 6 Principles',
    currentLayout: 'Scrubbed progress bar + 7 step cards + interactive Growth Loop box + 6 Operating Principles',
    newComposition: '7-stage bespoke methodology matrix where each step (Understand, Diagnose, Strategize, Create, Automate, Measure, Improve) renders its own micro-diagram mechanic',
    visualMetaphor: '7 distinct engineering stages progressing from raw understanding to continuous improvement',
    motionType: 'pipeline-progression',
    primarySubject: '7 bespoke methodology step cards + interactive 5-node Growth Loop + 6 Operating Principles',
    start: 'top 80%',
    end: 'bottom 15%',
    scrub: 0.4,
    pin: false,
    axis: 'XY',
    depth: 3,
    maxOffset: 28,
    sequence: [
      'Scrubbed progress bar fills across the 7 steps',
      '01 Understand uncovers layers -> 02 Diagnose isolates target -> 03 Strategize aligns roadmap -> 04 Create assembles blocks -> 05 Automate pulses conduit -> 06 Measure arcs feedback -> 07 Improve reorders bars',
      'Interactive Growth Loop & 6 Operating Principles lock below'
    ],
    media: '7 Bespoke Step Micro-Diagrams + Interactive Growth Loop',
    fingerprint: {
      layoutChoreography: 'approach-7step-bespoke-mechanics-plus-principles',
      entrancePattern: '7mode-differentiated-step-sequence',
      movementAxis: 'xy-progressive-methodology',
      pinningBehavior: 'unpinned-framework-matrix',
      scrubBehavior: 'progress-rail-plus-7mechanics',
      revealOrder: 'rail-7bespokeSteps-interactiveLoop-6principles',
      visualTransformation: '7stage-mechanic-differentiation',
      contentRelationship: '7steps-to-loop-to-6principles'
    }
  }),
  createSectionEntry({
    route: '/approach',
    sectionId: 'approach-cta',
    purpose: 'Invite visitors to start with the problem, not the tool',
    currentLayout: 'SubpageConcentricCta',
    newComposition: 'Concentric strategy-first CTA stage',
    visualMetaphor: 'Problem diagnosis converging into a clear starting action',
    motionType: 'content-convergence',
    primarySubject: 'Concentric ellipses + Start With a Growth Audit CTA',
    start: 'top 85%',
    end: 'bottom bottom',
    scrub: 0.3,
    pin: false,
    axis: 'radial',
    depth: 2,
    maxOffset: 24,
    sequence: ['Concentric rings align', 'Headline & highlight lock', 'Dual CTA buttons elevate'],
    media: 'AxonCtaEmblemSvg',
    fingerprint: {
      layoutChoreography: 'approach-concentric-cta',
      entrancePattern: 'approach-radial-lock',
      movementAxis: 'radial-inward-approach',
      pinningBehavior: 'unpinned-approach-cta',
      scrubBehavior: 'gentle-radial-scrub',
      revealOrder: 'ellipses-headline-emblem-buttons',
      visualTransformation: 'problem-to-action-focus',
      contentRelationship: 'approach-to-growth-audit'
    }
  }),

  // /about (5 sections)
  createSectionEntry({
    route: '/about',
    sectionId: 'about-hero',
    purpose: 'Introduce AxonVortex’s origin story: building from zero in public with honesty',
    currentLayout: 'SubpageParallaxHero',
    newComposition: 'Restrained editorial narrative hero with chronological origin framing',
    visualMetaphor: 'Open notebook page starting from zero without agency hype',
    motionType: 'line-by-line-editorial',
    primarySubject: 'About H1 + intro narrative + flanking badges',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.3,
    pin: false,
    axis: 'Y',
    depth: 2,
    maxOffset: 24,
    sequence: ['Breadcrumb & pill settle', 'Headline and narrative paragraphs reveal line by line', 'Action buttons rise'],
    media: 'Editorial Typography + AxonProblemBadge SVGs',
    fingerprint: {
      layoutChoreography: 'about-editorial-origin-hero',
      entrancePattern: 'chronological-line-reveal',
      movementAxis: 'gentle-vertical-editorial',
      pinningBehavior: 'unpinned-editorial-hero',
      scrubBehavior: 'restrained-editorial-scrub',
      revealOrder: 'crumbs-pill-h1-intro-actions',
      visualTransformation: 'editorial-page-unfold',
      contentRelationship: 'building-from-zero-positioning'
    }
  }),
  createSectionEntry({
    route: '/about',
    sectionId: 'about-why-chapters',
    purpose: 'Explain why AxonVortex exists and present the 5-Chapter Brand Story progression',
    currentLayout: '2-column dark manifesto + 5-chapter story progression strip',
    newComposition: 'Dual manifesto panels followed by a 5-chapter chronological progression (Origin -> Philosophy -> Building in Public -> Human + AI -> Future Direction)',
    visualMetaphor: '5 chronological chapters unfolding along an editorial timeline',
    motionType: 'timeline-advancement',
    primarySubject: 'Why Exists panel + Building in Public panel + 5 Chapter cards',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 0.35,
    pin: false,
    axis: 'X',
    depth: 2,
    maxOffset: 24,
    sequence: ['Dual manifesto panels dock', 'Chapters 01 -> 05 advance chronologically from left to right'],
    media: '5-Chapter Editorial Timeline Strip',
    fingerprint: {
      layoutChoreography: 'about-manifesto-plus-5chapters',
      entrancePattern: 'chronological-5chapter-advance',
      movementAxis: 'horizontal-timeline-progression',
      pinningBehavior: 'unpinned-chapter-timeline',
      scrubBehavior: 'chapter-stagger-scrub',
      revealOrder: 'whyPanel-publicPanel-chapters01to05',
      visualTransformation: 'chronological-chapter-unfold',
      contentRelationship: 'origin-to-future-direction'
    }
  }),
  createSectionEntry({
    route: '/about',
    sectionId: 'about-beliefs-contrast',
    purpose: 'Present the 4 Foundational Beliefs and contrast What We Don’t Believe In vs. What We Do Believe In',
    currentLayout: '4 belief cards + 2-column Do/Don’t contrast cards',
    newComposition: '4 layered principle cards above opposing red-tinted (Don’t Believe) and cream-mint (Do Believe) contrast panels',
    visualMetaphor: 'Separating agency hype from grounded engineering principles',
    motionType: 'layer-separation',
    primarySubject: '4 Belief cards + Don’t Believe vs. Do Believe contrast panels',
    start: 'top 82%',
    end: 'bottom 20%',
    scrub: false,
    pin: false,
    axis: 'XY',
    depth: 2,
    maxOffset: 24,
    sequence: ['4 Foundational Belief cards layer in', 'Don’t Believe panel separates left', 'Do Believe panel locks right'],
    media: '4 Belief Cards + Opposing Contrast Panels',
    fingerprint: {
      layoutChoreography: 'about-4beliefs-plus-opposing-contrast',
      entrancePattern: 'principle-layer-then-opposing-split',
      movementAxis: 'xy-opposing-separation',
      pinningBehavior: 'unpinned-principles-section',
      scrubBehavior: 'threshold-layer-and-split',
      revealOrder: 'beliefs01to04-dontBelieveCard-doBelieveCard',
      visualTransformation: 'hype-vs-principle-separation',
      contentRelationship: '4beliefs-to-operating-commitments'
    }
  }),
  createSectionEntry({
    route: '/about',
    sectionId: 'about-faq-accordion',
    purpose: 'Answer all 10 foundational questions about AxonVortex honestly',
    currentLayout: '10-question accordion list on cream background',
    newComposition: 'Numbered 10-question editorial ledger with progressive answer unfolding',
    visualMetaphor: 'Open-book Q&A ledger',
    motionType: 'progressive-clipping',
    primarySubject: '10 numbered FAQ accordion items',
    start: 'top 84%',
    end: 'bottom 20%',
    scrub: false,
    pin: false,
    axis: 'Y',
    depth: 1,
    maxOffset: 18,
    sequence: ['Section header settles', '10 FAQ rows reveal progressively', 'Selected question unclips answer smoothly'],
    media: '10-Item Neo-Brutalist Accordion',
    fingerprint: {
      layoutChoreography: 'about-10faq-editorial-ledger',
      entrancePattern: 'progressive-ledger-unclip',
      movementAxis: 'vertical-accordion-unfold',
      pinningBehavior: 'unpinned-faq-list',
      scrubBehavior: 'threshold-row-stagger',
      revealOrder: 'header-faq01to10',
      visualTransformation: 'height-clip-reveal',
      contentRelationship: '10questions-to-honest-answers'
    }
  }),
  createSectionEntry({
    route: '/about',
    sectionId: 'about-cta',
    purpose: 'Invite visitors to build with AxonVortex from the ground up',
    currentLayout: 'SubpageConcentricCta',
    newComposition: 'Restrained concentric vision CTA',
    visualMetaphor: 'Shared partnership starting from an honest conversation',
    motionType: 'controlled-scale-depth',
    primarySubject: 'Concentric ellipses + Talk to Us / Growth Audit CTAs',
    start: 'top 85%',
    end: 'bottom bottom',
    scrub: 0.3,
    pin: false,
    axis: 'Z-scale',
    depth: 2,
    maxOffset: 20,
    sequence: ['Ellipses settle', 'Headline and highlight lock', 'Dual CTA buttons rise'],
    media: 'AxonCtaEmblemSvg',
    fingerprint: {
      layoutChoreography: 'about-concentric-partnership-cta',
      entrancePattern: 'restrained-scale-lock',
      movementAxis: 'z-scale-gentle',
      pinningBehavior: 'unpinned-about-cta',
      scrubBehavior: 'gentle-depth-scrub',
      revealOrder: 'ellipses-headline-emblem-buttons',
      visualTransformation: 'vision-expansion-lock',
      contentRelationship: 'about-story-to-contact'
    }
  }),

  // /growth-audit (4 sections)
  createSectionEntry({
    route: '/growth-audit',
    sectionId: 'audit-hero',
    purpose: 'Frame the Digital Growth Audit: Discover -> Diagnose -> Prioritize -> Recommend',
    currentLayout: 'SubpageParallaxHero',
    newComposition: 'Diagnostic scan hero with flanking problem badges',
    visualMetaphor: 'System-wide diagnostic scan identifying where value is leaking',
    motionType: 'diagram-construction',
    primarySubject: 'Growth Audit H1 + flanking diagnostic stickers',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.35,
    pin: false,
    axis: 'Y',
    depth: 2,
    maxOffset: 24,
    sequence: ['Diagnostic pill & breadcrumb lock', 'Headline scans in', 'Flanking problem badges drift'],
    media: 'AxonProblemBadge SVGs + HandDrawnArrows',
    fingerprint: {
      layoutChoreography: 'audit-diagnostic-scan-hero',
      entrancePattern: 'scanline-headline-entry',
      movementAxis: 'vertical-diagnostic-scan',
      pinningBehavior: 'unpinned-audit-hero',
      scrubBehavior: 'scan-scrub',
      revealOrder: 'crumbs-pill-h1-intro-arrows',
      visualTransformation: 'diagnostic-scan-sweep',
      contentRelationship: 'audit-overview-to-6areas'
    }
  }),
  createSectionEntry({
    route: '/growth-audit',
    sectionId: 'audit-six-areas',
    purpose: 'Detail the 6 Core Areas evaluated in the Digital Growth Audit',
    currentLayout: '6-card grid on white background',
    newComposition: '6 diagnostic inspection modules opening with progressive scan badges (AREA 01–06)',
    visualMetaphor: '6 diagnostic lenses inspecting presence, social, website, marketing, leads, and AI',
    motionType: 'connected-node-activation',
    primarySubject: '6 evaluation area cards (AREA 01 to AREA 06)',
    start: 'top 82%',
    end: 'bottom 20%',
    scrub: false,
    pin: false,
    axis: 'XY',
    depth: 2,
    maxOffset: 22,
    sequence: ['Area 01 -> Area 06 diagnostic cards activate in a 3x2 inspection sequence'],
    media: '6 Diagnostic Area Cards',
    fingerprint: {
      layoutChoreography: 'audit-6area-inspection-grid',
      entrancePattern: '6lens-diagnostic-activation',
      movementAxis: 'xy-inspection-sweep',
      pinningBehavior: 'unpinned-6area-grid',
      scrubBehavior: 'threshold-diagnostic-sequence',
      revealOrder: 'header-area01-02-03-04-05-06',
      visualTransformation: 'diagnostic-node-illumination',
      contentRelationship: '6areas-to-4outcomes'
    }
  }),
  createSectionEntry({
    route: '/growth-audit',
    sectionId: 'audit-outcomes-framework',
    purpose: 'Show the 4 Clear Diagnostic Outcomes, Who Should Request an Audit, and the 4-stage Audit Framework',
    currentLayout: '2-column dark section + ScrollChainBanner',
    newComposition: 'Priority-ordered 2x2 Outcomes matrix paired with Ideal-Fit checklist and scrubbed Discover -> Diagnose -> Prioritize -> Recommend rail',
    visualMetaphor: 'Diagnostic findings organizing by priority into an actionable roadmap',
    motionType: 'pipeline-progression',
    primarySubject: '4 outcome cards + Who Should Request checklist + Audit Framework scrubbed rail',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 0.35,
    pin: false,
    axis: 'X',
    depth: 2,
    maxOffset: 24,
    sequence: ['4 outcome cards organize on left', 'Who Should Request panel locks on right', '4-stage Audit Framework rail scrubs left-to-right'],
    media: '4 Outcome Cards + ScrollChainBanner',
    fingerprint: {
      layoutChoreography: 'audit-4outcomes-plus-framework-rail',
      entrancePattern: 'priority-matrix-plus-rail',
      movementAxis: 'horizontal-framework-progression',
      pinningBehavior: 'unpinned-dark-outcomes',
      scrubBehavior: 'outcomes-shear-plus-rail-scrub',
      revealOrder: 'outcomesGrid-whoList-frameworkRail',
      visualTransformation: 'findings-to-priority-roadmap',
      contentRelationship: 'outcomes-to-interactive-workstation'
    }
  }),
  createSectionEntry({
    route: '/growth-audit',
    sectionId: 'audit-workstation-form',
    purpose: 'Allow visitors to select 1 of 5 Diagnostic Assessments, flag gaps on a live self-checklist, and submit their audit request distraction-free',
    currentLayout: 'mp-audit-workstation with 5 assessment tabs + self-checklist + audit request form (data-no-parallax)',
    newComposition: 'Calm, zero-parallax interactive diagnostic workstation pairing 5 self-checklists with a distraction-free submission form',
    visualMetaphor: 'Clean clinical diagnostic intake console',
    motionType: 'interface-construction',
    primarySubject: '5 assessment selector tabs + interactive gap-flagging checklist + static audit form',
    start: 'top 85%',
    end: 'bottom 20%',
    scrub: false,
    pin: false,
    axis: 'static',
    depth: 0,
    maxOffset: 0,
    sequence: ['Workstation frame settles once with zero parallax', 'Interactive checklist flags gaps immediately on click', 'Form inputs remain 100% static and distraction-free'],
    media: 'Interactive 5-Audit Selector & Gap Checklist Workstation',
    fingerprint: {
      layoutChoreography: 'audit-zero-parallax-workstation',
      entrancePattern: 'calm-single-settle-no-parallax',
      movementAxis: 'static-zero-displacement',
      pinningBehavior: 'unpinned-static-form-guard',
      scrubBehavior: 'no-scrub-form-protection',
      revealOrder: 'tabs-checklist-staticForm',
      visualTransformation: 'interactive-gap-flagging-only',
      contentRelationship: 'self-checklist-to-audit-submission'
    }
  }),

  // /insights (4 sections)
  createSectionEntry({
    route: '/insights',
    sectionId: 'insights-hero',
    purpose: 'Introduce the Insights & Public Experiments hub with topic filtering',
    currentLayout: 'SubpageParallaxHero + category switcher chips',
    newComposition: 'Editorial journal header with horizontal topic switcher bar',
    visualMetaphor: 'Research publication masthead',
    motionType: 'masked-headline-reveal',
    primarySubject: 'Insights H1 + 6 topic filter chips',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.3,
    pin: false,
    axis: 'Y',
    depth: 2,
    maxOffset: 24,
    sequence: ['Masthead breadcrumb & pill lock', 'Editorial headline reveals', 'Category filter bar aligns horizontally'],
    media: 'Editorial Masthead + Topic Switcher',
    fingerprint: {
      layoutChoreography: 'insights-editorial-masthead-hero',
      entrancePattern: 'masthead-mask-plus-filterbar',
      movementAxis: 'vertical-masthead-drift',
      pinningBehavior: 'unpinned-insights-hero',
      scrubBehavior: 'gentle-masthead-scrub',
      revealOrder: 'crumbs-pill-h1-topicFilterBar',
      visualTransformation: 'editorial-masthead-unveil',
      contentRelationship: 'masthead-to-filtered-journal'
    }
  }),
  createSectionEntry({
    route: '/insights',
    sectionId: 'insights-categories-architecture',
    purpose: 'Present the 5 Core Content Categories, 7 Content Formats, and the Question -> Research -> Insight -> Action -> Solution loop',
    currentLayout: 'Dark section with 5 category cards + 7 format pills + ScrollChainBanner',
    newComposition: '5 interactive editorial category cards + 7 format badges + scrubbed 5-stage Content Loop',
    visualMetaphor: 'Editorial research pipeline transforming questions into practical solutions',
    motionType: 'horizontal-narrative-rail',
    primarySubject: '5 category cards + 7 content format pills + Content Loop scrubbed rail',
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 0.35,
    pin: false,
    axis: 'X',
    depth: 2,
    maxOffset: 24,
    sequence: ['5 category cards cascade across row', '7 content type pills slide in', 'Content Loop rail scrubs 0% -> 100%'],
    media: '5 Category Cards + 7 Format Pills + ScrollChainBanner',
    fingerprint: {
      layoutChoreography: 'insights-5categories-7formats-loop',
      entrancePattern: 'editorial-taxonomy-cascade',
      movementAxis: 'horizontal-taxonomy-rail',
      pinningBehavior: 'unpinned-taxonomy-section',
      scrubBehavior: 'taxonomy-stagger-plus-loop-scrub',
      revealOrder: 'categories-contentTypes-contentLoopRail',
      visualTransformation: 'question-to-solution-pipeline',
      contentRelationship: 'taxonomy-to-journal-articles'
    }
  }),
  createSectionEntry({
    route: '/insights',
    sectionId: 'insights-journal-feed',
    purpose: 'Showcase the Featured Editorial Spotlight and expandable journal entries with key takeaways',
    currentLayout: 'Featured insight spotlight banner + expandable journal cards',
    newComposition: 'Controlled masked Featured Spotlight banner above varied editorial journal cards with expandable Key Takeaways drawers',
    visualMetaphor: 'Layered research dossiers with expandable takeaway briefs',
    motionType: 'progressive-clipping',
    primarySubject: 'Featured spotlight banner + 6 expandable journal dossiers',
    start: 'top 82%',
    end: 'bottom 15%',
    scrub: 0.25,
    pin: false,
    axis: 'Y',
    depth: 2,
    maxOffset: 18,
    sequence: ['Featured spotlight unclips at top', 'Journal cards enter with restrained editorial rhythm', 'Key Takeaways drawer expands on click'],
    media: 'Featured Editorial Spotlight + Expandable Takeaway Dossiers',
    fingerprint: {
      layoutChoreography: 'insights-spotlight-plus-journal-dossiers',
      entrancePattern: 'masked-spotlight-then-dossiers',
      movementAxis: 'vertical-reading-priority',
      pinningBehavior: 'unpinned-reading-feed',
      scrubBehavior: 'spotlight-drift-plus-card-reveal',
      revealOrder: 'featuredSpotlight-journalCards-takeawayDrawers',
      visualTransformation: 'dossier-takeaway-unfold',
      contentRelationship: 'insight-entry-to-related-solution'
    }
  }),
  createSectionEntry({
    route: '/insights',
    sectionId: 'insights-cta',
    purpose: 'Bridge readers from insights into a Digital Growth Audit or solution exploration',
    currentLayout: 'SubpageConcentricCta',
    newComposition: 'Concentric editorial-to-action handoff stage',
    visualMetaphor: 'Turning useful ideas into connected business action',
    motionType: 'section-handoff',
    primarySubject: 'Concentric ellipses + Request Digital Growth Audit CTA',
    start: 'top 85%',
    end: 'bottom bottom',
    scrub: 0.3,
    pin: false,
    axis: 'radial',
    depth: 2,
    maxOffset: 20,
    sequence: ['Concentric rings align', 'Headline locks', 'Dual 3D buttons elevate'],
    media: 'AxonCtaEmblemSvg',
    fingerprint: {
      layoutChoreography: 'insights-concentric-action-cta',
      entrancePattern: 'editorial-to-action-handoff',
      movementAxis: 'radial-inward-insights',
      pinningBehavior: 'unpinned-insights-cta',
      scrubBehavior: 'gentle-handoff-scrub',
      revealOrder: 'ellipses-headline-emblem-buttons',
      visualTransformation: 'idea-to-action-convergence',
      contentRelationship: 'insights-to-growth-audit'
    }
  }),

  // /contact (2 sections)
  createSectionEntry({
    route: '/contact',
    sectionId: 'contact-hero',
    purpose: 'Welcome visitors into a low-pressure growth conversation',
    currentLayout: 'SubpageParallaxHero',
    newComposition: 'Calm spatial entrance hero with clear conversation expectations',
    visualMetaphor: 'Open door to a strategic discovery conversation',
    motionType: 'line-by-line-editorial',
    primarySubject: 'Contact H1 + reassuring subheadline',
    start: 'top top',
    end: 'bottom top',
    scrub: false,
    pin: false,
    axis: 'Y',
    depth: 1,
    maxOffset: 16,
    sequence: ['Breadcrumb & pill settle', 'Headline and reassurance copy fade/rise gently once'],
    media: 'Calm Editorial Header + Flanking Badges',
    fingerprint: {
      layoutChoreography: 'contact-calm-welcome-hero',
      entrancePattern: 'subtle-spatial-welcome',
      movementAxis: 'minimal-y-entrance',
      pinningBehavior: 'unpinned-calm-hero',
      scrubBehavior: 'one-shot-gentle-entrance',
      revealOrder: 'crumbs-pill-h1-subheadline-description',
      visualTransformation: 'progressive-clarity-settle',
      contentRelationship: 'welcome-to-contact-form'
    }
  }),
  createSectionEntry({
    route: '/contact',
    sectionId: 'contact-form-section',
    purpose: 'Capture business context, goals, and bottlenecks without any parallax or visual distraction',
    currentLayout: '2-column contact form card + direct channels column (data-no-parallax)',
    newComposition: 'Zero-parallax, zero-looping-animation conversion workstation with multi-chip area selector and direct email channels',
    visualMetaphor: 'Calm, distraction-free project discovery desk',
    motionType: ' section-handoff'.trim(),
    primarySubject: 'Interactive area chips + static contact form + direct channel cards',
    start: 'top 88%',
    end: 'bottom 20%',
    scrub: false,
    pin: false,
    axis: 'static',
    depth: 0,
    maxOffset: 0,
    sequence: ['Form and info columns settle immediately with 0px parallax', 'Area chips toggle in 180ms', 'Typing in inputs triggers zero motion'],
    media: 'Static Neo-Brutalist Contact Form & Direct Channel Cards',
    fingerprint: {
      layoutChoreography: 'contact-zero-parallax-conversion-desk',
      entrancePattern: 'static-immediate-clarity',
      movementAxis: 'static-0px-form-lock',
      pinningBehavior: 'unpinned-static-contact-guard',
      scrubBehavior: 'zero-scrub-input-safety',
      revealOrder: 'areaChips-formFields-submitRow-directChannels',
      visualTransformation: 'chip-selection-feedback-only',
      contentRelationship: 'enquiry-form-and-direct-channels'
    }
  })
];

/**
 * Complete Centralized Motion Manifest across all 27 Public Routes (156 Sections)
 */
export const MOTION_MANIFEST = [
  ...HOMEPAGE_SECTIONS,
  ...SOLUTIONS_OVERVIEW_SECTIONS,
  ...SOLUTION_PILLAR_SECTIONS,
  ...INDIVIDUAL_SERVICE_SECTIONS,
  ...COMPANY_SECTIONS
];

/**
 * Lookup map by sectionId and by route
 */
export const MOTION_MANIFEST_BY_ID = Object.fromEntries(
  MOTION_MANIFEST.map((entry) => [entry.sectionId, entry])
);

export function getRouteMotionManifest(route) {
  return MOTION_MANIFEST.filter((entry) => entry.route === route);
}

/**
 * Development-Time Duplicate-Motion Validation Utility
 * Flags two sections as duplicates if they reuse the same combination of:
 * 1. Layout choreography
 * 2. Entrance pattern
 * 3. Movement axis
 * 4. Pinning behavior
 * 5. Scrub behavior
 * 6. Reveal order
 * 7. Visual transformation
 * 8. Content relationship
 * (Duration, delay, and easing are intentionally excluded so parameter tweaks cannot bypass detection.)
 */
export function validateMotionManifest(manifest = MOTION_MANIFEST) {
  const seen = new Map();
  const duplicates = [];

  for (const entry of manifest) {
    const fp = entry.fingerprint || {};
    const signature = [
      fp.layoutChoreography,
      fp.entrancePattern,
      fp.movementAxis,
      fp.pinningBehavior,
      fp.scrubBehavior,
      fp.revealOrder,
      fp.visualTransformation,
      fp.contentRelationship
    ].join('||');

    if (seen.has(signature)) {
      duplicates.push({
        firstSectionId: seen.get(signature),
        duplicateSectionId: entry.sectionId,
        route: entry.route,
        signature
      });
    } else {
      seen.set(signature, entry.sectionId);
    }
  }

  return {
    valid: duplicates.length === 0,
    totalRoutes: new Set(manifest.map((m) => m.route)).size,
    totalSections: manifest.length,
    uniqueFingerprints: seen.size,
    duplicates
  };
}

/**
 * Section-Level Choreography Engine Hook
 * Binds each [data-section-id] in the active view to its registered MOTION_MANIFEST entry,
 * stamps metadata attributes for inspection/testing, and executes distinct, bounded GSAP ScrollTrigger
 * choreography per section while respecting prefers-reduced-motion and form-protection rules.
 */
export function useSectionMotionEngine(containerRef, route) {
  useEffect(() => {
    const root = containerRef?.current || document;
    if (!root || typeof window === 'undefined') return undefined;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const vw = window.innerWidth;
    const isMobile = vw < 768;
    const isTablet = vw >= 768 && vw < 1024;
    const scaleFactor = isMobile ? 0.25 : isTablet ? 0.5 : 1;

    const routeEntries = getRouteMotionManifest(route);
    const ctx = gsap.context(() => {
      routeEntries.forEach((entry) => {
        const sectionEl = root.querySelector(
          `[data-section-id="${entry.sectionId}"]`
        );
        if (!sectionEl) return;

        // Stamp manifest attributes onto the DOM section for auditability
        sectionEl.setAttribute('data-motion-type', entry.motionType);
        sectionEl.setAttribute(
          'data-motion-fingerprint',
          entry.fingerprint.layoutChoreography
        );
        sectionEl.setAttribute('data-motion-axis', entry.axis);
        sectionEl.setAttribute(
          'data-reduced-motion',
          prefersReducedMotion ? 'true' : 'false'
        );

        // Never animate sections marked data-no-parallax or static axis or when reduced motion is enabled
        if (
          prefersReducedMotion ||
          entry.axis === 'static' ||
          entry.maxOffset === 0 ||
          sectionEl.hasAttribute('data-no-parallax')
        ) {
          return;
        }

        const boundedOffset = isMobile
          ? Math.min(10, Math.round(entry.maxOffset * scaleFactor))
          : Math.round(entry.maxOffset * scaleFactor);

        // Select internal choreographed children excluding form fields
        const headings = sectionEl.querySelectorAll('h1, h2, .mp-h2, .bsp-cta-h2');
        const cards = sectionEl.querySelectorAll(
          '.mp-step-card, .mp-subservice-card, .hp-service-card, .svx-cap-card, .svx-ledger-row, .svx-waterfall-col, .svx-seo-stair-step, .svx-crm-stage-tile, .mp-journal-card, .mp-contrast-card, .rx-signal-lane-card, .rx-ai-depth-card, .rx-experience-layer-card, .rx-lead-stage-card, .rx-blueprint-layer-card, .bsp-signal-fragment, .bsp-drift-ray, .bsp-engine-step-btn, .bsp-timeline-node, .bsp-ai-input-node, .bsp-orch-node, .bsp-build-step-tab, .bsp-bridge-node, .bsp-journey-node-btn, .bsp-dt-fragment-block, .bsp-dt-phase-btn, .css-lead-stage-pill-btn, .css-dm-node-tab, .css-ai-path-node, .css-web-module-tab, .css-dt-module-node, .css-active-stage-inspector'
        );

        // Apply distinct choreography based on motionType
        switch (entry.motionType) {
          case 'horizontal-narrative-rail':
          case 'section-handoff': {
            if (cards.length > 0) {
              gsap.fromTo(
                cards,
                {
                  x: (i) => (i % 2 === 0 ? -boundedOffset : boundedOffset),
                  opacity: 0.92
                },
                {
                  x: 0,
                  opacity: 1,
                  duration: MOTION_TOKENS.standardDuration,
                  stagger: 0.06,
                  ease: MOTION_TOKENS.gsapEase,
                  scrollTrigger: {
                    trigger: sectionEl,
                    start: entry.start,
                    toggleActions: 'play none none none'
                  }
                }
              );
            }
            break;
          }

          case 'layer-separation':
          case 'perspective-assembly': {
            if (cards.length > 0) {
              gsap.fromTo(
                cards,
                {
                  y: (i) => Math.min(28, (i + 1) * 6 * scaleFactor),
                  scale: isMobile ? 1 : 0.98,
                  opacity: 0.92
                },
                {
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  duration: MOTION_TOKENS.cinematicDuration,
                  stagger: 0.07,
                  ease: MOTION_TOKENS.gsapEase,
                  scrollTrigger: {
                    trigger: sectionEl,
                    start: entry.start,
                    toggleActions: 'play none none none'
                  }
                }
              );
            }
            break;
          }

          case 'content-convergence':
          case 'controlled-scale-depth': {
            const ctaBox = sectionEl.querySelector(
              '.hp-cta-content, .mp-container'
            );
            if (ctaBox && !isMobile) {
              gsap.fromTo(
                ctaBox,
                { scale: 0.98, y: Math.min(18, boundedOffset * 0.6) },
                {
                  scale: 1,
                  y: 0,
                  duration: MOTION_TOKENS.cinematicDuration,
                  ease: MOTION_TOKENS.gsapEase,
                  scrollTrigger: {
                    trigger: sectionEl,
                    start: entry.start,
                    toggleActions: 'play none none none'
                  }
                }
              );
            }
            break;
          }

          case 'before-after-transformation':
          case 'content-divergence': {
            if (cards.length >= 2) {
              gsap.fromTo(
                cards,
                {
                  x: (i) => (i % 2 === 0 ? -boundedOffset * 0.6 : boundedOffset * 0.6),
                  y: 10 * scaleFactor
                },
                {
                  x: 0,
                  y: 0,
                  duration: MOTION_TOKENS.standardDuration,
                  stagger: 0.08,
                  ease: MOTION_TOKENS.gsapEase,
                  scrollTrigger: {
                    trigger: sectionEl,
                    start: entry.start,
                    toggleActions: 'play none none none'
                  }
                }
              );
            }
            break;
          }

          default: {
            if (headings.length > 0) {
              gsap.fromTo(
                headings,
                { y: Math.min(14, boundedOffset * 0.45), opacity: 0.95 },
                {
                  y: 0,
                  opacity: 1,
                  duration: MOTION_TOKENS.standardDuration,
                  ease: MOTION_TOKENS.gsapEase,
                  scrollTrigger: {
                    trigger: sectionEl,
                    start: entry.start,
                    toggleActions: 'play none none none'
                  }
                }
              );
            }
            break;
          }
        }
      });
    }, root);

    return () => ctx.revert();
  }, [containerRef, route]);
}
