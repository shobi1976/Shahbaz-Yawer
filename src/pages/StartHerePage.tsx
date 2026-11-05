import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Compass, ShieldAlert } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RelatedPages } from '../components/RelatedPages';
import { FIVE_KEY_RULES } from '../components/VisitorGuidance';
import { sound } from '../utils/audio';

export const StartHerePage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SEO
        title="Start Here | Ludo Dethroned 5 Way & 4 Way Two Dice — First-Time Guide"
        description="New to Ludo Dethroned 3D? Start here to learn first, remember the five key rules, and play your first match in a few minutes."
        canonicalPath="/start-here"
      />

      {/* Unified Midnight Black Frosted Glass Header Card */}
      <div className="text-center mb-10 p-6 sm:p-10 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/14 via-transparent to-[#FC734D]/12 pointer-events-none opacity-85" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-[#0297DE] text-xs font-mono font-black tracking-widest uppercase mb-4">
            <Compass className="w-4 h-4 text-[#0297DE] shrink-0" />
            <span>FIRST-TIME PLAYER ORIENTATION</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Chakra_Petch'] text-white tracking-tight leading-tight">
            Start <span className="text-[#FC734D]">here</span>
          </h1>

          <p className="text-slate-200 font-medium text-base sm:text-lg mt-3 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            New to Ludo Dethroned 3D? Learn first, then play. It takes a few minutes.
          </p>

          <div className="mt-7 flex items-center justify-center">
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

      {/* 3 Steps Grid */}
      <section aria-label="Three steps to get started" className="mb-10">
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-5 list-none p-0 m-0">
          <li className="p-6 sm:p-7 rounded-2xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 hover:border-[#0297DE] transition-all duration-300 shadow-2xl backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/12 via-transparent to-[#FC734D]/10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 space-y-2.5">
              <span className="inline-block font-mono text-sm font-black text-[#FC734D]">
                STEP 1
              </span>
              <p className="text-base sm:text-lg text-slate-100 font-['Outfit'] leading-relaxed font-medium">
                <strong className="font-bold text-white">1. Learn.</strong> Read{' '}
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
              </p>
            </div>
          </li>

          <li className="p-6 sm:p-7 rounded-2xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 hover:border-[#0297DE] transition-all duration-300 shadow-2xl backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/12 via-transparent to-[#FC734D]/10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 space-y-2.5">
              <span className="inline-block font-mono text-sm font-black text-[#FC734D]">
                STEP 2
              </span>
              <p className="text-base sm:text-lg text-slate-100 font-['Outfit'] leading-relaxed font-medium">
                <strong className="font-bold text-white">2.</strong> Remember the five key rules (below).
              </p>
            </div>
          </li>

          <li className="p-6 sm:p-7 rounded-2xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 hover:border-[#0297DE] transition-all duration-300 shadow-2xl backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/12 via-transparent to-[#FC734D]/10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 space-y-2.5">
              <span className="inline-block font-mono text-sm font-black text-[#FC734D]">
                STEP 3
              </span>
              <p className="text-base sm:text-lg text-slate-100 font-['Outfit'] leading-relaxed font-medium">
                <strong className="font-bold text-white">3. Play.</strong> Put it into practice in your first match (
                <Link
                  to="/play-5-way"
                  onClick={() => sound.playClick(450)}
                  className="text-[#FC734D] hover:text-[#ff8866] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FC734D] rounded"
                >
                  5 Way
                </Link>{' '}
                or{' '}
                <Link
                  to="/play-4-way"
                  onClick={() => sound.playClick(450)}
                  className="text-[#0297DE] hover:text-[#38bdf8] underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0297DE] rounded"
                >
                  4 Way
                </Link>
                ).
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* Five Rules to Know Before You Play */}
      <section
        aria-labelledby="start-here-five-rules-heading"
        className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#02070A]/80 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/14 via-transparent to-[#FC734D]/12 pointer-events-none opacity-85" />

        <div className="relative z-10 space-y-4 max-w-4xl">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="w-5 h-5 text-[#FC734D] shrink-0" />
            <h2
              id="start-here-five-rules-heading"
              className="text-xl sm:text-3xl font-black font-['Chakra_Petch'] text-white tracking-tight"
            >
              Five rules to know before you play
            </h2>
          </div>

          <ul className="space-y-2.5 text-base sm:text-lg text-slate-100 font-['Outfit'] leading-relaxed font-medium">
            {FIVE_KEY_RULES.map((ruleText) => (
              <li key={ruleText} className="flex items-start gap-3">
                <span className="text-[#0297DE] font-bold shrink-0 mt-0.5">•</span>
                <span>{ruleText}</span>
              </li>
            ))}
          </ul>

          <div className="pt-3 flex flex-wrap items-center gap-4">
            <Link
              to="/not-traditional-ludo"
              onClick={() => sound.playClick(450)}
              className="text-base font-['Outfit'] font-bold text-[#0297DE] hover:text-[#38bdf8] underline underline-offset-4 inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0297DE] rounded"
            >
              <span>See how this differs from traditional Ludo</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Pages Block */}
      <RelatedPages currentPath="/start-here" />
    </div>
  );
};
