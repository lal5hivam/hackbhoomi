'use client';

import React, { useEffect, useState } from 'react';

const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const handleScroll = (): void => {
    const scrollTop: number = window.scrollY;
    const docHeight: number =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled: number = (scrollTop / docHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '5px',
        backgroundColor: '#ef9f5a',
        zIndex: 9999,
        transition: 'width 0.2s ease',
      }}
    />
  );
};

export default ScrollProgressBar;
