export interface StrategySection {
  id: string;
  number: string;
  title: string;
  content: string[];
  bulletPoints?: string[];
  numberedList?: string[];
}

export const STRATEGIES_DATA: StrategySection[] = [
  {
    id: 'safe-places',
    number: '6.1',
    title: 'Learn the safe places',
    content: [
      'Star squares, your coloured home path and your base are safe. A token on a star square cannot be captured, so use star squares as safe stops while you travel. Once a token reaches your coloured home path, it cannot be captured there.'
    ]
  },
  {
    id: 'the-opening',
    number: '6.2',
    title: 'The opening: get tokens out',
    content: [
      'You need a 6 to leave base. With two dice, the chance that at least one die shows a 6 is 11 in 36, about 31%, on any roll. Every 6 also gives you an extra turn. Waiting with all four tokens in base wastes turns, so bring a token out when you can. Remember that a token on the open track means Lucky 7 will not work for you (see 6.10).'
    ]
  },
  {
    id: 'using-two-dice-well',
    number: '6.3',
    title: 'Using two dice well',
    content: [],
    bulletPoints: [
      'Combine both dice on one token to travel far, or to hit a target at the total distance.',
      'Split the dice to advance two tokens, or to use one die for a capture and the other for safety.',
      'Before you decide, list every option: the first die, the second die and the total.'
    ]
  },
  {
    id: 'scan-for-captures',
    number: '6.4',
    title: 'Always scan for captures first',
    content: [
      'Capturing is compulsory, so check every turn for these four options: a capture with the first die, a capture with the second die, a capture with the total, and a pair capture with two of your tokens. Missing one can cost you a token. This habit is the most valuable one in the game.'
    ]
  },
  {
    id: 'choosing-what-to-capture',
    number: '6.5',
    title: 'Choosing what to capture',
    content: [
      'When the rules let you choose between captures, prefer these targets in order:',
      'Every capture also gives you a reroll, so a capture that sets up another one is especially good.'
    ],
    numberedList: [
      'The leader’s token.',
      'The opponent token that has travelled furthest.',
      'A token that threatens your own tokens.'
    ]
  },
  {
    id: 'defence',
    number: '6.6',
    title: 'Defence',
    content: [],
    bulletPoints: [
      'On an ordinary stretch of track, an opponent token up to 12 squares behind yours can reach it with one roll, because the total of two dice is at most 12. Squares close in front of an opponent’s token are the riskiest, because a single die or the total can reach them.',
      'A pair is safe from a single token, but two opponent tokens can capture it by landing together. Do not leave a pair where two opponent tokens can both reach it.',
      'When a lone token is under threat, move it to a star square or onto your coloured home path if you can.'
    ]
  },
  {
    id: 'if-you-are-the-leader',
    number: '6.7',
    title: 'If you are the leader',
    content: [],
    bulletPoints: [
      'Only your tokens on the open track can be captured. Star squares and your coloured home path are safe.',
      'Move tokens in pairs where you can, stop on star squares, and get tokens onto your coloured home path quickly.',
      'Expect pressure. AI opponents are designed to go after the leader.',
      'Do not skip captures yourself. The penalty sends a token back to base.'
    ]
  },
  {
    id: 'if-you-are-behind',
    number: '6.8',
    title: 'If you are behind: beating the leader',
    content: [],
    bulletPoints: [
      'Only the leader’s tokens on the open track can be captured.',
      'Every capture gives a reroll, so one hit can lead to another.',
      'You do not need to be the closest player. Any trailing player can make the hit.',
      'Set up captures for each other. AI opponents do this on purpose: when a player is close to winning, trailing players may place a token in front of another trailing player. That player captures it, gets a reroll, and may use the reroll to hit the leader. The sacrificed token goes back to base, so this is only worth doing when it creates a real chance to hit the leader.'
    ]
  },
  {
    id: 'using-penalty-on-purpose',
    number: '6.9',
    title: 'Using the Missed Capture Penalty on purpose',
    content: [
      'Rule 7 sends a token back to base if it could have captured and did not. Experienced players sometimes accept that penalty deliberately, for two reasons:',
      'The cost is the progress that token had made. The dice maths shows the gain is modest. With all your tokens in base, a 6 on either die gets a token out about 31% of the time (11 in 36). With Lucky 7, a 6 or a total of 7 gets a token out about 42% of the time (15 in 36). Do this when the token has little progress to lose, or when stopping the leader matters more than your own race.'
    ],
    bulletPoints: [
      'To re-enter behind the leader. If the leader’s coloured home path starts next to your base, a token sent back to base can come out later behind the leader and chase him. You need a 6 to bring it out.',
      'To clear the open track. Lucky 7 only works when none of your tokens are on the open track. Sending your last token on the track back to base can set up Lucky 7.'
    ]
  },
  {
    id: 'planning-for-lucky-7',
    number: '6.10',
    title: 'Planning for Lucky 7',
    content: [],
    bulletPoints: [
      'A total of 7 comes up 6 times in 36, about 17% of rolls.',
      'It only works when none of your tokens are on the open track.',
      'It counts as 6+6 and gives you an extra turn, which is a big swing when you are starting from base.',
      'Do not empty the open track only to chase a 7 unless the cost is low.'
    ]
  },
  {
    id: 'choosing-wish-numbers',
    number: '6.11',
    title: 'Choosing your Lucky Wish numbers',
    content: [
      'You choose before the match, so pick numbers that stay useful.'
    ],
    bulletPoints: [
      'Include a 6 if you want a guaranteed way out of base.',
      'Two numbers that total 7 (6 and 1, 5 and 2, or 4 and 3) trigger Lucky 7 when none of your tokens are on the open track.',
      '6 and 6 is not allowed.',
      'You can use the wish on any turn, but only once. A player who uses it early wastes it. A wise player keeps it for the turn that wins the match or stops the winner, such as a capture on the leader or getting the last token onto the coloured home path.'
    ]
  },
  {
    id: 'the-endgame',
    number: '6.12',
    title: 'The endgame',
    content: [],
    bulletPoints: [
      'You win with all four tokens on your coloured home path. You do not need the centre.',
      'Your last tokens on the open track are your only weak points. Use star squares as stops where you can.',
      'The centre home gives an extra turn but needs an exact roll, so do not waste turns chasing it.',
      'Keep checking for compulsory captures. A penalty near the end can cost a token’s whole journey.',
      'The match ends the moment someone wins. If you cannot win, stopping the leader is worth more than a small gain in your own race.',
      'If you can neither win nor stop the leader, your progress percentage decides your ranking, so keep your tokens moving.'
    ]
  },
  {
    id: 'choosing-turn-timer',
    number: '6.13',
    title: 'Choosing a turn timer',
    content: [
      'The room host chooses the timer. When it is on and your time runs out, your turn passes to the next player.'
    ],
    bulletPoints: [
      '60 seconds: fast pace.',
      '90 seconds: a middle setting.',
      '120 seconds: more time to think.',
      'Off: a relaxed game.'
    ]
  },
  {
    id: 'common-mistakes',
    number: '6.14',
    title: 'Common mistakes',
    content: [],
    bulletPoints: [
      'Forgetting to check for captures.',
      'Leaving a lone token close in front of an opponent’s token when a safe option exists.',
      'Using the Lucky Wish too early.',
      'Ignoring the leader until it is too late.',
      'Emptying the open track for Lucky 7 and losing more than you gain.',
      'Parking a pair where two opponent tokens can both reach it.'
    ]
  },
  {
    id: 'quick-decision-guide',
    number: '6.15',
    title: 'Quick decision guide',
    content: [],
    bulletPoints: [
      'Can I capture? Then I must.',
      'Do I have several captures to choose from? Take the leader’s token.',
      'Is one of my tokens close in front of an opponent’s token? Move it to safety or onto a star square.',
      'Is someone close to winning? Hunt their tokens on the open track.',
      'Are none of my tokens on the open track? A total of 7 will count as 6+6.'
    ]
  },
  {
    id: 'think-t20-not-test',
    number: '6.16',
    title: 'Think T20, not Test',
    content: [
      'A Test match runs until everyone has finished. This game is a T20: it ends the moment someone wins. That changes how you play. Do not wait for a perfect position. Once a rival gets close, every turn should be about stopping them, because there is nothing left to play for after they win. And if you cannot win, your progress percentage decides your rank.'
    ]
  }
];
