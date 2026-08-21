import React from 'react';
import MissionCard from './MissionCard.jsx';
import { MISSIONS } from '../data/missions.js';

export default function MissionGallery({ player, progress }) {
  const completedCount = MISSIONS.filter(m => progress[m.id]).length;

  return (
    <section className="evidence-section">
      <div className="directive">
        <div className="directive__top">
          <span className="directive__label">WHY YOU&rsquo;RE HERE</span>
        </div>
        <p className="directive__text">
          Hey {player.name}, welcome. The premise: I have left IT Services to open a Welsh
          cake stall on campus (flour, butter, sugar, currants: the only supply chain I
          still trust), and you are going to help me build the business using AI. I have
          the recipe and I have the griddle. How hard can the rest possibly be?
        </p>
        <span className="directive__sig">— Christopher Gravitas, Founder, Chief Executive and only employee</span>
      </div>

      <div className="evidence-section__header">
        <h2 className="evidence-section__title">BUILD A BUSINESS WITH AI AS YOUR ASSISTANT</h2>
        <p className="mission-progress-line">
          {completedCount} of {MISSIONS.length} missions complete
        </p>
      </div>

      <div className="evidence-grid mission-grid">
        {MISSIONS.map(mission => (
          <MissionCard
            key={mission.id}
            mission={mission}
            completed={Boolean(progress[mission.id])}
          />
        ))}
      </div>

      <div className="governance-callout governance-callout--discreet">
        <p>
          <strong>✓ At Cardiff University:</strong> Gemini and NotebookLM are approved for
          confidential (C1/C2) data, but only when you sign in with your CU account
          (cardiff.ac.uk).
        </p>
        <p>
          <strong>• For other organisations:</strong> treat them as personal
          learning tools, stick to public, non-confidential work data.
        </p>
      </div>
    </section>
  );
}
