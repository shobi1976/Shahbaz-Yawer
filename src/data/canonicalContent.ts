// Canonical Content confirmed by Game Creator (October 2026)

export interface FaqItem {
  q: string;
  a: string;
  category: string;
}

export const CANONICAL_FAQS: FaqItem[] = [
  // The game
  {
    category: "The Game",
    q: "What is Ludo Dethroned 5 Way & 4 Way Two Dice?",
    a: "A 5 Way & 4 Way (five-player and four-player), 3D Ludo-style strategy game played with two dice (also widely searched as 2 dice, double dice, and 2 dies). Each player has four tokens, and the first player to get all four onto their coloured home path wins. The game is played on a 3D board with 3D tokens and dice."
  },
  {
    category: "The Game",
    q: "Is this game called Two Dice Ludo, Double Dies, 2 Daane Wali Ludo, or Dual Dice?",
    a: "While the official name is Ludo Dethroned 5 Way & 4 Way with Two Dice, players around the world search for this style of gameplay using many different regional terms, colloquial names, and common typing mistakes. Whether you call it 2 Dice Ludo, Double Dice, 2 Dies, Dual Dice, or search for it locally as 2 Daane Wali Ludo or Do Pasa Ludo, the game mechanics are exactly the same. No matter how you spell it or what language you use, our platform brings you the ultimate 5 Way & 4 Way (4-player and 5-player) strategic experience using a multi-die system."
  },
  {
    category: "The Game",
    q: "How many players can play?",
    a: "5 Way (five players) & 4 Way (four players). Matches can include AI opponents."
  },
  {
    category: "The Game",
    q: "How many tokens does each player have?",
    a: "Four."
  },
  {
    category: "The Game",
    q: "How many dice are used?",
    a: "Two dice are used on every turn."
  },
  {
    category: "The Game",
    q: "Can I play against AI opponents?",
    a: "Yes. Matches can include AI opponents."
  },
  {
    category: "The Game",
    q: "How is it different from classic four-player Ludo?",
    a: "It supports both 5 Way and 4 Way play, uses two dice each turn, makes capturing compulsory with a penalty if you skip it, and adds Lucky 7 and the Lucky Wish. The match also ends as soon as someone wins, like a T20 match compared with a Test match."
  },
  {
    category: "The Game",
    q: "Is it a game of luck or skill?",
    a: "Both. The dice decide what is possible on a turn, and your choices decide what you do with it: which token to move, when to capture and when to protect your tokens."
  },

  // Winning
  {
    category: "Winning",
    q: "How do I win?",
    a: "Be the first player to get all four of your tokens onto your coloured home path. The match ends as soon as someone wins."
  },
  {
    category: "Winning",
    q: "Do I have to reach the centre home to win?",
    a: "No. Getting all four tokens onto your coloured home path is enough. A token that reaches the centre home also counts."
  },
  {
    category: "Winning",
    q: "What happens when a token reaches the centre home?",
    a: "You get an extra turn. Moving into the centre home needs an exact roll."
  },
  {
    category: "Winning",
    q: "When does the match end?",
    a: "As soon as one player wins."
  },
  {
    category: "Winning",
    q: "How are the other players ranked?",
    a: "By the progress percentage shown on the progress bar when the match ends."
  },
  {
    category: "Winning",
    q: "What is the progress bar?",
    a: "It shows each player’s progress as a percentage. When the match ends, those percentages decide the ranking of the players who did not win."
  },
  {
    category: "Winning",
    q: "Why does the match end when someone wins?",
    a: "The game is built to be fast and tense, like a T20 match compared with a Test match. Once a winner is decided there is nothing left to play for, so every player tries to win or to stop the winner."
  },

  // Starting and moving
  {
    category: "Starting and Moving",
    q: "How do I bring a token out of base?",
    a: "Roll a 6. A single 6 brings one token out."
  },
  {
    category: "Starting and Moving",
    q: "Do I need a double 6 to start?",
    a: "No. A single 6 is enough."
  },
  {
    category: "Starting and Moving",
    q: "Can I use both dice on one token?",
    a: "Yes. The token moves the total of the two dice."
  },
  {
    category: "Starting and Moving",
    q: "Can I split the dice between two tokens?",
    a: "Yes. You can use one die on each of two different tokens."
  },
  {
    category: "Starting and Moving",
    q: "Are tokens in base safe?",
    a: "Yes. Tokens in base cannot be captured."
  },
  {
    category: "Starting and Moving",
    q: "Do I get an extra turn for rolling a 6?",
    a: "Yes. Every 6 gives you an extra turn."
  },
  {
    category: "Starting and Moving",
    q: "Is there a limit on sixes in a row?",
    a: "No. There is no limit on how many extra turns you can earn by rolling sixes."
  },
  {
    category: "Starting and Moving",
    q: "What happens if I have no legal move?",
    a: "Your turn passes to the next player."
  },
  {
    category: "Starting and Moving",
    q: "Do I need an exact roll to enter the centre home?",
    a: "Yes. Moving into the centre home needs an exact roll."
  },
  {
    category: "Starting and Moving",
    q: "Which way do tokens and turns move?",
    a: "Clockwise. Tokens travel clockwise around the open track, and turns pass clockwise from player to player."
  },
  {
    category: "Starting and Moving",
    q: "Whose turn is next?",
    a: "The next player clockwise. For example, after green it is red’s turn."
  },

  // Capturing and safety
  {
    category: "Capturing and Safety",
    q: "How do I capture an opponent’s token?",
    a: "Land on a square where a single opponent token stands on the open track."
  },
  {
    category: "Capturing and Safety",
    q: "What happens to a captured token?",
    a: "It returns to its base."
  },
  {
    category: "Capturing and Safety",
    q: "Do I get anything for capturing?",
    a: "Yes. Every capture gives you a reroll."
  },
  {
    category: "Capturing and Safety",
    q: "Can I capture using the total of both dice?",
    a: "Yes. A capture can be made with one die or with the total of both dice."
  },
  {
    category: "Capturing and Safety",
    q: "Can a token be captured on a star square?",
    a: "No. Star squares are safe for every player."
  },
  {
    category: "Capturing and Safety",
    q: "Can a token be captured on its coloured home path?",
    a: "No. Nothing can be captured on the coloured home path."
  },
  {
    category: "Capturing and Safety",
    q: "Can a token be captured in base?",
    a: "No."
  },
  {
    category: "Capturing and Safety",
    q: "What is a pair?",
    a: "Two tokens of the same colour on the same square."
  },
  {
    category: "Capturing and Safety",
    q: "Can a pair be captured?",
    a: "Yes, but not by a single token. A pair can be captured only when two of an opponent’s tokens land on its square together."
  },
  {
    category: "Capturing and Safety",
    q: "How do I capture a pair?",
    a: "Two of your tokens must land on the pair’s square together, one with each die. They can start from different squares."
  },
  {
    category: "Capturing and Safety",
    q: "Is a pair on a star square safe?",
    a: "Yes. A pair on a star square is always safe."
  },
  {
    category: "Capturing and Safety",
    q: "Are there blockades in the game?",
    a: "No. Two tokens of the same colour on a square form a pair, which protects against a single token only."
  },
  {
    category: "Capturing and Safety",
    q: "Does capturing a pair give two rerolls?",
    a: "No. Capturing a pair gives one reroll."
  },
  {
    category: "Capturing and Safety",
    q: "Can I split a pair?",
    a: "Yes. You can move the tokens of your pair separately."
  },

  // Missed Capture Penalty
  {
    category: "Missed Capture Penalty",
    q: "What is the Missed Capture Penalty?",
    a: "If one of your tokens could capture an opponent’s token and you finish your move without capturing, that token is sent back to its base."
  },
  {
    category: "Missed Capture Penalty",
    q: "Is capturing compulsory?",
    a: "Yes, whenever a capture is possible on the open track."
  },
  {
    category: "Missed Capture Penalty",
    q: "Which token is sent back to base?",
    a: "The token that could have captured."
  },
  {
    category: "Missed Capture Penalty",
    q: "What if each die can capture a different opponent?",
    a: "You must make both captures. Each capture you skip sends the capturing token back to base."
  },
  {
    category: "Missed Capture Penalty",
    q: "What if I can capture by the total or by each die separately?",
    a: "Capturing by the total uses both dice, so you may choose one of the options. Capturing the leader is usually the best choice."
  },
  {
    category: "Missed Capture Penalty",
    q: "What happens with doubles such as 5 and 5?",
    a: "If a token can capture with a 5 and you use the first 5 elsewhere, nothing happens yet. If you use the second 5 elsewhere as well, that token goes back to base. If each 5 could capture a different opponent and you capture neither, both capturing tokens go back to base."
  },
  {
    category: "Missed Capture Penalty",
    q: "Does the penalty apply if the target is on a star square or a coloured home path?",
    a: "No. Tokens there cannot be captured, so there is no capture to miss."
  },
  {
    category: "Missed Capture Penalty",
    q: "Does the penalty apply when I have no capture available?",
    a: "No. The penalty only applies when a capture was possible."
  },
  {
    category: "Missed Capture Penalty",
    q: "Do I have to capture a pair if I can?",
    a: "Yes. If two of your tokens can land together on a pair, that capture is also compulsory."
  },
  {
    category: "Missed Capture Penalty",
    q: "Can I skip a capture on purpose?",
    a: "Yes, but the token that could have captured goes back to base. Experienced players sometimes accept this deliberately as a tactic. See the Strategies page."
  },

  // Extra turns and special features
  {
    category: "Extra Turns & Special Features",
    q: "When do I get an extra turn?",
    a: "When you roll a 6, after a capture, when you move a token into the centre home, and when Lucky 7 applies."
  },
  {
    category: "Extra Turns & Special Features",
    q: "What is Lucky 7?",
    a: "If none of your tokens are on the open track, a roll that totals 7 counts as 6+6 and gives you an extra turn."
  },
  {
    category: "Extra Turns & Special Features",
    q: "When does Lucky 7 work?",
    a: "Only when every one of your tokens is in your base, on your coloured home path or in the centre home."
  },
  {
    category: "Extra Turns & Special Features",
    q: "Does Lucky 7 work if one of my tokens is on the open track?",
    a: "No. In that case a total of 7 is an ordinary 7."
  },
  {
    category: "Extra Turns & Special Features",
    q: "What are the chances of rolling a total of 7?",
    a: "Six out of 36 combinations total 7, about 17% of rolls."
  },
  {
    category: "Extra Turns & Special Features",
    q: "What is the Lucky Wish?",
    a: "A once-per-match guaranteed roll. You choose two dice numbers before the match, and you can use the Golden Star once to roll exactly those numbers."
  },
  {
    category: "Extra Turns & Special Features",
    q: "When do I choose my wish numbers?",
    a: "Before the match."
  },
  {
    category: "Extra Turns & Special Features",
    q: "Can I choose 6 and 6?",
    a: "No. 6 and 6 is not allowed."
  },
  {
    category: "Extra Turns & Special Features",
    q: "How many times can I use the Lucky Wish?",
    a: "Once per match."
  },
  {
    category: "Extra Turns & Special Features",
    q: "Can my Lucky Wish trigger Lucky 7?",
    a: "Yes. If your wish numbers add up to 7 and none of your tokens are on the open track, Lucky 7 applies."
  },
  {
    category: "Extra Turns & Special Features",
    q: "What is the Golden Star?",
    a: "The control you use to activate your Lucky Wish."
  },
  {
    category: "Extra Turns & Special Features",
    q: "Does Lucky 7 bring out two tokens?",
    a: "Yes, when several of your tokens are in base. Each of the two 6s can bring one token out."
  },
  {
    category: "Extra Turns & Special Features",
    q: "Can I use the Lucky Wish on any turn?",
    a: "Yes. You can use it on any turn, but only once per match."
  },

  // Turn timer
  {
    category: "Turn Timer",
    q: "Is there a turn timer?",
    a: "Yes, and it is optional. The room host chooses 60, 90 or 120 seconds, or turns it off."
  },
  {
    category: "Turn Timer",
    q: "What happens when the timer runs out?",
    a: "Your turn passes to the next player."
  },
  {
    category: "Turn Timer",
    q: "Can the turn timer be turned off?",
    a: "Yes. The room host can turn it off."
  },
  {
    category: "Turn Timer",
    q: "Who sets the turn timer?",
    a: "The room host."
  },

  // The leader and strategy
  {
    category: "The Leader & Strategy",
    q: "Who is the leader?",
    a: "The player who is closest to winning."
  },
  {
    category: "The Leader & Strategy",
    q: "Do AI opponents go after the leader?",
    a: "Yes. AI opponents are designed to hunt the leader."
  },
  {
    category: "The Leader & Strategy",
    q: "Why do opponents sometimes place their tokens in front of each other?",
    a: "When a player is close to winning, trailing players may set up captures for each other. A capture gives a reroll, which can then be used to hit the leader."
  },
  {
    category: "The Leader & Strategy",
    q: "How can I stop a leader?",
    a: "Hunt the leader’s tokens on the open track. Star squares and the coloured home path are safe, so only tokens on the open track can be captured."
  },
  {
    category: "The Leader & Strategy",
    q: "How can I protect myself when I am the leader?",
    a: "Stop on star squares, move tokens in pairs where you can, and get tokens onto your coloured home path quickly."
  },
  {
    category: "The Leader & Strategy",
    q: "Which capture should I choose when I have a choice?",
    a: "The leader’s token is usually the best target."
  },
  {
    category: "The Leader & Strategy",
    q: "What is a good strategy for beginners?",
    a: "Bring tokens out when you roll a 6, check for captures before every move, use the safe places, and watch the leader. The Strategies page has more."
  },
  {
    category: "The Leader & Strategy",
    q: "Where can I read the full rules?",
    a: "On the Rules page, which lists all 12 rules with examples."
  },

  // History & Origins (Tariqi Pasmanzar)
  {
    category: "History & Origins",
    q: "Who invented the original Ludo game?",
    a: "The modern game of Ludo was patented in England by Alfred Collier in 1896, adapted from the ancient Indian game of Pachisi. (Alfred Collier ne 1896 mein isay patent karwaya tha, jo Pachisi se nikla hai)."
  },
  {
    category: "History & Origins",
    q: "What was Ludo originally called in ancient India?",
    a: "In ancient India, Ludo was originally known as Pachisi (as well as ancient variants Chaupar and Pasha). The name Pachisi originates from the Hindi/Urdu word 'pachees' (twenty-five), the highest score possible when throwing traditional cowrie shells."
  },
  {
    category: "History & Origins",
    q: "Which Mughal emperor played Ludo with real people?",
    a: "Mughal Emperor Akbar the Great famously played living versions of Pachisi (the royal predecessor to Ludo) in the 16th century at his imperial courts in Fatehpur Sikri and Agra. Court maidens dressed in distinctive colourful attire served as living game pieces moving across giant outdoor mosaic courtyard boards."
  },

  // Traditional & Regional Names
  {
    category: "Traditional & Regional Names",
    q: "What are the different regional and traditional names of Ludo around the world?",
    a: "Ludo is known by many traditional names globally. In ancient India, it originated as Pachisi. Its international adaptations include Parcheesi in America, Uckers in Britain, Mens Erger Je Niet in the Netherlands, and Le Jeu de Dada in France. No matter the regional variant, Ludo Dethroned 5 Way & 4 Way Two Dice incorporates these classic roots into its modern 5 Way & 4 Way mechanics."
  },

  // Spelling Variations & Typos
  {
    category: "Spelling Variations & Typos",
    q: "Is it spelled Ludo, Lodo, Luddo, or Lido?",
    a: "The correct official spelling is Ludo. However, players frequently search for the game using typos or regional spelling variations such as Lodo, Loodo, Luddo, Ludd0, Loudo, Luto, or Lido. While the spelling changes depending on how fast you type, the 12 core rules of our game remain exactly the same."
  },

  // Language Based Searches
  {
    category: "Language Based Searches",
    q: "How do people write and search for Ludo in different languages?",
    a: "People search for Ludo in their native scripts worldwide. It is written as لڈو in Urdu, लूडो in Hindi, and 飞行棋 (Flying Chess) in Chinese. Other scripts include Bengali (লুডু), Tamil (லுடோ), Arabic (لودو), Russian (Лудо), and Spanish (Parchís). Ludo Dethroned 5 Way & 4 Way Two Dice supports this global community by offering localized gameplay experiences."
  }
];

export interface StrategySectionItem {
  id: string;
  num: string;
  title: string;
  body: string[];
}

export const CANONICAL_STRATEGIES: StrategySectionItem[] = [
  {
    id: "safe-places",
    num: "6.1",
    title: "Learn the safe places",
    body: [
      "Star squares, your coloured home path and your base are safe. A token on a star square cannot be captured, so use star squares as safe stops while you travel. Once a token reaches your coloured home path, it cannot be captured there."
    ]
  },
  {
    id: "opening",
    num: "6.2",
    title: "The opening: get tokens out",
    body: [
      "You need a 6 to leave base. With two dice, the chance that at least one die shows a 6 is 11 in 36, about 31%, on any roll. Every 6 also gives you an extra turn.",
      "Waiting with all four tokens in base wastes turns, so bring a token out when you can. Remember that a token on the open track means Lucky 7 will not work for you."
    ]
  },
  {
    id: "two-dice-well",
    num: "6.3",
    title: "Using two dice well",
    body: [
      "• Combine both dice on one token to travel far, or to hit a target at the total distance.",
      "• Split the dice to advance two tokens, or to use one die for a capture and the other for safety.",
      "• Before you decide, list every option: the first die, the second die and the total."
    ]
  },
  {
    id: "scan-captures",
    num: "6.4",
    title: "Always scan for captures first",
    body: [
      "Capturing is compulsory, so check every turn for these four options: a capture with the first die, a capture with the second die, a capture with the total, and a pair capture with two of your tokens. Missing one can cost you a token. This habit is the most valuable one in the game."
    ]
  },
  {
    id: "choosing-targets",
    num: "6.5",
    title: "Choosing what to capture",
    body: [
      "When the rules let you choose between captures, prefer these targets in order:",
      "1. The leader’s token.",
      "2. The opponent token that has travelled furthest.",
      "3. A token that threatens your own tokens.",
      "Every capture also gives you a reroll, so a capture that sets up another one is especially good."
    ]
  },
  {
    id: "defence",
    num: "6.6",
    title: "Defence",
    body: [
      "• On an ordinary stretch of track, an opponent token up to 12 squares behind yours can reach it with one roll, because the total of two dice is at most 12. Squares close in front of an opponent’s token are the riskiest, because a single die or the total can reach them.",
      "• A pair is safe from a single token, but two opponent tokens can capture it by landing together. Do not leave a pair where two opponent tokens can both reach it.",
      "• When a lone token is under threat, move it to a star square or onto your coloured home path if you can."
    ]
  },
  {
    id: "leader-play",
    num: "6.7",
    title: "If you are the leader",
    body: [
      "• Only your tokens on the open track can be captured. Star squares and your coloured home path are safe.",
      "• Move tokens in pairs where you can, stop on star squares, and get tokens onto your coloured home path quickly.",
      "• Expect pressure. AI opponents are designed to go after the leader.",
      "• Do not skip captures yourself. The penalty sends a token back to base."
    ]
  },
  {
    id: "beating-leader",
    num: "6.8",
    title: "If you are behind: beating the leader",
    body: [
      "• Only the leader’s tokens on the open track can be captured.",
      "• Every capture gives a reroll, so one hit can lead to another.",
      "• You do not need to be the closest player. Any trailing player can make the hit.",
      "• Set up captures for each other. AI opponents do this on purpose: when a player is close to winning, trailing players may place a token in front of another trailing player. That player captures it, gets a reroll, and may use the reroll to hit the leader. The sacrificed token goes back to base, so this is only worth doing when it creates a real chance to hit the leader."
    ]
  },
  {
    id: "missed-capture-tactic",
    num: "6.9",
    title: "Using the Missed Capture Penalty on purpose",
    body: [
      "Rule 7 sends a token back to base if it could have captured and did not. Experienced players sometimes accept that penalty deliberately, for two reasons:",
      "• To re-enter behind the leader: If the leader’s coloured home path starts next to your base, a token sent back to base can come out later behind the leader and chase him. You need a 6 to bring it out.",
      "• To clear the open track: Lucky 7 only works when none of your tokens are on the open track. Sending your last token on the track back to base can set up Lucky 7.",
      "The cost is the progress that token had made. The dice maths shows the gain is modest. With all your tokens in base, a 6 on either die gets a token out about 31% of the time (11 in 36). With Lucky 7, a 6 or a total of 7 gets a token out about 42% of the time (15 in 36). Do this when the token has little progress to lose, or when stopping the leader matters more than your own race."
    ]
  },
  {
    id: "lucky-7-plan",
    num: "6.10",
    title: "Planning for Lucky 7",
    body: [
      "• A total of 7 comes up 6 times in 36, about 17% of rolls.",
      "• It only works when none of your tokens are on the open track.",
      "• It counts as 6+6 and gives you an extra turn, which is a big swing when you are starting from base.",
      "• Do not empty the open track only to chase a 7 unless the cost is low."
    ]
  },
  {
    id: "wish-numbers",
    num: "6.11",
    title: "Choosing your Lucky Wish numbers",
    body: [
      "You choose before the match, so pick numbers that stay useful.",
      "• Include a 6 if you want a guaranteed way out of base.",
      "• Two numbers that total 7 (6 and 1, 5 and 2, or 4 and 3) trigger Lucky 7 when none of your tokens are on the open track.",
      "• 6 and 6 is not allowed.",
      "• You can use the wish on any turn, but only once. A player who uses it early wastes it. A wise player keeps it for the turn that wins the match or stops the winner, such as a capture on the leader or getting the last token onto the coloured home path."
    ]
  },
  {
    id: "endgame",
    num: "6.12",
    title: "The endgame",
    body: [
      "• You win with all four tokens on your coloured home path. You do not need the centre.",
      "• Your last tokens on the open track are your only weak points. Use star squares as stops where you can.",
      "• The centre home gives an extra turn but needs an exact roll, so do not waste turns chasing it.",
      "• Keep checking for compulsory captures. A penalty near the end can cost a token’s whole journey.",
      "• The match ends the moment someone wins. If you cannot win, stopping the leader is worth more than a small gain in your own race.",
      "• If you can neither win nor stop the leader, your progress percentage decides your ranking, so keep your tokens moving."
    ]
  },
  {
    id: "timer-choice",
    num: "6.13",
    title: "Choosing a turn timer",
    body: [
      "• 60 seconds: fast pace.",
      "• 90 seconds: a middle setting.",
      "• 120 seconds: more time to think.",
      "• Off: a relaxed game.",
      "The room host chooses the timer. When it is on and your time runs out, your turn passes to the next player."
    ]
  },
  {
    id: "common-mistakes",
    num: "6.14",
    title: "Common mistakes",
    body: [
      "• Forgetting to check for captures.",
      "• Leaving a lone token close in front of an opponent’s token when a safe option exists.",
      "• Using the Lucky Wish too early.",
      "• Ignoring the leader until it is too late.",
      "• Emptying the open track for Lucky 7 and losing more than you gain.",
      "• Parking a pair where two opponent tokens can both reach it."
    ]
  },
  {
    id: "quick-decision",
    num: "6.15",
    title: "Quick decision guide",
    body: [
      "• Can I capture? Then I must.",
      "• Do I have several captures to choose from? Take the leader’s token.",
      "• Is one of my tokens close in front of an opponent’s token? Move it to safety or onto a star square.",
      "• Is someone close to winning? Hunt their tokens on the open track.",
      "• Are none of my tokens on the open track? A total of 7 will count as 6+6."
    ]
  },
  {
    id: "think-t20",
    num: "6.16",
    title: "Think T20, not Test",
    body: [
      "A Test match runs until everyone has finished. This game is a T20: it ends the moment someone wins. That changes how you play. Do not wait for a perfect position. Once a rival gets close, every turn should be about stopping them, because there is nothing left to play for after they win. And if you cannot win, your progress percentage decides your rank."
    ]
  }
];

export const HOW_TO_PLAY_SECTIONS = [
  {
    num: "4.1",
    title: "The game in 30 seconds",
    items: [
      "5 Way & 4 Way (five or four players), four tokens each, two dice every turn.",
      "A single 6 brings a token out of base. Every 6 you roll also gives you an extra turn.",
      "Tokens travel around the shared open track. Landing on a lone opponent token captures it, and you roll again.",
      "If you can capture, you must. Skipping a capture sends your token back to base.",
      "Star squares and your coloured home path are safe.",
      "The first player to get all four tokens onto their coloured home path wins, and the match ends there."
    ]
  },
  {
    num: "4.2",
    title: "Before the match",
    items: [
      "Choose your Lucky Wish numbers: Pick two dice numbers, but not 6 and 6. You can use the wish once, on any turn.",
      "The room host chooses the turn timer: 60, 90 or 120 seconds, or off."
    ]
  },
  {
    num: "4.3",
    title: "Your turn, step by step",
    items: [
      "1. Roll both dice.",
      "2. Check for captures first. If a capture is possible, it is compulsory (see 4.9).",
      "3. Decide how to use the dice: both on one token, which moves the total, or one die on each of two tokens.",
      "4. Move your token or tokens. If you have no legal move, your turn passes to the next player.",
      "5. If you earned an extra turn, roll again. Extra turns come from rolling a 6, from a capture, from moving a token into the centre home, and from Lucky 7.",
      "6. Otherwise your turn passes to the next player, clockwise around the board."
    ]
  },
  {
    num: "4.4",
    title: "Bringing tokens out of base",
    items: [
      "All four of your tokens start in base. A single 6 brings one token out onto the open track. You do not need a double 6. Tokens in base are safe. Every 6 you roll also gives you an extra turn, and there is no limit on how many times in a row."
    ]
  },
  {
    num: "4.5",
    title: "Moving with two dice",
    items: [
      "You can use both dice on one token, which then moves the total of the two dice, or use one die on each of two different tokens. Example: you roll 3 and 4. You can move one token 7 squares, or move one token 3 squares and another token 4 squares."
    ]
  },
  {
    num: "4.6",
    title: "Capturing",
    items: [
      "If your token lands on a square where a single opponent token stands on the open track, that token is captured and returns to its base. You can capture with one die or with the total of both dice. Every capture gives you a reroll."
    ]
  },
  {
    num: "4.7",
    title: "Safe places",
    items: [
      "A token cannot be captured when it is on a star square, on its coloured home path or in base. Star squares are safe for every player."
    ]
  },
  {
    num: "4.8",
    title: "Pairs",
    items: [
      "Two tokens of the same colour on the same square form a pair. A single token landing on a pair does not capture it. To capture a pair, two of your tokens must land on that square together, one with each die, even if they start from different squares. Capturing a pair gives you one reroll. A pair on a star square is always safe. A pair is not locked together: you can move its tokens separately whenever you like."
    ]
  },
  {
    num: "4.9",
    title: "The Missed Capture Penalty in plain words",
    items: [
      "Capturing is compulsory. If one of your tokens could capture an opponent’s token and you finish your move without capturing, that token is sent back to base. The full rule, with every case, is Rule 7 on the Rules page."
    ]
  },
  {
    num: "4.10",
    title: "Heading home",
    items: [
      "After travelling around the open track, your token enters your coloured home path, where it is safe. A token can go on to reach the centre home, but it needs an exact roll to move into it. Moving into the centre home gives you an extra turn. You do not need to reach the centre to win."
    ]
  },
  {
    num: "4.11",
    title: "How to win",
    items: [
      "Be the first player to get all four tokens onto your coloured home path. A token that reaches the centre home also counts. The match ends as soon as a player wins, and the other players are ranked by the progress percentage shown on the progress bar."
    ]
  },
  {
    num: "4.12",
    title: "Special features",
    items: [
      "• Lucky 7: when none of your tokens are on the open track, a total of 7 counts as 6+6 and gives you an extra turn (Rule 9).",
      "• Lucky Wish: once per match, on any turn, roll the two numbers you chose before the match (Rule 10).",
      "• Turn timer: optional, set by the room host: 60, 90 or 120 seconds, or off (Rule 11).",
      "• Progress bar: shows each player’s progress percentage and decides the ranking when the match ends (Rule 12)."
    ]
  },
  {
    num: "4.13",
    title: "Four example turns",
    items: [
      "Example 1: a capture and a reroll. An opponent’s single token is 5 squares ahead of your token on a normal square. You roll 5 and 2. You use the 5 to land on it and capture it, then use the 2 on another token. Because you captured, you roll again.",
      "Example 2: a missed capture. One of your tokens is 4 squares behind an opponent’s single token on a normal square. You roll 4 and 2. A capture is possible with the 4, so it is compulsory. If you use both dice on other tokens, the token that could have captured goes back to base.",
      "Example 3: Lucky 7. Two of your tokens are in base and two are on your coloured home path, so none are on the open track. You roll 4 and 3, a total of 7. Because none of your tokens are on the open track, it counts as 6+6. Each 6 can bring a token out of base, so both tokens in base can come out together, and you also take an extra turn.",
      "Example 4: sixes and extra turns. You roll 6 and 2. You use the 6 to bring a token out of base and the 2 to move another token. Because you rolled a 6, you roll again."
    ]
  },
  {
    num: "4.14",
    title: "First-match checklist",
    items: [
      "• Find your base, your coloured home path and the star squares.",
      "• Check for captures before every move.",
      "• Keep lone tokens out of an opponent’s reach when you can.",
      "• Use the safe places.",
      "• Watch the leader."
    ]
  }
];
