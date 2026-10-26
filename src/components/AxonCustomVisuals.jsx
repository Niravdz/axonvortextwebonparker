import React, { useState, useEffect } from 'react';

/**
 * 1. Four 100% Original SVG Architectural Badges for the Problem Section
 */
export function AxonProblemBadge({ variant = 0, className = '', ...rest }) {
  const configs = [
    {
      bg: '#ff4d2d',
      fg: '#ffffff',
      code: 'GAP 01',
      title: 'WEAK PRESENCE',
      sub: 'INVISIBLE ONLINE'
    },
    {
      bg: '#f59e0b',
      fg: '#0b0f17',
      code: 'GAP 02',
      title: 'SILOED ADS',
      sub: 'UNTRACKED ROAS'
    },
    {
      bg: '#8b5cf6',
      fg: '#ffffff',
      code: 'GAP 03',
      title: 'COLD LEADS',
      sub: 'SLOW FOLLOW-UP'
    },
    {
      bg: '#a3e635',
      fg: '#0b0f17',
      code: 'GAP 04',
      title: 'MANUAL DRAG',
      sub: 'REPETITIVE ADMIN'
    }
  ];
  const cfg = configs[variant % configs.length];

  return (
    <svg
      viewBox="0 0 210 130"
      className={className}
      role="presentation"
      {...rest}
    >
      <rect x="8" y="8" width="194" height="114" rx="18" fill="#000000" />
      <rect
        x="2"
        y="2"
        width="194"
        height="114"
        rx="18"
        fill={cfg.bg}
        stroke="#000000"
        strokeWidth="4"
      />
      <rect x="16" y="16" width="76" height="24" rx="6" fill="#000000" />
      <text
        x="54"
        y="32"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Fragment Mono, monospace"
        fontSize="11"
        fontWeight="700"
      >
        {cfg.code}
      </text>
      <circle
        cx="168"
        cy="28"
        r="10"
        fill="#ffffff"
        stroke="#000000"
        strokeWidth="3"
      />
      <text
        x="16"
        y="68"
        fill={cfg.fg}
        fontFamily="Radio Canada Big, sans-serif"
        fontSize="16.5"
        fontWeight="800"
      >
        {cfg.title}
      </text>
      <text
        x="16"
        y="94"
        fill={cfg.fg}
        fontFamily="Fragment Mono, monospace"
        fontSize="10.5"
        fontWeight="600"
        opacity="0.92"
      >
        {cfg.sub}
      </text>
    </svg>
  );
}

/**
 * 2. Three 100% Original Interactive Live System Simulators for the Folder Steps
 */
export function AxonFolderLiveSimulator({ stepIndex = 0 }) {
  const [activeChannel, setActiveChannel] = useState(0);
  const [pulseStep, setPulseStep] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setPulseStep((p) => (p + 1) % 5);
    }, 1400);
    return () => clearInterval(t);
  }, []);

  if (stepIndex === 0) {
    const channels = [
      {
        name: 'Google Search Intent',
        flow: 'Search Query → Intent Match Ad → Dedicated Landing Page → Enquiry',
        signal: 'High Commercial Intent',
        color: '#f59e0b'
      },
      {
        name: 'Meta Ads Creative System',
        flow: 'Audience Research → Hook/Angle Test → Offer Page → Pixel CAPI',
        signal: 'Paid Social Demand',
        color: '#ff4d2d'
      },
      {
        name: 'Technical & Local SEO',
        flow: 'Site Architecture → Search Intent Content → Organic Authority',
        signal: 'Compounding Visibility',
        color: '#a3e635'
      },
      {
        name: 'Social Media Strategy',
        flow: 'Discover → Understand → Trust → Engage → Act',
        signal: 'Brand Gravity',
        color: '#2563eb'
      }
    ];
    const ch = channels[activeChannel];

    return (
      <div className="ax-sim-stage">
        <div className="ax-sim-header">
          <span className="ax-sim-live-dot" />
          <span>CONNECTED DEMAND & ACQUISITION MATRIX</span>
        </div>

        <div className="ax-sim-tabs">
          {channels.map((c, idx) => (
            <button
              key={c.name}
              type="button"
              className={`ax-sim-tab ${
                activeChannel === idx ? 'is-active' : ''
              }`}
              style={
                activeChannel === idx
                  ? {
                      backgroundColor: c.color,
                      color:
                        c.color === '#2563eb' || c.color === '#ff4d2d'
                          ? '#fff'
                          : '#000'
                    }
                  : {}
              }
              onClick={() => setActiveChannel(idx)}
            >
              0{idx + 1} · {c.name.split(' ')[0]}
            </button>
          ))}
        </div>

        <div className="ax-sim-display-box">
          <div className="ax-sim-channel-title">
            <strong>{ch.name}</strong>
            <span className="ax-sim-pill" style={{ backgroundColor: ch.color }}>
              {ch.signal}
            </span>
          </div>
          <p className="ax-sim-flow-str">{ch.flow}</p>

          <div className="ax-sim-bars">
            {[
              'Strategy',
              'Content',
              'Distribution',
              'Conversion',
              'Measurement'
            ].map((node, i) => (
              <div
                key={node}
                className={`ax-sim-bar-node ${
                  pulseStep === i ? 'is-pulsing' : ''
                }`}
              >
                <small>0{i + 1}</small>
                <span>{node}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (stepIndex === 1) {
    const chain = [
      {
        stage: '01 Audience',
        detail: 'Targeted buyer traffic lands with clear expectations'
      },
      {
        stage: '02 5s Value Clarity',
        detail: 'Headline immediately explains what you do & why it matters'
      },
      {
        stage: '03 Trust & UX',
        detail: 'Proof architecture, mobile speed & frictionless Shopify/Web flow'
      },
      {
        stage: '04 Lead Capture',
        detail: 'Multi-step qualification form or frictionless checkout'
      },
      {
        stage: '05 CRM & Follow-Up',
        detail: 'Instant pipeline routing + automated SMS/Email sequence'
      }
    ];

    return (
      <div className="ax-sim-stage">
        <div className="ax-sim-header">
          <span className="ax-sim-live-dot" />
          <span>CONVERSION ARCHITECTURE & LEAD SYSTEM PIPELINE</span>
        </div>

        <div className="ax-sim-funnel-stack">
          {chain.map((item, idx) => (
            <div
              key={item.stage}
              className={`ax-sim-funnel-row ${
                pulseStep === idx ? 'is-highlighted' : ''
              }`}
              onClick={() => setPulseStep(idx)}
            >
              <span className="ax-sim-step-badge">{item.stage}</span>
              <span className="ax-sim-step-desc">{item.detail}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const workflows = [
    {
      trigger: 'Visitor asks pricing question at 11:40 PM',
      agent: 'AI Chatbot',
      action: 'Grounded answer + qualifies budget + books calendar slot',
      color: '#8b5cf6'
    },
    {
      trigger: 'Inbound phone call while team is in meeting',
      agent: 'Voice AI',
      action: 'Natural voice qualification + structured CRM record created',
      color: '#ff4d2d'
    },
    {
      trigger: 'New enquiry submitted on Landing Page',
      agent: 'Workflow Engine',
      action: 'Instant Slack alert + CRM deal + personalized SMS follow-up',
      color: '#a3e635'
    }
  ];

  return (
    <div className="ax-sim-stage">
      <div className="ax-sim-header">
        <span className="ax-sim-live-dot" />
        <span>HUMAN-IN-THE-LOOP AI & WORKFLOW ORCHESTRATOR</span>
      </div>

      <div className="ax-sim-ai-list">
        {workflows.map((wf, idx) => (
          <div
            key={wf.agent}
            className={`ax-sim-ai-card ${
              pulseStep % 3 === idx ? 'is-executing' : ''
            }`}
          >
            <div className="ax-sim-ai-top">
              <span
                className="ax-sim-agent-pill"
                style={{
                  backgroundColor: wf.color,
                  color: wf.color === '#a3e635' ? '#000' : '#fff'
                }}
              >
                {wf.agent}
              </span>
              <span className="ax-sim-status">HUMAN-CONTROLLED · ACTIVE</span>
            </div>
            <p className="ax-sim-trigger">
              <strong>Trigger:</strong> {wf.trigger}
            </p>
            <p className="ax-sim-action">
              <strong>Execution:</strong> {wf.action}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 3. 100% Original SVG Multi-Turn Architectural Labyrinth for the Maze Section.
 *    Remains mounted inside the Maze Stage: sharp in "Old Way", and blurs/fades
 *    in the background in "New Way" as the straight green line & marker cut right through it!
 */
export function AxonMazeComparisonSvg({ isBypassed = false }) {
  return (
    <svg
      viewBox="0 0 820 340"
      className={`hp-maze-svg-img ${isBypassed ? 'is-bypassed' : ''}`}
      role="presentation"
    >
      {/* Outer Maze Frame with Left Entrance & Right Exit Openings at y=170 */}
      <path
        d="M 16 142 L 16 20 L 804 20 L 804 142 M 804 198 L 804 320 L 16 320 L 16 198"
        fill="none"
        stroke="#0b0f17"
        strokeWidth="6"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />

      {/* Dense Multi-Turn Internal Maze Walls (Fragmented Silo Corridors) */}
      <path
        d="
          M 95 20 L 95 115 L 185 115 L 185 65 L 265 65 L 265 140
          M 95 320 L 95 225 L 175 225 L 175 275 L 265 275 L 265 195
          M 185 142 L 185 198
          M 265 140 L 340 140 L 340 55 L 430 55 L 430 125
          M 265 195 L 340 195 L 340 285 L 430 285 L 430 215
          M 385 105 L 385 235
          M 430 125 L 515 125 L 515 45 L 615 45 L 615 140
          M 430 215 L 515 215 L 515 290 L 615 290 L 615 200
          M 565 95 L 565 245
          M 615 140 L 695 140 L 695 70 L 755 70 L 755 142
          M 615 200 L 695 200 L 695 270 L 755 270 L 755 198
          M 730 125 L 730 215
        "
        fill="none"
        stroke="#0b0f17"
        strokeWidth="5.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />

      {/* Tangled Red Dashed Attempted Path Getting Stuck in Dead-Ends */}
      <path
        d="M 16 170 L 140 170 L 140 88 L 225 88 L 225 250 L 305 250 L 305 95 L 362 95"
        fill="none"
        stroke="#ff4d2d"
        strokeWidth="5"
        strokeDasharray="10 8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dead-End Silo Bottleneck Callout Badges Inside the Maze */}
      {[
        { x: 155, y: 52, label: '✕ Isolated Website' },
        { x: 300, y: 255, label: '✕ Unattributed Ads' },
        { x: 425, y: 88, label: '✕ Manual Follow-Up' },
        { x: 565, y: 262, label: '✕ Siloed SaaS Tools' },
        { x: 685, y: 54, label: '✕ Random AI Hype' }
      ].map((n) => (
        <g key={n.label} transform={`translate(${n.x}, ${n.y})`}>
          <rect
            x="-72"
            y="-16"
            width="144"
            height="32"
            rx="8"
            fill="#ffdfd6"
            stroke="#0b0f17"
            strokeWidth="2.5"
          />
          <text
            x="0"
            y="4"
            textAnchor="middle"
            fill="#0b0f17"
            fontFamily="Fragment Mono, monospace"
            fontSize="10.5"
            fontWeight="700"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/**
 * 4. 100% Original AxonVortex Signal Marker SVG
 */
export function AxonMarkerOrbSvg({ isComplete = false }) {
  return (
    <svg width="64" height="54" viewBox="0 0 64 54" role="presentation">
      <rect
        x="8"
        y="8"
        width="50"
        height="40"
        rx="14"
        fill="#0b0f17"
      />
      <rect
        x="4"
        y="4"
        width="50"
        height="40"
        rx="14"
        fill={isComplete ? '#a3e635' : '#f59e0b'}
        stroke="#0b0f17"
        strokeWidth="3.5"
      />
      <circle cx="21" cy="22" r="4.5" fill="#0b0f17" />
      <circle cx="37" cy="22" r="4.5" fill="#0b0f17" />
      <path
        d={
          isComplete
            ? 'M 20 31 Q 29 38 38 31'
            : 'M 21 33 Q 29 29 37 33'
        }
        fill="none"
        stroke="#0b0f17"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * 5. 100% Original Central Neural Architecture Core SVG
 */
export function AxonNeuralCoreSvg({
  activeStage = '01',
  mouseOffset = { x: 0, y: 0 }
}) {
  return (
    <div
      className="ax-core-svg-wrap"
      style={{
        transform: `translate(${mouseOffset.x * -10}px, ${
          mouseOffset.y * -10
        }px)`
      }}
    >
      <svg viewBox="0 0 420 320" className="hp-brain-img" role="presentation">
        <circle
          cx="210"
          cy="160"
          r="138"
          fill="rgba(255,255,255,0.38)"
          stroke="#0b0f17"
          strokeWidth="3.5"
          strokeDasharray="10 8"
        />
        <circle
          cx="210"
          cy="160"
          r="104"
          fill="#ffffff"
          stroke="#0b0f17"
          strokeWidth="4"
        />

        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180;
          const x2 = 210 + Math.cos(rad) * 135;
          const y2 = 160 + Math.sin(rad) * 135;
          return (
            <g key={deg}>
              <line
                x1="210"
                y1="160"
                x2={x2}
                y2={y2}
                stroke="#0b0f17"
                strokeWidth="3"
              />
              <circle
                cx={x2}
                cy={y2}
                r="7.5"
                fill="#a3e635"
                stroke="#0b0f17"
                strokeWidth="3"
              />
            </g>
          );
        })}

        <rect
          x="133"
          y="96"
          width="160"
          height="134"
          rx="24"
          fill="#0b0f17"
        />
        <rect
          x="127"
          y="90"
          width="160"
          height="134"
          rx="24"
          fill="#0b0f17"
          stroke="#ffffff"
          strokeWidth="4"
        />
        <rect
          x="145"
          y="108"
          width="124"
          height="26"
          rx="8"
          fill="#a3e635"
        />
        <text
          x="207"
          y="125"
          textAnchor="middle"
          fill="#0b0f17"
          fontFamily="Fragment Mono, monospace"
          fontSize="11.5"
          fontWeight="700"
        >
          LAYER {activeStage} ACTIVE
        </text>
        <text
          x="207"
          y="166"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="Radio Canada Big, sans-serif"
          fontSize="21"
          fontWeight="800"
        >
          AXONVORTEX
        </text>
        <text
          x="207"
          y="192"
          textAnchor="middle"
          fill="#f8f6f0"
          fontFamily="Fragment Mono, monospace"
          fontSize="10.5"
        >
          HUMAN + AI CORE
        </text>
      </svg>
    </div>
  );
}

/**
 * 6. 100% Original CTA Section Central Emblem & Floating Pillar Stickers
 */
export function AxonCtaEmblemSvg() {
  return (
    <svg
      viewBox="0 0 320 220"
      className="hp-cta-main-sticker"
      role="presentation"
    >
      <rect x="22" y="22" width="284" height="184" rx="28" fill="#000000" />
      <rect
        x="14"
        y="14"
        width="284"
        height="184"
        rx="28"
        fill="#f8f6f0"
        stroke="#000000"
        strokeWidth="5"
      />
      <rect
        x="38"
        y="34"
        width="236"
        height="34"
        rx="10"
        fill="#a3e635"
        stroke="#000000"
        strokeWidth="3"
      />
      <text
        x="156"
        y="56"
        textAnchor="middle"
        fill="#000000"
        fontFamily="Fragment Mono, monospace"
        fontSize="11.5"
        fontWeight="700"
      >
        GROWTH ARCHITECTURE
      </text>
      <text
        x="156"
        y="106"
        textAnchor="middle"
        fill="#0b0f17"
        fontFamily="Radio Canada Big, sans-serif"
        fontSize="22"
        fontWeight="800"
      >
        BUILD · MARKET
      </text>
      <text
        x="156"
        y="140"
        textAnchor="middle"
        fill="#ff4d2d"
        fontFamily="Radio Canada Big, sans-serif"
        fontSize="22"
        fontWeight="800"
      >
        AUTOMATE · SCALE
      </text>
      <text
        x="156"
        y="174"
        textAnchor="middle"
        fill="#323232"
        fontFamily="Fragment Mono, monospace"
        fontSize="10.5"
        fontWeight="600"
      >
        STRATEGY BEFORE TECHNOLOGY
      </text>
    </svg>
  );
}

export function AxonFloatingStickerSvg({
  label,
  sub,
  color,
  className = '',
  style = {}
}) {
  return (
    <svg
      viewBox="0 0 180 96"
      className={className}
      style={style}
      role="presentation"
    >
      <rect x="7" y="7" width="166" height="82" rx="14" fill="#000000" />
      <rect
        x="2"
        y="2"
        width="166"
        height="82"
        rx="14"
        fill={color}
        stroke="#000000"
        strokeWidth="3.5"
      />
      <text
        x="85"
        y="40"
        textAnchor="middle"
        fill="#0b0f17"
        fontFamily="Radio Canada Big, sans-serif"
        fontSize="15"
        fontWeight="800"
      >
        {label}
      </text>
      <text
        x="85"
        y="64"
        textAnchor="middle"
        fill="#0b0f17"
        fontFamily="Fragment Mono, monospace"
        fontSize="9.5"
        fontWeight="700"
      >
        {sub}
      </text>
    </svg>
  );
}
