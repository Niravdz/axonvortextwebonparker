import React from 'react';

const AXON_LETTERS = ['A', 'X', 'O', 'N'];
const VORTEX_LETTERS = ['V', 'O', 'R', 'T', 'E', 'X'];

export default function AnimatedBrandLogo() {
  return (
    <span className="av-logo av-logo--vortex-spin" aria-hidden="true">
      <span className="av-logo__axon">
        <span className="av-logo__box">
          <span className="av-logo__shine" />
        </span>
        {AXON_LETTERS.map((letter, index) => (
          <span className="av-logo__letter" key={`axon-${letter}-${index}`}>
            <span style={{ '--av-index': index }}>{letter}</span>
          </span>
        ))}
      </span>

      <span className="av-logo__vortex">
        <span className="av-logo__line av-logo__line--top" />
        {VORTEX_LETTERS.map((letter, index) => (
          <span className="av-logo__letter" key={`vortex-${letter}-${index}`}>
            <span style={{ '--av-index': index + AXON_LETTERS.length }}>
              {letter}
            </span>
          </span>
        ))}
        <span className="av-logo__line av-logo__line--bottom" />
      </span>
    </span>
  );
}
