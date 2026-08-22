import React, { useEffect, useState } from 'react';
import { MISSIONS, APPS, HERO_IMAGE } from '../data/missions.js';

const BASE = import.meta.env.BASE_URL;

// Facilitator preflight (?doctor): HEAD-checks every artifact and asset URL.
// Derived from the same data the site renders from, so it cannot drift.
function collectUrls() {
  const urls = new Map(); // url -> [labels]
  const add = (url, label) => {
    const labels = urls.get(url) || [];
    labels.push(label);
    urls.set(url, labels);
  };
  MISSIONS.forEach(m => {
    (m.artifacts || []).forEach(a => add(a.downloadPath, `${m.code} · ${a.filename}`));
  });
  add(`${BASE}${HERO_IMAGE}`, 'Gallery · stall illustration');
  Object.values(APPS).forEach(app => {
    if (app.logo) add(`${BASE}logos/${app.logo}`, `Logo · ${app.logo}`);
  });
  return [...urls.entries()].map(([url, labels]) => [url, labels.join(' / ')]);
}

export default function DoctorPanel() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const targets = collectUrls();
    Promise.all(
      targets.map(async ([url, label]) => {
        try {
          const res = await fetch(url, { method: 'HEAD', cache: 'no-store' });
          return { label, url, ok: res.ok, status: res.status };
        } catch {
          return { label, url, ok: false, status: 'network error' };
        }
      })
    ).then(setResults);
  }, []);

  const failures = results ? results.filter(r => !r.ok).length : 0;

  return (
    <div className="doctor">
      <h1 className="doctor__title">PREFLIGHT CHECK</h1>
      {!results && <p className="doctor__status">Checking {collectUrls().length} files…</p>}
      {results && (
        <p className={`doctor__status ${failures ? 'doctor__status--bad' : 'doctor__status--good'}`}>
          {failures === 0
            ? `All ${results.length} files respond. Run the session.`
            : `${failures} of ${results.length} files FAILED. Fix before the session.`}
        </p>
      )}
      <table className="doctor__table">
        <tbody>
          {(results || []).map(r => (
            <tr key={r.url} className={r.ok ? '' : 'doctor__row--bad'}>
              <td>{r.ok ? '✅' : '❌'}</td>
              <td>{r.label}</td>
              <td className="doctor__url">{r.url}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="doctor__foot">
        Also check by hand: Gemini Notebook slide-deck generation on a standard staff account,
        and Deep Research visibility. <a href={`${BASE}`}>Back to the site</a>
      </p>
    </div>
  );
}
