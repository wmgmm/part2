import React from 'react';
import MissionCard from './MissionCard.jsx';
import { MISSIONS } from '../data/missions.js';

export default function MissionGallery({ player, progress }) {
  const completedCount = MISSIONS.filter(m => progress[m.id]).length;

  return (
    <section className="evidence-section">
      <div className="directive">
        <div className="directive__top">
          <span className="directive__label">FIELD ORDERS</span>
        </div>
        <p className="directive__text">
          Welcome, {player.name}. Six missions, three AI tools, no timer. Start with
          Mission 02 (it runs a fifteen-minute job in the background while you work),
          then take the rest in any order. Each mission is a real workplace task:
          download its materials, work the steps in Copilot, Gemini or NotebookLM,
          and check in when you are done. Core steps fit inside a session; stretch
          steps are yours to take home.
        </p>
        <span className="directive__sig">— Christopher Gravitas, Training Officer, IT Services</span>
      </div>

      <div className="evidence-section__header">
        <h2 className="evidence-section__title">SIX FIELD MISSIONS</h2>
        <p className="mission-progress-line">
          {completedCount} of {MISSIONS.length} missions complete
        </p>
      </div>

      <div className="evidence-grid mission-grid">
        {MISSIONS.map(mission => (
          <MissionCard
            key={mission.id}
            mission={mission}
            completed={Boolean(progress[mission.id])}
          />
        ))}
      </div>
    </section>
  );
}
