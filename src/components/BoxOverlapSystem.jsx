import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Complete Box-Section Audit Inventory Across All 27 Public Routes
 * Columns: Route | Section | Box Count | Content Type | Overlap Suitable | Selected Variant | Reason
 */
export const BOX_OVERLAP_AUDIT_TABLE = [
  {
    route: '/',
    section: '#home-problem-diagnosis (.hp-pain-points-grid)',
    boxCount: 6,
    contentType: 'Sequential Pain-Point Diagnostic Cards',
    overlapSuitable: true,
    selectedVariant: 'alternating-layer',
    reason: '6 sequential symptom cards stack into 1 column on mobile; alternating layer overlap adds editorial rhythm without hiding copy.'
  },
  {
    route: '/',
    section: '#home-sticky-folders (.hp-folders-stack)',
    boxCount: 3,
    contentType: '3-Stage How We Work Pillar Folders',
    overlapSuitable: true,
    selectedVariant: 'sticky-story-stack',
    reason: 'Replaces rigid 100vh sticky clipping on mobile/landscape with a controlled story-stack overlap that preserves full simulator access.'
  },
  {
    route: '/',
    section: '#home-core-solutions (.hp-pricing-cards-col & .hp-services-grid)',
    boxCount: 18,
    contentType: '3 Engagement Tiers + 15 Filterable Service Cards',
    overlapSuitable: false,
    selectedVariant: 'none',
    reason: 'Excluded: Tier comparison cards and filterable directory cards require simultaneous side-by-side/vertical scanning and dense CTAs.'
  },
  {
    route: '/',
    section: '#home-faq (.hp-faq-list)',
    boxCount: 10,
    contentType: 'Interactive FAQ Accordion Items',
    overlapSuitable: false,
    selectedVariant: 'none',
    reason: 'Excluded: Dynamic accordion height changes make overlap unsuitable for FAQ items.'
  },
  {
    route: '/solutions',
    section: '#solutions-hero (.mp-flow-strip)',
    boxCount: 5,
    contentType: '5-Stage Connected Growth System Cards (Attract → Scale)',
    overlapSuitable: true,
    selectedVariant: 'progressive-stack',
    reason: '5 sequential growth stages naturally build on top of one another in a progressive stack on mobile and tablet.'
  },
  {
    route: '/solutions',
    section: '#solutions-overview-sticky-folders (.hp-folders-stack)',
    boxCount: 6,
    contentType: '5 Core Solution Folders + 06 Growth Audit Folder',
    overlapSuitable: true,
    selectedVariant: 'sticky-story-stack',
    reason: 'Unsticks tall 1-column folders on mobile/landscape and applies safe story-stack overlap so lower service chips and CTAs are never covered.'
  },
  {
    route: '/solutions',
    section: '#solutions-overview-service-directory (.hp-services-grid)',
    boxCount: 15,
    contentType: '15-Service Directory Grid',
    overlapSuitable: false,
    selectedVariant: 'none',
    reason: 'Excluded: High-count navigation directory where users scan and tap individual service links.'
  },
  {
    route: '/approach',
    section: '#approach-seven-step-framework (7-Step Framework .mp-steps-grid)',
    boxCount: 7,
    contentType: '7 Sequential Methodology Steps (Understand → Scale)',
    overlapSuitable: true,
    selectedVariant: 'progressive-stack',
    reason: '7 numbered process steps benefit directly from progressive card stacking to reinforce step-by-step progression.'
  },
  {
    route: '/approach',
    section: '#approach-seven-step-framework (6 Operating Principles .mp-steps-grid)',
    boxCount: 6,
    contentType: '6 AxonVortex Operating Principles',
    overlapSuitable: true,
    selectedVariant: 'reveal-from-behind',
    reason: 'Uses reveal-from-behind overlap to visually distinguish the 6 principles from the 7-step progressive stack above.'
  },
  {
    route: '/about',
    section: '#about-why-chapters (5 Brand Story Chapters .mp-steps-grid)',
    boxCount: 5,
    contentType: '5 Chronological Brand Story Chapters (Chapter 01 → 05)',
    overlapSuitable: true,
    selectedVariant: 'sticky-story-stack',
    reason: 'Chronological narrative chapters read as a cohesive story deck when layered with sticky-story-stack.'
  },
  {
    route: '/about',
    section: '#about-beliefs-contrast (4 Foundational Beliefs .mp-steps-grid)',
    boxCount: 4,
    contentType: '4 Foundational Belief Cards',
    overlapSuitable: true,
    selectedVariant: 'alternating-layer',
    reason: '4 core belief cards gain tactile editorial depth from alternating layer offsets on mobile and tablet.'
  },
  {
    route: '/about',
    section: '#about-beliefs-contrast (.mp-contrast-card Yes/No Comparison)',
    boxCount: 2,
    contentType: 'Binary Do/Don’t Believe Comparison Lists',
    overlapSuitable: false,
    selectedVariant: 'none',
    reason: 'Excluded: Direct contrast checklists should remain un-overlapped for clean comparison.'
  },
  {
    route: '/about',
    section: '#about-faq-accordion (.hp-faq-list)',
    boxCount: 10,
    contentType: '10-Question FAQ Accordion',
    overlapSuitable: false,
    selectedVariant: 'none',
    reason: 'Excluded: Interactive FAQ accordions.'
  },
  {
    route: '/growth-audit',
    section: '#audit-six-areas (6 Core Evaluation Areas .mp-steps-grid)',
    boxCount: 6,
    contentType: '6 Diagnostic Evaluation Areas (Area 01 → 06)',
    overlapSuitable: true,
    selectedVariant: 'progressive-stack',
    reason: '6 numbered diagnostic scope cards form a sequential inspection checklist well-suited for progressive-stack.'
  },
  {
    route: '/growth-audit',
    section: '#audit-outcomes-framework (4 Diagnostic Outcomes .mp-outcomes-grid)',
    boxCount: 4,
    contentType: '4 Audit Deliverable Cards (01 → 04)',
    overlapSuitable: true,
    selectedVariant: 'reveal-from-behind',
    reason: '4 sequential audit outcomes emerge cleanly from behind the preceding deliverable card.'
  },
  {
    route: '/growth-audit',
    section: '#audit-workstation-form (.mp-audit-workstation)',
    boxCount: 2,
    contentType: 'Interactive Self-Checklist & Lead Capture Form',
    overlapSuitable: false,
    selectedVariant: 'none',
    reason: 'Excluded: Forms and interactive checklist inputs must never use overlap animations.'
  },
  {
    route: '/insights',
    section: '#insights-categories-architecture (5 Content Categories .mp-steps-grid)',
    boxCount: 5,
    contentType: '5 Core Content Category Cards',
    overlapSuitable: true,
    selectedVariant: 'alternating-layer',
    reason: '5 editorial category cards gain magazine-style layering with alternating-layer overlap.'
  },
  {
    route: '/insights',
    section: '#insights-journal-feed (.mp-journal-list)',
    boxCount: 6,
    contentType: 'Expandable Long-Form Journal Cards With Multi-CTAs',
    overlapSuitable: false,
    selectedVariant: 'none',
    reason: 'Excluded: Cards contain expandable key-takeaway drawers and multiple action buttons.'
  },
  {
    route: '/contact',
    section: '#contact-form-section (.mp-two-col)',
    boxCount: 3,
    contentType: 'Primary Contact Form & Direct Channel Cards',
    overlapSuitable: false,
    selectedVariant: 'none',
    reason: 'Excluded: Contact forms and direct email/audit CTAs must remain completely static and unobstructed.'
  },
  {
    route: '/solutions/digital-marketing',
    section: '#pillar-digital-marketing-problem-bestfor (.bsp-drift-vectors)',
    boxCount: 4,
    contentType: '4 Disconnected Marketing Drift Vectors',
    overlapSuitable: true,
    selectedVariant: 'alternating-layer',
    reason: '4 diagnostic drift cards layer with alternating horizontal micro-offsets.'
  },
  {
    route: '/solutions/ai-automation',
    section: '#pillar-ai-automation-signature-stage (.bsp-ai-mechanics-ledger)',
    boxCount: 4,
    contentType: '4 AI Workflow Execution Mechanics',
    overlapSuitable: true,
    selectedVariant: 'progressive-stack',
    reason: '4 sequential automation mechanics stack progressively as the workflow advances.'
  },
  {
    route: '/solutions/websites-ecommerce',
    section: '#pillar-websites-ecommerce-problem-bestfor (.bsp-leak-ledger)',
    boxCount: 4,
    contentType: '4 Storefront & Website Conversion Leaks',
    overlapSuitable: true,
    selectedVariant: 'reveal-from-behind',
    reason: '4 architectural leak rows reveal from behind to mirror wireframe layer inspection.'
  },
  {
    route: '/solutions/lead-generation',
    section: '#pillar-lead-generation-signature-stage (.bsp-lead-pipeline-board)',
    boxCount: 5,
    contentType: '5-Stage Opportunity Pipeline Board',
    overlapSuitable: true,
    selectedVariant: 'progressive-stack',
    reason: '5 sequential funnel stages stack progressively from Traffic to Closed Opportunity.'
  },
  {
    route: '/solutions/digital-transformation',
    section: '#pillar-digital-transformation-problem-bestfor (.bsp-dt-architecture-stack)',
    boxCount: 4,
    contentType: '4-Layer Enterprise Architecture Stack',
    overlapSuitable: true,
    selectedVariant: 'sticky-story-stack',
    reason: '4 architectural elevation slices stack like physical blueprint layers.'
  },
  {
    route: '/services/:slug (All 15 Services)',
    section: '#srv-:slug-capabilities-fit (.svx-ledger-list / .svx-capabilities-bento)',
    boxCount: 5,
    contentType: '5–6 Numbered Service Execution Modules',
    overlapSuitable: true,
    selectedVariant: 'progressive-stack / alternating-layer / reveal-from-behind / sticky-story-stack (by archetype)',
    reason: 'Sequential service execution modules stack with archetype-specific choreography while keeping the Fit Checklist card static.'
  }
];

/**
 * Explicit Selector-Driven Box-Overlap Configuration Rules
 * Supports all 10 required configuration properties:
 * - motionVariant: 'progressive-stack' | 'alternating-layer' | 'reveal-from-behind' | 'sticky-story-stack'
 * - overlapAmount: { smallMobile: number, largeMobile: number, tablet: number }
 * - stackDirection: 'vertical'
 * - activeScale: number (0.985 - 0.995)
 * - activeElevation: number (z-index step)
 * - mobileEnabled: boolean
 * - tabletEnabled: boolean
 * - reducedMotionMode: 'static-stack'
 * - preserveFinalStack: boolean
 * - ctaBehavior: 'always-clickable-above-seam'
 */
export const BOX_OVERLAP_GROUP_RULES = [
  // 1. Homepage 6 Pain-Point Diagnostic Cards
  {
    id: 'home-pain-points-overlap',
    sectionSelector: '#home-problem-diagnosis',
    groupSelector: '.hp-pain-points-grid',
    itemSelector: ':scope > .hp-pain-point-card',
    motionVariant: 'alternating-layer',
    overlapAmount: { smallMobile: 12, largeMobile: 16, tablet: 14 },
    stackDirection: 'vertical',
    activeScale: 0.99,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 2. Homepage 3 How-It-Works Folder Stack
  {
    id: 'home-folders-story-stack',
    sectionSelector: '#home-sticky-folders',
    groupSelector: '.hp-folders-stack',
    itemSelector: ':scope > .hp-folder-step',
    motionVariant: 'sticky-story-stack',
    overlapAmount: { smallMobile: 14, largeMobile: 18, tablet: 20 },
    stackDirection: 'vertical',
    activeScale: 0.988,
    activeElevation: 3,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 3. Solutions Overview 5-Stage Growth Flow Strip
  {
    id: 'solutions-flow-progressive-stack',
    sectionSelector: '#solutions-hero',
    groupSelector: '.mp-flow-strip',
    itemSelector: ':scope > .mp-flow-card',
    motionVariant: 'progressive-stack',
    overlapAmount: { smallMobile: 13, largeMobile: 16, tablet: 16 },
    stackDirection: 'vertical',
    activeScale: 0.99,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 4. Solutions Overview 6 Solution Folder Cards
  {
    id: 'solutions-folders-story-stack',
    sectionSelector: '#solutions-overview-sticky-folders',
    groupSelector: '.hp-folders-stack',
    itemSelector: ':scope > .hp-folder-step',
    motionVariant: 'sticky-story-stack',
    overlapAmount: { smallMobile: 14, largeMobile: 18, tablet: 20 },
    stackDirection: 'vertical',
    activeScale: 0.988,
    activeElevation: 3,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 5. Approach Page — 7-Step Framework (First .mp-steps-grid) & 6 Operating Principles (Second .mp-steps-grid)
  {
    id: 'approach-steps-and-principles',
    sectionSelector: '#approach-seven-step-framework',
    groupSelector: '.mp-steps-grid',
    itemSelector: ':scope > .mp-step-card',
    motionVariantByGroupIndex: ['progressive-stack', 'reveal-from-behind'],
    overlapAmount: { smallMobile: 14, largeMobile: 18, tablet: 18 },
    stackDirection: 'vertical',
    activeScale: 0.988,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 6. About Page — 5 Brand Story Chapters
  {
    id: 'about-chapters-story-stack',
    sectionSelector: '#about-why-chapters',
    groupSelector: '.mp-steps-grid',
    itemSelector: ':scope > .mp-step-card',
    motionVariant: 'sticky-story-stack',
    overlapAmount: { smallMobile: 14, largeMobile: 18, tablet: 18 },
    stackDirection: 'vertical',
    activeScale: 0.988,
    activeElevation: 3,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 7. About Page — 4 Foundational Beliefs
  {
    id: 'about-beliefs-alternating',
    sectionSelector: '#about-beliefs-contrast',
    groupSelector: '.mp-steps-grid',
    itemSelector: ':scope > .mp-step-card',
    motionVariant: 'alternating-layer',
    overlapAmount: { smallMobile: 13, largeMobile: 17, tablet: 16 },
    stackDirection: 'vertical',
    activeScale: 0.99,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 8. Growth Audit Page — 6 Core Evaluation Areas
  {
    id: 'audit-six-areas-progressive',
    sectionSelector: '#audit-six-areas',
    groupSelector: '.mp-steps-grid',
    itemSelector: ':scope > .mp-step-card',
    motionVariant: 'progressive-stack',
    overlapAmount: { smallMobile: 14, largeMobile: 18, tablet: 18 },
    stackDirection: 'vertical',
    activeScale: 0.988,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 9. Growth Audit Page — 4 Diagnostic Outcomes
  {
    id: 'audit-outcomes-reveal-behind',
    sectionSelector: '#audit-outcomes-framework',
    groupSelector: '.mp-outcomes-grid',
    itemSelector: ':scope > .mp-outcome-card',
    motionVariant: 'reveal-from-behind',
    overlapAmount: { smallMobile: 12, largeMobile: 15, tablet: 14 },
    stackDirection: 'vertical',
    activeScale: 0.99,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 10. Insights Page — 5 Content Categories
  {
    id: 'insights-categories-alternating',
    sectionSelector: '#insights-categories-architecture',
    groupSelector: '.mp-steps-grid',
    itemSelector: ':scope > .mp-step-card',
    motionVariant: 'alternating-layer',
    overlapAmount: { smallMobile: 13, largeMobile: 16, tablet: 16 },
    stackDirection: 'vertical',
    activeScale: 0.99,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 11. Pillar 01: Digital Marketing Drift Vectors
  {
    id: 'pillar-dm-drift-alternating',
    sectionSelector: '#pillar-digital-marketing-problem-bestfor',
    groupSelector: '.bsp-drift-vectors',
    itemSelector: ':scope > .bsp-drift-row',
    motionVariant: 'alternating-layer',
    overlapAmount: { smallMobile: 12, largeMobile: 15, tablet: 14 },
    stackDirection: 'vertical',
    activeScale: 0.99,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 12. Pillar 02: AI & Automation Mechanics Ledger
  {
    id: 'pillar-ai-mechanics-progressive',
    sectionSelector: '#pillar-ai-automation-signature-stage',
    groupSelector: '.bsp-ai-mechanics-ledger',
    itemSelector: ':scope > .bsp-ai-mechanic-row',
    motionVariant: 'progressive-stack',
    overlapAmount: { smallMobile: 12, largeMobile: 16, tablet: 16 },
    stackDirection: 'vertical',
    activeScale: 0.99,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 13. Pillar 03: Websites & E-Commerce Leak Ledger
  {
    id: 'pillar-web-leaks-reveal',
    sectionSelector: '#pillar-websites-ecommerce-problem-bestfor',
    groupSelector: '.bsp-leak-ledger',
    itemSelector: ':scope > .bsp-leak-item',
    motionVariant: 'reveal-from-behind',
    overlapAmount: { smallMobile: 12, largeMobile: 15, tablet: 15 },
    stackDirection: 'vertical',
    activeScale: 0.99,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 14. Pillar 04: Lead Generation Pipeline Board
  {
    id: 'pillar-lead-pipeline-progressive',
    sectionSelector: '#pillar-lead-generation-signature-stage',
    groupSelector: '.bsp-lead-pipeline-board',
    itemSelector: ':scope > .bsp-pipeline-stage-row',
    motionVariant: 'progressive-stack',
    overlapAmount: { smallMobile: 12, largeMobile: 16, tablet: 16 },
    stackDirection: 'vertical',
    activeScale: 0.99,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 15. Pillar 05: Digital Transformation Architecture Stack
  {
    id: 'pillar-dt-layers-story-stack',
    sectionSelector: '#pillar-digital-transformation-problem-bestfor',
    groupSelector: '.bsp-dt-architecture-stack',
    itemSelector: ':scope > .bsp-dt-layer-slice',
    motionVariant: 'sticky-story-stack',
    overlapAmount: { smallMobile: 12, largeMobile: 16, tablet: 16 },
    stackDirection: 'vertical',
    activeScale: 0.99,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 16. Service Subpages — Ledger List (Marketing, Lead Gen, CRM, Strategy)
  {
    id: 'service-ledger-progressive',
    sectionSelector: '[id$="-capabilities-fit"]',
    groupSelector: '.svx-ledger-list',
    itemSelector: ':scope > .svx-ledger-row',
    motionVariant: 'progressive-stack',
    overlapAmount: { smallMobile: 12, largeMobile: 16, tablet: 16 },
    stackDirection: 'vertical',
    activeScale: 0.99,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 17. Service Subpages — Capabilities Bento (SEO, Web, E-Com, Shopify, Custom Software)
  {
    id: 'service-bento-reveal-behind',
    sectionSelector: '[id$="-capabilities-fit"]',
    groupSelector: '.svx-capabilities-bento',
    itemSelector: ':scope > .svx-cap-card',
    motionVariant: 'reveal-from-behind',
    overlapAmount: { smallMobile: 13, largeMobile: 17, tablet: 16 },
    stackDirection: 'vertical',
    activeScale: 0.99,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 18. Service Subpages — SEO Discovery Staircase
  {
    id: 'service-seo-staircase-alternating',
    sectionSelector: '#srv-seo-archetype-journey',
    groupSelector: '.svx-seo-staircase',
    itemSelector: ':scope > .svx-seo-stair-step',
    motionVariant: 'alternating-layer',
    overlapAmount: { smallMobile: 12, largeMobile: 16, tablet: 15 },
    stackDirection: 'vertical',
    activeScale: 0.99,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  },
  // 19. Service Subpages — CRM & Transformation Stage Board
  {
    id: 'service-crm-board-story-stack',
    sectionSelector: '[id$="-archetype-journey"]',
    groupSelector: '.svx-crm-board-grid',
    itemSelector: ':scope > .svx-crm-stage-tile',
    motionVariant: 'sticky-story-stack',
    overlapAmount: { smallMobile: 13, largeMobile: 17, tablet: 16 },
    stackDirection: 'vertical',
    activeScale: 0.99,
    activeElevation: 2,
    mobileEnabled: true,
    tabletEnabled: true,
    reducedMotionMode: 'static-stack',
    preserveFinalStack: true,
    ctaBehavior: 'always-clickable-above-seam'
  }
];

/**
 * Helper to apply controlled Box-Overlap animations to a single container and its child cards
 */
function bindBoxOverlapGroup({
  groupEl,
  items,
  variant,
  overlapPx,
  activeScale = 0.99,
  activeElevation = 2,
  isSmallMobile,
  isReducedMotion
}) {
  if (!groupEl || !items || items.length < 2) return;

  groupEl.setAttribute('data-box-overlap-group', variant);
  groupEl.setAttribute('data-box-overlap-px', String(overlapPx));
  groupEl.setAttribute(
    'data-box-overlap-reduced',
    isReducedMotion ? 'true' : 'false'
  );
  groupEl.style.setProperty('--box-overlap-px', `${overlapPx}px`);

  // Check if the group is currently rendered in a single vertical column (stacked)
  const firstRect = items[0].getBoundingClientRect();
  const secondRect = items[1].getBoundingClientRect();
  const isSingleColumnStack =
    Math.abs(secondRect.left - firstRect.left) < Math.max(40, firstRect.width * 0.35);

  groupEl.setAttribute(
    'data-box-stack-layout',
    isSingleColumnStack ? 'single-column' : 'multi-column'
  );

  items.forEach((item, idx) => {
    item.setAttribute('data-box-overlap-card', String(idx + 1));
    item.setAttribute('data-box-overlap-variant', variant);
    item.style.position = 'relative';
    item.style.zIndex = String(10 + idx * activeElevation);

    if (isReducedMotion) {
      gsap.set(item, { clearProps: 'transform,opacity' });
      item.style.marginTop = '0px';
      return;
    }

    // Apply physical negative top margin on cards idx > 0 when stacked in a single column
    // while the CSS class [data-box-stack-layout="single-column"] adds matching bottom cushion
    // to cards idx < items.length - 1 so zero text or CTAs are ever covered.
    if (isSingleColumnStack && idx > 0) {
      item.style.marginTop = `-${overlapPx}px`;
    } else {
      item.style.marginTop = '0px';
    }

    // First card is the anchor card: settles cleanly without heavy displacement
    if (idx === 0) {
      gsap.fromTo(
        item,
        { y: 10, opacity: 0.96, scale: 1 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.42,
          ease: 'power2.out',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: item,
            start: 'top 92%',
            toggleActions: 'play none none none'
          }
        }
      );
      return;
    }

    const prevItem = items[idx - 1];

    // Variant A: Progressive Stack
    if (variant === 'progressive-stack') {
      const startY = isSmallMobile ? 16 : 22;
      gsap.fromTo(
        item,
        { y: startY, opacity: 0.94, scale: 0.99 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: item,
            start: 'top 92%',
            end: 'top 64%',
            scrub: 0.35
          }
        }
      );
    }
    // Variant B: Alternating Layer
    else if (variant === 'alternating-layer') {
      const dir = idx % 2 === 1 ? -1 : 1;
      const startX = dir * (isSmallMobile ? 8 : 12);
      const settledX = isSingleColumnStack ? dir * (isSmallMobile ? 2 : 3.5) : 0;
      const startRot = dir * 1.1; // strictly <= 1.5deg mobile limit
      const settledRot = isSingleColumnStack ? dir * 0.35 : 0;

      gsap.fromTo(
        item,
        {
          x: startX,
          y: isSmallMobile ? 16 : 20,
          rotation: startRot,
          opacity: 0.94,
          scale: 0.99
        },
        {
          x: settledX,
          y: 0,
          rotation: settledRot,
          opacity: 1,
          scale: 1,
          ease: 'power2.out',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: item,
            start: 'top 92%',
            end: 'top 64%',
            scrub: 0.35
          }
        }
      );
    }
    // Variant C: Reveal From Behind
    else if (variant === 'reveal-from-behind') {
      const behindOffset = -(isSmallMobile ? 12 : 16);
      gsap.fromTo(
        item,
        {
          y: behindOffset,
          scale: 0.982,
          opacity: 0.93
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: item,
            start: 'top 93%',
            end: 'top 65%',
            scrub: 0.35
          }
        }
      );
    }
    // Variant D: Sticky Story Stack
    else if (variant === 'sticky-story-stack') {
      const riseY = isSmallMobile ? 18 : 24;
      gsap.fromTo(
        item,
        {
          y: riseY,
          scale: 0.986,
          opacity: 0.95
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          overwrite: 'auto',
          scrollTrigger: {
            trigger: item,
            start: 'top 92%',
            end: 'top 60%',
            scrub: 0.4
          }
        }
      );
    }

    // Subtle depth recession on the preceding card as the new card overlaps its lower seam
    // Keeps scale strictly >= 0.985 and opacity = 1 so text remains 100% crisp and readable
    if (prevItem && isSingleColumnStack) {
      gsap.to(prevItem, {
        scale: activeScale,
        transformOrigin: 'center top',
        ease: 'none',
        overwrite: 'auto',
        scrollTrigger: {
          trigger: item,
          start: 'top 86%',
          end: 'top 56%',
          scrub: 0.35
        }
      });
    }
  });
}

/**
 * Reusable Hook: Applies Controlled Box-Overlap Scrolling Animations
 * across Small Mobile (320-390px), Large Mobile (391-767px), and Tablet (768-1024px)
 * using gsap.matchMedia() with automatic revert on breakpoint or route change.
 */
export function useBoxOverlapMotion(rootRef, routeKey) {
  useEffect(() => {
    const root = rootRef?.current || document;
    if (!root) return undefined;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isSmallMobile: '(max-width: 390px)',
        isLargeMobile: '(min-width: 391px) and (max-width: 767px)',
        isTablet: '(min-width: 768px) and (max-width: 1024px)',
        isDesktop: '(min-width: 1025px)',
        reduceMotion: '(prefers-reduced-motion: reduce)'
      },
      (context) => {
        const {
          isSmallMobile,
          isLargeMobile,
          isTablet,
          reduceMotion
        } = context.conditions;

        BOX_OVERLAP_GROUP_RULES.forEach((rule) => {
          const sections = root.querySelectorAll(rule.sectionSelector);
          sections.forEach((sec) => {
            const groups = sec.querySelectorAll(rule.groupSelector);
            groups.forEach((groupEl, groupIdx) => {
              const items = Array.from(
                groupEl.querySelectorAll(rule.itemSelector)
              );
              if (items.length < 2) return;

              const variant = Array.isArray(rule.motionVariantByGroupIndex)
                ? rule.motionVariantByGroupIndex[
                    groupIdx % rule.motionVariantByGroupIndex.length
                  ]
                : rule.motionVariant;

              let overlapPx = 14;
              if (isSmallMobile && rule.mobileEnabled) {
                overlapPx = rule.overlapAmount.smallMobile ?? 13;
              } else if (isLargeMobile && rule.mobileEnabled) {
                overlapPx = rule.overlapAmount.largeMobile ?? 17;
              } else if (isTablet && rule.tabletEnabled) {
                overlapPx = rule.overlapAmount.tablet ?? 16;
              } else {
                // On desktop, multi-column grids keep 0 vertical overlap unless stacked in 1 column
                overlapPx = 14;
              }

              bindBoxOverlapGroup({
                groupEl,
                items,
                variant,
                overlapPx,
                activeScale: rule.activeScale ?? 0.99,
                activeElevation: rule.activeElevation ?? 2,
                isSmallMobile: Boolean(isSmallMobile),
                isReducedMotion: Boolean(reduceMotion)
              });
            });
          });
        });
      },
      root
    );

    return () => {
      mm.revert();
    };
  }, [rootRef, routeKey]);
}

/**
 * Reusable Declarative Component Wrapper for Box-Overlap Groups
 */
export function BoxOverlapGroup({
  motionVariant = 'progressive-stack',
  overlapAmount = { smallMobile: 14, largeMobile: 18, tablet: 16 },
  stackDirection = 'vertical',
  activeScale = 0.99,
  activeElevation = 2,
  mobileEnabled = true,
  tabletEnabled = true,
  reducedMotionMode = 'static-stack',
  preserveFinalStack = true,
  ctaBehavior = 'always-clickable-above-seam',
  className = '',
  style = {},
  children
}) {
  const groupRef = useRef(null);

  useEffect(() => {
    const groupEl = groupRef.current;
    if (!groupEl) return undefined;

    const mm = gsap.matchMedia();
    mm.add(
      {
        isSmallMobile: '(max-width: 390px)',
        isLargeMobile: '(min-width: 391px) and (max-width: 767px)',
        isTablet: '(min-width: 768px) and (max-width: 1024px)',
        reduceMotion: '(prefers-reduced-motion: reduce)'
      },
      (context) => {
        const { isSmallMobile, isLargeMobile, isTablet, reduceMotion } =
          context.conditions;
        const items = Array.from(groupEl.children);
        if (items.length < 2) return;

        let overlapPx = 14;
        if (isSmallMobile && mobileEnabled) {
          overlapPx = overlapAmount.smallMobile ?? 14;
        } else if (isLargeMobile && mobileEnabled) {
          overlapPx = overlapAmount.largeMobile ?? 18;
        } else if (isTablet && tabletEnabled) {
          overlapPx = overlapAmount.tablet ?? 16;
        }

        bindBoxOverlapGroup({
          groupEl,
          items,
          variant: motionVariant,
          overlapPx,
          activeScale,
          activeElevation,
          isSmallMobile: Boolean(isSmallMobile),
          isReducedMotion: Boolean(reduceMotion)
        });
      },
      groupEl
    );

    return () => mm.revert();
  }, [
    motionVariant,
    overlapAmount,
    stackDirection,
    activeScale,
    activeElevation,
    mobileEnabled,
    tabletEnabled,
    reducedMotionMode,
    preserveFinalStack,
    ctaBehavior
  ]);

  return (
    <div
      ref={groupRef}
      className={className}
      style={style}
      data-box-overlap-wrapper={motionVariant}
      data-stack-direction={stackDirection}
      data-preserve-final-stack={preserveFinalStack ? 'true' : 'false'}
      data-cta-behavior={ctaBehavior}
    >
      {children}
    </div>
  );
}
