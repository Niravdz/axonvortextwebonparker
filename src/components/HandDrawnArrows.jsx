import React from 'react';

/**
 * 100% Original AXONVORTEX Hand-Drawn Architectural Arrows.
 * Positioned in a dedicated row BELOW the "How It Works" intro headline so they
 * NEVER overlap the text, curving downward from the headline toward the
 * Left (Phase 01), Center (Phase 02), and Right (Phase 03) folder tabs below.
 */
export default function HandDrawnArrows({ visible = false }) {
  return (
    <div
      className={`hp-arrows-group ${visible ? 'is-visible' : ''}`}
      aria-hidden="true"
    >
      {/* Left Arrow — Marigold Amber (#f59e0b) pointing down-left to Phase 01 tab */}
      <svg
        className="hp-drawn-arrow hp-drawn-arrow--left"
        viewBox="0 0 280 190"
        role="presentation"
      >
        <path
          d="M 245 16 C 175 26, 98 62, 46 154 M 26 116 L 44 158 L 88 138"
          fill="none"
          stroke="#f59e0b"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 420,
            strokeDashoffset: visible ? 0 : 420,
            transition:
              'stroke-dashoffset 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.05s'
          }}
        />
      </svg>

      {/* Center Arrow — Royal Blue / Lavender (#6366f1) pointing straight down to Phase 02 tab */}
      <svg
        className="hp-drawn-arrow hp-drawn-arrow--center"
        viewBox="0 0 180 190"
        role="presentation"
      >
        <path
          d="M 90 12 C 82 64, 96 112, 90 162 M 62 128 L 90 166 L 118 128"
          fill="none"
          stroke="#6366f1"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 360,
            strokeDashoffset: visible ? 0 : 360,
            transition:
              'stroke-dashoffset 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.2s'
          }}
        />
      </svg>

      {/* Right Arrow — Electric Lime (#65a30d) pointing down-right to Phase 03 tab */}
      <svg
        className="hp-drawn-arrow hp-drawn-arrow--right"
        viewBox="0 0 280 190"
        role="presentation"
      >
        <path
          d="M 35 16 C 105 26, 182 62, 234 154 M 192 138 L 236 158 L 254 116"
          fill="none"
          stroke="#65a30d"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 420,
            strokeDashoffset: visible ? 0 : 420,
            transition:
              'stroke-dashoffset 0.85s cubic-bezier(0.22, 1, 0.36, 1) 0.35s'
          }}
        />
      </svg>
    </div>
  );
}
