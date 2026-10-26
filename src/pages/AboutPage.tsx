import React, { useState } from 'react';
import { UserCheck, Flame, Globe, Crown } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RelatedPages } from '../components/RelatedPages';
import { TOP_15_LANGUAGES, ESSAY_TRANSLATIONS, LanguageOption } from '../data/essayTranslations';
import { sound } from '../utils/audio';

export const AboutPage: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string>('en');

  const currentLangObj: LanguageOption = TOP_15_LANGUAGES.find(l => l.code === selectedLang) || TOP_15_LANGUAGES[0];
  const t = ESSAY_TRANSLATIONS[selectedLang] || ESSAY_TRANSLATIONS.en;
  const isRTL = currentLangObj.dir === 'rtl';

  const handleLangChange = (code: string) => {
    sound.playClick(450);
    setSelectedLang(code);
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SEO
        title="About Ludo Dethroned 5 Way & 4 Way Two Dice | 3D Ludo-style strategy game"
        description="Learn about Ludo Dethroned 5 Way & 4 Way Two Dice, a 3D Ludo-style strategy game. Discover the 5 Way & 4 Way matrix, two-dice mechanics, creator vision, and anti-leader philosophy."
        canonicalPath="/about"
      />

      {/* Header & Single H1 — Unified Frosted Glass Header Card */}
      <div className="text-center mb-12 p-6 sm:p-10 rounded-3xl bg-white/26 hover:bg-white/36 border-2 border-white/70 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none opacity-85" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-purple-500/80 text-purple-800 text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-xs">
            <UserCheck className="w-4 h-4 text-purple-700" />
            <span>ORIGINS & VISION • OFFICIAL BACKGROUND</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-tight leading-tight">
            About <span className="text-purple-700">Ludo Dethroned 5 Way & 4 Way Two Dice</span>
          </h1>

          <p className="text-slate-800 font-medium text-sm sm:text-base mt-3 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Played on a 3D board with 3D tokens and animated 3D dice.
          </p>

          <p className="text-slate-800 font-medium text-sm sm:text-base mt-2 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            The official background, philosophy, and architectural vision behind the world's first 5 Way & 4 Way board game.
          </p>
        </div>
      </div>

      {/* Core Overview Card (Frosted Glass — Landing Page Shows Through) */}
      <div className="mb-14 p-6 sm:p-10 rounded-3xl bg-white/24 hover:bg-white/34 border-2 border-white/65 backdrop-blur-md shadow-xl space-y-6 relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-75" />
        <div className="relative z-10 flex items-center gap-3">
          <Crown className="w-6 h-6 text-[#0077be]" />
          <h2 className="text-xl sm:text-2xl font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-wider">
            Game Overview & Architecture
          </h2>
        </div>

        <p className="relative z-10 text-slate-950 text-base sm:text-lg leading-relaxed font-['Outfit'] font-bold">
          Ludo Dethroned 5 Way & 4 Way Two Dice is a 5 Way & 4 Way (five-player and four-player), 3D Ludo-style strategy game played with two dice, where the first player to get all four tokens onto their coloured home path wins. The game is played on a 3D board with 3D tokens and dice.
        </p>

        <p className="relative z-10 text-slate-900 text-sm sm:text-base leading-relaxed font-['Outfit'] font-medium">
          The game features 5 Way & 4 Way 3D board layouts with 3D tokens in player colours red, green, yellow, blue and orange, animated 3D dice, a shared open track, and a centre home in the middle.
        </p>

        <div className="relative z-10 p-4 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/75 font-mono text-xs sm:text-sm text-slate-950 flex flex-wrap items-center justify-between gap-3 shadow-xs">
          <div>
            Official domain: <strong className="text-[#0077be]">https://ludodethroned.com</strong>
          </div>
          <div className="text-slate-900 font-bold">
            5 Way & 4 Way • Four tokens each • Two dice (2 dice / double dice / 2 dies)
          </div>
        </div>

        {/* 5 Factions Highlights — Frosted Glass */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
          <div className="p-3 rounded-xl bg-blue-500/20 border-2 border-blue-500 text-center backdrop-blur-sm">
            <span className="font-mono text-xs font-black text-blue-950">BLUE WING</span>
          </div>
          <div className="p-3 rounded-xl bg-orange-500/20 border-2 border-orange-500 text-center backdrop-blur-sm">
            <span className="font-mono text-xs font-black text-orange-950">ORANGE WING</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-500/20 border-2 border-emerald-500 text-center backdrop-blur-sm">
            <span className="font-mono text-xs font-black text-emerald-950">GREEN WING</span>
          </div>
          <div className="p-3 rounded-xl bg-rose-500/20 border-2 border-rose-500 text-center backdrop-blur-sm">
            <span className="font-mono text-xs font-black text-rose-950">RED WING</span>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-amber-400/25 border-2 border-amber-500 text-center backdrop-blur-sm">
            <span className="font-mono text-xs font-black text-amber-950">YELLOW WING</span>
          </div>
        </div>
      </div>

      {/* Multilingual Selector — Frosted Glass */}
      <div className="mb-14 p-4 sm:p-6 rounded-3xl bg-white/24 hover:bg-white/35 border-2 border-white/65 backdrop-blur-md shadow-xl transition-all">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-white/40 backdrop-blur-sm border border-purple-500 text-purple-700 shadow-xs">
              <Globe className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-wider">
                GLOBAL COMPENDIUM • TOP 15 LANGUAGES
              </h3>
              <p className="text-xs text-slate-800 font-mono font-bold">
                Read the philosophical essay in your native language
              </p>
            </div>
          </div>
          <div className="text-xs font-mono font-bold text-slate-950 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-white/75 shadow-xs">
            CURRENT LOCALE: <strong className="text-[#0077be]">{currentLangObj.nativeName} ({currentLangObj.name})</strong>
          </div>
        </div>

        {/* 15 Language Buttons Bar */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none">
          {TOP_15_LANGUAGES.map((lang) => {
            const isSelected = lang.code === selectedLang;
            return (
              <button
                key={lang.code}
                onClick={() => handleLangChange(lang.code)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border backdrop-blur-sm ${
                  isSelected
                    ? 'bg-[#0077be] text-white border-[#0077be] shadow-[0_0_15px_rgba(0,119,190,0.45)] scale-105'
                    : 'bg-white/30 hover:bg-white/55 text-slate-950 border-white/75'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.nativeName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Part I Essay — Frosted Glass */}
      <article 
        className={`mb-16 p-6 sm:p-12 rounded-3xl bg-white/24 hover:bg-white/34 border-2 border-white/65 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all ${isRTL ? 'text-right' : 'text-left'}`}
        dir={currentLangObj.dir}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077be]/15 rounded-full blur-3xl pointer-events-none" />
        
        <header className="mb-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-pink-500/80 text-pink-700 text-xs font-mono font-black tracking-widest uppercase mb-3 shadow-xs">
            <Flame className="w-3.5 h-3.5 text-pink-600" />
            <span>THE PHILOSOPHICAL ESSAY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-['Chakra_Petch'] text-slate-950 uppercase leading-tight">
            {t.part1Title}
          </h2>
          <p className="text-slate-800 text-xs sm:text-sm font-mono mt-2 italic font-bold">
            {t.part1Subtitle}
          </p>
        </header>

        <div className="prose max-w-none text-slate-900 text-sm sm:text-base leading-relaxed space-y-5 font-['Outfit'] font-medium relative z-10">
          <p className="p-4 italic bg-white/30 backdrop-blur-sm rounded-xl text-slate-950 font-bold border border-white/70">
            {t.part1Body1}
          </p>
          <p>{t.part1Body2}</p>
          <p className="font-bold text-slate-950 text-base sm:text-lg">
            {t.part1Body3}
          </p>
          <p>{t.part1Body4}</p>
        </div>
      </article>

      {/* Related Pages Block */}
      <RelatedPages currentPath="/about" />
    </div>
  );
};
