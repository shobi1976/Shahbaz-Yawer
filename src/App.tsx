import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CursorRevealer } from './components/CursorRevealer';
import { BackgroundMode, CursorMode, RuleCard } from './types';
import { sound } from './utils/audio';

// Eagerly load HomePage for instant initial paint; code-split all secondary routes & modals
import { HomePage } from './pages/HomePage';
import silverDotsDiceBgWebp from './assets/images/metallic_silver_dice_pastel_left3_1793077112713.webp';

const StartHerePage = lazy(() =>
  import('./pages/StartHerePage').then((m) => ({ default: m.StartHerePage }))
);
const NotTraditionalLudoPage = lazy(() =>
  import('./pages/NotTraditionalLudoPage').then((m) => ({ default: m.NotTraditionalLudoPage }))
);
const HowToPlayPage = lazy(() =>
  import('./pages/HowToPlayPage').then((m) => ({ default: m.HowToPlayPage }))
);
const RulesPage = lazy(() =>
  import('./pages/RulesPage').then((m) => ({ default: m.RulesPage }))
);
const StrategiesPage = lazy(() =>
  import('./pages/StrategiesPage').then((m) => ({ default: m.StrategiesPage }))
);
const GlobalCompendiumPage = lazy(() =>
  import('./pages/GlobalCompendiumPage').then((m) => ({ default: m.GlobalCompendiumPage }))
);
const FaqPage = lazy(() =>
  import('./pages/FaqPage').then((m) => ({ default: m.FaqPage }))
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const PrivacyPage = lazy(() =>
  import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage }))
);
const Play4WayPage = lazy(() =>
  import('./pages/GameArenaPage').then((m) => ({ default: m.Play4WayPage }))
);
const Play5WayPage = lazy(() =>
  import('./pages/GameArenaPage').then((m) => ({ default: m.Play5WayPage }))
);

// Lazy-load popup modals so they are only downloaded when opened
const RuleModal = lazy(() =>
  import('./components/RuleModal').then((m) => ({ default: m.RuleModal }))
);
const HowToPlayModal = lazy(() =>
  import('./components/HowToPlayModal').then((m) => ({ default: m.HowToPlayModal }))
);

const TUTORIAL_SEEN_KEY = 'tutorial_seen';

function isRoomInviteUrl(loc: Location): boolean {
  const params = new URLSearchParams(loc.search);
  const inviteParamKeys = [
    'room',
    'roomId',
    'room_id',
    'roomCode',
    'room_code',
    'code',
    'passcode',
    'invite',
    'inviteCode',
    'invite_code',
    'join',
    'lobby',
    'match',
  ];
  for (const key of inviteParamKeys) {
    const val = params.get(key);
    if (val !== null && val.trim() !== '') {
      return true;
    }
  }

  const lowerPath = loc.pathname.toLowerCase();
  if (
    lowerPath === '/room' ||
    lowerPath.startsWith('/room/') ||
    lowerPath === '/invite' ||
    lowerPath.startsWith('/invite/') ||
    lowerPath === '/join' ||
    lowerPath.startsWith('/join/')
  ) {
    return true;
  }

  const lowerHash = loc.hash.toLowerCase();
  if (
    lowerHash.includes('room=') ||
    lowerHash.includes('invite=') ||
    lowerHash.includes('code=') ||
    lowerHash.includes('join=')
  ) {
    return true;
  }

  return false;
}

const RouteFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center relative z-10 px-4">
    <div className="px-5 py-3 rounded-2xl bg-[#02070A]/85 border border-[#0297DE]/35 backdrop-blur-md text-xs font-mono font-bold text-[#0297DE] tracking-widest uppercase">
      Loading Arena...
    </div>
  </div>
);

function AppContent() {
  const [bgMode] = useState<BackgroundMode>('flaming-dice');
  const [cursorMode] = useState<CursorMode>('neon-die');
  const [hoveredRuleColor, setHoveredRuleColor] = useState<string | null>(null);
  const [selectedRule, setSelectedRule] = useState<RuleCard | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const navigate = useNavigate();

  // First-visit tutorial auto-open (skipped on room invite links)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isRoomInviteUrl(window.location)) return;

    try {
      const alreadySeen = window.localStorage.getItem(TUTORIAL_SEEN_KEY);
      if (!alreadySeen) {
        window.localStorage.setItem(TUTORIAL_SEEN_KEY, 'true');
        setIsGuideOpen(true);
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  const handleCloseGuide = useCallback(() => {
    try {
      window.localStorage.setItem(TUTORIAL_SEEN_KEY, 'true');
    } catch {
      // Ignore storage access errors
    }
    setIsGuideOpen(false);
  }, []);

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
    <div
      className={`relative min-h-screen bg-[#02070A]/75 text-slate-100 selection:bg-[#0297DE] selection:text-white font-['Outfit'] ${
        bgMode === 'monochrome-cursor-reveal' ? 'monochrome-base' : ''
      }`}
    >
      {/* ══════════════════════════════════════════════════════════════════════
          GALAXY DICE DYNAMIC BACKGROUND WITH MIDNIGHT BLACK + ELECTRIC BLUE
          + CANTALOUPE ORANGE DUAL-BLOOM ATMOSPHERE (SERVED AS 99KB WEBP)
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
            src={silverDotsDiceBgWebp}
            width={1376}
            height={768}
            decoding="async"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.endsWith('/assets/images/silver_dots_dice.webp') && !target.src.endsWith('/assets/images/silver_dots_dice.jpg')) {
                target.src = '/assets/images/silver_dots_dice.webp';
              } else if (target.src.endsWith('/assets/images/silver_dots_dice.webp')) {
                target.src = '/assets/images/silver_dots_dice.jpg';
              }
            }}
            alt="Ludo Dethroned Galaxy Flaming Dice with Silver Dots Background"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-90 contrast-115 select-none"
          />

          {/* Electric Blue (#0297DE) + Cantaloupe Orange (#FC734D) Ambient Dual-Bloom */}
          <div
            style={{
              background: hoveredRuleColor
                ? `radial-gradient(circle at 50% 45%, ${hoveredRuleColor}40 0%, rgba(2, 151, 222, 0.18) 45%, transparent 72%)`
                : 'radial-gradient(ellipse 78% 54% at 50% 44%, rgba(2, 151, 222, 0.36) 0%, rgba(2, 151, 222, 0.18) 38%, rgba(252, 115, 77, 0.24) 64%, transparent 86%)',
            }}
            className="absolute inset-0 transition-all duration-500 pointer-events-none"
          />

          {/* Warm Cantaloupe Orange Horizon Glow */}
          <div
            style={{
              background:
                'radial-gradient(ellipse 65% 38% at 50% 82%, rgba(252, 115, 77, 0.26) 0%, rgba(2, 151, 222, 0.12) 52%, transparent 80%)',
            }}
            className="absolute inset-0 pointer-events-none"
          />
        </div>

        {/* Midnight Black (#02070A) Atmospheric Veil */}
        <div
          className={`absolute inset-0 transition-colors duration-700 ${
            bgMode === 'flaming-dice'
              ? 'bg-gradient-to-b from-[#02070A]/82 via-[#02070A]/48 to-[#02070A]/86'
              : bgMode === 'neon-glow'
              ? 'bg-gradient-to-b from-[#02070A]/86 via-[#02070A]/54 to-[#02070A]/88'
              : 'bg-[#02070A]/88'
          }`}
        />

        {/* Subtle Vertical Beam & Tactical Grid Matrix Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,151,222,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_75%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Dynamic Cursor Spotlight & Background Neon Glow System (GPU rAF, skipped on mobile) */}
      <CursorRevealer
        cursorMode={cursorMode}
        bgMode={bgMode}
        hoveredRuleColor={hoveredRuleColor}
      />

      {/* Main Header */}
      <Header
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onOpenGuide={() => setIsGuideOpen(true)}
      />

      {/* Code-Split Router Page Content */}
      <Suspense fallback={<RouteFallback />}>
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
          <Route path="/play-4-way" element={<Play4WayPage />} />
          <Route path="/play-5-way" element={<Play5WayPage />} />
          <Route path="/start-here" element={<StartHerePage />} />
          <Route path="/not-traditional-ludo" element={<NotTraditionalLudoPage />} />
          <Route
            path="/how-to-play"
            element={<HowToPlayPage onOpenTutorial={() => setIsGuideOpen(true)} />}
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
          <Route path="/strategies" element={<StrategiesPage />} />
          <Route path="/global-compendium" element={<GlobalCompendiumPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
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
      </Suspense>

      {/* Footer with normal links to all pages */}
      <Footer />

      {/* 12 Rules Detail Modal — Lazy-loaded & mounted ONLY when a rule is clicked */}
      {selectedRule && (
        <Suspense fallback={null}>
          <RuleModal
            rule={selectedRule}
            onClose={() => setSelectedRule(null)}
          />
        </Suspense>
      )}

      {/* "HOW TO PLAY" Official Slide Tutorial Modal — Lazy-loaded & mounted ONLY when open */}
      {isGuideOpen && (
        <Suspense fallback={null}>
          <HowToPlayModal
            isOpen={isGuideOpen}
            onClose={handleCloseGuide}
            onExploreRules={() => {
              handleRuleJump();
            }}
          />
        </Suspense>
      )}
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
