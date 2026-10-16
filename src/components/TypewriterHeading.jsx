import React, { useEffect, useRef, useState } from 'react';

export default function TypewriterHeading({
  text = '',
  typingSpeed = 52,
  tag: Tag = 'h2',
  className = '',
  style = {},
  active = true
}) {
  const [displayed, setDisplayed] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [fadingOut, setFadingOut] = useState(false);
  const prevTextRef = useRef(text);
  const timerRef = useRef(null);

  useEffect(() => {
    if (prevTextRef.current !== text) {
      setFadingOut(true);
      const t = setTimeout(() => {
        setDisplayed('');
        setCharIndex(0);
        setFadingOut(false);
        prevTextRef.current = text;
      }, 180);
      return () => clearTimeout(t);
    }
  }, [text]);

  useEffect(() => {
    if (!active || fadingOut) return;
    if (charIndex < text.length) {
      timerRef.current = setTimeout(() => {
        setDisplayed(text.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, typingSpeed);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [charIndex, text, typingSpeed, active, fadingOut]);

  return (
    <Tag
      className={`hp-typewriter ${className}`}
      style={{
        ...style,
        opacity: fadingOut ? 0 : 1,
        transition: 'opacity 0.18s ease-out',
        whiteSpace: 'pre-wrap'
      }}
      aria-live="polite"
    >
      {displayed}
      <span className="hp-typewriter-cursor">_</span>
    </Tag>
  );
}
