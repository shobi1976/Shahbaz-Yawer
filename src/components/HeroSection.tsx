import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Flame, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { GameplayVideoPlayer } from './GameplayVideoPlayer';
import { CornerVideoCard } from './CornerVideoCard';
import { HEADER_CARDS_DATA, AnimatedCardVisual } from './HeaderCardsShowcase';
import { getDarkNeonCardBackground } from '../data/rulesData';
import { sound } from '../utils/audio';
import { BackgroundMode, RuleCard } from '../types';

interface HeroSectionProps {
  onExitClick: () => void;
  onRuleJump: () => void;
  bgMode: BackgroundMode;
  hoveredColor: string | null;
  onHoverRule?: (color: string | null) => void;
  onSelectRule?: (rule: RuleCard) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  hoveredColor,
  onHoverRule,
}) => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const arenaRef = useRef<HTMLDivElement>(null);
  const stageTiltRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // 3D Elliptical Orbit Physics Refs (Zero React re-renders per frame!)
  const angleRef = useRef<number>(0);
  const angularVelocityRef = useRef<number>(0.0016);
  const mouseRef = useRef({ x: 0, y: 0, nx: 0, ny: 0, isInside: false });
  const isDraggingRef = useRef(false);
  const hoveredCardIdRef = useRef<number | null>(null);
  const dragStartRef = useRef({ x: 0, startAngle: 0, moved: false });

  const [isAutoOrbit, setIsAutoOrbit] = useState(true);
  const [orbitSpeed, setOrbitSpeed] = useState<number>(1);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 540 });
  const [isInView, setIsInView] = useState(true);

  hoveredCardIdRef.current = hoveredCardId;

  useEffect(() => {
    const updateDimensions = () => {
      if (arenaRef.current) {
        const { clientWidth } = arenaRef.current;
        const currentWidth = clientWidth || (typeof window !== 'undefined' ? window.innerWidth : 1200);
        const vpHeight = typeof window !== 'undefined' ? window.innerHeight : 820;
        const mobile = currentWidth < 640;
        // On mobile, scale arena height (~310-340px) so the complete landing page fits into the initial screen
        const targetHeight = mobile
          ? Math.max(300, Math.min(340, vpHeight * 0.44))
          : Math.max(490, Math.min(580, vpHeight - 190));
        setDimensions({
          width: currentWidth,
          height: targetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions, { passive: true });
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Pause 60fps orbital physics when HeroSection scrolls off-screen
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsInView(entries.some((entry) => entry.isIntersecting));
      },
      { rootMargin: '150px 0px' }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const isMobile = dimensions.width < 640;

  // Responsive Ellipse Radii: 0.75x adjusted on mobile so all 10 orbiting cards stay fully inside viewport
  const rx = isMobile
    ? Math.max(95, Math.min(145, (dimensions.width - 60) * 0.40))
    : Math.max(130, Math.min(495, Math.min(dimensions.width * 0.41, (dimensions.width - 150) / 2)));

  const ry = isMobile
    ? Math.max(90, Math.min(115, dimensions.height * 0.32))
    : Math.max(150, Math.min(205, dimensions.height * 0.36));

  const applyCardTransforms = useCallback(
    (angle: number) => {
      const m = mouseRef.current;
      const activeHoverId = hoveredCardIdRef.current;
      const total = HEADER_CARDS_DATA.length;

      if (stageTiltRef.current) {
        const tiltX = m.isInside ? -m.ny * 6 : 0;
        const tiltY = m.isInside ? m.nx * 8 : 0;
        stageTiltRef.current.style.transform = `rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
      }

      // Mobile 0.75x scaling for revolving windows
      const mobileScaleMult = isMobile ? 0.75 : 1;

      for (let index = 0; index < total; index++) {
        const el = cardRefs.current[index];
        if (!el) continue;

        const card = HEADER_CARDS_DATA[index];
        const cardAngle = (index / total) * 2 * Math.PI + angle;
        const posX = Math.cos(cardAngle) * rx;
        const posY = Math.sin(cardAngle) * ry;
        const depthZ = Math.sin(cardAngle);

        let proximityRatio = 0;
        let isNearMouse = false;
        if (m.isInside) {
          const dx = m.x - posX;
          const dy = m.y - posY;
          const distSq = dx * dx + dy * dy;
          if (distSq < 44100) {
            isNearMouse = true;
            proximityRatio = Math.max(0, 1 - Math.sqrt(distSq) / 210);
          }
        }

        const isHovered = activeHoverId === card.id;
        let zIndex = depthZ > 0 ? 32 + Math.round(depthZ * 8) : 16 + Math.round(depthZ * 8);
        if (isNearMouse) zIndex = 50;
        if (isHovered) zIndex = 70;

        const baseScale = (0.86 + 0.18 * ((depthZ + 1) / 2)) * mobileScaleMult;
        const effectiveScale = isHovered
          ? 1.15 * mobileScaleMult
          : baseScale + proximityRatio * 0.08 * mobileScaleMult;
        const liftZ = isHovered ? 55 : depthZ * (isMobile ? 18 : 25) + proximityRatio * 28;
        const effectiveOpacity = isHovered ? 1 : 0.84 + 0.16 * ((depthZ + 1) / 2);

        el.style.transform = `translate(-50%, -50%) translate3d(${posX.toFixed(1)}px, ${posY.toFixed(1)}px, ${liftZ.toFixed(1)}px) scale(${effectiveScale.toFixed(3)})`;
        el.style.zIndex = String(zIndex);
        el.style.opacity = effectiveOpacity.toFixed(3);
      }
    },
    [rx, ry, isMobile]
  );

  // Continuous 60fps orbital physics loop via direct DOM mutation (0 React renders/sec)
  useEffect(() => {
    applyCardTransforms(angleRef.current);
    if (!isInView) return;

    let animationFrameId = 0;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const tick = () => {
      if (!document.hidden && !isDraggingRef.current) {
        const m = mouseRef.current;
        if (hoveredCardIdRef.current !== null) {
          angularVelocityRef.current = lerp(angularVelocityRef.current, 0.0003 * orbitSpeed, 0.08);
        } else if (m.isInside) {
          const targetVelocity = m.nx * 0.008 * orbitSpeed;
          angularVelocityRef.current = lerp(angularVelocityRef.current, targetVelocity, 0.06);
        } else if (isAutoOrbit) {
          const baseVelocity = 0.0016 * orbitSpeed;
          angularVelocityRef.current = lerp(angularVelocityRef.current, baseVelocity, 0.04);
        } else {
          angularVelocityRef.current = lerp(angularVelocityRef.current, 0, 0.08);
        }

        if (Math.abs(angularVelocityRef.current) > 0.00001 || m.isInside || hoveredCardIdRef.current !== null) {
          angleRef.current += angularVelocityRef.current;
          applyCardTransforms(angleRef.current);
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isAutoOrbit, orbitSpeed, isInView, applyCardTransforms]);

  // Immediately re-apply scale/zIndex when hoveredCardId changes
  useEffect(() => {
    applyCardTransforms(angleRef.current);
  }, [hoveredCardId, applyCardTransforms]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!arenaRef.current) return;
      const rect = arenaRef.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      const nx = Math.max(-1, Math.min(1, x / (rect.width / 2)));
      const ny = Math.max(-1, Math.min(1, y / (rect.height / 2)));

      mouseRef.current = { x, y, nx, ny, isInside: true };

      if (isDraggingRef.current) {
        const deltaX = e.clientX - dragStartRef.current.x;
        if (Math.abs(deltaX) > 4) {
          dragStartRef.current.moved = true;
        }
        angleRef.current = dragStartRef.current.startAngle + deltaX * 0.004;
      }

      applyCardTransforms(angleRef.current);
    },
    [applyCardTransforms]
  );

  const handleMouseEnter = useCallback(() => {
    mouseRef.current.isInside = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: 0, y: 0, nx: 0, ny: 0, isInside: false };
    isDraggingRef.current = false;
    if (onHoverRule) onHoverRule(null);
    setHoveredCardId(null);
    applyCardTransforms(angleRef.current);
  }, [onHoverRule, applyCardTransforms]);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a')) {
      return;
    }
    isDraggingRef.current = true;
    if (stageTiltRef.current) stageTiltRef.current.style.transition = 'none';
    dragStartRef.current = { x: e.clientX, startAngle: angleRef.current, moved: false };
  }, []);

  const handleMouseUp = useCallback(() => {
    isDraggingRef.current = false;
    if (stageTiltRef.current) {
      stageTiltRef.current.style.transition = 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)';
    }
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      dragStartRef.current = {
        x: e.touches[0].clientX,
        startAngle: angleRef.current,
        moved: false,
      };
    }
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (isDraggingRef.current && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - dragStartRef.current.x;
        if (Math.abs(deltaX) > 4) {
          dragStartRef.current.moved = true;
        }
        angleRef.current = dragStartRef.current.startAngle + deltaX * 0.005;
        applyCardTransforms(angleRef.current);
      }
    },
    [applyCardTransforms]
  );

  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const stepNext = useCallback(() => {
    sound.playClick(500);
    const step = (2 * Math.PI) / HEADER_CARDS_DATA.length;
    angleRef.current -= step;
    applyCardTransforms(angleRef.current);
  }, [applyCardTransforms]);

  const stepPrev = useCallback(() => {
    sound.playClick(450);
    const step = (2 * Math.PI) / HEADER_CARDS_DATA.length;
    angleRef.current += step;
    applyCardTransforms(angleRef.current);
  }, [applyCardTransforms]);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-start px-2 sm:px-4 pt-1 sm:pt-3 pb-6 sm:pb-8 overflow-x-clip select-none"
    >
      {/* 1. COMPACT ORBIT CONTROLS — Directly Below Header */}
      <div className="w-full max-w-7xl mx-auto text-center relative z-30 mb-1 sm:mb-2 px-2 sm:px-4">
        <div className="inline-flex flex-wrap items-center justify-center gap-1.5">
          <div className="flex items-center gap-1 bg-[#02070A]/82 backdrop-blur-md border border-[#0297DE]/35 rounded-lg p-0.5 shadow-md">
            <button
              type="button"
              onClick={stepPrev}
              className="p-1.5 rounded hover:bg-[#071826] text-slate-200 hover:text-white transition-colors cursor-pointer"
              title="Rotate Left"
              aria-label="Rotate Left"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => {
                sound.playClick(400);
                setIsAutoOrbit(!isAutoOrbit);
              }}
              className={`px-2.5 py-1 rounded text-[10px] font-mono font-black flex items-center gap-1 transition-all cursor-pointer ${
                isAutoOrbit
                  ? 'bg-[#0297DE] text-white shadow-[0_0_12px_rgba(2,151,222,0.5)]'
                  : 'bg-[#071826] text-slate-200 hover:text-white'
              }`}
            >
              {isAutoOrbit ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
              <span>{isAutoOrbit ? 'ORBIT' : 'PAUSED'}</span>
            </button>
            <button
              type="button"
              onClick={stepNext}
              className="p-1.5 rounded hover:bg-[#071826] text-slate-200 hover:text-white transition-colors cursor-pointer"
              title="Rotate Right"
              aria-label="Rotate Right"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-0.5 bg-[#02070A]/82 backdrop-blur-md border border-[#0297DE]/35 rounded-lg p-0.5 text-[10px] font-mono shadow-md">
            {[0.5, 1, 1.5].map((speed) => (
              <button
                key={speed}
                type="button"
                onClick={() => {
                  sound.playClick(450);
                  setOrbitSpeed(speed);
                }}
                className={`px-2 py-1 rounded font-black transition-all cursor-pointer ${
                  orbitSpeed === speed
                    ? 'bg-[#FC734D] text-[#02070A] shadow-[0_0_12px_rgba(252,115,77,0.45)]'
                    : 'text-slate-300 hover:bg-[#071826] hover:text-white'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. REVOLVING ARENA — Central Gameplay Video Surrounded by the 10 Header Cards */}
      <div
        ref={arenaRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          perspective: '1400px',
          height: `${dimensions.height}px`,
        }}
        className="relative w-full max-w-7xl mx-auto flex items-center justify-center cursor-grab active:cursor-grabbing preserve-3d my-1 sm:my-2"
      >
        <div
          ref={stageTiltRef}
          style={{
            transform: 'rotateX(0deg) rotateY(0deg)',
            transition: 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="relative w-full h-full flex items-center justify-center preserve-3d pointer-events-none will-change-transform"
        >
          {/* Subtle Orbital Guide Rings — Electric Blue & Cantaloupe Orange */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-55">
            <div
              style={{
                width: `${rx * 2 + (isMobile ? 40 : 80)}px`,
                height: `${ry * 2 + (isMobile ? 25 : 50)}px`,
                borderColor: hoveredColor || 'rgba(2, 151, 222, 0.55)',
              }}
              className="absolute rounded-[50%] border border-dashed transition-colors duration-500"
            />
            <div
              style={{
                width: `${rx * 1.45}px`,
                height: `${ry * 1.35}px`,
              }}
              className="absolute rounded-[50%] border border-[#FC734D]/40"
            />
          </div>

          {/* CENTRAL FOCAL POINT: GAMEPLAY VIDEO PLAYER (0.75x scaled & adjusted on mobile) */}
          <div
            style={{
              transform: isMobile
                ? 'translate(-50%, -50%) translateZ(10px) scale(0.75)'
                : 'translate(-50%, -50%) translateZ(10px) scale(1)',
              transformOrigin: 'center center',
              boxShadow: hoveredColor
                ? `0 20px 50px -12px ${hoveredColor}55, 0 0 30px -5px ${hoveredColor}40`
                : '0 22px 50px -12px rgba(0, 0, 0, 0.85), 0 0 32px -8px rgba(2, 151, 222, 0.32)',
            }}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className="absolute left-1/2 top-1/2 w-[84vw] max-w-[290px] sm:w-[78vw] sm:max-w-[360px] md:max-w-[410px] lg:max-w-[440px] z-25 transition-transform transition-shadow duration-300 rounded-2xl bg-[#02070A]/82 p-1.5 sm:p-2.5 border-2 border-[#0297DE]/40 shadow-2xl backdrop-blur-xl pointer-events-auto"
          >
            <GameplayVideoPlayer hoveredColor={hoveredColor} />
          </div>

          {/* 10 REVOLVING HEADER CARDS (0.75x scaled & adjusted on mobile, Midnight Black at Rest -> Rule-Card Neon Hover) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center preserve-3d">
            {HEADER_CARDS_DATA.map((card, index) => {
              const initialAngle = (index / HEADER_CARDS_DATA.length) * 2 * Math.PI;
              const initX = Math.cos(initialAngle) * rx;
              const initY = Math.sin(initialAngle) * ry;
              const initZ = Math.sin(initialAngle);
              const isHovered = hoveredCardId === card.id;

              return (
                <button
                  key={card.to}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  type="button"
                  aria-label={card.name}
                  onMouseEnter={() => {
                    sound.playHover(360 + card.id * 25);
                    setHoveredCardId(card.id);
                    if (onHoverRule) onHoverRule(card.hex);
                  }}
                  onMouseLeave={() => {
                    setHoveredCardId(null);
                    if (onHoverRule) onHoverRule(null);
                  }}
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (dragStartRef.current.moved) return;
                    sound.playClick(600);
                    navigate(card.to);
                  }}
                  style={{
                    transform: `translate(-50%, -50%) translate3d(${initX.toFixed(1)}px, ${initY.toFixed(1)}px, ${(initZ * (isMobile ? 18 : 25)).toFixed(1)}px) scale(${((0.86 + 0.18 * ((initZ + 1) / 2)) * (isMobile ? 0.75 : 1)).toFixed(3)})`,
                    zIndex: initZ > 0 ? 32 + Math.round(initZ * 8) : 16 + Math.round(initZ * 8),
                    opacity: isHovered ? 1 : 0.84 + 0.16 * ((initZ + 1) / 2),
                    background: isHovered
                      ? getDarkNeonCardBackground(card.surfaceId, true)
                      : 'rgba(2, 7, 10, 0.82)',
                    borderColor: isHovered ? card.hex : 'rgba(2, 151, 222, 0.36)',
                    boxShadow: isHovered
                      ? `0 0 28px ${card.hex}, 0 0 54px ${card.hex}70, inset 0 0 20px ${card.hex}45`
                      : '0 14px 30px -10px rgba(0, 0, 0, 0.82), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                  }}
                  className="absolute left-1/2 top-1/2 w-28 xs:w-32 sm:w-36 md:w-40 p-2 rounded-xl border-2 transition-colors duration-200 cursor-pointer overflow-hidden group pointer-events-auto backdrop-blur-md shadow-2xl text-center will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0297DE]"
                >
                  {/* Specular Sheen */}
                  <div
                    className={`absolute inset-0 pointer-events-none transition-opacity ${
                      isHovered
                        ? 'bg-gradient-to-br from-white/14 via-transparent to-black/30 opacity-100'
                        : 'bg-gradient-to-br from-[#0297DE]/12 via-transparent to-[#FC734D]/6 opacity-90'
                    }`}
                  />

                  {/* Top Neon Laser Bar on Hover */}
                  <div
                    style={
                      isHovered
                        ? { backgroundColor: card.hex, boxShadow: `0 0 12px ${card.hex}` }
                        : undefined
                    }
                    className={`absolute top-0 left-0 right-0 transition-all duration-200 ${
                      isHovered ? 'h-1 opacity-100' : 'h-0 opacity-0'
                    }`}
                  />

                  {/* Mirror Light Glint Sweep */}
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/25 to-transparent rotate-45 pointer-events-none group-hover:translate-x-full transition-transform duration-1000" />

                  {/* Animated Thematic Image */}
                  <div className="relative z-10">
                    <AnimatedCardVisual card={card} isHovered={isHovered} compact />

                    {/* Just Heading — No Sentences */}
                    <h3
                      className={`text-[11px] sm:text-xs md:text-[13px] font-black leading-tight font-['Chakra_Petch'] tracking-wide truncate transition-colors ${
                        isHovered ? 'text-white' : 'text-slate-100'
                      }`}
                    >
                      {card.name}
                    </h3>
                  </div>

                  {/* Bottom Neon Laser Bar on Hover */}
                  <div
                    style={
                      isHovered
                        ? { backgroundColor: card.hex, boxShadow: `0 0 10px ${card.hex}` }
                        : undefined
                    }
                    className={`absolute bottom-0 left-0 right-0 transition-all duration-200 ${
                      isHovered ? 'h-1 opacity-100' : 'h-0 opacity-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. MAIN HEADING WITH LEFT AND RIGHT VIDEO SCREENS — Positioned Below Revolving Arena */}
      <div className="w-full max-w-7xl mx-auto text-center relative z-20 mt-2 sm:mt-10 px-2 sm:px-4">
        <div className="grid grid-cols-2 md:grid-cols-[auto_1fr_auto] items-center justify-items-center gap-2.5 sm:gap-5 lg:gap-6 w-full">
          {/* Left Video Screen — Electric Blue (#0297DE) */}
          <div className="col-span-1 order-2 md:order-1 justify-self-center md:justify-self-start">
            <CornerVideoCard
              id="header-video-left-celebration"
              position="inline"
              videoSrc="/ludo_celebration_sequence.mp4"
              posterSrc="/ludo_celebration_sequence.jpg"
              title="5 WAY & 4 WAY CLASH"
              subtitle="Friends Celebrate at Board"
              badgeText="TABLE FEED · 01"
              accentColor="#0297DE"
              className="w-28 xs:w-32 sm:w-36 md:w-36 lg:w-40 xl:w-44"
            />
          </div>

          {/* Center Main Heading Block — Midnight Black Frosted Glass + Electric Blue & Cantaloupe Dual Bloom */}
          <div className="col-span-2 md:col-span-1 order-1 md:order-2 w-full max-w-2xl text-center p-3.5 sm:p-7 rounded-2xl sm:rounded-3xl bg-[#02070A]/85 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/38 backdrop-blur-md shadow-[0_20px_50px_-12px_rgba(0,0,0,0.85),0_0_36px_-10px_rgba(2,151,222,0.32)] relative overflow-hidden transition-all">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/16 via-transparent to-[#FC734D]/16 pointer-events-none opacity-95" />

            <div className="relative z-10">
              <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#0297DE] font-mono font-black mb-1 sm:mb-2">
                5 WAY &amp; 4 WAY · TWO DICE
              </div>

              <h1 className="text-lg xs:text-xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight font-['Chakra_Petch'] uppercase leading-tight text-white">
                LUDO DETHRONED <span className="text-[#FC734D]">5 WAY &amp; 4 WAY TWO DICE</span>
              </h1>

              <p className="text-xs sm:text-base font-medium leading-relaxed text-slate-200 font-['Outfit'] mt-1 sm:mt-2.5">
                A five-player, 3D Ludo-style strategy game played with two dice. Get all four of your tokens onto your coloured home path before anyone else does.
              </p>

              <p className="text-[9px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-300 font-mono font-bold flex items-center justify-center gap-1.5 mt-1 sm:mt-2">
                <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FC734D] inline shrink-0" />
                <span>5 WAY &amp; 4 WAY STRATEGY · 12 CANONICAL RULES</span>
              </p>

              {/* Play 4 Way (Electric Blue) & Play 5 Way (Cantaloupe Orange) Primary Actions */}
              <div className="mt-3 sm:mt-5 pt-2.5 sm:pt-4 border-t border-[#0297DE]/25 flex items-center justify-between gap-2 sm:gap-4 w-full">
                <Link
                  to="/play-4-way"
                  onClick={() => sound.playClick(550)}
                  className="min-h-[40px] sm:min-h-[44px] px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-[#0297DE] hover:bg-[#0284c7] border border-[#38bdf8]/60 text-white text-xs sm:text-sm font-['Chakra_Petch'] font-black uppercase tracking-wider transition-all flex items-center gap-1.5 sm:gap-2 shadow-[0_0_20px_rgba(2,151,222,0.48)] hover:scale-105 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" />
                  <span>Play 4 Way</span>
                </Link>

                <Link
                  to="/play-5-way"
                  onClick={() => sound.playClick(600)}
                  className="min-h-[40px] sm:min-h-[44px] px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-[#FC734D] hover:bg-[#ff8866] border border-[#ff9d80]/70 text-[#02070A] text-xs sm:text-sm font-['Chakra_Petch'] font-black uppercase tracking-wider transition-all flex items-center gap-1.5 sm:gap-2 shadow-[0_0_22px_rgba(252,115,77,0.5)] hover:scale-105 cursor-pointer"
                >
                  <span>Play 5 Way</span>
                  <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Video Screen — Cantaloupe Orange (#FC734D) */}
          <div className="col-span-1 order-3 md:order-3 justify-self-center md:justify-self-end">
            <CornerVideoCard
              id="header-video-right-ladder"
              position="inline"
              videoSrc="/royal_ladder_crown_climb.mp4"
              posterSrc="/royal_ladder_crown_climb.jpg"
              title="ASCENSION CORONATION"
              subtitle="The Golden Sky Ladder"
              badgeText="ROYAL FEED · 02"
              accentColor="#FC734D"
              className="w-28 xs:w-32 sm:w-36 md:w-36 lg:w-40 xl:w-44"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
