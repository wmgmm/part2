import React, { useRef, useState } from 'react';

// Copyable prompt block. navigator.clipboard fails silently under some managed
// browser policies, so falls back to selecting the text for manual copy.
export default function PromptBox({ prompt, label = 'PROMPT', note, emphasis }) {
  const [state, setState] = useState('idle'); // idle | copied | select
  const preRef = useRef(null);

  const selectText = () => {
    const node = preRef.current;
    if (!node) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  };

  // null unless the emphasis is actually present, so a typo in the data degrades
  // to a plain prompt rather than losing text.
  const at = emphasis ? prompt.indexOf(emphasis) : -1;
  const split = at === -1 ? null : [prompt.slice(0, at), prompt.slice(at + emphasis.length)];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setState('copied');
    } catch {
      selectText();
      setState('select');
    }
    setTimeout(() => setState('idle'), 2000);
  };

  return (
    <div className="prompt-box">
      <div className="prompt-box__bar">
        <span className="prompt-box__label">{label}</span>
        <button type="button" className="prompt-box__copy" onClick={handleCopy}>
          {state === 'copied' ? 'COPIED ✓' : state === 'select' ? 'PRESS CTRL+C' : 'COPY PROMPT'}
        </button>
        <span className="sr-only" role="status">
          {state === 'copied' ? 'Prompt copied to the clipboard' : state === 'select' ? 'Prompt selected, press Ctrl+C to copy' : ''}
        </span>
      </div>
      {/* Emphasis is presentation only: handleCopy writes the plain `prompt`
          string, so the bold never reaches the clipboard, and the select-text
          fallback still selects exactly the same characters. */}
      <pre className="prompt-box__text" ref={preRef} tabIndex={0} aria-label={`${label}, prompt text`}>
        {split ? (
          <>
            {split[0]}
            <strong className="prompt-box__em">{emphasis}</strong>
            {split[1]}
          </>
        ) : (
          prompt
        )}
      </pre>
      {/* Outside the <pre> on purpose: not part of the prompt, and neither
          the clipboard write nor the select-text fallback picks it up. */}
      {note && <p className="prompt-box__note">{note}</p>}
    </div>
  );
}
