import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import SplashScreen from './components/SplashScreen.jsx';
import MissionGallery from './components/MissionGallery.jsx';
import MissionDetail from './components/MissionDetail.jsx';
import TaglineBar from './components/TaglineBar.jsx';
import DoctorPanel from './components/DoctorPanel.jsx';
import { getMission } from './data/missions.js';
import { recordAttendance } from './lib/leaderboard.js';
import { loadUser, saveUser, clearUser, loadProgress, markComplete } from './lib/progress.js';

const _params = new URLSearchParams(window.location.search);
const IS_DOCTOR = _params.has('doctor');

// Hash routing: '#/' is the mission gallery, '#/m3' opens mission m3.
// Plain anchors like '#main-content' (the skip link) are NOT routes.
function parseHash() {
  const hash = window.location.hash;
  if (!hash.startsWith('#/')) return null;
  return hash.slice(2) || null;
}

export default function App() {
  const [player, setPlayer] = useState(() => loadUser());
  const [progress, setProgress] = useState(() => loadProgress(loadUser()?.email));
  const [route, setRoute] = useState(() => parseHash());

  useEffect(() => {
    const onHashChange = () => {
      // Plain anchors (e.g. the '#main-content' skip link) scroll natively
      // and must not change the route or re-render the current view.
      const h = window.location.hash;
      if (h && !h.startsWith('#/')) return;
      setRoute(parseHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Route housekeeping. An unknown route (#/m7, a typo) goes home instead of
  // showing the gallery under a lying URL. Every route change starts at the
  // top, moves focus into main so keyboard and screen-reader users follow the
  // page change, and names the exercise in the tab title. The first run is the
  // page load, which keeps its natural focus and scroll.
  const firstRoute = useRef(true);
  useEffect(() => {
    if (route && !getMission(route)) {
      window.location.replace('#/');
      return;
    }
    const m = route ? getMission(route) : null;
    document.title = m
      ? `${m.code ? `${m.code} ` : ''}${m.title} · AI in the Workplace Part 2`
      : 'AI in the Workplace Part 2';
    if (firstRoute.current) {
      firstRoute.current = false;
      return;
    }
    window.scrollTo(0, 0);
    document.getElementById('main-content')?.focus({ preventScroll: true });
  }, [route]);

  // The skip link focuses main directly rather than changing the hash, so
  // #main-content never enters history and Back still goes where expected.
  const skipToMain = e => {
    e.preventDefault();
    const el = document.getElementById('main-content');
    if (el) {
      el.focus();
      el.scrollIntoView();
    }
  };

  const handleStart = ({ name, email }) => {
    const user = { name, email };
    saveUser(user);
    setPlayer(user);
    setProgress(loadProgress(email));
    recordAttendance(user);
  };

  const handleSignOut = () => {
    clearUser();
    setPlayer(null);
    window.location.hash = '#/';
  };

  const handleComplete = (missionId, checkIn) => {
    setProgress(markComplete(player.email, missionId, checkIn));
  };

  const pageVariants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -24, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  if (IS_DOCTOR) return <DoctorPanel />;

  const mission = player && route ? getMission(route) : null;

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main-content" className="skip-link" onClick={skipToMain}>Skip to main content</a>
      <TaglineBar compact={Boolean(player)} />
      <main id="main-content" tabIndex={-1}>
      <AnimatePresence mode="wait">
        {!player && (
          <motion.div key="splash" {...pageVariants}>
            <SplashScreen onStart={handleStart} />
          </motion.div>
        )}

        {player && !mission && (
          <motion.div key="home" {...pageVariants} className="active-layout">
            <MissionGallery progress={progress} />
            <footer className="session-footer">
              Signed in as {player.name}.{' '}
              <button type="button" className="session-footer__signout" onClick={handleSignOut}>
                Not you?
              </button>
            </footer>
          </motion.div>
        )}

        {player && mission && (
          <motion.div key={mission.id} {...pageVariants}>
            <MissionDetail
              mission={mission}
              lane={player.lane}
              completed={Boolean(progress[mission.id])}
              onComplete={handleComplete}
            />
          </motion.div>
        )}
      </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
