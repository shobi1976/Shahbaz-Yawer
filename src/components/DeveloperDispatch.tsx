import React, { useState } from 'react';
import { Crown, BookOpen, ChevronDown, ChevronUp, Mail, Copy, Check, Sparkles, Flame, ShieldAlert, Dice5 } from 'lucide-react';
import { sound } from '../utils/audio';

export const DeveloperDispatch: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleOpen = () => {
    sound.playClick(isOpen ? 380 : 520);
    setIsOpen(!isOpen);
  };

  const copyDispatch = () => {
    sound.playClick(600);
    const text = `👑 LUDO EMPEROR 5 WAY — OFFICIAL DEVELOPER DISPATCH #01
Author: Shahbaz Yawer Khan (Creator & Lead Developer)
Contact: support@ludoemperor.com | https://ludoemperor.com

"Don't Let the Winner Win the Match." — The 5-Way Anti-Leader Tabletop Revolution.`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-10 rounded-2xl border border-amber-500/30 bg-gradient-to-b from-slate-900/90 via-slate-950 to-black p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Banner */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              Official Developer Dispatch #01
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-[11px] font-bold">
              <Flame className="w-3 h-3 text-pink-400" />
              Manifesto
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white font-['Chakra_Petch'] tracking-wide">
            A New Reign of Tactical Warfare: <span className="bg-gradient-to-r from-amber-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">The 5-Way Anti-Leader Arena</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-['Outfit']">
            By <strong className="text-slate-200">Shahbaz Yawer Khan</strong>, Creator & Lead Developer • <span className="text-slate-400 font-mono">support@ludoemperor.com</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={copyDispatch}
            className="px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm"
            title="Copy Dispatch Summary"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'COPIED!' : 'SHARE'}</span>
          </button>

          <button
            onClick={toggleOpen}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-black text-xs sm:text-sm font-mono tracking-wider flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-slate-950" />
            <span>{isOpen ? 'COLLAPSE DISPATCH' : 'READ DISPATCH'}</span>
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Quick Summary Teaser when collapsed */}
      {!isOpen && (
        <div className="relative z-10 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-['Outfit'] text-slate-400">
          <p className="leading-relaxed">
            <strong className="text-amber-300">"Jeetne wale ko match mat jeetne do"</strong> — An unapologetic critique of passive luck games and the engineering behind the 5-Wing Pentagonal Matrix, Dual-Dice Split Movement, and 4v1 Anti-Leader Coalitions.
          </p>
          <button
            onClick={toggleOpen}
            className="text-amber-400 hover:text-amber-300 font-mono font-bold shrink-0 flex items-center gap-1 cursor-pointer"
          >
            Read Full Article &rarr;
          </button>
        </div>
      )}

      {/* Expanded Full Article */}
      {isOpen && (
        <div className="relative z-10 mt-6 pt-6 border-t border-slate-800/80 space-y-8 text-slate-300 font-['Outfit'] text-sm sm:text-base leading-relaxed animate-in fade-in duration-300">
          {/* Introductory Paragraphs */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white font-['Chakra_Petch'] flex items-center gap-2">
              <span className="text-amber-400">#</span> Dear Tabletop Strategists & Board Champions,
            </h3>
            <p className="text-slate-300">
              When I set out to build <strong className="text-white">Ludo Emperor 5 Way</strong>, it wasn't to churn out another mundane digital dice simulator.
            </p>
            <p className="text-slate-300">
              We have all lived through those stale, predictable matches: players waiting endlessly for their turn, passively begging luck for a single six, watching helplessly as one player gets an early lucky streak and coasts undisturbed to the finish line. When someone pulls ahead by twenty squares and the table simply watches them cross the threshold unchallenged, that is not real competition—that is an automated screensaver masquerading as a game.
            </p>
            <p className="text-slate-300">
              In the spirit of Saadat Hasan Manto’s unapologetic gaze into raw human nature: <em className="text-amber-200">you never truly understand human instinct until you place people around a game board and watch them fight for their lives.</em> When the stakes are real, when your pride is on the line, politeness evaporates. True competitive fire is not about wishing someone good luck—it is about looking the runaway leader dead in the eye and declaring:
            </p>

            {/* Core Manifesto Callout */}
            <div className="my-6 p-5 sm:p-6 rounded-xl bg-gradient-to-r from-rose-950/60 via-slate-900 to-amber-950/50 border-l-4 border-rose-500 shadow-xl">
              <p className="text-base sm:text-xl font-black text-rose-200 font-['Chakra_Petch'] italic tracking-wide">
                "Jeetne wale ko match mat jeetne do."
              </p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 font-mono">
                — Never let the frontrunner coast to victory.
              </p>
              <p className="text-xs text-slate-300 mt-2 font-['Outfit']">
                That singular psychological truth is the beating heart of <strong className="text-white">Ludo Emperor 5 Way</strong>.
              </p>
            </div>
          </div>

          {/* Pillars Grid */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white font-['Chakra_Petch'] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              What Makes Ludo Emperor 5 Way Radically Different?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Feature 1 */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-blue-500/40 transition-all">
                <div className="flex items-center gap-2 text-blue-400 font-bold font-mono text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-xs">1</span>
                  5-Wing Pentagonal Matrix 🖐️
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                  Five sovereign factions—<strong className="text-white">Red, Green, Yellow, Blue, and Purple</strong>—converge on an interlocking pentagonal board. Expanding to five factions creates <strong>72-degree flanking angles</strong>, eliminating safe perimeters and keeping danger active from multiple blind spots.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-amber-500/40 transition-all">
                <div className="flex items-center gap-2 text-amber-400 font-bold font-mono text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-xs">2</span>
                  Dual-Dice Split Movement 🎲🎲
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                  Every turn delivers <strong>two dice</strong> (36 permutations). Split the numbers between two pawns, or stack both values onto one pawn. Move with chess-like calculation rather than helpless one-die rolls.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-rose-500/40 transition-all">
                <div className="flex items-center gap-2 text-rose-400 font-bold font-mono text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center text-xs">3</span>
                  The 4v1 Anti-Leader Alliance ⚔️
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                  Our real-time engine continuously identifies the match leader. The other four factions form an organic <strong>Hunter-Killer Coalition</strong> to intercept and eliminate the leader’s advanced pawns before they reach the sanctuary.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/40 transition-all">
                <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs">4</span>
                  The Lucky 7 Royal Surge ✨7
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                  Roll any combination totaling <strong>7</strong> (4+3, 5+2, 6+1) to instantly trigger a royal surge: both dice become a devastating <strong>Double-Six (6+6)</strong> with an immediate bonus turn.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-pink-500/40 transition-all">
                <div className="flex items-center gap-2 text-pink-400 font-bold font-mono text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center text-xs">5</span>
                  Missed Capture Penalty ⚡
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                  Mercy has no place on the Emperor's board. If the dice offer a valid capture opportunity and you move a different token, the <strong>Sacred Decrees penalize the blunder</strong>: your pawn is sent straight back to home base.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/40 transition-all">
                <div className="flex items-center gap-2 text-purple-400 font-bold font-mono text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-xs">6</span>
                  Golden Star Wish Roll ✨
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-normal">
                  Set two sacred numbers during pre-match setup. Once per match, tap the <strong>Golden Star</strong> to activate your guaranteed wish roll when survival demands nothing less.
                </p>
              </div>
            </div>
          </div>

          {/* 16 Sacred Decrees & Modern Architecture */}
          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-3">
            <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              Codified in the 16 Sacred Decrees
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              From <strong className="text-slate-200">Uncapped Double-Six Chains</strong> (no arbitrary 3-six forfeitures) to the <strong className="text-slate-200">90-Second Royal Turn Clock</strong> preventing stall tactics, our complete compendium of 16 decrees guarantees deterministic, eSports-grade transparency.
            </p>
          </div>

          {/* Signoff */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-['Chakra_Petch'] font-bold text-white text-base">
                Roll true. Strike ruthlessly. Never let the winner win the match.
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Yours on the battlefield,
              </p>
              <p className="text-sm font-bold text-amber-400 mt-0.5">
                Shahbaz Yawer Khan
              </p>
              <p className="text-xs font-mono text-slate-400">
                Creator & Lead Developer, Ludo Emperor 5 Way
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs text-slate-400">
              <a href="mailto:support@ludoemperor.com" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                support@ludoemperor.com
              </a>
              <span className="text-slate-400">https://ludoemperor.com</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
