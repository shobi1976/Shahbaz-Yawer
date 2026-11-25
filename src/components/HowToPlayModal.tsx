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
    urduDesc: 'Sab se pehle apne chaaron tokens ko apne rangeen home path par pohanchane wala khilari jeet jata hai. Centre home pohanchna lazmi nahi hai, lekin wahan pohanchne wala token bhi count hota hai.',
    badge: 'GUIDE 1: THE GOAL',
    color: '#eab308'
  },
  {
    id: 2,
    icon: '🎲🎲',
    title: 'Two Dice',
    desc: 'On your turn you roll two dice. You can use both dice on one token, which moves the total of the two dice, or use one die on each of two different tokens. Tokens and turns move clockwise around the board.',
    urduDesc: 'Har baari mein aap do dice roll karte hain. Dono dice aik hi token par chala kar total chal sakte hain, ya do alag tokens par aik-aik die istemal kar sakte hain. Tokens aur baariyan clockwise chalti hain.',
    badge: 'GUIDE 2: TWO DICE',
    color: '#06b6d4'
  },
  {
    id: 3,
    icon: '🎲',
    title: 'Sixes and Leaving Base',
    desc: 'All four tokens start in base. A single 6 brings one token out of base onto the open track. Rolling 6+6 gives you an extra turn, with no limit on consecutive double sixes.',
    urduDesc: 'Aap ke chaaron tokens base se shuru hote hain. Aik akela 6 token ko base se bahar open track par le aata hai. 6+6 (double chhakka) aane par extra baari milti hai.',
    badge: 'GUIDE 3: SIXES & LEAVING BASE',
    color: '#10b981'
  },
  {
    id: 4,
    icon: '⚔️',
    title: 'Capturing and the Reroll',
    desc: 'If your token lands on a square where a single opponent token stands on the open track, that token is captured and returns to its base. A capture can be made with one die or the total of both dice. Every capture gives you a reroll.',
    urduDesc: 'Agar aap ka token open track par kisi akele mukhalif token ke khane par utre to woh cut kar apne base wapas chala jata hai. Capture aik die ya dono ke total se ho sakta hai, aur har capture par dobara roll milta hai.',
    badge: 'GUIDE 4: CAPTURING & REROLL',
    color: '#ef4444'
  },
  {
    id: 5,
    icon: '⭐',
    title: 'Safe Places',
    desc: 'A token cannot be captured when it is on a star square, on its coloured home path, or in base. Star squares are safe for every player on the board.',
    urduDesc: 'Star square, apne rangeen home path aur base mein mojood token kabhi capture nahi ho sakta. Star squares har khilari ke liye mukammal mehfooz hote hain.',
    badge: 'GUIDE 5: SAFE PLACES',
    color: '#38bdf8'
  },
  {
    id: 6,
    icon: '🛡️',
    title: 'Pairs',
    desc: 'Two tokens of the same colour on the same square form a pair. A single token cannot capture a pair. A pair is only captured when two opponent tokens land on that square together, one with each die, giving one reroll. Pairs on star squares are always safe, and you can split your pair freely.',
    urduDesc: 'Aik hi rang ke do tokens aik khane par mil kar pair banate hain jise akela token nahi kaat sakta. Pair sirf tab kat-ta hai jab mukhalif ke do tokens dono dice se aik sath us khane par utrein. Aap apna pair jab chahein alag chala sakte hain.',
    badge: 'GUIDE 6: PAIRS',
    color: '#fb923c'
  },
  {
    id: 7,
    icon: '⚠️',
    title: 'The Missed Capture Penalty',
    desc: 'Capturing is compulsory. If one of your tokens could capture an opponent’s token on the open track and you finish your move without capturing, the token that could have captured is sent back to its base.',
    urduDesc: 'Open track par capture karna lazmi hai. Agar aap ke token ke paas mukhalif ko kaatne ka mauqa ho aur aap capture kiye baghair baari khatam kar dein, to woh token saza ke taur par base wapas bhej diya jata hai.',
    badge: 'GUIDE 7: MISSED CAPTURE PENALTY',
    color: '#ff007f'
  },
  {
    id: 8,
    icon: '👑',
    title: 'Centre Home Bonus',
    desc: 'Moving a token into the centre home requires an exact roll and rewards you with an extra turn. Reaching the centre home counts toward victory, though reaching the coloured home path is already enough to win.',
    urduDesc: 'Centre home mein dakhil hone ke liye exact dice number chahiye hota hai aur is par extra baari milti hai. Jeetne ke liye centre home pohanchna zaroori nahi, rangeen home path hi kaafi hai.',
    badge: 'GUIDE 8: CENTRE HOME BONUS',
    color: '#f97316'
  },
  {
    id: 9,
    icon: '✨7',
    title: 'Lucky 7',
    desc: 'If none of your tokens are on the open track (all are in base, on your coloured home path, or in centre home), rolling a total of 7 counts as 6+6 and gives you an extra turn so two tokens can leave base together.',
    urduDesc: 'Agar open track par aap ka koi bhi token na ho, to dono dice ka total 7 aane par woh 6+6 ban jata hai aur extra baari bhi milti hai, jis se do tokens aik sath base se bahar aa sakte hain.',
    badge: 'GUIDE 9: LUCKY 7',
    color: '#eab308'
  },
  {
    id: 10,
    icon: '🌟',
    title: 'Lucky Wish',
    desc: 'Before the match, choose two dice numbers (6 and 6 is not allowed). Once per match on any turn, tap the Golden Star to roll those exact two numbers instead of a random roll.',
    urduDesc: 'Match shuru hone se pehle apni pasand ke do dice numbers chunein (6 aur 6 ki ijazat nahi). Poore match mein aik baar kisi bhi baari par Golden Star daba kar wahi do numbers hasil kiye ja sakte hain.',
    badge: 'GUIDE 10: LUCKY WISH',
    color: '#a855f7'
  },
  {
    id: 11,
    icon: '⏳',
    title: 'Turn Timer',
    desc: 'The room host chooses the optional turn timer before play: 60, 90, or 120 seconds, or turns it off completely. When the timer is active and runs out, your turn automatically passes to the next player.',
    urduDesc: 'Room host match ke liye 60, 90, ya 120 seconds ka turn timer set karta hai ya isay off rakh sakta hai. Waqt khatam hone par baari khud-bakhud agle khilari ko chali jati hai.',
    badge: 'GUIDE 11: TURN TIMER',
    color: '#14b8a6'
  },
  {
    id: 12,
    icon: '🏁',
    title: 'How the Match Ends',
    desc: 'The match ends immediately as soon as one player wins. Remaining players are ranked by the percentage on the progress bar. Because play stops the instant someone wins, every rival fights to win or stop the leader.',
    urduDesc: 'Jaise hi koi aik khilari jeetta hai, match foran khatam ho jata hai. Baqi khilariyon ki ranking progress bar ke percentage se tay hoti hai, is liye har khilari jeetne ya leader ko rokne ki koshish karta hai.',
    badge: 'GUIDE 12: END OF MATCH',
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="guide-main-title"
      onClick={onClose}
    >
      {/* Midnight Black Frosted Glass Modal Container */}
      <div 
        id="tutorial-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl rounded-3xl bg-[#02070A]/94 backdrop-blur-2xl border-2 p-5 sm:p-8 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[520px] transition-all duration-300 text-slate-100"
        style={{
          borderColor: slide.color,
          boxShadow: `0 0 50px -10px ${slide.color}55, 0 20px 45px -15px rgba(0, 0, 0, 0.88)`,
        }}
      >
        {/* Header Bar */}
        <div className="relative z-10 flex items-center justify-between gap-3 border-b border-[#0297DE]/30 pb-3">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#05121d] border border-[#0297DE]/70 text-[#0297DE]">
              <BookOpen className="w-4 h-4" />
            </span>
            <div>
              <h2 id="guide-main-title" className="text-xs sm:text-sm font-['Chakra_Petch'] font-black uppercase tracking-wider text-white">
                Official How to Play Guide
              </h2>
              <div className="text-[10px] font-mono font-bold text-[#FC734D]">
                GUIDE {currentSlide + 1} OF {TUTORIAL_SLIDES.length}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="guide-skip-btn"
              type="button"
              onClick={() => {
                sound.playClick(300);
                onClose();
              }}
              className="min-h-[40px] text-xs sm:text-sm font-mono font-black uppercase tracking-wider px-3.5 py-1.5 rounded-xl bg-[#05121d] hover:bg-[#081f30] border border-[#FC734D]/70 text-[#FC734D] hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0297DE]"
            >
              Skip
            </button>
            <button
              type="button"
              onClick={() => {
                sound.playClick(300);
                onClose();
              }}
              className="min-h-[40px] min-w-[40px] p-2 rounded-xl bg-[#05121d] hover:bg-[#081f30] border border-[#0297DE]/40 text-slate-200 hover:text-white transition-colors cursor-pointer inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0297DE]"
              title="Close Guide"
              aria-label="Close Guide"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Slider Content Box */}
        <div id="tutorial-slider" className="relative z-10 my-auto py-4 text-center">
          {/* Badge — Silver Background + Black Font */}
          <div className="dice-silver-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-black tracking-widest uppercase mb-4">
            <Sparkles className="w-3 h-3" />
            <span>{slide.badge}</span>
          </div>

          {/* Slide Icon Presentation */}
          <div className="mb-4">
            <div 
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl bg-[#05121d]/85 backdrop-blur-md border-2 flex items-center justify-center text-3xl sm:text-4xl shadow-md transition-all duration-500 transform hover:scale-105"
              style={{
                borderColor: slide.color,
                boxShadow: `0 0 25px ${slide.color}40`
              }}
            >
              <span className="select-none">
                {slide.icon}
              </span>
            </div>
          </div>

          {/* Slide Title */}
          <h3 className="text-xl sm:text-2xl font-black font-['Chakra_Petch'] text-white uppercase tracking-wide mb-3">
            {slide.title}
          </h3>

          {/* English Description */}
          <p className="text-slate-200 text-xs sm:text-sm max-w-md mx-auto leading-relaxed font-['Outfit'] font-medium mb-3 min-h-[50px]">
            "{slide.desc}"
          </p>

          {/* Roman Urdu Helpful Translation */}
          <div 
            lang="ur-Latn" 
            dir="ltr"
            className="max-w-md mx-auto px-3.5 py-2.5 rounded-xl bg-[#05121d]/80 backdrop-blur-sm border border-[#0297DE]/35 text-xs text-slate-100 font-bold font-['Outfit'] leading-relaxed"
          >
            {slide.urduDesc}
          </div>
        </div>

        {/* Navigation Bar (Prev, Dots, Next) */}
        <div className="relative z-10 pt-3 border-t border-[#0297DE]/30">
          <div className="tutorial-nav flex items-center justify-between gap-2 mb-4">
            <button
              id="tutorial-prev"
              onClick={handlePrev}
              className="nav-btn p-2 sm:px-3 sm:py-2 rounded-xl bg-[#05121d] hover:bg-[#081f30] border border-[#0297DE]/40 text-slate-100 transition-colors cursor-pointer flex items-center gap-1 font-mono text-xs font-black"
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
                        ? 'w-7 sm:w-8 h-2 bg-[#0297DE] shadow-[0_0_10px_rgba(2,151,222,0.8)]' 
                        : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'
                    }`}
                  />
                );
              })}
            </div>

            <button
              id="tutorial-next"
              onClick={handleNext}
              className="nav-btn p-2 sm:px-3 sm:py-2 rounded-xl bg-[#05121d] hover:bg-[#081f30] border border-[#0297DE]/40 text-slate-100 transition-colors cursor-pointer flex items-center gap-1 font-mono text-xs font-black"
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
              className="text-[11px] font-mono font-bold text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-[#FC734D]' : 'bg-slate-500'}`} />
              <span>{isAutoPlaying ? 'Autoplay On (5s)' : 'Autoplay Paused'}</span>
            </button>

            <button
              id="guide-finish-btn"
              onClick={() => {
                sound.playClick(600);
                onClose();
                if (onExploreRules) onExploreRules();
              }}
              className="px-5 py-2.5 rounded-xl bg-[#FC734D] hover:bg-[#ff8866] text-[#02070A] font-black text-xs font-mono tracking-wider flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(252,115,77,0.48)] cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>VIEW ALL DETAILS</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
