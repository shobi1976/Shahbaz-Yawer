import React, { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Sparkles, BookOpen
} from 'lucide-react';
import { sound } from '../utils/audio';

export interface TutorialSlideItem {
  id: number;
  icon: string;
  title: string;
  desc: string;
  urduDesc: string;
  badge: string;
  color: string;
}

export const TUTORIAL_SLIDES: TutorialSlideItem[] = [
  {
    id: 1,
    icon: '🏆',
    title: 'The Goal',
    desc: 'The first player to get all four of their tokens onto their coloured home path wins. A token does not need to reach the centre home. A token that reaches the centre home also counts.',
    urduDesc: 'سب سے پہلے اپنے چاروں ٹوکنز کو اپنے رنگین ہوم پاتھ پر پہنچانے والا کھلاڑی جیت جائے گا۔ سنٹر ہوم پہنچنا لازمی نہیں ہے۔',
    badge: 'RULE 1: THE GOAL',
    color: '#eab308'
  },
  {
    id: 2,
    icon: '🎲🎲',
    title: 'Two Dice',
    desc: 'On your turn you roll two dice. You can use both dice on one token, which moves the total of the two dice, or use one die on each of two different tokens. Tokens and turns move clockwise around the board.',
    urduDesc: 'ہر باری میں دو ڈائس رول کریں۔ دونوں ڈائس ایک ٹوکن پر چلیں یا دو الگ ٹوکنز میں تقسیم کریں۔ ٹوکنز اور باریاں گھڑی کی سمت میں چلتی ہیں۔',
    badge: 'RULE 2: TWO DICE',
    color: '#06b6d4'
  },
  {
    id: 3,
    icon: '🎲',
    title: 'Sixes and Leaving Base',
    desc: 'A single 6 brings a token out of base onto the open track. Rolling a 6 also gives you an extra turn, and there is no limit on how many extra turns you can earn in a row.',
    urduDesc: 'ایک اکیلا چھکا ٹوکن کو بیس سے باہر نکال لاتا ہے۔ ہر چھکے پر ایکسٹرا باری ملتی ہے، جس پر کوئی حد نہیں۔',
    badge: 'RULE 3: SIXES',
    color: '#10b981'
  },
  {
    id: 4,
    icon: '⚔️',
    title: 'Capturing and the Reroll',
    desc: 'If your token lands on a square where a single opponent token stands on the open track, that token is captured and returns to its base. A capture can be made with one die or the total of both dice. Every capture gives you a reroll.',
    urduDesc: 'اگر آپ کا ٹوکن اوپن ٹریک پر اکیلے مخالف ٹوکن پر اترے تو وہ کٹ کر بیس واپس چلا جاتا ہے اور آپ کو دوبارہ رول ملتا ہے۔',
    badge: 'RULE 4: CAPTURING',
    color: '#ef4444'
  },
  {
    id: 5,
    icon: '⭐',
    title: 'Safe Places and Pairs',
    desc: 'A token cannot be captured when it is on a star square, on its coloured home path or in base. Star squares are safe for every player. Two tokens of the same colour form a pair, which cannot be captured by a single token.',
    urduDesc: 'سٹار خانے، رنگین ہوم پاتھ اور بیس پر ٹوکن نہیں کٹ سکتا۔ ایک ہی رنگ کے دو ٹوکن مل کر پیئر بناتے ہیں جو اکیلے ٹوکن سے محفوظ رہتا ہے۔',
    badge: 'RULES 5 & 6: SAFE PLACES & PAIRS',
    color: '#38bdf8'
  },
  {
    id: 6,
    icon: '⚠️',
    title: 'The Missed Capture Penalty',
    desc: 'Capturing is compulsory. If one of your tokens could capture an opponent’s token on the open track and you finish your move without capturing, that token is sent back to its base.',
    urduDesc: 'کیپچر کرنا لازمی ہے۔ اگر آپ کے ٹوکن کے پاس کیپچر کا موقع تھا اور آپ نے کیپچر کے بغیر باری ختم کی، تو وہ ٹوکن بیس واپس بھیج دیا جائے گا۔',
    badge: 'RULE 7: MISSED CAPTURE PENALTY',
    color: '#ff007f'
  },
  {
    id: 7,
    icon: '✨7',
    title: 'Lucky 7 & Lucky Wish',
    desc: 'If none of your tokens are on the open track, a roll that totals 7 counts as 6+6 and gives you an extra turn. Lucky Wish: once per match, use the Golden Star to roll the two numbers you chose before the match (6 and 6 not allowed).',
    urduDesc: 'اگر اوپن ٹریک پر کوئی ٹوکن نہ ہو تو 7 کا مجموعہ 6+6 بن جاتا ہے اور ایکسٹرا باری ملتی ہے۔ لکی وش میچ میں ایک بار اپنے طے شدہ دو نمبر لاتا ہے۔',
    badge: 'RULES 9 & 10: LUCKY 7 & WISH',
    color: '#f59e0b'
  },
  {
    id: 8,
    icon: '⏳',
    title: 'Centre Home & Turn Timer',
    desc: 'Moving a token into the centre home needs an exact roll and gives an extra turn. The room host sets the optional turn timer: 60, 90 or 120 seconds, or off. Extra turns come from sixes, captures, centre home, and Lucky 7.',
    urduDesc: 'سینٹر ہوم میں داخلے کے لیے صحیح نمبر درکار ہے اور ایکسٹرا باری ملتی ہے۔ روم ہوسٹ 60، 90، 120 سیکنڈ یا ٹائمر آف کا انتخاب کرتا ہے۔',
    badge: 'RULES 8 & 11: BONUSES & TIMER',
    color: '#2dd4bf'
  },
  {
    id: 9,
    icon: '🏁',
    title: 'How the Match Ends',
    desc: 'The match ends as soon as a player wins. The other players are ranked by the progress percentage shown on the progress bar. Once a winner is decided there is nothing left to play for, so every other player aims to win or to stop the winner.',
    urduDesc: 'جیسے ہی کوئی کھلاڑی جیتتا ہے، میچ فوراً ختم ہو جاتا ہے۔ باقی کھلاڑیوں کی درجہ بندی پروگریس بار کے فیصد سے ہوتی ہے۔',
    badge: 'RULE 12: END OF MATCH',
    color: '#ec4899'
  }
];

interface HowToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreRules?: () => void;
}

export const HowToPlayModal: React.FC<HowToPlayModalProps> = ({
  isOpen,
  onClose,
  onExploreRules
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance timer (5.5 seconds)
  useEffect(() => {
    if (!isOpen || !isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % TUTORIAL_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isOpen, isAutoPlaying]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        sound.playClick(400);
        setCurrentSlide(prev => (prev + 1) % TUTORIAL_SLIDES.length);
      } else if (e.key === 'ArrowLeft') {
        sound.playClick(400);
        setCurrentSlide(prev => (prev - 1 + TUTORIAL_SLIDES.length) % TUTORIAL_SLIDES.length);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const slide = TUTORIAL_SLIDES[currentSlide];

  const handleNext = () => {
    sound.playClick(450);
    setCurrentSlide((prev) => (prev + 1) % TUTORIAL_SLIDES.length);
  };

  const handlePrev = () => {
    sound.playClick(400);
    setCurrentSlide((prev) => (prev - 1 + TUTORIAL_SLIDES.length) % TUTORIAL_SLIDES.length);
  };

  const handleDotClick = (index: number) => {
    sound.playClick(400 + index * 20);
    setCurrentSlide(index);
  };

  const handleToggleAutoPlay = () => {
    sound.playClick(isAutoPlaying ? 350 : 500);
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/35 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-main-title"
    >
      {/* Frosted Glass Modal Container */}
      <div 
        id="tutorial-modal-container"
        className="relative w-full max-w-xl rounded-3xl bg-white/55 backdrop-blur-2xl border-2 p-5 sm:p-8 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[520px] transition-all duration-300"
        style={{
          borderColor: slide.color,
          boxShadow: `0 0 50px -10px ${slide.color}45, 0 20px 40px -15px rgba(15, 23, 42, 0.3)`,
        }}
      >
        {/* Header Bar */}
        <div className="relative z-10 flex items-center justify-between gap-3 border-b border-white/70 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-white/50 border border-[#0077be]/60 text-[#0077be]">
              <BookOpen className="w-4 h-4" />
            </span>
            <div>
              <h2 id="guide-main-title" className="text-xs sm:text-sm font-['Chakra_Petch'] font-black uppercase tracking-wider text-slate-950">
                Official How to Play Guide
              </h2>
              <div className="text-[10px] font-mono font-bold text-[#0077be]">
                SLIDE {currentSlide + 1} OF {TUTORIAL_SLIDES.length}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="guide-skip-btn"
              onClick={() => {
                sound.playClick(300);
                onClose();
              }}
              className="text-[11px] font-mono font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/45 hover:bg-white/70 border border-white/80 text-slate-900 hover:text-black transition-colors cursor-pointer"
            >
              SKIP
            </button>
            <button
              onClick={() => {
                sound.playClick(300);
                onClose();
              }}
              className="p-1.5 rounded-lg bg-white/45 hover:bg-white/70 border border-white/80 text-slate-900 hover:text-black transition-colors cursor-pointer"
              title="Close Guide"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Slider Content Box */}
        <div id="tutorial-slider" className="relative z-10 my-auto py-4 text-center">
          {/* Badge — Black Font on Slide Color */}
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-black tracking-widest uppercase mb-4 shadow-xs transition-colors duration-500"
            style={{
              color: '#000000',
              backgroundColor: slide.color,
            }}
          >
            <Sparkles className="w-3 h-3" />
            <span>{slide.badge}</span>
          </div>

          {/* Slide Icon Presentation */}
          <div className="mb-4">
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-white/40 backdrop-blur-md border-2 flex items-center justify-center text-3xl sm:text-4xl shadow-md transition-all duration-500 transform hover:scale-105"
              style={{
                borderColor: slide.color,
                boxShadow: `0 0 25px ${slide.color}35`
              }}
            >
              <span className="select-none">
                {slide.icon}
              </span>
            </div>
          </div>

          {/* Slide Title */}
          <h3 className="text-xl sm:text-2xl font-black font-['Chakra_Petch'] text-slate-950 uppercase tracking-wide mb-3">
            {slide.title}
          </h3>

          {/* English Description */}
          <p className="text-slate-900 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-['Outfit'] font-medium mb-3 min-h-[50px]">
            "{slide.desc}"
          </p>

          {/* Urdu / Bilingual Helpful Translation */}
          <div 
            lang="ur" 
            dir="rtl"
            className="max-w-md mx-auto px-3 py-2 rounded-xl bg-white/40 backdrop-blur-sm border border-white/80 text-xs text-slate-950 font-bold font-sans leading-relaxed"
          >
            {slide.urduDesc}
          </div>
        </div>

        {/* Navigation Bar (Prev, Dots, Next) */}
        <div className="relative z-10 pt-3 border-t border-white/70">
          <div className="tutorial-nav flex items-center justify-between gap-2 mb-4">
            <button
              id="tutorial-prev"
              onClick={handlePrev}
              className="nav-btn p-2 sm:px-3 sm:py-2 rounded-xl bg-white/45 hover:bg-white/75 border border-white/80 text-slate-950 transition-colors cursor-pointer flex items-center gap-1 font-mono text-xs font-black"
              title="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">PREV</span>
            </button>

            {/* Dots Indicators */}
            <div id="tutorial-dots" className="tutorial-dots flex items-center gap-1.5 sm:gap-2">
              {TUTORIAL_SLIDES.map((s, index) => {
                const isActive = index === currentSlide;
                return (
                  <button
                    key={s.id}
                    onClick={() => handleDotClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`dot rounded-full transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'w-7 sm:w-8 h-2 bg-cyan-400 shadow-[0_0_10px_#22d3ee]' 
                        : 'w-2 h-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                  />
                );
              })}
            </div>

            <button
              id="tutorial-next"
              onClick={handleNext}
              className="nav-btn p-2 sm:px-3 sm:py-2 rounded-xl bg-white/45 hover:bg-white/75 border border-white/80 text-slate-950 transition-colors cursor-pointer flex items-center gap-1 font-mono text-xs font-black"
              title="Next Slide"
            >
              <span className="hidden sm:inline">NEXT</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={handleToggleAutoPlay}
              className="text-[11px] font-mono font-bold text-slate-800 hover:text-black transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-emerald-600' : 'bg-slate-500'}`} />
              <span>{isAutoPlaying ? 'Autoplay On (5s)' : 'Autoplay Paused'}</span>
            </button>

            <button
              id="guide-finish-btn"
              onClick={() => {
                sound.playClick(600);
                onClose();
                if (onExploreRules) onExploreRules();
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs font-mono tracking-wider flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>EXPLORE 12 RULES</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
