import React from 'react';

// The strapline is orientation for someone arriving, so it stays on the splash
// and the exercise picker. On an exercise page it is redundant chrome above
// work someone is already doing, so `compact` drops it to the title alone.
export default function TaglineBar({ compact = false }) {
  return (
    <div className="tagline-bar">
      {/* The wordmark is the home link, the Apple and thematts convention.
          Underlined on hover so it reads as one; the small text link on each
          exercise page covers anyone who does not expect it to be. */}
      <a href="#/" className="tagline-bar__title">AI IN THE WORKPLACE PART 2</a>
      {!compact && (
        <>
          <span className="tagline-bar__sep">&mdash;</span>
          <span className="tagline-bar__text">Hands-on training with Copilot, Gemini and Gemini Notebook</span>
        </>
      )}
      {/* On an exercise page the way home lives in the bar, not on the page:
          Matt found a link above the title looked wrong however quiet it was.
          Spelled out rather than an icon so nobody has to guess. */}
      {compact && (
        <a href="#/" className="tagline-bar__home">&larr; Return to all exercises</a>
      )}
    </div>
  );
}
