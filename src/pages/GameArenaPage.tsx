import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Dices, ShieldAlert, Crown, Sparkles, Layers } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RelatedPages } from '../components/RelatedPages';
import { FiveKeyRulesCard } from '../components/VisitorGuidance';
import { sound } from '../utils/audio';

interface GameArenaPageProps {
  mode: '4-way' | '5-way';
}

export const GameArenaPage: React.FC<GameArenaPageProps> = ({ mode }) => {
  const is5Way = mode === '5-way';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [mode]);

  const pageTitle = is5Way
    ? 'Ludo Dethroned 5 Way Two Dice Arena | Official 3D Ludo-style strategy game'
    : 'Ludo Dethroned 4 Way Two Dice Arena | Official 3D Ludo-style strategy game';

  const pageDescription = is5Way
    ? 'Official 5 Way game page for Ludo Dethroned 5 Way & 4 Way Two Dice, a five-player 3D Ludo-style strategy game with 3D tokens, animated 3D dice, Lucky 7, pairs, and compulsory captures.'
    : 'Official 4 Way game page for Ludo Dethroned 5 Way & 4 Way Two Dice, a four-player 3D Ludo-style strategy game with 3D tokens, animated 3D dice, Lucky 7, pairs, and compulsory captures.';

  const canonicalPath = is5Way ? '/play-5-way' : '/play-4-way';

  const wings = is5Way
    ? [
        { name: 'BLUE WING', classes: 'bg-blue-500/20 border-blue-400/75 text-blue-200' },
        { name: 'ORANGE WING', classes: 'bg-orange-500/20 border-orange-400/75 text-orange-200' },
        { name: 'GREEN WING', classes: 'bg-emerald-500/20 border-emerald-400/75 text-emerald-200' },
        { name: 'RED WING', classes: 'bg-rose-500/20 border-rose-400/75 text-rose-200' },
        { name: 'YELLOW WING', classes: 'bg-amber-400/20 border-amber-400/80 text-amber-200' },
      ]
    : [
        { name: 'BLUE WING', classes: 'bg-blue-500/20 border-blue-400/75 text-blue-200' },
        { name: 'GREEN WING', classes: 'bg-emerald-500/20 border-emerald-400/75 text-emerald-200' },
        { name: 'RED WING', classes: 'bg-rose-500/20 border-rose-400/75 text-rose-200' },
        { name: 'YELLOW WING', classes: 'bg-amber-400/20 border-amber-400/80 text-amber-200' },
      ];

  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalPath={canonicalPath}
      />

      {/* Top Navigation & Mode Switcher Bar — Midnight Black Frosted Glass */}
      <div className="mb-6 p-3.5 sm:p-4 rounded-2xl bg-[#02070A]/80 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/"
          onClick={() => sound.playClick(450)}
          className="px-3.5 py-2 rounded-xl bg-[#05121d]/85 hover:bg-[#05121d] border border-[#0297DE]/35 hover:border-[#0297DE] text-slate-100 font-mono text-xs font-black uppercase tracking-wider flex items-center gap-2 transition-all shadow-xs"
        >
          <ArrowLeft className="w-4 h-4 text-[#0297DE]" />
          <span>Back to Home</span>
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            to="/play-4-way"
            onClick={() => sound.playClick(500)}
            className={`px-3.5 py-2 rounded-xl font-mono text-xs font-black uppercase tracking-wider border transition-all ${
              !is5Way
                ? 'bg-[#0297DE] text-white border-[#0297DE] shadow-[0_0_15px_rgba(2,151,222,0.48)]'
                : 'bg-[#05121d]/80 hover:bg-[#05121d] text-slate-200 border-[#0297DE]/30 hover:border-[#0297DE]'
            }`}
          >
            4 Way Board
          </Link>
          <Link
            to="/play-5-way"
            onClick={() => sound.playClick(550)}
            className={`px-3.5 py-2 rounded-xl font-mono text-xs font-black uppercase tracking-wider border transition-all ${
              is5Way
                ? 'bg-[#FC734D] text-[#02070A] border-[#FC734D] shadow-[0_0_15px_rgba(252,115,77,0.48)]'
                : 'bg-[#05121d]/80 hover:bg-[#05121d] text-slate-200 border-[#0297DE]/30 hover:border-[#FC734D]'
            }`}
          >
            5 Way Board
          </Link>
          <Link
            to="/rules"
            onClick={() => sound.playClick(450)}
            className="px-3.5 py-2 rounded-xl bg-[#05121d]/80 hover:bg-[#05121d] border border-[#0297DE]/30 hover:border-[#0297DE] text-slate-100 font-mono text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all"
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#FC734D]" />
            <span>12 Rules</span>
          </Link>
        </div>
      </div>

      {/* Unified Midnight Black Frosted Glass Page Header Card */}
      <div className="text-center mb-8 p-6 sm:p-8 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/14 via-transparent to-[#FC734D]/12 pointer-events-none opacity-85" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05121d]/85 backdrop-blur-sm border text-xs font-mono font-black tracking-widest uppercase mb-3 shadow-xs ${
              is5Way
                ? 'border-[#FC734D]/75 text-[#FC734D]'
                : 'border-[#0297DE]/75 text-[#0297DE]'
            }`}
          >
            <Dices className="w-4 h-4" />
            <span>{is5Way ? '5 WAY TWO DICE • 3D ARENA' : '4 WAY TWO DICE • 3D ARENA'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-['Chakra_Petch'] text-white uppercase tracking-tight leading-tight">
            Ludo Dethroned{' '}
            <span className={is5Way ? 'text-[#FC734D]' : 'text-[#0297DE]'}>
              {is5Way ? '5 Way Two Dice' : '4 Way Two Dice'}
            </span>
          </h1>

          <p className="text-slate-300 font-medium text-sm sm:text-base mt-2.5 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Played on a 3D board with 3D tokens and animated 3D dice.
          </p>

          <p className="text-slate-300 font-medium text-xs sm:text-sm mt-2 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            {is5Way
              ? 'Five players compete with four tokens each across Red, Green, Yellow, Blue, and Orange wings using two dice. Get all four of your tokens onto your coloured home path before anyone else does.'
              : 'Four players compete with four tokens each across Blue, Green, Red, and Yellow wings using two dice. Get all four of your tokens onto your coloured home path before anyone else does.'}
          </p>
        </div>
      </div>

      {/* Dismissible Five Key Rules Card (with small "Rules" link to reopen) */}
      <FiveKeyRulesCard className="mb-8" />

      {/* Dedicated 3D Game Attachment Container */}
      <div
        id={is5Way ? 'ludo-5-way-game-container' : 'ludo-4-way-game-container'}
        data-game-mode={mode}
        className="mb-12 rounded-3xl bg-[#02070A]/82 border-2 border-[#0297DE]/30 backdrop-blur-xl shadow-2xl overflow-hidden relative min-h-[58vh] flex flex-col justify-between p-6 sm:p-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/12 via-transparent to-[#FC734D]/10 pointer-events-none opacity-80" />

        {/* Stage Top Bar */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#0297DE]/25">
          <div className="flex items-center gap-2 font-mono text-xs font-black text-white uppercase tracking-wider">
            <Crown className={`w-4 h-4 ${is5Way ? 'text-[#FC734D]' : 'text-[#0297DE]'}`} />
            <span>{is5Way ? '5 WAY 3D BOARD STAGE' : '4 WAY 3D BOARD STAGE'}</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] sm:text-xs font-black">
            {wings.map((wing) => (
              <span
                key={wing.name}
                className={`px-2.5 py-0.5 rounded-md border backdrop-blur-sm ${wing.classes}`}
              >
                {wing.name}
              </span>
            ))}
          </div>
        </div>

        {/* Center Game Mount Slot */}
        <div className="relative z-10 my-auto py-12 text-center max-w-2xl mx-auto space-y-4">
          <div
            className={`w-20 h-20 mx-auto rounded-3xl bg-[#05121d]/85 backdrop-blur-md border-2 flex items-center justify-center shadow-lg ${
              is5Way ? 'border-[#FC734D] text-[#FC734D]' : 'border-[#0297DE] text-[#0297DE]'
            }`}
          >
            <Layers className="w-10 h-10" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch'] text-white uppercase tracking-wide">
            {is5Way ? '5 Way Game Stage Ready' : '4 Way Game Stage Ready'}
          </h2>

          <p className="text-slate-300 font-medium text-sm sm:text-base font-['Outfit'] leading-relaxed">
            {is5Way
              ? 'This dedicated 5 Way page is ready to host your five-player 3D game. Once your 5 Way game files or embed package are attached here, the interactive 3D board, 3D tokens, and animated 3D dice will launch directly in this stage.'
              : 'This dedicated 4 Way page is ready to host your four-player 3D game. Once your 4 Way game files or embed package are attached here, the interactive 3D board, 3D tokens, and animated 3D dice will launch directly in this stage.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono font-bold text-slate-200">
            <span className="px-3 py-1.5 rounded-xl bg-[#05121d]/85 border border-[#0297DE]/35 flex items-center gap-1.5">
              <Dices className="w-3.5 h-3.5 text-[#0297DE]" />
              <span>Two Dice Split Move</span>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-[#05121d]/85 border border-[#0297DE]/35 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#0297DE]" />
              <span>Lucky 7 & Pairs</span>
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-[#05121d]/85 border border-[#0297DE]/35 flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-[#FC734D]" />
              <span>Compulsory Capture</span>
            </span>
          </div>
        </div>

        {/* Stage Footer */}
        <div className="relative z-10 pt-4 border-t border-[#0297DE]/25 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono font-bold text-slate-400">
          <span>{is5Way ? '5 Players • 4 Tokens Each • 2 Dice' : '4 Players • 4 Tokens Each • 2 Dice'}</span>
          <span>12 Canonical Rules Active</span>
        </div>
      </div>

      {/* Related Pages Block */}
      <RelatedPages currentPath={canonicalPath} />
    </div>
  );
};

export const Play4WayPage: React.FC = () => <GameArenaPage mode="4-way" />;
export const Play5WayPage: React.FC = () => <GameArenaPage mode="5-way" />;
