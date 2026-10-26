import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, BookOpen, Sparkles, HelpCircle, ArrowRight, UserCheck, 
  ShieldCheck, FileText, Mail, Flame, CheckCircle2, ChevronDown 
} from 'lucide-react';
import { TOP_15_LANGUAGES, ESSAY_TRANSLATIONS, LanguageOption } from '../data/essayTranslations';
import { CANONICAL_FAQS } from '../data/canonicalContent';
import { sound } from '../utils/audio';

export const ContentAndFaqSection: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string>('en');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const currentLangObj: LanguageOption = TOP_15_LANGUAGES.find(l => l.code === selectedLang) || TOP_15_LANGUAGES[0];
  const t = ESSAY_TRANSLATIONS[selectedLang] || ESSAY_TRANSLATIONS.en;
  const isRTL = currentLangObj.dir === 'rtl';

  const handleLangChange = (code: string) => {
    sound.playClick(450);
    setSelectedLang(code);
  };

  const toggleFaq = (index: number) => {
    sound.playClick(400);
    setOpenFaq(prev => prev === index ? null : index);
  };

  // Preview first 3 FAQs for the teaser
  const previewFaqs = CANONICAL_FAQS.slice(0, 3);

  return (
    <section 
      id="faq-section" 
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-t border-white/60 ${isRTL ? 'text-right' : 'text-left'}`}
      dir={currentLangObj.dir}
    >
      
      {/* ══════════════════════════════════════════════════════════════════════
          TOP 15 LANGUAGES MULTI-LINGUAL SELECTOR BAR (FROSTED GLASS)
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="mb-14 p-4 sm:p-6 rounded-3xl bg-white/24 hover:bg-white/35 border-2 border-white/65 backdrop-blur-md shadow-xl transition-all">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-white/40 backdrop-blur-sm border border-[#0077be] text-[#0077be] shadow-sm">
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
          <div className="flex flex-wrap items-center gap-2">
            <div className="text-xs font-mono font-bold text-slate-950 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-white/75 shadow-sm">
              CURRENT LOCALE: <strong className="text-[#0077be]">{currentLangObj.nativeName} ({currentLangObj.name})</strong>
            </div>
            <Link
              to="/global-compendium"
              onClick={() => sound.playClick(450)}
              className="px-3.5 py-1 rounded-full bg-[#0077be] hover:bg-[#00609a] text-white text-xs font-mono font-bold transition-all flex items-center gap-1 shadow-sm"
            >
              <span>Full Compendium</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
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
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border-2 ${
                  isSelected
                    ? 'bg-[#0077be] text-white border-[#0077be] shadow-[0_0_15px_rgba(0,119,190,0.5)] scale-105'
                    : 'bg-white/50 hover:bg-white/80 text-slate-900 border-white/60'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.nativeName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          PART I: THE LITERARY ESSAY — "DON'T LET THE WINNER WIN THE MATCH"
         ══════════════════════════════════════════════════════════════════════ */}
      <article className="mb-20 p-6 sm:p-12 rounded-3xl bg-white/24 hover:bg-white/34 border-2 border-white/65 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        {/* Glow ambient accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0077be]/15 rounded-full blur-3xl pointer-events-none" />
        
        <header className="mb-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-pink-500/80 text-pink-700 text-xs font-mono font-black tracking-widest uppercase mb-3 shadow-xs">
            <Flame className="w-3.5 h-3.5 text-pink-600" />
            <span>PART I • THE PHILOSOPHICAL ESSAY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-['Chakra_Petch'] text-slate-950 uppercase leading-tight">
            {t.part1Title}
          </h2>
          <p className="text-slate-800 text-xs sm:text-sm font-mono mt-2 italic font-bold">
            Played on a 3D board with 3D tokens and animated 3D dice.
          </p>
          <p className="text-slate-800 text-xs sm:text-sm font-mono mt-1.5 italic font-bold">
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

      {/* ══════════════════════════════════════════════════════════════════════
          HOW TO PLAY TEASER (FROSTED GLASS)
         ══════════════════════════════════════════════════════════════════════ */}
      <div id="how-to-play-section" className="mb-16 p-8 sm:p-10 rounded-3xl bg-white/24 hover:bg-white/36 border-2 border-white/65 hover:border-[#0077be] transition-all shadow-xl backdrop-blur-md relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-[#0077be]/80 text-[#0077be] text-xs font-mono font-black tracking-widest uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#0077be]" style={{ color: '#0077be' }} />
              <span>HOW TO PLAY • 14-PART OFFICIAL GUIDE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch'] text-slate-950 uppercase">
              HOW TO PLAY <span className="text-[#0077be]" style={{ color: '#0077be' }}>LUDO DETHRONED 5 WAY & 4 WAY TWO DICE</span>
            </h2>
            <p className="text-slate-800 text-xs sm:text-sm mt-2.5 leading-relaxed font-['Outfit'] font-medium">
              Played on a 3D board with 3D tokens and animated 3D dice.
            </p>
            <p className="text-slate-800 text-xs sm:text-sm mt-2 leading-relaxed font-['Outfit'] font-medium">
              Ludo Dethroned 5 Way & 4 Way Two Dice is a 5 Way & 4 Way (five-player and four-player), 3D Ludo-style strategy game played with two dice (also widely known and searched as 2 dice, double dice, or 2 dies). Each player has four tokens. The first player to get all four tokens onto their coloured home path wins, and the match ends as soon as someone wins. Think of it as a T20 match rather than a Test match: the match is over once a winner is decided. Matches can include AI opponents.
            </p>
          </div>
          <Link
            to="/how-to-play"
            onClick={() => sound.playClick(500)}
            className="px-6 py-3.5 rounded-2xl bg-[#0077be] hover:bg-[#00609a] text-white font-black font-['Chakra_Petch'] text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(0,119,190,0.4)] transition-all cursor-pointer flex items-center gap-2 shrink-0 transform hover:scale-105"
          >
            <span>Read How to Play</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          STRATEGIES & TACTICS TEASER (FROSTED GLASS)
         ══════════════════════════════════════════════════════════════════════ */}
      <div id="strategy-guide" className="mb-16 p-8 sm:p-10 rounded-3xl bg-white/26 hover:bg-white/36 border-2 border-white/70 hover:border-amber-500 transition-all shadow-xl backdrop-blur-md relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-amber-500/80 text-amber-800 text-xs font-mono font-black tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>STRATEGY & TACTICS • SECTION 6</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch'] text-slate-950 uppercase">
              TACTICAL STRATEGY <span className="text-amber-600">COMPENDIUM</span>
            </h2>
            <p className="text-slate-800 text-xs sm:text-sm mt-2.5 leading-relaxed font-['Outfit'] font-medium">
              Played on a 3D board with 3D tokens and animated 3D dice.
            </p>
            <p className="text-slate-800 text-xs sm:text-sm mt-2 leading-relaxed font-['Outfit'] font-medium">
              These tactics follow directly from the rules. The dice decide what is possible on a turn, and your choices decide what you do with it: which token to move, when to capture and when to protect your tokens. Master safe-square pairs, turn-timer pressure, and targeting the match leader.
            </p>
          </div>
          <Link
            to="/strategies"
            onClick={() => sound.playClick(500)}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black font-['Chakra_Petch'] text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all cursor-pointer flex items-center gap-2 shrink-0 transform hover:scale-105"
          >
            <span>Explore Strategies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          FAQ TEASER (FROSTED GLASS)
         ══════════════════════════════════════════════════════════════════════ */}
      <div id="faq-section" className="mb-16 p-8 sm:p-10 rounded-3xl bg-white/26 hover:bg-white/36 border-2 border-white/70 hover:border-emerald-500 transition-all shadow-xl backdrop-blur-md relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 mb-8">
          <div className="max-w-3xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-emerald-500/80 text-emerald-800 text-xs font-mono font-black tracking-widest uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>CANONICAL FAQ • SECTION 7</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch'] text-slate-950 uppercase">
              FREQUENTLY ASKED <span className="text-emerald-700">QUESTIONS</span>
            </h2>
            <p className="text-slate-800 text-xs sm:text-sm mt-2.5 leading-relaxed font-['Outfit'] font-medium">
              Played on a 3D board with 3D tokens and animated 3D dice.
            </p>
            <p className="text-slate-800 text-xs sm:text-sm mt-2 leading-relaxed font-['Outfit'] font-medium">
              Every question and answer confirmed directly by the game’s creator. Learn about board mechanics, dice rules, capturing, pairs, missed capture penalties, historical origins (from ancient Pachisi to Emperor Akbar), regional names, and multilingual spelling variations.
            </p>
          </div>
          <Link
            to="/faq"
            onClick={() => sound.playClick(500)}
            className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black font-['Chakra_Petch'] text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all cursor-pointer flex items-center gap-2 shrink-0 transform hover:scale-105"
          >
            <span>Browse Full FAQ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Short Preview of 3 Popular Questions */}
        <div className="relative z-10 space-y-3">
          {previewFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index}
                className="border-2 border-white/60 bg-white/30 hover:bg-white/45 rounded-2xl overflow-hidden transition-all backdrop-blur-md shadow-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-mono font-bold text-xs sm:text-sm text-slate-950 hover:text-emerald-700 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-emerald-600 font-black text-xs">Q{index + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-emerald-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-slate-800 text-xs sm:text-sm leading-relaxed border-t border-slate-200/60 pt-3 font-['Outfit'] font-medium">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          TRUST CENTER & POLICIES (Inside Unified Frosted Glass Card)
         ══════════════════════════════════════════════════════════════════════ */}
      <div id="trust-center" className="p-5 sm:p-6 rounded-3xl bg-white/26 hover:bg-white/36 border-2 border-white/70 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none opacity-85" />
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono font-black tracking-wider uppercase text-slate-900">
          <Link 
            to="/about"
            onClick={() => sound.playClick(400)} 
            className="hover:text-[#0077be] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <UserCheck className="w-4 h-4 text-purple-700" /> About Ludo Dethroned
          </Link>
          <span className="text-slate-600">•</span>
          <Link 
            to="/privacy"
            onClick={() => sound.playClick(400)} 
            className="hover:text-[#0077be] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-[#0077be]" /> Privacy Policy
          </Link>
          <span className="text-slate-600">•</span>
          <Link 
            to="/contact"
            onClick={() => sound.playClick(400)} 
            className="hover:text-[#0077be] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4 text-blue-700" /> Contact
          </Link>
        </div>
      </div>
    </section>
  );
};
