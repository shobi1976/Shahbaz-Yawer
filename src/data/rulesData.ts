import { RuleCard } from '../types';

export const RULES_DATA: RuleCard[] = [
  {
    id: 1,
    title: 'Five Player Chaos',
    subtitle: 'Pentagonal Battlefield of Non-Stop Carnage',
    accentColorName: 'Neon Cyan',
    hex: '#00f3ff',
    glowHex: 'rgba(0, 243, 255, 0.45)',
    iconName: 'Users',
    category: 'Chaos & Core',
    shortDesc: 'Forget boring 4-corner boards. 5 distinct factions clash around an interlocking pentagonal matrix.',
    fullDesc: 'Unlike traditional 4-way Ludo boards that leave predictable safe quadrants, the 5-Way Emperor layout introduces asymmetrical collision lanes where 5 players (Blue, Orange, Green, Red, and Yellow) enter the central battlefield. Choke points multiply by 250%, creating non-stop captures and thrilling reversals.',
    tacticalTip: 'Keep at least one pawn in the outer lane to intercept incoming players exiting from their base tunnels.',
    antiLeaderMechanic: 'With 5 players, four players can naturally flank a runaway frontrunner from adjacent lanes.',
    highlightDetails: {
      ruleNumber: 'RULE 01',
      keyMetric: '5 Simultaneous Armies',
      impactLevel: 'Extreme',
      unlockCondition: 'Active in all 5-Way matches'
    },
    faqs: [
      {
        question: 'How does an odd number of players (5 players) change board balance?',
        answer: 'Odd-number geometry completely eliminates bilateral symmetry and predictable 90-degree corners. With five wings meeting at 72-degree angles, safe-zone camping becomes impossible because attacks converge continuously from two flanking directions.'
      },
      {
        question: 'Are there dead zones or passive sectors on the 5-way board?',
        answer: 'None. Every sector connects directly to shared orbital perimeter cells, ensuring every player remains within striking distance of both the frontrunner and oncoming challengers.'
      }
    ]
  },
  {
    id: 2,
    title: 'The Anti-Leader Alliance',
    subtitle: 'Don\'t Let the Winner Win the Game!',
    accentColorName: 'Neon Magenta',
    hex: '#ff007f',
    glowHex: 'rgba(255, 0, 127, 0.45)',
    iconName: 'ShieldAlert',
    category: 'Combat & Powers',
    shortDesc: 'The game crowns the leading player with an Emperor Target, uniting the trailing 4 players into a temporary hit-squad.',
    fullDesc: 'The core philosophy of Ludo Emperor 5 Way is "DON\'T LET THE WINNER WIN THE MATCH". The moment any player surges ahead on the global progress bar, their pawns glow with the Leader Target mark.\n\nAll four trailing players receive alliance bonuses and strategic visual crosshairs to intercept and send the leader back to base. Society never envies the laggard, but when someone climbs toward the throne, all four rivals unite with blood in their eyes to pull the frontrunner back into the mud.',
    tacticalTip: 'If you are in 2nd place, coordinate with 3rd, 4th, and 5th place to strike down the leader before taking the crown yourself.',
    antiLeaderMechanic: 'Capturing a Leader\'s pawn awards bonus rolls and unlocks immediate Lucky 7 dice triggers.',
    highlightDetails: {
      ruleNumber: 'RULE 02',
      keyMetric: '4v1 Cooperative Hunting',
      impactLevel: 'Extreme',
      unlockCondition: 'Auto-activates when one player leads the race'
    },
    faqs: [
      {
        question: 'What triggers the Anti-Leader Alliance in the game engine?',
        answer: 'The system algorithm getMatchLeader() continuously calculates pawn progress. The moment any player takes the #1 ranking or moves two pawns into their home stretch, their tokens are marked with an Emperor Target, activating alliance bonuses for the trailing four.'
      },
      {
        question: 'Is "Don\'t Let the Winner Win" unfair to the skilled player?',
        answer: 'Not at all. A game that hands an early leader an unchallenged victory is merely a coronation. In Ludo Emperor 5 Way, true champions must prove their mastery under the coordinated pressure of four rivals, turning every endgame into heart-pounding drama.'
      },
      {
        question: 'What bounty rewards do trailing players receive for capturing the leader?',
        answer: 'Intercepting a leader\'s pawn grants the captor an immediate free bonus roll, audio fanfare recognition, and higher frequency Lucky 7 triggers on their subsequent turns.'
      }
    ]
  },
  {
    id: 3,
    title: '2 Dies (How to Use)',
    subtitle: 'Split Moves, Stack Distances, or Double Strike',
    accentColorName: 'Neon Green',
    hex: '#00ff66',
    glowHex: 'rgba(0, 255, 102, 0.45)',
    iconName: 'Dices',
    category: 'Chaos & Core',
    shortDesc: 'Roll 2 dice every turn. Choose which die applies to which pawn, or combine both onto a single juggernaut piece.',
    fullDesc: 'Traditional Ludo relies on a single die. In Ludo Emperor 5 Way, you roll two dice simultaneously (e.g., rolling a [1] and [5] or [6] and [6]). You can execute a tactical split move by advancing one pawn 1 step to land on a star safe-zone, and another pawn 5 steps to capture an opponent.',
    tacticalTip: 'Always evaluate if splitting dice secures a capture while keeping your trailing pawn on a star safe cell.',
    antiLeaderMechanic: 'Dual dice allow precision maneuvering to land exactly on the leader\'s pawn without overshooting.',
    highlightDetails: {
      ruleNumber: 'RULE 03',
      keyMetric: '2x Simultaneous Tactical Freedom',
      impactLevel: 'High',
      unlockCondition: 'Default core rolling engine'
    },
    faqs: [
      {
        question: 'Can I allocate both dice to the exact same pawn on my turn?',
        answer: 'Yes. You can combine both numbers (e.g. rolling 5 and 3 allows one pawn to advance the full 8 steps), or split the 5 to one piece and the 3 to another.'
      },
      {
        question: 'If one die value cannot legally move, can I still use the other?',
        answer: 'Yes. The dice engine allows you to play any valid die independently. If only one die has a valid move, you apply that die and forfeit only the unplayable value.'
      }
    ]
  },
  {
    id: 4,
    title: 'Lucky 7 (When to Apply & How)',
    subtitle: 'Roll a Sum of 7 for an Instant 6-6 Boost & Extra Turn',
    accentColorName: 'Neon Yellow',
    hex: '#ffff00',
    glowHex: 'rgba(255, 255, 0, 0.45)',
    iconName: 'Sparkles',
    category: 'Combat & Powers',
    shortDesc: 'Roll any combination totaling 7 (4+3, 5+2, 6+1) to instantly trigger a massive 6-6 boost with a free extra turn!',
    fullDesc: 'The Rule of Lucky 7: In world folklore, 7 is the golden mystic number. When your two dice combine to sum 7 (such as 4+3, 5+2, or 6+1), a royal chime echoes across the board. The roll instantly converts to a double-six (6+6 = 12 steps) plus an immediate free bonus turn!\n\nThis mathematical weapon allows trailing players to deploy trapped pawns rapidly and stage dramatic comebacks from behind.',
    tacticalTip: 'A sum of 7 occurs with 16.67% statistical probability on two dice (1 in every 6 rolls). Count on it to stage game-winning leaps.',
    antiLeaderMechanic: 'Allows trapped trailing players to spawn reinforcements and catch runaway leaders without waiting for rare single-die sixes.',
    highlightDetails: {
      ruleNumber: 'RULE 04',
      keyMetric: 'Sum = 7 Converts to 6+6 + Extra Turn',
      impactLevel: 'High',
      unlockCondition: 'Roll any combination summing to 7'
    },
    faqs: [
      {
        question: 'Which dice combinations trigger the Lucky 7 Bonus?',
        answer: 'Any pairing that equals 7: [4+3], [3+4], [5+2], [2+5], [6+1], or [1+6]. All immediately activate the double-six (12 steps) boost and free roll.'
      },
      {
        question: 'Does Lucky 7 award a free extra turn in addition to the 12 steps?',
        answer: 'Yes! You execute the full 12-step movement (split or combined) and immediately roll again, keeping momentum on your side.'
      }
    ]
  },
  {
    id: 5,
    title: 'Penalized Rule: Missed Capture',
    subtitle: 'Forfeiting Available Captures Sends Your Pawn Back to Base',
    accentColorName: 'Neon Red',
    hex: '#ff1a1a',
    glowHex: 'rgba(255, 26, 26, 0.45)',
    iconName: 'AlertTriangle',
    category: 'Metrics & Timers',
    shortDesc: 'If a player forgets or fails to capture an opponent\'s pawn when the opportunity is available, that specific pawn is penalized and sent back to the home base.',
    fullDesc: 'Missed Capture Penalty (Cowardice Fee): Mandatory aggression is strictly enforced in the 5-way arena. If a player\'s dice roll provides a valid opportunity to capture an opponent\'s pawn and the player forgets or fails to execute the capture, that specific pawn is immediately penalized and sent directly back to the home base.\n\nMercy is treason in war. Always scan the board carefully before confirming your move to ensure you never miss an available capture opportunity.',
    tacticalTip: 'Prioritize checking all available capture pathways before moving another piece to prevent your pawn from being penalized and reset to base.',
    antiLeaderMechanic: 'Prevents players from colluding with or sparing the Leader; failing to capture the leader results in instant pawn execution.',
    highlightDetails: {
      ruleNumber: 'RULE 05',
      keyMetric: 'Missed Capture = Send Back to Base',
      impactLevel: 'Extreme',
      unlockCondition: 'Failing or forgetting an available capture'
    },
    faqs: [
      {
        question: 'Why does the board punish a missed capture so severely?',
        answer: 'To enforce tactical vigilance like chess. In Ludo Emperor 5 Way, soft play and lazy oversight are unacceptable. If you refuse to take an available enemy pawn, your neglect costs you your own piece.'
      },
      {
        question: 'Does the penalty apply if capturing requires using both dice combined?',
        answer: 'Yes. If any legal combination of your current dice roll allows an enemy capture, the system expects you to execute it. Sparing the enemy triggers the penalty.'
      }
    ]
  },
  {
    id: 6,
    title: 'AI Players (Feel Like Family)',
    subtitle: 'Adaptive Personalities with Real Human Quirks',
    accentColorName: 'Neon Orange',
    hex: '#ff7700',
    glowHex: 'rgba(255, 119, 0, 0.45)',
    iconName: 'Bot',
    category: 'Social & Voice',
    shortDesc: 'Our custom neural AI opponents (Mughal, Naveed, Nazim, Anees, Shahbaz) joke, taunt, and show emotional banter.',
    fullDesc: 'No cold robotic bots here. Every AI bot mimics the emotional cadence, banter, and playing habits of real family game nights. They send voice audio ("Big numbers coming!", "My turn to shine!"), drop angry emojis when captured, and even celebrate when pulling off a miraculous double-six.',
    tacticalTip: 'Observe bot personality profiles: Mughal plays ultra-aggressive while Nazim calculates safe star-camping strategies.',
    antiLeaderMechanic: 'AI bots automatically recognize player ranking and join human players to target whoever is winning.',
    highlightDetails: {
      ruleNumber: 'RULE 06',
      keyMetric: '5 Distinct Dynamic Neural Personas',
      impactLevel: 'Psychological',
      unlockCondition: 'Auto-fills empty slots in quick matches'
    },
    faqs: [
      {
        question: 'Do AI bots target each other or only human players?',
        answer: 'AI bots play strictly by objective ranking. If another bot is in 1st place, all other bots attack that leading bot with full ferocity. They never cheat or gang up unfairly on humans.'
      },
      {
        question: 'Can I mute or customize bot voice taunts during matches?',
        answer: 'Yes. Sound controls on the top header allow you to mute audio taunts instantly or adjust game frequencies with a single tap.'
      }
    ]
  },
  {
    id: 7,
    title: 'Voice Message Interactions and Emojis',
    subtitle: 'Instant Audio Banter & Expressive Reactions',
    accentColorName: 'Neon Pink',
    hex: '#ff1493',
    glowHex: 'rgba(255, 20, 147, 0.45)',
    iconName: 'Mic',
    category: 'Social & Voice',
    shortDesc: 'Send instant audio voice quips and animated 3D neon emojis during live turns to shake your rivals\' nerves.',
    fullDesc: 'Bring the living room atmosphere online. With single-tap voice buttons, trigger authentic spoken voice lines ("Your turn!", "Big numbers coming!", "Watch your back!") and broadcast glowing neon reaction emojis (Thumbs up 👍, Fire 🔥, Cry 😂, Crossbones ☠️) directly onto the board.',
    tacticalTip: 'Send a quick voice cheer right before your opponent rolls to apply psychological pressure.',
    antiLeaderMechanic: 'Alliance members can trigger synchronized siren voice alerts when hunting the leader.',
    highlightDetails: {
      ruleNumber: 'RULE 07',
      keyMetric: 'Instant Voice Clips + Animated Emojis',
      impactLevel: 'Psychological',
      unlockCondition: 'Enabled in all lobby modes'
    },
    faqs: [
      {
        question: 'How do I trigger an audio voice clip during a match?',
        answer: 'Tap any player\'s nameplate on the battlefield or use the quick audio tray on the status bar to broadcast banter to all four opponents.'
      },
      {
        question: 'Are custom emojis visible in real time to all five players?',
        answer: 'Yes. Emojis float and burst above your faction corner with glowing particle effects, visible instantly on desktop and mobile screens.'
      }
    ]
  },
  {
    id: 8,
    title: 'A Room Environment for Online Friends',
    subtitle: 'Private Lounges with Custom Rules & Passcodes',
    accentColorName: 'Neon Teal',
    hex: '#00e5cc',
    glowHex: 'rgba(0, 229, 204, 0.45)',
    iconName: 'DoorOpen',
    category: 'Social & Voice',
    shortDesc: 'Create private glowing 5-seat game lounges with custom dice timers, music themes, and invite passcodes.',
    fullDesc: 'Host your family and friends in dedicated cyberpunk rooms. Hosts can customize the Emperor Clock duration (30s to 120s), enable or disable Lucky 7 modifiers, set custom stakes, and choose ambient neon lighting schemes for the entire room.',
    tacticalTip: 'Set the Emperor Clock to 45 seconds for rapid-fire adrenaline parties.',
    antiLeaderMechanic: 'Room hosts can toggle "Hardcore Anti-Leader" mode where capturing the leader grants instant cash bounties.',
    highlightDetails: {
      ruleNumber: 'RULE 08',
      keyMetric: '5-Seat Private Cyber Lounges',
      impactLevel: 'Tactical',
      unlockCondition: 'Available anytime via [Create Room]'
    },
    faqs: [
      {
        question: 'How many players can join a private lounge?',
        answer: 'Exactly 5 players fit in an official Emperor room. If fewer than 5 friends join, empty seats can be filled with custom AI family bots with one tap.'
      },
      {
        question: 'Do my friends need to download an app or register an account?',
        answer: 'No. They simply open the URL in any mobile or desktop web browser and enter your 4-digit room code to jump straight onto the board.'
      }
    ]
  },
  {
    id: 9,
    title: 'A Tournament Coming Soon',
    subtitle: 'Global 5-Way Emperor Championship Ladder',
    accentColorName: 'Neon Purple',
    hex: '#9933ff',
    glowHex: 'rgba(153, 51, 255, 0.45)',
    iconName: 'Trophy',
    category: 'Metrics & Timers',
    shortDesc: 'Compete in tiered 5-player bracket knockouts with real-time spectator arenas and seasonal Emperor trophies.',
    fullDesc: 'The Emperor Championship puts 500+ players into multi-round 5-way knockout matches. Only the final survivor of each table advances to the Grand Arena. Spectators can watch live games, vote on potential leaders, and send neon cheer fireworks.',
    tacticalTip: 'In tournament play, survival and defensive safe-zone camping takes precedence over aggressive early strikes.',
    antiLeaderMechanic: 'Leader bounties accumulate across tournament rounds into massive point multipliers.',
    highlightDetails: {
      ruleNumber: 'RULE 09',
      keyMetric: 'Tiered 5-Way Knockout Brackets',
      impactLevel: 'Extreme',
      unlockCondition: 'Seasonal Open Tournaments'
    },
    faqs: [
      {
        question: 'How do 5-player tournament brackets work?',
        answer: 'Tables of 5 play single-elimination rounds. The sole winner who reaches Home first advances to the next echelon until the 5-commander Grand Final.'
      },
      {
        question: 'Can spectators interact with live tournament matches?',
        answer: 'Yes. Spectators can view live telemetry, bet prediction tokens, and trigger celebration fireworks on stunning captures.'
      }
    ]
  },
  {
    id: 10,
    title: 'Music Find in the Game & Custom Library',
    subtitle: 'Dynamic Synthwave Audio Engine & Music Finder',
    accentColorName: 'Neon Mint',
    hex: '#00ffaa',
    glowHex: 'rgba(0, 255, 170, 0.45)',
    iconName: 'Music',
    category: 'Social & Voice',
    shortDesc: 'Immerse yourself in 8 custom synthwave tracks with responsive game-event audio that shifts with the battle tempo.',
    fullDesc: 'Ludo Emperor 5 Way features an integrated sound station. As the match reaches its climax and leaders approach Home, the background beat intensifies from chill ambient lo-fi into high-octane synthwave bass drops. Players can shuffle, favorite, and customize their personal game soundtrack.',
    tacticalTip: 'Listen for audio sound cues that warn when an enemy is within 7 steps of your exposed pawn.',
    antiLeaderMechanic: 'Dramatic heavy bass drops ignite whenever an Anti-Leader alliance capture is executed.',
    highlightDetails: {
      ruleNumber: 'RULE 10',
      keyMetric: '8 Adaptive Synthwave OST Tracks',
      impactLevel: 'Psychological',
      unlockCondition: 'Interactive Sound Deck built into UI'
    },
    faqs: [
      {
        question: 'Does the music react dynamically to in-game danger?',
        answer: 'Yes. When an opponent moves within striking range of your piece, the synth bass layer intensifies to alert your reflexes.'
      },
      {
        question: 'Can I pick and skip specific soundtrack tracks?',
        answer: 'Yes. The Cyber Lounge tab includes a full track player where you can pause, skip, and preview individual synth stems.'
      }
    ]
  },
  {
    id: 11,
    title: 'A Wish (The Secret 2-Number Power)',
    subtitle: 'Tactical Custom Roll Power (Sum of 12 / 6+6 Restricted)',
    accentColorName: 'Neon Lime',
    hex: '#a6ff00',
    glowHex: 'rgba(166, 255, 0, 0.45)',
    iconName: 'Wand2',
    category: 'Combat & Powers',
    shortDesc: 'Once per match, conjure specific tactical dice combinations (like escaping corners or landing precise safe tiles), with a total sum of 12 (6+6) excluded to maintain balance.',
    fullDesc: 'The "Wish" mechanic grants each warrior a single divine intervention per match to conjure specific tactical dice pairings onto the board (such as landing precisely on a safe star or escaping a multi-opponent crossroad).\n\nBalance Restriction: A player cannot wish for a total sum of 12 (6+6). The 12 (6+6) outcome is strictly restricted and excluded from the valid custom wish pool to prevent game-breaking double-six exploits and preserve competitive balance. Once spent, your Wish cannot be recharged.',
    tacticalTip: 'Target key tactical sums like [6, 5], [6, 1], or [5, 2] to land on safe stars or navigate tight bottlenecks—remember that double 6 (12) is forbidden in the wish pool.',
    antiLeaderMechanic: 'Allows trailing players to conjure exact tactical numbers to ambush leaders or reach safe zones without relying on blind dice luck.',
    highlightDetails: {
      ruleNumber: 'RULE 11',
      keyMetric: '1x Tactical Wish (6+6 Prohibited)',
      impactLevel: 'Extreme',
      unlockCondition: '1x per match (Sum of 12 / 6+6 Excluded)'
    },
    faqs: [
      {
        question: 'Why is a double-six (6+6 = 12) restricted from the Wish power?',
        answer: 'To preserve competitive integrity. A guaranteed 6+6 wish would grant an automatic extra turn and unearned escape; excluding 6+6 ensures the power remains a tactical nudge rather than an unfair exploit.'
      },
      {
        question: 'When is the most optimal moment to invoke the Lucky Wish?',
        answer: 'Save your wish for the decisive turning point: either when you need an exact number to eliminate the leader\'s final exposed pawn or to slip your own piece onto a safe star haven.'
      }
    ]
  },
  {
    id: 12,
    title: 'Victory Condition',
    subtitle: 'Crown of the Five Realms: First to Home all 4 Pawns',
    accentColorName: 'Neon Gold',
    hex: '#ffd700',
    glowHex: 'rgba(255, 215, 0, 0.45)',
    iconName: 'Crown',
    category: 'Chaos & Core',
    shortDesc: 'Navigate all 4 pawns through the 5-way gauntlet and cross into the central Emperor Home Sanctum.',
    fullDesc: 'To claim the Emperor Crown, a player must successfully guide all 4 colored pawns around the pentagonal orbit and ascend into their matching color triangle at the central Home hub. Exact rolls are required to enter the final triangle.',
    tacticalTip: 'Do not rush all pieces at once; create buddy shields where one pawn covers the rear of another.',
    antiLeaderMechanic: 'The final pawn requires surviving the concentrated crosshairs of all other 4 players.',
    highlightDetails: {
      ruleNumber: 'RULE 12',
      keyMetric: '4 Pawns to Central Home',
      impactLevel: 'Extreme',
      unlockCondition: 'Complete the full 5-way circuit'
    },
    faqs: [
      {
        question: 'Do all 4 pawns need to reach home for the match to end?',
        answer: 'Yes. The round continues relentlessly until one player successfully escorts all 4 pawns into their central home triangle. The first player to finish is the sole victor.'
      },
      {
        question: 'Do you need an exact roll to enter the final Home triangle?',
        answer: 'Yes. Exact steps are required to cross the victory threshold. Excess pips must be absorbed by an active companion pawn or discarded.'
      }
    ]
  },
  {
    id: 13,
    title: 'Emperor Clock & Turn Forfeiture',
    subtitle: 'Dynamic Speed Timers & Instant Turn Forfeiture',
    accentColorName: 'Neon Sky Blue',
    hex: '#00bfff',
    glowHex: 'rgba(0, 191, 255, 0.45)',
    iconName: 'Clock',
    category: 'Metrics & Timers',
    shortDesc: 'If a player fails to take their turn within the allotted time window, their turn is forfeited, instantly skipped, and passed to the next opponent in the rotation.',
    fullDesc: 'Emperor Clock & Turn Forfeiture: Fast-paced action is strictly enforced. The Emperor Clock displays at the top-left of the board with a live countdown window (90s / 60s / 30s).\n\nIf a player fails to take their turn within the allotted time window, their turn is forfeited, instantly skipped, and passed to the next opponent in the rotation.',
    tacticalTip: 'Pre-calculate your intended moves while your rivals are rolling to avoid timing out and having your turn forfeited and skipped.',
    antiLeaderMechanic: 'Prevents runaway leaders or stalling players from holding up game momentum.',
    highlightDetails: {
      ruleNumber: 'RULE 13',
      keyMetric: 'Timeout = Turn Forfeited & Skipped',
      impactLevel: 'Tactical',
      unlockCondition: 'Active on every player\'s turn'
    },
    faqs: [
      {
        question: 'What happens if a player runs out of time on their turn?',
        answer: 'The turn is immediately forfeited and passed to the next commander in rotation without rolling or moving any pieces.'
      },
      {
        question: 'Can the clock duration be adjusted in custom matches?',
        answer: 'Yes. Custom room hosts can select from 30 seconds (blitz mode), 60 seconds (standard), or 90 seconds (tactical).'
      }
    ]
  },
  {
    id: 14,
    title: 'Progress Bar (Keep an Eye on Who is Winning)',
    subtitle: 'Real-Time Telemetry on Every Player\'s Path to Victory',
    accentColorName: 'Neon Lime-Green',
    hex: '#76ff03',
    glowHex: 'rgba(118, 255, 3, 0.45)',
    iconName: 'Activity',
    category: 'Metrics & Timers',
    shortDesc: 'Live top-right HUD monitors percentage distance to Home for Mughal, Naveed, Nazim, Anees, and Shahbaz.',
    fullDesc: 'Never lose track of the battlefield. The top-right HUD continuously computes the total steps walked, safe-zone residency, and remaining distance to Home for all 5 combatants (e.g. Mughal: 8%, Naveed: 10%, Nazim: 10%). This telemetry makes leader identification instant and transparent.',
    tacticalTip: 'Monitor the Progress Bar after every round to immediately spot stealth leaders creeping up the board.',
    antiLeaderMechanic: 'Automatically triggers visual target reticles on whoever holds the highest progress percentage.',
    highlightDetails: {
      ruleNumber: 'RULE 14',
      keyMetric: 'Live 5-Player Distance Analytics',
      impactLevel: 'Tactical',
      unlockCondition: 'Always visible in top HUD'
    },
    faqs: [
      {
        question: 'How is the progress percentage calculated?',
        answer: 'The system computes the cumulative steps taken by all four pawns relative to the total required steps to reach the central home sanctum.'
      },
      {
        question: 'Does the progress bar decrease if a pawn is captured?',
        answer: 'Yes! When a pawn is sent back to base, the player\'s progress percentage drops immediately, dynamically updating table rankings.'
      }
    ]
  },
  {
    id: 15,
    title: 'Ranking Bar',
    subtitle: 'Dynamic Live Standings & Anti-Leader Target Hierarchy',
    accentColorName: 'Neon Amber',
    hex: '#ffaa00',
    glowHex: 'rgba(255, 170, 0, 0.45)',
    iconName: 'BarChart3',
    category: 'Metrics & Timers',
    shortDesc: 'Rankings shift in real time with every dice roll, capture, and base entry, updating the 1st through 5th ladder.',
    fullDesc: 'The Ranking Bar visualizes the entire hierarchy. As pawns are captured and sent back to base, ranks flip instantly. The 1st place player takes the Emperor Throne badge, while 2nd through 5th receive Alliance badges, giving all players an instant overview of who to team up against.',
    tacticalTip: 'Intentionally staying in 2nd place until the final stretch allows you to avoid the 1st place Alliance Bounty.',
    antiLeaderMechanic: 'Provides clear tactical priority: focus all attacks on the #1 ranked Emperor Throne holder.',
    highlightDetails: {
      ruleNumber: 'RULE 15',
      keyMetric: 'Real-Time 1st to 5th Place Ladder',
      impactLevel: 'Tactical',
      unlockCondition: 'Dynamic real-time calculation'
    },
    faqs: [
      {
        question: 'What is the strategic value of tracking the Ranking Bar?',
        answer: 'It reveals stealth leaders and lets you coordinate with other trailing players to hunt whoever currently holds the 1st place Emperor Throne.'
      },
      {
        question: 'Can the 5th place player realistically overtake the 1st place leader?',
        answer: 'Yes. Because trailing players receive Lucky 7 boosts and 4v1 hunt bonuses, a single coordinated strike can reset the leader and propel the 5th place commander into 1st.'
      }
    ]
  },
  {
    id: 16,
    title: 'Full Interaction',
    subtitle: 'Haptic Cues, 3D Board Tilt, Sound & Neon Feedback',
    accentColorName: 'Neon Blue',
    hex: '#0066ff',
    glowHex: 'rgba(0, 102, 255, 0.45)',
    iconName: 'Zap',
    category: 'Social & Voice',
    shortDesc: 'Every tap, hover, dice tumble, and pawn leap produces satisfying haptic pulses, neon sparks, and sound feedback.',
    fullDesc: 'Ludo Emperor 5 Way is designed for maximum tactile immersion. Interactive hover spotlights, board rotation perspective toggles, pulsating safe-star nodes, particle celebrations, and rich synth sounds ensure every interaction feels alive and electrifying.',
    tacticalTip: 'Use the 3D board perspective toggle to inspect congested intersection choke points from different angles.',
    antiLeaderMechanic: 'Leader captures trigger board-wide neon shockwaves and victory particle bursts.',
    highlightDetails: {
      ruleNumber: 'RULE 16',
      keyMetric: 'Full Tactile & Visual Feedback Suite',
      impactLevel: 'Psychological',
      unlockCondition: 'Embedded across all UI & gameplay'
    },
    faqs: [
      {
        question: 'Does the game support haptic feedback on mobile phones?',
        answer: 'Yes. On supported mobile browsers, pawn captures, dice rolls, and Lucky 7 activations trigger distinct physical vibration pulses.'
      },
      {
        question: 'Can I rotate the pentagonal board to view my faction corner up-close?',
        answer: 'Yes. Use the perspective orbit controls at the bottom of the board to rotate the 5 wings smoothly in 3D space.'
      }
    ]
  }
];
