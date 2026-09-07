import React from 'react';
import MissionCard from './MissionCard.jsx';
import { MISSIONS, HERO_IMAGE } from '../data/missions.js';

const BASE = import.meta.env.BASE_URL;

export default function MissionGallery({ progress }) {
  // Bonus exercises are optional: listed in their own strip under the cards,
  // and not counted, so "n of 6" stays true to the day's six.
  const main = MISSIONS.filter(m => !m.bonus);
  const bonus = MISSIONS.filter(m => m.bonus);
  const completedCount = main.filter(m => progress[m.id]).length;

  return (
    <section className="evidence-section">
      <div className="intro-row">
        <div className="directive">
          <div className="directive__top">
            <span className="directive__label">WHY YOU&rsquo;RE HERE</span>
          </div>
          <p className="directive__text">
            I&rsquo;m Chris, your new line manager. I got a new job as Sustainability
            Engagement Officer, and the Sustainable Futures policy landed on my desk in
            week one, so I have volunteered our team to work out what we actually do about
            it. Remember Responsible AI: this is your work, and AI is your assistant.
          </p>
          <span className="directive__sig">— Chris Gravitas, Sustainability Engagement Officer (and your new line manager, apparently)</span>
        </div>
        <img
          className="intro-row__image"
          src={`${BASE}${HERO_IMAGE}`}
          alt="Cartoon in the style of an 8-bit ZX Spectrum game: a grinning manager in a striped suit holds out a document titled Sustainable Futures across an otherwise empty desk to an alarmed colleague in a green hoodie clutching a laptop. A whiteboard behind them reads STAFF BRIEFING, a Welsh dragon pennant hangs on the desk, and the clock says five to twelve."
        />
      </div>

      <div className="evidence-section__header">
        <h1 className="evidence-section__title">BUILD THE STAFF BRIEFING PACK</h1>
        {completedCount === main.length ? (
          <p className="mission-progress-line mission-progress-line--done">
            All {main.length} complete. &ldquo;The briefing pack exists. The real
            work is making this how the team works every week.&rdquo; &mdash; C.G.
          </p>
        ) : (
          <p className="mission-progress-line">
            {completedCount} of {main.length} exercises complete
          </p>
        )}
      </div>

      <div className="evidence-grid mission-grid">
        {main.map(mission => (
          <MissionCard
            key={mission.id}
            mission={mission}
            completed={Boolean(progress[mission.id])}
          />
        ))}
      </div>

      {/* A slim full-width card, the slot the old prompt-library strip used.
          Deliberately not a MissionCard: no numeral, no tick, sits under the
          grid rather than in it. */}
      {bonus.map(m => (
        <button
          key={m.id}
          type="button"
          className="bonus-strip"
          onClick={() => { window.location.hash = '#/' + m.id; }}
        >
          <span className="bonus-strip__label">Bonus Exercise:</span>
          <span className="bonus-strip__line">{m.summary}</span>
        </button>
      ))}

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
