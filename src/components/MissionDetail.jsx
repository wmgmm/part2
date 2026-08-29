import React, { useState } from 'react';
import PromptBox from './PromptBox.jsx';
import SortGame from './SortGame.jsx';

const BASE = import.meta.env.BASE_URL;

// google.html "copilot-card" pattern: click-to-open tool cards + sign-in note.
function ToolCards({ apps }) {
  const notes = [...new Set(apps.map(a => a.note))];
  return (
    <div className="tool-cards">
      <div className="tool-cards__row">
        {apps.map(app => (
          <a
            key={app.name}
            className="tool-card"
            href={app.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {app.logo && (
              <img className="tool-card__logo" src={`${BASE}logos/${app.logo}`} alt="" />
            )}
            <span className="tool-card__text">
              <span className="tool-card__label">Click to open {app.name}</span>
              <span className="tool-card__url" style={{ color: app.colour }}>
                {app.urlLabel}&nbsp;↗
              </span>
            </span>
          </a>
        ))}
      </div>
      <p className="tool-cards__note">{notes.join(' · ')}</p>
    </div>
  );
}

// google.html "quick-start" pattern: the mission workflow at a glance.
function WorkflowStrip({ workflow }) {
  return (
    <div className="workflow">
      <p className="workflow__label">WORKFLOW</p>
      <div className="quick-start">
        {workflow.map((label, i) => (
          <div className="quick-step" key={i}>
            <span className="step-badge">{i + 1}</span> {label}
          </div>
        ))}
      </div>
    </div>
  );
}

// Collapsed accordion row for a choice path: letter, title, tool chip, hook.
function ChoiceStep({ step }) {
  return (
    <li className="mission-step mission-step--path">
      <details className="path-acc">
        <summary className="path-acc__summary">
          <span className="mission-step__num">{step.choice || '+'}</span>
          <span className="path-acc__title">{step.title}</span>
          {step.toolChip && <span className="path-chip">{step.toolChip}</span>}
          <span className="path-acc__chevron" aria-hidden="true">▾</span>
        </summary>
        <div className="path-acc__content">
          {step.hook && <p className="path-acc__hook">{step.hook}</p>}
          {step.body && <p className="mission-step__body">{step.body}</p>}
          {step.prompt && <PromptBox prompt={step.prompt} label={step.promptLabel} />}
          {step.link && (
            <a
              className="mission-step__link"
              href={step.link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {step.link.label} ↗
            </a>
          )}
        </div>
      </details>
    </li>
  );
}

function Step({ step, number, lane }) {
  const badge = step.choice || number;
  // With no licence question at login, show every lane note that exists.
  const laneNotes = step.laneNotes
    ? (lane && step.laneNotes[lane] ? [step.laneNotes[lane]] : Object.values(step.laneNotes))
    : [];
  return (
    <li className={`mission-step ${step.check ? 'mission-step--check' : ''}`}>
      <div className="mission-step__head">
        <span className="mission-step__num">{step.check ? '✓' : badge}</span>
        <h4 className="mission-step__title">{step.title}</h4>
      </div>
      <p className="mission-step__body">{step.body}</p>
      {laneNotes.map((note, i) => (
        <p key={i} className="mission-step__lane-note">{note}</p>
      ))}
      {step.type === 'sort' && <SortGame items={step.items} />}
      {step.prompt && <PromptBox prompt={step.prompt} label={step.promptLabel} />}
      {step.link && (
        <a
          className="mission-step__link"
          href={step.link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {step.link.label} ↗
        </a>
      )}
    </li>
  );
}

export default function MissionDetail({ mission, lane, completed, onComplete }) {
  const [justCompleted, setJustCompleted] = useState(false);
  const core = mission.steps.filter(s => s.tier === 'core');
  const stretch = mission.steps.filter(s => s.tier === 'stretch');
  const showVerdict = completed || justCompleted;

  const handleDownload = artifact => {
    const link = document.createElement('a');
    link.href = artifact.downloadPath;
    link.download = artifact.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="mission-detail">
      <a href="#/" className="mission-detail__back">← ALL MISSIONS</a>

      <header className="mission-detail__header">
        <p className="eyebrow">{mission.code ? `MISSION ${mission.code}` : 'THE PROMPT LIBRARY'}</p>
        <div className="mission-head-row">
          <div className="mission-head-row__text">
            <h2 className="mission-detail__title">{mission.pageTitle || mission.title}</h2>
          </div>
          {mission.toolInfo?.apps && <ToolCards apps={mission.toolInfo.apps} />}
        </div>
        {mission.toolInfo?.feature && (
          <p className="tool-strap">{mission.toolInfo.feature}</p>
        )}
        <p className="mission-brief">{mission.brief}</p>
      </header>

      {mission.workflow && <WorkflowStrip workflow={mission.workflow} />}

      {mission.artifacts?.map(artifact => (
        <div className="mission-artifact" key={artifact.filename}>
          <div className="mission-artifact__info">
            <span className="mission-artifact__label">
              {artifact.label || 'MISSION MATERIALS'}
            </span>
            <span className="mission-artifact__name">{artifact.filename}</span>
            {artifact.note && (
              <span className="mission-artifact__note">{artifact.note}</span>
            )}
          </div>
          <div className="mission-artifact__actions">
            <button
              type="button"
              className="btn-artifact"
              onClick={() => handleDownload(artifact)}
            >
              DOWNLOAD
            </button>
            <a
              className="btn-artifact btn-artifact--ghost"
              href={artifact.downloadPath}
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW IN BROWSER
            </a>
          </div>
        </div>
      ))}

      {core.length > 0 && (
        <>
          <h3 className="mission-detail__section">INSTRUCTIONS</h3>
          <ol className="mission-steps">
            {core.map((step, i) => (
              <Step key={i} step={step} number={i + 1} lane={lane} />
            ))}
          </ol>
        </>
      )}

      {stretch.length > 0 && (
        <>
          <h3 className="mission-detail__section mission-detail__section--stretch">
            {mission.stretchTitle || 'HINTS AND TIPS (OPTIONAL)'}
          </h3>
          {mission.stretchIntro && (
            <p className="mission-brief">{mission.stretchIntro}</p>
          )}
          <ol className="mission-steps mission-steps--stretch">
            {(() => {
              // Number only the plain steps; lettered/collapsed rows carry no number.
              let n = core.length;
              return stretch.map((step, i) =>
                step.choice || step.collapsed ? (
                  <ChoiceStep key={i} step={step} />
                ) : (
                  <Step key={i} step={step} number={(n += 1)} lane={lane} />
                )
              );
            })()}
          </ol>
        </>
      )}

      <div className="mission-detail__complete">
        {!showVerdict && (
          <button
            type="button"
            className="btn-start btn-complete"
            onClick={() => {
              setJustCompleted(true);
              onComplete(mission.id, {});
            }}
          >
            MISSION COMPLETE
          </button>
        )}
        {showVerdict && (
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
