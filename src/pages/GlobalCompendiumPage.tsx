import React, { useState } from 'react';
import { Globe, Flame, Sparkles, ShieldAlert, Scale, HelpCircle, ChevronDown, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RelatedPages } from '../components/RelatedPages';
import { TOP_15_LANGUAGES, ESSAY_TRANSLATIONS, LanguageOption } from '../data/essayTranslations';
import { sound } from '../utils/audio';

const RULE_ACCENTS = [
  '#0077be',
  '#f97316',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#a855f7',
  '#ec4899',
  '#06b6d4',
  '#eab308',
  '#3b82f6',
];

export const GlobalCompendiumPage: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string>('en');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const currentLangObj: LanguageOption =
    TOP_15_LANGUAGES.find((l) => l.code === selectedLang) || TOP_15_LANGUAGES[0];
  const t = ESSAY_TRANSLATIONS[selectedLang] || ESSAY_TRANSLATIONS.en;
  const isRTL = currentLangObj.dir === 'rtl';

  const handleLangChange = (code: string) => {
    sound.playClick(450);
    setSelectedLang(code);
  };

  const toggleFaq = (index: number) => {
    sound.playClick(400);
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 ${
        isRTL ? 'text-right' : 'text-left'
      }`}
      dir={currentLangObj.dir}
    >
      <SEO
        title="Global Compendium (15 Languages) | Ludo Dethroned 5 Way & 4 Way Two Dice — 3D Ludo-style strategy game"
        description="Read the official Global Compendium of Ludo Dethroned 5 Way & 4 Way Two Dice, a 3D Ludo-style strategy game, in 15 world languages: philosophy, rules, comparative matrix, and FAQs."
        canonicalPath="/global-compendium"
      />

      {/* Unified Frosted Glass Page Heading Card */}
      <div
        dir="ltr"
        className="text-center mb-12 p-6 sm:p-10 rounded-3xl bg-white/26 hover:bg-white/36 border-2 border-white/70 backdrop-blur-md shadow-xl relative overflow-hidden transition-all"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-white/10 to-transparent pointer-events-none opacity-85" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-[#0077be]/80 text-[#0077be] text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-xs">
            <Globe className="w-4 h-4 text-[#0077be]" />
            <span>GLOBAL COMPENDIUM • TOP 15 WORLD LANGUAGES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-tight leading-tight">
            Global <span className="text-[#0077be]">Compendium</span>
          </h1>

          <p className="text-slate-800 font-medium text-sm sm:text-base mt-3 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Played on a 3D board with 3D tokens and animated 3D dice.
          </p>

          <p className="text-slate-800 font-medium text-sm sm:text-base mt-2 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            The complete four-part philosophical manifesto, canonical rules overview, comparative gameplay matrix, and creator answers for Ludo Dethroned 5 Way & 4 Way Two Dice across 15 world languages.
          </p>
        </div>
      </div>

      {/* Top 15 Languages Selector Bar (Frosted Glass) */}
      <div
        dir="ltr"
        className="mb-14 p-5 sm:p-7 rounded-3xl bg-white/24 hover:bg-white/35 border-2 border-white/65 backdrop-blur-md shadow-xl transition-all"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-white/40 backdrop-blur-sm border border-[#0077be] text-[#0077be] shadow-xs">
              <Globe className="w-5 h-5" />
            </span>
            <div className="text-left">
              <h2 className="text-sm sm:text-base font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-wider">
                SELECT LANGUAGE • 15 NATIVE EDITIONS
              </h2>
              <p className="text-xs text-slate-800 font-mono font-bold">
                Switch language instantly to read the entire 4-part compendium
              </p>
            </div>
          </div>
          <div className="text-xs font-mono font-bold text-slate-950 px-3.5 py-1.5 rounded-xl bg-white/35 backdrop-blur-sm border border-white/75 shadow-xs">
            CURRENT LOCALE:{' '}
            <strong className="text-[#0077be]">
              {currentLangObj.flag} {currentLangObj.nativeName} ({currentLangObj.name})
            </strong>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          {TOP_15_LANGUAGES.map((lang) => {
            const isSelected = lang.code === selectedLang;
            return (
              <button
                key={lang.code}
                onClick={() => handleLangChange(lang.code)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border-2 ${
                  isSelected
                    ? 'bg-[#0077be] text-white border-[#0077be] shadow-[0_0_15px_rgba(0,119,190,0.45)] scale-105'
                    : 'bg-white/45 hover:bg-white/75 text-slate-900 border-white/65'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.nativeName}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Part I: The Philosophical Essay */}
      <article className="mb-14 p-6 sm:p-12 rounded-3xl bg-white/24 hover:bg-white/34 border-2 border-white/65 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
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
            {t.part1Subtitle}
          </p>
        </header>

        <div className="prose max-w-none text-slate-900 text-sm sm:text-base leading-relaxed space-y-5 font-['Outfit'] font-medium relative z-10">
          <p className="p-4 italic bg-white/30 backdrop-blur-sm rounded-xl text-slate-950 font-bold border border-white/70">
            {t.part1Body1}
          </p>
          <p>{t.part1Body2}</p>
          <p className="font-bold text-slate-950 text-base sm:text-lg">{t.part1Body3}</p>
          <p>{t.part1Body4}</p>
        </div>
      </article>

      {/* Part II: Tactical Drama & Game Design */}
      <section className="mb-14 p-6 sm:p-10 rounded-3xl bg-white/24 hover:bg-white/34 border-2 border-white/65 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-80" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-amber-500/80 text-amber-800 text-xs font-mono font-black tracking-widest uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>PART II • HIGH-STAKES TACTICAL DESIGN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch'] text-slate-950 uppercase leading-tight">
            {t.part2Title}
          </h2>
          <p className="text-slate-800 text-xs sm:text-sm font-mono mt-1.5 italic font-bold mb-6">
            {t.part2Subtitle}
          </p>
          <div className="space-y-4 text-slate-900 text-sm sm:text-base leading-relaxed font-['Outfit'] font-medium">
            <p>{t.part2Body1}</p>
            <p className="p-4 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/70 font-bold text-slate-950">
              {t.part2Body2}
            </p>
          </div>
        </div>
      </section>

      {/* Part III: Core Aim & Canonical Rules */}
      <section className="mb-14 p-6 sm:p-10 rounded-3xl bg-white/24 hover:bg-white/34 border-2 border-white/65 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent pointer-events-none opacity-80" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-[#0077be]/80 text-[#0077be] text-xs font-mono font-black tracking-widest uppercase mb-3 shadow-xs">
            <ShieldAlert className="w-3.5 h-3.5 text-[#0077be]" />
            <span>PART III • ARCHITECTURE & RULES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch'] text-slate-950 uppercase leading-tight mb-6">
            {t.part3Title}
          </h2>

          <div className="mb-8 p-5 rounded-2xl bg-white/32 backdrop-blur-sm border border-white/75">
            <h3 className="text-lg font-black font-['Chakra_Petch'] text-slate-950 uppercase mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#0077be]" />
              <span>{t.coreAimTitle}</span>
            </h3>
            <p className="text-slate-900 text-sm sm:text-base font-['Outfit'] font-medium leading-relaxed">
              {t.coreAimText}
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-black font-['Chakra_Petch'] text-slate-950 uppercase mb-5">
            {t.tenRulesTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.rules.map((rule, idx) => {
              const accent = RULE_ACCENTS[idx % RULE_ACCENTS.length];
              return (
                <div
                  key={rule.num}
                  style={{ borderColor: `${accent}85` }}
                  className="p-5 rounded-2xl bg-white/28 hover:bg-white/42 backdrop-blur-md border-2 shadow-md transition-all"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <span
                      style={{ backgroundColor: accent }}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-black text-black uppercase shadow-xs"
                    >
                      Rule {rule.num}
                    </span>
                    <h4 className="font-['Chakra_Petch'] font-black text-base sm:text-lg text-slate-950">
                      {rule.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-900 font-['Outfit'] font-medium leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparative Gameplay Matrix Table */}
      <section className="mb-14 p-6 sm:p-10 rounded-3xl bg-white/24 hover:bg-white/34 border-2 border-white/65 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-emerald-600/80 text-emerald-800 text-xs font-mono font-black tracking-widest uppercase mb-3 shadow-xs">
            <Scale className="w-3.5 h-3.5 text-emerald-700" />
            <span>COMPARATIVE MATRIX • CLASSIC VS LUDO DETHRONED</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch'] text-slate-950 uppercase leading-tight mb-6">
            {t.tableHeaders.classic} vs {t.tableHeaders.dethroned}
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-white/75 bg-white/28 backdrop-blur-md">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-white/45 border-b border-white/75 font-['Chakra_Petch'] text-slate-950 uppercase text-xs sm:text-sm">
                  <th className="p-3.5 sm:p-4 font-black">{t.tableHeaders.feature}</th>
                  <th className="p-3.5 sm:p-4 font-black">{t.tableHeaders.classic}</th>
                  <th className="p-3.5 sm:p-4 font-black text-[#0077be]">{t.tableHeaders.dethroned}</th>
                  <th className="p-3.5 sm:p-4 font-black">{t.tableHeaders.commentary}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/55 font-['Outfit']">
                {t.tableRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/35 transition-colors">
                    <td className="p-3.5 sm:p-4 font-black text-slate-950">{row.feature}</td>
                    <td className="p-3.5 sm:p-4 text-slate-800 font-medium">{row.classic}</td>
                    <td className="p-3.5 sm:p-4 font-bold text-[#0077be]">{row.dethroned}</td>
                    <td className="p-3.5 sm:p-4 text-slate-900 italic font-medium">{row.commentary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Part IV: Compendium FAQs */}
      <section className="mb-14 p-6 sm:p-10 rounded-3xl bg-white/24 hover:bg-white/34 border-2 border-white/65 backdrop-blur-md shadow-xl relative overflow-hidden transition-all">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/35 backdrop-blur-sm border border-pink-500/80 text-pink-800 text-xs font-mono font-black tracking-widest uppercase mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-pink-700" />
            <span>PART IV • COMPENDIUM INQUIRIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch'] text-slate-950 uppercase leading-tight mb-6">
            {t.part5Title}
          </h2>

          <div className="space-y-3">
            {t.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/30 hover:bg-white/42 backdrop-blur-md border border-white/75 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 font-['Chakra_Petch'] font-black text-sm sm:text-base text-slate-950 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0077be] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 text-xs sm:text-sm text-slate-900 font-['Outfit'] font-medium leading-relaxed border-t border-white/55">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div dir="ltr">
        <RelatedPages currentPath="/global-compendium" />
      </div>
    </div>
  );
};
