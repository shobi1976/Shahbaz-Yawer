import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { RuleCardGrid } from './components/RuleCardGrid';
import { RuleModal } from './components/RuleModal';
import { FeaturesHub } from './components/FeaturesHub';
import { ContentAndFaqSection } from './components/ContentAndFaqSection';
import { Footer } from './components/Footer';
import { CursorRevealer } from './components/CursorRevealer';
import { HowToPlayModal } from './components/HowToPlayModal';
import { BackgroundMode, CursorMode, RuleCard } from './types';
import { sound } from './utils/audio';

export default function App() {
  const [bgMode, setBgMode] = useState<BackgroundMode>('flaming-dice');
  const [cursorMode, setCursorMode] = useState<CursorMode>('neon-die');
  const [hoveredRuleColor, setHoveredRuleColor] = useState<string | null>(null);
  const [selectedRule, setSelectedRule] = useState<RuleCard | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handleToggleMute = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const handleExitClick = () => {
    // Scrolls to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRuleJump = () => {
    const el = document.getElementById('rules-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`relative min-h-screen bg-[#030712] text-slate-100 selection:bg-cyan-500 selection:text-white font-['Outfit'] ${
      bgMode === 'monochrome-cursor-reveal' ? 'monochrome-base' : ''
    }`}>
      {/* ══════════════════════════════════════════════════════════════════════
          FLAMING NEON DICE DYNAMIC BACKGROUND
          Uses the glowing blue & violet flaming dice as a responsive background
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Responsive Flaming Dice Wallpaper */}
        <div 
          className={`absolute inset-0 transition-all duration-700 ${
            bgMode === 'flaming-dice'
              ? 'opacity-65 scale-100'
              : bgMode === 'neon-glow'
              ? 'opacity-40 scale-100'
              : bgMode === 'monochrome-cursor-reveal'
              ? 'opacity-25 grayscale contrast-125 scale-100'
              : 'opacity-10 scale-100'
          }`}
        >
          <picture>
            <source media="(max-width: 640px)" srcSet="/neon_flame_dice_vert.jpg?v=6" />
            <img
              src="/neon_flame_dice_bg.jpg?v=6"
              alt="Glowing Blue Flaming Neon Dice Background"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-110 contrast-120 select-none"
            />
          </picture>

          {/* Animated Electric Flame Core Aura */}
          <div 
            style={{
              background: hoveredRuleColor 
                ? `radial-gradient(circle at 50% 45%, ${hoveredRuleColor}33 0%, transparent 65%)`
                : 'radial-gradient(circle at 50% 45%, rgba(6, 182, 212, 0.28) 0%, rgba(59, 130, 246, 0.15) 35%, transparent 70%)'
            }}
            className="absolute inset-0 transition-all duration-500 pointer-events-none mix-blend-screen animate-pulse" 
          />
        </div>

        {/* Cinematic Vignette & Deep Space Gradients for Legibility */}
        <div className={`absolute inset-0 transition-colors duration-700 ${
          bgMode === 'flaming-dice'
            ? 'bg-gradient-to-b from-[#030712]/75 via-[#030712]/55 to-[#030712]/85'
            : bgMode === 'neon-glow'
            ? 'bg-gradient-to-b from-[#030712]/85 via-[#030712]/70 to-[#030712]/95'
            : 'bg-[#030712]/90'
        }`} />

        {/* Ambient Grid Matrix Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Dynamic Cursor Spotlight & Background Neon Glow System */}
      <CursorRevealer
        cursorMode={cursorMode}
        bgMode={bgMode}
        hoveredRuleColor={hoveredRuleColor}
      />

      {/* Main Header (Double height, Triple logo, colorful badges) */}
      <Header
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section with Central Video & Surrounding 16-Card Dynamic Orbit Matrix */}
        <HeroSection
          onExitClick={handleExitClick}
          onRuleJump={handleRuleJump}
          bgMode={bgMode}
          hoveredColor={hoveredRuleColor}
          onHoverRule={setHoveredRuleColor}
          onSelectRule={setSelectedRule}
          onOpenGuide={() => setIsGuideOpen(true)}
        />

        {/* 2. The 16 Interactive Rule Cards */}
        <RuleCardGrid
          onHoverRule={setHoveredRuleColor}
          onSelectRule={setSelectedRule}
        />

        {/* 3. Social, Voice, Rooms, Tournaments & Synth Soundtrack Hub */}
        <FeaturesHub />

        {/* 4. Comparison Table, Strategy Guide, FAQ & E-E-A-T Trust Center */}
        <ContentAndFaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* 16 Rules Detail Modal */}
      {selectedRule && (
        <RuleModal
          rule={selectedRule}
          onClose={() => setSelectedRule(null)}
        />
      )}

      {/* "HOW TO PLAY" Official 10-Slide Tutorial Modal */}
      <HowToPlayModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        onStartPlay={() => {
          handleRuleJump();
        }}
      />
    </div>
  );
}
