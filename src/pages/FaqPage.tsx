import React, { useState, useMemo, useEffect } from 'react';
import { HelpCircle, ChevronDown, Search, X, Sparkles } from 'lucide-react';
import { SEO } from '../components/SEO';
import { RelatedPages } from '../components/RelatedPages';
import { CANONICAL_FAQS } from '../data/canonicalContent';
import { sound } from '../utils/audio';

const NEW_FAQ_GROUP_HEADINGS = new Set([
  'Getting started',
  'Compared with traditional Ludo',
  'Dice',
  'Strategy',
]);

export const FaqPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeFaqCategory, setActiveFaqCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const faqCategories = useMemo(() => {
    const categories = Array.from(new Set(CANONICAL_FAQS.map(faq => faq.category)));
    return ['All', ...categories];
  }, []);

  // Ensure FAQPage structured data matches visible page FAQs word-for-word with zero non-page questions
  useEffect(() => {
    const scriptEl = document.getElementById('site-jsonld-graph');
    if (!scriptEl || !scriptEl.textContent) return;
    try {
      const parsed = JSON.parse(scriptEl.textContent);
      if (parsed && Array.isArray(parsed['@graph'])) {
        const mainEntity = CANONICAL_FAQS.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        }));
        const faqNodeIndex = parsed['@graph'].findIndex(
          (node: Record<string, unknown>) => node['@type'] === 'FAQPage'
        );
        const updatedFaqNode = {
          '@type': 'FAQPage',
          '@id': 'https://ludodethroned.com/faq#faq',
          mainEntity,
        };
        if (faqNodeIndex >= 0) {
          parsed['@graph'][faqNodeIndex] = updatedFaqNode;
        } else {
          parsed['@graph'].push(updatedFaqNode);
        }
        scriptEl.textContent = JSON.stringify(parsed);
      }
    } catch {
      // Ignore malformed JSON-LD parse errors
    }
  }, []);

  const filteredFaqs = useMemo(() => {
    return CANONICAL_FAQS.filter(faq => {
      const matchesCategory = activeFaqCategory === 'All' || faq.category === activeFaqCategory;
      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        faq.q.toLowerCase().includes(q) ||
        faq.a.toLowerCase().includes(q) ||
        faq.category.toLowerCase().includes(q)
      );
    });
  }, [activeFaqCategory, searchQuery]);

  const toggleFaq = (index: number) => {
    sound.playClick(400);
    setOpenFaq(prev => prev === index ? null : index);
  };

  const handleCategoryChange = (cat: string) => {
    sound.playClick(400);
    setActiveFaqCategory(cat);
    setOpenFaq(null);
  };

  const clearSearch = () => {
    sound.playClick(300);
    setSearchQuery('');
  };

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      <SEO
        title="Frequently Asked Questions | Ludo Dethroned 5 Way & 4 Way Two Dice — 3D Ludo-style strategy game"
        description="Official FAQ for Ludo Dethroned 5 Way & 4 Way Two Dice, a 3D Ludo-style strategy game. Questions and answers covering board mechanics, two dice, pairs, missed capture penalties, historical origins (Pachisi, Alfred Collier, Emperor Akbar), regional names, and multilingual spelling variations."
        canonicalPath="/faq"
      />

      {/* Header & Single H1 + Search & Category Filters — Unified Midnight Black Frosted Glass Header Card */}
      <div className="text-center mb-10 p-6 sm:p-10 rounded-3xl bg-[#02070A]/80 hover:bg-[#05121d]/88 border-2 border-[#0297DE]/30 backdrop-blur-md shadow-2xl relative overflow-hidden transition-all">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/14 via-transparent to-[#FC734D]/12 pointer-events-none opacity-85" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#05121d]/85 backdrop-blur-sm border border-[#0297DE]/60 text-[#0297DE] text-xs font-mono font-black tracking-widest uppercase mb-4 shadow-xs">
            <HelpCircle className="w-4 h-4 text-[#0297DE]" />
            <span>CANONICAL COMPENDIUM • SECTION 7</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-['Chakra_Petch'] text-white uppercase tracking-tight leading-tight">
            Frequently Asked <span className="text-[#FC734D]">Questions</span>
          </h1>

          <p className="text-slate-300 font-medium text-sm sm:text-base mt-3 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Played on a 3D board with 3D tokens and animated 3D dice.
          </p>

          <p className="text-slate-300 font-medium text-sm sm:text-base mt-2 leading-relaxed font-['Outfit'] max-w-3xl mx-auto">
            Every question and answer confirmed directly by the game’s creator. Learn about board mechanics, dice rules, capturing, pairs, missed capture penalties, historical origins from ancient Pachisi to Emperor Akbar, global regional adaptations, and multi-language searches.
          </p>

          {/* Search Input Bar — Inside Unified Midnight Black Frosted Glass Card */}
          <div className="max-w-2xl mx-auto mt-7">
            <div className="relative">
              <Search className="w-4 h-4 text-[#0297DE] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. Akbar, Pachisi, Alfred Collier, Lodo, pairs, penalty, Urdu)..."
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-[#05121d]/85 backdrop-blur-md border-2 border-[#0297DE]/35 text-slate-100 placeholder-slate-400 font-medium text-sm focus:outline-none focus:border-[#0297DE] focus:ring-1 focus:ring-[#0297DE]/50 transition-all font-['Outfit'] shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Buttons — Inside Unified Midnight Black Frosted Glass Card */}
          <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pt-5 pb-2 scrollbar-none">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-black whitespace-nowrap transition-all cursor-pointer border backdrop-blur-md ${
                  activeFaqCategory === cat
                    ? 'bg-[#0297DE] text-white border-[#0297DE] shadow-[0_0_15px_rgba(2,151,222,0.48)] scale-105'
                    : 'bg-[#05121d]/75 hover:bg-[#05121d] text-slate-200 border-[#0297DE]/25 hover:border-[#0297DE]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Count — Inside Unified Midnight Black Frosted Glass Card */}
          <div className="mt-4 pt-3 border-t border-[#0297DE]/25 flex items-center justify-between text-xs font-mono font-bold text-slate-300 px-1">
            <span>
              Showing <span className="text-[#FC734D] font-black">{filteredFaqs.length}</span> question{filteredFaqs.length === 1 ? '' : 's'}
              {activeFaqCategory !== 'All' && (
                <> in <span className="text-white font-black">{activeFaqCategory}</span></>
              )}
              {searchQuery && (
                <> matching "<span className="text-[#0297DE] font-black">{searchQuery}</span>"</>
              )}
            </span>
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="text-[#FC734D] font-black hover:underline cursor-pointer"
              >
                Reset search
              </button>
            )}
          </div>
        </div>
      </div>

      {/* FAQ Accordion — Midnight Black Frosted Glass */}
      <div className="space-y-3 mb-16">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 px-4 bg-[#02070A]/85 backdrop-blur-md border-2 border-[#0297DE]/30 rounded-2xl shadow-2xl">
            <Sparkles className="w-8 h-8 text-[#0297DE] mx-auto mb-3" />
            <h3 className="text-white font-black font-mono text-sm uppercase">No matching questions found</h3>
            <p className="text-slate-300 font-medium text-xs mt-1">Try another search term or click "All" to browse all categories.</p>
            <button
              onClick={() => {
                setActiveFaqCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#FC734D] hover:bg-[#ff8866] text-[#02070A] text-xs font-mono font-black transition-all cursor-pointer"
            >
              Show All Questions
            </button>
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = openFaq === index;
            const prevCategory = index > 0 ? filteredFaqs[index - 1].category : null;
            const showGroupHeading =
              NEW_FAQ_GROUP_HEADINGS.has(faq.category) && faq.category !== prevCategory;

            return (
              <React.Fragment key={`${faq.category}-${faq.q}-${index}`}>
                {showGroupHeading && (
                  <h2 className="pt-6 pb-1 px-1 text-xl sm:text-2xl font-black font-['Chakra_Petch'] text-white tracking-tight">
                    {faq.category}
                  </h2>
                )}
                <div 
                  className="cv-card border-2 border-[#0297DE]/30 bg-[#02070A]/80 hover:bg-[#05121d]/88 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#0297DE] shadow-xl relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0297DE]/12 via-transparent to-[#FC734D]/10 pointer-events-none opacity-75 group-hover:opacity-100 transition-opacity" />
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(index)}
                    className="relative z-10 w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-mono font-bold text-xs sm:text-sm text-white hover:text-[#0297DE] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0297DE]"
                  >
                    <span className="flex items-start sm:items-center gap-3">
                      <span className="text-[#02070A] text-xs px-2 py-0.5 rounded bg-[#FC734D] shrink-0 mt-0.5 sm:mt-0 font-black">
                        Q{index + 1}
                      </span>
                      <span className="leading-snug text-white font-black">{faq.q}</span>
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="hidden sm:inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#05121d]/90 backdrop-blur-sm text-slate-300 border border-[#0297DE]/30">
                        {faq.category}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-[#0297DE] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="relative z-10 px-4 pb-5 sm:px-5 sm:pb-6 text-slate-200 text-sm sm:text-base leading-relaxed border-t border-[#0297DE]/25 pt-3.5 font-['Outfit'] font-medium">
                      <p>{faq.a}</p>
                      <div className="mt-3 sm:hidden">
                        <span className="inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#05121d]/90 text-slate-300 border border-[#0297DE]/30">
                          Category: {faq.category}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </React.Fragment>
            );
          })
        )}
      </div>

      {/* Related Pages Block */}
      <RelatedPages currentPath="/faq" />
    </div>
  );
};
