import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Sparkles, ArrowRight, Flame, Play, Pause, ChevronLeft, ChevronRight, 
  RotateCcw, Compass, Eye, Layers, Grid, Users, ShieldAlert, Dices, 
  RotateCw, AlertTriangle, Bot, Clock, Star, Crown, Swords, 
  MessageSquare, Mic, BarChart3, Zap, ShieldCheck, ArrowUpRight
} from 'lucide-react';
import { GameplayVideoPlayer } from './GameplayVideoPlayer';
import { CornerVideoCard } from './CornerVideoCard';
import { RULES_DATA } from '../data/rulesData';
import { sound } from '../utils/audio';
import { BackgroundMode, RuleCard } from '../types';

interface HeroSectionProps {
  onExitClick: () => void;
  onRuleJump: () => void;
  bgMode: BackgroundMode;
  hoveredColor: string | null;
  onHoverRule?: (color: string | null) => void;
  onSelectRule?: (rule: RuleCard) => void;
  onOpenGuide?: () => void;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users className="w-4 h-4" />,
  ShieldAlert: <ShieldAlert className="w-4 h-4" />,
  Dices: <Dices className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  RotateCw: <RotateCw className="w-4 h-4" />,
  Flame: <Flame className="w-4 h-4" />,
  AlertTriangle: <AlertTriangle className="w-4 h-4" />,
  Bot: <Bot className="w-4 h-4" />,
  Clock: <Clock className="w-4 h-4" />,
  Star: <Star className="w-4 h-4" />,
  Crown: <Crown className="w-4 h-4" />,
  Swords: <Swords className="w-4 h-4" />,
  MessageSquare: <MessageSquare className="w-4 h-4" />,
  Mic: <Mic className="w-4 h-4" />,
  BarChart3: <BarChart3 className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />,
};

const CATEGORIES = [
  'All',
  'Chaos & Core',
  'Combat & Powers',
  'Social & Voice',
  'Metrics & Timers'
] as const;

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExitClick,
  onRuleJump,
  bgMode,
  hoveredColor,
  onHoverRule,
  onSelectRule,
  onOpenGuide,
}) => {
  const arenaRef = useRef<HTMLDivElement>(null);
  
  // Orbit Math & Physics State
  const angleRef = useRef<number>(0);
  const angularVelocityRef = useRef<number>(0.0016);
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isAutoOrbit, setIsAutoOrbit] = useState(true);
  const [orbitSpeed, setOrbitSpeed] = useState<number>(1);
  const [hoveredRuleId, setHoveredRuleId] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  // Mouse & Viewport Tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, nx: 0, ny: 0, isInside: false });
  const [dimensions, setDimensions] = useState({ width: 1200, height: 520 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, startAngle: 0 });

  // Update container size dynamically on resize to fit all circling cards on screen without scrolling
  useEffect(() => {
    const updateDimensions = () => {
      if (arenaRef.current) {
        const { clientWidth } = arenaRef.current;
        const vpHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
        // Keep arena height fitted so top title, central video, and all 16 orbiting cards fit on screen without vertical scroll
        const targetHeight = Math.max(440, Math.min(550, vpHeight - 240));
        setDimensions({
          width: clientWidth || window.innerWidth,
          height: targetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Continuous 60fps orbital physics animation loop with cursor inertia
  useEffect(() => {
    let animationFrameId: number;

    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const tick = () => {
      if (!isDragging) {
        if (mousePos.isInside) {
          // Dynamic steering: horizontal rolling of cursor steers rotation with organic inertia
          const targetVelocity = mousePos.nx * 0.009 * orbitSpeed;
          angularVelocityRef.current = lerp(angularVelocityRef.current, targetVelocity, 0.06);
        } else if (isAutoOrbit) {
          const baseVelocity = 0.0016 * orbitSpeed;
          angularVelocityRef.current = lerp(angularVelocityRef.current, baseVelocity, 0.04);
        } else {
          angularVelocityRef.current = lerp(angularVelocityRef.current, 0, 0.08);
        }

        angleRef.current += angularVelocityRef.current;
        setCurrentAngle(angleRef.current);
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isAutoOrbit, orbitSpeed, isDragging, mousePos.isInside, mousePos.nx]);

  // Mouse Tracking on the Arena Matrix
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!arenaRef.current) return;
    const rect = arenaRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const nx = Math.max(-1, Math.min(1, x / (rect.width / 2)));
    const ny = Math.max(-1, Math.min(1, y / (rect.height / 2)));

    setMousePos({ x, y, nx, ny, isInside: true });

    if (isDragging) {
      const deltaX = e.clientX - dragStartRef.current.x;
      const sensitivity = 0.004;
      angleRef.current = dragStartRef.current.startAngle + deltaX * sensitivity;
      setCurrentAngle(angleRef.current);
    }
  }, [isDragging]);

  const handleMouseEnter = useCallback(() => {
    setMousePos((prev) => ({ ...prev, isInside: true }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMousePos((prev) => ({ ...prev, isInside: false, nx: 0, ny: 0 }));
    if (onHoverRule) onHoverRule(null);
    setHoveredRuleId(null);
    setIsDragging(false);
  }, [onHoverRule]);

  // Mouse drag support
  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // Only drag when clicking background, not buttons
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('a')) {
      return;
    }
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, startAngle: angleRef.current };
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Touch handlers for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStartRef.current = { x: e.touches[0].clientX, startAngle: angleRef.current };
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging && e.touches.length === 1) {
      const deltaX = e.touches[0].clientX - dragStartRef.current.x;
      const sensitivity = 0.005;
      angleRef.current = dragStartRef.current.startAngle + deltaX * sensitivity;
      setCurrentAngle(angleRef.current);
    }
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Manual stepping navigation
  const stepNext = useCallback(() => {
    sound.playClick(500);
    const step = (2 * Math.PI) / 16;
    angleRef.current -= step;
    setCurrentAngle(angleRef.current);
  }, []);

  const stepPrev = useCallback(() => {
    sound.playClick(450);
    const step = (2 * Math.PI) / 16;
    angleRef.current += step;
    setCurrentAngle(angleRef.current);
  }, []);

  // Focus a specific rule directly to the front-bottom focal slot
  const focusRuleByIndex = useCallback((index: number) => {
    sound.playClick(600);
    // Target position is front-center (angle = Math.PI / 2)
    const cardBaseAngle = (index / 16) * 2 * Math.PI;
    angleRef.current = Math.PI / 2 - cardBaseAngle;
    setCurrentAngle(angleRef.current);
    const targetRule = RULES_DATA[index];
    if (onSelectRule) {
      onSelectRule(targetRule);
    }
  }, [onSelectRule]);

  // Responsive Ellipse Radii (Scaled so all 16 orbiting cards are fully visible without cutoffs)
  const rx = Math.max(250, Math.min(500, dimensions.width * 0.41));
  const ry = Math.max(140, Math.min(195, dimensions.height * 0.35));

  // 3D Parallax Tilt of the Entire Matrix Canvas
  const tiltX = mousePos.isInside ? -mousePos.ny * 8 : 0;
  const tiltY = mousePos.isInside ? mousePos.nx * 10 : 0;

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-between px-2 sm:px-4 pt-2 pb-4 overflow-hidden select-none">
      
      {/* 1. EDITORIAL BRAND HEADER */}
      <div className="w-full max-w-7xl mx-auto text-center relative z-20 mb-1.5 px-2 sm:px-4">
        {/* Main Title Block flanked by Left and Right Video Cards */}
        <div className="grid grid-cols-2 md:grid-cols-[auto_1fr_auto] items-center justify-items-center gap-2 sm:gap-4 lg:gap-6 w-full mb-1.5">
          {/* Left Video Card */}
          <div className="col-span-1 order-2 md:order-1 justify-self-center md:justify-self-start">
            <CornerVideoCard
              id="header-video-left-celebration"
              position="inline"
              videoSrc="/ludo_celebration_sequence.mp4"
              posterSrc="/ludo_celebration_sequence.jpg"
              title="5-PLAYER TABLE CLASH"
              subtitle="Friends Celebrate at Board"
              badgeText="TABLE FEED // 01"
              accentColor="#06b6d4"
              className="w-28 xs:w-32 sm:w-36 md:w-36 lg:w-40 xl:w-44"
            />
          </div>

          {/* Center Title Block */}
          <div className="col-span-2 md:col-span-1 order-1 md:order-2 w-full max-w-2xl text-center px-1 sm:px-2">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-[9px] uppercase tracking-[0.3em] text-cyan-300 font-mono font-bold mb-1.5 shadow-xs">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>PROJECT ALPHA // 5-WAY CHAOS MATRIX</span>
            </div>

            {/* High-Contrast Main Title */}
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight font-['Chakra_Petch'] uppercase leading-none text-white">
              LUDO EMPEROR <span className="text-cyan-400">5 WAY</span>
            </h1>

            {/* Italic Quotation Tagline */}
            <p className="text-xs sm:text-sm lg:text-base font-light italic leading-tight text-slate-300 font-serif mt-1">
              "Don't Let the Winner Win the Game"
            </p>

            {/* Subtitle & 4v1 Mechanic reminder */}
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-400 font-mono flex items-center justify-center gap-1.5 mt-1">
              <Flame className="w-3 h-3 text-orange-400 inline animate-pulse" />
              <span>THE ULTIMATE 4v1 ANTI-LEADER WARZONE • 16 TACTICAL DECREES</span>
            </p>

            {/* Quick Tutorial Launch Button in Hero */}
            {onOpenGuide && (
              <div className="mt-2.5 flex items-center justify-center gap-2">
                <button
                  onClick={() => {
                    sound.playClick(550);
                    onOpenGuide();
                  }}
                  className="px-3.5 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-amber-500/50 hover:border-amber-400 text-amber-300 hover:text-amber-200 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.25)] cursor-pointer group"
                >
                  <span className="text-amber-400 group-hover:scale-125 transition-transform">📖</span>
                  <span>HOW TO PLAY: QUICK START FOR LUDO PROS</span>
                  <Sparkles className="w-3 h-3 text-amber-400" />
                </button>
              </div>
            )}
          </div>

          {/* Right Video Card */}
          <div className="col-span-1 order-3 md:order-3 justify-self-center md:justify-self-end">
            <CornerVideoCard
              id="header-video-right-ladder"
              position="inline"
              videoSrc="/royal_ladder_crown_climb.mp4"
              posterSrc="/royal_ladder_crown_climb.jpg"
              title="ASCENSION CORONATION"
              subtitle="The Golden Sky Ladder"
              badgeText="ROYAL FEED // 02"
              accentColor="#f59e0b"
              className="w-28 xs:w-32 sm:w-36 md:w-36 lg:w-40 xl:w-44"
            />
          </div>
        </div>

        {/* Interactive Controls & Category Bar */}
        <div className="mt-2 flex flex-wrap items-center justify-center gap-1.5 max-w-4xl mx-auto">
          {/* Orbit Stepper & Auto Toggle */}
          <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 rounded-lg p-0.5 shadow-md">
            <button
              onClick={stepPrev}
              className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Rotate Left"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                sound.playClick(400);
                setIsAutoOrbit(!isAutoOrbit);
              }}
              className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold flex items-center gap-1 transition-all cursor-pointer ${
                isAutoOrbit ? 'bg-cyan-500 text-slate-950 shadow-xs' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {isAutoOrbit ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
              <span>{isAutoOrbit ? 'ORBIT ACTIVE' : 'PAUSED'}</span>
            </button>
            <button
              onClick={stepNext}
              className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Rotate Right"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Speed Toggle */}
          <div className="flex items-center gap-0.5 bg-slate-900/90 border border-slate-800 rounded-lg p-0.5 text-[9px] font-mono shadow-md">
            {[0.5, 1, 1.5].map((speed) => (
              <button
                key={speed}
                onClick={() => {
                  sound.playClick(450);
                  setOrbitSpeed(speed);
                }}
                className={`px-1.5 py-0.5 rounded font-bold transition-all cursor-pointer ${
                  orbitSpeed === speed
                    ? 'bg-cyan-500 text-slate-950 shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {speed}x
              </button>
            ))}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1 bg-slate-900/90 border border-slate-800 rounded-lg p-0.5 shadow-md overflow-x-auto max-w-full">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick(400);
                  setActiveCategory(cat);
                }}
                className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 shadow-xs font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Jump to Full Decrees Grid */}
          <button
            onClick={() => {
              sound.playClick(500);
              onRuleJump();
            }}
            className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 text-slate-200 hover:text-white text-[10px] font-mono font-bold flex items-center gap-1 transition-all shadow-md cursor-pointer"
          >
            <Grid className="w-3 h-3 text-cyan-400" />
            <span>ALL 16 DECREES</span>
          </button>
        </div>
      </div>

      {/* 2. THE GRAND ORBITAL ARENA STAGE (Centerpiece of the entire landing page) */}
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
        className="relative w-full max-w-7xl mx-auto flex items-center justify-center cursor-grab active:cursor-grabbing preserve-3d my-auto"
      >
        {/* Tilting 3D Stage Container */}
        <div 
          style={{
            transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
            transition: isDragging ? 'none' : 'transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="relative w-full h-full flex items-center justify-center preserve-3d pointer-events-none"
        >
          {/* Orbital Radar Celestial Grid Rings & Coordinates */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-45">
            {/* Outer Elliptical Trajectory */}
            <div 
              style={{
                width: `${rx * 2 + 100}px`,
                height: `${ry * 2 + 60}px`,
                borderColor: hoveredColor || 'rgba(6, 182, 212, 0.4)',
              }}
              className="absolute rounded-[50%] border border-dashed transition-colors duration-500 animate-radar-pulse"
            />
            {/* Middle Celestial Ring */}
            <div 
              style={{
                width: `${rx * 1.5}px`,
                height: `${ry * 1.4}px`,
              }}
              className="absolute rounded-[50%] border border-slate-800/80"
            />
            {/* Inner Video Core Halo */}
            <div 
              style={{
                width: `${rx * 0.95}px`,
                height: `${ry * 0.95}px`,
                boxShadow: `0 0 45px -10px ${hoveredColor || 'rgba(6, 182, 212, 0.3)'}`,
              }}
              className="absolute rounded-[50%] border border-slate-800/60 transition-all duration-500"
            />
            {/* Crosshair Cardinal Guidelines */}
            <div className="absolute w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
            <div className="absolute h-full max-h-[600px] w-px bg-gradient-to-b from-transparent via-slate-800 to-transparent" />
          </div>

          {/* ══════════════════════════════════════════════════════════════════════
              FOCAL POINT: MAIN GAMEPLAY VIDEO / ARENA VISUAL CONTAINER
              Placed squarely in the center of the viewport as the hero core.
              Carefully proportioned so the 16 orbiting cards are fully visible without cutoffs.
             ══════════════════════════════════════════════════════════════════════ */}
          <div 
            style={{
              transform: 'translate(-50%, -50%) translateZ(10px)',
              boxShadow: hoveredColor 
                ? `0 20px 50px -12px ${hoveredColor}44, 0 0 30px -5px ${hoveredColor}33` 
                : '0 20px 40px -12px rgba(0, 0, 0, 0.7)',
            }}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            className="absolute left-1/2 top-1/2 w-[88vw] max-w-[340px] sm:max-w-[390px] md:max-w-[430px] lg:max-w-[460px] z-25 transition-shadow duration-500 rounded-xl bg-slate-900/95 p-1.5 sm:p-2 border border-slate-700/80 shadow-2xl backdrop-blur-xl pointer-events-auto"
          >
            {/* Top Tactical Status Badge */}
            <div className="flex items-center justify-between px-2 py-0.5 mb-1 border-b border-slate-800/80 text-[9px] sm:text-[10px] font-mono">
              <div className="flex items-center gap-1.5 text-slate-200 font-bold">
                <div 
                  style={{ backgroundColor: hoveredColor || '#06b6d4' }}
                  className="w-1.5 h-1.5 rounded-full animate-pulse transition-colors shadow-[0_0_8px_currentColor]" 
                />
                <span>ARENA CORE // 5-PLAYER WARZONE</span>
              </div>
              <div className="text-slate-400 uppercase tracking-widest hidden sm:block text-[9px]">
                CENTRAL FOCAL POINT
              </div>
            </div>

            {/* Embedded Interactive Video Player */}
            <GameplayVideoPlayer hoveredColor={hoveredColor} />

            {/* Bottom Status Ticker */}
            <div className="mt-1 px-2 py-0.5 flex items-center justify-between text-[9px] font-mono text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-bold">● LIVE HUD</span>
                <span className="hidden sm:inline">Dice Split • Star Safes • Crown Run</span>
              </div>
              <span className="text-slate-500 text-[8.5px]">HOVER DECREES TO ORBIT</span>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════════
              DYNAMIC CIRCULAR / FLOATING ORBIT MATRIX: THE 16 RULE CARDS
              Positioned in a dynamic circular orbit surrounding the video core.
             ══════════════════════════════════════════════════════════════════════ */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center preserve-3d">
            {RULES_DATA.map((rule, index) => {
              // Calculate orbital angle on the ellipse
              const cardAngle = (index / 16) * 2 * Math.PI + currentAngle;
              
              // X and Y coordinates on the ellipse
              const posX = Math.cos(cardAngle) * rx;
              const posY = Math.sin(cardAngle) * ry;

              // Z depth calculation (-1 to +1)
              const depthZ = Math.sin(cardAngle);

              // Distance to mouse for smooth proximity lift & glow
              const distToMouse = Math.sqrt(
                Math.pow(mousePos.x - posX, 2) + Math.pow(mousePos.y - posY, 2)
              );
              const isNearMouse = mousePos.isInside && distToMouse < 220;
              const proximityRatio = isNearMouse ? Math.max(0, 1 - distToMouse / 220) : 0;

              const isHovered = hoveredRuleId === rule.id;
              const isCategoryMatch = activeCategory === 'All' || rule.category === activeCategory;

              // Calculate 3D Depth, Scaling, and Z-Index
              // Cards in the front (depthZ > 0) have higher baseline zIndex than the video (zIndex 25)
              // Cards in the back (depthZ < 0) sit behind the video core
              let zIndex = depthZ > 0 ? 32 + Math.round(depthZ * 8) : 16 + Math.round(depthZ * 8);
              if (isNearMouse) zIndex = 50;
              if (isHovered) zIndex = 70;

              // Base scale modulated by depthZ, plus proximity and hover lift
              const baseScale = 0.88 + 0.16 * ((depthZ + 1) / 2);
              const effectiveScale = isHovered 
                ? 1.12 
                : (baseScale + proximityRatio * 0.10) * (isCategoryMatch ? 1 : 0.88);

              // Lift in Z toward user
              const liftZ = isHovered ? 50 : (depthZ * 25 + proximityRatio * 30);

              // Opacity: non-matching categories dim slightly
              const baseOpacity = isCategoryMatch ? (0.85 + 0.15 * ((depthZ + 1) / 2)) : 0.35;
              const effectiveOpacity = isHovered ? 1 : baseOpacity;

              const ruleNumberStr = `0${rule.id}`.slice(-2);

              return (
                <div
                  key={rule.id}
                  onMouseEnter={() => {
                    sound.playClick(600);
                    setHoveredRuleId(rule.id);
                    if (onHoverRule) onHoverRule(rule.hex);
                  }}
                  onMouseLeave={() => {
                    setHoveredRuleId(null);
                    if (onHoverRule) onHoverRule(null);
                  }}
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playClick(650);
                    if (onSelectRule) onSelectRule(rule);
                  }}
                  style={{
                    transform: `translate(-50%, -50%) translate3d(${posX}px, ${posY}px, ${liftZ}px) scale(${effectiveScale})`,
                    zIndex,
                    opacity: effectiveOpacity,
                    borderColor: isHovered 
                      ? rule.hex 
                      : isNearMouse 
                      ? rule.hex 
                      : 'rgba(51, 65, 85, 0.6)',
                    boxShadow: isHovered
                      ? `0 14px 30px -6px ${rule.hex}70, 0 0 20px ${rule.hex}50`
                      : isNearMouse
                      ? `0 10px 22px -4px ${rule.hex}40`
                      : '0 4px 12px rgba(0, 0, 0, 0.35)',
                  }}
                  className={`absolute left-1/2 top-1/2 w-36 sm:w-40 md:w-44 p-2 sm:p-2.5 rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden group pointer-events-auto ${
                    isHovered ? 'bg-[#0b1120] text-white' : 'bg-slate-900/90 text-slate-200 backdrop-blur-md'
                  }`}
                >
                  {/* Accent Color Indicator Dot / Top Bar */}
                  <div 
                    style={{ backgroundColor: rule.hex }}
                    className="absolute top-0 left-0 right-0 h-1 transition-all group-hover:h-1.5"
                  />

                  {/* Top Row: Decree Number & Icon */}
                  <div className="flex items-center justify-between gap-1 mb-1 pt-0.5">
                    <span className={`text-[9px] font-mono font-bold tracking-wider uppercase transition-colors ${
                      isHovered ? 'text-slate-300' : 'text-slate-400'
                    }`}>
                      DECREE {ruleNumberStr}
                    </span>
                    <div 
                      style={{ 
                        color: rule.hex,
                        backgroundColor: isHovered ? '#1e293b' : `${rule.hex}22`,
                      }}
                      className="p-0.5 rounded transition-colors"
                    >
                      {ICON_MAP[rule.iconName] || <Sparkles className="w-3 h-3" />}
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className={`text-[11px] sm:text-xs font-bold leading-tight font-['Chakra_Petch'] truncate transition-colors ${
                    isHovered ? 'text-white' : 'text-slate-100'
                  }`}>
                    {rule.title}
                  </h3>

                  {/* Anti-Leader Tactical Badge */}
                  <div className={`mt-1 px-1.5 py-0.5 rounded text-[8.5px] font-mono font-medium truncate flex items-center gap-1 transition-colors ${
                    isHovered ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-slate-950/80 text-slate-300 border border-slate-800'
                  }`}>
                    <ShieldAlert className="w-2.5 h-2.5 text-pink-400 shrink-0" />
                    <span className="truncate">{rule.antiLeaderMechanic}</span>
                  </div>

                  {/* Expanded Hover Cue */}
                  <div className={`mt-1 pt-1 border-t text-[8px] font-mono flex items-center justify-between transition-all ${
                    isHovered ? 'border-slate-800 text-cyan-400 opacity-100' : 'border-transparent text-slate-400 opacity-0 h-0 overflow-hidden'
                  }`}>
                    <span>INSPECT TACTICS</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. BOTTOM DECREE SELECTOR RIBBON & QUICK ACTIONS */}
      <div className="w-full max-w-5xl mx-auto mt-2 px-2 sm:px-4 relative z-20">
        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-xl p-2 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            {/* Direct 16-Decree Pill Bar */}
            <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto py-0.5">
              <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider shrink-0 mr-1">
                JUMP TO:
              </span>
              {RULES_DATA.map((r, idx) => (
                <button
                  key={r.id}
                  onClick={() => focusRuleByIndex(idx)}
                  style={{
                    borderColor: hoveredRuleId === r.id ? r.hex : 'rgba(51, 65, 85, 0.6)',
                  }}
                  className={`w-6 h-6 rounded-md text-[9px] font-mono font-bold flex items-center justify-center transition-all cursor-pointer shrink-0 border ${
                    hoveredRuleId === r.id
                      ? 'bg-cyan-500 text-slate-950 shadow-xs scale-105'
                      : 'bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                  title={r.title}
                >
                  {r.id}
                </button>
              ))}
            </div>

            {/* Quick Hero Actions */}
            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href="#features-hub"
                onClick={() => sound.playClick(400)}
                className="px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-white text-[10px] font-mono font-bold transition-colors cursor-pointer"
              >
                AUDIO & LOUNGES
              </a>
              <button
                onClick={() => {
                  sound.playClick(400);
                  onExitClick();
                }}
                className="px-2.5 py-1 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 text-[10px] font-mono font-bold transition-colors cursor-pointer"
              >
                TOP ⇧
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
