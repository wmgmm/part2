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
    (m.artifacts || []).forEach(a => {
      add(a.downloadPath, `${m.code} · ${a.filename}`);
      if (a.thumb) add(`${BASE}${a.thumb}`, `${m.code} · ${a.thumb}`);
    });
    // Steps can carry their own picture (Exercise 02) or their own download
    // (Exercise 05's brand skill), so the preflight has to look inside them too.
    (m.steps || []).forEach(s => {
      if (s.image) add(`${BASE}${s.image.src}`, `${m.code} · ${s.image.src}`);
      if (s.artifact) {
        add(s.artifact.downloadPath, `${m.code} · ${s.artifact.filename}`);
        if (s.artifact.thumb) add(`${BASE}${s.artifact.thumb}`, `${m.code} · ${s.artifact.thumb}`);
      }
      // The attach strip: its files are usually also in mission.artifacts, but
      // nothing enforces that, and attachExtra is an image nothing else points at.
      // A strip-only item (the reader's own file, the prompt above) has no
      // downloadPath; its icon is still a file to check.
      [...(s.attach || []), ...(s.backup?.attach || [])].forEach(a => {
        if (a.downloadPath) add(a.downloadPath, `${m.code} · ${a.filename}`);
        if (a.thumb) add(`${BASE}${a.thumb}`, `${m.code} · ${a.thumb}`);
      });
      if (s.attachExtra) add(`${BASE}${s.attachExtra.src}`, `${m.code} · ${s.attachExtra.src}`);
      Object.values(s.bodyIcons || {}).forEach(ic => add(`${BASE}${ic.src}`, `${m.code} · ${ic.src}`));
    });
  });
  add(`${BASE}${HERO_IMAGE}`, 'Gallery · hero illustration');
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
