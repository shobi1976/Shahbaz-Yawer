import React, { useState } from 'react';
import { Crown, BookOpen, ChevronDown, ChevronUp, Copy, Check, Sparkles, Flame, ShieldAlert } from 'lucide-react';
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
    const text = `👑 LUDO DETHRONED 5 WAY & 4 WAY TWO DICE — OFFICIAL DEVELOPER DISPATCH #01
Author: Shahbaz Yawer Khan (Creator & Lead Developer)
Official Site: https://ludodethroned.com

"Don't Let the Winner Win the Match." — The 5 Way & 4 Way Two Dice Tabletop Revolution.`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full max-w-7xl mx-auto my-10 rounded-3xl border-2 border-white/65 bg-white/24 hover:bg-white/34 p-6 sm:p-8 shadow-xl relative overflow-hidden backdrop-blur-md transition-all">
      {/* Frosted Specular Sheen */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-80" />

      {/* Header Banner */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/60">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-amber-500/70 text-amber-800 font-mono text-xs font-black uppercase tracking-wider">
              <Crown className="w-3.5 h-3.5 text-amber-600" />
              Official Developer Dispatch #01
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/35 backdrop-blur-sm border border-pink-500/70 text-pink-700 text-[11px] font-black">
              <Flame className="w-3 h-3 text-pink-600" />
              Manifesto
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-950 font-['Chakra_Petch'] tracking-wide">
            A New Reign of Tactical Warfare: <span className="text-[#0077be]">The 5 Way & 4 Way Two Dice Anti-Leader Arena</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-800 font-medium font-['Outfit']">
            By <strong className="text-slate-950">Shahbaz Yawer Khan</strong>, Creator & Lead Developer • <span className="text-slate-700 font-mono font-bold">https://ludodethroned.com</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={copyDispatch}
            className="px-3.5 py-2 rounded-xl bg-white/35 hover:bg-white/55 backdrop-blur-sm border border-white/75 text-slate-950 text-xs font-mono font-black flex items-center gap-2 transition-all cursor-pointer shadow-xs"
            title="Copy Dispatch Summary"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'COPIED!' : 'SHARE'}</span>
          </button>

          <button
            onClick={toggleOpen}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-400 hover:to-rose-400 text-slate-950 font-black text-xs sm:text-sm font-mono tracking-wider flex items-center gap-2 transition-all shadow-lg cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-slate-950" />
            <span>{isOpen ? 'COLLAPSE DISPATCH' : 'READ DISPATCH'}</span>
            {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Quick Summary Teaser when collapsed */}
      {!isOpen && (
        <div className="relative z-10 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-['Outfit'] text-slate-800 font-medium">
          <p className="leading-relaxed">
            <strong className="text-slate-950 font-black">"Jeetne wale ko match mat jeetne do"</strong> — An unapologetic critique of passive luck games and the engineering behind the 5 Way & 4 Way Matrix, Dual-Dice Split Movement, and stopping the frontrunner.
          </p>
          <button
            onClick={toggleOpen}
            className="text-[#0077be] hover:text-black font-mono font-black shrink-0 flex items-center gap-1 cursor-pointer"
          >
            Read Full Article &rarr;
          </button>
        </div>
      )}

      {/* Expanded Full Article — Frosted Glass Subboxes */}
      {isOpen && (
        <div className="relative z-10 mt-6 pt-6 border-t border-white/60 space-y-8 text-slate-900 font-['Outfit'] text-sm sm:text-base leading-relaxed animate-in fade-in duration-300">
          <div className="space-y-4 font-medium">
            <h3 className="text-lg font-black text-slate-950 font-['Chakra_Petch']">
              Dear Tabletop Strategists & Board Champions,
            </h3>
            <p>
              When I set out to build <strong className="text-slate-950 font-black">Ludo Dethroned 5 Way & 4 Way Two Dice</strong>, it wasn't to churn out another mundane digital dice simulator.
            </p>
            <p>
              We have all lived through those stale, predictable matches: players waiting endlessly for their turn, passively begging luck for a single six, watching helplessly as one player gets an early lucky streak and coasts undisturbed to the finish line. When someone pulls ahead and the table simply watches them cross the threshold unchallenged, that is not real competition—that is an automated screensaver masquerading as a game.
            </p>
            <p>
              In the spirit of Saadat Hasan Manto’s unapologetic gaze into raw human nature: <em className="text-slate-950 font-bold">you never truly understand human instinct until you place people around a game board and watch them fight for their lives.</em> When the stakes are real, when your pride is on the line, politeness evaporates. True competitive fire is not about wishing someone good luck—it is about looking the runaway leader dead in the eye and declaring:
            </p>

            {/* Core Manifesto Callout — Frosted Glass */}
            <div className="my-6 p-5 sm:p-6 rounded-2xl bg-white/32 backdrop-blur-md border-2 border-rose-400/70 shadow-md">
              <p className="text-base sm:text-xl font-black text-rose-800 font-['Chakra_Petch'] italic tracking-wide">
                "Jeetne wale ko match mat jeetne do."
              </p>
              <p className="text-xs sm:text-sm text-slate-800 mt-1 font-mono font-bold">
                — Never let the frontrunner coast to victory.
              </p>
              <p className="text-xs text-slate-900 mt-2 font-['Outfit'] font-medium">
                That singular psychological truth is the beating heart of <strong className="text-slate-950">Ludo Dethroned 5 Way & 4 Way Two Dice</strong>.
              </p>
            </div>
          </div>

          {/* Pillars Grid — Frosted Glass */}
          <div className="space-y-6">
            <h3 className="text-xl font-black text-slate-950 font-['Chakra_Petch'] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              What Makes Ludo Dethroned 5 Way & 4 Way Two Dice Radically Different?
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/28 hover:bg-white/42 backdrop-blur-sm border border-white/70 transition-all">
                <div className="flex items-center gap-2 text-blue-800 font-black font-mono text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-blue-500/25 flex items-center justify-center text-xs">1</span>
                  5 Way & 4 Way Matrix
                </div>
                <p className="text-xs sm:text-sm text-slate-900 font-medium leading-normal">
                  Five sovereign factions—<strong className="text-slate-950">Red, Green, Yellow, Blue, and Orange</strong>—converge on an interlocking 5 Way & 4 Way board. Expanding to five factions creates dynamic interactions where safe perimeters disappear and you are always within striking distance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/28 hover:bg-white/42 backdrop-blur-sm border border-white/70 transition-all">
                <div className="flex items-center gap-2 text-amber-800 font-black font-mono text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-amber-500/25 flex items-center justify-center text-xs">2</span>
                  Dual-Dice Split Movement
                </div>
                <p className="text-xs sm:text-sm text-slate-900 font-medium leading-normal">
                  Every turn delivers <strong>two dice</strong>. Split the numbers between two tokens, or move the total of both dice onto a single token. Move with calculation rather than helpless one-die rolls.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/28 hover:bg-white/42 backdrop-blur-sm border border-white/70 transition-all">
                <div className="flex items-center gap-2 text-rose-800 font-black font-mono text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-rose-500/25 flex items-center justify-center text-xs">3</span>
                  Stopping the Leader
                </div>
                <p className="text-xs sm:text-sm text-slate-900 font-medium leading-normal">
                  Because the match ends the moment someone wins, trailing players are incentivized to intercept and capture the leader's vulnerable tokens on the open track before they reach their safe coloured home path.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/28 hover:bg-white/42 backdrop-blur-sm border border-white/70 transition-all">
                <div className="flex items-center gap-2 text-emerald-800 font-black font-mono text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/25 flex items-center justify-center text-xs">4</span>
                  The Lucky 7 Bonus
                </div>
                <p className="text-xs sm:text-sm text-slate-900 font-medium leading-normal">
                  When none of your tokens are on the open track, rolling a total of <strong>7</strong> (4+3, 5+2, 6+1) counts as a massive <strong>6+6 with an immediate extra turn</strong>, allowing two tokens to emerge from base simultaneously.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/28 hover:bg-white/42 backdrop-blur-sm border border-white/70 transition-all">
                <div className="flex items-center gap-2 text-pink-800 font-black font-mono text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-pink-500/25 flex items-center justify-center text-xs">5</span>
                  Missed Capture Penalty
                </div>
                <p className="text-xs sm:text-sm text-slate-900 font-medium leading-normal">
                  Capturing is compulsory. If the dice offer a valid capture opportunity on the open track and you move without capturing, your token that could have captured is sent back to base.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/28 hover:bg-white/42 backdrop-blur-sm border border-white/70 transition-all">
                <div className="flex items-center gap-2 text-purple-800 font-black font-mono text-sm mb-2">
                  <span className="w-6 h-6 rounded-full bg-purple-500/25 flex items-center justify-center text-xs">6</span>
                  Golden Star Wish Roll
                </div>
                <p className="text-xs sm:text-sm text-slate-900 font-medium leading-normal">
                  Set two sacred numbers before match setup (6 and 6 not allowed). Once per match, tap the <strong>Golden Star</strong> to activate your guaranteed wish roll when survival demands it.
                </p>
              </div>
            </div>
          </div>

          {/* Codified in the 12 Rules — Frosted Glass */}
          <div className="p-5 rounded-xl bg-white/28 backdrop-blur-sm border border-white/70 space-y-3">
            <h4 className="text-sm font-black text-slate-950 font-mono uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              Codified in the 12 Canonical Rules
            </h4>
            <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
              From <strong className="text-slate-950">Unlimited Sixes</strong> (no arbitrary 3-six forfeitures) to the <strong className="text-slate-950">Optional Turn Timer</strong> set by the room host, every rule in Ludo Dethroned 5 Way & 4 Way Two Dice is verified and documented in the official brief.
            </p>
          </div>

          {/* Signoff */}
          <div className="pt-6 border-t border-white/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-['Chakra_Petch'] font-black text-slate-950 text-base">
                Roll true. Strike ruthlessly. Never let the winner win the match.
              </p>
              <p className="text-xs text-slate-800 font-medium mt-1">
                Yours on the battlefield,
              </p>
              <p className="text-sm font-black text-[#0077be] mt-0.5">
                Shahbaz Yawer Khan
              </p>
              <p className="text-xs font-mono font-bold text-slate-800">
                Creator & Lead Developer, Ludo Dethroned 5 Way & 4 Way Two Dice
              </p>
            </div>

            <div className="flex flex-col sm:items-end gap-1.5 font-mono text-xs text-slate-800">
              <span className="text-slate-950 font-black">https://ludodethroned.com</span>
              <span className="font-bold">Official Game Website</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
