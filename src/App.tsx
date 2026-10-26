import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CursorRevealer } from './components/CursorRevealer';
import { RuleModal } from './components/RuleModal';
import { HowToPlayModal } from './components/HowToPlayModal';
import { BackgroundMode, CursorMode, RuleCard } from './types';
import { sound } from './utils/audio';

// Import Pages
import { HomePage } from './pages/HomePage';
import { HowToPlayPage } from './pages/HowToPlayPage';
import { RulesPage } from './pages/RulesPage';
import { StrategiesPage } from './pages/StrategiesPage';
import { FaqPage } from './pages/FaqPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { GlobalCompendiumPage } from './pages/GlobalCompendiumPage';
import { Play4WayPage, Play5WayPage } from './pages/GameArenaPage';
import silverDotsDiceBg from './assets/images/silver_dots_dice_1792673707473.jpg';

function AppContent() {
  const [bgMode] = useState<BackgroundMode>('flaming-dice');
  const [cursorMode] = useState<CursorMode>('neon-die');
  const [hoveredRuleColor, setHoveredRuleColor] = useState<string | null>(null);
  const [selectedRule, setSelectedRule] = useState<RuleCard | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const navigate = useNavigate();

  const handleToggleMute = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
  };

  const handleExitClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRuleJump = () => {
    const el = document.getElementById('rules-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/rules');
    }
  };

  return (
    <div className={`relative min-h-screen bg-sky-50/40 text-slate-950 selection:bg-cyan-500 selection:text-white font-['Outfit'] ${
      bgMode === 'monochrome-cursor-reveal' ? 'monochrome-base' : ''
    }`}>
      {/* ══════════════════════════════════════════════════════════════════════
          GALAXY FLAMING NEON DICE DYNAMIC BACKGROUND (VISIBLE ON ALL PAGES)
          Shines through all frosted glass boxes & cards from top to bottom
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Responsive Flaming Dice Wallpaper */}
        <div 
          className={`absolute inset-0 transition-all duration-700 ${
            bgMode === 'flaming-dice'
              ? 'opacity-100 scale-100'
              : bgMode === 'neon-glow'
              ? 'opacity-85 scale-100'
              : bgMode === 'monochrome-cursor-reveal'
              ? 'opacity-35 grayscale contrast-125 scale-100'
              : 'opacity-30 scale-100'
          }`}
        >
          <img
            src={silverDotsDiceBg}
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.endsWith('/assets/images/silver_dots_dice.jpg')) {
                target.src = '/assets/images/silver_dots_dice.jpg';
              }
            }}
            alt="Ludo Dethroned Light Galaxy Flaming Dice with Silver Dots Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-105 contrast-105 select-none"
          />

          {/* Subtle Dynamic Neon Aura */}
          <div 
            style={{
              background: hoveredRuleColor 
                ? `radial-gradient(circle at 50% 45%, ${hoveredRuleColor}30 0%, transparent 65%)`
                : 'radial-gradient(circle at 50% 45%, rgba(6, 182, 212, 0.14) 0%, rgba(59, 130, 246, 0.08) 35%, transparent 70%)'
            }}
            className="absolute inset-0 transition-all duration-500 pointer-events-none" 
          />
        </div>

        {/* Delicate Light Veil Preserving Full Wallpaper Visibility Behind Frosted Glass */}
        <div className={`absolute inset-0 transition-colors duration-700 ${
          bgMode === 'flaming-dice'
            ? 'bg-gradient-to-b from-white/10 via-white/5 to-white/15'
            : bgMode === 'neon-glow'
            ? 'bg-gradient-to-b from-white/25 via-white/15 to-white/30'
            : 'bg-white/65'
        }`} />

        {/* Subtle Ambient Grid Matrix Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_75%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Dynamic Cursor Spotlight & Background Neon Glow System */}
      <CursorRevealer
        cursorMode={cursorMode}
        bgMode={bgMode}
        hoveredRuleColor={hoveredRuleColor}
      />

      {/* Main Header (Double height, Triple logo, colorful badges, normal navigation links) */}
      <Header
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Real Router Page Content */}
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage
              bgMode={bgMode}
              hoveredRuleColor={hoveredRuleColor}
              onHoverRule={setHoveredRuleColor}
              onSelectRule={setSelectedRule}
              onExitClick={handleExitClick}
              onRuleJump={handleRuleJump}
            />
          } 
        />
        <Route 
          path="/play-4-way" 
          element={<Play4WayPage />} 
        />
        <Route 
          path="/play-5-way" 
          element={<Play5WayPage />} 
        />
        <Route 
          path="/how-to-play" 
          element={
            <HowToPlayPage onOpenTutorial={() => setIsGuideOpen(true)} />
          } 
        />
        <Route 
          path="/rules" 
          element={
            <RulesPage
              onHoverRule={setHoveredRuleColor}
              onSelectRule={setSelectedRule}
            />
          } 
        />
        <Route 
          path="/strategies" 
          element={<StrategiesPage />} 
        />
        <Route 
          path="/global-compendium" 
          element={<GlobalCompendiumPage />} 
        />
        <Route 
          path="/faq" 
          element={<FaqPage />} 
        />
        <Route 
          path="/about" 
          element={<AboutPage />} 
        />
        <Route 
          path="/contact" 
          element={<ContactPage />} 
        />
        <Route 
          path="/privacy" 
          element={<PrivacyPage />} 
        />
        {/* Fallback to Home */}
        <Route 
          path="*" 
          element={
            <HomePage
              bgMode={bgMode}
              hoveredRuleColor={hoveredRuleColor}
              onHoverRule={setHoveredRuleColor}
              onSelectRule={setSelectedRule}
              onExitClick={handleExitClick}
              onRuleJump={handleRuleJump}
            />
          } 
        />
      </Routes>

      {/* Footer with normal links to all pages */}
      <Footer />

      {/* 12 Rules Detail Modal */}
      {selectedRule && (
        <RuleModal
          rule={selectedRule}
          onClose={() => setSelectedRule(null)}
        />
      )}

      {/* "HOW TO PLAY" Official Slide Tutorial Modal */}
      <HowToPlayModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        onExploreRules={() => {
          handleRuleJump();
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
