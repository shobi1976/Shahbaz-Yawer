import React, { useState, useEffect } from 'react';
import { 
  X, ChevronLeft, ChevronRight, Play, Sparkles, BookOpen, 
  Volume2, CheckCircle2, RotateCcw
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
    icon: '🎲🎲',
    title: 'Dual Dice Strategy',
    desc: 'Roll two dice every turn! Tap a die result to select it, then tap a pawn to move. You can use both dice on one pawn or split them between two.',
    urduDesc: 'Har baari me 2 daane roll karein. Ek pawn par dono use kar sakte hain ya do alag pawns me baant sakte hain.',
    badge: 'SPLIT MOVEMENT',
    color: '#06b6d4'
  },
  {
    id: 2,
    icon: '🖐️',
    title: '5-Player Chaos',
    desc: 'Pentagonal board with 5 wings! More rivals means more strategy, dynamic 72-degree intersections, and zero passive corners.',
    urduDesc: '5 konon wala pentagon board jis me 5 khiladi ek sath mukabla karte hain.',
    badge: 'PENTAGONAL MATRIX',
    color: '#ec4899'
  },
  {
    id: 3,
    icon: '🎲🎲',
    title: 'Double-Six Power',
    desc: 'No 3-six limit here! Keep rolling as long as you hit those sixes without forfeiting your turn.',
    urduDesc: 'Aam Ludo ki tarah 3 dafa 6 aane par baari cancel nahi hoti, jab tak chhakke aate rahein chalte rahein.',
    badge: 'UNLIMITED SIXES',
    color: '#10b981'
  },
  {
    id: 4,
    icon: '✨7',
    title: 'Lucky 7 Bonus',
    desc: 'Roll any total of 7 (including 4+3, 5+2, 6+1) to instantly trigger a massive 6-6 boost with an extra turn!',
    urduDesc: 'Dono daano ka jod 7 banne par foran double-six [6+6] aur extra turn milta hy.',
    badge: 'LUCKY 7 BOOST',
    color: '#f59e0b'
  },
  {
    id: 5,
    icon: '⚔️',
    title: 'Missed Capture Penalty',
    desc: 'Strategic slip? Miss a capture and your token is sent back home as a harsh disciplinary punishment!',
    urduDesc: 'Agar kisi dushman ki goti kaatne ka moqa chhor dain to goti saza ke tor par ghar wapas bhej di jati hy.',
    badge: 'BLOOD SACRIFICE',
    color: '#ef4444'
  },
  {
    id: 6,
    icon: '🏆',
    title: 'Victory Condition',
    desc: 'Be the first to get all 4 tokens to the home stretch to win the round! The first player to finish is the sole winner.',
    urduDesc: 'Jo khiladi sab se pehle apni 4 gotiyan center/home pohchayega woh akela winner banega.',
    badge: 'EMPEROR THRONE',
    color: '#eab308'
  },
  {
    id: 7,
    icon: '✨',
    title: 'Lucky Wish',
    desc: 'Tap the golden star to use your one-time "Wish Roll" (set during setup) for a guaranteed strategic boost!',
    urduDesc: 'Game setup me set kiye gaye do manpasand numbers ka golden star wish roll use karein.',
    badge: 'WISH ROLL',
    color: '#8b5cf6'
  },
  {
    id: 8,
    icon: '👇',
    title: 'Interactive Guidance',
    desc: 'The magic hand (👇) guides you! It points to the dice when it\'s time to roll, or highlights all your valid move options, letting you choose your strategy freely.',
    urduDesc: 'Jaadui haath ka nishan baari ke waqt dice ya chalne wali gotiyon ki nishandahi karta hy.',
    badge: 'ASSIST SYSTEM',
    color: '#38bdf8'
  },
  {
    id: 9,
    icon: '⏳',
    title: 'Royal Clock',
    desc: 'Keep the race moving! The 90-second turn timer ensures fast gameplay. If the bar runs out, your turn automatically passes to the next player.',
    urduDesc: '90 seconds ka turn timer, waqt khatam hone par baari khud-bakhud agle player ko chali jati hy.',
    badge: '90s SPEED TIMER',
    color: '#f97316'
  },
  {
    id: 10,
    icon: '💬',
    title: 'Connect & React',
    desc: 'Tap a player\'s name plate to send voice messages or custom chats. Use the emoji tray on the status bar to react in real-time to every roll and capture!',
    urduDesc: 'Khiladiyon ke name plates par tap karke voice message/chat bhejein aur emoji tray se real-time reactions dein.',
    badge: 'VOICE & EMOJIS',
    color: '#06b6d4'
  }
];

interface HowToPlayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartPlay?: () => void;
}

export const HowToPlayModal: React.FC<HowToPlayModalProps> = ({
  isOpen,
  onClose,
  onStartPlay
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance timer (5 seconds)
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
    setCurrentSlide(prev => (prev + 1) % TUTORIAL_SLIDES.length);
  };

  const handlePrev = () => {
    sound.playClick(400);
    setCurrentSlide(prev => (prev - 1 + TUTORIAL_SLIDES.length) % TUTORIAL_SLIDES.length);
  };

  const handleDotClick = (index: number) => {
    sound.playClick(400);
    setCurrentSlide(index);
  };

  const handleActionClick = () => {
    sound.playClick(600);
    if (currentSlide === TUTORIAL_SLIDES.length - 1) {
      if (onStartPlay) onStartPlay();
      onClose();
    } else {
      handleNext();
    }
  };

  return (
    <div 
      id="guide-popup" 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="w-full max-w-xl bg-slate-900/95 border border-cyan-500/40 rounded-3xl p-5 sm:p-7 shadow-[0_0_50px_rgba(6,182,212,0.25)] relative overflow-hidden flex flex-col justify-between min-h-[520px] max-h-[90vh]"
        style={{
          boxShadow: `0 0 40px ${slide.color}25, 0 20px 40px -15px rgba(0,0,0,0.9)`
        }}
      >
        {/* Top Glowing Ambient Aura */}
        <div 
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-36 blur-3xl pointer-events-none transition-colors duration-700 opacity-40"
          style={{ backgroundColor: slide.color }}
        />

        {/* Header Bar */}
        <div className="relative z-10 flex items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
              <BookOpen className="w-4 h-4" />
            </span>
            <div>
              <h2 id="guide-main-title" className="text-xs sm:text-sm font-['Chakra_Petch'] font-bold uppercase tracking-wider text-white">
                Quick Start for Ludo King Pros
              </h2>
              <div className="text-[10px] font-mono text-cyan-400">
                OFFICIAL TUTORIAL // SLIDE {currentSlide + 1} OF {TUTORIAL_SLIDES.length}
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
              className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              SKIP
            </button>
            <button
              onClick={() => {
                sound.playClick(300);
                onClose();
              }}
              className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Close Guide"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Slider Content Box */}
        <div id="tutorial-slider" className="relative z-10 my-auto py-4 text-center">
          {/* Badge & Big Icon */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase mb-4 border shadow-sm transition-colors duration-500"
            style={{
              color: slide.color,
              borderColor: `${slide.color}50`,
              backgroundColor: `${slide.color}15`,
            }}
          >
            <Sparkles className="w-3 h-3" />
            <span>{slide.badge}</span>
          </div>

          {/* Slide Icon Presentation */}
          <div className="mb-4">
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-slate-950/90 border flex items-center justify-center text-3xl sm:text-4xl shadow-inner transition-all duration-500 transform hover:scale-105"
              style={{
                borderColor: `${slide.color}60`,
                boxShadow: `0 0 25px ${slide.color}30`
              }}
            >
              <span className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] select-none">
                {slide.icon}
              </span>
            </div>
          </div>

          {/* Slide Title */}
          <h3 className="text-xl sm:text-2xl font-black font-['Chakra_Petch'] text-white uppercase tracking-wide mb-3">
            {slide.title}
          </h3>

          {/* English Description */}
          <p className="text-slate-200 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-['Outfit'] font-normal mb-3 min-h-[50px]">
            "{slide.desc}"
          </p>

          {/* Urdu / Bilingual Helpful Translation */}
          <div className="max-w-md mx-auto px-3 py-2 rounded-xl bg-slate-950/70 border border-slate-800/90 text-[11px] sm:text-xs text-cyan-300/90 font-mono leading-relaxed">
            <span className="text-slate-400 mr-1.5 font-sans">🇵🇰</span>
            {slide.urduDesc}
          </div>
        </div>

        {/* Navigation Bar (Prev, Dots, Next) */}
        <div className="relative z-10 pt-3 border-t border-slate-800/80">
          <div className="tutorial-nav flex items-center justify-between gap-2 mb-4">
            <button
              id="tutorial-prev"
              onClick={handlePrev}
              className="nav-btn p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-mono text-xs font-bold"
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
              className="nav-btn p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-mono text-xs font-bold"
              title="Next Slide"
            >
              <span className="hidden sm:inline">NEXT</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Action Bottom Button */}
          <button
            id="guide-close-btn"
            onClick={handleActionClick}
            className="w-full py-3 sm:py-3.5 px-6 rounded-2xl font-mono text-xs sm:text-sm font-black tracking-widest uppercase transition-all transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 shadow-lg"
            style={{
              backgroundColor: slide.color,
              color: '#030712',
              boxShadow: `0 0 25px ${slide.color}50`
            }}
          >
            {currentSlide === TUTORIAL_SLIDES.length - 1 ? (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>LET'S PLAY!</span>
              </>
            ) : (
              <>
                <span>READY ({currentSlide + 1}/{TUTORIAL_SLIDES.length})</span>
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
