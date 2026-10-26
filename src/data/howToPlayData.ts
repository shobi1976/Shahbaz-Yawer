import { TutorialSlide } from '../types';

export const TUTORIAL_SLIDES: TutorialSlide[] = [
  {
    number: 1,
    title: 'The Goal',
    content: 'The first player to get all four of their tokens onto their coloured home path wins. A token does not need to reach the centre home. A token that reaches the centre home also counts. Matches can include AI opponents.',
    example: 'Think of it as a T20 match rather than a Test match: the match is over as soon as someone wins.'
  },
  {
    number: 2,
    title: 'Two Dice',
    content: 'On your turn you roll two dice. You can use both dice on one token, which moves the total of the two dice, or use one die on each of two different tokens. If you have no legal move, your turn passes to the next player. Tokens and turns travel clockwise.',
    example: 'Example: You roll 3 and 4. You can move one token 7 squares, or move one token 3 squares and another token 4 squares.'
  },
  {
    number: 3,
    title: 'Sixes and Leaving Base',
    content: 'All four of your tokens start in base. A single 6 brings a token out of base onto the open track. You do not need a double 6. Tokens in base are safe. Rolling a 6 also gives you an extra turn, and there is no limit on how many extra turns you can earn in a row.',
    example: 'Example: You roll 6 and 2. The 6 brings a token out, the 2 moves another token, and you roll again.'
  },
  {
    number: 4,
    title: 'Capturing and the Reroll',
    content: 'If your token lands on a square where a single opponent token stands on the open track, that token is captured and returns to its base. A capture can be made with one die or with the total of both dice. Every capture gives the capturing player a reroll.',
    example: 'Example: You roll 5 and 2. You use the 5 to capture an opponent 5 squares ahead, and you roll again.'
  },
  {
    number: 5,
    title: 'Safe Places and Pairs',
    content: 'A token cannot be captured when it is on a star square, on its coloured home path or in base. Star squares are safe for every player. Two tokens of the same colour on the same square form a pair. A single token landing on a pair does not capture it. To capture a pair, two of your tokens must land on that square together, one with each die.',
    example: 'Pairs can be split freely, and a pair on a star square is always safe.'
  },
  {
    number: 6,
    title: 'The Missed Capture Penalty',
    content: 'Capturing is compulsory. If one of your tokens could capture an opponent’s token on the open track and you finish your move without capturing, that token is sent back to its base. When each die can make a different capture, you must make both captures.',
    example: 'Example: If a 4 can capture an opponent but you use the 4 on another token, the capturing token goes back to base.'
  },
  {
    number: 7,
    title: 'Lucky 7 and the Lucky Wish',
    content: 'Lucky 7: If none of your tokens are on the open track, a roll that totals 7 counts as 6+6 and gives you an extra turn. Two tokens can come out together. Lucky Wish: Before the match, choose two numbers (not 6 and 6). Once per match on any turn, use the Golden Star to roll exactly those numbers.',
    example: 'If your wish numbers total 7 and no tokens are on the open track, it also triggers Lucky 7.'
  },
  {
    number: 8,
    title: 'Centre Home Bonus & Turn Timer',
    content: 'Moving a token into the centre home needs an exact roll and gives you an extra turn, but is not needed to win. The room host sets the turn timer: 60, 90 or 120 seconds, or off. When the timer runs out, your turn passes to the next player.',
    example: 'Extra turns come from: rolling a 6, a capture, entering centre home, and Lucky 7.'
  },
  {
    number: 9,
    title: 'How the Match Ends',
    content: 'The match ends as soon as a player wins by getting all four tokens onto their coloured home path. The other players are ranked by the progress percentage shown on the progress bar. Once a winner is decided there is nothing left to play for, so every other player aims to win or to stop the winner.',
    example: 'Watch the leader! Trailing players must focus on stopping the leader before the match ends.'
  }
];
