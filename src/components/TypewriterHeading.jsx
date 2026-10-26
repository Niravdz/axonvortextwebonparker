import React, { useEffect, useRef, useState } from 'react';

export default function TypewriterHeading({
  text = '',
  typingSpeed = 52,
  tag: Tag = 'h2',
  className = '',
  style = {},
  active = true
}) {
  const [reducedMotion, setReducedMotion] = useState(() =>
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const [displayed, setDisplayed] = useState(() =>
    reducedMotion ? text : ''
  );
  const [charIndex, setCharIndex] = useState(() =>
    reducedMotion ? text.length : 0
  );
  const [fadingOut, setFadingOut] = useState(false);
  const prevTextRef = useRef(text);
  const timerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e) => {
      setReducedMotion(e.matches);
      if (e.matches) {
        setDisplayed(text);
        setCharIndex(text.length);
      }
    };
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, [text]);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayed(text);
      setCharIndex(text.length);
      prevTextRef.current = text;
      return undefined;
    }
    if (prevTextRef.current !== text) {
      setFadingOut(true);
      const t = setTimeout(() => {
        setDisplayed('');
        setCharIndex(0);
        setFadingOut(false);
        prevTextRef.current = text;
      }, 150);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [text, reducedMotion]);

  useEffect(() => {
    if (reducedMotion || !active || fadingOut) return undefined;
    if (charIndex < text.length) {
      timerRef.current = setTimeout(() => {
        setDisplayed(text.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, typingSpeed);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [charIndex, text, typingSpeed, active, fadingOut, reducedMotion]);

  const untyped = charIndex < text.length ? text.slice(charIndex) : '';

  return (
    <Tag
      className={`hp-typewriter ${className}`}
      style={{
        ...style,
        opacity: fadingOut ? 0 : 1,
        transition: 'opacity 0.15s ease-out',
        whiteSpace: 'pre-wrap'
      }}
      aria-label={text}
    >
      <span aria-hidden="true">{displayed}</span>
      {!reducedMotion && (
        <span className="hp-typewriter-cursor" aria-hidden="true">
          _
        </span>
      )}
      {untyped && (
        <span
          style={{ visibility: 'hidden', pointerEvents: 'none' }}
          aria-hidden="true"
        >
          {untyped}
        </span>
      )}
    </Tag>
  );
}
