import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LANES } from '../data/missions.js';

export default function SplashScreen({ onStart }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lane, setLane] = useState('notSure');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = 'Please enter your name.';
    if (!email.trim()) e.email = 'Please enter your email.';
    return e;
  };

  const handleStart = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    onStart({ name: name.trim(), email: email.trim(), lane });
  };

  return (
    <div className="splash">
      <div className="splash-content">

        {/* Stamps row */}
        <div className="splash-hero">
          <div className="cover-brand-stamp cover-brand-stamp--main">THE MATTS PRESENT AN AI TRAINING DOSSIER</div>
          <div className="cover-brand-stamp cover-brand-stamp--uni">CARDIFF UNIVERSITY</div>
        </div>

        {/* Headline */}
        <h1 className="splash-headline">FIELD MISSIONS</h1>
        <p className="splash-deck">
          AI in the Workplace: Six Missions, Three Tools, Skills You Will Use on Monday
        </p>
        <p className="splash-byline">
          Training officer: <strong>Christopher Gravitas</strong>, IT Services
        </p>

        {/* 3-step instructions */}
        <ol className="splash-steps">
          <li className="splash-step">
            <span className="splash-step__num">1</span>
            <span className="splash-step__text">
              <strong>Open your tools</strong>:{' '}
              <a href="https://m365copilot.com/" target="_blank" rel="noopener noreferrer" className="splash-link">
                Copilot
              </a>,{' '}
              <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer" className="splash-link">
                Gemini
              </a>{' '}and{' '}
              <a href="https://notebooklm.google.com/" target="_blank" rel="noopener noreferrer" className="splash-link">
                NotebookLM
              </a>{' '}
              <em>(sign in with your university account where you can).</em>
            </span>
          </li>
          <li className="splash-step">
            <span className="splash-step__num">2</span>
            <span className="splash-step__text">
              <strong>Pick a mission</strong> and download its materials. Every file is fictional and safe to upload.
            </span>
          </li>
          <li className="splash-step">
            <span className="splash-step__num">3</span>
            <span className="splash-step__text">
              <strong>Work the steps</strong>, check in when done, and collect the verdict. No timer, no failure state.
            </span>
          </li>
        </ol>

        {/* Name + Email */}
        <div className="splash-register">
          <p className="splash-register__label">OPERATIVE CREDENTIALS</p>
          <div className="splash-register__fields">
            <div className="splash-field">
              <input
                type="text"
                className={`splash-input ${errors.name ? 'splash-input--error' : ''}`}
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleStart()}
                aria-label="Your name"
                aria-required="true"
                aria-invalid={errors.name ? 'true' : undefined}
                aria-describedby={errors.name ? 'err-name' : undefined}
              />
              {errors.name && <span id="err-name" className="splash-field-error" role="alert">{errors.name}</span>}
            </div>
            <div className="splash-field">
              <input
                type="email"
                className={`splash-input ${errors.email ? 'splash-input--error' : ''}`}
                placeholder="name@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleStart()}
                aria-label="Email address"
                aria-required="true"
                aria-invalid={errors.email ? 'true' : undefined}
                aria-describedby={errors.email ? 'err-email' : undefined}
              />
              {errors.email && <span id="err-email" className="splash-field-error" role="alert">{errors.email}</span>}
            </div>
          </div>

          <fieldset className="splash-lanes">
            <legend className="splash-register__label">WHICH COPILOT DO YOU HAVE?</legend>
            {LANES.map(l => (
              <label key={l.id} className={`splash-lane ${lane === l.id ? 'splash-lane--active' : ''}`}>
                <input
                  type="radio"
                  name="lane"
                  value={l.id}
                  checked={lane === l.id}
                  onChange={() => setLane(l.id)}
                />
                <span className="splash-lane__label">{l.label}</span>
                <span className="splash-lane__hint">{l.hint}</span>
              </label>
            ))}
          </fieldset>
        </div>

        <motion.button
          className="btn-start"
          onClick={handleStart}
          whileHover={{ scale: 1.03, backgroundColor: '#0077ed', color: '#ffffff' }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.15 }}
        >
          REPORT FOR DUTY
        </motion.button>

        <p className="splash-warning">
          &bull; All mission files are fictional &bull; Never paste confidential work data into an unapproved tool &bull;
        </p>

        <div className="splash-footer">
          <span>TRAINING DOSSIER</span>
          <span>SHARE FREELY</span>
          <span>ALL STAFF WELCOME</span>
        </div>

      </div>
    </div>
  );
}
