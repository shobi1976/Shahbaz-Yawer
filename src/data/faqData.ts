import { FaqItem } from '../types';

export const FAQ_DATA: FaqItem[] = [
  // The game
  {
    category: 'The game',
    question: 'What is Ludo Dethroned 5 Way & 4 Way Two Dice?',
    answer: 'A 5 Way & 4 Way (five-player and four-player), 3D Ludo-style strategy game played with two dice. Each player has four tokens, and the first player to get all four onto their coloured home path wins. The game is played on a 3D board with 3D tokens and dice.'
  },
  {
    category: 'The game',
    question: 'How many players can play?',
    answer: '5 Way (five players) & 4 Way (four players). Matches can include AI opponents.'
  },
  {
    category: 'The game',
    question: 'How many tokens does each player have?',
    answer: 'Four.'
  },
  {
    category: 'The game',
    question: 'How many dice are used?',
    answer: 'Two dice are used on every turn.'
  },
  {
    category: 'The game',
    question: 'Can I play against AI opponents?',
    answer: 'Yes. Matches can include AI opponents.'
  },
  {
    category: 'The game',
    question: 'How is it different from classic four-player Ludo?',
    answer: 'It supports both 5 Way and 4 Way play, uses two dice each turn, makes capturing compulsory with a penalty if you skip it, and adds Lucky 7 and the Lucky Wish. The match also ends as soon as someone wins, like a T20 match compared with a Test match.'
  },
  {
    category: 'The game',
    question: 'Is it a game of luck or skill?',
    answer: 'Both. The dice decide what is possible on a turn, and your choices decide what you do with it: which token to move, when to capture and when to protect your tokens.'
  },

  // Winning
  {
    category: 'Winning',
    question: 'How do I win?',
    answer: 'Be the first player to get all four of your tokens onto your coloured home path. The match ends as soon as someone wins.'
  },
  {
    category: 'Winning',
    question: 'Do I have to reach the centre home to win?',
    answer: 'No. Getting all four tokens onto your coloured home path is enough. A token that reaches the centre home also counts.'
  },
  {
    category: 'Winning',
    question: 'What happens when a token reaches the centre home?',
    answer: 'You get an extra turn. Moving into the centre home needs an exact roll.'
  },
  {
    category: 'Winning',
    question: 'When does the match end?',
    answer: 'As soon as one player wins.'
  },
  {
    category: 'Winning',
    question: 'How are the other players ranked?',
    answer: 'By the progress percentage shown on the progress bar when the match ends.'
  },
  {
    category: 'Winning',
    question: 'What is the progress bar?',
    answer: 'It shows each player’s progress as a percentage. When the match ends, those percentages decide the ranking of the players who did not win.'
  },
  {
    category: 'Winning',
    question: 'Why does the match end when someone wins?',
    answer: 'The game is built to be fast and tense, like a T20 match compared with a Test match. Once a winner is decided there is nothing left to play for, so every player tries to win or to stop the winner.'
  },

  // Starting and moving
  {
    category: 'Starting and moving',
    question: 'How do I bring a token out of base?',
    answer: 'Roll a 6. A single 6 brings one token out.'
  },
  {
    category: 'Starting and moving',
    question: 'Do I need a double 6 to start?',
    answer: 'No. A single 6 is enough.'
  },
  {
    category: 'Starting and moving',
    question: 'Can I use both dice on one token?',
    answer: 'Yes. The token moves the total of the two dice.'
  },
  {
    category: 'Starting and moving',
    question: 'Can I split the dice between two tokens?',
    answer: 'Yes. You can use one die on each of two different tokens.'
  },
  {
    category: 'Starting and moving',
    question: 'Are tokens in base safe?',
    answer: 'Yes. Tokens in base cannot be captured.'
  },
  {
    category: 'Starting and moving',
    question: 'Do I get an extra turn for rolling a 6?',
    answer: 'Yes. Every 6 gives you an extra turn.'
  },
  {
    category: 'Starting and moving',
    question: 'Is there a limit on sixes in a row?',
    answer: 'No. There is no limit on how many extra turns you can earn by rolling sixes.'
  },
  {
    category: 'Starting and moving',
    question: 'What happens if I have no legal move?',
    answer: 'Your turn passes to the next player.'
  },
  {
    category: 'Starting and moving',
    question: 'Do I need an exact roll to enter the centre home?',
    answer: 'Yes. Moving into the centre home needs an exact roll.'
  },
  {
    category: 'Starting and moving',
    question: 'Which way do tokens and turns move?',
    answer: 'Clockwise. Tokens travel clockwise around the open track, and turns pass clockwise from player to player.'
  },
  {
    category: 'Starting and moving',
    question: 'Whose turn is next?',
    answer: 'The next player clockwise. For example, after green it is red’s turn.'
  },

  // Capturing and safety
  {
    category: 'Capturing and safety',
    question: 'How do I capture an opponent’s token?',
    answer: 'Land on a square where a single opponent token stands on the open track.'
  },
  {
    category: 'Capturing and safety',
    question: 'What happens to a captured token?',
    answer: 'It returns to its base.'
  },
  {
    category: 'Capturing and safety',
    question: 'Do I get anything for capturing?',
    answer: 'Yes. Every capture gives you a reroll.'
  },
  {
    category: 'Capturing and safety',
    question: 'Can I capture using the total of both dice?',
    answer: 'Yes. A capture can be made with one die or with the total of both dice.'
  },
  {
    category: 'Capturing and safety',
    question: 'Can a token be captured on a star square?',
    answer: 'No. Star squares are safe for every player.'
  },
  {
    category: 'Capturing and safety',
    question: 'Can a token be captured on its coloured home path?',
    answer: 'No. Nothing can be captured on the coloured home path.'
  },
  {
    category: 'Capturing and safety',
    question: 'Can a token be captured in base?',
    answer: 'No.'
  },
  {
    category: 'Capturing and safety',
    question: 'What is a pair?',
    answer: 'Two tokens of the same colour on the same square.'
  },
  {
    category: 'Capturing and safety',
    question: 'Can a pair be captured?',
    answer: 'Yes, but not by a single token. A pair can be captured only when two of an opponent’s tokens land on its square together.'
  },
  {
    category: 'Capturing and safety',
    question: 'How do I capture a pair?',
    answer: 'Two of your tokens must land on the pair’s square together, one with each die. They can start from different squares.'
  },
  {
    category: 'Capturing and safety',
    question: 'Is a pair on a star square safe?',
    answer: 'Yes. A pair on a star square is always safe.'
  },
  {
    category: 'Capturing and safety',
    question: 'Are there blockades in the game?',
    answer: 'No. Two tokens of the same colour on a square form a pair, which protects against a single token only.'
  },
  {
    category: 'Capturing and safety',
    question: 'Does capturing a pair give two rerolls?',
    answer: 'No. Capturing a pair gives one reroll.'
  },
  {
    category: 'Capturing and safety',
    question: 'Can I split a pair?',
    answer: 'Yes. You can move the tokens of your pair separately.'
  },

  // Missed Capture Penalty
  {
    category: 'Missed Capture Penalty',
    question: 'What is the Missed Capture Penalty?',
    answer: 'If one of your tokens could capture an opponent’s token and you finish your move without capturing, that token is sent back to its base.'
  },
  {
    category: 'Missed Capture Penalty',
    question: 'Is capturing compulsory?',
    answer: 'Yes, whenever a capture is possible on the open track.'
  },
  {
    category: 'Missed Capture Penalty',
    question: 'Which token is sent back to base?',
    answer: 'The token that could have captured.'
  },
  {
    category: 'Missed Capture Penalty',
    question: 'What if each die can capture a different opponent?',
    answer: 'You must make both captures. Each capture you skip sends the capturing token back to base.'
  },
  {
    category: 'Missed Capture Penalty',
    question: 'What if I can capture by the total or by each die separately?',
    answer: 'Capturing by the total uses both dice, so you may choose one of the options. Capturing the leader is usually the best choice.'
  },
  {
    category: 'Missed Capture Penalty',
    question: 'What happens with doubles such as 5 and 5?',
    answer: 'If a token can capture with a 5 and you use the first 5 elsewhere, nothing happens yet. If you use the second 5 elsewhere as well, that token goes back to base. If each 5 could capture a different opponent and you capture neither, both capturing tokens go back to base.'
  },
  {
    category: 'Missed Capture Penalty',
    question: 'Does the penalty apply if the target is on a star square or a coloured home path?',
    answer: 'No. Tokens there cannot be captured, so there is no capture to miss.'
  },
  {
    category: 'Missed Capture Penalty',
    question: 'Does the penalty apply when I have no capture available?',
    answer: 'No. The penalty only applies when a capture was possible.'
  },
  {
    category: 'Missed Capture Penalty',
    question: 'Do I have to capture a pair if I can?',
    answer: 'Yes. If two of your tokens can land together on a pair, that capture is also compulsory.'
  },
  {
    category: 'Missed Capture Penalty',
    question: 'Can I skip a capture on purpose?',
    answer: 'Yes, but the token that could have captured goes back to base. Experienced players sometimes accept this deliberately as a tactic. See the Strategies page.'
  },

  // Extra turns and special features
  {
    category: 'Extra turns and special features',
    question: 'When do I get an extra turn?',
    answer: 'When you roll a 6, after a capture, when you move a token into the centre home, and when Lucky 7 applies.'
  },
  {
    category: 'Extra turns and special features',
    question: 'What is Lucky 7?',
    answer: 'If none of your tokens are on the open track, a roll that totals 7 counts as 6+6 and gives you an extra turn.'
  },
  {
    category: 'Extra turns and special features',
    question: 'When does Lucky 7 work?',
    answer: 'Only when every one of your tokens is in your base, on your coloured home path or in the centre home.'
  },
  {
    category: 'Extra turns and special features',
    question: 'Does Lucky 7 work if one of my tokens is on the open track?',
    answer: 'No. In that case a total of 7 is an ordinary 7.'
  },
  {
    category: 'Extra turns and special features',
    question: 'What are the chances of rolling a total of 7?',
    answer: 'Six out of 36 combinations total 7, about 17% of rolls.'
  },
  {
    category: 'Extra turns and special features',
    question: 'What is the Lucky Wish?',
    answer: 'A once-per-match guaranteed roll. You choose two dice numbers before the match, and you can use the Golden Star once to roll exactly those numbers.'
  },
  {
    category: 'Extra turns and special features',
    question: 'When do I choose my wish numbers?',
    answer: 'Before the match.'
  },
  {
    category: 'Extra turns and special features',
    question: 'Can I choose 6 and 6?',
    answer: 'No. 6 and 6 is not allowed.'
  },
  {
    category: 'Extra turns and special features',
    question: 'How many times can I use the Lucky Wish?',
    answer: 'Once per match.'
  },
  {
    category: 'Extra turns and special features',
    question: 'Can my Lucky Wish trigger Lucky 7?',
    answer: 'Yes. If your wish numbers add up to 7 and none of your tokens are on the open track, Lucky 7 applies.'
  },
  {
    category: 'Extra turns and special features',
    question: 'What is the Golden Star?',
    answer: 'The control you use to activate your Lucky Wish.'
  },
  {
    category: 'Extra turns and special features',
    question: 'Does Lucky 7 bring out two tokens?',
    answer: 'Yes, when several of your tokens are in base. Each of the two 6s can bring one token out.'
  },
  {
    category: 'Extra turns and special features',
    question: 'Can I use the Lucky Wish on any turn?',
    answer: 'Yes. You can use it on any turn, but only once per match.'
  },

  // Turn timer
  {
    category: 'Turn timer',
    question: 'Is there a turn timer?',
    answer: 'Yes, and it is optional. The room host chooses 60, 90 or 120 seconds, or turns it off.'
  },
  {
    category: 'Turn timer',
    question: 'What happens when the timer runs out?',
    answer: 'Your turn passes to the next player.'
  },
  {
    category: 'Turn timer',
    question: 'Can the turn timer be turned off?',
    answer: 'Yes. The room host can turn it off.'
  },
  {
    category: 'Turn timer',
    question: 'Who sets the turn timer?',
    answer: 'The room host.'
  },

  // The leader and strategy
  {
    category: 'The leader and strategy',
    question: 'Who is the leader?',
    answer: 'The player who is closest to winning.'
  },
  {
    category: 'The leader and strategy',
    question: 'Do AI opponents go after the leader?',
    answer: 'Yes. AI opponents are designed to hunt the leader.'
  },
  {
    category: 'The leader and strategy',
    question: 'Why do opponents sometimes place their tokens in front of each other?',
    answer: 'When a player is close to winning, trailing players may set up captures for each other. A capture gives a reroll, which can then be used to hit the leader.'
  },
  {
    category: 'The leader and strategy',
    question: 'How can I stop a leader?',
    answer: 'Hunt the leader’s tokens on the open track. Star squares and the coloured home path are safe, so only tokens on the open track can be captured.'
  },
  {
    category: 'The leader and strategy',
    question: 'How can I protect myself when I am the leader?',
    answer: 'Stop on star squares, move tokens in pairs where you can, and get tokens onto your coloured home path quickly.'
  },
  {
    category: 'The leader and strategy',
    question: 'Which capture should I choose when I have a choice?',
    answer: 'The leader’s token is usually the best target.'
  },
  {
    category: 'The leader and strategy',
    question: 'What is a good strategy for beginners?',
    answer: 'Bring tokens out when you roll a 6, check for captures before every move, use the safe places, and watch the leader. The Strategies page has more.'
  },
  {
    category: 'The leader and strategy',
    question: 'Where can I read the full rules?',
    answer: 'On the Rules page, which lists all 12 rules with examples.'
  },
  // History & Origins
  {
    category: 'History & Origins',
    question: 'Who invented the original Ludo game?',
    answer: 'The modern game of Ludo was patented in England by Alfred Collier in 1896, adapted from the ancient Indian game of Pachisi. (Alfred Collier ne 1896 mein isay patent karwaya tha, jo Pachisi se nikla hai).'
  },
  {
    category: 'History & Origins',
    question: 'What was Ludo originally called in ancient India?',
    answer: 'In ancient India, Ludo was originally known as Pachisi (as well as ancient variants Chaupar and Pasha). The name Pachisi originates from the Hindi/Urdu word \'pachees\' (twenty-five), the highest score possible when throwing traditional cowrie shells.'
  },
  {
    category: 'History & Origins',
    question: 'Which Mughal emperor played Ludo with real people?',
    answer: 'Mughal Emperor Akbar the Great famously played living versions of Pachisi (the royal predecessor to Ludo) in the 16th century at his imperial courts in Fatehpur Sikri and Agra. Court maidens dressed in distinctive colourful attire served as living game pieces moving across giant outdoor mosaic courtyard boards.'
  },
  // Traditional & Regional Names
  {
    category: 'Traditional & Regional Names',
    question: 'What are the different regional and traditional names of Ludo around the world?',
    answer: 'Ludo is known by many traditional names globally. In ancient India, it originated as Pachisi. Its international adaptations include Parcheesi in America, Uckers in Britain, Mens Erger Je Niet in the Netherlands, and Le Jeu de Dada in France. No matter the regional variant, Ludo Dethroned 5 Way & 4 Way Two Dice incorporates these classic roots into its modern 5 Way & 4 Way mechanics.'
  },
  // Spelling Variations & Typos
  {
    category: 'Spelling Variations & Typos',
    question: 'Is it spelled Ludo, Lodo, Luddo, or Lido?',
    answer: 'The correct official spelling is Ludo. However, players frequently search for the game using typos or regional spelling variations such as Lodo, Loodo, Luddo, Ludd0, Loudo, Luto, or Lido. While the spelling changes depending on how fast you type, the 12 core rules of our game remain exactly the same.'
  },
  // Language Based Searches
  {
    category: 'Language Based Searches',
    question: 'How do people write and search for Ludo in different languages?',
    answer: 'People search for Ludo in their native scripts worldwide. It is written as لڈو in Urdu, लूडो in Hindi, and 飞行棋 (Flying Chess) in Chinese. Other scripts include Bengali (লুডু), Tamil (லுடோ), Arabic (لودو), Russian (Лудо), and Spanish (Parchís). Ludo Dethroned 5 Way & 4 Way Two Dice supports this global community by offering localized gameplay experiences.'
  }
];
