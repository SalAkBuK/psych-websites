'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export default function TypewriterText({
  text,
  delay = 0,
  speed = 50,
  className = '',
  as = 'p',
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<any>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Component = as;

  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      const timeout = setTimeout(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayedText(text.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(interval);
          }
        }, speed);

        return () => clearInterval(interval);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isInView, hasStarted, text, delay, speed]);

  return (
    <Component ref={ref} className={className}>
      {displayedText}
      <span style={{ opacity: displayedText.length < text.length ? 1 : 0 }}>|</span>
    </Component>
  );
}
