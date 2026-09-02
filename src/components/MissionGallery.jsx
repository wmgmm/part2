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
            Hey {player.name}, I&rsquo;m Chris, your new line manager. The university has
            moved me into the Sustainability Engagement job, and two documents landed on my
            desk in week one: a ten-year sustainability plan and an AI position statement.
            I have volunteered our team to work out what we actually do about them. Your
            job, over the exercises below: build the briefing pack, the bundle we send the
            rest of the team, an infographic that explains the plan, a slide deck, a
            working decision tool, all grounded in the two documents. Remember Responsible
            AI: this is your work, and AI is your assistant. One exercise at a time.
          </p>
          <span className="directive__sig">— Chris Gravitas, Sustainability Engagement Officer (and your line manager, apparently)</span>
        </div>
        <img
          className="intro-row__image"
          src={`${BASE}${HERO_IMAGE}`}
          alt="Cartoon of The Matts at a campus stall under a dragon canopy, handing out AI policy documents (Campus AI Position Statement, AI Use Policy, Ethical AI Guidelines) to a staff member holding a tablet, beside a sign reading Campus AI Policy Documents and Research"
        />
      </div>

      <div className="evidence-section__header">
        <h2 className="evidence-section__title">BUILD YOUR TEAM&rsquo;S BRIEFING PACK</h2>
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
        <span className="library-strip__line">The exercise prompts stripped generic: steal them, swap the [brackets].</span>
      </button>

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
