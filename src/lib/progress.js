// Per-user mission progress in localStorage, keyed by normalised email so a
// refresh (or a shared machine) resumes the right person.

const USER_KEY = 'workshop_user_v1';

const progressKey = email => `workshop_progress_v1:${email.trim().toLowerCase()}`;

export function loadUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveUser(user) {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch {
    // storage unavailable; session just won't resume
  }
}

export function clearUser() {
  try {
    localStorage.removeItem(USER_KEY);
  } catch {
    // ignore
  }
}

export function loadProgress(email) {
  if (!email) return {};
  try {
    const raw = localStorage.getItem(progressKey(email));
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function markComplete(email, missionId, checkIn = {}) {
  const progress = loadProgress(email);
  progress[missionId] = { completedAt: new Date().toISOString(), ...checkIn };
  try {
    localStorage.setItem(progressKey(email), JSON.stringify(progress));
  } catch {
    // ignore
  }
  return progress;
}
