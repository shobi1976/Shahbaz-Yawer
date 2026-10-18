import React, { useEffect, useState } from 'react';
import { BackgroundMode, CursorMode } from '../types';
import { NeonDieCursor } from './NeonDieCursor';

interface CursorRevealerProps {
  cursorMode: CursorMode;
  bgMode: BackgroundMode;
  hoveredRuleColor: string | null;
  spotlightRadius?: number;
}

export const CursorRevealer: React.FC<CursorRevealerProps> = ({
  cursorMode,
  bgMode,
  hoveredRuleColor,
  spotlightRadius = 260,
}) => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 300,
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const activeColor = hoveredRuleColor || '#00f3ff';

  return (
    <>
      {/* 
        NOIR CURSOR COLOR REVEALING SPOTLIGHT
        Reveals colorful vibrancy, high contrast, and vivid neon glow right under the cursor in real time
      */}
      <div
        className="fixed inset-0 pointer-events-none z-30 transition-opacity duration-300 select-none mix-blend-screen"
        style={{
          background: `radial-gradient(circle ${spotlightRadius}px at ${mousePos.x}px ${mousePos.y}px, ${activeColor}40 0%, ${activeColor}15 45%, transparent 70%)`,
        }}
      />

      {/* Die Cursor icon tracker */}
      <NeonDieCursor
        cursorMode={cursorMode}
        bgMode={bgMode}
        hoveredRuleColor={hoveredRuleColor}
      />
    </>
  );
};
