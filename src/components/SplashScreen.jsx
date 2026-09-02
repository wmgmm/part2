import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BASE = import.meta.env.BASE_URL;

export default function SplashScreen({ onStart }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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
    onStart({ name: name.trim(), email: email.trim() });
  };

  return (
    <div className="splash">
      <div className="splash-content">

        {/* Stamps row */}
        <div className="splash-hero">
          <div className="cover-brand-stamp cover-brand-stamp--main">THE MATTS PRESENT AI IN THE WORKPLACE PART 2</div>
          <div className="cover-brand-stamp cover-brand-stamp--uni">CARDIFF UNIVERSITY</div>
        </div>

        {/* Headline */}
        <h1 className="splash-headline">AI in the Workplace Part 2</h1>
        <p className="splash-deck">
          Two Real Policies, Seven Exercises, Skills You Will Use on Monday
        </p>
        <p className="splash-byline">
          Your new line manager: <strong>Chris Gravitas</strong>, Sustainability Engagement Officer
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
              <em>(sign in with your work account).</em>
            </span>
          </li>
          <li className="splash-step">
            <span className="splash-step__num">2</span>
            <span className="splash-step__text">
              <strong>Download the source files</strong> we will be using:{' '}
              <a href={`${BASE}placeholders/Sustainable-Futures-en.pdf`} target="_blank" rel="noopener noreferrer" className="splash-link">
                the sustainability plan
              </a>{' '}and{' '}
              <a href={`${BASE}placeholders/AI_Position_Statement.pdf`} target="_blank" rel="noopener noreferrer" className="splash-link">
                the AI position statement
              </a>. Both are public documents, safe to upload.
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

      </div>
    </div>
  );
}
