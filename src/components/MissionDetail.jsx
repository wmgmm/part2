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

function Step({ step, number, lane }) {
  // With no licence question at login, show every lane note that exists.
  const laneNotes = step.laneNotes
    ? (lane && step.laneNotes[lane] ? [step.laneNotes[lane]] : Object.values(step.laneNotes))
    : [];
  return (
    <li className={`mission-step ${step.check ? 'mission-step--check' : ''}`}>
      <div className="mission-step__head">
        <span className="mission-step__num">{step.check ? '✓' : number}</span>
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
  const [checkingIn, setCheckingIn] = useState(false);
  const [gotWrong, setGotWrong] = useState('');
  const [bestPrompt, setBestPrompt] = useState('');
  const [checkInError, setCheckInError] = useState('');
  const core = mission.steps.filter(s => s.tier === 'core');
  const stretch = mission.steps.filter(s => s.tier === 'stretch');
  const showVerdict = completed || justCompleted;

  const submitCheckIn = () => {
    if (!gotWrong.trim()) {
      setCheckInError('Even one small thing. Nobody has ever finished a mission where the AI was flawless.');
      return;
    }
    setJustCompleted(true);
    onComplete(mission.id, {
      gotWrong: gotWrong.trim(),
      bestPrompt: bestPrompt.trim(),
    });
  };

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
        <p className="eyebrow">MISSION {mission.code}</p>
        <div className="mission-head-row">
          <div className="mission-head-row__text">
            <h2 className="mission-detail__title">{mission.pageTitle || mission.title}</h2>
          </div>
          {mission.toolInfo?.apps && <ToolCards apps={mission.toolInfo.apps} />}
        </div>
        {mission.toolInfo?.feature && (
          <p className="tool-strap">{mission.toolInfo.feature}</p>
        )}
      </header>

      {mission.workflow && <WorkflowStrip workflow={mission.workflow} />}

      <div className="directive">
        <div className="directive__top">
          <span className="directive__label">BRIEFING</span>
        </div>
        <p className="directive__text">{mission.brief}</p>
      </div>

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

      <h3 className="mission-detail__section">TODAY&rsquo;S PATH</h3>
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
        {!showVerdict && !checkingIn && (
          <button
            type="button"
            className="btn-start btn-complete"
            onClick={() => setCheckingIn(true)}
          >
            MISSION COMPLETE: CHECK IN
          </button>
        )}
        {!showVerdict && checkingIn && (
          <div className="checkin">
            <p className="checkin__title">DEBRIEF</p>
            <label className="checkin__field">
              <span className="checkin__label">
                One thing the AI got wrong, or you had to fix
              </span>
              <textarea
                className="checkin__input"
                rows={2}
                value={gotWrong}
                onChange={e => { setGotWrong(e.target.value); setCheckInError(''); }}
                placeholder="e.g. It invented a deadline that was not in the transcript"
                aria-required="true"
                aria-invalid={checkInError ? 'true' : undefined}
              />
            </label>
            {checkInError && (
              <p className="checkin__error" role="alert">{checkInError}</p>
            )}
            <label className="checkin__field">
              <span className="checkin__label">
                Your best prompt of the mission <em>(optional, worth keeping)</em>
              </span>
              <textarea
                className="checkin__input"
                rows={2}
                value={bestPrompt}
                onChange={e => setBestPrompt(e.target.value)}
                placeholder="Paste the prompt that worked"
              />
            </label>
            <button type="button" className="btn-start btn-complete" onClick={submitCheckIn}>
              FILE THE DEBRIEF
            </button>
          </div>
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
