import React, { useState } from 'react';
import { 
  Globe, Table, BookOpen, ShieldAlert, Sparkles, HelpCircle, 
  ExternalLink, ChevronDown, CheckCircle2, UserCheck, ShieldCheck, 
  FileText, Mail, Swords, Dices, Flame, AlertTriangle, ArrowRight
} from 'lucide-react';
import { TOP_15_LANGUAGES, ESSAY_TRANSLATIONS, LanguageOption } from '../data/essayTranslations';
import { sound } from '../utils/audio';

export const ContentAndFaqSection: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string>('en');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTrustDoc, setActiveTrustDoc] = useState<'about' | 'privacy' | 'terms' | 'contact' | null>(null);

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

  return (
    <section 
      id="faq-section" 
      className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10 border-t border-slate-800/80 ${isRTL ? 'text-right' : 'text-left'}`}
      dir={currentLangObj.dir}
    >
      
      {/* ══════════════════════════════════════════════════════════════════════
          TOP 15 LANGUAGES MULTI-LINGUAL SELECTOR BAR (SEO / AEO / GEO HUB)
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="mb-14 p-4 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
              <Globe className="w-5 h-5 animate-spin-slow" />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-black font-['Chakra_Petch'] text-white uppercase tracking-wider">
                GLOBAL COMPENDIUM // TOP 15 LANGUAGES
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Read the philosophical essay, rule comparison & 10 decrees in your native language
              </p>
            </div>
          </div>
          <div className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
            CURRENT LOCALE: <strong className="text-white">{currentLangObj.nativeName} ({currentLangObj.name})</strong>
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
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.5)] scale-105'
                    : 'bg-slate-950/60 hover:bg-slate-800 text-slate-300 border-slate-800'
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
      <article className="mb-20 p-6 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md shadow-2xl relative overflow-hidden">
        {/* Glow ambient accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/60 border border-pink-500/40 text-pink-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Flame className="w-3.5 h-3.5 text-pink-400" />
            <span>PART I // THE PHILOSOPHICAL ESSAY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-['Chakra_Petch'] text-white uppercase leading-tight">
            {t.part1Title}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-mono mt-2 italic">
            {t.part1Subtitle}
          </p>
        </header>

        <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-5 font-['Outfit']">
          <p className="border-l-4 border-cyan-500 pl-4 py-1 italic bg-cyan-950/20 rounded-r-xl">
            {t.part1Body1}
          </p>
          <p>{t.part1Body2}</p>
          <p className="font-semibold text-white text-base sm:text-lg">
            {t.part1Body3}
          </p>
          <p>{t.part1Body4}</p>
        </div>
      </article>

      {/* ══════════════════════════════════════════════════════════════════════
          COMPARATIVE MATRIX: LUDO KING VS LUDO EMPEROR 5 WAY
         ══════════════════════════════════════════════════════════════════════ */}
      <div id="comparison-table" className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Table className="w-3.5 h-3.5 text-cyan-400" />
            <span>THE STRATEGIC MATRIX</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-['Chakra_Petch'] text-white uppercase">
            5-WAY PENTAGONAL vs <span className="text-cyan-400">CLASSIC 4-WAY LUDO</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 font-mono">
            Direct fearless comparison: Traditional Ludo (Ludo King) vs Ludo Emperor 5 Way
          </p>
        </div>

        {/* The Matrix Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-md shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm text-slate-300 font-['Outfit']">
            <thead className="bg-slate-950/90 text-white font-mono text-[11px] sm:text-xs uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-4 px-4 sm:px-6">{t.tableHeaders.feature}</th>
                <th className="py-4 px-4 sm:px-6 text-slate-400">{t.tableHeaders.classic}</th>
                <th className="py-4 px-4 sm:px-6 text-cyan-400 font-bold bg-cyan-950/30 border-x border-cyan-500/30">
                  {t.tableHeaders.emperor}
                </th>
                <th className="py-4 px-4 sm:px-6 text-amber-400 font-bold">{t.tableHeaders.commentary}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {t.tableRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-semibold text-white whitespace-nowrap">{row.feature}</td>
                  <td className="py-4 px-4 sm:px-6 text-slate-400">{row.classic}</td>
                  <td className="py-4 px-4 sm:px-6 text-cyan-300 bg-cyan-950/15 border-x border-cyan-500/20 font-medium">
                    {row.emperor}
                  </td>
                  <td className="py-4 px-4 sm:px-6 text-amber-300/90 font-mono text-[11px] sm:text-xs italic">
                    "{row.commentary}"
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          PART II: WHY MOST GAMES BORE YOU TO TEARS
         ══════════════════════════════════════════════════════════════════════ */}
      <article className="mb-20 p-6 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
        <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase mb-2">
          <BookOpen className="w-4 h-4" />
          <span>PART II // RADICAL GAME DESIGN</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black font-['Chakra_Petch'] text-white uppercase mb-2">
          {t.part2Title}
        </h2>
        <p className="text-slate-400 text-xs font-mono mb-4">{t.part2Subtitle}</p>
        <div className="space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed font-['Outfit']">
          <p>{t.part2Body1}</p>
          <p className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/30 text-cyan-200">
            {t.part2Body2}
          </p>
        </div>
      </article>

      {/* ══════════════════════════════════════════════════════════════════════
          PART III: THE 10 INVIOLABLE DECREES & CANONICAL ARCHITECTURE
         ══════════════════════════════════════════════════════════════════════ */}
      <div id="rules-section" className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Swords className="w-3.5 h-3.5 text-cyan-400" />
            <span>PART III // CANONICAL ARCHITECTURE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-['Chakra_Petch'] text-white uppercase">
            {t.tenRulesTitle}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl mx-auto font-mono">
            {t.coreAimText}
          </p>
        </div>

        {/* 10 Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.rules.map((rule) => (
            <div 
              key={rule.num}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                    DECREE #{rule.num}
                  </span>
                  <span className="text-xs">⚔️</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold font-['Chakra_Petch'] text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {rule.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-['Outfit']">
                  {rule.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          PART IV: WHY IT BEATS THE TOP 10 APPS
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="mb-20 p-6 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
        <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase mb-2">
          <AlertTriangle className="w-4 h-4" />
          <span>PART IV // MARKET SUPERIORITY</span>
        </div>
        <h2 className="text-xl sm:text-3xl font-black font-['Chakra_Petch'] text-white uppercase mb-6">
          {t.part4Title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {t.competitors.map((comp, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
              <div className="font-mono font-bold text-xs text-cyan-400 mb-1">
                {comp.name}
              </div>
              <p className="text-slate-300 text-xs leading-relaxed font-['Outfit']">
                {comp.critique}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          PART V: FREQUENTLY ASKED QUESTIONS (AEO / GEO ACCORDION)
         ══════════════════════════════════════════════════════════════════════ */}
      <div className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>PART V // AEO QUESTION HUB</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black font-['Chakra_Petch'] text-white uppercase">
            {t.part5Title}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 font-mono">
            Concise, authoritative philosophical answers for players, critics, and referees.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {t.faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index}
                className="border border-slate-800 bg-slate-900/70 backdrop-blur-md rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-mono font-bold text-xs sm:text-sm text-white hover:text-cyan-300 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-cyan-400 text-xs">Q{index + 1}.</span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60 pt-3 font-['Outfit']">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          TRUST CENTER & E-E-A-T POLICY MODALS
         ══════════════════════════════════════════════════════════════════════ */}
      <div id="trust-center" className="pt-8 border-t border-slate-800/80">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono font-bold tracking-wider uppercase text-slate-400">
          <button 
            onClick={() => { setActiveTrustDoc('about'); sound.playClick(400); }} 
            className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <UserCheck className="w-3.5 h-3.5" /> About Ludo Emperor
          </button>
          <span>•</span>
          <button 
            onClick={() => { setActiveTrustDoc('privacy'); sound.playClick(400); }} 
            className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5" /> Privacy Policy
          </button>
          <span>•</span>
          <button 
            onClick={() => { setActiveTrustDoc('terms'); sound.playClick(400); }} 
            className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" /> Terms of Service
          </button>
          <span>•</span>
          <button 
            onClick={() => { setActiveTrustDoc('contact'); sound.playClick(400); }} 
            className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" /> Contact Support
          </button>
        </div>

        {/* Dynamic Trust Modal Viewer */}
        {activeTrustDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="max-w-2xl w-full bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
              <button
                onClick={() => setActiveTrustDoc(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-xl bg-slate-800 cursor-pointer"
              >
                ✕
              </button>
              
              {activeTrustDoc === 'about' && (
                <div>
                  <h3 className="text-xl font-bold font-['Chakra_Petch'] text-white uppercase mb-3">About Ludo Emperor 5 Way</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    Founded in 2026, Ludo Emperor 5 Way is an independent browser gaming project designed to modernize classic asymmetric board game mechanics. By combining pentagonal mathematics, 2d6 split-movement probabilities, and anti-runaway coalition algorithms, we bring genuine competitive depth to the beloved traditional parlor game.
                  </p>
                  <p className="text-slate-400 text-xs font-mono">
                    Official domain: https://ludoemperor.com • Developed for desktop and mobile browsers.
                  </p>
                </div>
              )}

              {activeTrustDoc === 'privacy' && (
                <div>
                  <h3 className="text-xl font-bold font-['Chakra_Petch'] text-white uppercase mb-3">Privacy Policy</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    Ludo Emperor 5 Way operates strictly as a client-side and browser multiplayer experience. We do not sell personal data, track users across third-party websites, or require invasive social permissions. Custom room codes and match states are ephemeral and automatically cleared when a game concludes.
                  </p>
                  <p className="text-slate-400 text-xs font-mono">
                    Last updated: October 2026 • GDPR & CCPA compliant zero-tracking framework.
                  </p>
                </div>
              )}

              {activeTrustDoc === 'terms' && (
                <div>
                  <h3 className="text-xl font-bold font-['Chakra_Petch'] text-white uppercase mb-3">Terms of Service</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    Ludo Emperor 5 Way is provided free of charge for recreational and competitive browser gaming. All original game rules, the 16 Sacred Decrees, and synthwave assets are proprietary intellectual property. No real-money gambling, wagers, or microtransaction deposits are hosted on this platform.
                  </p>
                  <p className="text-slate-400 text-xs font-mono">
                    Jurisdiction: Global digital distribution • Fair Play & Community Guidelines apply.
                  </p>
                </div>
              )}

              {activeTrustDoc === 'contact' && (
                <div>
                  <h3 className="text-xl font-bold font-['Chakra_Petch'] text-white uppercase mb-3">Contact Support & Licensing</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    Have questions about the 16 Sacred Decrees, tournament sponsorship, or bug reports? Contact our community engineering team directly:
                  </p>
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-400 space-y-1.5">
                    <div>Email: support@ludoemperor.com</div>
                    <div>Community: discord.gg/ludoemperor</div>
                    <div>Inquiries: partnerships@ludoemperor.com</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
