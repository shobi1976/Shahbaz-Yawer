import React, { useEffect, useRef, useState } from 'react';
import { CursorMode, BackgroundMode } from '../types';

interface CursorRevealerProps {
  cursorMode: CursorMode;
  bgMode: BackgroundMode;
  hoveredRuleColor: string | null;
}

/**
 * GPU-accelerated spotlight using direct DOM transform updates via requestAnimationFrame.
 * Avoids React setState on mousemove (0 re-renders/sec) and skips mounting on touch devices.
 */
export const CursorRevealer: React.FC<CursorRevealerProps> = ({
  hoveredRuleColor,
}) => {
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(pointer: fine)');
    setHasFinePointer(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setHasFinePointer(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!hasFinePointer) return;

    let rafId = 0;
    let targetX = -400;
    let targetY = -400;
    let visible = false;

    const flushPosition = () => {
      rafId = 0;
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }
      if (containerRef.current) {
        containerRef.current.style.opacity = visible ? '1' : '0';
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      visible = true;
      if (!rafId) {
        rafId = requestAnimationFrame(flushPosition);
      }
    };

    const handleMouseLeave = () => {
      visible = false;
      if (!rafId) {
        rafId = requestAnimationFrame(flushPosition);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [hasFinePointer]);

  if (!hasFinePointer) return null;

  const glowColor = hoveredRuleColor || 'rgba(2, 151, 222, 0.36)';

  return (
    <div
      ref={containerRef}
      style={{ opacity: 0 }}
      className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300 overflow-hidden"
      aria-hidden="true"
    >
      {/* Electric Blue & Cantaloupe Orange spotlight following cursor via GPU transform */}
      <div
        ref={spotlightRef}
        className="absolute left-0 top-0 w-[450px] h-[450px] rounded-full blur-3xl opacity-35 mix-blend-screen transition-[background] duration-300 will-change-transform"
        style={{
          transform: 'translate3d(-400px, -400px, 0) translate(-50%, -50%)',
          background: `radial-gradient(circle, ${glowColor} 0%, rgba(252, 115, 77, 0.18) 45%, transparent 70%)`,
        }}
      />
    </div>
  );
};
