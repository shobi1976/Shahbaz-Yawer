import React, { useState } from 'react';
import { Globe, Flame, Sparkles, ShieldAlert, Scale, HelpCircle, ChevronDown, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RelatedPages } from '../components/RelatedPages';
import { TOP_15_LANGUAGES, ESSAY_TRANSLATIONS, LanguageOption } from '../data/essayTranslations';
import { sound } from '../utils/audio';

const RULE_ACCENTS = [
  '#0297DE',
  '#FC734D',
  '#38bdf8',
  '#ff8c6b',
  '#0297DE',
  '#FC734D',
  '#0ea5e9',
  '#fb7185',
  '#0297DE',
  '#FC734D',
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

      {/* Unified Midnight Black Frosted Glass Page Heading Card */}
      <div
        dir="ltr"
        className="text-center mb-12 p-6 sm:p-10 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/14 via-transparent to-[#FC734D]/12 pointer-events-none opacity-85" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05121d]/85 backdrop-blur-sm border border-[#0297DE]/60 text-[#0297DE] text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-xs">
            <Globe className="w-4 h-4 text-[#0297DE]" />
            <span>GLOBAL COMPENDIUM • TOP 15 WORLD LANGUAGES</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Chakra_Petch'] text-white uppercase tracking-tight leading-tight">
            Global <span className="text-[#FC734D]">Compendium</span>
          </h1>

          <p className="text-slate-300 font-medium text-sm sm:text-base mt-3 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Played on a 3D board with 3D tokens and animated 3D dice.
          </p>

          <p className="text-slate-300 font-medium text-sm sm:text-base mt-2 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            The complete four-part philosophical manifesto, canonical rules overview, comparative gameplay matrix, and creator answers for Ludo Dethroned 5 Way & 4 Way Two Dice across 15 world languages.
          </p>
        </div>
      </div>

      {/* Top 15 Languages Selector Bar (Midnight Black Frosted Glass) */}
      <div
        dir="ltr"
        className="mb-14 p-5 sm:p-7 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl transition-all"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-[#05121d]/85 backdrop-blur-sm border border-[#0297DE]/60 text-[#0297DE] shadow-xs">
              <Globe className="w-5 h-5" />
            </span>
            <div className="text-left">
              <h2 className="text-sm sm:text-base font-black font-['Chakra_Petch'] text-white uppercase tracking-wider">
                SELECT LANGUAGE • 15 NATIVE EDITIONS
              </h2>
              <p className="text-xs text-slate-400 font-mono font-bold">
                Switch language instantly to read the entire 4-part compendium
              </p>
            </div>
          </div>
          <div className="text-xs font-mono font-bold text-slate-200 px-3.5 py-1.5 rounded-xl bg-[#05121d]/85 backdrop-blur-sm border border-[#0297DE]/35 shadow-xs">
            CURRENT LOCALE:{' '}
            <strong className="text-[#FC734D]">
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
                    ? 'bg-[#0297DE] text-white border-[#0297DE] shadow-[0_0_15px_rgba(2,151,222,0.48)] scale-105'
                    : 'bg-[#05121d]/75 hover:bg-[#05121d] text-slate-200 border-[#0297DE]/25 hover:border-[#0297DE]'
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
      <article className="mb-14 p-6 sm:p-12 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0297DE]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FC734D]/12 rounded-full blur-3xl pointer-events-none" />
        <header className="mb-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05121d]/85 backdrop-blur-sm border border-[#FC734D]/65 text-[#FC734D] text-xs font-mono font-black tracking-widest uppercase mb-3 shadow-xs">
            <Flame className="w-3.5 h-3.5 text-[#FC734D]" />
            <span>PART I • THE PHILOSOPHICAL ESSAY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-['Chakra_Petch'] text-white uppercase leading-tight">
            {t.part1Title}
          </h2>
          <p className="text-[#0297DE] text-xs sm:text-sm font-mono mt-2 italic font-bold">
            {t.part1Subtitle}
          </p>
        </header>

        <div className="prose max-w-none text-slate-200 text-sm sm:text-base leading-relaxed space-y-5 font-['Outfit'] font-medium relative z-10">
          <p className="p-4 italic bg-[#05121d]/80 backdrop-blur-sm rounded-xl text-white font-bold border border-[#0297DE]/45">
            {t.part1Body1}
          </p>
          <p>{t.part1Body2}</p>
          <p className="font-bold text-white text-base sm:text-lg">{t.part1Body3}</p>
          <p>{t.part1Body4}</p>
        </div>
      </article>

      {/* Part II: Tactical Drama & Game Design */}
      <section className="mb-14 p-6 sm:p-10 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FC734D]/12 via-transparent to-[#0297DE]/10 pointer-events-none opacity-80" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05121d]/85 backdrop-blur-sm border border-[#0297DE]/60 text-[#0297DE] text-xs font-mono font-black tracking-widest uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0297DE]" />
            <span>PART II • HIGH-STAKES TACTICAL DESIGN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch'] text-white uppercase leading-tight">
            {t.part2Title}
          </h2>
          <p className="text-[#FC734D] text-xs sm:text-sm font-mono mt-1.5 italic font-bold mb-6">
            {t.part2Subtitle}
          </p>
          <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed font-['Outfit'] font-medium">
            <p>{t.part2Body1}</p>
            <p className="p-4 rounded-2xl bg-[#05121d]/85 backdrop-blur-sm border border-[#0297DE]/35 font-bold text-white">
              {t.part2Body2}
            </p>
          </div>
        </div>
      </section>

      {/* Part III: Core Aim & Canonical Rules */}
      <section className="mb-14 p-6 sm:p-10 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/12 via-transparent to-[#FC734D]/10 pointer-events-none opacity-80" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05121d]/85 backdrop-blur-sm border border-[#FC734D]/65 text-[#FC734D] text-xs font-mono font-black tracking-widest uppercase mb-3 shadow-xs">
            <ShieldAlert className="w-3.5 h-3.5 text-[#FC734D]" />
            <span>PART III • ARCHITECTURE & RULES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch'] text-white uppercase leading-tight mb-6">
            {t.part3Title}
          </h2>

          <div className="mb-8 p-5 rounded-2xl bg-[#05121d]/85 backdrop-blur-sm border border-[#0297DE]/35">
            <h3 className="text-lg font-black font-['Chakra_Petch'] text-white uppercase mb-2 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#0297DE]" />
              <span>{t.coreAimTitle}</span>
            </h3>
            <p className="text-slate-200 text-sm sm:text-base font-['Outfit'] font-medium leading-relaxed">
              {t.coreAimText}
            </p>
          </div>

          <h3 className="text-xl sm:text-2xl font-black font-['Chakra_Petch'] text-white uppercase mb-5">
            {t.tenRulesTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.rules.map((rule, idx) => {
              const accent = RULE_ACCENTS[idx % RULE_ACCENTS.length];
              return (
                <div
                  key={rule.num}
                  style={{ borderColor: `${accent}80` }}
                  className="p-5 rounded-2xl bg-[#05121d]/80 hover:bg-[#05121d] backdrop-blur-md border-2 shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="dice-silver-badge px-2.5 py-1 rounded-lg text-xs font-mono font-black uppercase">
                      Rule {rule.num}
                    </span>
                    <h4 className="font-['Chakra_Petch'] font-black text-base sm:text-lg text-white">
                      {rule.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-['Outfit'] font-medium leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparative Gameplay Matrix Table */}
      <section className="mb-14 p-6 sm:p-10 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05121d]/85 backdrop-blur-sm border border-[#0297DE]/60 text-[#0297DE] text-xs font-mono font-black tracking-widest uppercase mb-3 shadow-xs">
            <Scale className="w-3.5 h-3.5 text-[#0297DE]" />
            <span>COMPARATIVE MATRIX • CLASSIC VS LUDO DETHRONED</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch'] text-white uppercase leading-tight mb-6">
            {t.tableHeaders.classic} vs <span className="text-[#FC734D]">{t.tableHeaders.dethroned}</span>
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-[#0297DE]/35 bg-[#05121d]/80 backdrop-blur-md">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#02070A]/95 border-b border-[#0297DE]/35 font-['Chakra_Petch'] text-white uppercase text-xs sm:text-sm">
                  <th className="p-3.5 sm:p-4 font-black">{t.tableHeaders.feature}</th>
                  <th className="p-3.5 sm:p-4 font-black text-slate-300">{t.tableHeaders.classic}</th>
                  <th className="p-3.5 sm:p-4 font-black text-[#FC734D]">{t.tableHeaders.dethroned}</th>
                  <th className="p-3.5 sm:p-4 font-black text-[#0297DE]">{t.tableHeaders.commentary}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#0297DE]/20 font-['Outfit']">
                {t.tableRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#0297DE]/10 transition-colors">
                    <td className="p-3.5 sm:p-4 font-black text-white">{row.feature}</td>
                    <td className="p-3.5 sm:p-4 text-slate-400 font-medium">{row.classic}</td>
                    <td className="p-3.5 sm:p-4 font-bold text-[#FC734D]">{row.dethroned}</td>
                    <td className="p-3.5 sm:p-4 text-slate-300 italic font-medium">{row.commentary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Part IV: Compendium FAQs */}
      <section className="mb-14 p-6 sm:p-10 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05121d]/85 backdrop-blur-sm border border-[#FC734D]/65 text-[#FC734D] text-xs font-mono font-black tracking-widest uppercase mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#FC734D]" />
            <span>PART IV • COMPENDIUM INQUIRIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-['Chakra_Petch'] text-white uppercase leading-tight mb-6">
            {t.part5Title}
          </h2>

          <div className="space-y-3">
            {t.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#05121d]/80 hover:bg-[#05121d] backdrop-blur-md border border-[#0297DE]/30 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 font-['Chakra_Petch'] font-black text-sm sm:text-base text-white hover:text-[#0297DE] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FC734D] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 text-xs sm:text-sm text-slate-300 font-['Outfit'] font-medium leading-relaxed border-t border-[#0297DE]/25">
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
