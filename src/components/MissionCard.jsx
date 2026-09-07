import React from 'react';
import { motion } from 'framer-motion';

// One mission tile. The whole card is a real <button> that opens the mission;
// the artifact download lives in MissionDetail so the two actions never nest.
// A picker card is always the code, stage and summary panel. It used to swap
// that for a picture when the first artifact carried a `thumb`, left over from
// the escaperoom evidence gallery; adding a cover thumbnail to the plan on
// 2026-09-05 switched that dormant branch on and replaced the numerals on four
// cards. Thumbnails belong on the download card, not here.
export default function MissionCard({ mission, completed }) {
  const open = () => {
    window.location.hash = `#/${mission.id}`;
  };

  return (
    <motion.button
      type="button"
      className={`evidence-card mission-card ${completed ? 'mission-card--done' : ''}`}
      onClick={open}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      aria-label={`Open exercise ${mission.code}: ${mission.title}${completed ? ' (completed)' : ''}`}
    >
      <span className="mission-card__panel">
        <span className="mission-card__big-code">
          {mission.code}
          {mission.stage && <span className="mission-card__stage">{mission.stage}</span>}
        </span>
        <span className="mission-card__summary">{mission.summary}</span>
      </span>

      {mission.accentText && (
        <span className={`evidence-card__accent evidence-card__accent--${mission.accentType}`}>
          {mission.accentText}
        </span>
      )}

      {completed && <span className="mission-card__done-stamp">DONE</span>}

      {/* The number and the blue stage word name the card; the title still
          heads the exercise page and stays in the aria-label. Only the tools
          survive down here, because knowing you need Copilot before you click
          is the one thing that saves a wasted click. */}
      <span className="evidence-card__label mission-card__label">
        <span className="mission-card__meta">
          {mission.tools.join(` ${mission.toolsJoin || '+'} `)}
        </span>
      </span>
    </motion.button>
  );
}
