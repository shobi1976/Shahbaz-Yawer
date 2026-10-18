import React, { useState } from 'react';
import { X, Sparkles, ShieldAlert, Dices, Volume2, Flame, CheckCircle, ArrowRight, Wand2, Clock } from 'lucide-react';
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

  if (!rule) return null;

  const handleTestLucky7 = () => {
    sound.playDiceRoll();
    setTimeout(() => {
      sound.playLucky7();
      setSimLucky7('🎲 [4] + [3] = 7 (LUCKY 7 ACTIVATED!) Valid base state matched: Pawn successfully deployed from home base.');
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-slate-100"
        style={{
          borderColor: rule.hex,
          boxShadow: `0 20px 60px -10px ${rule.hex}44, 0 10px 25px -5px rgba(0,0,0,0.6)`,
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            sound.playClick(400);
            onClose();
          }}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Tag */}
        <div className="flex items-center gap-3 mb-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider border"
            style={{
              color: rule.hex,
              borderColor: `${rule.hex}66`,
              backgroundColor: `${rule.hex}22`,
            }}
          >
            {rule.highlightDetails.ruleNumber} • {rule.accentColorName}
          </span>
          <span className="text-xs font-mono text-slate-400">
            Category: {rule.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-4xl font-black font-['Chakra_Petch'] text-white mb-1">
          {rule.title}
        </h3>
        <p className="text-base font-medium text-slate-400 font-['Outfit'] mb-6">
          {rule.subtitle}
        </p>

        {/* Full Overview Description */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-slate-300 text-sm leading-relaxed whitespace-pre-line">
            {rule.fullDesc}
          </div>

          {/* Strategic Anti-Leader Impact Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-pink-950/30 border border-pink-900/50">
              <div className="flex items-center gap-2 text-pink-400 font-mono font-bold text-xs uppercase mb-2">
                <ShieldAlert className="w-4 h-4" />
                <span>Anti-Leader Dynamic</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {rule.antiLeaderMechanic}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-900/50">
              <div className="flex items-center gap-2 text-cyan-400 font-mono font-bold text-xs uppercase mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Tactical Pro Tip</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                {rule.tacticalTip}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Feature Sandbox depending on rule */}
        <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 mb-6">
          <div className="text-xs font-mono font-bold uppercase text-slate-400 mb-3 flex items-center gap-2">
            <Flame className="w-4 h-4 text-orange-400" />
            <span>Interactive Mechanic Sandbox</span>
          </div>

          {/* If Rule is Lucky 7 */}
          {rule.id === 4 && (
            <div className="space-y-3">
              <button
                onClick={handleTestLucky7}
                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-mono font-bold text-xs flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <Dices className="w-4 h-4" /> Roll Lucky 7 Strike
              </button>
              {simLucky7 && (
                <div className="text-xs font-mono text-amber-300 p-2.5 rounded-lg bg-amber-950/40 border border-amber-800">
                  {simLucky7}
                </div>
              )}
            </div>
          )}

          {/* If Rule is A Wish */}
          {rule.id === 11 && (
            <div className="space-y-3">
              <p className="text-xs text-slate-400">Choose your 2 wish numbers to conjure onto the board:</p>
              <div className="flex flex-wrap items-center gap-3">
                <select
                  value={wishDice1}
                  onChange={(e) => {
                    setWishDice1(Number(e.target.value));
                    setWishMessage(null);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-sm shadow-xs"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n} className="bg-slate-900 text-white">Die A: {n}</option>
                  ))}
                </select>
                <select
                  value={wishDice2}
                  onChange={(e) => {
                    setWishDice2(Number(e.target.value));
                    setWishMessage(null);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white font-mono text-sm shadow-xs"
                >
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n} className="bg-slate-900 text-white">Die B: {n}</option>
                  ))}
                </select>
                <button
                  onClick={() => {
                    if (wishDice1 === 6 && wishDice2 === 6) {
                      sound.playAntiLeaderAlert();
                      setWishMessage('⚠️ RESTRICTED: A sum of 12 (6+6) cannot be wished for. Select a valid combination (e.g. 6+5, 6+1, 5+2) to maintain balance.');
                    } else {
                      sound.playLucky7();
                      setWishMessage(`✨ Wish Granted: Conjured tactical dice [${wishDice1}, ${wishDice2}] with total sum of ${wishDice1 + wishDice2}!`);
                    }
                  }}
                  className={`px-4 py-2 rounded-xl font-mono font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-all ${
                    wishDice1 === 6 && wishDice2 === 6
                      ? 'bg-red-950/60 text-red-300 border border-red-800'
                      : 'bg-lime-500 hover:bg-lime-400 text-slate-950 shadow-sm'
                  }`}
                >
                  <Wand2 className="w-3.5 h-3.5" /> Cast Wish [{wishDice1}, {wishDice2}]
                </button>
              </div>

              {wishMessage && (
                <div className={`text-xs font-mono p-2.5 rounded-lg border animate-fade-in ${
                  wishDice1 === 6 && wishDice2 === 6
                    ? 'text-red-300 bg-red-950/40 border-red-800'
                    : 'text-emerald-300 bg-emerald-950/40 border-emerald-800'
                }`}>
                  {wishMessage}
                </div>
              )}
            </div>
          )}

          {/* If Rule is Emperor Clock */}
          {rule.id === 13 && (
            <div className="flex items-center gap-4">
              <button
                onClick={handleStartTimer}
                disabled={testClockRunning}
                className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-mono font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Clock className="w-3.5 h-3.5" /> Start Pressure Test (15s)
              </button>
              <div className="font-mono text-sm font-bold text-cyan-400">
                Remaining: <span className={testSeconds <= 5 ? 'text-red-400 animate-ping font-extrabold' : ''}>{testSeconds}s</span>
              </div>
            </div>
          )}

          {/* Default Voice / Sound Test for others */}
          {rule.id !== 4 && rule.id !== 11 && rule.id !== 13 && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => sound.playVoiceClip('big_numbers')}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-2 cursor-pointer border border-slate-700 shadow-xs"
              >
                <Volume2 className="w-3.5 h-3.5 text-cyan-400" /> Play Audio Taunt
              </button>
              <button
                onClick={() => sound.playHover(600)}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono flex items-center gap-2 cursor-pointer border border-slate-700 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-pink-400" /> Pulse Neon Frequency
              </button>
            </div>
          )}
        </div>

        {/* English Rules Q&A Inquiries & Answers */}
        {rule.faqs && rule.faqs.length > 0 && (
          <div className="mb-6 p-5 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-cyan-400 mb-3">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Tactical Inquiries & Canonical Answers</span>
            </div>
            <div className="space-y-3">
              {rule.faqs.map((faq, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800/80 text-left">
                  <div className="text-xs sm:text-sm font-bold text-white mb-1.5 flex items-start gap-2">
                    <span className="text-cyan-400 font-mono text-xs shrink-0 mt-0.5">Q{idx + 1}:</span>
                    <span>{faq.question}</span>
                  </div>
                  <div className="text-xs text-slate-300 leading-relaxed pl-5 font-['Outfit']">
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
          <span>Key Metric: <strong className="text-white">{rule.highlightDetails.keyMetric}</strong></span>
          <span>Unlock: <strong className="text-white">{rule.highlightDetails.unlockCondition}</strong></span>
        </div>
      </div>
    </div>
  );
};
