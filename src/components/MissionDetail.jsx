import React, { useState } from 'react';
import PromptBox from './PromptBox.jsx';
import SortGame from './SortGame.jsx';

function Step({ step, number, lane }) {
  const laneNote = step.laneNotes?.[lane];
  return (
    <li className={`mission-step ${step.check ? 'mission-step--check' : ''}`}>
      <div className="mission-step__head">
        <span className="mission-step__num">{step.check ? '✓' : number}</span>
        <h4 className="mission-step__title">{step.title}</h4>
        <span className="mission-step__est">~{step.estMinutes} min</span>
      </div>
      <p className="mission-step__body">{step.body}</p>
      {laneNote && <p className="mission-step__lane-note">{laneNote}</p>}
      {step.type === 'sort' && <SortGame items={step.items} />}
      {step.prompt && <PromptBox prompt={step.prompt} />}
    </li>
  );
}

export default function MissionDetail({ mission, lane, completed, onComplete }) {
  const [justCompleted, setJustCompleted] = useState(false);
  const core = mission.steps.filter(s => s.tier === 'core');
  const stretch = mission.steps.filter(s => s.tier === 'stretch');
  const showVerdict = completed || justCompleted;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = mission.artifact.downloadPath;
    link.download = mission.artifact.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="mission-detail">
      <a href="#/" className="mission-detail__back">← ALL MISSIONS</a>

      <header className="mission-detail__header">
        <span className="evidence-card__id">
          MISSION {mission.code} · LEVEL {mission.level} · {mission.tools.join(' + ')}
        </span>
        <h2 className="mission-detail__title">{mission.title}</h2>
      </header>

      <div className="directive">
        <div className="directive__top">
          <span className="directive__label">BRIEFING</span>
        </div>
        <p className="directive__text">{mission.brief}</p>
      </div>

      {mission.artifact && (
        <div className="mission-artifact">
          <div className="mission-artifact__info">
            <span className="mission-artifact__label">MISSION MATERIALS</span>
            <span className="mission-artifact__name">{mission.artifact.filename}</span>
            {mission.artifact.note && (
              <span className="mission-artifact__note">{mission.artifact.note}</span>
            )}
          </div>
          <div className="mission-artifact__actions">
            <button type="button" className="btn-artifact" onClick={handleDownload}>
              DOWNLOAD
            </button>
            <a
              className="btn-artifact btn-artifact--ghost"
              href={mission.artifact.downloadPath}
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW IN BROWSER
            </a>
          </div>
        </div>
      )}
      {!mission.artifact && mission.artifactPending && (
        <p className="mission-artifact__pending">{mission.artifactPending}</p>
      )}

      <h3 className="mission-detail__section">TODAY&rsquo;S PATH <span>~{mission.estMinutesCore} min</span></h3>
      <ol className="mission-steps">
        {core.map((step, i) => (
          <Step key={i} step={step} number={i + 1} lane={lane} />
        ))}
      </ol>

      {stretch.length > 0 && (
        <>
          <h3 className="mission-detail__section mission-detail__section--stretch">
            TAKE HOME <span>when you want more</span>
          </h3>
          <ol className="mission-steps mission-steps--stretch">
            {stretch.map((step, i) => (
              <Step key={i} step={step} number={core.length + i + 1} lane={lane} />
            ))}
          </ol>
        </>
      )}

      <div className="mission-detail__complete">
        {!showVerdict ? (
          <button
            type="button"
            className="btn-start btn-complete"
            onClick={() => {
              setJustCompleted(true);
              onComplete(mission.id);
            }}
          >
            MISSION COMPLETE: CHECK IN
          </button>
        ) : (
          <div className="mission-verdict" role="status">
            <span className="mission-verdict__stamp">CLEARED</span>
            <blockquote className="mission-verdict__quote">
              &ldquo;{mission.verdict}&rdquo;
              <cite>— C. Gravitas</cite>
            </blockquote>
            <a href="#/" className="mission-verdict__next">NEXT MISSION →</a>
          </div>
        )}
      </div>
    </section>
  );
}
