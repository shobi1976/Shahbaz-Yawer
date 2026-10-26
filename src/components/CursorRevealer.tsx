import React, { useEffect, useState } from 'react';
import { CursorMode, BackgroundMode } from '../types';

interface CursorRevealerProps {
  cursorMode: CursorMode;
  bgMode: BackgroundMode;
  hoveredRuleColor: string | null;
}

export const CursorRevealer: React.FC<CursorRevealerProps> = ({
  hoveredRuleColor,
}) => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const glowColor = hoveredRuleColor || 'rgba(6, 182, 212, 0.25)';

  return (
    <div
      className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-300 overflow-hidden"
      aria-hidden="true"
    >
      {/* Soft spotlight following cursor */}
      <div
        className="absolute w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-25 mix-blend-multiply transition-[background] duration-300"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          background: `radial-gradient(circle, ${glowColor} 0%, rgba(59, 130, 246, 0.08) 45%, transparent 70%)`,
        }}
      />
    </div>
  );
};
