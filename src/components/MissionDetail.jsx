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

// A downloadable file. Rendered in the strip under the header, and also
// inside a step, so a skill can sit where it is actually used.
function ArtifactCard({ artifact }) {
  const [copied, setCopied] = useState(false);
  const isText = /\.(md|txt)$/.test(artifact.filename);

  const download = () => {
    const link = document.createElement('a');
    link.href = artifact.downloadPath;
    link.download = artifact.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Servers send .md as text/markdown and browsers download that rather than
  // rendering it, so open a text/plain blob instead. Then VIEW actually views.
  const view = async () => {
    try {
      const res = await fetch(artifact.downloadPath);
      const url = URL.createObjectURL(new Blob([await res.text()], { type: 'text/plain' }));
      window.open(url, '_blank', 'noopener,noreferrer');
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch {
      window.open(artifact.downloadPath, '_blank', 'noopener,noreferrer');
    }
  };

  // Skills go two ways: attached as a file in Copilot or Gemini, or pasted
  // into Gemini Notebook's Studio pencil, which takes text and not files.
  const copy = async () => {
    try {
      const res = await fetch(artifact.downloadPath);
      await navigator.clipboard.writeText(await res.text());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(artifact.downloadPath, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="mission-artifact">
      <div className="mission-artifact__info">
        <span className="mission-artifact__label">
          {artifact.label || 'EXERCISE MATERIALS'}
        </span>
        <span className="mission-artifact__name">{artifact.filename}</span>
        {artifact.note && (
          <span className="mission-artifact__note">{artifact.note}</span>
        )}
      </div>
      <div className="mission-artifact__actions">
        <button type="button" className="btn-artifact" onClick={download}>
          DOWNLOAD
        </button>
        {/* COPY is opt-in: only the house style skill needs it, because Studio's
            pencil takes pasted text and not files. Everything else is attached. */}
        {isText && artifact.copyable && (
          <button type="button" className="btn-artifact btn-artifact--ghost" onClick={copy}>
            {copied ? 'COPIED ✓' : 'COPY'}
          </button>
        )}
        {isText ? (
          <button type="button" className="btn-artifact btn-artifact--ghost" onClick={view}>
            VIEW IN BROWSER
          </button>
        ) : (
          <a
            className="btn-artifact btn-artifact--ghost"
            href={artifact.downloadPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW IN BROWSER
          </a>
        )}
      </div>
    </div>
  );
}

// A step can carry one picture (Exercise 02 works from a supplied image).
// src is relative to the site root; BASE keeps it right under /part2/.
function StepFigure({ image }) {
  return (
    <figure className="mission-step__figure">
      <img src={`${BASE}${image.src}`} alt={image.alt} loading="lazy" />
      {image.caption && (
        <figcaption className="mission-step__caption">{image.caption}</figcaption>
      )}
    </figure>
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
          {step.image && <StepFigure image={step.image} />}
          {step.artifact && <ArtifactCard artifact={step.artifact} />}
          {step.prompt && <PromptBox prompt={step.prompt} label={step.promptLabel} note={step.promptNote} />}
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
      {step.body && <p className="mission-step__body">{step.body}</p>}
      {laneNotes.map((note, i) => (
        <p key={i} className="mission-step__lane-note">{note}</p>
      ))}
      {step.image && <StepFigure image={step.image} />}
      {step.artifact && <ArtifactCard artifact={step.artifact} />}
      {step.type === 'sort' && <SortGame items={step.items} />}
      {step.prompt && <PromptBox prompt={step.prompt} label={step.promptLabel} note={step.promptNote} />}
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

  return (
    <section className="mission-detail">
      <a href="#/" className="mission-detail__back">← ALL EXERCISES</a>

      <header className="mission-detail__header">
        <p className="eyebrow">{mission.code ? `EXERCISE ${mission.code}` : 'USEFUL PROMPTS'}</p>
        <div className="mission-head-row">
          <div className="mission-head-row__text">
            <h2 className="mission-detail__title">{mission.pageTitle || mission.title}</h2>
          </div>
          {mission.toolInfo?.apps && <ToolCards apps={mission.toolInfo.apps} />}
        </div>
        {/* Goal first, then what the tool is. The brief is what they came for. */}
        <p className="mission-brief">{mission.brief}</p>
        {mission.toolInfo?.feature && (
          <p className="tool-strap">{mission.toolInfo.feature}</p>
        )}
      </header>

      {mission.workflow && <WorkflowStrip workflow={mission.workflow} />}

      {mission.artifacts?.map(artifact => (
        <ArtifactCard key={artifact.filename} artifact={artifact} />
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

      {/* The prompt library has no code, and is not a completable exercise. */}
      {mission.code && (
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
            EXERCISE COMPLETE
          </button>
        )}
        {showVerdict && (
          <div className="mission-verdict" role="status">
            <span className="mission-verdict__stamp">CLEARED</span>
            <blockquote className="mission-verdict__quote">
              &ldquo;{mission.verdict}&rdquo;
              <cite>— {mission.verdictBy || 'C. Gravitas'}</cite>
            </blockquote>
            <a href="#/" className="mission-verdict__next">BACK TO ALL EXERCISES →</a>
          </div>
        )}
      </div>
      )}
    </section>
  );
}
