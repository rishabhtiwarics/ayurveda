'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgressIndicator() {
  const scrollBarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollBarRef.current) return;

      const { scrollHeight, clientHeight } = document.documentElement;
      const scrollableHeight = scrollHeight - clientHeight;

      if (scrollableHeight <= 0) {
        scrollBarRef.current.style.transform = 'scaleY(0)';
        return;
      }

      const scrollProgress = Math.min(window.scrollY / scrollableHeight, 1);
      scrollBarRef.current.style.transform = `scaleY(${scrollProgress})`;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-indicator" aria-hidden="true">
      <div className="scroll-indicator__thumb" ref={scrollBarRef} />
    </div>
  );
}
