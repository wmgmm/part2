import React, { useState, useEffect } from 'react';
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
// A step body can carry {name} tokens that render as small inline images from
// step.bodyIcons, for controls the reader must find (a Download button). A
// token with no icon renders as its own text, so nothing is ever lost.
// **like this** also renders bold, for the one word in a body that has to
// carry the weight. Nothing else in the body is parsed as markdown.
function renderBody(body, icons = {}) {
  return body.split(/(\{[a-z_]+\}|\*\*[^*]+\*\*)/i).map((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    const m = part.match(/^\{([a-z_]+)\}$/i);
    const icon = m && icons[m[1]];
    if (!icon) return part;
    return <img key={i} className="body-icon" src={`${BASE}${icon.src}`} alt={icon.alt} />;
  });
}

function SwapList({ examples }) {
  return (
    <ul className="step-backup__swaps">
      {examples.map(([from, to]) => (
        <li key={from}>
          <span className="swap-mark swap-mark--no" aria-hidden="true">&#10007;</span>
          <span className="sr-only">Instead of </span>
          <span className="swap-from">&ldquo;{from}&rdquo;</span>
          <span className="swap-mark swap-mark--yes" aria-hidden="true">&#10003;</span>
          <span className="sr-only">, write </span>
          &ldquo;{to}&rdquo;
        </li>
      ))}
    </ul>
  );
}

// A lettered sub-step (A, B, C) inside one numbered step: its own body,
// swaps, attach strip and prompt, so siblings line up down the left.
function StepPart({ part, icons }) {
  return (
    <li className="step-part">
      <span className="step-part__num" aria-hidden="true">{part.letter}</span>
      <span className="sr-only">Part {part.letter}. </span>
      <div className="step-part__content">
        {part.body && <p className="mission-step__body">{renderBody(part.body, icons)}</p>}
        {part.examples && <SwapList examples={part.examples} />}
        {(part.attach || part.attachExtra) && (
          <AttachStrip items={part.attach} label={part.attachLabel} extra={part.attachExtra} />
        )}
        {part.prompt && <PromptBox prompt={part.prompt} label={part.promptLabel} note={part.promptNote} />}
      </div>
    </li>
  );
}

function ArtifactCard({ artifact }) {
  const [copied, setCopied] = useState(false);
  const isText = /\.(md|txt)$/.test(artifact.filename);
  // Prefetched so COPY can write to the clipboard inside the click itself:
  // Safari refuses a clipboard write that follows an await.
  const [text, setText] = useState(null);
  useEffect(() => {
    if (!isText || !artifact.copyable) return undefined;
    let live = true;
    fetch(artifact.downloadPath)
      .then(r => r.text())
      .then(t => { if (live) setText(t); })
      .catch(() => {});
    return () => { live = false; };
  }, [artifact.downloadPath, artifact.copyable, isText]);
  // An .html artifact is a working page, not a document, so opening it is the
  // point and saving it is the fallback: the two buttons swap roles below.
  const isPage = /\.html$/.test(artifact.filename);
  // A browser renders text, PDFs and HTML; it downloads everything else. On an
  // .xlsx a VIEW button just repeats DOWNLOAD under a different name, so it is hidden.
  const canView = isText || isPage || /\.pdf$/.test(artifact.filename);

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
    // Open the tab inside the click, before any await: Safari and Firefox
    // treat a window.open that follows a fetch as a popup and block it silently.
    const w = window.open('', '_blank');
    if (!w) {
      download();
      return;
    }
    w.opener = null;
    try {
      const res = await fetch(artifact.downloadPath);
      const url = URL.createObjectURL(new Blob([await res.text()], { type: 'text/plain' }));
      w.location = url;
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch {
      w.location = artifact.downloadPath;
    }
  };

  // Skills go two ways: attached as a file in Copilot or Gemini, or pasted
  // into Gemini Notebook's Slide Deck description box, which takes text not files.
  const copy = async () => {
    try {
      const body = text ?? (await (await fetch(artifact.downloadPath)).text());
      await navigator.clipboard.writeText(body);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      view();
    }
  };

  return (
    <div className="mission-artifact">
      {/* Decorative: alt is empty because the label and filename beside it
          already say what the file is. */}
      {artifact.thumb && (
        <img
          className="mission-artifact__thumb"
          src={`${BASE}${artifact.thumb}`}
          alt=""
          loading="lazy"
        />
      )}
      <div className="mission-artifact__info">
        <span className="mission-artifact__label">
          {artifact.label || 'EXERCISE MATERIALS'}
        </span>
        <span className="mission-artifact__name">{artifact.filename}</span>
        {artifact.note && (
          <span className="mission-artifact__note">{artifact.note}</span>
        )}
        {/* Deliberately a text link, not a fourth button: it is the fallback
            route, and the card keeps one obvious primary action.
            NOTE: no artifact sets `sourceLink` at present. Kept because it has
            been wanted twice and is opt-in, so it renders nothing unless a card
            asks for it. If you add the field back, grep `sourceLink` first. */}
        {artifact.sourceLink && (
          <a
            className="mission-artifact__source"
            href={artifact.sourceLink.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {artifact.sourceLink.label} ↗
          </a>
        )}
      </div>
      <div className="mission-artifact__actions">
        {/* Served as text/html and same-origin, so a plain link renders it. */}
        {isPage && (
          <a
            className="btn-artifact"
            href={artifact.downloadPath}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${artifact.filename} in a new tab`}
          >
            OPEN IT
          </a>
        )}
        {/* openOnly: a page that is meant to be played, not kept. */}
        {!artifact.openOnly && (
          <button
            type="button"
            className={`btn-artifact${isPage ? ' btn-artifact--ghost' : ''}`}
            onClick={download}
            aria-label={`Download ${artifact.filename}`}
          >
            DOWNLOAD
          </button>
        )}
        {/* COPY is opt-in: only the brand skill needs it, because Studio's
            description box takes pasted text, not files. Everything else is attached. */}
        {isText && artifact.copyable && (
          <button
            type="button"
            className="btn-artifact btn-artifact--ghost"
            onClick={copy}
            aria-label={`Copy ${artifact.filename} to the clipboard`}
          >
            {copied ? 'COPIED ✓' : 'COPY'}
          </button>
        )}
        {isText && (
          <button
            type="button"
            className="btn-artifact btn-artifact--ghost"
            onClick={view}
            aria-label={`View ${artifact.filename} in a new tab`}
          >
            VIEW IN BROWSER
          </button>
        )}
        {canView && !isText && !isPage && (
          <a
            className="btn-artifact btn-artifact--ghost"
            href={artifact.downloadPath}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${artifact.filename} in a new tab`}
          >
            VIEW IN BROWSER
          </a>
        )}
        <span className="sr-only" role="status">
          {copied ? `${artifact.filename} copied to the clipboard` : ''}
        </span>
      </div>
    </div>
  );
}

// The files that go in the chat box, shown as themselves. At Exercise 04's
// attach step the question in the room is "which two?", and a picture of the
// two answers it faster than a sentence does. Not a download: the cards above
// are for that, this is a reminder of what to pick up.
function AttachStrip({ items = [], label, extra }) {
  const clip = (
    <span className="attach-strip__clip" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
           strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
      </svg>
    </span>
  );
  // A custom label names what happens BEFORE attaching, so it leads and the
  // paperclip follows it: new chat, then the paperclip, then the files. A
  // default label ("ATTACH BOTH") is itself the attach instruction, so the
  // clip stays in front of it.
  const labelFirst = Boolean(label) && items.length > 0;
  // A pasted prompt is not an attachment, so a strip of nothing but pastes
  // shows no paperclip. One real file in the list brings it back.
  const clipNeeded = items.some(a => !a.paste);

  return (
    <div className="attach-strip">
      {!labelFirst && clipNeeded && clip}
      <span className="attach-strip__label">
        {label || (items.length === 1 ? 'ATTACH THIS' : items.length === 2 ? 'ATTACH BOTH' : 'ATTACH ALL')}
      </span>
      {labelFirst && clipNeeded && clip}
      {items.map((a, i) => (
        <React.Fragment key={a.filename}>
          {i > 0 && <span className="attach-strip__plus" aria-hidden="true">+</span>}
          <span className="attach-strip__item">
            {a.thumb && <img src={`${BASE}${a.thumb}`} alt="" loading="lazy" />}
            <span className="attach-strip__name">{a.filename}</span>
          </span>
        </React.Fragment>
      ))}
      {/* A control rather than a file: Exercise 06 needs Canvas switched on in
          the same chat, so the strip shows the button they are looking for. */}
      {extra && (
        <>
          {items.length > 0 && <span className="attach-strip__then">then enable</span>}
          <img className="attach-strip__control" src={`${BASE}${extra.src}`} alt={extra.alt} />
        </>
      )}
    </div>
  );
}

// A step can carry one picture (Exercise 02 works from a supplied image).
// src is relative to the site root; BASE keeps it right under /part2/.
// image.ui marks a screenshot of a control, which needs the full column width
// to stay readable rather than the 460px a photo is fine at.
function StepFigure({ image }) {
  return (
    <figure className={`mission-step__figure${image.ui ? ' mission-step__figure--ui' : ''}`}>
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
          {step.body && <p className="mission-step__body">{renderBody(step.body, step.bodyIcons)}</p>}
          {step.image && <StepFigure image={step.image} />}
          {(step.attach || step.attachExtra) && (
        <AttachStrip items={step.attach} label={step.attachLabel} extra={step.attachExtra} />
      )}
          {step.artifact && [].concat(step.artifact).map(a => <ArtifactCard key={a.filename} artifact={a} />)}
          {step.prompt && <PromptBox prompt={step.prompt} label={step.promptLabel} note={step.promptNote} emphasis={step.promptEmphasis} />}
          {step.backup && (
            <div className="step-backup">
              <span className="step-backup__label">{step.backup.label || 'Backup'}</span>
              <p className="step-backup__text">{renderBody(step.backup.text, step.bodyIcons)}</p>
              {step.backup.examples && (
                <SwapList examples={step.backup.examples} />
              )}
              {step.backup.after && (
                <p className="step-backup__after">{renderBody(step.backup.after, step.bodyIcons)}</p>
              )}
              {step.backup.attach && (
                <AttachStrip items={step.backup.attach} label={step.backup.attachLabel} extra={step.backup.attachExtra} />
              )}
              {step.backup.prompt && (
                <PromptBox prompt={step.backup.prompt} label={step.backup.promptLabel} />
              )}
            </div>
          )}
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
      {step.body && <p className="mission-step__body">{renderBody(step.body, step.bodyIcons)}</p>}
      {laneNotes.map((note, i) => (
        <p key={i} className="mission-step__lane-note">{note}</p>
      ))}
      {step.parts && (
        <ol className="step-parts">
          {step.parts.map(part => <StepPart key={part.letter} part={part} icons={step.bodyIcons} />)}
        </ol>
      )}
      {step.image && <StepFigure image={step.image} />}
      {(step.attach || step.attachExtra) && (
        <AttachStrip items={step.attach} label={step.attachLabel} extra={step.attachExtra} />
      )}
      {step.type === 'sort' && <SortGame items={step.items} />}
      {/* Prompt before the skill card, so the prompt always sits directly under
          the body as it does on every other exercise. */}
      {step.prompt && <PromptBox prompt={step.prompt} label={step.promptLabel} note={step.promptNote} emphasis={step.promptEmphasis} />}
      {/* A fallback route when the main one misbehaves. Sits under the prompt,
          quiet, so the main instruction stays the main instruction. */}
      {step.backup && (
            <div className="step-backup">
              <span className="step-backup__label">{step.backup.label || 'Backup'}</span>
              <p className="step-backup__text">{renderBody(step.backup.text, step.bodyIcons)}</p>
              {step.backup.examples && (
                <SwapList examples={step.backup.examples} />
              )}
              {step.backup.after && (
                <p className="step-backup__after">{renderBody(step.backup.after, step.bodyIcons)}</p>
              )}
              {step.backup.attach && (
                <AttachStrip items={step.backup.attach} label={step.backup.attachLabel} extra={step.backup.attachExtra} />
              )}
              {step.backup.prompt && (
                <PromptBox prompt={step.backup.prompt} label={step.backup.promptLabel} />
              )}
            </div>
          )}
      {step.artifact && [].concat(step.artifact).map(a => <ArtifactCard key={a.filename} artifact={a} />)}
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
      <header className="mission-detail__header">
        <p className="eyebrow">
          {mission.bonus ? 'BONUS EXERCISE' : mission.code ? `EXERCISE ${mission.code}` : 'USEFUL PROMPTS'}
        </p>
        <div className="mission-head-row">
          <div className="mission-head-row__text">
            <h1 className="mission-detail__title">{mission.pageTitle || mission.title}</h1>
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
          <ol className="mission-steps" role="list">
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
          <ol className="mission-steps mission-steps--stretch" role="list">
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
            <a href="#/" className="mission-verdict__next">All exercises →</a>
          </div>
        )}
      </div>
      )}
    </section>
  );
}
