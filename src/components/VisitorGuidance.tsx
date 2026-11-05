import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, ShieldAlert, Check } from 'lucide-react';
import { sound } from '../utils/audio';

const FIVE_KEY_RULES_STORAGE_KEY = 'five_key_rules_dismissed';
const FIVE_KEY_RULES_SYNC_EVENT = 'five-key-rules-sync';

export const FIVE_KEY_RULES: readonly string[] = [
  'Capturing is compulsory.',
  'You roll two dice and can combine them or split them.',
  'Every 6 gives an extra turn.',
  'Star squares and your coloured home path are safe.',
  'The match ends the moment someone wins.',
];

export interface NotTraditionalCardItem {
  title: string;
  text: string;
}

export const NOT_TRADITIONAL_LUDO_CARDS: readonly NotTraditionalCardItem[] = [
  {
    title: 'Five players, two dice',
    text: 'Five players share one 3D board. Each turn you roll two dice and choose: use both on one token, or split them between two.',
  },
  {
    title: 'Every roll adds pressure',
    text: "Capturing is compulsory. If you can capture and don't, the token that could have captured goes back to base. Traditional Ludo usually makes capturing optional.",
  },
  {
    title: 'No free favours',
    text: 'Because capturing is compulsory, sparing a friend costs you a token. Everyone has the same goal: win, or stop the winner.',
  },
  {
    title: 'The match ends at the first win',
    text: 'No playing on for last place. The other players are ranked by progress, so every turn is about winning or stopping the winner.',
  },
  {
    title: 'You win on the coloured path',
    text: 'Get all four tokens onto your coloured home path. You never wait for an exact number to finish. The centre home is only a bonus turn.',
  },
  {
    title: 'A lead is hard to hold',
    text: 'Safe squares and pairs protect your tokens, while AI opponents hunt the leader and trailing players can set up captures for each other.',
  },
  {
    title: 'Chances to come back',
    text: 'Lucky 7 turns a total of 7 into 6+6 and an extra turn when none of your tokens are on the open track, and a once-per-match Lucky Wish rolls the numbers you chose.',
  },
  {
    title: 'Defend or attack',
    text: 'Like a T20 captain, you choose when to hold a token back and when to run it forward.',
  },
];

function readDismissedState(): boolean {
  try {
    return window.localStorage.getItem(FIVE_KEY_RULES_STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

function writeDismissedState(dismissed: boolean): void {
  try {
    if (dismissed) {
      window.localStorage.setItem(FIVE_KEY_RULES_STORAGE_KEY, 'true');
    } else {
      window.localStorage.removeItem(FIVE_KEY_RULES_STORAGE_KEY);
    }
    window.dispatchEvent(new Event(FIVE_KEY_RULES_SYNC_EVENT));
  } catch {
    // Ignore storage quota or privacy-mode errors
  }
}

/**
 * 1. "START HERE" STRIP (Home Page — directly below existing hero)
 */
export const StartHereStrip: React.FC = () => {
  return (
    <section
      aria-labelledby="start-here-heading"
      className="pt-8 pb-6 sm:pt-10 sm:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10"
    >
      <div className="p-6 sm:p-10 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/14 via-transparent to-[#FC734D]/12 pointer-events-none opacity-85" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-3xl">
            <h2
              id="start-here-heading"
              className="text-2xl sm:text-4xl font-black font-['Chakra_Petch'] text-white tracking-tight leading-tight"
            >
              Start here
            </h2>

            <p className="text-slate-200 text-base sm:text-lg mt-2.5 leading-relaxed font-['Outfit'] font-medium">
              New to Ludo Dethroned 3D? Learn first, then play. It takes a few minutes.
            </p>

            <ol className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3.5 list-none p-0 m-0">
              <li className="p-4 rounded-2xl bg-[#05121d]/80 border border-[#0297DE]/30 text-base text-slate-100 font-['Outfit'] leading-relaxed">
                <span className="font-mono font-black text-[#FC734D] mr-1.5">1.</span>
                <span>
                  <strong className="font-bold text-white">Learn.</strong> Read{' '}
                  <Link
                    to="/how-to-play"
                    onClick={() => sound.playClick(450)}
                    className="text-[#0297DE] hover:text-[#38bdf8] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0297DE] rounded"
                  >
                    How to Play
                  </Link>
                  , then skim the{' '}
                  <Link
                    to="/rules"
                    onClick={() => sound.playClick(450)}
                    className="text-[#0297DE] hover:text-[#38bdf8] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0297DE] rounded"
                  >
                    Rules
                  </Link>
                  .
                </span>
              </li>

              <li className="p-4 rounded-2xl bg-[#05121d]/80 border border-[#0297DE]/30 text-base text-slate-100 font-['Outfit'] leading-relaxed">
                <span className="font-mono font-black text-[#FC734D] mr-1.5">2.</span>
                <span>Remember the five key rules (below).</span>
              </li>

              <li className="p-4 rounded-2xl bg-[#05121d]/80 border border-[#0297DE]/30 text-base text-slate-100 font-['Outfit'] leading-relaxed">
                <span className="font-mono font-black text-[#FC734D] mr-1.5">3.</span>
                <span>
                  <strong className="font-bold text-white">Play.</strong> Put it into practice in your first match.
                </span>
              </li>
            </ol>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-start lg:items-end shrink-0">
            <Link
              to="/how-to-play"
              onClick={() => sound.playClick(550)}
              className="min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-[#FC734D] hover:bg-[#ff8866] text-[#02070A] font-black font-['Chakra_Petch'] text-base tracking-wide shadow-[0_0_25px_rgba(252,115,77,0.48)] transition-all cursor-pointer inline-flex items-center justify-center gap-3 transform hover:scale-105 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0297DE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#02070A]"
            >
              <BookOpen className="w-5 h-5 shrink-0" />
              <span>Start here: learn in a few minutes</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * 3. FIVE KEY RULES CARD (Dismissible card on lobby / room screens)
 */
interface FiveKeyRulesCardProps {
  className?: string;
}

export const FiveKeyRulesCard: React.FC<FiveKeyRulesCardProps> = ({ className = '' }) => {
  const [isDismissed, setIsDismissed] = useState<boolean>(() => readDismissedState());

  useEffect(() => {
    const syncState = () => {
      setIsDismissed(readDismissedState());
    };
    window.addEventListener('storage', syncState);
    window.addEventListener(FIVE_KEY_RULES_SYNC_EVENT, syncState);
    return () => {
      window.removeEventListener('storage', syncState);
      window.removeEventListener(FIVE_KEY_RULES_SYNC_EVENT, syncState);
    };
  }, []);

  const handleDismiss = useCallback(() => {
    sound.playClick(450);
    setIsDismissed(true);
    writeDismissedState(true);
  }, []);

  const handleReopen = useCallback(() => {
    sound.playClick(500);
    setIsDismissed(false);
    writeDismissedState(false);
  }, []);

  // Close with Escape when no modal dialog is active
  useEffect(() => {
    if (isDismissed) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !document.querySelector('[role="dialog"]')) {
        handleDismiss();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDismissed, handleDismiss]);

  if (isDismissed) {
    return (
      <div className={`flex items-center justify-end ${className}`}>
        <button
          type="button"
          onClick={handleReopen}
          aria-expanded="false"
          className="min-h-[44px] px-3.5 py-2 rounded-xl bg-[#02070A]/85 hover:bg-[#05121d] border border-[#0297DE]/40 text-[#0297DE] hover:text-[#38bdf8] font-['Outfit'] text-base font-bold underline underline-offset-4 transition-colors cursor-pointer inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0297DE]"
        >
          <ShieldAlert className="w-4 h-4 text-[#FC734D] shrink-0" />
          <span>Rules</span>
        </button>
      </div>
    );
  }

  return (
    <section
      aria-labelledby="five-key-rules-title"
      className={`p-6 sm:p-8 rounded-3xl bg-[#02070A]/82 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/14 via-transparent to-[#FC734D]/12 pointer-events-none opacity-85" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-[#FC734D] shrink-0" />
            <h2
              id="five-key-rules-title"
              className="text-xl sm:text-2xl font-black font-['Chakra_Petch'] text-white tracking-tight"
            >
              Five rules to know before you play
            </h2>
          </div>

          <ul className="space-y-2 text-base text-slate-100 font-['Outfit'] leading-relaxed font-medium">
            {FIVE_KEY_RULES.map((ruleText) => (
              <li key={ruleText} className="flex items-start gap-2.5">
                <span className="text-[#0297DE] font-bold shrink-0 mt-0.5">•</span>
                <span>{ruleText}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0 flex items-center">
          <button
            type="button"
            onClick={handleDismiss}
            className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-2xl bg-[#FC734D] hover:bg-[#ff8866] text-[#02070A] font-black font-['Chakra_Petch'] text-base tracking-wide shadow-[0_0_20px_rgba(252,115,77,0.45)] transition-all cursor-pointer inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0297DE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#02070A]"
          >
            <Check className="w-4 h-4 shrink-0" />
            <span>Got it</span>
          </button>
        </div>
      </div>
    </section>
  );
};

/**
 * 5. "NOT TRADITIONAL LUDO" SECTION (Home Page & Top of How to Play)
 */
interface NotTraditionalLudoSectionProps {
  inPage?: boolean;
}

export const NotTraditionalLudoSection: React.FC<NotTraditionalLudoSectionProps> = ({
  inPage = false,
}) => {
  return (
    <section
      aria-labelledby="not-traditional-ludo-heading"
      className={
        inPage
          ? 'mb-14 relative z-10'
          : 'py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10'
      }
    >
      <div className="mb-6 p-6 sm:p-8 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/14 via-transparent to-[#FC734D]/12 pointer-events-none opacity-85" />
        <div className="relative z-10 max-w-4xl">
          <h2
            id="not-traditional-ludo-heading"
            className="text-2xl sm:text-4xl font-black font-['Chakra_Petch'] text-white tracking-tight leading-tight"
          >
            Not traditional Ludo
          </h2>
          <p className="text-slate-200 text-base sm:text-lg mt-2.5 leading-relaxed font-['Outfit'] font-medium">
            The board looks familiar, but the game plays very differently. Traditional Ludo has many house rules, so this compares the usual ones.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {NOT_TRADITIONAL_LUDO_CARDS.map((card) => (
          <div
            key={card.title}
            className="p-6 rounded-2xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 hover:border-[#0297DE] transition-all duration-300 shadow-2xl backdrop-blur-md relative overflow-hidden flex flex-col justify-start group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/12 via-transparent to-[#FC734D]/10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <h3 className="text-white text-lg sm:text-xl font-['Chakra_Petch'] font-black tracking-wide mb-2.5 leading-snug group-hover:text-[#FC734D] transition-colors">
                {card.title}
              </h3>
              <p className="text-base text-slate-200 font-['Outfit'] leading-relaxed font-medium">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
