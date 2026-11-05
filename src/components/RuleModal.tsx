import React, { useState, useEffect } from 'react';
import { X, Sparkles, ShieldAlert, Dices, Flame, Wand2, Clock } from 'lucide-react';
import { RuleCard } from '../types';
import { sound } from '../utils/audio';

interface RuleModalProps {
  rule: RuleCard | null;
  onClose: () => void;
}

export const RuleModal: React.FC<RuleModalProps> = ({ rule, onClose }) => {
  const [wishDice1, setWishDice1] = useState(6);
  const [wishDice2, setWishDice2] = useState(5);
  const [simLucky7, setSimLucky7] = useState<string | null>(null);
  const [wishMessage, setWishMessage] = useState<string | null>(null);
  const [testClockRunning, setTestClockRunning] = useState(false);
  const [testSeconds, setTestSeconds] = useState(15);

  useEffect(() => {
    if (!rule) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [rule, onClose]);

  if (!rule) return null;

  const handleTestLucky7 = () => {
    sound.playDiceRoll();
    setTimeout(() => {
      sound.playLucky7();
      setSimLucky7('🎲 [4] + [3] = 7 (LUCKY 7 ACTIVATED!) Valid base state matched: Token successfully deployed from home base.');
    }, 400);
  };

  const handleStartTimer = () => {
    sound.playClick(500);
    setTestClockRunning(true);
    setTestSeconds(15);
    const interval = setInterval(() => {
      setTestSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTestClockRunning(false);
          sound.playAntiLeaderAlert();
          return 0;
        }
        if (prev <= 5) {
          sound.playHover(800);
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={`Rule ${rule.id}: ${rule.title}`}
      onClick={onClose}
    >
      {/* Midnight Black Frosted Glass Modal Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl rounded-3xl bg-[#02070A]/94 backdrop-blur-2xl border-2 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-slate-100"
        style={{
          borderColor: rule.hex,
          boxShadow: `0 20px 60px -10px ${rule.hex}55, 0 15px 35px -5px rgba(0, 0, 0, 0.88)`,
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close rule details"
          onClick={() => {
            sound.playClick(400);
            onClose();
          }}
          className="absolute top-5 right-5 min-h-[40px] min-w-[40px] p-2.5 rounded-full bg-[#05121d] hover:bg-[#081f30] border border-[#0297DE]/40 text-slate-200 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0297DE]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Tag — Silver Badge + Black Font */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="dice-silver-badge px-3 py-1 rounded-md text-xs font-mono font-black tracking-wider">
            Rule {rule.id}
          </span>
          <span className="text-xs font-mono font-bold text-[#0297DE]">
            Category: {rule.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-4xl font-black font-['Chakra_Petch'] text-white mb-1">
          {rule.title}
        </h3>
        <p className="text-base font-bold text-slate-300 font-['Outfit'] mb-6">
          {rule.subtitle}
        </p>

        {/* Full Overview Description */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-2xl bg-[#05121d]/75 backdrop-blur-md border border-[#0297DE]/30 text-slate-100 font-medium text-sm leading-relaxed whitespace-pre-line">
            {rule.fullDesc}
          </div>

          {/* Strategic Anti-Leader Impact Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#05121d]/75 backdrop-blur-md border border-[#FC734D]/65">
              <div className="flex items-center gap-2 text-[#FC734D] font-mono font-black text-xs uppercase mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>Anti-Leader Dynamic</span>
              </div>
              <p className="text-slate-200 font-medium text-xs leading-relaxed">
                {rule.antiLeaderMechanic}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#05121d]/75 backdrop-blur-md border border-[#0297DE]/65">
              <div className="flex items-center gap-2 text-[#0297DE] font-mono font-black text-xs uppercase mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Tactical Pro Tip</span>
              </div>
              <p className="text-slate-200 font-medium text-xs leading-relaxed">
                {rule.tacticalTip}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Feature Sandbox depending on rule */}
        <div className="p-5 rounded-2xl bg-[#05121d]/80 backdrop-blur-md border border-[#0297DE]/35 mb-6">
          <div className="text-xs font-mono font-black uppercase text-white mb-3 flex items-center gap-2">
            <Flame className="w-4 h-4 text-[#FC734D]" />
            <span>Interactive Mechanic Sandbox</span>
          </div>

          {rule.id === 9 && (
            <div className="space-y-3">
              <p className="text-xs text-slate-300 font-mono font-bold">
                DEMO SIMULATION: When none of your tokens are on the open track, rolling a total of 7 counts as 6+6 and gives an extra turn.
              </p>
              <button
                onClick={handleTestLucky7}
                className="px-4 py-2.5 rounded-xl bg-[#FC734D] hover:bg-[#ff8866] text-[#02070A] font-mono font-black text-xs flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Dices className="w-4 h-4" /> Simulate Lucky 7 Roll (Demo: 4+3 = 7)
              </button>
              {simLucky7 && (
                <div className="text-xs font-mono font-bold text-[#38bdf8] p-2.5 rounded-lg bg-[#02070A]/85 border border-[#0297DE]/70">
                  {simLucky7}
                </div>
              )}
            </div>
          )}

          {rule.id === 10 && (
            <div className="space-y-3">
              <p className="text-xs text-slate-300 font-bold">Choose two dice numbers before match (6 and 6 not allowed):</p>
              <div className="flex flex-wrap items-center gap-3">
                <select
                  value={wishDice1}
                  onChange={(e) => {
                    setWishDice1(Number(e.target.value));
                    setWishMessage(null);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#02070A] border border-[#0297DE]/40 text-slate-100 font-mono font-bold text-sm shadow-xs"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>Die A: {n}</option>
                  ))}
                </select>
                <select
                  value={wishDice2}
                  onChange={(e) => {
                    setWishDice2(Number(e.target.value));
                    setWishMessage(null);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#02070A] border border-[#0297DE]/40 text-slate-100 font-mono font-bold text-sm shadow-xs"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>Die B: {n}</option>
                  ))}
                </select>
                <button
                  onClick={() => {
                    if (wishDice1 === 6 && wishDice2 === 6) {
                      sound.playAntiLeaderAlert();
                      setWishMessage('⚠️ NOT ALLOWED: You cannot choose 6 and 6 (Rule 10). Please choose another combination.');
                    } else {
                      sound.playLucky7();
                      const isSeven = wishDice1 + wishDice2 === 7;
                      setWishMessage(`✨ Wish Roll Activated: Rolled [${wishDice1}, ${wishDice2}]!${isSeven ? ' (Total 7 triggers Lucky 7 when open track is clear!)' : ''}`);
                    }
                  }}
                  className={`px-4 py-2 rounded-xl font-mono font-black text-xs flex items-center gap-1.5 cursor-pointer transition-all ${
                    wishDice1 === 6 && wishDice2 === 6
                      ? 'bg-[#02070A] text-[#FC734D] border border-[#FC734D]'
                      : 'bg-[#FC734D] hover:bg-[#ff8866] text-[#02070A] shadow-sm'
                  }`}
                >
                  <Wand2 className="w-3.5 h-3.5" /> Cast Wish [{wishDice1}, {wishDice2}]
                </button>
              </div>

              {wishMessage && (
                <div className={`text-xs font-mono font-bold p-2.5 rounded-lg border ${
                  wishDice1 === 6 && wishDice2 === 6
                    ? 'text-[#FC734D] bg-[#02070A] border-[#FC734D]'
                    : 'text-[#38bdf8] bg-[#02070A] border-[#0297DE]'
                }`}>
                  {wishMessage}
                </div>
              )}
            </div>
          )}

          {rule.id === 11 && (
            <div className="flex items-center gap-4">
              <button
                onClick={handleStartTimer}
                disabled={testClockRunning}
                className="px-4 py-2 rounded-xl bg-[#0297DE] hover:bg-[#0284c7] text-white font-mono font-black text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Clock className="w-3.5 h-3.5" /> Start Timer Demo (15s)
              </button>
              <div className="font-mono text-sm font-black text-[#0297DE]">
                Remaining: <span className={testSeconds <= 5 ? 'text-[#FC734D] font-extrabold' : ''}>{testSeconds}s</span>
              </div>
            </div>
          )}

          {rule.id !== 9 && rule.id !== 10 && rule.id !== 11 && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => sound.playDiceRoll()}
                className="px-3.5 py-2 rounded-xl bg-[#02070A] hover:bg-[#081f30] text-slate-100 text-xs font-mono font-black flex items-center gap-2 cursor-pointer border border-[#0297DE]/40 shadow-xs"
              >
                <Dices className="w-3.5 h-3.5 text-[#FC734D]" /> Test Dice Sound
              </button>
              <button
                onClick={() => sound.playHover(600)}
                className="px-3.5 py-2 rounded-xl bg-[#02070A] hover:bg-[#081f30] text-slate-100 text-xs font-mono font-black flex items-center gap-2 cursor-pointer border border-[#0297DE]/40 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0297DE]" /> Rule Sound Effect
              </button>
            </div>
          )}
        </div>

        {/* English Rules Q&A Inquiries & Answers */}
        {rule.faqs && rule.faqs.length > 0 && (
          <div className="mb-6 p-5 rounded-2xl bg-[#05121d]/75 backdrop-blur-md border border-[#0297DE]/35">
            <div className="flex items-center gap-2 text-xs font-mono font-black uppercase text-[#FC734D] mb-3">
              <Sparkles className="w-4 h-4 text-[#0297DE]" />
              <span>Tactical Inquiries & Canonical Answers</span>
            </div>
            <div className="space-y-3">
              {rule.faqs.map((faq, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#02070A]/80 backdrop-blur-sm border border-[#0297DE]/30 text-left">
                  <div className="text-xs sm:text-sm font-black text-white mb-1.5 flex items-start gap-2">
                    <span className="text-[#0297DE] font-mono text-xs shrink-0 mt-0.5">Q{idx + 1}:</span>
                    <span>{faq.question}</span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium leading-relaxed pl-5 font-['Outfit']">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Meta */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-[#0297DE]/30 text-xs font-mono font-bold text-slate-400">
          <span>Key Metric: <strong className="text-white">{rule.highlightDetails.keyMetric}</strong></span>
          <span>Unlock: <strong className="text-white">{rule.highlightDetails.unlockCondition}</strong></span>
        </div>
      </div>
    </div>
  );
};
