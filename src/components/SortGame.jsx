import React, { useState } from 'react';

const CHOICES = [
  { id: 'green', label: 'GREEN' },
  { id: 'amber', label: 'AMBER' },
  { id: 'red', label: 'RED' },
];

// Tap-sort: classify each item green/amber/red, instant feedback with reasoning.
export default function SortGame({ items }) {
  const [answers, setAnswers] = useState({}); // index -> chosen id

  const answer = (i, choice) => {
    setAnswers(prev => (prev[i] ? prev : { ...prev, [i]: choice }));
  };

  const correct = items.filter((item, i) => answers[i] === item.answer).length;
  const done = Object.keys(answers).length === items.length;

  return (
    <div className="sort-game">
      {items.map((item, i) => {
        const chosen = answers[i];
        const isCorrect = chosen === item.answer;
        return (
          <div key={i} className="sort-item">
            <p className="sort-item__text">{item.text}</p>
            {!chosen ? (
              <div className="sort-item__choices">
                {CHOICES.map(c => (
                  <button
                    key={c.id}
                    type="button"
                    className={`sort-choice sort-choice--${c.id}`}
                    onClick={() => answer(i, c.id)}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            ) : (
              <div
                className={`sort-item__result sort-item__result--${isCorrect ? 'right' : 'wrong'}`}
                role="status"
              >
                <span className="sort-item__badge">
                  {isCorrect ? '✓ CORRECT' : `✗ IT'S ${item.answer.toUpperCase()}`}
                </span>
                <span className="sort-item__why">{item.why}</span>
              </div>
            )}
          </div>
        );
      })}
      {done && (
        <p className="sort-game__score" role="status">
          {correct} of {items.length} sorted correctly.
          {correct === items.length
            ? ' Full clearance granted.'
            : ' Read the reasons above; they matter more than the score.'}
        </p>
      )}
    </div>
  );
}
