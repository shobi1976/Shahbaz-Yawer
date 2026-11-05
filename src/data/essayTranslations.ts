export interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export const TOP_15_LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr' },
  { code: 'ur', name: 'Urdu', nativeName: 'Roman Urdu', flag: '🇵🇰', dir: 'ltr' },
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
  part5Title: string;
  faqs: { q: string; a: string }[];
  tableHeaders: { feature: string; classic: string; dethroned: string; commentary: string };
  tableRows: { feature: string; classic: string; dethroned: string; commentary: string }[];
}

export const ESSAY_TRANSLATIONS: Record<string, EssayTranslation> = {
  // English (Default)
  en: {
    part1Title: "Part I: Not Fiction, But Bare Human Instinct: \"Don't Let the Winner Win the Match\"",
    part1Subtitle: "A Ruthless Comparative Critique, Philosophy, and Canonical Rulebook of Ludo Dethroned 5 Way & 4 Way Two Dice vs Conventional Ludo (Ludo King, etc.)",
    part1Body1: "People say that Ludo is just a children's board game; colored tokens, a square cardboard grid, and a tiny six-sided die. I say that is a barefaced lie. You have never truly understood human nature until you have watched someone gleefully strangle their own brother or closest friend across a gaming board.",
    part1Body2: "Conventional Ludo—which modern mobile players tap idly on their screens—is an opiate spectacle. Four corners, four meek players sitting opposite one another, hands outstretched to blind fortune: 'Oh fate, grant me a six!' If a six appears, a token inches forward; if not, they swat flies in boredom. If three consecutive sixes land, the arbiter rules: 'Your third six is forfeited!' That was not a strategic contest; it was a dirge for human helplessness before destiny.",
    part1Body3: "Ludo Dethroned 5 Way & 4 Way Two Dice is not merely a game; it is an unvarnished marketplace of human instinct. Here, 5 Way & 4 Way battlegrounds meet. Passive symmetry is shattered. And the supreme heresy that will make old orthodox players grind their teeth is our foundational law: DON'T LET THE WINNER WIN THE MATCH!",
    part1Body4: "Listen closely! The greatest criminal in the eyes of society is always the first runner who dares to climb the summit of victory. Society ignores the laggard, but the moment someone surges forward, blood rushes into the eyes of the other four. That is the raw truth. When a token approaches the home sanctuary, the four trailing rivals—who were mortal enemies seconds ago—exchange a silent nod. Their dice unite; their malice aligns. They vow: 'Drag that leader back to the dirt!'",
    part2Title: "Part II: Why Most Games Bore You to Tears (And How Ludo Dethroned Flips the Script)",
    part2Subtitle: "Beyond Victoria's Parlor: Building High-Stakes Tactical Drama",
    part2Body1: "When was the last time a mobile board game made your palms sweat? Traditional digital Ludo hasn't changed since Queen Victoria was picking out drapery. You tap a single die. It rolls a three. You move three squares. You wait three minutes while three other people tap, yawn, and move. If someone gets ahead, they win. Ho-hum. Good game, see you at Thanksgiving. That is not competition; that is an interactive screensaver.",
    part2Body2: "Enter Ludo Dethroned 5 Way & 4 Way Two Dice. Its core brand truth isn't subtle: DON'T LET THE WINNER WIN THE MATCH. It is radical game design built on a fundamental psychological insight: Nothing unites human beings faster than a runaway frontrunner. When the leader has a luminous target painted on their back and every rival possesses the mathematical weapons to drag them into the mud, you don't just get a game—you get high-stakes storytelling in 90-second micro-bursts.",
    part3Title: "Part III: Comprehensive Rules, Game Architecture & Core Objectives",
    coreAimTitle: "Core Philosophy & Purpose",
    coreAimText: "The apparent goal is to navigate all 4 tokens around 5 Way & 4 Way tracks onto your home path. But the deeper, true operating law is: Under no circumstances permit the leader to close the match! Until the final token enters the sanctuary, the entire board can invert 180 degrees in a single turn.",
    tenRulesTitle: "The 12 Canonical Rules of Ludo Dethroned 5 Way & 4 Way Two Dice",
    rules: [
      { num: 1, title: "5 Way & 4 Way Field", desc: "Five asymmetric wings (Red, Green, Yellow, Blue, Orange) alongside classic 4-way tables replace passive predictable play. Dynamic seating destroys stability, meaning lethal strikes can hit from unforeseen angles at any moment." },
      { num: 2, title: "Dual Dice Engine (Split Movement)", desc: "Roll two dice every turn! Allocate one die to token A and the other to token B, or combine both onto a single juggernaut piece. Shifts gameplay from 100% blind luck to 80% tactical chess strategy." },
      { num: 3, title: "Unlimited Double-Six Momentum", desc: "No ridiculous 3-six cancellation penalty! Roll sixes and keep rolling as long as your momentum holds; artificial administrative brakes on momentum are abolished." },
      { num: 4, title: "The Rule of Lucky 7 Bonus", desc: "Whenever two dice sum to 7 (4+3, 5+2, 6+1), a golden chime echoes: the roll instantly converts to a devastating double-six (6+6 = 12) plus an immediate free bonus turn!" },
      { num: 5, title: "Missed Capture Penalty (Cowardice Fee)", desc: "If your roll creates a legal opportunity to capture an opponent's token and you neglect it out of cowardice or distraction, the royal arbiter executes your token back to base! Mercy is treason in war." },
      { num: 6, title: "The Lucky Wish (Secret Destiny Strike)", desc: "Pre-select two secret tactical numbers before the match. Once per match, tap the Golden Star to invoke your Wish Roll and summon those exact values to turn defeat into royal triumph." },
      { num: 7, title: "AI Dynamic Leader-Targeting", desc: "The AI is no passive puppet. The getMatchLeader() engine constantly tracks the leader; all bot commanders prioritize assassinating the frontrunner above all other targets." },
      { num: 8, title: "90-Second Royal Clock", desc: "No more leaving games idle while brewing tea. A crisp 90-second turn timer keeps adrenaline pumping; if the clock expires, your turn instantly passes." },
      { num: 9, title: "Interactive Guiding Hand", desc: "The magic golden pointer (👇) illuminates the dice and all valid legal tactical moves, ensuring beginners execute flawless moves without cognitive friction." },
      { num: 10, title: "Live Presence & Voice Taunts", desc: "Tap any commander's nameplate to broadcast instant voice taunts or custom chat. Live 5 Way & 4 Way custom lounges immerse players in real-time psychological warfare." }
    ],
    part5Title: "Part IV: Deep Inquiries & Authoritative Answers (FAQs)",
    faqs: [
      { q: "Why is the core ethos named 'DON'T LET THE WINNER WIN'?", a: "Cast aside hypocrisy! When you see a rival sprinting toward victory, doesn't every fiber of your being wish their dice would fail? This is unvarnished human truth. A game that blindly crowns the first runner without challenge is not a game; it is a coronation. We turned that primal envy into a fair, tactical law." },
      { q: "With two dice rolling every turn, won't matches end too quickly?", a: "Not at all. With 5 players, 20 bloodthirsty tokens roam the 72-cell track. While two dice grant you acceleration, they grant four hungry rivals twice as many vectors to hunt and devour your exposed pieces." },
      { q: "Isn't the 'Missed Capture Penalty' overly harsh on beginners?", a: "Never. It elevates Ludo from passive idle tapping into grandmaster vigilance. If you refuse to pay attention or spare an enemy token, your own piece is punished. Vigilance is the currency of champions." },
      { q: "How does the Lucky 7 Bonus mathematically transform the game?", a: "Any roll totaling 7 (4+3, 5+2, 6+1) converts directly into double sixes (6+6=12) plus an immediate bonus roll. Since 7 has the highest probability on 2d6 (16.67%), it gives trailing players a frequent, reliable comeback engine." },
      { q: "How does the game AI identify the match leader?", a: "The getMatchLeader() algorithm tracks tile progression, tokens inside the home sanctuary, and velocity. The commander closest to victory is tagged as the primary bounty, causing all bot units to concentrate fire on their tokens." }
    ],
    tableHeaders: {
      feature: "Feature",
      classic: "Traditional Ludo (Ludo King, etc.)",
      dethroned: "Ludo Dethroned 5 Way & 4 Way Two Dice",
      commentary: "Philosophical Critique"
    },
    tableRows: [
      { feature: "Player Count", classic: "4 Players (Square cell)", dethroned: "5 Way & 4 Way Warzone", commentary: "Four offered balance; five introduces fertile chaos. Odd numbers always breed revolution." },
      { feature: "Dice Engine", classic: "1 Die (Helpless Fortune)", dethroned: "2 Dice (Tactics & Split Choice)", commentary: "One die is servitude; two dice represent human free will to choose who lives and who falls." },
      { feature: "Three Sixes Penalty", classic: "3 sixes cancels your turn", dethroned: "No Limit! Sprint as far as you roll!", commentary: "When law punishes momentum, that law is sinful. Here, sixes rain without restraint." },
      { feature: "The Magic of 7", classic: "Non-existent", dethroned: "Sum of 7 = 6+6 + Extra Free Turn", commentary: "Fortune reversed! Roll 4+3 or 5+2, and the entire battlefield flips." },
      { feature: "Missed Capture", classic: "Zero penalty (Mercy allowed)", dethroned: "Missed Capture Penalty: Token reset to Base!", commentary: "No mercy for cowards. If you spare an enemy in plain sight, the board executes you." },
      { feature: "Lucky Wish", classic: "None", dethroned: "Pre-set Destiny Card (Guaranteed roll)", commentary: "The secret ace held in reserve until the hour of life or death." },
      { feature: "Artificial Intelligence", classic: "Senseless mechanical puppet", dethroned: "Bloodhound AI — Hunts the #1 player", commentary: "AI is no passive bot; it is the mirror of human rivalry, giving no quarter to the leader." }
    ]
  },

  // Roman Urdu (Complete Literary Edition)
  ur: {
    part1Title: "Hissa Awwal: Afsana Nahi, Insaan Ki Khuli Fitri Jibillat: \"Jeetne Wale Ko Match Mat Jeetne Do\"",
    part1Subtitle: "Rawayati Ludo (Ludo King Waghera) Ka Bebaak Taqabuli Jaiza, Falsafa, Aur Tafseeli Qawaneen",
    part1Body1: "Log kehte hain ke Ludo mehez bachon ka khel hai; rangeen gotiyan, lakri ya gattay ka chaukor takhta, aur aik nanha sa daana jis ke chhe chehre hain. Main kehta hoon, yeh safaid jhoot hai. Tum ne insaan ko tab tak pehchana hi nahi jab tak tum ne usay takhta-e-bisaat par apne hi bhai, apne hi yaar ka gala ghont-te nahi dekha.",
    part1Body2: "Rawayati Ludo — jise aaj kal ke log mobile mein 'Ludo King' keh kar ungliyan ragarte hain — aik afyooni tamasha hai. Chaar khane, aik doosre ke aamne saamne baithe chaar miskeen, qismat ke aage haath phailaye daana phenkte hain: \"Ya qismat, chhakka de de!\" Agar chhakka aa gaya to goti sarak gayi, na aaya to baithe makhiyan maar rahe hain. Teen chhakke aa gaye to faisla suna diya: \"Tumhara teesra chhakka zabt!\" Yeh Ludo nahi tha, yeh taqdeer ke aage insaan ki bebasi ka matam tha.",
    part1Body3: "Lekin \"Ludo Dethroned 5 Way & 4 Way Two Dice\"? Yeh koi mamooli khel nahi, yeh insaani sirisht ka khula maidan hai. Yahan 5 Way aur 4 Way maidan hain. Chaukor qaid toot chuki hai. Aur sab se bara usool, jis par purane khilari hairan reh jayenge, woh hamara bunyadi qanoon hai: \"DON'T LET THE WINNER WIN THE MATCH\" — Jeetne wale ko match mat jeetne do!",
    part1Body4: "Suno! Maidan mein sab se bara nishana woh banta hai jo sab se pehle kamyabi ki manzil par charhne ki koshish karta hai. Jab koi peeche ho to koi parwah nahi karta, magar jo aage barhta hai, baqi chaaron ki nazrein us par jam jati hain. Yahi sachai hai. Jab aik goti apne rangeen home path ke qareeb pohanchti hai, to baqi chaaron khilari — jo aik doosre ke hareef the — khamosh ishare se muttahid ho jate hain. Un ke paanse aik ho jate hain, un ka maqsad aik ho jata hai: \"Is leader ko roko aur kheench kar wapas base bhejo!\"",
    part2Title: "Hissa Dom: Rawayati Games Ki Boriyat Aur Ludo Dethroned Ka Inqilaab",
    part2Subtitle: "Purani Sust Ravi Ka Khatma: 90 Seconds Ke Sansani Khez Muqable",
    part2Body1: "Sach batayiye, aakhri baar kab kisi mobile board game ne aap ki hatheliyan paseene se tar ki theen? Kab aisa hua ke chaar khilari mil kar aap ki baazi palatne ki tadbeerein kar rahe hon aur aap hans bhi rahe hon aur muqabla bhi kar rahe hon? Rawayati Ludo mein aik daana hai, jo gira usi par chalna majboori hai. Koi aage nikal gaya to baqi munh takte reh jate hain. Yeh muqabla nahi, screensaver hai.",
    part2Body2: "Ludo Dethroned 5 Way & 4 Way ka usool sirf naara nahi, game ka engine hai: \"Jeetne wale ko mat jeetne do!\" Insaanon ko kisi aage nikalne wale leader ke khilaf jitni jaldi muttahid kiya ja sakta hai, utni jaldi koi aur cheez unhein aik nahi kar sakti. Jab leader par nishana lag jaye aur baqi khilariyon ko double dice ke hathyar mil jayein, to yeh mehez game nahi rehti — yeh har 90 second mein barpa hone wala sansani khez drama ban jati hai.",
    part3Title: "Hissa Som: Khel Ka Tafseeli Taaruf, Maqasid, Aur Tamam Qawaneen",
    coreAimTitle: "Khel Ka Bunyadi Maqsad O Falsafa",
    coreAimText: "Zahiri maqsad apni tamam 4 shahi gotiyon ko 5 Way aur 4 Way ke sansani khez raston se guzaar kar apne rangeen home path mein pohanchana hai. Lekin asal maqsad yeh hai: \"Jo jeet raha ho, usay hargiz jeetne na diya jaye!\" Aakhri goti tak baazi kisi bhi waqt 180 degree palat sakti hai.",
    tenRulesTitle: "Ludo Dethroned 5 Way & 4 Way Ke 12 Bunyadi Qawaneen",
    rules: [
      { num: 1, title: "5 Way & 4 Way Maidan-e-Jang", desc: "Board mein 5 Way aur 4 Way modes mojood hain (Red, Green, Yellow, Blue, Orange). Ghair mutawaqqa konon se hamla aawar pohanch jata hai." },
      { num: 2, title: "Dual Dice Faisla Saazi (Split Movement)", desc: "Har baari par 2 paanse ghoomte hain. Faisla khilari ka hai ke dono numbers aik goti par chalaye ya do alag gotiyon mein taqseem kar ke hamla aur difa aik sath kare." },
      { num: 3, title: "Teen Chhakkon Ki Koi Qaid Nahi", desc: "Rawayati Ludo ka teesre chhakke par baari mansookh karne ka usool khatam! Jab tak chhakke aa rahe hain, aage barhte rahiye." },
      { num: 4, title: "Lucky 7 Bonus Ka Jadoo", desc: "Agar open track par koi token na ho aur dono dice ka majmooa 7 bane (4+3, 5+2, 6+1), to woh foran double chhakke (6+6) aur muft extra baari mein tabdeel ho jata hai." },
      { num: 5, title: "Missed Capture Penalty (Shikaar Chhorne Ki Saza)", desc: "Agar open track par saamne mojood goti kaatne ka mauqa mila lekin aap ne capture kiye baghair baari khatam ki, to jis goti ne shikaar chhora tha woh khud wapas base chali jayegi!" },
      { num: 6, title: "Lucky Wish (Muqaddar Ka Khufiya Waar)", desc: "Match se pehle muntakhib karda do khufiya numbers (6 aur 6 ke ilawa). Poore match mein aik baar Golden Star daba kar yeh man-chaha roll hasil kiya ja sakta hai." },
      { num: 7, title: "AI Ka Mutaharrik Shikaar (Leader-Targeting)", desc: "Computer bots andhe nahi hain. getMatchLeader() har lamhe leader ka taaqub karta hai aur tamam bots sab kuch chhor kar leader ki goti kaatne lapakte hain." },
      { num: 8, title: "Royal Turn Timer (60, 90, 120 Seconds Ya Off)", desc: "Room host har baari ke liye 60, 90, ya 120 second ka smart timer lagata hai ya off rakhta hai. Waqt khatam hote hi baari agle khilari ko muntakil ho jati hai." },
      { num: 9, title: "Mutaharrik Rehnumai (Sunehri Haath 👇)", desc: "Jadooi sunehri haath hamesha paanse aur har mumkin qanooni chaal ke khano ki nishandahi karta hai taake koi ghalti na ho." },
      { num: 10, title: "Real-Time Social Chat Aur Voice Rooms", desc: "Khilari ke naam par click kar ke fori voice taunt ya custom chat bheji ja sakti hai. Live 5 Way aur 4 Way custom lounges mojood hain." }
    ],
    part5Title: "Hissa Chaharum: Ahem Sawalaat Aur Un Ke Jawabaat (FAQs)",
    faqs: [
      { q: "Theme ka naam 'DON'T LET THE WINNER WIN' kyun rakha gaya?", a: "Sach sochiye! Jab aap kisi hareef ko jeet ke qareeb dekhte hain to kya dil mein yeh khwahish nahi hoti ke us ka paansa ruk jaye? Agar khel mein aage nikalne wale ko rokne ka haq na ho to woh muqabla nahi, sirf rasmi tajposhi hai. Hum ne is jazbe ko behtareen strategy qanoon bana diya hai." },
      { q: "Agar do paanse hain, to kya game bohat jaldi khatam nahi ho jayegi?", a: "Hargiz nahi. Kyunke 5 khilariyon ke sath 20 gotiyan maidan mein ghoom rahi hoti hain. Double dice aap ko tez chalne ki taqat deta hai, to sath hi baqi khilariyon ko aap par hamla karne ke dugne mawaqe bhi faraham karta hai." },
      { q: "Kya 'Missed Capture Penalty' naye khilariyon ke liye sakht nahi?", a: "Bilkul nahi! Yeh qanoon khel ko susti se nikal kar shatranj jaisi chaukas tawajjoh deta hai. Agar aap screen par dhiyan nahi denge aur hareef ko chhor denge, to aap ki apni goti base wapas jayegi. Yahi qanoon khel ko sansani khez banata hai." },
      { q: "Lucky 7 Bonus kaise kaam karta hai?", a: "Jab open track par aap ka koi token na ho aur dono paanson ka total 7 bane (jaise 4+3, 5+2, 6+1), to woh aam 7 ke bajaye foran 6+6 ban jata hai aur sath hi aik muft extra baari bhi deta hai. Yeh peeche reh jane wale khilariyon ke liye baazi palatne ka shandaar hathyar hai." },
      { q: "Computer (AI) jeetne wale leader ko kaise pehchanta hai?", a: "Game ka algorithm har baari par tamam khilariyon ki progress aur home path mein pohanchne wali gotiyon ka jaiza leta hai. Jo khilari jeet ke sab se qareeb hota hai, tamam AI bots usay apna 'Primary Target' bana lete hain." }
    ],
    tableHeaders: {
      feature: "Khusoosiyat",
      classic: "Rawayati Ludo (Ludo King Waghera)",
      dethroned: "Ludo Dethroned 5 Way & 4 Way Two Dice",
      commentary: "Bebaak Tabsara"
    },
    tableRows: [
      { feature: "Khilariyon Ki Tadaad", classic: "4 Khilari (Chaukor Daaira)", dethroned: "5 Way & 4 Way Maidan-e-Jang", commentary: "Chaar mein sukoon tha, paanch mein hulchul aur nayi strategy hai." },
      { feature: "Paanse (Dice)", classic: "Sirf 1 Paansa (Majboor Qismat)", dethroned: "2 Paanse (Hikmat Aur Intikhab)", commentary: "Aik paansa majboori hai; do paanse insaan ki azaad marzi aur strategy hain." },
      { feature: "Teen Chhakkon Ki Saza", classic: "3 chhakke aaye to baari zabt", dethroned: "Koi qaid nahi! Jitna dam hai chalo!", commentary: "Raftar par pabandi khatam; yahan chhakke par chhakka barasta hai." },
      { feature: "Saat Ka Jadoo (Lucky 7)", classic: "Koi wajood nahi", dethroned: "Total 7 = Double Chhakka (6+6) + Muft Baari", commentary: "Open track khali ho to 4+3 ya 5+2 aate hi poori baazi palat jati hai." },
      { feature: "Goti Na Kaatne Ki Saza", classic: "Koi farq nahi parta", dethroned: "Missed Capture: Goti wapas Base jayegi!", commentary: "Ghaflat ki koi maafi nahi. Shikaar chhoro ge to apna token wapas base jayega." },
      { feature: "Lucky Wish", classic: "Sifar", dethroned: "Pehle Se Tay Shuda Roll (Man-chaha Number)", commentary: "Woh khufiya hukum ka ikka jo aakhri waqt par baazi palat deta hai." },
      { feature: "Masnooi Zahanat (AI)", classic: "Be-maqsad ghoomti kath-putli", dethroned: "Shikari AI — Hamesha #1 Leader Ke Peeche", commentary: "AI koi sust bot nahi, woh har lamhe leader ko rokne ki tadbeer karta hai." }
    ]
  },

  // Hindi
  hi: {
    part1Title: "भाग I: कोरी कल्पना नहीं, नग्न मानव प्रवृत्ति: \"विजेता को मैच मत जीतने दो\"",
    part1Subtitle: "पारंपरिक लूडो (Ludo King आदि) की बेबाक तुलना, दर्शन और लूडो डीथ्रोन्ड के विस्तृत नियम",
    part1Body1: "लोग कहते हैं कि लूडो केवल बच्चों का खेल है; गत्ते का चौकोर तख्ता, रंग-बिरंगी गोटियां और एक छोटा छह चेहरों वाला पासा। मैं कहता हूं, यह सफेद झूठ है। आपने इंसान को तब तक नहीं पहचाना जब तक आपने उसे बिसात पर अपने ही सगे यार का गला घोंटते नहीं देखा।",
    part1Body2: "पारंपरिक लूडो एक अफीमी तमाशा है। चार कोने, आमने-सामने बैठे चार लाचार खिलाड़ी, भाग्य के आगे हाथ फैलाए: 'हे किस्मत, एक छक्का दे दे!' तीन छक्के आए तो बरी जब्त! यह खेल नहीं, लाचारी का मातम था।",
    part1Body3: "लेकिन 'लूडो डीथ्रोन्ड 5 वे और 4 वे'? यह इंसानी फितरत का नंगा बाजार है। यहां 5 वे और 4 वे मैदान हैं। हमारा सिद्धांत है: DON'T LET THE WINNER WIN THE MATCH — जीतने वाले को मैच मत जीतने दो!",
    part1Body4: "जब कोई आगे निकलता है, बाकी चारों की आंखों में खून उतर आता है। यही जीवन का सच है। चारों दुश्मन खिलाड़ी एक हो जाते हैं और आगे निकलने वाले को खींचकर वापस अड्डे पर फेंक देते हैं।",
    part2Title: "भाग II: पुराने खेल क्यों उबाऊ हैं और लूडो डीथ्रोन्ड का रोमांच",
    part2Subtitle: "90 सेकंड का तीव्र एड्रेनालाईन मुकाबला",
    part2Body1: "पारंपरिक लूडो विक्टोरिया युग से नहीं बदला। एक पासा, एक चाल, और लंबा इंतजार। कोई आगे निकल गया तो खेल खत्म। यह कोई मुकाबला नहीं, एक स्क्रीनसेवर है।",
    part2Body2: "लूडो डीथ्रोन्ड में आगे निकलने वाले के सिर पर निशाना सज जाता है। जब चारों खिलाड़ी मिलकर लीडर का शिकार करते हैं, तो खेल 90 सेकंड में महायुद्ध बन जाता है।",
    part3Title: "भाग III: खेल का परिचय, उद्देश्य और 12 नियम",
    coreAimTitle: "मूल उद्देश्य",
    coreAimText: "सभी 4 गोटियों को घर पहुंचाना, लेकिन असली नियम है: जो जीत रहा हो, उसे हरगिज जीतने न दिया जाए!",
    tenRulesTitle: "लूडो डीथ्रोन्ड 5 वे और 4 वे के 12 नियम",
    rules: [
      { num: 1, title: "5 वे और 4 वे बोर्ड", desc: "5 वे और 4 वे का रणनीतिक युद्धक्षेत्र। अप्रत्याशित कोणों से हमले।" },
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
    part5Title: "भाग IV: अक्सर पूछे जाने वाले सवाल (FAQs)",
    faqs: [
      { q: "'विजेता को मत जीतने दो' का क्या अर्थ है?", a: "यह इंसानी सच है। जो सबसे आगे निकलता है, पूरा समाज उसे गिराने में जुट जाता है। हमने इसे नियम बना दिया।" },
      { q: "क्या 2 पासों से खेल जल्दी खत्म होगा?", a: "नहीं! 5 खिलाड़ी और 20 गोटियां हैं। हमलावर दोगुने हैं।" },
      { q: "क्या मिस्ड कैप्चर सजा सही है?", a: "हाँ, यह खिलाड़ियों को सतर्क और आक्रामक रखती है।" },
      { q: "लकी 7 बोनस कैसे काम करता है?", a: "दोनों पासों का जोड़ 7 होने पर तुरंत 6+6 और अतिरिक्त चाल मिलती है।" },
      { q: "AI विजेता को कैसे पहचानता है?", a: "getMatchLeader() एल्गोरिद्म शीर्ष स्कोर वाले का पता लगाकर चारों बॉट्स को उसके पीछे लगा देता है।" }
    ],
    tableHeaders: { feature: "विशेषता", classic: "पारंपरिक लूडो", dethroned: "लूडो डीथ्रोन्ड 5 वे और 4 वे", commentary: "दार्शनिक टिप्पणी" },
    tableRows: [
      { feature: "खिलाड़ियों की संख्या", classic: "4 खिलाड़ी", dethroned: "5 वे और 4 वे युद्धक्षेत्र", commentary: "चार में संतुलन था, पांच में विद्रोह है।" },
      { feature: "पासे (Dice)", classic: "1 पासा", dethroned: "2 पासे (रणनीतिक विकल्प)", commentary: "एक पासा गुलामी है, दो पासे स्वतंत्र इच्छा हैं।" },
      { feature: "तीन छक्कों की सजा", classic: "बारी जब्त", dethroned: "कोई रोक नहीं!", commentary: "सफलता को दंडित करना अनुचित है।" },
      { feature: "लकी 7", classic: "शून्य", dethroned: "7 = 6+6 और अतिरिक्त चाल", commentary: "हारे हुए खिलाड़ी का सबसे बड़ा हथियार।" },
      { feature: "मिस्ड कैप्चर", classic: "कोई सजा नहीं", dethroned: "गोटी मरकर अड्डे वापस", commentary: "कायरता की कोई क्षमा नहीं।" },
      { feature: "लकी विश", classic: "शून्य", dethroned: "मनचाहा नंबर कार्ड", commentary: "अंतिम समय का गुप्त दांव।" },
      { feature: "AI", classic: "कठपुतली बॉट", dethroned: "लीडर-शिकारी भेड़िया", commentary: "AI इंसानी ईर्ष्या का सच्चा आईना है।" }
    ]
  },

  // Arabic
  ar: {
    part1Title: "الجزء الأول: ليست خرافة، بل غريزة بشرية خالصة: \"لا تدع الفائز يفوز بالمباراة\"",
    part1Subtitle: "مقارنة فلسفية جريئة وقوانين مفصلة بين لودو ديثروند (Ludo Dethroned 5 Way & 4 Way Two Dice) واللودو التقليدي",
    part1Body1: "يقولون إن اللودو مجرد لعبة أطفال؛ قطع ملونة ولوح كرتوني ونرد صغير بستة أوجه. أقول إن هذا كذب صريح. أنت لم تفهم الطبيعة البشرية قط حتى ترى المرء على رقعة النرد وهو يخنق أقرب أصدقائه بدم بارد.",
    part1Body2: "اللودو التقليدي مجرد تخدير بطيء؛ أربعة مساكين ينتظرون رحمة النرد. وإذا رميت 3 ستات متتالية، تسلب منك دورك! هذه ليست بطولة، بل استسلام للأقدار.",
    part1Body3: "أما لودو ديثروند 5 واي و 4 واي؟ فهي ساحة حرب حقيقية. المبدأ الأسمى الذي يهدم التقاليد القديمة هو: DON'T LET THE WINNER WIN THE MATCH — لا تدع الفائز يفوز!",
    part1Body4: "أكبر مجرم في نظر المنافسين هو من يجرؤ على الاقتراب من القمة أولاً. عندما تقترب قطعة من خط النهاية، يتحالف الخصوم الأربعة فوراً لإسقاط المتصدر وإرجاعه إلى نقطة البداية.",
    part2Title: "الجزء الثاني: لماذا تصيبك الألعاب الأخرى بالملل وكيف يقلب لودو ديثروند الطاولة",
    part2Subtitle: "دراما تكتيكية وإثارة حقيقية خلال 90 ثانية",
    part2Body1: "نرد واحد وحركات بطيئة ومملة تجعل اللودو التقليدي كشاشة توقف تفاعلية. لا حماس ولا توتر.",
    part2Body2: "في لودو ديثروند، يصبح المتصدر هدفاً لجميع اللاعبين، مما يشعل معركة تحالفات شرسة تدوم في جولات سريعة مدتها 90 ثانية.",
    part3Title: "الجزء الثالث: قواعد اللعبة والهندسة الكاملة",
    coreAimTitle: "الهدف والجوهر",
    coreAimText: "إيصال القطع الأربع إلى المركز، ولكن القانون الباطني الأهم: لا تدع المتصدر يفوز بأي ثمن!",
    tenRulesTitle: "القواعد الـ 12 الرسمية",
    rules: [
      { num: 1, title: "ميدان 5 Way & 4 Way", desc: "لوح 5 واي و 4 واي تكتيكي وهجمات مباغتة." },
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
    part5Title: "الجزء الرابع: الأسئلة الشائعة وإجاباتها الفلسفية",
    faqs: [
      { q: "لماذا شعار 'لا تدع الفائز يفوز'؟", a: "لأنه الحقيقة الإنسانية الصادقة؛ اللعبة الحقيقية تبدأ بإسقاط المتصدر لا بتتويجه مبكراً." },
      { q: "هل ينتهي النرد المزدوج باللعبة سريعاً؟", a: "كلا، لأن وجود 5 لاعبين و20 قطعة يجعل التهديدات مضاعفة في كل خانة." },
      { q: "أليست عقوبة تفويت الأسر قاسية؟", a: "إنها تجعل اللعبة تشبه الشطرنج في التركيز وتمنع التهاون." },
      { q: "كيف تعمل السبعة المحظوظة؟", a: "أي رمية مجموعها 7 تتحول فوراً إلى 6+6 ودور إضافي." },
      { q: "كيف يحدد الذكاء الاصطناعي المتصدر؟", a: "عبر خوارزمية getMatchLeader التي تحسب المسافة والقطع في البيت." }
    ],
    tableHeaders: { feature: "الميزة", classic: "اللودو التقليدي", dethroned: "لودو ديثروند 5 Way & 4 Way", commentary: "التعليق الفلسفي" },
    tableRows: [
      { feature: "عدد اللاعبين", classic: "4 لاعبين (مربع)", dethroned: "ساحة حرب 5 Way & 4 Way", commentary: "الأربعة توازن راكد، والخمسة تمرد وثورة." },
      { feature: "محرك النرد", classic: "نرد واحد عاجز", dethroned: "نردان (حرية واختيار)", commentary: "نرد واحد عبودية، ونردان هما الإرادة الحرة." },
      { feature: "عقوبة 3 ستات", classic: "إلغاء الدور", dethroned: "بلا حدود! استمر في الانطلاق", commentary: "معاقبة التقدم خطيئة تم محوها هنا." },
      { feature: "سحر الرقم 7", classic: "غير موجود", dethroned: "المجموع 7 = 6+6 ودور مجاني", commentary: "انقلاب الحظ وسلاح المستضعفين." },
      { feature: "تفويت الأسر", classic: "بلا عقوبة", dethroned: "إعدام القطعة وإرجاعها للبدء", commentary: "لا رحمة بالجبناء في أرض المعركة." },
      { feature: "الأمنية المحظوظة", classic: "صفر", dethroned: "بطاقة الحظ المسبقة", commentary: "الورقة الرابحة المحفوظة لساعة الخطر." },
      { feature: "الذكاء الاصطناعي", classic: "دمية عشوائية", dethroned: "ذئب صياد يتعقب المتصدر", commentary: "مرآة تعكس التحالف البشري ضد الأقوياء." }
    ]
  },

  // Spanish
  es: {
    part1Title: "Parte I: No es ficción, es instinto humano: \"No dejes que el ganador gane la partida\"",
    part1Subtitle: "Crítica comparativa, filosofía y reglas canónicas de Ludo Dethroned 5 Way & 4 Way Two Dice frente al Ludo convencional",
    part1Body1: "Dicen que el ludo es solo un juego de niños. Es una mentira total. No conoces al ser humano hasta que lo ves estrangular alegremente a su propio hermano en el tablero.",
    part1Body2: "El ludo tradicional es un espectáculo opiáceo: cuatro esquinas, un solo dado rogando por un seis, y la ridícula anulación al sacar tres seis seguidos. Era el lamento de la impotencia humana.",
    part1Body3: "Ludo Dethroned 5 Way & 4 Way Two Dice rompe la jaula tradicional con tableros 5 Way & 4 Way. Nuestra ley suprema: ¡NO DEJES QUE EL GANADOR GANE LA PARTIDA!",
    part1Body4: "El mayor enemigo en la sociedad es quien se atreve a coronarse primero. Los cuatro rezagados se alían con un único propósito: derribar al líder y devolverlo al lodo.",
    part2Title: "Parte II: Por qué los juegos móviles aburren y cómo Ludo Dethroned revoluciona el género",
    part2Subtitle: "Emoción táctica en ráfagas de 90 segundos",
    part2Body1: "El ludo tradicional no ha cambiado desde la Reina Victoria. Es un salvapantallas interactivo con turnos lentos y tediosos.",
    part2Body2: "En Ludo Dethroned, el líder tiene una diana en la espalda. Cuatro rivales armados con dados duales generan drama y adrenalina pura.",
    part3Title: "Parte III: Arquitectura del juego y los 10 decretos inviolables",
    coreAimTitle: "Propósito central",
    coreAimText: "Llevar las 4 fichas a casa, pero la regla de oro es: ¡Bajo ninguna circunstancia permitas que el puntero cierre la partida!",
    tenRulesTitle: "Los 10 Decretos Sagrados",
    rules: [
      { num: 1, title: "Tablero 5 Way & 4 Way", desc: "Campo dinámico de 5 y 4 vías que destruye la simetría pasiva." },
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
    part5Title: "Parte IV: Preguntas frecuentes (FAQs)",
    faqs: [
      { q: "¿Por qué 'No dejes que el ganador gane'?", a: "Es la verdad humana: nada une más a las personas que derribar al que va ganando." },
      { q: "¿La partida termina muy rápido con dos dados?", a: "No, hay 5 jugadores y 20 fichas sedientas de caza constante." },
      { q: "¿Es justa la penalización de captura perdida?", a: "Sí, transforma el juego en un duelo de máxima atención y estrategia." },
      { q: "¿Cómo funciona Lucky 7?", a: "Cualquier suma de 7 se convierte en un 6+6 con turno adicional." },
      { q: "¿Cómo rastrea la IA al líder?", a: "El algoritmo getMatchLeader enfoca todos los bots contra el primer puesto." }
    ],
    tableHeaders: { feature: "Característica", classic: "Ludo Convencional", dethroned: "Ludo Dethroned 5 Way & 4 Way Two Dice", commentary: "Crítica Filosófica" },
    tableRows: [
      { feature: "Jugadores", classic: "4 jugadores", dethroned: "5 Way & 4 Way Warzone", commentary: "El número impar engendra rebelión y guerra abierta." },
      { feature: "Dados", classic: "1 dado", dethroned: "2 dados (Estrategia y elección)", commentary: "Un dado es servidumbre; dos dados son libre albedrío." },
      { feature: "Límite de 3 seis", classic: "Turno cancelado", dethroned: "¡Sin límites!", commentary: "Castigar el impulso es un error que aquí queda abolido." },
      { feature: "El 7 mágico", classic: "Inexistente", dethroned: "Suma 7 = 6+6 + Turno Extra", commentary: "El giro definitivo para quien va perdiendo." },
      { feature: "Captura perdida", classic: "Sin penalización", dethroned: "Ficha eliminada a base", commentary: "Sin piedad para la cobardía en el combate." },
      { feature: "Lucky Wish", classic: "Ninguno", dethroned: "Tirada prediseñada garantizada", commentary: "La carta bajo la manga para el momento crítico." },
      { feature: "IA", classic: "Robot errático", dethroned: "Lobo cazador de líderes", commentary: "Reflejo puro del instinto humano de derribar al líder." }
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
      part1Subtitle: `Canonical 12 Rules, Philosophy and Strategy of Ludo Dethroned 5 Way & 4 Way Two Dice`
    };
  }
});
