import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { RulesTeaser } from '../components/RulesTeaser';
import { FeaturesHub } from '../components/FeaturesHub';
import { ContentAndFaqSection } from '../components/ContentAndFaqSection';
import { SEO } from '../components/SEO';
import { BackgroundMode, RuleCard } from '../types';

interface HomePageProps {
  bgMode: BackgroundMode;
  hoveredRuleColor: string | null;
  onHoverRule: (color: string | null) => void;
  onSelectRule: (rule: RuleCard) => void;
  onExitClick: () => void;
  onRuleJump: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  bgMode,
  hoveredRuleColor,
  onHoverRule,
  onSelectRule,
  onExitClick,
  onRuleJump,
}) => {
  return (
    <>
      <SEO
        title="Ludo Dethroned 5 Way & 4 Way Two Dice | Official 3D Ludo-style strategy game"
        description="Ludo Dethroned 5 Way & 4 Way Two Dice is a 3D Ludo-style strategy game with two dice, 5 Way & 4 Way matrix, Lucky 7, pairs, and compulsory missed capture penalty."
        canonicalPath="/"
      />

      <main className="relative z-10">
        {/* 1. Hero Section with Central Video & Surrounding 12-Card Dynamic Orbit Matrix */}
        <HeroSection
          onExitClick={onExitClick}
          onRuleJump={onRuleJump}
          bgMode={bgMode}
          hoveredColor={hoveredRuleColor}
          onHoverRule={onHoverRule}
          onSelectRule={onSelectRule}
        />

        {/* 2. The 12 Rules Teaser (with normal link to /rules) */}
        <RulesTeaser />

        {/* 3. Cyber Lounges, Social, Voice & Synth Soundtrack Hub */}
        <FeaturesHub />

        {/* 4. How to Play, Strategy, FAQ Teasers & Global Compendium */}
        <ContentAndFaqSection />
      </main>
    </>
  );
};
