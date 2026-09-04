import React, { useRef, useState } from 'react';

// Copyable prompt block. navigator.clipboard fails silently under some managed
// browser policies, so falls back to selecting the text for manual copy.
export default function PromptBox({ prompt, label = 'PROMPT', note }) {
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
      </div>
      <pre className="prompt-box__text" ref={preRef}>{prompt}</pre>
      {/* Outside the <pre> on purpose: not part of the prompt, and neither
          the clipboard write nor the select-text fallback picks it up. */}
      {note && <p className="prompt-box__note">{note}</p>}
    </div>
  );
}
