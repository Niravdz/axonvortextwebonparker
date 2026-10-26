import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Pause,
  Play,
  ShieldCheck,
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
  TrendingUp
} from 'lucide-react';
import { getReadableTextColor } from './ServicePageExperiences';

/**
 * Detailed 6-Second Looping Motion & Architecture Specs for all 15 Individual Service Pages
 */
export const SERVICE_MOTION_SPECS = {
  'social-media-marketing': {
    motionTitle: 'Content Idea → Multi-Format Publishing & Topic Cluster Loop',
    motionDurationSec: 6,
    caption:
      'Animated 6-second sequence showing one core business topic transforming into platform-native social formats (9:16 Reel, 7-Slide Carousel, LinkedIn Post, and Topic Cluster Guide) moving through Plan, Create, Publish, Engage, and Measure.',
    frames: [
      {
        stage: '01 · PLAN & CLUSTER',
        title: 'Core Topic Cluster & Content Calendar',
        detail: 'Map customer questions into structured content pillars (Education, Authority, Proof, Conversion) on a monthly publishing board.',
        artifact: 'Editorial Planning Board · 4 Pillars Mapped',
        signal: 'Topic Cluster → Social Calendar'
      },
      {
        stage: '02 · ADAPT FORMATS',
        title: 'One Core Idea → 4 Platform-Native Formats',
        detail: 'Transform the core insight into a 9:16 Vertical Reel, a 7-Slide Educational Carousel, a LinkedIn Breakdown, and an Authority Article.',
        artifact: 'Reel + Carousel + LinkedIn + Guide Ready',
        signal: 'Multi-Format Adaptation Active'
      },
      {
        stage: '03 · PUBLISH SEQUENCE',
        title: 'Staggered Multi-Platform Distribution',
        detail: 'Schedule and distribute across priority channels where your audience actually spends time—without random posting.',
        artifact: 'Publishing Queue · Instagram · LinkedIn · YouTube',
        signal: 'Cross-Platform Distribution Live'
      },
      {
        stage: '04 · AUDIENCE SIGNAL',
        title: 'Saves, Shares, Comments & DM Conversations',
        detail: 'Capture high-intent engagement signals and guide interested followers into structured profile or DM paths.',
        artifact: 'Engagement Signal → Guided DM Triage',
        signal: 'Trust & Conversation Built'
      },
      {
        stage: '05 · MEASURE & CONVERT',
        title: 'Content-to-Enquiry Conversion Loop',
        detail: 'Connect social attention into website visits, lead magnets, and Digital Growth Audit enquiries.',
        artifact: 'Profile Funnel → Website / CRM Handoff',
        signal: 'Demand Connected to Growth System'
      }
    ],
    extraClusterNodes: [
      { label: 'Core Pillar Topic', role: 'Problem-First Anchor Guide' },
      { label: '7-Slide Carousel', role: 'Visual Framework Breakdown' },
      { label: '9:16 Short Video', role: '3-Second Hook + Diagnosis' },
      { label: 'LinkedIn Brief', role: 'Decision-Maker Authority' },
      { label: 'Conversion Guide', role: 'Lead Capture & Audit Entry' }
    ]
  },
  'meta-ads': {
    motionTitle: 'Creative → Audience Layer → Landing Page → CAPI Conversion Loop',
    motionDurationSec: 6,
    caption:
      'Animated 6-second sequence showing paid social creative variations matching audience layers, driving clicks to a message-matched landing page, and firing verified conversion events back to the campaign structure.',
    frames: [
      {
        stage: '01 · CREATIVE VARIATIONS',
        title: 'Problem-Led Video & Static Ad Variations',
        detail: 'Test distinct creative hooks, visual angles, and value propositions built around real buyer friction.',
        artifact: 'Creative Set A / B / C · Hook & Offer Framing',
        signal: 'Scroll-Stopping Creative Signal'
      },
      {
        stage: '02 · AUDIENCE LAYERS',
        title: 'Broad Signal, Lookalike & Warm Retargeting Layers',
        detail: 'Align creative angles with prospecting and retargeting audience segments without overlapping ad sets.',
        artifact: '3 Audience Layers Converged on Objective',
        signal: 'Audience Layer Match'
      },
      {
        stage: '03 · QUALIFIED CLICK',
        title: 'High-Intent Ad Click With Clear Expectation',
        detail: 'Filter out curiosity clicks by stating the offer and audience clearly in the ad copy and CTA.',
        artifact: 'Ad CTA → Dedicated Destination URL',
        signal: 'Intent-Filtered Traffic'
      },
      {
        stage: '04 · LANDING PAGE',
        title: '100% Message-Matched Conversion Page',
        detail: 'Deliver the exact promise from the Meta ad on a fast, mobile-first landing page with friction-free capture.',
        artifact: '5-Second Value Clarity + Enquiry Form',
        signal: 'Landing Page Conversion'
      },
      {
        stage: '05 · ATTRIBUTION PATH',
        title: 'Pixel + Conversions API (CAPI) Feedback Loop',
        detail: 'Feed verified lead and enquiry events back into campaign optimization so budget follows real pipeline quality.',
        artifact: 'Browser Pixel + Server CAPI → CRM Stage',
        signal: 'Closed-Loop Attribution'
      }
    ],
    extraClusterNodes: [
      { label: 'Layer 01 · Prospecting', role: 'Problem-Aware Discovery' },
      { label: 'Layer 02 · Engaged', role: 'Video View & Social Engagers' },
      { label: 'Layer 03 · Retargeting', role: 'High-Intent Page Visitors' },
      { label: 'Layer 04 · CAPI Signal', role: 'Qualified Enquiry Event' }
    ]
  },
  'google-ads': {
    motionTitle: 'Search Query → Intent Match → Landing Page → Tracked Enquiry Loop',
    motionDurationSec: 6,
    caption:
      'Animated 6-second sequence tracing a high-intent search query through keyword group matching, negative keyword filtering, message-matched ad copy, dedicated landing page continuity, and conversion tracking.',
    frames: [
      {
        stage: '01 · SEARCH QUERY',
        title: 'Active Buyer Enters High-Intent Search Query',
        detail: 'Capture demand at the exact moment a prospect searches for a solution, service, or operational fix.',
        artifact: 'Query: Commercial & Solution-Aware Intent',
        signal: 'Live Search Signal Detected'
      },
      {
        stage: '02 · KEYWORD & NEGATIVE FILTER',
        title: 'Structured Keyword Group + Negative Keyword Shield',
        detail: 'Route commercial queries to tight ad groups while blocking informational or irrelevant spend.',
        artifact: 'Exact / Phrase Match + Negative List Active',
        signal: 'Budget Protected From Waste'
      },
      {
        stage: '03 · AD GROUP MATCH',
        title: 'Intent-Mirrored Headline, Extensions & Offer',
        detail: 'Present an ad that directly answers the searcher’s specific problem and differentiates your offer.',
        artifact: 'Ad Group → High-Relevance Headline & Sitelinks',
        signal: 'Search-to-Ad Alignment'
      },
      {
        stage: '04 · LANDING PAGE CONNECTION',
        title: 'Dedicated Search Conversion Destination',
        detail: 'Send clicks to a focused page built around that specific search theme—never a generic homepage.',
        artifact: 'Headline Continuity + Proof + Fast Form',
        signal: 'Visitor Engagement Confirmed'
      },
      {
        stage: '05 · CONVERSION TRACKING',
        title: 'Tracked Form, Call & CRM Opportunity Sync',
        detail: 'Record which keyword and ad group generated a real qualified enquiry inside your analytics and CRM.',
        artifact: 'Enhanced Conversion Tag → CRM Lead Record',
        signal: 'Verified Search Enquiry'
      }
    ],
    extraClusterNodes: [
      { label: 'Problem Queries', role: ' Symptom & Bottleneck Searches' },
      { label: 'Solution Queries', role: 'Service & Category Comparison' },
      { label: 'Negative Shield', role: 'Filters Out Non-Buyer Clicks' },
      { label: 'Conversion Sync', role: 'Links Search Spend to Pipeline' }
    ]
  },
  seo: {
    motionTitle: 'Search Engine Crawl → Site Architecture → Topic Clusters → Organic Visibility Loop',
    motionDurationSec: 6,
    caption:
      'Animated 6-second sequence showing a search engine crawler traversing clean site architecture, indexing topic clusters and internal link pathways, and connecting organic searchers to commercial pages.',
    frames: [
      {
        stage: '01 · TECHNICAL CRAWL',
        title: 'Search Crawler Traverses Clean Site Hierarchy',
        detail: 'Ensure clean URLs, XML sitemaps, fast Core Web Vitals, and zero dead-end crawl traps.',
        artifact: 'Crawler Node: Root → Pillars → Services (200 OK)',
        signal: '100% Indexable Architecture'
      },
      {
        stage: '02 · SITE ARCHITECTURE',
        title: 'Logical Pillar-to-Service Page Hierarchy',
        detail: 'Organize every solution and service into a clear hierarchy so search engines understand topical depth.',
        artifact: '5 Core Pillars → 15 Dedicated Service Routes',
        signal: 'Structural Clarity Indexed'
      },
      {
        stage: '03 · TOPIC CLUSTERS',
        title: 'Supporting Guides & Problem-Solving Content',
        detail: 'Build authority around customer questions with educational articles that link directly to commercial pages.',
        artifact: 'Topic Cluster Nodes Linked to Core Service',
        signal: 'Topical Authority Compounding'
      },
      {
        stage: '04 · INTERNAL LINK GRAPH',
        title: 'Contextual Internal Links Distribute Relevance',
        detail: 'Connect related services, insights, and solution pillars with descriptive anchor pathways.',
        artifact: 'Bi-Directional Internal Link Graph Active',
        signal: 'Semantic Relevance Connected'
      },
      {
        stage: '05 · ORGANIC CONVERSION',
        title: 'Search Visibility That Drives Real Enquiries',
        detail: 'Turn compounding organic discovery into trust, growth audit requests, and qualified conversations.',
        artifact: 'Organic Searcher → Service Page → Enquiry',
        signal: 'Sustainable Search Demand'
      }
    ],
    extraClusterNodes: [
      { label: 'Crawl & Speed Health', role: 'Clean Markup & Fast Load' },
      { label: 'Commercial Service Hubs', role: 'High-Intent Solution Pages' },
      { label: 'Educational Clusters', role: 'Answers Buyer Questions' },
      { label: 'Local & Entity Signals', role: 'Geographic & Brand Clarity' }
    ]
  },
  'ai-chatbots': {
    motionTitle: 'Customer Question → Grounded Retrieval → Qualification → Human Handoff Loop',
    motionDurationSec: 6,
    caption:
      'Animated 6-second sequence showing a visitor question matched against approved business knowledge, guided through qualification branches, and routed to calendar booking or live human handoff.',
    frames: [
      {
        stage: '01 · VISITOR QUESTION',
        title: 'Customer Asks a Specific Service or Pricing Question',
        detail: 'Engage website or messaging visitors immediately—day or night—without making them wait on a static form.',
        artifact: 'Incoming Prompt: “Which solution fits our workflow?”',
        signal: 'Instant Conversation Triggered'
      },
      {
        stage: '02 · KNOWLEDGE RETRIEVAL',
        title: 'Grounded Lookup From Approved Business Docs',
        detail: 'Retrieve accurate answers strictly from your approved service scope, FAQs, and policies—no hallucinated claims.',
        artifact: 'Knowledge Base Match · Guardrails Verified',
        signal: 'Grounded Answer Generated'
      },
      {
        stage: '03 · QUALIFICATION PATH',
        title: 'Structured Branching Captures Context & Goals',
        detail: 'Ask 2–3 natural qualifying questions to identify business type, bottleneck, and timeline.',
        artifact: 'Branch: Goal + Bottleneck + Contact Captured',
        signal: 'Lead Context Qualified'
      },
      {
        stage: '04 · HUMAN HANDOFF GATE',
        title: 'Seamless Escalation When Human Judgment Is Needed',
        detail: 'When a conversation requires custom strategy or sensitive handling, route immediately to a human specialist.',
        artifact: 'Escalation Rule → Full Transcript to Team',
        signal: 'Human Specialist Notified'
      },
      {
        stage: '05 · BOOKING & CRM SYNC',
        title: 'Structured Lead & Conversation Logged in CRM',
        detail: 'Sync the contact record, qualification summary, and booked consultation directly into your CRM pipeline.',
        artifact: 'CRM Record Created + Consultation Scheduled',
        signal: 'Conversation Converted to Action'
      }
    ],
    extraClusterNodes: [
      { label: 'Approved Knowledge', role: 'Strictly Grounded Answers' },
      { label: 'Qualification Tree', role: 'Captures Buyer Context' },
      { label: 'Human Escalation', role: 'Instant Specialist Handoff' },
      { label: 'CRM & Booking Sync', role: 'Zero Lost Chat Transcripts' }
    ]
  },
  'ai-agents': {
    motionTitle: 'Bounded Goal → Context → Decision → Tool Usage → Human Approval → Completed Task',
    motionDurationSec: 6,
    caption:
      'Animated 6-second sequence showing an AI agent receiving a bounded operational goal, assembling CRM and document context, preparing tool actions, pausing at a mandatory human approval gate, and completing the workflow.',
    frames: [
      {
        stage: '01 · BOUNDED GOAL',
        title: 'Defined Operational Task & Scope Triggered',
        detail: 'Assign a clear, narrow business objective—such as research, lead triage, or draft preparation—within strict rules.',
        artifact: 'Task Spec: Enrich Enquiry & Prepare Audit Brief',
        signal: 'Bounded Goal Initialized'
      },
      {
        stage: '02 · CONTEXT ASSEMBLY',
        title: 'Agent Gathers Structured Context Across Tools',
        detail: 'Pull relevant CRM history, submitted form fields, and internal playbooks into a single working context.',
        artifact: 'Context: CRM History + Website + Intake Notes',
        signal: 'Multi-Source Context Loaded'
      },
      {
        stage: '03 · DECISION LOGIC',
        title: 'Rule-Checked Classification & Action Plan',
        detail: 'Evaluate the context against your explicit business criteria to propose the next sequence of steps.',
        artifact: 'Proposed Plan: Priority Tier + Recommended Pillar',
        signal: 'Structured Plan Formulated'
      },
      {
        stage: '04 · TOOL PREPARATION',
        title: 'Drafts CRM Updates, Summary & Follow-Up',
        detail: 'Prepare the CRM stage update, internal briefing note, and tailored response draft without sending unreviewed.',
        artifact: 'Staged Tools: CRM Update + Brief + Draft Email',
        signal: 'Actions Staged for Review'
      },
      {
        stage: '05 · HUMAN APPROVAL & COMPLETE',
        title: 'Mandatory Human Checkpoint → Verified Execution',
        detail: 'A team member reviews and approves high-impact actions with one click before final execution and logging.',
        artifact: 'Human Approved ✓ → Task Executed & Logged',
        signal: 'Controlled Agent Execution'
      }
    ],
    extraClusterNodes: [
      { label: '01 · Goal & Scope', role: 'Narrow, Defined Task' },
      { label: '02 · Context & Logic', role: 'Grounded in Business Rules' },
      { label: '03 · Tool Staging', role: 'CRM, Docs & Comms Drafted' },
      { label: '04 · Human Approval', role: 'Mandatory Control Checkpoint' }
    ]
  },
  'workflow-automation': {
    motionTitle: 'Event Trigger → Conditions → Connected Actions → CRM & Human Checkpoint Loop',
    motionDurationSec: 6,
    caption:
      'Animated 6-second sequence showing a form submission triggering conditional routing, automatic CRM record creation, instant team notification, and a verified human checkpoint.',
    frames: [
      {
        stage: '01 · EVENT TRIGGER',
        title: 'New Enquiry, Form Submission or Stage Change',
        detail: 'Start the workflow the instant a customer submits a form, books a call, or changes status in your system.',
        artifact: 'Trigger: Website Audit Form Submitted',
        signal: 'Real-Time Event Captured'
      },
      {
        stage: '02 · CONDITIONS',
        title: 'Conditional Routing & Data Validation Rules',
        detail: 'Check completeness, deduplicate existing contacts, and route by service category or urgency.',
        artifact: 'Condition: Deduplicate + Route by Pillar',
        signal: 'Routing Logic Evaluated'
      },
      {
        stage: '03 · SYSTEM ACTIONS',
        title: 'Automatic Record Creation & Task Assignment',
        detail: 'Create or update the CRM deal, attach intake answers, and generate the owner’s follow-up task automatically.',
        artifact: 'Action: CRM Deal + Task + Folder Created',
        signal: 'Zero Manual Copy-Paste'
      },
      {
        stage: '04 · NOTIFICATIONS',
        title: 'Instant Team Alert & Customer Confirmation',
        detail: 'Notify the assigned specialist in Slack/email and send a clear, immediate confirmation to the customer.',
        artifact: 'Alert: Specialist Notified + Confirmation Sent',
        signal: 'Response Speed Protected'
      },
      {
        stage: '05 · HUMAN CHECKPOINT',
        title: 'Exception Handling & Human Review Gate',
        detail: 'Log every automated step and pause for human review whenever an exception or high-value account is detected.',
        artifact: 'Audit Log Verified · Human Checkpoint Ready',
        signal: 'Reliable End-to-End Flow'
      }
    ],
    extraClusterNodes: [
      { label: 'Trigger Events', role: 'Forms, Webhooks & CRM Stages' },
      { label: 'Conditional Logic', role: 'Smart Filtering & Routing' },
      { label: 'Cross-App Sync', role: 'CRM, Email, Tasks & Docs' },
      { label: 'Human Checkpoints', role: 'Safe Exception Handling' }
    ]
  },
  'voice-ai': {
    motionTitle: 'Audio Waveform → Intent Detection → Structured Data → Human Handoff & CRM Record',
    motionDurationSec: 6,
    caption:
      'Animated 6-second sequence showing spoken caller audio transforming into real-time intent detection, guided voice conversation, warm human transfer when needed, and a structured CRM call record.',
    frames: [
      {
        stage: '01 · AUDIO WAVEFORM',
        title: 'Inbound or Outbound Voice Call Answered Instantly',
        detail: 'Greet callers immediately with natural voice cadence instead of sending them to voicemail or hold queues.',
        artifact: 'Live Voice Stream · 0s Hold Time',
        signal: 'Acoustic Signal Active'
      },
      {
        stage: '02 · INTENT DETECTION',
        title: 'Real-Time Speech-to-Intent Classification',
        detail: 'Understand whether the caller wants to book an appointment, ask a service question, or speak to a specialist.',
        artifact: 'Detected Intent: Consultation Booking / Triage',
        signal: 'Caller Intent Parsed'
      },
      {
        stage: '03 · CONVERSATION LOGIC',
        title: 'Guided Qualification & Calendar Availability Check',
        detail: 'Capture caller name, business need, and preferred time slot using approved conversational guardrails.',
        artifact: 'Dialogue: Slot Confirmed + Details Verified',
        signal: 'Structured Voice Flow'
      },
      {
        stage: '04 · HUMAN HANDOFF',
        title: 'Warm Transfer to Human Team for Complex Calls',
        detail: 'Transfer urgent or high-complexity callers directly to your team with a live context whisper.',
        artifact: 'Escalation Rule → Warm Transfer With Summary',
        signal: 'Human Escalation Path'
      },
      {
        stage: '05 · CRM RECORD',
        title: 'Call Summary, Transcript & Next Step Synced to CRM',
        detail: 'Write the structured call outcome, recording link, and booked appointment straight into your CRM.',
        artifact: 'CRM Activity Logged + Follow-Up Task Set',
        signal: 'Voice Converted to System Data'
      }
    ],
    extraClusterNodes: [
      { label: 'Waveform Capture', role: '24/7 Instant Call Answer' },
      { label: 'Intent Parsing', role: 'Identifies Caller Objective' },
      { label: 'Warm Handoff', role: 'Transfers Complex Calls' },
      { label: 'CRM Call Record', role: 'Structured Notes & Booking' }
    ]
  },
  'website-development': {
    motionTitle: 'Sitemap → Wireframe → Content Hierarchy → Responsive Website Assembly Loop',
    motionDurationSec: 6,
    caption:
      'Animated 6-second sequence showing a website progressing from sitemap architecture and wireframe blocks into a finished responsive interface with clear value hierarchy and conversion paths.',
    frames: [
      {
        stage: '01 · SITEMAP ARCHITECTURE',
        title: 'Information Architecture & Page Hierarchy',
        detail: 'Map every core solution, service, and conversion path so visitors never have to guess where to go next.',
        artifact: 'Sitemap: Home → Pillars → Services → Audit',
        signal: 'Navigation Clarity Defined'
      },
      {
        stage: '02 · STRUCTURAL WIREFRAME',
        title: 'Section Rhythm & Visual Storytelling Blueprint',
        detail: 'Design the layout grid, section sequence, and proof placement before applying visual polish.',
        artifact: 'Wireframe Grid · Above-the-Fold Value Layout',
        signal: 'Structural Grid Locked'
      },
      {
        stage: '03 · CONTENT HIERARCHY',
        title: '5-Second Value Proposition & Editorial Copy',
        detail: 'Explain what you do, who you help, and why it matters with scannable headings and honest proof.',
        artifact: 'Headline + Problem Contrast + Service Proof',
        signal: 'Message Clarity Established'
      },
      {
        stage: '04 · RESPONSIVE INTERFACE',
        title: 'Intentional Desktop, Tablet & Mobile Composition',
        detail: 'Build fast, accessible layouts with bold visual identity and 44×44px touch-ready mobile controls.',
        artifact: 'Responsive UI: 1440px · 768px · 375px Verified',
        signal: 'Multi-Device Experience Ready'
      },
      {
        stage: '05 · CONVERSION PATH',
        title: 'Connected Forms, Analytics & CRM Integration',
        detail: 'Connect every CTA, diagnostic audit, and enquiry form directly into your tracking and sales pipeline.',
        artifact: 'CTA → Form → CRM + Analytics Event Sync',
        signal: 'Website Connected to Growth'
      }
    ],
    extraClusterNodes: [
      { label: 'Sitemap & Routing', role: 'Logical Page Discovery' },
      { label: 'Wireframe Blueprint', role: 'Intentional Section Rhythm' },
      { label: 'Responsive UI System', role: 'Desktop, Tablet & Mobile' },
      { label: 'Conversion Integration', role: 'CRM & Analytics Connected' }
    ]
  },
  'ecommerce-development': {
    motionTitle: 'Product Discovery → Product Detail → Cart → Checkout → Fulfilment Loop',
    motionDurationSec: 6,
    caption:
      'Animated 6-second sequence tracing a shopper from catalog discovery and product detail clarity through cart review, low-friction checkout, payment verification, and order fulfilment connection.',
    frames: [
      {
        stage: '01 · PRODUCT DISCOVERY',
        title: 'Intuitive Category Architecture, Search & Filters',
        detail: 'Help shoppers find the right product quickly through structured collections, filters, and clear navigation.',
        artifact: 'Catalog Grid + Faceted Filter Architecture',
        signal: 'Fast Product Discovery'
      },
      {
        stage: '02 · PRODUCT DETAIL (PDP)',
        title: 'High-Clarity Merchandising, Specs & Trust Signals',
        detail: 'Answer buyer questions on the product page with clear variant selectors, shipping clarity, and structured proof.',
        artifact: 'PDP: Media Gallery + Variant Logic + Trust Box',
        signal: 'Purchase Confidence Built'
      },
      {
        stage: '03 · CART EXPERIENCE',
        title: 'Frictionless Slide-Out Cart & Order Summary',
        detail: 'Keep cart state transparent with clear delivery thresholds, easy quantity edits, and zero surprise fees.',
        artifact: 'Cart Drawer · Instant State Update',
        signal: 'Cart Abandonment Reduced'
      },
      {
        stage: '04 · CHECKOUT & PAYMENT',
        title: 'Streamlined Mobile-Ready Checkout & Payment State',
        detail: 'Minimize form friction across shipping, express payment methods, and order confirmation.',
        artifact: 'Checkout: Shipping → Payment Verified ✓',
        signal: 'Completed Checkout Flow'
      },
      {
        stage: '05 · FULFILMENT & CRM SYNC',
        title: 'Order Management, Inventory & Post-Purchase Lifecycle',
        detail: 'Connect completed orders to inventory systems, fulfilment workflows, and customer retention messaging.',
        artifact: 'Order Webhook → Inventory + Fulfilment + CRM',
        signal: 'Connected Commerce System'
      }
    ],
    extraClusterNodes: [
      { label: 'Catalog & Filtering', role: 'Zero-Friction Discovery' },
      { label: 'Product Detail UX', role: 'Clear Value & Trust Proof' },
      { label: 'Cart & Checkout', role: 'Streamlined Mobile Purchase' },
      { label: 'Fulfilment Sync', role: 'Inventory & Lifecycle Flow' }
    ]
  },
  'shopify-development': {
    motionTitle: 'Storefront Blocks → Collection System → App Stack → Checkout Assembly Loop',
    motionDurationSec: 6,
    caption:
      'Animated 6-second sequence showing modular Shopify storefront blocks, collection templates, custom theme sections, app integrations, and checkout journeys assembling into one cohesive store.',
    frames: [
      {
        stage: '01 · STOREFRONT BLOCKS',
        title: 'Modular Custom Theme Sections & Brand Architecture',
        detail: 'Build flexible, merchant-editable storefront blocks tailored to your products rather than a rigid template.',
        artifact: 'Custom Liquid/React Sections · Merchant Editable',
        signal: 'Modular Theme Foundation'
      },
      {
        stage: '02 · PRODUCT COLLECTIONS',
        title: 'Smart Collection Rules, Bundles & Merchandising',
        detail: 'Structure collections, product badges, and cross-sell blocks so high-priority products stand out.',
        artifact: 'Collection Template + Dynamic Filter Bar',
        signal: 'Merchandising System Active'
      },
      {
        stage: '03 · APPS & INTEGRATIONS',
        title: 'Clean App Stack Without Script Bloat',
        detail: 'Integrate reviews, subscriptions, CRM, and email lifecycle tools while protecting storefront speed.',
        artifact: 'Curated App Layer · Core Web Vitals Protected',
        signal: 'Clean Integration Layer'
      },
      {
        stage: '04 · CHECKOUT JOURNEY',
        title: 'Trust-Reinforced Cart Drawer & Checkout Continuity',
        detail: 'Align cart, express pay, and checkout branding for a smooth transition from browse to purchase.',
        artifact: 'Branded Cart → Express Checkout Continuity',
        signal: 'Conversion Path Aligned'
      },
      {
        stage: '05 · STORE MANAGEMENT',
        title: 'Catalog Operations, Analytics & Growth Tracking',
        detail: 'Configure clean product data, conversion tracking events, and team workflows for ongoing store growth.',
        artifact: 'Store Ops + Attribution Events Verified',
        signal: 'Scalable Storefront System'
      }
    ],
    extraClusterNodes: [
      { label: 'Modular Theme Blocks', role: 'Custom Brand Storytelling' },
      { label: 'Collection Architecture', role: 'Guided Product Discovery' },
      { label: 'Lean App Integrations', role: 'Speed-First Ecosystem' },
      { label: 'Checkout & Store Ops', role: 'Reliable Merchant Control' }
    ]
  },
  'lead-generation': {
    motionTitle: 'Audience → Offer → Campaign → Landing Page → Qualification → CRM Follow-Up Loop',
    motionDurationSec: 6,
    caption:
      'Animated 6-second sequence showing a target prospect moving through offer positioning, campaign click, high-converting landing page capture, qualification, CRM routing, and automated follow-up.',
    frames: [
      {
        stage: '01 · AUDIENCE & OFFER',
        title: 'Right Audience Matched With a Clear, Low-Friction Offer',
        detail: 'Define who you want to reach and craft an audit, consultation, or resource worth taking action for.',
        artifact: 'Target ICP + Diagnostic Offer Positioning',
        signal: 'High-Relevance Offer Ready'
      },
      {
        stage: '02 · CAMPAIGN & LANDING PAGE',
        title: 'Traffic Channels Connected to a Dedicated Landing Page',
        detail: 'Route paid and organic traffic to a focused conversion page built around a single next step.',
        artifact: 'Campaign Traffic → Dedicated Conversion Page',
        signal: 'Attention Directed to Offer'
      },
      {
        stage: '03 · LEAD CAPTURE',
        title: 'Friction-Balanced Intake Form & Value Exchange',
        detail: 'Capture essential contact and business context without overwhelming the visitor.',
        artifact: 'Structured Intake Form Completed',
        signal: 'Lead Signal Captured'
      },
      {
        stage: '04 · QUALIFICATION & CRM',
        title: 'Instant Lead Tagging, Scoring & CRM Pipeline Entry',
        detail: 'Classify the enquiry by service need and urgency, creating an owned opportunity inside your CRM.',
        artifact: 'CRM Opportunity Created + Owner Assigned',
        signal: 'Qualified Pipeline Record'
      },
      {
        stage: '05 · AUTOMATED FOLLOW-UP',
        title: 'Immediate Confirmation & Sales Follow-Up Sequence',
        detail: 'Trigger instant response messaging and team reminders so no warm enquiry goes cold.',
        artifact: 'Instant Reply + Sales Follow-Up Task Active',
        signal: 'Enquiry Converted to Conversation'
      }
    ],
    extraClusterNodes: [
      { label: 'Offer Architecture', role: 'Compelling Reason to Act' },
      { label: 'Conversion Landing Page', role: 'Focused Capture Environment' },
      { label: 'Qualification Logic', role: 'Separates Fit From Noise' },
      { label: 'CRM & Speed-to-Lead', role: 'Instant Automated Follow-Up' }
    ]
  },
  crm: {
    motionTitle: 'Scattered Customer Data → Single Connected CRM Record & Pipeline Loop',
    motionDurationSec: 6,
    caption:
      'Animated 6-second sequence showing scattered spreadsheets, inbox threads, and sticky notes converging into one unified CRM customer record with pipeline stages, ownership, and follow-up reminders.',
    frames: [
      {
        stage: '01 · SCATTERED INPUTS',
        title: 'Eliminate Disconnected Spreadsheets, Inboxes & Notes',
        detail: 'Capture web enquiries, calls, emails, and manual entries that previously lived in separate silos.',
        artifact: 'Inputs: Web Form + Email Thread + Call Notes',
        signal: 'Fragmented Signals Collected'
      },
      {
        stage: '02 · UNIFIED CUSTOMER RECORD',
        title: 'Single Source of Truth for Every Contact & Account',
        detail: 'Consolidate contact details, acquisition source, problem statement, and conversation history in one profile.',
        artifact: 'Unified Profile: Contact + Source + History',
        signal: 'Single Customer Record Built'
      },
      {
        stage: '03 · PIPELINE STAGES',
        title: 'Structured Deal Progression Across Clear Stages',
        detail: 'Track every opportunity through New Enquiry → Qualified → Proposal → Follow-Up → Won.',
        artifact: 'Pipeline Stage: Qualified → Proposal Active',
        signal: 'Stage Visibility Established'
      },
      {
        stage: '04 · OWNERSHIP & REMINDERS',
        title: 'Clear Team Ownership & Automated Follow-Up Tasks',
        detail: 'Assign every opportunity to a specific owner with automated task reminders and SLA alerts.',
        artifact: 'Owner Assigned + Next Action Reminder Set',
        signal: 'Zero Dropped Follow-Ups'
      },
      {
        stage: '05 · PIPELINE REPORTING',
        title: 'Actionable Visibility Into Bottlenecks & Conversion',
        detail: 'See where deals stall, which channels bring qualified opportunities, and what the team needs next.',
        artifact: 'Live Pipeline Health & Stage Velocity View',
        signal: 'Connected Revenue Process'
      }
    ],
    extraClusterNodes: [
      { label: 'Unified Contact Record', role: 'All History in One Place' },
      { label: '5-Stage Deal Pipeline', role: 'Clear Opportunity Status' },
      { label: 'Owner & Task Automation', role: 'Guaranteed Next Action' },
      { label: 'Reporting & Visibility', role: 'Honest Pipeline Clarity' }
    ]
  },
  'custom-software': {
    motionTitle: 'Business Requirement → System Modules → Database → Role Access → Deployment Loop',
    motionDurationSec: 6,
    caption:
      'Animated 6-second sequence showing custom software assembling from business workflow requirements into database schemas, API integrations, role-based permissions, and operational interfaces.',
    frames: [
      {
        stage: '01 · BUSINESS REQUIREMENT',
        title: 'Map the Exact Operational Workflow Off-the-Shelf Tools Miss',
        detail: 'Start from your team’s real bottlenecks, approval rules, and data relationships before writing code.',
        artifact: 'System Spec: Operational Workflow & Rules',
        signal: 'Architecture Scoped Around Need'
      },
      {
        stage: '02 · DATABASE & SCHEMA',
        title: 'Structured Relational Data Model & State Integrity',
        detail: 'Design clean data entities for customers, orders, projects, or operations with strict validation.',
        artifact: 'Database Schema: Core Entities & Relations',
        signal: 'Clean Data Foundation'
      },
      {
        stage: '03 · SYSTEM MODULES & API',
        title: 'Modular Business Logic & Third-Party API Connectors',
        detail: 'Build maintainable backend services that connect with your CRM, billing, ERP, or communication stack.',
        artifact: 'API Layer + Webhook & CRM Connectors',
        signal: 'Connected Module Layer'
      },
      {
        stage: '04 · USER ROLES & INTERFACE',
        title: 'Role-Based Dashboards for Admin, Operations & Clients',
        detail: 'Give each user role a fast, intuitive interface showing only the actions and data relevant to them.',
        artifact: 'RBAC UI: Admin · Operations · Client Portal',
        signal: 'Role Permissions Enforced'
      },
      {
        stage: '05 · DEPLOYMENT & SCALE',
        title: 'Reliable Deployment, Monitoring & Iterative Evolution',
        detail: 'Deploy with automated testing, audit logs, and modular architecture that grows with your business.',
        artifact: 'Production Stack Live · Audit Logs Active',
        signal: 'Custom System Operational'
      }
    ],
    extraClusterNodes: [
      { label: 'Workflow Specification', role: 'Built Around Your Process' },
      { label: 'Relational Data Layer', role: 'Single Structured Schema' },
      { label: 'API & Integration Bus', role: 'Connects Existing Tools' },
      { label: 'Role-Based Portals', role: 'Admin, Team & Client Views' }
    ]
  },
  'digital-transformation-strategy': {
    motionTitle: 'Fragmented Process Silos → System Map → Priority Roadmap → Unified Operating Model',
    motionDurationSec: 6,
    caption:
      'Animated 6-second sequence showing disconnected legacy tools and manual process silos separating, mapping into a prioritized transformation roadmap, and reconnecting into a unified business architecture.',
    frames: [
      {
        stage: '01 · EXISTING PROCESS SILOS',
        title: 'Identify Disconnected Tools, Spreadsheets & Bottlenecks',
        detail: 'Audit where teams duplicate work, lose customer context, or rely on fragile manual handoffs.',
        artifact: 'Audit: Marketing, Sales & Ops Silos Mapped',
        signal: 'Operational Friction Diagnosed'
      },
      {
        stage: '02 · CONNECTED SYSTEM MAP',
        title: 'Design the Target End-to-End Business Architecture',
        detail: 'Map how website, CRM, marketing, automation, and internal tools should share data cleanly.',
        artifact: 'Target Blueprint: 1 Connected Data Spine',
        signal: 'Target Architecture Defined'
      },
      {
        stage: '03 · PRIORITY ROADMAP',
        title: 'Sequence High-Impact Quick Wins Before Heavy Rebuilds',
        detail: 'Prioritize changes by business value and operational readiness so teams aren’t overwhelmed.',
        artifact: 'Phased Roadmap: Phase 01 → Phase 02 → Phase 03',
        signal: 'Practical Execution Sequence'
      },
      {
        stage: '04 · INTEGRATION SEQUENCE',
        title: 'Connect Core Systems & Eliminate Manual Bridges',
        detail: 'Implement CRM, workflow automation, and reporting bridges in controlled, measurable waves.',
        artifact: 'Integration Wave: Website ↔ CRM ↔ Ops Sync',
        signal: 'Silos Reconnected'
      },
      {
        stage: '05 · MODERNIZED OPERATING MODEL',
        title: 'Team Adoption, Measurement & Continuous Improvement',
        detail: 'Align people, processes, and technology around one measurable, adaptable operating rhythm.',
        artifact: 'Unified Operating Model · Continuous Loop',
        signal: 'Transformation Embedded'
      }
    ],
    extraClusterNodes: [
      { label: 'Silo & Friction Audit', role: 'Finds Manual Bottlenecks' },
      { label: 'Target System Map', role: 'Blueprints Connected Flow' },
      { label: 'Phased Prioritization', role: 'High-Value Steps First' },
      { label: 'Modernized Operations', role: 'People + Process + Tech' }
    ]
  }
};

/**
 * 1. BESPOKE 6-SECOND LOOPING MOTION VISUAL + LOCAL ARCHITECTURAL DIAGRAM
 * Automatically pauses when offscreen (IntersectionObserver) and respects prefers-reduced-motion.
 */
export function ServiceMotionLoopStage({ service }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [frameIdx, setFrameIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInView, setIsInView] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const spec =
    SERVICE_MOTION_SPECS[service.slug] ||
    SERVICE_MOTION_SPECS['social-media-marketing'];
  const frames = spec.frames;
  const activeFrame = frames[frameIdx % frames.length];
  const badgeText = getReadableTextColor(service.color);

  useEffect(() => {
    setFrameIdx(0);
  }, [service.slug]);

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

  // Pause automatically when outside viewport
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') {
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );
    io.observe(containerRef.current);
    return () => io.disconnect();
  }, []);

  // 6-second loop across 5 frames (1200ms per frame)
  useEffect(() => {
    if (reducedMotion || !isPlaying || !isInView) return undefined;
    const interval = setInterval(() => {
      setFrameIdx((prev) => (prev + 1) % frames.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [reducedMotion, isPlaying, isInView, frames.length]);

  // Pause or play the short looping WebM video when offscreen or toggled
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (reducedMotion || !isPlaying || !isInView) {
      vid.pause();
    } else {
      vid.play().catch(() => {});
    }
  }, [reducedMotion, isPlaying, isInView, service.slug]);

  const webpSrc = `/media/services/${service.slug}/architecture-diagram.webp`;
  const svgFallback = `/media/services/${service.slug}/architecture-diagram.svg`;
  const webmSrc = `/media/services/${service.slug}/motion-loop.webm`;

  return (
    <figure
      ref={containerRef}
      className="rx-motion-stage"
      aria-label={spec.motionTitle}
    >
      {/* Top Neo-Brutalist Control Bar */}
      <div className="rx-motion-topbar">
        <div className="rx-motion-topbar-left">
          <span
            className="hp-mono-pill"
            style={{ backgroundColor: service.color, color: badgeText }}
          >
            {reducedMotion
              ? 'STATIC POSTER MODE (REDUCED MOTION)'
              : '6S LOOPING SYSTEM SEQUENCE'}
          </span>
          <strong className="rx-motion-title">{spec.motionTitle}</strong>
        </div>

        <div className="rx-motion-controls">
          <button
            type="button"
            className="rx-motion-play-btn"
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={
              isPlaying ? 'Pause animated sequence' : 'Play animated sequence'
            }
          >
            {isPlaying && !reducedMotion ? (
              <>
                <Pause size={14} />
                <span>Pause Loop</span>
              </>
            ) : (
              <>
                <Play size={14} />
                <span>Play Loop</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Split Stage: Animated 5-Frame Sequence Left + Local Architecture Blueprint Right */}
      <div className="rx-motion-grid">
        {/* Left: Live Animated 6-Second Sequence Player */}
        <div className="rx-motion-player-panel">
          {/* Progress Timeline Scrubber */}
          <div
            className="rx-motion-timeline"
            role="tablist"
            aria-label="Sequence Stages"
          >
            {frames.map((f, idx) => {
              const active = idx === frameIdx;
              const passed = idx < frameIdx;
              return (
                <button
                  key={f.stage}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`rx-motion-step-chip ${
                    active ? 'is-active' : passed ? 'is-passed' : ''
                  }`}
                  style={
                    active
                      ? { backgroundColor: service.color, color: badgeText }
                      : {}
                  }
                  onClick={() => {
                    setFrameIdx(idx);
                    setIsPlaying(false);
                  }}
                >
                  <span>0{idx + 1}</span>
                  <small>{f.stage.split('·')[1]?.trim() || f.stage}</small>
                </button>
              );
            })}
          </div>

          {/* Animated Active Stage Viewport */}
          <div className="rx-motion-viewport" key={activeFrame.stage}>
            <div className="rx-motion-stage-header">
              <span className="rx-motion-stage-code">{activeFrame.stage}</span>
              <span className="rx-motion-signal-pill">
                <span className="svx-dot svx-dot--green" />
                {activeFrame.signal}
              </span>
            </div>

            <h3 className="rx-motion-frame-h3">{activeFrame.title}</h3>
            <p className="rx-motion-frame-desc">{activeFrame.detail}</p>

            {/* Animated Conduit / Node Strip */}
            <div className="rx-motion-node-track" aria-hidden="true">
              {frames.map((f, idx) => {
                const isCurrent = idx === frameIdx;
                const isDone = idx <= frameIdx;
                return (
                  <React.Fragment key={f.stage}>
                    <div
                      className={`rx-motion-node ${
                        isCurrent ? 'is-current' : isDone ? 'is-done' : ''
                      }`}
                      style={
                        isCurrent
                          ? {
                              backgroundColor: service.color,
                              color: badgeText
                            }
                          : {}
                      }
                    >
                      <span>0{idx + 1}</span>
                    </div>
                    {idx < frames.length - 1 && (
                      <div
                        className={`rx-motion-connector ${
                          idx < frameIdx ? 'is-filled' : ''
                        }`}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            <div className="rx-motion-artifact-bar">
              <small>SYSTEM ARTIFACT OUTPUT:</small>
              <strong>{activeFrame.artifact}</strong>
            </div>
          </div>

          {/* 4 Service-Specific Visual Cluster Nodes */}
          <div className="rx-motion-cluster-row">
            {spec.extraClusterNodes.map((node, i) => (
              <div
                key={node.label}
                className={`rx-motion-cluster-chip ${
                  frameIdx % spec.extraClusterNodes.length === i
                    ? 'is-highlighted'
                    : ''
                }`}
              >
                <strong>{node.label}</strong>
                <span>{node.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Local Retina WebP + SVG Architecture Diagram & Looping WebM Clip */}
        <div className="rx-motion-diagram-panel">
          <div className="rx-diagram-frame" style={{ marginBottom: 14 }}>
            <picture>
              <source srcSet={webpSrc} type="image/webp" />
              <img
                src={svgFallback}
                alt={`${service.title} connected system architecture diagram showing ${service.flow.join(' to ')}`}
                width="820"
                height="420"
                loading="lazy"
                className="rx-diagram-img"
              />
            </picture>
          </div>

          <div
            className="rx-diagram-frame rx-video-loop-frame"
            data-video-state={isPlaying && !reducedMotion ? 'playing' : 'paused'}
          >
            {reducedMotion ? (
              <img
                src={webpSrc}
                alt={`${service.title} static poster frame for reduced motion`}
                width="820"
                height="420"
                loading="lazy"
                className="rx-diagram-img"
              />
            ) : (
              <video
                ref={videoRef}
                src={webmSrc}
                poster={webpSrc}
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${service.title} 4-second system motion loop`}
                className="rx-diagram-img rx-motion-video"
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            )}
          </div>

          <figcaption className="rx-motion-caption">{spec.caption}</figcaption>
        </div>
      </div>
    </figure>
  );
}

/**
 * 2. CORE SOLUTION PILLAR SIGNATURE PARALLAX & ARCHITECTURE STAGE (/solutions/:pillarId)
 * Implements the 5 distinct solution page visual directions from the prompt:
 * - digital-marketing: Multi-speed horizontal demand signals converging into qualified demand
 * - ai-automation: Input → Context → Logic → Human Approval → Action → Feedback Loop activating in depth
 * - websites-ecommerce: 6-Layer digital experience stack moving at different vertical depths
 * - lead-generation: 7-Stage opportunity pipeline with traveling lead signal indicator
 * - digital-transformation: Evolving system blueprint assembling from fragmented silos to connected model
 */
export function SolutionPillarSignatureStage({
  pillar,
  onNavigate,
  onOpenAudit
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [blueprintMode, setBlueprintMode] = useState('connected'); // 'siloed' | 'connected'
  const badgeText = getReadableTextColor(pillar.accentColor);

  const webpSrc = `/media/solutions/${pillar.id}/system-blueprint.webp`;
  const svgFallback = `/media/solutions/${pillar.id}/system-blueprint.svg`;

  // PILLAR 01 · DIGITAL MARKETING — Horizontal Multi-Speed Demand Signal Convergence
  if (pillar.id === 'digital-marketing') {
    const lanes = [
      {
        speed: '28',
        channel: '01 · Visibility Signals & Social Content',
        role: 'Organic authority, short-form video, and educational carousels build problem awareness.',
        color: '#f59e0b',
        route: '/services/social-media-marketing'
      },
      {
        speed: '-24',
        channel: '02 · Paid Social Creative & Audience Layers (Meta Ads)',
        role: 'Targeted creative hooks and retargeting layers capture active attention across feeds.',
        color: '#ff4d2d',
        route: '/services/meta-ads'
      },
      {
        speed: '32',
        channel: '03 · High-Intent Search Capture (Google Ads)',
        role: 'Commercial keyword groups intercept buyers actively searching for your solution.',
        color: '#2563eb',
        route: '/services/google-ads'
      },
      {
        speed: '-20',
        channel: '04 · Compounding Search Architecture (SEO)',
        role: 'Technical foundation, topic clusters, and internal links build long-term organic visibility.',
        color: '#a3e635',
        route: '/services/seo'
      }
    ];

    return (
      <section
        id={`pillar-${pillar.id}-signature-stage`}
        data-section-id={`pillar-${pillar.id}-signature-stage`}
        data-rx-section
        className="mp-section mp-section--cream"
      >
        <div className="mp-container">
          <div className="svx-section-head-split">
            <div>
              <span
                className="hp-mono-pill"
                style={{ backgroundColor: pillar.accentColor, color: badgeText }}
              >
                SIGNATURE DEMAND ARCHITECTURE · HORIZONTAL SIGNAL CONVERGENCE
              </span>
              <h2 className="mp-h2" style={{ marginTop: 10 }}>
                How Visibility, Content, Paid Ads & Search Converge Into Demand
              </h2>
            </div>
            <span className="svx-illustrative-badge svx-illustrative-badge--dark">
              MULTI-CHANNEL DEMAND CONVERGENCE
            </span>
          </div>

          <div className="rx-pillar-split-layout">
            <div className="rx-signal-lanes-col">
              {lanes.map((lane, idx) => (
                <div
                  key={lane.channel}
                  data-rx-parallax-x={lane.speed}
                  className="rx-signal-lane-card"
                  onClick={() => onNavigate(lane.route)}
                >
                  <div className="rx-signal-lane-top">
                    <span
                      className="hp-mono-pill"
                      style={{
                        backgroundColor: lane.color,
                        color: getReadableTextColor(lane.color)
                      }}
                    >
                      {lane.channel}
                    </span>
                    <ArrowUpRight size={16} />
                  </div>
                  <p>{lane.role}</p>
                </div>
              ))}

              <div className="rx-convergence-target-box">
                <span className="hp-mono-pill hp-mono-pill--yellow">
                  05 · CONVERSION & MEASUREMENT DESTINATION
                </span>
                <h3>Qualified Enquiries, Landing Page Conversion & Attribution</h3>
                <p>
                  Every marketing signal converges into a tracked conversion
                  destination so you can measure what actually drives business
                  growth.
                </p>
              </div>
            </div>

            <div className="rx-pillar-blueprint-col" data-rx-parallax-y="24">
              <div className="rx-diagram-frame">
                <picture>
                  <source srcSet={webpSrc} type="image/webp" />
                  <img
                    src={svgFallback}
                    alt="Digital Marketing connected demand-generation architecture blueprint"
                    width="820"
                    height="420"
                    loading="lazy"
                    className="rx-diagram-img"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // PILLAR 02 · AI & AUTOMATION — Input → Context → Logic → Human Approval → Action → Feedback Loop
  if (pillar.id === 'ai-automation') {
    const aiStages = [
      {
        code: '01 · INPUT',
        title: 'Customer Question, Voice Call, or Form Event',
        desc: 'Capture incoming customer enquiries, support questions, calls, or internal operational triggers immediately.',
        guardrail: 'Structured Input Validation'
      },
      {
        code: '02 · CONTEXT',
        title: 'Approved Business Knowledge & CRM History',
        desc: 'Retrieve relevant context strictly from your approved documentation, service rules, and CRM records.',
        guardrail: 'Zero Unverified Guessing'
      },
      {
        code: '03 · LOGIC',
        title: 'Qualification, Classification & Routing Rules',
        desc: 'Apply clear decision criteria to qualify leads, answer common questions, or prepare next actions.',
        guardrail: 'Explicit Business Logic'
      },
      {
        code: '04 · HUMAN APPROVAL',
        title: 'Mandatory Human Checkpoint for High-Judgment Decisions',
        desc: 'Escalate complex, sensitive, or high-value actions to your team with full conversation context.',
        guardrail: 'Humans Stay in Control'
      },
      {
        code: '05 · ACTION',
        title: 'CRM Update, Appointment Booking, or Task Execution',
        desc: 'Write clean data into your CRM, schedule consultations, and trigger team notifications automatically.',
        guardrail: 'Verified System Action'
      },
      {
        code: '06 · FEEDBACK LOOP',
        title: 'Audit Trail, Performance Review & Refinement',
        desc: 'Measure response quality, resolution speed, and conversion impact to continuously improve the workflow.',
        guardrail: 'Continuous Improvement'
      }
    ];

    return (
      <section
        id={`pillar-${pillar.id}-signature-stage`}
        data-section-id={`pillar-${pillar.id}-signature-stage`}
        data-rx-section
        className="mp-section mp-section--cream"
      >
        <div className="mp-container">
          <div className="svx-section-head-split">
            <div>
              <span
                className="hp-mono-pill"
                style={{ backgroundColor: pillar.accentColor, color: badgeText }}
              >
                INPUT-TO-INTELLIGENT-ACTION WORKFLOW · HUMAN + AI CONTROL
              </span>
              <h2 className="mp-h2" style={{ marginTop: 10 }}>
                6 Stages From Signal Input to Human-Approved Action
              </h2>
            </div>
            <span className="svx-illustrative-badge svx-illustrative-badge--dark">
              DEPTH-ACTIVATED WORKFLOW NODES
            </span>
          </div>

          <div
            data-rx-stage-group
            className="rx-ai-depth-grid"
            style={{ marginBottom: 28 }}
          >
            {aiStages.map((st, idx) => (
              <div
                key={st.code}
                data-rx-stage-item
                data-rx-parallax-y={idx % 2 === 0 ? '18' : '-18'}
                className={`rx-ai-depth-card ${
                  activeIdx === idx ? 'is-active' : ''
                }`}
                onClick={() => setActiveIdx(idx)}
              >
                <div className="rx-ai-depth-top">
                  <span
                    className="hp-mono-pill"
                    style={{
                      backgroundColor:
                        idx === 3 ? '#ff4d2d' : pillar.accentColor,
                      color: '#ffffff'
                    }}
                  >
                    {st.code}
                  </span>
                  <small className="rx-guardrail-tag">{st.guardrail}</small>
                </div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="rx-diagram-frame">
            <picture>
              <source srcSet={webpSrc} type="image/webp" />
              <img
                src={svgFallback}
                alt="AI and Automation input to intelligent action workflow blueprint"
                width="820"
                height="420"
                loading="lazy"
                className="rx-diagram-img"
              />
            </picture>
          </div>
        </div>
      </section>
    );
  }

  // PILLAR 03 · WEBSITES & E-COMMERCE — 6-Layer Digital Experience Stack
  if (pillar.id === 'websites-ecommerce') {
    const layers = [
      {
        num: '01',
        name: 'Strategy & Offer Positioning',
        detail: 'Clarify who the site is for, what problem you solve, and what action visitors should take.',
        depth: '-26'
      },
      {
        num: '02',
        name: 'Information Structure & Sitemap',
        detail: 'Organize navigation, solution hubs, service pages, and product collections logically.',
        depth: '20'
      },
      {
        num: '03',
        name: 'Interface & Visual System',
        detail: 'Design high-contrast, trustworthy pages across desktop, tablet, and mobile viewports.',
        depth: '-22'
      },
      {
        num: '04',
        name: 'Value Content & Proof Architecture',
        detail: 'Pair clear headlines with structured explanations, diagrams, and buyer readiness checklists.',
        depth: '24'
      },
      {
        num: '05',
        name: 'Conversion & Checkout Flow',
        detail: 'Remove friction from enquiry forms, audit requests, cart drawers, and checkout steps.',
        depth: '-18'
      },
      {
        num: '06',
        name: 'CRM, Analytics & Fulfilment Integration',
        detail: 'Connect every form submission and order directly into your CRM, analytics, and operations.',
        depth: '22'
      }
    ];

    return (
      <section
        id={`pillar-${pillar.id}-signature-stage`}
        data-section-id={`pillar-${pillar.id}-signature-stage`}
        data-rx-section
        className="mp-section mp-section--cream"
      >
        <div className="mp-container">
          <div className="svx-section-head-split">
            <div>
              <span
                className="hp-mono-pill"
                style={{ backgroundColor: pillar.accentColor, color: badgeText }}
              >
                LAYERED DIGITAL-EXPERIENCE ARCHITECTURE
              </span>
              <h2 className="mp-h2" style={{ marginTop: 10 }}>
                Strategy → Structure → Interface → Content → Conversion → Integration
              </h2>
            </div>
          </div>

          <div className="rx-pillar-split-layout">
            <div className="rx-layered-stack-col">
              {layers.map((l, idx) => (
                <div
                  key={l.num}
                  data-rx-parallax-y={l.depth}
                  className={`rx-experience-layer-card ${
                    activeIdx === idx ? 'is-active' : ''
                  }`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span
                    className="svx-ledger-index"
                    style={{
                      backgroundColor: pillar.accentColor,
                      color: badgeText
                    }}
                  >
                    {l.num}
                  </span>
                  <div>
                    <h3>{l.name}</h3>
                    <p>{l.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rx-pillar-blueprint-col" data-rx-parallax-y="28">
              <div className="rx-diagram-frame">
                <picture>
                  <source srcSet={webpSrc} type="image/webp" />
                  <img
                    src={svgFallback}
                    alt="Websites and E-Commerce layered digital experience architecture blueprint"
                    width="820"
                    height="420"
                    loading="lazy"
                    className="rx-diagram-img"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // PILLAR 04 · LEAD GENERATION — 7-Stage Connected Opportunity Pipeline
  if (pillar.id === 'lead-generation') {
    const pipeline = [
      { stage: '01 · Attention', desc: 'Reach the right audience through search, social, and targeted campaigns.' },
      { stage: '02 · Offer', desc: 'Present a clear audit, consultation, or solution worth acting on.' },
      { stage: '03 · Landing Page', desc: 'Guide visitors through a focused, message-matched conversion page.' },
      { stage: '04 · Capture', desc: 'Collect contact details and bottleneck context with minimal friction.' },
      { stage: '05 · Qualification', desc: 'Filter enquiries by business fit, service need, and timeline.' },
      { stage: '06 · CRM Routing', desc: 'Create a structured opportunity record and assign team ownership.' },
      { stage: '07 · Follow-Up', desc: 'Trigger immediate confirmation and structured sales follow-up.' }
    ];

    return (
      <section
        id={`pillar-${pillar.id}-signature-stage`}
        data-section-id={`pillar-${pillar.id}-signature-stage`}
        data-rx-section
        className="mp-section mp-section--cream"
      >
        <div className="mp-container">
          <div className="svx-section-head-split">
            <div>
              <span
                className="hp-mono-pill"
                style={{ backgroundColor: pillar.accentColor, color: badgeText }}
              >
                CONNECTED OPPORTUNITY PIPELINE · 7-STAGE LEAD FLOW
              </span>
              <h2 className="mp-h2" style={{ marginTop: 10 }}>
                How Attention Becomes a Qualified, Followed-Up Opportunity
              </h2>
            </div>
          </div>

          <div
            data-rx-progress-track
            className="rx-lead-pipeline-spine-wrap"
            style={{ marginBottom: 28 }}
          >
            <div className="rx-lead-pipeline-rail">
              <div
                data-rx-progress-fill
                className="rx-lead-pipeline-fill"
              />
            </div>

            <div className="rx-lead-pipeline-grid">
              {pipeline.map((p, idx) => (
                <div
                  key={p.stage}
                  className={`rx-lead-stage-card ${
                    activeIdx === idx ? 'is-active' : ''
                  }`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span
                    className="hp-mono-pill"
                    style={{
                      backgroundColor:
                        activeIdx === idx ? pillar.accentColor : '#f59e0b',
                      color: activeIdx === idx ? badgeText : '#0b0f17'
                    }}
                  >
                    {p.stage}
                  </span>
                  <p style={{ marginTop: 8 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rx-diagram-frame">
            <picture>
              <source srcSet={webpSrc} type="image/webp" />
              <img
                src={svgFallback}
                alt="Lead Generation connected opportunity pipeline blueprint"
                width="820"
                height="420"
                loading="lazy"
                className="rx-diagram-img"
              />
            </picture>
          </div>
        </div>
      </section>
    );
  }

  // PILLAR 05 · TECHNOLOGY & DIGITAL TRANSFORMATION — Evolving System Blueprint
  const blueprintLayers = [
    {
      step: '01 · Current Systems',
      silo: 'Disconnected spreadsheets, legacy tools, and isolated logins.',
      connected: 'Complete audit of existing tools, data sources, and team workflows.'
    },
    {
      step: '02 · Business Processes',
      silo: 'Manual copy-pasting and tribal knowledge across departments.',
      connected: 'Standardized operational stages from customer enquiry to delivery.'
    },
    {
      step: '03 · Integration Layers',
      silo: 'Website, marketing, and sales tools unable to share status.',
      connected: 'Clean APIs, webhooks, and automation bridges linking core platforms.'
    },
    {
      step: '04 · Data Flow',
      silo: 'Duplicate records and conflicting customer information.',
      connected: 'Single source of truth syncing customer and operational state.'
    },
    {
      step: '05 · Phased Roadmap',
      silo: 'Risky all-at-once software replacements that stall adoption.',
      connected: 'Prioritized implementation waves delivering measurable quick wins.'
    },
    {
      step: '06 · Future Architecture',
      silo: 'Rigid systems that break as the business grows.',
      connected: 'Modular CRM, custom software, and AI-ready operating foundation.'
    }
  ];

  return (
    <section
      id={`pillar-${pillar.id}-signature-stage`}
      data-section-id={`pillar-${pillar.id}-signature-stage`}
      data-rx-section
      className="mp-section mp-section--cream"
    >
      <div className="mp-container">
        <div className="svx-section-head-split">
          <div>
            <span
              className="hp-mono-pill"
              style={{ backgroundColor: pillar.accentColor, color: badgeText }}
            >
              EVOLVING SYSTEM BLUEPRINT · FRAGMENTED TO CONNECTED
            </span>
            <h2 className="mp-h2" style={{ marginTop: 10 }}>
              Current Systems → Processes → Integration → Data Flow → Future Architecture
            </h2>
          </div>

          <div className="rx-blueprint-toggle">
            <button
              type="button"
              className={`svx-tab-btn ${
                blueprintMode === 'siloed' ? 'is-active' : ''
              }`}
              onClick={() => setBlueprintMode('siloed')}
            >
              Fragmented Silos
            </button>
            <button
              type="button"
              className={`svx-tab-btn ${
                blueprintMode === 'connected' ? 'is-active' : ''
              }`}
              onClick={() => setBlueprintMode('connected')}
            >
              Connected Blueprint ✓
            </button>
          </div>
        </div>

        <div className="rx-blueprint-layers-grid" style={{ marginBottom: 28 }}>
          {blueprintLayers.map((b, idx) => (
            <div
              key={b.step}
              data-rx-parallax-y={idx % 2 === 0 ? '20' : '-20'}
              className={`rx-blueprint-layer-card ${
                blueprintMode === 'connected' ? 'is-connected' : 'is-siloed'
              }`}
            >
              <span
                className="hp-mono-pill"
                style={{
                  backgroundColor:
                    blueprintMode === 'connected' ? '#a3e635' : '#ff4d2d',
                  color:
                    blueprintMode === 'connected' ? '#0b0f17' : '#ffffff'
                }}
              >
                {b.step}
              </span>
              <p style={{ marginTop: 10 }}>
                {blueprintMode === 'connected' ? b.connected : b.silo}
              </p>
            </div>
          ))}
        </div>

        <div className="rx-diagram-frame">
          <picture>
            <source srcSet={webpSrc} type="image/webp" />
            <img
              src={svgFallback}
              alt="Technology and Digital Transformation evolving system blueprint"
              width="820"
              height="420"
              loading="lazy"
              className="rx-diagram-img"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

/**
 * 3. CONNECTED ARCHITECTURE MAP FOR SOLUTIONS OVERVIEW (/solutions)
 * Interactive visual system map connecting all 5 Solution Pillars + 06 Digital Growth Audit
 */
export function SolutionsConnectedArchitectureMap({
  solutions = [],
  onNavigate
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const currentSol = solutions[activeIdx % solutions.length] || solutions[0];
  const badgeText = getReadableTextColor(currentSol?.accentColor || '#f59e0b');

  return (
    <section
      id="solutions-overview-architecture-map"
      data-section-id="solutions-overview-architecture-map"
      data-rx-section
      className="mp-section mp-section--white"
    >
      <div className="mp-container">
        <div className="svx-section-head-split">
          <div>
            <span className="hp-mono-pill hp-mono-pill--yellow">
              CONNECTED GROWTH ARCHITECTURE MAP
            </span>
            <h2 className="mp-h2" style={{ marginTop: 10 }}>
              How All 5 Solution Pillars & Growth Audit Work Together as One System
            </h2>
          </div>
          <span className="svx-illustrative-badge svx-illustrative-badge--dark">
            INTERACTIVE SYSTEM TOPOLOGY
          </span>
        </div>

        <div className="rx-arch-map-shell">
          {/* Top Interactive Node Conduit */}
          <div
            className="rx-arch-map-nodes"
            role="tablist"
            aria-label="Solution Architecture Nodes"
          >
            {solutions.map((sol, idx) => {
              const active = idx === activeIdx;
              return (
                <button
                  key={sol.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`rx-arch-node-btn ${active ? 'is-active' : ''}`}
                  style={
                    active
                      ? {
                          backgroundColor: sol.accentColor,
                          color: getReadableTextColor(sol.accentColor)
                        }
                      : {}
                  }
                  onClick={() => setActiveIdx(idx)}
                >
                  <span className="rx-arch-node-num">PILLAR {sol.index}</span>
                  <strong>{sol.title}</strong>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Architecture Inspector + Local Blueprint Image */}
          {currentSol && (
            <div className="rx-arch-inspector-grid">
              <div className="rx-arch-inspector-copy">
                <span
                  className="hp-mono-pill"
                  style={{
                    backgroundColor: currentSol.accentColor,
                    color: badgeText
                  }}
                >
                  PILLAR {currentSol.index} · {currentSol.title.toUpperCase()}
                </span>
                <h3>{currentSol.headline}</h3>
                <p>{currentSol.fullDesc}</p>

                <div className="rx-arch-chain-pills">
                  {currentSol.systemChain.map((node, i) => (
                    <span key={node} className="svx-flow-pill is-lit">
                      0{i + 1} · {node}
                    </span>
                  ))}
                </div>

                <div className="rx-arch-service-links">
                  {currentSol.finalArchitectureServices.map((srv) => (
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

              <div className="rx-arch-inspector-media">
                <div className="rx-diagram-frame">
                  <picture>
                    <source
                      srcSet={`/media/solutions/${currentSol.id}/system-blueprint.webp`}
                      type="image/webp"
                    />
                    <img
                      src={`/media/solutions/${currentSol.id}/system-blueprint.svg`}
                      alt={`${currentSol.title} connected architecture blueprint`}
                      width="820"
                      height="420"
                      loading="lazy"
                      className="rx-diagram-img"
                    />
                  </picture>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
