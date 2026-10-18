import React, { useEffect, useState, useRef } from 'react';
import { BackgroundMode, CursorMode } from '../types';
import { sound } from '../utils/audio';

interface NeonDieCursorProps {
  cursorMode: CursorMode;
  bgMode: BackgroundMode;
  hoveredRuleColor: string | null;
}

export const NeonDieCursor: React.FC<NeonDieCursorProps> = ({
  cursorMode,
  hoveredRuleColor,
}) => {
  const [pos, setPos] = useState<{ x: number; y: number }>({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 300,
  });
  const [targetPos, setTargetPos] = useState<{ x: number; y: number }>({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 500,
    y: typeof window !== 'undefined' ? window.innerHeight / 2 : 300,
  });

  const [velocity, setVelocity] = useState<{ vx: number; vy: number }>({ vx: 0, vy: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isRolling, setIsRolling] = useState(false);
  const [rollRotation, setRollRotation] = useState(0);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  const requestRef = useRef<number | null>(null);
  const lastPosRef = useRef<{ x: number; y: number }>({ x: 500, y: 300 });

  // Neon accent color for the die outline (cyan by default)
  const activeNeonColor = hoveredRuleColor || '#00f3ff';

  // Contrasting color for the pips/dots against the die outline
  const getContrastingDotColor = (outlineColor: string) => {
    const c = outlineColor.toLowerCase();
    // If outline is pink / red / magenta, contrast with electric cyan
    if (c.includes('f43f') || c.includes('ec48') || c.includes('e11d') || c.includes('db27') || c.includes('ff007f') || c.includes('pink') || c.includes('red') || c.includes('rose')) {
      return '#00f3ff'; // Electric Cyan
    }
    // If outline is yellow / amber / orange, contrast with bright electric violet / cyan
    if (c.includes('eab3') || c.includes('f59e') || c.includes('fbbf') || c.includes('f973')) {
      return '#00f3ff'; // Electric Cyan
    }
    // Default (e.g. Cyan #00f3ff, blue, or green outline): high-contrast vibrant Neon Hot Pink / Magenta
    return '#ff007f';
  };

  const dotColor = getContrastingDotColor(activeNeonColor);

  // Listen for mouse / touch movement & clicks
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('button, a, input, [role="button"], .rule-card, video, .cursor-pointer')
        );
        setIsHoveringInteractive(isInteractive);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setTargetPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
        setIsVisible(true);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Clicking rolls the neon die with audio feedback
    const handleClick = () => {
      if (cursorMode === 'off') return;
      setIsRolling(true);
      setRollRotation((prev) => prev + 360 + (Math.random() > 0.5 ? 90 : -90));
      sound.playDiceRoll();

      setTimeout(() => {
        setIsRolling(false);
      }, 450);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('click', handleClick);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorMode]);

  // Smooth lerp physics loop + velocity-based 3D tilt
  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const animate = () => {
      setPos((prev) => {
        const newX = lerp(prev.x, targetPos.x, 0.35);
        const newY = lerp(prev.y, targetPos.y, 0.35);

        const vx = newX - lastPosRef.current.x;
        const vy = newY - lastPosRef.current.y;
        lastPosRef.current = { x: newX, y: newY };
        setVelocity({ vx, vy });

        return { x: newX, y: newY };
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [targetPos]);

  if (cursorMode === 'off' || !isVisible) {
    return null;
  }

  // Tilt based on horizontal velocity (clamped between -22deg and +22deg)
  const tiltAngle = Math.max(-22, Math.min(22, velocity.vx * 1.4));
  const verticalSquash = Math.max(0.9, Math.min(1.1, 1 + Math.abs(velocity.vy) * 0.01));

  return (
    <div
      id="neon-die-cursor-root"
      className="fixed pointer-events-none z-50 transition-transform duration-75 ease-out select-none will-change-transform"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: `translate(-50%, -50%) scale(${isHoveringInteractive ? 1.15 : 1})`,
      }}
    >
      {/* 3D Isometric Neon Die - EXACT geometry of the ivory die with NO shades/shadows */}
      <div
        id="neon-die-cube-container"
        style={{
          transform: `rotate(${tiltAngle + rollRotation}deg) scaleY(${verticalSquash})`,
          transition: isRolling
            ? 'transform 0.45s cubic-bezier(0.17, 0.89, 0.32, 1.25)'
            : 'transform 0.1s ease-out',
        }}
        className="relative w-11 h-11 flex items-center justify-center cursor-none"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Top Face Gradient (Translucent Cyber Sheen) */}
            <linearGradient id="neonTopFace" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#082b3e" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#02141f" stopOpacity="0.98" />
            </linearGradient>

            {/* Left Face Gradient (Translucent Cyber Magenta/Dark Glass) */}
            <linearGradient id="neonLeftFace" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e0b2e" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#0a0312" stopOpacity="0.98" />
            </linearGradient>

            {/* Right Face Gradient (Translucent Dark Matrix Glass) */}
            <linearGradient id="neonRightFace" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0e2338" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#030b14" stopOpacity="0.98" />
            </linearGradient>

            {/* Contrasting Pip Radial Glow */}
            <radialGradient id="neonPipCore" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="45%" stopColor={dotColor} stopOpacity="1" />
              <stop offset="100%" stopColor={dotColor} stopOpacity="0.85" />
            </radialGradient>

            {/* Rounded Die Cube Silhouette Mask/Clip */}
            <clipPath id="roundedDieCube">
              <path
                d="M 45.5,18.4 Q 50,16 54.5,18.4 L 75.5,29.6 Q 80,32 80,37 L 80,61 Q 80,66 75.5,68.4 L 54.5,79.6 Q 50,82 45.5,79.6 L 24.5,68.4 Q 20,66 20,61 L 20,37 Q 20,32 24.5,29.6 Z"
              />
            </clipPath>
          </defs>

          {/* 3 FACES CLIPPED WITH ROUNDED CORNERS */}
          <g clipPath="url(#roundedDieCube)">
            {/* 1. TOP FACE (Rhombus) */}
            <polygon
              points="50,16 80,32 50,48 20,32"
              fill="url(#neonTopFace)"
            />

            {/* 2. LEFT FACE */}
            <polygon
              points="20,32 50,48 50,82 20,66"
              fill="url(#neonLeftFace)"
            />

            {/* 3. RIGHT FACE */}
            <polygon
              points="50,48 80,32 80,66 50,82"
              fill="url(#neonRightFace)"
            />
          </g>

          {/* Internal Seams with Rounded Junctions */}
          <path
            d="M 21.5,32.8 L 50,48 L 78.5,32.8 M 50,48 L 50,80"
            fill="none"
            stroke={activeNeonColor}
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Outer Rounded Cube Border Contour */}
          <path
            d="M 45.5,18.4 Q 50,16 54.5,18.4 L 75.5,29.6 Q 80,32 80,37 L 80,61 Q 80,66 75.5,68.4 L 54.5,79.6 Q 50,82 45.5,79.6 L 24.5,68.4 Q 20,66 20,61 L 20,37 Q 20,32 24.5,29.6 Z"
            fill="none"
            stroke={activeNeonColor}
            strokeWidth="2.2"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* ======================================================= */}
          {/* PIPS: EXACTLY AS IN THE IMAGE (die_ivory.png)           */}
          {/* Top Face = 1 dot                                        */}
          {/* Left Face = 3 dots                                      */}
          {/* Right Face = 2 dots                                     */}
          {/* HIGH CONTRAST: dotColor (#ff007f) vs outline (#00f3ff)  */}
          {/* ======================================================= */}

          {/* --- TOP FACE: EXACTLY 1 DOT (Center of top face: 50, 32) --- */}
          <g id="pip-top-1">
            <ellipse
              cx="50"
              cy="32"
              rx="4.6"
              ry="2.6"
              fill="url(#neonPipCore)"
              stroke={dotColor}
              strokeWidth="1.2"
            />
            <ellipse
              cx="50"
              cy="32"
              rx="2"
              ry="1.1"
              fill="#ffffff"
            />
          </g>

          {/* --- LEFT FACE: EXACTLY 3 DOTS along the diagonal --- */}
          {/* Pip 1 (Top-Left of left face: 28, 44) */}
          <g id="pip-left-1" transform="rotate(-28 28 44)">
            <ellipse
              cx="28"
              cy="44"
              rx="4.2"
              ry="2.4"
              fill="url(#neonPipCore)"
              stroke={dotColor}
              strokeWidth="1.2"
            />
            <ellipse
              cx="28"
              cy="44"
              rx="1.8"
              ry="1"
              fill="#ffffff"
            />
          </g>

          {/* Pip 2 (Center of left face: 35, 57) */}
          <g id="pip-left-2" transform="rotate(-28 35 57)">
            <ellipse
              cx="35"
              cy="57"
              rx="4.2"
              ry="2.4"
              fill="url(#neonPipCore)"
              stroke={dotColor}
              strokeWidth="1.2"
            />
            <ellipse
              cx="35"
              cy="57"
              rx="1.8"
              ry="1"
              fill="#ffffff"
            />
          </g>

          {/* Pip 3 (Bottom-Right of left face: 42, 70) */}
          <g id="pip-left-3" transform="rotate(-28 42 70)">
            <ellipse
              cx="42"
              cy="70"
              rx="4.2"
              ry="2.4"
              fill="url(#neonPipCore)"
              stroke={dotColor}
              strokeWidth="1.2"
            />
            <ellipse
              cx="42"
              cy="70"
              rx="1.8"
              ry="1"
              fill="#ffffff"
            />
          </g>

          {/* --- RIGHT FACE: EXACTLY 2 DOTS along the diagonal --- */}
          {/* Pip 1 (Upper-Right of right face: 71, 46) */}
          <g id="pip-right-1" transform="rotate(28 71 46)">
            <ellipse
              cx="71"
              cy="46"
              rx="4.2"
              ry="2.4"
              fill="url(#neonPipCore)"
              stroke={dotColor}
              strokeWidth="1.2"
            />
            <ellipse
              cx="71"
              cy="46"
              rx="1.8"
              ry="1"
              fill="#ffffff"
            />
          </g>

          {/* Pip 2 (Lower-Left of right face: 59, 68) */}
          <g id="pip-right-2" transform="rotate(28 59 68)">
            <ellipse
              cx="59"
              cy="68"
              rx="4.2"
              ry="2.4"
              fill="url(#neonPipCore)"
              stroke={dotColor}
              strokeWidth="1.2"
            />
            <ellipse
              cx="59"
              cy="68"
              rx="1.8"
              ry="1"
              fill="#ffffff"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
