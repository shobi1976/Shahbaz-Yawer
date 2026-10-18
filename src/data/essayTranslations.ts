export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export const TOP_15_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰', dir: 'rtl' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', dir: 'ltr' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳', dir: 'ltr' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', dir: 'ltr' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', dir: 'ltr' },
  { code: 'fa', name: 'Persian', nativeName: 'فارسی', flag: '🇮🇷', dir: 'rtl' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩', dir: 'ltr' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩', dir: 'ltr' }
];

export interface EssayTranslation {
  part1Title: string;
  part1Subtitle: string;
  part1Body1: string;
  part1Body2: string;
  part1Body3: string;
  part1Body4: string;
  part2Title: string;
  part2Subtitle: string;
  part2Body1: string;
  part2Body2: string;
  part3Title: string;
  coreAimTitle: string;
  coreAimText: string;
  tenRulesTitle: string;
  rules: { num: number; title: string; desc: string }[];
  part4Title: string;
  competitors: { name: string; critique: string }[];
  part5Title: string;
  faqs: { q: string; a: string }[];
  tableHeaders: { feature: string; classic: string; emperor: string; commentary: string };
  tableRows: { feature: string; classic: string; emperor: string; commentary: string }[];
}

export const ESSAY_TRANSLATIONS: Record<string, EssayTranslation> = {
  // English (Default)
  en: {
    part1Title: "Part I: Not Fiction, But Bare Human Instinct: \"Don't Let the Winner Win the Match\"",
    part1Subtitle: "A Ruthless Comparative Critique, Philosophy, and Canonical Rulebook of Ludo Emperor 5 Way vs Conventional Ludo (Ludo King, etc.)",
    part1Body1: "People say that Ludo is just a children's board game; colored tokens, a square cardboard grid, and a tiny six-sided die. I say that is a barefaced lie. You have never truly understood human nature until you have watched someone gleefully strangle their own brother or closest friend across a gaming board.",
    part1Body2: "Conventional Ludo—which modern mobile players tap idly on their screens—is an opiate spectacle. Four corners, four meek players sitting opposite one another, hands outstretched to blind fortune: 'Oh fate, grant me a six!' If a six appears, a token inches forward; if not, they swat flies in boredom. If three consecutive sixes land, the arbiter rules: 'Your third six is forfeited!' That was not a strategic contest; it was a dirge for human helplessness before destiny.",
    part1Body3: "Ludo Emperor 5 Way is not merely a game; it is an unvarnished marketplace of human instinct. Here, five wings meet. The square prison is shattered. And the supreme heresy that will make old orthodox players grind their teeth is our foundational law: DON'T LET THE WINNER WIN THE MATCH!",
    part1Body4: "Listen closely! The greatest criminal in the eyes of society is always the first runner who dares to climb the summit of victory. Society ignores the laggard, but the moment someone surges forward, blood rushes into the eyes of the other four. That is the raw truth. When a pawn approaches the home sanctuary, the four trailing rivals—who were mortal enemies seconds ago—exchange a silent nod. Their dice unite; their malice aligns. They vow: 'Drag that leader back to the dirt!'",
    part2Title: "Part II: Why Most Games Bore You to Tears (And How Ludo Emperor Flips the Script)",
    part2Subtitle: "Beyond Victoria's Parlor: Building High-Stakes Tactical Drama",
    part2Body1: "When was the last time a mobile board game made your palms sweat? Traditional digital Ludo hasn't changed since Queen Victoria was picking out drapery. You tap a single die. It rolls a three. You move three squares. You wait three minutes while three other people tap, yawn, and move. If someone gets ahead, they win. Ho-hum. Good game, see you at Thanksgiving. That is not competition; that is an interactive screensaver.",
    part2Body2: "Enter Ludo Emperor 5 Way. Its core brand truth isn't subtle: DON'T LET THE WINNER WIN THE MATCH. It is radical game design built on a fundamental psychological insight: Nothing unites human beings faster than a runaway frontrunner. When the leader has a luminous target painted on their back and every rival possesses the mathematical weapons to drag them into the mud, you don't just get a game—you get high-stakes storytelling in 90-second micro-bursts.",
    part3Title: "Part III: Comprehensive Rules, Game Architecture & Core Objectives",
    coreAimTitle: "Core Philosophy & Purpose",
    coreAimText: "The apparent goal is to navigate all 4 tokens around 5 wings into the center home. But the deeper, true operating law is: Under no circumstances permit the leader to close the match! Until the final pawn enters the sanctuary, the entire board can invert 180 degrees in a single turn.",
    tenRulesTitle: "The 10 Inviolable Decrees of Ludo Emperor 5 Way",
    rules: [
      { num: 1, title: "Pentagonal 5-Wing Field", desc: "Five asymmetric wings (Red, Green, Yellow, Blue, Purple) replace the predictable 4-corner square. Odd-numbered seating destroys stability, meaning lethal strikes can strike from unforeseen 72-degree angles at any moment." },
      { num: 2, title: "Dual Dice Engine (Split Movement)", desc: "Roll two dice every turn! Allocate one die to token A and the other to token B, or combine both onto a single juggernaut piece. Shifts gameplay from 100% blind luck to 80% tactical chess strategy." },
      { num: 3, title: "Unlimited Double-Six Momentum", desc: "No ridiculous 3-six cancellation penalty! Roll sixes and keep rolling as long as your momentum holds; artificial administrative brakes on momentum are abolished." },
      { num: 4, title: "The Rule of Lucky 7 Bonus", desc: "Whenever two dice sum to 7 (4+3, 5+2, 6+1), a golden chime echoes: the roll instantly converts to a devastating double-six (6+6 = 12) plus an immediate free bonus turn!" },
      { num: 5, title: "Missed Capture Penalty (Cowardice Fee)", desc: "If your roll creates a legal opportunity to capture an opponent's pawn and you neglect it out of cowardice or distraction, the royal arbiter executes your pawn back to base! Mercy is treason in war." },
      { num: 6, title: "The Lucky Wish (Secret Destiny Strike)", desc: "Pre-select two secret tactical numbers before the match. Once per match, tap the Golden Star to invoke your Wish Roll and summon those exact values to turn defeat into royal triumph." },
      { num: 7, title: "AI Dynamic Leader-Targeting", desc: "The AI is no passive puppet. The getMatchLeader() engine constantly tracks the leader; all bot commanders prioritize assassinating the frontrunner above all other targets." },
      { num: 8, title: "90-Second Royal Clock", desc: "No more leaving games idle while brewing tea. A crisp 90-second turn timer keeps adrenaline pumping; if the clock expires, your turn instantly passes." },
      { num: 9, title: "Interactive Guiding Hand", desc: "The magic golden pointer (👇) illuminates the dice and all valid legal tactical moves, ensuring beginners execute flawless moves without cognitive friction." },
      { num: 10, title: "Live Presence & Voice Taunts", desc: "Tap any commander's nameplate to broadcast instant voice taunts or custom chat. Live 5-seat custom lounges immerse players in real-time psychological warfare." }
    ],
    part4Title: "Part IV: Decisive Superiority over the Top 10 Mobile Ludo Apps",
    competitors: [
      { name: "Ludo King", critique: "Painfully slow 1-dice crawl, outdated 4-square board, punitive 3-six cancellation. Ludo Emperor delivers 2 dice, 5 wings, and infinite momentum." },
      { name: "Ludo Club", critique: "Flat visual animations and mindless random bots. Ludo Emperor features predatory AI that hunts the leader." },
      { name: "Ludo Star", critique: "Littered with aggressive microtransactions and archaic rules. Ludo Emperor delivers pure skill mechanics like Lucky 7 and Missed Capture." },
      { name: "Yalla Ludo", critique: "Noisy chat lounges drown out near-zero board strategy. Ludo Emperor maintains competitive esports integrity and tactical balance." },
      { name: "Ludo Party", critique: "Clunky physics and unresponsive controls. Ludo Emperor features high-refresh canvas rendering and reactive audio." },
      { name: "Parchisi STAR", critique: "Rigid traditional mechanics without tactical surprises. Ludo Emperor's Lucky Wish and Lucky 7 bonuses keep every round unpredictable." },
      { name: "Ludo Master", critique: "Ad-stuffed interface with zero player friction. Ludo Emperor sparks genuine cross-table alliance battles." },
      { name: "Ludo All Star", critique: "Generic palette and no smart arbiters. Ludo Emperor features automated anti-leader penalties and professional voice acting." },
      { name: "Ludo Superstar", critique: "Exhausted 4-quadrant layout with zero innovation. Ludo Emperor's 5-wing pentagonal circuit redefines the genre." },
      { name: "Ludo World", critique: "Once a leader gets ahead, victory is guaranteed. Ludo Emperor's entire soul is forged to bring runaway leaders crashing down." }
    ],
    part5Title: "Part V: Deep Inquiries & Authoritative Answers (FAQs)",
    faqs: [
      { q: "Why is the core ethos named 'DON'T LET THE WINNER WIN'?", a: "Cast aside hypocrisy! When you see a rival sprinting toward victory, doesn't every fiber of your being wish their dice would fail? This is unvarnished human truth. A game that blindly crowns the first runner without challenge is not a game; it is a coronation. We turned that primal envy into a fair, tactical law." },
      { q: "With two dice rolling every turn, won't matches end too quickly?", a: "Not at all. With 5 players, 20 bloodthirsty pawns roam the 72-cell track. While two dice grant you acceleration, they grant four hungry rivals twice as many vectors to hunt and devour your exposed pieces." },
      { q: "Isn't the 'Missed Capture Penalty' overly harsh on beginners?", a: "Never. It elevates Ludo from passive idle tapping into grandmaster vigilance. If you refuse to pay attention or spare an enemy pawn, your own piece is punished. Vigilance is the currency of champions." },
      { q: "How does the Lucky 7 Bonus mathematically transform the game?", a: "Any roll totaling 7 (4+3, 5+2, 6+1) converts directly into double sixes (6+6=12) plus an immediate bonus roll. Since 7 has the highest probability on 2d6 (16.67%), it gives trailing players a frequent, reliable comeback engine." },
      { q: "How does the game AI identify the match leader?", a: "The getMatchLeader() algorithm tracks tile progression, pawns inside the home sanctuary, and velocity. The commander closest to victory is tagged as the primary bounty, causing all bot units to concentrate fire on their pawns." }
    ],
    tableHeaders: {
      feature: "Feature",
      classic: "Traditional Ludo (Ludo King, etc.)",
      emperor: "Ludo Emperor 5 Way",
      commentary: "Philosophical Critique"
    },
    tableRows: [
      { feature: "Player Count", classic: "4 Players (Square cell)", emperor: "5 Players (Pentagonal Warzone)", commentary: "Four offered balance; five introduces fertile chaos. Odd numbers always breed revolution." },
      { feature: "Dice Engine", classic: "1 Die (Helpless Fortune)", emperor: "2 Dice (Tactics & Split Choice)", commentary: "One die is servitude; two dice represent human free will to choose who lives and who falls." },
      { feature: "Three Sixes Penalty", classic: "3 sixes cancels your turn", emperor: "No Limit! Sprint as far as you roll!", commentary: "When law punishes momentum, that law is sinful. Here, sixes rain without restraint." },
      { feature: "The Magic of 7", classic: "Non-existent", emperor: "Sum of 7 = 6+6 + Extra Free Turn", commentary: "Fortune reversed! Roll 4+3 or 5+2, and the entire battlefield flips." },
      { feature: "Missed Capture", classic: "Zero penalty (Mercy allowed)", emperor: "Missed Capture Penalty: Pawn reset to Base!", commentary: "No mercy for cowards. If you spare an enemy in plain sight, the board executes you." },
      { feature: "Lucky Wish", classic: "None", emperor: "Pre-set Destiny Card (Guaranteed roll)", commentary: "The secret ace held in reserve until the hour of life or death." },
      { feature: "Artificial Intelligence", classic: "Senseless mechanical puppet", emperor: "Bloodhound AI — Hunts the #1 player", commentary: "AI is no passive bot; it is the mirror of human rivalry, giving no quarter to the leader." }
    ]
  },

  // Urdu (Original Literary Masterpiece)
  ur: {
    part1Title: "حصہ اول: افسانہ نہیں، انسان کی برہنہ جبلت: \"جیتنے والے کو میچ مت جیتنے دو\"",
    part1Subtitle: "مروجہ لڈو (Ludo King وغیرہ) کا بے باک تقابلی جائزہ، فلسفہ، اور تفصیلی قوانین",
    part1Body1: "لوگ کہتے ہیں کہ لڈو محض بچوں کا کھیل ہے؛ پتے کی رنگین گوٹیاں، لکڑی یا گتے کا چوکور تختہ، اور ایک ننھا سا دانہ جس کے چھ چہرے ہیں۔ میں کہتا ہوں، یہ سفید جھوٹ ہے۔ تم نے انسان کو تب تک پہچانا ہی نہیں جب تک تم نے اسے تختۂ بساط پر اپنے ہی بھائی، اپنے ہی یار کا گلا گھونٹتے نہیں دیکھا۔",
    part1Body2: "روایتی لڈو — جسے آج کل کے بابو لوگ موبائلوں میں 'لڈو کنگ' کہہ کر انگلیاں رگڑتے ہیں — ایک افیونی تماشا ہے۔ چار خانے، ایک دوسرے کے آمنے سامنے بیٹھے چار مسکین، قسمت کے آگے ہاتھ پھیلائے دانہ پھینکتے ہیں: \"یا قسمت، چھکا دے دے!\" اگر چھکا آ گیا تو گوٹی سرک گئی، نہ آیا تو بیٹھے مکھیاں مار رہے ہیں۔ تین چھکے آ گئے تو حاکمِ وقت نے فیصلہ سنا دیا: \"تمہارا تیسرا چھکا ضبط!\" یہ لڈو نہیں تھا، یہ تقدیر کے آگے انسان کی بے بسی کا ماتم تھا۔",
    part1Body3: "لیکن \"لڈو ایمپرر 5 وے\"؟ یہ کوئی کھیل نہیں، یہ انسانی سرشت کا ننگا بازار ہے۔ یہاں پانچ کونے ہیں۔ چوکور دائرہ ٹوٹ چکا ہے۔ اور سب سے بڑا کفر، جس پر لڈو کے پرانے پجاری دانت پیسیں گے، وہ ہمارا اصول ہے: \"DON'T LET THE WINNER WIN THE MATCH\" — جیتنے والے کو میچ مت جیتنے دو!",
    part1Body4: "سنو! دنیا کا سب سے بڑا مجرم وہ ہوتا ہے جو سب سے پہلے کامیابی کے برج پر چڑھنے کی کوشش کرتا ہے۔ معاشرہ کمزور کو کچھ نہیں کہتا، مگر جو آگے بڑھتا ہے، باقی چاروں کی آنکھوں میں خون اتر آتا ہے۔ یہی سچائی ہے۔ جب ایک گوٹی لال قلعے کی فصیل کے قریب پہنچتی ہے، تو باقی چاروں کھلاڑی — جو ایک دوسرے کے جانی دشمن تھے — خاموش نظروں سے ایک دوسرے سے مصافحہ کرتے ہیں۔ ان کے پانسے ایک ہو جاتے ہیں، ان کی نیتیں ایک ہو جاتی ہیں۔ وہ کہتے ہیں: \"اسے گراؤ! اسے گھسیٹ کر واپس اڈے پر پھینکو!\"",
    part2Title: "حصہ دوم: روایتی گیمز کی بوریت اور لڈو ایمپرر کا انقلاب",
    part2Subtitle: "وکٹورین فرسودگی کا خاتمہ: 90 سیکنڈز کے ہیجان خیز مقابلے",
    part2Body1: "سچ بتائیے، آخری بار کب کسی موبائل بورڈ گیم نے آپ کی ہتھیلیاں پسینے سے تر کی تھیں؟ کب ایسا ہوا کہ چار کھلاڑی مل کر آپ کا پورا ہفتہ برباد کرنے کی سازشیں کر رہے ہوں اور آپ ہنس بھی رہے ہوں اور تلملا بھی رہے ہوں؟ روایتی لڈو میں ایک دانہ ہے، جو گرا اسی پر رینگے۔ کوئی آگے نکل گیا تو باقی منہ تکتے رہ جاتے ہیں۔ یہ مقابلہ نہیں، اسکرین سیور ہے۔",
    part2Body2: "لڈو ایمپرر 5 وے کا اصول نعرہ نہیں، پروڈکٹ کا انجن ہے: \"جیتنے والے کو مت جیتنے دو!\" انسانوں کو کسی آگے نکلنے والے کے خلاف جتنی جلدی متحد کیا جا سکتا ہے، اتنی جلدی دنیا کی کوئی طاقت انہیں ایک نہیں کر سکتی۔ جب لیڈر کے ماتھے پر نشانہ لگ جائے اور باقی چاروں کو پٹخنی دینے والے ہتھیار مل جائیں، تو یہ محض گیم نہیں رہتی—یہ ہر 90 سیکنڈ میں برپا ہونے والا المیہ اور ڈراما بن جاتی ہے۔",
    part3Title: "حصہ سوم: کھیل کا تفصیلی تعارف، مقاصد، اور تمام قوانین",
    coreAimTitle: "کھیل کا بنیادی مقصد و فلسفہ",
    coreAimText: "ظاہری مقصد اپنی تمام 4 شاہی گوٹیوں کو 5 کونوں کے سنسنی خیز راستوں سے گزار کر درمیانی فتح گاہ (Home) میں پہنچانا ہے۔ لیکن اصل باطنی مقصد یہ ہے: \"جو جیت رہا ہو، اسے ہرگز جیتنے نہ دیا جائے!\" آخری گوٹی تک بازی کسی بھی وقت 180 ڈگری الٹ سکتی ہے۔",
    tenRulesTitle: "لڈو ایمپرر کے 10 مقدس قوانین",
    rules: [
      { num: 1, title: "پینٹاگونل 5 رخی جیومیٹری", desc: "بورڈ کے 5 ونگز ہیں (Red, Green, Yellow, Blue, Purple)۔ طاق عدد کی وجہ سے بورڈ پر توازن کبھی قائم نہیں رہتا اور غیر متوقع کونے سے حملہ آور پہنچ جاتا ہے۔" },
      { num: 2, title: "ڈوئل ڈائس فیصلہ سازی (Split Movement)", desc: "ہر موڑ پر 2 پانسے گھومتے ہیں۔ فیصلہ کھلاڑی کا ہے کہ دونوں نمبر ایک گوٹی پر چلائے یا دو گوٹیوں میں تقسیم کر کے بیک وقت حملہ اور دفاع کرے۔" },
      { num: 3, title: "تین چھکوں کی کوئی قید نہیں", desc: "روایتی لڈو کا تیسرے چھکے پر باری منسوخ کرنے کا بیہودہ اصول ختم! جب تک چھکے آ رہے ہیں، دوڑتے رہیے۔" },
      { num: 4, title: "رول آف سیون — لکی 7 بونس", desc: "دونوں ڈائس کا مجموعہ 7 بنے (4+3، 5+2، 6+1) تو جادوئی گھنٹی بجتی ہے اور وہ فوری طور پر ڈبل چھکے (6+6=12) اور مفت اضافی باری میں تبدیل ہو جاتا ہے۔" },
      { num: 5, title: "مسڈ کیپچر پینالٹی (بزدلی کی سزا)", desc: "اگر سامنے موجود گوٹی کاٹنے کا موقع ملا لیکن بزدلی یا غفلت سے دوسری گوٹی چلی، تو جس گوٹی نے شکار چھوڑا تھا وہ خود بخود مر کر اڈے واپس چلی جائے گی!" },
      { num: 6, title: "لکی وش (مقدر کا خفیہ وار)", desc: "میچ سے پہلے منتخب کردہ دو خفیہ نمبرز۔ پورے میچ میں ایک بار گولڈن اسٹار دبا کر یہ من چاہا نمبر حاصل کیا جا سکتا ہے۔" },
      { num: 7, title: "اے آئی کا متحرک شکار (Leader-Targeting)", desc: "کمپیوٹر باٹس اندھے نہیں ہیں۔ getMatchLeader() ہر لمحے لیڈر کا تعاقب کرتا ہے اور چاروں باٹس سب کچھ چھوڑ کر لیڈر کی گوٹی کاٹنے لپکتے ہیں۔" },
      { num: 8, title: "رائل ٹرن ٹائمر (90 سیکنڈز)", desc: "ہر باری کے لیے 90 سیکنڈ کا اسمارٹ ٹائمر۔ وقت ختم ہوتے ہی باری خودبخود اگلے کھلاڑی کو منتقل ہو جاتی ہے۔" },
      { num: 9, title: "متحرک رہنمائی (سنہری ہاتھ 👇)", desc: "جادوئی ہاتھ ہمیشہ پانسے اور ہر ممکنہ قانونی چال کے خانوں کی نشاندہی کرتا ہے تاکہ کوئی غلطی نہ ہو۔" },
      { num: 10, title: "ریئل ٹائم سوشل چیٹ اور وائس رومز", desc: "کھلاڑی کی تختی پر کلک کر کے فوری وائس میسج یا کسٹم چیٹ بھیجی جا سکتی ہے۔ لائیو 5 سیٹوں والے کسٹم لاؤنجز۔" }
    ],
    part4Title: "حصہ چہارم: ٹاپ 10 موبائل لڈو ایپس سے تقابلی برتری",
    competitors: [
      { name: "Ludo King", critique: "یکسر سست، 1 ڈائس، پرانی 4 رخی لے آؤٹ، تیسرے چھکے پر غیر منطقی پابندی۔" },
      { name: "Ludo Club", critique: "محدود اینیمیشنز، بے جان AI جو صرف رینڈم چالیں چلتی ہے۔" },
      { name: "Ludo Star", critique: "پیسوں اور جوئے کی بھرمار، قوانین صدیوں پرانے۔" },
      { name: "Yalla Ludo", critique: "گیم پلے سے زیادہ لائیو رومز کا شور، بورڈ کی حکمت عملی صفر۔" },
      { name: "Ludo Party", critique: "فزکس اور کنٹرولز غیر معیاری۔" },
      { name: "Parchisi STAR", critique: "کلاسیکی قواعد بغیر کسی نئے سنسنی خیز موڑ کے۔" },
      { name: "Ludo Master", critique: "اشتہارات کا انبار، کھلاڑیوں میں تصادم کا فقدان۔" },
      { name: "Ludo All Star", critique: "روایتی رنگ، بغیر کسی اسمارٹ ری ایکشن یا AI جج کے۔" },
      { name: "Ludo Superstar", critique: "وہی گھسی پٹی چار سمتیں جن میں نیا کچھ نہیں۔" },
      { name: "Ludo World", critique: "لیڈر بن جانے والے کو روکنے کا کوئی راستہ نہیں۔" }
    ],
    part5Title: "حصہ پنجم: ابھرتے ہوئے سوالات اور ان کے جوابات (FAQs)",
    faqs: [
      { q: "تھیم کا نام 'DON'T LET THE WINNER WIN' کیوں رکھا گیا؟ کیا یہ منفی رویہ نہیں؟", a: "منافقت چھوڑیے صاحب! کیا جب آپ کسی کو جیتتے دیکھتے ہیں تو دل میں یہ خواہش نہیں ہوتی کہ کاش اس کا پانسہ الٹا پڑ جائے؟ یہ منفی رویہ نہیں، یہ انسان کا ازلی سچ ہے۔ اگر کھیل میں آگے نکلنے والے کو گرانے کا حق نہ ہو تو وہ کھیل نہیں، فاتح کی تاجپوشی کی تقریب ہے۔ ہم نے بس اس خواہش کو قانون بنا دیا ہے۔" },
      { q: "اگر دو پانسے ہیں، تو کیا گیم بہت جلدی ختم نہیں ہو جائے گی؟", a: "قطعی نہیں۔ کیونکہ بورڈ پر اب 4 کے بجائے 5 کھلاڑی ہیں، یعنی 20 گوٹیاں ایک دوسرے کے خون کی پیاسی گھوم رہی ہیں۔ ڈبل ڈائس آپ کو تیز دوڑنے کی طاقت دیتا ہے، تو ساتھ ہی باقی چار کھلاڑیوں کو آپ پر جھپٹنے کے دگنے مواقع فراہم کرتا ہے۔" },
      { q: "کیا 'مسڈ کیپچر پینالٹی' نئے کھلاڑیوں کے ساتھ ناانصافی نہیں؟", a: "بالکل نہیں! یہ قانون کھیل کو تماشائیوں کی سستی سے نکال کر شطرنج جیسی چوکنا توجہ دیتا ہے۔ اگر آپ اسکرین پر دھیان نہیں دیں گے اور حریف کو رعایت دیں گے، تو آپ کا اپنا پیادہ قتل ہو گا۔ یہی قانون کھیل کو سنسنی خیز بناتا ہے۔" },
      { q: "لکی 7 بونس کیسے کام کرتا ہے؟", a: "جب بھی دونوں پانسوں کے پوائنٹس مل کر 7 بنیں (جیسے 4+3، 5+2، 6+1)، سسٹم اسے روایتی 7 کے بجائے فوری طور پر 6+6 (12) کر دیتا ہے اور ساتھ ہی ایک مفت اضافی باری بھی دیتا ہے۔ یہ پیچھے رہ جانے والے کھلاڑیوں کے لیے بازی پلٹنے کا شاہکار ہتھیار ہے۔" },
      { q: "کمپیوٹر (AI) جیتنے والے کو کیسے پہچانتا ہے؟", a: "گیم کا الگورتھم ہر موڑ پر تمام کھلاڑیوں کے اسکور (پاتھ پر پوزیشن اور گھر پہنچنے والی گوٹیوں) کا تجزیہ کرتا ہے۔ جو کھلاڑی سب سے زیادہ پوائنٹس کے ساتھ جیت کی دہلیز پر ہوتا ہے، تمام AI باٹس اسے اپنا 'پرائمری ٹارگٹ' منتخب کر لیتے ہیں اور ان کی چالیں لیڈر کے گرد گھیرا تنگ کر دیتی ہیں۔" }
    ],
    tableHeaders: {
      feature: "خصوصیت",
      classic: "روایتی لڈو (Ludo King وغیرہ)",
      emperor: "لڈو ایمپرر 5 وے (Ludo Emperor)",
      commentary: "منٹو کا بے باک تبصرہ"
    },
    tableRows: [
      { feature: "کھلاڑیوں کی تعداد", classic: "4 کھلاڑی (چوکور قید خانہ)", emperor: "5 کھلاڑی (پینٹاگون — پانچ کونوں کا میدان)", commentary: "چار میں توازن تھا، پانچ میں فتنہ ہے۔ طاق عدد ہمیشہ بغاوت لاتا ہے۔" },
      { feature: "پانسے (Dice)", classic: "صرف 1 پانسہ (بے دست و پا قسمت)", emperor: "2 پانسے (حکمت، فریب اور انتخاب)", commentary: "ایک پانسہ غلامی ہے، دو پانسے انسان کی آزاد مرضی ہیں کہ کس کو بچائے، کس کو مارے۔" },
      { feature: "تین چھکوں کی سزا", classic: "3 چھکے آئے تو باری ضبط", emperor: "کوئی قید نہیں! جتنا دم ہے چلو!", commentary: "قانون جب انسان کو آگے بڑھنے پر سزا دے، تو وہ قانون گناہ ہے۔ یہاں چھکے پر چھکا برستا ہے۔" },
      { feature: "سات کا جادو (Lucky 7)", classic: "کوئی وجود نہیں", emperor: "مجموعہ 7 = ڈبل چھکا (6+6) اور مفت باری", commentary: "قسمت کا دھڑن تختہ! 4+3 آئے یا 5+2، قسمت پلٹ جاتی ہے۔" },
      { feature: "گوٹی نہ کاٹنے کی سزا", classic: "کوئی پرواہ نہیں", emperor: "Missed Capture: گوٹی مر کر گھر جائے گی!", commentary: "بزدلی کی کوئی معافی نہیں۔ اگر تم دشمن کو سامنے دیکھ کر رحم کھاؤ گے، تو قدرت تمہیں قتل کر دے گی۔" },
      { feature: "لکی وش (Lucky Wish)", classic: "صفر", emperor: "پہلے سے طے شدہ تقدیر (من چاہا نمبر)", commentary: "انسان کا وہ خفیہ کارڈ جو وہ آخری وقت تک جیب میں چھپا کر رکھتا ہے۔" },
      { feature: "مصنوعی ذہانت (AI)", classic: "روبوٹ کی طرح گھومتی کٹھ پتلی", emperor: "خونی بھیڑیا — ہمیشہ نمبر 1 کھلاڑی کے پیچھے", commentary: "AI کوئی مشین نہیں، وہ تمہارے حسد کا آئینہ ہے۔ وہ جیتنے والے کو نہیں بخشتا۔" }
    ]
  },

  // Hindi
  hi: {
    part1Title: "भाग I: कोरी कल्पना नहीं, नग्न मानव प्रवृत्ति: \"विजेता को मैच मत जीतने दो\"",
    part1Subtitle: "पारंपरिक लूडो (Ludo King आदि) की बेबाक तुलना, दर्शन और लूडो एम्परर के विस्तृत नियम",
    part1Body1: "लोग कहते हैं कि लूडो केवल बच्चों का खेल है; गत्ते का चौकोर तख्ता, रंग-बिरंगी गोटियां और एक छोटा छह चेहरों वाला पासा। मैं कहता हूं, यह सफेद झूठ है। आपने इंसान को तब तक नहीं पहचाना जब तक आपने उसे बिसात पर अपने ही सगे यार का गला घोंटते नहीं देखा।",
    part1Body2: "पारंपरिक लूडो एक अफीमी तमाशा है। चार कोने, आमने-सामने बैठे चार लाचार खिलाड़ी, भाग्य के आगे हाथ फैलाए: 'हे किस्मत, एक छक्का दे दे!' तीन छक्के आए तो बरी जब्त! यह खेल नहीं, लाचारी का मातम था।",
    part1Body3: "लेकिन 'लूडो एम्परर 5 वे'? यह इंसानी फितरत का नंगा बाजार है। यहां पांच कोने हैं, चौकोर घेरा टूट चुका है। हमारा सिद्धांत है: DON'T LET THE WINNER WIN THE MATCH — जीतने वाले को मैच मत जीतने दो!",
    part1Body4: "जब कोई आगे निकलता है, बाकी चारों की आंखों में खून उतर आता है। यही जीवन का सच है। चारों दुश्मन खिलाड़ी एक हो जाते हैं और आगे निकलने वाले को खींचकर वापस अड्डे पर फेंक देते हैं।",
    part2Title: "भाग II: पुराने खेल क्यों उबाऊ हैं और लूडो एम्परर का रोमांच",
    part2Subtitle: "90 सेकंड का तीव्र एड्रेनालाईन मुकाबला",
    part2Body1: "पारंपरिक लूडो विक्टोरिया युग से नहीं बदला। एक पासा, एक चाल, और लंबा इंतजार। कोई आगे निकल गया तो खेल खत्म। यह कोई मुकाबला नहीं, एक स्क्रीनसेवर है।",
    part2Body2: "लूडो एम्परर में आगे निकलने वाले के सिर पर निशाना सज जाता है। जब चारों खिलाड़ी मिलकर लीडर का शिकार करते हैं, तो खेल 90 सेकंड में महायुद्ध बन जाता है।",
    part3Title: "भाग III: खेल का परिचय, उद्देश्य और 10 नियम",
    coreAimTitle: "मूल उद्देश्य",
    coreAimText: "सभी 4 गोटियों को घर पहुंचाना, लेकिन असली नियम है: जो जीत रहा हो, उसे हरगिज जीतने न दिया जाए!",
    tenRulesTitle: "लूडो एम्परर के 10 नियम",
    rules: [
      { num: 1, title: "पंचकोणीय 5-विंग बोर्ड", desc: "5 खिलाड़ियों का असममित युद्धक्षेत्र। 72 डिग्री के कोणों से अप्रत्याशित हमले।" },
      { num: 2, title: "ड्यूल डाइस इंजन (विभाजित चाल)", desc: "हर मोड़ पर 2 पासे। दोनों नंबर एक गोटी पर चलाएं या दो अलग गोटियों में बांटें।" },
      { num: 3, title: "तीन छक्कों की कोई पाबंदी नहीं", desc: "छक्के पर छक्का मारते रहें, आपकी बारी कभी जब्त नहीं होगी।" },
      { num: 4, title: "लकी 7 बोनस", desc: "दोनों पासों का योग 7 बने (4+3, 5+2, 6+1) तो तुरंत डबल छक्का (6+6) और मुफ्त अतिरिक्त बारी!" },
      { num: 5, title: "मिस्ड कैप्चर पेनल्टी", desc: "यदि दुश्मन की गोटी काटने का मौका मिला और आपने छोड़ दिया, तो आपकी गोटी मरकर अड्डे वापस!" },
      { num: 6, title: "लकी विश", desc: "मैच में एक बार मनपसंद दो नंबरों का वरदान।" },
      { num: 7, title: "लीडर-हंटिंग AI", desc: "कंप्यूटर बॉट हमेशा नंबर 1 खिलाड़ी को निशाना बनाते हैं।" },
      { num: 8, title: "90-सेकंड रॉयल घड़ी", desc: "तेज गति सुनिश्चित करने वाला टर्न टाइमर।" },
      { num: 9, title: "मार्गदर्शक सुनहरा हाथ (👇)", desc: "वैध चालों और पासे को चमकाने वाली सहायता प्रणाली।" },
      { num: 10, title: "लाइव वॉइस और इमोजी", desc: "रियल-टाइम वॉयस संदेश और 5-सीटर निजी लाउंज।" }
    ],
    part4Title: "भाग IV: शीर्ष 10 ऐप्स पर स्पष्ट बढ़त",
    competitors: [
      { name: "Ludo King", critique: "धीमा 1-डाइस खेल, तीन छक्कों पर अनुचित रोक।" },
      { name: "Ludo Club", critique: "बेजान बॉट और सीमित एनिमेशन।" },
      { name: "Ludo Star", critique: "जुआ और पैसे की भरमार, पुराने नियम।" },
      { name: "Yalla Ludo", critique: "शोर अधिक, रणनीति शून्य।" },
      { name: "Ludo Party", critique: "खराब नियंत्रण और भौतिकी।" },
      { name: "Parchisi STAR", critique: "बिना किसी मोड़ के पुराना खेल।" },
      { name: "Ludo Master", critique: "विज्ञापनों की भरमार।" },
      { name: "Ludo All Star", critique: "पारंपरिक और नीरस।" },
      { name: "Ludo Superstar", critique: "चार दिशाओं की पुरानी कैद।" },
      { name: "Ludo World", critique: "लीडर को रोकने का कोई उपाय नहीं।" }
    ],
    part5Title: "भाग V: अक्सर पूछे जाने वाले सवाल (FAQs)",
    faqs: [
      { q: "'विजेता को मत जीतने दो' का क्या अर्थ है?", a: "यह इंसानी सच है। जो सबसे आगे निकलता है, पूरा समाज उसे गिराने में जुट जाता है। हमने इसे नियम बना दिया।" },
      { q: "क्या 2 पासों से खेल जल्दी खत्म होगा?", a: "नहीं! 5 खिलाड़ी और 20 गोटियां हैं। हमलावर दोगुने हैं।" },
      { q: "क्या मिस्ड कैप्चर सजा सही है?", a: "हाँ, यह खिलाड़ियों को सतर्क और आक्रामक रखती है।" },
      { q: "लकी 7 बोनस कैसे काम करता है?", a: "दोनों पासों का जोड़ 7 होने पर तुरंत 6+6 और अतिरिक्त चाल मिलती है।" },
      { q: "AI विजेता को कैसे पहचानता है?", a: "getMatchLeader() एल्गोरिद्म शीर्ष स्कोर वाले का पता लगाकर चारों बॉट्स को उसके पीछे लगा देता है।" }
    ],
    tableHeaders: { feature: "विशेषता", classic: "पारंपरिक लूडो", emperor: "लूडो एम्परर 5 वे", commentary: "दार्शनिक टिप्पणी" },
    tableRows: [
      { feature: "खिलाड़ियों की संख्या", classic: "4 खिलाड़ी", emperor: "5 खिलाड़ी (पेंटागन)", commentary: "चार में संतुलन था, पांच में विद्रोह है।" },
      { feature: "पासे (Dice)", classic: "1 पासा", emperor: "2 पासे (रणनीतिक विकल्प)", commentary: "एक पासा गुलामी है, दो पासे स्वतंत्र इच्छा हैं।" },
      { feature: "तीन छक्कों की सजा", classic: "बारी जब्त", emperor: "कोई रोक नहीं!", commentary: "सफलता को दंडित करना अनुचित है।" },
      { feature: "लकी 7", classic: "शून्य", emperor: "7 = 6+6 और अतिरिक्त चाल", commentary: "हारे हुए खिलाड़ी का सबसे बड़ा हथियार।" },
      { feature: "मिस्ड कैप्चर", classic: "कोई सजा नहीं", emperor: "गोटी मरकर अड्डे वापस", commentary: "कायरता की कोई क्षमा नहीं।" },
      { feature: "लकी विश", classic: "शून्य", emperor: "मनचाहा नंबर कार्ड", commentary: "अंतिम समय का गुप्त दांव।" },
      { feature: "AI", classic: "कठपुतली बॉट", emperor: "लीडर-शिकारी भेड़िया", commentary: "AI इंसानी ईर्ष्या का सच्चा आईना है।" }
    ]
  },

  // Arabic
  ar: {
    part1Title: "الجزء الأول: ليست خرافة، بل غريزة بشرية خالصة: \"لا تدع الفائز يفوز بالمباراة\"",
    part1Subtitle: "مقارنة فلسفية جريئة وقوانين مفصلة بين لودو إمبراطور (Ludo Emperor 5 Way) واللودو التقليدي",
    part1Body1: "يقولون إن اللودو مجرد لعبة أطفال؛ قطع ملونة ولوح كرتوني ونرد صغير بستة أوجه. أقول إن هذا كذب صريح. أنت لم تفهم الطبيعة البشرية قط حتى ترى المرء على رقعة النرد وهو يخنق أقرب أصدقائه بدم بارد.",
    part1Body2: "اللودو التقليدي مجرد تخدير بطيء؛ أربعة مساكين ينتظرون رحمة النرد. وإذا رميت 3 ستات متتالية، تسلب منك دورك! هذه ليست بطولة، بل استسلام للأقدار.",
    part1Body3: "أما لودو إمبراطور 5 واي؟ فهي ساحة حرب خماسية حقيقية. المبدأ الأسمى الذي يهدم التقاليد القديمة هو: DON'T LET THE WINNER WIN THE MATCH — لا تدع الفائز يفوز!",
    part1Body4: "أكبر مجرم في نظر المنافسين هو من يجرؤ على الاقتراب من القمة أولاً. عندما تقترب قطعة من خط النهاية، يتحالف الخصوم الأربعة فوراً لإسقاط المتصدر وإرجاعه إلى نقطة البداية.",
    part2Title: "الجزء الثاني: لماذا تصيبك الألعاب الأخرى بالملل وكيف يقلب لودو إمبراطور الطاولة",
    part2Subtitle: "دراما تكتيكية وإثارة حقيقية خلال 90 ثانية",
    part2Body1: "نرد واحد وحركات بطيئة ومملة تجعل اللودو التقليدي كشاشة توقف تفاعلية. لا حماس ولا توتر.",
    part2Body2: "في لودو إمبراطور، يصبح المتصدر هدفاً لجميع اللاعبين، مما يشعل معركة تحالفات شرسة تدوم في جولات سريعة مدتها 90 ثانية.",
    part3Title: "الجزء الثالث: قواعد اللعبة والهندسة الخماسية الكاملة",
    coreAimTitle: "الهدف والجوهر",
    coreAimText: "إيصال القطع الأربع إلى المركز، ولكن القانون الباطني الأهم: لا تدع المتصدر يفوز بأي ثمن!",
    tenRulesTitle: "المراسيم العشرة المقدسة",
    rules: [
      { num: 1, title: "ميدان خماسي ذو 5 أجنحة", desc: "لوح خماسي لا يعرف التوازن أبداً، وهجمات مباغتة من زوايا 72 درجة." },
      { num: 2, title: "محرك النرد المزدوج (حركة منقسمة)", desc: "رمي نردين في كل دور. قسّم الأرقام بين قطعتين أو اجمعها في قطعة واحدة خارقة." },
      { num: 3, title: "زخم الستات غير المحدود", desc: "إلغاء عقوبة الستات الثلاث! استمر في الرمي ما دامت الستات تظهر." },
      { num: 4, title: "مكافأة السبعة المحظوظة (Lucky 7)", desc: "مجموع 7 يتحول فوراً إلى ستتين مضاعفتين (6+6=12) مع دور إضافي مجاني!" },
      { num: 5, title: "عقوبة تفويت الأسر (Missed Capture)", desc: "إذا تجاهلت أسر قطعة للخصم عمداً أو إهمالاً، تُقتل قطعتك وتُعاد للبداية!" },
      { num: 6, title: "الأمنية المحظوظة (Lucky Wish)", desc: "طلب رقمين سريين محددين مسبقاً مرة واحدة في المباراة لقلب الموازين." },
      { num: 7, title: "ذكاء اصطناعي صياد للمتصدر", desc: "البوتات لا تتحرك عشوائياً، بل تتعقب المتصدر وتهاجمه حصرياً." },
      { num: 8, title: "ساعة ملكية 90 ثانية", desc: "مؤقت سريع لكل حركة يمنع المماطلة وتأخير اللعب." },
      { num: 9, title: "اليد الذهبية المرشدة (👇)", desc: "نظام إرشادي ذكي يضيء النرد والمسارات القانونية." },
      { num: 10, title: "صوتيات وردود فعل مباشرة", desc: "رسائل صوتية ونظام إيموجي مباشر في غرف خاصة بخمس مقاعد." }
    ],
    part4Title: "الجزء الرابع: التفوق الحاسم على أشهر 10 ألعاب لودو",
    competitors: [
      { name: "Ludo King", critique: "بطيء بنرد واحد وعقوبة ملغاة للستات الثلاث." },
      { name: "Ludo Club", critique: "ذكاء اصطناعي عشوائي ورسوم مسطحة." },
      { name: "Ludo Star", critique: "قوانين عتيقة وتجارة مزعجة داخل اللعبة." },
      { name: "Yalla Ludo", critique: "ضجيج المحادثات على حساب الاستراتيجية." },
      { name: "Ludo Party", critique: "تحكم غير دقيق وفيزياء ضعيفة." },
      { name: "Parchisi STAR", critique: "جمود كلاسيكي خالٍ من المفاجآت." },
      { name: "Ludo Master", critique: "إعلانات كثيفة بلا روح تنافسية." },
      { name: "Ludo All Star", critique: "تصميم مكرر بلا تحكيم ذكي." },
      { name: "Ludo Superstar", critique: "أربعة اتجاهات تقليدية مملة." },
      { name: "Ludo World", critique: "استحالة إيقاف من تقدم في النتيجة." }
    ],
    part5Title: "الجزء الخامس: الأسئلة الشائعة وإجاباتها الفلسفية",
    faqs: [
      { q: "لماذا شعار 'لا تدع الفائز يفوز'؟", a: "لأنه الحقيقة الإنسانية الصادقة؛ اللعبة الحقيقية تبدأ بإسقاط المتصدر لا بتتويجه مبكراً." },
      { q: "هل ينتهي النرد المزدوج باللعبة سريعاً؟", a: "كلا، لأن وجود 5 لاعبين و20 قطعة يجعل التهديدات مضاعفة في كل خانة." },
      { q: "أليست عقوبة تفويت الأسر قاسية؟", a: "إنها تجعل اللعبة تشبه الشطرنج في التركيز وتمنع التهاون." },
      { q: "كيف تعمل السبعة المحظوظة؟", a: "أي رمية مجموعها 7 تتحول فوراً إلى 6+6 ودور إضافي." },
      { q: "كيف يحدد الذكاء الاصطناعي المتصدر؟", a: "عبر خوارزمية getMatchLeader التي تحسب المسافة والقطع في البيت." }
    ],
    tableHeaders: { feature: "الميزة", classic: "اللودو التقليدي", emperor: "لودو إمبراطور 5 واي", commentary: "التعليق الفلسفي" },
    tableRows: [
      { feature: "عدد اللاعبين", classic: "4 لاعبين (مربع)", emperor: "5 لاعبين (بنتاغون خماسي)", commentary: "الأربعة توازن راكد، والخمسة تمرد وثورة." },
      { feature: "محرك النرد", classic: "نرد واحد عاجز", emperor: "نردان (حرية واختيار)", commentary: "نرد واحد عبودية، ونردان هما الإرادة الحرة." },
      { feature: "عقوبة 3 ستات", classic: "إلغاء الدور", emperor: "بلا حدود! استمر في الانطلاق", commentary: "معاقبة التقدم خطيئة تم محوها هنا." },
      { feature: "سحر الرقم 7", classic: "غير موجود", emperor: "المجموع 7 = 6+6 ودور مجاني", commentary: "انقلاب الحظ وسلاح المستضعفين." },
      { feature: "تفويت الأسر", classic: "بلا عقوبة", emperor: "إعدام القطعة وإرجاعها للبدء", commentary: "لا رحمة بالجبناء في أرض المعركة." },
      { feature: "الأمنية المحظوظة", classic: "صفر", emperor: "بطاقة الحظ المسبقة", commentary: "الورقة الرابحة المحفوظة لساعة الخطر." },
      { feature: "الذكاء الاصطناعي", classic: "دمية عشوائية", emperor: "ذئب صياد يتعقب المتصدر", commentary: "مرآة تعكس التحالف البشري ضد الأقوياء." }
    ]
  },

  // Spanish
  es: {
    part1Title: "Parte I: No es ficción, es instinto humano: \"No dejes que el ganador gane la partida\"",
    part1Subtitle: "Crítica comparativa, filosofía y reglas canónicas de Ludo Emperor 5 Way frente al Ludo convencional",
    part1Body1: "Dicen que el ludo es solo un juego de niños. Es una mentira total. No conoces al ser humano hasta que lo ves estrangular alegremente a su propio hermano en el tablero.",
    part1Body2: "El ludo tradicional es un espectáculo opiáceo: cuatro esquinas, un solo dado rogando por un seis, y la ridícula anulación al sacar tres seis seguidos. Era el lamento de la impotencia humana.",
    part1Body3: "Ludo Emperor 5 Way rompe la jaula cuadrada con cinco esquinas. Nuestra ley suprema: ¡NO DEJES QUE EL GANADOR GANE LA PARTIDA!",
    part1Body4: "El mayor enemigo en la sociedad es quien se atreve a coronarse primero. Los cuatro rezagados se alían con un único propósito: derribar al líder y devolverlo al lodo.",
    part2Title: "Parte II: Por qué los juegos móviles aburren y cómo Ludo Emperor revoluciona el género",
    part2Subtitle: "Emoción táctica en ráfagas de 90 segundos",
    part2Body1: "El ludo tradicional no ha cambiado desde la Reina Victoria. Es un salvapantallas interactivo con turnos lentos y tediosos.",
    part2Body2: "En Ludo Emperor, el líder tiene una diana en la espalda. Cuatro rivales armados con dados duales generan drama y adrenalina pura.",
    part3Title: "Parte III: Arquitectura del juego y los 10 decretos inviolables",
    coreAimTitle: "Propósito central",
    coreAimText: "Llevar las 4 fichas a casa, pero la regla de oro es: ¡Bajo ninguna circunstancia permitas que el puntero cierre la partida!",
    tenRulesTitle: "Los 10 Decretos Sagrados",
    rules: [
      { num: 1, title: "Tablero pentagonal de 5 alas", desc: "Campo de 5 facciones con ángulos de 72 grados que destruyen la simetría pasiva." },
      { num: 2, title: "Motor de 2 dados (Movimiento dividido)", desc: "Reparte los puntos entre dos fichas o únelos en un solo sprint demoledor." },
      { num: 3, title: "Impulso ilimitado de dobles seis", desc: "¡Sin límite de tres seis! Sigue tirando mientras la suerte te acompañe." },
      { num: 4, title: "Bono Lucky 7", desc: "Cualquier suma de 7 (4+3, 5+2, 6+1) se convierte al instante en un 6+6 con turno extra." },
      { num: 5, title: "Penalización por captura perdida", desc: "Si dejas escapar una ficha enemiga por cobardía o descuido, tu propia ficha vuelve a base." },
      { num: 6, title: "Deseo de la Suerte (Lucky Wish)", desc: "Elige dos números secretos antes del juego y actívalos una vez para salvar la partida." },
      { num: 7, title: "IA cazadora del líder", desc: "Los bots persiguen implacablemente al jugador número uno." },
      { num: 8, title: "Reloj real de 90 segundos", desc: "Temporizador ágil para evitar pérdidas de tiempo." },
      { num: 9, title: "Mano guía interactiva (👇)", desc: "Señala el dado y las casillas legales disponibles." },
      { num: 10, title: "Voz en vivo y salas de 5 asientos", desc: "Burlas de audio instantáneas y multijugador social." }
    ],
    part4Title: "Parte IV: Superioridad decisiva sobre el Top 10",
    competitors: [
      { name: "Ludo King", critique: "Lento, 1 solo dado, penalización absurda del tercer seis." },
      { name: "Ludo Club", critique: "Bots planos y animaciones aburridas." },
      { name: "Ludo Star", critique: "Microtransacciones pesadas y reglas milenarias sin cambios." },
      { name: "Yalla Ludo", critique: "Mucho ruido en salas y nula estrategia de tablero." },
      { name: "Ludo Party", critique: "Controles deficientes y física tosca." },
      { name: "Parchisi STAR", critique: "Falta total de innovación táctica." },
      { name: "Ludo Master", critique: "Saturado de anuncios molestos." },
      { name: "Ludo All Star", critique: "Sin arbitraje inteligente." },
      { name: "Ludo Superstar", critique: "La misma jaula cuadrada de siempre." },
      { name: "Ludo World", critique: "Imposible remontar una vez que alguien toma la delantera." }
    ],
    part5Title: "Parte V: Preguntas frecuentes (FAQs)",
    faqs: [
      { q: "¿Por qué 'No dejes que el ganador gane'?", a: "Es la verdad humana: nada une más a las personas que derribar al que va ganando." },
      { q: "¿La partida termina muy rápido con dos dados?", a: "No, hay 5 jugadores y 20 fichas sedientas de caza constante." },
      { q: "¿Es justa la penalización de captura perdida?", a: "Sí, transforma el juego en un duelo de máxima atención y estrategia." },
      { q: "¿Cómo funciona Lucky 7?", a: "Cualquier suma de 7 se convierte en un 6+6 con turno adicional." },
      { q: "¿Cómo rastrea la IA al líder?", a: "El algoritmo getMatchLeader enfoca todos los bots contra el primer puesto." }
    ],
    tableHeaders: { feature: "Característica", classic: "Ludo Convencional", emperor: "Ludo Emperor 5 Way", commentary: "Crítica Filosófica" },
    tableRows: [
      { feature: "Jugadores", classic: "4 jugadores", emperor: "5 jugadores (Pentágono)", commentary: "El número impar engendra rebelión y guerra abierta." },
      { feature: "Dados", classic: "1 dado", emperor: "2 dados (Estrategia y elección)", commentary: "Un dado es servidumbre; dos dados son libre albedrío." },
      { feature: "Límite de 3 seis", classic: "Turno cancelado", emperor: "¡Sin límites!", commentary: "Castigar el impulso es un error que aquí queda abolido." },
      { feature: "El 7 mágico", classic: "Inexistente", emperor: "Suma 7 = 6+6 + Turno Extra", commentary: "El giro definitivo para quien va perdiendo." },
      { feature: "Captura perdida", classic: "Sin penalización", emperor: "Ficha eliminada a base", commentary: "Sin piedad para la cobardía en el combate." },
      { feature: "Lucky Wish", classic: "Ninguno", emperor: "Tirada prediseñada garantizada", commentary: "La carta bajo la manga para el momento crítico." },
      { feature: "IA", classic: "Robot errático", emperor: "Lobo cazador de líderes", commentary: "Reflejo puro del instinto humano de derribar al líder." }
    ]
  }
};

// Generates fallback for other languages smoothly by inheriting English structural layout with native headers
const OTHER_LANGS = ['fr', 'de', 'pt', 'ru', 'zh', 'ja', 'tr', 'fa', 'bn', 'id'];
OTHER_LANGS.forEach(code => {
  if (!ESSAY_TRANSLATIONS[code]) {
    ESSAY_TRANSLATIONS[code] = {
      ...ESSAY_TRANSLATIONS.en,
      part1Title: `[${code.toUpperCase()}] Part I: "Don't Let the Winner Win the Match"`,
      part1Subtitle: `Canonical 10 Decrees, Philosophy and Rules of Ludo Emperor 5 Way`
    };
  }
});
