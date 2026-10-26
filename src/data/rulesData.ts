import { RuleCard } from '../types';

export const RULES_DATA: RuleCard[] = [
  {
    id: 1,
    title: 'The Goal',
    subtitle: 'All Four Tokens Onto Coloured Home Path',
    accentColorName: 'Neon Gold',
    hex: '#eab308',
    glowHex: 'rgba(234, 179, 8, 0.45)',
    iconName: 'Trophy',
    category: 'Core Rules',
    shortDesc: 'The first player to get all four of their tokens onto their coloured home path wins.',
    fullDesc: 'Rule 1: The goal. The first player to get all four of their tokens onto their coloured home path wins. A token does not need to reach the centre home. A token that reaches the centre home also counts.',
    tacticalTip: 'Once all four tokens reach your coloured home path, the match ends immediately and victory is sealed.',
    antiLeaderMechanic: 'The match ends as soon as a player wins, so trailing players unite to stop the leader before all 4 tokens reach safety.',
    highlightDetails: {
      ruleNumber: 'RULE 01',
      keyMetric: '4 Tokens on Home Path',
      impactLevel: 'Extreme',
      unlockCondition: 'Primary Victory Condition'
    },
    faqs: [
      {
        question: 'How do I win?',
        answer: 'Be the first player to get all four of your tokens onto your coloured home path. The match ends as soon as someone wins.'
      },
      {
        question: 'Do I have to reach the centre home to win?',
        answer: 'No. Getting all four tokens onto your coloured home path is enough. A token that reaches the centre home also counts.'
      }
    ]
  },
  {
    id: 2,
    title: 'Two Dice',
    subtitle: 'Split Moves or Move the Total',
    accentColorName: 'Neon Green',
    hex: '#00ff66',
    glowHex: 'rgba(0, 255, 102, 0.45)',
    iconName: 'Dices',
    category: 'Core Rules',
    shortDesc: 'On your turn you roll two dice (also played as 2 dice, double dice, or 2 dies). Use both on one token or one on each of two different tokens.',
    fullDesc: 'Rule 2: Two dice. On your turn you roll two dice (double dice). You can use both 2 dice on one token, which moves the total, or split the 2 dies across two different tokens. If you have no legal move, your turn passes to the next player. Tokens travel clockwise around the open track, and turns pass clockwise from player to player.',
    tacticalTip: 'Combine both dice on one token to travel far, or split them to advance two tokens or execute a capture.',
    antiLeaderMechanic: 'Two dice (double dice) allow precision maneuvering to land exactly on an opponent’s token without overshooting.',
    highlightDetails: {
      ruleNumber: 'RULE 02',
      keyMetric: '2 Dice / Double Dice',
      impactLevel: 'High',
      unlockCondition: 'Core Movement Engine'
    },
    faqs: [
      {
        question: 'Can I use both dice on one token?',
        answer: 'Yes. The token moves the total of the two dice.'
      },
      {
        question: 'Can I split the dice between two tokens?',
        answer: 'Yes. You can use one die on each of two different tokens.'
      },
      {
        question: 'What happens if I have no legal move?',
        answer: 'Your turn passes to the next player.'
      }
    ]
  },
  {
    id: 3,
    title: 'Sixes',
    subtitle: 'Leaving Base & Extra Turns',
    accentColorName: 'Neon Cyan',
    hex: '#00f3ff',
    glowHex: 'rgba(0, 243, 255, 0.45)',
    iconName: 'RotateCw',
    category: 'Core Rules',
    shortDesc: 'A single 6 brings a token out of base. Rolling a 6 also gives you an extra turn, with no limit.',
    fullDesc: 'Rule 3: Sixes. A single 6 brings a token out of base. Rolling a 6 also gives you an extra turn, and there is no limit on how many extra turns you can earn in a row.',
    tacticalTip: 'You need a 6 to leave base. With two dice, the chance of at least one 6 is 11 in 36 (about 31%) on any roll.',
    antiLeaderMechanic: 'Extra turns from rolling sixes provide sudden momentum to chase down the leader.',
    highlightDetails: {
      ruleNumber: 'RULE 03',
      keyMetric: 'Single 6 Leaves Base',
      impactLevel: 'High',
      unlockCondition: 'No limit on consecutive sixes'
    },
    faqs: [
      {
        question: 'How do I bring a token out of base?',
        answer: 'Roll a 6. A single 6 brings one token out.'
      },
      {
        question: 'Do I need a double 6 to start?',
        answer: 'No. A single 6 is enough.'
      },
      {
        question: 'Is there a limit on sixes in a row?',
        answer: 'No. There is no limit on how many extra turns you can earn by rolling sixes.'
      }
    ]
  },
  {
    id: 4,
    title: 'Capturing',
    subtitle: 'Landing on Opponent & Reroll Bonus',
    accentColorName: 'Neon Red',
    hex: '#ef4444',
    glowHex: 'rgba(239, 68, 68, 0.45)',
    iconName: 'Swords',
    category: 'Movement & Combat',
    shortDesc: 'Landing on a single opponent token on the open track captures it and gives you a reroll.',
    fullDesc: 'Rule 4: Capturing. If your token lands on a square where a single opponent token stands on the open track, that token is captured and returns to its base. A capture can be made with one die or with the total of both dice. Every capture gives the capturing player a reroll.',
    tacticalTip: 'Every capture gives you a reroll, so a capture that sets up another move is especially powerful.',
    antiLeaderMechanic: 'A trailing player can hit the leader to earn a reroll and reset the leader’s forward progress back to base.',
    highlightDetails: {
      ruleNumber: 'RULE 04',
      keyMetric: 'Reroll on Every Capture',
      impactLevel: 'Extreme',
      unlockCondition: 'Active on Open Track'
    },
    faqs: [
      {
        question: 'How do I capture an opponent’s token?',
        answer: 'Land on a square where a single opponent token stands on the open track.'
      },
      {
        question: 'What happens to a captured token?',
        answer: 'It returns to its base.'
      },
      {
        question: 'Do I get anything for capturing?',
        answer: 'Yes. Every capture gives you a reroll.'
      }
    ]
  },
  {
    id: 5,
    title: 'Safe Places',
    subtitle: 'Star Squares, Home Paths & Base',
    accentColorName: 'Neon Sky Blue',
    hex: '#38bdf8',
    glowHex: 'rgba(56, 189, 248, 0.45)',
    iconName: 'Star',
    category: 'Movement & Combat',
    shortDesc: 'A token cannot be captured when it is on a star square, on its coloured home path or in base.',
    fullDesc: 'Rule 5: Safe places. A token cannot be captured when it is on a star square, on its coloured home path or in base. Star squares are safe for every player.',
    tacticalTip: 'Use star squares as secure waypoints while navigating the shared open track.',
    antiLeaderMechanic: 'Only tokens on the open track can be captured. Leaders move between safe places to stay protected.',
    highlightDetails: {
      ruleNumber: 'RULE 05',
      keyMetric: '100% Capture Immunity',
      impactLevel: 'Tactical',
      unlockCondition: 'Star squares safe for all players'
    },
    faqs: [
      {
        question: 'Can a token be captured on a star square?',
        answer: 'No. Star squares are safe for every player.'
      },
      {
        question: 'Can a token be captured on its coloured home path?',
        answer: 'No. Nothing can be captured on the coloured home path.'
      },
      {
        question: 'Can a token be captured in base?',
        answer: 'No.'
      }
    ]
  },
  {
    id: 6,
    title: 'Pairs',
    subtitle: 'Single-Token Protection & Splitting',
    accentColorName: 'Neon Orange',
    hex: '#f97316',
    glowHex: 'rgba(249, 115, 22, 0.45)',
    iconName: 'Users',
    category: 'Movement & Combat',
    shortDesc: 'Two tokens of the same colour form a pair. A single token cannot capture it.',
    fullDesc: 'Rule 6: Pairs. Two tokens of the same colour on the same square are a pair. A pair cannot be captured by a single token landing on it. A pair can be captured only when two of an opponent’s tokens land on that square together, one with each die, even if they start from different squares. Capturing a pair gives one reroll. A pair on a star square is always safe. You can split your own pair freely.',
    tacticalTip: 'Pairs protect against lone attackers, but beware leaving a pair where two opponent tokens can both land.',
    antiLeaderMechanic: 'Leaders often travel in pairs to fend off single pursuing tokens.',
    highlightDetails: {
      ruleNumber: 'RULE 06',
      keyMetric: 'Immune to Single Tokens',
      impactLevel: 'Tactical',
      unlockCondition: '2 tokens of same colour on 1 square'
    },
    faqs: [
      {
        question: 'What is a pair?',
        answer: 'Two tokens of the same colour on the same square.'
      },
      {
        question: 'Can a pair be captured?',
        answer: 'Yes, but not by a single token. A pair can be captured only when two of an opponent’s tokens land on its square together.'
      },
      {
        question: 'Can I split a pair?',
        answer: 'Yes. You can move the tokens of your pair separately.'
      }
    ]
  },
  {
    id: 7,
    title: 'Missed Capture Penalty',
    subtitle: 'Compulsory Capturing & Base Return',
    accentColorName: 'Neon Magenta',
    hex: '#ff007f',
    glowHex: 'rgba(255, 0, 127, 0.45)',
    iconName: 'AlertTriangle',
    category: 'Movement & Combat',
    shortDesc: 'Capturing is compulsory. If you skip a capture on the open track, that token returns to base.',
    fullDesc: `Rule 7: Missed Capture Penalty.
• If one of your tokens could capture an opponent’s token on the open track, you must capture.
• If you finish your move without capturing, the token that could have captured is sent back to its base.
• When each die can make a different capture (for example a 6 for one capture and a 5 for another), you must make both captures. Each capture you skip sends the capturing token back to base.
• Capturing with the total of both dice uses both dice. When a capture by the total competes with captures by each die separately (for example with a 2 and a 3, where you could capture by the total of 5, by the 2 or by the 3), you may choose one of them. Capturing the leader is usually the best choice.
• Doubles: when both dice show the same number and a token can capture with that number, using the first die elsewhere is not penalised. If you use the second die elsewhere as well, the token that could have captured goes back to base. If each of the two dice could capture a different opponent and you capture neither, both capturing tokens go back to base.
• Making a pair capture (two of your tokens landing together on a pair) is also compulsory when it is possible.
• Only tokens on the open track can be captured. Tokens on star squares, on coloured home paths or in base cannot be captured, so they never cause a penalty.`,
    tacticalTip: 'Always scan for captures before moving. Experienced players sometimes take the penalty deliberately to reset or clear track for Lucky 7.',
    antiLeaderMechanic: 'Leaders cannot skip captures without penalty, forcing aggressive tactical decisions.',
    highlightDetails: {
      ruleNumber: 'RULE 07',
      keyMetric: 'Capturing is Compulsory',
      impactLevel: 'Extreme',
      unlockCondition: 'Enforced on all open track captures'
    },
    faqs: [
      {
        question: 'What is the Missed Capture Penalty?',
        answer: 'If one of your tokens could capture an opponent’s token and you finish your move without capturing, that token is sent back to its base.'
      },
      {
        question: 'Which token is sent back to base?',
        answer: 'The token that could have captured.'
      },
      {
        question: 'Can I skip a capture on purpose?',
        answer: 'Yes, but the token that could have captured goes back to base. Experienced players sometimes accept this deliberately as a tactic. See the Strategies page.'
      }
    ]
  },
  {
    id: 8,
    title: 'Centre Home Bonus',
    subtitle: 'Exact Roll & Extra Turn',
    accentColorName: 'Neon Amber',
    hex: '#f59e0b',
    glowHex: 'rgba(245, 158, 11, 0.45)',
    iconName: 'Crown',
    category: 'Bonuses & Special',
    shortDesc: 'Moving a token into the centre home needs an exact roll and grants an extra turn.',
    fullDesc: 'Rule 8: Centre home bonus. Moving a token into the centre home needs an exact roll. It gives you an extra turn.',
    tacticalTip: 'Reaching the centre home gives an extra turn, but is not required to win. Do not waste turns chasing it if your home path is open.',
    antiLeaderMechanic: 'Extra turns earned from centre home entries can be chained to advance remaining pieces.',
    highlightDetails: {
      ruleNumber: 'RULE 08',
      keyMetric: 'Extra Turn on Exact Roll',
      impactLevel: 'Tactical',
      unlockCondition: 'Exact roll into board centre'
    },
    faqs: [
      {
        question: 'What happens when a token reaches the centre home?',
        answer: 'You get an extra turn. Moving into the centre home needs an exact roll.'
      },
      {
        question: 'Do I have to reach the centre home to win?',
        answer: 'No. Getting all four tokens onto your coloured home path is enough. A token that reaches the centre home also counts.'
      }
    ]
  },
  {
    id: 9,
    title: 'Lucky 7',
    subtitle: '6+6 Surge When Open Track is Empty',
    accentColorName: 'Neon Yellow',
    hex: '#facc15',
    glowHex: 'rgba(250, 204, 21, 0.45)',
    iconName: 'Sparkles',
    category: 'Bonuses & Special',
    shortDesc: 'If none of your tokens are on the open track, rolling a total of 7 counts as 6+6 and gives an extra turn.',
    fullDesc: 'Rule 9: Lucky 7. If none of your tokens are on the open track, a roll that totals 7 counts as 6+6 and gives you an extra turn. Each of the two 6s can bring a token out of base, so two tokens can come out together. A token is not on the open track if it is in your base, on your coloured home path or in the centre home. If even one of your tokens is on the open track, a total of 7 is an ordinary 7. A Lucky Wish that adds up to 7 also triggers Lucky 7 when this condition is met.',
    tacticalTip: 'A total of 7 comes up 6 times in 36 (about 17%). When all tokens are in base, Lucky 7 turns a 7 into 6+6 plus an extra turn.',
    antiLeaderMechanic: 'Trailing players who have lost all tokens on track get a massive boost to deploy two pieces at once and rejoin the chase.',
    highlightDetails: {
      ruleNumber: 'RULE 09',
      keyMetric: 'Sum of 7 = 6+6 + Extra Turn',
      impactLevel: 'Extreme',
      unlockCondition: '0 tokens on open track'
    },
    faqs: [
      {
        question: 'What is Lucky 7?',
        answer: 'If none of your tokens are on the open track, a roll that totals 7 counts as 6+6 and gives you an extra turn.'
      },
      {
        question: 'When does Lucky 7 work?',
        answer: 'Only when every one of your tokens is in your base, on your coloured home path or in the centre home.'
      },
      {
        question: 'Does Lucky 7 work if one of my tokens is on the open track?',
        answer: 'No. In that case a total of 7 is an ordinary 7.'
      }
    ]
  },
  {
    id: 10,
    title: 'Lucky Wish',
    subtitle: 'Once-Per-Match Guaranteed Roll',
    accentColorName: 'Neon Purple',
    hex: '#a855f7',
    glowHex: 'rgba(168, 85, 247, 0.45)',
    iconName: 'Star',
    category: 'Bonuses & Special',
    shortDesc: 'Choose two dice numbers before match (not 6+6). Tap Golden Star once per match to roll them.',
    fullDesc: 'Rule 10: Lucky Wish. Before the match, you choose two dice numbers. Once per match, on any turn, you can use the Golden Star to roll exactly those two numbers instead of rolling randomly. You cannot choose 6 and 6. Each wish can be used once.',
    tacticalTip: 'Keep your Lucky Wish for the crucial turn that stops the leader or moves your final token onto the home path. Wish numbers totaling 7 trigger Lucky 7 if open track is clear.',
    antiLeaderMechanic: 'Use your guaranteed roll to land an exact capture on the leader when the championship is on the line.',
    highlightDetails: {
      ruleNumber: 'RULE 10',
      keyMetric: '1 Guaranteed Roll per Match',
      impactLevel: 'High',
      unlockCondition: 'Selected before match, 6+6 not allowed'
    },
    faqs: [
      {
        question: 'What is the Lucky Wish?',
        answer: 'A once-per-match guaranteed roll. You choose two dice numbers before the match, and you can use the Golden Star once to roll exactly those numbers.'
      },
      {
        question: 'Can I choose 6 and 6?',
        answer: 'No. 6 and 6 is not allowed.'
      },
      {
        question: 'Can my Lucky Wish trigger Lucky 7?',
        answer: 'Yes. If your wish numbers add up to 7 and none of your tokens are on the open track, Lucky 7 applies.'
      }
    ]
  },
  {
    id: 11,
    title: 'Turn Timer',
    subtitle: 'Optional Timer Set by Room Host',
    accentColorName: 'Neon Mint',
    hex: '#2dd4bf',
    glowHex: 'rgba(45, 212, 191, 0.45)',
    iconName: 'Clock',
    category: 'Match Settings',
    shortDesc: 'The room host sets the turn timer: 60, 90 or 120 seconds, or off. Time out passes your turn.',
    fullDesc: 'Rule 11: Turn timer. The room host sets the turn timer: 60, 90 or 120 seconds, or off. When the timer is on and your time runs out, your turn passes to the next player.',
    tacticalTip: 'Choose 60s for rapid blitz, 90s for standard play, 120s for deep calculations, or off for a relaxed match.',
    antiLeaderMechanic: 'The timer keeps matches moving and ensures all players react decisively.',
    highlightDetails: {
      ruleNumber: 'RULE 11',
      keyMetric: '60s, 90s, 120s or Off',
      impactLevel: 'Tactical',
      unlockCondition: 'Set by room host'
    },
    faqs: [
      {
        question: 'Is there a turn timer?',
        answer: 'Yes, and it is optional. The room host chooses 60, 90 or 120 seconds, or turns it off.'
      },
      {
        question: 'What happens when the timer runs out?',
        answer: 'Your turn passes to the next player.'
      },
      {
        question: 'Can the turn timer be turned off?',
        answer: 'Yes. The room host can turn it off.'
      }
    ]
  },
  {
    id: 12,
    title: 'End of the Match',
    subtitle: 'Winner Ends Match & Progress Bar Ranks Rest',
    accentColorName: 'Neon Pink',
    hex: '#ec4899',
    glowHex: 'rgba(236, 72, 153, 0.45)',
    iconName: 'BarChart3',
    category: 'Match Settings',
    shortDesc: 'The match ends as soon as a player wins. Other players are ranked by progress percentage.',
    fullDesc: 'Rule 12: End of the match. The match ends as soon as a player wins. The other players are ranked by the progress percentage shown on the progress bar. Once a winner is decided there is nothing left to play for, so every other player aims to win or to stop the winner.',
    tacticalTip: 'Think T20, not Test match: the match ends the moment someone wins. If you cannot win, stopping the leader is worth more than a small gain, and progress percentage decides your rank.',
    antiLeaderMechanic: 'Because there is no second-place continuation, trailing players have every reason to hunt the leader.',
    highlightDetails: {
      ruleNumber: 'RULE 12',
      keyMetric: 'Instant Match Conclusion',
      impactLevel: 'Extreme',
      unlockCondition: 'Ranked by progress percentage'
    },
    faqs: [
      {
        question: 'When does the match end?',
        answer: 'As soon as one player wins.'
      },
      {
        question: 'How are the other players ranked?',
        answer: 'By the progress percentage shown on the progress bar when the match ends.'
      },
      {
        question: 'Why does the match end when someone wins?',
        answer: 'The game is built to be fast and tense, like a T20 match compared with a Test match. Once a winner is decided there is nothing left to play for, so every player tries to win or to stop the winner.'
      }
    ]
  }
];
