'use client';

import { useState, useEffect } from 'react';

interface BackgroundSlideshowProps {
  images: string[];
  interval?: number;
  className?: string;
}

export default function BackgroundSlideshow({
  images,
  interval = 5000,
  className = '',
}: BackgroundSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (images.length === 0) return null;

  return (
    <div className={className} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      {images.map((src, index) => (
        <div
          key={src}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            opacity: currentIndex === index ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
          }}
        />
      ))}
    </div>
  );
}
