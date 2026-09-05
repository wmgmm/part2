import React from 'react';

// The strapline is orientation for someone arriving, so it stays on the splash
// and the exercise picker. On an exercise page it is redundant chrome above
// work someone is already doing, so `compact` drops it to the title alone.
export default function TaglineBar({ compact = false }) {
  return (
    <div className="tagline-bar">
      <span className="tagline-bar__title">AI IN THE WORKPLACE PART 2</span>
      {!compact && (
        <>
          <span className="tagline-bar__sep">&mdash;</span>
          <span className="tagline-bar__text">Hands-on training with Copilot, Gemini and Gemini Notebook</span>
        </>
      )}
    </div>
  );
}
