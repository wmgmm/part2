import React from 'react';
import { motion } from 'framer-motion';

// One mission tile. The whole card is a real <button> that opens the mission;
// the artifact download lives in MissionDetail so the two actions never nest.
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
      {mission.artifacts?.[0]?.thumb ? (
        <div className="evidence-card__image">
          <img src={mission.artifacts[0].thumb} alt="" draggable={false} />
        </div>
      ) : (
        <div className="mission-card__panel">
          <span className="mission-card__big-code">
            {mission.code}
            {mission.stage && <span className="mission-card__stage">{mission.stage}</span>}
          </span>
          <span className="mission-card__summary">{mission.summary}</span>
        </div>
      )}

      {mission.accentText && (
        <div className={`evidence-card__accent evidence-card__accent--${mission.accentType}`}>
          {mission.accentText}
        </div>
      )}

      {completed && <div className="mission-card__done-stamp">DONE</div>}

      <div className="evidence-card__label mission-card__label">
        <span className="evidence-card__id">EXERCISE {mission.code}</span>
        <span className="evidence-card__name">{mission.title}</span>
        <span className="mission-card__meta">{mission.tools.join(' + ')}</span>
      </div>
    </motion.button>
  );
}
