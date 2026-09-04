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
            Hey {player.name}, I&rsquo;m Chris, your new line manager. Sustainable Futures
            landed on my desk in week one, and I have volunteered our team to work out what
            we actually do about it. Remember Responsible AI: this is your work, and AI is
            your assistant.
          </p>
          <span className="directive__sig">— Chris Gravitas, Sustainability Engagement Officer (and your line manager, apparently)</span>
        </div>
        <img
          className="intro-row__image"
          src={`${BASE}${HERO_IMAGE}`}
          alt="Cartoon of The Matts at a campus stall under a dragon canopy, handing university policy documents to a staff member holding a tablet"
        />
      </div>

      <div className="evidence-section__header">
        <h2 className="evidence-section__title">BUILD THE STAFF TRAINING</h2>
        {completedCount === MISSIONS.length ? (
          <p className="mission-progress-line mission-progress-line--done">
            All {MISSIONS.length} complete. &ldquo;The briefing pack exists. The real
            work is making this how the team works every week.&rdquo; &mdash; C.G.
          </p>
        ) : (
          <p className="mission-progress-line">
            {completedCount} of {MISSIONS.length} exercises complete
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

      <button
        type="button"
        className="library-strip"
        onClick={() => { window.location.hash = '#/prompts'; }}
      >
        <span className="library-strip__label">USEFUL PROMPTS (FOR AFTER THE WORKSHOP) →</span>
        <span className="library-strip__line">Today&rsquo;s prompts with the sustainability plan stripped out: steal them, swap the [brackets].</span>
      </button>

      <div className="governance-callout governance-callout--discreet">
        <p>
          <strong>✓ At Cardiff University:</strong> Gemini and Gemini Notebook (until
          recently NotebookLM) are approved for
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
