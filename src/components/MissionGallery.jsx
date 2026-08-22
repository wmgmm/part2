import React from 'react';
import MissionCard from './MissionCard.jsx';
import { MISSIONS, HERO_IMAGE } from '../data/missions.js';

const BASE = import.meta.env.BASE_URL;

export default function MissionGallery({ player, progress }) {
  const completedCount = MISSIONS.filter(m => progress[m.id]).length;

  return (
    <section className="evidence-section">
      <div className="intro-row">
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
        <img
          className="intro-row__image"
          src={`${BASE}${HERO_IMAGE}`}
          alt="Cartoon of the campus Welsh cake stall: two founders at the griddle under a dragon canopy, a sign reading Campus Welsh Cakes £2, AI-powered?, and a student consulting an AI business plan on a tablet"
        />
      </div>

      <div className="evidence-section__header">
        <h2 className="evidence-section__title">BUILD A BUSINESS WITH AI AS YOUR ASSISTANT</h2>
        {completedCount === MISSIONS.length ? (
          <p className="mission-progress-line mission-progress-line--done">
            All {MISSIONS.length} complete. &ldquo;The stall is in better hands than mine,
            which the stall and I both suspected.&rdquo; &mdash; C.G.
          </p>
        ) : (
          <p className="mission-progress-line">
            {completedCount} of {MISSIONS.length} missions complete
          </p>
        )}
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
