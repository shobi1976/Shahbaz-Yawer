export interface RuleCard {
  id: number;
  title: string;
  subtitle: string;
  accentColorName: string;
  hex: string;
  glowHex: string;
  iconName: string;
  category: 'Chaos & Core' | 'Combat & Powers' | 'Social & Voice' | 'Metrics & Timers';
  shortDesc: string;
  fullDesc: string;
  tacticalTip: string;
  antiLeaderMechanic: string;
  highlightDetails: {
    ruleNumber: string;
    keyMetric: string;
    impactLevel: 'Extreme' | 'High' | 'Tactical' | 'Psychological';
    unlockCondition: string;
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface PlayerState {
  id: number;
  name: string;
  colorName: string;
  hex: string;
  pawnsHome: number;
  pawnsActive: number;
  pawnsBase: number;
  progressPercent: number;
  isLeader: boolean;
  score: number;
  isAI: boolean;
  avatar: string;
  statusMessage?: string;
  emoji?: string;
}

export type BackgroundMode = 'flaming-dice' | 'neon-glow' | 'monochrome-cursor-reveal' | 'dark-minimal';
export type CursorMode = 'neon-die' | 'neon-trail' | 'off';
