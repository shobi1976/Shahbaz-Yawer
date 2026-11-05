import React, { lazy } from 'react';
import { HeroSection } from '../components/HeroSection';
import { DeferredSection } from '../components/DeferredSection';
import { SEO } from '../components/SEO';
import { BackgroundMode, RuleCard } from '../types';

const RulesTeaser = lazy(() =>
  import('../components/RulesTeaser').then((m) => ({ default: m.RulesTeaser }))
);
const FeaturesHub = lazy(() =>
  import('../components/FeaturesHub').then((m) => ({ default: m.FeaturesHub }))
);
const ContentAndFaqSection = lazy(() =>
  import('../components/ContentAndFaqSection').then((m) => ({ default: m.ContentAndFaqSection }))
);

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
        title="Ludo Dethroned 5 Way &amp; 4 Way Two Dice | Official Strategy Game"
        description="Play Ludo Dethroned: The 5-Way &amp; 4-Way Two Dice strategy board game. Master anti-leader mechanics, dual-dice tactical split, and competitive warfare rules."
        canonicalPath="/"
      />

      <main className="relative z-10">
        {/* 1. Hero Section with Central Video & Surrounding 10-Card Dynamic Orbit Matrix */}
        <HeroSection
          onExitClick={onExitClick}
          onRuleJump={onRuleJump}
          bgMode={bgMode}
          hoveredColor={hoveredRuleColor}
          onHoverRule={onHoverRule}
          onSelectRule={onSelectRule}
        />

        {/* 2. The 12 Rules Teaser — Lazy-loaded & mounted near viewport */}
        <DeferredSection id="rules-section" minHeightClass="min-h-[340px]">
          <RulesTeaser />
        </DeferredSection>

        {/* 3. Cyber Lounges, Social, Voice & Synth Soundtrack Hub — Lazy-loaded & mounted near viewport */}
        <DeferredSection id="features-hub" minHeightClass="min-h-[420px]">
          <FeaturesHub />
        </DeferredSection>

        {/* 4. Global Compendium, Essay & FAQ Teasers — Lazy-loaded & mounted near viewport */}
        <DeferredSection id="faq-section" minHeightClass="min-h-[540px]">
          <ContentAndFaqSection />
        </DeferredSection>
      </main>
    </>
  );
};
